# Kwartiercheck — concepten per groep (3 t/m 8)

> Onderzoek + ontwerp, 29 sep 2026. Basis voor de vragenschrijvers van `src/features/kwartiercheck/groepen/*`.
> Formaat per concept sluit aan op `conceptMapping.js`: `{ id, label, vak, leerpadId, leerpadTitel }`.
> Alle `leerpadId`'s hieronder bestaan in `src/learnPaths/pathManifest.generated.json` (gecontroleerd op 29 sep).

---

## 1. Uitgangspunten

### 1.1 Wanneer doet een kind de check? "Medio" = januari/februari
De tabellen gaan uit van een check **halverwege het schooljaar** (januari/februari, het moment van de M-toetsen van het leerlingvolgsysteem). "Beheerst" betekent op dat moment:

- **alles wat eind vorig leerjaar af moest zijn** (SLO-tussendoelen "eind groep X−1"), plus
- **de stof van september tot januari** van dit leerjaar.

Om de check het hele jaar eerlijk te houden (hij wordt ook in september of juni gedaan), zijn de niveaus zo gekozen:

| Niveau | Betekenis | Bron |
|---|---|---|
| **Niveau 1 — basis** | Stof die er **al in moet zitten**: einddoel van vorig leerjaar of de eerste maanden van dit jaar. Ook in september eerlijk. | SLO eind groep X−1 + begin groep X |
| **Niveau 2 — toepassen** | De stof van **halverwege dit jaar**, in een klein verhaaltje of een iets lastiger vorm. | SLO eind groep X (medio-deel) |
| Niveau 3 (optioneel) | Wat eind van het jaar af moet zijn. Alleen als extra vraag; telt niet mee voor het medio-oordeel. | SLO eind groep X |

**Voor de vragenschrijvers (technische eis uit `KwartiercheckPage.jsx`):** "Beheerst" vraagt een bevestigingsvraag = nóg een niveau-1-vraag. Schrijf daarom per concept **minstens 2 × niveau 1 + 2 × niveau 2** (+ eventueel 1 × niveau 3), elk met 4 opties en `correct` als 0-based index — zelfde vorm als `questions.js`.

### 1.2 Kernstof per groep in één oogopslag (SLO-tussendoelen, "eind groep")

