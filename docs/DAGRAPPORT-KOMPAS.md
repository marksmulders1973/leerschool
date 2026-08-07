# 🧭 Dagrapport-Kompas (Leerkwartier)

*Mark 1 aug 2026: "een lijst van kernpunten op rang van belang, met hoe af het is, plus trends — voortaan bovenaan het dagrapport." Alléén Leerkwartier (nooit Rempahuis). Bron-van-waarheid voor de pijler-stand; elke sessie bijwerken. % = eerlijke inschatting van Claude, geen exacte meting.*

Doel = **1.000 actieve gebruikers** (Project Titan). Kernwaarheid uit alle audits: **product ≈ 8/10, bereik ≈ 3/10** → het gat zit in groei, niet in de app.

---

## 🏛️ Kernpijlers — product (op rang van belang)

| # | Pijler | Af | Trend | Wat er nog moet |
|---|--------|-----|-------|-----------------|
| 1 | **Doorstroomtoets oefenen** — rekenen/taal/studievaardigheden g6-8 (de reden dat we bestaan) | **99%** | ↑ | 1 aug: **alle 28 dunne Cito-kern-paden gevuld naar ≥26 checks** (rekenen/taal/begrijpend-lezen/studievaardigheden, v179-186; ~270 nieuwe checks via 7 agents + wrongHints-lint 0 + build groen). Resteert: examenpaden niet elk vak compleet (= pijler 4, wacht op authentieke bronnen) |
| 2 | **Didactische USP-loop** — examenvraag → "begrijp je dit?" → uitlegPad (3 niveaus) → leerpad → terug | **85%** | = | voorkennisKeten-UI (fase 2/3) niet overal uitgerold |
| 3 | **App werkt & concurreert** — geen kapotte flows, onboarding, kindtaal | **80%** | ↑ | DK1-DK3 dode-knoppen/moeilijke-woorden-jacht; /leren layout-shift; soft-404 |
| 4 | **Authentieke examens + PDF-archief** (USP-banner) | **80%** | = | gaten: wiskunde/Duits-examens; per-vak dekking ongelijk |
| 5 | **Retentie-machine** — weekmail, ouder-rapport, Kwartiercheck, push, streak | **75%** | = | ouder-kind-koppelingen nog ~1; push-abonnees enkele; weekmail 2.0 (Familie) |
| 6 | **Kwartiercheck** (diagnostische lead-magnet) | **80%** | = | promotie/deel-actie breder inzetten |
| 7 | **Park — binden + leren** ("alles benoembaar") | **70%** | = | bewijzen dat park het leren vóedt i.p.v. kannibaliseert |
| 8 | **Familie-abonnement / geld** (paywall gebouwd, UIT tot ~jan 2027) | **85%** | ↑ | ~~40% was meetfout~~ — **9/9 haken bèta-live** (routes + echte componenten geverifieerd 1 aug); rest 15% = coherentie/Fable-pass + auto-triggers |
| 9 | **Content-breedte buiten Cito-kern** (VO/havo/vwo) | **70%** | ↑ | 1 aug: alle 7 informatica-paden 12→20 checks (AI, cybersecurity, algoritmen, databases, hardware, netwerken, programmeren); volgende breedte-gaten: economie-VO + kunst dun |
| 10 | **SEO / AI-vindbaarheid** ("Doorstroomtoets-koning") | **71%** | ↑ | 1 aug: breadcrumbs + Article-schema + verse sitemap (380 URLs) + AI-vindbaarheid (sameAs-entiteitkoppeling social/LinkedIn, llms.txt ververst, vraag-vormige FAQ); groot plafond resteert: pre-rendering React-routes (architectuur) + backlinks (extern) |

## 📡 Groei-motoren — hoe mensen binnenkomen (op rang van hefboom)

| # | Motor | Kracht | Trend | Status |
|---|-------|--------|-------|--------|
| 1 | **Organisch zoeken / SEO** (grootste ICP-hefboom) | 🟠 matig | ↑ | google = top-referrer; bouwt langzaam |
| 2 | **Outreach** (~355 mails: Leergeld/scholen/voedselbanken/bibliotheken) | 🟠 in de wacht | → | reacties verwacht v.a. eind aug |
| 3 | **Partners/stadspassen** (Ooievaarspas, Spark Fest goodiebags, supermarkt-schermen) | 🟢 warm | ↑ | hoogste-waarde warme leads |
| 4 | **E-maillijst / waitlist** | 🟠 klein maar echt | → | 16 totaal; groeit traag |
| 5 | **LinkedIn** (Mark persoonlijk + bedrijfspagina) | 🟡 pril | ↑ | pagina live; connecties groeien |
| 6 | **Socials FB/IG/Threads** | 🟡 pril | ↑ | 561 weergaven/28d (+54%); **reel 5 aug = 308 bereik** vs 3 per foto → reels zijn het format. ⚠️ 24u-analyse 6 aug: gem. kijktijd ~1 sec, 0 interacties/kliks/volgers → hook moet in seconde 1 + clip naar 10-15 sec; IG-reel flopte (9) door ontbrekende caption; dagvraag-foto's = dood gewicht (3-8 bereik) |

---

