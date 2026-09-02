# 🧭 Park — Samenhang-plan (2 sep 2026)

Aanleiding (Mark, 2 sep): *"alles werkt maar ook weer half; de bots zijn suf;
wat kan ik waar leren is onduidelijk; de poortjes naar de les."* Drie parallelle
reviews (leraar · kind van 10 · developer) op de 13.500 regels park-code, mét
de echte cijfers van 30 dagen (huishouden gefilterd):

| Stap in het park | 30 dagen | apparaten |
|---|---|---|
| park geopend | 158 | 35 |
| leer-uitnodiging (timer-popup) getoond | 48 | 22 |
| maatje-chat geopend | 41 | 10 |
| naar een les gegaan | 26 | 10 |
| gids-praatje | 18 | 6 |
| leermoment-paneel | 5 | 3 |
| door een poort | **1** | 1 |

Het park bindt (158 keer open), maar de leer-ingangen werken niet. Alle drie
de kijkers kwamen los van elkaar op hetzelfde: **te veel losse systemen, geen
vraag, geen rode draad.**

---

## 1. Wat de drie kijkers zagen

**Kind (10):** "een speeltuin met dertig losse bordjes en een maatje dat
reclame maakt." Niets zegt wat je vandaag moet doen. De maatje-ballonnen zijn
niet klikbaar, verdwijnen na 3,8 s en gaan over de kalender ("Eerst een
kwartier leren, daarna voetbal?"), niet over wat je doet. De poort flitst en
gooit je na 1,4 s het park uit, zonder vraag of cadeau → "voelt als een
valkuil, dus mijd ik ze." De gids-toast en het paneel beloven twee keer
hetzelfde ("▶ Leer er meer over" → weer "▶ Leer er meer over").

**Leraar:** vrijwel elk object is *monoloog + link*, geen leerstap; alleen de
vormen en de kramen stellen een vraag. Vier vormen sturen een groep-7-kind
naar een vwo-pad (`ruimtemeetkunde`), de boom naar klas 1-2, de weegschaal
naar groep 7-8 terwijl hij in de groep-4-band staat. Poorten zitten alléén op
de 12 brugklas-landmarks, dus niet op de route van groep 6-8 (de doelgroep).
Het takenbord "taak 1 van 8 ✓" (Mark-wens 23 aug) bestaat als code
(`parkTaken.js`) maar wordt nergens gerenderd. De AI-chat kent geen enkel
leerobject: op "wat kan ik hier leren?" kan hij niets concreets zeggen.

**Developer:** vier praat-systemen (gids, maatje-wolkje, bezoekers, AI-chat)
en twaalf verschillende wegen naar een les voor hetzelfde object. Drie
verschillende groep-indelingen (parkTaken, leerpadLint, wandelRoutes) en twee
verschillende antwoorden op "wat moet ik nu leren" (recommendNextTopic vs de
wandel-kiezer). Poorten en gids staan **uit in bouw-modus**, en een vers park
start in bouw-modus. Vijf features zijn in 30 dagen door één apparaat
(Mark) gebruikt: rekenvraag, zeppelin, arena, autobouw, praatje.

---

## 2. Het concept — één zin

> **Elke plek in het park stelt één vraag. Je maatje stelt 'm, de poort geeft
> het antwoord, het bord houdt bij wat je al kunt.**

Uitgeschreven als kind-loop: *"Charley geeft me elke dag een paar opdrachten
in het park; bij elk ding stelt hij één vraag; snap ik 't niet, dan loop ik
door de poort naar de uitleg; klaar = vinkje op mijn bord en munten."*

Rollen (en niets anders):
- **Object** = de plek waar één concreet leerdoel zichtbaar is (klok, zwembad, station).
- **Maatje** = de juf die vraagt. Praat over de plek waar je staat, niet over de kalender.
- **Poort** = de deur naar het "waarom". Nooit een luik: eerst een kaart met de vraag en "▶ Ga mee / ✕ Later".
- **Bord** = "Mijn taken 3/8" — wat kan ik waar leren, in de band van mijn groep.
- **Leerpad** = de uitleg + oefening; terug in het park staat de ✓.

Rode draad blijft: park = binden + verwondering + concreet maken
(`feedback_park_doel_binden_leren`). De toets win je in de leerpaden.

---

## 3. Bouwplan

### Sprint 1 — direct zichtbaar (S, deze sessie)
1. **Poort = uitnodiging, geen valkuil.** Flits → kaart met object, vraag,
   "▶ Ga mee" / "✕ Later". Poorten en gids ook aan in bouw-modus.
   `ZookwartierGame.jsx` poort-handler, `ZooScene.jsx` PoortWatcher/GidsWatcher.
2. **Gids: één zin, één knop.** Toast opent direct de les, geen dubbel paneel.
3. **Maatje weet waar je staat.** GidsWatcher-uitkomst als `hier`-context →
   wolkje ("Kijk, de klokkentoren! Hoe laat is het?"), klikbaar, én in de
   AI-chat-prompt + starter "Wat is dit?".
4. **Takenbord live.** "🗺️ Taken 3/8" in de HUD → lijst per band met ✓/○,
   tik = uitleg-kaart. `parkTaken.js` renderen.

### Sprint 2 — één bron van waarheid (M)
5. `PARK_LEERMOMENTEN` krijgt `band` + `vak` + `vraag` per object; taferelen,
   vormen en economie erin; `LEERTRAIL`, `POORT_ASSETS`, wandel-pool worden
   afgeleid. `parkTaken.js` sterft als aparte indeling.
6. **Niveau-fixes:** vormen/boom/achtbaan/zweefmolen/weegschaal/telraam naar
   PO-paden (`leerpadIdJong` bestaat al) of band verplaatsen.
7. **Eén kiezer `volgendeLeerstap()`** (klaargezet → herhaling → zwak → volgende
   in band) voor leer-invite, chat, wolkje én wandeling. Leer-invite-timer weg.
8. **Poorten op de groene route** (groep 6-8), niet alleen brugklas.

### Sprint 3 — het kwartier (M/L)
9. Wandeling = het kwartier: 3 stops → 3 vragen → dagdoel + munten;
   voortgang in `owned` (Supabase) i.p.v. localStorage.
10. Spawn bij de dichtstbijzijnde open taak + gids-zin "loop naar …".
11. Meten: `park_les_afgemaakt` bij terugkeer; `via` op de vorm-HUD.

### Schrappen / bevriezen
- Bezoeker-dialoog (2× in 30 dagen) → uit.
- Arena, zeppelin, autobouw: laten staan, niet uitbreiden.
- Vier praat-systemen → één `hier`-context voedt gids, wolkje en chat.

---

## 4. Meetlat
Over 30 dagen: park_naar_leren ≥ 25% van park_open (nu 16%), park_poort_door
≥ 20 apparaten (nu 1), park_leermoment ≥ 30 (nu 5), en het nieuwe
`park_les_afgemaakt` > 0.
