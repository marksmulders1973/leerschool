# Basis-hulpstappen-ronde — verslag (3 nov 2026)

**Vraag:** geeft de eerste hulpstap (`niveaus.basis`) het antwoord weg, of helpt hij het kind denken?
Dit was de grootste twijfel-categorie uit de eindmetingen van 3 nov (7,0 % → 3,5 % → 1,5 % fout).

## Wat is gedaan

| Stap | Resultaat |
|---|---|
| Scan `scripts/audit/basis-scan.mjs` (nulmeting) | 149 basisschoolpaden · 6.999 vragen · **1.464** hulpstappen die (bijna) alleen het antwoord gaven |
| 30 pakketten (`pakket-01..30.json`), max 4 Opus-agents tegelijk | **1.464 van 1.464 herschreven**, 0 overgeslagen (`oordeel-01..30.json`, alle `hersteld: true`) |
| Handmatig erbij (scanner miste ze: andere pad-id of antwoord anders geformuleerd) | 10 stuks: kaartlezen (2), matenEenheden (3), meetkundeBouwsels, tabellenGrafieken (2), tijdsduurRekenen, spelling g3 (sch) |
| Nameting scan (PO) | **0** meldingen (`nameting.json`) |
| `node --check` / esbuild op 114 gewijzigde bestanden | 0 fouten |
| `npm run audit:vragen` | 355 paden · 18.758 vragen · 0 meldingen |
| `npx vitest run` | 227 bestanden · 2.063 tests groen |
| `npx vite build` | groen |
| Startset-docs (door tests opnieuw gegenereerd) | inhoud ongewijzigd (gesorteerde regels identiek aan HEAD) |

**Regel die de agents volgden (OPDRACHT.md):** alleen `basis` aanpassen; vraag, opties, antwoord, wrongHints,
`simpeler`/`nogSimpeler` ongemoeid. Nieuwe `basis` = één of twee zinnen die de methode, de regel of een gerichte
vraag geven, nooit het antwoord of een eliminatie-hint die maar op één optie past.

## Wat nog openstaat

- **Middelbare-schoolpaden:** `basis-scan.mjs --alles` → 307 paden · 11.340 vragen · **1.681** meldingen in 142 bestanden
  (`nameting-alles.json`; top: parabolen 36, werkwoordsvervoeging 30, onregelmatige werkwoorden Engels 26). Zelfde
  werkwijze mogelijk (pakketten van ~55), maar lagere prio dan de Doorstroomtoets-kern.
- Door agents gemeld, nog niet beoordeeld: enkele hints "dicht bij het antwoord" (zie oordeel-bestanden met `opmerking`),
  feitjes om te checken (AOW-leeftijd 2028, vmbo-profielen, Polen/euro), groep 5-set verliest ~24 vragen via `vanafGroep`.
- Bevestigingsmeting met nieuwe seed rond 10 nov (`steekproef-po.mjs`), zoals in het Kwaliteit-eerst-blok afgesproken.

## Uitrol

Zit in v1049 "104" (wo 4 nov ochtend, samen met de SEO-oefenvragenpagina's, sitemap en llms.txt — geen tweede uitrol op 3 nov).
