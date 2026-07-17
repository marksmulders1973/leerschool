# Park-review 4 agents — 17 juli 2026

Vier review-agents (2 rondes van 2) hebben het 3D-parkspel doorgelicht: bugs, performance, kind-UX en leerwaarde. Read-only; niets gewijzigd. Scope-afspraak: biologie-lescontent niet geopend (alleen ID-bestaan van deeplinks gecheckt).

**Cijfers:** kind-ervaring **7,5/10** · park-als-leermachine **7,5/10** · robuustheid: degelijk, risico's in de randen · performance: gezonde fundering, props-laag is de fps-moordenaar.

---

## 🔴 Top-prioriteiten (alle vier de agents samen)

1. **ParkBezoek (vriend-bezoek) camera kapot** — hint belooft "sleep om te draaien" maar `inputRef` mist `cam`; camera staat vast. Fix: `followCam={true}` meegeven of camera-laag overnemen. Ook: joystick verschijnt op desktop (mist COARSE_POINTER-check) en `migreerBlokken` draait niet (vriend-park toont geen oud-formaat blokken). *(bugs + UX, ParkBezoek.jsx:50-136)*
2. **Draw-call-explosie props-laag** — rails (8 meshes/stuk), hekken (7), padtegels los → ~1.500-2.000 draw calls in een normaal park, ×2 door schaduw. Fix: instancedMesh per prop-soort (patroon van BlokkenLaag), top-3: RailTile, FencePanel, PathTile. *(ParkProps.jsx:1727/1076/1514)*
3. **Schaduw elke frame opnieuw** — DayNight verplaatst de zon per frame → volledige 2048²-shadowpass per frame. Fix: zon 1×/2-5s + shadowMap.autoUpdate=false; mapSize 1024. *(ParkProps.jsx:29-61)*
4. **GLB's ongecomprimeerd: ~20 MB eerste load** (dieren ~2 MB/stuk). Fix: `gltf-transform optimize --compress meshopt --texture-compress webp` → 60-85% kleiner. *(public/models/zoo)*
5. **Gids valt stil op Chrome bij lange praatjes** (>15s netwerk-stem-bug; spraakTekst.js omzeilt dit al per-zin, parkGids.spreek niet) + **iOS praat ongevraagd niet** (geen user-gesture) terwijl spreek() true meldt. *(parkGids.js:55-64)*
6. **Trein stopt voorgoed bij niet-gesloten spoor** — sRef geklemd op total, nooit reset; RideCamera hangt mee. Fix: pendelen of reset naar 0. *(ParkProps.jsx:1813)*
7. **Buddy-chat kent de hint-regel niet** — api/buddy-chat.js mist het "nooit het antwoord geven"-blok dat tutor-chat wél heeft; drukste park-ingang. Fix: één alinea in de system-prompt (~15 min). *(didactiek)*
8. **Onboarding eindigt in kale dropdown** — welkomsthint wijst naar 🦊 Dieren → native `<select>` zonder plaatjes, terwijl blokken wél knoppen kregen ("dropdown was onvindbaar", eigen les). Fix: emoji-knoppenrij voor eerste ~6 dieren. *(ZookwartierGame.jsx:1966)*

## 🟠 P1/MIDDEL

- **Layout-item zonder `cell` = permanente crash-loop** via ErrorBoundary (grid.js:74 + ZooScene-loops); filter bij inladen + guards.
- **"stap(pen)/st."-jargon in UI** overtreedt eigen copy-regel: "nog 3 st.", "nog 12 stappen leren" (ZookwartierGame:1946/2010, BuddyPicker:88/123, unlocks.js:26-42). Eén kindwoord kiezen ("vraagjes goed").
- **Kopen zonder bevestiging + sticky koop-modus** → onbedoeld 2-3 dieren extra (ZookwartierGame:802-824); flits per plaatsing.
- **"Goed verzorgd!"-compliment is dode code** (reward.goedVerzorgd wordt nooit gezet); weggelopen-dier-melding te kort en noemt dier niet (ZookwartierGame:649/1430).
- **"Leer een kwartier om te sparen!" loos als kwartier al geclaimd** — tekst laten meekijken naar last_kwartier_date (zooEconomy.js:142).
- **Hulp-teksten wijzen naar verdwenen knoppen** (⛰️/💧/♻️ "bovenin" → zit nu in ☰) (ZookwartierGame:2235).
- **Re-render-storm**: ~50 useState in ZookwartierGame trekt hele scene mee; React.memo op PlacedItem/BlokkenLaag/Terrain + useMemo op bezet/trekpleisters.
- **Rekenvraag gok-lek**: 3 opties + onbeperkt proberen mét bonus = eliminatie loont; botst ook met PARK-VISIE regel 5 (geen munten voor antwoorden in het park). Na 2e fout vergrendelen tot tutor geopend.
- **Autosave-flush ontbreekt** bij park verlaten <2s na actie (ZookwartierGame:659) — plaatsing weg.
- Inline `new BoxGeometry` in JSX-args (ZooScene:145/241) · setState in useFrame voor bubbels · Vector3-allocaties RouteTrain · honderden losse meshStandardMaterial-instances → module-level delen.

