# Verslag: meer vragen basisschool (Q12a, 8-9 okt 2026)

Branch `audit3/meer-vragen-po` (vanaf main v936, stempel '8 okt f'), draft-PR #16. Versienummer niet opgehoogd.
Aanleiding: ouders zeggen dat er te weinig vragen zijn. Gemeten: een kind ziet een smal deel van de bibliotheek en krijgt na een paar dagen dezelfde vragen.

## Uitkomst in het kort

**Dit is een TUSSENSTAND.** Ronde 1 en ronde 2 zijn gedaan. De steekproef van ronde 2, de rondes 3 t/m 6 en de eindmeting van 300 vragen zijn **niet gedaan**: op 8 okt om ±18:10 UTC liep de sessie tegen de gebruikslimiet aan en vielen alle lopende schrijvers en nakijkers uit. Een vervolgsessie ("VERVOLG", gestart 9 okt 03:15 UTC) werkt op dezelfde branch verder.

- **Deel 1 (code): klaar en getest.** Per stapbezoek hoogstens 5 vragen, nieuwe eerst. Voor het kwartier en het start-kwartier ook nieuwe vragen eerst.
- **Deel 2 (inhoud): 1.110 nieuwe vragen opgenomen in 46 basisschoolpaden.** Er zijn 1.327 vragen geschreven en 217 afgekeurd (16,4%).
  - Elke opgenomen vraag is blind opgelost door twee onafhankelijke nakijkers. Beiden kozen optie 0 en geen van beiden had een bezwaar.
  - Ronde 1: 563 opgenomen. Steekproef van 30 door een frisse nakijker: **0 fout**, 5 zwak.
  - Ronde 2: 547 opgenomen. **Steekproef van 30 nog niet gedaan.**
- **Stappen onder de 10:** in de 46 bewerkte paden heeft nu 109 van de 263 stappen er 10 of meer, tegen eerst bijna geen. Nog 154 stappen zitten onder de 10, de meeste op 8 of 9.
  - Over alle 757 basisschoolstappen samen: 580 onder de 10 (was 660), tekort 2.636 vragen (was 3.746).
  - Let op: de opdracht telde 694 stappen. Dat kwam doordat 10 paden met .jsx-imports niet meetelden. Mijn telling neemt ze wel mee: 757 stappen en 147 paden.
- **Controles op de laatste stand:**
  - `npm run build`: geslaagd.
  - `npm run audit:vragen`: "353 paden · 18188 vragen · 629 kale sommen nagerekend · 0 meldingen". Het lijstje "antwoord mogelijk weggegeven" blijft op 24 staan, dus de nieuwe vragen voegen daar niets aan toe.
  - `npx vitest run`: 38 bestanden, 365 tests geslaagd.
  - `npm run typecheck`: geslaagd.
  - De CI-fout op de PR (15-min-gate, `oppervlakte-omtrek-po` 15 → 20 min) is hersteld.

## Deel 1 — per bezoek 5 vragen, nieuwe eerst

**Wat het doet**

- **`src/shared/geziendeVragen.js`** (nieuw):
  - Houdt per apparaat bij welke vragen al beantwoord zijn. De sleutel is `pathId|hash(vraagtekst)`, dus niet de index; die verschuift als er vragen achteraan bijkomen.
  - Opslag in localStorage, hoogstens 5.000 sleutels; de oudste gaan er eerst uit. Alle toegang staat in try/catch.
- **Leerpad (`LearnPath.jsx`):**
  - Per stapbezoek komen hoogstens 5 vragen, in deze volgorde:
    1. vorige keer fout (de adaptieve regel gaat voor);
    2. nooit gezien op dit apparaat;
    3. het langst geleden gezien.
  - Een stap met 5 of minder vragen toont alle vragen.
  - Examenpaden tonen altijd alles.
  - De keuze blijft per pad en stap bewaard tot de stap af is. Zo wijzen hervatten (`checkIdx`, `resumeCheckIdxRef`) en "Doorgaan: deel X, vraag Y" naar dezelfde vraag. Is de stap af, dan wordt de keuze vergeten en kiest het volgende bezoek nieuwe vragen.
  - "Vraag X van N", de minuten-schatting en de telling per hoofdstuk ("N vragen · ± M minuten") rekenen nu met het aantal getoonde vragen.
- **Kwartier en start-kwartier (`buildTopicQuiz.js`):** eerst ongeziene vragen, dan geziene (langst geleden eerst). Binnen de ongeziene blijft de volgorde willekeurig. Het groepsfilter (`groep`/`vanafGroep`) en alle parameters zijn ongewijzigd.
- **Wanneer telt een vraag als gezien:** pas bij het beantwoorden (de eerste poging), niet bij het tonen.
  - Een vraag die in beeld kwam terwijl het kind wegklikte, blijft zo nieuw.
  - Klassikaal op het digibord wordt niets gemarkeerd, want dat is niet het apparaat van één kind.
