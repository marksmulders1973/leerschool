---
name: Examenblad.nl URL-patroon voor examen-PDFs
description: Hoe je examen-PDFs van examenblad.nl koppelt zonder te downloaden. URL-patroon, niveau-prefixes, vakcodes en helpers.
type: reference
originSessionId: 5e009e69-407d-49fd-b589-58f027ca2824
---
**Bron**: https://www.examenblad.nl — officiële site voor Centraal Schriftelijke Eindexamens. PDFs zijn publiek + stabiel sinds 2010+.

**Strategie in Leerkwartier**: extern linken (geen lokaal hosten) — copyright-veilig, geen repo-bloat, altijd officiële versie. Mark akkoord 2026-05-08 (commit `b00dce0`).

## URL-patroon

```
https://www.examenblad.nl/{jaar}/{niveauPad}/documenten/cse-{tijdvak}/{niveauPrefix}-{vakCode}-a-{yy}-{tijdvak}-{type}
```

- `jaar`        — voluit (2024)
- `yy`          — 2-cijferig (24)
- `tijdvak`     — 1 of 2
- `niveauPad`   — directory in URL (zie tabel)
- `niveauPrefix`— letter-code in bestandsnaam (zie tabel)
- `vakCode`     — 4-cijferig per vak (zie tabel onderaan)
- `type`        — `o` (opgaven), `c` (correctievoorschrift), `u` (uitwerkbijlage)

**Helper** in `src/data/examens.js` is `eb(jaar, tijdvak, niveauPad, vakCode, niveauPrefix, type)` — bouwt de URL.

**HTTP gedrag**: examenblad.nl serveert 303 See Other → `/system/files/exam-document/<datum>/<bestand>.pdf`. Browser volgt automatisch, eindigt op `application/pdf`.

## Niveau-prefixes en pad

| Niveau         | niveauPad | niveauPrefix |
|----------------|-----------|--------------|
| VMBO-BB        | vmbo-bb   | bb           |
| VMBO-KB        | vmbo-kb   | kb           |
| VMBO-GL/TL     | vmbo-gl   | gt           |
| HAVO           | havo      | hv           |
| VWO            | vwo       | vw           |

## Vakcodes (geverifieerd)

Per vak een 4-cijferige code, gelijk over alle niveaus binnen dezelfde vak-categorie. Verifieer altijd 1 URL met `curl -sI -L` voordat je een vak toevoegt — tabellen lopen soms uit elkaar tussen niveaus.

| Vak                    | VMBO-GL/TL | HAVO   | VWO    |
|------------------------|------------|--------|--------|
| Wiskunde               | 0153       | (n.v.t.) | (n.v.t.) |
| Wiskunde A             | -          | 1023   | 1043   |
| Wiskunde B             | -          | 1033   | 1053   |
| Nederlands             | (zie verifyen) | (zie verifyen) | (zie verifyen) |
| Engels                 | (zie verifyen) | (zie verifyen) | (zie verifyen) |
| Biologie               | (zie verifyen) | (zie verifyen) | (zie verifyen) |

*(deze tabel groeit terwijl Mark/ik vakken toevoegen — update bij elke nieuwe vakcode)*

## Werkwijze om vakcode te vinden

1. Open `https://www.examenblad.nl/{jaar}/{niveauPad}/vakken` voor de vak-overzicht-pagina van dat niveau.
2. Klik vak → URL bevat referentie naar de PDF in `cse-1/{niveauPrefix}-{code}-a-{yy}-1-o`.
3. Of: WebFetch op de vakkenlijst-pagina en vraag agent om alle directe PDF-URLs te halen.

## Wat de helper doet

- `getExamenUrl(examen)`     → externe of lokale URL voor opgaven
- `getCorrectieUrl(examen)`  → externe correctievoorschrift-URL (alleen extern beschikbaar)
- `eb(jaar, tijdvak, niveauPad, vakCode, niveauPrefix, type)` → bouwt URL

## Aanbeveling

Mark wil 3 jaar per vak. Als startpunt: **2022, 2023, 2024** voor de grootste vakken. Pakken: tijdvak 1 én 2 = 6 entries per vak. Begin met VMBO-GL/TL (zijn dochter zit daar) en HAVO. Andere niveaus toevoegen op basis van vraag.
