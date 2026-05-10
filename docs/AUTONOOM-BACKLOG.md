# Autonoom-backlog (2026-05-10 → 2026-05-24)

> Volgorde = prioriteit. Pak bovenste niet-afgevinkte taak.
> Voor regels zie `CLAUDE.md` → "Autonome modus".

## Doel

Cito + examens versterken. Drie type werk:
1. **uitlegPad toevoegen** aan bestaande paden zonder uitlegPad
2. **Authentieke examen-vragen toevoegen** (alleen als bron-PDF beschikbaar via `examenblad.nl`)
3. **Nieuwe Cito-leerpaden** voor onderwerpen die nog ontbreken

**Leidend principe** (zie CLAUDE.md → "Kern-flow"): examen-vraag → "begrijp je dit?" → uitlegPad → leerpad a-z → terug naar vraag. Elke nieuwe content moet deze loop dichten — geen losse leerpaden zonder examen-anker, geen examen-vragen zonder leerpad-link.

## Prioriteit 0 — Loop-audit (terugkerend, elke 5 paden)

Voordat je nieuwe paden bouwt:
- [ ] Run `grep -rh "leerpadLink:" src/learnPaths/examen*.js` → verzamel alle `id`-waardes.
- [ ] Check per id: bestaat `src/learnPaths/<id>.js`? Zo nee → log in backlog als "ontbrekend pad voor examen-link".
- [ ] Voor elk leerpad in lijst Prio 1: bestaan er examenvragen die ernaar linken? Zo ja → `examenLookup.js` regenereren als nodig en uitlegPad-prioriteit verhogen.

## Prioriteit 0.5 — Optie-C kennisgraaf (lopend, hoogste prio)

### Fase 1 — Data-laag (start hier)
- [ ] `scripts/auditKennisgraaf.js` schrijven — leest alle leerpaden + examen-paden, rapporteert: ontbrekende paden, broken `leerpadLink`, paden zonder `prerequisites`, examen-checks zonder `voorkennisKeten`.
- [ ] Schema beslissing: `prerequisites: [{ id, title, niveau }]` als veld in leerpad-data (groep-niveau in `niveau`).
- [ ] Schema beslissing: `voorkennisKeten: [{ id, title, niveau, why }]` als veld in elke examen-check.
- [ ] Economie 8 examen-paden (2023-T1, T2, 2024-T1, T2, 2025-T1, T2) — voorkennis-keten invullen voor elke vraag.
- [ ] Loggen welke voorkennis-paden ontbreken (= nieuwe paden voor backlog).

### Fase 2 — UI proof-of-concept
- [ ] `src/components/VoorkennisKeten.jsx` minimale variant.
- [ ] Inbouwen in 1 examenvraag (V36 economie 2023-T1).
- [ ] Self-test + Playwright screenshot.
- [ ] **Stop hier — wacht op Mark + reviewer-agents akkoord voor fase 3.**

### Fase 3 — Volledig (alleen na groen licht)
- [ ] UI uitrollen naar alle examenvragen (start: rest van economie).
- [ ] Adaptieve `zwakstePadDetector.js` — bij fout op check zoekt laagste pad waar gebruiker nog scoort.
- [ ] **Examen-modus check**: VoorkennisKeten alleen renderen als `mode === "oefen"`.
- [ ] Engels examenvragen (3 paden) voorzien.
- [ ] Geschiedenis examenvragen (1 pad) voorzien.

### Open vragen aan Mark (niet blokkerend voor fase 1)
- [ ] Antwoordmodel/correctievoorschrift per examen scrapen of handmatig? (nodig voor exacte deelvaardigheids-mapping)
- [ ] Voorkennis-data persistent in Supabase of localStorage? (privacy-impact)
- [ ] Demotivatie-framing voor kind: "X gaps" vs "nog Y stappen"?

---

## Prioriteit 1 — uitlegPad voor bestaande paden zonder

Check eerst met `Grep` welke paden geen `uitlegPad:` hebben. Pak Cito-relevante eerst:

- [ ] `tabellenGrafieken.js` — Cito groep 7-8 studievaardigheden
- [ ] `pincodeBelasting.js` — economie, Pincode-koppeling
- [ ] `pincodeBuitenlandEu.js`
- [ ] `pincodeGeldSparenLenen.js`
- [ ] `pincodeInkomenWelvaart.js`
- [ ] `nederlandseStaatMaatschappijleer.js` — geschiedenis-koppeling
- [ ] `topografieNederland.js` — aardrijkskunde Cito-relevant
- [ ] `tijdvakkenGeschiedenis.js` — VMBO, hoort bij examen
- [ ] `wereldoorlog2Geschiedenis.js`
- [ ] `tachtigjarigeOorlogGeschiedenis.js`
- [ ] `klimatenAardrijkskunde.js`

