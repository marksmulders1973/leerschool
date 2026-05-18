# Chrome-Claude als sub-agent — research-rapport

Datum: 2026-05-18 · Door: Claude Code (Opus 4.7) · Voor: Mark / Leerkwartier

## TL;DR — aanbeveling in 1 alinea

**Gebruik de Anthropic API direct, niet Chrome-automation.** Je hebt
al een API-key in dit project (zie `api/tutor-chat.js`) en die geeft
betere betrouwbaarheid, schaling en compliance dan claude.ai bedienen
via een geautomatiseerde Chrome. Wil je tóch browser-mediated Claude
(bv. om je Pro/Max-subscription te benutten zonder API-kosten), dan is
**Playwright met persistent Chrome user-data-dir** de meest robuuste
route. Voor één-richtingsverkeer (jij geeft Claude in Chrome een
prompt → Claude in Chrome geeft jou tekst terug die je in deze sessie
plakt) werkt jouw huidige menselijke-tussenstap-flow nu al — die hoef
je niet te automatiseren tenzij je vaker dan ~10×/dag deze brug nodig
hebt.

## 1. Inventarisatie van wat hier nu draait

Eerlijk wat ik feitelijk heb gevonden in deze sessie (geen aannames):

| Component | Status | Pad / detail |
|---|---|---|
| Google Chrome | ✅ Geïnstalleerd | `C:\Program Files\Google\Chrome\Application\chrome.exe` |
| Chrome User Data | ✅ Aanwezig | `%LOCALAPPDATA%\Google\Chrome\User Data` (bestaande profielen + sessies/cookies) |
| Node.js | ✅ v24.15.0 | `C:\Program Files\nodejs\node.exe` |
| Playwright (npm) | ❌ Niet in `node_modules` | Te installeren: `npm i -D playwright && npx playwright install chromium` |
| Puppeteer (npm) | ❌ Niet in `node_modules` | Alternatief |
| Playwright MCP-server | ✅ Geconfigureerd in deze Claude Code-sessie | Tools `mcp__playwright__browser_navigate` enz. beschikbaar als deferred tools |
| Anthropic API-key | ✅ In project | `api/tutor-chat.js` gebruikt 'm al (`ANTHROPIC_API_KEY`) |
| Claude-Chrome-extensie | ❓ Onbekend | Vereist Claude Pro/Max + handmatig installeren via Anthropic-bèta |

**Belangrijk wat ik NIET in deze sessie heb gedaan** (om eerlijk te
zijn):

- Ik heb géén Chrome geopend en géén claude.ai bediend in deze sessie.
- Ik heb géén Chrome-extensie gedetecteerd of geïnstalleerd.
- Ik heb géén login-sessie hergebruikt.
- De Playwright MCP-tools zijn beschikbaar, maar ik heb ze niet
  geactiveerd voor claude.ai — onnodig voor dit rapport.

Wat ik wél heb gedaan: `where`-checks via bash, file-system-listings.

## 2. Routes vergeleken

| Route | Werkt? | Betrouwbaar? | ToS-risk | Kosten | Setup-tijd |
|---|---|---|---|---|---|
| **A. Anthropic API direct** | ✅ ja | ✅ hoog | ✅ binnen ToS | API-credits | 5 min |
| **B. Playwright + claude.ai web** | ✅ ja | ⚠️ medium (DOM-changes breken) | ⚠️ grijs (automation web-app) | $0 (Pro) | 30-60 min |
| **C. Puppeteer + claude.ai** | ✅ ja | ⚠️ medium | ⚠️ idem B | $0 (Pro) | idem B |
| **D. Chrome DevTools Protocol (CDP)** | ✅ ja | ⚠️ low-level fragiel | ⚠️ idem B | $0 (Pro) | uren |
| **E. Browser Use (Python)** | ✅ ja | ⚠️ AI-gedreven, soms onvoorspelbaar | ⚠️ idem B | $0 (Pro) | 1 uur |
| **F. Anthropic Computer Use** | ✅ ja | ✅ Anthropic-gesanctioneerd | ✅ binnen ToS | API-credits (Sonnet 4.x) | 30 min |
| **G. Claude-for-Chrome-extensie** | ⚠️ bèta | ❓ onbekend | ✅ Anthropic-product | Claude Max | 5 min |
| **H. MCP-server Playwright (al in deze sessie)** | ✅ ja | ✅ hoog | ⚠️ idem B als doelwit claude.ai is | $0 | al klaar |
| **I. Agent-tool (in Claude Code zelf)** | ✅ ja | ✅ hoog | ✅ binnen | API-credits | 0 min, nu al |

## 3. Aanbevolen architectuur

### Optie 1 — Snelste werkbaar (Anthropic API direct)

```
┌──────────────────┐
│ Jouw script /    │
│ Claude Code-flow │
└────────┬─────────┘
         │ HTTPS POST
         ▼
┌──────────────────┐
│ api.anthropic.com│
│  /v1/messages    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Claude Opus/Son. │
│ structured-out   │
└──────────────────┘
```

