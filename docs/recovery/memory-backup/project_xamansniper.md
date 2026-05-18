---
name: Xaman Sniper 2.0 — XRPL meme token sniper + oude wallets opruim-tool
description: Mark's persoonlijke XRPL sniper bot, wallet manager (100 slots) en bulk-opruim-script voor ~200 oude papieren wallets
type: project
originSessionId: 86e06c8e-258e-4912-ba90-a2d6e313355a
---
XRPL (XRP Ledger) meme-token sniper bot van Mark, voor persoonlijk gebruik.

**Locatie:** `C:\Users\mark-\Desktop\Xamansniper 2.0\`

**Belangrijkste bestanden:**
- `xaman_sniper.py` — hoofd-app (customtkinter GUI, sniper)
- `xaman_wallets.py` — wallet manager GUI met **100 slots** (`xaman1` t/m `xaman100`); toont per wallet adres, saldo, en `✗ inactief` rood-label voor niet-geactiveerde accounts
- `oude_wallets_opruimen.py` — CLI-script om bulk oude wallets uit CSV te checken/drainen naar `xaman1`. Modes: `check`, `drain --only N`, `drain`. Houdt rekening met XRPL reserve (1 XRP base + 0.2 per trustline) en stuurt ophaalbaar bedrag via Payment naar `xaman1`
- `oude_wallets.csv` — **DE SEED-ARCHIEF voor ~200 papieren wallets** (één wallet per regel: `naam,A,B,C,D,E,F,G,H` — 8 groepen van 6 cijfers)
- `wallets/xamanN.json` — per wallet die in de GUI is opgeslagen (lokaal)
- `xaman_config.json` — sniper instellingen
- Backup-kaart: `Desktop\Crypto\xaman_backup_kaart.pdf`

**Tech:**
- Python + customtkinter (GUI), xrpl-py
- XRPL node: `wss://xrplcluster.com`
- Auth via Xaman family seed, omgezet uit 8 secret-number groepen (A–H) → SECP256K1
- Async via `AsyncWebsocketClient`; transacties via `autofill_and_sign` + `submit_and_wait`

**Doel-wallet voor recovery:** `xaman1` (eerste slot in wallet manager). Mark stuurt overgebleven XRP uit oude wallets daarheen.

**Why:** Mark heeft ~200 oude papieren Xaman-wallets met meestal 0 XRP, maar in totaal nog wat XRP te recoveren. Project loopt naast Studiebol; aparte stack (Python desktop, niet web).

**How to apply:**
- Bij Xaman/XRPL/sniper-vragen direct deze map raadplegen
- **Seeds NOOIT in memory opslaan** — Mark gaf bewust toestemming om alleen het pad te onthouden, niet de inhoud. Seeds blijven uitsluitend in `oude_wallets.csv` en `wallets/*.json` op zijn lokale schijf
- OCR van handgeschreven secret numbers is risicovol (1 cijfer fout = ander adres) — altijd cijfer-voor-cijfer laten verifiëren door Mark voordat ze in CSV gaan
- Voor batch-werk: gebruik het CSV-script, niet de GUI (sneller, geen 800 cijfergroepen typen)