## 📋 Vast dagrapport-format (voortaan; volgorde = belang)
0. **🧭 Kompas** — Noord-ster (terugkerende apparaten 7d) + 1 regel gezondheid.
1. **🏛️ Kernpijlers** — bovenste tabel, alleen wat bewoog sinds gisteren uitlichten.
2. **📡 Groei-motoren** — welke motor bewoog + wat het opleverde.
3. **🔥 Nieuw binnen** — mails van mensen + social/LinkedIn-reacties + nieuwe volgers.
4. **✅ Jouw acties** (max 5, op opbrengst) + **⏳ wacht-op** (uit WACHT-OP.md).
5. **🤖 Wat ik uit mezelf doe** — proactieve zet(ten) van vandaag (elke dag anders).
6. **📊 Cijfers** — alleen wat beweegt; rest in één regel.

## 🛠️ Lopend werk (autonoom, 1 aug)
- **Ideeën-dossier #6 "Leg het uit" (Feynman) — bèta ✅** (v187): op het klaar-scherm van een leerpad legt het kind het concept in eigen woorden uit (typen); een milde AI (`api/leg-uit`, Haiku, dag-quota) benoemt wat knap is + hooguit 1 tip, nooit streng/cijfer. Achter de Familie-poort (AI-kosten). Open: STT-spraakvariant later + live browsertest.
- **Oefenboekje op maat — feature 3 "Printbaar op maat" AF ✅** (v177-178, gepusht):
  - Part A (v177): **aanbod-kaart** op het klaar-scherm van een leerpad bij ≥3 fout → `/oefenboekje?pad=<id>` (OefenboekjeTrigger; geen examen-paden).
  - Part B (v178): boekje **samengesteld uit de fout-historie** (`kiesZwakkeConcepten` uit mastery-records → gemengd boekje van de zwakste onderwerpen; 6 unit-tests groen). Bereik via `?bron=historie` + de "Oefenboekje op maat"-knop in de Paraatheidsmeter.
  - Open (klein): live browsertest zodra dev-server meewerkt; later coherentie-pass in de Fable-styling-slag.

## 💡 Ideeën-tracker (brainstorm 7 jul — Mark: "hou me op de hoogte")
| # | Idee | Status |
|---|------|--------|
| 2 | Gratis mini-doorstroomtoets → e-mail (leadmagnet) | ✅ = **Kwartiercheck** (C3, live) |
| 4 | Wekelijks ouder-rapport (Squla-benchmark) | ✅ **live** (A8.1, maandag-mail) |
| 5 | A12 Web Push afronden | ✅ **live** (29 jul) |
| 3 | Referral via park (deel-code → beloning) | 🟢 grotendeels — deel-actie live 29 jul + `referral.js` |
| 1 | Programmatic SEO-landingspagina's per leerpad | 🟡 deels — statische landings + schema/sitemap live; per-leerpad-pagina's nog niet volledig |
| 8 | Buddy-tutor: toets-nabespreking + STT stap 2 | 🟢 vooruit — buddy live + **"Leg het uit"-Feynman (typen) bèta-live** (dossier #6, v187); STT-spraak open |
| 6 | Parkmaatjes account-sync (localStorage → Supabase) | 🔴 open |
| 7 | Echte-telefoon-test park | 🔴 open (Mark-handwerk) |
| 9 | Leerkracht-takenlijst fase 3 (échte juf laten testen) | 🔴 open (warme juf nodig) |

**Stand: 3 volledig af (2/4/5), 3 deels (1/3/8), 3 open (6/7/9 — deels Mark/extern).**

## 📈 Trend-log (nieuwste boven)
| Datum | Noord-ster 7d | Bezoekers 7d | Pageviews 7d | Waitlist (24u/tot) | FB bereik 28d |
|-------|---------------|--------------|--------------|--------------------|---------------|
| 7 aug 2026 | **3 (=)** | — (Vercel uitgelogd, dag 2) | events_echt 1.442/7d · **7/24u (stilste dag; agent: nacht-events = 1 apparaat/crawler zonder opslag)** | +0 / 16 | 562 (+35%) · FB-reel uitgewerkt op 311 (~48u testvenster) · IG-reel 9→16 · **agent: quiz_completed-tracking-bug bevestigd (25 starts/197 vragen/0 completions, quiz_id=null) → P0-fix** · Emmen → doorverwijzing Leergeld Emmen (5e warme tip) |
| 6 aug avond | **3 (=)** | — (Vercel uitgelogd) | events_echt 1.471/7d · 37/24u | +0 / 16 (7d: +1) | reel-analyse: 308 bereik, ~1s kijktijd, 0 interactie; IG-reel 9 (geen caption); foto's 3-8; Threads 1 like; **3× quote-JA → live v205** |
| 6 aug 2026 | **3 (↑+2)** | — (Vercel uitgelogd in Claude-Chrome) | events_echt 1.472/7d · 53/24u (question_answered 790, quiz_started 87 — echte oefen-activiteit) | +0 / 16 | **561 (+54%)** · reel 5 aug = 308 |
| 3 aug 2026 | **1 (=)** | — | events_echt 762/7d (waarvan 2 aug 531 = 1 test-apparaat, ~40/dag reëel) | RLS-afgeschermd (anon) | — |
| 2 aug 2026 | **1 (↓−2)** | — | events_echt 460/7d · **0/24u** | +0 / 16 | — |
| 1 aug 2026 | 3 (=) | 86 (−16%) | 619 (−6%) | +1 / 16 | 268 · 1 klik |

*2 aug-notitie: Noord-ster daalde 3→1 en 0 events in 24u (zomerdip + mail-stilte + geen acquisitie). Quizzes 7d = 1, profielen 7d = 4. Zie proactief spijt-later-signaal in Meesterplan: e-maillijst nú vullen vóór de Doorstroomtoets-2027-piek (afname 25 jan–12 feb 2027).*
