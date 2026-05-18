# Side-by-side layout — 2× Claude tegelijk

Mark wens 2026-05-18: bij gebruik van 2 Claude-instances tegelijk
(bv. Claude Code in terminal links + Claude voor Chrome rechts, of
2× Claude Code parallel) wil hij ze allebei goed zichtbaar hebben,
liefst groter dan default-helft.

## Snelste — Windows 11 ingebouwd

### 50/50 split (klassiek)

| Toets | Effect |
|---|---|
| `Win` + `←` | Actief venster naar linker helft |
| `Win` + `→` | Actief venster naar rechter helft |
| `Win` + `↑` | Maximaliseren / "ongedaan" snap |
| `Win` + `↓` | Minimaliseren / verkleinen |

Workflow:
1. Open Claude Code (terminal).
2. Druk `Win+←` → terminal links.
3. Windows toont rechts thumbnails van andere vensters; klik Chrome
   (waar Claude.ai of jouw leerkwartier.app draait).
4. Klaar: 50/50 layout.

### Snap Layouts (Windows 11, groter dan helft)

Hover over de **maximaliseer-knop** (□) rechtsboven in een venster.
Er verschijnt een grid met layout-opties:

- `▮▮` — 50/50
- `▮ ▮ ▮` — 3-kolom
- `▮▰` of `▰▮` — **70/30** (groot-klein) ← dit wil jij
- `▮▮ /▮▮` — 4-kwadrant

Hover op de grote-helft → snapt het terminal-venster daar; rechts
verschijnen thumbnails om de Chrome te kiezen.

### Sneltoets `Win` + `Z` → Snap Layouts direct openen

Werkt zonder hover. Cijfers 1-4 kiezen daarna de layout, daarna de
positie.

## Groter dan 70/30: PowerToys FancyZones (gratis Microsoft-tool)

Voor custom layouts (bv. 80/20, of 3 kolommen ongelijk):

1. Installeer PowerToys: `winget install Microsoft.PowerToys`
2. Open PowerToys → FancyZones aan.
3. **Layout-editor** (sneltoets `Win`+`Shift`+`\``) → kies of maak
   custom layout.
4. Voorbeeld voor jouw setup (1280-breed monitor):
   - **Zone 1**: links, 850 px breed (Chrome browser)
   - **Zone 2**: rechts, 450 px breed (Claude Code terminal)
5. Sleep vensters met `Shift` ingedrukt naar de gewenste zone — snap
   automatisch.

Voordelen FancyZones:
- Custom verhoudingen (60/40, 70/30, 80/20)
- Layout wordt onthouden per app
- Werkt voor 2-monitor-setups
- `Win`+`Ctrl`+`←/→` voor zone-naar-zone-springen

## 2× Claude Code naast elkaar

Als je 2 Claude Code-sessies parallel wil draaien (bv. ene voor
content-werk, andere voor browser-testing):

1. Open 2× terminal (Windows Terminal, PowerShell, of cmd).
2. In elk: `claude` of jouw Claude Code-launcher.
3. `Win`+`Z` → kies 50/50 layout, plaats beide.

Beide draaien onafhankelijk, eigen context, eigen tools. Handig voor:
- Parallel werken aan 2 features
- Eén voor monitoring/Playwright, ander voor content
- A/B-testen van prompts

## Voor jouw specifieke screenshot-layout

In jouw plaatje staat links Chrome (groot, ~60%), rechts Claude Code
terminal (~40%). Exact dat ratio = **70/30 Snap Layout** (Windows 11)
of FancyZones met 60/40-zones.

Direct doen:
```
1. Open Chrome → druk Win+Z → kies de "70/30"-icoon → klik linker grote vak
2. Open Claude Code terminal → het venster verschijnt rechts
3. Klaar — beide blijven gefocust naast elkaar
```

## Tips voor jouw workflow

- **2 monitoren**: druk `Win`+`Shift`+`←/→` om een gesnapt venster
  naar de andere monitor te verplaatsen, met behoud van snap.
- **Virtual desktops** (Win+Ctrl+D): scheid "code/research" en
  "browser/app-test" workflows. `Win+Ctrl+←/→` switch ertussen.
- **Window-positie onthouden**: PowerToys FancyZones onthoudt het
  per app. Open Claude Code → snapt automatisch terug naar dezelfde
  zone als vorige sessie.
- **Sluiten**: `Win+Down` haalt snap weg zonder af te sluiten.

## Niet vergeten

- Chrome heeft eigen "two-page side-by-side"-modus in dev-tools, maar
  dat is voor binnen-Chrome-views. Voor jouw use (Chrome + Terminal)
  gebruik je de OS-snap.
- Mac-users (niet jouw setup, maar voor referentie): gebruik
  Rectangle.app of Magnet voor vergelijkbare snap-shortcuts.
