# Leerkwartier — projectinstructies

> Lees dit eerst. Overrides default-gedrag.

## Visie

**Leerkwartier** = "een kwartier per dag, écht begrijpen wat je leert." Voorheen Studiebol.

- **ICP (primair)**: bezorgde **Doorstroomtoets-ouder** groep 6-8 (voorheen "Cito-ouder" — sinds 2024 heet de toets officieel Doorstroomtoets). Alle product/content/marketing-keuzes hier op richten.
- **Secundair / persoonlijk**: VMBO-dochter — geen marketing-doelgroep.
- **Leerkwartier-test** bij elke nieuwe feature: "Helpt dit een 10-jarige om iets BETER te BEGRIJPEN?" Zo nee → niet bouwen.
- **STOPLIST**: zie `docs/STOPLIST.md` — 6 verboden categorieën + OBLITERATOR-uitzondering (Mark's zoon).

## Workflow

- **Git**: na code-wijzigingen automatisch `git add` + `commit` + `push` zonder te vragen (Mark gaf doorlopende toestemming).
- **Niet skippen**: nooit `--no-verify`, geen amend van gepushte commits, geen force-push naar main.
- **Klaar-voor-gebruik signaal**: bij langer werk altijd "klaar voor gebruik" als afsluiting, zodat Mark weet wanneer hij kan testen.
- **Bij vage bug-melding**: eerst 1-2 gerichte reproductie-vragen, niet blind fixen.
- **30-sec autonomie-regel**: als Mark 30 seconden niet reageert op een vraag, doorgaan zonder hem tot tokens op zijn.
- **Memory raadplegen voor openstaande taken**: niet alle taken staan in `docs/AUTONOOM-BACKLOG.md`. Sommige sessie-overstijgende projecten + strategische beslissingen staan in `memory/project_*.md`. Bij sessie-start of vage instructie ook memory-index scannen op `project_*` items + zoeken op "TODO/later/uitgesteld/C-taak/open" in memory-files. Behandel memory als TWEEDE backlog.

## Autonome modus (actief tot app gevuld — geen einddatum)

Mark heeft Claude Code **vrij baan** gegeven voor content-werk. Geen mening vragen, gewoon doorpakken. Doel: app helemaal vullen met paden + vragen vóór fine-tuning. Mark wil **maximaal-lang autonoom werk per sessie**, zelfs als hij offline is — dus nooit pauzeren om input te vragen als er nog andere taken zijn die wél kunnen.

### Prioriteit-stelsel — bijgesteld 2026-05-12 na 12-agent-review

**12-agent-review constateerde scope-creep**: 12 van 32 nieuwe paden vielen buiten Cito-kern groep 6-8 (puberteit/emoties/Olympische/koude-oorlog/eetcultuur/etc.). Bovendien: paden gemiddeld 22-32 min ipv kwartier-belofte, bundle 5,4 MB, geen zoekbalk bij 67+ PO-paden. **Strategie-advies**: stop scope-creep, kies diepte boven breedte.

**Nieuwe prio-volgorde (volg STRENG)**:

**P0 — Tech-debt blokkers** *(eerst, want raakt elke gebruiker)*:
- **Bundle splitsen**: ~~`data-learnpaths` 5,4 MB → per-pad lazy import.~~ **STAP 1 GEDAAN 2026-05-12**: vite-config splitst nu in 8 chunks per subject (examens/po/talen/wereld/nask/nederlands/pincode/wiskunde). Grootste chunk nu **1,98 MB** (wiskunde). Browser laadt parallel via H/2 → snellere TTI. **STAP 2 TODO**: echte lazy-load via `pathLoaders.js` (`import.meta.glob` + async `getLearnPath()` — infrastructure staat al, maar consumers (LearnPath.jsx, LearnPathsHub.jsx) gebruiken nog `ALL_LEARN_PATHS` synchroon. Migratie vergt async-pattern in 17 consumer-files. Volgende sessie: migreer LearnPath.jsx als pilot, dan rest. Eindresultaat: route laadt alleen het pad dat user opent (~50 kB) ipv alle paden (~5,8 MB).
- **Zoekbalk + Cito-pijler-filter + groep-niveau-filter** op StudentHome/LearnPathsHub.

**P1 — Maand-2-plan diepte** *(strategische ICP-focus)*:
- **Begrijpend lezen-flow uitbouwen**: 1 vak Doorstroomtoets compleet ipv breed.
- **VoorkennisKeten UI fase 2**: POC op V36 economie 2023-T1, dan uitrollen.
- **Doorstroomtoets-trio uitdiepen** tot 60+ vragen per onderdeel (taal/rekenen/studievaardigheden).

**P2 — Bestaande paden opfris** *(quality-of-life)*:
- **15-min check** op alle paden > 4 stappen: splitsen of explanations halveren.
- **wrongHints-leak fixen**: geen categorie-labels op alle foute opties (zie review).
- **Afkortingen uitleggen** bij eerste gebruik (MBO/HBO/WO/CAO/AOW/ZZP/NAVO/USSR/AVG/HTTPS/EU/VS).
- **Examen-modus split schoon**: `examenEconomie2025T1` heeft hints — beslis split of opschonen.

**P3 — Pas DAARNA nieuwe paden** + alleen als ze in Cito-core vallen *(taal/rekenen/studievaardigheden/wereldoriëntatie groep 6-8)*:
- Geen ruimtevaart/Olympische/eetcultuur/koude-oorlog meer.
- Bij twijfel: Leerkwartier-test ("helpt 10-jarige Cito-vraag beter begrijpen?") strikt toepassen.

**STOP** met klas 1-3 onderbouw VO-uitbreiding (C-taak in `project_continuum_klas_1_3_onderbouw`) tot P0/P1/P2 op groen staan.

### Doel
Cito-toets + examens versterken via **kennisgraaf** (zie "Kern-flow"). Concreet: optie-C-implementatie (data + UI) van voorkennis-keten. Daarnaast doorgaan met uitlegPad-werk.

### Optie-C plan (kennisgraaf data + UI)

**Fase 1 — Data-laag (~2-3 sessies)**
- Nieuw veld `prerequisites: [{ id, title, niveau }]` in leerpad-data
- Nieuw veld `voorkennisKeten: [{ id, title, niveau, why }]` in examen-check (lijst van basis → top)
- Audit-script `scripts/auditKennisgraaf.js` — toont gaps (linken naar niet-bestaand pad)
- Per vak (start: economie) alle examen-vragen voorzien van voorkennis-keten

**Fase 2 — UI proof-of-concept (~1 sessie)**
- `VoorkennisKeten.jsx` component op 1 examenvraag (V36 economie 2023-T1)
- Toont keten visueel onder/naast de vraag
- Niet adaptief — gewoon zichtbaar maken
- Self-test + screenshot
- Stop voor reviewer-agents akkoord

**Fase 3 — Volledig (~2-3 sessies)**
- UI uitrollen naar alle examenvragen
- Adaptieve "zwakste-pad-detector" — bij fout op check stuurt systeem naar laagste pad waar gebruiker nog wél scoort
- **Examen-modus respecteren**: voorkennis-keten alleen tonen in oefen-modus, NIET in examen-modus

### Self-test tussen taken (verplicht)
Na elke afgewerkte taak voor je verder gaat:
1. **Build groen**: `npx vite build` faalt = stoppen + fixen.
2. **Eigen review**: open random vraag uit wat je net wijzigde. Maak hem expliciet fout. Gaat de uitlegPad-flow open zoals bedoeld?
3. **Bij UI-wijziging**: Playwright screenshot van de nieuwe staat + zelf bekijken of het past bij STOPLIST + Leerkwartier-test.
4. **Bij data-wijziging**: audit-script run (`scripts/auditKennisgraaf.js` zodra die bestaat) — geen broken `leerpadLink` of `prerequisites`.
5. **Backlog bijwerken**: vink af + 1-regel sessie-log.

### Hoe werken
1. **Lees eerst** `docs/AUTONOOM-BACKLOG.md` — daar staat de prioriteits-volgorde + status van vorige sessies.
2. **Pak de bovenste niet-afgevinkte taak.** Geen mening vragen welke.
3. **Werk tot tokens op** of tot een natuurlijke stop (build groen, commit gepusht, taak afgevinkt).
4. **Update aan eind van sessie** de backlog: vink af wat klaar is, schrijf in 1 regel wat je deed, voeg eventueel nieuwe sub-taken toe.
5. **Geen klaar-voor-gebruik tussendoor** — alleen aan het einde van de hele sessie.

### Doorgaan, niet vragen
- Niet vragen welke prioriteit, welk pad, welke vakken.
- Niet vragen of een aanpak goed is — gebruik bestaande patronen (uitlegPad-format, build → commit → push).
- Wel doorgaan na elke chunk zonder pauze; geen tussentijdse "wil je dat ik doorga?".
- **Bij vage instructies van Mark** ("ga verder", "verder", "door", "ga door", "vervolg"): direct bovenste niet-afgevinkte taak uit `docs/AUTONOOM-BACKLOG.md` pakken. **GEEN keuze-menu**, **GEEN "wat wil je doen"-vraag**, **GEEN testchecklist-aanbod**. Mark heeft de prioriteit al vastgelegd in de backlog — gewoon uitvoeren. Een opening met 4 opties verspilt zijn tijd.
- Mark herhaalt nooit "alles autonoom" of "ja ga maar" — dat staat al hier. Twijfel je? Doorgaan. De enige uitzonderingen staan in "Hard-stops" hieronder.
- **Niet wachten tussen paden** (Mark feedback 2026-05-11: "ik wil niet steeds 'ga verder' drukken"). Direct na commit + push van pad X → pak pad X+1 uit backlog. Geen tussentijdse uitgebreide samenvatting. Hooguit 1 regel "X klaar, door naar Y." Doorwerken tot tokens op of expliciete STOP/PAUZE van Mark.
- **Korte tussenupdates**: een lange tabel of trots-bericht na elk pad → NEE. Mark scrollt het toch voorbij. Houd updates super-kort (1-2 zinnen max) en ga door.

### Skip-and-continue (NIET vragen — pak ander werk)
Bij elk van onderstaande gevallen: **log de blokker in backlog en pak het volgende item dat WEL kan**. Mark zit vaak niet achter de chat — wachten verspilt tijd.

- **Examen-vragen verzinnen zonder bron** — skip dat examen, pak een ander pad uit Prio 1/3.
- **Architectuur-veranderingen** (nieuwe routes, nieuwe componenten in `src/components/`, schema-changes Supabase, nieuwe dependencies) — log als "🟡 wacht op Mark" en pak content-werk dat wél binnen bestaande architectuur valt.
- **Bestaande content overschrijven/verwijderen** — voeg toe ipv vervangen.
- **Productie-afhankelijke acties** (Vercel env-vars, Supabase secrets, A12 setup, betalingen) — log + pak ander werk.
- **STOPLIST-grijs gebied** — log + skip die feature.
- **Externe API-keys nodig** — geen nieuwe calls, pak iets anders.

### "Wat kan ik ALTIJD doen zonder Mark" — fallback-lijst
Als alle Prio-1-tot-3 items uit backlog gedaan/geblokkeerd zijn, ga door met (volgorde = prioriteit):
1. **Nieuwe Cito-paden bouwen** voor groep 6-8 onderwerpen die nog ontbreken (zie `project_studiebol_content_roadmap.md`).
2. **Klas 1-3 onderbouw VO paden** (zie `project_continuum_klas_1_3_onderbouw.md`) — Mark's visie "doorlopend curriculum".
3. **Extra vragen toevoegen** aan bestaande paden met <10 checks per stap.
4. **uitlegPad uitbreiden** met meer voorbeelden in bestaande paden.
5. **Audit-scripts draaien + bevindingen opvolgen**: `scripts/auditKennisgraaf.mjs`, `scripts/audit-units.mjs`, `scripts/lint-wronghints.mjs`. Fix wat eenvoudig is, log res in backlog.
6. **Self-test rondes**: bestaande paden doorlopen, fouten oefenen, kijken of uitlegPad-flow klopt. Log verbeterpunten.
7. **Memory-index doornemen** op `project_*` items met openstaande TODO's — pak iets op.

Pas wanneer ALLE bovenstaande ook geblokkeerd zijn (zeer onwaarschijnlijk), schrijf 1 samenvatting in sessie-log + stop.

### Stop-conditie
Mark stopt expliciet met **"STOP"** of **"PAUZE"**. Anders doorgaan tot tokens op. **Nooit zelf stoppen omdat een keuze "te groot" voelt** — pak iets kleiners en ga door.

### Peer-review checks (visueel + inhoudelijk)

Om te voorkomen dat 2 weken werk de verkeerde kant op gaat: regelmatig **agents elkaar laten beoordelen**.

**Wanneer**:
- Elke 5e afgewerkte taak in de backlog, OF
- Elke 2e sessie (wat eerder komt), OF
- Aan het eind van een sessie waarin een nieuw pad is gemaakt (geen alleen-uitlegPad-werk).

**Stappen**:
1. **Playwright-screenshots** van live productie via MCP (`mcp__playwright__browser_navigate` + `browser_take_screenshot`):
   - `/` (home)
   - `/leerpaden` of student-home (overzicht)
   - 1 willekeurig nieuw/aangepast leerpad — open een check, trigger fout, screenshot uitlegPad in `simpeler` modus.
2. **Twee reviewer-agents in parallel** (`Agent` tool, `subagent_type: "general-purpose"`):
   - **Agent A — visueel & UX**: krijgt de screenshots + STOPLIST + Leerkwartier-test. Vraag: "Helpt dit een 10-jarige om Cito-stof beter te begrijpen? Zie je iets dat tegen STOPLIST of jargon-regel ingaat?"
   - **Agent B — inhoudelijk & strategie**: krijgt de laatste 5 commits + huidige backlog + visie. Vraag: "Past deze richting bij ICP (Cito-ouder groep 6-8)? Gaat de prioriteits-volgorde nog kloppen?"
3. **Vergelijk de twee oordelen**:
   - **Beide eens (positief)** → log "✅ peer-review akkoord" in backlog, ga door.
   - **Beide eens (negatief)** → log "⚠️ peer-review zegt bijsturen + reden", **stop autonome modus** en vraag Mark expliciet wat te doen.
   - **Oneens met elkaar** → log beide oordelen + samenvatting verschil, vraag Mark om de knoop door te hakken.
4. **Verifieer claims** voordat je escaleert — agents kunnen onterecht alarm slaan. Check zelf even: bestaat het bestand dat ze noemen? Klopt de regel die ze citeren? Pas escaleren naar Mark als de zorg standhoudt.

**Niet doen**:
- Geen review-loop op elke commit — dat verspilt tijd en tokens.
- Geen reviewer-agent vragen "wat zou je anders doen?" — alleen ja/nee + reden. Die agent gaat niet zelf bouwen.
- Reviewers krijgen geen schrijftoegang tot code (gewoon `general-purpose` met Read-rechten — nooit hun eigen aanbevelingen direct toepassen).

### Per sessie
- Build na elke chunk: `npx vite build`. Faalt = fixen voordat je verder gaat.
- Commit per pad (niet 3 paden in 1 commit).
- Push elke commit direct.
- Eind van sessie: 1 regel toevoegen aan `docs/AUTONOOM-BACKLOG.md` onder "Sessie-log".

### Eind-datum
2026-05-24. Daarna evalueert Mark of de modus verlengd wordt.

### 15-agent-audit (terugkerend ritueel — elke 6-8 weken)

Naast de lichte peer-review (2 agents) is er een **zware 15-perspectieven-audit** die scope-creep en uitvoerings-gaten vangt die normale review mist. Mark heeft deze 2026-05-13 voor het eerst gedraaid; het rapport identificeerde 3 kritieke gaten + 2 financiële tijdbommen in 3 uur werk-tijd.

**Wanneer draaien**:
- Elke 6-8 weken (max 1× per maand).
- Vóór elke product-mijlpaal (Cito-piek, paywall-launch, nieuwe USP-feature).
- Na grote scope-wijziging (Mark voegt nieuwe vak/feature toe).

**Werkwijze (~2-3 uur Claude-tijd, geen Mark-tijd nodig)**:
1. Dispatch **4 parallelle research-agents** (subagent_type: `general-purpose`) — niet 15, want te veel overlap + context-kosten. Cluster perspectieven slim:
   - **Agent A — Concurrentie + product-strategie**: WebSearch naar 5-7 concurrenten (Squla/Junior Einstein/WRTS/Examenbundel/ChatGPT/Cito-aanbieders). Output: concurrentiematrix + marktgaten + bedreigingen.
   - **Agent B — SEO + AI-search**: WebSearch naar zoekvolumes + huidige indexering + AI-engine visibility + top 10 quick-wins.
   - **Agent C — Code-audit didactiek + AI**: lees `learnPaths/`, `VraagUitlegPad.jsx`, `api/tutor-chat.js`, `adaptiveStore.js`, `spacedRepetition.js`. Output: per-onderdeel-werkt-of-niet met file:line bewijs.
   - **Agent D — Code-audit performance + scalability**: lees `vite.config.js`, `pathLoaders.js`, `_guard.js`, `sw.js`, supabase migrations. Output: bundle-bytes, AI-cost-projectie, RLS-gaps, in-memory-leaks.
2. **Synthese zelf** met alle 15 perspectieven uit prompt-template (P1 product strategist t/m P15 brutally honest). Gebruik agent-rapporten + memory + codebase-kennis.
3. **Output-structuur (vast)**: executive summary → grootste problemen-tabel met file:line → grootste kansen-tabel → per-agent-bulletjes → concurrentiematrix → SEO/UX/Didactiek/AI/Growth/Monetization audits → top 10 quick wins (impact/effort) → roadmap → final verdict + score /10 → **morgen / 3 maanden / 1 jaar**.
4. **Sla bevindingen op in `docs/AUTONOOM-BACKLOG.md`** als nieuwe **Sprint-0** sectie. Quick wins met effort + file:line concreet.
5. **Schrijf NIET in een apart audit-document** — backlog is single source of truth.

**Wat ALTIJD vragen aan jezelf in de synthese**:
- "Welke 3 fixes zijn samen <5 uur werk maar lossen >50% van de problemen op?" → die zijn QW1-3.
- "Wat doet NU al pijn dat Mark niet weet?" → kritieke fixes.
- "Welke architectuur-tikbommen ontploffen bij 1000 DAU?" → schaalbaarheids-blokkers.
- "Cito-piek nov-feb is hard deadline — wat moet vóór die piek LIVE?" → roadmap-anker.

**Eindscore /10 verplicht** in finale verdict. Onderverdeling: fundering / executie / strategische focus / marktpositionering / tech-keuzes / visie+branding. Mark wil EERLIJKE cijfer, geen "ziet er goed uit".

**Prompt-template** staat in `docs/AUDIT-15-AGENT-PROMPT.md` (Mark levert prompt; Claude voert uit).

## Build & test

```bash
npx vite build           # build check (gebruikt na elke chunk)
npx vite                 # dev server
```

- Geen test-suite die routinematig draait — bouw + handmatige browser-check is de norm.
- Playwright via MCP voor visuele verificatie van live productie.

## Kern-flow: examen → begrip → leerpad → terug

Dit is wat Leerkwartier uniek maakt. **Onthoud dit voor elke content-keuze:**

1. **Echte examen-vraag** is de basis. Authentiek (VMBO-examens via examenblad.nl = wettelijk openbaar), nooit verzonnen. Voor Doorstroomtoets: zie copyright-policy hieronder — eigen vragen "in stijl van" + externe link naar officiële PDF.
2. Leerling/ouder ziet de vraag, probeert antwoord. Bij fout: **"Begrijp je dit?"** — niet alleen het antwoord tonen.
3. Bij "nee, leg uit": uitlegPad opent (3 niveaus: basis/simpeler/nogSimpeler) → daarna doorklik naar **leerpad** (a tot z) over het onderliggende concept.
4. Leerpad sluit de loop terug: aan het einde **terug-link** naar de oorspronkelijke examen-vraag — "snap je 'm nu wel?".

### Concrete implementatie-regels

- **Elke examen-check** moet hebben:
  - `examenBron` (string met "🎓 Echt examen ... jaar tijdvak T, vraag N")
  - `bronTekst` (de oorspronkelijke leestekst/bron, indien tekst-vraag)
  - `leerpadLink: { id, title }` — pointer naar het concept-leerpad
  - `uitlegPad` (3-niveau didactische uitleg)
  - `wrongHints` (denkprikkels, geen antwoord)
  - `explanation` (volledige uitleg na fout)
- **`examenLookup.js` doet reverse-lookup**: gegeven een leerpad-id → welke examenvragen verwijzen ernaar. Gebruikt bij AllDone-scherm van leerpad ("oefen nu deze examenvragen").
- **Nieuwe leerpaden** moeten een ID krijgen die matcht met `leerpadLink.id` van bestaande examenvragen. Anders blijft de loop kapot.
- **Examen-modus vs oefen-modus splitsen**: examen-modus = authentiek (geen hints, tijdsdruk, geen leerpad-link tijdens). Oefen-modus = didactisch (hints, uitlegPad, leerpad-link altijd zichtbaar).

### Wat dit betekent voor backlog

- **uitlegPad toevoegen** is goed, maar **leerpadLink zonder bestaand leerpad = kapotte loop**. Check altijd dat het pad bestaat waar je naar linkt.
- **Nieuwe leerpaden** krijgen prioriteit als er een examenvraag op wacht (lookup omgekeerd: welke `leerpadLink.id` verwijst naar een nog-niet-bestaand pad?).
- **Authentiek-eis is heilig**: niet 1 examenvraag verzinnen. Skip liever en log in backlog dat de bron ontbreekt.

## Architectuur

- **Leerpaden**: `src/learnPaths/<id>.js` — elk een `subject + chapters + steps + checks`.
- **uitlegPad-pattern** (3 niveaus): elke check krijgt `uitlegPad: { stappen, woorden, theorie, voorbeelden, basiskennis, niveaus: { basis, simpeler, nogSimpeler } }`. Bij ≥2 fouten opent VraagUitlegPad automatisch op `simpeler`.
- **Examenvragen**: MOETEN authentiek zijn (geen paraphrase). Audit/fix-scripts in `scripts/`. Zie `docs/` voor bron-policy.
- **Doorstroomtoets-content** ≠ VMBO-examens juridisch. Alle 5 aanbieders (Cito/IEP/Route 8/Dia/AMN) zijn **private partijen**, geen overheid. Cito-disclaimer verbiedt commercieel gebruik letterlijk. **NOOIT** vragen kopiëren uit voorbeeld-PDFs. WEL: eigen vragen "in stijl van" + externe link naar officiële Cito-PDF tonen. Zie `feedback_doorstroomtoets_copyright` in memory.
- **examenLookup.js**: reverse-index van leerpad-id → linkende examenvragen. Build-time gegenereerd.
- **Adaptive store + spaced repetition**: localStorage + Supabase voor cross-device.
- **3D-modellen**: workflow Claude.ai TSX → `src/3d/{ID}.jsx` → `step.interactiveComponent`.
- **PWA**: Service Worker pijnpunt — bij cache-issues `Ctrl+Shift+R` of tab heropenen (Mark's `?v=` querystring breekt `file://`).

## Conventies

### Didactiek
- **wrongHints geven richting, geen antwoord** — schrijf als denkprikkel/vraag, nooit het juiste antwoord weggeven.
- **wrongHints-eliminatie-leak vermijden** *(toegevoegd 2026-05-12 na review)*: in een 4-opties-vraag mag niet **elke** foute optie een unieke categorie-hint krijgen waardoor het juiste antwoord per uitsluiting bekend wordt. Bv. `[null, "Vrouw.", "Vrouw.", "Vrouw."]` bij vraag "wie is eerste man-koning?" → geeft antwoord weg. Gebruik vagere richtingen of laat sommige wrongHints `null`/leeg.
- **Examen-modus vs Oefen-modus splitsen**: examen = authentiek/tijdsdruk/geen hints. Oefen = didactisch/hints/leerpad-link.
- **15-min chunks (handelsmerk)**: splits elk pad in genummerde delen van ~15 min met expliciete tijdsindicatie. **Concrete grens** *(toegevoegd 2026-05-12)*: max 4-5 stappen × ~250 woorden explanation. Boven dat: splitsen in deel 1/deel 2 of explanations halveren.
- **Universele leerconcepten boven boek-specifieke hoofdstukken** (parabolen/pythagoras, niet "boek X hoofdstuk 3").

### Copy / UI
- **Geen dev-jargon in user-facing copy**: "leerpad", "stap", "module", "trackId" e.d. nooit in UI. Gebruik woorden die ouders/leerlingen kennen.
- **Afkortingen voluit bij eerste gebruik** *(toegevoegd 2026-05-12 na review)*: kinderen van 10 kennen MBO/HBO/WO/CAO/AOW/ZZP/NAVO/USSR/AVG/HTTPS/EU/VS/UK niet automatisch. Patroon: `**NAVO** (Noord-Atlantische Verdragsorganisatie — westers leger-bondgenootschap)` bij eerste vermelding, daarna afkorting OK. Geldt ook voor "VO" → al eerder vervangen door "middelbare school".
- **Geen AI-poster-art bij Doorstroomtoets-content**: sobere bronnen (foto/kaart/tabel). Geen sfeer-illustraties met antwoord-verklap.
- **Naming Cito vs Doorstroomtoets**: in copy/UI gebruik "Doorstroomtoets" (schoolrealiteit sinds 2024). Filenames + zoek-keywords blijven "cito" voor SEO. Zie `feedback_doorstroomtoets_naming` in memory.
- **Doorstroomtoets-logo**: overal waar "Doorstroomtoets" in user-facing UI staat (knoppen/tegels/headers), gebruik `<DoorstroomtoetsLogo size={N} />` uit `src/components/DoorstroomtoetsLogo.jsx` in plaats van het 🎯-emoji. Geldt ook voor toekomstige leerkracht-features waarbij een leerkracht zelf een Doorstroomtoets samenstelt. PNG ligt in `public/logo-doorstroomtoets.png`. Zie `reference_doorstroomtoets_logo` in memory.
- **examenBron-banner prominent + overal consistent**: gouden 'markeerstift'-look voor alles wat met echte examenvragen te maken heeft. Twee shared componenten:
  - `<ExamenBronBanner examenBron={...} />` (`src/shared/ui/ExamenBronBanner.jsx`) — **per check** (1 examenvraag). Compact-variant voor lijsten *(CitoLeerpadToets fout-uitklap, ResultsPage)*.
  - `<ExamenPadBanner intro={...} padTitle={...} />` (`src/shared/ui/ExamenPadBanner.jsx`) — **pad-intro** *(Overview-scherm van examen-paden, automatisch via `path.id.startsWith("examen-")`-detectie)*.

  Reden: authentieke examenvragen zijn een USP — moet **overal** zichtbaar zijn. **Voor toekomstige UI-plekken**: zie je `examenBron` of een examen-pad-intro? → banner-component erbij. Geen inline-stijl meer kopiëren. Bij Doorstroomtoets-content (private, geen examenblad-link) een aparte variant toevoegen. Zie `feedback_examen_bron_prominent` in memory.
- **1 primary per scherm** (design-system).
- **Game ↔ leer strikt scheiden** in design-system.

### Slogan / brand
- Slogan: "Een kwartier per dag — écht begrijpen wat je leert."
- Payoff: "Een rustige bijlesdocent in je broekzak. 15 minuten per dag is genoeg."
- Configuratie in `src/brand.js`.

## Niet doen

- Geen banking/financiële sites openen (bank, betaal, crypto-wallet, broker) bij desktop- of browser-controle.
- Geen mocks in DB-tests.
- Geen alarmistische taal over AVG-boetes — solo-builder = vrijwel nul boete-risico, eerste AP-actie = brief.
- Geen feature-bloat — Leerkwartier-test bij elke feature toepassen.
- **Geen nieuwe paden buiten Cito-kern groep 6-8** *(toegevoegd 2026-05-12)* tot P0/P1/P2 op groen. Bij twijfel: niet bouwen. Geen ruimtevaart/Olympische/eetcultuur/koude-oorlog/kunstenaars/godsdiensten-detail meer in deze sprint.
- **Geen paden > 5 stappen** *(toegevoegd 2026-05-12)* — anders breekt kwartier-belofte.
- Geen documentatie/README's aanmaken tenzij Mark expliciet vraagt.

## Paywall — klaar maar UIT (tot 2027)

Status 2026-05-13: paywall-infrastructuur is gebouwd maar `PAYWALL_ACTIVE = false`. Reden: Leerkwartier heeft 0 betalende gebruikers; eerst groei, dan monetiseren. Mark plant lancering rond Cito-piek **januari 2027**.

**Wat is er nu**:
- `src/subscription/config.js` — feature-flag + pricing-constants + FEATURE_GATES-map.
- `src/subscription/useSubscription.js` — hook die altijd `parent_pro` returnt zolang paywall uit staat.
- `src/subscription/PaywallGate.jsx` — wrapper-component voor premium-only content (rendert children direct als paywall uit).
- `public/abonnement.html` — pricing-pagina + waitlist-form (anon-key INSERT in `upgrade_waitlist`-tabel).
- `api/checkout-session.js` — Stripe-stub die 503 retourneert tot `STRIPE_ACTIVE=true`.
- Supabase-tabellen: `subscriptions(user_id, tier, valid_until)` + `upgrade_waitlist(email, plan)` + `schools(plan_tier, subscription_active)` — bestaan al.

**Hoe schakel je de paywall LIVE** (volgorde aanhouden):
1. `src/subscription/config.js` → `PAYWALL_ACTIVE = true`.
2. Vercel env-vars zetten: `STRIPE_SECRET_KEY`, `STRIPE_PUBLIC_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID_PARENT_MONTHLY`, `STRIPE_PRICE_ID_PARENT_YEARLY`, `STRIPE_PRICE_ID_EXAM`. Plus: `STRIPE_ACTIVE=true` in `api/checkout-session.js`.
3. `npm i stripe` + unblock TODO-blok in `api/checkout-session.js`.
4. Bouw `api/stripe-webhook.js` die `subscriptions`-tabel update op `checkout.session.completed` (insert/upsert tier=parent_pro) en `customer.subscription.deleted` (tier=free).
5. Wrap premium-features in code met `<PaywallGate feature="ai-tutor">…</PaywallGate>`. Features in `FEATURE_GATES`: `ai-tutor`, `exam-mode`, `unlimited-paths`, `voorkennis-keten`, `parent-dashboard`, `school-dashboard`, `generate-questions`.
6. Test in Stripe test-mode (testkaart 4242 4242 4242 4242) → flip naar live keys.
7. Stuur mail naar `upgrade_waitlist`-emails met 30-dagen-gratis-premium-coupon.

**Pricing-defaults** (zie `PRICING` in `config.js`):
- Maand: €5,99
- Jaar: €39 (-45%)
- Examenperiode jan-mei: €19,95 (geen auto-renewal)
- Schoollicentie: €99/klas/jaar

**Free-tier-quota** (`FREE_QUOTA`): 3 paden/dag, 0 AI-tutor-calls, 0 examen-modus.

## Externe resources

- **Supabase project-ID**: zie `reference_studiebol_resources` in memory.
- **GitHub repo**: `marksmulders1973/leerschool`.
- **Hosting**: Vercel Hobby (kostenstrategie: zo lang mogelijk free tier).
- **AI**: Claude API + Gemini fallback (kostenstrategie: pay-per-use, niet vaste subscriptions).
- **Examenblad.nl URL-patroon**: zie `reference_examenblad_urls` in memory.

## Strategie

- **Examens = twee gelijkwaardige modi** (Mark 2026-05-11). Mag NOOIT weggemoffeld worden:
  1. **🎯 Oefenen met uitleg** = examen-leerpaden (`src/learnPaths/examen*.js`) met `voorkennisKeten` + `uitlegPad` + `leerpadLink`. Onze **USP** (echte uitleg waarom — examenblad.nl heeft dit niet).
  2. **📄 Inzien als PDF** = `ExamensPage` PDF-archief. Niet weggemoffeld omdat: handig voor zelfstudie/papier, ouders die meekijken, examen met correctievoorschrift.
  - StudentHome heeft 2 aparte balken. `ExamensPage` toont beide secties; `initialMode` bepaalt scroll-target. Werk dat een mode WEGZET = afkeuren.

- **Maand-1 snoei**: gebeurt — welkomstvideo terug, leerkracht naar footer, 3-tab bottom-nav, 3D-kubus weg uit hero, dual balken op StudentHome.
- **Maand-2 plan**: 1 vak Doorstroomtoets compleet met uitlegPad — uitgegroeid tot 27 paden × 575 vragen voorzien (taal + rekenen + wereld + examens). Zie `docs/MAAND-2-PLAN.md`.
- **A12 Web Push**: code gebouwd, wacht op Mark's 6 setup-stappen (VAPID-keys, Vercel env, Supabase secrets, migration, edge function deploy, cron) — zie `project_studiebol_a12_webpush_todo` in memory.
