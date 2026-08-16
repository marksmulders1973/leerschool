# 🧭 Dagrapport-Kompas (Leerkwartier)

*Mark 1 aug 2026: "een lijst van kernpunten op rang van belang, met hoe af het is, plus trends — voortaan bovenaan het dagrapport." Alléén Leerkwartier (nooit Rempahuis). Bron-van-waarheid voor de pijler-stand; elke sessie bijwerken. % = eerlijke inschatting van Claude, geen exacte meting.*

Doel = **1.000 actieve gebruikers** (Project Titan). Kernwaarheid uit alle audits: **product ≈ 8/10, bereik ≈ 3/10** → het gat zit in groei, niet in de app.

---

## 🏛️ Kernpijlers — product (op rang van belang)

| # | Pijler | Af | Trend | Wat er nog moet |
|---|--------|-----|-------|-----------------|
| 1 | **Doorstroomtoets oefenen** — rekenen/taal/studievaardigheden g6-8 (de reden dat we bestaan) | **99%** | ↑ | 1 aug: **alle 28 dunne Cito-kern-paden gevuld naar ≥26 checks** (rekenen/taal/begrijpend-lezen/studievaardigheden, v179-186; ~270 nieuwe checks via 7 agents + wrongHints-lint 0 + build groen). Resteert: examenpaden niet elk vak compleet (= pijler 4, wacht op authentieke bronnen) |
| 2 | **Didactische USP-loop** — examenvraag → "begrijp je dit?" → uitlegPad (3 niveaus) → leerpad → terug | **85%** | = | voorkennisKeten-UI (fase 2/3) niet overal uitgerold |
| 3 | **App werkt & concurreert** — geen kapotte flows, onboarding, kindtaal | **82%** | ↑ | 15 aug: thema schijnt niet meer door de blokken (v311); groep-1 krijgt geen bovenbouw-stof; "Klas 8"→"Groep 8"; doel-blok bovenaan /mijn. Rest: DK1-DK3 dode-knoppen/moeilijke-woorden-jacht; /leren layout-shift; soft-404 |
| 4 | **Authentieke examens + PDF-archief** (USP-banner) | **80%** | = | gaten: wiskunde/Duits-examens; per-vak dekking ongelijk |
| 5 | **Retentie-machine** — weekmail, ouder-rapport, Kwartiercheck, push, streak | **78%** | ↑ | 15 aug: **"Speciaal voor jou klaargezet" LIVE** — ouder→kind (v312-13) + leerkracht→leerling (v314), cross-device, bron-label, bindt gezin+school aan het kind. Rest: koppelingen laten groeien; push-abonnees enkele; weekmail 2.0 + klaargezet-terugkoppeling (idee #39) |
| 6 | **Kwartiercheck** (diagnostische lead-magnet) | **80%** | = | promotie/deel-actie breder inzetten |
| 7 | **Park — binden + leren** ("alles benoembaar") | **70%** | = | bewijzen dat park het leren vóedt i.p.v. kannibaliseert |
| 8 | **Familie-abonnement / geld** (paywall gebouwd, UIT tot ~jan 2027) | **90%** | ↑ | 15 aug: **school-abonnement = klas + 5 gezins-plekken thuis cadeau** (v315, verkoophaak + kansengelijkheid, op partner-code-rails). 9 aug: **prijsmodel AF — Seizoenspas €24,95 hele toetsjaar besloten + live in copy (v217)**; churn ingebouwd → e-maillijst = draagconstructie. Rest: coherentie/Fable-pass, Stripe (jan 2027), einde-pas-flow |
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

## 📌 Vaste afspraken — onderaan élk dagrapport tonen
- **Scholen & verwerkersovereenkomst (Mark 15 aug 2026):** álle scholen krijgen **exact hetzelfde** DPA-concept (geen maatwerk/onderhandeling per school). Bij benadering/onboarding sturen we altijd ónze eigen verwerkersovereenkomst mee; wil een school iets anders (eigen/zwaardere versie) → **dan doen we het gewoon niet**. Eén standaarddocument = beheersbaar; blind een school-DPA tekenen = het énige echte risico. Concept: `Desktop\dagrapport\Leerkwartier-verwerkersovereenkomst-concept-2026-08-15.pdf`.

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
| 42 | **Examen-recency-tiering** (Mark 16 aug, voor di 18 aug): nieuwste 3 jaargangen (2024-26) interactief-oefenen = Familie, oudere jaren + alle PDF-inzien = gratis; + 3 nieuwe 2026-examens. Ruwe examenblad-PDF's zijn openbaar → alleen de oefen-uitleg gaten, niet het inzien. Verdict: goed idee mét die verfijning. Memory `idea_studiebol_examens_recency_familie` | 🟡 gepland di 18 aug |

**Stand: 3 volledig af (2/4/5), 3 deels (1/3/8), 3 open (6/7/9 — deels Mark/extern).**

## 📈 Trend-log (nieuwste boven)
| 15 aug 2026 | **7 (🆕 record; ↑ van 5)** | 98/7d · 19/24u | 12 nieuwe namen · 11 oefenrondes · 18 buddy-chat · /mijn 137× · ⚠️ avatar_kiezer 250 = debounce-artefact, geen 250 mensen | +0 / 16 upgrade · leerpad 5 (+2/7d) | 💛 **Klaargezet-feature LIVE**: ouder→kind (v312-13) + leerkracht→leerling (v314), cross-device, nieuwe tabellen (ouder_/leraar_klaargezet) + RPC's, DB+browser getest · thema schijnt niet meer door blokken (v311) · 2 kleuterpaden g1-2 + groep-filter + doel-blok-boven + echte Charley-foto (v310) · school = klas + 5 gezins-plekken thuis cadeau (v315) · 🏢 KvK-startgids-PDF + HR-melding-concept → Hotmail + agenda bijgewerkt · meldingen 0 wishes/0 feedback · nieuwe ideeën #37 School's cool = mentor-klaarzet-match, #38 gezins-plekken-outreach-haak, #39 klaargezet-terugkoppeling in weekmail |
| 13 aug 2026 | **5 (= record; uid-check: alle 5 écht, 2-3 dagen actief, 0 test)** | — | events_echt 771/7d · 278/24u (echt ~754/~260 na aftrek eigen test 12 aug-avond) · 28 vragen/24u · 1 tutor-call | +0 / 16 (13 dgn) | 🌙 **Mark's nacht-ideeën zelfde ochtend live (v277-282)**: ⭐ lijstje + sterretjes hub, 🎨 5 thema's + goud-verdienthema, "Wat staat bovenaan?", diploma pas verdiend ≥10 vragen + ≥60% (+ "zo verdiend"-uitleg + oorkonde-regel), kast-knop "Openen", Charley→tips-wachtrij, groep12=kleuters-fix · lily maker-antwoord op bord · LinkedIn: Schaake-reactie + 34 profielviews · nieuwe ideeën #34 diploma-teller klaar-scherm, #35 lijstje in weekmail, #36 Charley meldt maker-antwoord · 🔴 vóór ma 17 aug: groep-omhoog-prompt #32 + test-verkeer-stempel |
| 12 aug avond | **5 (↑ hoogste van aug)** | — (browser-tool niet geladen) | events_echt 723/7d · 230/24u (⚠️ ~10 verse uids = eigen agent-tests 18:17-18:26; reëel ~7-9 bezoekers) · 231 vragen/7d · toets 3/2 | +0 / 16 | 🎉 **VB Lelystad bestuur-JA 16:10 (4e voedselbank!) → zelfde dag code LELYSTAD2027 + flyer + Word + bedankmail (Resend)** · v263-276: /mijn=gezinspagina (rollen v267-270) + diploma-kast v271 + curriculum-kaart v272 + groep 3-5 compleet v274-275 + vakkenkaart VO v276 + partner-pakket 2.0 v264 (idee #28 zelfde dag af) · 💬 wensenbord: lily "snap rekenen nog niet" → #31 lily-lus · vals juichcijfer ontmaskerd: 10 partner-"scans" vanavond (LELYSTAD 3× + testcode YFYLFGBE5350 7×) = eigen tests, alleen VBROTTERDAM2027 1× (11 aug) echt · nieuwe ideeën #31 lily-lus, #32 groep-omhoog-prompt (vóór 18 aug!), #33 Lelystad-PR-pakket · 6 tutor-calls (tutor leeft weer) |
| 12 aug 2026 | **3 (↑)** | — (browser-tool niet geladen deze sessie) | events_echt 546/7d · 59/24u (12 uids; deels eigen avatar-test-avond) | +0 / 16 (12 dgn stil; wél 1 Kwartiercheck-doorloop+mail-aanvraag) | 🔥 **Teresa (Alkmaar) vroeg 07:20 om 1-pagina + Word → zelfde ochtend geleverd** (flyer-print-CSS 1-A4-garantie + echte .docx; concept-reply mét rondleiding-voorstel di 25 aug klaar) · v259-262: Mark's claude.ai-avatarkiezer **byte-identiek** live op /mijn (potlood → direct het artifact; les: artifacts letterlijk overnemen) · agent-check: role_selected≫name_entered = flow-artefact, geen bug; nieuwe ideeën #28 partner-pakket-2.0, #29 sept-vangnet ALKMAAR2027, #30 quiz_completed-event |
| 11 aug 2026 | **1 (=)** | — (niet gemeten deze sessie) | events_echt 775/7d · 136/24u (16 apparaten; deels eigen checks) | +0 / 16 (11 dgn stil) | 🔥 **Alkmaar AKKOORD (sept-verspreiding)** + School's cool Twente warm (teambespreking wk 17) · v240-246: WhatsApp-fixes + Ken-ze-allemaal-oefenronden (topo NL/EU/wereld + tafels/delen/plus-min, kruis-labels) · partner-scan ALKMAAR2027 (5 aug, vermoedelijk Teresa's test) |
| Datum | Noord-ster 7d | Bezoekers 7d | Pageviews 7d | Waitlist (24u/tot) | FB bereik 28d |
|-------|---------------|--------------|--------------|--------------------|---------------|
| 10 aug 2026 | **1 (=; agent: "3→1" was meet-artefact van schuivend venster — reeks is stabiel laag 1-2; 13-uid-bot-burst 9 aug bevestigd)** | **56 (−43%)** — meters terug! (Chrome-voor-Claude draait weer) | 484 (−45%) · 24u: 18 bez/82 views (+500%) · events_echt 1.108/7d, 33/24u (0 oefenvragen; ~14 uids = bot-burst 9 aug 13:53) | +0 / 16 (10 dgn stil) | 545 (≈stabiel) · +3 volgers · feed stil sinds 5 aug (3-5 weergaven/dag) · **🔥 eerste bulk-QR-flyer-scan 9 aug → bezoeker klikte door naar ouder-CTA + ouder-dashboard 2×** · GSC: Reviewfragmenten-kritiek → zelfde dag gefixt (v231); 404 = bewust verwijderde ooievaarspas.html (geen actie) · Colegio Aruba auto-reply: Caribische scholen dicht t/m 18 aug |
| 9 aug 2026 | **3 (=; agent: reëel 2-3, 1 middernacht-artefact)** | — (Playwright niet aan ingelogde Chrome — bat + Claude-herstart nodig) | events_echt ~1.700/7d · 14/24u (0 oefenvragen, zondag) · 2e dag deel:seo-instroom (3×) | +0 / 16 (9 dgn stil) | — · **🎟️ Seizoenspas BESLOTEN €24,95 + uitgewerkt (v217)**; mail-kalender bevestigd (golf 1 = 18 aug); **quiz_id-"bug" OPGELOST als meet-artefact**: null-events kwamen uit oude gecachte PWA-tabbladen (pre-v212-bundle naast verse tab, zelfde uid); fix van 7 aug werkt — voortaan `app_v`-stempel op elk event (v218) om stale-bundles direct te herkennen; GSC-noindex-fix (v214) geverifieerd schoon |
| 7 aug 2026 | **3 (=)** | — (Vercel uitgelogd, dag 2) | events_echt 1.442/7d · **7/24u (stilste dag; agent: nacht-events = 1 apparaat/crawler zonder opslag)** | +0 / 16 | 562 (+35%) · FB-reel uitgewerkt op 311 (~48u testvenster) · IG-reel 9→16 · **agent: quiz_completed-tracking-bug bevestigd (25 starts/197 vragen/0 completions, quiz_id=null) → P0-fix** · Emmen → doorverwijzing Leergeld Emmen (5e warme tip) |
| 6 aug avond | **3 (=)** | — (Vercel uitgelogd) | events_echt 1.471/7d · 37/24u | +0 / 16 (7d: +1) | reel-analyse: 308 bereik, ~1s kijktijd, 0 interactie; IG-reel 9 (geen caption); foto's 3-8; Threads 1 like; **3× quote-JA → live v205** |
| 6 aug 2026 | **3 (↑+2)** | — (Vercel uitgelogd in Claude-Chrome) | events_echt 1.472/7d · 53/24u (question_answered 790, quiz_started 87 — echte oefen-activiteit) | +0 / 16 | **561 (+54%)** · reel 5 aug = 308 |
| 3 aug 2026 | **1 (=)** | — | events_echt 762/7d (waarvan 2 aug 531 = 1 test-apparaat, ~40/dag reëel) | RLS-afgeschermd (anon) | — |
| 2 aug 2026 | **1 (↓−2)** | — | events_echt 460/7d · **0/24u** | +0 / 16 | — |
| 1 aug 2026 | 3 (=) | 86 (−16%) | 619 (−6%) | +1 / 16 | 268 · 1 klik |

*2 aug-notitie: Noord-ster daalde 3→1 en 0 events in 24u (zomerdip + mail-stilte + geen acquisitie). Quizzes 7d = 1, profielen 7d = 4. Zie proactief spijt-later-signaal in Meesterplan: e-maillijst nú vullen vóór de Doorstroomtoets-2027-piek (afname 25 jan–12 feb 2027).*