| Groep | Getallen | Bewerkingen | Meten / tijd / geld | Verhoudingen | Spelling (Cito-categorieën) | Grammatica | Lezen |
|---|---|---|---|---|---|---|---|
| **3** | telrij tot 100, hoeveelheden tot 20 vergelijken | + en − tot 20; splitsingen tot 10 uit het hoofd | hele uren; munten €1/€2, briefjes €5/€10, bedragen tot €20 | — | klankzuivere woorden (pen, maan, pijn, kast), clusters, sch, -ng/-nk | zin, woord | alle letters/klankgroepen (rond kerst), elementaire leeshandeling, AVI M3 → E3 |
| **4** | tot 100: tientallen/eenheden, sprongen 2-5-10, even/oneven | + en − tot 20 uit het hoofd, tot 100 (rijgen/splitsen); tafels 1-5 en 10 | halve uren + kwartieren; m/cm, kg; geld tot €100 | "de helft" | samenstellingen, v/f z/s, aai/ooi/oei, eer/oor/eur, ei, -d (hond), -je/-tje, au/ou, -ch/-cht, open/gesloten lettergreep | zelfstandig naamwoord, werkwoord, lidwoord | eerste begrijpend-lezen-toets (M4): korte teksten |
| **5** | tot 1000, afronden op honderdtallen; komma in geld | + en − tot 1000 (ook kolomsgewijs); **alle tafels t/m 10**; deeltafels, rest | op de minuut, analoog ↔ digitaal, tijdsduur; mm-dm-km, l/ml, g | "een kwart"; verhoudingstabel | -ig/-lijk, samenstellingen, -pje/-etje, f→v en s→z bij verlengen, hoofdletter/punt | + bijvoeglijk naamwoord | middenbouw-strategieën |
| **6** | tot 100.000; kommagetallen 1-2 decimalen; eerste breuken | × en : cijferend (4 × 38, 78 : 5 met rest); gemiddelde; breuk van hoeveelheid | hm, m², dl/cl, kg ↔ g; omtrek 2 × (l + b), oppervlakte l × b | breuk als deel van geheel/hoeveelheid | **werkwoorden tegenwoordige tijd**, c als s/k, i als ie, -tie/-heid/-teit, 's ochtends, auto's, komma bij opsomming | onderwerp, persoonsvorm, voorzetsel, telwoord, voegwoord | middenbouw → bovenbouw |
| **7** | tot 1 miljoen; 3 decimalen; breuken vereenvoudigen, breuk ↔ kommagetal | gelijknamige breuken + en −; × en : met kommagetallen; rekenmachine | metriek stelsel compleet (dam, voorvoegsels) | **procenten** (korting), schaal 1 : 100, gelijkwaardige breuken | **verleden tijd ('t kofschip), voltooid deelwoord**, -den (hij vindt), -isch, ch/th, leenwoorden, trema, hoofdletters in namen | + voornaamwoorden, lijdend voorwerp (begin) | hoofdgedachte, signaalwoorden, tekststructuur |
| **8** | referentieniveau **1F / 1S** | idem, alle bewerkingen incl. ongelijknamige breuken | m³/liter, snelheid | procenten, verhoudingen, schaal | tussenletter -n-/-s-, koppelteken, bijvoeglijk gebruikt voltooid deelwoord, x/y, stoffelijke bijvoeglijke naamwoorden | gezegde, lijdende/bedrijvende vorm | 1F/2F: samenvatten, beoordelen, afleiden |

### 1.3 Leesteksten per groep (lengte-richtlijn)
Kwartier-belofte: de hele check duurt ~15 min, dus teksten kort houden.

| Groep | Tekst in een BL-vraag | Zinnen |
|---|---|---|
| 3 | 1-2 zinnetjes, ≤ 6 woorden per zin, klankzuivere woorden | enkelvoudig |
| 4 | 3-5 korte zinnen (~30-50 woorden) | enkelvoudig, concrete signaalwoorden (eerst, daarna) |
| 5 | 1-2 alinea's (~60-100 woorden) | enkelvoudig + af en toe samengesteld |
| 6 | 2 alinea's (~100-130 woorden), mag tussenkopje | samengesteld, verwijswoorden dichtbij |
| 7 | 2-3 alinea's (~130-170 woorden) | bijzinnen, signaalwoorden, verwijswoorden verder weg |
| 8 | 3 alinea's (~150-200 woorden) | Doorstroomtoets-stijl, afleiden nodig |

### 1.4 Vakken en verdeling
- Per groep **7-8 concepten**: 3-4 rekenen, 2-3 taal, 1 begrijpend lezen (groep 3: 2 × lezen = technisch lezen/letters, geen begrijpend lezen).
- `vak` blijft `"rekenen" | "taal" | "begrijpend-lezen"` (zodat `VAK_VOLGORDE` werkt). **Advies:** toon voor groep 3 het vak-label als "Lezen" in plaats van "Begrijpend Lezen" (alleen weergave).
- Ids krijgen een groep-voorvoegsel (`g4-...`). **Groep 8 hergebruikt de bestaande ids** (die vragen zijn al groep 7-8-niveau). Let op: `ALLE_CONCEPTEN` ontdubbelt op id en `getVragenVoorConcept(id)` deelt de vragenpool — een bestaand id hergebruiken betekent dus óók dezelfde vragen. Daarom krijgt groep 7 eigen `g7-`-ids (makkelijkere medio-7-vragen).

---

## 2. Groep 3

**Medio groep 3 (jan/feb):** alle letters en klankgroepen zijn net aangeboden (bij Veilig leren lezen zijn de laatste letters g, au, ui, f, ei in kern 6, rond kerst). Kinderen lezen korte klankzuivere woorden en zinnetjes (richting AVI M3). Rekenen: tot 10 vlot, tot 20 in opbouw. Over het tiental (8 + 5) en de hele-uren-klok zijn einddoelen van groep 3 → niveau 2.

| id | label (ouder-vriendelijk) | vak | leerpadId (leerpadTitel) | Wat beheerst het kind medio groep 3? |
|---|---|---|---|---|
| `g3-getallen-tot-20` | Tellen en getallen tot 20 | rekenen | `getallen-tot-20-po` (Getallen en sommen tot 20) | Telrij tot 20 (verder tellen vanaf elk getal), hoeveelheden tot 10 in één oogopslag (vingers, dobbelsteen, vijfstructuur), getallen tot 20 vergelijken en ordenen, buurgetallen. |
| `g3-plus-min-tot-10` | Erbij en eraf tot 10 | rekenen | `getallen-tot-20-po` (Getallen en sommen tot 20) | Optellen en aftrekken tot 10, splitsen van getallen tot 10 (7 = 5 en 2), bij een plaatjes-verhaaltje de goede som kiezen. Tot 20 zonder tiental-overschrijding (12 + 3) is in opbouw. |
| `g3-geld-en-klok` | Geld tellen en klokkijken | rekenen | `klokkijken` (Klokkijken) | Munten van €1 en €2 en briefjes van €5 en €10 herkennen, bedragen tot €10-20 samenstellen. Hele uren op de klok: vaak net behandeld (einddoel groep 3). |
| `g3-klanken-rijmen` | Klanken horen en rijmen | taal | `taal-leren-lezen-g3` (Leren lezen) | Rijmen, de eerste/laatste klank van een woord horen, een woord in klanken hakken (v-i-s) en klanken tellen. |
| `g3-woorden-schrijven` | Woorden schrijven (spelling) | taal | `spelling-eerste-woorden-g3` (Je eerste woorden schrijven) | Klankzuivere woorden van 3-4 klanken goed schrijven: pen, maan, pijn, huis (Cito-categorie 1). Medeklinkers vooraan/achteraan (kast, bloem) in opbouw; sch en -ng/-nk zijn einddoel. |
| `g3-letters-klanken` | Letters en klanken | begrijpend-lezen (toon als "Lezen") | `taal-leren-lezen-g3` (Leren lezen) | Alle letters en klankgroepen koppelen aan hun klank (aa ee oo uu, oe ie eu ui ei ij au ou), klanken samenvoegen tot een woord (b-oe-k → boek). |
| `g3-woordjes-zinnen-lezen` | Woordjes en zinnetjes lezen | begrijpend-lezen (toon als "Lezen") | `taal-leren-lezen-g3` (Leren lezen) | Korte klankzuivere woorden vlot lezen en snappen wat er staat; een zinnetje van ≤ 6 woorden lezen en een wie/wat/waar-vraag beantwoorden. |

| id | Niveau 1 — basis (+ voorbeeldvraag) | Niveau 2 — toepassen (+ voorbeeldvraag) |
|---|---|---|
| `g3-getallen-tot-20` | Aantal tellen tot 10-12, buurgetal noemen. *"Welk getal komt na 13?"* → 14 / 12 / 15 / 31 | Getallen tot 20 vergelijken/ordenen, getallenlijn. *"Welk getal ligt het dichtst bij 10?"* → 13 / 5 / 17 / 2 |
| `g3-plus-min-tot-10` | Kale som of splitsing tot 10. *"5 + 3 = ?"* → 8 / 7 / 9 / 2 | Verhaaltje of som tot 20 zonder tiental-overschrijding. *"Er zitten 8 vogels in de boom. Er vliegen er 3 weg. Hoeveel zitten er nog?"* → 5 / 11 / 4 / 6 |
| `g3-geld-en-klok` | Geld samentellen. *"Je hebt een briefje van 5 euro en een munt van 2 euro. Hoeveel euro is dat?"* → 7 / 52 / 3 / 10 | Hele uren. *"De grote wijzer staat op de 12, de kleine wijzer op de 3. Hoe laat is het?"* → 3 uur / 12 uur / half 3 / kwart over 3 (liefst met klokplaatje) |
| `g3-klanken-rijmen` | Rijmen. *"Wat rijmt op 'bal'?"* → val / bel / bak / bol | Klanken hakken/wisselen. *"Hoeveel klanken hoor je in 'vis'?"* → 3 / 2 / 4 / 1 — of: *"Maak van 'kaas' een nieuw woord met een b vooraan"* → baas |
| `g3-woorden-schrijven` | Kies de goede schrijfwijze van een klankzuiver woord. *"Welk woord is goed geschreven: het ding aan de hemel 's nachts?"* → maan / man / mane / mahn | Twee medeklinkers achter elkaar. *"Welk woord is goed geschreven?"* → kast / kas / kats / kaast |
| `g3-letters-klanken` | Beginklank. *"Met welke letter begint 'roos'?"* → r / o / s / b | Tweetekenklank / klanken plakken. *"Plak de klanken aan elkaar: r – ij – k. Welk woord is het?"* → rijk / rek / rok / ruik |
| `g3-woordjes-zinnen-lezen` | Losse woorden lezen. *"Lees de woorden. Welk woord is een dier?"* → koe / boom / pen / sok | Zinnetje + vraag. *"Sam zit in de boot. Waar zit Sam?"* → in de boot / in de boom / op de fiets / in bed |

**Groep 3-aandachtspunten:** de voorleesknop (`luister` staat aan voor groep 3-4) mag bij de twee **lees**-concepten de woorden/zinnen zelf **níet** voorlezen, anders meet je luisteren in plaats van lezen — alleen de opdrachtzin. Bij klank-vragen de klank laten horen via een heel woord ("roos"), niet via een losse klank (spraaksynthese spreekt losse klanken slecht uit). Tellen, geld en klok werken veel beter met een eenvoudig plaatje (stippen, munten, klok) dan met tekst.

---

## 3. Groep 4

**Medio groep 4:** getallen tot 100 en optellen/aftrekken tot 20 (ook over het tiental) zijn het hoofdwerk; tot 100 met tiental-overschrijding (37 + 8) is in opbouw. Tafels: 1, 2, 5 en 10 (3 en 4 volgen in de tweede helft; SLO einddoel groep 4 = tafels 1-5 en 10). Klok: hele en halve uren (kwartieren = einddoel). Spelling: Cito-categorieën M4. Eerste begrijpend-lezen-toets (Cito M4).

| id | label | vak | leerpadId (leerpadTitel) | Wat beheerst het kind medio groep 4? |
|---|---|---|---|---|
| `g4-getallen-tot-100` | Getallen tot 100 | rekenen | `rekenen-tot-100-nieuwkomers` (Rekenen tot 100) | Tellen en terugtellen tot 100 (ook in sprongen van 2, 5, 10), tientallen en eenheden (47 = 4 tientallen en 7), getallen vergelijken en op de getallenlijn zetten. |
| `g4-plus-min-tot-100` | Plus en min tot 100 | rekenen | `rekenen-tot-100-nieuwkomers` (Rekenen tot 100) | Optellingen en aftrekkingen tot 20 vlot, ook over de 10 (8 + 5, 13 − 6); tot 100 met tientallen (40 + 30, 45 + 10). Over het tiental tot 100 (37 + 8) in opbouw. |
| `g4-tafels-1-2-5-10` | De eerste tafels (1, 2, 5, 10) | rekenen | `tafels-po` (Tafels & vermenigvuldigen) | Keersommen begrijpen als "groepjes van" (3 × 4 = 3 groepjes van 4); tafels van 1, 2, 5 en 10 uit het hoofd. |
| `g4-klok-en-geld` | Klokkijken en geld | rekenen | `klokkijken` (Klokkijken) | Hele en halve uren analoog en digitaal ("half 4" = 3.30); rekenen met hele uren; geld: munten en briefjes, bedragen tot €100 samenstellen, duurder/goedkoper. |
| `g4-spelling` | Spelling: lastige klanken | taal | `spelling-ei-ij-au-ou` (Spelling ei/ij en au/ou) | Clusters (krant, markt), sch, -ng/-nk, samenstellingen (fietsbel), v/f en z/s vooraan, aai/ooi/oei, eer/oor/eur, ei, -d achteraan (hond), verkleinwoorden -je/-tje. Einddoel: au/ou, -ch/-cht, open/gesloten lettergreep (bomen/bommen). |
| `g4-woorden-en-zinnen` | Woorden en zinnen | taal | `taal-woorden-zinnen-g4` (Woorden en zinnen) | Meervoud (-en/-s), verkleinwoord, tegenstellingen, alfabetische volgorde; eerste woordsoorten: lidwoord (de/het/een), zelfstandig naamwoord, werkwoord; een zin begint met een hoofdletter en eindigt met een punt. |
| `g4-korte-tekst` | Een korte tekst begrijpen | begrijpend-lezen | `korte-teksten-snappen-g4` (Korte teksten snappen) | Een tekst van 3-5 zinnen lezen en letterlijke informatie terugvinden (wie, wat, waar, wanneer); de volgorde van gebeurtenissen; eenvoudig verwijswoord (ze → Lisa) vlak na de naam. |

| id | Niveau 1 — basis | Niveau 2 — toepassen |
|---|---|---|
| `g4-getallen-tot-100` | Tientallen/eenheden. *"Hoeveel tientallen zitten er in 63?"* → 6 / 3 / 60 / 9 | Sprongen/getallenlijn. *"Tel verder in sprongen van 5: 35, 40, 45, …"* → 50 / 46 / 55 / 60 |
| `g4-plus-min-tot-100` | Tot 20 over de 10. *"8 + 5 = ?"* → 13 / 12 / 14 / 3 | Tot 100 over het tiental of verhaaltje. *"37 + 8 = ?"* → 45 / 44 / 35 / 55 |
| `g4-tafels-1-2-5-10` | Kale tafelsom. *"4 × 10 = ?"* → 40 / 14 / 400 / 4 | Groepjes in een verhaaltje. *"Er staan 3 dozen met elk 5 eieren. Hoeveel eieren zijn dat?"* → 15 / 8 / 35 / 53 |
| `g4-klok-en-geld` | Halve uren. *"De grote wijzer staat op de 6, de kleine wijzer tussen de 3 en de 4. Hoe laat is het?"* → half 4 / half 3 / 6 uur / kwart over 3 | Rekenen met tijd of geld. *"Het is half 2. Hoe laat is het 2 uur later?"* → half 4 / half 3 / 2 uur / 4 uur |
| `g4-spelling` | Verlengregel -d. *"Welk woord is goed geschreven?"* → hond / hont / hondt / honnd | ei/ij of verkleinwoord. *"Welk woord is goed geschreven?"* → treintje / treinje / trijntje / treintie |
| `g4-woorden-en-zinnen` | Meervoud/verkleinwoord. *"Wat is het meervoud van 'boek'?"* → boeken / boeks / boekken / boeke | Woordsoort in een zin. *"Welk woord is een werkwoord? 'De hond rent naar huis.'"* → rent / hond / huis / de |
| `g4-korte-tekst` | Letterlijk terugvinden. Tekst: *"Lisa gaat naar het strand. Ze neemt een emmer en een schep mee. Het is warm. Lisa bouwt een zandkasteel."* → *"Wat neemt Lisa mee?"* → een emmer en een schep / een bal / een handdoek / een ijsje | Volgorde of verwijzing. *"Wat doet Lisa als laatste?"* → een zandkasteel bouwen / naar het strand gaan / een emmer pakken / zwemmen |

---

## 4. Groep 5

**Medio groep 5:** getallen tot 1000; plus en min tot 100 vlot en tot 1000 met ronde getallen; tafels 6-9 in opbouw (einddoel groep 5 = alle tafels t/m 10 uit het hoofd + deeltafels); klok op 5 minuten nauwkeurig (op de minuut = einddoel); spelling Cito M5; woordsoorten breiden uit met het bijvoeglijk naamwoord.

| id | label | vak | leerpadId (leerpadTitel) | Wat beheerst het kind medio groep 5? |
|---|---|---|---|---|
| `g5-getallen-tot-1000` | Getallen tot 1000 | rekenen | `schatten-afronden` (Schatten en afronden) | Getallen tot 1000 lezen en schrijven, honderdtallen/tientallen/eenheden, vergelijken en op de getallenlijn zetten; geldbedragen met een komma lezen (€4,95). Afronden op honderdtallen = einddoel. |
| `g5-plus-min-tot-1000` | Plus en min tot 1000 | rekenen | `cijferend-rekenen` (Cijferend rekenen) | Tot 100 vlot (64 − 27), met ronde getallen tot 1000 (350 + 200, 800 − 250), eerste stappen kolomsgewijs rekenen; eenvoudige kassabon-sommen. |
| `g5-tafels-en-delen` | Alle tafels en delen | rekenen | `tafels-po` (Tafels & vermenigvuldigen) — vervolg: `delen-po` | Tafels 1-5 en 10 vlot; tafels 6-9 in opbouw; delen als "eerlijk verdelen" en "hoe vaak past het"; eerste deelsommen met rest. |
| `g5-klok-en-tijd` | Klokkijken en tijdsduur | rekenen | `klokkijken` (Klokkijken) — vervolg: `tijdsduur-rekenen-po` | Kwartieren en 5-minutenstappen ("vijf voor half 3"), analoog ↔ digitaal (14.25); uren, minuten, etmaal. Tijdsduur uitrekenen = einddoel. |
| `g5-spelling` | Spelling: lange woorden | taal | `spelling-overige-po` (Spelling) | Open/gesloten lettergreep (bomen/bommen), -ig/-lijk (aardig, moeilijk), ei/ij en au/ou in langere woorden, samenstellingen met veel medeklinkers (fietstocht), hoofdletter + punt/vraagteken. Einddoel: -pje/-etje, brief → brieven. |
| `g5-woordsoorten` | Woordsoorten: naamwoord, werkwoord, bijvoeglijk | taal | `woordsoorten-po` (Woordsoorten herkennen) | Zelfstandig naamwoord, werkwoord en lidwoord (de/het) zeker; bijvoeglijk naamwoord ("een rode fiets") in opbouw. |
| `g5-woordenschat` | Woordenschat: hetzelfde en het tegenovergestelde | taal | `synoniemen-tegenstellingen-po` (Synoniemen en tegenstellingen) | Synoniemen en tegenstellingen van bekende woorden, betekenis afleiden uit de zin, eenvoudig figuurlijk taalgebruik. |
| `g5-tekst-begrijpen` | Een tekst begrijpen: wie, wat en waarom | begrijpend-lezen | `begrijpend-lezen-strategie` (Leer eerst de aanpak) | Tekst van 1-2 alinea's: informatie terugvinden, verwijswoorden (hij, ze, daar, dat) koppelen, een eenvoudige "waarom"-vraag waarvan het antwoord bijna letterlijk in de tekst staat. |

| id | Niveau 1 — basis | Niveau 2 — toepassen |
|---|---|---|
| `g5-getallen-tot-1000` | Plaatswaarde. *"Welk getal is het grootst?"* → 906 / 690 / 609 / 96 | Afronden/getallenlijn. *"Rond 879 af op honderdtallen."* → 900 / 800 / 880 / 870 |
| `g5-plus-min-tot-1000` | Tot 100. *"64 − 27 = ?"* → 37 / 43 / 47 / 33 | Verhaaltje tot 1000. *"Een fiets kost 385 euro en een helm 49 euro. Hoeveel is dat samen?"* → 434 / 424 / 334 / 435 |
| `g5-tafels-en-delen` | Tafels 1-5. *"7 × 4 = ?"* → 28 / 24 / 32 / 11 | Tafels 6-9 of delen. *"56 : 8 = ?"* → 7 / 6 / 8 / 9 — of: *"24 kinderen gaan in groepjes van 4. Hoeveel groepjes?"* → 6 |
| `g5-klok-en-tijd` | Analoog ↔ digitaal. *"Het is 's middags kwart over 3. Hoe staat dat op een digitale klok?"* → 15.15 / 15.45 / 3.45 / 13.15 | Tijdsduur. *"De film begint om 15.15 uur en is om 17.00 uur afgelopen. Hoe lang duurt de film?"* → 1 uur en 45 minuten / 2 uur / 1 uur en 15 minuten / 2 uur en 15 minuten |
| `g5-spelling` | Open/gesloten lettergreep. *"Welk meervoud van 'boom' is goed?"* → bomen / boomen / bommen / bome | -ig/-lijk. *"Welk woord is goed geschreven?"* → gelukkig / gelukig / gelukkich / geluckig |
| `g5-woordsoorten` | *"Welk woord is een zelfstandig naamwoord? 'De kat slaapt op de bank.'"* → kat / slaapt / op / de | *"Welk woord vertelt hoe de fiets is? 'Ik heb een rode fiets.'"* (bijvoeglijk naamwoord) → rode / fiets / ik / heb |
| `g5-woordenschat` | *"Wat is het tegenovergestelde van 'smal'?"* → breed / dun / klein / lang | Betekenis uit de zin. *"Tim was woedend toen zijn fiets weg was. Wat betekent 'woedend'?"* → heel boos / heel blij / heel moe / heel bang |
| `g5-tekst-begrijpen` | Feit terugvinden in een korte informatieve tekst (bv. over egels: *"Wat eet een egel?"*) | Verwijswoord of eenvoudige waarom-vraag. *"In zin 3 staat 'daar'. Waar gaat het om?"* |

---

## 5. Groep 6

**Medio groep 6:** getallen tot 10.000 (einddoel 100.000), kommagetallen in geld en meten; vermenigvuldigen en delen cijferend (4 × 38, 78 : 5); eerste breuken; meten met het metrieke stelsel en omtrek. Taal: **werkwoordspelling tegenwoordige tijd** (volgens de CED-leerlijn groep 6), spelling Cito M6, woordsoorten breed.

| id | label | vak | leerpadId (leerpadTitel) | Wat beheerst het kind medio groep 6? |
|---|---|---|---|---|
| `g6-grote-getallen` | Grote getallen en afronden | rekenen | `schatten-afronden` (Schatten en afronden) | Getallen tot 10.000 lezen/schrijven, plaatswaarde, afronden op 10/100/1000, schatten; kommagetallen met 1-2 decimalen (geld, meten) lezen en ordenen. |
| `g6-keer-en-delen` | Vermenigvuldigen en delen | rekenen | `cijferend-rekenen` (Cijferend rekenen) — alt.: `delen-po` | Tafels en deeltafels t/m 10 uit het hoofd; ronde getallen (6 × 70, 3600 : 9); 1-cijferig × 2/3-cijferig (4 × 38); 2/3-cijferig : 1-cijferig, ook met rest (78 : 5). |
| `g6-breuken` | Breuken: eerste stappen | rekenen | `breuken-po` (Breuken) | Breuken lezen (teller/noemer), stambreuken, een breuk als deel van een geheel (pizza) en van een hoeveelheid (1/4 van 20), breuken met dezelfde noemer vergelijken, aanvullen tot 1. |
| `g6-meten` | Meten: lengte, gewicht en inhoud | rekenen | `maten-eenheden` (Maten & eenheden) | km-hm-m-dm-cm-mm, kg-g, l-dl-cl-ml omrekenen met hele getallen; notatie met komma (2,37 m); omtrek van een rechthoek. Oppervlakte l × b en m² = einddoel. |
| `g6-werkwoorden-nu` | Werkwoorden in de tegenwoordige tijd | taal | `werkwoordsspelling-dt` (Werkwoordsspelling d/t) | Persoonsvorm en onderwerp vinden; stam en hele werkwoord; ik = stam, jij/hij = stam + t (ik loop, hij loopt, wij lopen); "loop jij?". Werkwoorden met een d in de stam (hij vindt) in opbouw. |
| `g6-spelling` | Spelling: leenwoorden en uitgangen | taal | `spelling-overige-po` (Spelling) | c als s of k (citroen, camera), i als ie (piloot), -tie/-heid/-teit, 's ochtends, auto's, verkleinwoorden -pje/-etje, f→v en s→z (brieven, huizen), komma bij een opsomming. |
| `g6-woordsoorten` | Woordsoorten herkennen | taal | `woordsoorten-po` (Woordsoorten herkennen) | Zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord, lidwoord zeker; plus voorzetsel, telwoord en persoonlijk voornaamwoord (ik, jij, hij). |
| `g6-informatie-in-tekst` | Informatie vinden in een tekst | begrijpend-lezen | `feiten-details-opzoeken-po` (Feiten en details opzoeken) — vervolg: `verwijswoorden-begrijpend-lezen-po` | Informatieve tekst van 2 alinea's met tussenkopje: gericht informatie zoeken, verwijswoorden koppelen, eenvoudige signaalwoorden (omdat, daarom, eerst, daarna). |

| id | Niveau 1 — basis | Niveau 2 — toepassen |
|---|---|---|
| `g6-grote-getallen` | *"Hoe schrijf je 'vierduizend tweehonderdvijf' in cijfers?"* → 4205 / 4250 / 42.005 / 425 | *"Rond 7482 af op duizendtallen."* → 7000 / 7500 / 8000 / 7480 — of kommagetallen ordenen: *"Welk bedrag is het hoogst?"* → € 7,50 / € 7,05 / € 6,95 / € 6,59 |
| `g6-keer-en-delen` | Ronde getallen. *"6 × 70 = ?"* → 420 / 42 / 4200 / 76 | Delen met rest in een verhaal. *"361 kinderen gaan in bootjes voor 7 personen. Hoeveel bootjes zijn er nodig?"* → 52 / 51 / 50 / 53 |
| `g6-breuken` | Deel van een geheel. *"Een pizza is in 8 gelijke stukken gesneden. Je eet er 3. Welk deel heb je op?"* → 3/8 / 3/5 / 5/8 / 1/3 | Breuk van een hoeveelheid. *"Hoeveel is 3/4 van 20?"* → 15 / 5 / 12 / 16 |
| `g6-meten` | *"Hoeveel centimeter is 2 meter?"* → 200 / 20 / 2000 / 12 | Omtrek. *"Een rechthoekige tuin is 8 m lang en 5 m breed. Hoe lang is het hek eromheen?"* → 26 m / 40 m / 13 m / 80 m |
| `g6-werkwoorden-nu` | *"Welke vorm is goed? 'Mijn zus … elke dag naar school.' (fietsen)"* → fietst / fiets / fietsd / fietsen | Stam op -d of inversie. *"Welke vorm is goed? 'Hij … zijn sleutels nooit.' (vinden)"* → vindt / vind / vint / vinden |
| `g6-spelling` | *"Welk woord is goed geschreven?"* → politie / polietsie / politsie / polisie | *"Welke schrijfwijze is goed?"* → 's avonds / savonds / s'avonds / 'S avonds |
| `g6-woordsoorten` | *"Welk woord is een bijvoeglijk naamwoord? 'De oude man loopt naar huis.'"* → oude / man / loopt / de | *"Welk woord is een voorzetsel? 'De kat ligt onder de tafel.'"* → onder / kat / ligt / tafel |
| `g6-informatie-in-tekst` | Letterlijk feit zoeken in een informatieve tekst (bv. *"Hoeveel eieren legt een kievit?"*) | Verwijswoord of oorzaak met "omdat/daardoor". *"Waardoor raakten de nesten kwijt?"* (antwoord staat verspreid over twee zinnen) |

---

## 6. Groep 7

**Medio groep 7:** breuken rekenen (vereenvoudigen, gelijknamig optellen, breuk van hoeveelheid), kommagetallen tot 3 decimalen, **procenten starten** (50%/25%/10%; korting is einddoel groep 7), metriek stelsel compleet + oppervlakte. Taal: **verleden tijd en voltooid deelwoord** ('t kofschip; CED-leerlijn groep 7), -isch, leenwoorden, hoofdletters in namen. Lezen: hoofdgedachte en verbanden.

| id | label | vak | leerpadId (leerpadTitel) | Wat beheerst het kind medio groep 7? |
|---|---|---|---|---|
| `g7-breuken` | Rekenen met breuken | rekenen | `breuken-po` (Breuken) | Gelijkwaardige breuken, vereenvoudigen (4/10 = 2/5), helen eruit halen (17/3 = 5 2/3), gelijknamige breuken optellen en aftrekken, breuk van een hoeveelheid (4/5 van 350), bekende breuken ↔ kommagetal (1/4 = 0,25). |
| `g7-kommagetallen` | Kommagetallen | rekenen | `kommagetallen-po` (Kommagetallen) | Tot 3 decimalen lezen en ordenen (4,3 > 4,25), optellen/aftrekken met ongelijk aantal decimalen, × en : 10/100/1000, eenvoudig vermenigvuldigen (4 × 2,25). |
| `g7-procenten` | Procenten: eerste stappen | rekenen | `procenten-po` (Procenten) | Wat procent betekent (deel van 100), 100% = alles, 50% = de helft, 25% = een kwart, 10% = een tiende; procent van een rond getal. Korting uitrekenen = einddoel groep 7. |
| `g7-meten-oppervlakte` | Meten, omrekenen en oppervlakte | rekenen | `maten-omtrek-oppervlakte-po` (Maten, omtrek en oppervlakte) — alt.: `maten-eenheden` | Metriek stelsel compleet (km … mm, kg/g, l/dl/cl/ml), maten met komma (1,5 km = 1500 m), omtrek en oppervlakte van een rechthoek in m²/cm². |
| `g7-werkwoordspelling` | Werkwoordspelling (d of t) | taal | `werkwoordsspelling-dt` (Werkwoordsspelling d/t) | Persoonsvorm + onderwerp vinden (niveau 1); tegenwoordige tijd ook met d-stam (hij vindt, word/wordt); verleden tijd zwakke werkwoorden met 't kofschip (maakte, hoorde), sterke werkwoorden (liep, ging); voltooid deelwoord (gepakt, gebeld) in opbouw. |
| `g7-spelling-leestekens` | Spelling en leestekens | taal | `spelling-overige-po` (Spelling) — alt.: `leestekens-hoofdletters-po` | -isch (logisch), -tie/-heid/-teit, ch als sj (chocola), th (theater), Franse/Engelse leenwoorden (cadeau, computer), hoofdletters in aardrijkskundige namen (Zuid-Holland), aanhalingstekens bij directe rede. |
| `g7-woordenschat` | Woordenschat en uitdrukkingen | taal | `woordenschat-po` (Woordenschat) — alt.: `spreekwoorden-uitdrukkingen-po` | Synoniemen en tegenstellingen van schooltaalwoorden (vergroten, gevolg, voorzichtig), betekenis uit de context, bekende uitdrukkingen en spreekwoorden, bovenbegrippen (dier → hond). |
| `g7-hoofdgedachte-verbanden` | Hoofdgedachte en verbanden in een tekst | begrijpend-lezen | `samenvatten-hoofdgedachte-po` (Samenvatten & hoofdgedachte) — alt.: `tekstverbanden-oorzaak-gevolg-po` | Tekst van 2-3 alinea's: onderwerp vs. hoofdgedachte, de kern per alinea, signaalwoorden (omdat, daardoor, maar, bijvoorbeeld), oorzaak en gevolg, tekstdoel (informeren/overtuigen/vermaken). |

| id | Niveau 1 — basis | Niveau 2 — toepassen |
|---|---|---|
| `g7-breuken` | Gelijkwaardig/vereenvoudigen. *"Welke breuk is even groot als 1/2?"* → 4/8 / 2/3 / 3/4 / 1/4 | Breuk van een hoeveelheid. *"Hoeveel is 4/5 van 350?"* → 280 / 70 / 250 / 300 |
| `g7-kommagetallen` | Ordenen. *"Welk getal is het grootst?"* → 4,3 / 4,25 / 4,209 / 4,03 | Geld-verhaal. *"Je koopt een boek van € 12,95 en een pen van € 2,49. Je betaalt met € 20. Hoeveel krijg je terug?"* → € 4,56 / € 5,56 / € 4,46 / € 15,44 |
| `g7-procenten` | *"Hoeveel is 50% van 40?"* → 20 / 10 / 50 / 4 — of: *"25% is hetzelfde als …"* → een kwart / een half / een tiende / een vijfde | Korting. *"Een ijsmachine kost € 80. Je krijgt 25% korting. Hoeveel betaal je?"* → € 60 / € 20 / € 55 / € 75 |
| `g7-meten-oppervlakte` | *"Hoeveel meter is 1,5 kilometer?"* → 1500 / 150 / 15 / 15.000 | Oppervlakte. *"Een kamer is 4 m lang en 3,5 m breed. Hoeveel m² is de vloer?"* → 14 / 15 / 7,5 / 12 |
| `g7-werkwoordspelling` | Persoonsvorm vinden. *"Welk woord is de persoonsvorm? 'Morgen gaan wij naar de dierentuin.'"* → gaan / morgen / wij / dierentuin | Verleden tijd / voltooid deelwoord. *"Welke vorm is goed? 'Gisteren … ik mijn fiets.' (poetsen)"* → poetste / poetsde / poetsten / poetsd |
| `g7-spelling-leestekens` | *"Welk woord is goed geschreven?"* → logisch / logies / logish / lochisch | Leestekens/hoofdletters. *"Welke zin is goed geschreven?"* → Mama zei: "Kom je eten?" / Mama zei: "kom je eten?" / Mama zei "Kom je eten"? / mama zei: Kom je eten? |
| `g7-woordenschat` | *"Welk woord betekent hetzelfde als 'beginnen'?"* → starten / stoppen / proberen / eindigen | Uitdrukking. *"Wat betekent 'de kat uit de boom kijken'?"* → eerst afwachten hoe iets gaat / bang zijn voor katten / iemand bespieden / snel weglopen |
| `g7-hoofdgedachte-verbanden` | Onderwerp. *"Waar gaat de tekst vooral over?"* | Hoofdgedachte of oorzaak-gevolg. *"Welke zin vertelt het belangrijkste van de tekst?"* — of: *"Wat is het gevolg van …?"* |

---

## 7. Groep 8

**Medio groep 8 (rond de Doorstroomtoets in februari):** alle stof tot referentieniveau 1F en richting 1S (rekenen) / 2F (taal). De Doorstroomtoets verdeelt rekenen over getallen (30-40%), verhoudingen (20-30%), meten & meetkunde (20-30%) en verbanden (15-20%). **Groep 8 hergebruikt de bestaande ids en vragen** uit `conceptMapping.js` / `questions.js`.

| id | label | vak | leerpadId (leerpadTitel) | Wat beheerst het kind medio groep 8? |
|---|---|---|---|---|
| `breuken` (bestaand) | Breuken begrijpen | rekenen | `breuken-po` (Breuken) | Breuken vergelijken en ordenen, ook ongelijknamig; ongelijknamig optellen/aftrekken; breuk ↔ kommagetal ↔ procent; breuk van een hoeveelheid. |
| `procenten` (bestaand) | Procenten & kortingen | rekenen | `procenten-po` (Procenten) | Procent van een getal, korting en toename, een deel omrekenen naar procent (15 van 25 = 60%). |
| `verhoudingen` (bestaand) | Verhoudingen & schaal | rekenen | `verhoudingen-po` (Verhoudingen) | Verhoudingstabel, recept omrekenen, prijs per kilo vergelijken (wat is voordeliger), schaal op kaart (1 : 50.000). |
| `maten` (bestaand) | Maten & eenheden omzetten | rekenen | `maten-eenheden` (Maten & eenheden) | Alle lengte-, gewicht-, inhoud- en oppervlaktematen omrekenen, dm³ = liter, tijd en snelheid (km/u). |
| `spelling` (bestaand) | Spelling & werkwoorden | taal | `spelling-overige-po` (Spelling) | Tussenletter -n-/-s- (pannenkoek, dorpsweg), koppelteken, trema, leenwoorden, stoffelijke bijvoeglijke naamwoorden (houten), -iaal/-ieel. |
| `werkwoordtijden` (bestaand) | Werkwoordtijden (o.t./v.t.) | taal | `werkwoord-tijden-po` (Werkwoordtijden) | Alle werkwoordspelling: tt en vt (ook -dde/-tte: raadde, praatte), voltooid deelwoord (ook beloofd, gereisd), bijvoeglijk gebruikt voltooid deelwoord (de gekookte eieren), "word jij / wordt je broer". |
| `woordenschat` (bestaand) | Woordenschat & betekenis | taal | `woordenschat-po` (Woordenschat) | Synoniemen/antoniemen, betekenis uit context, schooltaal- en vaktaalwoorden, figuurlijk taalgebruik. |
| `hoofdgedachte` (bestaand) | Hoofdgedachte & samenvatten | begrijpend-lezen | `samenvatten-hoofdgedachte-po` (Samenvatten & hoofdgedachte) | Hoofdgedachte van een tekst en alinea, hoofd- en bijzaken, samenvatting kiezen, tekstdoel. |

| id | Niveau 1 — basis | Niveau 2 — toepassen |
|---|---|---|
| `breuken` | *"Welke breuk is groter: 3/5 of 2/3?"* → 2/3 / 3/5 / ze zijn even groot / dat kun je niet weten | Ongelijknamig. *"2/3 − 1/4 = ?"* → 5/12 / 1/2 / 1/12 / 3/7 (bestaande vraag `breuken-3a`) |
| `procenten` | *"Hoeveel is 10% van 80?"* → 8 / 6 / 10 / 12 (bestaand) | Deel → procent. *"Van de 25 kinderen komen er 15 op de fiets. Hoeveel procent is dat?"* → 60% / 15% / 40% / 75% |
| `verhoudingen` | *"Voor 4 pannenkoeken heb je 2 eieren nodig. Hoeveel eieren heb je nodig voor 12 pannenkoeken?"* → 6 / 4 / 8 / 24 | Schaal. *"De kaart heeft schaal 1 : 50.000. Op de kaart is een weg 3 cm. Hoe lang is die weg echt?"* → 1,5 km / 15 km / 150 m / 5 km |
| `maten` | *"Hoeveel gram is 2,5 kg?"* → 2500 / 250 / 25 / 25.000 | Inhoud. *"Een aquarium is 50 cm lang, 30 cm breed en 40 cm hoog. Hoeveel liter water past erin?"* → 60 / 600 / 6 / 120 |
| `spelling` | Leenwoord/trema. *"Welk woord is goed geschreven?"* → ruïne / ruine / ruïene / ruinne | Tussenletter. *"Welk woord is goed geschreven?"* → pannenkoek / pannekoek / pannenkoeck / pannekoeck |
| `werkwoordtijden` | *"Welke vorm is goed? 'Gisteren … wij de hele middag.' (praten)"* → praatten / praten / praatte / praatden | Bijvoeglijk voltooid deelwoord / inversie. *"Welke vorm is goed? '… jij morgen twaalf?' (worden)"* → Word / Wordt / Wort / Worden |
| `woordenschat` | Synoniem van een schooltaalwoord (bestaande vragen) | Betekenis uit de context in een Doorstroomtoets-achtige zin (bestaande vragen) |
| `hoofdgedachte` | Onderwerp van een tekst (bestaand) | Hoofdgedachte/samenvatting kiezen (bestaand) |

**Reserve voor groep 8** (bestaande ids, niet in de standaardset om binnen ~15 min te blijven): `tafels`, `woordsoorten`, `tekstbegrip`, `oorzaakgevolg`. **Advies:** voeg voor het Doorstroomtoets-domein *verbanden* (15-20% van de toets) een nieuw concept toe, bv. `g8-tabellen-grafieken` · "Tabellen en grafieken lezen" · rekenen · `tabellen-grafieken` — niveau 1: een waarde aflezen uit een tabel; niveau 2: een verschil/trend of gemiddelde uit een staaf- of lijndiagram. Dat kan als 9e concept of als wissel voor `maten`.

---

## 8. Twijfels en open punten

1. **De check wordt het hele jaar gedaan, niet alleen medio.** In september "kent" een groep-4-kind niveau 2 nog niet. Het niveau-ontwerp vangt dat op (niveau 1 = stof van vorig jaar), maar het oordeel "Bijna daar" is in september normaal. Advies: in de uitslag-tekst de maand meewegen ("in het begin van groep 5 is dit heel normaal").
2. **Medio-stof is een schatting.** SLO beschrijft alleen **eind**-doelen per groep; wat halverwege al af is, heb ik afgeleid (tussen eind X−1 en eind X) en gecheckt met methode-volgordes. Methodes verschillen: tafels 3/4 (groep 4 of 5), de klok (groep 3 of 4), procenten (medio of eind groep 7), werkwoordspelling (sommige methodes beginnen in groep 5, de CED-leerlijn in groep 6).
3. **Groep 3 is geen begrijpend lezen.** De twee lees-concepten meten technisch lezen/letters. Cito toetst begrijpend lezen pas vanaf M4. De voorleesknop moet bij lees-vragen de tekst zelf níet voorlezen.
4. **Plaatjes nodig voor groep 3-4** (stippen, munten, klok). Met alleen tekst wordt een klokvraag een leesvraag. Eenvoudige eigen SVG's volstaan. (De regel "geen eigen/AI-plaatjes" gaat over examens, niet over dit soort rekenplaatjes.)
5. **Ontbrekende leerpaden:** er is geen algemeen pad voor getallen tot 100/1000 (getalbegrip); groep 4 verwijst nu naar het nieuwkomers-pad `rekenen-tot-100-nieuwkomers`. Er is ook geen pad voor spelling-categorieën groep 4 (nu `spelling-ei-ij-au-ou`, dat maar een deel dekt), geen pad voor geld groep 3-4 (`geld-rekenen` is groep 5-8) en geen pad voor zinnetjes lezen groep 3 los van `taal-leren-lezen-g3`. Voor groep 5 is `begrijpend-lezen-strategie` vrij zwaar; `korte-teksten-snappen-g4` is een alternatief voor zwakke lezers.
6. **Dubbele leerpaden:** in groep 3 wijzen 2 rekenconcepten naar `getallen-tot-20-po` en 3 lees/taal-concepten naar `taal-leren-lezen-g3`. Dat is inhoudelijk juist, maar het advies "oefen dit" herhaalt zich dan. Eventueel ontdubbelen in de uitslag.
7. **Id-hergebruik groep 8:** de bestaande `spelling` heet "Spelling & werkwoorden" maar het pad gaat over niet-werkwoorden; naast `werkwoordtijden` is dat dubbel. Advies: label wijzigen naar "Spelling (woorden)" zodra de vaste set alleen nog als groep-8-set dient.
8. **Groep 8 dekt "verbanden" niet** (zie §7, advies `g8-tabellen-grafieken`).
9. **Grammatica en de Doorstroomtoets:** de Doorstroomtoets moet verplicht *Lezen* en het subdomein *Taalverzorging* (spelling, werkwoordspelling, interpunctie) toetsen; grammaticabegrippen (woordsoorten) horen bij de *Begrippenlijst* en zijn daar niet verplicht. Woordsoorten staan daarom als volwaardig concept in groep 4-6 en alleen als reserve in groep 8.

---

## 9. Bronnen

**Primair (SLO / referentieniveaus / leerlingvolgsysteem)**
- SLO — *Tussendoelen rekenen-wiskunde voor het primair onderwijs* (2017), doelen per domein voor eind groep 2 t/m 8 + concretisering 1S: https://www.slo.nl/publish/pages/3176/tussendoelen-rekenen-wiskunde-po-2017_1.pdf · overzichtspagina https://www.slo.nl/@4587/tussendoelen-rekenen/
- SLO — *Leerstoflijnen begrippenlijst en taalverzorging beschreven* (woordsoorten, grammaticale begrippen en spellingcategorieën per groep 1/2 · 3/4 · 5/6 · 7/8, gekoppeld aan 1F/1S): https://www.slo.nl/publish/pages/2926/leerstoflijnen-begrippenlijst-taalverzorging.pdf
- SLO — *Leerstoflijnen lezen beschreven* (karakteristiek lezen en tekstkenmerken groep 3/4, 5/6, 7/8): https://www.slo.nl/publish/pages/2777/leerstoflijnen-lezen-beschreven.pdf
- SLO — TULE Nederlands kerndoel 11 (taalbeschouwing; persoonsvorm/onderwerp vanaf groep 5/6): https://www.slo.nl/thema/meer/tule/nederlands/kerndoel-11/
- SLO — *Concretisering referentieniveaus rekenen 1F/1S*: https://www.slo.nl/publish/pages/2834/concretisering-referentieniveaus-rekenen-1f-1s.pdf
- Rijksoverheid — Referentieniveaus taal en rekenen (1F/1S/2F eind basisschool): https://www.rijksoverheid.nl/onderwerpen/basisvaardigheden/referentieniveaus-taal-en-rekenen
- Expertisecentrum Nederlands — *Overzicht tussendoelen gevorderde geletterdheid* (groep 4-8: spelling, begrijpend lezen, leeswoordenschat, reflectie op taal; midden- en bovenbouw): https://dyslexiecentraal.nl/sites/default/files/media/document/2019-08/overzicht_tussendoelen_gevorderde_geletterdheid.pdf
- Cito — Beoordeling LVS Begrijpend lezen 3.0 groep 4 (toetsen M4/E4; begrijpend lezen vanaf medio groep 4): https://cito.nl/media/d2rh0wwp/37-cito-lvs-begrijpend-lezen-3-0-gr-4-toelichting-beoordeling.pdf

**Ondersteunend (methode- en leerlijn-volgordes)**
- CED-Groep — *Spelling langs de lijn* (spellingcategorieën per groep, gekoppeld aan Cito-categorieën M3 t/m M8 en werkwoordspelling E7/M8): https://bestanden.cedgroep.nl/production/Webwinkel/Downloads/SpellingLangsDeLijn_leerlijnen.pdf
- Zwijsen — Veilig leren lezen, kern 6 (laatste letters van groep 3, rond kerst): https://www.zwijsen.nl/leren-lezen/mijn-kind-leert-lezen-kern-6/ · AVI M3/E3: https://www.zwijsen.nl/leren-lezen/avi-niveau-hoe-wordt-het-getest/
- Wij-leren — Referentieniveaus en de verdeling van domeinen in de Doorstroomtoets (getallen 30-40%, verhoudingen 20-30%, meten & meetkunde 20-30%, verbanden 15-20%): https://wij-leren.nl/referentieniveaus-eindtoets-basisonderwijs.php
- Taaloefenen.nl / taal-oefenen.nl — woordsoorten per groep (groep 4: lidwoord, zelfstandig naamwoord, werkwoord): https://www.taaloefenen.nl/woordsoorten.html
