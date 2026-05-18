# Recovery-plan Leerkwartier — laptop-crash-proof

**Doel:** als Mark's laptop kapot gaat, moet hij binnen 30 min weer kunnen doorwerken
met dezelfde Claude Code + Leerkwartier-context.

Laatst geüpdatet: 2026-05-18.

---

## 1. Wat staat WAAR (cloud-backups)

| Wat | Locatie | Hoe terughalen |
|---|---|---|
| **Hele codebase** | GitHub `marksmulders1973/leerschool` | `git clone https://github.com/marksmulders1973/leerschool.git` |
| **Memory (Claude context)** | Ook in repo: `docs/recovery/memory-backup/` | Kopieer naar `~/.claude/projects/<dir>/memory/` |
| **Productie-database** | Supabase project `uxqnzrymyjbcpuzqktdm` | dashboard.supabase.com/project/uxqnzrymyjbcpuzqktdm |
| **Productie-app** | Vercel (auto-deploy van `main`-branch) | dashboard.vercel.com |
| **Domein** | `leerkwartier.app` (.com + .nl bezet door Leatherbox) | DNS via Vercel-domain-config |
| **Examen-PDFs** | `tmp/` lokaal | NIET gebackupt — opnieuw downloaden via examenblad.nl |

---

## 2. Recovery-stappen na laptop-crash

### Stap 1 — nieuwe laptop bedrijfsklaar (~10 min)

```bash
# Node.js 18+ + Git + VSCode (of editor naar keuze)
# https://nodejs.org/
# https://git-scm.com/

# Claude Code installeren
npm install -g @anthropic-ai/claude-code

# Of: https://docs.claude.com/claude-code/getting-started

# Repo clonen
git clone https://github.com/marksmulders1973/leerschool.git
cd leerschool
npm install
```

### Stap 2 — Memory terugzetten (~5 min)

Memory zit in repo onder `docs/recovery/memory-backup/`. Kopiëren naar Claude-context-dir:

**Windows**:
```powershell
$src = ".\docs\recovery\memory-backup\*"
$dst = "$env:USERPROFILE\.claude\projects\C--Users-mark-\memory\"
New-Item -Path $dst -ItemType Directory -Force | Out-Null
Copy-Item $src $dst -Force
```

**macOS/Linux**:
```bash
mkdir -p ~/.claude/projects/$(pwd | sed 's|/|-|g' | sed 's|^-||')/memory/
cp docs/recovery/memory-backup/* ~/.claude/projects/$(pwd | sed 's|/|-|g' | sed 's|^-||')/memory/
```

### Stap 3 — MCP-servers reconnecten (~10 min)

In Claude Code:
- `/mcp` → check welke servers er zijn
- Loop in (Anthropic + Supabase + Gmail + Playwright + eventueel Notion/Figma)

Specifiek voor Leerkwartier nodig:
1. **Supabase MCP** — beheer DB + apply migrations
2. **Playwright MCP** — browser-testing in dev/productie
3. **Gmail MCP** (optioneel) — voor herstel-mails

### Stap 4 — Env-vars + secrets (~5 min)

`.env`-bestand (lokaal) is NIET in git en NIET in backup om veiligheidsredenen. 
Reconstrueer via:
- **Anthropic API-key**: Mark heeft die in zijn password-manager / 1Password / op een sticker.
- **Supabase keys**: dashboard.supabase.com → Project Settings → API.
- **Vercel env**: vercel.com → leerkwartier project → Settings → Environment Variables.

`.env`-template:
```
ANTHROPIC_API_KEY=sk-ant-...
SUPABASE_URL=https://uxqnzrymyjbcpuzqktdm.supabase.co
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

### Stap 5 — Dev-flow oppakken

```bash
# Dev server starten
npx vite --port 5173 --host 127.0.0.1

