# 🔴🔴 KWALITEIT EERST — totale audit (sinds 5 okt 2026) · BOVENAAN ELK DAGRAPPORT tot alles ✅

Mark 5 okt: "ik heb zo vaak gevraagd of de app goed is … nu klik ik even en vind er zo 15. dit kan ik zo toch
niet verkopen?" Doel: **≥ 98% klopt, aantoonbaar gemeten.** Plan: `docs/AUDIT-PLAN-OKT-2026.md` ·
vakdekking: `docs/VAKKEN-DEKKING-OKT-2026.md`. Regel: nooit "het is goed" zonder getal (gecontroleerd / fout / opgelost / niet getest).

## Q. Stappen (in volgorde)

| # | Stap | Wie | Status |
|---|------|-----|--------|
| Q1 | ~25 nachtfouten Mark 4-5 okt (WhatsApp "Leerkwartier tips") opgelost — v889-v896 | Claude | ✅ |
| Q2 | **Verkeer staat OFFLINE** (v893, `VERKEER_OFFLINE`) — pas terug na regel-voor-regel controle (RVV/VVN) **én akkoord Mark** | Claude → Mark | 🔴 |
| Q3 | Automatische controle `npm run audit:vragen`: 17.259 vragen, 522 sommen → 0 fout; vóór elke content-push draaien | Claude | ✅ |
| Q4 | Werkwoorden-zinnenbank 102 zinnen nagekeken (3 verbeterd) | Claude | ✅ |
| Q5 | ✅ 5 okt: alle 329 AI-vragen nagekeken → **95 fout gewist (29%)**, 238 over (1× nagekeken). "Test wat je net leerde" gebruikt nu eerst padvragen (v897). Nieuwe AI-vragen gaan door een controle met een sterker model, fail closed (v898, live getest: 4 van 5 door). Open: `used_count` staat overal op 0 → bereik van foute vragen niet te meten; tweede controleronde van de 238 | Claude | 🟡 |
| Q6 | ✅ v899: tegel toont "X voor jouw klas · Y in totaal" (lijst valt bij 0 al terug op alle klassen) — Mark: even bekijken | Claude | ✅ |
| Q7 | 🟡 Rekenen — nacht 5→6 okt zelf nagerekend: breuken-po (46 ✅), omzetten breuk/procent/komma (26 ✅), geld (48, 2 verbeterd), deelsommen-met-rest (31 ✅), redactiesommen (40, "per"-tegenstrijdigheid opgelost), belasting (btw-bedragen realistisch). Audit rekent nu ook procentsommen en breuk/komma/procent-gelijkheid na → 10 vragen waar het goede antwoord onvereenvoudigd als "fout" stond + "1/10 = 0,10" opgelost (v903-v906). Nog: cijferend-rekenen + tafels (laden niet in het auditscript, .jsx) en de rest | Claude | 🟡 |
| Q8 | 🟡 Taal — nagekeken: spelling-overige (47, 4 verbeterd o.a. onzichtbaar streepje), werkwoordspelling d/t (**'t kofschip stond met h — fout, opgelost**), werkwoord-tijden (2 eenduidig gemaakt), ei/ij-au/ou (4 rommel-opties weg), Engelse grammatica + woordenschat (lidwoord-vragen eenduidig), Cito-strategieën (**Doorstroomtoets = lezen, taalverzorging, rekenen**, niet studievaardigheden — ook op 5 webpagina's gecorrigeerd, bron Cito). Nog: begrijpend lezen (lange teksten) en de rest | Claude | 🟡 |
| Q9 | 🟡 Nagekeken: klokkijken (49, klokplaatjes kloppen; 2:25 naast 14:25 opgelost), procenten (34), topografie NL (40: Vaalserberg 322 m, ruim 18 mln inwoners, taalvraag), cijferend + tafels (85: 9-tafel-truc stond omgekeerd, "13 rest 0"). topografie Europa/wereld/continenten (59: Azië ligt óók op beide halfronden), maten (41) + gemiddelden (40: "kan NIET zijn" had 3 goede antwoorden), ruimtemeetkunde (32 ✅), natuur (40: **droogste seizoen NL = lente, niet zomer**; vleermuis houdt wél winterslaap), getallen tot 20 + spelling + eerste woorden g3 (73 ✅). gedichten (40: versmaat) + brugklas-oriëntatie (40: mening-als-feit). **Tussenstand nacht 5→6 okt: ~1.180 vragen met de hand nagekeken, ~57 verbeterd (~5%) — dus nog geen 98%; de rest moet dezelfde behandeling krijgen**. Nog: rest van de ~350 paden (VO, examens, overige PO) | Claude | 🟡 |
| Q9b | ✅ **Ronde 1 (5 okt, 11 nakijkers parallel): 96 PO-paden groep 3-8, 3.093 vragen met de hand nagekeken → 138 hersteld (4,5%), 1 verwijderd; v918 live.** Meeste: hints die het antwoord verrieden, twee goede opties, ~20 feitfouten (Schijf van Vijf, XX≠11, kaartschaal, Jezus in islam, statiegeld). Twijfels: `docs/audit/TWIJFEL-VOOR-MARK.md`; status per pad: `docs/audit/HANDMATIG-NAGEKEKEN.md`. **Nog: 3 Doorstroomtoets-banken (831), VO-paden (~4.000), sampleQuestions/textbook/topics (~7.500), 238 AI-vragen 2e ronde** | Claude | 🟡 |
| Q10 | Kliktest als kind (g4, g8, klas 1), ouder, nieuwkomer — telefoon, plaatjes geblokkeerd, **expres fout antwoorden** | Claude | ⏳ |
| Q11 | Eindmeting 200 willekeurige items → foutpercentage (doel ≤ 2%) | Claude | ⏳ |
| Q12 | Gaten aanvullen: spelling + Engels groep 6-8, wiskunde klas 4, Nederlands klas 2 (pas ná audit-methode) | Claude | ⏳ |

