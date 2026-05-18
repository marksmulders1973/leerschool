---
name: Leerkwartier — review-cadens (multi-agent audit)
description: Twee audit-formaten met eigen cadens — lichte 10-lens-review (elke 2 wk) + zware 15-agent-audit (elke 6-8 wk). 1e 15-agent-audit 2026-05-13.
type: project
originSessionId: da438f24-0b85-410c-8513-283d9b007cea
---

# 2026-05-13 — Eerste zware 15-agent-audit GEDAAN

**Score: 6.0/10** — fundering 9, executie 3, strategische focus 5.

**Top-3 kritieke bevindingen**:
1. **Verklap-bug**: `niveaus.basis` opent auto met letterlijk antwoord ("9.", "16."). Ondermijnt USP. Fix = 1 minuut (`VraagUitlegPad.jsx:110` `defaultOpen={false}`).
2. **Examen-modus niet geïmplementeerd**: alleen timer is gesplitst, hints zijn overal. Mark's eigen 2026-05-09-beslissing niet uitgevoerd. Fix = 2-3 uur (`PlayQuiz.jsx:553-591`).
3. **AI-cost-spiraal**: bij 1000 DAU = €1.860/mnd zonder paywall = failliet. Quick fix: daily-cap op `generate-questions` (`_guard.js`, 1 uur).

**Werkwijze 15-agent-audit (terugkerend ritueel)**:
- Zie `CLAUDE.md` → "15-agent-audit"-sectie.
- Prompt-template + uitvoer-stappenplan in `docs/AUDIT-15-AGENT-PROMPT.md`.
- 4 parallelle research-agents (concurrentie + SEO + code-didactiek + code-performance) → synthese met alle 15 perspectieven → backlog-update.
- ~2-3 uur Claude-tijd, geen Mark-tijd nodig.
- Cadens: **elke 6-8 weken** OF vóór product-mijlpaal OF na scope-wijziging.
- Volgende: rond **2026-07-08** of vóór paywall-launch.

**Bevindingen in `docs/AUTONOOM-BACKLOG.md` Sprint-0 sectie** (niet apart audit-doc).

---

# Originele 10-lens-cadens (lichter, elke 2 weken)
# Wat dit is

Op 2026-05-06 deed Mark een eerste **10-perspectieven-audit** op Leerkwartier:
10 parallelle agents die elk vanuit een eigen lens (10jr-leerling, 14jr-VO,
ouder, leerkracht, didacticus, UX, frontend, a11y, privacy, product) de app
beoordeelden. Het leverde 10 concrete aanbevelingen — 6 zijn binnen 2u
geïmplementeerd (P1a/b, P2a/b/c/d, P4a), 3 staan op de roadmap (P3a/b, P4b).

Mark heeft expliciet gevraagd: **dit soort reviews periodiek herhalen tot
de app waterdicht is**.

# Cadans

- **Na elke grote feature-release** OF
- **Elke 2 weken** als geen grote release plaatsvond
- Audit 2 al gedaan **2026-05-06 avond** (zelfde dag — Mark wilde direct meting na de implementatie). Werkt prima — agents gaven scherpe cross-temporele oordelen via prompt-context met "wat je vorige keer zei".
- Eerstvolgende review: **2026-05-20** (of eerder bij grote release)

# Cross-temporele werkwijze (leerpunt audit 2)

In audit 2 werd elke agent geprompt met **wat de agent in audit 1 zei** + **wat sindsdien is veranderd**. Dat geeft scherpere reviews:
- 5 van 10 agents waren milder (didacticus zei zelfs expliciet "mijn vorige verdict was te streng")
- product-strateeg werd juist strenger ("focus is niet verbeterd, alleen kosmetisch")
- Geen herhaling van bevindingen die al opgelost zijn

Voor audit 3 e.v.: hou exact dezelfde lens-set + voeg context van laatste audit toe.

# Brainstorm — extra lenzen voor audit 3+

Mark vraagt (2026-05-06 avond) om **meer agents met andere blikken** in volgende rondes. Voorgestelde uitbreidingen, gerangschikt op impact:

**Top-4 om toe te voegen aan vaste 10**:
1. **Visual-designer** (typografie, kleur-harmonie, brand-uitstraling) — Mark vroeg dit expliciet. Lens: hoe ziet Leerkwartier eruit naast Squla / Khan Academy / Brilliant?
2. **Performance-engineer** (bundle-size, LCP, mobile-FID, lazy-loading) — bundle is nu 4.5MB, gzip 1.2MB. Op een groep-3 schoolwifi telefoon = pijn.
3. **Concurrent-PM Squla** (kennis van NL EdTech-markt) — wat doet Squla beter, wat doet Leerkwartier beter? Concrete differentiation.
4. **QA / tester** (bugs, edge cases, mobile-quirks) — pakt regressies en stille bugs die andere lenzen missen.

