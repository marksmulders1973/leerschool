# STOPLIST — wat we EXPLICIET niet bouwen

Visie-bewaker doc. Mark + Claude: **lees dit voordat je nieuwe features voorstelt of bouwt.**

Opgesteld 2026-05-10 na visie-discussie. Geldig 6 maanden (review feb 2027).

---

## De Leerkwartier-test (één vraag, bij elke nieuwe feature)

> **"Helpt deze feature een 10-jarige om iets BETER te BEGRIJPEN?"**

- Geen tussenantwoord. Twijfel = NEE.
- "Het zou cool zijn" = NEE.
- "Concurrenten hebben het" = NEE.
- "Het kan technisch" = NEE.

Alleen "**ja, want hier is het didactische bewijs**" = JA.

---

## Verboden tot bewijs (6 maanden)

### 1. Nieuwe AI-features
- Geen AI-tutor-uitbreiding tenzij specifieke didactische vraag
- Geen "vraag aan ChatGPT"-knop
- Geen AI-essay-feedback
- Geen AI-suggestie van vakken/paden
- **Reden**: AI = chaos-trekker, vertrouwde uitlegpaden zijn beter dan onvoorspelbare AI-antwoorden

### 2. Gamification — HERZIEN 2026-06-23 (Zookwartier-pivot)

> **Update:** de oude regel ("geen coins/levels/daily-rewards, game-DNA hoort niet in de leer-app") is **vervallen**. Mark koos 20 jun 2026 bewust voor **Zookwartier / "Mijn Park"** als beloningsspel: muntjes verdienen met leren + dagelijks inloggen, daarmee een 3D-dierenpark bouwen, met een economie-leerlaag (loonstrookje, btw-bon, winst-rekenvragen) die de muntjes aan échte Cito-rekenstof koppelt. Dat is nu een **bewust onderdeel van het product**. We vervangen het verbod door **guardrails** — de kern van de oude *reden* blijft namelijk gelden.

**Wat MAG** (Zookwartier):
- Muntjes + dagbonus + parkgroei als beloning voor leren.
- Bedragen in het park aanklikbaar → uitleg → leerpad (de economie-brug).

**Guardrails** (hier zit de oude angst nog in):
- **Geen sociale vergelijking / ranglijsten / publieke scores.** Dát gaf de Cito-doelgroep faalangst — niet de muntjes zelf. Park blijft een privé-beloning.
- **Het spel moet leren VOEDEN, niet vervangen.** Beloningen (login-bonus, parkopbrengst) bij voorkeur achter het dagdoel; bewaak de `park_*`- en `econ_*`-trechters en stuur bij als het park leertijd opeet.
- **Game ↔ leer blijven visueel gescheiden** (design-system): het park is de beloning, niet het leerscherm zelf.

### 3. Sociale features
- Geen vrienden-lijst
- Geen klassen-functionaliteit (uitstellen)
- Geen deel-knoppen (LinkedIn/WhatsApp)
- Geen kortingscodes-tussen-vrienden
- **Reden**: solo-leerplek is veiliger voor deze doelgroep

### 4. Nieuwe page-routes
- Geen extra landingspagina's
- Geen "wat-kan-je"-tussenpagina (in HomePage hero ingebakken)
- Geen aparte vak-detail-pagina's
- **Reden**: app heeft al 12+ routes — meer = meer verzanden

### 5. Nieuwe storage-mechanismes
- Geen vierde "due"-systeem (we hebben er al 3: mastery topic, spaced rep check, daily challenge)
- Geen apart event-tracking buiten bestaande track()
- Geen client-side cache buiten Service Worker
- **Reden**: drie due-systemen is al verwarrend. Een vierde = breekt vertrouwen in cijfers.

### 6. Architectuur-refactor zonder leerresultaat-bewijs
- Geen TypeScript-migratie
- Geen state-manager (Redux/Zustand) introductie
- Geen testframework-uitbreiding (vitest blijft genoeg)
- **Reden**: solo-builder, leerresultaat > code-elegantie

---

## Bewuste uitzondering — OBLITERATOR

Het mini-spel **blijft bestaan** als hobby-project van Mark's 11-jarige zoon. Reden:
- Zoon werkt met AI aan het spel als Mark niet thuis is = AI-leerervaring voor hem
- Mark beschouwt dit als waardevolle toekomst-vaardigheid voor zijn kind
- Als Leerkwartier mislukt, blijft de leerweg voor zoon waardevol

**Maar**: OBLITERATOR is GEEN onderdeel van de Leerkwartier-product-flow.
- ❌ Niet in hoofdmenu
- ❌ Niet in Hall of Fame (Hall of Fame ZELF gaat ook weg uit hoofd-flow)
- ❌ Niet als beloning-default na 15-min-milestone — *die rol vervult sinds 20 jun 2026 **Zookwartier** (zie §2), niet OBLITERATOR.*
- ✅ Op eigen route (bv. `/spel` of `/obliterator`) zodat zoon vrij kan bouwen
- ✅ Code-base ongemoeid in repo

---

## Voor Claude (zelf-regel)

Bij elke sessie waarin ik 3+ nieuwe componenten voorstel: **minstens 1 van die 3 moet een DELETE zijn.** Bouw-balans = noord-houder.

Als Mark zegt "bouw X" en X staat op deze stop-list: **eerst herinneren aan deze lijst** voor we bouwen. Mark mag overrulen, maar moet bewust zijn.

---

## Wat MAG — wat versterkt de kern

✅ Verbeteringen aan `VraagUitlegPad` (meer niveaus, betere voorbeelden, betere woorden)
✅ Reverse-link `examenLookup` uitbreiden naar nieuwe vakken
✅ Spaced repetition verfijnen (intervalen, escalatie bij ≥3 fouten)
✅ Web push verfijnen (per-user body, slim moment)
✅ Mobile UX-fixes (tap-targets, accordion, scroll)
✅ Authenticiteit-audit uitbreiden (Engels, geschiedenis)
✅ Ouder-rapportage (essentiële premium-feature)
✅ Spelling/lezen/rekenen Cito-content uitbreiden (de echte ICP)
✅ Verfijnen van bestaande flows (geen nieuwe pagina's, betere bestaande)

---

## Review-cadens

- **Maandelijks**: Mark + Claude lopen deze lijst langs. Iets veranderd? Voeg toe of haal af.
- **Per kwartaal**: 10-agent-review of de stoplist nog correct is.
- **Per nieuwe feature**: De Leerkwartier-test (één vraag, hierboven).

---

*"Liever één geniale leerflow dan vijftig half-goede systemen."* — Mark, 2026-05-10
