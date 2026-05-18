# Browser meekijken bij Playwright MCP

Mark wil in zijn 2e scherm meekijken wanneer ik (Claude Code) via
Playwright MCP een browser bedien. Eerlijk: zoals het nu draait, opent
de browser in een **achtergrond-proces dat niet zichtbaar is** op jouw
scherm. Jij ziet alleen mijn screenshots/snapshots in deze chat.

Drie routes om dat te fixen, oplopend in moeite:

## Route 1 — Screenshots inline in chat (geen config-wijziging, 0 min)

Ik kan na elk significant tool-call de PNG via `Read` als image embedden
in mijn chat-antwoord. Dan zie jij visueel wat ik zie, **niet live maar
~30 sec achteraf**. Werkt nu al, ik moet het alleen consequenter doen.

Voor jou: vraag expliciet "stuur screenshot" bij elke browser-stap, of
zeg "doe per stap 1 screenshot in chat".

**Pluspunt**: geen setup-werk.
**Min**: niet live.

## Route 2 — Headed mode (Playwright opent zichtbare Chrome)

De Playwright MCP-server start een browser. Default = `headless: true`.
Verander naar `headless: false` → er opent op jouw scherm een echte
Chrome-window dat ik bedien terwijl jij meekijkt.

### Stap 1 — vind je MCP-config

Open in een terminal:

```powershell
notepad "$env:APPDATA\Claude\claude_desktop_config.json"
# of als je Claude Code via een eigen config draait:
notepad "$env:USERPROFILE\.claude\mcp.json"
```

### Stap 2 — pas Playwright MCP entry aan

Zoek het `mcpServers`-blok en kijk naar de `playwright`-entry. Voeg een
`args`-argument toe voor headed mode. Voorbeeld:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest", "--browser=chromium", "--no-headless"]
    }
  }
}
```

Belangrijkste flag: `--no-headless` (of `--headless=false` afhankelijk
van versie). Bij nieuwere Playwright-MCP-versies kan het ook
`--browser-launch-options '{\"headless\":false}'` zijn.

### Stap 3 — herstart Claude Code

Sluit en heropen Claude Code (of de IDE waarin het draait). De nieuwe
MCP-config wordt bij start geladen.

### Stap 4 — test

Vraag mij: "open leerkwartier.app in de browser". Er zou nu een
Chrome-window moeten verschijnen op jouw scherm. Snap dat venster naar
je 2e scherm met `Win`+`Shift`+`→` (zie `SIDE-BY-SIDE-LAYOUT.md`).

**Pluspunt**: live meekijken, jij ziet elke klik en navigatie.
**Min**: 5-min setup-werk eenmalig.

## Route 3 — Attach aan jouw eigen Chrome via CDP (gevorderd)

Open Chrome met remote-debugging-flag. Ik connect dan via Chrome
DevTools Protocol aan **jouw browser-sessie** in plaats van een nieuwe
te starten. Jij ziet alles in jouw eigen Chrome.

### Stap 1 — sluit alle Chrome-windows

```powershell
taskkill /F /IM chrome.exe
```

### Stap 2 — start Chrome met debugging-port

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" `
  --remote-debugging-port=9222 `
  --user-data-dir="$env:LOCALAPPDATA\Google\Chrome\User Data"
```

### Stap 3 — pas MCP-config aan om te attachen

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest",
        "--cdp-endpoint=http://localhost:9222"
      ]
    }
  }
}
```

### Stap 4 — herstart Claude Code + test

Mijn tool-calls werken nu in **jouw** Chrome — login-sessies (claude.ai,
Supabase studio, etc.) zijn beschikbaar omdat ik je profile gebruik.

**Pluspunt**: ultieme integratie, jouw sessies beschikbaar.
**Min**: vereist Chrome handmatig starten met debug-flag elke keer, plus
mogelijk security-issue als je vergeet de debug-port te sluiten.

## Welke route nu doen?

| Doel | Route |
|---|---|
| Snel testen of het werkt | 1 (niets installeren) |
| Permanent live meekijken | 2 (5 min config) |
| Met jouw login-sessies werken | 3 (gevorderd) |

**Mijn advies**: **Route 2** voor jouw 2-scherm-setup. Eenmalig
config-flag toevoegen, voortaan zie jij elke klik en typetik in real-time
op je 2e monitor terwijl ik in Claude Code rechts werk.

## Hoe doe ik nu?

Tot je Route 2 hebt opgezet, sluit ik in elk antwoord 1-2
screenshot-Read-blokken in zodat je tenminste visueel meekan. Bv. na een
navigatie of na een fix-deploy-check.