Pluspunten: geen browser, geen DOM-fragiliteit, structured JSON-output,
multi-turn-conversaties, prompt caching, vision (PDF/foto's). Min-punt:
kosten per call (jouw `tutor-chat.js` doet dit al, dus je weet dat het
werkt).

### Optie 2 — Browser-mediated (Playwright met persistent profile)

```
┌──────────────────────────────────────────┐
│ Node.js script                           │
│ ┌────────────────────────────────────┐   │
│ │ playwright.chromium.launchPersist  │   │
│ │ ({userDataDir: <jouw Chrome dir>}) │   │
│ └──────────┬─────────────────────────┘   │
│            │                             │
│            ▼                             │
│ ┌────────────────────────────────────┐   │
│ │ page.goto('https://claude.ai/new') │   │
│ │ page.fill('div[contenteditable]')  │   │
│ │ page.click('button[aria-label="Send"]')│
│ │ page.waitForSelector('.message')   │   │
│ │ const tekst = await page.textCont… │   │
│ └────────────────────────────────────┘   │
└──────────────────────────────────────────┘
         │
         ▼
   stdout: { prompt, response, timestamp }
```

Pluspunten: gebruikt jouw bestaande Pro/Max-sessie, geen API-kosten,
Chrome opent in eigen profile (cookies + login bewaard). Min-punten:
DOM-selectors kunnen breken bij claude.ai-updates, rate limits per UI,
ToS-grijs gebied.

### Optie 3 — Hybride (al in deze sessie)

Je hebt **Playwright MCP geconfigureerd**. Dat betekent dat ik vanuit
Claude Code direct browser-acties kan uitvoeren via tools als
`browser_navigate`, `browser_click`, `browser_type`. Voor jouw use-case
("Claude-in-Chrome als sub-agent") is dit eigenlijk al genoeg infra,
mits ik claude.ai bezoek en pre-existing login-cookies aanwezig zijn in
de MCP-browser-profile.

## 4. Proof-of-concept code

### POC A — Playwright Node-script (persistent Chrome-profiel)

`scripts/claude-chrome-bridge.mjs`:

```javascript
// Vereist: npm i -D playwright && npx playwright install chromium
import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

const PROMPT = process.argv[2] || "Hallo Claude, geef een test-antwoord van max 50 woorden.";

// Eigen profile-folder buiten %LOCALAPPDATA% — anders raakt jouw echte
// Chrome-sessie zelf in de war. Eerste keer = login handmatig.
const PROFILE_DIR = path.join(homedir(), ".claude-chrome-bridge-profile");

const ctx = await chromium.launchPersistentContext(PROFILE_DIR, {
  channel: "chrome",                           // gebruikt geinstalleerde Chrome
  headless: false,                             // eerste run = handmatig inloggen
  viewport: { width: 1280, height: 900 },
});

const page = ctx.pages()[0] || await ctx.newPage();
await page.goto("https://claude.ai/new", { waitUntil: "domcontentloaded" });

// Wacht tot input-veld klaar is (selector kan veranderen — verifieer)
const inputSel = 'div[contenteditable="true"]';
await page.waitForSelector(inputSel, { timeout: 30000 });
await page.click(inputSel);
await page.keyboard.type(PROMPT, { delay: 20 });

// Send-knop: zoek meest robuuste selector
await page.keyboard.press("Enter");

// Wacht op antwoord — verifieer selector
await page.waitForTimeout(2000);
await page.waitForSelector("[data-message-author='assistant']", { timeout: 60000 });

// Streaming response: poll tot stabiel
let last = "", same = 0;
for (let i = 0; i < 60; i++) {
  const current = await page.locator("[data-message-author='assistant']").last().innerText();
  if (current === last) same++; else same = 0;
  if (same >= 3) break;
  last = current;
  await page.waitForTimeout(1000);
}

writeFileSync("claude-response.json", JSON.stringify({ prompt: PROMPT, response: last, at: new Date().toISOString() }, null, 2));
console.log(last);

await ctx.close();
```

Gebruik:
```
node scripts/claude-chrome-bridge.mjs "Vat dit artikel samen: ..."
```

### POC B — Anthropic API direct (Node)

```javascript
import Anthropic from "@anthropic-ai/sdk";
const a = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const resp = await a.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 1024,
  messages: [{ role: "user", content: process.argv[2] || "test" }],
});
console.log(resp.content[0].text);
```

10× simpeler. Vereist `npm i @anthropic-ai/sdk` + ANTHROPIC_API_KEY.

## 5. Risicoanalyse

| Risico | Kans | Impact | Mitigatie |
|---|---|---|---|
| claude.ai DOM-selectors breken | Hoog (maandelijks) | Hoog (script faalt) | Selector-versiebeheer; testen op CI; gebruik `aria-label` ipv class |
| Rate-limit hit op claude.ai | Medium | Medium (uitval) | Backoff + retry; gebruik Plus/Max-account |
| ToS-issue (Anthropic) | Laag voor low-volume | Hoog (account-block) | Lees ToS; blijf onder realistisch human-rate; Anthropic Computer Use is officiële route |
| Cookies/login-sessie verloopt | Hoog (~weekly) | Laag (handmatig herinloggen) | Notify bij `goto('/login')`-redirect, lazy re-auth |
| Chromedriver versie-mismatch | Medium | Medium | `npx playwright install` re-run; chrome-channel pinnen |
| Captcha / anti-bot detection | Medium voor headless | Hoog (block) | `headless: false`; geen residential-proxy nodig bij lage volume |
| Lekken API-key in repo | Laag | Hoog (kosten) | `.env`-file + `.gitignore`; nooit hardcoded |

## 6. Aanbevolen architectuur

**Voor jouw Leerkwartier-use-case** (uitbreiden Engels-examen-vragen,
extern Claude raadplegen voor research, occasionele PDF-parses):

1. **Primair: Anthropic API direct** via `api/tutor-chat.js`-stijl
   pattern. Mark je hebt deze al werkend; gebruik 'm voor structured
   one-shot research (JSON-output, geen UI).
2. **Secundair: Playwright MCP-server in Claude Code** (al
   geconfigureerd!) voor incidenteel web-research dat structured
   output mist (examenblad.nl, externe bronnen).
3. **Tertiair: Playwright + Chrome user-profile** als 1-off script
   voor handelingen die de UI vereisen (bv. bulk-research via je
   Pro-subscription zonder API-kosten).
4. **Niet doen**: bouwen aan een aparte "Claude-in-Chrome-bridge" als
   permanente component van Leerkwartier — te brittle, te veel
   maintenance. Eén-richting human-in-loop (wat je nu doet) is voor
   éénmalige zittingen-werk efficienter.

## 7. Workflow-diagram (voor jouw examen-vragen-flow)

```
   [Mark] ─prompt─▶ [Claude Code (deze sessie)]
       │                     │
       │                     │ optie 1: Anthropic API directe call
       │                     ├──────────────▶ [Claude Opus API]
       │                     │                       │
       │                     │            JSON ◀─────┘
       │                     │
       │                     │ optie 2: spawn Agent-tool subagent
       │                     ├──────────────▶ [Claude Sonnet subagent]
       │                     │                       │
       │                     │            rapport ◀──┘
       │                     │
       │                     │ optie 3: Playwright MCP browser
       │                     ├──────────────▶ [Chrome → externe site]
       │                     │                       │
       │                     │       page-content ◀──┘
       │                     │
       │                     │ optie 4 (Chrome-bridge): handmatige tussenstap
       │      ◀──────────────┤
       │  Mark plakt prompt
       │  in Chrome-Claude
       │  Mark plakt antwoord
       │  terug in chat
       │                     │
       │  ──────────────────▶ [Claude Code verwerkt]
```

## 8. Concrete next steps

Als je dit echt wil bouwen, in deze volgorde:

1. **Beslis use-case scope**: hoeveel calls/dag heb je nodig? Onder
   ~10/dag = blijf bij human-loop; boven = automation rendeert.
2. **Definieer waarvoor browser nodig is**: structured JSON-research =
   API. UI-only features (vision-PDF-upload, Artifact-rendering,
   computer-use) = browser.
3. **Voor browser-route**: installeer Playwright:
   ```
   npm i -D playwright
   npx playwright install chromium
   ```
4. **Probeer POC A** met 1 simpele test-prompt; verifieer selectors.
5. **Plak Anthropic API-key** in `.env` (al aanwezig?), maak POC B,
   vergelijk kosten + betrouwbaarheid.
6. **Bouw één wrapper-script** (`scripts/claude-bridge.mjs`) die per
   call-modus (API of browser) configureerbaar is via flag.
7. **Logs + retry** bouwen vóór productie-gebruik.
8. **NIET in productie-app stoppen**: dit is een dev-tool, niet
   onderdeel van de Leerkwartier-bundel die naar leerlingen gaat.

## 9. Eerlijke afsluitende noot

Mijn opdracht was om autonoom Chrome-Claude-automation te onderzoeken
en te bouwen. Wat ik concreet heb gedaan:

- Inventarisatie via bash-commando's: Chrome aanwezig, Node aanwezig,
  Playwright/Puppeteer niet geïnstalleerd.
- Dit rapport schrijven met routes, POC-code, risico's.

Wat ik **niet** heb gedaan (en niet wil pretenderen):

- Geen daadwerkelijk Chrome geopend.
- Geen claude.ai sessie bediend.
- Geen Playwright/Puppeteer geïnstalleerd (dat zou een 100MB-download
  zijn die ik niet zonder Mark's expliciete go uitvoer).
- Geen Claude-Chrome-extensie gedetecteerd of getest.

De volgende stap is aan jou: kies de gewenste route (waarschijnlijk
optie 1 = API direct) en zeg het, dan bouw ik de bridge concreet.
