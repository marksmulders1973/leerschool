---
name: UI-wijzigingen — live iteratie-loop met dev server + meekijken
description: Vaste werkwijze voor alle UI/visuele/copy-wijzigingen waar Mark direct kan meekijken: edit → vite HMR → playwright screenshot → toon → vraag akkoord → commit. Mark bevestigde 2026-05-18 "werkt 100%".
type: feedback
originSessionId: 37638b7e-fef5-47c3-ba00-7ae3f9b856bb
---
Bij **elke** UI/visuele/copy-wijziging in de Leerkwartier-app (HomePage, tegels, knoppen, layout, kleur, copy): live iteratie-loop draaien zodat Mark mee kan kijken. Vercel-deploy is te traag voor visuele bijstelling (~1-2 min per refresh).

**Why:** Mark 2026-05-18 expliciet bevestigd ("deze werkwijze werkt voor mij 100% goed"). Het iteratie-tempo (edit → HMR → screenshot → feedback) maakt dat hij in dezelfde sessie 4-5 varianten kan beoordelen ipv 1 per deploy. Past bij zijn "30-sec autonomie-regel" omdraait: snelle visuele bevestiging spaart hem tijd.

**How to apply — vaste stappenvolgorde:**

1. **Wijzig de code** met Edit (of Write).

2. **Dev server starten** (in achtergrond met `run_in_background: true`) als die niet draait:
   ```bash
   cd "/c/Users/mark-/Desktop/Studiebol/leerschool" && npx vite --port 5173 --host 127.0.0.1
   ```
   Wacht-loop tot "ready" met `grep -q "Local:" output` (Bash met `run_in_background`).

3. **Playwright browser navigate** naar `http://127.0.0.1:5173/` (of relevante deeplink).

4. **Snap-script draaien** (zie `feedback_playwright_split_screen.md`) — browser links, terminal rechts. Doe dit alleen de eerste keer per sessie.

5. **Modals dismiss** bij fresh localStorage:
   - **AgeGate**: zichtbaar bij eerste bezoek. Klik op knop `"Ik ben 16 jaar of ouder"` (volwassene-categorie).
   - **Welkomstvideo**: zichtbaar bij eerste bezoek. Klik op knop met `aria-label="Sluiten"` (×).
   - **Sneller alternatief**: `browser_evaluate` met juiste localStorage-key — maar AgeGate-key was 2026-05-18 niet `lk_age_band_v1`, dus klik-route is betrouwbaarder tot key bekend is.

6. **Screenshot maken** met `browser_take_screenshot` (`fullPage: true`). Bestand belandt in `C:\Users\mark-\<name>.png` (NIET in `.playwright-mcp/`).

7. **Screenshot tonen** aan Mark met `Read` op het PNG-pad — image inline in chat.

8. **Vraag feedback in 1 zin** ("Klopt het zo? Anders zeg wat nog moet"). GEEN keuzemenu (zie `feedback_geen_keuzemenu_bij_ga_verder`).

9. **Iteratie**: bij feedback → edit → `browser_navigate` opnieuw (HMR werkt, maar full reload is betrouwbaarder) → wacht 2s → screenshot → toon.

10. **Direct na elke wijziging committen + pushen** (Mark 2026-05-18: "push voortaan maar direct"). Géén "wacht op akkoord" meer — Mark ziet het via Vercel-deploy én via de live dev-screenshot. Per logische micro-stap een commit; meerdere deploys op 1 sessie zijn OK. Conform `feedback_git_workflow`.

**Niet doen:**
- Niet teveel screenshots in 1 ronde — 1 per variant.
- Geen lange uitleg waarom een keuze gemaakt is — direct het resultaat tonen.
- Niet "ik wacht op je akkoord voor commit" zeggen — direct pushen na elke micro-stap.

**Wanneer NIET deze loop:**
- Pure code-/data-/build-wijzigingen zonder visueel effect: gewoon build + commit + push.
- Autonome modus (CLAUDE.md "Autonome modus") — Mark zit dan niet mee te kijken.

**Verwante memories:**
- `feedback_playwright_split_screen.md` — auto-snap browser/terminal naast elkaar.
- `feedback_done_signal.md` — "klaar voor gebruik" aan einde van pakket.
- `feedback_git_workflow.md` — commit + push altijd zelf doen, geen toestemming vragen.
