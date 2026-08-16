# 🎡 Interactief Park — Masterplan (alle leeftijden, alle leerpaden)

> Mark 16 aug 2026: *"ik wil uiteindelijk een soort interactief park voor alle
> leeftijden, alle leerpaden, net als de piramide. Maar eerst een overall plan
> zodat we alles in één keer goed doen."*
> Dit is dat plan (eerste versie, om samen te verfijnen). **Nog niet breed
> bouwen** — eerst het raamwerk + Mark's go.

## 1. De visie
Het park is niet langer decor met een paar leermomenten, maar een **interactieve
leerwereld**: overal waar een kind loopt staat iets dat je kunt aanraken,
veranderen en begrijpen — en dat je met één stap naar de bijbehorende les brengt.
De **piramide is de blauwdruk** (16 aug): je komt erbij, ziet zwevende maten +
formule + inhoud die wisselen, kunt hem groter/kleiner maken (de getallen
bewegen live mee), telt de blokjes aan de voet, en loopt door een poort naar de
les. Dat gevoel willen we voor het hele park, voor elke leeftijd en elk vak.

## 2. Het principe: één keer goed = een generiek raamwerk
De valkuil is: elk object apart bouwen (zoals nu piramide/kubus/kegel/bol met
losse code). **Dat schaalt niet naar honderden leerpaden.** Daarom bouwen we
één keer een **generiek "interactief leerobject"-raamwerk**, en voegen daarna
objecten toe met **data, niet met code**.

Een interactief leerobject = een configuratie:
```
{
  id, vorm/model,                    // hoe het eruitziet (procedureel of preset)
  leerpadId,                         // waar de poort heen leidt (moet bestaan)
  niveau: [groep/klas],              // voor welke leeftijden relevant
  zwevendeRegels: [ ... ],           // wat er cyclend boven zweeft (maten/feiten/formule)
  interactie: {                      // OPTIONEEL — de "schuif" van de piramide
    parameter, min, max, stap,
    bereken: (p) => waarde,          // bv. inhoud = f(maat)
    toon: (p) => regels,             // labels die live meebewegen
    aftelbaar: true|false            // blokjes/rasters om te tellen
  },
  praatje, weetje                    // wat je maatje vertelt (bestaat al)
}
```
Zo is een nieuw object toevoegen = een regel data + (soms) een klein 3D-model,
niet een nieuwe feature.

## 3. Drie soorten interactie (niet alles hoeft een schuif)
Niet elk leerpad past bij een manipuleerbaar object. Daarom drie niveaus, oplopend
in bouwkosten — samen dekken ze **alle** leerpaden:

| Tier | Wat | Voorbeeld | Bouwkosten |
|---|---|---|---|
| **A · Manipuleerbaar** | schuif/knoppen + live getallen + aftelbaar (de piramide) | inhoud-vormen, breuken-taart, procenten-balk, hoek-meter, weegschaal, klok | hoog (per type) |
| **B · Poort** | loop erdoor → leerpad opent (magische poorten) | elk object → zijn les (dieren→dierenklassen, molen→water, standbeeld→bekende NL'ers) | laag (data) |
| **C · Vertel** | je maatje vertelt + link (bestaat al) | alles wat geen A of B is | nihil (bestaat) |

De meeste leerpaden krijgen **B of C** (goedkoop, brede dekking); een select
groepje krijgt **A** (de "wow", waar manipuleren echt iets leert). Zie
[[project_studiebol_magische_poorten]] (poorten-plan, tier B).

## 4. Dekking per leeftijd/vak (voorbeelden, niet uitputtend)
- **Kleuters/onderbouw** (groep 1-4): tellen (aftelbare blokjes!), vormen, klok,
  letters/rijmen → simpele A/B-objecten, veel visueel.
- **Groep 6-8 (Cito-kern, primair)**: rekenen (breuken/procenten/verhoudingen/
  inhoud/oppervlakte = tier A schuiven), begrijpend lezen/taal (tier B poorten),
  studievaardigheden (kompas→kaartlezen, klok→tijd).
- **VO onderbouw/examens**: meetkunde (Pythagoras, ruimtemeetkunde = A), natuur/
  scheikunde (tier B/C), examens (B).
- **Alle leeftijden**: het park schaalt de zichtbare objecten op niveau (groep-
  filter bestaat al bij "klaargezet"), zodat een kleuter andere objecten prominent
  ziet dan een examenleerling.

## 5. Techniek — wat we één keer bouwen
1. **`InteractiefObject`-component** (generiek): leest een config, rendert het
   model + de zwevende regels (cyclend, drei Html) + optioneel de aftelbaar-visual.
2. **Nabijheids-HUD** (bestaat al voor de piramide): verschijnt als je bij/naar
   een A-object staat; toont de juiste knoppen (schuif/±) + poort. Generiek maken.
3. **Object-registry** (data): `parkLeerobjecten.js` — id → config. Nieuw object =
   hier een regel. Harde regel: `leerpadId` moet in `pathManifest` bestaan.
4. **Poort-mechaniek** (tier B, uit het poorten-plan): loop-door-trigger + label.
5. **Meten**: `park_object_interactie`, `park_naar_leren` (via=object) — zodat het
   dagrapport ziet welke objecten leren opleveren.

## 6. Fasering (Mark's go per fase)
- **Fase 0 — dit plan vaststellen** (nu): keuzes hieronder beslissen.
- **Fase 1 — raamwerk**: `InteractiefObject` + registry + generieke nabijheids-HUD;
  de bestaande piramide/kubus/kegel/bol/halve-bol migreren naar de registry (bewijs
  dat het generiek werkt, zonder functieverlies).
- **Fase 2 — poorten (tier B) breed**: elk park-object een poort naar zijn les
  (grote dekking, lage kosten). = het magische-poorten-plan.
- **Fase 3 — nieuwe A-objecten** op rang van leerwaarde: breuken-taart, procenten-
  balk, klok, weegschaal, hoek-meter, zwembad (liters!) …
- **Fase 4 — leeftijd-laag + polish**: objecten tonen op niveau; "ontdek-teller"
  (welke objecten heb je al onderzocht) op je persoonlijke pagina.

## 7. Open keuzes voor Mark (fase 0)
1. **Breedte vs diepte**: eerst overal een poort (tier B, brede dekking) of eerst
   meer A-"wow"-objecten (diepte op een paar)?
2. **Waar begint tier A** — alleen rekenen/meetkunde (waar manipuleren logisch is),
   of ook taal/andere vakken forceren?
3. **Park mooi houden**: hoeveel interactieve objecten tegelijk zichtbaar voordat
   het druk wordt? (Filter op niveau/ontdek-status?)
4. **Timing t.o.v. groei**: het park is "binden", niet "bereik" (de bottleneck).
   Doen we dit gefaseerd náást groei-werk, of als winter-project vóór de Cito-piek?

## 8. Waarom dit klopt
- **Eén raamwerk = schaalbaar**: honderd leerpaden worden data, geen honderd features.
- **Drie tiers = volledige dekking** zonder alles even duur te bouwen.
- **Bouwt op wat er staat**: piramide-patroon, gids/leermomenten, klaargezet-groep-
  filter, sterretjes-lijstje — dit lijmt ze tot één leerwereld.
- **Meetbaar**: elke interactie voedt de park→leren-funnel in het dagrapport.

Zie ook [[project_studiebol_magische_poorten]], [[project_studiebol_park_benoembaar]],
[[feedback_park_doel_binden_leren]] (park moet mooi + binden blijven).
