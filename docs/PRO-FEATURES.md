# Wat wordt Pro (betaald) — en wat blijft gratis

> Opgesteld 2026-06-04 met Mark. Lancering Pro ~jan 2027 (Cito-piek). Sluit aan op
> bestaande paywall-infra in `src/subscription/config.js` (PAYWALL_ACTIVE = false).

## Principe
**Gratis = het lèren** (vertrouwen + groei + SEO). **Pro = het persoonlijke, het
toezicht, het automatische, en alles wat geld kost** (AI, printen, porto). Dit is de
wig tegen Squla, die álles paywallt: Leerkwartiers belofte "de basis is écht gratis"
blijft heel; verdiend wordt aan de laag eróverheen. Zie [[feedback_gratis_belofte_gekwalificeerd]].

## 🆓 Blijft gratis (niet aankomen)
- Alle leerpaden + de 3-niveau-uitleg (kern-USP)
- Doorstroomtoets-oefentoets
- Authentieke examenvragen inzien + oefenen
- Eigen voortgang/scores

## 💎 Pro (betaald vanaf ~jan 2027)

| # | Feature | Mark/idee | Bestaande gate | Waarom betaald |
|---|---|---|---|---|
| 1 | **Persoonlijk weekpakket** — vrijdags op-maat 15-min-set per kind (zwakke punten), print-klare PDF | Mark: personalisatie | (nieuw) | Kernwaarde; AI + samenstel-werk |
| 2 | **Ouderdashboard + weekrapport** — wat deed mijn kind, waar vast, voortgang | Mark: ouder-toezicht | parent-dashboard | Geruststelling = koopreden bezorgde ouder |
| 3 | **Maak-examen-van-foto** — foto schoolboek/toets → AI-oefenvragen "in stijl van" + uitleg | Mark: foto school | generate-questions | Huiswerk-specifiek, uniek; AI-kosten/scan |
| 4 | **Diagnose + Kwartierplan** — startfoto → persoonlijk stappenplan dat wekelijks bijstuurt | (Kwartierplan-idee) | voorkennis-keten | Hoge waarde, adaptief |
| 5 | **Onbeperkte AI-bijles** — "leg 't nóg anders uit", onbeperkt | — | ai-tutor | Directe AI-kosten/gesprek |
| 6 | **Examen-modus** — authentiek, tijdsdruk, geen hints, eindcijfer + analyse | — | exam-mode | Al gepland premium |
| 7 | **Onbeperkt oefenen** — gratis = X paden/dag, Pro = onbeperkt | — | unlimited-paths | Klassieke free→pro-trigger |
| 8 | **Fysiek per post** — weekpakket thuisbezorgd (add-on) | Mark: per post | (nieuw) | Dekt porto + print (~€1,50/stuk) |
| 9 | **School/leerkracht** — klas-dashboard, eigen toetsen samenstellen | — | school-dashboard | B2B, €99/klas/jr |

## 🤔 Extra ideeën (denk-mee)
- **Gezinsabonnement** — 1 prijs, meerdere kind-profielen (veel Cito-ouders hebben 2+ kinderen).
- **Cito-eindspurt** — tijdelijk intensief programma jan–feb, losse prijs zonder abonnement (~€19,95, sluit aan op bestaande examenperiode-prijs).
- **Foutenboek** — Pro komt automatisch terug op wat fout ging (spaced repetition op maat). "Wij onthouden de fouten zodat jij dat niet hoeft."

## Prijzen (bestaande defaults, `config.js` PRICING)
- Maand €5,99 · Jaar €39 (-45%) · Examenperiode €19,95 (geen auto-renewal) · School €99/klas/jr.
- FREE_QUOTA nu: 3 paden/dag, 0 AI-tutor, 0 examen-modus.

## Volgorde van bouwen (advies)
1. Content-kernen vullen (focus #2, loopt) — het weekpakket heeft een volle pool nodig.
2. Weekpakket-generator (print-klare PDF uit de pool, per profiel) — kan zonder Resend gebouwd; mailen wacht op Resend.
3. Ouderdashboard/weekrapport.
4. Maak-examen-van-foto (AI-vision).
5. Pas dán paywall LIVE flippen (zie CLAUDE.md "Paywall — klaar maar UIT").