## 🟡 P2/LAAG (selectie)

- Corrupte `lk_buddies`-localStorage → TypeError (Array.isArray-check ontbreekt, buddies.js:271).
- Praatwolkje zichtbaar terwijl buddy verborgen is (drei Html volgt visible niet, Buddy.jsx:604).
- Cursor blijft "pointer" na unmount tijdens hover (Buddy.jsx:606, ParkProps.jsx:967).
- WaterPools: mesh per cel → instancen/mergen (ZooScene:446).
- LOW_END-detectie mist mid-range Androids + iOS; dpr-cap [1,1.5] of useDetectGPU (grid.js:8).
- Kraam-paneel: "dagoverzicht" vs "(deze parksessie)" verwarrend; "parksessie" is jargon (ZookwartierGame:1498).
- Bevries-melding wijst naar 🔄-knop die niet in de HUD zit (ZookwartierGame:1592).
- BuddyPicker: "Hij loopt met je mee" (ook bij Sterre); onduidelijk dat oude maatjes bewaard blijven.
- Achtbaan-praatje "hoe steiler, hoe harder" te kort door de bocht (hoogte bepaalt eindsnelheid); stoomtrein/Tesla-praatjes langer dan eigen ≤3-zinnen-regel.

## 💚 Sterk (behouden)

- Alle 11 leerpad-deeplinks geverifieerd: bestaan allemaal. Acht park→les-ingangen, alles gemeten.
- Foutteksten voorbeeldig kindvriendelijk; laad-fout-guard beschermt park-data; gids heeft stil-knop + anti-zeur-cooldowns.
- Economie-laag (loonstrook/btw/winst) didactisch uitstekend; geen gok-mechanieken; kwartier = grootste muntenbron (bewust).
- Lazy loading, AdaptiveDpr, instanced terrein/blokken, ContactShadows frames=1: performance-fundering klopt.

## 💡 Groeikansen (leerwaarde per uur)

1. Hint-regel in buddy-chat-prompt (15 min).
2. Cirkel rondmaken: LEERMOMENT_BY_LEERPAD-reverse-map + AllDone-terugkaart + souvenir voor de 5 park-leermomenten (nu alleen de 3 taferelen).
3. Rekenvraag anti-gok (zie boven).
4. 3 nieuwe leermomenten (registry-entries, ~1 uur): station→dienstregeling-roosters-po (Cito-studievaardigheden!), zweefmolen→krachten-natuurkunde, fontein→waterkringloop-po. Later: bouwblokken→inhoud/oppervlakte, dag/nacht→sterren-planeten.
5. Dagelijks gids-nieuwtje ("Wist je dit al over jouw reuzenrad?") — terugkom-reden met leer-component; nu is bijna alle binding economisch.

## ⚖️ STOPLIST-signalen (bewaken, geen overtreding)

- Rekenbonus in het park = munten voor antwoorden → botst met PARK-VISIE regel 5 (klein bedrag).
- Dieren die weglopen na 3 dagen = verlies-druk richting jonge kinderen (zachte dark pattern; waarschuwing vooraf zou het eerlijker maken).
- ?bezoek=-deellink: binnen de regels (geen scores/vergelijking), maar privé-beloning-principe blijven bewaken.

---
## ✅ STATUS FIXES (zelfde dag, v56-v60)
GEDAAN (aangevuld v62-v63): instancing rails/hekken/paden (~1.200 meshes -> 6 draw calls, hitbox-selectie geverifieerd) · rekenvraag anti-gok (bonus alleen goed-in-een; na 2 fouten eerst maatje-hulp) · React.memo PlacedItem + useMemo bezet/trekpleisters · vriend-bezoek (camera+migratie+filter+joystick) · trein pendelt · gids per-zin + iOS-ontgrendeling · buddy-chat hintregel · schaduw-throttle + mapSize 1024 · GLB's 28,1->7,0 MB (meshopt/webp, visueel geverifieerd) · autosave-flush · weggelopen-dier met naam + goedVerzorgd werkt · koop-flits + eerlijke kwartier-tekst · "lesjes" i.p.v. stappen-jargon · hulp-teksten naar echt menu · kassa-overzicht-copy · bevries-melding · BuddyPicker-copy · bezitBuddies-guard · cursor-resets · bubble-verborgen-guard · gedeelde cursor-geo · 3 nieuwe leermomenten (station/zweefmolen/fontein) + achtbaan-feitfix · dieren-knoppenrij.
NOG OPEN (grote posten): instancing rails/hekken/padtegels (draw calls) · React.memo/useMemo re-render-storm · souvenir+terugkaart voor de 5 park-leermomenten (LEERMOMENT_BY_LEERPAD) · rekenvraag anti-gok · dagelijks gids-nieuwtje · bubble-setState-frequentie · WaterPools instancing · LOW_END-detectie/dpr-cap · materialen delen in ParkProps.