- **Duur-schatting:**
  - Het manifest (`estimatedMinutes`) en `pathDuration.js` tellen per stap hoogstens 5 vragen.
  - De 15-minuten-poort faalt nu alleen als een pad langer wordt dan zowel zijn baseline als 15 minuten.
  - Voor 3 paden die al boven de 15 minuten zaten, is de baseline verhoogd: dieren-seizoenen-natuur 25 → 30, topografie-nederland 25 → 30, oppervlakte-omtrek-po 15 → 20. Daar zijn stappen van 2-3 naar 5 vragen per bezoek gegaan. Mark: kijk of je dat goed vindt.

**Hoe getest**

- **Unit-tests:**
  - `src/shared/geziendeVragen.test.js`: sleutel, maximum, kapotte opslag, ongezien eerst, fout eerst, bewaren tot de stap af is, examens.
  - `src/features/practice/buildTopicQuiz.gezien.test.js`: alle vragen komen langs voordat er één terugkomt, en het groepsfilter blijft werken.
- **Kliktest in de browser** (Playwright op de gebouwde app), algoritmen-programmeren-po stap 4 met 28 vragen:
  - eerste bezoek "Vraag 1 van 5": 5 vragen;
  - tweede bezoek: 5 andere vragen;
  - halverwege stoppen en herladen: het overzicht toont "Doorgaan: deel 4, vraag 3" en die knop landt op dezelfde vraag;
  - het overzicht toont "5 vragen · ± 3 minuten".

## Deel 2 — werkwijze

- **Context en vorm:**
  - Per pad gaat de context naar een schrijver: uitleg, leestekst, `vanafGroep`, alle bestaande vragen en het aantal ontbrekende vragen. Gedaan met `scripts/meervragen/context.mjs`.
  - De schrijver levert kandidaten met `answer: 0` en dezelfde vorm als de bestaande vragen in die stap, ook de uitlegPad als die stap die heeft.
  - Rekenpaden hebben een rekenscript (`reken.mjs`) dat elk antwoord en elke afleider narekent.
  - Een vormcontrole (`vorm.mjs`) moet op 0 vormfouten uitkomen.
- **Blind nakijken:**
  - `blind.mjs` maakt een versie zonder antwoord, hints en uitlegPad, met de opties geschud.
  - Twee onafhankelijke nakijkers lossen elke vraag zelf op en toetsen hem aan regels 1-6. Ze zien de kandidaten niet en elkaars oordeel ook niet.
- **Beslissen (`beslis.mjs`):** een vraag gaat alleen mee als aan alles hieronder is voldaan.
  - Beide nakijkers kozen optie 0 en geen van beiden had een bezwaar.
  - De vorm klopt.
  - Hij is niet (bijna) dubbel met een bestaande vraag.
  - De goede optie is niet opvallend langer dan de andere.
  - Het antwoord staat niet letterlijk in de vraag. Dit is dezelfde regel als in `audit:vragen`. Daardoor vielen in korte-teksten-snappen-g4 ook 9 letterlijke vragen over een minitekstje af; bewust zo gehouden.
- **Zelf afgekeurd:** 5 vragen waarover een nakijker twijfelde zonder het een bezwaar te noemen. "Bij de minste twijfel: weglaten."
  - Rijn → "Waal, Lek en IJssel" (de Nederrijn ontbreekt).
  - Kraai heet in de ene stap "aaseter" en in de andere "alleseter".
  - Blauw-licht-effect: wetenschappelijk omstreden.
  - CM: staat niet als voorbeeld in de uitleg.
  - Schaal zelf bepalen: staat niet letterlijk in de uitleg.
- **Invoegen (`invoeg.mjs`):**
  - Nieuwe vragen komen achteraan de `checks`-lijst van hun stap, via de JS-parser. Bestaande vragen zijn niet aangeraakt.
  - Na het invoegen wordt het pad opnieuw geladen en gecontroleerd: het aantal klopt, de staart klopt en de bestaande vragen zijn byte-gelijk. Gaat er iets mis, dan wordt het bestand teruggezet.
- **Strenger na de eerste nakijkronde:** de nakijkers waren eerst mild. Daarna is de opdracht aangescherpt:
  - dezelfde som of hetzelfde woord in een andere verpakking telt als bijna-dubbel;
  - een omgedraaide bestaande vraag telt ook als bijna-dubbel;
  - twijfel is een bezwaar.
  
  Daarna liep het afkeurpercentage in ronde 1 op tot ~23%.

### Ronde 1 — de paden uit `PADEN_PER_GROEP` (startKwartier.js)

