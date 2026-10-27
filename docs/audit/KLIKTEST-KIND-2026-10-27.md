# Kliktest als kind — 27 okt 2026 (nacht), groep 3 · 5 · 8

Drie testers (opus), elk als kind op een telefoon (390 px) op een eigen preview van v1013/v1014, de hele lus:
startpagina → foto → naam + groep → Start-kwartier → Mijn pagina → vaktegel → vragen → terug → Begin (kwartier) →
Rapport → Werk aan → Nu op school → Meer → Spelletje → terug → opnieuw openen. Geen P0 (niets kapot, geen fout antwoord).
Laadtijd blok 1 (klik → eerste vraag): 89–247 ms; alleen de eerste koude lading van een nieuwe build was traag (2,5–10 s).

## Hersteld in v1014 "069" (zelfde nacht, allemaal op de preview nagespeeld)

| # | Bevinding (tester) | Fix |
|---|---|---|
| 1 | Na naam + groep → /start → Stop → **"Wie ben jij?"** terwijl het kind net zijn naam typte (g3, g5, g8) | `App.jsx` StartKwartier onStop/onGa zet `lk_wie_net` |
| 2 | **Minuten spraken elkaar tegen**: Mijn pagina "nog niet geoefend", balk "🏆 Kwartier gehaald" (g3, g5) | `LEARN_PAGES` + start-kwartier, vandaag-kwartier, dictee, werkwoorden, kwartiercheck |
| 3 | Spelletje → "Terug naar Home" = startpagina, plek kwijt (g3, g5) | kind met naam → Mijn pagina |
| 4 | Kop boven het kwartier onleesbaar ("Rekenen · groep 3: de eerste 20 vragen · blokje 1 van 1: 🔢 Rekenen · groep 3 · startset") (g3, g5) | één regel: alleen de bloktitel; "blokje 2 van 3" alleen bij meerdere |
| 5 | Nu op school: **2e tik op je keuze haalde die stil weg** (g3, g5, g8) | 2e tik sluit alleen het lijstje; weghalen via "weet ik niet / overslaan" |
| 6 | Nu op school **genegeerd zolang een kwartier bezig is** ("▶ Verder met je kwartier") (g5, g8) | nieuwe keuze stopt een lopend kwartier (klaargezet blijft) |
| 7 | Twee keuzes → **alleen de keuze van de dag** in het kwartier (g8) | twee schoolblokjes + één gewoon |
| 8 | **"Wereldoorlogen" gaf 1 van 5 vragen over de oorlogen** (stap 3 = 1795–nu) (g8) | `zoek`-filter in buildTopicQuiz; tv9 = stap 3 + tijdlijn-mix, alleen oorlogsvragen (5 van 9) |
| 9 | Kaartlezen kreeg vaklabel **"Lezen"** en telde als lezen (g5) | `onderwerpVan`: wereld-vakken vóór lezen |
| 10 | **Schaal 1:100.000-sommen voor groep 5** (g5) | 8 schaal-rekensommen in `kaartlezenPo.js` `vanafGroep: 6` |
| 11 | Groep 3 zag **tafels 1 t/m 12** op Meer en het **Doorstroomtoets/examens-kaartje** in het Start-kwartier (g3) | tafels vanaf groep 4; toetsen-kaartje vanaf groep 7 |
| 12 | Doorstroomtoets-**aftelling alleen achter Meer** (g8) | één regel in de Vandaag-kaart bij groep 7-8 |
| 13 | Start-kwartier: na "Goed zo!" een **denkvraag als uitleg** (g8) | eerst `explanation`, de uitlegpad-basis als laatste |
| 14 | Rapport: **"Engels is je sterkste vak" bij een 3** (g5) | beste cijfer < 6 → "… is nog lastig" |
| 15 | Werk aan / tegel na de startset → **Leren-lijst, 3 tikken tot een vraag** (g5) | meteen een kwartier met een pad van dit vak voor deze groep (`mijn_vak_start`) |
| 16 | Het woord **"startset"** op tegel en in bloktitel (g5) | "eerste 20 vragen: 5 gedaan", "· de eerste 20 vragen" |
| 17 | Vakscherm-onderwerp heette alleen "Engels"/"Basis" | label zonder vaknaam ("Eerste woorden en zinnetjes"), vak-check zodat "Klokkijken — analoog + digitaal" "Klokkijken" blijft |

Plus nieuw: **vakscherm** (ontwerp-stap 3): tegel → "Rekenen · groep 5", groot cijfer, Oefen nu, onderwerpen van die groep.

## Bewust (nog) niet gedaan — voor Mark

- **Een half kwartier "kaapt" Begin** ("▶ Verder met je kwartier") en een tegel-tik vervangt het lopende plan zonder melding (g8 #3). Ontwerpkeuze: Mark beslist of een tegel-kwartier los van "het kwartier van vandaag" moet staan.
- **Geen 3 blokjes na een tegel-tik**: de startset is bewust één blok van de resterende vragen (g3 #6, g5 #6).
- **"Wie ben jij?" bij opnieuw openen** = Marks regel van 1 okt; kost een kind met één profiel één tik (g3 #8, g5 #5).
- **Leerpad-kop zegt "groep 6-8"** (titelVoorKind nog niet op LearnPath/Leren-lijst/quiz-kop) (g8 #6).
- **Startset-teller begint opnieuw** ("Vraag 1 van 17" i.p.v. "4 van 20") en blok 2 Engels herhaalde startset-vragen (g5 #6, g8 #12).
- **Oefentoets laadt 2,5 s** (chunk) (g8 #7); Toets-pagina: afgekapte titel, markdown-streepjes, "begin februari" vs "eind januari" (g8 #8).
- **Kinderwoorden**: "6 · 21/50" op tegels, rapport-uitleg potlood/inkt, "ggd", "KGN", "Interpunctie & hoofdletters", "Werkwoordsvervoeging T/V" (g3 #8, g5 #8, g8 #10).
- **Nieuwkomers-paden in "Dit staat voor jou klaar"** voor een gewoon kind (g3 #7); "Procenten"/"Negatieve getallen" als "hoort bij jouw groep" voor groep 5 (g5 #3).
- **Tellingen**: Meer "54% · 26 vragen" vs tegel "21/50"; "Spelling · zwak" na 1 vraag; Kwartiercheck-tip blijft na 40 vragen (g3 #10, g8 #12).
- Start-kwartier-vraag "analoge klok" te moeilijk voor groep 3; "gehaast" te makkelijk voor groep 8.
- Toets-foutscherm ligt over "✕ Stop" (g8 #9).
