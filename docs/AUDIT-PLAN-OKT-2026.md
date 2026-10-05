# Totale audit Leerkwartier — plan (opgesteld 5 okt 2026, uitvoeren vanaf di 6 okt)

## Aanleiding
Mark vond op 4-5 okt in één nacht klikken ~25 fouten (WhatsApp "Leerkwartier tips"), waaronder
een fout goed-gerekend antwoord ("Hij fietst naar school gisteren"), 1.210 nietszeggende
foutmeldingen ("Niet."), een rekenplaat die niet bij de som paste en een onzichtbare keuzelijst.
Claude had eerder steeds gezegd dat de app goed was, zonder dat inhoudelijk te bewijzen.
Doel: **≥ 98% van alles wat een kind of ouder ziet klopt**, aantoonbaar gemeten.

## Waarom Claude dit miste
1. Getest of schermen *werken*, niet of de *inhoud klopt* (antwoorden nooit zelf uitgerekend).
2. Alleen goed geantwoord; nooit expres fout geantwoord om de foutmelding te zien.
3. Getest in de eigen Chrome (plaatjes laden), niet op telefoon / werk-pc / vers account.
4. Teksten gecontroleerd op feiten, niet gelezen als een ouder of kind van 8.
5. "Is de app goed?" beantwoord met een gevoel in plaats van met getelde fouten.

## Afspraken vanaf nu
- Nooit meer "het is goed" zonder getal: altijd "X gecontroleerd, Y fout gevonden, Z opgelost, dit niet getest".
- Bij elke nieuwe vraag/zin: zelf eerst oplossen, dan pas met het app-antwoord vergelijken.
- Verkeer blijft offline (v893, zoek `VERKEER_OFFLINE`) tot alles nagekeken is én Mark akkoord geeft.

## Delen (in volgorde van risico)
| # | Deel | Omvang (5 okt) | Hoe |
|---|------|----------------|-----|
| 0 | ✅ Werkwoorden-zinnenbank | 102 zinnen | 5 okt gedaan: 101 goed, 3 verbeterd (hou, zin "gebouwde hut", tip bvd) |
| 1 | AI-vragenopslag (`ai_question_pool`) | ~321 vragen | Elke vraag zelf oplossen, foute wissen. Daarna in `api/generate-questions` een controle-stap vóór opslaan |
| 2 | Verkeer (veiligheid!) | 4 leerpaden + vraag van de dag | Regel voor regel tegen RVV/VVN-bron; pas terug na akkoord Mark |
| 3 | Rekenen | ~30 paden voor groep 8 + rest | Script rekent elke som zelf na; plaatjes/getallen in uitleg moeten bij de vraag passen |
| 4 | Taal, spelling, begrijpend lezen | ~35 paden groep 8 + rest | Per vraag zelf oplossen; twee goede antwoorden = fout |
| 5 | Overige vakken (WO, Engels, VO) | rest van de ~345 paden | Zelfde methode, steekproef eerst |
| 6 | Schermen & teksten | alle pagina's | Kliktest als kind (groep 4, groep 8, klas 1), ouder, nieuwkomer; telefoon-formaat; plaatjes geblokkeerd; expres fout antwoorden; je/u en geld-zinnen als ouder lezen |
| 7 | Eindmeting | 200 willekeurige items | Onafhankelijk nakijken; foutpercentage rapporteren. Doel ≤ 2% |

## Automatische controles (eerst bouwen, kost weinig, vangt veel)
- Antwoord-index bestaat; geen dubbele of bijna-gelijke opties; antwoord staat niet letterlijk in de vraag.
- Rekensommen (a + b, a − b, a × b, a : b) automatisch narekenen.
- Getallen in plaatje/uitleg vs getallen in de vraag (zoals 247 + 158 bij 1248 + 567).
- Nietszeggende hints ("Niet.", "Nee.") — nu al genegeerd in `pathLoaders.js`; in de data vervangen door echte uitleg.
- Groep-labels: titel "groep 4" vs `level`; paden per groep tellen (groep 8 spelling had er 1).
- Elk plaatje/geluid waar naar verwezen wordt bestaat.

## Werkwijze per deel
1. Inventaris + automatische controle → lijst.
2. Vakinhoudelijke controle per vraag (zelf oplossen, twee onafhankelijke rondes; bij twijfel naar Mark).
3. Fouten herstellen, bouwen, live nakijken.
4. Kort verslag: gecontroleerd / fout / opgelost / niet getest.

## Kosten
Delen 1-5 zijn veel lezen: met meerdere agents tegelijk (workflow) ~1-2 dagen werk. Mark kiest per deel; 
deel 1 + 2 eerst (verkeer = veiligheid, AI-opslag had 1 op 3 fout in de steekproef).
