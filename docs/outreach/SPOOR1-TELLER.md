# Spoor 1 — teller per soort organisatie

> Idee 11 uit het dagrapport van 15 okt 2026 (Mark: "maak beide"). Vast blok in elk dagrapport tot spoor 1 klaar is (~wo 22 okt) en daarna zolang er nog bezoekers via spoor 1 binnenkomen.
> Doel: na de ronde weten welk soort organisatie echt oefenende kinderen oplevert; de volgende ronde gaat naar dat soort.

## Zo vul je het blok

| Kolom | Bron |
|---|---|
| **Gemaild** | OK-regels per verzenddoc: `grep -cE '^\s*- [0-9]+ · .* · OK' docs/outreach/SPOOR1-ZEND-<SOORT>.md` (totaal = aantal tabelrijen `^\| [0-9]+ \|`) |
| **Antwoord** | de tabel hieronder; bij elke mail-check bijwerken (ook doorsturen en "nee"; automatische antwoorden niet meetellen) |
| **Apparaten / oefenende kinderen** | `docs/sql/spoor1.sql`: alleen apparaten die iets dédén tellen (scanners eruit) |

Vorm in het dagrapport:

| Soort | Gemaild | Antwoord | Apparaten (echt) | Oefenende kinderen |
|---|---|---|---|---|
| Bibliotheken | x / 71 | x | x (ruw y) | x |
| Gezinsorganisaties | x / 191 | x | x (ruw y) | x |
| Kinderopvang | x / 96 | x | x (ruw y) | x |

## Antwoorden

| Datum | Soort | Organisatie | Wat | Vervolg |
|---|---|---|---|---|
| do 15 okt 13:35 | bibliotheek | Bibliotheken Noord Fryslân (info@bnfrl.nl) | klantenservice stuurt door naar de marketingafdeling | ✅ zo 18 okt vervolg (Mark "stuur maar nu"): plakblokje nieuwsbrief + eigen code aangeboden (bestaat nog niet, pas maken bij ja) → wachten |
| vr 16 okt 12:00 | bibliotheek | Theek 5 Oosterhout (Margo Kerstes, educatie@theek5.nl) | "benieuwd hoe dit eruit ziet", vraagt bibliotheekinlog om met leesmediaconsulenten + Programmering te kijken | ✅ 16 okt beantwoord (Mark "stuur maar"): code THEEK52027 + uitleg; flyer met logo aangeboden · ✅ zo 18 okt vervolg: Leesladder/Kwartiercheck/Nieuwkomers uitgelicht + videogesprek aangeboden (code nog 0× gebruikt) → wachten |

Automatische antwoorden (niet meegeteld): Theek 5 (15 okt), Bibliotheek De Lage Beek / Suzan Mulder (16 okt, vakantie tot 26 okt).

## Stand

| Datum | Bibliotheken | Gezinsorganisaties | Kinderopvang |
|---|---|---|---|
| do 15 okt 18:00 | 60/71 gemaild · 1 antwoord · 0 echt (5 ruw = scanners) · 0 oefenend | 0/191 | 0/96 |
| vr 16 okt 08:05 | 71/71 gemaild · 1 antwoord · 0 echt · 0 oefenend | 49/191 | 0/96 |
