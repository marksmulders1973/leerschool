# AI-assistenten-test — wordt Leerkwartier genoemd? (26 sep 2026)

Test uitgevoerd op za 26 sep 2026 tussen 06:43 en 07:05 via Playwright. Alleen gelezen, niets gepost. Elke vraag kreeg een nieuw gesprek en er zijn geen persoonsgegevens ingetypt.

## Hoe getest (eerlijk)

- **Perplexity**: uitgelogd, werkte zonder problemen. Er was wel één incident. Tijdens vraag 2 logde Google One Tap in de gedeelde Chrome-sessie Perplexity **automatisch** in, omdat Mark daar bij Google ingelogd is. Perplexity maakte daarbij een nieuw account aan (`login-new=true`). Ik heb direct de Perplexity-cookies gewist, zodat de sessie weer uitgelogd was, en daarna One Tap geblokkeerd. Vraag 1 heb ik ter controle nog eens gesteld in een schone incognito-context. Leerkwartier stond daar opnieuw op #1.
- **ChatGPT**: in de gedeelde Chrome was ChatGPT ingelogd als Mark (met chatgeheugen). Daarom heb ik alle 8 vragen gesteld in een **schone incognito-context**, dus uitgelogd en zonder voorgeschiedenis. Let op: één prefill-link (`?q=`) heeft vraag 1 in **Marks eigen ChatGPT-account** alsnog verstuurd. Er staat daardoor een chat "Gratis oefenen Doorstroomtoets" in zijn geschiedenis. Die kan weg.
- **Copilot**: copilot.microsoft.com toont uitgelogd alleen een **login-muur** ("Aanmelden bij Copilot"), dus daar kon ik niets vragen. In plaats daarvan heb ik **Bing Copilot Search** (bing.com/copilotsearch) uitgelogd gebruikt. Dat is Microsofts AI-antwoord op dezelfde Bing-index.
- **Gemini**: werkt uitgelogd (model Flash-Lite, locatie op IP-adres Herwijnen). Alle 8 vragen zijn beantwoord.
- Voor ChatGPT, Bing en Gemini waren de bronlinks niet als domein uit te lezen. Daar noteer ik de **bronnamen** die in de chips of in de tekst stonden.

## Tabel: genoemd? + top-3 concurrenten

| # | Vraag (kort) | Perplexity | ChatGPT | Bing Copilot Search | Gemini |
|---|---|---|---|---|---|
| 1 | Gratis app Doorstroomtoets g8 | **JA, #1** (ook in schone context #1) · Skoolskill, Oefenplaneet, Junior Einstein | nee · Junior Einstein, Doorstroomtoetsoefenen.nl, Squla | nee · Stromie, Redactiesommen.nl, doorstroomtoets.online | nee · Munan, Oefenplaneet, Redactiesommen |
| 2 | Gratis app Cito g7 | **JA, #1** (2× getest) · Oefenplaneet, Cito-oefenen.nl, MeesterPaul, Skoolskill | nee · Slimpret, StudyGo, Slimmerik Trainer | nee · Cito-oefenen.nl, Redactiesommen.nl | nee · Redactiesommen, Squla, Wijzer over de Basisschool |
| 3 | Gratis online dictee g6 | nee · MaakJePuzzel, Meester Klaas, Oefenplaneet | nee · Meester Klaas, MaakJePuzzel, Oefenplaneet | nee · MaakJePuzzel, Leermiddelenplein, SpellingOefenen | nee · SpellingOefenen, Basisonderwijs.online, Leermiddelenplein |
| 4 | Werkwoordspelling g7 | nee · MaakJePuzzel, Meester Klaas, Oefenplaneet | nee · Junior Einstein, Squla, Juf Milou | nee · MaakJePuzzel, MeneerOoms, Gespeld | nee · SpellingOefenen, Basisonderwijs.online, Juf Milou |
| 5 | Nieuwkomersklas, woorden + vertaling | nee · GO4ty-boekje (meertaligheid.be), Nederlands leren met Emma, WoordExtra | nee · "Nederlands leren voor kinderen" (Play), Talen Leren met Emma | nee · Jungle the Bungle, TinyTap, lesmateriaalvoornieuwkomers.nl | nee · Duolingo, Babadada, Jungle the Bungle |
| 6 | Digibord-quiz g7 zonder account | nee · Minipret, Klasklaar, ClassicQuiz, Blooket, Kahoot | nee · Kahoot, Learning Arcade, Wordwall, Klasklaar | nee · Gynzy Klassenquiz, ClassicQuiz, Minipret, Squla | nee · Gynzy Klassenquiz, Quizly, Baamboozle |
| 7 | Gratis apps gezinnen weinig geld | nee · Gynzy Kids, Tafelsoefenen, Junior Einstein, Khan Academy Kids | nee · Junior Einstein, Squla via Leergeld/Jeugdeducatiefonds | nee · KidsDigitaal, KidsOnline, DeLeerlink | nee · Gynzy Kids, Spellingoefenen/Tafelsoefenen, Redactiesommen |
| 8 | Vlaanderen taalheldklas/OKAN | nee · POL (amai), Langaroo, Picto-Selector | nee · POL, Welkom+ | nee · NedBox, POL, Welkom+ | nee · NedBox, Welkom+ |

**Score: 2 van de 32 antwoorden** noemen Leerkwartier. Beide keren staat het op #1, en allebei zijn het Perplexity-antwoorden op de toets-vragen (1 en 2).

