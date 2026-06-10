# Verbeterplan Leerkwartier — juni 2026

> Op basis van 5-agent concurrentie-scan (10 juni 2026): Squla/Junior Einstein teardown,
> StudyGo/Examenbundel/Slimleren/ExamenOverzicht teardown, internationale patronen
> (Duolingo/Khan/IXL/Prodigy/Brilliant), reclame-analyse, en een kritische
> buitenstaander-review van leerkwartier.app zelf. Aanvulling op `CONCURRENTIE.md`.

## Eerlijk eindoordeel eerst

**Niet kansloos — integendeel, het gat is reëel en niemand vult het.** Twee scans
onafhankelijk van elkaar bevestigen: *niemand* in NL combineert gratis + interactief
examen-oefenen + didactische uitleg. ExamenOverzicht's "oefenexamens" zijn kale
PDF-lijstjes; Examenblad heeft nul didactiek; Squla/JE zijn betaald. **Maar:** het
product verliest bezoekers op de voordeur. De buitenstaander-review is hard en
grotendeels terecht: de homepage heeft ~11 concurrerende CTA's, geen ouder-ingang
(terwijl de ouder de ICP is), en een gamer-uitstraling die botst met de
"rustige bijlesdocent"-belofte. Het probleem is niet het product en niet de markt —
het is de eerste 30 seconden.

---

## 1. De beste ideeën om over te nemen (steel-lijst)

