# 🚶 Wandelkwartier — de cirkel rond: lopen door het park = het leerkwartier

> **STATUS: PLAN / IDEE — géén bouw-go.** Vastgelegd 20 aug 2026 op Mark's
> verzoek ("stel dat je opnieuw mocht beginnen en de circulaire bouw moest
> maken — wat zou je anders doen en kan dat alsnog?"). Antwoord: vijf
> ontwerp-principes + een migratiepad dat NIETS weggooit. Bouwen pas na
> Mark's go per fase; park = binden, groei blijft de bottleneck (winterwerk
> richting de toets-piek, geen vervanging van outreach).

## 0. Waarom dit plan (het probleem in één alinea)

Park en leren zijn nu twee werelden waar een kind uit kiest. De cijfers
(wk 33): 66 park-bezoeken → 21 doorkliks naar leren (32%) — maar slechts
16 behaalde leerkwartieren per week. Het park bindt, maar voedt het
kwartier te weinig. De losse leermomenten/poorten zijn "toevallige
ontmoetingen"; er is geen lus die een kind vanzelf van leren → park →
leren voert. Dit plan maakt die lus expliciet.

## 1. De vijf principes (wat ik anders zou doen als we blanco begonnen)

### P1 · De wandeling ÍS het kwartier — niet het decor ernaast
Het park wordt de verpakking van het dagelijkse leerkwartier: de gids of
je maatje stippelt elke dag een **route langs ~3 stops** uit. Elke stop =
één leerobject met één vraag of mini-les (~5 min). Route af = kwartier
behaald (dailyGoal), en je eindigt weer bij je eigen plek.
De cirkel: lopen → leren → beloond worden → verder lopen.

### P2 · De route komt uit de leer-data (koppeling omgekeerd)
Nu stuurt het park naar leerpaden; leren stuurt het park nooit. De rails
bestaan al — géén nieuwe infra nodig:
- **stop 1 = herhaling**: `topic_mastery.next_due_at` via `loadDueTopics()`
  (spaced repetition, bestaat sinds P1.10);
- **stop 2 = zwakste concept**: `kiesZwakkeConcepten()` (oefenboekje-kiezer);
- **stop 3 = nieuw of klaargezet**: `ouder_klaargezet`/`leraar_klaargezet`
  (bron-label "thuis"/"juf") of het volgende pad in de leerlijn.
Match stop → object via de registry (`parkLeermomenten.js` / masterplan-
registry); geen object voor een concept → die stop wordt een tier-C
vertel-stop bij het dichtstbijzijnde object.

### P3 · Grondwet: geen les zonder blijvend spoor in het park
Elk afgerond leermoment verandert iets zichtbaars (object kleurt, groeit,
bouwt verder). **Per stap, niet per pad** — meting 17 aug: 0/55 parken
haalde ooit een compleet pad; de gouden-vormen-drempels (2/4/6/8/10
stappen) zijn de bewezen dosering. Dit = fase 2 van idee #46 (gouden park)
verbreden naar elk route-object + de "% park goud"-teller.

### P4 · De plattegrond spiegelt de leerlijn (het "leerlint")
Eén vast wandelpad door het park waar de route overheen loopt: kleuter-
stops bij de ingang → groep 8/examen-objecten verderop (sluit aan op
PARK-LEERLIJN-G1-G8). **Vrije bouwgrond blijft onaangetast** — bouwen en
mooi maken is het bind-mechanisme (feedback_park_doel_binden_leren); het
lint ligt er gewoon doorheen. Alleen voor nieuwe park-seeds + als
optionele overlay; bestaande parken houden hun indeling.

### P5 · Het terugkeer-moment is heilig
Contract: na een les kom je terug **precies bij het object** (geen
"gewoon weer ergens", geen crash zoals v335), het object toont direct
zijn verandering, en de gids wijst de volgende stop aan. Het bestaande
idee "stop & hervat exact" (idea_studiebol_stop_en_hervat_exact) hoort in
dit contract.

## 2. Kan dat alsnog? Ja — migratiepad zonder herbouw

| Stap | Wat | Bouwt op | Risico |
|---|---|---|---|
| M1 | **Masterplan fase 1 uitvoeren** (generiek `InteractiefObject` + registry) — ongewijzigd het juiste fundament | INTERACTIEF-PARK-MASTERPLAN §5-6 | laag |
| M2 | **Wandelkwartier-MVP**: route-generator (P2) + gids stuurt + 3 stops afvinken → dailyGoal-koppeling + terugkeer-contract (P5). Dunne laag bóvenop; optioneel — vrij spelen blijft | mastery/due, klaargezet, gids, dailyGoal | middel (UX-dosering) |
| M3 | **Spoor-per-les breed** (P3): goud-mechaniek naar alle route-objecten + %-teller | gouden vormen v349-354, unlocks.js | laag |
| M4 | **Poorten breed (masterplan fase 2)** — elke poort landt nu ín een route i.p.v. als losse ontmoeting | MAGISCHE-POORTEN-PLAN | laag |
| M5 | **Leerlint/zones** (P4) in nieuwe seeds + overlay; later leeftijd-laag (masterplan fase 4) | park-seed, groep-filter | laag |

**⚠️ Volgorde-advies (afwijking van masterplan-fasering):** M2 (wandel-
kwartier) VÓÓR de brede poorten-uitrol. Honderd poorten versterken het
"toevallige ontmoeting"-model; één dagelijkse route maakt elke poort die
daarná komt meteen onderdeel van de cirkel — en lost de echte zwakte op
(park voedt het kwartier niet).

## 3. Meten (dagrapport-haakjes)
- Nieuw event `wandel_stop_klaar` (props: stop-nr, via, leerpadId) +
  `wandel_route_af` → funnel park_open → route gestart → route af →
  kwartier_reached.
- Bestaande park→leren-funnel blijft; vergelijk vóór/na M2: doel =
  kwartier_reached/week ↑ bij gelijkblijvend park_open.
- Terugkeer-contract meetbaar: % lessen-vanuit-park dat terugkeert in park.

## 4. Open keuzes voor Mark (beslissen bij go voor M2)
1. **Startpunt route**: altijd bij je eigen plek/huisje, of bij de gids?
2. **Routelengte**: vast 3 stops, of 2-4 op leeftijd (kleuters korter)?
3. **Dwang-vrijheid**: route-knop prominent op park-entree, of pas na 1e
   vrije minuut aanbieden (niet opdringen)?
4. **Beloning route-af**: alleen kwartier-vinkje, of ook een klein
   park-cadeautje (muntjes/onderdeel) — let op STOPLIST (geen gok-lagen)?
5. **Timing**: winter-project vóór de Cito-piek (nov-jan) of eerder
   klein beginnen (M2-MVP is relatief dun)?

## 5. Relatie met bestaande plannen
- INTERACTIEF-PARK-MASTERPLAN.md — fundament (M1) + fase 2-4 blijven gelden;
  alleen volgorde-advies §2 hierboven wijkt af.
- PARK-LEERLIJN-G1-G8.md — het leerlint (P4) is de ruimtelijke uitvoering.
- MAGISCHE-POORTEN-PLAN.md — poorten worden route-stops (M4).
- PARK-DOORSTROOMTOETS-MATCH.md — levert de stop-inventaris per toets-onderdeel.
- PARK-VISIE.md ("cirkel is rond") — dit plan is de concrete lus.
