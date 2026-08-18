# Leerkwartier — projectinstructies

> Lees dit eerst. Overrides default-gedrag.

## Visie

**Leerkwartier** = "een kwartier per dag, écht begrijpen wat je leert." Voorheen Studiebol.

- **ICP (primair)**: bezorgde **Doorstroomtoets-ouder** groep 6-8 (voorheen "Cito-ouder" — sinds 2024 heet de toets officieel Doorstroomtoets). Alle product/content/marketing-keuzes hier op richten.
- **Secundair / persoonlijk**: VMBO-dochter — geen marketing-doelgroep.
- **Leerkwartier-test** bij elke nieuwe feature: "Helpt dit een 10-jarige om iets BETER te BEGRIJPEN?" Zo nee → niet bouwen.
- **STOPLIST**: zie `docs/STOPLIST.md` — 6 verboden categorieën + OBLITERATOR-uitzondering (Mark's zoon).

## Workflow

- **Git**: na code-wijzigingen automatisch `git add` + `commit` + `push` zonder te vragen (Mark gaf doorlopende toestemming).
- **Versienummer mee-ophogen**: `src/versie.js` (`BOUW_VERSIE`) bij elke push-batch met 1 omhoog — het stempeltje in de app is Mark's snelle check of hij naar de nieuwste versie kijkt. Vergeten op 15 jul (46 bleef staan bij ~20 pushes) → voortaan onderdeel van elke commit-routine.
- **Niet skippen**: nooit `--no-verify`, geen amend van gepushte commits, geen force-push naar main.
- **Klaar-voor-gebruik signaal**: bij langer werk altijd "klaar voor gebruik" als afsluiting, zodat Mark weet wanneer hij kan testen.
- **Bij vage bug-melding**: eerst 1-2 gerichte reproductie-vragen, niet blind fixen.
- **30-sec autonomie-regel**: als Mark 30 seconden niet reageert op een vraag, doorgaan zonder hem tot tokens op zijn.
- **Memory raadplegen voor openstaande taken**: niet alle taken staan in `docs/AUTONOOM-BACKLOG.md`. Sommige sessie-overstijgende projecten + strategische beslissingen staan in `memory/project_*.md`. Bij sessie-start of vage instructie ook memory-index scannen op `project_*` items + zoeken op "TODO/later/uitgesteld/C-taak/open" in memory-files. Behandel memory als TWEEDE backlog.

### Dagelijkse meldingen-check (vast ritueel — Mark vroeg dit 2026-06-05)

**Mark wil weten of er meldingen binnenkomen — dat is belangrijk voor hem.** Bij de **start van elke werksessie** (max 1× per dag) de openstaande gebruikersmeldingen ophalen en het aantal aan Mark melden — **óók als het er nul zijn**.

**Wat te doen:**
1. Query Supabase (project `studiebol`, ID in `reference_studiebol_resources`):
   - `wishes` waar `status = 'pending'` → nieuwe tips op het wensenbord (incl. "🚩 Fout melden"-meldingen die vanuit een vraag binnenkomen).
   - `feedback` waar `resolved = false and blocked = false` → in-app feedback-formulier.
2. Meld het kort aan Mark, bv. **"📨 Meldingen: 0 nieuwe"** of **"📨 Meldingen: 2 nieuwe"** met per melding 1 regel (wie + korte inhoud).
3. Bij een melding over een **foute vraag**: probeer 'm te corrigeren in het vooraf-gegenereerde vragenbestand (`sampleQuestions.js` e.d.) en zet de verbeterde versie vast. **AI-gegenereerde vragen zijn niet altijd te fixen** — wees daar eerlijk over.
4. Mark modereert/bedankt zelf op `/tips` (admin-wachtrij "🔒 Wachtrij — alleen jij" + knop **"💛 Dank van de maker"**).

**ALTIJD feedback terug geven (Mark-regel 2026-06-05) — sluit de lus.** Elke melding die we oppakken (of bewust níét doen) krijgt een reactie terug naar de melder op het wensenbord: een **"💛 Dank van de maker"**-reactie die bedankt + vertelt wat we ermee doen ("opgepakt", "staat live", of "waarom niet"). Kwam de melding via het feedback-formulier (geen reactie-kanaal)? Zet 'm dan als tip op het bord met de naam van de melder + maker-bedankje (zoals bij Sahasra/Sarah/Sonac). **Nooit een melding stilletjes afhandelen** — de melder moet altijd horen dat er iets mee is gebeurd. Dit geldt ook bij latere updates (bv. "fase 1 gestart" → later "fase 3 ook live").

**🧭 KOMPAS-OPENING (Mark-wens 2026-08-01).** Open elk dagrapport met het **Kompas** uit `docs/DAGRAPPORT-KOMPAS.md`: (a) Noord-ster + 1 regel gezondheid, (b) de **kernpijler-ranglijst met %-af + trend**, (c) de **groei-motoren met kracht + trend**. Werk de %'s, trends en de trend-log in dat bestand elke sessie bij (alléén Leerkwartier, nooit Rempahuis). Sluit af met **"🤖 Wat ik uit mezelf doe"** (proactieve zet van die dag). De onderstaande volgorde blijft daaronder gelden.

**📄 DAGRAPPORT-PDF = één Meesterplan-overzicht (Mark-wens 2026-08-01, uitgebreid 2026-08-02).** Bij het woord **"dagrapport"**: naast het chat-rapport óók één gebundelde PDF genereren én openen — **niet meer los Kompas/Concurrentie/Ideeën, maar één "Leerkwartier — Meesterplan & Dagrapport"** (Mark 2 aug: "1 totaal overzicht dat ideeën genereert, laat zien waaraan we werken, en alles bevat om Leerkwartier aan de top te krijgen — incl. subsidie"). Vaste sjabloon = `C:\Users\mark-\Desktop\dagrapport\Leerkwartier-Meesterplan-<vorige-datum>.html` (kopieer + werk bij). Twee lagen:
- **Deel A — Dagrapport (dagelijks ververds):** Noord-ster + gezondheid, kernpijler-ranglijst (%-af + trend), groei-motoren (kracht + trend). Bron: `docs/DAGRAPPORT-KOMPAS.md`.
- **Deel B — Route naar de top (langzaam bewegend, elke sessie licht bijwerken):** (1) *Waar we nú aan werken* (lopend werk + ideeën-tracker-status); (2) **💡 Ideeën-generator** — de uitgewerkte concepten mét effort-tags **plus een vers idee alléén wanneer er écht iets waardevols is** (Mark 2 aug: "indien nodig" — niet forceren; een sessie zonder nieuw idee is prima, liever niets dan opvulling); (3) 🔭 Concurrentie-wig (vergelijkingstabel + positioneringszin + lessen); (4) 🚀 Route naar de top (groei-motoren op hefboom + warme leads/outreach); (5) **💶 Subsidie-spoor** (SIDN-pionier → Stichting Leerkwartier + ANBI → overheid-consortium; bron `docs/SUBSIDIE-PLAN.md`); (6) 📋 Vervolgstappen (wie aan zet).

Werkwijze: schrijf de HTML naar `C:\Users\mark-\Desktop\dagrapport\Leerkwartier-Meesterplan-<datum>.html`, converteer via **Bash** (PowerShell Start-Process naar Program Files wordt door de sandbox geblokkeerd): `"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="C:\Users\mark-\Desktop\dagrapport\Leerkwartier-Meesterplan-<datum>.pdf" --user-data-dir="/tmp/chrome-pdf-meester" "file:///C:/Users/mark-/Desktop/dagrapport/Leerkwartier-Meesterplan-<datum>.html"`, en open **direct in Chrome** via Bash: `"/c/Program Files/Google/Chrome/Application/chrome.exe" "C:\Users\mark-\Desktop\dagrapport\Leerkwartier-Meesterplan-<datum>.pdf"` (NIET `cmd /c start` — deze pc heeft géén standaard-PDF-app, `.pdf`-associatie is leeg, dus `start` faalt stil; les 2 aug 2026). Datum-gestempeld in de map `dagrapport\`. Alleen Leerkwartier-inhoud.

**🗓️ Denk-aan-blok in élk dagrapport-PDF (Mark-wens 2026-08-05).** Mark vergeet datums en afspraken ("ik ben anders dan jij") — daarom bevat élk Meesterplan-PDF, direct na "Jouw acties vandaag", een vast blok **"🗓️ Denk-aan — datums & afspraken"**. Bron = **`docs/MARK-AGENDA.md`** (single source of truth, verschil met WACHT-OP.md: agenda = wat MARK moet doen/onthouden, wacht-op = waar WIJ op wachten). Regels: (1) bij élke mail-check en élke nieuwe toezegging/deadline de agenda bijwerken (afspraak toegezegd → erin; gedaan → eruit); (2) in de PDF tonen: "Nu doen" + de eerstvolgende ~6 kalender-regels + wat bijna verloopt (⚠️ markeren); (3) zelf meedenken: zie je in mails/memory iets dat Mark moet inplannen (bv. "rondleiding afspreken bij een voedselbank"), zet het er proactief in — niet wachten tot Mark erom vraagt.

**🧠 Meelees- & waarschuwings-mandaat bij élk dagrapport (Mark-wens 2026-08-02).** Mark léést het dagrapport; Claude **leest mee als adviseur** en doet **tegelijk zelf onderzoek indien nodig**. Kernregel van Mark: *"als je iets opmerkt, of denkt dat ik iets mis of niet weet, of iets waarvan ik later denk 'had ik dat maar eerder geweten/gedaan' — kom dan met een plan, tip of opmerking."* Dus:
- Bij het samenstellen van het dagrapport actief scannen op **spijt-later-risico's**: aflopende deadlines/kansen (drukwerk-orders, subsidie-rondes, festival-timing), dingen die nú gedaan hadden moeten worden om een latere piek te halen (bv. e-maillijst vóór de feb-Doorstroomtoets-piek), stille problemen (dalende cijfers, kapotte trechters, een concurrent-zet), en kennis-gaten waar Mark een beslissing op baseert zonder de feiten.
- **Zelf onderzoek doen wanneer dat de opmerking hard maakt** (WebSearch/WebFetch voor markt/concurrent/subsidie/deadline-feiten; Chrome/Playwright voor live checks; Supabase voor cijfer-verificatie). Niet gokken — verifiëren, dan pas melden.
- Verpak elke vondst als **één concrete opmerking + mini-plan of tip** (wat, waarom het nu telt, eerstvolgende stap), niet als losse observatie. Geen vondst? Dan niets forceren.
- Dit is een **proactief mandaat, geen wachten-op-vraag**: signaleer uit jezelf, ook als Mark er niet naar vroeg.

**🔝 DAGRAPPORT-VOLGORDE (Mark-wens 2026-07-29 — "eerst zien wat het belangrijkst is").** Het dagrapport heeft een VASTE volgorde, belangrijkste bovenaan. Nooit openen met cijfers; openen met wat Mark moet DOEN:
1. **✅ Jouw acties vandaag** — max 5, concreet + tijdsinschatting ("LinkedIn-tabs afklikken, 2 min"). Bovenaan wat het meest oplevert.
2. **🔥 Nieuw binnen** — reacties/antwoorden van échte mensen: mail-antwoorden, LinkedIn-reacties (persoonlijk én bedrijfspagina), FB/IG/Threads-reacties, nieuwe volgers/connecties. Wie + wat + voorgestelde reactie, 1 regel per item. Niets binnen = één regel.
3. **⏳ Wachten op** — WACHT-OP.md prio 1 in 1 regel per lus (wie, sinds wanneer, nudge-datum).
4. **📊 Cijfers-cockpit** — Noord-ster (via `events_echt`) als kopcijfer mét richting (↑/↓/=), daarna alléén de cijfers die bewegen of afwijken; alles wat 0/onveranderd is in één verzamelzin. Volledige trechter-detail alleen bij bijzonderheden.
5. **📱 Gepost** — welke kanalen vandaag + gisteren-prestatie in 1 regel.
6. **💡 Notities & aanbevelingen** — agent-check-synthese, ideeën, technische vondsten.
De losse verplichte onderdelen hieronder (meldingen-check, trechters, e-maillijst, warme leads, vervolgstappen) blijven gelden maar worden in deze volgorde gegoten: meldingen + warme-lead-reacties → blok 2; vervolgstappen → blok 1+3; alle metriek → blok 4.

**Dagrapport meeleveren (Mark-wens 2026-06-05).** Bij dezelfde sessie-start-check ook een kort **statistieken-dagrapport** geven (bezoekers vandaag/week, gem. sessieduur, beste bron, top-pagina's, QR-scans, open feedback). **🪙 AI-tegoed- & kosten-meter (Mark-wens 2026-08-03 — KRITIEK: Mark koopt vooraf Anthropic-tegoed; is het op, dan stopt de AI-bijles. Moet dus in ÉLK dagrapport, dagelijks):** toon twee dingen. **(1) Tegoed-stand** in het format **"🪙 AI-tegoed: gestart €X op DD-MM · verbruikt ~€Y · over ~€Z"** + advies — waarbij X = het saldo-anker uit memory `reference-leerkwartier-kosten` (regel "🪙 TEGOED-ANKER"), Y = som van de `ai_call_quota`-calls sinds de ankerdatum × ~€0,005/call (tutor-chat/buddy-chat/leg-uit) resp. ~€0,025/call (generate-questions/preview-topic), Z = X − Y. **Advies-drempels:** Z < €10 → "binnenkort bijkopen"; Z < €5 → "⚠️ NU bijkopen: Anthropic Console → Billing → Add credits, anders valt de AI-bijles uit". **(2) Dagverbruik** + % van de daglimiet (tutor-cap 5000/dag ≈ €25; limieten in `api/_guard.js`); waarschuwen bij >50% van een cap. ⚠️ Kanttekening: de €-bedragen zijn een **schatting** (tokens variëren) en de Anthropic-key voedt óók andere apps (o.a. deluxeedition), dus het verbruik kan onderschat zijn — bij een lage stand het **echte saldo in de Anthropic-console checken** (dat is de waarheid). **Werk het TEGOED-ANKER in memory bij zodra Mark bijkoopt of zijn console-saldo doorgeeft.** Achtergrond + harde spend-limit-backstop: memory `reference-leerkwartier-kosten` § AI-kosten-vangnet. **Vernieuwd 2026-06-11 (Mark-wens):** ook altijd meenemen: (a) **/v/-trechter-conversie**: `deeplink_open` → `deeplink_answer` → `deeplink_cta` (7d); (b) **toets-gebruik**: `cito_toets_gestart`/`cito_toets_afgerond` (events, sinds 11 jun) met simulatie=true/false; (c) **niveau-meting**: aantal rijen + unieke spelers in `ref_mastery` (de "weet waar je staat"-meting die de ouder-mail voedt) — zolang dit 0 is óók melden dat de ouder-koppeling (`parent_child_links`) nog leeg is. **Noord-ster-metric (C2, 28 jul; huishoud-filter 29 jul):** in **élk dagrapport kopcijfer** tonen: **"Terugkerende apparaten 7d"** = aantal apparaten (lk_uid) dat de afgelopen 7 dagen op ≥2 verschillende dagen actief was, **gefilterd via de view `events_echt`** (= events mín `household_uids`; huishoud-apparaten markeren zichzelf bij login via RPC `mark_household_uid` in useAuth, seed 29 jul = Mark's hoofdapparaat). SQL: `SELECT COUNT(*) FROM (SELECT props->>'uid' AS uid FROM events_echt WHERE created_at >= NOW()-INTERVAL '7 days' AND props->>'uid' IS NOT NULL GROUP BY props->>'uid' HAVING COUNT(DISTINCT DATE(created_at)) >= 2) q;` — gebruik `events_echt` ook voor alle andere dagrapport-trechters. NB: anonieme huishoud-apparaten (nooit ingelogd) blijven onzichtbaar voor het filter — bij twijfel handmatig toevoegen aan `household_uids`. Streefwaarde: groeit naar ≥50 vóór Cito-piek feb 2027. **Vernieuwd 2026-06-18 (Mark-wens):** in **élk dagrapport ALTIJD de e-maillijst-groei** meenemen — nieuwe inschrijvingen in `upgrade_waitlist` + `learn_path_waitlist` (24u / 7d / totaal + laatste inschrijving). Plus de **wereldbol-/reclame-trechter**: events `reclamebol_open` → `reclamebol_cta` → `reclamebol_email` (sinds 18 jun; meet hoeveel mensen via een reclame-link binnenkwamen, doorklikten en hun e-mail achterlieten). **Vernieuwd 2026-06-22 (Mark-wens), meting verbreed 2026-07-14:** ook de **park→leren-trechter** meenemen — `park_open` → **interactie** → `park_naar_leren` (+`park_tafereel_naar_leren`). LET OP (les 14 jul): "interactie" is NIET alleen `park_praatje` (bezoeker-NPC-tik, bijna nooit gebruikt) maar de SOM van `park_praatje` + `buddy_chat_open` + `park_gids_praat` + `park_leermoment` + `park_tafereel` — anders lijkt het park ten onrechte dood (14 jul: praatje 0, maar buddy_chat_open 9 in 4 sessies). Buddy-chat is de feitelijke ingang; rapporteer per interactie-type. Ook de **kraam-reken-vragen** meenemen: `park_rekenvraag` (gesteld) → `park_rekenvraag_goed` (correct) — echte winst-/prijs-sommen bij de kramen. Strategische vraag erbij: voedt het park het leren of kannibaliseert het — vergelijk of parkspelers ook `kwartier_reached`/leersessies hebben. **Ook in élk dagrapport (Mark-wens 18 jun):** de voortgang van (1) het **Grok-beeld-upgrade-traject** — wat is af/open uit `docs/GROK-UPGRADE-PLAN.md` (de "heel de app moet er perfect uitzien"-opdracht), en (2) de **interactieve biologie-platen** — welke platen live staan (cel/oog/…) + de volgende. Zie memory `grok-beeld-upgrade` + `ouder-check-product`. Cijfers via de RPC **`get_admin_stats`** óf de directe SQL over `events`/`profiles`/`feedback`/`wishes` (zelfde logica als `src/components/AdminStats.jsx` → `/admin/stats`). **🤖 AI-verwijzingen-teller (idee #18, 2026-08-08) — vast in élk dagrapport:** tel hoeveel bezoekers via een AI-assistent binnenkwamen: `bron_bezoek`-events waar `props->>'bron'` begint met `ai:` óf met `deel:` gevolgd door chatgpt/perplexity/copilot/gemini/claude (ChatGPT plakt zelf `?utm_source=chatgpt.com` op geciteerde links → label `deel:chatgpt.com`). Rapporteer 24u + 7d. Groeit dit, dan werkt de llms.txt/AI-vindbaarheid-strategie; de startpagina voor dit verkeer is `public/start-via-ai.html` (doorkliks daarvandaan = bron `pagina:start-via-ai`). **Triggerwoorden:** als Mark "**het rapport**" of "**dagrapport**" zegt, bedoelt hij dít — haal de cijfers op en presenteer ze. Wees eerlijk over kanttekeningen (korte historie sinds 4 juni; eigen test-sessies kunnen "vandaag" opblazen; bron "leerkwartier.app" = interne navigatie, geen nieuw verkeer).

**🔴 MAIL-CHECK-REGEL (2026-07-27, na 2 gemiste partner-mails).** Gmail-`search_threads` geeft threads terug met een berichten-preview die het NIEUWSTE bericht kan weglaten. Daarom bij élke mail-check: (1) een thread die in een `newer_than`-zoek opduikt hééft per definitie een nieuw bericht; (2) per gevonden thread `get_thread` (METADATA_ONLY) draaien en het bericht met de nieuwste datum pakken; (3) afzender ≠ Mark → binnengekomen antwoord → volledig lezen, melden en docs/WACHT-OP.md bijwerken; (4) NOOIT "geen nieuws" concluderen op previews. Zie memory `feedback_mailcheck_volledige_thread`.

**Warme leads in élk dagrapport (Mark-wens 2026-07-12).** Toon in elk dagrapport de **positieve outreach-reacties op volgorde van belang** (concrete toezegging boven enthousiast-doorgestuurd boven neutraal-positief). Bron + volledige gerangschikte lijst: memory `project_studiebol_warme_leads`. Werk die lijst bij zodra de dagelijkse mail-check een nieuwe positieve/warme reactie oplevert; afwijzingen/auto-replies/bounces horen er niet in. Top nu: Spark Fest/Leergeld Haarlemmermeer (goodybags 1.000 kinderen) + Ooievaarspas Den Haag (getekend, wacht op plaatsing) + VB Rotterdam (schermen live).

**Vervolgstappen-blok in élk dagrapport (Mark-wens 2026-07-23).** Sluit elk dagrapport af met een kort blok **"📋 Vervolgstappen"**: de eerstvolgende concrete acties + wie aan zet is (Mark / Claude / partner) + eventuele deadline. Voed het blok uit deze bronnen en meld alléén wat actueel is:
1. **Warme-leads-acties** (memory `project_studiebol_warme_leads`) — bv. Spark Fest: wachten op Inez → daarna Drukwerkdeal-order door Mark (A5, 1.050 st., drukken uiterlijk begin okt; festival zo 18 okt).
2. **Succes-replicatie-triggers** (memory `project_studiebol_succes_replicatie`) — Spark Fest ≥25 scans → goodybag-model uitrollen; Ooievaarspas-plaatsing bevestigd → stadspassen-batch; 🎄 **december-inlegvellen kerstpakketten: uiterlijk oktober benaderen** (los van triggers, timing dwingt).
3. **3-partner-teller** (docs/OUTREACH-VOORRAAD.md § 3-partner-regel, nu 1/3) — bij ≥3 gaat de bewijslast-alinea in elke outreach-mail.
4. **Naamsbekendheid-momenten** (memory `project_studiebol_bedankt_pagina`, staande opdracht) — bedankt.html-updates + LinkedIn-concepten die klaarstaan of gepland zijn (lanceringspost eind aug, Rotterdam-succesupdate half aug, Spark Fest-post, Ooievaarspas-post).
Verlopen of afgeronde stappen afvoeren; geen lange checklists — max ~6 regels, alleen wat nú aandacht of geduld vraagt.

**⏳ Wacht-op/prio-lijst in élk dagrapport (Mark-wens 2026-07-26).** Mark kan open lussen (een nog missend "ja", flyer-acties, gemeente-stappen) niet zelf bijhouden — dus: **`docs/WACHT-OP.md` is de single source of truth** voor alles waar we op wachten. Regels: (1) neem in elk dagrapport bovenaan het Vervolgstappen-blok de Prio 1-regels uit WACHT-OP.md op, met per regel op wie we wachten en sinds wanneer; (2) werk WACHT-OP.md bij bij élke dagelijkse mail-check — antwoord binnen → regel afvoeren + vervolgactie erin; nieuwe open lus (verstuurde vraag/aanbod zonder antwoord) → regel erbij; (3) staat een Prio 1-item langer stil dan de genoemde nudge-datum, stel dan een vriendelijke reminder voor.

**Household-filter + park-nulmeting (Mark-wens 2026-07-05).** ~36 van ~123 profielen zijn huishouden/test (Mark/Brian/Deianera/Olivia + `Test*`/`*Tester`) → ongefilterde cijfers zijn misleidend. Vaste infrastructuur: tabel **`household_accounts`** (user_id's, gevuld via naam-patroon) + view **`zoo_state_real`** (= `zoo_state` mín huishouden). **Rapporteer park-gebruik ALTIJD via `zoo_state_real`**, niet de ruwe tabel. Re-sync bij nieuwe huishoud-logins: `insert into household_accounts (user_id,label) select id,display_name from profiles where display_name ilike any(array['mark','brian','deianera','olivia','test%','%tester%']) on conflict do nothing;`. **Nulmeting = `admin_meta.park_baseline_date` (2026-07-05)**: meet echte park-groei als `zoo_state_real` bijgewerkt/aangemaakt ná die datum. Startlijn 5 jul: 25 ruwe parken → **17 echt** (waarvan Sahasra hard-echt, Ss/Tom waarschijnlijk, rest naamloos/deels nog eigen 2-jul-UX-testruns). Kanttekening: naamloze parken zonder profiel kunnen niet op naam gefilterd worden — mogelijk zit daar nog eigen test tussen. Betere lange-termijnfix (open): `user_id` meesturen met events zodat óók event-trechters huishouden kunnen wegfilteren.

**Dagrapport altijd door agent(s) laten CHECKEN + aanbevelingen (Mark-wens 2026-06-05).** Laat de cijfers niet voor zichzelf spreken: spawn bij het dagrapport 1-3 `general-purpose`-agents (model sonnet, parallel) die (a) **verifiëren of de cijfers kloppen / niet misleidend zijn** (dubbeltellingen, test-sessies, sessie≠persoon, events die niet vuren zoals `kwartier_reached`), en (b) **concrete aanbevelingen** geven — data-controle, groei/marketing (bv. meer /v/-trechter-reclame), en product/UX. Synthese kort terugkoppelen aan Mark. Lessons al gevonden 2026-06-05: betrouwbaarheid laag (eigen test-sessies vervuilen "vandaag"); `kwartier_reached` vuurt vermoedelijk niet (0× bij 100+ vragen → bug checken); /v/-deeplink-trechter is de bewezen reclamevorm die naar de site stuurt.

Dit is **geen** automatische cron — het draait wanneer Mark een sessie opent. "Elke dag" = elke werkdag/sessie, 1× checken aan het begin.

### Dagelijkse social-groei-check (tot 100+ volgers per kanaal — Mark vroeg dit 2026-06-07)

**Onderdeel van het dagrapport.** Doel: Threads, Instagram (@leerkwartier) en Facebook (pagina Leerkwartier) laten groeien naar een flink aantal volgers (eerste mijlpaal 100/kanaal). Volledige plannen + dagelijks logboek staan in **`docs/SOCIAL-GROEI-TRACKER.md`** — dit is de single source of truth.

**Elke sessie (als Chrome-voor-Claude draait):**
1. Lees `docs/SOCIAL-GROEI-TRACKER.md` (plannen + laatste cijfers).
2. Voer per kanaal een **engagement-batch** uit via Mark's ingelogde Chrome (Playwright/CDP): oprechte reacties + ICP-volgers + likes. **Account-veilig tempo:** max ~20 follows + ~15 reacties per kanaal per dag. Waarde eerst, **geen linkspam**.
3. Noteer de actuele volger-aantallen + wat je deed in het **logboek** onderaan de tracker (nieuwe rij per dag).
4. Volg terug wie ons volgde.
5. Meld kort aan Mark: huidige volgers per kanaal + delta sinds gisteren + wat gedaan.

**🧵 Threads-dagritueel (Mark 2026-06-20, na deep-research reply-first) — vast onderdeel van bovenstaande check:**
- **Vraag-van-de-dag als THREAD:** hoofdpost = native dagvraag (`vraagVanVandaagId()`) + "antwoord in de reacties 👇" + **één topic-tag** (Doorstroomtoets/Cito), **GÉÉN link in de hoofdpost**; de link `leerkwartier.app/vandaag?utm_source=threads` komt in een **gekoppelde 2e post** ("Add to thread"). Reden: link-posts knijpen bereik; reply-first + native = max bereik.
- **Reageren = #1 hefboom:** een paar oprechte waarde-replies op verse ICP-gesprekken (zoek `doorstroomtoets`/`schooladvies`/`citostress`/`bijles`/`groep 8`) + paar ICP-follows. **STOP bij het eerste throttle-signaal** (follow registreert niet) — nooit doorrammen tot een block (jong account = ban-risico).
- **KLIK-METEN (in élk dagrapport):** query events `source='threads' OR props->>'utm_source'='threads'` → "via Threads: N" melden. NB: reply-first optimaliseert eerst voor volgers/bereik; klikken zijn secundair/lagging. Volledig recept: memory [[project_studiebol_vraag_vd_dag_post]] + [[studiebol-threads]].

### Dagelijkse reactie-check — reageren op mensen die óns iets vragen (Mark 2026-07-02)

**Vast onderdeel van dezelfde sessie-start-batch (Chrome nodig).** Naast zelf posten/engagen: elke dag checken of er **reacties op onze eigen kanalen** binnenkwamen en die beantwoorden — niemand mag onbeantwoord blijven.

1. **Facebook**: `facebook.com/notifications` — reacties op pagina-posts van Leerkwartier + de eigen groep **"Doorstroomtoets 2027 — voorbereiding & tips (groep 7-8)"** (groep-id 1654712919073910). Let op: er lopen ook privé-/marktplaats-meldingen van Mark doorheen — alleen Leerkwartier-gerelateerde oppakken.
2. **Instagram** (@leerkwartier): reacties onder recente posts/reels.
3. **Threads**: replies onder onze threads (dagvraag!) — antwoord op de dagvraag altijd bevestigen/uitleggen.
3b. **LinkedIn (toegevoegd 29 jul)**: reacties/likes op Mark's persoonlijke posts (/recent-activity/) én op de bedrijfspagina (linkedin.com/company/136883981/admin — ook nieuwe pagina-volgers melden). Inhoudelijke reacties van warme leads → direct in blok 2 van het dagrapport + concept-antwoord voorstellen (Mark antwoordt zelf op LinkedIn).
4. **Reageer als Leerkwartier**: persoonlijk (naam noemen), waarde eerst, eerlijk, geen spam. Waar het écht helpt een concrete link meegeven: `/oefenpakket` (printbaar + e-mail-opt-in), `/vandaag` (dagelijkse oefenvraag), `/gratis-bijles.html` (per onderwerp). Voorbeeld dat werkte: Rebecca DS 2 jul (vraagstelling wennen → oefenpakket + dagvraag).
5. **Terugkoppelen aan Mark**: per beantwoorde reactie 1 regel (wie + wat + welke link). Niets gevonden? Ook melden ("💬 Reacties: 0 nieuwe").
6. **Twijfelgevallen** (klacht, discussie, pers, negatief): niet zelf afhandelen — concept klaarzetten en aan Mark voorleggen.

**Posting/engagement-werkwijze per kanaal** staat in [[project_studiebol_autopost]] (memory) — Claude post/engaget zelf via de browser, niet automatisch op de achtergrond. **Stoppen met deze dagelijkse taak** zodra de mijlpalen gehaald zijn (dan herijken met Mark). Draait Chrome niet? Meld dat de social-groei-batch Chrome nodig heeft en sla 'm over die dag.

## Autonome modus (actief tot app gevuld — geen einddatum)

Mark heeft Claude Code **vrij baan** gegeven voor content-werk. Geen mening vragen, gewoon doorpakken. Doel: app helemaal vullen met paden + vragen vóór fine-tuning. Mark wil **maximaal-lang autonoom werk per sessie**, zelfs als hij offline is — dus nooit pauzeren om input te vragen als er nog andere taken zijn die wél kunnen.

### Hoogste prio (boven alles, ingesteld 2026-05-19)

**Een werkende + competitieve app komt vóór content-vullen.** Mark's woorden: "vullen heeft hoge prio, maar hoogste prio is een app die werkt, kan concurreren met soortgelijke apps of liever net beter is".

Dat betekent: voor je nieuwe content bouwt, check eerst dat:
- **De app werkt**: geen kapotte flows, geen broken loops (examen → uitleg → leerpad → terug), geen onbruikbare features.
- **De app concurrentie aankan**: USP's (uitlegPad 3-niveau, authentieke examens, 15-min belofte) zijn duidelijk + ontdekbaar voor nieuwe gebruikers.
- **De app net beter is** dan Squla/Junior Einstein/WRTS/Examenbundel waar mogelijk.

Bij twijfel: kies kwaliteit boven kwantiteit. Een goede tour/onboarding/UX-fix > nog een leerpad.

### Prioriteit-stelsel — bijgesteld 2026-05-12 na 12-agent-review

**12-agent-review constateerde scope-creep**: 12 van 32 nieuwe paden vielen buiten Cito-kern groep 6-8 (puberteit/emoties/Olympische/koude-oorlog/eetcultuur/etc.). Bovendien: paden gemiddeld 22-32 min ipv kwartier-belofte, bundle 5,4 MB, geen zoekbalk bij 67+ PO-paden. **Strategie-advies**: stop scope-creep, kies diepte boven breedte.

**Nieuwe prio-volgorde (volg STRENG)**:

**P0 — Tech-debt blokkers** *(eerst, want raakt elke gebruiker)*:
- **Bundle splitsen**: ~~`data-learnpaths` 5,4 MB → per-pad lazy import.~~ ✅ KLAAR. **STAP 1** 2026-05-12: vite-config splitst in 8 chunks per subject. **STAP 2** 2026-05-15+19: alle consumers gemigreerd naar lazy `getLearnPath()` via `pathLoaders.js`. Laatste eager-import (`citoMixVragen.js → ALL_LEARN_PATHS`) gemigreerd 2026-05-19 naar pathManifest-filter + parallel dynamic-import. Root-pageload trekt geen PO/wiskunde/examens-bundles meer in; consumers laden lazy bij gebruik.
- **Zoekbalk + Cito-pijler-filter + groep-niveau-filter** op StudentHome/LearnPathsHub.

**P1 — Maand-2-plan diepte** *(strategische ICP-focus)*:
- **Begrijpend lezen-flow uitbouwen**: 1 vak Doorstroomtoets compleet ipv breed.
- **VoorkennisKeten UI fase 2**: POC op V36 economie 2023-T1, dan uitrollen.
- **Doorstroomtoets-trio uitdiepen** tot 60+ vragen per onderdeel (taal/rekenen/studievaardigheden).

**P2 — Bestaande paden opfris** *(quality-of-life)*:
- **15-min check** op alle paden > 4 stappen: splitsen of explanations halveren.
- **wrongHints-leak fixen**: geen categorie-labels op alle foute opties (zie review).
- **Afkortingen uitleggen** bij eerste gebruik (MBO/HBO/WO/CAO/AOW/ZZP/NAVO/USSR/AVG/HTTPS/EU/VS).
- **Examen-modus split schoon**: `examenEconomie2025T1` heeft hints — beslis split of opschonen.

**P3 — Pas DAARNA nieuwe paden** in Cito-kern *(taal/rekenen/studievaardigheden/wereldoriëntatie groep 6-8)*:
- Eerst Cito-kern volledig vullen + opfrissen.
- Bij twijfel: Leerkwartier-test ("helpt 10-jarige Cito-vraag beter begrijpen?") strikt toepassen.

**P4 — Niet-Cito-vakken die al in de app staan** *(toegevoegd 2026-05-14 na Mark-feedback)*: Engels-PO, ruimtevaart, Olympische, eetcultuur, kunstenaars, etc. zijn **toegestaan** maar **lagere prioriteit**. Volgorde: eerst Cito-kern (P3) compleet — pas dán uitbouwen. **Niet zomaar verwijderen** als ze al in de app zichtbaar zijn; behandel als achterlopende prio in plaats van scrap.

**STOP** met klas 1-3 onderbouw VO-uitbreiding (C-taak in `project_continuum_klas_1_3_onderbouw`) tot P0/P1/P2 op groen staan.

### Doel
Cito-toets + examens versterken via **kennisgraaf** (zie "Kern-flow"). Concreet: optie-C-implementatie (data + UI) van voorkennis-keten. Daarnaast doorgaan met uitlegPad-werk.

### Optie-C plan (kennisgraaf data + UI)

**Fase 1 — Data-laag (~2-3 sessies)**
- Nieuw veld `prerequisites: [{ id, title, niveau }]` in leerpad-data
- Nieuw veld `voorkennisKeten: [{ id, title, niveau, why }]` in examen-check (lijst van basis → top)
- Audit-script `scripts/auditKennisgraaf.js` — toont gaps (linken naar niet-bestaand pad)
- Per vak (start: economie) alle examen-vragen voorzien van voorkennis-keten

**Fase 2 — UI proof-of-concept (~1 sessie)**
- `VoorkennisKeten.jsx` component op 1 examenvraag (V36 economie 2023-T1)
- Toont keten visueel onder/naast de vraag
- Niet adaptief — gewoon zichtbaar maken
- Self-test + screenshot
- Stop voor reviewer-agents akkoord

**Fase 3 — Volledig (~2-3 sessies)**
- UI uitrollen naar alle examenvragen
- Adaptieve "zwakste-pad-detector" — bij fout op check stuurt systeem naar laagste pad waar gebruiker nog wél scoort
- **Examen-modus respecteren**: voorkennis-keten alleen tonen in oefen-modus, NIET in examen-modus

### 🚶 Kliktocht-agents na élke UI-sessie (Mark 13 aug 2026 — verplicht)

Mark kan niet alles zelf doorlopen. Daarom: na élke sessie met UI- of
navigatie-wijzigingen, vóór "klaar voor gebruik", **1-2 parallelle
kliktocht-agents** de vaste routes uit `docs/KLIKTOCHT-CHECKLIST.md` laten
nalopen (code-trace: handler → bestemming; live-check bij twijfel). De vraag
is niet "werkt de knop" maar "kom ik uit waar een gebruiker het verwacht,
zonder omweg, en kan ik terug". Aanleiding: de profiel-wissel op /mijn
stuurde naar home (v292) — geen enkele gewone review ving dat. P0/P1-vondsten
direct fixen in dezelfde sessie; bevindingen kort aan Mark melden.

### Self-test tussen taken (verplicht)
Na elke afgewerkte taak voor je verder gaat:
1. **Build groen**: `npx vite build` faalt = stoppen + fixen.
2. **Eigen review**: open random vraag uit wat je net wijzigde. Maak hem expliciet fout. Gaat de uitlegPad-flow open zoals bedoeld?
3. **Bij UI-wijziging**: Playwright screenshot van de nieuwe staat + zelf bekijken of het past bij STOPLIST + Leerkwartier-test.
4. **Bij data-wijziging**: audit-script run (`scripts/auditKennisgraaf.js` zodra die bestaat) — geen broken `leerpadLink` of `prerequisites`.
5. **Backlog bijwerken**: vink af + 1-regel sessie-log.

### Hoe werken
1. **Lees eerst** `docs/AUTONOOM-BACKLOG.md` — daar staat de prioriteits-volgorde + status van vorige sessies.
2. **Pak de bovenste niet-afgevinkte taak.** Geen mening vragen welke.
3. **Werk tot tokens op** of tot een natuurlijke stop (build groen, commit gepusht, taak afgevinkt).
4. **Update aan eind van sessie** de backlog: vink af wat klaar is, schrijf in 1 regel wat je deed, voeg eventueel nieuwe sub-taken toe.
5. **Geen klaar-voor-gebruik tussendoor** — alleen aan het einde van de hele sessie.

### Doorgaan, niet vragen
- Niet vragen welke prioriteit, welk pad, welke vakken.
- Niet vragen of een aanpak goed is — gebruik bestaande patronen (uitlegPad-format, build → commit → push).
- Wel doorgaan na elke chunk zonder pauze; geen tussentijdse "wil je dat ik doorga?".
- **Bij vage instructies van Mark** ("ga verder", "verder", "door", "ga door", "vervolg"): direct bovenste niet-afgevinkte taak uit `docs/AUTONOOM-BACKLOG.md` pakken. **GEEN keuze-menu**, **GEEN "wat wil je doen"-vraag**, **GEEN testchecklist-aanbod**. Mark heeft de prioriteit al vastgelegd in de backlog — gewoon uitvoeren. Een opening met 4 opties verspilt zijn tijd.
- Mark herhaalt nooit "alles autonoom" of "ja ga maar" — dat staat al hier. Twijfel je? Doorgaan. De enige uitzonderingen staan in "Hard-stops" hieronder.
- **Niet wachten tussen paden** (Mark feedback 2026-05-11: "ik wil niet steeds 'ga verder' drukken"). Direct na commit + push van pad X → pak pad X+1 uit backlog. Geen tussentijdse uitgebreide samenvatting. Hooguit 1 regel "X klaar, door naar Y." Doorwerken tot tokens op of expliciete STOP/PAUZE van Mark.
- **Korte tussenupdates**: een lange tabel of trots-bericht na elk pad → NEE. Mark scrollt het toch voorbij. Houd updates super-kort (1-2 zinnen max) en ga door.

### Skip-and-continue (NIET vragen — pak ander werk)
Bij elk van onderstaande gevallen: **log de blokker in backlog en pak het volgende item dat WEL kan**. Mark zit vaak niet achter de chat — wachten verspilt tijd.

- **Examen-vragen verzinnen zonder bron** — skip dat examen, pak een ander pad uit Prio 1/3.
- **Architectuur-veranderingen** (nieuwe routes, nieuwe componenten in `src/components/`, schema-changes Supabase, nieuwe dependencies) — log als "🟡 wacht op Mark" en pak content-werk dat wél binnen bestaande architectuur valt.
- **Bestaande content overschrijven/verwijderen** — voeg toe ipv vervangen.
- **Productie-afhankelijke acties** (Vercel env-vars, Supabase secrets, A12 setup, betalingen) — log + pak ander werk.
- **STOPLIST-grijs gebied** — log + skip die feature.
- **Externe API-keys nodig** — geen nieuwe calls, pak iets anders.

### "Wat kan ik ALTIJD doen zonder Mark" — fallback-lijst
Als alle Prio-1-tot-3 items uit backlog gedaan/geblokkeerd zijn, ga door met (volgorde = prioriteit):
1. **Nieuwe Cito-paden bouwen** voor groep 6-8 onderwerpen die nog ontbreken (zie `project_studiebol_content_roadmap.md`).
2. **Klas 1-3 onderbouw VO paden** (zie `project_continuum_klas_1_3_onderbouw.md`) — Mark's visie "doorlopend curriculum".
3. **Extra vragen toevoegen** aan bestaande paden met <10 checks per stap.
4. **uitlegPad uitbreiden** met meer voorbeelden in bestaande paden.
5. **Audit-scripts draaien + bevindingen opvolgen**: `scripts/auditKennisgraaf.mjs`, `scripts/audit-units.mjs`, `scripts/lint-wronghints.mjs`. Fix wat eenvoudig is, log res in backlog.
6. **Self-test rondes**: bestaande paden doorlopen, fouten oefenen, kijken of uitlegPad-flow klopt. Log verbeterpunten.
7. **Memory-index doornemen** op `project_*` items met openstaande TODO's — pak iets op.

Pas wanneer ALLE bovenstaande ook geblokkeerd zijn (zeer onwaarschijnlijk), schrijf 1 samenvatting in sessie-log + stop.

### Stop-conditie
Mark stopt expliciet met **"STOP"** of **"PAUZE"**. Anders doorgaan tot tokens op. **Nooit zelf stoppen omdat een keuze "te groot" voelt** — pak iets kleiners en ga door.

### Peer-review checks (visueel + inhoudelijk)

Om te voorkomen dat 2 weken werk de verkeerde kant op gaat: regelmatig **agents elkaar laten beoordelen**.

**Wanneer**:
- Elke 5e afgewerkte taak in de backlog, OF
- Elke 2e sessie (wat eerder komt), OF
- Aan het eind van een sessie waarin een nieuw pad is gemaakt (geen alleen-uitlegPad-werk).

**Stappen**:
1. **Playwright-screenshots** van live productie via MCP (`mcp__playwright__browser_navigate` + `browser_take_screenshot`):
   - `/` (home)
   - `/leerpaden` of student-home (overzicht)
   - 1 willekeurig nieuw/aangepast leerpad — open een check, trigger fout, screenshot uitlegPad in `simpeler` modus.
2. **Twee reviewer-agents in parallel** (`Agent` tool, `subagent_type: "general-purpose"`):
   - **Agent A — visueel & UX**: krijgt de screenshots + STOPLIST + Leerkwartier-test. Vraag: "Helpt dit een 10-jarige om Cito-stof beter te begrijpen? Zie je iets dat tegen STOPLIST of jargon-regel ingaat?"
   - **Agent B — inhoudelijk & strategie**: krijgt de laatste 5 commits + huidige backlog + visie. Vraag: "Past deze richting bij ICP (Cito-ouder groep 6-8)? Gaat de prioriteits-volgorde nog kloppen?"
3. **Vergelijk de twee oordelen**:
   - **Beide eens (positief)** → log "✅ peer-review akkoord" in backlog, ga door.
   - **Beide eens (negatief)** → log "⚠️ peer-review zegt bijsturen + reden", **stop autonome modus** en vraag Mark expliciet wat te doen.
   - **Oneens met elkaar** → log beide oordelen + samenvatting verschil, vraag Mark om de knoop door te hakken.
4. **Verifieer claims** voordat je escaleert — agents kunnen onterecht alarm slaan. Check zelf even: bestaat het bestand dat ze noemen? Klopt de regel die ze citeren? Pas escaleren naar Mark als de zorg standhoudt.

**Niet doen**:
- Geen review-loop op elke commit — dat verspilt tijd en tokens.
- Geen reviewer-agent vragen "wat zou je anders doen?" — alleen ja/nee + reden. Die agent gaat niet zelf bouwen.
- Reviewers krijgen geen schrijftoegang tot code (gewoon `general-purpose` met Read-rechten — nooit hun eigen aanbevelingen direct toepassen).

### Per sessie
- Build na elke chunk: `npx vite build`. Faalt = fixen voordat je verder gaat.
- Commit per pad (niet 3 paden in 1 commit).
- Push elke commit direct.
- Eind van sessie: 1 regel toevoegen aan `docs/AUTONOOM-BACKLOG.md` onder "Sessie-log".

### Eind-datum
2026-05-24. Daarna evalueert Mark of de modus verlengd wordt.

### 15-agent-audit (terugkerend ritueel — elke 6-8 weken)

Naast de lichte peer-review (2 agents) is er een **zware 15-perspectieven-audit** die scope-creep en uitvoerings-gaten vangt die normale review mist. Mark heeft deze 2026-05-13 voor het eerst gedraaid; het rapport identificeerde 3 kritieke gaten + 2 financiële tijdbommen in 3 uur werk-tijd.

**Wanneer draaien**:
- Elke 6-8 weken (max 1× per maand).
- Vóór elke product-mijlpaal (Cito-piek, paywall-launch, nieuwe USP-feature).
- Na grote scope-wijziging (Mark voegt nieuwe vak/feature toe).

**Werkwijze (~2-3 uur Claude-tijd, geen Mark-tijd nodig)**:
1. Dispatch **4 parallelle research-agents** (subagent_type: `general-purpose`) — niet 15, want te veel overlap + context-kosten. Cluster perspectieven slim:
   - **Agent A — Concurrentie + product-strategie**: WebSearch naar 5-7 concurrenten (Squla/Junior Einstein/WRTS/Examenbundel/ChatGPT/Cito-aanbieders). Output: concurrentiematrix + marktgaten + bedreigingen.
   - **Agent B — SEO + AI-search**: WebSearch naar zoekvolumes + huidige indexering + AI-engine visibility + top 10 quick-wins.
   - **Agent C — Code-audit didactiek + AI**: lees `learnPaths/`, `VraagUitlegPad.jsx`, `api/tutor-chat.js`, `adaptiveStore.js`, `spacedRepetition.js`. Output: per-onderdeel-werkt-of-niet met file:line bewijs.
   - **Agent D — Code-audit performance + scalability**: lees `vite.config.js`, `pathLoaders.js`, `_guard.js`, `sw.js`, supabase migrations. Output: bundle-bytes, AI-cost-projectie, RLS-gaps, in-memory-leaks.
2. **Synthese zelf** met alle 15 perspectieven uit prompt-template (P1 product strategist t/m P15 brutally honest). Gebruik agent-rapporten + memory + codebase-kennis.
3. **Output-structuur (vast)**: executive summary → grootste problemen-tabel met file:line → grootste kansen-tabel → per-agent-bulletjes → concurrentiematrix → SEO/UX/Didactiek/AI/Growth/Monetization audits → top 10 quick wins (impact/effort) → roadmap → final verdict + score /10 → **morgen / 3 maanden / 1 jaar**.
4. **Sla bevindingen op in `docs/AUTONOOM-BACKLOG.md`** als nieuwe **Sprint-0** sectie. Quick wins met effort + file:line concreet.
5. **Schrijf NIET in een apart audit-document** — backlog is single source of truth.

**Wat ALTIJD vragen aan jezelf in de synthese**:
- "Welke 3 fixes zijn samen <5 uur werk maar lossen >50% van de problemen op?" → die zijn QW1-3.
- "Wat doet NU al pijn dat Mark niet weet?" → kritieke fixes.
- "Welke architectuur-tikbommen ontploffen bij 1000 DAU?" → schaalbaarheids-blokkers.
- "Cito-piek nov-feb is hard deadline — wat moet vóór die piek LIVE?" → roadmap-anker.

**Eindscore /10 verplicht** in finale verdict. Onderverdeling: fundering / executie / strategische focus / marktpositionering / tech-keuzes / visie+branding. Mark wil EERLIJKE cijfer, geen "ziet er goed uit".

**Prompt-template** staat in `docs/AUDIT-15-AGENT-PROMPT.md` (Mark levert prompt; Claude voert uit).

## Build & test

```bash
npx vite build           # build check (gebruikt na elke chunk)
npx vite                 # dev server
```

- Geen test-suite die routinematig draait — bouw + handmatige browser-check is de norm.
- Playwright via MCP voor visuele verificatie van live productie.

## Kern-flow: examen → begrip → leerpad → terug

Dit is wat Leerkwartier uniek maakt. **Onthoud dit voor elke content-keuze:**

1. **Echte examen-vraag** is de basis. Authentiek (VMBO-examens via examenblad.nl = wettelijk openbaar), nooit verzonnen. Voor Doorstroomtoets: zie copyright-policy hieronder — eigen vragen "in stijl van" + externe link naar officiële PDF.
2. Leerling/ouder ziet de vraag, probeert antwoord. Bij fout: **"Begrijp je dit?"** — niet alleen het antwoord tonen.
3. Bij "nee, leg uit": uitlegPad opent (3 niveaus: basis/simpeler/nogSimpeler) → daarna doorklik naar **leerpad** (a tot z) over het onderliggende concept.
4. Leerpad sluit de loop terug: aan het einde **terug-link** naar de oorspronkelijke examen-vraag — "snap je 'm nu wel?".

### Concrete implementatie-regels

- **Elke examen-check** moet hebben:
  - `examenBron` (string met "🎓 Echt examen ... jaar tijdvak T, vraag N")
  - `bronTekst` (de oorspronkelijke leestekst/bron, indien tekst-vraag)
  - `leerpadLink: { id, title }` — pointer naar het concept-leerpad
  - `uitlegPad` (3-niveau didactische uitleg)
  - `wrongHints` (denkprikkels, geen antwoord)
  - `explanation` (volledige uitleg na fout)
- **`examenLookup.js` doet reverse-lookup**: gegeven een leerpad-id → welke examenvragen verwijzen ernaar. Gebruikt bij AllDone-scherm van leerpad ("oefen nu deze examenvragen").
- **Nieuwe leerpaden** moeten een ID krijgen die matcht met `leerpadLink.id` van bestaande examenvragen. Anders blijft de loop kapot.
- **Examen-modus vs oefen-modus splitsen**: examen-modus = authentiek (geen hints, tijdsdruk, geen leerpad-link tijdens). Oefen-modus = didactisch (hints, uitlegPad, leerpad-link altijd zichtbaar).

### Wat dit betekent voor backlog

- **uitlegPad toevoegen** is goed, maar **leerpadLink zonder bestaand leerpad = kapotte loop**. Check altijd dat het pad bestaat waar je naar linkt.
- **Nieuwe leerpaden** krijgen prioriteit als er een examenvraag op wacht (lookup omgekeerd: welke `leerpadLink.id` verwijst naar een nog-niet-bestaand pad?).
- **Authentiek-eis is heilig**: niet 1 examenvraag verzinnen. Skip liever en log in backlog dat de bron ontbreekt.

## Architectuur

- **Leerpaden**: `src/learnPaths/<id>.js` — elk een `subject + chapters + steps + checks`.
- **uitlegPad-pattern** (3 niveaus): elke check krijgt `uitlegPad: { stappen, woorden, theorie, voorbeelden, basiskennis, niveaus: { basis, simpeler, nogSimpeler } }`. Bij ≥2 fouten opent VraagUitlegPad automatisch op `simpeler`.
- **Examenvragen**: MOETEN authentiek zijn (geen paraphrase). Audit/fix-scripts in `scripts/`. Zie `docs/` voor bron-policy.
- **Doorstroomtoets-content** ≠ VMBO-examens juridisch. Alle 5 aanbieders (Cito/IEP/Route 8/Dia/AMN) zijn **private partijen**, geen overheid. Cito-disclaimer verbiedt commercieel gebruik letterlijk. **NOOIT** vragen kopiëren uit voorbeeld-PDFs. WEL: eigen vragen "in stijl van" + externe link naar officiële Cito-PDF tonen. Zie `feedback_doorstroomtoets_copyright` in memory.
- **examenLookup.js**: reverse-index van leerpad-id → linkende examenvragen. Build-time gegenereerd.
- **Adaptive store + spaced repetition**: localStorage + Supabase voor cross-device.
- **3D-modellen**: workflow Claude.ai TSX → `src/3d/{ID}.jsx` → `step.interactiveComponent`.
- **PWA**: Service Worker pijnpunt — bij cache-issues `Ctrl+Shift+R` of tab heropenen (Mark's `?v=` querystring breekt `file://`).

## Conventies

### Didactiek
- **wrongHints geven richting, geen antwoord** — schrijf als denkprikkel/vraag, nooit het juiste antwoord weggeven.
- **wrongHints-eliminatie-leak vermijden** *(toegevoegd 2026-05-12 na review)*: in een 4-opties-vraag mag niet **elke** foute optie een unieke categorie-hint krijgen waardoor het juiste antwoord per uitsluiting bekend wordt. Bv. `[null, "Vrouw.", "Vrouw.", "Vrouw."]` bij vraag "wie is eerste man-koning?" → geeft antwoord weg. Gebruik vagere richtingen of laat sommige wrongHints `null`/leeg.
- **Examen-modus vs Oefen-modus splitsen**: examen = authentiek/tijdsdruk/geen hints. Oefen = didactisch/hints/leerpad-link.
- **15-min chunks (handelsmerk)**: splits elk pad in genummerde delen van ~15 min met expliciete tijdsindicatie. **Concrete grens** *(toegevoegd 2026-05-12)*: max 4-5 stappen × ~250 woorden explanation. Boven dat: splitsen in deel 1/deel 2 of explanations halveren.
- **Universele leerconcepten boven boek-specifieke hoofdstukken** (parabolen/pythagoras, niet "boek X hoofdstuk 3").

### Copy / UI
- **Geen dev-jargon in user-facing copy**: "leerpad", "stap", "module", "trackId" e.d. nooit in UI. Gebruik woorden die ouders/leerlingen kennen.
- **Nooit alléén "ouder" in user-facing copy** *(Mark 2026-08-01)*: veel kinderen wonen bij een voogd, pleegouder, opa/oma of andere verzorger — "ouder" kan pijnlijk uitsluiten. Gebruik **"ouder of verzorger"**, of neutraal **"voor thuis" / "thuis"**. Code-identifiers (route/var/tracking zoals `ouderkaart`) mogen blijven; het gaat om zichtbare tekst. Zie memory `feedback_ouder_of_verzorger`.
- **Afkortingen voluit bij eerste gebruik** *(toegevoegd 2026-05-12 na review)*: kinderen van 10 kennen MBO/HBO/WO/CAO/AOW/ZZP/NAVO/USSR/AVG/HTTPS/EU/VS/UK niet automatisch. Patroon: `**NAVO** (Noord-Atlantische Verdragsorganisatie — westers leger-bondgenootschap)` bij eerste vermelding, daarna afkorting OK. Geldt ook voor "VO" → al eerder vervangen door "middelbare school".
- **Geen AI-poster-art bij Doorstroomtoets-content**: sobere bronnen (foto/kaart/tabel). Geen sfeer-illustraties met antwoord-verklap.
- **Naming Cito vs Doorstroomtoets**: in copy/UI gebruik "Doorstroomtoets" (schoolrealiteit sinds 2024). Filenames + zoek-keywords blijven "cito" voor SEO. Zie `feedback_doorstroomtoets_naming` in memory.
- **Doorstroomtoets-logo**: overal waar "Doorstroomtoets" in user-facing UI staat (knoppen/tegels/headers), gebruik `<DoorstroomtoetsLogo size={N} />` uit `src/components/DoorstroomtoetsLogo.jsx` in plaats van het 🎯-emoji. Geldt ook voor toekomstige leerkracht-features waarbij een leerkracht zelf een Doorstroomtoets samenstelt. PNG ligt in `public/logo-doorstroomtoets.png`. Zie `reference_doorstroomtoets_logo` in memory.
- **examenBron-banner prominent + overal consistent**: gouden 'markeerstift'-look voor alles wat met echte examenvragen te maken heeft. Twee shared componenten:
  - `<ExamenBronBanner examenBron={...} />` (`src/shared/ui/ExamenBronBanner.jsx`) — **per check** (1 examenvraag). Compact-variant voor lijsten *(CitoLeerpadToets fout-uitklap, ResultsPage)*.
  - `<ExamenPadBanner intro={...} padTitle={...} />` (`src/shared/ui/ExamenPadBanner.jsx`) — **pad-intro** *(Overview-scherm van examen-paden, automatisch via `path.id.startsWith("examen-")`-detectie)*.

  Reden: authentieke examenvragen zijn een USP — moet **overal** zichtbaar zijn. **Voor toekomstige UI-plekken**: zie je `examenBron` of een examen-pad-intro? → banner-component erbij. Geen inline-stijl meer kopiëren. Bij Doorstroomtoets-content (private, geen examenblad-link) een aparte variant toevoegen. Zie `feedback_examen_bron_prominent` in memory.
- **1 primary per scherm** (design-system).
- **Game ↔ leer strikt scheiden** in design-system.

### Slogan / brand
- Slogan: "Een kwartier per dag — écht begrijpen wat je leert."
- Payoff: "Een rustige bijlesdocent in je broekzak. 15 minuten per dag is genoeg."
- Configuratie in `src/brand.js`.

## AI-vindbaarheid — STANDAARD bij elke verbetering (Mark-wens 2026-08-02)

**Mark: "maak dit altijd de standaard — AI-vindbaarheid altijd verhogen met elke nieuwe verbetering."** Bij élke nieuwe gebruikersgerichte feature, pagina of inhoudsverbetering hoort standaard de vraag: *kan een AI (ChatGPT/Claude/Perplexity/Gemini) dit vinden en citeren?* Zo niet → dat erbij maken. Concreet checklijstje per verbetering:

1. **Crawlbaar maken.** Nieuwe waarde die alleen in een SPA-route leeft (client-gerenderd, achter een query-param of vlag) is onzichtbaar voor crawlers. Maak er een **statische, crawlbare representatie** van in `public/*.html` (zoals de andere landingspagina's). Voorkeur: **genereer die statische pagina uit dezelfde databron** via een `scripts/build*.mjs` in de `prebuild` (zie `scripts/buildUitlegThuis.mjs` → `public/uitleg-thuis.html`), zodat het nooit uit sync loopt.
2. **Structured data (JSON-LD).** Kies het passende schema: **HowTo** (stap-voor-stap "hoe doe je X"), **FAQPage** (met de échte vraag zoals een ouder 'm typt: "hoe leg ik ... uit aan mijn kind?"), **Article**, **LearningResource**, **BreadcrumbList**. LLM's en Google citeren deze het liefst.
3. **`public/sitemap.xml`** — nieuwe crawlbare pagina toevoegen.
4. **`public/llms.txt`** — een hoofdpagina-verwijzing + waar zinvol een AI-citaat-vriendelijke FAQ (vraag + kort, feitelijk antwoord mét de leerkwartier.app-URL). Datum "Laatst bijgewerkt" ophogen. `public/llms-full.txt` idem waar relevant.
5. **`robots.txt`** laat AI-crawlers al toe (GPTBot/ClaudeBot/PerplexityBot/OAI-SearchBot etc.) — niet blokkeren.
6. **Meet** het effect in het dagrapport (SEO/AI-vindbaarheid-pijler #10) en zie memory [[project_studiebol_seo_status]] + idee #7 "LLM-SEO als aparte pijler".

Dit is géén losse taak meer maar een vast onderdeel van "af": een verbetering is pas af als de vindbaarheid-kant ook geregeld is (of expliciet is afgewogen waarom niet, bv. bewust premium/privé achter de Familie-poort — dan alleen de gratis "voordeur"-variant crawlbaar maken).

## Niet doen

- Geen banking/financiële sites openen (bank, betaal, crypto-wallet, broker) bij desktop- of browser-controle.
- Geen mocks in DB-tests.
- Geen alarmistische taal over AVG-boetes — solo-builder = vrijwel nul boete-risico, eerste AP-actie = brief.
- Geen feature-bloat — Leerkwartier-test bij elke feature toepassen.
- **Cito-kern eerst** *(verduidelijkt 2026-05-14)*: prio = Doorstroomtoets/Cito-kern groep 6-8 vullen + verbeteren. Niet-Cito-vakken die al in de app staan (Engels, ruimtevaart, kunstenaars, etc.) zijn TOEGESTAAN — maar pas uitbouwen als Cito-kern compleet. **Niet weghalen** als ze al zichtbaar zijn; ze horen in de app, ze hebben gewoon lagere prio.
- **Geen paden > 5 stappen** *(toegevoegd 2026-05-12)* — anders breekt kwartier-belofte.
- Geen documentatie/README's aanmaken tenzij Mark expliciet vraagt.

## Paywall — klaar maar UIT (tot 2027)

Status 2026-05-13: paywall-infrastructuur is gebouwd maar `PAYWALL_ACTIVE = false`. Reden: Leerkwartier heeft 0 betalende gebruikers; eerst groei, dan monetiseren. Mark plant lancering rond Cito-piek **januari 2027**.

**Wat is er nu**:
- `src/subscription/config.js` — feature-flag + pricing-constants + FEATURE_GATES-map.
- `src/subscription/useSubscription.js` — hook die altijd `parent_pro` returnt zolang paywall uit staat.
- `src/subscription/PaywallGate.jsx` — wrapper-component voor premium-only content (rendert children direct als paywall uit).
- `public/abonnement.html` — pricing-pagina + waitlist-form (anon-key INSERT in `upgrade_waitlist`-tabel).
- `api/checkout-session.js` — Stripe-stub die 503 retourneert tot `STRIPE_ACTIVE=true`.
- Supabase-tabellen: `subscriptions(user_id, tier, valid_until)` + `upgrade_waitlist(email, plan)` + `schools(plan_tier, subscription_active)` — bestaan al.

**Hoe schakel je de paywall LIVE** (volgorde aanhouden):
1. `src/subscription/config.js` → `PAYWALL_ACTIVE = true`.
2. Vercel env-vars zetten: `STRIPE_SECRET_KEY`, `STRIPE_PUBLIC_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID_PARENT_MONTHLY`, `STRIPE_PRICE_ID_PARENT_YEARLY`, `STRIPE_PRICE_ID_EXAM`. Plus: `STRIPE_ACTIVE=true` in `api/checkout-session.js`.
3. `npm i stripe` + unblock TODO-blok in `api/checkout-session.js`.
4. Bouw `api/stripe-webhook.js` die `subscriptions`-tabel update op `checkout.session.completed` (insert/upsert tier=parent_pro) en `customer.subscription.deleted` (tier=free).
5. Wrap premium-features in code met `<PaywallGate feature="ai-tutor">…</PaywallGate>`. Features in `FEATURE_GATES`: `ai-tutor`, `exam-mode`, `unlimited-paths`, `voorkennis-keten`, `parent-dashboard`, `school-dashboard`, `generate-questions`.
6. Test in Stripe test-mode (testkaart 4242 4242 4242 4242) → flip naar live keys.
7. Stuur mail naar `upgrade_waitlist`-emails met 30-dagen-gratis-premium-coupon.

**Prijsmodel (Mark akkoord 2026-07-25 — zie `docs/PRIJSPLAN.md`, bron-van-waarheid copy: `src/subscription/proPlan.js` LAGEN):**
- **Gratis** — de leer-kern, blijft (gekwalificeerd) gratis; partner-codes = Familie-niveau gratis.
- **Familie** (ouders, per gezín niet per kind): richtprijs €4,95/mnd of €39/jaar — dashboard, weekrapport, examen-simulatie, Kwartierplan.
- **Pro** (leerkrachten/bijlesdocenten): richtprijs €6,95/mnd of €59/jaar; school €99/klas/jaar — logo op toetsen, onbeperkt toetsen, klasrapportage. Leerpaden klaarzetten blijft gratis (t/m zeker 2031).
- **Kwartier-tegoed** (los, geen abonnement): extra AI-bijles per kwartier; ook cadeaukaart (decemberpiek). Prijs per kwartier vóór lancering bepalen.
- Geen "Premium" als naam, nergens. Tier-mapping DB: familie=`parent_pro`, leerkracht=`teacher_pro`.

**Free-tier-quota** (`FREE_QUOTA`): 3 paden/dag, 0 AI-tutor-calls, 0 examen-modus.

## Externe resources

- **Supabase project-ID**: zie `reference_studiebol_resources` in memory.
- **GitHub repo**: `marksmulders1973/leerschool`.
- **Hosting**: Vercel Hobby (kostenstrategie: zo lang mogelijk free tier). Vercel-project = **`leerschoolnew`** (scope `smulsoft`), deploy alleen vanuit deze map (`Desktop\Studiebol\leerschool`).
- ⚠️ **Projectscheiding**: Leerkwartier (`leerschoolnew`) en Rempahuis (`rempahuis`, Deianera's receptensite in `Desktop\Deianera`) staan onder hetzelfde Vercel-team. **Nooit** Leerkwartier deployen vanuit de Rempahuis-map of andersom. Op 2026-07-07 ging dit één keer mis. Een bewaker-hook (`~/.claude/vercel-project-guard.ps1`) blokkeert nu een `vercel` deploy/domein-actie als de map niet aan het juiste project gelinkt is.
- **AI**: Claude API + Gemini fallback (kostenstrategie: pay-per-use, niet vaste subscriptions).
- **Examenblad.nl URL-patroon**: zie `reference_examenblad_urls` in memory.

## Strategie

- **Examens = twee gelijkwaardige modi** (Mark 2026-05-11). Mag NOOIT weggemoffeld worden:
  1. **🎯 Oefenen met uitleg** = examen-leerpaden (`src/learnPaths/examen*.js`) met `voorkennisKeten` + `uitlegPad` + `leerpadLink`. Onze **USP** (echte uitleg waarom — examenblad.nl heeft dit niet).
  2. **📄 Inzien als PDF** = `ExamensPage` PDF-archief. Niet weggemoffeld omdat: handig voor zelfstudie/papier, ouders die meekijken, examen met correctievoorschrift.
  - StudentHome heeft 2 aparte balken. `ExamensPage` toont beide secties; `initialMode` bepaalt scroll-target. Werk dat een mode WEGZET = afkeuren.

- **Maand-1 snoei**: gebeurt — welkomstvideo terug, leerkracht naar footer, 3-tab bottom-nav, 3D-kubus weg uit hero, dual balken op StudentHome.
- **Maand-2 plan**: 1 vak Doorstroomtoets compleet met uitlegPad — uitgegroeid tot 27 paden × 575 vragen voorzien (taal + rekenen + wereld + examens). Zie `docs/MAAND-2-PLAN.md`.
- **A12 Web Push**: code gebouwd, wacht op Mark's 6 setup-stappen (VAPID-keys, Vercel env, Supabase secrets, migration, edge function deploy, cron) — zie `project_studiebol_a12_webpush_todo` in memory.
