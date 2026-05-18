---
name: Studiebol — universele leerconcepten boven boek-specifieke hoofdstukken
description: Strategisch idee van Mark (2026-04-27): leerpaden bouwen per wiskundig concept (parabolen, pythagoras, breuken, ...), niet per boek-hoofdstuk. Eén leerpad bedient álle uitgevers/methodes/edities tegelijk.
type: project
originSessionId: 82c346ec-655b-4577-a515-24689d3060b1
---
**Het inzicht (Mark, 2026-04-27)**: er zijn enorm veel wiskundeboeken (Getal & Ruimte, Moderne Wiskunde, Nieuwe Wiskunde, Wageningse Methode, ...) in tientallen edities — maar de **wiskundige basis is overal hetzelfde**. Parabolen blijven parabolen. Pythagoras werkt in elk boek hetzelfde. Procenten zijn procenten.

**Strategie**: bouw leerpaden per **concept**, niet per **boek-hoofdstuk**. Eén leerpad voor 'parabolen' bedient G&R H10 + Moderne Wiskunde H8 + welk boek dan ook waar parabolen voorkomen. Wat per boek verschilt (paragraaf-volgorde, voorbeelden, nadruk) lossen we op met een **mapping-laag**, niet met duplicate leerpaden.

**Architectuur-implicaties**:

1. **Leerpaden blijven concept-gericht** (zoals nu): `parabolen`, `pythagoras`, `kwadraten-wortels`, `ruimtemeetkunde`, `kwadratische-vergelijkingen`. Universeel, methode-onafhankelijk.

2. **Mapping-laag** (toekomst): nieuwe data-structuur `bookMappings.js`:
   ```
   {
     "gr-flex-deel-2": {
       "H8": ["ruimtemeetkunde"],
       "H7": ["kwadratische-vergelijkingen"],
       "H10": ["parabolen", "kwadratische-vergelijkingen"]
     },
     "moderne-wiskunde-2": {
       "H5": ["pythagoras"],
       ...
     }
   }
   ```
   Een leerling kiest haar boek + hoofdstuk → systeem toont relevante leerpad(en).

3. **AI-vragen-pool wordt vanzelf gedeeld**: `ai_question_pool` (Supabase) is al methode-onafhankelijk. Een vraag over 'parabool nulpunten' werkt voor élk boek waar dat onderwerp speelt. Met een `topicId` op vragen wordt de match exact (zie `feedback_studiebol_curriculum_visie.md`).

4. **Concept-tree** als grof skelet voor wiskunde-basis (~20 paden dekken alles):
   - Algebra: variabelen, lineaire vergelijkingen, kwadratische vergelijkingen ✅, wortels ✅
   - Meetkunde: hoeken/driehoeken, oppervlakte/omtrek ✅, inhoud (3D) ✅, Pythagoras ✅, vergrotingsfactor ✅
   - Functies: lineaire, kwadratische (parabolen) ✅, exponentiële
   - Statistiek: gemiddelde/modus/mediaan, grafieken, kansen
   - Rekenen: breuken, procenten, kommagetallen, machten

**Why:** schaalbaarheid. Studiebol moet alle Nederlandse leerlingen kunnen bedienen, niet alleen de G&R-gebruikers. Per boek + editie + jaar een eigen leerpad bouwen is niet vol te houden. Concept-leerpaden blijven actueel ondanks methode-wisselingen op scholen.

**How to apply:**
- Bij toevoegen van een nieuw leerpad: kies een **conceptnaam** (`parabolen`, niet `gr-flex-h10`).
- Wanneer een gebruiker een specifiek boek-hoofdstuk noemt: niet automatisch een nieuwe file aanmaken, maar eerst checken of het concept al gedekt is in een bestaand leerpad. Zo niet, voeg het concept toe.
- Bij het verbinden van een toets aan uitleg: **`topicId` op de vraag** wijst naar concept-leerpad-stap, niet naar boek-paragraaf.
- Op termijn: bouw `src/learnPaths/bookMappings.js` met methode → hoofdstuk → leerpad-id-mapping. Daarmee kan op de homepage een 'kies je boek + hoofdstuk'-keuzepad bestaan dat automatisch de juiste leerpaden aanbiedt.
