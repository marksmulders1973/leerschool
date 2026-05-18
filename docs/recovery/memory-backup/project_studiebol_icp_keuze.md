---
name: Leerkwartier — ICP-keuze (S1 strategische focus)
description: Bezorgde Cito-ouder = primaire koper. Bevestigd door Mark op 2026-05-07. Leidend voor alle product-, content- en marketing-keuzes.
type: project
originSessionId: da438f24-0b85-410c-8513-283d9b007cea
---
# Beslissing 2026-05-07

Mark heeft S1 (audit 2 + 3 strategische focus) **expliciet bevestigd**:

> "strategische koper is idd ouder voor cito, tevens ook na cito bruikbaar/nuttig.
> heb je de klant bij Cito, blijft waarschijnlijk langer aan app verbonden."

## ICP (Ideal Customer Profile)

**Primair**: ouder van een kind in **groep 6-8** dat naar de Doorstroomtoets toewerkt (Cito + IEP + ROUTE 8 + AMN).

**Acquisitie-trigger**: zorgen om Cito-prestatie, vooral in de Cito-paniek-periode (januari-april).

**Retention-strategie**: na Cito blijft de app nuttig via:
- VO-content (kind gaat naar brugklas; methodes Pluspunt/WiG → MW HV1A/GR HV1)
- 822 handgeschreven vragen voor 45 boeken die over jaren mee kunnen
- Spaced-repetition-loop (M1) houdt onderhouds-gewoonte in stand
- 15-min/dag-belofte = laagdrempelig dagelijks gebruik

## Concrete implementatie (live na 2026-05-07)

- **Homepage**: oranje "🎯 Cito oefenen"-knop direct onder de Leerling-tegel (commit c80daef). Cito-ouder die specifiek hiervoor komt, klikt direct, niet via rol → vakkenkeuze → cito.
- **Cito-flow**: 3-staps (audit 2 P2b) — strategie → oefenen-per-onderdeel → eindtoets-simulatie. Solide propositie tegen Squla.
- **141 Cito groep 8 vragen** + 64 leerpaden + 822 textbook-vragen = **content-moat** dat Squla niet 6 maanden inhaalt.
- **Doorstroomtoets-tekst** geüpdatet naar 2024-regels (audit 3 — schooladvies eerst, bij hoger toetsadvies MOET school heroverwegen).

## Wat NIET de ICP is (bewust uitgesloten)

- Leerkracht-spoor (B2B): pas activeren ná €5k MRR uit ouders. Tot dan blijft de Leerkracht-tegel staan als secundaire ingang maar krijgt geen marketing-prioriteit.
- VO-instromers als primaire ingang: secundair, wel als retention-vehikel ná Cito.
- Vmbo-doelgroep: secundair. Eén Pincode-pad bestaat, rest van vmbo-content blijft achter PO-prioriteit.
- Internationaal: niet relevant. Focus 100% NL.

## Marketing-implicaties (uit audit 3 growth-marketer)

- **#1 acquisitie-kanaal**: leerkracht-tot-leerlingen-tot-ouders virale loop (Trojan-horse via leerkracht-quiz-deelcode).
- **#2**: SEO landingspagina's per long-tail intent (`/cito-groep-8-oefenen`, `/tafels-groep-4`, etc.).
- **#3**: ouder-Facebookgroepen (Cito 2026, Ouders groep 8) in jan-april paniekseizoen.

## Why

VC + Squla-PM beide: "investable + serieuze concurrent zodra hij focust". Drie rol-tegels = "geen klant" volgens beide. Mark's keuze voor Cito-ouder als ICP is **investability-onlock** + **product-design-anker**.

## How to apply

- Bij elke nieuwe feature/content-toevoeging: vraag "helpt dit een Cito-ouder van groep 6-8?". Zo niet → lagere prioriteit (mag nog wel, maar niet eerst).
- Bij UI-keuzes: Cito-pad is hoofdpad. Andere paden zijn secundair.
- Bij content-keuzes: PO-rekenen + PO-taal + Cito-strategie krijgen kwaliteits-voorrang.
- Bij marketing-copy: "morgen Cito? voor groep 6-8" past, "voor iedereen die wil leren" niet.
