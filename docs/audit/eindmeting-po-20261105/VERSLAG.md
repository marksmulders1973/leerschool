# Nameting 3 basisschool — 3 nov 2026 (na B11-B12, eindmeting-herstel en drie groep 8-banken)

Steekproef: `scripts/audit/steekproef-po.mjs 20261105 200` (verse seed, pool 7.006 meerkeuzevragen uit 149 basisschoolpaden), 4 delen van 50, vier onafhankelijke Opus-beoordelaars, alleen meten, zelfde strenge criteria als de twee metingen eerder vandaag.

**Uitkomst: 118 goed · 3 fout (1,5 %) · 79 twijfel · 0 verkeerd gemarkeerde antwoorden** (alle 200: eigen keuze = antwoord; ontbrekende leesteksten in de bron nagelezen en in orde).

Verloop vandaag: 7,0 % (seed 20261103, ochtend) → 3,5 % (seed 20261104, middag) → **1,5 % (seed 20261105, avond)**. Doel Q11 (≤ 2 %) is met deze meting gehaald; één meting van 200 heeft een onzekerheidsmarge van ruwweg ±2 procentpunt, dus de volgende meting (volgende week, nieuwe seed) moet het bevestigen.

## De 3 fouten (hersteld in v1048)
| nr | waar | soort |
|---|---|---|
| 105 | negatieve-getallen-po stap 1 vraag 2 | hint "het min-teken betekent onder nul" = het antwoord; basis idem |
| 149 | spelling-eerste-woorden-g3 stap 2 vraag 4 | "v - uu - r" in de vraag (zelfde patroon als l-i-p en d-a-k; omgebouwd naar omschrijving) |
| 194 | woorden-3-nieuwkomers stap 4 vraag 2 | hint "Die dag is al voorbij" klopt niet bij morgen/vandaag |

## Twijfel (79)
- ~55× `niveaus.basis` geeft alleen het antwoord: dit is nu veruit de grootste restcategorie en zit in bijna elk pad. Structurele aanpak nodig (scan + herschrijfronde per pad), niet via steekproeven.
- Raadbaar door vorm/absurde afleiders (A11, A47, B54, B55, B94, C117), te makkelijk voor de groep (A1, B62, B66, B86, D156, D168, D179, D188), feitjes om te checken (A5 omdat/doordat, A14 AOW-leeftijd 2028, B57 Polen en de euro, B58 muis-DNA, C116 vmbo-profielen), telegramzinnen (B80, B100, D183).

## Vervolg
1. Basis-hulpstappen: scan alle basisschoolpaden op `basis` die (bijna) gelijk is aan het antwoord → herschrijfronde met herstellijsten (bank-dump-werkwijze per pad).
2. Bevestigingsmeting volgende week (nieuwe seed).
3. Feitjes uit de twijfellijst nalopen (AOW 2028, vmbo-profielen, Polen/euro).
