# Park-visie — "De cirkel is rond" (Mark, 9/10 jul 2026)

> Mark's opdracht: herbedenk het park. Balans park ↔ leerapp; je loopt door het
> verleden en de toekomst; vragen uit Leerkwartier in het spel, en vanuit het
> spel terug ("hier wil ik meer over weten") of vanuit vragen het spel in
> ("dit wil ik in het spel bekijken"). Beeldkwaliteit mag soms omhoog.
> Synthese van 3 ontwerp-agents (wereld/game, didactiek/visie-bewaker, techniek).

## Het concept: het Tijdpad om Mijn Park

Om het spelerpark heen (in de statische Buitenwereld, dus **zonder opgeslagen
parken te raken**) komt een wandelbare **Tijdpad-ring**. Bij de poort ligt het
**NU-plein** met een Tijdwijzer-klokzuil ("← VROEGER · NU · LATER →"). Linksom
loop je het verleden in (jagers & boeren → oudheid → Romeinen → middeleeuwen →
Gouden Eeuw → uitvinders & stoom → vrijheid & vrede), rechtsom de toekomstkant.
Achteraan sluit de cirkel bij de **sterrenwacht**: "kijk je naar de sterren,
dan kijk je in het verleden" — het letterlijke de-cirkel-is-rond-moment.

Elke zone = een kabouter-diorama (bestaand patroon van de uitvinders-taferelen)
+ zone-decor, elk gekoppeld aan een **bestaand leerpad** (tijdvakken, Romeinen,
middeleeuwen, Gouden Eeuw, krachten, elektriciteit, water, ruimtevaart…).

## De twee cirkel-randen (het hart)

**Spel → vraag** ("hier wil ik meer over weten") — bestaat al in embryo
(tafereel → buddy-praatje → leerpad). Uitbouwen met:
- **Kabouter-mysterie**: max 1 optionele denkvraag per zone per dag, uit de
  checks van het gekoppelde pad, verhaal-eerst, **geen goed/fout-registratie,
  geen straf** — fout geeft een denkprikkel + warme leer-knop.
- **Souvenir-belofte**: rond het leerpad af in de app → de kabouters bouwen een
  mini-versie (mini-piramide, VOC-scheepje, raketje) die je in je eigen park
  mag zetten (via bestaand `owned.unlocked`-mechanisme, geen DB-migratie).
  Zo wijst élke beloning dezelfde kant op: de app in.

**Vraag → spel** ("dit wil ik in het spel bekijken") — de ontbrekende halve cirkel:
- Reverse-register `parkScenes.js` (leerpadId → sceneId), zelfde gedachte als
  `examenLookup.js`; scène-register = uitbreiding van `uitvindersData.js`.
- Kaartje op het **AllDone-scherm** (nooit midden in een leersessie, nooit in
  examen-modus): "🏞️ Dit staat in jouw park — ga kijken (en haal je souvenir op)".
- Deeplink `/dierentuin?scene=piramide` (patroon van `?bezoek=`), speler
  spawnt ~6 m vóór de scène met korte camera-fly-in; param daarna strippen.
- Alleen voor onderwerpen waar 3D écht iets toevoegt (schaal, proces,
  ruimtelijk inzicht) — een jaartal in 3D is decoratie.
- Nieuwe events: `leren_naar_park`, `park_deeplink_open`, `park_mysterie(_goed)`
  naast bestaand `park_tafereel`/`park_naar_leren` → beide cirkelhelften meetbaar.

## Didactische regels (visie-bewaker)

1. Nieuwsgierigheid eerst: het tafereel roept de vraag op vóór de app hem stelt.
2. Het maatje is de brug (sociale uitnodiging), nooit een systeem-popup.
3. Max ~1 leer-hook per 2-3 min spel — anders voelt het park als hinderlaag.
4. In het park bestaat "fout" niet; echt oefenen gebeurt in de app.
5. Geen munten voor antwoorden in het park zelf (anders train je quiz-grinden);
   de grote beloning (souvenir) zit achter het leerpad.
6. Park-tijd-plafond: na ~10 min stuurt het maatje richting het leerkwartier.
7. **Ruimte moet structuur coderen**: afstand = tijd (tijdlijn), hellinglengte =
   verhouding. Decor met een quiz-popup erop is géén belichaamd leren.

## Kritische correcties op de oorspronkelijke wens (eerlijk)

