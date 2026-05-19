# Acquisitie-experimenten — 3 weken-plan

> **Doel**: van 0 naar 100 actieve gebruikers vóór Cito-piek nov-feb 2027.
> **Insight (6-agent-audit 2026-05-19)**: content is voldoende (249 paden). Echte blokker = niemand weet dat Leerkwartier bestaat. Squla + Junior Einstein domineren SERP.
> **Methode**: 1 experiment per week, **meten via Vercel-analytics**, doorzetten wat werkt.

## Tracking — eenvoudig zonder cookies

Elke link krijgt een **`?ref=...`-parameter**. In Vercel-dashboard ([leerkwartier.vercel.app/_logs](https://vercel.com/marks-projects/leerkwartier/analytics)) zie je per dag hoeveel kliks per `ref` binnenkomen. Geen cookies, geen tracking-pixel, privacy-vriendelijk.

Voorbeelden:
- `https://leerkwartier.app/?ref=fb-groep1` — Facebook-groep nummer 1
- `https://leerkwartier.app/?ref=school-vlinder` — basisschool 'De Vlinder'
- `https://leerkwartier.app/?ref=googleads-doorstroom` — Google Ad

Houd resultaten bij in `docs/ACQUISITIE-LOG.md` (zie onderaan).

---

## Week 1 — Facebook-groepen voor ouders groep 7-8

**Doel**: 3 posts in NL-ouder-FB-groepen, meten klik-respons.

### Zoek deze 3 groepen (10 min op FB)
- "Ouders van kinderen groep 7" (~5-15k leden, NL)
- "Doorstroomtoets / Cito-eindtoets voorbereiden" (zoek op die termen)
- "Ouders en leerkrachten basisschool" (algemeen)

### Post-template A — Eerlijk persoonlijk verhaal
> Hoi allemaal,
>
> Ik ben Mark, vader uit [stad]. Toen mijn dochter zich voorbereidde op de Doorstroomtoets, frustreerde me dat oefenplatforms vooral testen of het antwoord goed is — maar niet **uitleggen waarom**, als het fout gaat.
>
> Daarom heb ik **Leerkwartier** gebouwd. Bij een fout antwoord opent een uitleg op 3 niveaus: basis → simpeler → nóg simpeler. Het kind zoekt zelf naar het kwartje. Echte VMBO-examenvragen + Doorstroomtoets-oefening, in dezelfde app.
>
> **Gratis te gebruiken**, geen reclame voor kinderen. Ik bouw het in m'n vrije tijd, dus alle feedback welkom.
>
> 👉 https://leerkwartier.app/?ref=fb-groep1
>
> (Mods: laat 't weten als dit niet binnen de groepsregels valt, dan haal ik 't weg.)

### Post-template B — Vraag-eerst (uitnodiging)
> Vraag aan andere ouders groep 7-8:
>
> Hoe pak jij Cito-/Doorstroomtoets-voorbereiding aan? Squla, Junior Einstein, oefenboek, niets?
>
> Ik bouwde zelf een gratis oefen-app omdat ik wilde dat mijn dochter **echt begreep** wat ze fout deed — geen 'fout!' + door. **Leerkwartier** heet ie, met uitleg op 3 niveaus. Benieuwd of jullie iets vergelijkbaars kennen of of dit nuttig kan zijn.
>
> 👉 https://leerkwartier.app/?ref=fb-groep2

### Post-template C — Korte tip
> 💡 Tip: 15 minuten per dag oefenen werkt aantoonbaar beter dan een uurtje per week (gespreid leren, Ebbinghaus-curve).
>
> Begin in groep 7 met dagelijks 15 min, dan staat je kind in groep 8 zonder paniek voor de Doorstroomtoets. Korte, regelmatige sessies > weekend-marathons.
>
> Wij gebruiken hiervoor [Leerkwartier](https://leerkwartier.app/?ref=fb-groep3) — gratis, met uitleg op 3 niveaus als er een fout antwoord is. Maar elke 15-min-app werkt; consistentie telt.

### Spelregels
- **Lees groepsregels** vóór je post (sommige verbieden zelfpromotie).
- **Niet spam-en**: 1 post per groep, max 1× per maand.
- **Engage**: beantwoord vragen die mensen achterlaten in comments.
- **Tag jezelf niet** als 'maker' tenzij groep dat toestaat.

### KPI Week 1
- Doel: **≥30 kliks** in 7 dagen (10 per groep).
- Top-KPI: hoeveel mensen klikken **door naar een leerpad** (Vercel toont in 'top pages').

---

## Week 2 — Brief naar 10 basisscholen (gemeente)

**Doel**: leerkrachten + ouders bereiken via school-kanaal.

### Lijst maken (15 min)
- Open Google Maps: "basisschool [Mark's stad]".
- Noteer **10 scholen** met emailadressen (vaak in footer schoolwebsite).
- Mix: openbaar + bijzonder + Montessori/Jenaplan (diverser = beter beeld).

### E-mail-template (kopieer + personaliseer per school)
**Onderwerp**: Gratis oefenplatform voor de Doorstroomtoets — groep 7-8

> Geachte directeur / leerkrachtenteam van [Schoolnaam],
>
> Mijn naam is Mark Smulders, vader uit [stad] en bouwer van **Leerkwartier** — een gratis oefenplatform voor Doorstroomtoets-voorbereiding (groep 6-8) en VMBO/HAVO/VWO-examens.
>
> **Wat het anders maakt**:
> - Bij een fout antwoord opent **uitleg op 3 niveaus** (basis / simpeler / nóg simpeler). Geen 'fout!' + door.
> - Authentieke examenvragen van examenblad.nl, niet verzonnen.
> - 15-minuten-formule per onderwerp — past in een dagelijks ritme.
> - **Gratis** voor leerlingen + ouders, geen reclame, geen tracking.
>
> Ik bouw het in m'n vrije tijd. Geen winstoogmerk, geen abonnement-vereiste.
> Mijn vraag: zou een korte demo via Zoom (15 min) interessant zijn voor jullie groep 8-leerkracht, of mag ik een korte beschrijving toesturen die jullie eventueel in een nieuwsbrief naar ouders kunnen delen?
>
> Geen verplichtingen — als 't niet past, prima.
>
> Met vriendelijke groet,
> Mark Smulders
> mark-smulders@hotmail.com
> https://leerkwartier.app/?ref=school-[schoolnaam-kort]

### Tips
- **Personaliseer naam** + 1 zinnetje over school (kijk hun website voor visie / motto).
- **Verstuur tussen 9:00-11:00 dinsdag/woensdag** (hoogste open-rate).
- **Follow-up na 1 week** als geen reactie (1× max, dan loslaten).

### KPI Week 2
- Doel: **≥2 reacties** (5% reply-rate is realistisch).
- Bonus: 1 school die actief 'm doorzet naar ouders.

---

## Week 3 — Google Ad €50 test

**Doel**: meten of paid traffic werkt + welke zoekterm converteert.

### Setup (30 min eenmalig)
1. Maak een Google-Ads-account (ads.google.com).
2. Campagne-type: **Zoeknetwerk** (geen Display).
3. Budget: **€50 totaal** (= ~€5-7/dag, 7-10 dagen).
4. Doelgebied: **Nederland**.
5. Taal: **Nederlands**.

### 3 ad-groepen (elk eigen budget)

**Groep A — Doorstroomtoets-zoekers** (€20)
- Zoekwoorden: `doorstroomtoets oefenen gratis`, `doorstroomtoets 2027 voorbereiden`, `cito eindtoets groep 8`
- Ad-titel 1: `Doorstroomtoets oefenen — gratis, 15 min/dag`
- Ad-titel 2: `Uitleg op 3 niveaus bij elke fout`
- Beschrijving: `Echte examenvragen + uitlegPad. Gratis voor groep 6-8. Geen account vereist.`
- Final URL: `https://leerkwartier.app/?ref=googleads-doorstroom`

**Groep B — Specifieke aanbieders** (€15)
- Zoekwoorden: `IEP toets oefenen`, `route 8 oefenen`, `dia eindtoets oefenen`
- Ad-titel 1: `Oefen voor IEP / Route 8 / Dia / Cito`
- Ad-titel 2: `5 aanbieders, één app, gratis`
- Final URL: `https://leerkwartier.app/?ref=googleads-aanbieders`

**Groep C — VMBO-examens** (€15)
- Zoekwoorden: `vmbo examen oefenen`, `vmbo economie examenvragen`, `examenblad oefenen`
- Ad-titel 1: `VMBO-examens oefenen + uitleg`
- Ad-titel 2: `Authentiek + didactisch — gratis`
- Final URL: `https://leerkwartier.app/?ref=googleads-vmbo`

### KPI Week 3
- Klik-prijs (CPC) onder **€0,50** = goed.
- Bounce-rate **<70%** op landing = OK.
- **Top-metric**: kliks per ad-groep — meet welke zoekterm-cluster converteert.

---

## Tracking-template — `docs/ACQUISITIE-LOG.md`

Houd dit per week bij (kopieer rij voor rij):

```
| Datum | Kanaal | Ref-tag | Inzet (€/min) | Kliks | Sessions | Doorklik naar leerpad |
|-------|--------|---------|---------------|-------|----------|------------------------|
| 2026-05-20 | FB-groep 'Ouders groep 7' | fb-groep1 | 0 (10 min) | ?? | ?? | ?? |
| 2026-05-27 | E-mail aan 10 scholen | school-* | 0 (60 min) | ?? | ?? | ?? |
| 2026-06-03 | Google Ad Doorstroomtoets | googleads-doorstroom | €20 | ?? | ?? | ?? |
```

**Cijfers ophalen via**:
1. Vercel-dashboard → Project → Analytics → Top pages / Top referrers / filter op datum.
2. Google Ads-dashboard → Campagne-overzicht.

---

## Succes-criteria 3 weken

**Minimum-viable-success**:
- ≥1 acquisitiekanaal levert >5% klikdoorgang naar `/leren`.
- ≥1 school reageert positief.
- Inzicht in CPC voor Cito-zoektermen.

**Stretch**:
- 100+ kliks totaal in 3 weken.
- 10+ terugkerende bezoekers (volgens Vercel-analytics).
- 1 school die actief promot.

**Failure-mode**:
- 0 kliks → herzie copy + groepskeuze.
- Kliks maar 100% bounce → onboarding-flow herzien (audit-agent D-bevindingen).

---

## Wat NIET doen

- ❌ Geen Cito-PDF-vragen kopiëren in ads/posts (copyright).
- ❌ Geen "garantie geslaagd"-claims (kan niet, ondermijnt vertrouwen).
- ❌ Niet spam-en in dezelfde FB-groep > 1× per maand.
- ❌ Niet bellen naar scholen (e-mail eerst, alleen na expliciete uitnodiging).
- ❌ Geen TikTok-poging deze 3 weken (vereist video-skills + tijd; later).

---

## Volgende-na-3-weken

Na 3 weken: **bekijk wat werkt** + dubbel-op op het beste kanaal. Bv:
- Werkt FB? → schaal naar 6 groepen, niet 3.
- Werkt school-mail? → schrijf 20 scholen ipv 10.
- Werkt Google? → verhoog budget naar €100/maand met enkel-de-beste-zoekwoorden.
- Werkt niks? → herzie aanbod. Misschien is "gratis" niet duidelijk genoeg, of mist een specifiek aanbod (bv. "Doorstroomtoets-week intensief").

Acquisitie blijft een **doorlopende cyclus**, geen one-shot. Plan voor Cito-piek nov-feb 2027 vergt 6 maanden voorbereiding — start nu.
