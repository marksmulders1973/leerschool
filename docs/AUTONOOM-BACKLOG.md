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

### Fase 1 — Data-laag (in uitvoering)
- [x] `scripts/auditKennisgraaf.mjs` geschreven — rapporteert broken links, ontbrekend voorkennisKeten, paden zonder prerequisites, examen-referenced paden zonder uitlegPad.
- [x] Schema vastgelegd: `voorkennisKeten: [{ id, title, niveau, why }]` per examen-check.
- [x] Economie 2023-T1 (5 vragen) voorzien van voorkennisKeten.
- [x] Economie 2023-T2 (7 vragen) voorzien van voorkennisKeten — commit 63c6cf1.
- [x] Economie 2024-T1 (6 vragen) voorzien van voorkennisKeten — commit 09f72f5.
- [x] Economie 2024-T2 (6 vragen) voorzien van voorkennisKeten — commit b869f23.
- [x] Economie 2025-T1 (9 vragen) voorzien van voorkennisKeten — commit e163486.
- [x] Economie 2025-T2 (5 vragen) voorzien van voorkennisKeten — commit 7a48310.
- [x] Engels 2024-T1 (8 vragen) — voorkennisKeten — commit c188375.
- [x] Engels 2025-T1 (9 vragen) — voorkennisKeten — commit 4c56476.
- [x] Geschiedenis 2025-T1 (6 vragen) — voorkennisKeten — commit 83762e1.
- [x] `prerequisites: [{ id, title, niveau }]` als veld in leerpad-data — toegevoegd aan top 10 examen-referenced paden (commit b0a2221). 10/90 paden voorzien.
- [ ] Prerequisites uitrollen naar de overige 80 paden (lagere prio).
- [ ] Loggen welke voorkennis-paden ontbreken voor nieuwe paden in backlog.

**Audit-bevindingen 2026-05-10**:
- 9 examen-paden, 61 leerpadLink-verwijzingen, **0 broken loops** ✓
- Top 3 meest-gerefereerde paden zonder uitlegPad: `pincode-buitenland-eu` (9×), `pincode-inkomen-welvaart` (7×), `pincode-ondernemen` (7×). Deze pincode-paden krijgen voorrang boven de PO-paden uit Prio 1.
- Alle 90 leerpaden missen `prerequisites`-veld.

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
- [x] `pincodeBelasting.js` — 42 checks (7 stappen) — commit 37a9cc9 (2026-05-11)
- [x] `pincodeBuitenlandEu.js` — commit 450b8f5 (2026-05-11)
- [x] `pincodeGeldSparenLenen.js` — 53 checks (9 stappen) — commit f30a1e5 (2026-05-11)
- [x] `pincodeInkomenWelvaart.js` — 42 checks (7 stappen) — commit 7f1c16c (2026-05-11)
- [x] `pincodeOndernemen.js` — 54 checks (9 stappen) — commit 9fd18e8 (2026-05-11)
- [x] `pincodeOverheid.js` — 42 checks (7 stappen) — commit 8a8f16c (2026-05-11)
- [ ] `nederlandseStaatMaatschappijleer.js` — geschiedenis-koppeling
- [ ] `topografieNederland.js` — aardrijkskunde Cito-relevant
- [ ] `tijdvakkenGeschiedenis.js` — VMBO, hoort bij examen
- [ ] `wereldoorlog2Geschiedenis.js`

**Pincode-economie status**: alle 6 paden compleet (inkomen-welvaart, ondernemen, overheid, geld-sparen-lenen, belasting, werk-arbeidsmarkt + buitenland-eu). Volgende vakgebied open: geschiedenis-paden.
- [ ] `tachtigjarigeOorlogGeschiedenis.js`
- [ ] `klimatenAardrijkskunde.js`