| # | Idee | Van wie | Waarom voor ons |
|---|---|---|---|
| S1 | **Maandag-weekrapport-mail aan ouders** (minuten, sterkste/zwakste onderwerp, 1 oefen-link, countdown naar toets) | Squla + Prodigy/IXL | ICP = bezorgde ouder; e-mailmachine is al GEBOUWD (wacht op Resend). Eén kop-cijfer dat de ouder op een verjaardag kan navertellen. |
| S2 | **"Geen abonnement, niks op te zeggen" als expliciete homepage-USP** | Klacht-analyse: opzeg-woede is klacht #1 bij Squla, StudyGo én Slimleren | Wij hébben dit model al (per-kwartier). Nu alleen nog zéggen. Wettelijk veilige anti-claim. |
| S3 | **Try-first funnel formaliseren**: vraag eerst, account later (Duolingo's "gradual engagement") | Duolingo + Junior Einstein | Onze /v/-deeplinks doen dit al; de homepage nog niet. 4-stappen-instap: groep → doel (toets in feb) → 3-vragen-startfoto → "15 min/dag?" → direct echte vraag. Sluit aan op Kwartierplan-idee. |
| S4 | **Doorstroomtoets per aanbieder-label én per domein** | Squla (aanbieders: Cito/IEP/Route 8) + JE (domeinen) | Geen van beiden combineert het. Wij hebben de domein-paden al; aanbieder-labels ("in de stijl van IEP") zijn copy-werk. Let op RCC-precedent: geen "powered by Cito"-achtige claims. |
| S5 | **Countdown-campagne "nog X dagen tot de Doorstroomtoets"** | Examenbundel (100-dagen-campagne, countdown-TikToks) | Gratis format, perfect voor /vandaag + socials + weekmail. Toets = begin februari → campagne start ~eind oktober. |
| S6 | **Streak als trainingsschema mét rustdagen** | Duolingo (streak freeze; onderzoek: ingebouwde speling motiveert méér) | "Dag 23 van je toets-training", 2 vrije dagen/week, 1 kwartier = 1 dag. Gezond (geen schuldgevoel-mascotte), past bij merkbelofte. |
| S7 | **Eerlijke social-proof-strip**: exact getal + echte quotes | StudyGo ("582.245 scholieren" — exact, geloofwaardig) | Vervang de drie anonieme concurrent-klachten door eigen bewijs: "X kinderen oefenden Y vragen" (echte cijfers uit events) + 1-2 echte gebruikersquotes (Sahasra's bedankje!). |
| S8 | **Quickscan/startfoto als ad-CTA** | Examenbundel (Quickscan) + Prodigy | "Doe de gratis startfoto: waar staat jouw kind?" converteert beter dan "ga oefenen". 3-5 vragen, uitslag per domein, doorlink naar paden. |
| S9 | **Mama-blog-winacties i.p.v. alleen Meta-ads** | Squla + Slimleren (janske.nl, mamsatwork.nl etc.) | Hét goedkope ouderkanaal. Kost alleen een gratis Pro-tegoed 2027. Wet: winactie-regels volgen (gratis deelname-route). |
| S10 | **Pro = extra's + ouder-tools, nooit content** | Prodigy (alle curriculum gratis; ouders betalen voor rapportage/cosmetics) | Valideert ons model. Pro 2027 = ouder-rapportage, OBLITERATOR-extra's, examen-modus-luxe — nooit de uitleg zelf. Upsell alléén op ouder-schermen, nooit op kind-schermen (Fairplay-les). |
| S11 | **Jaartal-SEO**: "Slaag in 2027" / "Doorstroomtoets 2027" in titles | ExamenOverzicht | Goedkoop, elk jaar verversen. |
| S12 | **Gratis ouder-e-book als leadmagnet** | Examenbundel | Oefenpakket-PDF bestaat al → variant "Doorstroomtoets-gids voor ouders" tegen e-mail. Voedt S1. |

## 2. Verbeterplan — Spoor A: de voordeur (hoogste prioriteit)

Bevindingen buitenstaander-review, geverifieerd in code:

| Fix | Bevinding (geverifieerd) | Actie |
|---|---|---|
| A1 | Hero = ~11 CTA's verspreid over 5 banners; eigen regel "1 primary per scherm" wordt geschonden; primaire CTA-tekst is 10.5px (HomePage.jsx:1252) | Eén hero: slogan + 1 grote knop "Start gratis oefenen" + 1 rustige subregel. Vraag-v/d-dag compact houden (⚠️ bewuste IG-bio-keuze — verkleinen, niet verwijderen), oefenpakket/deel&win/extra tegels naar beneden. |
| A2 | Geen ouder-ingang terwijl ouder = ICP; "Voor ouders" is een grijze footerlink | Ouder-blok boven de vouw: "Voor ouders van groep 6-8 — zo help je je kind in 15 min/dag" + startfoto-CTA (S8). |
| A3 | Drie anonieme klacht-quotes over concurrenten in de hero | Vervangen door S7 (eigen bewijs + maker-verhaal: "gebouwd door Mark, vader van een examenkandidaat" — abonnement.html bewijst dat dit werkt). |
| A4 | Twee verschillende slogans live (brand.js:15 vs HomePage.jsx:919) | Eén kiezen (advies: brand.js-versie — "écht begrijpen" = USP) en overal doorvoeren. |
| A5 | Autoplay-video met geluid-aan default (⚠️ bewuste Mark-keuze 2026-05-11) | Heroverwegen voor first-visit: muted + klik-voor-geluid, of alleen tonen na 1e interactie. Mark beslist. |
| A6 | Donker gamer-thema vs "rustige bijlesdocent"-belofte; 3 beeldtalen door elkaar (emoji + Lucide + foto's) | Groot werk — eerst A1-A4 doen, dan A/B-gevoel peilen bij echte ouders. Niet impulsief omgooien. |
| A7 | Dode code: TickerBanner (HomePage.jsx:86-325, nergens gerenderd) | Verwijderen (−240 regels). |
| A8 | Comment "BEWUST niet klikbaar" boven code die wél klikbaar is (1294 vs 1329) | Kiezen: of niet-klikbaar maken, of comment fixen. |

## 3. Spoor B: werking/retentie

- B1 (S1): **Weekrapport-mail aanzetten** — code klaar; blokkeert op Mark's 3 Resend-acties. Dit is de hoogste-ROI-actie van het hele plan.
- B2 (S6): Streak-als-trainingsschema met rustdagen + countdown naar toetsdatum in de app.
- B3 (S3/S8): Startfoto-onboarding (4 stappen, eindigt in échte vraag, account pas daarna).
- B4 (S4): Aanbieder-stijl-labels op Doorstroomtoets-paden ("in de stijl van IEP/Route 8" — juridisch nette formulering).
- B5: JE's "weektaak opent vanzelf bij kind-login" → ons Kwartierplan: ouder zet doel, kind ziet het bij openen.

## 4. Spoor C: reclame/groei

- C1 (S5): Countdown-campagneformat klaarzetten voor okt-feb (Doorstroomtoets) en feb-mei (CE). Nu al bruikbaar op Threads.
- C2 (S9): 3 mama-bloggers benaderen met winactie-voorstel (gratis Pro-jaar 2027). Outreach-templates staan in GROEI-PLAN.md.
- C3 (S12 + Squla's nieuwsbrief-bon): leadmagnet-mail + welkomstbon-mechaniek zodra Resend live is.
- C4: Meta Ad Library + Google Ads Transparency alsnog checken via CDP-Chrome (agents konden er niet bij; browser wel). Vervolg-sessie.
- C5: TikTok is het scholieren-kanaal (StudyGo +2600% via TikTok Search) — pas relevant voor VMBO-spoor, niet voor ouder-ICP. Parkeren.
- C6 (S11): Jaartal-SEO doorvoeren op landingspagina's.

## 5. Wat NIET doen

- Geen angst-marketing rond Cito-namen (RCC-precedent Squla 2014).
- Geen trial-met-betaalgegevens/auto-doorloop — de opzeg-woede bij álle concurrenten is precies ons verkoopargument.
- Geen schuldgevoel-mechanieken (sad-Duo-patroon), geen upsell op kind-schermen (Fairplay/Prodigy-les).
- Geen volledige redesign vóór A1-A4 gemeten zijn — eerst de voordeur opruimen, dan pas het thema heroverwegen.

## Volgorde-advies

1. **A1-A4 + A7/A8** (homepage-opruiming) — 1 sessie, direct meetbaar in bounce/klikken.
2. **B1** zodra Mark Resend regelt (30 min Mark-werk, ontgrendelt S1+C3+S12).
3. **S2-banner + S7-strip** — copy-werk, 1 uur.
4. **B3 startfoto** — 1-2 sessies, wordt ook de ad-CTA (S8).
5. **C1/C2** parallel aan content-werk.