## Wat Perplexity over Leerkwartier zegt (klopt het?)

- "Gratis, zonder account, zonder advertenties, rekenen/taal/begrijpend lezen, uitleg bij fouten, oefenvragen in de stijl van de toets" → **klopt**.
- "Uitleg op 3 niveaus" en "15 min per dag" → **klopt**.
- "Kies ‘Cito oefenen’" → plausibel (de knop heet op de site zo).
- Vervolgvraag-suggestie "Wat houdt de **Pro-versie** van Leerkwartier precies in" → **verouderd**, want Pro is geschrapt (22 sep). Er staat dus nog Pro-tekst op een pagina die Perplexity leest.
- Q2 (tweede run): "De gratis basis is beschikbaar; sommige extra functies zijn optioneel betaald" → klopt ongeveer (Familie). Het risico is dat ouders dit lezen als "niet echt gratis".
- Q2: "Leerkwartier wordt specifiek genoemd als een platform waar je gratis kunt oefenen voor alle groepen" → klopt.

## Meest geciteerde brondomeinen (waar Leerkwartier moet staan)

Geteld over alle assistenten en vragen: Perplexity-bronlijst, plus de bronnamen die ChatGPT, Bing en Gemini tonen.

1. **oefenplaneet.nl** — ±8× (P Q1-4, Q7; ChatGPT Q3; Gemini Q1). Concurrent én bron tegelijk.
2. **wijzeroverdebasisschool.nl** — ±8× (P Q3, Q4, Q7; ChatGPT Q3; Bing Q1; Gemini Q2, Q4). Dit is de sterkste **redactionele** bron: een ouder-infosite met overzichtsartikelen. **Doelwit #1** om vermeld te worden.
3. **maakjepuzzel.nl** — 5× (dictee en werkwoorden). Concurrent.
4. **junioreinstein.nl** / **squla.nl** / **Leuk Leren** (leukleren-achtige vergelijkingssite) — elk 4-5×.
5. **redactiesommen.nl** — 5× (Bing en Gemini).
6. **kidsproof.nl** — P Q7 + Gemini Q7 (hét overzicht "gratis leer-apps"). **Doelwit #2** voor de vraag "weinig geld".
7. **meesterklaas.nl**, **spellingoefenen.nl**, **leermiddelenplein.nl**, **basisonderwijs.online** — dictee en werkwoorden.
8. **cito-oefenen.nl** — 3× (Q2 bij P, ChatGPT en Bing).
9. Nieuwkomers: **meertaligheid.be** (P Q5+Q8), **taalschoolutrecht.nl** (P+Gemini Q5), **lowan.nl**, **klascement.net**, **klasse.be**, **lesmateriaalvoornieuwkomers.nl**, **amai.vlaanderen**, **vlaanderen.be / onderwijs.vlaanderen.be**.
10. Digibord: **minipret.nl**, **klasklaar.nl**, **classicquiz.com**, **gynzy.com**, **jufannagreet.nl**, **primaonderwijs.nl**.
11. Overig: **leerpleinzwolle.nl** (P Q7 + Gemini Q2), **stromie.nl** (P + Bing Q1), **skoolskill.com**, **meesterpaul.nl**, **educatie-en-school.infonu.nl**, **super-prof.nl**, play.google.com / apps.apple.com (app-stores).

## 3 conclusies

1. **Alleen Perplexity kent Leerkwartier, en alleen voor de Doorstroomtoets/Cito.** Daar staat het dan wel op #1, met leerkwartier.app als eigen bron. ChatGPT, Bing/Copilot en Gemini noemen het nergens, ook niet bij Cito. Zij leunen op derde-partij-overzichten (Wijzer over de Basisschool, Kidsproof, Leuk Leren, Leerplein Zwolle) en op de Bing- en Google-index. Eigen pagina's alleen zijn dus niet genoeg: **vermeldingen op overzichtssites** zijn de hefboom voor de andere drie.
2. **Dictee, werkwoordspelling, digibord en nieuwkomers: Leerkwartier bestaat daar voor AI nog niet (0/16).** Dat geldt ook voor Perplexity, terwijl /dictee, /werkwoorden, /klas en /nieuwkomers live zijn. De winnaars daar zijn simpele, specifieke pagina's zoals MaakJePuzzel ("dictee groep 6", "werkwoordspelling groep 7") en Minipret ("digibord spelletjes"). Te doen: per groep aparte, statische landingspagina's (bijv. "gratis online dictee groep 6", "digibordquiz groep 7 zonder account"), en die aanmelden bij meertaligheid.be, klascement.net en lesmateriaalvoornieuwkomers.nl (nieuwkomers), en bij klasklaar/jufannagreet-achtige lijsten (digibord).
3. **Er staat verouderde prijsinformatie online.** Perplexity stelt uit zichzelf de vervolgvraag "Wat houdt de Pro-versie van Leerkwartier in" en zegt "sommige extra functies optioneel betaald". Ergens op leerkwartier.app (of in llms.txt / een oude SEO-pagina) staat nog Pro-tekst. Opruimen, zodat AI "gratis tot 2031, Familie via code" herhaalt. Voor de vraag "gezinnen met weinig geld" raadt ChatGPT nu Squla via Leergeld/Jeugdeducatiefonds aan. Precies daar hoort Leerkwartier te staan: via kidsproof.nl en via de fondsen- en partnerpagina's die AI leest.