## Mark beslist
| # | Vraag | Status |
|---|-------|--------|
| M1 | Uitleg in leerpad staat nu **altijd open** (jouw wens 5 okt) — botst met "vraag eerst" (29 sep). Overal open, of alleen bij korte uitleg? | ❓ |
| M2 | Groep 1-2: bewust klein houden of aanvullen? | ❓ |
| M3 | Volgorde dinsdag: AI-opslag + verkeer eerst (voorstel) — met meerdere agents tegelijk ("gebruik een workflow") | ❓ |
| M5 | **Drukwerk-flyers** (±20 in public/drukwerk) zeggen "oefen-Doorstroomtoets (rekenen, taal, studievaardigheden)" — klopt als beschrijving van óns materiaal, maar bij nieuwe druk liever "lezen, taalverzorging, rekenen". Niet aangepast (drukwerk = eerst tonen) | ❓ |
| M4 | Sams pagina even nakijken: 3 vak-tegels + knop "Maak je blokjes af (extra)" (niet door Claude live getest) | ❓ |

---

# 🔍 Nog nalopen — digibord + nieuwkomers (sinds 25 sep 2026)

Mark 25 sep: "digibord en nieuwkomers hebben we tegelijk gedaan en beide is nog niet af — zet ze in het
dagrapport als nog na te lopen." **Dit blok staat bovenaan elk dagrapport tot alles ✅ is.** Per regel:
wie (Mark = zelf testen/beslissen, Claude = bouwen/checken). Afgevinkt → regel naar "Klaar" onderaan.

## A. Nieuwkomers (v705-v717)