# Browser openen op http://127.0.0.1:5173/
# Of voor productie: https://leerkwartier.app/
```

Voor split-screen-werkwijze (browser links + terminal rechts):
zie `memory/feedback_playwright_split_screen.md` — script staat in die memory.

---

## 3. Project-overzicht in 1 minuut

**Leerkwartier** (was: Studiebol) — NL leer-app voor groep 1-8 PO + VMBO/HAVO/VWO VO.
**ICP**: bezorgde Doorstroomtoets-ouder groep 6-8.
**Slogan**: "Een kwartier per dag — écht begrijpen wat je leert."
**Tech**: Vite + React + Supabase + Vercel + Anthropic Claude API + optioneel Gemini fallback.
**Status 2026-05-18**: 220 leerpaden, Doorstroomtoets-trio compleet (147+/150), 25 VMBO-examen-paden, MVP Cito-piek-ready jan 2027.

**Doelstelling**: app vullen + verfijnen vóór Cito-piek februari 2027.
**Strategie**: Cito-kern groep 6-8 versterken, P0-P1 audit-items eerst.

---

## 4. Werkwijze Mark ↔ Claude Code

Specifieke afspraken (allemaal in memory-files vastgelegd):

| Memory-file | Wat |
|---|---|
| `feedback_git_workflow.md` | Claude commit + pusht zelf na elke wijziging |
| `feedback_ui_live_iteratie.md` | Bij UI-wijzigingen: dev server + Playwright + edit-loop |
| `feedback_playwright_split_screen.md` | PowerShell-script voor split-screen browser/terminal |
| `feedback_max_autonoom.md` | Claude werkt zo lang mogelijk autonoom door |
| `feedback_geen_keuzemenu_bij_ga_verder.md` | Bij "ga door" → bovenste backlog-taak |
| `feedback_15min_chunks.md` | Leerpaden in delen van ~15 min |
| `CLAUDE.md` (in repo-root) | Volledige Claude-instructies voor dit project |

---

## 5. Lopende projecten + open todo

Zie `docs/AUTONOOM-BACKLOG.md` voor laatste status (eind-2026-05-18: P0 + P1 + P2 deels compleet).
Zie `memory/project_studiebol_audit4_p1_todo.md` voor volgende stappen.

Specifieke openstaande items (live):
- Supabase RPC `claim_link_code` is geapplyd (bug-fix `link_codes.child_name` + UI-fix).
- KoppelcodeBanner op StudentHome + OuderDashboard input-fix live op productie.
- Niveau-wizard live op productie.
- 220 paden in `src/learnPaths/pathManifest.generated.json`.

---

## 6. Belangrijke contact-info

- **Mark's email**: Mark-smulders@hotmail.com (admin in Supabase, RLS-detectie in code)
- **GitHub repo**: github.com/marksmulders1973/leerschool
- **Live app**: https://leerkwartier.app
- **Supabase project ID**: `uxqnzrymyjbcpuzqktdm`
- **Vercel project**: leerkwartier (auto-deploy `main`)

---

## 7. Wat NIET in deze backup zit

- `.env`-bestanden (secrets — niet in git, niet in mail)
- Lokale `tmp/`-PDFs (examen-bronnen)
- `node_modules/` (npm install regenereert)
- `dist/` (build-output)
- Browser-OAuth-tokens (Google login)
- 1Password / password-manager-inhoud

**Backup van secrets**: zorg dat alle API-keys in een password-manager staan (1Password / Bitwarden / KeePass). Niet alleen op deze laptop.

---

## 8. Test-recovery (zonder echte crash)

Probeer 1x per kwartaal:
1. Clone repo op vreemde machine (collega-laptop / cloud-VM).
2. Volg stap 1-5 hierboven.
3. Open productie + check of je kunt mailen + Supabase MCP.
4. Maak een test-commit + push.

Als dit werkt: backup is écht recover-baar.

---

## Wijzigingen aan dit document

Bij grote werkwijze-wijzigingen of nieuwe MCP-servers: update sectie 3 + 4 hier en commit.
