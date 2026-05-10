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