Vooraf nodig: 753 vragen in 21 paden. doorstroomtoets-taal-g8 en -rekenen-g8 hadden al 10+ per stap.

| Pad | Opgenomen / geschreven |
|---|---|
| begrijpend-lezen-teksten-po | 24/24 |
| breuken-po | 33/41 |
| cito-strategieen-groep8 | 30/39 |
| delen-po | 26/30 |
| dieren-seizoenen-natuur | 63/76 |
| getallen-tot-20-po | 20/25 |
| kaartlezen-po | 16/25 |
| klokkijken | 31/46 |
| korte-teksten-snappen-g4 | 17/30 |
| lange-toets-teksten-g8-po | 9/14 |
| procenten-po | 32/40 |
| rijmen-letters-kleuters-po | 18/25 |
| samenvatten-hoofdgedachte-po | 20/27 |
| spelling-eerste-woorden-g3 | 24/30 |
| spelling-ei-ij-au-ou | 30/49 |
| taal-leren-lezen-g3 | 29/30 |
| taal-woorden-zinnen-g4 | 24/28 |
| tafels-po | 22/30 |
| tellen-kleuters-po | 15/19 |
| topografie-nederland | 39/50 |
| werkwoordsspelling-dt | 41/51 |
| **Totaal** | **563 / 729 geschreven, 166 afgekeurd (22,8%)** |

**Steekproef van 30 door een frisse nakijker: 0 fout, 5 zwak.** Hij loste eerst blind op en koos bij alle 30 het bedoelde antwoord. Daarna beoordeelde hij hints en uitlegPad. De vijf zwakke:
- procenten-po#37 en cito-strategieen-groep8#6: geen uitlegPad, net als de bestaande vragen in die stap;
- delen-po#26: de uitlegPad noemt de bus-som een "hoeveel passen erin"-som, terwijl je bij bussen naar boven afrondt. Het antwoord klopt, want de deling komt precies uit;
- delen-po#14: kale hints;
- werkwoordsspelling-dt#28: de stapuitleg zegt "sterke werkwoorden" waar onregelmatige bedoeld zijn.

Omdat er geen fout gevonden is, hoefde de ronde niet opnieuw nagelopen te worden.

### Ronde 2 — rekenen

Vooraf: 31 rekenpaden met tekort (847). De 4 nieuwkomers-rekenpaden zijn overgeslagen (zie onder).

| Pad | Opgenomen / geschreven |
|---|---|
| belasting-po | 12/14 |
| brugklas-orientatie | 25/29 |
| cijferend-rekenen | 37/39 |
| deelsommen-met-rest-po | 8/13 |
| financiele-vorming-po | 28/29 |
| geld-rekenen | 23/24 |
| gemiddelden-statistiek-po | 20/25 |
| grafieken-lezen-po | 24/25 |
| kalender-rekenen-po | 27/28 |
| kommagetallen-po | 28/29 |
| maten-eenheden | 38/40 |
| maten-omtrek-oppervlakte-po | 18/19 |
| meetkunde-bouwsels | 24/27 |
| meten-gewicht-inhoud-tijd-po | 13/14 |
| negatieve-getallen-po | 25/25 |
| omzetten-breuk-procent-komma-po | 12/13 |
| oppervlakte-omtrek-po | 31/32 |
| redactiesommen-pad | 24/25 |
| romeinse-cijfers-po | 13/14 |
| schaal-kaart-rekenen-po | 12/14 |
| schatten-afronden | 26/28 |
| tabellen-grafieken | 32/35 |
| tijd-snelheid-afstand-po | 17/24 |
| vlakke-figuren-po | 25/27 |
| winst-rekenen-po | 5/6 |
| **Totaal** | **547 / 598 geschreven, 51 afgekeurd (8,5%)** |

- **Lager afkeurpercentage:** dat komt doordat de schrijvers vanaf deze ronde de lessen van ronde 1 meekregen: geen bijna-dubbels, geen voorbeelden uit de uitleg, het antwoordwoord niet in de vraag.
- **Rekenwerk:** alle sommen zijn door het rekenscript van de schrijver én door beide nakijkers met node nagerekend.
- **Niet afgerond:** tijdsduur-rekenen-po (30), verhoudingen-po (34) en volgorde-bewerkingen (43) zijn geschreven, maar hun nakijkers vielen uit door de limiet. **Ze zijn niet ingevoegd.**
- **⚠️ Steekproef van 30 voor ronde 2: niet gedaan.** Volgens de afspraak hoort die vóór het doorgaan naar ronde 3. Dat is de eerste taak voor de vervolgsessie.

### Ronde 3 t/m 6 — niet gedaan

