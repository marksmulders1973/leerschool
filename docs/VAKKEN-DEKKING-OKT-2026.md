# Vakken-overzicht /leren — dekking per klas en groep (5 okt 2026, voor audit dinsdag)

Opnieuw tellen: `node scripts/audit/vakken-per-niveau.mjs`

## Wanneer wordt het overzicht getoond?
- Het vak-overzicht (CITO-pillen + vak-tegels) verschijnt **altijd** op /leren, maar gefilterd op **basisschool óf middelbare school**
  (rol "leerling" of groep → basisschool; rol "student" of klas → middelbaar; bezoeker zonder rol → basisschool, schakelaar bovenaan).
- **Probleem 1 — tegel belooft meer dan de lijst geeft:** het getal op de tegel ("Duits 3 onderwerpen") telt **alle klassen samen**.
  Tik je erop, dan staat de lijst standaard op **je eigen klas** → een klas-2-leerling ziet bij Duits 0, bij Informatica 0, bij Economie 0.
  Voorstel: tegel telt "voor jouw klas" (en grijs/"nog niet voor jouw klas" bij 0), of lijst toont bij 0 meteen de andere klassen met uitleg.
- **Probleem 2 — opgelost 5 okt:** 8 eindexamens Nederlands (vmbo) hadden geen level → stonden bij klas 1 (8 van de 12 "brugklas"-onderwerpen Nederlands waren eindexamens). Nu `vmbo-gt-4`.

## Middelbare school — onderwerpen per vak per klas

| Vak | totaal (tegel) | klas-1 | klas-2 | klas-3 | klas-4 | bovenbouw |
|---|---|---|---|---|---|---|
| wiskunde | 33 | 14 | 4 | 3 | **0** | 12 |
| economie | 23 | **0** | **0** | 3 | 18 | 2 |
| geschiedenis | 23 | 3 | 4 | 1 | 11 | 4 |
| taal | 21 | 4 | **0** | 2 | 8 | 7 |
| engels | 21 | 3 | 3 | 3 | 9 | 3 |
| biologie | 20 | 2 | 3 | 1 | 8 | 6 |
| maatschappijleer | 14 | **0** | 2 | 1 | 8 | 3 |
| aardrijkskunde | 11 | 1 | 3 | **0** | 1 | 6 |
| natuurkunde | 11 | 1 | 2 | 1 | **0** | 7 |
| informatica | 9 | **0** | **0** | **0** | **0** | 9 |
| scheikunde | 6 | 1 | **0** | 2 | **0** | 3 |
| kunst | 3 | **0** | **0** | **0** | **0** | 3 |
| duits | 3 | 2 | **0** | **0** | **0** | 1 |
| frans | 3 | 1 | 1 | **0** | **0** | 1 |
| filosofie | 2 | **0** | **0** | **0** | **0** | 2 |
| klassieke-talen | 2 | **0** | **0** | **0** | **0** | 2 |
| beco | 1 | **0** | **0** | 1 | **0** | **0** |

## Basisschool — onderwerpen per vak per groep

| Vak | g1 | g2 | g3 | g4 | g5 | g6 | g7 | g8 |
|---|---|---|---|---|---|---|---|---|
| aardrijkskunde | **0** | **0** | **0** | **0** | 1 | 6 | 7 | 9 |
| begrijpend-lezen | **0** | **0** | **0** | 1 | 4 | 12 | 14 | 15 |
| cito | **0** | **0** | **0** | **0** | **0** | **0** | **0** | 1 |
| engels | **0** | **0** | **0** | **0** | **0** | 2 | 2 | 2 |
| geschiedenis | **0** | **0** | **0** | **0** | 1 | 11 | 11 | 11 |
| natuur | **0** | **0** | **0** | 1 | 3 | 13 | 14 | 13 |
| rekenen | 2 | 2 | 6 | 8 | 15 | 24 | 29 | 31 |
| spelling | **0** | **0** | 1 | 1 | 3 | 3 | 2 | 2 |
| studievaardigheden | **0** | **0** | **0** | **0** | **0** | **0** | 6 | 7 |
| taal | 1 | 1 | 8 | 8 | 8 | 10 | 19 | 18 |
| wereldorientatie | 3 | 3 | 3 | 3 | 3 | 10 | 11 | 11 |



## Gaten (0 of 1 onderwerp) — prioriteit voor aanvullen
**Middelbaar:** wiskunde klas 4 (0) · Nederlands klas 2 (0) · natuurkunde + scheikunde klas 4 (0) · economie klas 1-2 (0) ·
informatica, kunst, filosofie, klassieke talen alleen bovenbouw · Duits/Frans 1-3 totaal · bedrijfseconomie 1.
**Basisschool:** groep 1-2 bijna niets (alleen rekenen 2, taal 1, WO 3) · spelling groep 6-8 maar 2-3 · Engels groep 6-8 maar 2 ·
cito 1 · studievaardigheden pas vanaf groep 7. (Verkeer staat offline sinds v893.)

## Volgorde voorstel (dinsdag beslissen met Mark)
1. Probleem 1 oplossen (tegelgetal = eigen klas) — klein, raakt elke VO-leerling.
2. Spelling groep 6-8 + Engels groep 6-8 aanvullen (Doorstroomtoets-kern, grootste doelgroep).
3. Wiskunde klas 4 + Nederlands klas 2.
4. Groep 1-2: bewust klein houden of aanvullen? (Mark)
Nieuwe paden pas na de inhoudelijke audit-methode (zelf oplossen, `npm run audit:vragen`).