VMBO-wiskunde (na Cito-content):
- [ ] `parabolen.js` (32 stappen, doe in meerdere sessies)
- [x] `kwadratischeVergelijkingen.js` — 15 checks (2026-05-11, commit 5a0dca6)
- [x] `kwadratenWortels.js` — 20 checks (2026-05-11, commit 2957d51)
- [x] `lineaireFormules.js` — 21 checks (2026-05-11, commit b00bbef)
- [x] `coordinatenstelsel.js` — 18 checks (2026-05-11, commit 2e7aa67)
- [x] `vergelijkingenOplossen.js` — 22 checks (2026-05-11, commit 92cce28)
- [ ] `verhoudingen.js` (VMBO-versie)
- [ ] `breuken.js` (VMBO-versie)
- [ ] `negatieveGetallen.js` (VMBO-versie)
- [ ] `vlakkeFiguren.js` (VMBO-versie, met Pythagoras)
- [ ] `kansrekening.js`
- [x] `statistiek.js` — 14 checks (2026-05-11, commit 4f7d795)
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
- 2026-05-10 — Optie-C plan geformaliseerd (3 fases) + self-test-regels. Audit-script `scripts/auditKennisgraaf.mjs` werkt. Economie 2023-T1 (5 vragen) voorzien van `voorkennisKeten`. Audit-bevinding: pincode-paden zijn meest-referenced zonder uitlegPad — prio bijgesteld.
- 2026-05-11 — pincodeBuitenlandEu (42 vragen, 7 stappen) volledig voorzien van uitlegPad. Was meest-gerefereerd door examen-vragen (9×). Build + audit groen. Volgende: pincodeInkomenWelvaart (7 examen-refs). Commit 450b8f5.
- 2026-05-11 — Playwright-testronde Maand-1 testchecklist (8 items, 6 PASS / 1 FAIL / 1 PARTIAL) + 4 follow-up fixes: ticker game/HoF-jargon weg (HomePage.jsx), /leaderboard alias toegevoegd (routes.js), CSP wss://*.supabase.co toegestaan (vercel.json), subscriptions/profiles `.single → .maybeSingle` (useAuth.js) tegen 406. Commit a543377.
- 2026-05-11 — voorkennisKeten Fase 1 DATA-laag VOLLEDIG: alle 9 examen-paden voorzien (Economie T1-T2 2023-2025 + Engels 2024-T1 + Engels 2025-T1 + Geschiedenis 2025-T1). 61 examen-checks × 3 voorkennis-stappen. Audit: 0 broken loops, 0 ontbrekende voorkennisKeten. Patroon: woordenschat-po + begrijpend-lezen-strategie + specifiek vakpad. Eindcommit 83762e1.
- 2026-05-11 — Prerequisites op top-10 examen-referenced paden (woordenschat-engels 17×, pincode-* 9-3×, tijdvakken/wo2-geschiedenis 3×). Patroon: NL-basis (woordenschat-po) + skill (procenten/begrijpend-lezen/kaartlezen) + soms een mid-level pincode-pad. Commit b0a2221. Fase 1 praktisch compleet — UI-fase 2 wacht op Mark's go (zie CLAUDE.md hard-stop).
- 2026-05-11 — Prerequisites op 6 Cito-PO-paden (ICP groep 6-8): tabellen-grafieken, redactiesommen, procenten-po, verhoudingen-po, breuken-po, geld-rekenen. 16/90 paden voorzien. PO-fundering zelf blijft zonder prereqs. Commit 735cc82.
- 2026-05-11 — **pincodeInkomenWelvaart VOLLEDIG voorzien van uitlegPad** (42 checks, 7 stappen): schaarste/behoeften, productiefactoren, inkomenstypen, verdeling/Gini, welvaart/inflatie/koopkracht, BBP/HDI, inkomensbeleid. Was #1 op lijst examen-referenced paden zonder uitlegPad (7 examen-refs). Audit nu ✓ uitlegPad ✓ prereq. Commit 7f1c16c.
- 2026-05-11 — **pincodeOndernemen VOLLEDIG voorzien van uitlegPad** (54 checks, 9 stappen): ondernemen-types, marktonderzoek/SWOT, doelgroep+4P's, omzet/kosten/winst+BEP, vraag-aanbod, 4 marktvormen, rechtsvormen, BTW+facturen, risico/faillissement. Was #2 op audit-lijst (7 examen-refs). Audit nu ✓ uitlegPad ✓ prereq. Commit 9fd18e8.
- 2026-05-11 — **pincodeOverheid VOLLEDIG voorzien van uitlegPad** (42 checks, 7 stappen): overheidstaken/collectief goed/extern effect, overheidslagen+jeugdzorg, Rijksbegroting/Prinsjesdag, staatsschuld/EMU/obligatie, conjunctuur/recessie/depressie, marktordening/ACM/kartel, politiek systeem/Tweede Kamer/coalitie. Was #3 op audit-lijst (4 examen-refs). Audit nu ✓ uitlegPad ✓ prereq. Commit 8a8f16c.
- 2026-05-11 — ExamensPage refactor (Mark feedback): twee gelijkwaardige modi — 🎯 oefenen-met-uitleg (examen-leerpaden bovenaan, USP zichtbaar) en 📄 PDF-inzien (bestaand, krijgt eigen kop). StudentHome 1→2 balken. CLAUDE.md + memory geüpdatet. Commit 32441d2.
- 2026-05-11 — **pincodeGeldSparenLenen VOLLEDIG voorzien van uitlegPad** (53 checks, 9 stappen): geld 3-functies, betaalmiddelen+Klarna-risico, sparen+rente, sparen-vs-beleggen+crypto, geldkringloop+DGS, inflatie+koopkracht, begroten+50/30/20, lenen+BKR, hypotheek-detail. Was #4 op audit-lijst (4 examen-refs). Audit nu ✓ uitlegPad ✓ prereq. Commit f30a1e5.
- 2026-05-11 — **pincodeBelasting VOLLEDIG voorzien van uitlegPad** (42 checks, 7 stappen): soorten+premies, BTW+accijns, IB+schijven+boxen, heffingskortingen+werk-loont, toeslagen+toeslagenaffaire, belastingmoraal+Panama Papers, Belastingdienst+DigiD+sancties. Was #5 op audit-lijst (3 examen-refs). Audit nu ✓ uitlegPad ✓ prereq. Commit 37a9cc9.
- 2026-05-11 — UX fix ExamensPage SectieKop (Mark): was te knop-achtig (rand-frame met kleur), nu hoofdstuk-stijl met onderlijn. Tekst PDF-sectie verduidelijkt naar "Hieronder kun je hele examens inzien (PDF)". Commit 769675b.
- 2026-05-11 — **pincodeWerkArbeidsmarkt VOLLEDIG voorzien van uitlegPad** (42 checks, 7 stappen): werkgever/werknemer+contracten, arbeidsovereenkomst+proeftijd, CAO+krapte+vakbond, vraag-aanbod arbeid+evenwichtsloon, werkloosheid 4 soorten+verborgen, productiviteit+paradox, sociale zekerheid+WW+AOW+bijstand. Was #6 op audit-lijst (3 examen-refs). Audit nu ✓ uitlegPad ✓ prereq. Commit b83d00f. 🎉 ALLE 6 PINCODE-ECONOMIE-PADEN COMPLEET. Samen 275 checks.
- 2026-05-11 (later) — MEGA-SESSIE: kennisgraaf 100% gesloten. uitlegPad toegevoegd aan: tijdvakkenGeschiedenis (26 checks, commit 4dab886), wereldoorlog2Geschiedenis (31, 5b0f1de), pincode-ontwikkelingslanden (42, f57f3a5), tabellenGrafieken (24, bc2540d), topografieNederland (28, b036055), nederlandseStaatMaatschappijleer (24, 552d019), klimatenAardrijkskunde (22, 5e42679), tachtigjarigeOorlogGeschiedenis (26, a0cef47). Totaal 223 uitlegPad-checks. PLUS: 2 bug-fixes (kaartlezen+matenEenheden, 5fe8699), naming Cito-eindtoets → Doorstroomtoets in user-facing copy (11 files, 6db6082), nieuw pilot-pad doorstroomtoetsRekenenG8 (20 vragen, 2674ce9), memory + CLAUDE.md updates (Doorstroomtoets-naming + copyright-policy + memory-raadplegen-regel + C-taak klas 1-3 onderbouw VO opgeslagen). Audit: 0 examen-referenced paden zonder uitlegPad.
- 2026-05-11 (verder) — VMBO-wiskunde uitlegPad-batch: statistiek (14 checks, commit 4f7d795), kwadratischeVergelijkingen (15, 5a0dca6), coordinatenstelsel (18, 2e7aa67). Totaal 47 extra checks. Bovenste niet-afgevinkte taak (parabolen 41 checks) overgeslagen: backlog-annotatie 'doe in meerdere sessies' — voor losse sessie.

## Peer-review log

Cadens: elke 5 taken, elke 2e sessie, of na nieuw pad. Format: datum — taken-sinds-vorige — agent A oordeel — agent B oordeel — beslissing.

- (nog geen reviews)
