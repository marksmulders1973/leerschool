# Leerkwartier — projectinstructies

> Lees dit eerst. Overrides default-gedrag.

## Visie

**Leerkwartier** = "een kwartier per dag, écht begrijpen wat je leert." Voorheen Studiebol.

- **ICP (primair)**: bezorgde Cito-ouder groep 6-8. Alle product/content/marketing-keuzes hier op richten.
- **Secundair / persoonlijk**: VMBO-dochter — geen marketing-doelgroep.
- **Leerkwartier-test** bij elke nieuwe feature: "Helpt dit een 10-jarige om iets BETER te BEGRIJPEN?" Zo nee → niet bouwen.
- **STOPLIST**: zie `docs/STOPLIST.md` — 6 verboden categorieën + OBLITERATOR-uitzondering (Mark's zoon).

## Workflow

- **Git**: na code-wijzigingen automatisch `git add` + `commit` + `push` zonder te vragen (Mark gaf doorlopende toestemming).
- **Niet skippen**: nooit `--no-verify`, geen amend van gepushte commits, geen force-push naar main.
- **Klaar-voor-gebruik signaal**: bij langer werk altijd "klaar voor gebruik" als afsluiting, zodat Mark weet wanneer hij kan testen.
- **Bij vage bug-melding**: eerst 1-2 gerichte reproductie-vragen, niet blind fixen.
- **30-sec autonomie-regel**: als Mark 30 seconden niet reageert op een vraag, doorgaan zonder hem tot tokens op zijn.

## Autonome modus (actief t/m 2026-05-24)

Mark heeft Claude Code 2 weken **vrij baan** gegeven voor content-werk. Geen mening vragen, gewoon doorpakken.

### Doel
Cito-toets + examens versterken: meer leerpaden, meer authentieke examen-vragen, alle vragen voorzien van uitlegPad.

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

### Hard-stops (HIER WEL VRAGEN)
Stop en vraag Mark expliciet bij:
- **Examen-vragen verzinnen** — als de bron-PDF niet beschikbaar is, NIET zelf vragen verzinnen. Skip dat examen, ga door met volgend pad. Authentiek-eis is heilig.
- **Architectuur-veranderingen** (nieuwe routes, nieuwe componenten in `src/components/`, schema-changes Supabase, nieuwe dependencies).
- **Bestaande content overschrijven of verwijderen** — alleen toevoegen, nooit vervangen.
- **Productie-afhankelijke acties** — Vercel env-vars, Supabase secrets, A12 setup, kosten-betalingen.
- **STOPLIST-grijs gebied** — als iets twijfelachtig in een verboden categorie valt.
- **Externe API-keys nodig** — geen calls naar Anthropic/Gemini buiten wat al draait.

### Stop-conditie
Mark stopt expliciet met **"STOP"** of **"PAUZE"**. Anders doorgaan tot tokens op.

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

## Build & test

```bash
npx vite build           # build check (gebruikt na elke chunk)
npx vite                 # dev server
```

- Geen test-suite die routinematig draait — bouw + handmatige browser-check is de norm.
- Playwright via MCP voor visuele verificatie van live productie.

## Kern-flow: examen → begrip → leerpad → terug

Dit is wat Leerkwartier uniek maakt. **Onthoud dit voor elke content-keuze:**

1. **Echte examen-vraag** is de basis. Authentiek (Cito-eindtoets / examenblad.nl), nooit verzonnen.
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
- **examenLookup.js**: reverse-index van leerpad-id → linkende examenvragen. Build-time gegenereerd.
- **Adaptive store + spaced repetition**: localStorage + Supabase voor cross-device.
- **3D-modellen**: workflow Claude.ai TSX → `src/3d/{ID}.jsx` → `step.interactiveComponent`.
- **PWA**: Service Worker pijnpunt — bij cache-issues `Ctrl+Shift+R` of tab heropenen (Mark's `?v=` querystring breekt `file://`).

## Conventies

### Didactiek
- **wrongHints geven richting, geen antwoord** — schrijf als denkprikkel/vraag, nooit het juiste antwoord weggeven.
- **Examen-modus vs Oefen-modus splitsen**: examen = authentiek/tijdsdruk/geen hints. Oefen = didactisch/hints/leerpad-link.
- **15-min chunks (handelsmerk)**: splits elk pad in genummerde delen van ~15 min met expliciete tijdsindicatie.
- **Universele leerconcepten boven boek-specifieke hoofdstukken** (parabolen/pythagoras, niet "boek X hoofdstuk 3").

### Copy / UI
- **Geen dev-jargon in user-facing copy**: "leerpad", "stap", "module", "trackId" e.d. nooit in UI. Gebruik woorden die ouders/leerlingen kennen.
- **Geen AI-poster-art bij Cito-content**: sobere bronnen (foto/kaart/tabel). Geen sfeer-illustraties met antwoord-verklap.
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
- Geen documentatie/README's aanmaken tenzij Mark expliciet vraagt.

## Externe resources

- **Supabase project-ID**: zie `reference_studiebol_resources` in memory.
- **GitHub repo**: `marksmulders1973/leerschool`.
- **Hosting**: Vercel Hobby (kostenstrategie: zo lang mogelijk free tier).
- **AI**: Claude API + Gemini fallback (kostenstrategie: pay-per-use, niet vaste subscriptions).
- **Examenblad.nl URL-patroon**: zie `reference_examenblad_urls` in memory.

## Strategie

- **Maand-1 snoei**: gebeurt — welkomstvideo terug, leerkracht naar footer, 3-tab bottom-nav, 3D-kubus weg uit hero, dual balken op StudentHome.
- **Maand-2 plan**: 1 vak Cito compleet met uitlegPad — uitgegroeid tot 27 paden × 575 vragen voorzien (taal + rekenen + wereld + examens). Zie `docs/MAAND-2-PLAN.md`.
- **A12 Web Push**: code gebouwd, wacht op Mark's 6 setup-stappen (VAPID-keys, Vercel env, Supabase secrets, migration, edge function deploy, cron) — zie `project_studiebol_a12_webpush_todo` in memory.