- **Ronde 3 (taal + spelling, 20 paden, 434 nodig):**
  - geschreven maar nog niet nagekeken: lettergrepen-klemtoon-po (14), feit-mening-po (14), leestekens-hoofdletters-po (13);
  - de andere schrijvers vielen uit.
- **Rondes 4, 5 en 6:** niet begonnen.
- **Werkbestanden:** de kandidaten en contextbestanden van de onafgemaakte paden staan in `docs/audit/meer-vragen-po-werk/`. Een vervolgsessie kan ze nakijken met `scripts/meervragen/blind.mjs`, `beslis.mjs` en `invoeg.mjs`. De opdrachten voor schrijver, nakijker en steekproef staan in `scripts/meervragen/OPDRACHT-*.md`.

## Wat bewust is overgeslagen, en waarom

- **Interactieve stappen** (rekenoefenrondes, tel-feestje): het kind ziet daar het interactieve onderdeel, niet de checks. Het gaat om 5 stappen in de bewerkte paden.
- **Nieuwkomerspaden** (11 paden met `steunTeksten`): daar is elke tekst tikbaar in de eigen taal van het kind. Nieuwe vragen zouden zonder vertaling komen.
- **Stappen die onder de 10 blijven** (154 in de bewerkte paden, de meeste op 8 of 9). Dat komt door:
  - afkeuringen;
  - schrijvers die bewust minder schreven omdat extra vragen te dicht op bestaande kwamen, bijvoorbeeld stappen met weinig stof zoals "drie vormen" of één kort leesteksje;
  - stof waarvan de schrijver het niveau voor de laagste groep niet zeker vond, bijvoorbeeld cirkels bij maten-omtrek-oppervlakte stap 2.
- **Niveau van bestaande stappen:** volgens de nakijkers is de stof van sommige bestaande stappen te hoog voor de laagste groep van het pad. Voorbeelden:
  - tafels-po stap 3-4 (tafels 6-9, 6 × 13) bij groep4-5;
  - procenten-po en breuken-po (groep5-8, ongelijke noemers);
  - klokkijken stap 5-6 (24-uursklok, tijdsduur over het uur) bij groep3-5;
  - volgorde-bewerkingen (machten) bij groep5-7.
  
  Nieuwe vragen op dat niveau zijn alleen opgenomen als ze precies de stof van de stapuitleg volgden. In klokkijken zijn 10 van zulke vragen toch afgekeurd. **Advies:** `vanafGroep` invullen op die stappen. Dat is niet gedaan, want het wijzigt bestaande inhoud.

## Wat niet getest is

- **Eindmeting van 300 nieuwe vragen:** niet gedaan.
- **Steekproef van ronde 2:** niet gedaan.
- **`audit:vragen` slaat paden met .jsx-imports over.** Daardoor vallen de nieuwe vragen in o.a. cijferend-rekenen, delen-po, tafels-po, getallen-tot-20 en tellen-kleuters buiten die automatische controle. Ze zijn wel door het invoegscript, de rekenscripts en beide nakijkers gecontroleerd.
- **Geen kliktest per nieuw pad op een telefoon.** Alleen de werking van deel 1 is in de browser getest.
- **`evidence` niet meegenomen:** sommige schrijvers gaven een `evidence`-zin mee bij vragen over een leestekst. Die is niet opgenomen, omdat de nakijkers hem niet beoordeelden. Het gevolg: na een goed antwoord toont de app voor die nieuwe vragen geen "hier stond het in de tekst"-pauze.

## Bestanden

- **`docs/audit/nieuwe-vragen-po.json`:** alle 1.110 opgenomen vragen, per vraag `{ronde, pathId, stap, q, options}`. Het goede antwoord staat altijd op plek 0. Bedoeld om na te lezen.
- **`docs/audit/TWIJFEL-meer-vragen-po.md`:** 202 twijfelpunten over BESTAANDE vragen, gevonden door de schrijvers en niet aangepast. De ernstigste:
  - breuken-po "9/12 vereenvoudigd?": 6/8 is ook goed;
  - werkwoordsspelling-dt stap 7: "Ik ___ aan een werkstuk" heeft twee goede antwoorden;
  - leestekens: "Ik ga morgen naar school!" is ook goed;
  - topografie-nederland: in de uitleg komt de Schelde "bij Antwerpen in zee" en is Eindhoven een "grensovergang";
  - kalender: Koningsdag valt niet altijd op 27 april;
  - financiele-vorming: Apple Pay wordt bij naam genoemd;
  - tabellen-grafieken: 6 bestaande vragen noemen geen getallen en zijn als losse vraag niet te beantwoorden.
- **`scripts/meervragen/`:** de gereedschappen (context, vorm, blind, beslis, invoeg, steekproef, baseline-ophogen) en de opdrachtteksten.