- **"Toekomst-zones" geschrapt als grote zone.** Geen curriculum-anker (speculatie
  ≠ leerstof, botst met de Leerkwartier-test). Vervanger: klein **"Jouw
  toekomst"-plein** (Doorstroomtoets → middelbare school — de enige toekomst die
  deze doelgroep écht raakt) + de sterrenwacht als cirkelsluiting. Ruimtehaven
  mag als zone blijven: ruimtevaart-pad bestaat en is curriculum.
- **Beeldkwaliteit niet globaal omhoog.** Budget-Androids zijn de doelgroep;
  AdaptiveDpr bestaat niet voor niets. Wel het goedkope-winst-pakket (zie onder).
- **Dit is een retentie-investering, geen acquisitie.** Trechter park→leren ≈ 0
  bij ~18 echte parken; e-maillijst vlak. Regel: park-werk ≤ ~20% van de
  bouwtijd; outreach/acquisitie blijft prio 1. **Meet-afspraak:** 4 weken na
  fase P2: als park_naar_leren/park_open < 15% én parkspelers geen
  kwartier_reached halen → snoeien, niet bijbouwen.
- **Geen tweede cirkel-architectuur bouwen** terwijl de eerste (examen→uitleg→
  leerpad→terug) op de terugkeer-helft lekt: alles hergebruikt bestaande
  patronen (leerpadLink, AllDone-CTA, unlocks, ?param-deeplinks).

## Beeldkwaliteit — goedkope-winst-pakket (tech-agent, FPS-neutraal)

Volgorde: **A → B → D → E → G → C**, samen ~1 sessie:
- **A. Schaduw-camera meereizen** met de speler (dekt nu maar ±20 m rond origin
  — taferelen hebben nu geen slagschaduw). 0 extra GPU.
- **B. Nep-AO via instance-tinten** (onderlagen/binnenhoeken 8-12% donkerder).
- **D. Vuurvliegjes/stofjes** als één Points-object (1 draw call, veel sfeer).
- **E. Nep-bloom met glow-sprites** (additive billboard) achter bliksems/
  vraaglampen — GEEN postprocessing-package (kost 30-50% FPS op budget-GPU).
- **G. Hemel-gradient-koepel** i.p.v. vlakke achtergrondkleur.
- **C. Kleur-grading** via toneMappingExposure + kleurtemperatuur in DayNight-lerp.
- **Hero-.glb's** (sfinx, raket, stoomloc) via Grok→SF3D alléén als landmark,
  1-3 per zone, <5k tris, meshopt-gecomprimeerd. Bulk blijft proceduraal.
- **Per-zone lichtstemming**: fog/ambient/zonkleur lerpen op spelerspositie
  (globaal systeem, voelt lokaal, ~20 regels in DayNight).
- **NIET doen:** EffectComposer/bloom/SSAO, HDRI-environments, bulk-glb's,
  meerdere schaduwlichten, realtime spiegels/physics, useFrame-loops die
  doordraaien buiten de actieve zone (animaties gaten op afstand).

## Fasering

- **P1 — De cirkel in het klein** (1 sessie, geen migratie): `?scene=`-deeplink
  + `parkScenes.js` + AllDone-kaartje bij de 3 gekoppelde paden + souvenir-unlock
  voor de 3 bestaande taferelen + events. Bewijst: draait de cirkel, in beide
  richtingen meetbaar, vóór er één blok ring ligt.
- **P2 — Tijdpad west (verleden)**: ringpad + NU-plein + Tijdwijzer-snelreis
  (☰-kaartje, telefoons gaan de ring niet uitlopen) + 4 geschiedenis-zones +
  het beeldkwaliteit-pakket A/B/D/E/G/C.
- **P3 — Cirkelsluiting**: ruimtehaven + sterrenwacht + "Jouw toekomst"-plein +
  kabouter-mysteries + alle souvenirs.
- **P4 — Verdieping**: zone-bewuste buddy-praatjes, souvenirs in gedeelde parken,
  park-regel in het ouder-weekrapport.

## Zone-tabel (concept, leerpad-id's geverifieerd op 3 na)

Jagers&boeren→`tijdvakken-nederland-po` · Oudheid→`verhoudingen-po` · Romeinen→
`romeinen-geschiedenis` · Middeleeuwen→`middeleeuwen-geschiedenis` · Gouden
Eeuw→`gouden-eeuw-geschiedenis` · Uitvinders→`krachten-natuurkunde`+
`elektriciteit-natuurkunde` · Vrijheid&vrede→`wereldoorlog2-geschiedenis` ·
Water van morgen→water-paden · Ruimtehaven→ruimtevaart-pad · Sterrenwacht→
sterren/planeten-pad. (Bij bouw per zone het id verifiëren in pathManifest.)
