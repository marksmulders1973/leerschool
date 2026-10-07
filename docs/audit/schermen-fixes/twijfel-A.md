# Twijfels groep A — kern-schermen (7 okt 2026)

## Huisregels / prijs
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

## Contact / persoonsnaam
- **src/components/ActieVoorwaarden.jsx:137** — "Vragen? Via de tips-pagina in de app." Bij actievoorwaarden hoort een contactadres. Voorstel: "Vragen? Mail naar hallo@leerkwartier.app."
- **src/shared/ui/MeldFout.jsx:48** "✅ Dank je! Mark kijkt ernaar." / **SteunTik.jsx:47** "Thank you! Mark will look at it." / **WishesBoard.jsx:211** "De maker (Mark, die deze app bouwt)". Persoonsnaam in de app. Het is geen contactadres, maar wel prominent. Voorstel: "De maker kijkt ernaar." Op het tipsbord kan de naam passend zijn.
- **src/components/HomeV3.jsx:484** — de zwevende WhatsApp-knop linkt naar `wa.me/31000000000`, een nepnummer. Dat is een dode link op de route home-v3. Voorstel: de knop weghalen of naar hallo@ laten wijzen.

## Getallen die kunnen verouderen
- **src/components/HomePage.jsx:1095-1097** — "500+ bezoekers per maand · 7.000+ oefenvragen · 48 echte examens". In september waren er 1.066 echte apparaten, dus "500+" is te bescheiden. De andere twee getallen niet gecontroleerd.
- **src/features/onboarding/StartKwartier.jsx:193** — "Er zijn 346 leerpaden voor groep 1 tot en met 8 en de brugklas." Telling niet gecontroleerd. Ook "leerpaden" is jargon (komt veel voor, alleen geteld).
- **src/components/StudentHome.jsx:654** — "6 echte VMBO-examens · 38 vragen met uitleg". Niet gecontroleerd.
- **index.html:443 (verborgen)** — "100+ schoolmethodes", FAQ "meer dan 100 Nederlandse schoolmethodes". Claim niet gecontroleerd.
- **src/components/LoadingOverlay.jsx:11/14** — "🔍 Echte toetsvragen zoeken op het internet…", "Vragen samenstellen uit echte bronnen…". Klopt dit bij AI-generatie? Mogelijk een te stellige belofte.

## Taal / zinsbouw (groter dan een kleine swap)
- **src/components/HomePage.jsx:757** (welkomstzin, Mark bekijkt hem al) — de huidige bron zegt al "…tot je kind het écht snapt." Dat klopt grammaticaal. Alternatief dat minder herhaalt ("Snapt je kind… snapt"): "Snapt je kind iets niet? Dan leggen we het uit op drie niveaus, tot het kwartje valt." of "…net zo lang tot het écht duidelijk is."
- **src/components/RondleidingPage.jsx:27** — "begrijpen het concept achteraf bovengemiddeld vaak. Dat is het verschil met snel-doorklikken op een ander oefenplatform." Een ongemeten claim, terwijl de zin ervoor zegt "We meten dat nog". Voorstel: tweede zin schrappen.
- **src/components/RondleidingPage.jsx:207** — "Geen volwassenen die over je schouder hangen." Leest wat negatief richting de ouder of verzorger. Voorstel: "In je eigen tempo."
- **src/features/onboarding/StartKwartier.jsx:237** — "Elke plek stelt één vraag. Dit is Vonk, in 3D." Onduidelijk: Vonk is de bijlesdocent. Is het park "Vonk in 3D"? Voorstel: "Zo oefen je met Vonk, maar dan in 3D."
- **src/features/onboarding/StartKwartier.jsx:257-258** — "in de stijl van Cito, IEP, DIA en AMN". Route 8 ontbreekt, en index.html schrijft "Dia". Aanbiedersnamen zijn feiten, dus niet gewijzigd.
- **src/components/StudentHome.jsx:436/1122** — "Beste streak ooit", "Speel vandaag om je streak van X te bewaren!". Engels woord "streak" en "Speel" in een leercontext. Voorstel: "reeks" en "Oefen vandaag om je reeks van X dagen te bewaren!". Wordt mogelijk app-breed gebruikt.
- **src/components/HomePage.jsx:1207** — WhatsApp-deeltekst "Samen slim worden met leuke vragen! Oefenen voor school was nog nooit zo leuk." Oud en wervend, en noemt de slogan niet. Voorstel: "Ken je Leerkwartier al? Gratis oefenen voor de Doorstroomtoets, met uitleg op 3 niveaus. Een kwartier per dag leren, een leven lang slimmer."
- **src/shared/ui/ExamenBronBanner.jsx:120 / ExamenPadBanner.jsx:72** — "Letterlijk overgenomen uit het Cito-examenboekje." Het gaat om VMBO-examens van het CvTE, gemaakt door Cito. Klopt feitelijk, maar "Cito" naast de Doorstroomtoets kan verwarren. Voorstel: "uit het officiële examenboekje".
- **src/components/GratisLesmateriaal.jsx:139**, **HomePage.jsx:256**, **MetDankAan.jsx:151** — "Kon je … niet …" laat het onderwerp weg. Spreektaal, dus niet aangepast. Eventueel "Dat lukte niet. Probeer het zo nog eens."

## Niet beoordeeld (lesinhoud)
- UspDemo-vraag (¾ van 20) met wrongHints, startKwartier.js-vragen, herhaalNieuwkomers en de uitleg-teksten in niveauIndicatie (1F/2F/1S) zijn lesinhoud of inhoudelijke feiten. Die heb ik niet beoordeeld.
- Turkse, Roemeense, Arabische en Oekraïense vertalingen in SteunTik/KwartierTreden: geen taalcheck gedaan.