| # | Wat | Wie | Status |
|---|-----|-----|--------|
| N1 | **Woordenpad op telefoon doorlopen**: 20 Nederlandse vragen, fout antwoord → "Nee, een tas is iets om je spullen in te doen." (v716) | Mark | ⏳ |
| N2 | **In de klas / Rekentaal / Rekenen tot 20 en 100**: nieuwe "Nee, …"-uitleg bij elk fout antwoord (247 stuks, v717) — steekproef van ~10 | Mark | ⏳ |
| N3 | **Herhaalkaart op /nieuwkomers**: code nagespeeld 26 sep ✅ (5 woorden → 5 verschillende herhaalvragen); in productie nog 0× geopend — afvinken bij eerste echte gebruik | Claude volgt | 🟡 |
| N4 | ✅ 25 sep live gecheckt (Breuken): "Onderwerp: …" klein, vraag groot | — | ✅ |
| N5 | **Vertaalfouten die bewust bleven staan** ("alleen Nederlands"): Arabisch "2 kinderen" (tweevoud), Engels "I have hunger/pain", Turkse kapstok-hint verklapt het antwoord. Fixen of laten? | Mark beslist | ❓ |
| N6 | **Twijfelvragen In de klas**: "De bel gaat" (bel = ook naar huis), "Je jas hangt aan de…" (deur kan ook) | Mark beslist | ❓ |
| N7 | ✅ v722: kwartier-balk zegt minuten ("Jouw kwartier · nog 5 min", "⭐ 5 minuten gehaald") i.p.v. "Deel 1 van 3" | — | ✅ |
| N10 | **Meten nieuwkomers (v720)**: `docs/sql/nieuwkomers.sql` elke dag in het rapport — welke code, via code of link, taalkeuze, vertaal-tikken per taal (vraag/antwoord), onderdelen, oefenen per pad + steuntaal. Leerpad-antwoorden zijn nu ook een event → "sommen" stijgt vanaf 25 sep (breuk in de reeks) | Claude, dagelijks | ⏳ |
| N9 | **Overzicht "Hoofdstuk 1 · Hoe vraag ik iets aan de juf of meester?"** + "5 vragen · ± 3 minuten" + Begin-knop (v719, alle leerpaden) — op je telefoon bekijken | Mark | ⏳ |
| N8 | ✅ v722: rekentaal-hint "2 keer = twee keer het getal 4" → "Kijk: welk getal, en hoe vaak?" | — | ✅ |
| N11 | **Woorden deel 5 "Hoe voel je je?"** (v728, 26 sep nacht): blij, verdrietig, boos, bang, moe, ziek + "Ben je verdrietig of bang? Zeg het. Dat mag altijd." Alles tikbaar in EN/AR/UK/TR. Even op telefoon doorlopen | Mark | ⏳ |
| N12 | **Charley in nieuwkomerpaden** (v731-732): heel eenvoudig Nederlands + onder elke zin de thuistaal (live getest AR/UK). Bij woordvragen verklapt hij de betekenis — bewust (zelfde keuze als de tik-vertaling: leren, geen toets). ✅ **Mark akkoord 26 sep** | Mark | ✅ |
| N13 | **Plaatjes bij de eerste woorden** (v743, Mark "doe maar" 26 sep): Mulberry Symbols (CC BY-SA 4.0, commercieel toegestaan; ARASAAC viel af = niet-commercieel), alleen bij vragen waar álle 4 antwoorden een duidelijk plaatje hebben; kleuren = kleurvlak; naamsvermelding onderaan /nieuwkomers. Zonder plaatje: boek, kind, neus, familie-rijtjes. Even op telefoon bekijken | Mark | ⏳ |
| N14 | **Doorgroeiplan nieuwkomers — stap 6 van 7** (docs/NIEUWKOMERS-DOORGROEI-PLAN.md § 0): ✅ 1 gratis t/m 31-12-2028 · ✅ 2 trede-testje 1 · ✅ 3 nieuwkomer-dictee · ✅ 4 Trede 2 + testje · ✅ 5 instap-testje · ✅ 6 overstap naar de gewone app (v757) · 🔒 7 klasoverzicht juf (betaald) wacht op KvK + verwerkersovereenkomst + 5-10 echte klassen — **Mark: in een privévenster op je telefoon /nieuwkomers van boven naar beneden doorlopen** · Meten: nieuwkomers.sql blok 8-10 + nk_overstap | Claude bouwt, Mark test | 🟡 |

## B. Klas & digibord (v684, v712-v714)

