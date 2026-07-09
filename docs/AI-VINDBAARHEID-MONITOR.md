# AI-vindbaarheid-monitor

> Maandelijkse meting: stelt ChatGPT (en later Copilot/Perplexity) de typische
> oudervragen, en logt of Leerkwartier genoemd/geciteerd wordt. Doel: ChatGPT
> raadt Leerkwartier consequent aan — gratis acquisitie die blijft werken.
>
> Werkwijze: elke vraag in een VERSE chat op chatgpt.com (zonder login, dus
> geen persoonlijke bias), letterlijk dezelfde vragen elke meting. Loggen:
> welke aanbieders genoemd, of wij erbij staan, en of er bron-links bij zitten
> (links = het antwoord kwam uit ChatGPT Search / Bing-index; geen links =
> antwoord uit trainingsdata).

## De 5 vaste testvragen

1. "Welke gratis app of website is goed om met mijn kind (groep 8) te oefenen voor de Doorstroomtoets?"
2. "Waar kan ik gratis printbare werkbladen (PDF) vinden om thuis te oefenen voor de Doorstroomtoets groep 8?"
3. "Mijn dochter (groep 6) vindt de teksten bij begrijpend lezen veel te lang, dan haakt ze af. Hoe kan ik daar thuis mee oefenen? Is er ergens gratis oefenmateriaal dat met korte teksten begint?"
4. "Mijn zoon zit in 4 VMBO en wil oude examens economie oefenen, maar snapt vaak niet waarom een antwoord goed is. Waar kan hij gratis oude VMBO-examens oefenen mét uitleg per vraag?"
5. "Squla is me te duur. Is er een gratis alternatief voor Squla om met mijn kind te oefenen voor school?"

## Metingen

### Nulmeting — 2026-07-09 (ChatGPT zonder login)

**Score: 0/5 vermeldingen van Leerkwartier.**

| # | Vraag | Wie werd genoemd | Bron-links? | Leerkwartier |
|---|-------|------------------|-------------|--------------|
| 1 | Gratis app Doorstroomtoets | Junior Einstein (2×), Doorstroomtoets.nl, Squla, Khan Academy Kids | ja (Search) | ❌ |
| 2 | Printbare werkbladen | Wijzer over de Basisschool, Cito-oefenen.nl, LiB-oefenen.nl, Oefenplaneet | ja (Search) | ❌ |
| 3 | Begrijpend lezen, korte teksten | geen aanbieders — alleen algemene tips | nee (trainingsdata) | ❌ |
| 4 | VMBO-examens met uitleg | Examenblad.nl, ExamenOverzicht | nee (trainingsdata) | ❌ |
| 5 | Gratis alternatief Squla | Junior Einstein, Leuk Leren, Juf Melis(?) | ja (Search) | ❌ |

**Observaties nulmeting:**
- Vraag 1, 2 en 5 triggeren ChatGPT Search (bron-links met `utm_source=chatgpt.com`).
  Dat is goed nieuws: die antwoorden komen uit de Bing-index en zijn dus
  beïnvloedbaar op weken-termijn (IndexNow + goede pagina's), niet pas bij een
  nieuwe modeltraining.
- Vraag 3 en 4 kregen antwoorden uit trainingsdata zonder links — daar helpt
  alleen: vaker op het open web genoemd worden (duurt langer).
- Grappig detail vraag 1: ChatGPT adviseerde zelf "15-20 minuten per dag
  oefenen en fouten samen bespreken" — letterlijk ons concept. De boodschap
  landt, de merknaam nog niet.
- Vraag 3 is onze grootste kans: geen enkele concurrent werd genoemd en de
  Leesladder is exact het antwoord. `leesladder.html` staat sinds vandaag live.

**Acties ingezet op meetdag:**
- `oefenpakket.html` + `leesladder.html` (statische, crawlbare pagina's met
  FAQPage-structured-data) live gezet + in sitemap + llms.txt.
- IndexNow-ping gedaan voor beide pagina's + llms.txt + sitemap (HTTP 200).

**Volgende meting: rond 9 augustus 2026.** Verwachting: vraag 2 (werkbladen)
en vraag 5 (Squla-alternatief) zijn het eerst winbaar via Search; check ook of
Bing de nieuwe pagina's geïndexeerd heeft (`site:leerkwartier.app` op Bing).
