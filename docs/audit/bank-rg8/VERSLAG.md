# Banken "Doorstroomtoets — rekenen (groep 8)" en "— taal (groep 8)" integraal nagekeken — 3 nov 2026

Zelfde werkwijze als bank-svg8 (`bank-dump.mjs` → Opus-nakijkers met herstellijsten → `pas-fixes-toe.mjs rg8-NN / tg8-NN`). Daarmee zijn alle drie de Doorstroomtoets-banken van groep 8 vandaag integraal nagekeken, precies de banken die de Haagse scholen (golf 3-4 nov) als eerste bekijken.

## Rekenen (docs/audit/bank-rg8, 3 pakketten)
264 vragen · 89 al in het register · 14 uitgeschakeld · **161 open** → 72 goed · **25 fout (15,5 %)** · 64 twijfel · 89 hersteld · **124 fixes toegepast, 0 overgeslagen** · 0 foute antwoordsleutels (alle sommen nagerekend).
- Fouten: vrijwel allemaal hints die de factor of het verschil noemen ("tien keer te veel", "één euro te veel", "tien minuten te weinig") → nu aanvul-/controlevragen; antwoord dat als prijs in de vraag stond (Mike €12,50 → €13,50, Noor €1,25 → €1,15); "halve rechte" bij 45° verraadde 90°; feitfoutjes in hints (0,08 is 5× te weinig, niet 10×; "8 zou één deel zijn").
- Twijfel: ~30 basis-hulpstappen → echte hulpstappen; telegramzinnen; te makkelijk (seconden in 1 minuut → 2,5 minuut; spijkerbroek €26 − €4 → €26,50 − €4,75); dubbele vraag (1,5 L/250 mL) kreeg andere getallen; cilinder-vraag met (3D)-label herschreven.

## Taal (docs/audit/bank-tg8, 3 pakketten)
237 vragen · 117 al in het register · 6 uitgeschakeld · **114 open** → 53 goed · **8 fout (7,0 %)** · 53 twijfel · 61 hersteld · **89 fixes toegepast, 0 overgeslagen** · 0 foute antwoordsleutels.
- Fouten: hints die het antwoord noemen ("tevreden = blij", "be-SCH-uit", letters van computer, "stam + t is genoeg"), hulpstap die "rent" gaf, uitroepteken al in de goede optie, voegwoordzin die niet bij "omdat" paste (woordvolgorde), hint bij "word" die bij "wordt" hoorde.
- Twijfel: basis-hulpstappen, telegram-hints ("Onderwerp."), kleine taalfouten in hints over leestekens, hints die verkeerd stuurden ("zeg het hardop" bij prate/praten).

## Controles
`node --check` beide bestanden · `npm run audit:vragen`: 0 meldingen · vitest 2063/2063 · startsets groep 8: Mike-vraag (rekenen) en twee spellingvragen kregen nieuwe tekst, zelfde vragen/antwoorden. Register 4.329 → **4.571**.

## Totaal 3 nov (drie banken)
527 open vragen nagekeken · 50 fout (9,5 %) · 249 hersteld · 397 fixes · 0 foute antwoordsleutels. Volgende: nameting 3 (nieuwe seed) + structureel: basis-hulpstappen in de overige paden.
