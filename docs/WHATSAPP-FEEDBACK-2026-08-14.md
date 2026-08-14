# WhatsApp-feedback 14 aug 2026 (Leerkwartier tips + Deianera)

Status-blok — bijwerken per fix:

| # | Punt | Bron | Status |
|---|------|------|--------|
| 1 | Groep 1 krijgt "Onregelmatige werkwoorden (irregular verbs)" aangeboden in "Dit staat voor jou klaar" — filtering moet strikt op eigen groep | Mark 21:56/21:57 | ✅ v310 — klaarzet-blok filtert herhaal-advies + zwakke records nu op eigen niveau (MijnPagina `klaargezet`); getest met vervuild testprofiel |
| 2 | Groep 1: Rekenen én Taal & lezen = "Hier bouwen we aan" → kleuter-oefenstof bouwen ("Bouw nu!") | Mark 21:53/21:54 | ✅ v310 — 2 nieuwe kleuterpaden: `tellen-kleuters-po` (🧸 Tellen en vormen, 5 delen incl. Tel-feestje jong-modus) + `rijmen-letters-kleuters-po` (🎈 Rijmen en letters, 5 delen, 25 checks) |
| 3 | Stof en advies aanpassen op Mark's leerstof-opbouw groep 1–8 (volledige tekst hieronder) | Mark 21:50/21:51 | ✅ v310 — vakkenPerGroep.js: Engels nu v.a. groep 5, topografie-lijn NL→NL/EU→EU→wereld, klokkijken/geld groep 4, werkwoordspelling-opbouw 6-7, notities per groep×vak herschreven + groep 1-notities |
| 4 | Doel-blok "Wat moet ik kennen in groep X?" moet bovenaan /mijn | Mark 21:48 | ✅ v310 — JOUW DOEL staat nu als eerste blok, vóór de Vandaag-kaart |
| 5 | Charley = emoji-icoontje → echte Charley-foto ("mijn eigen Charley, foto van de echte") | Mark 21:55 | ✅ v310 — MaatjePocket toont nu `maatjes/charley-echt.jpg` (echte foto) i.p.v. 🐶 |
| 6 | Chip "Klas 8" → "Groep 8" (er bestaat geen klas 8 op de basisschool) | Mark 13 aug 20:26 | ✅ was al gefixt in v296 (13 aug 20:27) — foto was v295 |
| 7 | "Achtergrond veranderen werkt niet" (thema's v280?) — onderzoeken, evt. repro vragen | Deianera 19:02 | 🔍 niet reproduceerbaar: wissel getest op dev (kind-weergave, Bos) → werkt. Hypothese: zij tikte het vergrendelde 🔒 Goud-thema (reageert bewust niet) óf oude PWA-cache. Repro-vraag aan Mark/Deianera nodig: welk thema, welke pagina, ziet ze de gele rand om haar keuze? |

## Mark's leerstof-opbouw (21:50) — bron voor vakkenPerGroep.js

> In het Nederlandse basisonderwijs zijn er geen wettelijk voorgeschreven vakken, maar 58 kerndoelen verdeeld over leergebieden. Scholen vertalen die naar vakken.

**Groep 1–2 (kleuters)** — spelend leren, nog geen aparte vakken
- Beginnende geletterdheid: rijmen, klanken horen, letters herkennen, voorlezen
- Beginnende gecijferdheid: tellen tot ~20, hoeveelheden, vormen, meten, ruimtelijk inzicht
- Mondelinge taal en woordenschat
- Grove en fijne motoriek, schrijfpatronen
- Sociaal-emotionele ontwikkeling, spel en samenwerken
- Wereldoriëntatie via thema's, muziek, drama, beeldende vorming, gym

**Groep 3**
- Technisch lezen (aanvankelijk lezen, AVI-niveaus)
- Aanvankelijk schrijven (letters vormen)
- Spelling: eerste categorieën (klankzuivere woorden)
- Rekenen tot 20, later tot 100; splitsen, erbij/eraf
- Wereldoriëntatie thematisch, gym, muziek, tekenen, sociaal-emotioneel

**Groep 4**
- Vlot lezen, start begrijpend lezen
- Spelling: open/gesloten lettergrepen, -d/-t, samenstellingen
- Tafels 1 t/m 5 en 10; rekenen tot 100
- Klokkijken (hele/halve uren, kwartieren), geld, meten
- Verbonden schrift, verkeer, creatieve vakken

**Groep 5** — vakken worden herkenbaarder
- Begrijpend lezen als vak, studerend lezen begint
- Spelling uitgebreider; woordsoorten (zelfstandig naamwoord, werkwoord)
- Alle tafels en deeltafels, cijferend rekenen tot 1000, breuken kennismaking
- Meten (lengte, gewicht, inhoud), digitale tijd
- Aardrijkskunde, geschiedenis, natuur & techniek als losse vakken; topografie Nederland
- Engels (op veel scholen vanaf hier)

**Groep 6**
- Werkwoordspelling: tegenwoordige tijd, start verleden tijd
- Zinsontleding: persoonsvorm, onderwerp, gezegde
- Breuken, kommagetallen, procenten (kennismaking), staartdeling
- Verhoudingen, oppervlakte en omtrek
- Topografie Nederland/Europa, geschiedenis via tijdvakken
- Engels, begrijpend lezen, presenteren en spreekbeurten

**Groep 7**
- Werkwoordspelling compleet (tt, vt, voltooid deelwoord)
- Ontleden: lijdend voorwerp, meewerkend voorwerp, woordsoorten
- Breuken–procenten–kommagetallen omrekenen, verhoudingstabellen
- Inhoud, oppervlakte, schaal, grafieken en tabellen
- Topografie Europa, wereldoriëntatie verdiepend
- Verkeersexamen, Engels, studievaardigheden

**Groep 8**
- Herhaling en verdieping van alle leerlijnen; doorstroomtoets in februari
- Grote getallen, negatieve getallen, procenten en rente, samengestelde sommen
- Studievaardigheden: informatie zoeken, kaartlezen, grafieken interpreteren
- Topografie wereld, actualiteit, burgerschap
- Engels (basisgesprekken, woordenschat), werkstuk, presentatie, musical
- Huiswerk en plannen als voorbereiding op de brugklas

> Let op (Mark's bron): kerndoelen NL en rekenen-wiskunde zijn recent herzien; methodes schuiven soms iets.

## Context foto's
- 21:48 (3 foto's): /mijn van Mark als groep 1 — JOUW DOEL-blok met "Wat moet ik kennen in groep 1?" staat onder Vandaag-kaart; moet bovenaan.
- 21:53: uitklap toont Rekenen + Taal & lezen beide "🔨 Hier bouwen we aan — oefenstof komt eraan."
- 21:55: Charley-pagina met 🐶-emoji als kop.
- 21:56: "GROEP 1 — Dit staat voor jou klaar: 🇬🇧 Onregelmatige werkwoorden (irregular verbs) — Tijd om te herhalen".
- 13 aug 20:26: Brian /mijn (v295) chip "Klas 8 ✏️".

## Deianera
- 18:47 kreeg koppelcode 2HAMJQ ("Koppel met ouder"-flow).
- 19:02: "Achtergrond veranderen werkt niet." Vermoedelijk thema's (v280, mijnThema.js) — mogelijk op ouder-weergave of ander device. Repro nog niet bekend.