VMBO-wiskunde (na Cito-content):
- [ ] `parabolen.js` (32 stappen, doe in meerdere sessies)
- [ ] `kwadratischeVergelijkingen.js`
- [ ] `kwadratenWortels.js`
- [ ] `lineaireFormules.js`
- [ ] `coordinatenstelsel.js`
- [ ] `vergelijkingenOplossen.js`
- [ ] `verhoudingen.js` (VMBO-versie)
- [ ] `breuken.js` (VMBO-versie)
- [ ] `negatieveGetallen.js` (VMBO-versie)
- [ ] `vlakkeFiguren.js` (VMBO-versie, met Pythagoras)
- [ ] `kansrekening.js`
- [ ] `statistiek.js`
- [ ] `stelsels.js`
- [ ] `machten.js`
- [ ] `exponentieel.js`
- [ ] `goniometrie.js`
- [ ] `logaritmen.js`
- [ ] `differentieren.js`

Talen (lager prio):
- [ ] `passeComposeFrans.js`
- [ ] `pastTensesEngels.js`
- [ ] `naamvallenDuits.js`
- [ ] `werkwoordsvervoeging.js`
- [ ] `onregelmatigeWerkwoordenEngels.js`
- [ ] `onregelmatigeWerkwoordenV2Engels.js`
- [ ] `argumentatieleer.js`
- [ ] `tekstanalyse.js`
- [ ] `zinsontleding.js`
- [ ] `woordsoortenNederlands.js` (VMBO-versie)
- [ ] `literatuurgeschiedenis.js`

Beta-vakken:
- [ ] `atoombouwScheikunde.js`
- [ ] `chemischeReactiesScheikunde.js`
- [ ] `periodiek.js`
- [ ] `celBiologie.js`
- [ ] `geneticaErfelijkheidBiologie.js`
- [ ] `voortplantingHormonenBiologie.js`
- [ ] `elektriciteitNatuurkunde.js`
- [ ] `krachtenNatuurkunde.js`
- [ ] `sterrenPlaneten.js`
- [ ] `balansBeco.js` (economie VMBO)
- [ ] `vraagAanbodEconomie.js`

## Prioriteit 2 — Examen-paden uitbreiden

Nieuwe examenjaren toevoegen. **Alleen als de PDF-bron daadwerkelijk verifieerbaar is** (niet zelf verzinnen).

- [ ] Engels VMBO-GT 2024 tijdvak 2 — bron checken eerst
- [ ] Engels VMBO-GT 2023 tijdvak 1 — bron checken eerst
- [ ] Engels VMBO-GT 2023 tijdvak 2 — bron checken eerst
- [ ] Geschiedenis VMBO-GT 2024 tijdvak 1 — bron checken eerst
- [ ] Geschiedenis VMBO-GT 2024 tijdvak 2 — bron checken eerst
- [ ] Geschiedenis VMBO-GT 2023 tijdvak 1 — bron checken eerst
- [ ] Nederlands VMBO-GT examens (jaar checken)
- [ ] Wiskunde VMBO-GT examens (jaar checken)

**Methode**: gebruik examenblad.nl URL-patroon (`reference_examenblad_urls` in memory). Als WebFetch faalt of bron onduidelijk → skip.

## Prioriteit 3 — Cito-content uitbreiden voor groep 6-8

Alleen ICP-relevant (groep 6-8 ouder die Cito wil oefenen):
- [ ] `meetkundeBouwsels` — kubus + balk (volume) groep 6-8 — **nieuw pad**
- [ ] `procentenPo` — % berekenen (1F-niveau) — **nieuw pad**
- [ ] `grafiekenLezenPo` — staaf/lijn/cirkel-grafiek interpreteren — **nieuw pad**
- [ ] `gemiddeldenStatistiekPo` — gemiddelde/modus/mediaan groep 7-8 — **nieuw pad**

## Wat NIET doen

- Geen nieuwe routes / componenten / dependencies.
- Geen Supabase-schema-veranderingen.
- Geen design-system aanpassingen.
- Geen examen-vragen verzinnen zonder bron.
- Geen content vervangen — alleen toevoegen.

---

## Sessie-log

Eén regel per sessie. Datum + wat gedaan + commit-hash van laatste push.

- 2026-05-10 — Backlog opgesteld door Claude. CLAUDE.md uitgebreid met autonome-modus regels + peer-review cadens. Commit pending.

## Peer-review log

Cadens: elke 5 taken, elke 2e sessie, of na nieuw pad. Format: datum — taken-sinds-vorige — agent A oordeel — agent B oordeel — beslissing.

- (nog geen reviews)
