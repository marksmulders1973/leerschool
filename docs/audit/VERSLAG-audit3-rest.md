# Verslag audit ronde 3 — rest (6 okt 2026)

Vakinhoudelijke nakijkronde in vier delen (A–D), plus een extra deel E en een nameting.
- **Branch:** `audit3/rest`, vanaf main `1320352` (v924). Eén commit per groep paden; nooit naar main.
- **Laatste inhoudelijke commit:** `2821431`. De commit met dit verslag (v925) komt daar bovenop.
- **Werkwijze:** 17 parallelle nakijkers voor A–C, 2 onafhankelijke nakijkers voor D, 4 voor E en 2 voor de nameting. Elke vraag is zelf opgelost. Werkwijze en verslagvorm volgen `VERSLAG-cloud-1.md`.

**Gecontroleerd door de coördinator:**
- **Tellingen per pad en per groep:** met een script vergeleken met main (aantal checks, gewijzigde checks, verwijderde checks). Elke telling in dit verslag kwam overeen met het script, op één aanvulling van de coördinator na: wiskunde.klas3 is daardoor 17 → 18.
- **Deel C en E:** gevalideerd. Elke `oud` komt precies 1× voor, alles is toe te passen, het bestand blijft importeerbaar, het aantal vragen per groep is gelijk en er zijn geen dubbele opties of ongeldige antwoord-indexen.
- **Elk gewijzigd .js-bestand:** slaagt voor `node --check`. `ruimtemeetkunde.jsx` is geladen via een esbuild-loader.
- **`npm run audit:vragen`:** voor en na 0 meldingen.
- **`npm run build`:** slaagt (inclusief prebuild en de 15-min-gate).

**Telwijze:**
- *Hersteld* = het aantal vragen (checks) waarin iets veranderd is. Eén vraag met meerdere veldwijzigingen telt als 1.
- Wijzigingen in stap-uitleg buiten de checks staan bij de herstellingen met "(buiten checks)", maar tellen niet mee.
- In deel E zijn `taal.groep4` en `natuur.groep4` aliassen van groep3 (`vak.groep4 = vak.groep3`). Die tellen niet apart mee.

---

## Deel A — VO exact (rest + tweede ronde)

Volledig nagekeken: chemische-reacties-scheikunde, machten, differentieren, vlakke-figuren, elektromagnetisme-havo-vwo, mol-stoichiometrie-havo-vwo, lineaire-formules.
Opnieuw nagekeken, met de bekende punten hersteld:
- parabolen, ruimtemeetkunde, periodiek, coordinatenstelsel, goniometrie, breuken, atoombouw-scheikunde, kwadratische-vergelijkingen, rekenen-met-letters, organische-chemie-havo-vwo, zuren-basen-havo-vwo, logaritmen-exponentieel-havo-vwo;
- breuken stap 10 heeft nu precies één goede optie;
- organisch: «C=C of C≡C»;
- decimaalpunten zijn komma's geworden;
- formules uit de opties gehaald;
- voorrekenende hints herschreven.

### Lijst van paden

| pad/groep | gecontroleerd | hersteld | verwijderd |
|---|---|---|---|
| chemische-reacties-scheikunde | 35 | 9 | 0 |
| mol-stoichiometrie-havo-vwo | 25 | 10 | 0 |
| atoombouw-scheikunde | 35 | 7 | 0 |
| organische-chemie-havo-vwo | 25 | 8 | 0 |
| zuren-basen-havo-vwo | 25 | 7 | 0 |
| machten | 35 | 4 | 0 |
| differentieren | 34 | 12 | 0 |
| elektromagnetisme-havo-vwo | 25 | 7 | 0 |
| periodiek | 35 | 11 | 0 |
| logaritmen-exponentieel-havo-vwo | 25 | 12 | 0 |
| vlakke-figuren | 25 | 19 | 0 |
| lineaire-formules | 34 | 20 | 0 |
| parabolen | 41 | 21 | 0 |
| coordinatenstelsel | 34 | 17 | 0 |
| ruimtemeetkunde | 32 | 31 | 0 |
| goniometrie | 34 | 13 | 0 |
| breuken | 33 | 6 | 0 |
| kwadratische-vergelijkingen | 32 | 7 | 0 |
| rekenen-met-letters | 25 | 9 | 0 |

### Herstellingen (was → nu, reden)

Opmerking vooraf: in deze vijf bestanden staan geen decimale punten in tekst die gebruikers zien. Alle "d.ddd"-treffers zijn duizendtallen (5.730, 50.000), en die zijn correct in de Nederlandse notatie. `node --check` is groen en het aantal checks is gelijk gebleven. `npm run audit:vragen` geeft "0 meldingen", zonder regels voor deze paden.

#### chemische-reacties-scheikunde · gecontroleerd 35 · hersteld 9 · verwijderd 0
- stap 2 vraag 2: hint bij «Geen van beide» was «Indices mag je niet veranderen.» → nu «Niet — één van de twee getallen hoort bij de stof zelf.» (hint gaf het antwoord)
- stap 3 vraag 1: optie was «7 (2 H + 1 S + 4 O)» → nu «7». Hints waren «Te veel — alleen 7.» / «Bijna goed maar niet 8 — controleer 2+1+4.» → nu «Te veel — tel per element nog eens na.» / «Net te veel — een element zonder index telt als 1 atoom.» (de optie bevatte de berekening, de hints noemden het antwoord of rekenden het voor)
- stap 3 vraag 3: optie was «O₂ (twee-atomig)» → nu «O₂». Hint was «Zuurstof komt als paar voor in de natuur — O₂.» → nu «Niet — komt zuurstof als los atoom voor?» (de optie viel op door de toelichting, de hint gaf het antwoord)
- stap 5 vraag 2: niveaus waren «Coëfficiënten aanpassen. / Indices laten. / Vóór, niet achter.» → nu «Eerst atomen tellen. / Tel per element links en rechts. / Eerst tellen.» (de uitleg sprak het antwoord "eerst tellen" tegen)
- stap 6 vraag 1: optie was «1, 3, 2 (N₂ + 3 H₂ → 2 NH₃)» → nu «1, 3, 2». Hint was «…niet kleinste — deel door 2.» → nu «Wel kloppend, maar dit zijn niet de kleinste gehele getallen.» (de optie bevatte de uitwerking, de hint rekende het antwoord voor)
- stap 8 vraag 1: hint was «Wel verandering, energie komt vrij.» → nu «Niet — bij deze reactie verandert er wel iets aan de energie.» (hint gaf het antwoord)
- stap 9 vraag 1: optie was «2, 1, 2 (2 Mg + O₂ → 2 MgO)» → nu «2, 1, 2» (de optie bevatte de uitwerking)
- stap 9 vraag 4: hint was «Niet als enkel atoom — als paar.» → nu «Niet — komt zuurstof als los atoom voor?». Theorie was «Sommige gassen komen als paar: … Br₂, I₂» → nu «Sommige elementen komen als paar: …» (hint gaf het antwoord; Br₂ en I₂ zijn geen gassen)
- stap 9 vraag 5: optie was «Verkleurd» → nu «Stoffen verkleuren» (grammaticaal sloot de optie niet aan op de vraag)

#### mol-stoichiometrie-havo-vwo · gecontroleerd 25 · hersteld 10 · verwijderd 0
- stap 1 vraag 1: hint bij 60 g/mol was «Niet — let op koolstof-deel.» → nu «Niet — tel het aantal O-atomen nog eens.» (60 = C + 3 O, dus de hint wees de verkeerde kant op)
- stap 1 vraag 3: hint bij 2,8 L was «Onmogelijk.» → nu «Niet — gebruik het molair volume bij STP.» (de oude hint klopte niet en hielp niet)
- stap 2 vraag 1: vraag was «Balanceer: ** ___ H₂ … — kleinste gehele coëfficienten?» → nu «Balanceer: **___ H₂ … — kleinste gehele coëfficiënten?». Hint bij «2, 2, 2» was «Niet — niet kleinste.» → nu «Niet — tel de O-atomen links en rechts.» (de spatie na ** brak de vetgedrukte tekst, er zat een spelfout in, en de hint was fout: 2 H₂ + 2 O₂ → 2 H₂O klopt helemaal niet, het gaat niet om "niet kleinste")
- stap 2 vraag 4: hint bij «2 NaCl» was «Niet — geen Na+Cl los.» → nu «Niet — waar blijven de H- en O-atomen?» (de oude hint sloeg niet op deze optie)
- stap 3 vraag 1: hint bij «6 mol» was «Niet — H₂ is limiterend.» → nu «Niet — kijk naar de molverhouding H₂ : NH₃.» (de oude hint was niet relevant)
- stap 3 vraag 2: hint was «Niet — 1:1 verhouding.» → nu «Niet — controleer de molverhouding CaCO₃ : CO₂.» (hint gaf de oplossing)
- stap 3 vraag 4: hint bij «O₂» was «Niet — er is veel meer O₂ dan nodig.» → nu «Niet — reken uit hoeveel mol O₂ je nodig hebt voor 2 mol H₂.» (hint gaf het antwoord)
- stap 3 vraag 5: vraag was «Bij ideale verbranding 1 mol methaan» → nu «Bij volledige verbranding van 1 mol methaan». Hint was «Niet — 1:1.» → nu «Niet — kijk naar de molverhouding CH₄ : CO₂.» ("ideaal" is hier geen vakterm; de hint gaf de oplossing)
- stap 4 vraag 4: optie was «Bevriezen» → nu «Opgelost». Hints waren «Niet — Fe geeft elektronen.» / «Onzin.» → nu «Niet — neemt Fe elektronen op of staat het ze af?» / «Niet — er verandert iets aan de elektronen van Fe.» (de optie liep grammaticaal niet; de hint gaf het antwoord)
- stap 5 vraag 2: hint bij «Naar links» was «Niet — minder mol = rechts in dit geval.» → nu «Niet — aan welke kant staan minder mol gasdeeltjes?» (hint gaf het antwoord)

#### atoombouw-scheikunde · gecontroleerd 35 · hersteld 7 · verwijderd 0
- (buiten checks) stap 5 SVG: het vakje van H (waterstof) had de metaal-kleur → nu de kleur voor niet-metaal (feitfout)
- stap 7 vraag 2: vraag was «Welk metaal vormt vaak Na⁺?» → nu «Welk element vormt het ion Na⁺?» (chloor en stikstof zijn geen metalen; via "metaal" kon je ze wegstrepen)
- stap 9 vraag 1: vraag was «Wat is **wet van behoud van atomen**?» → nu «Wat zegt de …». Optie was «Bij reacties verdwijnen alle atomen» → nu «Er ontstaan nieuwe soorten atomen», met als hint «Niet — bij een chemische reactie verandert het soort atoom niet.» (de oude optie was bijna een kopie van optie 2)
- stap 9 vraag 2: hint was «Rook bestaat uit deeltjes — bij volledige verbranding krijg je CO₂ + H₂O.» → nu «Niet — bij volledige verbranding ontstaat geen rook; welke atomen zitten in methaan en zuurstof?» (hint gaf het antwoord)
- stap 10 vraag 4: hint bij «−2» was «Maar één elektron weg = +1.» → nu «Niet — hoeveel elektronen gaan er weg, en welke lading heeft een elektron?» (hint gaf het antwoord)
- stap 10 vraag 11: vraag was «Welk deeltje bevindt zich in de kern…» → nu «Welke deeltjes bevinden zich in de kern…» (het antwoord noemt twee deeltjes)
- stap 10 vraag 12: hint bij «elektronen» was «Bij neutraal atoom = aantal protonen.» → nu «Niet — het aantal elektronen kan veranderen (bij ionen), het atoomnummer niet.» (hint gaf het antwoord)
- stap 10 vraag 13: hint was «Niet primair.» → nu «Niet — je telt op, je vermenigvuldigt niet.» (de oude hint was misleidend en zei niets)

#### organische-chemie-havo-vwo · gecontroleerd 25 · hersteld 8 · verwijderd 0
- stap 1 vraag 1: hint was «Niet — koolstof is stabiel 4.» → nu «Niet — koolstof maakt steeds hetzelfde vaste aantal bindingen.» (hint gaf het antwoord)
- stap 1 vraag 2: hint was «Niet — onmogelijk (3 H + 1 C zou C 1 binding open laten).» → nu «Niet — tel hoeveel bindingen koolstof moet maken.» (hint rekende het antwoord voor)
- stap 1 vraag 3: opties waren «H (waterstof)», «C», «O», «N» → nu «… C (koolstof)», «O (zuurstof)», «N (stikstof)» (alleen het goede antwoord had een toelichting en viel daardoor op)
- stap 1 vraag 5: hints waren «Niet — ook C=C en C≡C.» / «Niet — ook enkele.» / «Niet — max 3 (octetregel).» → nu «Niet — denk aan etheen en ethyn.» / «Niet — denk aan ethaan.» / «Niet — koolstof kan maar een beperkt aantal elektronenparen met één atoom delen.» (de hints gaven samen het antwoord)
- stap 2 vraag 4: optie was «2 (n-butaan + iso-butaan)» → nu «2». Hint was «Niet — minstens 2.» → nu «Niet — denk ook aan een vertakte keten.» (de optie bevatte de uitleg, de hint wees naar het antwoord)
- stap 4 vraag 2: hint was «Niet — onruikbaar = gevaar.» → nu «Niet — zou je CO dan op tijd opmerken?» (hint gaf het antwoord "reukloos")
- stap 4 vraag 3: theorie was «onverzadigde verbindingen (=C= of ≡C≡)» → nu «(C=C of C≡C)» (verkeerde notatie)
- stap 5 vraag 5: hints waren «Niet — biologisch (uit organisch).» / «Niet — uit suiker, niet methaan.» → nu «Niet — waar wijst het voorvoegsel 'bio' op?» / «Niet — bio-ethanol wordt niet uit aardgas gemaakt.» (de hints gaven het antwoord "plantaardige bron/suiker")

#### zuren-basen-havo-vwo · gecontroleerd 25 · hersteld 7 · verwijderd 0
- (buiten checks) stap 4 uitleg: was «Equivalentiepunt: … waarop zuur en base evenredig zijn» → nu «… in gelijkwaardige hoeveelheden (volgens de reactievergelijking) zijn samengebracht» ("evenredig" betekent iets anders)
- stap 1 vraag 1: hint bij «OH⁻-donor» was «Niet primair — Arrhenius-zicht.» → nu «Niet — dat lijkt op de oude definitie van een base (Arrhenius).» (de oude hint was vaag en suggereerde een zuurdefinitie)
- stap 2 vraag 5: optie was «2 (was 1)» → nu «2» (de toelichting maakte het goede antwoord herkenbaar)
- stap 4 vraag 1: optie was «Punt waarop zuur en base evenredig zijn» → nu «Punt waarop zuur en base in gelijkwaardige hoeveelheden zijn toegevoegd». Hint was «Niet — begin = pH onbekend.» → nu «Niet — aan het begin is er nog niets toegevoegd.» (de optie was onjuist geformuleerd, de hint was onlogisch)
- stap 4 vraag 2: hint bij «0,1 M» was «Niet — meer volume nodig.» → nu «Niet — er was méér NaOH nodig dan het volume HCl; wat zegt dat over de concentratie?» (de oude hint was onduidelijk)
- stap 4 vraag 5: hints waren «Wel — vaste relatie.» / «Niet — overal in zwak-zuur-titratie.» / «Wel — bekende relatie.» → nu richtinggevende hints over de verhouding [HA] : [A⁻] en de buffervergelijking (de hints gaven het antwoord, en "overal" is feitelijk fout: pH = pKa geldt alleen op het halfequivalentiepunt)
- stap 5 vraag 1: hint bij «12» was «Niet — 0,01 M zou 12 zijn.» → nu «Niet — controleer de exponent van [OH⁻].» (hint rekende het antwoord voor)
- stap 5 vraag 2: hint bij «Geen» was «Wel — NH₃ kan H⁺ opnemen.» → nu «Niet — NH₃ is een base; wat ontstaat er als een base een H⁺ opneemt?» (de hint gaf het antwoord bijna letterlijk)

#### machten · gecontroleerd 35 · hersteld 4 · verwijderd 0
- stap 6 vraag 1: was «Maar (x²)⁵ is macht-van-macht: 2 · 5» / «(x²)⁵ = x^(2·5)» / «x³² is veel te groot. (x²)⁵ = x^(2·5) = x¹⁰.» → nu richtinggevende hints zonder berekening («wat doe je dan met de exponenten?», «die doet ook mee», «schrijf uit als x²·x²·x²·x²·x² en tel de factoren») (hints rekenden het antwoord voor / gaven x¹⁰ letterlijk)
- stap 10 vraag 1: was «Één nul te weinig/te veel» + nogSimpeler «100k» → nu «Eén nul …» + «100.000» (spelling: hoofdletter-É is Eé; informele notatie)
- stap 13 vraag 4: was «… (a²)⁴ = a⁸ en (b³)⁴ = b¹².» → nu «Wat geeft dat voor a en voor b?» (hint gaf het antwoord a⁸b¹² weg)
- stap 13 vraag 9: was «Tegenovergesteld.» (bij optie a²) / «Niet — negatief teken in waarde.» / «Bestaat wel.» → nu «Dat is a · a, exponent +2.» / «de min in de exponent maakt het getal niet negatief» / «Bestaat wel (als a ≠ 0).» (hint klopte inhoudelijk niet)
- stap 9 (buiten checks): uitleg «0.5 / 0.04 / 0.001» en SVG-teksten «0.5, 0.04, 0.001» → «0,5 / 0,04 / 0,001» (decimale komma)

#### differentieren · gecontroleerd 34 · hersteld 12 · verwijderd 0
- stap 1 vraag 1: was «1/7: Dat zou de loodrechte lijn zijn» → nu «Waarom zou je de helling omkeren? Kijk welke letter in y = ax + b de helling is.» (feitfout: loodrechte helling is −1/7)
- stap 2 vraag 1: was optie «(0, 0) — de top» → nu «(0, 0)» (toevoeging "de top" verraadde het antwoord)
- stap 6 vraag 1: was «… met de exponent (4): 6·4 = 24.» → nu «De coëfficiënt 6 blijft niet zomaar staan — wat doe je ermee volgens a·xⁿ → a·n·xⁿ⁻¹?» (hint rekende 24 voor)
- stap 8 vraag 1: was «Vergeet de coëfficiënt 3 en 2 niet vermenigvuldigen met de exponent.» → nu «Vergeet niet de coëfficiënten 3 en 2 met de exponent te vermenigvuldigen.» (grammatica)
- stap 10 vraag 1: was «… 2x - 6 = 0.» / «Voor minimum: f'(x) = 0 → x = 3.» + uitlegPad «Top van x²-6x+8» → nu «Stel f'(x) = 0 en los op» / «zoek waar f'(x) = 0» + «Het dal van x² − 6x + 8» (hint gaf antwoord x = 3; dalparabool heeft geen top)
- stap 11 vraag 1: was «f'(1) = 2, en door (1,1): 1 = 2·1 + b → b = -1.» → nu «de helling klopt, maar gaat deze lijn wel door (1, 1)? Bepaal b met het raakpunt.» (hint rekende het antwoord voor)
- stap 12 vraag 2: was bij optie 9 «Vergeet de +1 niet — afgeleide van de losse x-term?» → nu «Je hebt x³ niet gedifferentieerd — wat is de afgeleide van x³?» (9 = 2³ + 1; hint paste niet bij de fout)
- stap 12 vraag 3: was «Voor minimum: f'(x) = 0 → 2x - 8 = 0 → x = 4.» → nu «Voor een minimum stel je f'(x) = 0 en los je op.» (hint gaf antwoord)
- stap 12 vraag 4: was «f'(3) = 6, niet 3.» → nu «bereken f'(3) met f'(x) = 2x.» (hint gaf de helling weg)
- stap 14 vraag 2: was bij optie 9 «Dat is de functiewaarde f(1)» (f(1) = 4, niet 9) en bij 12 «… ook de -6x-term invullen» → nu «Controleer de afgeleide van -3x²: heb je de exponent 2 als factor meegenomen?» / «vul x = 1 ook in de andere term in» (feitfout; hint verklapte f'(x))
- stap 14 vraag 7: was bij optie 3x «Coëfficiënt mist.» → nu «De exponent gaat maar 1 omlaag.» (hint klopte niet: 3x heeft wél de coëfficiënt)
- stap 14 vraag 11: was «Tegenovergesteld.» → nu «Een constante verandert niet — hoe steil is die lijn dan?» (onzinnige hint)

#### elektromagnetisme-havo-vwo · gecontroleerd 25 · hersteld 7 · verwijderd 0
- stap 2 vraag 4: was «Niets dan massa is fout.» → nu «Onvolledig — ook andere grootheden tellen mee.» (onduidelijke zin)
- stap 2 vraag 5: was nogSimpeler «I of B → A.» → nu «I of B omkeren» (verwijzing naar optieletter klopt niet bij geschudde opties)
- stap 3 vraag 1: was optie «Nul — flux verandert niet» → nu «Nul» (uitleg in de optie verraadde het antwoord)
- stap 4 vraag 2: was hint «zou wel kunnen, maar verkeerde grootheden» + nogSimpeler «= A.» → nu «N_p is een aantal windingen, geen spanning» + «U_s·I_s» (verwarrende hint; optieletter-verwijzing)
- stap 4 vraag 5: was optie «Nee — geen flux-verandering, geen inductie» → nu «Nee» (uitleg in de optie verraadde het antwoord)
- stap 5 vraag 1: was optie «Nul — F=BIL·sin(0)=0» → nu «Nul» (optie bevatte de berekening)
- stap 5 vraag 4: was «Radio + microgolf + zichtbaar licht + röntgen — alle EM» en «Alle hierboven + geluid» → nu «Radio, microgolf, zichtbaar licht en röntgen» en «Radio, licht, röntgen én geluid» ("alle EM" verraadde antwoord; "hierboven" werkt niet bij geschudde opties)

#### periodiek · gecontroleerd 35 · hersteld 11 · verwijderd 0
- stap 5 vraag 1: was «… amplitude is de halve uitslag — deel dat door 2.» → nu «Is de amplitude de hele uitslag, of de uitslag vanaf de evenwichtslijn?» (hint rekende antwoord voor)
- stap 7 vraag 1: was bij y = 6 «Je hebt het verschil gedeeld … Probeer (max + min)/2.» en bij y = 5 «tel ze op en deel door 2» → nu «Je hebt max en min opgeteld — maar het gemiddelde vraagt nog één stap. Welke?» / «De evenwichtslijn is het gemiddelde van max en min.» (hint klopte niet bij de fout: 6 = 8 + (−2); hints rekenden voor)
- stap 8 vraag 1: was uitlegPad «b = 0.5» → nu «b = 0,5» (decimale komma)
- stap 9 vraag 1: was «… probeer (max+min)/2.» → nu «De evenwichtslijn is het gemiddelde van max en min.» (hint rekende voor)
- stap 11 vraag 1: was optie «0.5 seconden» + uitlegPad «T = 0.5 sec» → nu «0,5 seconden» / «0,5 sec» (decimale komma)
- stap 12 vraag 1: was «Max = evenwicht + amplitude — tel c en a bij elkaar op.» → nu «Waar ligt de evenwichtslijn, en hoe ver komt de grafiek daarboven?» (hint rekende 2 + 5 voor)
- stap 12 vraag 2: was bij 1440° «je deelt 360° door b, niet andersom» → nu «je hebt 360° met b vermenigvuldigd. Hoe hangen periode en b samen?» (hint paste niet: 1440 = 360·4)
- stap 12 vraag 3: was «Amplitude = halve uitslag — deel je antwoord door 2.» → nu «Is de amplitude de hele uitslag, of de uitslag vanaf de evenwichtslijn?» (hint rekende antwoord voor)
- stap 13 vraag 2: was «Geluidsgolf: …» + optie «0.001 Hz» + hint «Deel 360° door b voor de periode; frequentie is dan 1 gedeeld door die periode.» + «(luidheid)» + uitlegPad «T = 0.02 sec» → nu «Trilling: …», «0,001 Hz», «Hoe hangen b, de periode en de frequentie samen?», «2 is de amplitude.», «0,02 sec» (1 Hz is geen hoorbaar geluid; decimale komma; hint rekende voor)
- stap 13 vraag 3: was «sin(x − 90°) is niet hetzelfde als cos(x − 90°): cos(x − 90°) = sin(x).» → nu «sin(x − 90°) = −cos(x) — is dat hetzelfde als cos(x − 90°)?» (hint gaf het antwoord weg)
- stap 14 vraag 2: was optie «b = 180 (graden per sec)» + optie «b = 0.5» + hint «deel 360° door de periode om b te vinden» → nu «b = 180», «b = 0,5», «hoe hangen b en de periode samen?» (eenheid alleen bij goede optie verraadde antwoord; decimale komma; hint rekende voor)
- stap 5 (buiten checks): uitleg «y = 0.5·sin(x): amplitude = 0.5 (max +0.5, min -0.5)» + SVG «a=0.6» → komma's
- stap 8 (buiten checks): uitleg «b = 0.5», «sin(0.1x) → b = 0.1» → komma's
- stap 11 (buiten checks): uitleg «0.987» (2×) + SVG «~12.5h» → «0,987» / «~12,5 h»

#### logaritmen-exponentieel-havo-vwo · gecontroleerd 25 · hersteld 12 · verwijderd 0
- stap 1 vraag 1: was «Niet — controleer berekening 2⁷.» → nu «Niet — 16 is maar 2⁴. Wat doe je met de exponenten als je machten vermenigvuldigt?» (hint noemde het antwoord)
- stap 1 vraag 2: was «Niet — voor 5≠0 is bepaald.» → nu «Niet — voor a ≠ 0 is a⁰ wel bepaald.» (onvolledige zin)
- stap 2 vraag 3: was uitlegPad-titel «Compound formula» → nu «Samengestelde rente» (Engels restje)
- stap 2 vraag 4: was «Niet — formule is 70/r.» → nu «70 is het getal uit de vuistregel zelf, nog niet de verdubbelingstijd.» (hint gaf de berekening 70/7)
- stap 2 vraag 5: was optie «y nadert 0 (verval)» → nu «y nadert 0» (toelichting alleen bij goede optie)
- stap 3 vraag 1: was optie «32/2» (= 16, zelfde waarde als optie «16») + hint «Onzin.» → nu «6» + «Niet — controleer met de machten van 2.» (dubbele afleider)
- stap 3 vraag 3: was optie «3 (= log 1000)» → nu «3» (optie bevatte de berekening)
- stap 4 vraag 1: was optie «64× (= 2⁶)» → nu «64×» (optie bevatte de berekening)
- stap 4 vraag 2: was «Niet — dat is 1/λ, niet ln(2)/λ.» → nu «Niet — dat is 1/λ. Welke factor hoort er nog bij in de formule voor de halveringstijd?» (hint gaf formule waarmee antwoord direct volgt)
- stap 4 vraag 5: was uitlegPad «Pre-historisch (laat-ijstijd)» → nu «Prehistorisch (late ijstijd)» (spelling)
- stap 5 vraag 1: was bij ~€600 «Net iets meer.» → nu «Dat is 5 × 4% gewone rente. Vergeet je de rente op rente niet?» (hint verraadde dat €608 het antwoord is)
- stap 5 vraag 2: was opties «7·3=21» (plaksel van «21», met berekening) en «ln(e^10)» (= 10, óók goed!) + hint «Idem.» / «vraag voor getal» → nu «e^10» en «ln(10)» met hints «dat staat binnen de ln; pas de ln nog toe» / «de e mag je niet zomaar weglaten» (twee goede opties)

#### vlakke-figuren · gecontroleerd 25 · hersteld 19 · verwijderd 0
- stap 2 vraag 1: hints waren «Specifiek: de loodrechte (kortste) afstand» / «Het gaat om de loodrechte afstand» / «die is langer dan loodrecht» → nu denkvragen («Welk lijnstuk van P naar de lijn is het kortst?», «Onder welke hoek moet je de lijn raken…») (hints gaven het antwoord letterlijk)
- stap 4 vraag 1: optie was «P ligt op de lijn AB zelf» → nu «P ligt altijd op de lijn AB zelf» (het midden van AB ligt wél op beide lijnen → was deels ook waar); hints «Op de middelloodlijn is het gelijk» e.d. → nu richting zonder antwoord (spiegel-as / ligt de lijn aan één kant?)
- stap 6 vraag 1: optie was «180° en -100°» (onzin-afleider) → nu «160° elk» met hint «Je hebt de hoek verdubbeld…» (plaksel/onzinoptie)
- stap 7 vraag 1: hint was «op de bissectrice zijn de afstanden juist gelijk» → nu «Een bissectrice is de spiegel-as van de hoek. Wat betekent dat voor de afstanden…?» (gaf antwoord)
- stap 8 vraag 1: hints eindigden met «Voor ingeschreven (cirkel): bissectrices.» → nu vraag welke lijnen overal even ver van twee zijden liggen (gaf antwoord, 2×)
- stap 9 vraag 1: hint was «specifiek de **overstaande** zijde» → nu «er is precies één zijde die hoek A níet als eindpunt heeft. Welke?» (gaf antwoord)
- stap 10 vraag 1: optie was «In een verhouding 2:1 (2 vanaf hoek, 1 vanaf midden zijde)» → nu «In de verhouding 2 : 1, vanaf de hoek gerekend» (lengte verraadde het antwoord); hints «wel in 2:1» / «De verhouding is 2:1» → nu denkvragen (gaven antwoord)
- stap 11 vraag 1: hint was «Andersom — hoogtelijn is loodrecht, zwaartelijn naar het midden» → nu «Kijk naar de namen: welke heeft met 'hoogte' te maken — en hoe meet je een hoogte?» (gaf antwoord)
- stap 13 vraag 1: hint was «…vermenigvuldigen, niet optellen — én × ½» → nu «Bij oppervlakte tel je de diagonalen niet op — kijk nog eens naar de formule voor een ruit» (rekende voor)
- stap 14 vraag 1: hint bij 60 was «eerst 6 + 10, dan × 4, dan ÷ 2» → nu «Je hebt 6 × 10 gedaan. … wat doe je er wél mee?» (rekende voor + paste niet bij de fout)
- stap 16 vraag 1: hint bij 60 was «eerst de twee evenwijdige zijden optellen, dan × hoogte, dan × ½» → nu «een trapezium heeft twee evenwijdige zijden — gebruik je ze allebei?» (rekende voor)
- stap 17 vraag 2: hints klopten niet met de afleiders: 9,4 (= π·r) had «diameter ipv straal of ½ vergeten», 18,8 (= π·d) had «je bent dichtbij»; 28,3-hint gaf laatste stap («nog ÷ 2») → nu «π × r gedaan, straal moet in het kwadraat» / «π × d = omtrek» / «Is de zandbak een hele cirkel?» (hint-feitfout + voorrekenen)
- stap 17 vraag 3: optie «≈ 67,8 m²» → «≈ 67,7 m²» (96 − 28,3 = 67,7, rekenfout in afleider); hint «OPgeteld — moet aftrekken» → «Wordt het grasveld groter of kleiner door de zandbak?»
- stap 17 vraag 4: hints «Niet — niet optellen.» / «Niet — dat is de helft.» / «Niet.» → volwaardige denkprikkels (6 + 4, ÷ 2 hoort bij driehoek, formule nalopen) (kale/lege hints)
- stap 17 vraag 5: hints «Niet — alle 4.» / «Niet.» / «Niet.» → denkprikkels (scheef vierkant; is er een zijde die afwijkt?) (gaf antwoord / leeg)
- stap 17 vraag 6: hints «Niet — diameter.» / «Niet.» → «Omtrek = π × diameter. Wat is de diameter bij straal 5?» / «π gedeeld door de straal…» (kaal/leeg)
- stap 17 vraag 7: hints «Niet.» «Niet.» → «π × r gedaan, straal in het kwadraat» / «Reken r² nog eens na» (leeg)
- stap 17 vraag 8: hints «Dat is parallellogram.» «Niet — wel parallel.» «Te weinig.» → volzinnen met richting (kaal)
- stap 17 vraag 9: hint «Vergeet ÷2.» → «Bij een driehoek is er nog een stap»; «Niet.» → «Kijk nog eens naar de formule voor een driehoek» (gaf antwoord / leeg)
- stap 17 (buiten checks): explanation rekende de drie vragen letterlijk voor (96 m², 14,1 m², 81,9 m²) → aanpak nu in woorden + oefenvoorbeeld met andere maten (tuin 10 × 6, diameter 4 → 60 / 6,3 / 53,7 m²) (uitleg-vóór-antwoord gaf antwoord weg)

#### lineaire-formules · gecontroleerd 34 · hersteld 20 · verwijderd 0
- stap 2 vraag 1: hint was «Je bent de + 2 vergeten. Reken: 3·4 + 2.» → nu «Je bent iets vergeten. Kijk nog eens wat er na 3x in de formule staat.» (rekende voor)
- stap 3 vraag 1: optie «y = 1, 1, 1, 1 (geen verandering)» was óók lineair (y = 1, helling 0) → vervangen door «y = 10, 7, 5, 4»; alle opties zonder het meegeleverde sprong-commentaar («(sprong +3 telkens)» e.d.), vraag verduidelijkt met x = 0, 1, 2, 3; hint «Lineair betekent gewoonlijk een constante stijging» (wiskundig onjuist) → «reken de sprongen eens uit» (twee opties goed + opties bevatten de berekening)
- stap 4 vraag 1: hint was «Maar er staat +7.» → «Staat er hier een getal zonder x?» (gaf antwoord)
- stap 5 vraag 1: hints «maar 5 is nog steiler» / «5 is veel steiler» → «Is er nog een formule met een grotere a?» (gaf antwoord)
- stap 10 vraag 1: hint was «haal eerst 3 van beide kanten af en deel daarna door 2» → «Controleer: klopt 2 · 7 + 3 = 11? Werk stap voor stap…» (rekende voor)
- stap 13 vraag 1: hint was «€10 is de vaste maandprijs (b). €0,20 is per minuut (a…)» → «Welk bedrag betaal je per minuut — en hoort dat dus bij de x?» (gaf antwoord)
- stap 15 vraag 1: vage hints «niet op orde gebracht» / «Zonder de balansmethode kom je hier niet uit» → «halverwege gestopt — staat x al alleen?» (bij 12) en «−3 aan de verkeerde kant weggewerkt» (bij 2) (hints pasten niet bij de fout)
- stap 17 vraag 1: optie «p = 1,80 + 4k» was dezelfde formule als «p = 4k + 1,80» → nu «p = 4 + 1,80» met hint «Waar is de k gebleven?» (dubbele afleider)
- stap 17 vraag 3: hints bij 19 en 12 klopten niet (19 = startbedrag opgeteld; 12 = rit uit vorige vraag) → «afgetrokken of erbij opgeteld?» / «12 km was de vorige rit; wat haal je eerst van €31 af?»
- stap 17 vraag 4: «Niet — +3 vergeten.» «Niet.» «Niet.» → denkprikkels per fout (2·4 / 4+3 / 2+3) (kaal/leeg)
- stap 17 vraag 5: «Dat is constante (start).» «Niet.» «Niet.» → volzinnen (3+5 / 3·5) (leeg)
- stap 17 vraag 6: optie «Startwaarde (waar lijn y-as snijdt)» → «Snijpunt met de y-as» (lengte verraadde antwoord); hints «Dat is a.» «Niet.» «Niet.» → volzinnen
- stap 17 vraag 7: «Niet — vergeet niet −4 eerst.» «Niet.» «Te hoog.» → controle-hints («klopt 3 · 7 + 4 = 19?», «15 is 19 − 4. Staat x al alleen?»)
- stap 17 vraag 8: «Dat is y-waarde.» «Schuin omhoog.» «Wel bepaald.» → volzinnen
- stap 17 vraag 9: «Plus i.p.v. min.» → «Kijk goed naar het teken vóór de 7.» (gaf antwoord); «Op x-as.» / «Niet snijpunt y-as.» → volzinnen
- stap 17 vraag 10: opties «Lijn snijdt y-as BOVEN oorsprong» / «Onder oorsprong» … → vier gelijkvormige opties zonder hoofdletter-nadruk (vorm verraadde antwoord); hints volzinnen
- stap 17 vraag 11: «x-verschil.» «y-verschil totaal.» «Andersom.» → volzinnen
- stap 17 vraag 12: vraag «hebben in een grafiek altijd?» → «De grafiek van een lineaire functie is altijd een…?»; optie «Knik» → «Lijn met een knik»; hints volzinnen
- stap 17 vraag 13: «Niet.» «Lijn, niet punt.» → volzinnen (gaf antwoord / leeg)
- stap 17 vraag 14: «Bij evenwijdige.» «Bij identieke.» «Wel bepaald.» → volzinnen
- stap 17 (buiten checks): explanation rekende alle drie de taxivragen letterlijk voor (p = 1,80k + 4, €25,60, 15 km) → aanpak in woorden + oefenvoorbeeld met ander tarief (€3 + €2/km → p = 2k + 3, €23, 13 km)

#### parabolen · gecontroleerd 41 · hersteld 21 · verwijderd 0
- stap 2 vraag 1: hint «4² is 4 · 4. Hoeveel is 4 keer 4?» → «Het kleine 2-tje zegt: vermenigvuldig het getal met zichzelf.» (rekende voor)
- stap 2 vraag 2: hints «Probeer nog eens: 6 keer 6.» / «Reken: 6 · 6.» → uitleg van de fout (6 + 2) en van het 2-tje (rekende voor)
- stap 3 vraag 1: hint «Doe gewoon: 3 + 5.» → «Wat betekent het plus-teken in de regel?» (rekende voor)
- stap 4 vraag 1: hints «dus 7 · 7» / «Reken nog eens: 7 keer 7» / «7² is gewoon 7 · 7» → fout benoemen zonder de som (rekende voor)
- stap 6 vraag 1: hint «Het eerste getal in (5, 2) is gewoon de stap naar rechts» → «één van de twee getallen geeft direct de stap naar rechts. Welke?» (gaf antwoord)
- stap 8 vraag 1: vraag was x = -2 terwijl de staptekst «-2 · -2 = 4» en de tabel (x = -2 → 4) letterlijk tonen → nu x = -4, opties 16 / -16 / -4 / 4; hint «-2 · -2 geeft een plus» → «wat krijg je als je twee negatieve getallen vermenigvuldigt?»; uitlegPad aangepast (uitleg-vóór-antwoord gaf antwoord)
- stap 9 vraag 1: hint «Schrijf ze allemaal op: -3, -2, -1, 0, 1, 2, 3 — en tel.» → «Schrijf alle gehele x-waarden van -3 tot en met 3 op een rij en tel ze nauwkeurig» (somde het antwoord op)
- stap 11 vraag 1: hint «Een parabool heeft geen knikken» → «Zag je ergens een punt waar de lijn plotseling van richting wisselde?» (gaf antwoord)
- stap 12 vraag 1: opties «In het midden van de armen» en «Op de y-as» waren (deels) ook waar (hint gaf dat zelf toe) → «Aan het eind van een arm» / «Op de x-as»; hint «Vaag — bekijk het plaatje: waar markeer ik de top?» vervangen (meerdere opties goed)
- stap 13 vraag 1: hint «Reken: -1 · (3 · 3).» → «het 2-tje is een macht: bereken eerst x², pas daarna het minteken» (rekende voor)
- stap 18 vraag 1: uitlegPad «vermenigvuldigen met 0.5» → «0,5» (decimaalpunt)
- stap 20 vraag 1: hint «Het minteken vergeten?…» → «Kijk goed naar het teken vóór de 4. Optellen of aftrekken?» (gaf antwoord)
- stap 21 vraag 1: hint «-6 is iets anders dan +6» → «Hoort dat teken bij c of niet?» (gaf antwoord)
- stap 21 vraag 2: hints «Maar er staat +9 — dus omhoog!» / «+9 verschuift omhoog» → vragen naar wat de +9 doet (gaf antwoord)
- stap 23 vraag 1: hint «Het min-teken vergeten? -8 is iets anders dan +8» → «Schuift de top daardoor omhoog of omlaag?» (gaf antwoord)
- stap 25 vraag 2: hint «…gedeeld door 1 in plaats van 2a = 2. Reken nog: 4/2 = ?» → «Je bent vergeten te delen door 2a. Wat is 2a in deze formule?» (rekende voor)
- stap 26 vraag 1: hint «daarom heet het ook **nul**punt» → «een nulpunt ligt altijd op dezelfde lijn… welke y-waarde hoort daarbij?» (gaf antwoord)
- stap 28 vraag 2: hint «…hij snijdt twee keer» → «Ligt de top van y = x² − 36 op de x-as?» (gaf antwoord)
- stap 31 vraag 1: vraag ging over y = x² − 4, precies de parabool die de staptekst volledig uitwerkt → nu y = x² − 9 (opties top (0, -9), nulpunten ±3); uitlegPad mee aangepast, «nogSimpeler: Eerste optie» (klopt niet bij geschudde opties) → «Dal, top omlaag, twee nulpunten» (uitleg gaf antwoord)
- stap 32 vraag 1: idem, y = x² + 6x was volledig voorgerekend in de staptekst → nu y = x² − 8x, top (4, -16), afleiders (-4, -16) / (4, 16) / (8, 0) met passende hints; uitlegPad nagerekend en aangepast
- stap 32 vraag 2: idem → nulpunten van y = x² − 8x: «x = 0 en x = 8» (afleiders 0 en -8 / 4 alleen / geen); uitlegPad aangepast
- stap 2 (buiten checks): voorbeelden «x = 4 → 16» en «x = 7 → 49» (= antwoorden stap 2 vr 1 en stap 4 vr 1) → x = 8 → 64 en x = 9 → 81
- stap 15 (buiten checks): voorbeeld «y = x² → a = 1» (= vraag 2 letterlijk) → «y = −x² → a = −1»
- stap 24 (buiten checks): voorbeeld «y = x² + 5 → b = 0» (= vraag 2 letterlijk) → «y = 3x² − 2 → a = 3, b = 0, c = −2»
- stap 27 (buiten checks): vuistregel-voorbeeld «y = x² − 16 → x = ±4» (= vraag 1 letterlijk) → «y = x² − 100 → x = ±10»

#### coordinatenstelsel · gecontroleerd 34 · hersteld 17 · verwijderd 0
- stap 1 vraag 1: uitlegPad «Battleship: letter = x. Cijfer = y.» geschrapt (feitelijk onjuist: bij Zeeslag/Battleship staan de letters meestal bij de rijen)
- stap 6 vraag 1: hints «Beide getallen zijn negatief = links én omlaag» / «…y is ook negatief = omlaag» / «x is negatief = links» → richting zonder antwoord («De richting naar links klopt. Kijk nog eens naar het teken van y») (gaven antwoord)
- stap 7 vraag 1: optie «Tegen de klok in, vanaf rechtsboven (I → II → III → IV)» veel langer dan de rest → vier gelijkwaardige opties («Met de klok mee, vanaf rechtsboven», «Willekeurig, per boek anders»); hint «Andersom — kwadranten worden tegen de klok in genummerd» → «Ligt kwadrant II daarna rechtsonder of linksboven?» (lengte + hint verrieden antwoord)
- stap 13 vraag 1: Battleship-vraag («B staat voor de x-as») was feitelijk twijfelachtig (bij het originele spel staan de letters langs de zijkant = rijen) → nu spreadsheet-cel «B5»: «Welke richting geeft de letter B aan?» (Horizontaal (zoals de x-as) / Verticaal / diepte / kleur); hints + uitlegPad mee aangepast (feitfout/dubbelzinnig)
- stap 14 vraag 5: hints «Niet — x is +.» / «Niet — beide +.» / «Niet — y is +.» → vragen per kwadrant («Kwadrant II ligt links van de y-as. Is x hier negatief?») (gaven antwoord)
- stap 14 vraag 6: «Dat is y-as.» «Niet — beide niet 0.» «Niet — geen 0.» → volzinnen
- stap 14 vraag 8: optie «III (linksonder)» terwijl de andere opties kaal waren («I», «II», «IV») → «III» (vorm verraadde antwoord); hints volzinnen
- stap 14 vraag 9: «X-as.» «Niet.» «Niet.» → volzinnen (leeg)
- stap 14 vraag 10: hint «Niet — andersom.» bij (6, 3) → «Vul x = 6 in de formule in. Welke y hoort daar dan bij?» (gaf antwoord (3, 6))
- stap 14 vraag 11: «Andersom.» «Verschil x.» «Verschil y.» → volzinnen
- stap 14 vraag 12: «Verticaal.» «3D.» «Wel.» → volzinnen
- stap 14 vraag 13: «Niet — x is eerst.» «Tweede.» «Tweede.» → volzinnen
- stap 14 vraag 14: hint «X-as snijpunt.» bij (2, 0) was fout ((2, 0) ligt niet op y = x + 2; snijpunt x-as is (−2, 0)) → «(2, 0) ligt op de x-as. Op de y-as is x altijd 0.»; overige hints volzinnen (feitfout in hint)
- stap 14 vraag 15: optie «I (rechtsboven)» terwijl rest kaal → «I»; hints «X moet negatief.» e.d. → volzinnen (vorm verraadde antwoord)
- stap 14 vraag 16: «Niet door oorsprong.» «Horizontaal.» «Andere helling.» → controle-hints (vul x = 0 / x = 1 in)
- stap 14 vraag 17: «Helling onbestaanbaar.» «Helling >0.» «Helling <0.» → volzinnen
- stap 14 vraag 18: optie «√4» (= 2, zelfde waarde als optie «2») → «5»; hint «Niet — alleen x verschilt 4.» → «2 is de y-waarde van beide punten… Kijk naar de x-waarden» (gaf antwoord + dubbele afleider)
- stap 5 (buiten checks): voorbeeld «zoek het punt (3, -2)» (= vraag letterlijk) → (4, -1)
- stap 6 (buiten checks): voorbeeld «(-4, -3)» (bijna gelijk aan vraag (-4, -2)) → (-2, -5)
- stap 8 (buiten checks): «Examen-vraag: In welk kwadrant ligt (-3, 4)? → II» (= vraag letterlijk) → (-5, 2)
- stap 13 (buiten checks): «(48.85°N, 2.29°O)» → «(48,85° NB, 2,29° OL)» (decimaalkomma)

#### ruimtemeetkunde · gecontroleerd 32 · hersteld 31 · verwijderd 0
Alle antwoorden nagerekend; die kloppen. Hersteld: hints die het antwoord voorrekenen of verklappen ("Het getal klopt", "Reken: 7 × 4", "= 120"), en hints die bij de verkeerde afleider horen.
- stap 1 vraag 1: was «Reken 5 keer 4» / «Het getal klopt, maar de eenheid niet…» → nu «Hoe reken je het aantal vakjes uit?» / «Kijk naar de eenheid: is oppervlakte een gewone lengte in cm, of een aantal vierkantjes?» (hint verklapte antwoord)
- stap 2 vraag 1: was «Het getal klopt, maar de eenheid is m²…» / «Reken nog eens: 8 × 6 = ?» → nu «Kijk naar de eenheid: meet je oppervlakte in m of in m²?» / «Controleer je vermenigvuldiging nog eens.» (antwoord verklapt)
- stap 2 vraag 2: was «Hoe kom je aan 36? Reken nog: 9 × 9 = ?» → nu «36 is de omtrek (vier zijden van 9 bij elkaar). Hoe bereken je de oppervlakte?» (rekende voor; 36 is de omtrek)
- stap 3 vraag 1: was «Het getal klopt, maar … eenheid moet cm² zijn» → nu «Kijk naar de eenheid: welke eenheid hoort bij een oppervlakte?» (verklapte antwoord)
- stap 4 vraag 1: was «…omtrek is alle zijden bij elkaar: 6 + 4 + 6 + 4» / «Reken: 2 × 6 + 2 × 4 = ?» → nu zonder de som (rekende voor)
- stap 5 vraag 1: was «oppervlakte = 10 × 5 = 50 cm²» / «Het getal klopt…» → nu «30 is de omtrek, en oppervlakte meet je niet in gewone cm» / «Kijk naar de eenheid…» (antwoord voorgezegd)
- stap 5 vraag 2: was «Het getal lijkt OK, maar de eenheid niet» → nu «Kijk naar de eenheid: omtrek is een lengte. Past cm² daarbij?» (verklapte antwoord)
- stap 6 vraag 1: was «…= 2 × 3,14 × 4» / «Probeer: 2 × 3,14 × 4 = ?» → nu verwijzing naar de formule zonder invullen (rekende voor)
- stap 7 vraag 1: was «…je kunt er niets in stoppen. Een dobbelsteen wel.» → nu zonder de laatste zin (verklapte antwoord)
- stap 9 vraag 1: was «Maar inhoud is 3D: 5 × 5 × 5» / «Het getal klopt…» → nu «hoe vaak vermenigvuldig je met de zijde?» / «Kijk naar de eenheid…» (rekende voor/verklapte)
- stap 10 vraag 1: was «…ook nog × hoogte (× 2)» / «Het getal klopt…» → nu «Welke afmeting mist er nog?» / «Kijk naar de eenheid: past cm² (2D) bij inhoud?» (verklapte)
- stap 11 vraag 1: was «De formule is gewoon π × r² × h = 3,14 × 4 × 5» → nu «Kijk nog eens naar de formule: staat daar een 2 in?» (rekende voor)
- stap 12 vraag 1: was «Probeer 3,14 × 3²» → nu «Welke formule hoort bij de oppervlakte van een cirkel?» (rekende voor)
- stap 13 vraag 1: was «Je hebt ⅓ × oppervlakte zónder × hoogte gedaan … = ⅓ × 16 × 6» → nu «Hoe kom je aan 24? Bereken eerst de oppervlakte van het grondvlak…» (onjuiste foutdiagnose: ⅓ × 16 is geen 24; rekende ook voor)
- stap 14 vraag 1: was «Je hebt ⅓ × π × r × h gedaan…» / «Reken nog: ⅓ × 3,14 × 6² × 4…» → nu «Je hebt π × r × h gedaan. Maar het is r² — en vergeet ook de ⅓ niet.» / «Te klein — 24 is gewoon 6 × 4…» (75,4 = π·r·h, niet ⅓·π·r·h = 25,1; rekende voor)
- stap 15 vraag 1: was «Met factor 3 wordt elke afmeting 3 keer zo groot» / «De breedte gaat gewoon × 3» → nu «Wat betekent factor 3?» / «9 = 3² hoort bij de oppervlakte…» (verklapte antwoord)
- stap 16 vraag 1: was «k = beeld ÷ origineel = 20 ÷ 5» → nu «k = beeld ÷ origineel» (rekende voor)
- stap 16 vraag 2: was optie «k = -4», «= 4 ÷ 8 = ½», «8 ÷ 4 ÷ 2 … of beeld − origineel» → nu «k = −4» (minteken), «beeld ÷ origineel», «Je hebt origineel − beeld gedaan…» (voorgerekend; foutdiagnose klopte niet: 8 − 4 = origineel − beeld)
- stap 17 vraag 1: was «Reken: 7 × 4» → weggehaald (rekende voor)
- stap 18 vraag 1: was «vermenigvuldig je: 7 × 5» / «Te groot. Reken nog: 7 × 5 = ?» → nu «plus 5 of keer 5?» / «Te groot — je hebt met 10 vermenigvuldigd…» (rekende voor)
- stap 19 vraag 1: was «12 × 4» / «vier keer zo groot» → nu «vermenigvuldig je met k» / «Wat doet een vergroting met alle zijden?» (verklapte)
- stap 20 vraag 1: was «k = 3 → k² = 9. Dan 5 × 9 = ?» → nu alleen «oppervlakte gaat met k²» (rekende voor)
- stap 21 vraag 1: was «k³ = 8. Dan 100 × 8 = ?», «k³ = 8», «8× zo groot bij k=2» → nu zonder getallen (rekende voor)
- stap 22 vraag 1: was «k² = 5² = ?», «k² = 25», «5 × 5 = 25» → nu zonder uitkomst; «k² betekent niet k × 2 — wat betekent het kwadraat?» (verklapte)
- stap 22 vraag 2: was «k³ = 5×5×5», «= 125» → nu zonder uitkomst (verklapte)
- stap 23 vraag 1: was drie hints met «30 ÷ ¼ = 120» / «½ × ½ = ¼ m²» → nu «Hoeveel tegels passen er in één m²?» / «gebruik de oppervlakte van één tegel» / «hoeveel m² is ½ m bij ½ m?» (verklapte antwoord)
- stap 24 vraag 1: was «20³ = 8000. Dan 100 × 8000 = ?» / «× k³ = 8000 keer» → nu zonder getallen (rekende voor)
- stap 25 vraag 1: was «50 × 30 × 40», «60 000 ÷ 1000 = 60 L», «Reken: … = 60 L» → nu richtinggevend; 6 L-hint: «je hebt door 10 000 gedeeld in plaats van door 1000» (antwoord verklapt)
- stap 26 vraag 1: was «r = d / 2 = 60 / 2 = 30» (2×) → nu «Is de straal groter of kleiner dan de diameter?» / «De straal is de helft van de diameter.» (verklapte)
- stap 26 vraag 2: was «Inhoud = π × 30² × 80» / «Reken: π × 900 × 80 ≈ 226.000» → nu «Kijk nog eens naar de formule» / «je bent π en het kwadraat vergeten (60 × 80)…» (rekende voor)
- stap 26 vraag 3: was «Je hebt de inhoud niet door 1000 gedeeld» (bij 2.260) / «Helemaal niet door 1000 gedeeld» (bij 22.600) → nu «door 100 gedeeld in plaats van door 1000» / «door 10 gedeeld in plaats van door 1000» (foutdiagnose klopte niet)

#### goniometrie · gecontroleerd 34 · hersteld 13 · verwijderd 0
- stap 2 vraag 1: was «denk welke tegenover de rechte hoek ligt» → nu «Welke zijde hangt niet af van de hoek die je kiest?» (verklapte antwoord)
- stap 3 vraag 1: was hint «Andersom — sin = tegenover / schuin.»; uitlegPad «Sin = boven ÷ langste» → nu «Wat staat bij SOS boven de deelstreep?»; «Sin = tegenover ÷ langste» (verklapte antwoord; "boven" klopt niet)
- stap 6 vraag 1: was «Cos werkt: cos α = aanliggend / schuin.» → nu «Er is wél een verhouding die precies deze twee zijden gebruikt…» (antwoord voorgezegd)
- stap 8 vraag 1: was «Inverse functies werken — kies één daarvan.» → nu «Welke geeft een hoek als uitkomst?» (verklapte antwoord)
- stap 9 vraag 1: was «Niet delen — denk aan TOA: tan α = tegenover / aanliggend.» → nu «cos α gebruikt de schuine zijde. Welke verhouding gebruikt alleen tegenover en aanliggend?» (verklapte antwoord)
- stap 10 vraag 1: was «controleer sin 45° (~0,71) × 8» → nu «sin 45° is geen 0,5. Zoek sin 45° op en reken opnieuw.» (rekende voor)
- stap 11 vraag 2: was «sin verward — sin 35° ≈ 0,5736, NIET 0,71» (bij 5,7 m) → nu «Controleer je berekening: vermenigvuldig 6,0 met sin 35°.» (foutdiagnose klopte niet: 0,71 × 6 = 4,3)
- stap 11 vraag 3: was «Je hebt 6,0 / cos 35° gedaan» (bij 10,5 m) en «Niet — reken 6,0 × 0,8192 ≈ 4,9» (bij 7,3 m) → nu «Dat is 6,0 gedeeld door sin 35°…» en «Je hebt 6,0 / cos 35° gedaan…» (6/cos 35° = 7,3, niet 10,5; tweede hint rekende voor)
- stap 11 vraag 4: was «**SOSCASTOA** — wat staat SOH voor?» → nu «**SOH-CAH-TOA** (de Engelse geheugentruc) — waar staat SOH voor?» (vraag en geheugentruc pasten niet bij elkaar)
- stap 11 vraag 6: was hints «dat is sin 45° of cos 45°» (bij √2) en «tan 30° is kleiner dan 1» (bij 0,5) → nu «√2 is bij 45° de verhouding schuine zijde : rechthoekszijde…» en «0,5 is sin 30°…» (feitfout: sin 45° = ½√2; tweede hint zinloos)
- stap 11 vraag 7: was «Pythagoras: a²+b²=? wanneer a=3, b=4» (antwoord «c=5») → nu «rechthoekszijden a = 3 en b = 4. Hoe lang is de schuine zijde c?» (dubbelzinnig: a²+b² is 25, ook als optie aanwezig)
- stap 11 vraag 15: was optie «3,46 cm (6×tan 30°)» → nu «3,46 cm» (optie bevatte de berekening)
- stap 11 vraag 19: was opties «Verkeerd geheugen» / «Onbruikbaar» / «Niet relevant» → nu drie plausibele verkeerde koppelingen (sin/cos verwisseld, tan met schuine zijde, breuken omgedraaid) + passende hints (alleen het goede antwoord was inhoudelijk)

#### breuken · gecontroleerd 33 · hersteld 6 · verwijderd 0
- stap 1 vraag 1: was optie «8/3» (zelfde als «⁸⁄₃»), hints «… Dus 3/8.» / «… Dus ⅜.» → nu optie «⅝», hints «Wat hoort bovenaan…?» / «⅝ is het deel dat je níét hebt gegeten…» (dubbele optie; hints gaven antwoord)
- stap 4 vraag 1: was opties «⁴⁄₁₂, ⅔, ²⁄₆, Beide ²⁄₆ en ⁴⁄₁₂» (answer 3) → nu «⁴⁄₁₀, ⅔, ²⁄₆, ³⁄₆» (answer 2) met passende hints; uitlegPad aangepast (drie goede opties)
- stap 10 vraag 1: was opties «¼, ³⁄₁₂ (= ¼), ²⁄₇, Beide ¼ en ³⁄₁₂» (answer 3) → nu «¼, ⁴⁄₇, ¹³⁄₁₂, ⁹⁄₄» (answer 0) met hints per foutsoort (drie goede opties)
- stap 12 vraag 1: was «²⁄₅ is alleen het resultaat van ½ × ⅖» → nu «Reken ½ × ⅖ nog eens na … en vergeet daarna de + ⅓ niet.» (rekenfout: ½ × ⅖ = ⅕)
- stap 15 vraag 1: was hint «Eerst vermenigvuldigen: ⅓ × ⅙ = ¹⁄₁₈. Dan … = ¹⁰⁄₁₈.» → nu «⁵⁄₆ is ½ + ⅓ — maar welke bewerking moet je eerst doen: × of +?» (rekende antwoord voor)
- stap 15 vraag 13: was hints «Niet primair.» / «Helft.» → nu «reken 3 ÷ 5 uit en zet dat om naar procent» / «Hoeveel procent is ⅕? En ⅗ is drie keer zoveel.» (onzin-hint; "Helft" verklapte dat het antwoord 2 × 30 is)

#### kwadratische-vergelijkingen · gecontroleerd 32 · hersteld 7 · verwijderd 0
- stap 2 vraag 1: was «Maar er staat duidelijk −7x in.» → nu «Staat er een x-term in deze vergelijking?» (verklapte antwoord)
- stap 8 vraag 1: uitlegPad woorden: sleutel `tekst` → `uitleg` (de uitleg werd niet getoond)
- stap 10 vraag 1: was opties «5 en 1» én «1 en 5» → nu «5 en 1» en «−2 en −3» (twee keer dezelfde optie)
- stap 13 vraag 2: was «…Beide tijden zijn het antwoord.» → nu «Hoe vaak komt de bal langs 15 m: alleen op weg omhoog, of ook op weg omlaag?» (verklapte antwoord)
- stap 13 vraag 6: was opties «x²+bx schrijven als x(x+b)», «Optellen», «Aftrekken», «Delen» → nu «Een uitdrukking schrijven als een product (iets × iets)» + plausibele afleiders (uitwerken, naar één kant brengen, herleiden); hints aangepast (hints gaven de definitie en dus het antwoord; afleiders niet plausibel)
- stap 13 vraag 12: was optie «11» met hint «niet plus» → nu «49» met «het is b² mín 4ac, niet plus» (de hint paste niet bij de afleider: 25 + 24 = 49)
- stap 13 vraag 13: was «x² + 6x + 9 = (x + 3)². Welke methode?» met «abc-formule» (hint: «Werkt ook») → nu «… kun je schrijven als (x + 3)². Hoe heet zo'n vorm?» met opties Volkomen kwadraat / Standaardvorm / Verschil van twee kwadraten / Lineaire vorm (meer dan één goed antwoord)

#### rekenen-met-letters · gecontroleerd 25 · hersteld 9 · verwijderd 0
- stap 1 vraag 1: was «Vergeet niet de constante (de losse 7) als derde term.» → nu «Heb je de losse 7 ook meegeteld? Ook een getal zonder letter is een term.» (verklapte antwoord)
- stap 3 vraag 1: was «…x²-termen apart.» → nu zonder x² (die komen in de opgave niet voor)
- stap 4 vraag 2: hints bij «7x − 8» en «5x − 15» stonden verkeerd om/klopten niet → nu «Niet optellen — de 5 betekent vermenigvuldigen…» en «Heb je de 2 binnen de haakjes meegenomen?…»
- stap 5 vraag 1: was «…−3 wordt **+3**» / «x → −x én −3 → +3» → nu «Wat gebeurt er met het teken vóór de 3?» / «De min draait élk teken om — ook dat van de x.» (antwoord voorgezegd)
- stap 8 vraag 1: was «…(−5)² = +25.» → nu «Kijk naar het teken van de laatste term: kan een kwadraat negatief zijn?» (verklapte antwoord)
- stap 9 vraag 1: was «Hier −36 (min, niet plus).» / «alleen y² − b²» → nu «wat is 6 · (−6)?» / «wat gebeurt er met de twee middelste termen?» (antwoord voorgezegd)
- stap 15 vraag 1: was «Combineer beide: 2x² ipv x²» → nu «Werk ook het tweede deel uit en tel alles op.» (verklapte antwoord)
- stap 15 vraag 8: was opties «x²ˣ³», «x²·³» (onzin, gelijk aan x⁶) → nu «2x⁵», «x²³» met passende hints
- stap 15 vraag 9: was «Niet — −x klopt maar +5.» → nu «−x klopt, maar wat gebeurt er met het teken van de 5?» (antwoord voorgezegd)

### Twijfel voor Mark

- zuren-basen-havo-vwo stap 5 vraag 5 (cola/tandglazuur): het goede antwoord is veel langer dan de afleiders («Niet relevant», enzovoort) en valt daardoor op. Ik heb het niet herschreven omdat het inhoudelijk klopt.
- organische-chemie-havo-vwo stap 2 vraag 3 («Octopus-uitvinding», «Olie-prijs») en stap 5 vraag 5 («Een nieuw vak»): dit zijn grap-afleiders die niemand kiest, waardoor de vraag eigenlijk 2-keuze is. Ik heb ze laten staan.
- chemische-reacties-scheikunde stap 4 (uitleg buiten checks): «NaCl(s) + H₂O(l) → NaCl(aq)» is een ongebruikelijke notatie voor oplossen; gangbaar is NaCl(s) → Na⁺(aq) + Cl⁻(aq). Ik heb het niet gewijzigd omdat het onderbouw is.
- atoombouw-scheikunde stap 10 vraag 14 (schillen 2/8/18/32) gebruikt 2n², terwijl stap 4 zegt dat de M-schil "max 8 (basis)" heeft. Binnen de vraag klopt het, maar het kan verwarrend zijn.
- logaritmen-exponentieel-havo-vwo stap 5 (buiten checks, uitleg CO₂-budget): «Voor halvering tegen 2030: jaarlijks ~7% reductie nodig». Vanaf 2024 (6 jaar) is ~11% per jaar nodig (0,5^(1/6) ≈ 0,89); 7% past bij een start rond 2020. Niet gewijzigd omdat het startjaar niet genoemd wordt.
- logaritmen-exponentieel-havo-vwo stap 3 vraag 4: "Hoeveel sterker" (Richter 7 vs 5) is strikt genomen dubbelzinnig (amplitude 100×, energie ~1000×). Omdat 1000× geen optie is, is het antwoord eenduidig; niet gewijzigd.
- periodiek / elektromagnetisme: diverse wrongHints geven bij elke foute optie een eigen reden (eliminatie mogelijk na meerdere fouten). Alleen aangepast waar een hint het antwoord direct gaf of voorrekende.
- machten stap 13 vraag 5–13 en differentieren stap 14 vraag 3–13: korte vragen met minimale hints ("Niet."). Inhoudelijk correct, didactisch mager; alleen feitelijk foute hints aangepast.
- parabolen stap 31 en 32: de staptitels heten nog «Eindopdracht 1: y = x² − 4» / «Eindopdracht 2: y = x² + 6x» en de staptekst werkt die parabolen volledig uit (incl. plaatje); de checks gaan nu over y = x² − 9 en y = x² − 8x, zodat de leerling het zelf moet doen. Als je liever wilt dat de eindopdracht-tekst niet voorrekent, kan dat ook andersom (staptekst inkorten, checks terug) — dat vergt ook een nieuw plaatje.
- vlakke-figuren / lineaire-formules stap 17: de staptekst schetst nog steeds de situatie (speeltuin 12 × 8 + zandbak d = 6; taxi €4 + €1,80/km), want de vragen leunen erop; alleen het voorrekenen is vervangen door een oefenvoorbeeld met andere getallen.
- Definitie-vragen (oorsprong = (0, 0), nulpunt → y = 0, kwadrant-tabel, dal/berg) worden vlak ervoor in de staptekst uitgelegd; dat is "leren → checken" en heb ik laten staan.
- Hints van het type «2 is a (het getal vóór x²). De b is het getal vóór x» (benoemen waarom de gekozen optie fout is) heb ik laten staan; ze sturen sterk maar rekenen niets voor.
- breuken stap 9 vraag 1: de afleiders ⁴⁄₆ en ²⁄₃ zijn even groot. Allebei fout, dus ze zijn tegelijk weg te strepen. Niet gewijzigd: ⁴⁄₆ is een realistische fout (vergeten gelijknamig te maken).
- goniometrie stap 11 vraag 21 (sinusregel) en kwadratische-vergelijkingen stap 13 vragen 9–12/14–15 (discriminant, abc-formule): deze stof wordt in het pad zelf niet behandeld (hooguit in de uitlegPad, "havo/vwo"). Inhoudelijk klopt het. Laten staan of eruit halen?
- ruimtemeetkunde stap 26 (CSE): getallen staan met een punt als duizendtal-scheiding (226.080 cm³). In het Nederlands is dat correct, maar naast komma-decimalen kan het verwarren. Niet gewijzigd.
- Veel korte "Niet."-hints in de toegevoegde vragen achteraan (breuken stap 15, goniometrie stap 11, kwadratische stap 13): niet fout, wel weinig richtinggevend.

**Deel A: gecontroleerd 589 · hersteld 230 · verwijderd 0**

---

## Deel B — VO talen (rest + drie bekende fouten)

25 paden zijn volledig nagekeken. Daarnaast zijn de drie al bekende fouten hersteld; die paden zijn verder niet nagekeken en staan daarom op gecontroleerd 0:
- onregelmatige-werkwoorden-engels «heared up» → «heart»;
- onregelmatige-werkwoorden-v2-engels «cut(ten)» → «cat» en «swim (…)» → «swim»;
- woordenschat-engels «supper» → «snack» en de hint «Schoenpoets = shoe polish.».

### Lijst van paden

| pad/groep | gecontroleerd | hersteld | verwijderd |
|---|---|---|---|
| argumentatieleer | 34 | 5 | 0 |
| betoog-beschouwing-havo-vwo | 25 | 4 | 0 |
| schrijfvaardigheid | 25 | 3 | 0 |
| tekstanalyse | 25 | 3 | 0 |
| cse-schrijfvaardigheid-nederlands | 35 | 9 | 0 |
| cse-leesvaardigheid-nederlands | 26 | 3 | 0 |
| nederlands-cse-havo-vwo | 25 | 10 | 0 |
| literatuurgeschiedenis | 33 | 7 | 0 |
| stijl-literatuur-havo-vwo | 25 | 2 | 0 |
| spelling | 27 | 21 | 0 |
| werkwoordsvervoeging | 30 | 8 | 0 |
| woordsoorten-nederlands | 25 | 9 | 0 |
| zinsontleding | 26 | 2 | 0 |
| naamvallen-duits | 34 | 5 | 0 |
| werkwoordsvervoeging-duits | 26 | 2 | 0 |
| duits-cse-havo-vwo | 25 | 10 | 0 |
| cse-leesvaardigheid-engels | 40 | 3 | 0 |
| cse-schrijfvaardigheid-engels | 37 | 3 | 0 |
| cse-strategie-engels-vmbo | 25 | 1 | 0 |
| engels-cse-havo-vwo | 25 | 5 | 0 |
| onregelmatige-werkwoorden-engels | 0 | 1 | 0 |
| onregelmatige-werkwoorden-v2-engels | 0 | 2 | 0 |
| woordenschat-engels | 0 | 2 | 0 |
| engels-literatuur-havo-vwo | 25 | 6 | 0 |
| engels-schrijven-spreken-havo-vwo | 25 | 8 | 0 |
| frans-cse-havo-vwo | 25 | 13 | 0 |
| passe-compose-frans | 34 | 6 | 0 |
| werkwoordsvervoeging-frans | 26 | 1 | 0 |

### Herstellingen (was → nu, reden)

#### argumentatieleer · gecontroleerd 34 · hersteld 5 · verwijderd 0
- stap 2 vraag 2: was «opties maar / want / omdat / doordat» + hint «Doordat geeft een oorzaak — dat is een argument.» → nu optie «aangezien» + hint «Aangezien geeft een reden — ook een klassiek signaal voor een argument.» (uitlegPad mee aangepast) (doordat = oorzaak-signaal, geen reden-signaal → 'maar' was niet het enige goede antwoord; hint was feitelijk onjuist)
- stap 8 vraag 1: was «Onderzoek van het slaaponderzoeksinstituut UMC Utrecht laat zien dat tieners 9 uur nodig hebben» → nu «Slaaponderzoekers van het UMC Utrecht stellen dat tieners zo'n 9 uur slaap nodig hebben» (+ hint/uitlegPad) (UMC Utrecht is een ziekenhuis, geen slaaponderzoeksinstituut — feitfout)
- stap 13 vraag 2: was «"Mensen denken dat het belangrijk is om gezond te eten." — Welke drogreden?» → nu «"Je moet gezond eten, want mensen zeggen dat het belangrijk is."» (+ uitlegPad) (losse uitspraak zonder redenering is geen argument → "Geen drogreden" was ook verdedigbaar; nu een echt vaag autoriteitsberoep)
- stap 15 vraag 1: was «De Nederlandse Vereniging voor Slaaponderzoek concludeerde in 2024 dat…» → nu «Slaaponderzoekers van de Nederlandse Vereniging voor Slaap-Waakonderzoek wijzen erop dat…» (+ hint/uitlegPad) (verzonnen organisatienaam + verzonnen 2024-conclusie gepresenteerd als feit; vervangen door de echte vereniging zonder verzonnen jaartal)
- stap 15 vraag 4: was hint «Hier wordt het argument *waarom dat een drempel is* nog uitgelegd.» → nu «Hier wordt het argument nog onderbouwd: *waarom die drempel weg moet*.» (hint sprak de tekst/het eigen schema tegen: het subargument legt uit waarom de drempel weg moet, niet waarom het een drempel is)

#### betoog-beschouwing-havo-vwo · gecontroleerd 25 · hersteld 4 · verwijderd 0
- stap 1 vraag 4: was hint bij «Ten eerste» «Niet — dat is uiteenzetting.» → nu «Niet — opsommen doe je in alle drie.» (feitelijk onjuist: 'ten eerste' is niet typisch voor de uiteenzetting)
- stap 2 vraag 4: was hint bij «Persoonlijke ervaring zonder context» «Wel context maar zwakker dan feit.» → nu «Niet — één losse ervaring bewijst weinig.» (hint sprak de optie tegen: "zonder context")
- stap 3 vraag 2: was «'Wie tegen migratie is, is racistisch.'» → nu «'Óf je stemt voor de nieuwe sporthal, óf sport voor kinderen kan je niets schelen.'» (+ uitlegPad) (oude zin was eerder een generalisatie dan een vals dilemma → twee opties verdedigbaar; bovendien onnodig beladen onderwerp)
- stap 5 vraag 1: was «'Mijn opa zegt dat alle moderne muziek vreselijk is.'» → nu «'Alle moderne muziek is vreselijk, want dat zegt mijn opa.'» (de oude zin was een weergave, geen redenering; nu echt een argument met autoriteitsmisbruik + generalisatie)

#### schrijfvaardigheid · gecontroleerd 25 · hersteld 3 · verwijderd 0
- stap 1 vraag 1: was «hybride-motor» → nu «hybride motor» (spelling: bijvoeglijk naamwoord, geen koppelteken)
- stap 7 vraag 1: was «overtuigingskracht.␣␣Welke» → nu «overtuigingskracht. Welke» (dubbele spatie in hint)
- stap 12 vraag 1: was «Op het examen heb je 70 minuten voor de schrijfopdracht.» → nu «Voor een schrijfopdracht (toets) heb je 70 minuten.» (onjuist: het centraal examen Nederlands havo/vwo bevat geen schrijfopdracht; schrijven zit in het schoolexamen)

#### tekstanalyse · gecontroleerd 25 · hersteld 3 · verwijderd 0
- stap 1 vraag 1: was «hybride-motor» → nu «hybride motor» (spelling)
- stap 10 vraag 1: was hints «Dat is een controleerbaar getal.» / «Wat in een onderzoeksrapport staat, is feitelijk — toetsbaar bij de bron.» → nu «Dat is een controleerbaar gegeven.» / «Of dit in het rapport staat, kun je bij de bron controleren.» (optie bevat geen getal; "wat in een rapport staat is feitelijk" is een onjuiste generalisatie)
- stap 13 vraag 4: was optie «Een drogreden» (+ hint) → nu «Een definitie» + hint «Een definitie legt uit wat een woord betekent. Hier wordt iets beweerd — wat voor soort uitspraak is dat?» ("Iedereen weet dat…" geldt elders in de app juist als drogreden-signaal → twee opties verdedigbaar)

#### cse-schrijfvaardigheid-nederlands · gecontroleerd 35 · hersteld 9 · verwijderd 0
- stap 3 vraag 4: was optie «Stel niet» + hint «Niet bedoeld.» → nu «Alleen dialoog gebruiken» + «Dialoog kan helpen, maar daar gaat het niet om.» (onzin-/typo-optie)
- stap 4 vraag 1: was hint «Plagiat.» → nu «Plagiaat.» (spelling)
- stap 4 vraag 3: was «Wat is **plagiat** bij samenvatting?» → nu «plagiaat» (spelling)
- stap 4 vraag 5 (open): was acceptedAnswers «omdat, doordat, want» + uitleg «Reden-signalen: omdat, doordat, want.» → nu «omdat, want, aangezien, namelijk» + «(Doordat geeft een oorzaak aan, geen reden.)» (doordat = oorzaak, geen reden — vakinhoudelijke fout)
- stap 5 vraag 1: was optie «Hij wordt (stam + t)» → nu «Hij wordt» (regel in alleen de goede optie verraadt het antwoord)
- stap 5 vraag 2: was optie «Groter dan ik (vergelijken)» → nu «Groter dan ik» (idem)
- stap 5 vraag 4: was «**Sinds** of **vanaf** 2020?» + optie «Sinds (begin tot nu)» + hints «…los startmoment.» / «Klein verschil.» → nu «'Ik heb hem ___ 2020 niet meer gezien.' — sinds of vanaf?» + optie «Sinds» + hints «'Vanaf' gebruik je vooral voor een startmoment zonder 'tot nu toe', zoals 'vanaf morgen'.» / «Hier past maar één van de twee.» (zonder zin was 'vanaf 2020' ook correct → dubbelzinnig; bovendien verraadde de optie het antwoord)
- stap 6 vraag 4: was «**Plagiat** in samenvatting = wat?» → nu «Plagiaat» (spelling)
- stap 6 vraag 5: was optie «Ik fietste ('t kofschip)» → nu «Ik fietste» (regel in alleen de goede optie verraadt het antwoord)

#### cse-leesvaardigheid-nederlands · gecontroleerd 26 · hersteld 3 · verwijderd 0
- stap 1 vraag 3: was «options: "Echter" … (zin: '___ weten ze vaak niet hoe')» → nu «"Toch"» ('Echter' vooraan de zin met inversie is stilistisch afgeraden/onjuist; 'Toch' is een tegenstellingswoord uit de uitleg)
- stap 6 vraag 4: was «'Volgens onderzoek van TU Delft ...' → Autoriteit» → nu «'Volgens hoogleraar Jansen van de TU Delft ...'» (stap 4 noemt 'Onderzoek van Universiteit Utrecht toont aan' juist als *feitelijk* argument; met een persoon met gezag is 'autoriteit' eenduidig)
- stap 6 vraag 6: hint was «Anna is persoon, geen 'deze'.» → nu «Kan een persoon 'duur' zijn?» (feitfout: 'deze' kan wél naar een persoon verwijzen)

#### nederlands-cse-havo-vwo · gecontroleerd 25 · hersteld 10 · verwijderd 0
- stap 1 vraag 1: was «Leesvaardigheid (+ samenvatting VWO)» → nu «Leesvaardigheid (incl. samenvatten)»; uitlegPad idem (samenvatten zit in het CSE van havo én vwo — "alleen vwo" was verouderd/onjuist)
- stap 1 vraag 2: uitlegPad was «Bij dyslexie/dyscalculie 30 min extra. Plus woordenboeken-tijd.» → nu «Met een verklaring (bv. dyslexie) kan de school maximaal 30 min verlenging geven.» ("woordenboeken-tijd" bestaat niet; antwoord 3 uur klopt: CE havo 13.30–16.30)
- stap 1 vraag 3: was «Welk tekstniveau verwacht VWO? C1 / A2 / B1 / B2» → nu «Welk referentieniveau lezen hoort bij het VWO-examen Nederlands? 4F / 1F / 2F / 3F» + hints/uitlegPad (ERK-niveaus B2/C1 worden niet gebruikt voor Nederlands als schooltaal; havo = 3F, vwo = 4F)
- stap 1 vraag 4: was «Mag je een synoniemenwoordenboek gebruiken? → Ja» → nu «Welk hulpmiddel mag je gebruiken bij het CSE Nederlands? → Een papieren woordenboek Nederlands» (vs. telefoon/aantekeningen/vertaalapp) + hints/uitlegPad (lijst toegestane hulpmiddelen CvTE noemt alleen een woordenboek Nederlands, geen synoniemenwoordenboek → antwoord was fout)
- stap 2 vraag 3: was «Welk tekststructuur-patroon past bij 'probleem → oplossing'?» → nu «Een tekst schetst eerst een misstand, bespreekt daarna mogelijke maatregelen en beveelt er één aan. Welk tekststructuur-patroon?» (vraag gaf het antwoord weg)
- stap 3 vraag 4: was «welke drogreden is dit verwant?» → nu «met welke drogreden is dit verwant?» (taalfout)
- stap 4 vraag 1: was «Aantal woorden in VWO-samenvatting? ~250 (225-275) / 100 / 500 / 1000» → nu «Wat staat er bij een samenvattingsvraag op het CSE altijd vermeld? → Een maximum aantal woorden» + hints/uitlegPad (de grote samenvattingsopdracht van ~250 woorden is sinds 2015 uit het CE; nu samenvattingsvragen met een opgegeven maximum)
- stap 4 vraag 4: uitlegPad was «Inhoud (60%) > taalverzorging (40%)» → nu «Inhoud eerst: de punten krijg je voor de juiste hoofdpunten» (60/40-verdeling verzonnen)
- stap 4 vraag 5: was «Strategie samenvatting in 45 minuten:» → nu «Je hebt 45 minuten voor een oefen-samenvatting van een hele tekst. Goede tijdsverdeling?» (geen CSE-onderdeel van 45 min; als oefenopdracht geformuleerd)
- stap 5 vraag 5: was «Beoordelings-criterium samenvatting VWO: Inhoud 60%, taal 40%» → nu «Je antwoord op een samenvattingsvraag is langer dan het maximum aantal woorden. Wat gebeurt er? → Het deel na het maximum wordt niet beoordeeld» + hints/uitlegPad (60/40 verzonnen; woordgrens-regel staat in de correctievoorschriften)
- (buiten checks) stap 1-uitleg: samenvatten havo+vwo, "Tekst-niveau B2/C1" → "Referentieniveau 3F/4F", synoniemenwoordenboek geschrapt, samenvattingsopdracht → samenvattingsvraag met woordgrens; stap 4-uitleg: inleiding herschreven (CSE havo+vwo, woordgrens; lange samenvatting = oefen/SE) en "Beoordelings-criteria 60/40" vervangen; staptitel "Samenvatten (VWO-CSE-onderdeel)" → "Samenvatten (CSE havo + vwo)", hoofdstuktitel "Samenvatten (VWO)" → "Samenvatten"; intro "3u, B2/C1 … samenvatten VWO (~250w in 45 min)" → "3u, 3F/4F … samenvatten (woordgrens)".

#### literatuurgeschiedenis · gecontroleerd 33 · hersteld 7 · verwijderd 0
- stap 3 vraag 1: hint was «De avonden is van Reve (postmodern, 1947).» → nu «(naoorlogs proza, 1947)» (1947 valt niet in het postmodernisme ~1965-2000 van dit pad)
- stap 5 vraag 1: hint was «De avonden is naoorlogs (1947) — postmodern.» → nu «De avonden is naoorlogs proza (1947) — veel later dan de Verlichting.» (idem)
- stap 6 vraag 1: hint was «De roman speelt deels in Indië en is een kritiek op het koloniale systeem.» → nu «Max Havelaar speelt niet in de Gouden Eeuw. In welk land werkte Multatuli zelf als ambtenaar?» (hint gaf het antwoord letterlijk)
- stap 7 vraag 2: hint was «Lucebert is een Vijftiger (~1950), eeuwen na de Tachtigers.» → nu «ruim een halve eeuw na de Tachtigers» (feitfout)
- stap 14 vraag 11: hint was «Wel bestaat.» → nu «Bestaat wel.» (taalfout)
- stap 14 vraag 13: hint was «Te kort — verhaal/novelle.» → nu «Te kort — dat is hooguit een kort verhaal.» (een novelle is geen 1-10 pagina's)
- stap 14 vraag 14: was «options … "Realisme én Romantiek (beide 19e)", answer 3; optie "Romantiek" ook goed» → nu «options ["Romantiek","Modernisme","Postmodernisme","Vijftigers"], answer 0» + hints (twee goede opties + plaksel-afleider)

#### stijl-literatuur-havo-vwo · gecontroleerd 25 · hersteld 2 · verwijderd 0
- stap 1 vraag 2: hint was «Wel overdreven maar formeel = metafoor.» → nu «Wordt hier vooral iets overdreven, of wordt de ene zaak door een beeld vervangen?» (hint gaf het antwoord)
- stap 5 vraag 4: hint was «Mogelijk metafoor maar primair = overdrijving.» → nu «Er zit wel een beeld in — maar wat doet de zin vooral met de hoeveelheid regen?» (hint gaf het antwoord)

#### spelling · gecontroleerd 27 · hersteld 21 · verwijderd 0
- stap 1 vraag 2: hint was «… dat is een medeklinker, dus gesloten.» → nu «Kijk goed naar 'kam-men': op welke letter eindigt de eerste lettergreep echt — een klinker of een medeklinker?» (hint gaf antwoord)
- stap 2 vraag 2: hint was «In een open lettergreep ('bo-men') volstaat één o.» → nu «Hoeveel o's heb je nodig als de lettergreep op de o eindigt?» (hint spelde het antwoord)
- stap 3 vraag 2: hint was «… aan het eind van het enkelvoud schrijf je f …» → nu «… welke letter mag in het Nederlands niet aan het eind van een woord staan?» (hint gaf antwoord)
- stap 4 vraag 1: optie was «melk — geen ei/ij» → nu «melk»; hints «Melk heeft helemaal geen ei/ij / Melk is een gewoon woord met e / Melk schrijf je met een korte e» → nu klank-vragen («hoor je echt een ei-/ij-/ie-klank?») (optie met uitleg-staart + hints die het antwoord noemden)
- stap 4 vraag 2: hint was «… niet meer gebruikt voor deze klank — wel ij.» → nu zonder «— wel ij» (verraadde per uitsluiting)
- stap 5 vraag 1: hint was «Het is gewoon: au + to.» → nu «er hoort geen w in dit woord» (hint gaf antwoord)
- stap 5 vraag 2: hints «Vergelijk met 'oud' en 'kouder'» / «We gebruiken 'ou' voor deze klank» → nu «Vergelijk met een woord als 'oud'» / «de w hoort hier niet» (hints gaven antwoord)
- stap 6 vraag 1: hint was «Vrijwel altijd schrijf je 'cht' …» → nu «Er mist een letter: met welke twee letters schrijf je de ch-klank?» (gaf antwoord)
- stap 7 vraag 2: hints «daarom komt er een koppelteken» / «Maar bij klinker-botsing: koppelteken» → nu «Hoe los je dat op in een samenstelling?» / «Samenstellingen schrijf je niet met een spatie.» (gaven antwoord)
- stap 8 vraag 1: hints «Pan → pannen, dus tussen-n» / «Tussen-n moet, want … (pannen)» → nu «Wat is het meervoud van 'pan'?» / «Let op de korte a … kijk naar het meervoud» (gaven antwoord)
- stap 9 vraag 1: hint was «"mening-s-verschil" — je hoort de s. Dat betekent: tussen-s.» → nu «hoor je tussen de twee delen een extra klank?» (gaf antwoord)
- stap 11 vraag 1: hint was «Na -m gebruik je -pje, niet -tje.» → nu «Na een m past -tje niet. Welke letter glijdt er … vanzelf tussen m en -je?» (gaf antwoord)
- stap 11 vraag 2: hints «… extra letter ingevoegd …» (2×) → nu «Spreek 'autotje' uit: blijft de o dan lang klinken?» / «Na een klinker past -je niet goed. En blijft de o dan lang?» (verraadden per uitsluiting)
- stap 12 vraag 1: hints «Daarom apostrof …» / «Apostrof + s is de juiste vorm.» → nu «Hoe voorkom je dat?» / zonder staart (gaven antwoord)
- stap 13 vraag 1: hint was «Pad heeft meervoud 'padden' → tussen-n verplicht.» → nu «Kijk naar het meervoud van 'pad' (het dier).» (gaf antwoord)
- stap 13 vraag 2: hint was «… Plus: vanwege korte klank moet medeklinker verdubbeld.» → nu zonder die staart (verraadde antwoord)
- stap 13 vraag 3: optie was «Frankrijk moet Frankrijk …» → nu «frankrijk moet Frankrijk …» (typefout); hints «landnaam, dus juist met hoofdletter» / «frankrijk moet juist een hoofdletter krijgen» → nu richtinggevend (gaven antwoord)
- stap 13 vraag 4: hints «… vereist het meervoud een apostrof …» / «apostrofs's bestaat niet» → nu «Hoe voorkom je dat?» / «Twee keer een s is niet nodig.» (gaf antwoord / onzin)
- stap 14 vraag 2: hints «… volgt apostrof + s …» / «— apostrof» → nu «Wat zet je ertussen?» / «Een koppelteken hoort niet bij meervoudsvorming.» (gaven antwoord)
- stap 14 vraag 3: hints «-kje, met de g eruit en een k erin» / «g wordt vervangen door k» / «aangepast tot -kje» → nu luister-vragen naar de klank vóór -je (gaven antwoord)
- stap 14 vraag 4: was «Welk woord is met 'cht' geschreven?» (alleen 'lucht' bevat cht → vraag gaf antwoord) → nu «Hoe spel je het woord voor de ruimte boven je hoofd, waar de wolken drijven?»; hints aangepast (geen «schrijf je cht» meer)

#### werkwoordsvervoeging · gecontroleerd 30 · hersteld 8 · verwijderd 0
- stap 9 vraag 2: wrongHints van «gewond» en «woonde» stonden verwisseld (gewond kreeg de kofschip-toets, woonde de uitleg 'gewond = verwond') → nu gewond: «Dat is een ander woord (gewond = verwond). Kijk goed naar de stam…», woonde: «Dat is verleden tijd. Na 'heb' komt een voltooid deelwoord: ge + stam + ?» (hint klopte niet bij optie)
- stap 11 vraag 1: hint bij «gebeuren» was «Zoek de tegenwoordige tijd ik-vorm-+-t.» → nu «Welke vorm hoort bij één ding ('wat') in de tegenwoordige tijd?» (onjuist/onbegrijpelijk: ik-vorm krijgt geen -t)
- stap 11 vraag 2: hint «gebeurde» was «Tegenwoordige tijd — …» → nu «Verleden tijd — …»; hint «gebeur» was «Verleden tijd. …» → nu «Dat is alleen de stam. …» (hints spraken de vorm tegen)
- stap 12 vraag 2: hint «vond» was «Dat is de ik-vorm…» → nu «Verleden tijd, maar de zin staat in tegenwoordige tijd ("altijd")»; hint «vinden» was «Verleden tijd…» → nu «Dat is het hele werkwoord (meervoud). Bij hij: stam + ?» (verschoven hints, feitelijk fout)
- stap 12 vraag 3: hint «vindt» was «Niet bestaand woord. Vinden is sterk…» → nu «Dat is tegenwoordige tijd (hij-vorm). Na "heeft" komt een voltooid deelwoord.» (vindt bestaat wél)
- stap 13 vraag 1: hint «ga» was «Dat is jij/hij-vorm.» → nu «Dat is de ik-vorm (de stam).» (feitfout)
- stap 14 vraag 2: hint «gebeurde» was «Tegenwoordige tijd…» → nu «Verleden tijd…»; hint «gebeuren» was «Verleden tijd…» → nu «Hele werkwoord…» (feitfout)
- stap 14 vraag 4: hints doet/deedt/gedaan schoven één plek op («deedt: Tegenwoordige tijd», «gedaan: Niet bestaand woord») → nu doet: «Tegenwoordige tijd. Maar de zin zegt "gisteren".», deedt: «Bestaat niet. Doen is sterk: in de verleden tijd komt er geen extra -t bij.», gedaan: «Voltooid deelwoord, maar er staat geen "heeft" in de zin.» (feitfouten)

#### woordsoorten-nederlands · gecontroleerd 25 · hersteld 9 · verwijderd 0
- stap 1 vraag 1: hint «Snel = bijwoord (beschrijft hoe).» → «Snel zegt hoe iets is of gaat — het is geen naam voor iets.» (los 'snel' is in de schoolgrammatica een bn; pad zelf noemt het alleen bw bij een ww)
- stap 2 vraag 1: hint «Snel = bijwoord.» → idem (zelfde reden)
- stap 3 vraag 1: hint bij «geen» was «Snelle beschrijft auto = bn.» → nu «Er staat wél een woord dat zegt hoe de auto is.» (hint gaf antwoord weg)
- stap 4 vraag 1: hint «de» was «Verkleinwoorden zijn altijd het.» → «Boekje is een verkleinwoord. Welk lidwoord krijgen verkleinwoorden altijd?»; hint «een» was «…maar 'het' is het bepaalde lidwoord» → «…maar dat is een onbepaald lidwoord. Gevraagd is: de of het?» (hints gaven antwoord weg)
- stap 6 vraag 1: opties «boek / geeft / een» → «Hij én boek / geeft én mij / een én boek» + hints aangepast (alleen het goede antwoord had de vorm "X én Y" → weggever)
- stap 6 vraag 2: optie «ze» → «hem», hint «Ze kan informeel, hun is grammaticaal correct hier.» → «Hem is enkelvoud — het gaat om meer jongens.» ('Ik geef ze een cadeau' is ook correct Nederlands → twee goede opties; hint gaf antwoord weg)
- stap 9 vraag 1: hint bij «snel» «Bijwoord.» → «Snel zegt hoe iets gaat — het verbindt niets.» (zie stap 1)
- stap 9 vraag 2: optie «of» → «want» (+ hint) («of» is ook onderschikkend voegwoord, bv. "Ik vraag of je komt" → twee goede opties)
- stap 10 vraag 2: uitlegPad «Vandaag zegt wanneer hij komt» → «…wanneer hij fietst» (klopte niet met de zin)
- stap 6 (buiten checks): tabel persoonlijk vnw, kolom lijdend voorwerp 3e mv «hen / hun» → «hen / ze» ('hun' is geen lijdend voorwerp)

#### zinsontleding · gecontroleerd 26 · hersteld 2 · verwijderd 0
- stap 1 vraag 1: hint «Heerlijk is een bijvoeglijk naamwoord (omschrijft iets)» → «Heerlijk zegt hoe de koffie smaakt — het is geen werkwoord.» (in 'smaakt heerlijk' bijwoordelijk gebruikt; strijdig met stap 11 van het pad)
- stap 12 vraag 1: hint «Ons = mv (voor wie werd het feest georganiseerd?).» → «(Voor) ons zegt voor wie het feest is — niet wie het organiseerde.» (betwistbare ontleding 'voor ons' = mv weggelaten; hint richt zich nu op het onderwerp)

#### naamvallen-duits · gecontroleerd 34 · hersteld 5 · verwijderd 0
- stap 2 vraag 1: vraag «Welk geslacht heeft **die Zeitung**» → «…**Zeitung** (krant)?» (lidwoord in de vraag gaf antwoord weg)
- stap 7 vraag 1: vraag «welke naamval?» → «welke vorm is goed?», optie «mit dem Auto (datief)» → «mit dem Auto», hint «mit den Auto: …Auto is onzijdig → dem.» → «Den is mannelijk accusatief. Mit eist datief, en Auto is onzijdig.» (vraag paste niet bij opties; label en hint gaven antwoord weg)
- stap 9 vraag 10: optie «4 (Nom, Akk, Dat, Gen)» → «4», hint «Latijn/Russisch heeft meer.» → «Zes naamvallen heeft bijvoorbeeld het Latijn — het Duits heeft er minder.» (alleen goede optie had toelichting → weggever)
- stap 9 vraag 14: optie «Bezit (des Vaters Buch)» → «Bezit (das Buch des Vaters)» (verouderde woordvolgorde)
- stap 9 vraag 16: hint «Nominativ: Lidwoord-context.» → «Nominativ is voor het onderwerp, niet na een voorzetsel.» (zinloze hint)

#### werkwoordsvervoeging-duits · gecontroleerd 26 · hersteld 2 · verwijderd 0
- stap 5 vraag 1: optie «sein (beweging)» → «sein» (toelichting alleen bij goede optie → weggever)
- stap 6 vraag 5: hint «war … gegangen: Niet Präteritum + Partizip mix.» → «Dat is geen Perfekt — en bij 'wir' zou het 'waren' zijn.» (onjuiste typering; het is een Plusquamperfekt-vorm met verkeerde persoon)
- stap 6 (buiten checks): «Mix-toets in Doorstroomtoets-stijl» → «Mix-toets» (Duits zit niet in de Doorstroomtoets)

#### duits-cse-havo-vwo · gecontroleerd 25 · hersteld 10 · verwijderd 0
- stap 1 vraag 1: hint «3 uur: Niet — VWO.» → «Te lang — dat geldt ook niet voor VWO.»; uitlegPad «VWO: 3 uur» → «VWO: ook 2,5 uur» (CSE Duits vwo duurt 150 min, examenrooster 2026: 13.30–16.00)
- stap 1 vraag 5: vraag «Welk profiel heeft Duits **vaak als kernvak**?» → «In welk HAVO-profiel is Duits (of Frans) een **verplicht profielvak**?»; opties «HAVO N&T / VMBO BB / Geen» → «N&T / N&G / E&M» + hints; uitlegPad «vaak Duits + Frans verplicht of zwaarwegend» → «Duits of Frans is een verplicht profielvak» (Duits is geen kernvak — stap-uitleg zei dat zelf ook; VMBO BB is geen profiel)
- stap 2 vraag 2: hint «Vergeten: Tegenovergesteld.» → «Niet — dat is *vergessen*.» (vergeten is niet het tegenovergestelde van krijgen)
- stap 3 vraag 2: hint «Indikativ: Niet — irreëel.» → «Niet — de gewone vorm (Indikativ) zou *hat* zijn.» (hätte gern = hoffelijkheid, niet irreëel)
- stap 3 vraag 4: uitlegPad nogSimpeler «A.» → «Taal van jongeren.» (verwees naar optieletter; opties worden geschud)
- stap 4 vraag 1: nogSimpeler «A.» → «Drie Duitstalige landen.» (idem)
- stap 4 vraag 2: nogSimpeler «A.» → «Parlement.» (idem)
- stap 4 vraag 3: uitlegPad-zin «Op munten + identiteitsbewijs alle 4 vertaald.» verwijderd (feitfout: Zwitserse munten gebruiken Latijn 'Helvetia')
- stap 4 vraag 5: nogSimpeler «A.» → «Naar groene energie.» (idem)
- stap 5 vraag 1: nogSimpeler «A.» → «Misschien.» (idem)
- stap 1 (buiten checks): «VWO: 3 uur» → «VWO: ook 2,5 uur»; «HAVO C&M-profiel: vaak verplicht of zwaarwegend» → «Duits of Frans is een verplicht profielvak»

#### cse-leesvaardigheid-engels · gecontroleerd 40 · hersteld 3 · verwijderd 0
- stap 3 vraag 2: was «*'unhappy'** — wat betekent **un-**?» → nu «*'unhappy'* — wat betekent **un-**?» (markdown-sterretjes klopten niet, typefout)
- stap 5 vraag 4: was «*'Sarah likes Tom. **She** told **him** a joke.'* Waar verwijst **'her'** naar als die werd gebruikt?» → nu «… Waar verwijst **'she'** naar?» ('her' staat niet in de zin: vraag was onduidelijk)
- stap 6 vraag 8 (open): was acceptedAnswers «joyful, jolly» → nu «joyful, jolly, jubilant, joyous», uitleg aangepast (het in stap 3 geleerde 'jubilant' is ook goed en werd fout gerekend)

#### cse-schrijfvaardigheid-engels · gecontroleerd 37 · hersteld 3 · verwijderd 0
- stap 1 vraag 4: was afleider «ask» (hint "Te informeel.") → nu «request» (hint "Na 'request' komt geen 'about' — je request iets direct.") ('I would like to ask about your job advert' is ook correct en beleefd, dus twee goede opties)
- stap 6 vraag 8 (open): was «… a formal email.'* Typ 3 woorden.» → nu «… a formal email (name unknown).'* Typ de aanhef.» ('Dear Sir or Madam' is 4 woorden en 'To whom it may concern' 5 woorden: de instructie sprak de goede antwoorden tegen)
- stap 6 vraag 9 (open): was acceptedAnswers «yours faithfully, yours sincerely» → nu «yours faithfully» (bij een onbekende naam is 'Yours sincerely' fout, zoals de eigen uitleg ook zegt)

#### cse-strategie-engels-vmbo · gecontroleerd 25 · hersteld 1 · verwijderd 0
- stap 1 (buiten checks): was «~50 vragen over ~10 teksten in 90 min» en tijdsbudget «(90 min, ~50 vragen) ~1,5 min per vraag» → nu «~40 vragen over ~10-12 teksten in 120 min», «(120 min, ~40 vragen) ~3 min per vraag» (CSE Engels vmbo gl/tl duurt 120 minuten: 2025 van 13.30 tot 15.30, met 41 vragen)
- stap 1 vraag 3: was «(90 min / ~50 vragen)», opties «~1,5 minuut / 30 seconden / 5 minuten / …», uitlegPad 90/50-berekening → nu «(120 min / ~40 vragen)», opties «~3 minuten / 30 seconden / 8 minuten / Geen tijd budgetteren», uitlegPad 120 ÷ 40 = 3, met eindcheck ≈ 2,7 (feitelijk onjuiste examenduur en vragenaantal)

#### engels-cse-havo-vwo · gecontroleerd 25 · hersteld 5 · verwijderd 0
- stap 1 (buiten checks): was «150 minuten (eerder 120, sinds 2024 langer)», «~50 vragen over ~7-8 teksten» (2×), «Eén tekst is een literair fragment», «150 min, 50 vragen: ~3 min per vraag» → nu «150 minuten», «~40-45 vragen over ~10-14 teksten», «Vaak is één tekst een literair fragment», «150 min, ~42 vragen: ~3,5 min per vraag» (havo en vwo 2025: 13.30-16.00, elk 42 vragen bij 12 teksten; de bewering 'sinds 2024 verlengd' kon ik niet bevestigen)
- stap 1 vraag 1: was hints «90 minuten: Niet — dat is VMBO.» / «120 minuten: Voorheen, sinds 2024 verlengd.», uitlegPad «150 min sinds 2024 (eerder 120-150 wisselend) ~50 vragen over 7-8 teksten» → nu «Veel te kort.» / «Niet — dat is de duur van het VMBO-examen.», uitlegPad «150 min (2,5 uur). ~40-45 vragen over ~10-14 teksten» (vmbo duurt 120 min, niet 90; de 2024-claim weggehaald)
- stap 1 vraag 3: was «Wat is uniek voor **VWO Engels** (niet HAVO)?» en uitlegPad «een van de teksten is …», «~10-15 vragen» → nu «Wat komt op het **VWO**-examen Engels vaak voor en vraagt extra nuance?», «vaak is een van de teksten …», «een handvol vragen (bv. 6 in VWO 2025)» (een literair fragment staat niet elk jaar verplicht in het examen en niet alleen op vwo; in vwo 2025 gingen 6 vragen over een literaire tekst, niet 10-15)
- stap 1 vraag 4: was «(150 min / 50 vragen)», optie «3 minuten», uitlegPad 150/50 = 3 → nu «(150 min / ~42 vragen)», optie «~3,5 minuut», uitlegPad 150/42 ≈ 3,5, met eindcheck ~3,2 (verkeerd vragenaantal)
- stap 2 vraag 1: was hint bij «Register» «Niet — toon vs purpose verschilt.» → nu «Niet — register gaat over hoe formeel de taal is, niet over het doel.» (fout in de hint: register is niet hetzelfde als toon)
- stap 2 vraag 3: was hint bij «Versterking» «Niet — however = tegenstelling.» → nu «Niet — versterkt 'however' wat ervoor staat, of draait het de richting om?» (de hint gaf het antwoord 'Contrast-signaal' weg)
- stap 3 (buiten checks): was «8 teksten × ~17 min = 136 min» → nu «~12 teksten × ~11 min ≈ 135 min» (aangepast aan het echte aantal teksten)
- stap 4 (buiten checks): was «VWO heeft op CSE altijd 1 literair fragment» → nu «vaak» (komt niet elk jaar zeker voor)

#### onregelmatige-werkwoorden-engels · gecontroleerd 0 · hersteld 1 · verwijderd 0
- stap 10 vraag 3: was afleider «heared up», hint «Geen werkwoord-vorm.» → nu «heart», hint «Let op: dit is een ander woord (= hart), geen vorm van 'hear'.» (plaksel-afleider; de hint geeft het antwoord niet weg)

#### onregelmatige-werkwoorden-v2-engels · gecontroleerd 0 · hersteld 2 · verwijderd 0
- stap 3 vraag 1: was afleider «cut(ten)», hint «Geen Engels.» → nu «cat», hint «Let op: dit is een ander woord (= kat), geen vorm van 'cut'.» (plaksel-afleider)
- stap 7 vraag 2: was optie «swim (drink-patroon, niet -ought)» → nu «swim» (de optie legde zelf het antwoord uit)

#### woordenschat-engels · gecontroleerd 0 · hersteld 2 · verwijderd 0
- stap 2 vraag 2: was afleider «supper», hint «Supper kan, maar dinner is gangbaarder.» → nu «snack», hint «Snack = tussendoortje, geen maaltijd.» ('supper' is ook goed, dus twee goede opties; het uitlegPad noemt supper nog wel als achtergrond)
- stap 3 vraag 1: was hint bij «schoenpoets» «Geen Engels.» → nu «Schoenpoets = shoe polish.» (gecontroleerd: deze hint verschijnt alleen als je 'schoenpoets' kiest. Hij laat zien dat 'shoe' iets met schoen te maken heeft, maar zegt niet dat 'shoes' 'schoenen' betekent. Dat is hetzelfde patroon als bij de andere hints, 'Sokken = socks', dus aanvaardbaar)

#### engels-literatuur-havo-vwo · gecontroleerd 25 · hersteld 6 · verwijderd 0
- stap 1 vraag 3: was «Mary Shelley schreef Frankenstein op 18-jarige leeftijd» → nu «Mary Shelley begon op 18-jarige leeftijd aan Frankenstein» (feitfout: verschenen 1818, toen was ze 20)
- stap 1 vraag 4: was wrongHint «Onzin.» → nu «Niet — het gaat om boeken.» (toon: hint moet richting geven)
- stap 2 vraag 2: was «Alle 14 regels in ABAB CDCD EFEF GG» → nu «Vrijwel allemaal 14 regels in ABAB CDCD EFEF GG» (feit: sonnet 99, 126 en 145 wijken af)
- stap 2 vraag 3: was wrongHint «Wel historisch maar dramatisch genre = tragedy.» → nu «Er komt een Schotse koning in voor — maar kijk hoe het afloopt voor de hoofdpersoon.» (hint gaf het antwoord weg)
- stap 2 vraag 4: was «'Shall I com-PARE thee TO a SUM-mer's DAY?' (5 maal ta-DAH)» → nu «'shall-I · com-PARE · thee-TO · a-SUM · mer's-DAY' (… klemtoon op I, PARE, TO, SUM, DAY)» (voorbeeld toonde maar 4 beklemtoonde lettergrepen)
- stap 3 vraag 3: was «Alle vroeg gestorven (tuberculose).» → nu «Alle drie stierven jong.» (doodsoorzaak Charlotte is niet zeker tbc)
- (buiten checks) stap 1 uitleg: Jane Austen verplaatst van «Restoration + 18e eeuw (1660-1798)» naar «Romantic period» (haar romans verschenen 1811-1817)

#### engels-schrijven-spreken-havo-vwo · gecontroleerd 25 · hersteld 8 · verwijderd 0
- stap 1 vraag 4: was optie «'I have 16 years'» (als enige tussen aanhalingstekens) + hints «zoek de zin die 'have' gebruikt bij een leeftijd» e.d. → nu optie «I have 16 years» + hints «Deze zin is goed Engels — lees de andere zinnen nog eens kritisch.» e.d. (aanhalingstekens en hints verraadden het antwoord)
- stap 2 vraag 5: was vraag «'Looking forward to hearing' — wat is correct?» met opties «…FROM you / …HEARING you / Look forward TO HEAR / …HEAR» → nu vraag «Welke afsluitzin van een e-mail is correct Engels?» met opties «Looking forward to hearing from you / Looking forward hearing you / Look forward to hear from you / Looking forward hear from you» (vraagtekst bevatte het antwoord; hoofdletters weg)
- stap 3 vraag 4: was optie «Korter» + hint «Klopt deels maar primair direct.» → nu «Formeler» + «Niet — passive klinkt vaak juist formeler.» (twee opties goed: de uitleg zegt zelf dat active ook korter is)
- stap 3 vraag 5: was «Plan: 4 alinea's met intro + 2-3 argumenten + conclusie» → nu «Plan: 4-5 alinea's …» (rekenfout: 1 + 2-3 + 1 = 4-5)
- stap 4 vraag 2: was optie «'I have seen her yesterday'» (als enige tussen aanhalingstekens) + hints die naar die zin wezen («welke zin mengt voltooide tijd met een verleden tijdstip?») → nu zonder aanhalingstekens + neutrale hints (antwoord werd weggegeven)
- stap 5 vraag 1: was optie «She does work hard» (hint: «Wel mogelijk maar emphatic») → nu «She working hard» + hint «Niet — hier ontbreekt de persoonsvorm.»; hint B «Niet — 3e p ev = -s.» → «Niet — let op de 3e persoon enkelvoud.» (bij «Welke is correct Engels?» waren twee opties goed)
- stap 5 vraag 3: was hint «Niet — 'to' is infinitief-marker.» → nu «Niet — kijk welke rol 'to' hier heeft: voorzetsel of deel van het werkwoord?» (hint gaf het antwoord weg)
- stap 5 vraag 4: was hints «Niet — passieve toestand.» / «Niet — verbuigd.» → nu «Niet — het CV doet zelf niets.» / «Niet — na 'is' hoort hier een andere vorm.» (hint verraadde antwoord; «verbuigd» klopte niet)
- (buiten checks) stap 4 uitleg: regel «'Last weekend was nice' → vermijd Nederlands letterlijk vertalen» geschrapt (dat is goed Engels, geen fout)

#### frans-cse-havo-vwo · gecontroleerd 25 · hersteld 13 · verwijderd 0
- stap 1 vraag 1: was hint «Niet — leesvaardigheid.» → nu «Niet — luistervaardigheid hoort bij het schoolexamen.» (hint gaf het antwoord weg)
- stap 1 vraag 2: was vraag «Welke woordenboeken…» met antwoord «Eentalig FR + tweetalig FR-NL» → nu «Welk woordenboek is toegestaan bij CSE Frans?», antwoord «Tweetalig Frans-Nederlands / Nederlands-Frans», afleiders «Alleen een eentalig Frans woordenboek / Eentalig én tweetalig tegelijk / Geen enkel woordenboek», hints + uitlegPad aangepast (antwoord fout: volgens de CvTE-regeling toegestane hulpmiddelen mag bij moderne vreemde talen alleen een woordenboek naar en van de doeltaal; eentalig alleen bij Engels op verzoek)
- stap 1 vraag 3: was hint bij «3 uur» «Niet — VWO.» + uitlegPad «VWO: 3 uur» → nu «Te lang.» + «VWO ook 2,5 uur» (feitfout: CSE Frans duurt havo én vwo 150 minuten)
- stap 1 vraag 5: was hint «Belachelijk lang.» → nu «Veel te lang — dan haal je maar 2-3 teksten.» (toon)
- stap 2 vraag 3: was hint «Faux! *ne...que* = alleen maar (positief!).» → nu «Pas op! *ne...que* is geen gewone ontkenning.» (hint gaf het antwoord weg)
- stap 2 vraag 5: was optie «Vooraf in zinnen vlak voor» → nu «In de zinnen er vlak vóór» (krom Nederlands)
- stap 3 vraag 3: was hints «Niet — figuurlijk.» / «Niet — emotionele uitspraak.» → nu «Niet — 'mal' betekent hier niet 'verboden'.» / «Niet — de spreker bedoelt méér dan 'gewoon'.» (hints sloegen nergens op)
- stap 3 vraag 5: was vraag «Welke functie kan alinea 3 in argumentatieve tekst hebben?» → nu «Een alinea midden in een betoog begint met *certes, il est vrai que...* Welke functie heeft die alinea waarschijnlijk?» + hints/niveau aangepast (dubbelzinnig: alinea 3 kan van alles zijn)
- stap 4 vraag 2: was hint «Niet — kwaliteits-krant.» → nu «Niet — Le Monde is geen sensatiekrant.» (hint gaf het antwoord weg)
- stap 4 vraag 5: was «(56 reactoren)» → nu «(57 reactoren, incl. Flamanville 3 sinds 2024)» (verouderd)
- stap 5 vraag 3: was drie sturende hints («welk vak hoort daarbij?» e.d.) → nu «Niet — ze zat nooit in de politiek.» e.d. (hints wezen samen het antwoord aan)
- stap 5 vraag 4: was antwoord «Beide woordenboeken gebruiken (geen eigen aantekeningen)» + uitlegPad «eentalig + tweetalig» → nu «Een tweetalig woordenboek gebruiken (geen eigen aantekeningen)» + uitlegPad aangepast (feitfout, zie stap 1 vraag 2)
- stap 5 vraag 5: was afleider «Verkoper toespreken» (hint «eenzaam examen») → nu «Woorden tellen» + «Niet — dat helpt je niet de tekst te begrijpen.» (onzin-afleider)
- (buiten checks) stap 1 uitleg: «VWO: 3 uur» → «VWO: 2,5 uur»; de hulpmiddelen-sectie zegt nu: alleen tweetalig toegestaan, eentalig níét
- (buiten checks) stap 4 uitleg: «Europe Écologie Les Verts» → «Les Écologistes (groenen, voorheen EELV)» (partij heet sinds 2023 anders)
- (buiten checks) intro: «2,5/3u» → «2,5 uur»

#### passe-compose-frans · gecontroleerd 34 · hersteld 6 · verwijderd 0
- stap 2 vraag 1: was hint «Verkeerde uitgang. -er → -é.» → nu «Verkeerde uitgang — -i hoort bij -ir-werkwoorden.» (hint gaf het antwoord weg)
- stap 2 vraag 2: was hint «Verkeerde uitgang. -ir → -i.» → nu «Verkeerde uitgang — -u hoort bij -re-werkwoorden.» (hint gaf het antwoord weg)
- stap 7 vraag 2: was hint «Mengsel — moet être + est.» → nu «Mengsel — het hulpwerkwoord en de vorm passen niet bij elkaar.» (hint gaf het antwoord weg)
- stap 10 vraag 6: was optie «mangait» (hint «Dat is imparfait») → nu «mangeait» (typefout: de imparfait is mangeait)
- stap 10 vraag 7: was hint bij «alla» «Niet — geen geldige vorm.» → nu «Niet — dat is passé simple, geen participe passé.» (feitfout: alla bestaat wel)
- stap 10 vraag 14: was drie sturende hints («welk werkwoord in het rijtje gaat wél over verplaatsen?» e.d.) → nu «Niet — manger/parler/finir gaat met avoir.» (hints wezen samen het antwoord aan)

#### werkwoordsvervoeging-frans · gecontroleerd 26 · hersteld 1 · verwijderd 0
- stap 3 vraag 4: was optie «vais (van aller — futur proche)» → nu «vais» (de uitleg in de optie gaf het antwoord weg)
- (buiten checks) stap 6 uitleg: «Mix-toets in Doorstroomtoets-stijl» → «Mix-toets» (Frans hoort niet bij de Doorstroomtoets)

### Twijfel voor Mark

- cse-schrijfvaardigheid-nederlands stap 1 vraag 3: «Mag je 'je/jij' in formele brief? → Nee, 'u' gebruiken». In de praktijk schrijven steeds meer organisaties (ook overheid) formele brieven met 'je'; "Soms" is verdedigbaar. Voor vmbo-CSE is 'u' nog de schoolnorm, dus niet gewijzigd.
- argumentatieleer stap 2 vraag 1/2 en 15.15: het pad behandelt 'doordat' elders bewust als argument-signaal (bij oorzaak-gevolg-argumentatie, ook in de stap-uitleg en open vraag 15.15 die 'doordat' accepteert). Ik heb alleen de meerkeuzevraag 2.2 ontdubbelzinnigd; de stap-uitleg en 15.15 heb ik laten staan. Overweeg één lijn in de app (cse-pad zegt nu expliciet: doordat = oorzaak, geen reden).
- argumentatieleer stap 14 vraag 2 (griepprik → griep): klassiek is dit "onjuist oorzakelijk verband (post hoc)"; dat staat niet als optie, "overhaaste generalisatie" is binnen de opties het beste antwoord. Niet gewijzigd.
- argumentatieleer stap 2 vraag 1: audit meldt "antwoord staat in de vraag" — dat is inherent aan de opdracht (het argument in de zin aanwijzen), niet gewijzigd.
- schrijfvaardigheid stap 7 vraag 1 / 13.2: "sterkste argument laatst" is één didactische school; sommige methodes adviseren sterkste eerst óf eerst-en-laatst. Niet gewijzigd.
- nederlands-cse-havo-vwo stap 1 vraag 3: herschreven naar referentieniveau 4F (vwo) / 3F (havo). Formeel is 3F het minimumniveau voor havo én vwo en 4F het streefniveau voor vwo — als je dit te fijnzinnig vindt, kan de vraag ook weg. Metadata `referentieNiveau: "havo-B2-vwo-C1"` en trefwoord "VWO C1" heb ik niet aangeraakt.
- nederlands-cse-havo-vwo stap 4 (samenvatten): de stapuitleg en vragen gingen uit van één grote vwo-samenvatting van ~250 woorden met 60/40-beoordeling. Volgens bronnen verdween die opdracht in 2015 uit het CE; nu zijn er samenvattingsvragen met een woordgrens (havo + vwo). Ik heb het minimaal bijgewerkt; de rest van de uitleg (5-stappenmethode, voorbeeldsamenvatting van ~250 woorden) staat er nog als oefen-/SE-techniek. Een vakdocent zou de hele stap met een echt CE-voorbeeld kunnen herschrijven. De taalaftrekregel (max. 4 punten, aangepast in 2021) heb ik bewust vaag gelaten ("kan aftrek opleveren").
- nederlands-cse-havo-vwo stap 1-uitleg (buiten checks): "HAVO: 1-2 lange teksten", "3 uur ÷ 2 teksten": echte CE's hebben vaak 3-4 teksten. Niet aangepast.
- cse-leesvaardigheid-nederlands stap 1-uitleg (buiten checks): "90 min voor 35-45 vragen". Het CE vmbo-gt duurt 120 min, havo/vwo 180 min. Niet aangepast.
- literatuurgeschiedenis stap 14 vraag 13 ("Een roman is meestal hoeveel pagina's?"): zwakke vraag zonder vaste norm. Alleen een hint verbeterd; mogelijk weghalen.
- literatuurgeschiedenis stap 14 vraag 3 ("Hij dacht: vandaag wordt geen goede dag" → personaal): een auctoriële verteller kan ook gedachten weergeven. Schoolboekantwoord is personaal, dus laten staan.
- literatuurgeschiedenis (uitleg stap 10, buiten checks): De avonden (1947) staat onder postmodernisme (~1965-2000). Gangbaarder is "naoorlogs proza". Alleen in de hints rechtgezet.
- spelling stap 11 vraag 1 uitlegPad: de regel "eindigt op n/l/r → -tje" klopt niet na een korte klinker (bal → balletje, pan → pannetje). Niet aangepast, omdat het voor 'boom' niet uitmaakt; kan beter met "-etje na korte klinker".
- zinsontleding stap 3 vraag 1: «De groep kinderen wachten» geldt als fout. Volgens Taaladvies mag bij 'een groep/aantal + meervoud' soms ook een meervoudige pv (inhoudelijke congruentie); met 'de groep' is enkelvoud wel duidelijk de norm. Niet gewijzigd.
- zinsontleding stap 13 vraag 1: pv in de bijzin 'toen ik thuiskwam' wordt 'kwam' genoemd; sommige methodes rekenen 'thuiskwam' als pv. Het aantal (twee) klopt hoe dan ook; niet gewijzigd.
- duits-cse-havo-vwo stap 1 (uitleg) en vraag 1.4: welke woordenboeken zijn precies toegestaan (eentalig én tweetalig?) volgens de hulpmiddelenregeling niet nagegaan; de vraag (Duden = eentalig) zelf klopt.
- duits-cse-havo-vwo stap 5 vraag 4: «huidige Bundeskanzler (2025)» = Merz klopt, maar dit veroudert; vraag liever tijdloos maken of jaarlijks nalopen.
- Alle paden: de uitlegPad-niveaus noemen letterlijk het antwoord (bv. basis: "drinkt."). Dat is het vaste patroon in de app (uitlegPad opent na een fout), daarom niet aangepast.
- engels-cse-havo-vwo stap 1 vraag 2 / uitleg: volgens de tekst mag ook een woordenboek Engels-Engels. Officieel is het een woordenboek van en naar de doeltaal. Niet gewijzigd, wel even nakijken.
- engels-cse-havo-vwo stap 1 (buiten checks): de tekstlengtes (havo 400-900 en vwo 600-1500 woorden) en "Woordenschat archaïsche vormen" kon ik niet controleren. Echte examenteksten zijn vaak korter. Niet gewijzigd.
- engels-cse-havo-vwo stap 3 vraag 5: "Welke valstrik is het meest schadelijk?" Het goede antwoord 'eind-haasten' en de afleider 'te traag lezen' hangen samen (oorzaak en gevolg). Dat is een beetje een mening. Niet gewijzigd.
- cse-strategie-engels-vmbo stap 4 (buiten checks): "gemiddeld VMBO-GT-Engels-cijfer = 6,3" en "~5% van vragen heeft NOT" zijn niet onderbouwd. Niet gewijzigd.
- cse-leesvaardigheid-engels stap 6 vraag 5: audit:vragen meldt "antwoord staat in de vraag". Dat hoort bij een verwijsvraag ('they' = Anna and Tim) en is geen echt lek. Niet gewijzigd.
- cse-leesvaardigheid-engels stap 3 vraag 6 (jubilant): bij twee foute opties staat de hint "Geen positieve emotie." Daardoor blijft er na uitsluiting maar één antwoord over. Dat is licht, en de context ("after passing the test") wijst er ook al naar. Niet gewijzigd.
- frans-cse-havo-vwo stap 1 (uitleg) en hele pad: «~10 teksten, ~40-45 vragen» per examen is een grove schatting; in echte examens Frans havo/vwo staan vaak meer, kortere teksten. Niet aangepast. Vraag 5 («~15 min per tekst») gaat van 10 teksten uit en zegt dat er ook bij.
- frans-cse-havo-vwo: de `intro` in `pathManifest.generated.json` noemt nog «2,5/3u». Dat bestand is gegenereerd en hoort niet bij mijn opdracht; het ververst bij de volgende prebuild.
- engels-schrijven-spreken-havo-vwo stap 3 vraag 5 / stap 2 vraag 4: lengte-eisen (essay havo 250-300 woorden, cover letter 200-300) verschillen per school. Ze staan als vaste feiten gebracht, maar ik heb ze laten staan.
- engels-schrijven-spreken-havo-vwo stap 5 vraag 1: het uitlegPad noemt nog «She does work hard» (goed Engels, maar met nadruk). Dat klopt, maar het is nu geen optie meer.
- engels-schrijven-spreken-havo-vwo stap 3 vraag 3 en stap 4 vraag 4: de hints («Wat is te informeel?», «wat klinkt opgedreund?») sturen behoorlijk richting het antwoord. Ik heb ze als denkprikkel laten staan.
- passe-compose-frans: een aantal hints legt bij een foute optie de regel uit (bv. «Marie is vrouwelijk → +e», «Pas staat tussen avoir en p.p.»). Ik heb ze laten staan als uitleg van de regel. Alleen hints die letterlijk het goede antwoord noemden zijn herschreven.

**Deel B: gecontroleerd 708 · hersteld 154 · verwijderd 0**

---

## Deel C — Oefenbank VO deel A (`sampleQuestions.js`, klas1–klas6)

Groepen klas1–klas6 van: taal, nederlands, engels, duits, frans, spaans, latijn, grieks, wiskunde, wiskunde-a, wiskunde-b, natuurkunde, scheikunde en nask.
- **Bestand:** `sampleQuestions.js` is niet direct bewerkt. De herstellingen staan in `docs/audit/fixes-sq-vo-a.json` (583 regels voor 582 vragen) en zijn toegepast met `scripts/audit/pas-fixes-toe.mjs sq-vo-a`.
- **Wat er vooral mis was:** zoals verwacht vooral plaksel-afleiders en omgekeerde kopieën van het goede antwoord, vooral in de klas1/klas3-sets.

### Lijst van groepen

| pad/groep | gecontroleerd | hersteld | verwijderd |
|---|---|---|---|
| taal.klas1 | 68 | 47 | 0 |
| taal.klas3 | 50 | 45 | 0 |
| nederlands.klas1 | 50 | 43 | 0 |
| nederlands.klas3 | 29 | 29 | 0 |
| nederlands.klas4 | 14 | 1 | 0 |
| spaans.klas1 | 10 | 0 | 0 |
| spaans.klas3 | 10 | 0 | 0 |
| spaans.klas5 | 10 | 1 | 0 |
| latijn.klas1 | 10 | 1 | 0 |
| latijn.klas3 | 10 | 1 | 0 |
| latijn.klas5 | 10 | 2 | 0 |
| engels.klas1 | 50 | 36 | 0 |
| engels.klas3 | 50 | 48 | 0 |
| grieks.klas3 | 10 | 1 | 0 |
| grieks.klas5 | 10 | 0 | 0 |
| duits.klas1 | 50 | 25 | 0 |
| duits.klas3 | 50 | 45 | 0 |
| frans.klas1 | 50 | 30 | 0 |
| frans.klas3 | 50 | 46 | 0 |
| wiskunde.klas1 | 50 | 10 | 0 |
| wiskunde.klas3 | 50 | 18 | 0 |
| wiskunde.klas4 | 30 | 2 | 0 |
| natuurkunde.klas1 | 50 | 36 | 0 |
| natuurkunde.klas3 | 50 | 45 | 0 |
| natuurkunde.klas4 | 20 | 0 | 0 |
| nask.klas1 | 50 | 25 | 0 |
| scheikunde.klas3 | 50 | 43 | 0 |
| scheikunde.klas4 | 20 | 0 | 0 |
| wiskunde-a.klas5 | 10 | 0 | 0 |
| wiskunde-a.klas6 | 10 | 0 | 0 |
| wiskunde-b.klas5 | 10 | 0 | 0 |
| wiskunde-b.klas6 | 10 | 2 | 0 |

### Herstellingen (was → nu, reden)

#### taal.klas1 · gecontroleerd 68 · hersteld 47 · verwijderd 0
- [2] optie 2 «Een voornaamwoord dat een zelfstandig naamwoord beschrijft» → «Een woord dat een handeling aangeeft» (plaksel-afleider vervangen)
- [3] optie 1 «huis of snel» → «huis» (plaksel-afleider vervangen)
- [6] optie 2 «fiets of hond» → «hond» (plaksel-afleider vervangen)
- [8] optie 3 «hij rijdt of zij wordt» → «jij vindt» (plaksel-afleider vervangen)
- [9] q «Wat is het suffix in 'vriendelijkheid'?» → «Welke suffixen (achtervoegsels) zitten in 'vriendelijkheid'?»; optie 1 «-lijk of -heid» → «-lijk en -ing»; optie 3 «-lijk» → «-ig en -heid»; optie 4 «-heid» → «-er en -heid» (vraag vroeg 'het suffix' (enkelvoud) terwijl het antwoord twee suffixen is; '-lijk' en '-heid' los waren half goed; plaksel-afleider)
- [10] optie 2 «Een bijvoeglijk naamwoord onder bepaalde omstandigheden» → «Een bijvoeglijk naamwoord» (plaksel-afleider vervangen)
- [12] optie 1 «Een zelfstandig naamwoord onder bepaalde omstandigheden» → «Een zelfstandig naamwoord» (plaksel-afleider vervangen)
- [15] q «Welke spelling is correct?» → «Welke zin staat correct in de verleden tijd?»; optie 1 «ze rijdt te hard maar dit is verleden» → «ze rijdde te hard»; optie 3 «ze rijd te hard» → «ze reedt te hard»; uitleg «Verleden tijd van 'rijden': 'reed' (zwak/sterk werkwoord).» → «Verleden tijd van 'rijden': 'reed' (sterk werkwoord: de klinker verandert).» ('ze rijdt te hard' is óók correcte spelling (tegenwoordige tijd) → 2 goede opties; plaksel 'maar dit is verleden'; uitleg 'zwak/sterk' → rijden is sterk)
- [16] optie 3 «'mijn', 'jouw' of 'hij', 'zij'» → «'die', 'dat'» (plaksel-afleider vervangen)
- [18] optie 1 «Het boek ligt op tafel. of Ik koop een boek.» → «Ik koop een boek.» (plaksel-afleider vervangen)
- [19] optie 1 «Vergelijking met 'als' of Overdrijving» → «Herhaling van klanken» (plaksel-afleider vervangen)
- [21] optie 4 «de buurman in de natuur» → «de buurman» (plaksel-afleider vervangen)
- [22] optie 1 «Herhaling van klanken of Personificatie» → «Een overdrijving»; optie 2 «Vergelijking met 'als' of 'zoals'» → «Beeldspraak met 'als' of 'zoals'» (plaksel-afleider; goede optie herhaalde het vraagwoord 'vergelijking' (weggever))
- [23] optie 2 «Een tegenstelling of Een conclusie» → «Een samenvatting»; optie 3 «Een bewering + onderbouwing» → «Een reden die een standpunt onderbouwt» (plaksel-afleider; goede optie in lijn gebracht met de uitleg ('bewering + onderbouwing' is eerder standpunt + argument))
- [24] q «Welk zinsdeel is het meewerkend voorwerp?» → «Welk zinsdeel is het meewerkend voorwerp in: 'Jan geeft zijn moeder de bloemen'?»; optie 1 «de bloemen of Jan geeft» → «Jan»; optie 4 «Jan geeft» → «geeft» (de zin ontbrak in de vraag; plaksel-afleider)
- [25] optie 2 «Rijm aan het einde of Een vergelijking» → «Een overdrijving» (plaksel-afleider vervangen)
- [26] optie 3 «Formeel vs. informeel of Geen verschil» → «Geen verschil»; uitleg «'Huis' = denotatief (letterlijk), 'thuis' = connotatief (warmte, gevoel).» → «Denotatie = de letterlijke betekenis ('huis' = woning). Connotatie = de bijbetekenis of het gevoel erbij ('huis' kan ook warmte en geborgenheid oproepen).» (plaksel-afleider; uitleg vergeleek twee verschillende woorden ('huis'/'thuis') i.p.v. betekenislagen van één woord)
- [27] optie 3 «Beschrijvend of Informatief» → «Verhalend» (plaksel-afleider vervangen)
- [30] optie 3 «Hoogtepunt in de praktijk» → «Hoogtepunt» (plaksel-afleider vervangen)
- [32] optie 1 «Beide B en C» → «Zowel positief als negatief» ('Beide B en C' verwijst naar letters en klopt niet meer zodra de opties geschud worden)
- [33] optie 2 «Vergelijking of Rijmschema» → «Herhaling» (plaksel-afleider vervangen)
- [34] optie 2 «Vergelijking onder bepaalde omstandigheden» → «Vergelijking» (plaksel-afleider vervangen)
- [36] optie 2 «Een aanbod zonder verwacht antwoord» → «Een open vraag» (plaksel/omgekeerde kopie ('Een aanbod zonder verwacht antwoord'))
- [37] optie 1 «'Mij' = formeel, 'me' = informeel of 'Ik' = formeel» → «'Ik' = enkelvoud, 'mij' = meervoud» (plaksel-afleider vervangen)
- [39] q «Wat is een dt-regel bij 'jij' als inversie?» → «Wat gebeurt er met de -t bij inversie met 'jij'?»; optie 1 «t wordt altijd toegevoegd» → «De t komt er altijd bij»; optie 2 «t wordt verdubbeld» → «De t wordt verdubbeld»; optie 3 «t wordt altijd toegevoegd of t wordt verdubbeld» → «Er komt -dt achter»; optie 4 «t valt weg na inversie met 'jij'» → «De t valt weg»; uitleg «Bij inversie: 'Rijdt jij?' → 'Rijd jij?' — de -t valt weg na 'jij'.» → «Bij inversie valt de -t weg: 'Jij rijdt.' → 'Rijd jij?'» (onduidelijke vraagzin; plaksel-afleider; uitleg suggereerde 'Rijdt jij?' als beginvorm)
- [41] optie 1 «'Zijn' gebruik je bij bewegings- en toestandswerkwoorden; 'hebben' bij de rest» → «'Zijn' gebruik je bij een verandering van plaats of toestand; 'hebben' bij de rest»; optie 4 «'hebben' bij de rest; 'Zijn' gebruik je bij bewegings- en toestandswerkwoorden» → «'Hebben' gebruik je bij alle werkwoorden»; uitleg «Bv: 'Ik ben gelopen.' vs. 'Ik heb gegeten.' — zijn bij beweging/toestand.» → «Bv: 'Ik ben naar huis gelopen.' en 'Ik ben gegroeid.' vs. 'Ik heb gegeten.' en 'Ik heb geslapen.' — 'zijn' bij verandering van plaats of toestand.» (omgekeerde kopie van het goede antwoord; feitfout: bij toestandswerkwoorden (slapen, zitten) gebruik je juist 'hebben')
- [42] optie 2 «Een opsomming van feiten onder bepaalde omstandigheden» → «Een opsomming van feiten» (plaksel-afleider vervangen)
- [43] optie 2 «Interne focalisatie of Externe focalisatie» → «Ik-perspectief» (plaksel-afleider vervangen)
- [44] optie 4 «inductief: van waarneming naar regel; Deductief: van regel naar conclusie» → «Deductief: van waarneming naar regel; inductief: van regel naar conclusie» (omgekeerde kopie van het goede antwoord → nu omgewisselde (foute) definities)
- [46] optie 2 «Genre in de natuur» → «Genre» (plaksel-afleider vervangen)
- [47] optie 4 «want of dus» → «omdat» (plaksel-afleider vervangen)
- [48] optie 1 «Formeel juridisch onder bepaalde omstandigheden» → «Formeel juridisch» (plaksel-afleider vervangen)
- [50] optie 3 «spreektaal is informeler; Schrijftaal is formeler en volgt grammaticaregels strenger» → «Er is geen verschil» (omgekeerde kopie van het goede antwoord)
- [51] q «Wat is de functie van een koptekst in een artikel?» → «Wat is de functie van de kop (titel) boven een artikel?»; optie 1 «De prikkelende openingszin die de lezer trekt» → «Kort en pakkend de lezer trekken»; optie 4 «Een inhoudsopgave onder bepaalde omstandigheden» → «Een inhoudsopgave» ('koptekst' betekent iets anders (tekst bovenaan elke pagina); goede optie noemde 'openingszin' i.p.v. kop; plaksel-afleider)
- [52] optie 1 «Thema = terugkerend element onder bepaalde omstandigheden» → «Thema = terugkerend element; motief = overkoepelend idee»; optie 2 «Geen» → «Geen verschil» (plaksel-afleider vervangen)
- [54] optie 1 «Het hoogtepunt of verrassende begin dat de anekdote kracht geeft» → «De aanloop die de situatie schetst» (afleider was bijna-kopie van het goede antwoord ('begin' i.p.v. 'einde'))
- [55] optie 2 «Het boek is interessant. of Zij fietst naar school.» → «Mijn buurman kookt goed.» (plaksel-afleider vervangen)
- [56] optie 1 «Een vergelijking of Een overdrijving» → «Een herhaling» (plaksel-afleider vervangen)
- [57] optie 2 «Spreektaal met stopwoorden onder bepaalde omstandigheden» → «Spreektaal met stopwoorden» (plaksel-afleider vervangen)
- [58] optie 3 «Personificatie van de normale zinswoordvolgorde: werkwoord vóór het onderwerp» → «Herhaling» (plaksel-afleider vervangen)
- [59] optie 3 «Rijm aan het einde onder bepaalde omstandigheden» → «Rijm aan het einde» (plaksel-afleider vervangen)
- [60] optie 3 «Introduceert een opsomming of Geeft een vraag aan» → «Geeft een citaat aan» (plaksel-afleider vervangen)
- [61] optie 1 «Een schrijver met gemeenschappelijke stijlkenmerken en ideeën» → «Een vaste versvorm» (afleider was bijna-kopie van het goede antwoord ('Een schrijver met gemeenschappelijke stijlkenmerken'))
- [63] optie 1 «Vergelijking, Herhaling van woorden en Personificatie die in twee betekenissen tegelijk geldt» → «Vergelijking»; optie 3 «Één woord of uitdrukking die in twee betekenissen tegelijk geldt» → «Eén woord of uitdrukking die in twee betekenissen tegelijk geldt» (plaksel-afleider; typefout 'Één' → 'Eén')
- [64] optie 2 «Open aanbod vereist uitleg; gesloten vraag een ja/nee antwoord» → «Open vraag heeft altijd een kort antwoord» (plaksel-afleider vervangen)
- [65] optie 2 «Een zin, Een conclusie en Een inleiding met één argument of idee (alinea)» → «Een losse zin» (plaksel-afleider vervangen)
- [66] optie 1 «De toon, De stijl en Het genre van waaruit de verteller of schrijver waarneemt» → «De toon» (plaksel-afleider vervangen)

#### taal.klas3 · gecontroleerd 50 · hersteld 45 · verwijderd 0
- [1] optie 2 «Overdrijving als uitzondering» → «Overdrijving» (plaksel-afleider vervangen)
- [3] optie 2 «Symboliek en mystiek of Romantiek en gevoel» → «Strenge rijmregels» (plaksel-afleider vervangen)
- [4] optie 4 «Alwetende verteller of Brief in roman» → «Dialoog tussen personages» (plaksel-afleider vervangen)
- [5] q «Welke stroming kenmerkt de 19e eeuw in Nederland?» → «Welke stroming kenmerkt de eerste helft van de 19e eeuw in Nederland?» ('19e eeuw' is dubbelzinnig: ook Realisme, Naturalisme en Tachtigers vallen in die eeuw; uitleg noemt ca. 1780-1850)
- [6] optie 1 «8-regelig gedicht of Episch gedicht» → «12-regelig gedicht» (plaksel-afleider vervangen)
- [7] optie 3 «Couperus of Hermans» → «Vondel» (plaksel-afleider vervangen)
- [8] optie 2 «Wetenschappelijke school of Politieke beweging 1880» → «Muziekstroming 1880» (plaksel-afleider vervangen)
- [9] optie 1 «Open, spannend begin» → «Gelukkig einde» (afleider was bijna-kopie van het goede antwoord ('begin' i.p.v. 'einde'))
- [10] optie 2 «Episch = kort, lyrisch = lang of Lyrisch = drama» → «Episch = gedicht, lyrisch = toneel» (plaksel-afleider vervangen)
- [12] optie 2 «Samenvatting of Hoofdstuk 1» → «Nawoord na het verhaal» (plaksel-afleider vervangen)
- [13] optie 4 «Volksvertellingen onder bepaalde omstandigheden» → «Volksvertellingen» (plaksel-afleider vervangen)
- [14] optie 4 «Moderne schrijver of Wetenschapper» → «Ridder» (plaksel-afleider vervangen)
- [15] optie 4 «Cliffhanger of Flashback» → «Epiloog» (plaksel-afleider vervangen)
- [17] optie 2 «Einde zin of Citaat» → «Begin van een opsomming» (plaksel-afleider vervangen)
- [18] optie 2 «Eén vertelstem als uitzondering» → «Eén vertelstem» (plaksel-afleider vervangen)
- [19] optie 1 «Zeggen wat je meent onder bepaalde omstandigheden» → «Zeggen wat je meent» (plaksel-afleider vervangen)
- [20] optie 3 «Een roman over de natuur die de mens als product van milieu en erfelijkheid toont» → «Een roman met een sprookjesachtig einde» (plaksel-afleider vervangen)
- [21] optie 4 «De echte schrijver onder bepaalde omstandigheden» → «De echte schrijver» (plaksel-afleider vervangen)
- [22] optie 1 «Een stijlfiguur van als 'groot' erkende literaire werken» → «Een rijmschema» (plaksel-afleider vervangen)
- [23] optie 1 «Herhaling, Personificatie en Vergelijking die er logisch niet bij passen» → «Herhaling»; optie 3 «Één werkwoord verbindt twee zinsdelen die er logisch niet bij passen» → «Eén werkwoord verbindt twee zinsdelen die er logisch niet bij passen» (plaksel-afleider; typefout 'Één' → 'Eén')
- [24] optie 3 «Motief als onderdeel van de grammaticale analyse» → «Motief»; optie 4 «Fabula vs. sjuzjet (verhaalvolgorde vs. vertelorde)» → «Fabula vs. sjuzjet (verhaalvolgorde vs. vertelvolgorde)» (plaksel-afleider; typefout 'vertelorde' → 'vertelvolgorde')
- [25] optie 2 «Een bronnenlijst, Een conclusie en Een inleiding met één hoofdgedachte + uitwerking en afsluiting» → «Een losse zin» (plaksel-afleider vervangen)
- [26] optie 2 «Een vertelstijl van een tekst naar andere teksten» → «Een rijmschema» (plaksel-afleider (bijna dubbel met 'Een vertelstijl'))
- [27] optie 1 «Literaire vernieuwing rond 1880: kunst achter de kunst» → «Literaire vernieuwing rond 1950: experimentele poëzie» (afleider was bijna-kopie van het goede antwoord ('kunst achter de kunst'))
- [28] q «Welk begrip beschrijft de tijdversnelling in een verhaal?» → «Welk begrip beschrijft het overslaan van een stuk tijd in een verhaal?» ('tijdversnelling' past ook op 'Samenvatting' → 2 goede opties; ellips = tijdsprong)
- [29] optie 2 «Een Duits gedicht met herhaalde beginregels als refrein» → «Een gedicht van precies drie regels» (plaksel-afleider vervangen)
- [30] optie 2 «Perspectief onder bepaalde omstandigheden» → «Perspectief» (plaksel-afleider vervangen)
- [31] optie 2 «Inleiding schrijven aan de tegenpartij maar dan toch je eigen standpunt verdedigen» → «Alleen de argumenten van de tegenpartij noemen» (plaksel-afleider vervangen)
- [32] optie 2 «Een scène met weinig belang die het thema of de wending van het verhaal blootlegt» → «Een korte overgangsscène» (plaksel-afleider vervangen)
- [33] optie 1 «parodie imiteert/spot met een genre of werk; Satire bekritiseert maatschappij via humor» → «Satire imiteert een genre of werk; parodie bekritiseert de maatschappij»; optie 2 «Parodie bekritiseert maatschappij» → «Satire is altijd in dichtvorm» (omgekeerde kopie van het goede antwoord → nu omgewisselde (foute) definities)
- [34] optie 3 «Een vrij vers, Een kwatrijnen-gedicht en Een haiku met ABA BCB-rijmschema (Dante)» → «Een haiku» (plaksel-afleider vervangen)
- [35] optie 3 «Een lang gedicht, Een rijmdicht en Een sonnet met een onverwachte wending» → «Een sonnet» (plaksel-afleider vervangen)
- [36] q «Welk concept beschrijft de spanning tussen verhaalinhoud en vertelvorm?» → «Welk begrip uit de verhaalanalyse (Genette) beschrijft het verschil tussen wát er gebeurt en hóé het verteld wordt?»; optie 1 «Narratieve spanning (tussen verhaal en vertelwijze)» → «Verhaal versus vertelwijze (story vs. discourse)»; optie 2 «Stijl als onderdeel van de grammaticale analyse» → «Stijl» (goede optie herhaalde de vraag letterlijk (weggever); 'narratieve spanning' is geen gangbare term; plaksel-afleider)
- [37] optie 3 «Naturalisme die de zinloosheid van het bestaan en de menselijke zoektocht naar betekenis toont» → «Symbolisme» (plaksel-afleider vervangen)
- [38] optie 3 «Realistisch schrijven om de lezer bewust te maken dat hij een kunstwerk ervaart, niet de werkelijkheid» → «Spanning opbouwen met een cliffhanger» (plaksel-afleider vervangen)
- [39] optie 3 «Een stijlfiguur of Een rijmwoord» → «Een refrein» (plaksel-afleider vervangen)
- [40] q «Welk begrip beschrijft de betrouwbaarheid van een verteller?» → «Hoe heet een verteller die de lezer (bewust of onbewust) misleidt?»; optie 1 «Focalisatie» → «Focalisator»; optie 2 «Perspectief» → «Alwetende verteller»; optie 3 «Betrouwbaarheid — onbetrouwbare verteller (unreliable narrator) vs. betrouwbare» → «Onbetrouwbare verteller»; optie 4 «Toon» → «Personale verteller» (goede optie herhaalde het vraagwoord 'betrouwbaarheid' (weggever))
- [41] optie 2 «Vooruitwijzen, Beschrijven en Spanning opbouwen om context te geven» → «Een samenvatting geven» (plaksel-afleider vervangen)
- [42] optie 2 «De eerste vier regels onder bepaalde omstandigheden» → «De eerste vier regels» (plaksel-afleider vervangen)
- [43] optie 1 «epiek: verhalend proza of epos; Lyriek: uiting van gevoel (gedicht)» → «Lyriek: rijmt altijd; epiek: rijmt nooit» (omgekeerde kopie van het goede antwoord (en dubbel met optie 4))
- [44] optie 1 «Een genre, Een stijlfiguur en Een tijdlijn van tijd en ruimte in literatuur» → «Een genre» (plaksel-afleider vervangen)
- [45] optie 2 «Een vrij vers, Een sonnet en Een lang rijmdicht met 5-7-5 lettergrepen» → «Een sonnet» (plaksel-afleider vervangen)
- [46] optie 2 «De vijand in een verhaal onder bepaalde omstandigheden» → «De tegenstander in een verhaal» (plaksel-afleider vervangen)
- [48] optie 1 «Een mening, Een samenvatting en Een boekverslag naar stijl, structuur, thema en betekenis van een tekst» → «Een mening» (plaksel-afleider vervangen)
- [49] optie 4 «symbool: een enkel element dat een abstractie verbeeldt; Allegorie: een volledig verhaal met dubbele betekenis» → «Allegorie: een enkel element dat een abstractie verbeeldt; symbool: een volledig verhaal» (omgekeerde kopie van het goede antwoord → nu omgewisselde (foute) definities)

#### nederlands.klas1 · gecontroleerd 50 · hersteld 43 · verwijderd 0
- [0] was optie «Een zelfstandig naamwoord dat de persoon en tijd aangeeft in een zin» → «Het zinsdeel dat aangeeft wie de handeling uitvoert» (plaksel-afleider)
- [1] was optie «Een zin die niet zelfstandig kan staan of Een tussenwerper» → «Een zin zonder persoonsvorm» (plaksel-afleider)
- [2] was optie «Een overdrijving, Een herhaling en Een vergelijking met 'zoals' of 'als' wordt zonder vergelijkingswoord» → «Een herhaling van dezelfde beginklank» (plaksel-afleider)
- [3] was vraag «Wat is de verleden tijd van 'rijden'?» → «Wat is de onvoltooid verleden tijd van 'rijden'?»; optie «Gerijden» → «Rijdde / rijdden»; optie «Gerijden of Gereden» → «Ried / rieden» ('verleden tijd' dubbelzinnig (gereden = voltooid deelwoord); plaksel-afleider + niet-bestaand woord)
- [4] was optie «Een voornaamwoord dat een eigenschap van een zelfstandig naamwoord beschrijft» → «Een woord dat zegt hoe of waar iets gebeurt» (plaksel-afleider)
- [5] was optie «Een woord met tegengestelde betekenis of Een samengesteld woord» → «Een woord dat hetzelfde klinkt maar anders geschreven wordt» (plaksel-afleider)
- [9] was optie «Het onderwerp ondergaat de handeling (er staat 'worden' of 'zijn' + onvoltooid deelwoord)» → «Een zin die eindigt met een uitroepteken» (bijna-kopie van het goede antwoord verraadt het antwoord)
- [10] was optie «Meerdere personen als onderwerp of Een bijzin als onderwerp» → «Een zin zonder onderwerp» (plaksel-afleider)
- [11] was optie «Het bijvoeglijk naamwoord dat de handeling rechtstreeks ondergaat» → «Het zinsdeel dat aangeeft waar of wanneer iets gebeurt»; optie «Het zelfstandig naamwoord dat de handeling rechtstreeks ondergaat» → «Het zinsdeel dat de handeling rechtstreeks ondergaat» (goede antwoord) (plaksel-afleider; lijdend voorwerp is een zinsdeel, niet altijd een zelfstandig naamwoord ('Ik zie hem'))
- [12] was optie «Een woord opgebouwd uit twee of minder zelfstandige woorden» → «Een woord dat uit één lettergreep bestaat» (plaksel-afleider ('twee of minder'))
- [14] was optie «Een bijwoord, Een werkwoord en Een voegwoord dat een gevoel uitdrukt (bijv. 'Au!', 'Hé!', 'Pfff')» → «Een bijwoord» (plaksel-afleider)
- [16] was optie «Een zin met 'niet' of 'alle' die iets ontkent» → «Een zin die een bevel geeft» (bijna-kopie van het goede antwoord)
- [17] was optie «Rijm aan het einde van regels van dezelfde beginletter/klanken in opeenvolgende woorden» → «Herhaling van dezelfde klinker in opeenvolgende woorden» (plaksel-afleider)
- [18] was optie «'hen' is lijdend voorwerp of na voorzetsel; 'Hun' is meewerkend voorwerp» → «'Hun' is lijdend voorwerp; 'hen' is meewerkend voorwerp» (omgekeerde kopie: twee opties goed)
- [19] was optie «Alle vervoegingen van een werkwoord onder bepaalde omstandigheden» → «Alle vervoegingen van een werkwoord» (staart 'onder bepaalde omstandigheden')
- [20] was optie «Een bijvoeglijk naamwoord dat een zelfstandig naamwoord vervangt (ik, hij, dit, die)» → «Een woord dat een handeling aangeeft» (plaksel-afleider)
- [21] was optie «Een zelfstandige zin die afhankelijk is van een andere zin en begint met een voegwoord» → «Een zin zonder persoonsvorm»; optie «Een zin die afhankelijk is van een andere zin en begint met een voegwoord» → «Een zin die afhankelijk is van een andere zin en meestal met een voegwoord begint» (goede antwoord) (plaksel-afleider; bijzin kan ook met betrekkelijk voornaamwoord beginnen)
- [22] was optie «De inhoud, Het genre en De opbouw waarop een schrijver taal gebruikt (woordkeuze, zinsbouw, toon)» → «De inhoud van de tekst» (plaksel-afleider)
- [23] was optie «Een kleinere of vriendelijkere variant van een bijvoeglijk naamwoord» → «Een samengesteld woord» (plaksel-afleider)
- [24] was optie «Beide zijn voegwoorden bij vergelijkingen» → «'Dan' gebruik je alleen bij een voorwaarde»; optie «Beide zijn voegwoorden bij vergelijkingen of 'Als' = vergelijking na comparatief» → «'Dan' en 'als' zijn altijd uitwisselbaar» (plaksel-afleider; 'beide zijn voegwoorden bij vergelijkingen' is op zich ook waar)
- [25] was optie «Een tastbaar ding in het dagelijks taalgebruik en literatuur» → «Een tastbaar ding (tafel, fiets)» (staart-afleider)
- [26] was optie «Een metafoor van hetzelfde in andere woorden (bv. 'enkel en alleen')» → «Een tegenstelling in één uitdrukking (bv. 'oorverdovende stilte')» (plaksel-afleider)
- [27] was optie «Een nevengeschikte zin die zelfstandig kan staan en de bijzin bevat of eraan gekoppeld is» → «Een zin die met een voegwoord begint» (plaksel-afleider)
- [29] was optie «Een enkelvoudige zin heeft één persoonsvorm; een samengestelde zin heeft twee of minder persoonsvormen» → «Een enkelvoudige zin is korter dan tien woorden» (plaksel-afleider ('twee of minder'))
- [30] was optie «Een vergelijking met het woord 'als' of 'zoals' of Een overdrijving voor effect» → «Het geven van menselijke eigenschappen aan dingen» (plaksel-afleider)
- [31] was optie «Argumenten geven voor het standpunt in de moderne taal- en letterkunde» → «Argumenten geven voor het standpunt» (staart-afleider)
- [32] was vraag «Wat zijn de drie tekstsoorten?» → «Welk rijtje bevat drie zakelijke tekstsoorten?»; optie «Beschrijvend, verhalend, betogend» → «Verhalend, poëtisch, informatief»; optie «Informatief, persuasief, narratief» → «Formeel, informeel, dialect»; uitleg aangepast («De drie hoofdsoorten: informatief (feiten overdragen), betog…» → «Zakelijke tekstsoorten: informatief (feiten overdragen), bet…») (dubbelzinnig: 'de drie tekstsoorten' bestaat niet, opties 2 en 3 ook verdedigbaar)
- [33] was optie «Bovendien, ook, daarnaast of Eerst, daarna, ten slotte» → «Want, omdat, doordat» (plaksel-afleider)
- [34] was optie «passief: het onderwerp voert de handeling uit; passief: het onderwerp ondergaat de handeling» → «Actief: met een bijzin; passief: zonder bijzin» (kapotte plaksel-afleider)
- [35] was optie «Er is geen betekenisverschil in gangbaar taalgebruik» → «Er is geen verschil»; optie «Denotatie gaat over uitspraak; connotatie over spelling of Er is geen betekenisverschil in gangbaar taalgebruik» → «Denotatie is dialect; connotatie is standaardtaal» (staart- en plaksel-afleider)
- [36] was optie «Een bijzondere bijzin waarbij een deelwoord als werkwoord fungeert» → «Een beknopte bijzin met een deelwoord en zonder persoonsvorm» (goede antwoord); optie «Een zin met een persoonsvorm in de voltooide tijd of Een zin met een zelfstandig naamwoord als kern» → «Een zin zonder werkwoord» (plaksel-afleider; goed antwoord vaag ('bijzondere bijzin'))
- [37] was optie «Een stijlfiguur waarbij iets overdreven wordt of Een vraag die retorisch gesteld wordt» → «Een letterlijk citaat tussen aanhalingstekens» (plaksel-afleider)
- [38] was optie «Enkel fouten aangeven in het schrijfproces, De lengte van zinnen bepalen en Alleen esthetisch voor vormgeving van de tekst door pauzes, intonatie en relaties aan te geven» → «De lengte van zinnen bepalen» (plaksel-afleider)
- [40] was optie «Een herhaling van woorden aan het begin van zinnen of Een chiastische woordvolgorde» → «Een overdreven uitdrukking voor effect» (plaksel-afleider)
- [41] was optie «Gedachtestreepje onder bepaalde omstandigheden» → «Gedachtestreepje» (staart 'onder bepaalde omstandigheden')
- [42] was optie «De inleiding herhalen met andere woorden of Vragen stellen voor vervolgonderzoek» → «Een nieuw argument introduceren» (plaksel-afleider)
- [43] was optie «Een rijmschema waarbij elke regel rijmt of Een strofevorm met vier regels» → «Een herhaling van klanken aan het begin van woorden» (plaksel-afleider)
- [44] was optie «Een spreekwoord is een volkse wijsheid in een vaste uitdrukking; een onderwerp is een vaste zinswending die figuurlijk gebruikt wordt» → «Een spreekwoord en een gezegde betekenen precies hetzelfde» (kapotte kopie van het goede antwoord)
- [45] was optie «Het omdraaien van de normale volgorde waarbij de persoonsvorm achter het onderwerp staat» → «Het weglaten van het onderwerp in een zin» (bijna-kopie van het goede antwoord verraadt het antwoord)
- [46] was optie «Wetenschappelijk taalgebruik met precieze definities of Cijfermatige vergelijkingen in teksten» → «Taal die alleen in gedichten voorkomt» (plaksel-afleider)
- [47] was optie «Feiten zijn altijd kwantitatief; meningen altijd kwalitatief of Er is geen relevant verschil in betogen of argumentaties» → «Een mening staat altijd tussen aanhalingstekens» (plaksel-afleider)
- [48] was optie «Een vergelijking van twee tegengestelde begrippen of Een overdreven uitdrukking voor effect» → «Herhaling van dezelfde beginklank» (plaksel-afleider)
- [49] was optie «indirecte rede geeft de inhoud weer zonder aanhalingstekens en past werkwoordstijd aan; Directe rede citeert letterlijk met aanhalingstekens» → «Directe rede staat altijd in de verleden tijd; indirecte rede in de tegenwoordige tijd» (omgekeerde kopie: twee opties goed)

#### nederlands.klas3 · gecontroleerd 29 · hersteld 29 · verwijderd 0
- [0] was vraag «Wat is een trope?» → «Wat is een troop?»; optie «Een grammaticaal begrip waarbij woorden in overdrachtelijke betekenis worden gebruikt» → «Een rijmschema in een gedicht» (plaksel-afleider; Nederlandse term is 'troop' (mv. tropen))
- [1] was optie «Entertainen, Beschrijven en Informeren van een standpunt door middel van argumenten» → «De lezer stap voor stap uitleggen hoe iets werkt» (plaksel-afleider)
- [2] was optie «Grammatica tussen zinnen, Stijlregister en Woordvolgorde naar andere teksten of culturele werken» → «Het gebruik van formele taal in een tekst» (plaksel-afleider)
- [3] was optie «Een spannend, onopgelost moment aan het begin van een hoofdstuk/aflevering» → «Een rustig, afgerond slot van een verhaal» (bijna-kopie van het goede antwoord)
- [4] was optie «Herhaling van een woord of woordgroep aan het einde van opeenvolgende zinnen» → «Herhaling van dezelfde klinkers in een versregel» (bijna-kopie + dubbel met optie 3)
- [5] was optie «De volgorde van gebeurtenissen, De setting en De thematiek wordt (ik, hij/zij, alwetend)» → «De plaats waar het verhaal zich afspeelt» (plaksel-afleider)
- [6] was optie «Leesteken achter een pauze, toelichting of plotselinge wending in de zin» → «Leesteken dat een opsomming aankondigt» (bijna-kopie van het goede antwoord ('achter'))
- [7] was vraag «Wat is een poëtisch procédé bij enjambement?» → «Wat gebeurt er bij enjambement in een gedicht?»; optie «Rijm aan het einde over de regelgrens in een gedicht» → «Een regel bestaat uit precies tien lettergrepen» (plaksel-afleider; vraag onduidelijk geformuleerd)
- [8] was optie «connotatie = bijbetekenis/gevoelswaarde; Denotatie = letterlijke betekenis» → «Denotatie = gevoelswaarde; connotatie = uitspraak» (omgekeerde kopie: twee opties goed)
- [9] was optie «Een vraag die achter retorisch effect gesteld wordt en geen antwoord verwacht» → «Een vraag waarop meerdere antwoorden goed zijn» (bijna-kopie van het goede antwoord ('achter'))
- [10] was optie «Een eenmalig symbool bij de analyse van literaire werken» → «Een symbool dat maar één keer voorkomt» (staart-afleider)
- [11] was optie «Een argumentatieve tekst onder bepaalde omstandigheden» → «Een argumentatieve tekst» (staart 'onder bepaalde omstandigheden')
- [12] was optie «Een derde persoon verteller, Een auctorieel verteller en Een alwetende verteller van de werkelijkheid bevooroordeeld of onjuist is» → «Een alwetende verteller» (plaksel-afleider)
- [13] was optie «hypotaxis = onderschikking (bijzinnen); Parataxis = nevenschikking (en, maar, want)» → «Twee soorten rijm» (omgekeerde kopie: twee opties goed)
- [14] was optie «Een essay, Een lang episch gedicht en Een toneelstuk op één kerngebeurtenis» → «Een essay» (plaksel-afleider)
- [15] was optie «De vooropstelling van de spanning, waarna de ontknoping volgt» → «Het moment waarop de personages worden voorgesteld»; optie «De vooropstelling» → «De inleiding» (plaksel-afleider; 'vooropstelling' is geen verhaalterm)
- [16] was optie «Een begin dat vragen open laat en de lezer zelf laat invullen» → «Een verhaal zonder hoofdpersoon» (bijna-kopie van het goede antwoord)
- [17] was optie «In medias res of Cliffhanger» → «Vooruitwijzing (prolepsis)» (plaksel-afleider)
- [18] was optie «Beginnen met een beschrijving of Beginnen met de ontknoping» → «Beginnen met een terugblik» (plaksel-afleider)
- [19] was optie «Een toneelstuk, Een gedicht en Een roman over een onderwerp vanuit een subjectief standpunt» → «Een roman» (plaksel-afleider)
- [20] was optie «Een inhoudsanalyse, Een grammaticale analyse en Een samenvatting van een tekst naar hoe taalkeuzes een tekst betekenis en effect geven» → «Een inhoudsanalyse» (plaksel-afleider)
- [21] was optie «Een genre, Een schrijfstijl en Het tijdstip van publicatie met gemeenschappelijke kenmerken en stromingen» → «Een genre» (plaksel-afleider)
- [22] was optie «De eerste strofe in de moderne taal- en letterkunde» → «De eerste strofe» (staart-afleider)
- [23] was optie «Een bewuste overdrijving achter nadruk of komisch effect» → «Een bewuste verzachting van iets negatiefs» (bijna-kopie van het goede antwoord ('achter'))
- [24] was optie «Gesprek tussen twee of minder personages in een tekst» → «Beschrijving van de plaats van handeling» (bijna-kopie ('twee of minder'))
- [25] was optie «Een schrijver van literaire werken met gemeenschappelijke kenmerken» → «Een uitgever» (plaksel-afleider)
- [26] was optie «epiek = verhaal; drama = toneelstuk; Lyriek = gevoelsuitdrukking» → «Lyriek = toneel» (omgekeerde kopie: twee opties goed)
- [27] was optie «Een ik-verteller, Een betrouwbare verteller en Een alwetende verteller met een omsluitend verhaal» → «Een ik-verteller» (plaksel-afleider)
- [28] was optie «Herhaling van klinkers onder bepaalde omstandigheden» → «Herhaling van hele woorden» (staart-afleider en dubbel met 'Assonantie')

#### nederlands.klas4 · gecontroleerd 14 · hersteld 1 · verwijderd 0
- [12] was optie «Mochten wij elkaar ontmoeten, dan...» → «Leve de koningin!» (goede antwoord); uitleg aangepast («Aanvoegende wijs: 'mocht', 'ware'. Komt in formele/oudere ta…» → «Aanvoegende wijs: 'leve', 'men neme', 'het zij zo', 'God zeg…») ('Mochten wij...' is een voorwaardelijke inversie met verleden tijd, geen aanvoegende wijs)

#### spaans.klas1 · gecontroleerd 10 · hersteld 0 · verwijderd 0

#### spaans.klas3 · gecontroleerd 10 · hersteld 0 · verwijderd 0

#### spaans.klas5 · gecontroleerd 10 · hersteld 1 · verwijderd 0
- [0] was optie «Altijd bij twijfel of onzekerheid, wensen, emoties en na bepaalde voegwoorden» → «Bij twijfel of onzekerheid, wensen, emoties en na bepaalde voegwoorden» (goede antwoord) ('Altijd' klopt niet (bv. quizás kan ook met indicativo))

#### latijn.klas1 · gecontroleerd 10 · hersteld 1 · verwijderd 0
- [4] was vraag «Hoe heet de Latijnse zinsregel voor de woordvolgorde?» → «Wat geldt meestal voor de woordvolgorde in een Latijnse zin?»; optie «Er is geen vaste woordvolgorde» → «Het onderwerp staat altijd direct na het werkwoord» (dubbelzinnig: 'geen vaste woordvolgorde' was ook verdedigbaar; vraagzin klopte niet)

#### latijn.klas3 · gecontroleerd 10 · hersteld 1 · verwijderd 0
- [6] was vraag «Hoe heet het Latijnse werkwoord 'ferre' in het Nederlands?» → «Wat betekent het Latijnse werkwoord 'ferre'?» (vraag onlogisch geformuleerd ('hoe heet ... in het Nederlands'))

#### latijn.klas5 · gecontroleerd 10 · hersteld 2 · verwijderd 0
- [5] was optie «Een gevolg-/gevolgzin (zodat)» → «Een gevolgzin (zodat)» (goede antwoord) (typefout 'gevolg-/gevolgzin')
- [7] was uitleg aangepast («Passieve infinitief praesens: -are → -ari (amari = bemind wo…» → «Passieve infinitief praesens: -are → -ari (amari = bemind wo…») (uitleg onjuist: e-vervoeging (monere) wordt -eri, niet -i)

#### engels.klas1 · gecontroleerd 50 · hersteld 36 · verwijderd 0
- [0] was «Angry of Tired» → nu «Lazy» (plaksel-afleider «Angry of Tired»)
- [1] was «was» → nu «is»; was «was of be» → nu «be» (plaksel-afleider «was of be»; «was» is in modern Engels ook goed (twee juiste opties))
- [2] was «Child's of Childes» → nu «Childs» (plaksel-afleider)
- [4] was «Onduidelijk/achter meerdere uitleg vatbaar» → nu «Eenvoudig» (bijna-kopie van het goede antwoord («achter» i.p.v. «voor»))
- [6] was «Een positief probleem of Een uitdaging» → nu «Een makkelijke keuze» (plaksel-afleider)
- [8] was «A direct expression onder bepaalde omstandigheden» → nu «A literal expression» (plaksel-afleider «onder bepaalde omstandigheden»)
- [11] was «'Effect' werkwoord» → nu «'Affect' is Brits, 'effect' is Amerikaans»; was «'Affect' werkwoord, 'effect' bijvoeglijk naamwoord» → nu «Allebei werkwoorden met dezelfde betekenis»; was «Beide hetzelfde» → nu «Allebei zelfstandige naamwoorden» (bijna-kopie van het goede antwoord; «'Effect' werkwoord» is deels ook waar (to effect change))
- [12] was «Aarzelend of Verward» → nu «Onbeleefd» (plaksel-afleider)
- [13] was «Een bijvoeglijk naamwoord of Een voornaamwoord» → nu «Een bijwoord» (plaksel-afleider)
- [16] was «Samenvatting onder bepaalde omstandigheden» → nu «Samenvatting» (plaksel-afleider «onder bepaalde omstandigheden»)
- [17] was «Zeldzaam of Onbekend» → nu «Ouderwets» (plaksel-afleider)
- [19] was «Het onderwerp onder bepaalde omstandigheden» → nu «Het onderwerp» (plaksel-afleider)
- [20] was «Enthousiast of Bereid» → nu «Vrolijk» (plaksel-afleider)
- [22] was «Een zin met bijvoeglijk naamwoord of Eén hoofdzin» → nu «Een hoofdzin met een bijzin» (plaksel-afleider)
- [23] was «Ingewikkeld of Uitgebreid» → nu «Vaag» (plaksel-afleider)
- [24] was «'Whom' = onderwerp of Beide zijn object» → nu «Beide zijn onderwerp» (plaksel-afleider)
- [25] was «Samenvatten of Vergelijken» → nu «Overslaan» (plaksel-afleider)
- [26] vraag was «What is 'indirect speech' of: 'I will come tomorrow'?» → nu «What is the indirect speech of: He said: 'I will come tomorrow'?»; was «He said he will come tomorrow.» → nu «He said he came the day before.»; was «He said he will come tomorrow. of He said he comes the next day.» → nu «He said he had come the next day.» (plaksel-afleider; «He said he will come tomorrow» is bij nog-geldende uitspraak ook goed (dubbelzinnig); vraag mist de spreker (gelijkgetrokken met vraag 7))
- [27] was «Directe uitspraak onder bepaalde omstandigheden» → nu «Directe uitspraak» (plaksel-afleider «onder bepaalde omstandigheden»)
- [29] was «Herhaling van klanken of Vergelijking» → nu «Vergelijking» (plaksel-afleider)
- [30] was «Opvallend of Duidelijk» → nu «Grof» (plaksel-afleider)
- [31] was «Een zelfstandig naamwoord achter ideeën/gevoelens: freedom, love» → nu «De naam van een persoon of plaats» (bijna-kopie van het goede antwoord («achter»))
- [32] was «Onbelangrijk in de natuur» → nu «Onbelangrijk» (plaksel-afleider «in de natuur»)
- [35] was «Modern in de natuur» → nu «Modern» (plaksel-afleider «in de natuur»)
- [36] was «Een zin met een voorwaarde en oorzaak (if...)» → nu «Een zin in de verleden tijd» (bijna-kopie van het goede antwoord)
- [37] was «Intelligentie onder bepaalde omstandigheden» → nu «Intelligentie» (plaksel-afleider «onder bepaalde omstandigheden»)
- [38] was «Woordkeuze onder bepaalde omstandigheden» → nu «Woordkeuze» (plaksel-afleider «onder bepaalde omstandigheden»)
- [39] was «Verbergen of Ontkennen» → nu «Vergeten» (plaksel-afleider)
- [40] was «'infer' = concluderen (luisteraar); 'Imply' = suggereren (spreker)» → nu «'Imply' = concluderen (luisteraar); 'infer' = suggereren (spreker)»; was «'Infer' = suggereren» → nu «Beide = suggereren» (omgekeerde kopie van het goede antwoord = ook goed (twee juiste opties))
- [42] was «Because of Since» → nu «Unless» (plaksel-afleider «Because of Since»)
- [43] was «Een tegenstelling onder bepaalde omstandigheden» → nu «Een tegenstelling» (plaksel-afleider «onder bepaalde omstandigheden»)
- [44] was «Logisch of Gepland» → nu «Verplicht» (plaksel-afleider)
- [46] was «Medelijden in de moderne taal- en letterkunde» → nu «Medelijden» (plaksel-afleider «in de moderne taal- en letterkunde»)
- [47] was «De laatste zin van een alinea die het hoofdidee introduceert» → nu «Een citaat van een deskundige» (bijna-kopie van het goede antwoord)
- [48] was «Samenvatten in de praktijk» → nu «Samenvatten» (plaksel-afleider «in de praktijk»)
- [49] was «'principle' = beginsel/principe; 'Principal' = hoofd/directeur» → nu «'Principal' = beginsel/principe; 'principle' = hoofd/directeur»; was «'Principle' = directeur» → nu «'Principle' is de Britse spelling van 'principal'» (omgekeerde kopie van het goede antwoord = ook goed (twee juiste opties))

#### engels.klas3 · gecontroleerd 50 · hersteld 48 · verwijderd 0
- [0] was «Hyperbole of Metaphor» → nu «Simile» (plaksel-afleider)
- [1] was «Beautiful of Beautify» → nu «Beauty» (plaksel-afleider (Nederlands «of»))
- [2] was «A river metaphor onder bepaalde omstandigheden» → nu «A river metaphor» (plaksel-afleider (Nederlands restje))
- [3] was «A minor character onder bepaalde omstandigheden» → nu «A character who never speaks» (plaksel-afleider (Nederlands restje); «a minor character» kan ook een foil zijn)
- [4] was «Gebiedende wijs of Verleden tijd» → nu «Lijdende vorm» (plaksel-afleider)
- [5] was «Tijdelijk of Zeldzaam» → nu «Ouderwets» (plaksel-afleider)
- [6] was «Een alwetende verteller onder bepaalde omstandigheden» → nu «Een alwetende verteller» (plaksel-afleider «onder bepaalde omstandigheden»)
- [7] was «Constant in de praktijk» → nu «Constant» (plaksel-afleider «in de praktijk»)
- [8] was «Een politieke roman onder bepaalde omstandigheden» → nu «Een politieke roman» (plaksel-afleider «onder bepaalde omstandigheden»)
- [9] was «Vergelijking met 'like' of Overdrijving» → nu «Herhaling van klanken» (plaksel-afleider)
- [11] was «Idealistisch of Theoretisch» → nu «Twijfelachtig» (plaksel-afleider)
- [12] was «Het thema, Een personage en De plot dat het thema versterkt» → nu «De plot» (plaksel-afleider «A, B en C + staart van het goede antwoord»)
- [13] was «Tegenstelling of Duidelijkheid» → nu «Overdrijving» (plaksel-afleider)
- [14] was «Een rechtstreekse verwijzing of Een vergelijking» → nu «Een overdrijving» (plaksel-afleider)
- [15] was «Spanning opbouwen in de praktijk» → nu «Spanning opbouwen» (plaksel-afleider «in de praktijk»)
- [16] was «Woordkeuze onder bepaalde omstandigheden» → nu «Woordkeuze» (plaksel-afleider «onder bepaalde omstandigheden»)
- [17] was «Onverschillig onder bepaalde omstandigheden» → nu «Onverschillig» (plaksel-afleider «onder bepaalde omstandigheden»)
- [19] was «Onwaarschijnlijkheid onder bepaalde omstandigheden» → nu «Onwaarschijnlijkheid» (plaksel-afleider «onder bepaalde omstandigheden»)
- [20] was «Indirecte rede van vertellersstem en personagedachten» → nu «Dialoog tussen twee personages» (plaksel-afleider (bijna-kopie van het goede antwoord))
- [21] was «Samenwerking onder bepaalde omstandigheden» → nu «Samenwerking» (plaksel-afleider «onder bepaalde omstandigheden»)
- [22] was «Een open einde onder bepaalde omstandigheden» → nu «Een open einde» (plaksel-afleider «onder bepaalde omstandigheden»)
- [23] was «Duidelijk als uitzondering» → nu «Duidelijk» (plaksel-afleider «als uitzondering»)
- [24] was «Eén vertellersperspectief onder bepaalde omstandigheden» → nu «Eén vertellersperspectief» (plaksel-afleider «onder bepaalde omstandigheden»)
- [25] was «Een flashforward onder bepaalde omstandigheden» → nu «Een flashforward» (plaksel-afleider «onder bepaalde omstandigheden»)
- [26] was «Weglaten van voegwoorden voor langzamer ritme» → nu «Herhaling van klinkers» (bijna-kopie van het goede antwoord («langzamer» i.p.v. «sneller»))
- [27] was «Vermakelijk onder bepaalde omstandigheden» → nu «Vermakelijk» (plaksel-afleider «onder bepaalde omstandigheden»)
- [28] was «Opbouw naar climax of Overdrijving» → nu «Een plechtige toon» (plaksel-afleider)
- [29] was «Herhaling aan het begin van het laatste woord van een zin aan het begin van de volgende» → nu «Herhaling aan het eind van opeenvolgende zinnen» (plaksel-afleider (plus staart van het goede antwoord))
- [30] was «Definitief in het dagelijks taalgebruik en literatuur» → nu «Definitief» (plaksel-afleider «in het dagelijks taalgebruik en literatuur»)
- [31] was «Personificatie, Een snelle vertelling en Symbool van een kunstwerk in tekst» → nu «Een symbool» (plaksel-afleider «A, B en C + staart»)
- [32] was «Narratief perspectief of Auteursperspectief» → nu «Rijmschema» (plaksel-afleider)
- [33] was «Een opmerking terzijde waarbij een personage alleen op het podium hardop zijn gedachten uitspreekt» → nu «Een dialoog tussen twee personages» (plaksel-afleider (bijna-kopie van het goede antwoord))
- [34] was «Ellips in verhaal onder bepaalde omstandigheden» → nu «Een ellips in het verhaal» (plaksel-afleider «onder bepaalde omstandigheden»)
- [35] was «Tegenstelling van hetzelfde idee in andere woorden: 'free gift'» → nu «Woordspeling» (bijna-kopie van het goede antwoord («Tegenstelling» + staart))
- [36] was «Symbool, Ironie en Fantasie van de werkelijkheid in kunst» → nu «Ironie» (plaksel-afleider «A, B en C + staart»)
- [37] was «Misbruik of onjuist gebruik van een woord of vergelijking» → nu «Overdrijving» (bijna-kopie van het goede antwoord die ook goed is (twee juiste opties))
- [38] was «Vertellersperspectief van waaruit gebeurtenissen worden waargenomen (focalizer)» → nu «Tijdsverloop» (plaksel-afleider (staart van het goede antwoord))
- [39] was «Vooruitwijzing onder bepaalde omstandigheden» → nu «Vooruitwijzing» (plaksel-afleider «onder bepaalde omstandigheden»)
- [40] was «Zelfverzekerde bewering van twijfel of verwarring (oprecht of retorisch)» → nu «Een overdrijving» (plaksel-afleider (staart van het goede antwoord))
- [41] was «Ritmische proza van metrum, ritme, klank en toonhoogte in poëzie» → nu «Vrije verzen» (plaksel-afleider (staart van het goede antwoord))
- [42] was «Stijlanalyse, Schrijfstijl en Narratologie van tekstinterpretatie» → nu «Stijlanalyse» (plaksel-afleider «A, B en C + staart»)
- [43] was «Herhaling van medeklinkers of Assonantie» → nu «Herhaling van woorden» (plaksel-afleider)
- [44] was «Een manuscripttype die eerdere teksten bevat of verwijzingen daarnaar» → nu «Een woordenboek» (plaksel-afleider (staart van het goede antwoord))
- [45] was «Symbolisme, Naturalisme en Realisme van het alledaagse zodat lezers het opnieuw beleven» → nu «Realisme» (plaksel-afleider «A, B en C + staart»)
- [46] was «Taalstijl op zichzelf» → nu «Grammatica»; was «Woordenschat, Taalstijl op zichzelf en Uitspraak aan context, relatie en doel (formeel/informeel)» → nu «Uitspraak» (plaksel-afleider «A, B en C + staart» en vulsel «op zichzelf»)
- [47] was «Een logische fout van menselijke emoties in de natuur of omgeving» → nu «Overdrijving» (plaksel-afleider (staart van het goede antwoord))
- [48] was «Het stellen van een aanbod en dan direct zelf beantwoorden» → nu «Een overdrijving» (bijna-kopie van het goede antwoord («aanbod»))
- [49] was «Kosmopolitische fictie over culturele verspreiding en de ervaring van migrantengemeenschappen» → nu «Sciencefiction» (plaksel-afleider (staart van het goede antwoord))

#### grieks.klas3 · gecontroleerd 10 · hersteld 1 · verwijderd 0
- [5] vraag was «Wat betekent het prefix 'αντι-' (anti-)?» → nu «Wat betekent het prefix 'ἀντι-' (anti-)?» (spiritus lenis ontbrak (αντι- → ἀντι-))

#### grieks.klas5 · gecontroleerd 10 · hersteld 0 · verwijderd 0

#### duits.klas1 · gecontroleerd 50 · hersteld 25 · verwijderd 0
- [0] was «Object van de zin of Na 'mit' | Object van de zin» → nu «Meewerkend voorwerp van de zin | Lijdend voorwerp van de zin» (plaksel-afleider ('… of Na mit') vervangen)
- [3] was «Bovendien of Omdat» → nu «Daarom» (plaksel-afleider 'Bovendien of Omdat')
- [4] was «Hoe verander je een bijvoeglijk naamwoord na 'der' (zwakke verbuiging)?» → nu «Welke uitgang krijgt een bijvoeglijk naamwoord na 'der' in de nominatief mannelijk (zwakke verbuiging)?» (dubbelzinnig: na 'der' als Dativ/Genitief vrouwelijk is de uitgang -en)
- [6] was «Ich habe es machen. of Ich bin es gemacht.» → nu «Ich habe es gemachen.» (plaksel-afleider ('… of …'))
- [7] was «'Vor' = duur tot nu of Beide hetzelfde» → nu «'Seit' = straks; 'vor' = nu» (plaksel-afleider ('… of Beide hetzelfde'))
- [10] was «Ich will... of Ich kann...» → nu «Ich muss...» (plaksel-afleider 'Ich will... of Ich kann...')
- [18] was «'Als' = eenmalig toekomende; 'wenn' = herhaling/toekomst» → nu «'Als' = herhaling; 'wenn' = eenmalig verleden» (bijna-kopie van het goede antwoord ('eenmalig toekomende') vervangen)
- [20] was «andere nemen 'haben'; Bewegings-/toestandswerkwoorden nemen 'sein'» → nu «Bewegingswerkwoorden nemen 'haben'; andere nemen 'sein'» (omgekeerde kopie van het goede antwoord (ook goed))
- [21] was «Hoe zeg je 'ik wil naar huis gaan' in het Duits? | Ich gehe nach Hause wollen. of Ich will nach Hause fahren. | Ich will nach Hause fahren.» → nu «Hoe zeg je beleefd 'ik wil graag naar huis gaan' in het Duits? | Ich möchte nach Hause gegangen. | Ich möchte gehen nach Hause.» (plaksel-afleider; 'Ich will nach Hause fahren' was ook een goede vertaling van 'ik wil naar huis gaan'; vraag naar beleefde vorm (möchte) gemaakt)
- [22] was «Welk hulpwerkwoord gebruik je bij 'können'?» → nu «Welk hulpwerkwoord krijgt 'können' in het Perfekt?» (vraag dubbelzinnig (zei niet dat het om het Perfekt ging))
- [23] was «Hoewel (geeft tegenstelling aan, werkwoord naar einde) | Hoewel (geeft tegenstelling aan, werkwoord naar begin)» → nu «Hoewel | Zodat» (twee bijna-gelijke 'Hoewel'-opties verraadden het antwoord; woordvolgorde staat in de uitleg)
- [27] was «Er ging gestern zur Schule.» → nu «Er ist gestern zur Schule gegeht.» ('Er ging gestern zur Schule.' (Präteritum) is ook een goede vertaling — twee goede opties)
- [28] was «Een bijzin waarbij het werkwoord naar het begin gaat» → nu «Een zin met twee onderwerpen» (bijna-kopie van het goede antwoord ('naar het begin') vervangen)
- [32] was «Een reflexief werkwoord, Een zwak werkwoord en Een onregelmatig werkwoord bij de persoonsvorm scheidt: 'aufmachen → Ich mache auf'» → nu «Een zwak werkwoord» (plaksel-afleider (drie opties + staart van het goede antwoord))
- [33] was «durch, für, gegen of um, bis, durch» → nu «an, auf, hinter, neben» (plaksel-afleider ('… of …'))
- [34] was «schreibend of geschreibt» → nu «geschriebt» (plaksel-afleider 'schreibend of geschreibt')
- [38] was «Een bijvoeglijk naamwoord dat de toon van een zin kleurt (bv. 'doch', 'ja', 'mal') | uitleg: Modale partikels: 'Komm doch mal!' — nuanceren de toon maar hebben geen vertaling.» → nu «Een hulpwerkwoord zoals 'können' of 'müssen' | uitleg: Modale partikels: 'Komm doch mal!' — ze kleuren de toon en zijn vaak niet letterlijk te vertalen.» (bijna-kopie van het goede antwoord vervangen; uitleg 'hebben geen vertaling' te stellig)
- [39] was «'wissen' = iets weten (een feit); 'Kennen' = iemand/iets kennen» → nu «'Kennen' = iets weten (een feit); 'wissen' = iemand kennen» (omgekeerde kopie van het goede antwoord (ook goed))
- [41] was «Het onderwerp of Het bijwoord» → nu «Het lidwoord» (plaksel-afleider 'Het onderwerp of Het bijwoord')
- [42] was «Ich mag sie.» → nu «Ich liebe sich.» ('Ich mag sie.' kan ook als 'ik houd van haar' gelden — twee goede opties)
- [44] was «besser of güter» → nu «am gutesten» (plaksel-afleider 'besser of güter')
- [45] was «Reflexieve constructie met 'werden': 'Das Buch wird gelesen'» → nu «Toestandspassief met 'sein': 'Das Buch ist gelesen'» (plaksel-afleider (staart van het goede antwoord))
- [46] was «Wenn ich reich war... of Als ich reich wäre...» → nu «Wenn ich reich würde...» (plaksel-afleider ('… of …'))
- [47] was «'damit' voegwoord = zodat/opdat; 'Damit' voorzetsel = daarmee» → nu «'Damit' voorzetsel = zodat; 'damit' voegwoord = daarmee» (omgekeerde kopie van het goede antwoord (ook goed))
- [48] was «Wat is de ontkennende vorm van 'kein'? | nicht kein | kein is positief | kein (al ontkennend) | kein is positief of nicht kein» → nu «Hoe ontken je 'Ich habe Geld' in het Duits? | Ich habe nicht kein Geld. | Ich habe Geld nicht. | Ich habe kein Geld. | Ich nicht habe Geld.» (onduidelijke vraag ('ontkennende vorm van kein') met plaksel-afleider; herschreven tot toetsbare vraag)

#### duits.klas3 · gecontroleerd 50 · hersteld 45 · verwijderd 0
- [0] was «Gewone verleden tijd of Gebiedende wijs» → nu «Toekomende tijd» (plaksel-afleider ('… of Gebiedende wijs'))
- [1] was «Verleden achter het verleden | uitleg: Plusquamperfekt: 'had gedaan' (war gegangen).» → nu «Voltooid tegenwoordige tijd | uitleg: Plusquamperfekt: 'war gegangen' (was gegaan), 'hatte gemacht' (had gedaan).» ('Verleden achter het verleden' en 'Verleden voor het verleden' waren beide goed; uitleg vertaalde 'war gegangen' als 'had gedaan')
- [4] was «Geen betekenis of Herhaling» → nu «Verkleining» (plaksel-afleider 'Geen betekenis of Herhaling')
- [5] was «wurde gebaut of wird gebaut» → nu «hat gebaut geworden» (plaksel-afleider ('… of …'))
- [6] was «'Liegen' = neerleggen of Beide = liggen» → nu «'Legen' = liggen, 'liegen' = neerleggen» (plaksel-afleider ('… of Beide = liggen'))
- [9] was «Voltooid deelwoord of Zin met 'dass'» → nu «Gebiedende wijs» (plaksel-afleider ('… of Zin met dass'))
- [10] was «Bovendien of Omdat» → nu «Daarom» (plaksel-afleider 'Bovendien of Omdat')
- [11] was «'Sollen' = mogen in de moderne taal- en letterkunde» → nu «'Sollen' = mogen, 'dürfen' = moeten» (plaksel-afleider ('… in de moderne taal- en letterkunde'))
- [12] was «Bijvoeglijk naamwoorden | Bijvoeglijk naamwoorden van zelfstandige naamwoorden i.p.v. werkwoorden» → nu «Gebruik van veel bijvoeglijke naamwoorden | Gebruik van veel bijzinnen» (plaksel-afleider + typefout 'Bijvoeglijk naamwoorden')
- [13] was «Voltooid deelwoord onder bepaalde omstandigheden» → nu «Voltooid deelwoord (ge- + -t)» (plaksel-afleider ('… onder bepaalde omstandigheden'))
- [14] was «mit, nach, seit of aus, bei, von» → nu «an, auf, in» (plaksel-afleider ('… of …'))
- [15] was «Direct citaat als uitzondering» → nu «Direct citaat» (plaksel-afleider ('… als uitzondering'))
- [16] was «Wat is Konjunktiv I gebruikt voor? | Hypothetisch als uitzondering» → nu «Waarvoor wordt Konjunktiv I gebruikt? | Hypothetische situaties» (plaksel-afleider ('… als uitzondering') + vraag grammaticaal fout)
- [17] was «Als oorzaak daarvan» → nu «Ondertussen» ('Als oorzaak daarvan' lag te dicht bij het goede antwoord (bijna-kopie))
- [18] was «an, auf, in, an | durch, für, gegen onder bepaalde omstandigheden» → nu «an, auf, in, über | durch, für, gegen» (plaksel-afleider ('… onder bepaalde omstandigheden') + dubbel 'an')
- [19] was «Inversie bij vraag onder bepaalde omstandigheden» → nu «Tussenzin tussen haakjes» (plaksel-afleider ('… onder bepaalde omstandigheden'))
- [20] was «Als voegwoord + bijzin (werkwoord begin); als voorzetsel + Genitief» → nu «Als voegwoord + Dativ; als voorzetsel + bijzin» (bijna-kopie van het goede antwoord ('werkwoord begin') vervangen)
- [21] was «Een infinitief met 'zu' uitgebreid met andere elementen: 'zu + lezen' | Een infinitief met 'zu' alleen met 'zu' uitgebreid met andere elementen: 'zu + lezen'» → nu «Een infinitief met 'zu' plus extra zinsdelen: 'jeden Tag Deutsch zu lernen' | Een voltooid deelwoord met 'zu'» (plaksel-afleider; Nederlands voorbeeld 'zu + lezen' in het goede antwoord vervangen door Duits voorbeeld)
- [22] was «Ondertussen in de moderne taal- en letterkunde» → nu «Ondertussen» (plaksel-afleider ('… in de moderne taal- en letterkunde'))
- [23] was «'möchten' = willen/verlangen (beleefd); 'Mögen' = houden van» → nu «'Mögen' = willen (beleefd); 'möchten' = houden van» (omgekeerde kopie van het goede antwoord (ook goed))
- [24] was «Een gewone werkwoordsconstructie van werkwoord + zelfstandig naamwoord (bv. in Kraft treten)» → nu «Een werkwoord met twee voorwerpen» (plaksel-afleider (staart van het goede antwoord))
- [26] was «'Werden' + infinitief (achter toekomst of veronderstelling)» → nu «'Haben' + infinitief (voor toekomst)» (bijna-kopie van het goede antwoord ('achter toekomst') vervangen)
- [27] was «Een bijvoeglijk naamwoord die bij een zelfstandig naamwoord hoort als bezitsbepaling» → nu «Een voorwerp na een Dativ-voorzetsel» (plaksel-afleider (staart van het goede antwoord))
- [28] was «Wensen uitdrukken | Hypothetische situaties uitdrukken onder bepaalde omstandigheden» → nu «Vragen stellen | Hypothetische situaties uitdrukken» (plaksel-afleider ('… onder bepaalde omstandigheden'); 'Wensen uitdrukken' is ook een functie van Konjunktiv I ('Es lebe der König!') — twee goede opties)
- [29] was «Passief dat een handeling beschrijft of Reflexieve constructie» → nu «Actieve zin met 'haben + Partizip II'» (plaksel-afleider ('… of Reflexieve constructie'))
- [30] was «'als ob' is gangbaarder; Beide introduceren een hypothetische vergelijking + Konjunktiv II» → nu «'Als wenn' is fout; alleen 'als ob' bestaat» (omgekeerde kopie van het goede antwoord (ook goed))
- [31] was «Een Dativ die emotionele betrokkenheid uitdrukt: 'Das ist mir zu schwer' | Een formeel gebruik van Genitief die emotionele betrokkenheid uitdrukt: 'Das ist mir zu schwer' | uitleg: Dativus ethicus: 'Das ist mir zu schwer' — 'mir' drukt persoonlijke betrokkenheid uit.» → nu «Een Dativ die de betrokkenheid van de spreker uitdrukt: 'Komm mir ja nicht zu spät!' | Een Dativ als meewerkend voorwerp | uitleg: Dativus ethicus: 'Komm mir ja nicht zu spät!' — 'mir' is niet nodig voor de zin, maar laat zien dat de spreker erbij betrokken is.» (feitfout: 'Das ist mir zu schwer' is een Dativus iudicantis, geen ethicus; plaksel-afleider vervangen)
- [32] was «Futur II: voltooide toekomst; Futur I: toekomst of veronderstelling» → nu «Futur I: voltooide toekomst; Futur II: gewone toekomst» (omgekeerde kopie van het goede antwoord (ook goed))
- [33] was «Een bijvoeglijk naamwoord dat een ander substantief nader omschrijft (zelfde naamval)» → nu «Een bijzin die een substantief nader omschrijft» (plaksel-afleider (staart van het goede antwoord))
- [34] was «zelfstandig: worden (bv. 'Ich werde Arzt'); Hulpwerkwoord: toekomst/passief» → nu «Hulpwerkwoord: worden; zelfstandig: toekomst/passief» (omgekeerde kopie van het goede antwoord (ook goed))
- [35] was «Grammaticale correctheid onder bepaalde omstandigheden» → nu «Grammaticale correctheid» (plaksel-afleider ('… onder bepaalde omstandigheden'))
- [36] was «Altijd 'das', Altijd onveranderlijk en Altijd 'der' aan in geslacht en naamval aan het woord waarnaar het verwijst» → nu «Altijd 'das'» (plaksel-afleider (drie opties + staart van het goede antwoord))
- [37] was «'obwohl' is een onderschikkend voegwoord (Nebensatz); 'Trotzdem' is een bijwoord (Hauptsatz)» → nu «'Trotzdem' is een voegwoord (Nebensatz); 'obwohl' is een bijwoord (Hauptsatz)» (omgekeerde kopie van het goede antwoord (ook goed))
- [38] was «Een voorzetselgroep als optionele bepaling van een werkwoord: 'warten auf + Akkusatief'» → nu «Een voorzetsel dat los achter het werkwoord staat» (plaksel-afleider (staart van het goede antwoord))
- [39] was «modaal: 'Lass mich!' (laat me!); Causatief: 'Ich lasse das Auto reparieren' (laten doen)» → nu «Modaal: 'Ich lasse das Auto reparieren'; causatief: 'Lass mich!'» (omgekeerde kopie van het goede antwoord (ook goed))
- [40] was «Een apposition | Een bijvoeglijk naamwoord als bijvoeglijke bepaling vóór het zelfstandig naamwoord» → nu «Een Apposition | Een bijzin achter het zelfstandig naamwoord» (plaksel-afleider (staart van het goede antwoord))
- [41] was «'sollen' = externe opdracht/verplichting; 'Müssen' = interne noodzaak» → nu «'Sollen' = eigen wens; 'müssen' = toestemming» (omgekeerde kopie van het goede antwoord (ook goed))
- [42] was «Parenthese van een woord dat logisch invulbaar is» → nu «Overdrijving» (plaksel-afleider (staart van het goede antwoord))
- [43] was «'damit' beschrijft een doel/bedoeling; 'Sodass' beschrijft een resultaat» → nu «Beide beschrijven alleen een resultaat» (omgekeerde kopie van het goede antwoord (ook goed))
- [44] was «Ironie, Overdrijving en Paradox van het tegendeel: 'nicht uninteressant'» → nu «Ironie» (plaksel-afleider (drie opties + staart van het goede antwoord))
- [45] was «Geen verschil in betekenis of 'Dennoch' is informeler» → nu «'Trotzdem' betekent 'omdat'» (plaksel-afleider ('… of …'))
- [46] was «Een kleine onveranderlijke woordcategorie: bijwoorden, voorzetsels, voegwoorden, partikels» → nu «Een klein onverbuigbaar woord, zoals 'ja', 'doch' of 'mal'» (goed antwoord was cirkelredenering ('… voegwoorden, partikels'))
- [47] was «Hypotaxe: onderschikking (omdat, hoewel); Parataxe: nevenschikking (en, maar)» → nu «Beide betekenen nevenschikking» (omgekeerde kopie van het goede antwoord (ook goed))
- [48] was «Een passieve constructie waarbij 'es' een latere 'dass'-zin aankondigt» → nu «Een constructie met 'es' als onderwerp bij weerwerkwoorden» (plaksel-afleider (staart van het goede antwoord))
- [49] was «als vollverb: 'Ich mag Kaffee' (lust/houdt van); Als modaal: 'Ich mag reisen' (wil graag)» → nu «Als modaal: 'Ich mag Kaffee'; als vollverb: 'Ich mag reisen'» (omgekeerde kopie van het goede antwoord (ook goed))

#### frans.klas1 · gecontroleerd 50 · hersteld 30 · verwijderd 0
- [0] was «Voltooid toekomende met avoir/être + participe passé | Onvoltooid verleden | Voltooid verleden met avoir/être + participe passé» → nu «Toekomende tijd met aller + infinitief | Voorwaardelijke wijs (conditionnel) | Voltooid tegenwoordige tijd met avoir/être + participe passé» (omgekeerde kopie + dubbele afleider vervangen; passé composé = voltooid tegenwoordige tijd (voltooid verleden = plus-que-parfait))
- [2] was «Voortdurende/herhalende actie toekomende» → nu «Handeling die nu bezig is» (omgekeerde kopie van goede antwoord vervangen)
- [3] was «'Connaître' = feiten | 'Connaître' = feiten van feiten, 'connaître' = vertrouwd zijn met» → nu «'Savoir' = kunnen, 'connaître' = willen | 'Savoir' = iemand ontmoeten, 'connaître' = iets leren» (plaksel-afleiders vervangen)
- [4] was «Bovendien of Omdat» → nu «Daarom» (plaksel 'X of Y' vervangen)
- [5] was «Je dois... of Je vais...» → nu «Je peux...» (plaksel 'X of Y' vervangen)
- [7] was «Bovendien of Wanneer» → nu «Daarom» (plaksel 'X of Y' vervangen)
- [8] was «Altijd vrouwelijk of Geen overeenkomst» → nu «Komt overeen met het lijdend voorwerp» (plaksel 'X of Y' vervangen)
- [9] was «Stam + imparfait-uitgang of avoir + participe passé | Stam + imparfait-uitgang» → nu «Infinitief + présent-uitgang | Nous-stam + imparfait-uitgang» (plaksel vervangen; 'Stam + imparfait-uitgang' was dubbelzinnig (futurstam is ook een stam))
- [10] was «Bovendien als uitzondering» → nu «Bovendien» (plaksel-staart verwijderd)
- [13] was «Transitieve werkwoorden in de moderne taal- en letterkunde | Reflexieve werkwoorden» → nu «Werkwoorden op -er | Werkwoorden met een lijdend voorwerp» (plaksel-staart vervangen; 'Reflexieve werkwoorden' was ook goed (nemen être))
- [14] was «Jij kan... of Jij wil...» → nu «Jij mag...» (plaksel 'X of Y' vervangen)
- [15] was «Wanneer in de praktijk» → nu «Wanneer» (plaksel-staart verwijderd)
- [16] was «'Depuis' = voltooide duur onder bepaalde omstandigheden» → nu «'Pendant' = tijdstip, 'depuis' = plaats» (plaksel-staart 'onder bepaalde omstandigheden' vervangen)
- [18] was «Terwijl of Hoewel» → nu «Ondanks» (plaksel 'X of Y' vervangen)
- [19] was «Passé composé of Passé simple» → nu «Imparfait» (plaksel 'X of Y' vervangen)
- [21] was «Wanneer onder bepaalde omstandigheden» → nu «Wanneer» (plaksel-staart verwijderd)
- [22] was «'pouvoir' = mogelijkheid of toestemming; 'Savoir' = capaciteit door kennis» → nu «'Savoir' = moeten; 'pouvoir' = willen» (omgekeerde kopie van goede antwoord vervangen)
- [24] was «Aan de andere kant of Hoewel» → nu «Daarom» (plaksel 'X of Y' vervangen)
- [25] was «Être + participe passé (passé composé met être)» → nu «Être + participe passé» ('(passé composé met être)' klopte niet: passief is geen passé composé)
- [30] was «Zodra (gevolgd door futur simple in hoofdzin)» → nu «Sinds» (bijna-kopie van goede antwoord (ook futur simple in hoofdzin klopt volgens uitleg) vervangen)
- [33] was «Dat/die (lijdend voorwerp) of Dat/die (onderwerp)» → nu «Waar (plaats of tijd)» (plaksel 'X of Y' vervangen)
- [37] was «Rekening houden met of Zich vergissen» → nu «Zich schamen voor» (plaksel 'X of Y' vervangen)
- [38] was «il viendra of il venait» → nu «il venait» (plaksel 'X of Y' vervangen)
- [40] was «Het is noodzakelijk om of Het is mogelijk dat» → nu «Het is verboden om» (plaksel 'X of Y' vervangen)
- [41] was «Vervangt onderwerp onder bepaalde omstandigheden» → nu «Vervangt het onderwerp» (plaksel-staart verwijderd)
- [42] was «Aangezien onder bepaalde omstandigheden» → nu «Aangezien» (plaksel-staart verwijderd)
- [44] was «Voordat in de natuur» → nu «Voordat» (plaksel-staart verwijderd)
- [46] was «il pouvait of il pourra» → nu «il a pu» (plaksel 'X of Y' vervangen)
- [47] was «Vanwege of Terwijl» → nu «Ondanks» (plaksel 'X of Y' vervangen)
- [49] was «Zolang als of Terwijl» → nu «Zodra» (plaksel 'X of Y' vervangen)

#### frans.klas3 · gecontroleerd 50 · hersteld 46 · verwijderd 0
- [0] was «Aanvoegende wijs achter twijfel/wens/gevoel» → nu «Voorwaardelijke wijs» (omgekeerde kopie van goede antwoord vervangen)
- [1] was «Of/noch onder bepaalde omstandigheden» → nu «Of» (plaksel-staart verwijderd)
- [2] was «Voltooide verleden tijd (schriftelijk) | Voltooide toekomende tijd (schriftelijk)» → nu «Verleden tijd voor afgeronde handelingen (schriftelijk) | Toekomende tijd (schriftelijk)» (omgekeerde kopie vervangen; 'voltooide verleden tijd' is in NL-grammatica de plus-que-parfait)
- [3] was «Bijgevolg/als oorzaak» → nu «Bovendien» (bijna-kopie van goede antwoord vervangen)
- [4] was «'En' + présent participe (en faisant) | Conditionnel onder bepaalde omstandigheden» → nu «'En' + participe présent (en faisant) | Conditionnel» (plaksel-staart verwijderd; 'présent participe' → officiële term 'participe présent')
- [5] was «Wanneer in de praktijk» → nu «Wanneer» (plaksel-staart verwijderd)
- [6] was «Direct citaat of Monoloog» → nu «Dialoog» (plaksel 'X of Y' vervangen)
- [7] was «Bovendien onder bepaalde omstandigheden» → nu «Bovendien» (plaksel-staart verwijderd)
- [8] was «3e persoon enkelvoud presens-stam + -e, -es, -e, -ions, -iez, -ent» → nu «Futurstam + -ais, -ais, -ait, -ions, -iez, -aient» (bijna-kopie van goede antwoord vervangen)
- [11] was «Aan de andere kant of Op dat moment» → nu «Ondanks dat» (plaksel 'X of Y' vervangen)
- [12] was «Vergelijking in wetenschappelijke en academische teksten» → nu «Vergelijking» (plaksel-staart verwijderd)
- [13] was «Het begint met of Het lijkt op» → nu «Het lijkt op» (plaksel 'X of Y' vervangen)
- [14] was «Imparfait + participe passé of Futur + subjonctif» → nu «Futur de avoir/être + participe passé» (plaksel 'X of Y' vervangen)
- [15] was «Misschien in de natuur» → nu «Misschien» (plaksel-staart verwijderd)
- [16] was «Symbolistische stijl, Modernisme en Romantische stijl van de roman» → nu «Surrealistische stijl» (plaksel vervangen)
- [17] was «Inmiddels in de natuur» → nu «Inmiddels» (plaksel-staart verwijderd)
- [18] was «Grammatica onder bepaalde omstandigheden» → nu «Grammatica» (plaksel-staart verwijderd)
- [19] was «Misschien of Tenzij» → nu «Daarom» (plaksel 'X of Y' vervangen)
- [20] was «Monologue intérieur van vertellersperspectief en gedachten van personage zonder aankondiging» → nu «Dialoog tussen personages» (plaksel vervangen)
- [21] was «Bovendien of Terwijl | Bovendien | Tenslotte/overigens» → nu «Daarom | Daarentegen | Overigens/trouwens» (plaksel vervangen; 'Bovendien' was bijna synoniem (twee goed); 'tenslotte' klopt niet voor au demeurant)
- [22] was «Eén vertelstem in de moderne taal- en letterkunde» → nu «Eén vertelstem» (plaksel-staart verwijderd)
- [23] was «Bovendien als stijlfiguur in literaire teksten» → nu «Bovendien» (plaksel-staart verwijderd)
- [25] was «Vertrekkend onder bepaalde omstandigheden» → nu «Vertrekkend» (plaksel-staart verwijderd)
- [26] was «Stijlfiguur waarbij een deel achter het geheel of het geheel voor een deel staat» → nu «Metafoor» (bijna-kopie van goede antwoord vervangen)
- [28] was «De lezer weet minder dan het personage, wat spanning of tragiek creëert» → nu «Ironie door overdrijving» (omgekeerde kopie van goede antwoord vervangen)
- [29] was «qu'il ait allé of qu'il allait» → nu «qu'il aille» (plaksel 'X of Y' vervangen)
- [30] was «Aangezien onder bepaalde omstandigheden» → nu «Aangezien» (plaksel-staart verwijderd)
- [31] was «De structuur van het betoog waarmee de schrijver zijn houding t.o.v. de inhoud uitdrukt (adverbia, werkwoorden, aanhalingstekens)» → nu «Het gebruik van opsommingen» (plaksel vervangen)
- [32] was «Gesteld dat / verondersteld dat (+ conditionnel)» → nu «Zodra» (bijna-kopie van goede antwoord vervangen)
- [33] was «Verwijzing naar eerder genoemde element (anafoor)» → nu «Verwijzing terug naar een eerder genoemd element (anafoor)» (taalfout 'eerder genoemde element')
- [34] was «Hoewel, Tenzij en Zodra dat (twijfelvolle voorwaarde)» → nu «Zodra» (plaksel vervangen)
- [35] was «Vertraging van het verhaal onder bepaalde omstandigheden» → nu «Vertraging van het verhaal» (plaksel-staart verwijderd)
- [36] was «Ze zouden moeten vertrekken (conditionnel passé)» → nu «Ze zouden moeten vertrekken» ('(conditionnel passé)' stond bij de foute optie (zouden moeten = conditionnel présent) en verwarde)
- [37] was «Wat betreft onder bepaalde omstandigheden» → nu «Wat betreft» (plaksel-staart verwijderd)
- [38] was «Herhaling, Vergelijking en Overdrijving van wat je bedoelt (sarcastisch)» → nu «Herhaling» (plaksel vervangen)
- [39] was «Tenzij onder bepaalde omstandigheden» → nu «Tenzij» (plaksel-staart verwijderd)
- [40] was «Alwetende verteller die alles weet van geen personages» → nu «Ik-verteller die het verhaal zelf beleeft» (omgekeerde kopie van goede antwoord vervangen)
- [41] was «Nadrukkelijk onder bepaalde omstandigheden» → nu «Nadrukkelijk» (plaksel-staart verwijderd)
- [42] was «S'il viendrait plus tôt, il l'aurait vue of S'il avait venu plus tôt, il la verrait» → nu «S'il venait plus tôt, il la verrait» (plaksel 'X of Y' vervangen)
- [43] was «Het is onmogelijk of Het is omstreden» → nu «Het gaat slecht» (plaksel 'X of Y' vervangen)
- [44] was «Thesis, Citaat en Analyse van stijl van inhoud zonder interpretatie» → nu «Eigen mening over het boek» (plaksel vervangen)
- [45] was «achter zover / in de mate dat» → nu «Zodra» (bijna-kopie van goede antwoord vervangen)
- [46] was «Opsomming dat tegelijk in twee betekenissen wordt gebruikt» → nu «Vergelijking met 'comme'» (plaksel vervangen)
- [47] was «À moins qu'ils arrivent tôt of S'ils arrivaient tôt | S'ils arrivaient tôt» → nu «Bien qu'ils arrivent tôt | Parce qu'ils arrivent tôt» (plaksel vervangen; 'S'ils arrivaient tôt' was ook een goede vertaling van 'mochten ze vroeg aankomen')
- [48] was «Het is verboden te constateren onder bepaalde omstandigheden» → nu «Het is verboden te constateren dat» (plaksel-staart verwijderd)
- [49] was «Personificatie van grammaticaal gelijkwaardige maar semantisch ongelijksoortige elementen met één werkwoord» → nu «Herhaling van hetzelfde woord» (plaksel vervangen)

#### wiskunde.klas1 · gecontroleerd 50 · hersteld 10 · verwijderd 0
- [0] was «Wat is de uitkomst van 3x + 5 = 14?» → nu «Los op: 3x + 5 = 14.» (een vergelijking heeft geen 'uitkomst')
- [4] was «Welk getal komt na de komma bij 7 ÷ 4?» → nu «Hoeveel is 7 ÷ 4?» (vraag paste niet bij de opties: die geven het hele getal)
- [6] was «Hoeveel graden telt een driehoek in totaal?» → nu «Hoeveel graden zijn de drie hoeken van een driehoek samen?» (dubbelzinnig)
- [18] was «heeft zijden 3 en 4» → nu «heeft rechthoekszijden 3 en 4» (dubbelzinnig: 4 kan ook de schuine zijde zijn)
- [19] was optie «Hyperbool of Parabool» → nu «Cirkel» (plaksel-afleider); uitleg «rico 2» → «richtingscoëfficiënt 2» (Vlaams jargon)
- [24] was «Hoeveel graden heeft een vierkant in totaal?» → nu «Hoeveel graden zijn de vier hoeken van een vierkant samen?» (dubbelzinnig)
- [41] was optie «√100» → nu «8» (twee opties goed: √100 = 10)
- [42] was «Wat is de hoek in een gelijkzijdige driehoek?» → nu «Hoe groot is elke hoek van een gelijkzijdige driehoek?» (onduidelijk)
- [45] was uitleg «gelijknamige noemer 12» → nu «maak de breuken gelijknamig met noemer 12» (vakterm verkeerd gebruikt)
- [48] was optie «Een dalende curve die opent naar boven met top in de oorsprong» → nu «Een parabool die opent naar beneden met top in de oorsprong» (plaksel met staart van het goede antwoord, tegenstrijdig)

#### wiskunde.klas3 · gecontroleerd 50 · hersteld 18 · verwijderd 0
- [3] was «2a + 2b = c of a × b = c²» → nu «a + b = c» (plaksel-afleider)
- [12] was «f(x) = x² of f(x) = 2x» → nu «f(x) = x²» (plaksel-afleider)
- [13] was optie «f⁻¹(x) = (x−4)/2» → nu «f⁻¹(x) = (x+4)/2» (twee opties goed: (x−4)/2 = x/2 − 2)
- [16] was «Mediaan, Modus en Gemiddelde van gegevens rondom het gemiddelde» → nu «Grootste waarde van de gegevens» (plaksel-afleider)
- [17] was «Het snijpunt met de y-as of De top van een parabool» → nu «Het snijpunt met de x-as» (plaksel-afleider)
- [20] was «Een kwadratische vergelijking of Een exponentiële vergelijking» → nu «Een vergelijking met een logaritme» (plaksel-afleider)
- [24] was «Een cirkel alleen die ontstaat bij doorsnijding van een kegel (…)» → nu «Een cirkelsector» (plaksel met staart van het goede antwoord)
- [32] was «∫f(x)dx bij x=a of f(a+h) − f(a)» → nu «(f(a+h) + f(a))/h» (plaksel-afleider)
- [33] was «Het punt waar de functie een maximum bereikt of Het punt waar de functie een minimum bereikt» → nu «Het punt waar de grafiek de x-as snijdt» (plaksel-afleider)
- [35] was «(f·g)' = f'·g + f·g' of (f+g)' = f' + g'» → nu «(f∘g)' = f'(x)·g'(x)» (plaksel-afleider)
- [36] was «… de helling bepaalt of Een vergelijking van een cirkel in poolcoördinaten» → nu «Een vergelijking met twee onbekenden x en y» (plaksel-afleider)
- [37] was «a² + ab + b² of a² + b²» → nu «a² − 2ab + b²» (plaksel-afleider)
- [40] was «Een stelsel met logaritmische schaal … of Een rechthoekig coördinatenstelsel …» → nu «Een stelsel van twee vergelijkingen met twee onbekenden» (plaksel-afleider)
- [41] was «Een negatieve reële oplossing in de verzameling complexe getallen met imaginaire component» → nu «Een oplossing die altijd een geheel getal is» (plaksel met staart van het goede antwoord)
- [43] was «De correlatiecoëfficiënt … of De exacte relatie tussen twee variabelen» → nu «De gemiddelde waarde van de y-gegevens» (plaksel-afleider)
- [45] was «Een grafiek van een frequentieverdeling of Het gemiddelde van een dataset» → nu «De spreiding van een dataset» (plaksel-afleider)
- [46] was «Een verdeling waarbij grote waarden waarschijnlijker zijn of Een verdeling waarbij alle uitkomsten even kansrijk zijn» → nu «Een verdeling met twee toppen» (plaksel-afleider)

#### wiskunde.klas4 · gecontroleerd 30 · hersteld 2 · verwijderd 0
- [6] was uitleg «3³ × x²ˣ³» → nu «3³ × x^(2×3)» (onleesbare notatie)
- [10] was opties «(0,3) en (−2,2)», «(0,3) en (4,5)» → nu «(0,3) en (−2,4)», «(0,3) en (4,6)» (drie opties goed: beide puntenparen liggen ook op y = ½x + 3)

#### natuurkunde.klas1 · gecontroleerd 50 · hersteld 36 · verwijderd 0
- [2] was «3000 km/s of 300 km/s» → nu «340 m/s» (plaksel-afleider vervangen door korte plausibele foute optie)
- [3] was «Energie door positie of Chemische energie» → nu «Elektrische energie» (plaksel-afleider vervangen door korte plausibele foute optie)
- [4] was «Energie van beweging onder bepaalde omstandigheden» → nu «Energie van beweging» (plaksel-afleider vervangen door korte plausibele foute optie)
- [6] was vraag «Wat is het SI-symbool voor stroomsterkte?» → nu «Wat is het symbool van de eenheid van stroomsterkte?» (vraag dubbelzinnig: het symbool van de grootheid stroomsterkte is I, niet A; vraag naar de eenheid)
- [7] was «Diffractie of Reflectie» → nu «Reflectie»; uitleg «Licht buigt af (breekt) wanneer het van het ene naar het andere medium gaat.» → «Licht verandert van richting (breekt) wanneer het van het ene naar het andere medium gaat.» (plaksel-afleider vervangen door korte plausibele foute optie; uitleg 'buigt af' verwarrend met buiging (diffractie))
- [9] was «De golflengte onder bepaalde omstandigheden» → nu «De golflengte» (plaksel-afleider vervangen door korte plausibele foute optie)
- [11] was «Bewegingsenergie wordt altijd warmte of Energie neemt altijd toe» → nu «Energie raakt na verloop van tijd op» (plaksel-afleider vervangen door korte plausibele foute optie)
- [12] was «Een elektromagnetische golf of Een gravitatiegolf» → nu «Een golf die alleen in vacuüm reist» (plaksel-afleider vervangen door korte plausibele foute optie)
- [14] was «gewicht = zwaartekracht op massa (N); Massa = hoeveelheid materie (kg)» → nu «Massa en gewicht zijn hetzelfde» (omgekeerde kopie van het goede antwoord vervangen door plausibele foute optie)
- [15] was «Warmteoverdracht via vloeistofstromen of Warmteoverdracht via straling» → nu «Warmteoverdracht door verdamping» (plaksel-afleider vervangen door korte plausibele foute optie)
- [17] was «Een batterij alleen waardoor elektrische stroom kan vloeien» → nu «Een losse draad zonder stroombron» (plaksel-afleider vervangen door korte plausibele foute optie)
- [18] was «isolator niet of nauwelijks; Geleider laat stroom makkelijk door» → nu «Een isolator laat stroom makkelijk door» (omgekeerde kopie van het goede antwoord vervangen door plausibele foute optie)
- [20] was «Ampère of Volt» → nu «Volt» (plaksel-afleider vervangen door korte plausibele foute optie)
- [21] was «f = T² of T = 2f» → nu «T = f²» (plaksel-afleider vervangen door korte plausibele foute optie)
- [23] was «a = s/t² of a = F/v» → nu «a = F × m»; «a = v/t» → «a = v × t» (plaksel-afleider vervangen door korte plausibele foute optie; 'a = v/t' was ook goed (vanuit stilstand), vervangen)
- [24] was «Warmteoverdracht via straling of Warmte door molecuulbotsingen» → nu «Warmteoverdracht door verdamping» (plaksel-afleider vervangen door korte plausibele foute optie)
- [25] was «Convectie in vaste stoffen onder bepaalde omstandigheden» → nu «Convectie in vaste stoffen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [27] was «Componenten achter elkaar, Een open circuit en Een serieschakeling met de bron» → nu «Een kring met een open schakelaar» (plaksel-afleider vervangen door korte plausibele foute optie)
- [28] was «Een parallelle schakeling of Componenten naast elkaar» → nu «Een kring zonder stroombron» (plaksel-afleider vervangen door korte plausibele foute optie)
- [29] was «Studie van straling onder bepaalde omstandigheden» → nu «De studie van straling» (plaksel-afleider vervangen door korte plausibele foute optie)
- [30] was «inelastisch: deel kinetische energie verloren; Elastisch: kinetische energie behouden» → nu «Beide: kinetische energie altijd behouden» (omgekeerde kopie van het goede antwoord vervangen door plausibele foute optie)
- [31] was vraag «Wat is het principe van impuls (Newton)?» → nu «Wat is de stoot die een kracht op een voorwerp geeft?»; «Kracht = massa / tijd in de moderne taal- en letterkunde» → «Stoot = massa / tijd»; «p = mv + F» → «Stoot = m × v + F»; «F = ma» → «Stoot = m × a»; «Impuls = kracht × tijd = verandering in bewegingshoeveelheid» → «Stoot = kracht × tijd = verandering van de impuls»; uitleg «Impuls I = F × Δt = Δp = m × Δv.» → «Stoot = F × Δt = Δp = m × Δv (impuls p = m × v).» (afleider met restje 'in de moderne taal- en letterkunde'; bovendien heet F × Δt in het Nederlands 'stoot' (impuls = m × v), goede antwoord was vakinhoudelijk fout)
- [32] was «F = m × g × h of F = GMm» → nu «F = G × m₁m₂/r» (plaksel-afleider vervangen door korte plausibele foute optie)
- [33] was «Een snelheidsmeter dat licht splitst en het spectrum analyseert» → nu «Een instrument dat licht weerkaatst» (plaksel-afleider vervangen door korte plausibele foute optie)
- [34] was «Positieve lading neemt altijd toe of Lading en massa zijn equivalent» → nu «Lading verdwijnt bij wrijving» (plaksel-afleider vervangen door korte plausibele foute optie)
- [35] was «Alleen de snelheid van het licht van beide media en de invalshoek (wet van Snell)» → nu «Alleen de dikte van het materiaal» (plaksel-afleider vervangen door korte plausibele foute optie)
- [36] was «Elektromagnetische golf van instabiele atoomkernen onder uitzending van straling» → nu «Het uitzenden van geluid door atomen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [37] was «permanente magneet: altijd; Elektromagneet: magnetisme door elektrische stroom, schakelbaar» → nu «Beide zijn altijd magnetisch» (omgekeerde kopie van het goede antwoord vervangen door plausibele foute optie)
- [39] was «Een vierkantgolf, Een rechthoeksgolf en Een driehoeksgolf door de sinusfunctie» → nu «Een zaagtandgolf» (plaksel-afleider vervangen door korte plausibele foute optie)
- [40] was «Een scalair, Een eenheid en Een getal met zowel een getal (grootte) als een richting» → nu «Een grootheid zonder eenheid» (plaksel-afleider vervangen door korte plausibele foute optie)
- [43] was «F = kx², F = m × k en F = k/x is evenredig met de rek: F = k × x» → nu «F = k × x²» (plaksel-afleider vervangen door korte plausibele foute optie)
- [45] was «R_tot = R₁ × R₂ of R_tot = R₁ + R₂» → nu «R_tot = R₁ − R₂» (plaksel-afleider vervangen door korte plausibele foute optie)
- [46] was «Breking, Absorptie en Reflectie van golven langs de randen van een obstakel of door een spleet» → nu «Breking» (plaksel-afleider vervangen door korte plausibele foute optie)
- [47] was «Energie die nodig is om een atoomkern te splitsen in neutronen en neutronen» → nu «Energie die vrijkomt bij het verbranden van een stof» (afleider 'neutronen en neutronen' was een onzin-kopie van het goede antwoord)
- [48] was «convectie: via vloeistof/gas-stromen; Straling: via elektromagnetische golven (ook in vacuüm)» → nu «Beide werken alleen via vaste stoffen» (omgekeerde kopie van het goede antwoord vervangen door plausibele foute optie)
- [49] was «Staande golf zonder versterking waarbij een systeem sterk trilt als het aangedreven wordt op zijn eigenfrequentie» → nu «Het weerkaatsen van een golf (echo)» (plaksel-afleider vervangen door korte plausibele foute optie)

#### natuurkunde.klas3 · gecontroleerd 50 · hersteld 45 · verwijderd 0
- [0] was «Druk, Zwaartekracht en Magnetische inductie tussen elektrische ladingen: F = kq₁q₂/r²» → nu «Druk» (plaksel-afleider vervangen door korte plausibele foute optie)
- [1] was «Spanning per weerstand of Stroom per oppervlak» → nu «Lading per tijd» (plaksel-afleider vervangen door korte plausibele foute optie)
- [2] was «Elektrische lading van een spanning door verandering van magnetische flux» → nu «Het opslaan van lading in een condensator» (plaksel-afleider vervangen door korte plausibele foute optie)
- [4] was «Licht heeft geen frequentie bestaat uit kwantumpakketjes energie (fotonen): E = hf» → nu «Licht bestaat uit geluidsgolven» (plaksel-afleider vervangen door korte plausibele foute optie)
- [5] was «Levensduur van een atoom van radioactieve kernen vervallen is» → nu «De tijd tot alle kernen vervallen zijn» (plaksel-afleider vervangen door korte plausibele foute optie)
- [6] was «Massa × snelheid neemt toe van een gesloten systeem blijft constant» → nu «Impuls hangt alleen af van de massa» (plaksel-afleider vervangen door korte plausibele foute optie)
- [7] was «Licht van alle kleuren onder bepaalde omstandigheden» → nu «Licht van een tl-buis» (plaksel-afleider vervangen door korte plausibele foute optie)
- [8] was «Energiebehoud van de geïnduceerde stroom weerstaat de verandering die hem veroorzaakte» → nu «Behoud van impuls» (plaksel-afleider vervangen door korte plausibele foute optie)
- [9] was «massa en energie zijn equivalent (E=mc²); De snelheid van licht is constant in elk inertiaalstelsel» → nu «Tijd verloopt overal even snel» (omgekeerde kopie van het goede antwoord vervangen door plausibele foute optie)
- [10] was «Stroomsterkte, Magnetische kracht en Elektrisch veld door een oppervlak: Φ = B × A» → nu «Stroomsterkte» (plaksel-afleider vervangen door korte plausibele foute optie)
- [11] was «Ze zijn evenredig zijn omgekeerd evenredig bij constante golfsnelheid: λ = v/f» → nu «Ze zijn kwadratisch evenredig» (plaksel-afleider vervangen door korte plausibele foute optie)
- [12] was «Atoomkernen splitsen, Elektrolyse en Radioactief verval waarbij energie vrijkomt» → nu «Elektrolyse» (plaksel-afleider vervangen door korte plausibele foute optie)
- [14] was «De golflengte in een medium van lichtsnelheid in vacuüm tot lichtsnelheid in een medium: n = c/v» → nu «De dichtheid van een medium» (plaksel-afleider vervangen door korte plausibele foute optie)
- [15] was «Een geluidsgolf in lucht die op een vaste plek oscilleert door interferentie van heen- en teruglopende golven» → nu «Een golf die alleen in vacuüm beweegt» (plaksel-afleider vervangen door korte plausibele foute optie)
- [16] was «De som van stromen in een knoop = 0 of Weerstand × spanning = stroom» → nu «De som van alle weerstanden = 0» (plaksel-afleider vervangen door korte plausibele foute optie)
- [17] was «Ioniserend (röntgen, alfa, bèta) heeft genoeg energie om moleculen te ioniseren; niet-ioniserend (radio, zichtbaar licht) niet» → nu «Alleen gammastraling is ioniserend» (twee opties goed: 'moleculen ioniseren' is ook juist (kopie met één woord anders))
- [18] was «Golven vernietigen elkaar altijd is de som van de uitwijkingen van de afzonderlijke golven» → nu «Golven versterken elkaar altijd» (plaksel-afleider vervangen door korte plausibele foute optie)
- [20] was «Een weerstand die lading opslaat en in AC-circuits faseverschuiving veroorzaakt» → nu «Een diode» (plaksel-afleider vervangen door korte plausibele foute optie)
- [21] was «Een condensator die veranderingen in stroom weerstaat via geïnduceerde EMK» → nu «Een weerstand» (plaksel-afleider vervangen door korte plausibele foute optie)
- [22] was «Een energiepakketje (quantum) van elektromagnetische geleiding» → nu «Een geladen deeltje in de atoomkern» (afleider was kopie van het goede antwoord met één woord anders)
- [23] was «Entropie van straling van zwarte-lichaamsstraling: P = σT⁴» → nu «De druk van een gas bij constante temperatuur» (plaksel-afleider vervangen door korte plausibele foute optie)
- [24] was «Fluorescentie van elektronen uit een metaal door lichtbestraling» → nu «Het buigen van licht om een metalen rand» (plaksel-afleider vervangen door korte plausibele foute optie)
- [25] was «De golflengte bij resonantie of De golflengte van een foton» → nu «De golflengte van geluid» (plaksel-afleider vervangen door korte plausibele foute optie)
- [26] was «Diffractie van elektronen van een deeltje door een potentiaalbarrière die het klassiek niet kan passeren» → nu «Het versnellen van een deeltje in een elektrisch veld»; uitleg «Kwantumtunneling: elektronen kunnen door barrières — basis van transistors en kernfusie in sterren.» → «Kwantumtunneling: deeltjes kunnen door barrières — basis van de tunnelmicroscoop en kernfusie in sterren.» (plaksel-afleider vervangen door korte plausibele foute optie (en dubbele 'Diffractie van elektronen'); uitleg 'basis van transistors' klopt niet)
- [27] was «Elektronen zijn in wolken, Kwantummechanisch model en Protonen bewegen met bepaalde energieniveaus» → nu «Protonen draaien om de elektronen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [28] was «Twee kernen smelten samen, Radioactief verval en Kernfusie van energie» → nu «Kernfusie» (plaksel-afleider vervangen door korte plausibele foute optie)
- [29] was «centrifugaal: fictieve kracht in roterend referentiekader; Centripetaal: echte kracht naar middelpunt» → nu «Beide zijn echte krachten naar buiten» (omgekeerde kopie van het goede antwoord vervangen door plausibele foute optie)
- [30] was «E = Q/C of E = QC» → nu «E = QC» (plaksel-afleider vervangen door korte plausibele foute optie)
- [32] was «Een transformator die wisselstroom omzet naar gelijkstroom» → nu «Een versterker» (plaksel-afleider vervangen door korte plausibele foute optie)
- [33] was «Tijd staat stil bij lichtsnelheid als hij snel beweegt t.o.v. een stilstaande waarnemer» → nu «Een klok loopt sneller als hij snel beweegt» (plaksel-afleider vervangen door korte plausibele foute optie)
- [34] was «Verlies van massa bij chemische reactie van losse nucleonen en de werkelijke kernmassa» → nu «De massa van een neutron» (plaksel-afleider vervangen door korte plausibele foute optie)
- [35] was «Een supergeleider met geleiding tussen geleider en isolator, afhankelijk van temperatuur/doping» → nu «Een metaal dat altijd goed geleidt» (plaksel-afleider vervangen door korte plausibele foute optie)
- [36] was «Een condensator, Een weerstand en Een transistor die als diode werkt» → nu «Een weerstand» (plaksel-afleider vervangen door korte plausibele foute optie)
- [37] was «Temperatuur en druk zijn altijd evenredig door warmte-uitwisseling en verrichte arbeid: ΔU = Q - W» → nu «Energie kan uit het niets ontstaan» (plaksel-afleider vervangen door korte plausibele foute optie)
- [38] was «Een diode, Een condensator en Een weerstand die stroom versterkt of als schakelaar werkt» → nu «Een diode» (plaksel-afleider vervangen door korte plausibele foute optie)
- [39] was «Diffractie, Polarisatie en Lichtbreking die gelijktijdig op dezelfde plek zijn» → nu «Diffractie» (plaksel-afleider vervangen door korte plausibele foute optie)
- [40] was «Kleurscheiding van de trillingsrichting van lichtgolven tot één vlak» → nu «Het versterken van licht» (plaksel-afleider vervangen door korte plausibele foute optie)
- [41] was vraag «Wat is de formule voor cirkelbeweging?» → nu «Wat is de formule voor de middelpuntzoekende kracht bij een cirkelbeweging?» (vraag te vaag: 'formule voor cirkelbeweging' kan ook v = 2πr/T zijn)
- [43] was «Een ideaal object dat geen opvallende straling absorbeert en perfect uitstraalt» → nu «Een object dat alle straling weerkaatst» (afleider was kopie van het goede antwoord met één woord anders)
- [44] was «Vrije val en zwaartekracht zijn lokaal equivalent aan versnelling» → nu «Zwaartekracht is lokaal niet te onderscheiden van een versnelling»; «Licht wordt aangetrokken door massa of Massa en energie zijn hetzelfde» → «Licht beweegt altijd in een rechte lijn» (plaksel-afleider vervangen door korte plausibele foute optie; goede antwoord was krom geformuleerd)
- [45] was «Een boson, Een massa-deeltje en Een foton van de zwaartekracht» → nu «Een elektron» (plaksel-afleider vervangen door korte plausibele foute optie)
- [46] was «Een gluon, Een foton en Een quark met het Higgs-veld dat deeltjes massa geeft» → nu «Een gluon» (plaksel-afleider vervangen door korte plausibele foute optie)
- [47] was «capacitief neemt af (Xc = 1/2πfC); Inductief neemt toe met frequentie (XL = 2πfL)» → nu «Beide nemen af met frequentie» (omgekeerde kopie van het goede antwoord vervangen door plausibele foute optie)
- [48] was «De energie van een deeltje, De locatie van een deeltje en De snelheid van een deeltje geeft om een deeltje te vinden» → nu «De energie van een deeltje» (plaksel-afleider vervangen door korte plausibele foute optie)
- [49] was «Een elektron, Een foton en Een quark van de sterke kernkracht die quarks samenbindt» → nu «Een foton» (plaksel-afleider vervangen door korte plausibele foute optie)

#### natuurkunde.klas4 · gecontroleerd 20 · hersteld 0 · verwijderd 0

#### nask.klas1 · gecontroleerd 50 · hersteld 25 · verwijderd 0
- [3] was «neutronen, neutronen en elektronen» → nu «Moleculen en ionen» (afleider 'neutronen, neutronen en elektronen' was onzin-kopie van het goede antwoord)
- [4] was «Plasma of Vast» → nu «Gas» (plaksel-afleider vervangen door korte plausibele foute optie)
- [5] was «Volume of Massa» → nu «Druk» (plaksel-afleider vervangen door korte plausibele foute optie)
- [7] was vraag «Hoe heet het proces waarbij ijs smelt?» → nu «Hoe heet het proces waarbij ijs in water verandert?» (vraag gaf het antwoord weg ('ijs smelt' → 'Smelten'))
- [11] was «Twee stoffen chemisch gebonden of Een zuivere stof» → nu «Een stof die uit één element bestaat» (plaksel-afleider vervangen door korte plausibele foute optie)
- [13] was «Stoffen condenseren onder bepaalde omstandigheden» → nu «Stoffen condenseren» (plaksel-afleider vervangen door korte plausibele foute optie)
- [14] was «Newton of Joule» → nu «Joule» (plaksel-afleider vervangen door korte plausibele foute optie)
- [16] was «Energie neemt altijd toe in de moderne taal- en letterkunde» → nu «Energie neemt altijd toe» (afleider met restje 'in de moderne taal- en letterkunde')
- [18] was «P = U²/R» → nu «P = U + I»; «P = U²/R of P = I/U» → «P = I/U» (twee opties goed: P = U²/R is ook een juiste formule; plus plaksel-afleider)
- [19] was «V = I × R» → nu «U = I × R»; «R = V × I» → «R = U × I»; «I = V × R» → «I = U × R»; «V = I/R» → «U = I/R» (symbool V vervangen door U (Nederlandse notatie, zoals in de uitleg))
- [23] was «een zuivere stof bestaat uit één soort moleculen; Een mengsel bestaat uit meerdere stoffen die niet chemisch gebonden zijn» → nu «Een zuivere stof bestaat altijd uit één element» (omgekeerde kopie van het goede antwoord vervangen door plausibele foute optie)
- [28] was «Een magneet die stroom aantrekt of Een batterij zonder draden» → nu «Een draad die aan één kant los zit» (plaksel-afleider vervangen door korte plausibele foute optie)
- [29] was «Geleiders houden stroom tegen; isolatoren laten stroom door of Geleiders zijn altijd plastisch» → nu «Geleiders zijn altijd van hout» (plaksel-afleider vervangen door korte plausibele foute optie)
- [34] was «Vitaminen en mineralen zijn de enige voedingsstoffen of Stoffen die alleen in dierlijk voedsel zitten» → nu «Stoffen die alleen in groente zitten» (plaksel-afleider vervangen door korte plausibele foute optie)
- [35] was «gewicht is de zwaartekracht op die massa (N); Massa is de hoeveelheid materie (kg)» → nu «Massa en gewicht zijn hetzelfde» (omgekeerde kopie van het goede antwoord vervangen door plausibele foute optie)
- [36] was «Warmte stroomt via elektromagnetische straling of Warmte wordt altijd omgezet in licht» → nu «Warmte gaat alleen via luchtstroming» (plaksel-afleider vervangen door korte plausibele foute optie)
- [37] was «Warmte via directe aanraking van energie via elektromagnetische golven zonder materie» → nu «Warmte via stroming van lucht» (plaksel-afleider vervangen door korte plausibele foute optie)
- [38] was «Warmte via contact met vaste stoffen of Warmte via molecuulbotsingen» → nu «Warmte via elektromagnetische golven» (plaksel-afleider vervangen door korte plausibele foute optie)
- [39] was «De kern bestaat alleen uit protonen of Elektronen bewegen willekeurig» → nu «Elektronen zitten in de kern» (plaksel-afleider vervangen door korte plausibele foute optie)
- [42] was «Een schaal voor elektrische spanning die de zuurgraad aangeeft: 0 = sterk zuur, 7 = neutraal, 14 = sterk basisch» → nu «Een schaal voor windkracht» (plaksel-afleider vervangen door korte plausibele foute optie)
- [44] was «stollen: vloeibaar → nu vast (warmte afvoeren); Smelten: vast → vloeibaar (warmte toevoegen)» → «Smelten en stollen zijn hetzelfde proces» (omgekeerde kopie van het goede antwoord vervangen door plausibele foute optie)
- [45] was «Condensatie: vloeibaar → nu gas onder bepaalde omstandigheden» → «Condensatie: vloeibaar → gas» (plaksel-afleider vervangen door korte plausibele foute optie)
- [47] was «Watt of Volt» → nu «Ohm» (plaksel-afleider vervangen door korte plausibele foute optie)
- [48] was «in parallelschakeling naast elkaar; In serieschakeling zijn verbruikers achter elkaar geschakeld» → nu «Er is geen verschil» (omgekeerde kopie van het goede antwoord vervangen door plausibele foute optie)
- [49] was «Hernieuwbaar (zon, wind, lucht) raakt niet op; niet-hernieuwbaar (steenkool, olie, gas) raakt op» → nu «Hernieuwbare bronnen raken sneller op dan fossiele» (afleider was kopie van het goede antwoord met één woord anders ('lucht' i.p.v. 'water'))

#### scheikunde.klas3 · gecontroleerd 50 · hersteld 43 · verwijderd 0
- [0] was «Wat is het atoommassa-getal?» → nu «Wat is het massagetal van een atoom?»; was «Totaal aantal neutronen + neutronen in de kern» → nu «Alleen neutronen» (plaksel/omgekeerde kopie als afleider; term 'atoommassa-getal' bestaat niet (massagetal))
- [1] was «Een molecuul, Een neutraal atoom en Een neutron met een nettolading door verlies/opname van elektronen» → nu «Een atoom met een extra neutron» (plaksel-afleider)
- [2] was «Maat voor concentratie» → nu «Maat voor de dichtheid»; was «Maat achter de zuurgraad van een oplossing (0 = sterk zuur, 14 = sterk basisch)» → nu «Maat voor de hoeveelheid zout in water» (omgekeerde kopie ('achter') + 'concentratie' is half goed (pH = maat voor H⁺-concentratie))
- [3] was «Reactie die warmte absorbeert of Reactie bij hoge druk» → nu «Reactie waarbij altijd een gas ontstaat» (plaksel-afleider)
- [5] was «Massa neemt toe bij reactie of Massa verdwijnt als energie» → nu «Massa neemt af bij verbranding» (plaksel-afleider)
- [6] was «Gemeenschappelijk gebruik van elektronenparen tussen moleculen» → nu «Aantrekking tussen moleculen door vanderwaalskrachten» (bijna-kopie van het goede antwoord)
- [7] was «Dichtheid van een stof of Massa van 1 atoom» → nu «Volume van 1 mol gas» (plaksel-afleider)
- [9] was «Spontane chemische reactie of Oxidatie zonder stroom» → nu «Scheiden van stoffen met een filter» (plaksel-afleider)
- [10] was «Verbinding met waterstof of Opname van elektronen» → nu «Opname van protonen» (plaksel-afleider)
- [11] was «Een inhibitor die de reactiesnelheid verhoogt zonder zelf verbruikt te worden» → nu «Een stof die het evenwicht verschuift» (plaksel-afleider (bevat staart van het goede antwoord))
- [12] was «Van-der-Waalskrachten of Covalente bindingen» → nu «Ionbindingen tussen de fosfaatgroepen» (plaksel-afleider)
- [14] was «Evenwicht is altijd stabiel, Concentraties nemen altijd toe en Evenwicht verschuift altijd naar reactanten door de verstoring te compenseren» → nu «Een reactie in evenwicht staat volledig stil» (plaksel-afleider)
- [15] was «Hoe berekent men de molaire concentratie?» → nu «Hoe bereken je de molaire concentratie?» (aanspreekvorm 'je')
- [16] was «Stof met metaalatomen onder bepaalde omstandigheden» → nu «Stof die alleen uit metaalatomen bestaat» (plaksel-staart 'onder bepaalde omstandigheden')
- [17] was «Filtratie van vaste stoffen van kookpuntverschillen door verdamping en condensatie» → nu «Scheiding op basis van dichtheid door bezinken» (plaksel-afleider (staart van het goede antwoord))
- [18] was «Een onverzadigde oplossing die pH-veranderingen tegengaat bij toevoeging van zuur of base» → nu «Een verzadigde zoutoplossing» (plaksel-afleider (staart van het goede antwoord))
- [19] was «Atomen van hetzelfde element met ander massagetal onder bepaalde omstandigheden» → nu «Atomen van hetzelfde element met ander massagetal» (plaksel-staart 'onder bepaalde omstandigheden')
- [20] was «Precipitatiereactie waarbij oxidatie en reductie gelijktijdig plaatsvinden» → nu «Ontledingsreactie door verhitting» (plaksel-afleider (staart van het goede antwoord))
- [21] was «Een alkyleen» → nu «Een alkeen»; was «Een alkyleen, Een aromatische verbinding en Een alcohol met alleen enkelvoudige bindingen (CₙH₂ₙ₊₂)» → nu «Een alcohol» (plaksel-afleider; 'alkyleen' is geen gangbare term (alkeen))
- [22] was «Warmte vrijgevend of Bij hoge druk» → nu «Altijd een snelle reactie» (plaksel-afleider)
- [23] was «Ordening van geen elementen op basis van atoomnummer en eigenschappen» → nu «Lijst van alle moleculen op alfabet» (omgekeerde kopie ('geen elementen'))
- [24] was «Aantrekking tussen positieve en negatieve radicalen» → nu «Aantrekking tussen metaalionen en vrije elektronen» (bijna-kopie van het goede antwoord)
- [25] was «Wet van Le Chatelier, Energiebehoud in mechanica en Wet van behoud van massa is onafhankelijk van de reactieroute» → nu «Wet van Le Chatelier» (plaksel-afleider)
- [26] was «Atoom = uit twee atomen» → nu «Atoom = geladen deeltje; molecuul = ongeladen deeltje»; was «Atoom = kleinste eenheid van een element; molecuul = twee of meer gebonden moleculen» → nu «Er is geen verschil: het zijn twee namen voor hetzelfde» (bijna-kopie van het goede antwoord + onzinnige optie 'Atoom = uit twee atomen')
- [27] was «Een gas dat vrijkomt, Een zure oplossing en Een endotherme reactie die uit een oplossing neerslaat» → nu «Een vloeistof die bovenop blijft drijven» (plaksel-afleider)
- [28] was «Een scheidingstechniek op basis van kookpunt van hoe stoffen zich verplaatsen over een fase» → nu «Een scheidingstechniek op basis van deeltjesgrootte» (plaksel-afleider)
- [30] was «Energie is altijd behouden bij chemische reacties of Activeringsenergie bepaalt de reactiesnelheid» → nu «Een reactie verloopt altijd sneller bij lagere temperatuur» (plaksel-afleider)
- [31] was «Een oplossing die pH onveranderd houdt bij verdunning» → nu «Een oplossing die alleen een sterk zuur bevat»; was «Een oplossing die pH onveranderd houdt bij verdunning of Een sterk zuur vermengd met een sterke base» → nu «Een oplossing met precies pH 7» (plaksel-afleider; 'pH onveranderd bij verdunning' is ook een buffereigenschap (twee opties goed))
- [32] was «Spontane redoxreactie in een batterij of Oxidatie van metalen door zuurstof» → nu «Het scheiden van een mengsel door verhitten» (plaksel-afleider)
- [34] was «sp4 (bolvormig) of sp (lineair)» → nu «sp2 (vlak)» (plaksel-afleider)
- [35] was «pi is zijdelingse overlapping van p-orbitalen; Sigma is een kop-op-kop overlapping langs de bindingsas» → nu «Sigma is zijdelingse overlapping van p-orbitalen; pi is kop-op-kop overlapping langs de bindingsas» (omgekeerde kopie was inhoudelijk ook goed (twee opties goed))
- [36] was «Een verbinding met een benzeen-ring die altijd sterk ruikt met gedelocaliseerde pi-elektronen die voldoet aan de Hückel-regel (4n+2 elektronen)» → nu «Een verbinding met een open, onvertakte koolstofketen» (plaksel-afleider (staart van het goede antwoord))
- [37] was «Een verbinding waarbij atomen ontbreken in de formule of Een atoom met ander aantal neutronen (isotoop)» → nu «Een ion met een andere lading» (plaksel-afleider)
- [39] was «Energie kan niet worden omgezet bij chemische reacties of De activeringsenergie is afhankelijk van de reactieweg» → nu «De totale enthalpie-verandering hangt af van de reactiesnelheid» (plaksel-afleider)
- [40] was «Een eliminatiereactie van HX uit een halogeenalkaan of Een additiereactie aan een onverzadigd molecuul» → nu «Een reactie waarbij een polymeer uiteenvalt in monomeren» (plaksel-afleider)
- [41] was «Een zuur verwijdert een proton uit een molecuul of Een radicaal koppelt aan een aromatische ring» → nu «Een elektrofiel vervangt een waterstofatoom op een aromatische ring» (plaksel-afleider)
- [42] was «SN2 geeft altijd racemisch mengsel; SN1 behoudt configuratie of Er is geen verschil in stereochemisch resultaat» → nu «SN1 en SN2 verlopen allebei in één stap zonder intermediair» (plaksel-afleider)
- [43] was «Een reactie waarbij H2 wordt toegevoegd aan een onverzadigde verbinding of Een reactie waarbij een molecuul splitst in twee kleinere delen» → nu «Een overgang van een gas naar een vloeistof door afkoelen» (plaksel-afleider)
- [44] was «Homolytisch vindt plaats in water; heterolytisch in organische oplosmiddelen of Homolytisch geeft anionen; heterolytisch geeft radicalen» → nu «Homolytisch splitst alleen C–C-bindingen; heterolytisch alleen C–H-bindingen» (plaksel-afleider)
- [45] was «Bij additie van HX aan een alkeen gaat H naar het koolstof met meer H-moleculen» → nu «Bij additie van HX aan een alkeen gaat H naar het koolstof met minder H-atomen» (bijna-kopie van het goede antwoord ('H-moleculen'))
- [46] was «Een methode om reactiesnelheid te meten via kleurverandering of Een techniek om moleculen te scheiden op basis van massa» → nu «Een techniek om stoffen te scheiden op basis van kookpunt» (plaksel-afleider)
- [47] was «Elk orbitaal krijgt eerst 2 elektronen voor hogere orbitalen worden gevuld of Elektronen bezetten orbitalen van hoog naar laag energieniveau» → nu «Elektronen vullen eerst de buitenste schil» (plaksel-afleider)
- [49] was «De reactiviteit van een nucleofiel hangt af van zijn ladingsdichtheid of De verandering in vrije energie bepaalt de evenwichtsconstante» → nu «De absorptie van licht is omgekeerd evenredig met de concentratie» (plaksel-afleider)

#### scheikunde.klas4 · gecontroleerd 20 · hersteld 0 · verwijderd 0

#### wiskunde-a.klas5 · gecontroleerd 10 · hersteld 0 · verwijderd 0

#### wiskunde-a.klas6 · gecontroleerd 10 · hersteld 0 · verwijderd 0

#### wiskunde-b.klas5 · gecontroleerd 10 · hersteld 0 · verwijderd 0

#### wiskunde-b.klas6 · gecontroleerd 10 · hersteld 2 · verwijderd 0
- [4] was «Wat zijn de nulpunten van sin(x) = 0?» → nu «Wat zijn de oplossingen van sin(x) = 0?» (vraag onlogisch geformuleerd ('nulpunten van een vergelijking'))
- [7] was «Een lijn die de grafiek steeds dichter nadert maar nooit (of pas op ∞) raakt» → nu «Een lijn die de grafiek steeds dichter nadert als x of f(x) naar oneindig gaat»; was «Asymptoot: lijn die de grafiek benadert maar niet snijdt.» → nu «Asymptoot: lijn die de grafiek steeds dichter benadert. Een horizontale asymptoot kan de grafiek soms wel snijden (bv. sin(x)/x).» (feitfout: grafiek kan een (horizontale) asymptoot wel snijden)

### Aanvulling coördinator
- wiskunde.klas3[30] «integraal van 2x»: optie «x²» → «½x² + C». x² is óók een primitieve, dus er waren twee goede opties. Deze herstelling zit in de telling van wiskunde.klas3.

### Twijfel voor Mark

- taal.klas1 (algemeen): veel vragen in deze "klas1"-set gaan over stof voor de bovenbouw van havo/vwo (anakoloet, syllepsis, focalisatie, deductief/inductief, ad hominem). Inhoudelijk niet fout, maar te hoog niveau voor klas 1. Niet gewijzigd.
- taal.klas1[32]: de connotatie van 'strijden' is een vage vraag (het antwoord "zowel positief als negatief" hangt af van de context). Alleen de letterverwijzing "Beide B en C" vervangen.
- taal.klas1[38]: "inleiding, kern en slot" past ook op andere zakelijke tekstsoorten (en eigenlijk op elke goed opgebouwde tekst). Tussen deze opties is "Betoog" wel het enige redelijke antwoord. Niet gewijzigd.
- taal.klas1[62]: "hoe een tekst zijn lezer aanspreekt" kan je ook als "Stijl" lezen. "Toon" is het beste antwoord. Niet gewijzigd.
- taal.klas3[15]: "verhaal-in-een-verhaal" is eigenlijk een raamvertelling. Mise en abyme is specifiek een verhaal dat het hoofdverhaal weerspiegelt. Raamvertelling staat niet bij de opties, dus het antwoord blijft eenduidig. Niet gewijzigd.
- taal.klas3[42]: de vraag noemt "slotstrofe" (enkelvoud), terwijl het antwoord "de twee terzetten" is (het sextet). Te verdedigen. Niet gewijzigd.
- taal.klas3[49]: de uitleg noemt Animal Farm "allegorie voor communisme". Preciezer is: de Russische Revolutie en het stalinisme. Niet gewijzigd.
- nederlands.klas3[28]: uitleg bij consonantie gebruikt Engelse voorbeelden ('pitter-patter', 'blank and think'); een Nederlands voorbeeld (bv. 'lief – laf') zou beter passen. Niet gewijzigd.
- nederlands.klas1[40]: het voorbeeld in de uitleg ('Die man die gisteren belde — ik wist niet …') is eerder een losse zinsaanloop dan een schoolvoorbeeld van een anakoloet. Niet gewijzigd.
- nederlands.klas1[48]: 'vrij en onafhankelijk' als voorbeeld van tautologie is twijfelachtig. Niet gewijzigd.
- nederlands.klas4[8]: 'zonder zelf positie te kiezen' — in schoolmethodes mag een beschouwing aan het eind wel een voorzichtige eigen mening geven. Niet gewijzigd.
- latijn.klas3[2]: het goede antwoord 'Een te + infinitief constructie' is een vertaalkeuze en geen definitie (de uitleg zegt wel correct: passief verbaal bijvoeglijk naamwoord). Niet gewijzigd.
- spaans.klas3[0]: ser = 'permanent' / estar = 'tijdelijk' is de gebruikelijke vereenvoudiging voor klas 3 (er zijn uitzonderingen, zoals estar muerto). Niet gewijzigd.
- engels.klas1 (algemeen): de set heet "klas1" maar bevat stof op bovenbouw-niveau (thesis statement, oxymoron, imply/infer, principal/principle, future continuous). Inhoudelijk klopt het, maar het niveau past niet bij klas 1 — niet gewijzigd.
- engels.klas3 (algemeen): idem, termen als anadiplosis, catachresis, focalization, hermeneutics, palimpsest, ekphrasis zijn universitair literatuurwetenschap-niveau, niet klas 3. Niet gewijzigd.
- engels.klas1[1]: "If I were rich" blijft het goede antwoord; "was" is weggehaald omdat het in modern (informeel) Engels ook goedgekeurd wordt.
- engels.klas1[10]: "She regrets to accept the job" is niet strikt ongrammaticaal (regret to = spijt hebben te moeten melden), maar in deze zin onnatuurlijk; gelaten.
- engels.klas3[38]: "Vertellersperspectief" als afleider ligt dicht bij focalisatie (in veel Nederlandse schoolboeken heet focalisatie juist "perspectief"); gelaten omdat het goede antwoord specifieker is.
- grieks.klas3[9]: prefix geschreven als ὑπό- (met accent, zoals het voorzetsel); als prefix gebruikelijk ὑπο-. Klein, niet gewijzigd.
- duits.klas1 (algemeen): de set heet 'klas 1' maar bevat stof die eerder bij klas 3-5 hoort (Konjunktiv II, Vorgangspassiv, Genitief, modale partikels). Niet gewijzigd; mogelijk elders indelen.
- duits.klas3 (algemeen): veel vragen zijn taalkundige vakterminologie (Litotes, Dativus ethicus, Hypotaxe, Antizipatorkonstruktion) op universitair niveau, niet klas 3. Inhoudelijk gecontroleerd, niet herschreven.
- duits.klas3[4]: 'ver-' in 'vergessen' als 'versterking/afwijking' is taalkundig vaag; gelaten zoals het was (afleider wel vervangen).
- duits.klas3[39]: 'Lass mich!' heet hier 'modaal'; strikt genomen is dat 'lassen' als zelfstandig werkwoord (met rust laten). Niet gewijzigd.
- duits.klas3[49]: 'Ich mag reisen' als 'wil graag' is ouderwets/regionaal; tegenwoordig betekent mögen + infinitief vooral 'graag doen'. Niet gewijzigd.
- frans.klas1 [13]: goede optie "Bewegings- en toestandswerkwoorden" is onvolledig (ook wederkerende werkwoorden nemen être, zoals de uitleg zegt); afleider "Reflexieve werkwoorden" daarom vervangen, maar de vraag blijft wat smal.
- frans.klas1 [9], [27], [30]: begrippen ("onpersoonlijk complement", "dès que" + futur in beide zinsdelen) zijn eerder bovenbouw-stof dan klas 1; inhoudelijk wel correct.
- frans.klas3 [28]: uitleg staat in het Frans ("le lecteur connaît la vérité…"), de rest van de set in het Nederlands; niet gewijzigd.
- Algemeen: de inhoud van "klas1" (subjonctif, plus-que-parfait, passief) en "klas3" (zeugma, syllepse, polyfonie) is ver boven het niveau van klas 1 resp. klas 3 van de middelbare school; lijkt eerder bovenbouw havo/vwo. Niet aangepast (structuur).
- wiskunde.klas3 (vrijwel hele set): niveau is bovenbouw havo/vwo (afgeleiden, integralen, ln, ketenregel, complexe wortels, poolcoördinaten, normale verdeling) en hoort niet bij klas 3. Niet gewijzigd, wel verkeerd ingedeeld.
- wiskunde.klas3[30]: opties «x²» en «x² + C» — x² is ook een primitieve; strikt genomen is alleen x² + C 'de' onbepaalde integraal, maar dat is muggenzifterij voor een leerling. Niet gewijzigd.
- wiskunde.klas1[9] en [34], [2] en [35]: (bijna) dubbele vragen binnen dezelfde set. Niet gewijzigd.
- wiskunde.klas4[20]: oppervlakte zonder eenheid (straal 10 zonder cm). Niet gewijzigd.
- natuurkunde.klas1 en natuurkunde.klas3: de inhoud past niet bij het niveau. In "klas1" staan onder meer de wet van Snell, bindingsenergie, gravitatiewet en vectoren; in "klas3" onder meer tunneling, de Broglie, het Higgs-boson, gluonen, golffunctie Ψ en reactantie (universitair/VWO-6-niveau). Niet aangepast (is structureel), wel aanbevolen om deze sets te herzien of aan een hoger niveau te koppelen.
- natuurkunde.klas3[42]: afleider «6,626 × 10⁻³⁴ J·m» verschilt alleen in eenheid van het goede antwoord; bewust laten staan als eenheden-afleider.
- nask.klas1[32]/[33]/[41]/[43] en natuurkunde.klas1[47]: afleiders met één woord anders dan het goede antwoord (bv. «glucose en waterstof», «reageert met waterstof», «lucht en een zout») laten staan: het zijn plausibele misvattingen en ze zijn niet ook goed.
- nask.klas1[23]: het goede antwoord «een zuivere stof bestaat uit één soort moleculen» klopt niet voor metalen en zouten (die bestaan niet uit moleculen); voor klas 1 gangbaar, daarom niet gewijzigd.
- natuurkunde.klas1[47]: in de uitleg staat «IJzer heeft de hoogste bindingsenergie per nucleon». Strikt genomen is dat nikkel-62, maar ijzer-56 is de gangbare schoolversie. Niet gewijzigd.
- natuurkunde.klas4: alle 20 vragen nagerekend (72 km/u = 20 m/s, 30 m/s, 50 N, 20.000 J, 12 Ω, 460 W); geen fouten.
- scheikunde.klas3: de set heet "klas3" maar ~de helft van de vragen is bovenbouw/universitair niveau (SN1/SN2, sigma/pi-binding, hybridisatie, Hückel-regel, Gibbs-energie, Beer-Lambert, Markovnikov). Inhoudelijk nu correct, maar past niet bij klas 3; mogelijk verplaatsen naar scheikunde.klas5/6 of schrappen (niet gedaan: valt buiten minimaal herstel).
- scheikunde.klas3: dubbele onderwerpen (elektrolyse [9]/[32], Le Chatelier [14]/[30], buffer [18]/[31], isomeren [19]/[37], wet van Hess [25]/[39]) — niet fout, wel herhaling.
- scheikunde.klas3 [10]/[20]: uitleg gebruikt het Engelse ezelsbruggetje "OIL RIG"; overwegen een Nederlandse variant toe te voegen.
- wiskunde-a.klas6 en wiskunde-b.klas5: het goede antwoord staat bijna altijd op dezelfde positie (klas6: steeds optie 2; b.klas5 vaak optie 3) — als de app opties niet schudt, is dat raadbaar.
- wiskunde-a.klas6 [2]: "interval waarbinnen de populatieparameter met een bepaalde kans valt" is de gangbare schoolformulering maar statistisch onnauwkeurig; de uitleg corrigeert het. Laten staan.
- wiskunde-a.klas5 [5] (periode sinusfunctie) hoort eerder bij wiskunde B; inhoudelijk correct.

**Deel C: gecontroleerd 1001 · hersteld 582 · verwijderd 0**

---

## Deel D — Eindmeting (onafhankelijk)

**Opzet:**
- **Wie:** twee nakijkers die A–C niet deden.
- **Steekproef:** 200 vragen, getrokken met een script (mulberry32, seed **20261006**, Fisher-Yates) uit de pool op de **main-stand vóór deze ronde**. De pool bestond uit 17.594 vragen: alle 353 leerpaden via het manifest (ook de .jsx-paden, alles laadbaar), plus `sampleQuestions.js`, `textbookQuestions.js` en `topics.js`.
- **Verdeling:** 113 uit de leerpaden, 41 uit sampleQuestions, 8 uit textbookQuestions en 38 uit topics.
- **Reproduceerbaar:** dezelfde seed geeft byte-voor-byte dezelfde steekproef.

### Foutpercentage

**24 van 200 = 12,0% fout of dubbelzinnig** (op de main-stand). Het doel van ≤ 2% is niet gehaald.

| bron | steekproef | fout | % |
|---|---:|---:|---:|
| leerpaden | 113 | 4 | 3,5% |
| sampleQuestions.js | 41 | 15 | 36,6% |
| topics.js (veel vragen putten uit sampleQuestions) | 38 | 5 | 13,2% |
| textbookQuestions.js | 8 | 0 | 0% |

**Herstel:**
- 8 van de 24 waren al in deel A–C hersteld.
- De andere 16 zijn nu hersteld: 4 in leerpaden, 11 via `docs/audit/fixes-sq-eindmeting.json` en 1 via `docs/audit/fixes-topics-eindmeting.json`.

**Waar het misging:** bijna alle fouten in de oefenbank zaten in groepen buiten de opdracht van deze ronde (groep3–groep8-sets) en waren plaksel-afleiders. Daarom is deel E toegevoegd.

### Gevonden fouten

Gecontroleerd 100 · fout/dubbelzinnig 4

- #37 · examen-nederlands-2022-t1 stap 2 vraag 1 · «Gezamenlijk deelonderwerp alinea 9-12» · de getoonde bronTekst (tekst1, gedeeld met V2/V13) bevat het antwoord letterlijk als aantekening, plus «(Slot = advies.)» · hersteld: was «… ook voordelen. *(Deelonderwerp 9-12: zoeken naar evenwichtig gebruik.)*» en «… goede voorbeeld. *(Slot = advies.)*» → nu beide aantekeningen weg
- #56 · krachten-natuurkunde stap 5 vraag 2 · «Waarom is wrijving belangrijk voor lopen?» · hint bij «Het versnelt je» bevat een natuurkundefout: bij lopen is (statische) wrijving juist de kracht die je naar voren duwt, ze remt niet (de uitleg zegt dat zelf ook, Newton 3) · hersteld: was «Het remt eerder dan dat het versnelt — maar je hebt het wél nodig om af te zetten.» → nu «Je versnelt doordat je je afzet. Maar wat zorgt ervoor dat je voet bij dat afzetten op zijn plek blijft?»
- #85 · samenstellingen-tussenletters-po stap 2 vraag 4 · «Welke is goed gespeld?» · twee opties goed: «boekenkasten» is ook correct gespeld (meervoud); daarnaast gaven de hints bij boekkast/boekekast het antwoord weg · hersteld: was optie «boekenkasten» → nu «boekskast»; hints was «Boek → boeken, dus met tussen-n.» / «Het is -en-, niet alleen -e-.» / «Dat is het meervoud.» → nu richtingvragen («Wat is het meervoud van 'boek'? Hoor je dat stukje terug in het woord?» / «Je hoort wel iets tussen 'boek' en 'kast' — welke letters horen daar precies?» / «Hoor je echt een s tussen 'boek' en 'kast'? Denk aan het meervoud van 'boek'.»)
- #90 · statistiek stap 11 vraag 9 · «Staafdiagram-hoogte staat voor?» · dubbelzinnig: in een staafdiagram kan de hoogte ook een waarde zijn (bv. neerslag per maand), dus «Waarde» is in het algemeen ook goed · hersteld: was «Staafdiagram-hoogte staat voor?» → nu «Een dobbelsteen is 60 keer gegooid. In het staafdiagram staan de ogen 1 t/m 6 onder de staven. Waar staat de hoogte van een staaf voor?» (opties/hints ongewijzigd; hint «waarde op x-as» klopt nu)

Controles: `node --check` op de 4 gewijzigde leerpaden ok; `npm run audit:vragen` → 0 meldingen. Geen sampleQuestions/topics/textbook-items in nr 1-100, dus geen fixes-json.

Gecontroleerd 100 · fout/dubbelzinnig 20

- #118 · sampleQuestions taal.groep3[38] · «Wat betekent 'mooi'?» · plaksel-staart-afleider · hersteld (D2-sq.json): was «lelijk in de praktijk» → nu «lelijk»
- #120 · sampleQuestions taal.groep7[20] · «Wat is een enkelvoudige zin?» · plaksel X of Y · hersteld (D2-sq.json): was «Een zin met meerdere persoonsvormen of Een zin zonder werkwoord» → nu «Een zin die altijd met een vraagteken eindigt»
- #121 · sampleQuestions taal.klas3[15] · «term voor verhaal-in-een-verhaal» · plaksel «Cliffhanger of Flashback» · al hersteld in eerdere deelronde (nu «Epiloog»)
- #123 · sampleQuestions aardrijkskunde.groep5[15] · «hoofdstad van Friesland» · plaksel X of Y · hersteld (D2-sq.json): was «Groningen of Zwolle» → nu «Assen»
- #124 · sampleQuestions geschiedenis.groep5[4] · «Wat was D-Day?» · plaksel X of Y · hersteld (D2-sq.json): was «Bevrijding van Amsterdam of Begin WO1» → nu «Begin van de Eerste Wereldoorlog»
- #130 · sampleQuestions natuur.groep4[19] · «Wat eet een eekhoorn?» · plaksel X of Y · hersteld (D2-sq.json): was «Bladeren of Vlees» → nu «Vis»
- #134 · sampleQuestions duits.groep5[22] · «'ik ben 10 jaar' in het Duits» · plaksel X of Y · hersteld (D2-sq.json): was «Ich habe zehn Jahre. of Ich bin zehn.» → nu «Ich habe zehn Jahre alt.»
- #135 · sampleQuestions duits.groep7[28] · «Wat betekent 'brauchen'?» · plaksel X of Y + «Gebruiken» is óók een betekenis van brauchen (= gebrauchen) → twee goede opties · hersteld (D2-sq.json): was «Gebruiken / Gebruiken of Geven» → nu «Breken / Geven»
- #136 · sampleQuestions duits.klas3[32] · «Futur II vs Futur I» · twee opties goed (zelfde antwoord omgedraaid) · al hersteld in eerdere deelronde
- #138 · sampleQuestions frans.klas3[18] · «registre de langue» · staart «onder bepaalde omstandigheden» · al hersteld in eerdere deelronde
- #139 · sampleQuestions frans.klas3[23] · «nonobstant» · staart-afleider «… als stijlfiguur in literaire teksten» · al hersteld in eerdere deelronde
- #144 · sampleQuestions wiskunde.klas3[36] · «parametervergelijking» · plaksel X of Y · al hersteld in eerdere deelronde
- #146 · sampleQuestions nask.klas1[44] · «smelten vs stollen» · omgekeerde kopie van het goede antwoord (twee goed) · al hersteld in eerdere deelronde
- #147 · sampleQuestions natuurkunde.klas3[6] · «behoud van impuls» · plaksel-afleider · al hersteld in eerdere deelronde
- #148 · sampleQuestions natuurkunde.klas3[17] · «ioniserende straling» · bijna-kopie (atomen/moleculen) = twee goed · al hersteld in eerdere deelronde
- #163 · topics.js media & internet[16] · «screenshot als bewijs bij cyberpesten» · plaksel (staart goede antwoord) · hersteld (D2-topics.json): was «Altijd geldig voor de rechter die je kunt bewaren als bewijs van pestgedrag» → nu «Alleen handig als je zelf iemand gepest hebt»
- #179 · topics cito wereldorientatie[140] (bron sampleQuestions) · «covalente binding» · verminkte plaksel-afleider · hersteld (D2-sq.json): was «Overdracht van elektronen van elektronen tussen twee atomen» → nu «Aantrekking tussen metaalionen en vrije elektronen»
- #190 · topics cito groep8-wereldorientatie[75] (bron sampleQuestions) · «Wie schilderde De Nachtwacht?» · plaksel X of Y · hersteld (D2-sq.json): was «Van Gogh of Vermeer» → nu «Frans Hals»
- #199 · topics cito groep8-gemengd[240] (bron sampleQuestions) · «Wat is een metoniem?» · bijna-kopie van goed antwoord · hersteld (D2-sq.json): was «Een woord dat staat achter iets anders» → nu «Een tegenstelling»
- #200 · topics cito groep8-gemengd[480] (bron sampleQuestions) · «Wat is magnetisme?» · plaksel X of Y · hersteld (D2-sq.json): was «Wrijving tussen metaaloppervlakken of Elektrische lading van deeltjes» → nu «De zwaartekracht van de aarde»

Fixbestanden: fixes/D2-sq.json (11 regels, valideer-sq: 11 toepasbaar, 0 problemen) en fixes/D2-topics.json (1 regel, oud 1× aanwezig). Leerpaden #101-#113 en textbook #155-#162: geen fouten, niets bewerkt. `npm run audit:vragen`: 0 meldingen.
NB: #179/#190/#199/#200 staan in topics.js als spread uit sampleQuestions — herstel daarom in sq-fixes.

### Twijfel voor Mark (niet als fout geteld)

- #4 (bekende-boeken stap 4 v23, Carry Slee): hint bij «Tekenaar» («haar naam staat op de kaft van boeken als Spijt! en Afblijven») verklapt bijna het antwoord. Niet als fout geteld.
- #68 (naamvallen-duits stap 8 v1): hint bij optie B noemt precies welke naamval bij Vater en Brief hoort; de vorm (dem/den) moet je nog zelf weten. Niet geteld.
- #49 (hart-bloed-ademhaling stap 3 v2): hint «Niet — RBC.» gebruikt een Engelse afkorting (red blood cells) die een leerling niet kent; beter «rode bloedcellen». Geen feitfout.
- #63 (maatschappijleer stap 2 v5, Toeslagenaffaire): «~26.000 ouders» is het vroege getal; later ging het om ruim 35.000+ gedupeerden. «Vooral Surinaams + Turks-Marokkaans» is te stellig (het ging om dubbele nationaliteit/afkomst in het algemeen).
- #34 (evolutie stap 5 v4): het «Darwin-citaat» is een parafrase die tussen aanhalingstekens staat.
- #89 (spreekwoorden stap 4 v3): afleiders als «Vele vrienden», «Op rozen» zijn afgekapte spreekwoorden; geen echte fout.
- #140 «sociaal contract (Rawls)»: afleider «Rousseau's theorie» is niet echt fout (sociaal contract ís ook Rousseau's theorie); niet geteld.
- #188 «verdrag dat basis legde voor Europese samenwerking» = Verdrag van Rome 1957; historisch kun je ook EGKS/Verdrag van Parijs 1951 noemen (geen optie, dus niet geteld).
- #189 aarde om eigen as = 24 uur (sterrendag is 23 u 56 min); op groep-8-niveau acceptabel, niet geteld.
- #121 (nu hersteld) «verhaal-in-een-verhaal» heet gangbaar «raamvertelling/ingebed verhaal»; mise en abyme is strikt een spiegelverhaal. Niet als extra fout geteld.
- #125, #141: goede antwoord is veel langer/uitgebreider dan de afleiders (lengte-verklapper), geen echte fout.

---

## Deel E — Extra: plaksel-afleiders in de PO-oefenbank

Dit deel is niet gevraagd. Het is toegevoegd omdat deel D liet zien dat het doel zonder deze stap niet haalbaar is.
- **Aanpak:** een script zoekt in `sampleQuestions.js` naar duidelijke plaksels. Dat zijn opties die letterlijk «optie X of optie Y» zijn, of een staart hebben zoals «onder bepaalde omstandigheden», «in de moderne taal- en letterkunde», «in de natuur» of «in de praktijk».
- **Treffers:** op main stonden er 487 (van 3.731 vragen). Na deel C en D waren er nog 216 treffers, waarvan 198 unieke vragen. Na deel E zijn er nog 3, en die zijn terecht: halfgeleider, voedselketen en humanisme.
- **Herstel:** 4 nakijkers hebben elke vraag ook zelf opgelost. De herstellingen staan in `docs/audit/fixes-sq-plaksel-po.json` (198 regels).

### Lijst van groepen

| pad/groep | gecontroleerd | hersteld | verwijderd |
|---|---|---|---|
| rekenen.klas3 | 1 | 1 | 0 |
| taal.groep12 | 3 | 3 | 0 |
| taal.groep3 | 9 | 9 | 0 |
| taal.groep4 (alias van groep3, telt niet apart) | 9 | 9 | 0 |
| taal.groep5 | 12 | 12 | 0 |
| taal.groep7 | 6 | 6 | 0 |
| aardrijkskunde.groep5 | 9 | 9 | 0 |
| aardrijkskunde.groep7 | 5 | 5 | 0 |
| geschiedenis.groep5 | 19 | 19 | 0 |
| geschiedenis.groep7 | 14 | 14 | 0 |
| natuur.groep3 | 9 | 9 | 0 |
| natuur.groep5 | 12 | 12 | 0 |
| natuur.groep5 | 5 | 5 | 0 |
| natuur.groep7 | 22 | 22 | 0 |
| natuur.klas1 | 1 | 0 | 0 |
| natuur.groep4 (alias van groep3, telt niet apart) | 9 | 9 | 0 |
| engels.groep5 | 3 | 3 | 0 |
| engels.groep7 | 14 | 14 | 0 |
| engels.groep7 | 1 | 1 | 0 |
| duits.groep5 | 5 | 5 | 0 |
| duits.groep7 | 8 | 8 | 0 |
| frans.groep5 | 5 | 5 | 0 |
| frans.groep7 | 1 | 1 | 0 |
| maatschappijleer.groep5 | 20 | 20 | 0 |
| maatschappijleer.groep7 | 12 | 12 | 0 |
| levensbeschouwing.klas1 | 1 | 1 | 0 |
| levensbeschouwing.klas3 | 1 | 1 | 0 |

### Herstellingen (was → nu, reden)

#### rekenen.klas3 · gecontroleerd 1 · hersteld 1 · verwijderd 0
- [21] was «x = -3» → nu «x = 9 of x = -9» (goede antwoord was een plaksel van opties 2 en 3; afleider vervangen)

#### taal.groep12 · gecontroleerd 3 · hersteld 3 · verwijderd 0
- [21] was «boom of hond» → nu «fiets» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [38] was «tafel of boek» → nu «appel» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [47] was «mier of muis» → nu «kat» (plaksel-afleider vervangen door een korte, plausibele foute optie)

#### taal.groep3 · gecontroleerd 9 · hersteld 9 · verwijderd 0
- [6] was «boom of maan» → nu «vis» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [7] was «kindjes of kindes» → nu «kinden» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [16] was «De kat slaapt lekker. of Zij fietst naar huis.» → nu «Ik lees een boek.» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [18] was «vrijdag of winter» → nu «school» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [23] was «langzaam of groot» → nu «zwaar» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [33] was «droog onder bepaalde omstandigheden» → nu «droog» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [35] was «eies of eien» → nu «eiers» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [43] was «groot onder bepaalde omstandigheden» → nu «groot» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [48] was «groot in de natuur» → nu «groot» (plaksel-afleider vervangen door een korte, plausibele foute optie)

#### taal.groep4 · gecontroleerd 9 · hersteld 9 · verwijderd 0
- (telt niet apart mee — taal.groep4 is in de bron een alias: `vak.groep4 = vak.groep3`; de herstellingen van taal.groep3 [6] [7] [16] [18] [23] [33] [35] [43] [48] gelden hier automatisch. Geen eigen JSON-regels.)

#### taal.groep5 · gecontroleerd 12 · hersteld 12 · verwijderd 0
- [8] was «eien of eies» → nu «eiers» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [10] was «tafel of groot» → nu «blauw» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [13] was «verdrietig of saai» → nu «boos» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [18] was «kindjes of kindes» → nu «kinden» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [20] was «een werkwoord + bijvoeglijk naamwoord of een werkwoord» → nu «een woord met een hoofdletter» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [22] was «'Er' wijst naar een specifieke plek of 'Daar' is onbepaald» → nu «Er is geen verschil» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [24] was «Een werkwoord beschrijft hoe iets gedaan wordt of Een bijwoord is een soort werkwoord» → nu «Er is geen verschil» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [29] was «Wij lopen naar huis. of Hij fietst elke dag.» → nu «De hond blaft hard.» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [38] was «Ik loop naar school. of Hij fietst elke dag.» → nu «Wij eten een appel.» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [39] was «'rennen', 'lopen' of 'groot', 'klein'» → nu «'ik', 'jij'» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [46] was «blij of boos» → nu «moe» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [49] was «tafel of groot» → nu «blauw» (plaksel-afleider vervangen door een korte, plausibele foute optie)

#### taal.groep7 · gecontroleerd 6 · hersteld 6 · verwijderd 0
- [10] was «naar of huis» → nu «Zij» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [23] was «'rennen', 'lopen' of 'groot', 'klein'» → nu «'de', 'het', 'een'» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [24] was «Een bijvoeglijk naamwoord of Het lijdend voorwerp» → nu «Een zinsdeel dat aangeeft waar iets gebeurt» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [39] was «'Dan' bij gelijkheid onder bepaalde omstandigheden» → nu «'Dan' gebruik je alleen bij tijd» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [44] was «Geen vergelijking of Vergrotende trap» → nu «Stellende trap» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [46] was «Terugblik in een verhaal onder bepaalde omstandigheden» → nu «Terugblik in een verhaal (flashback)» (plaksel-afleider vervangen door een korte, plausibele foute optie)

#### aardrijkskunde.groep5 · gecontroleerd 9 · hersteld 9 · verwijderd 0
- [8] was «Een rivier of Een berg» → nu «Een duin» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [13] was «Een snelweg onder bepaalde omstandigheden» → nu «Een tunnel» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [19] was «Een bergketen of Een rivier» → nu «De grens tussen twee landen» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [22] was «Een vliegveld onder bepaalde omstandigheden» → nu «Een vliegveld» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [31] was «Een binnenzee onder bepaalde omstandigheden» → nu «Een binnenzee» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [35] was «Haarlemmermeer of Vaalserberg» → nu «Lelystad» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [39] was «Hoefijzermeer = een meander in beweging of Meander = een stilstaand meer» → nu «Meander = een waterval in een rivier» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [44] was «Een polder bij Friesland onder bepaalde omstandigheden» → nu «Een polder in Friesland» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [47] was «Een visserijorganisatie onder bepaalde omstandigheden» → nu «Een visserijorganisatie» (plaksel-afleider vervangen door een korte, plausibele foute optie)

#### aardrijkskunde.groep7 · gecontroleerd 5 · hersteld 5 · verwijderd 0
- [2] was «Canada of China» → nu «Verenigde Staten» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [16] was «Arabische Zee of Zwarte Zee» → nu «Noordzee» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [31] was «Een berg in Peru onder bepaalde omstandigheden» → nu «Een berg in Peru» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [35] was «Een gebergte of Een rivier» → nu «Een meer» (plaksel-afleider vervangen door een korte, plausibele foute optie)
- [40] was «São Paulo of Santiago» → nu «Lima» (plaksel-afleider vervangen door een korte, plausibele foute optie)

#### geschiedenis.groep5 · gecontroleerd 19 · hersteld 19 · verwijderd 0
- [2] «Een school of Een leger» → «Een kerk» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [5] «Italiaans dictator of Russische tsaar» → «Duitse keizer» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [7] «Middeleeuwse burchten of Romeinse koepels» → «Oude Griekse tempels» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [8] «Een periode met veel oorlogen onder bepaalde omstandigheden» → «De tijd van de eerste fabrieken» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [14] «Joodse organisatie of Hulporganisatie» → «Een verzetsgroep» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [15] «Een historische verdedigingswal of Een grens bij de Rijn» → «Een muur rond een kasteel» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [19] «Een koninkrijk onder bepaalde omstandigheden» → «Een samenleving zonder koning of adel» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [20] «Een ontdekkingsreiziger onder bepaalde omstandigheden» → «Een ontdekkingsreiziger» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [21] «Ontdekkingsreizen naar Amerika of Handelsexpedities naar Azië» → «Oorlogen tussen Nederland en Spanje» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [22] «Een godsdienstige stroming in de moderne taal- en letterkunde» → «Een godsdienstige stroming» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [24] «Alleen religie, geen politiek of Alleen in Italië van belang» → «Bijna geen invloed» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [26] «Een Spaanse piratengroep onder bepaalde omstandigheden» → «Een Spaanse piratengroep» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [33] «Eerste Nederlandse koningin of Een schrijfster» → «Een Engelse prinses» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [34] «Buitenlandse ambassades of Schuilkelders» → «Ziekenhuizen voor soldaten» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [38] «Een Nederlandse schrijfster of Een schilderes» → «Een koningin» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [39] «Een koninklijk paleis onder bepaalde omstandigheden» → «Een koninklijk paleis» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [46] «Een Italiaanse kunstenaar onder bepaalde omstandigheden» → «Een Italiaanse kunstenaar» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [47] «Religieuze veranderingen of Politieke hervormingen» → «Een grote oorlog in Europa» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [49] «Een Italiaans handelsverdrag of Een militaire overeenkomst» → «Een oude landkaart van Engeland» (plaksel-afleider vervangen door korte, plausibele foute optie)

#### geschiedenis.groep7 · gecontroleerd 14 · hersteld 14 · verwijderd 0
- [3] «Een artistieke beweging of Politieke revolutie» → «Een nieuwe godsdienst» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [5] «Een letterlijke koude oorlog of Een handelsoorlog» → «Een oorlog op de Noordpool» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [7] «Een vulkaanuitbarsting onder bepaalde omstandigheden» → «Een vulkaanuitbarsting» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [8] «Een militaire leider of Een Duitse theoloog» → «Een Amerikaanse president» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [9] «Een piratenoorlog of Een handelsoorlog» → «Een zeeslag uit de Gouden Eeuw» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [12] «Russische militaire doctrine of Een Russische revolutie» → «Een Russisch ruimteprogramma» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [15] «Verdrag van Utrecht of Verdrag van Parijs» → «Verdrag van Maastricht» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [17] «Pakistans eerste president of Indiaas militair leider» → «Britse onderkoning van India» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [22] «Een burgeroorlog in Engeland of Een Napoleon-oorlog» → «Een oorlog tussen Nederland en Engeland» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [27] «Economische integratie met Europa of Meer Europese controle» → «Afrika werd één groot land» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [31] «Strijd aan het Oostfront in de moderne taal- en letterkunde» → «Strijd aan het Oostfront» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [32] «Een machtsinstrument van de kerk of Een symbool van de monarchie» → «Een machine om graan te snijden» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [46] «Een militaire coup door Batista of Een democratische revolutie» → «Een opstand tegen Spanje» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [49] «Een fysicus die kernenergie ontdekte of Een astronoom die planeten ontdekte» → «Een zeevaarder die Amerika ontdekte» (plaksel-afleider vervangen door korte, plausibele foute optie)

#### natuur.groep3 · gecontroleerd 9 · hersteld 9 · verwijderd 0
- [2] «Wormen in de natuur» → «Wormen» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [14] «Vlinder of Zwaan» → «Mus» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [17] «Insecten of Wormen» → «Vis» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [18] «Een insectenlarve die geen vlinder wordt» → «Een soort slak»; «Een jonge vlinder vóór de vlindertransformatie» → «Een jonge vlinder, nog vóór de pop»; «Een insectenlarve die geen vlinder wordt of Een volwassen vlinder» → «Een soort worm» (plaksel-afleider vervangen; opties gelijk van vorm/niet ook goed gemaakt)
- [20] vraag «Welke kleur heeft een spiegel als hij licht ontvangt?» → «Wat doet een spiegel met licht?»; «Rood» → «Hij maakt het rood»; «Zwart onder bepaalde omstandigheden» → «Hij slikt het op»; «Geel» → «Hij maakt het geel» (vraag rijmde niet met de opties (kleur vs. wat een spiegel doet); plaksel-afleider vervangen)
- [28] «Beschermt de bloemen of Eet de bloemen op» → «Maakt de bloemen kapot» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [32] «Ruiken of Horen» → «Zien» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [40] «Een insect of Een plant» → «Een dier» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [44] «Zwemt» → «Hij zwemt ermee»; «Klautert onder bepaalde omstandigheden» → «Hij ruikt ermee»; «Geluiden» → «Hij kwaakt ermee»; «Eet insecten door ze te vangen» → «Hij vangt er insecten mee» (plaksel-afleider vervangen; opties gelijk van vorm/niet ook goed gemaakt)

#### natuur.groep5 · gecontroleerd 12 · hersteld 12 · verwijderd 0
- [2] «Bloemen plukken of Water drinken» → «Bladeren laten vallen» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [5] «Een dier dat eieren legt of Een koudbloedig dier» → «Een dier met veren» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [8] «Gewicht meten of Afstand meten» → «Tijd meten» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [12] «Venus of Aarde» → «Mars» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [13] «Planteneter of Alleseter» → «Koudbloedig dier» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [17] «Een supermarkt of Een boerderij» → «Een rij winkels» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [20] «Een elektrisch apparaat of Een chemische stof» → «Een soort batterij» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [23] «Een plantenetend dier of Een vleesetend dier» → «Een dier dat in het water leeft» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [24] «Hormonen aanmaken of Voedsel verteren» → «Lucht inademen» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [27] «Jupiter of Venus» → «Mars» (plaksel-afleider vervangen door korte, plausibele foute optie)
- [30] «Een plant die in de schaduw groeit of Een soort mos dat op bomen groeit» → «Een bloem zonder blaadjes»; uitleg «(detritivoor/decomponent)» → «(het zijn afbrekers of opruimers)» (plaksel-afleider vervangen door korte, plausibele foute optie; uitleg-vakterm gecorrigeerd)
- [32] «Warmbloedigen leven in warmte, koudbloedigen in kou of Koudbloedigen zijn altijd groter dan warmbloedigen» → «Warmbloedigen hebben meer bloed dan koudbloedigen» (plaksel-afleider vervangen door korte, plausibele foute optie)

#### natuur.groep5 · gecontroleerd 5 · hersteld 5 · verwijderd 0
- [34] opt4 «Een dier dat koelbloedig is en in groepen leeft of Een dier dat eieren legt en schubben heeft» → «Een dier dat altijd in het water leeft» (plaksel-afleider vervangen door korte plausibele foute optie)
- [36] opt1 «Naar de plek in de voedselketen als producent» → «Herbivoor eet dieren; carnivoor eet planten; omnivoor eet beide»; opt2 «Naar het aantal poten dat ze hebben» → «Ze verschillen alleen in grootte»; opt3 «Naar de plek in de voedselketen als producent of Naar het aantal poten dat ze hebben» → «Herbivoor eet beide; carnivoor eet planten; omnivoor eet dieren» (plaksel-afleider vervangen door korte plausibele foute optie; opties 1-2 pasten niet bij de vraag (antwoord op een andere vraag))
- [39] opt2 «Een naaktslak heeft een klein huisje van binnen» → «Een naaktslak heeft geen voelsprieten»; opt4 «Een naaktslak heeft een klein huisje van binnen of Een slak leeft in water, een naaktslak op land» → «Een naaktslak is een jonge slak» (plaksel-afleider vervangen door korte plausibele foute optie; optie 2 was half waar (veel naaktslakken hebben een restje schelp onder de huid))
- [48] vraag «Wat is een kelk, meeldraden en stamper bij een bloem?» → «Wat zijn de kelk, de meeldraden en de stamper bij een bloem?»; opt2 «Kleuren van de bloemblaadjes die insecten aantrekken of Onderdelen van het blad die fotosynthese uitvoeren» → «Delen van de wortel die water opnemen» (plaksel-afleider vervangen door korte plausibele foute optie; vraagzin grammaticaal hersteld)
- [49] opt3 «Prooi is het roofdier; predator is het slachtoffer of Prooi en predator zijn altijd van dezelfde soort» → «Prooi en predator eten allebei alleen planten» (plaksel-afleider vervangen door korte plausibele foute optie)

#### natuur.groep7 · gecontroleerd 22 · hersteld 22 · verwijderd 0
- [0] opt4 «Klimaat is korte termijn of Weer is altijd warm» → «Weer en klimaat betekenen hetzelfde» (plaksel-afleider vervangen door korte plausibele foute optie)
- [2] opt4 «Een spinnenweb van voedsel onder bepaalde omstandigheden» → «Een spinnenweb vol voedsel» (plaksel-afleider vervangen door korte plausibele foute optie)
- [7] opt1 «Een uitsterven of Een migratie» → «Een ziekte» (plaksel-afleider vervangen door korte plausibele foute optie)
- [11] opt2 «Een oud gesteente onder bepaalde omstandigheden» → «Een stuk lava» (plaksel-afleider vervangen door korte plausibele foute optie)
- [12] opt1 «30.000 km/s of 3.000 km/s» → «3.000.000 km/s» (plaksel-afleider vervangen door korte plausibele foute optie)
- [13] opt2 «Een rottingsorganisme onder bepaalde omstandigheden» → «Een opruimer van dode planten» (plaksel-afleider vervangen door korte plausibele foute optie)
- [14] opt2 «Elektrische kracht in de praktijk» → «Elektrische kracht» (plaksel-afleider vervangen door korte plausibele foute optie)
- [15] opt1 «Een molecuul onder bepaalde omstandigheden» → «Een molecuul»; opt4 «De kleinste eenheid van materie» → «Een piepklein bouwsteentje van alle stoffen»; uitleg «Atomen zijn de bouwstenen van materie.» → «Atomen zijn de bouwstenen van alle stoffen. Ze bestaan zelf weer uit nog kleinere deeltjes, zoals protonen.» (plaksel-afleider vervangen door korte plausibele foute optie; 'kleinste eenheid van materie' botste met optie 'proton' (een proton is kleiner dan een atoom))
- [19] opt4 «Diercel heeft chloroplasten of Plantencel heeft geen kern» → «Diercel heeft een celwand» (plaksel-afleider vervangen door korte plausibele foute optie)
- [20] opt4 «Dieren concurreren om voedsel of Beide dieren helpen elkaar» → «Twee dieren wonen samen in één hol» (plaksel-afleider vervangen door korte plausibele foute optie)
- [24] opt1 «Wrijving tussen objecten onder bepaalde omstandigheden» → «Wrijving tussen objecten» (plaksel-afleider vervangen door korte plausibele foute optie)
- [30] opt3 «Een maat voor de elektrische lading van atomen of Een schaal voor de hardheid van materialen» → «Een schaal voor de temperatuur van water» (plaksel-afleider vervangen door korte plausibele foute optie)
- [32] opt2 «Een magneet die stroom aantrekt of Een apparaat dat stroom opwekt» → «Een schakelaar die altijd aan staat» (plaksel-afleider vervangen door korte plausibele foute optie)
- [33] opt2 «Geleiders houden stroom tegen; isolatoren laten stroom door of Geleiders zijn altijd metalen; isolatoren altijd plastics» → «Geleiders en isolatoren laten allebei geen stroom door» (plaksel-afleider vervangen door korte plausibele foute optie)
- [35] opt2 «Serieschakeling heeft meer verbruikers dan parallel of Serieschakeling is veiliger dan parallelschakeling» → «Serieschakeling werkt alleen met batterijen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [38] opt4 «Organisch is alleen in planten; anorganisch in dieren of Anorganisch komt alleen voor in levende wezens» → «Organische stoffen zijn altijd vloeibaar; anorganische altijd vast» (plaksel-afleider vervangen door korte plausibele foute optie)
- [40] opt2 «Transport van water door planten van wortel naar blad of Waterreserves in de oceaan die niet circuleren» → «Het bevriezen van water in de winter» (plaksel-afleider vervangen door korte plausibele foute optie)
- [41] opt1 «De hoeveelheid biomassa in een voedselketen of Het aantal dieren in een ecosysteem» → «Het aantal planten in een tuin» (plaksel-afleider vervangen door korte plausibele foute optie)
- [42] opt2 «Een laag CO2 die de aarde beschermt tegen zonnewind of Een laag vochtige lucht boven de oceaan» → «Een laag stof die de aarde warm houdt» (plaksel-afleider vervangen door korte plausibele foute optie)
- [46] opt2 «Luchtvervuiling is alleen schadelijk bij direct contact of Luchtvervuiling beïnvloedt alleen planten, niet mensen» → «Luchtvervuiling is alleen schadelijk in de zomer» (plaksel-afleider vervangen door korte plausibele foute optie)
- [48] opt2 «Het uitbuiten van een gastheersoort door een parasiet» → «Het opeten van een prooi door een roofdier»; opt4 «Het uitbuiten van een gastheersoort door een parasiet of Concurrentie tussen twee soorten om dezelfde hulpbron» → «Twee soorten die in verschillende gebieden leven» (plaksel-afleider vervangen door korte plausibele foute optie; optie 2 (parasitisme) is zelf een vorm van symbiose, dus ook goed)
- [49] opt4 «Chemische reacties zijn altijd exotherm; kernreacties altijd endotherm of Ze zijn identiek, alleen de energievrij-making verschilt» → «Kernreacties gebeuren alleen in planten» (plaksel-afleider vervangen door korte plausibele foute optie)

#### natuur.klas1 · gecontroleerd 1 · hersteld 0 · verwijderd 0


#### natuur.groep4 · gecontroleerd 9 · hersteld 9 · verwijderd 0
- (natuur.groep4 is in de bron een alias: `vak.groep4 = vak.groep3`. Deze nakijker deed dezelfde 9 vragen als E2 bij natuur.groep3; de coördinator heeft de E2-versie toegepast en deze regels laten vallen. Telt niet apart mee.)

#### engels.groep5 · gecontroleerd 3 · hersteld 3 · verwijderd 0
- [23] opt2 «House of Store» → «Church» (plaksel-afleider vervangen door korte plausibele foute optie)
- [29] opt2 «Train of Boat» → «Car» (plaksel-afleider vervangen door korte plausibele foute optie)
- [33] opt4 «Giraffe of Tiger» → «Lion» (plaksel-afleider vervangen door korte plausibele foute optie)

#### engels.groep7 · gecontroleerd 14 · hersteld 14 · verwijderd 0
- [1] opt2 «He don't like it of He not like it» → «He doesn't likes it» (plaksel-afleider vervangen door korte plausibele foute optie)
- [4] opt2 «Bovendien of Tenzij» → «Daarom» (plaksel-afleider vervangen door korte plausibele foute optie)
- [10] opt4 «Eerder of Daarna» → «Nooit» (plaksel-afleider vervangen door korte plausibele foute optie)
- [12] opt3 «Bovendien of Wanneer» → «Daarom» (plaksel-afleider vervangen door korte plausibele foute optie)
- [13] opt2 «played» → «plays»; opt3 «have played of played» → «are playing» (plaksel-afleider vervangen door korte plausibele foute optie; 'played' was ook grammaticaal mogelijk)
- [17] opt3 «has finished of will finish» → «had finished» (plaksel-afleider vervangen door korte plausibele foute optie)
- [18] opt2 «A comparison using 'like' of An exaggeration» → «A word that sounds like its meaning» (plaksel-afleider vervangen door korte plausibele foute optie)
- [22] opt4 «Totdat of Tenzij» → «Omdat» (plaksel-afleider vervangen door korte plausibele foute optie)
- [29] opt4 «Een zelfstandig naamwoord of Een bijvoeglijk naamwoord» → «Een werkwoord» (plaksel-afleider vervangen door korte plausibele foute optie)
- [35] opt4 «Definitief of Moedig» → «Gespannen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [36] opt2 «If + present perfect + will have of If + present + will» → «If + past + would» (plaksel-afleider vervangen door korte plausibele foute optie)
- [37] opt1 «Gedetailleerd of Verward» → «Kort» (plaksel-afleider vervangen door korte plausibele foute optie)
- [41] opt2 «'Fewer' = ontelbaar of Beide zijn identiek» → «'Less' is formeler dan 'fewer'» (plaksel-afleider vervangen door korte plausibele foute optie)
- [45] opt4 «Verplaatsen of Verwijderen» → «Versnellen» (plaksel-afleider vervangen door korte plausibele foute optie)

#### engels.groep7 · gecontroleerd 1 · hersteld 1 · verwijderd 0
- [49] was «Tegenspreken of Samenvatten» → nu «Vervangen» (plaksel-afleider vervangen door korte plausibele foute optie)

#### duits.groep5 · gecontroleerd 5 · hersteld 5 · verwijderd 0
- [12] was «Guten Abend of Gute Nacht» → nu «Tschüss» (plaksel-afleider vervangen door korte plausibele foute optie)
- [23] was «Broer of Vader» → nu «Zus» (plaksel-afleider vervangen door korte plausibele foute optie)
- [38] was «Kopen of Koken» → nu «Eten» (plaksel-afleider vervangen door korte plausibele foute optie)
- [40] was «Tekenen of Spreken» → nu «Lezen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [48] was «Datum of Adres» → nu «Naam» (plaksel-afleider vervangen door korte plausibele foute optie)

#### duits.groep7 · gecontroleerd 8 · hersteld 8 · verwijderd 0
- [2] was «Alsjeblieft of Dank je wel» → nu «Goedemorgen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [7] was «Luisteren of Lachen» → nu «Lopen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [9] was «Ik heb dorst of Ik heb pijn» → nu «Ik ben moe» (plaksel-afleider vervangen door korte plausibele foute optie)
- [12] was «Ik weet het niet of Ik hoor het niet» → nu «Ik zie het niet» (plaksel-afleider vervangen door korte plausibele foute optie)
- [18] was «Ich habe zwölf Jahre. of Mein Alter ist zwölf.» → nu «Ich heiße zwölf Jahre.» (plaksel-afleider vervangen door korte plausibele foute optie)
- [33] was «Mir geht super. of Ich fühle gut.» → nu «Es ist gut.» (plaksel-afleider vervangen door korte plausibele foute optie)
- [41] was «Fietsen of Zwemmen» → nu «Springen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [44] was «Ich brauche... of Ich möchte...» → nu «Ich muss...» (plaksel-afleider vervangen door korte plausibele foute optie)

#### frans.groep5 · gecontroleerd 5 · hersteld 5 · verwijderd 0
- [4] was «Dank je of Hallo» → nu «Goedemorgen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [11] was «Graag gedaan of Alsjeblieft» → nu «Tot morgen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [17] was «Goedendag of Excuseer» → nu «Dank je» (plaksel-afleider vervangen door korte plausibele foute optie)
- [30] was «Vader of Broer» → nu «Zus» (plaksel-afleider vervangen door korte plausibele foute optie)
- [33] was «Been of Neus» → nu «Hand» (plaksel-afleider vervangen door korte plausibele foute optie)

#### frans.groep7 · gecontroleerd 1 · hersteld 1 · verwijderd 0
- [13] was «Waar woon je? of Hoe heet je?» → nu «Hoe gaat het?» (plaksel-afleider vervangen door korte plausibele foute optie)

#### maatschappijleer.groep5 · gecontroleerd 20 · hersteld 20 · verwijderd 0
- [1] was «Een Europese wet of Een gemeentewet» → nu «Een schoolregel» (plaksel-afleider vervangen door korte plausibele foute optie)
- [4] was «Een rechtbank onder bepaalde omstandigheden» → nu «Een rechtbank» (plaksel-afleider vervangen door korte plausibele foute optie)
- [7] was «Een belasting betalen of Een rechtszaak» → nu «Een nieuwe wet maken» (plaksel-afleider vervangen door korte plausibele foute optie)
- [9] was «Scholen besturen of Belasting innen» → nu «Wetten maken» (plaksel-afleider vervangen door korte plausibele foute optie)
- [12] was «Een gift aan de staat of Een subsidie» → nu «Spaargeld op de bank» (plaksel-afleider vervangen door korte plausibele foute optie)
- [13] was «De minister-president of De gemeenten» → nu «De koning» (plaksel-afleider vervangen door korte plausibele foute optie)
- [14] was «Een nationaal bestuursniveau of Een Europees begrip» → nu «Een provincie» (plaksel-afleider vervangen door korte plausibele foute optie)
- [15] was «Je mag alles zeggen zonder regels of Een recht voor politici» → nu «Het recht om te stemmen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [16] was «Eén grote zender onder bepaalde omstandigheden» → nu «Eén grote zender» (plaksel-afleider vervangen door korte plausibele foute optie)
- [17] was «Een kast» + «Het parlement onder bepaalde omstandigheden» → nu «De gemeenteraad» + «Het parlement» (plaksel-afleider vervangen door korte plausibele foute optie; "Een kast" vervangen omdat kabinet ook een (verouderd) woord voor een kast is, dus ook goed te rekenen)
- [19] was «Partijen die het kabinet steunen onder bepaalde omstandigheden» → nu «Partijen die het kabinet steunen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [20] was «Een regio zonder bestuur onder bepaalde omstandigheden» → nu «Een regio zonder bestuur» (plaksel-afleider vervangen door korte plausibele foute optie)
- [22] was «Een Europees recht onder bepaalde omstandigheden» → nu «Een verkeersregel» (plaksel-afleider vervangen door korte plausibele foute optie (geen "Europees recht": grondrechten staan deels ook in Europese verdragen))
- [24] was «Een politieagent onder bepaalde omstandigheden» → nu «Een politieagent» (plaksel-afleider vervangen door korte plausibele foute optie)
- [27] was «Een wereldorganisatie onder bepaalde omstandigheden» → nu «Een wereldorganisatie» (plaksel-afleider vervangen door korte plausibele foute optie)
- [29] was «Belasting op producten of Belasting op erfenis» → nu «Belasting op auto's» (plaksel-afleider vervangen door korte plausibele foute optie)
- [30] was «Wetten goedkeuren als Senaat of Wetten uitvoeren» → nu «Rechtspreken» (plaksel-afleider vervangen door korte plausibele foute optie)
- [33] was «Een verkiezing voor parlement of Een enquête voor politici» → nu «Een vergadering van de gemeenteraad» (plaksel-afleider vervangen door korte plausibele foute optie)
- [35] was «De Europese Commissie onder bepaalde omstandigheden» → nu «De Europese Commissie» (plaksel-afleider vervangen door korte plausibele foute optie)
- [43] was «Eén mening in de media onder bepaalde omstandigheden» → nu «Eén mening in de media» (plaksel-afleider vervangen door korte plausibele foute optie)

#### maatschappijleer.groep7 · gecontroleerd 12 · hersteld 12 · verwijderd 0
- [3] was «Een staat geregeerd door rechters of Hetzelfde als democratie» → nu «Een staat zonder wetten» (plaksel-afleider vervangen door korte plausibele foute optie)
- [5] was «Iedereen verdient hetzelfde of Belasting betalen» → nu «Hoge prijzen in winkels» (plaksel-afleider vervangen door korte plausibele foute optie)
- [8] was «Een parlementaire stemming onder bepaalde omstandigheden» → nu «Een parlementaire stemming» (plaksel-afleider vervangen door korte plausibele foute optie)
- [9] was «Een economisch systeem onder bepaalde omstandigheden» → nu «Een land zonder belasting» (plaksel-afleider vervangen door korte plausibele foute optie)
- [12] was «Terugkeer naar land van herkomst onder bepaalde omstandigheden» → nu «Terugkeer naar land van herkomst» (plaksel-afleider vervangen door korte plausibele foute optie)
- [16] was «Een politieke partij onder bepaalde omstandigheden» → nu «Een politieke partij» (plaksel-afleider vervangen door korte plausibele foute optie)
- [18] was «Lid zijn van een partij onder bepaalde omstandigheden» → nu «Een uitkering aanvragen» (plaksel-afleider vervangen door korte plausibele foute optie (lid zijn van een partij is zelf ook een vorm van participatie))
- [19] was «Tekort aan stemmen onder bepaalde omstandigheden» → nu «Tekort aan stemmen» (plaksel-afleider vervangen door korte plausibele foute optie)
- [34] was «Wat is het kiesrecht?» + «Het recht om kandidaat te zijn of Het recht om te demonstreren» → nu «Wat is het actief kiesrecht?» + «Het recht om te werken» (plaksel-afleider vervangen door korte plausibele foute optie; vraag aangescherpt tot actief kiesrecht, want "recht om kandidaat te zijn" (passief kiesrecht) is ook kiesrecht)
- [36] was «Een staat met één politicus of Een federale staat» + «Bv. Noord-Korea, China: slechts één partij — tegenstelling van democratisch pluralisme.» → nu «Een staat zonder leger» + «Bv. China en Noord-Korea: één partij heeft alle macht — het tegenovergestelde van democratisch pluralisme.» (plaksel-afleider vervangen door korte plausibele foute optie; uitleg feitelijk precieser (in China/Noord-Korea bestaan formeel kleine partijen, maar één partij heeft alle macht))
- [38] was «Een staat met één centraal gezag onder bepaalde omstandigheden» → nu «Een staat met één centraal gezag» (plaksel-afleider vervangen door korte plausibele foute optie)
- [40] was «Een parlementslid onder bepaalde omstandigheden» + «(gemeenteambtenaren, politie, leraren)» → nu «Een parlementslid» + «(bv. bij de gemeente, de Belastingdienst of de politie)» (plaksel-afleider vervangen door korte plausibele foute optie; uitleg: leraren zijn sinds 2020 meestal geen ambtenaar meer (alleen openbaar onderwijs))

#### levensbeschouwing.klas1 · gecontroleerd 1 · hersteld 1 · verwijderd 0
- [2] was «Een levensovertuiging waarbij de mens en zijn waarden centraal staan, zonder godsdienst» → nu «Een levensovertuiging met de mens centraal, zonder god» (goede optie was opvallend veel langer dan de rest (staart verraadde het antwoord); ingekort)

#### levensbeschouwing.klas3 · gecontroleerd 1 · hersteld 1 · verwijderd 0
- [5] was «Atheïsme = geloof in de natuur» + «Theïsme is hetzelfde als humanisme» → nu «Theïsme = geloof in de natuur; atheïsme = geloof in god(en)» + «Theïsme = twijfel over god(en); atheïsme = geloof in de mens» (afleiders anders van vorm dan het goede antwoord (alleen het goede antwoord noemde beide begrippen): parallel gemaakt)

### Twijfel voor Mark

- taal.groep7[46]: begrip “prolepsis” is erg hoog gegrepen voor groep 7 (eerder bovenbouw middelbare school); inhoudelijk klopt de vraag wel. Niet verwijderd.
- taal.groep5[22]: het verschil “er” (onbepaald) vs. “daar” (aanwijzend) is in de uitleg sterk vereenvoudigd; acceptabel voor groep 5, niet gewijzigd.
- aardrijkskunde.groep5[13]: oude afleider “Een snelweg” is bewust niet teruggezet, want over de Afsluitdijk loopt de A7 (dus deels waar); vervangen door “Een tunnel”.
- rekenen.klas3[21]: optie “x = 3” blijft staan als klassieke half-oplossing (fout omdat x = −3 ontbreekt).
- geschiedenis.groep7[15]: afleider «Verdrag van Parijs» laten staan; de vredesverdragen na WO1 werden op de Vredesconferentie van Parijs gesloten, maar het verdrag met Duitsland heet Versailles — antwoord blijft eenduidig.
- natuur.groep5[27]: Jupiter heeft ook (zwakke) ringen; door "duidelijk zichtbare" blijft Saturnus eenduidig.
- natuur.klas1[28]: niet gewijzigd. De gevonden staart «onder bepaalde omstandigheden» zit in het góede antwoord en is daar inhoudelijk juist (definitie halfgeleider); geen plaksel.
- engels.groep7[13]: «played» vervangen omdat «They played football when I arrived» ook grammaticaal kan (betekenis: ze begonnen toen te spelen); nu is alleen «were playing» goed.
- maatschappijleer.groep7[18]: "Stemmen" blijft als foute optie staan; in brede zin is stemmen ook burgerparticipatie. Het goede antwoord (actieve deelname) is wel het beste, maar overweeg "Stemmen" te vervangen.
- frans.groep5[17] en [33]: vraagvorm "Comment dit-on ...?" met Nederlandse antwoorden is eigenlijk "Que signifie ...?"; niet gewijzigd.
- duits.groep7[44]: "Ich möchte..." (ik wil graag) ligt dicht bij "ik heb zin in"; laten staan als afleider.

**Deel E: gecontroleerd 198 · hersteld 197 · verwijderd 0**

---

## Nameting (onafhankelijk, op de branch ná deze ronde)

**Opzet:** twee nieuwe nakijkers, een nieuwe steekproef van 200 vragen (seed **20261007**) uit dezelfde pool, op de stand van de branch ná A–E. Verdeling: 121 uit de leerpaden, 40 uit sampleQuestions, 5 uit textbookQuestions en 34 uit topics.

**Resultaat: 20 van 200 = 10,0% fout of dubbelzinnig.** Alle 20 zijn hersteld: 9 in leerpaden, 7 via `fixes-sq-nameting.json` en 4 via `fixes-topics-nameting.json`.

| bron | steekproef | fout | % |
|---|---:|---:|---:|
| leerpaden | 121 | 9 | 7,4% |
| sampleQuestions.js | 40 | 2 | 5,0% |
| topics.js | 34 | 9 | 26,5% |
| textbookQuestions.js | 5 | 0 | 0% |

**Hoe je dit moet lezen:**
- **Leerpaden:** de fouten zijn bijna allemaal hints die het antwoord (bijna) noemen, zoals «Niet — tegenover.», «α stopt wel.» en «vaste Akk.». Twee daarvan zaten in paden die deze ronde al waren nagekeken: goniometrie en duits-cse.
- **Topics:** de fouten zijn plaksel-afleiders en bijna-kopieën in de topic-banken die buiten deze ronde vielen (cito wereldoriëntatie en gemengd, mediawijsheid).
- **Kanttekening:** de nameting telde strenger dan D, ook kale hints die het antwoord verraden.
- **Betrouwbaarheid:** met n = 200 ligt het 95%-interval ruwweg tussen 6% en 15%.

### Gevonden fouten

Gecontroleerd 100 · fout/dubbelzinnig 8

- #27 · duits-cse-havo-vwo stap 2 vraag 5 · «Voorzetsel für vraagt:» · wrongHints bij Dativ en Genitiv noemen letterlijk het antwoord ("vaste Akk.") · hersteld: was «Niet — vaste Akk.» (2×) → nu «Niet — für hoort bij het rijtje voorzetsels met één vaste naamval. Welke?» / «Niet — für staat niet in het Dativ-rijtje (aus, bei, mit, nach, seit, von, zu).»
- #39 · examen-maatschappijkunde-2023-t2 stap 3 vraag 1 · «Charles Michel … aan welke groep geeft hij een toespraak?» · de (zelfgeschreven) bronTekst definieert de Europese Raad als "het overlegorgaan waarin de regeringsleiders … bijeenkomen" en verklapt zo het antwoord; zin was ook krom ("de samenwerking … oproept te versterken") · hersteld: was «… voorzitter van de **Europese Raad** — het overlegorgaan waarin de regeringsleiders van alle EU-lidstaten bijeenkomen om strategische beslissingen te nemen. Op de foto geeft Michel een toespraak waarin hij de samenwerking tussen lidstaten oproept te versterken in coronatijd.» → nu «… voorzitter van de **Europese Raad**. Op de foto geeft Michel een toespraak waarin hij oproept om in coronatijd de samenwerking tussen de lidstaten te versterken.»
- #48 · goniometrie stap 11 vraag 22 · «Hypotenusa heeft welke positie?» · hint bij "Aan de rechte hoek" geeft het antwoord ("Niet — tegenover.") · hersteld: was «Niet — tegenover.» → nu «Niet — de zijden aan de rechte hoek heten rechthoekszijden.»
- #50 · in-de-klas-2-nieuwkomers stap 4 vraag 1 · «Je hebt een mooie tekening gemaakt. Hoe voel je je?» · Nederlandse restjes in de Turkse steun-vertaling van alleen de foute opties ("Kızgınım. (Ik ben boos.)", "Korkuyorum. (Ik ben bang.)", "Ağrım var. (Ik heb pijn.)"), het goede antwoord heeft er geen → asymmetrie/lek · hersteld in gedeelde src/learnPaths/nieuwkomersSteun.js: was «Kızgınım. (Ik ben boos.)» → nu «Kızgınım.»; idem voor alle 9 losse optie-vertalingen met dit restje (Mutluyum, Karnım ağrıyor, Ağrım var, Karnım aç, Bitirdim, Kendimi iyi hissetmiyorum, Korkuyorum, Kızgınım, Yorgunum). Uitleg-teksten met bewuste Nederlandse glossen niet aangeraakt.
- #85 · radioactiviteit-havo-vwo stap 2 vraag 4 · «Welke straling wordt gestopt door een vel papier?» · hint bij "Geen" noemt het antwoord ("Niet — α stopt wel.") · hersteld: was «Niet — α stopt wel.» → nu «Niet — één soort straling heeft zo weinig doordringvermogen dat papier genoeg is.»
- #86 · redactiesommen-pad stap 2 vraag 1 · «Tom is 11 … welk getal is niet relevant?» · hint bij "Geen" geeft het antwoord ("leeftijd doet er niet toe") · hersteld: was «Wel — leeftijd doet er niet toe.» → nu «Er is wél een getal dat je niet nodig hebt. Welk getal zegt niets over de knikkers?»
- #90 · rekenen-tot-100-nieuwkomers stap 4 vraag 5 · «61 + 9 = ?» · elke wrongHint zegt "Maak eerst het tiental vol: 61 + 9 = 70. Dan nog 0 erbij." → antwoord weggegeven (gebeurt in de generator altijd als b precies het tiental volmaakt) · hersteld in generator (regel ~110, deterministische zaad-reeks ongewijzigd): was «Maak eerst het tiental vol: 61 + 9 = 70. Dan nog 0 erbij.» → nu «Maak het tiental vol: 1 + 9 = 10. Welk tiental komt na 61?» (alleen in dat geval; overige sommen houden de oude hint)
- #98 · spelling-ei-ij-au-ou stap 9 vraag 12 · «Wat een bl___we lucht!» · hint bij "ou" is feitelijk fout (au en ou zijn dezelfde klank, niet "verkeerde klank"); hint bij "auw" noemt het antwoord ("letter na au is w") · hersteld: was «Niet — verkeerde klank.» / «Bijna — letter na au is w.» → nu «ou klinkt hetzelfde, maar zo schrijf je de kleur van de lucht niet.» / «Bijna — kijk goed: de w staat al in de zin.»

Alle gewijzigde bestanden: node --check OK. `npm run audit:vragen`: 0 meldingen (de 23 "mogelijk weggegeven in de vraag" zijn informatieve leesvragen, niet van mij).

Gecontroleerd 100 · fout/dubbelzinnig 12

- #116 · werkwoordsspelling-dt stap 8 vraag 1 · «Hij ____ vroeg op (staan)» · de uitleg geeft de verkeerde spellingregel: "a wordt aa want open lettergreep" (het is juist een gesloten lettergreep), en de theorie zegt dat de klinker "lang wordt" bij staat/gaat/ziet (bij zie+t verandert er niets) · hersteld: was «(a wordt aa want open lettergreep)» / «Bij hij wordt klinker lang: staat, gaat, ziet.» / «Open lettergreep + meer letters → klinker wordt lang.» → nu: gesloten lettergreep → aa; bij zie blijft ie ie; lange a aan het eind van een lettergreep = één a, met een medeklinker erachter = aa (direct bewerkt, node --check ok)
- #128 · sampleQuestions taal.groep12[47] · «Welk dier is het grootst?» · feitfout in de uitleg: de olifant is niet het grootste dier (dat is de blauwe vinvis) · hersteld (N2-sq.json): was «Een olifant is het grootste dier.» → nu «Van deze vier dieren is de olifant het grootst.»
- #140 · sampleQuestions natuur.groep5[46] · «Verschil botten en kraakbeen» · plaksel-afleider (X of Y) · hersteld (N2-sq.json): was «Botten zijn van eiwit; kraakbeen van vet of Kraakbeen zit alleen in het hoofd» → nu «Kraakbeen zit alleen in het hoofd»
- #167 · topics seksuele voorlichting[7] · «Wat is toestemming (consent)?» · plaksel-afleider (X of Y) · hersteld (N2-topics.json): was «Het is alleen nodig bij vreemden of Je hoeft niets te zeggen» → nu «Als iemand geen nee zegt, is dat ook een ja»
- #169 · topics seksuele voorlichting[10] · «Wat zijn geslachtshormonen?» · plaksel (bijna-kopie van het goede antwoord) · hersteld (N2-topics.json): was «Enzymen in de spijsvertering die geslachtskenmerken en vruchtbaarheid sturen» → nu «Vetten die energie opslaan»
- #171 · topics roken & drugs[9] · «Wat zijn ontwenningsverschijnselen?» · plaksel (bijna-kopie van het goede antwoord) · hersteld (N2-topics.json): was «Bijwerkingen van medicijnen die optreden als je stopt met een stof waaraan je verslaafd bent» → nu «Spierpijn na veel sporten»
- #172 · topics media & internet[14] · «Wat is de AVG?» · plaksel (bijna-kopie van het goede antwoord) · hersteld (N2-topics.json): was «Een sociale media regelgeving die bepaalt hoe bedrijven met jouw persoonsgegevens mogen omgaan» → nu «Een Nederlandse wet over belastingen»
- #188 · cito wereldorientatie[57] (bron sampleQuestions) · «Rivier door Duitsland, Oostenrijk, Hongarije» · plaksel-afleider (X of Y) · hersteld (N2-sq.json): was «Elbe of Oder» → nu «Elbe»
- #194 · cito groep8-wereldorientatie[122] (bron sampleQuestions) · «Wat was apartheid?» · plaksel-afleider «A, B en C + staart» · hersteld (N2-sq.json): was «Een juridisch systeem, Een economisch systeem en Een politiek systeem waarbij mensen gescheiden werden op basis van huidskleur» → nu «Een democratisch systeem waarin iedereen gelijke rechten had»
- #195 · cito groep8-wereldorientatie[149] (bron sampleQuestions) · «Wat is een exotische soort?» · plaksel (bijna-kopie van het goede antwoord) · hersteld (N2-sq.json): was «Een zeldzame inheemse soort die buiten zijn oorspronkelijk leefgebied terechtkomt door menselijk handelen» → nu «Een soort die alleen in tropische landen leeft»
- #197 · cito groep8-gemengd[59] (bron sampleQuestions) · «Welk land heeft de meeste tijdzones?» · klopt niet zoals gesteld: Frankrijk heeft met zijn overzeese gebieden 12 tijdzones, meer dan Rusland (11) · hersteld (N2-sq.json): was «Welk land heeft de meeste tijdzones?» → nu «Welk van deze landen heeft de meeste tijdzones?»
- #199 · cito groep8-gemengd[429] (bron sampleQuestions) · «Doel van de SS-Einsatzgruppen?» · plaksel (bijna-kopie van het goede antwoord) · hersteld (N2-sq.json): was «Spionage-eenheden die Joden en anderen massaal vermoordden in bezet gebied» → nu «Eenheden die gewonde soldaten verzorgden»

Controle: valideer-sq op N2-sq.json → 7 toepasbaar, 0 problemen; elke `oud` in N2-topics.json staat precies 1× in topics.js; `npm run audit:vragen` → 0 meldingen (er zijn 23 meldingen "antwoord mogelijk weggegeven", maar die zijn alleen informatief en horen bij verwijs- en leesvragen).

### Twijfel voor Mark (niet als fout geteld)

- #2 algoritmen-programmeren-po: de vraag legt GPS uit als "plaats-bepaling via satellieten", het antwoord is "Kortste pad-algoritme (Dijkstra)". Voor een navigatie-app klopt dat, maar strikt genomen bepaalt GPS alleen de plek. Hints "Niet./Niet./Wel." zijn erg kaal ("Wel." = "bestaat wel"). Zelfde kale "Wel."-patroon bij #17, #38, #44, #75.
- #34 energie-hulpbronnen: "NL ~17% hernieuwbaar" in de uitlegPad is wat oud (CBS 2024 ≈ 19-20%). 79+4+14 = 97% (rest = traditionele biomassa); prima als benadering.
- #37 evolutie-havo-vwo: "mitochondriaal DNA 1 mutatie per 6500 jaar" in de uitlegPad is een erg specifiek, discutabel getal.
- #44 globalisering: "de 4 dimensies" hangt af van de methode (soms 3, of met ecologisch).
- #67 literatuurgeschiedenis: hint noemt Multatuli "prozaschrijver (Romantiek)"; meestal wordt hij als voorloper van het realisme gezien.
- #94 schaal-kaart: hint bij "50 cm" ("Je vergat door de schaal te delen") past niet precies bij die fout (50 cm hoort bij schaal 1:100).
- Algemeen bij #90: de aftrek-tak van dezelfde generator geeft nooit "0 eraf" (b > e), dus geen lek daar.
- #107 · tweede-wereldoorlog-havo-vwo stap 4 vraag 5 (Nanjing) · het goede antwoord noemt "~300k" doden als vast feit, terwijl de eigen uitleg spreekt van schattingen van 200.000 tot 300.000. Liever "honderdduizenden". Niet als fout geteld.
- #108 · verandering-groei-havo-vwo stap 2 vraag 2 · de hint bij "Logistisch" ("Niet — quotiënten constant.") wijst bijna rechtstreeks naar het antwoord "exponentieel". Het blijft een richting, dus niet geteld.
- #170 · topics seksuele voorlichting[37] (miskraam) · "vóór 24 weken" is de internationale/Wikipedia-grens. Thuisarts.nl hanteert in Nederland "vóór 16 weken". Ook "1 op de 5 zwangerschappen" is aan de hoge kant (Thuisarts: ongeveer 1 op de 10). Niet gewijzigd.
- #185 · topics cito wereldorientatie[0] · een spellingvraag ("Hij wordt ziek") staat in het onderwerp wereldoriëntatie. Dat is een indelingsfout en geen fout in de vraag zelf.

---

## Belangrijkste punten voor Mark

1. **Het doel van ≤ 2% is niet gehaald.** De eindmeting gaf 12,0% op main; de nameting na deze ronde 10,0%.
   - **Oefenbank:** wat overblijft zit vooral in de oefenbank-groepen die nog geen enkele ronde hebben gehad, met name `topics.js` (cito-wereldoriëntatie/gemengd, mediawijsheid) en de groep6/groep8-sets van `sampleQuestions.js`. Een volgende ronde zou die als geheel moeten doen, niet alleen met het plaksel-script, omdat bijna-kopieën en half-goede afleiders niet scriptmatig te vinden zijn.
   - **Leerpaden:** daar zijn hints die het antwoord verklappen de grootste overgebleven categorie.
2. **Niveau van de oefenbank klopt niet.** Alle acht C-nakijkers melden onafhankelijk van elkaar dat de sets "klas1" en "klas3" (talen, natuurkunde, scheikunde, wiskunde) inhoudelijk havo/vwo-bovenbouw- tot universitair niveau hebben. Voorbeelden: anadiplosis, palimpsest, Higgs-boson, SN1/SN2, integralen in klas 3. Er is niets aan gewijzigd; dit is een keuze voor Mark.
3. **'doordat' wordt verschillend uitgelegd.** argumentatieleer noemt 'doordat' een argument-signaal, cse-schrijfvaardigheid-nederlands noemt het nu een oorzaak. Dit moet één lijn worden.
4. **Examenfeiten zijn rechtgezet** (gecontroleerd tegen examenblad/DUO):
   - Frans CSE: alleen een tweetalig woordenboek, en havo én vwo duren 150 minuten.
   - Duits vwo: 2,5 uur.
   - Engels: vmbo gl/tl duurt 120 minuten; havo/vwo hebben ~40–45 vragen.
   - Nederlands: geen synoniemenwoordenboek; referentieniveaus 3F/4F in plaats van B2/C1.
   - De examentijden in de stapuitleg van nederlands-cse kloppen nog niet (zie B, twijfel).
5. **Opties staan vaak op dezelfde plek.** In wiskunde-a.klas6 en wiskunde-b.klas5 staat het goede antwoord bijna steeds op dezelfde positie. Dat is alleen een probleem als de app de opties niet schudt.

## TOTAAL

| deel | gecontroleerd | hersteld | verwijderd |
|---|---:|---:|---:|
| A — VO exact | 589 | 230 | 0 |
| B — VO talen | 708 | 154 | 0 |
| C — oefenbank VO deel A | 1001 | 582 | 0 |
| D — eindmeting (main-stand) | 200 | 16 (+8 al in A–C) | 0 |
| E — plaksel PO-oefenbank (extra) | 198 | 197 | 0 |
| nameting (branch) | 200 | 20 | 0 |

**TOTAAL: 2.896 vragen nagekeken (inclusief de 400 steekproefvragen, met mogelijke overlap), 1.199 hersteld, 0 verwijderd. Foutpercentage eindmeting: 12,0% op main (24/200), na deze ronde 10,0% (20/200, nameting).**