| # | Wat | Wie | Status |
|---|-----|-----|--------|
| D1 | **QR-hoek op /klas** — ✅ 25 sep 07:38→07:39 keten werkt in productie (klas K7G4S, groep 7) | — | ✅ |
| D2 | **Klassikaal op het digibord**: toets maken → "🙋 Klassikaal op het digibord" → kaartjes printen → 3 vragen met handen tellen (v714) | Mark | ⏳ |
| D3 | **Kaartenvel** echt printen: passen de letters, knipt het makkelijk? | Mark | ⏳ |
| D4 | **Promotie**: niemand weet dat /klas + digibord bestaan (Mark zelf ook niet). Zin + schermafbeelding in de volgende scholenmail; leerkrachtflyer juf-start-A4 bijwerken | Claude concept → Mark go | ⏳ |
| D5 | **Stichting OOB Bonaire** probeert /klas met één klas — wachten op hun ervaring (antwoord verstuurd 25 sep) | wachten | ⏳ |
| D8 | **Kant-en-klare setjes** op leerkwartier.app/klassikaal (v718): groep 6/7/8 mix, rekenen, taal + 3 taalklas-setjes; ook via /klas "Klassikaal met kaartjes". Eén setje echt in de klas proberen | Mark | ⏳ |
| D9 | **België** (25 sep): leerkwartier.be/vlaanderen live (v721); 3 verzendklare mails in docs/outreach/BELGIE-*.md — 62 scholen met taalheldklas, 7 voedselbanken, 50 Huizen van het Kind. ✅ tekst-akkoord 25 sep; ✅ VERSTUURD za 26 sep (7 voedselbanken + 20 scholen, 27/27 OK); Huizen van het Kind na eerste reacties | Claude volgt | ⏳ |
| D10 | ✅ Verzendscript: dagrem 80 bulkmails over alle docs samen (v722, getest) | — | ✅ |
| D11 | **Nieuw Taalklas-setje "Hoe voel je je?"** op /klassikaal (v730) + setjes Rekenen/Taal kiezen weer op vak (brak kort door de nieuwe start-kwartier-volgorde, v726-729) | Claude ✅ · Mark kijkt | ⏳ |
| D6 | **Cijfers**: `docs/sql/klasgolf.sql` query (3) QR per klas + events `digibord_*` (incl. `digibord_setje`, `klas_naar_klassikaal`) in het dagrapport meenemen | Claude, dagelijks | ⏳ |
| D7 | ✅ Link `leerkwartier.app/klas.` (punt uit mail) stuurt door — getest 25 sep (v712) | — | ✅ |

## C. Ideeën van Claude (niets gebouwd — go nodig)

1. ✅ GEBOUWD v718 (zie D8) — **Klassikaal zonder zelf een toets te maken**: op /klas een knop "Klassikaal met kaartjes" met kant-en-klare setjes (Doorstroomtoets-mix groep 6/7/8, en Woorden voor de taalklas). Nu moet de juf eerst een toets bouwen — dat is de grootste drempel.
2. **3-2-1 "Kaartjes omhoog!"**: een aftel-knop op het digibord zodat iedereen tegelijk opsteekt (minder afkijken, sneller tellen).
3. **QR op het eindoverzicht**: "Oefen de moeilijke vragen thuis" — QR met precies de vragen onder 60%, zodat de klas thuis verder gaat met wat misging.
4. **Taalklas-modus**: Woorden/In de klas klassikaal op het digibord met de voorleesknop — past bij de 176 LOWAN-scholen die we al mailden.
5. **Uitslagen per klas bewaren in het account** (nu alleen op dat ene apparaat): dan ziet de juf de groei over weken — en is het een argument voor de schoollicentie.

## Klaar
- 25 sep: N4, N7, N8, D10 ✅
- 25 sep: D7 doorverwijzing /klas. ✅
- 25 sep: D1 QR-hoek in productie getest ✅

- **N15 (29 sep, uit mail WereldKidz Albatros):** "merendeel ongeletterd, niet alles kan worden voorgelezen" → ✅ **GEBOUWD v792 (29 sep avond): nieuwkomers zonder lezen** — voorleesstand, luisterknoppen overal, Woordkaarten / Luister en kies / Plaatjesdictee (190 Mulberry-plaatjes), vertalingen EN/AR/UK/TR (134 nog na te kijken door Claude). Update aan Hanneke verstuurd 30 sep 02:25 (wacht op oordeel + native check via WEN; niet nudgen vóór ~14 okt). **Mark: op telefoon doorlopen** (privévenster, 🔊 voorleesstand).
