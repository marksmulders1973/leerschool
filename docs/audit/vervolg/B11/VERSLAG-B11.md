# Vervolgsets B11 — verslag (3 nov 2026)

Vraag 421-460 na de startset. Dump: 414 posities → 398 uniek → 153 nog niet in het register, in 3 pakketten (33 bronbestanden, veel sets hebben na vraag 420 niets meer: 8|engels, 8|studievaardigheden, 8|aardrijkskunde, 8|geschiedenis 0 open).

**Telling:** 153 nagekeken · 65 goed · 18 fout (11,8 %) · 70 twijfel · 87 hersteld · **0 foute antwoordsleutels** (alle blinde keuzes kwamen overeen met het antwoord in de bron). Register 3.873 → 4.008.

## Fouten (allemaal hersteld)
- **Antwoord in de vraag** — doorstroomtoets-studievaardigheden-g8 stap 2 vraag 20, 23, 25, 32 (tabel/grafiek-vragen herschreven met nieuwe afleiders en hints).
- **Hint rekent het antwoord voor / verraadt het** — studievaardigheden-g8 stap 2 vraag 36; redactiesommen stap 5 vraag 6 en 9; procenten-po stap 5 vraag 2; negatieve-getallen-po stap 5 vraag 23, 24, 28; spreekwoorden-uitdrukkingen-po stap 6 vraag 1 en 3.
- **Plaatje klopt niet bij de vraag** — grafieken-lezen-po stap 3 vraag 5 t/m 9 (lijngrafiek-vragen zonder eigen grafiek kregen elk een eigen `lijnSvg`; vragen als volledige zinnen zonder de getallen, zodat het kind echt afleest).

## Twijfel, hersteld
- 60+ hulpstappen (`niveaus.basis`) die alleen het antwoord gaven → echte hulpstappen (kommagetallen, maten-omtrek, maten-eenheden, klemtoon, grafieken, feit-mening, kalender, financiële vorming, studievaardigheden).
- Telegramzinnen en invulzinnen → volledige zinnen; "paracetamol-tablet" → "paracetamoltablet"; VMBO/HAVO/VWO zonder uitleg → schoolreis-verhaal (redactiesommen vraag 10); Koningsdag "meestal 27 april"; foute tussenstap π × 14 = 44 → 43,96.

## vanafGroep (voor Mark)
- `vanafGroep: 6` op procenten-po stap 5 vraag 1-10 (zelfde lijn als eerdere 18 zettingen in dat bestand).
- `vanafGroep: 8` op negatieve-getallen-po stap 5 vraag 23, 24, 28 (min × min) en maten-omtrek-oppervlakte-po stap 3 vraag 2, 3, 5 (cirkels met π).
- `vanafGroep: 7` op redactiesommen stap 5 vraag 8, 9, 12 (procenten).
- Gevolg: de groep 5-set verliest 16 vragen, groep 6 verliest 3. Pittig-maar-te-doen-vragen (24 × 18, ⅔ van een aantal, kommagetal × kommagetal) bewust laten staan.

## Bewust niet opgelost
- Leestekens stap 4 vraag 4, 5, 7 lijken sterk op elkaar (inhoudelijk goed).
- Leestekens vraag 8 ("Stop, dit is gevaarlijk"): punt ook verdedigbaar; hint legt het uitroepteken goed uit.
- Uitleg schrikkeljaar-stap ("99% schrikkeljaar") valt buiten de pakketvragen.

## Controles
`node --check` op alle 13 bewerkte bestanden · `npm run audit:vragen`: 355 paden · 18.758 vragen · 0 meldingen · vitest 2063/2063 · startset-docs: alleen volgorde + de twee herschrijvingen van 2 nov (096), geen startset-vraag door B11 geraakt.

Volgende: B12 (`--van 461 --tot 500`) is naar verwachting klein; daarna eindmeting Q11 (steekproef ≤ 2 % fout).
