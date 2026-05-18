---
name: Chrome-Claude UX-review werkt als feedback-loop
description: Workflow om af en toe externe UX-review via Claude-voor-Chrome te draaien op leerkwartier.app — Mark vindt de uitkomsten waardevol
type: feedback
originSessionId: 45508d70-ab05-4d44-8cf2-e68ec34e2d18
---
Periodiek een UX-review van Leerkwartier laten doen door Claude-in-Chrome
(browser-extensie) en de bevindingen hier in de ontwikkel-sessie verwerken.

**Why:** Mark zelf: 2026-05-15: "zo revieuw doen werkt wel goed". Claude-voor-
Chrome ziet de echte productie-site met zijn ingelogde sessie + DevTools/
console-output. Vangt UX-bugs die ik in code-bril mis: jargon-leaks
(`(V11)`, `examen-id GT-...`), Markdown die niet rendert, te makkelijke
vragen die uit verkeerde pool getrokken worden, ontbrekende context bij
geïmporteerde vragen. Twee runs op 2026-05-15 leverden 20+ concrete fixes
op (commits 2d76e78, 62e1ec2, 1a82454, 0837f03).

**How to apply:**
- **Cadens**: ~elke 6-8 weken een Chrome-Claude UX-review, of vóór elke
  product-mijlpaal (Cito-piek nov-feb, paywall-launch jan 2027).
- **Workflow**: ik schrijf prompt-blok met scope (homepage / leerpad-flow /
  examen-detail / ingelogde flow / content-kwaliteit / design). Mark plakt
  in Claude-voor-Chrome. Chrome-Claude rapporteert in vast format
  (🔴/🟠/🟢 severity + file:line of element-locatie). Mark plakt rapport
  hier terug. Ik fix per severity.
- **Output-format dat werkt** (Chrome-Claude moet erin schrijven):
  - Wat ik deed
  - Bevindingen gesorteerd op severity
  - Console-fouten apart
  - Wat WEL goed werkt
  - Concrete acties voor ontwikkel-Claude (genummerd)
  - Max 600-700 woorden
- **Niet voor**: snelle code-loops (build → screenshot → fix) — daar volstaat
  Playwright MCP in mijn eigen sessie.
- **Wél voor**: ingelogde flows (Supabase-auth), payment-flows (Stripe live),
  echte "doe als Cito-ouder"-eindgebruikersperspectief, regressie-checks na
  grote UI-wijzigingen.

Twee bewezen prompt-varianten staan in chat-log 2026-05-15:
1. Generieke homepage + leerpad-flow review
2. Content-kwaliteit (foute antwoorden / te simpele vragen) + design-oog
