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

## Architectuur

- **Leerpaden**: `src/learnPaths/<id>.js` — elk een `subject + chapters + steps + checks`.
- **uitlegPad-pattern** (3 niveaus): elke check krijgt `uitlegPad: { stappen, woorden, theorie, voorbeelden, basiskennis, niveaus: { basis, simpeler, nogSimpeler } }`. Bij ≥2 fouten opent VraagUitlegPad automatisch op `simpeler`.
- **Examenvragen**: MOETEN authentiek zijn (geen paraphrase). Audit/fix-scripts in `scripts/`. Zie `docs/` voor bron-policy.
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
