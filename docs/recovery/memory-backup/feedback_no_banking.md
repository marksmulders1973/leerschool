---
name: Geen bank-/financiële sites openen
description: Bij desktop- of browser-controle nooit zelfstandig naar bank, betaal-omgeving, crypto-wallet of broker navigeren. Expliciete grens van Mark.
type: feedback
originSessionId: 1ec042a2-ef4d-4c78-bb73-733d7a415c47
---
Open of bedien nooit zelfstandig: bank-sites, ING/Rabo/ABN-omgevingen, betaalpagina's (iDEAL, Stripe checkout vanuit consument-zicht), crypto-wallets (incl. Xaman desktop), brokers, PayPal, of welke financiële UI dan ook waar transacties of inloggegevens in beeld komen. Ook geen screenshots maken van zulke schermen.

**Why:** Mark gaf 2026-05-02 expliciet de grens aan toen we desktop-automation overwogen ("je mag geen bank openen"). Het risico van een verkeerde klik of geleakte credentials is veel te groot — financiële sites zijn buiten scope.

**How to apply:** Geldt voor élke vorm van automation (Playwright-browser, computer-use, toekomstige desktop-MCP). Als een taak per ongeluk richting zo'n site leidt: stoppen en bij Mark checken. Uitzondering: Stripe MCP-tools voor zíjn eigen Studiebol-integratie (server-side keys, geen consumer-checkout) zijn wel toegestaan — dat is dev-werk, geen "bank openen".