**Optionele 4 daarbovenop voor een 'extended audit' (14 lenzen)**:
5. SEO-specialist — vindbaarheid, structured data, content-marketing
6. Ouder met dyslectisch kind — specifieke leerverschillen-ondersteuning
7. Customer-support — wat gaan mensen vragen?
8. Internationaal-groei-strateeg — schaalbaarheid naar BE/SR

**Niet doen** (ruis-risico): generieke "AI-expert", "code-reviewer" zonder specifiek invalshoekje, of duplicaten van bestaande lenzen.

**Tip voor volgende implementatie**: Mark heeft al meermaals 10 parallel-agents zien werken. 14 parallel is technisch hetzelfde maar geeft 40% meer context-overhead bij synthese — overweeg eerst alleen +4 (top-4) toe te voegen, en de extended-set voor speciale momenten te bewaren (na een grote release of strategische pivot).

# De 10 lenzen

Hergebruik dezelfde 10 personas voor consistente vergelijking over tijd:

1. 10-jarige leerling groep 6 — eerste indruk, wat snap ik
2. 14-jarige havo klas 2 — voelt het voor mij of voor kleintjes
3. Ouder van groep 5 + klas 2 vmbo — durf ik mijn kind hier 30 min mee?
4. Leerkracht groep 8 — klassikaal bruikbaar?
5. Didacticus — kloppen leerprincipes (EDI, spaced repetition, cognitive load)
6. UX-designer mobile-first — IA, friction, hierarchie
7. Frontend-architect (React/Vite/PWA) — codebase, schaalbaarheid, tech debt
8. A11y-expert WCAG 2.2 AA — semantiek, focus, contrast, screenreaders
9. Privacy/AVG-DPO — kinderdata, ouderlijke toestemming, AdSense/GA, cookies
10. Product-strateeg/VC EdTech — USP, retention-loop, koper-gebruiker-mismatch

# Aanpak per ronde

1. **Spawn 10 agents in 1 message** (allemaal `general-purpose`, in achtergrond
   parallel). Briefing:
   - URL: `https://leerkwartier.app`
   - Codebase: `C:\Users\mark-\Desktop\Studiebol\leerschool\`
   - Output-format: ⭐ goed / 😕 zwak / 🔧 actie, max 200-300 woorden
   - Geen pluimstrijken — eerlijk
2. **Synthese**: rode draad herkennen (≥2 agents = sterke aanleiding)
3. **Prioriteit**:
   - P1 = juridisch/boete-risico (altijd eerst)
   - P2 = productpijn (deze maand)
   - P3 = groei-blokkers (kwartaal)
   - P4 = strategisch
4. **TaskCreate per item**, status-updates, autonoom afwerken voor zover
   mogelijk in beschikbare tijd.

# Wat al concreet voortkwam (sessie 2026-05-06)

| Bevinding (van X agents) | Status |
|---|---|
| AdSense + GA4 zonder cookie-consent (privacy) | ✅ Verwijderd |
| privacy.html feitelijk onjuist (privacy) | ✅ Herschreven AVG-compliant |
| 23+ keuzes op homepage (10jr+ouder+UX+product) | ✅ Hero 6→4 tegels |
| Cito-flow versnipperd (leerkracht+10jr) | ✅ 3-staps flow |
| wrongHints geven antwoord weg (leerkracht+didacticus) | ⏳ Audit-agent loopt |
| PlayQuiz a11y gaps (a11y) | ✅ Status-region + dialogs + aria-labels |
| VO-leerling vindt het te kinderlijk (14jr) | ✅ Sneltrack-knop "Toets morgen?" |
| Mastery is logboek, geen SM-2 (didacticus) | 📋 P3a roadmap |
| Codebase: god-files (frontend) | 📋 P3b roadmap |
| Doelgroep-focus (product) | 📋 P4b — beslissing voor Mark |

# Why

Mark wil de app waterdicht — niet "goed genoeg". Eén agent ziet 1 ding, tien
agents zien tien dingen. Multi-perspectief is de enige manier om blind spots
op te sporen die solo-builder zelf overslaat.

# How to apply

- Bij start van een Leerkwartier-sessie waarin Mark vraagt naar feedback,
  audit, of "wat denk je ervan": stel deze 10-perspectieven-audit voor.
- Gebruik exact dezelfde 10 lenzen — dat geeft cross-temporal vergelijking.
- Leg uit dat dit met permissie van Mark een **periodieke routine** is
  (bevestigd 2026-05-06).
- **Niet uitvoeren zonder vragen** — Mark moet expliciet "ja" zeggen omdat
  het 10 agents in achtergrond draait (token-kosten + tijd).
