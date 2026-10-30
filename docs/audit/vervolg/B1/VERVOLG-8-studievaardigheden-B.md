# Vervolgset Studievaardigheden · groep 8 — vraag 21 t/m 60 (deel B: met antwoord, hints en uitleg)

Zelfde vragen als deel A. ✔ = stond al als goed/twijfel in docs/audit/goedgekeurd.json (hash klopt nog).

## 21. Dienstregeling & roosters lezen (dienstregeling-roosters-po stap 1 vraag 5)
_Bestand: src/learnPaths/dienstregelingRoostersPo.js · stap-titel: Een dienstregeling (trein/bus) lezen_
Vraag: Trein B vertrekt om 9:40 uit Utrecht en komt om 10:30 aan in Zwolle. Hoe lang duurt die reis?
- ✅ A. 50 minuten
- ▫️ B. 60 minuten
- ▫️ C. 40 minuten
- ▫️ D. 45 minuten
wrongHints: [null,"Dat zou tot 10:40 zijn.","Dat zou tot 10:20 zijn.","Reken nog eens precies."]
niveaus: {"basis":"9:40 → 10:00 (20 min) + 10:00 → 10:30 (30 min) = 50 min.","simpeler":"Tel van 9:40 omhoog tot 10:30 — hoeveel minuten?","nogSimpeler":"Hoeveel minuten van 9:40 tot 10:30?"}
stap-uitleg (ingekort): Een **dienstregeling** is een tabel met vertrek- en aankomsttijden. Je leest 'm zo: zoek de juiste **rij** (het station) en de juiste **kolom** (de trein/bus). Voorbeeld treintabel: | Station | Trein A | Trein B | Trein C | |---|---|---|---| | Utrecht | 9:10 | 9:40 | 10:10 | | Amersfoort | 9:25 | 9:55 | 10:25 | | Zwolle | 10:00 | 10:30 | 11:00 | **Handige stappen:** • **Reistijd** = aankomsttijd − vertrektijd. • **Wachttijd** = tijd tot de eerstvolgende vertrektijd. • Moet je ergens **vóór** een bepaalde tijd zijn? Kies de laatste trein die nog op tijd aankomt.

## 22. Dienstregeling & roosters lezen (dienstregeling-roosters-po stap 1 vraag 6)
_Bestand: src/learnPaths/dienstregelingRoostersPo.js · stap-titel: Een dienstregeling (trein/bus) lezen_
Vraag: De treinen vertrekken om 9:10, 9:40 en 10:10. Je bent er om 9:45. Hoe lang wacht je op de volgende trein?
- ✅ A. 25 minuten
- ▫️ B. 30 minuten
- ▫️ C. 15 minuten
- ▫️ D. 5 minuten
wrongHints: [null,"Reken van 9:45 tot de eerstvolgende vertrektijd.","De trein van 9:40 is al weg.","Te kort — kijk welke trein als eerste ná 9:45 komt."]
niveaus: {"basis":"Eerstvolgende trein ná 9:45 is 10:10. 10:10 − 9:45 = 25 min.","simpeler":"Welke vertrektijd komt net ná 9:45? Hoeveel minuten is dat nog?","nogSimpeler":"Van 9:45 tot 10:10 is hoeveel minuten?"}
stap-uitleg (ingekort): Een **dienstregeling** is een tabel met vertrek- en aankomsttijden. Je leest 'm zo: zoek de juiste **rij** (het station) en de juiste **kolom** (de trein/bus). Voorbeeld treintabel: | Station | Trein A | Trein B | Trein C | |---|---|---|---| | Utrecht | 9:10 | 9:40 | 10:10 | | Amersfoort | 9:25 | 9:55 | 10:25 | | Zwolle | 10:00 | 10:30 | 11:00 | **Handige stappen:** • **Reistijd** = aankomsttijd − vertrektijd. • **Wachttijd** = tijd tot de eerstvolgende vertrektijd. • Moet je ergens **vóór** een bepaalde tijd zijn? Kies de laatste trein die nog op tijd aankomt.

## 23. Dienstregeling & roosters lezen (dienstregeling-roosters-po stap 1 vraag 7)
_Bestand: src/learnPaths/dienstregelingRoostersPo.js · stap-titel: Een dienstregeling (trein/bus) lezen_
Vraag: Busdienstregeling lijn 12 — Dorp: 7:50, 8:20, 8:50 · Markt: 8:05, 8:35, 9:05 · Station: 8:18, 8:48, 9:18. De eerste bus vertrekt om 7:50 uit Dorp. Hoe lang duurt de rit naar het Station?
- ✅ A. 28 minuten
- ▫️ B. 18 minuten
- ▫️ C. 32 minuten
- ▫️ D. 38 minuten
wrongHints: [null,"Tel eerst van 7:50 tot 8:00 en daarna verder tot 8:18.",null,null]
niveaus: {"basis":"7:50 → 8:00 (10 min) + 8:00 → 8:18 (18 min) = 28 minuten.","simpeler":"Tel van 7:50 tot het hele uur, en dan verder tot 8:18.","nogSimpeler":"10 minuten + 18 minuten = ?"}
stap-uitleg (ingekort): Een **dienstregeling** is een tabel met vertrek- en aankomsttijden. Je leest 'm zo: zoek de juiste **rij** (het station) en de juiste **kolom** (de trein/bus). Voorbeeld treintabel: | Station | Trein A | Trein B | Trein C | |---|---|---|---| | Utrecht | 9:10 | 9:40 | 10:10 | | Amersfoort | 9:25 | 9:55 | 10:25 | | Zwolle | 10:00 | 10:30 | 11:00 | **Handige stappen:** • **Reistijd** = aankomsttijd − vertrektijd. • **Wachttijd** = tijd tot de eerstvolgende vertrektijd. • Moet je ergens **vóór** een bepaalde tijd zijn? Kies de laatste trein die nog op tijd aankomt.

## 24. Dienstregeling & roosters lezen (dienstregeling-roosters-po stap 1 vraag 8)
_Bestand: src/learnPaths/dienstregelingRoostersPo.js · stap-titel: Een dienstregeling (trein/bus) lezen_
Vraag: Busdienstregeling lijn 12 — Dorp: 7:50, 8:20, 8:50 · Markt: 8:05, 8:35, 9:05 · Station: 8:18, 8:48, 9:18. Je bent om 8:40 bij de halte Markt. Hoe laat ben je op zijn vroegst bij het Station?
- ✅ A. 9:18
- ▫️ B. 8:48
- ▫️ C. 9:05
- ▫️ D. 8:35
wrongHints: [null,"Rijdt de bus van 8:35 nog als jij om 8:40 bij de Markt bent?",null,null]
niveaus: {"basis":"Na 8:40 vertrekt de eerste bus om 9:05 bij de Markt; die is om 9:18 bij het Station.","simpeler":"Welke vertrektijd bij de Markt komt het eerst ná 8:40? Volg die bus naar het Station.","nogSimpeler":"Welke bus vertrekt bij de Markt na 8:40?"}
stap-uitleg (ingekort): Een **dienstregeling** is een tabel met vertrek- en aankomsttijden. Je leest 'm zo: zoek de juiste **rij** (het station) en de juiste **kolom** (de trein/bus). Voorbeeld treintabel: | Station | Trein A | Trein B | Trein C | |---|---|---|---| | Utrecht | 9:10 | 9:40 | 10:10 | | Amersfoort | 9:25 | 9:55 | 10:25 | | Zwolle | 10:00 | 10:30 | 11:00 | **Handige stappen:** • **Reistijd** = aankomsttijd − vertrektijd. • **Wachttijd** = tijd tot de eerstvolgende vertrektijd. • Moet je ergens **vóór** een bepaalde tijd zijn? Kies de laatste trein die nog op tijd aankomt.

## 25. Dienstregeling & roosters lezen (dienstregeling-roosters-po stap 1 vraag 9)
_Bestand: src/learnPaths/dienstregelingRoostersPo.js · stap-titel: Een dienstregeling (trein/bus) lezen_
Vraag: Busdienstregeling lijn 12 — Dorp: 7:50, 8:20, 8:50 · Markt: 8:05, 8:35, 9:05 · Station: 8:18, 8:48, 9:18. Je moet uiterlijk 9:00 bij het Station zijn. Welke bus uit Dorp is de laatste die je kunt nemen?
- ✅ A. de bus van 8:20
- ▫️ B. de bus van 7:50
- ▫️ C. de bus van 8:50
- ▫️ D. geen enkele bus
wrongHints: [null,"Die komt op tijd aan, maar is het ook de laatste bus die op tijd is?",null,null]
niveaus: {"basis":"Bus van 8:20 is om 8:48 bij het Station (op tijd); die van 8:50 pas om 9:18.","simpeler":"Kijk bij elke bus hoe laat hij bij het Station is. Welke is nog vóór 9:00?","nogSimpeler":"Is 8:48 vóór 9:00? En 9:18?"}
stap-uitleg (ingekort): Een **dienstregeling** is een tabel met vertrek- en aankomsttijden. Je leest 'm zo: zoek de juiste **rij** (het station) en de juiste **kolom** (de trein/bus). Voorbeeld treintabel: | Station | Trein A | Trein B | Trein C | |---|---|---|---| | Utrecht | 9:10 | 9:40 | 10:10 | | Amersfoort | 9:25 | 9:55 | 10:25 | | Zwolle | 10:00 | 10:30 | 11:00 | **Handige stappen:** • **Reistijd** = aankomsttijd − vertrektijd. • **Wachttijd** = tijd tot de eerstvolgende vertrektijd. • Moet je ergens **vóór** een bepaalde tijd zijn? Kies de laatste trein die nog op tijd aankomt.

## 26. Dienstregeling & roosters lezen (dienstregeling-roosters-po stap 1 vraag 10)
_Bestand: src/learnPaths/dienstregelingRoostersPo.js · stap-titel: Een dienstregeling (trein/bus) lezen_
Vraag: Busdienstregeling lijn 12 — Dorp: 7:50, 8:20, 8:50 · Markt: 8:05, 8:35, 9:05 · Station: 8:18, 8:48, 9:18. Hoe lang rijdt de bus van de halte Markt naar het Station?
- ✅ A. 13 minuten
- ▫️ B. 15 minuten
- ▫️ C. 23 minuten
- ▫️ D. 18 minuten
wrongHints: [null,null,null,"Dat is het getal achter de dubbele punt van de aankomsttijd, niet de reistijd."]
niveaus: {"basis":"8:05 → 8:18 = 13 minuten.","simpeler":"Kies één bus en trek de vertrektijd bij de Markt af van de aankomsttijd bij het Station.","nogSimpeler":"Van 8:05 tot 8:18 is hoeveel minuten?"}
stap-uitleg (ingekort): Een **dienstregeling** is een tabel met vertrek- en aankomsttijden. Je leest 'm zo: zoek de juiste **rij** (het station) en de juiste **kolom** (de trein/bus). Voorbeeld treintabel: | Station | Trein A | Trein B | Trein C | |---|---|---|---| | Utrecht | 9:10 | 9:40 | 10:10 | | Amersfoort | 9:25 | 9:55 | 10:25 | | Zwolle | 10:00 | 10:30 | 11:00 | **Handige stappen:** • **Reistijd** = aankomsttijd − vertrektijd. • **Wachttijd** = tijd tot de eerstvolgende vertrektijd. • Moet je ergens **vóór** een bepaalde tijd zijn? Kies de laatste trein die nog op tijd aankomt.

## 27. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 1)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Je koopt 3 broden van €1,20 per stuk. Hoeveel kost het brood samen?
- ✅ A. €3,60
- ▫️ B. €1,20
- ▫️ C. €2,40
- ▫️ D. €3,00
wrongHints: [null,"Dat is de prijs van één brood.","Dat zijn er maar twee.","Reken nog eens: 3 × €1,20."]
niveaus: {"basis":"3 broden × €1,20 = €3,60.","simpeler":"Tel drie keer €1,20 op.","nogSimpeler":"1,20 + 1,20 + 1,20 = ?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 28. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 2)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Het totaalbedrag is €8,40. Je betaalt met een briefje van €10. Hoeveel wisselgeld krijg je terug?
- ✅ A. €1,60
- ▫️ B. €2,40
- ▫️ C. €1,40
- ▫️ D. €2,60
wrongHints: [null,"Reken nog eens: €10 − €8,40.","Net niet — let op de centen.","Te veel terug."]
niveaus: {"basis":"Wisselgeld = €10 − €8,40 = €1,60.","simpeler":"Van €8,40 naar €10: hoeveel is dat erbij?","nogSimpeler":"€8,40 + … = €10,00?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 29. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 3)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Op de bon staat 'BTW'. Wat betekent dat?
- ✅ A. belasting die in de prijs zit
- ▫️ B. korting die je krijgt
- ▫️ C. een fooi voor de kassière
- ▫️ D. statiegeld op flessen
wrongHints: [null,"Het maakt iets juist niet goedkoper.","Het is geen extraatje voor het personeel.","Dat is iets anders (geld terug op flessen)."]
niveaus: {"basis":"BTW is belasting die al in de prijs verwerkt zit.","simpeler":"Is BTW een korting of juist belasting? Het is belasting.","nogSimpeler":"BTW is een soort … (belasting/korting?)."}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 30. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 4)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Wat is het 'totaalbedrag' onderaan een bon?
- ✅ A. alles bij elkaar opgeteld
- ▫️ B. het duurste artikel
- ▫️ C. het goedkoopste artikel
- ▫️ D. alleen de BTW
wrongHints: [null,"Wat betekent het woord 'totaal'?","Betaal je dan alleen voor het goedkoopste ding?","BTW is maar een klein deel."]
niveaus: {"basis":"Het totaalbedrag is alles opgeteld.","simpeler":"Is het totaal één artikel of alles samen?","nogSimpeler":"Wat betaal je in totaal voor alles?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 31. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 5)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Je koopt 2 pakken melk van €0,90 per stuk. Hoeveel kost de melk samen?
- ✅ A. €1,80
- ▫️ B. €0,90
- ▫️ C. €2,70
- ▫️ D. €1,60
wrongHints: [null,"Dat is de prijs van één pak.","Dat zijn er drie.","Reken nog eens: 2 × €0,90."]
niveaus: {"basis":"2 pakken × €0,90 = €1,80.","simpeler":"Tel twee keer €0,90 op.","nogSimpeler":"0,90 + 0,90 = ?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 32. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 6)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Het totaalbedrag is €6,75. Je betaalt met €7,00. Hoeveel wisselgeld krijg je?
- ✅ A. €0,25
- ▫️ B. €0,75
- ▫️ C. €1,25
- ▫️ D. €0,35
wrongHints: [null,"Reken nog eens: €7,00 − €6,75.","Te veel terug.","Let op de centen."]
niveaus: {"basis":"Wisselgeld = €7,00 − €6,75 = €0,25.","simpeler":"Van €6,75 naar €7,00: hoeveel cent erbij?","nogSimpeler":"€6,75 + … = €7,00?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 33. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 7)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Op een kassabon is één bedrag onleesbaar: • Pennen 3 × €1,25 = €… Welk bedrag hoort op de plek van de puntjes?
- ✅ A. €3,75
- ▫️ B. €4,25
- ▫️ C. €3,25
- ▫️ D. €1,25
wrongHints: [null,"Reken 3 × €1,25 eens uit als €1,25 + €1,25 + €1,25.",null,"Dat is de prijs van één pen."]
niveaus: {"basis":"3 × €1,25 = €3,75.","simpeler":"Drie keer €1 is €3, drie keer 25 cent is 75 cent.","nogSimpeler":"€3 + €0,75 = ?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 34. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 8)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Onderaan een kassabon staat: • Totaal: €13,65 • Betaald (contant): €20,00 • Terug: €… Hoeveel krijg je terug?
- ✅ A. €6,35
- ▫️ B. €7,35
- ▫️ C. €6,45
- ▫️ D. €7,65
wrongHints: [null,"Reken van €13,65 omhoog naar €20,00.",null,null]
niveaus: {"basis":"Wisselgeld = €20,00 − €13,65 = €6,35.","simpeler":"Van €13,65 naar €14,00 is €0,35. Van €14,00 naar €20,00 is €6,00.","nogSimpeler":"€0,35 + €6,00 = ?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 35. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 9)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Onderaan een kassabon staat: • Totaal: €7,26 • Waarvan btw: €1,26 Hoeveel heb je in totaal betaald?
- ✅ A. €7,26
- ▫️ B. €8,52
- ▫️ C. €6,00
- ▫️ D. €1,26
wrongHints: [null,"Lees in de uitleg nog eens na waar de btw zit.",null,"Dat is maar een deel van het bedrag."]
niveaus: {"basis":"Je betaalt het totaal: €7,26. De btw zit daar al in.","simpeler":"Komt de btw er nog bij, of zit hij al in het totaal? Hij zit er al in.","nogSimpeler":"Welk bedrag staat bij 'Totaal'?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 36. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 1)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: Waar in een boek staat de inhoudsopgave meestal?
- ✅ A. vooraan
- ▫️ B. achteraan
- ▫️ C. precies in het midden
- ▫️ D. op de kaft
wrongHints: [null,"Achteraan staat juist het register.","Midden in het boek zit je al in een hoofdstuk. Waar staat het overzicht?","Op de kaft staat de titel, niet de inhoudsopgave."]
niveaus: {"basis":"De inhoudsopgave staat vooraan.","simpeler":"Voor of achter in het boek staat de hoofdstukkenlijst?","nogSimpeler":"Staat de inhoudsopgave vooraan?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 37. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 2)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: Wat staat er in een inhoudsopgave?
- ✅ A. de hoofdstukken met hun paginanummers
- ▫️ B. alle onderwerpen op alfabet met paginanummers
- ▫️ C. de naam van de schrijver en de uitgever
- ▫️ D. een korte samenvatting van elk hoofdstuk
wrongHints: [null,"Onderwerpen op alfabet staan in het register.","De schrijver staat voorin, maar dat is niet de inhoudsopgave.","Een samenvatting is iets anders dan een lijst met pagina's."]
niveaus: {"basis":"Hoofdstukken met paginanummers staan in de inhoudsopgave.","simpeler":"Welke lijst toont de hoofdstukken en hun pagina?","nogSimpeler":"Staan de hoofdstukken in de inhoudsopgave?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 38. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 3)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: In de inhoudsopgave staat: 'Hoofdstuk 2. Dieren ... 24'. Waar sla je het boek open om over dieren te lezen?
- ✅ A. pagina 24
- ▫️ B. pagina 2
- ▫️ C. de laatste pagina
- ▫️ D. de eerste pagina
wrongHints: [null,"De 2 is het hoofdstuknummer, niet de pagina.","Het hoofdstuk staat niet achteraan.","Niet vooraan — daar staat hoofdstuk 1."]
niveaus: {"basis":"Hoofdstuk Dieren begint op pagina 24.","simpeler":"Welk getal achter 'Dieren' is de pagina?","nogSimpeler":"Op welke pagina begint het dieren-hoofdstuk?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 39. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 4)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: In welke volgorde staat de inhoudsopgave?
- ✅ A. op volgorde van het boek
- ▫️ B. op alfabet, van A tot Z
- ▫️ C. van kort naar lang hoofdstuk
- ▫️ D. in willekeurige volgorde
wrongHints: [null,"Alfabetisch is het register, niet de inhoudsopgave.","Hoe lang een hoofdstuk is, bepaalt niet zijn plek in de lijst. Kijk naar de nummers 1, 2, 3.","Het is juist netjes geordend. Kijk naar de nummers 1, 2, 3."]
niveaus: {"basis":"De inhoudsopgave staat op hoofdstuk-volgorde.","simpeler":"Volgt de inhoudsopgave het boek of het alfabet?","nogSimpeler":"Hoofdstuk 1, 2, 3 — is dat boekvolgorde?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 40. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 5)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: In de inhoudsopgave staat: 'Hoofdstuk 3. Het weer ... 40'. Op welke pagina begint dat hoofdstuk?
- ✅ A. pagina 40
- ▫️ B. pagina 3
- ▫️ C. pagina 1
- ▫️ D. de laatste pagina
wrongHints: [null,"De 3 is het hoofdstuknummer, niet de pagina.","Vooraan staat hoofdstuk 1.","Het hoofdstuk staat niet achteraan."]
niveaus: {"basis":"Hoofdstuk 'Het weer' begint op pagina 40.","simpeler":"Welk getal is de pagina: 3 of 40?","nogSimpeler":"Op welke pagina begint het weer-hoofdstuk?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 41. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 6)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: Welk hoofdstuk staat in de inhoudsopgave vlak vóór hoofdstuk 2?
- ✅ A. hoofdstuk 1
- ▫️ B. hoofdstuk 3
- ▫️ C. het register
- ▫️ D. het laatste hoofdstuk
wrongHints: [null,"Hoofdstuk 3 komt juist ná 2.","Het register staat niet in de hoofdstukken-rij.","Dat staat helemaal aan het eind."]
niveaus: {"basis":"Vóór hoofdstuk 2 komt hoofdstuk 1.","simpeler":"Welk hoofdstuk komt net vóór 2?","nogSimpeler":"1, 2, 3 — wat komt vóór de 2?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 42. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 7)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: Inhoudsopgave: 1. Het bos ... 5 2. De zee ... 19 3. De bergen ... 34 4. De woestijn ... 52 Op welke pagina **eindigt** hoofdstuk 2?
- ✅ A. pagina 33
- ▫️ B. pagina 34
- ▫️ C. pagina 19
- ▫️ D. pagina 20
wrongHints: [null,"Kijk op welke pagina hoofdstuk 3 begint. Hoort die pagina nog bij hoofdstuk 2?","Op die pagina begint het hoofdstuk juist.","Pagina 20 is pas de tweede bladzijde van hoofdstuk 2. Waar begint hoofdstuk 3?"]
niveaus: {"basis":"Hoofdstuk 2 loopt van pagina 19 tot en met 33.","simpeler":"Waar begint hoofdstuk 3? Hoofdstuk 2 stopt één pagina eerder.","nogSimpeler":"34 − 1 = ?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 43. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 8)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: Inhoudsopgave: 1. Het bos ... 5 2. De zee ... 19 3. De bergen ... 34 4. De woestijn ... 52 Je leest op pagina 40. In welk hoofdstuk ben je?
- ✅ A. De bergen
- ▫️ B. De woestijn
- ▫️ C. De zee
- ▫️ D. Het bos
wrongHints: [null,"Begint dat hoofdstuk al vóór pagina 40?","De zee begint op 19. Maar begint er daarna nog een hoofdstuk vóór pagina 40?","Het bos begint op 5. Beginnen er daarna nog hoofdstukken vóór pagina 40?"]
niveaus: {"basis":"Pagina 40 ligt tussen 34 en 52 → De bergen.","simpeler":"Welk hoofdstuk begint vóór pagina 40, terwijl het volgende pas ná 40 begint?","nogSimpeler":"Ligt 40 tussen 34 en 52?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 44. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 9)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: Inhoudsopgave: 1. Het bos ... 5 2. De zee ... 19 3. De bergen ... 34 4. De woestijn ... 52 Je zit op pagina 20 en wilt over de woestijn lezen. Wat doe je?
- ✅ A. vooruit bladeren naar pagina 52
- ▫️ B. terug bladeren naar pagina 4
- ▫️ C. terug bladeren naar pagina 5
- ▫️ D. vooruit bladeren naar pagina 34
wrongHints: [null,"De 4 is het nummer van het hoofdstuk.","Op pagina 5 begint het eerste hoofdstuk. Welk hoofdstuk zoek jij?","Op pagina 34 begint 'De bergen'. Welk getal staat er achter 'De woestijn'?"]
niveaus: {"basis":"De woestijn begint op pagina 52 → vooruit bladeren.","simpeler":"Welk getal is de pagina: 4 of 52?","nogSimpeler":"Is 52 verder in het boek dan 20?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 45. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 1)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Wat is een plattegrond?
- ✅ A. een tekening van bovenaf
- ▫️ B. een foto van de voorkant
- ▫️ C. een tekening van de zijkant
- ▫️ D. een schilderij van een straat
wrongHints: [null,"Kun je op een foto van de voorkant zien hoe de kamers achter elkaar liggen?","Zie je van de zijkant wat er achter de muren ligt?","Zie je op een schilderij precies hoe alles naast elkaar ligt?"]
niveaus: {"basis":"Een plattegrond is een tekening van bovenaf van een gebouw/gebied.","simpeler":"Kijk je bij een plattegrond van voren of van boven?","nogSimpeler":"Is een plattegrond een tekening van bovenaf?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 46. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 2)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Vanaf welke kant bekijk je een plattegrond?
- ✅ A. van bovenaf
- ▫️ B. van de zijkant
- ▫️ C. van voren
- ▫️ D. van onderen
wrongHints: [null,"Van de zijkant zie je niet hoe alles ligt.","Van voren is een foto, geen plattegrond.","Van onderen kun je niet kijken."]
niveaus: {"basis":"Een plattegrond bekijk je van bovenaf.","simpeler":"Alsof je met een drone erboven hangt — welke kant is dat?","nogSimpeler":"Van boven of van de zijkant?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 47. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 3)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Waarvoor gebruik je een plattegrond?
- ✅ A. om te zien waar iets ligt
- ▫️ B. om te zien hoe een gebouw er van buiten uitziet
- ▫️ C. om te zien wanneer iets open is
- ▫️ D. om te lezen wat er in een gebouw gebeurt
wrongHints: [null,"Zie je op een plattegrond de buitenkant, of hoe het binnen is ingedeeld?","Staan er tijden op een plattegrond, of plekken?","Vertelt een plattegrond een verhaal, of laat hij iets anders zien?"]
niveaus: {"basis":"Een plattegrond helpt je de weg vinden.","simpeler":"Gebruik je een plattegrond om iets te vinden of om de tijd te weten?","nogSimpeler":"Helpt een plattegrond je de weg te vinden?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 48. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 4)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Op een plattegrond staat een stip met 'je bent hier'. Wat betekent dat?
- ✅ A. waar jij nu staat
- ▫️ B. waar de uitgang is
- ▫️ C. waar het toilet is
- ▫️ D. waar je naartoe moet
wrongHints: [null,"De uitgang heeft een eigen teken.","Het toilet heeft een eigen symbool.","Het is je startplek, niet je doel."]
niveaus: {"basis":"De stip toont waar jij nu bent.","simpeler":"'Je bent hier' = jouw eigen plek of je doel?","nogSimpeler":"Waar sta jij volgens de stip?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 49. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 5)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Wat kun je doen met een plattegrond van een dierentuin?
- ✅ A. zien waar de dieren wonen
- ▫️ B. zien hoe de dieren eruitzien
- ▫️ C. weten hoe oud de dieren zijn
- ▫️ D. zien wanneer de dieren eten krijgen
wrongHints: [null,"Staan er foto's van de dieren op, of vooral plekken?","Leeftijden staan niet op een plattegrond.","Is dat een plek op de kaart, of een tijd?"]
niveaus: {"basis":"Een plattegrond laat zien waar alles ligt.","simpeler":"Wat laat een plattegrond zien: waar dingen zijn of hoe oud dieren zijn?","nogSimpeler":"Zie je op een plattegrond waar de dieren liggen?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 50. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 6)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Een plattegrond lijkt nog het meest op...
- ✅ A. een foto recht van bovenaf
- ▫️ B. een foto van de voorkant
- ▫️ C. een tekening van opzij
- ▫️ D. een foto van heel dichtbij
wrongHints: [null,"Zie je op zo'n foto hoe de kamers achter elkaar liggen?","Zie je van opzij hoe alles naast elkaar ligt?","Zie je dan het hele gebouw, of maar een klein stukje?"]
niveaus: {"basis":"Een plattegrond is een bovenaanzicht, als een drone-foto.","simpeler":"Vanaf welke kant kijk je: van boven of van voren?","nogSimpeler":"Is een plattegrond van bovenaf?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 51. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 7)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Plattegrond van de bibliotheek: Links is de ingang met de stip 'je bent hier'. Vlak naast de ingang is de balie. In het midden staan de boekenkasten. Helemaal rechts zijn de toiletten. Waar sta je als je naar deze plattegrond kijkt?
- ✅ A. bij de ingang
- ▫️ B. bij de balie
- ▫️ C. bij de boekenkasten
- ▫️ D. bij de toiletten
wrongHints: [null,"Waar staat de stip precies?",null,null]
niveaus: {"basis":"Je staat bij de ingang, want daar is de stip.","simpeler":"Waar staat 'je bent hier'?","nogSimpeler":"Staat de stip bij de ingang?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 52. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 8)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Plattegrond van de bibliotheek: Links is de ingang met de stip 'je bent hier'. Vlak naast de ingang is de balie. In het midden staan de boekenkasten. Helemaal rechts zijn de toiletten. Wat ligt het verst van jouw startplek?
- ✅ A. de toiletten
- ▫️ B. de boekenkasten
- ▫️ C. de balie
- ▫️ D. de ingang
wrongHints: [null,null,"Die ligt vlak naast de ingang.",null]
niveaus: {"basis":"Helemaal rechts = het verst van links → de toiletten.","simpeler":"Je start links. Wat ligt helemaal aan de andere kant?","nogSimpeler":"Wat staat er helemaal rechts?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 53. Wat is vmbo, havo en vwo? (en wat kun je ermee) (onderwijs-niveaus-vmbo-havo-vwo stap 1 vraag 1)
_Bestand: src/learnPaths/onderwijsNiveausVmboHavoVwo.js · stap-titel: De drie niveaus — vmbo, havo en vwo in het kort_
Vraag: Hoe lang duurt **vwo** ongeveer?
- ✅ A. 6 jaar
- ▫️ B. 4 jaar
- ▫️ C. 2 jaar
- ▫️ D. 8 jaar
wrongHints: [null,"Vier jaar is het vmbo. Het vwo duurt langer.","Twee jaar is korter dan elk niveau op de middelbare school.","Acht jaar duurt de basisschool. Het vwo is wel het langste niveau, maar zó lang niet."]
stap-uitleg (ingekort): Na groep 8 ga je naar de **middelbare school** (ook wel 'voortgezet onderwijs' genoemd). Daar zijn **drie niveaus**. Ze verschillen vooral in **hoe snel** en **hoe theoretisch** de stof gaat — niet in 'slim' of 'dom'. Voor elk niveau is er een mooie route. **1. vmbo** 🔧 *(spreek uit: vee-em-bee-oo)* • Staat voor **voorbereidend middelbaar beroepsonderwijs**. • Duurt **4 jaar**. • Mix van **leren én praktijk** — je doet ook met je handen. • Daarna ga je meestal naar het **mbo** *(beroepsopleiding)*. **2. havo** 🎓 *(spreek uit: haa-voo)* • Staat voor **hoger algemeen voortgezet onderwijs**. • Duurt **5 jaar**. • Meer **theorie** dan vmbo, uit boeken. • Daarna ga je meestal naar het **hbo** * …

## 54. Wat is vmbo, havo en vwo? (en wat kun je ermee) (onderwijs-niveaus-vmbo-havo-vwo stap 1 vraag 2)
_Bestand: src/learnPaths/onderwijsNiveausVmboHavoVwo.js · stap-titel: De drie niveaus — vmbo, havo en vwo in het kort_
Vraag: Bij welk niveau hoort **veel praktijk + leren met je handen**?
- ✅ A. vmbo
- ▫️ B. vwo
- ▫️ C. universiteit
- ▫️ D. havo
wrongHints: [null,"Het vwo heeft juist de meeste theorie. Welk niveau werkt veel met de handen?","De universiteit komt pas na de middelbare school.","Havo heeft veel theorie. Welk niveau heeft de meeste praktijk?"]
stap-uitleg (ingekort): Na groep 8 ga je naar de **middelbare school** (ook wel 'voortgezet onderwijs' genoemd). Daar zijn **drie niveaus**. Ze verschillen vooral in **hoe snel** en **hoe theoretisch** de stof gaat — niet in 'slim' of 'dom'. Voor elk niveau is er een mooie route. **1. vmbo** 🔧 *(spreek uit: vee-em-bee-oo)* • Staat voor **voorbereidend middelbaar beroepsonderwijs**. • Duurt **4 jaar**. • Mix van **leren én praktijk** — je doet ook met je handen. • Daarna ga je meestal naar het **mbo** *(beroepsopleiding)*. **2. havo** 🎓 *(spreek uit: haa-voo)* • Staat voor **hoger algemeen voortgezet onderwijs**. • Duurt **5 jaar**. • Meer **theorie** dan vmbo, uit boeken. • Daarna ga je meestal naar het **hbo** * …

## 55. Wat is vmbo, havo en vwo? (en wat kun je ermee) (onderwijs-niveaus-vmbo-havo-vwo stap 1 vraag 3)
_Bestand: src/learnPaths/onderwijsNiveausVmboHavoVwo.js · stap-titel: De drie niveaus — vmbo, havo en vwo in het kort_
Vraag: Welk niveau is **'beter'**?
- ✅ A. Geen — ze passen bij verschillende mensen
- ▫️ B. vwo, want dat is het moeilijkst
- ▫️ C. havo, want dat zit in het midden
- ▫️ D. vmbo, want daar doe je het meest
wrongHints: [null,"Is een timmerman minder dan een dokter? Denk aan wat 'passen bij iemand' betekent.","Waarom zou uitgerekend het middelste niveau 'het beste' zijn — beste voor wíé?","Vmbo past bij veel mensen supergoed — maar geldt dat voor íédereen?"]
stap-uitleg (ingekort): Na groep 8 ga je naar de **middelbare school** (ook wel 'voortgezet onderwijs' genoemd). Daar zijn **drie niveaus**. Ze verschillen vooral in **hoe snel** en **hoe theoretisch** de stof gaat — niet in 'slim' of 'dom'. Voor elk niveau is er een mooie route. **1. vmbo** 🔧 *(spreek uit: vee-em-bee-oo)* • Staat voor **voorbereidend middelbaar beroepsonderwijs**. • Duurt **4 jaar**. • Mix van **leren én praktijk** — je doet ook met je handen. • Daarna ga je meestal naar het **mbo** *(beroepsopleiding)*. **2. havo** 🎓 *(spreek uit: haa-voo)* • Staat voor **hoger algemeen voortgezet onderwijs**. • Duurt **5 jaar**. • Meer **theorie** dan vmbo, uit boeken. • Daarna ga je meestal naar het **hbo** * …

## 56. Wat is vmbo, havo en vwo? (en wat kun je ermee) (onderwijs-niveaus-vmbo-havo-vwo stap 1 vraag 4)
_Bestand: src/learnPaths/onderwijsNiveausVmboHavoVwo.js · stap-titel: De drie niveaus — vmbo, havo en vwo in het kort_
Vraag: Wat helpt naast het schooladvies bij je indeling?
- ✅ A. De Doorstroomtoets
- ▫️ B. Wat je beste vriend of vriendin kiest
- ▫️ C. Je cijfer voor gym
- ▫️ D. Hoe oud je bent
wrongHints: [null,"Je vriend of vriendin kiest voor zichzelf. Wat meet hoe goed jíj kunt lezen en rekenen?","Gym telt niet mee voor je niveau. Welke toets maak je in groep 8?","Iedereen in groep 8 is ongeveer even oud. Welke toets maak je in groep 8?"]
stap-uitleg (ingekort): Na groep 8 ga je naar de **middelbare school** (ook wel 'voortgezet onderwijs' genoemd). Daar zijn **drie niveaus**. Ze verschillen vooral in **hoe snel** en **hoe theoretisch** de stof gaat — niet in 'slim' of 'dom'. Voor elk niveau is er een mooie route. **1. vmbo** 🔧 *(spreek uit: vee-em-bee-oo)* • Staat voor **voorbereidend middelbaar beroepsonderwijs**. • Duurt **4 jaar**. • Mix van **leren én praktijk** — je doet ook met je handen. • Daarna ga je meestal naar het **mbo** *(beroepsopleiding)*. **2. havo** 🎓 *(spreek uit: haa-voo)* • Staat voor **hoger algemeen voortgezet onderwijs**. • Duurt **5 jaar**. • Meer **theorie** dan vmbo, uit boeken. • Daarna ga je meestal naar het **hbo** * …

## 57. Wat is vmbo, havo en vwo? (en wat kun je ermee) (onderwijs-niveaus-vmbo-havo-vwo stap 1 vraag 5)
_Bestand: src/learnPaths/onderwijsNiveausVmboHavoVwo.js · stap-titel: De drie niveaus — vmbo, havo en vwo in het kort_
Vraag: Hoeveel jaar duurt **havo**?
- ✅ A. 5 jaar
- ▫️ B. 4 jaar
- ▫️ C. 6 jaar
- ▫️ D. 3 jaar
wrongHints: [null,"Vier jaar is het vmbo. De havo duurt iets langer.","Zes jaar is het vwo. De havo is korter.","Drie jaar is korter dan elk niveau op de middelbare school."]
stap-uitleg (ingekort): Na groep 8 ga je naar de **middelbare school** (ook wel 'voortgezet onderwijs' genoemd). Daar zijn **drie niveaus**. Ze verschillen vooral in **hoe snel** en **hoe theoretisch** de stof gaat — niet in 'slim' of 'dom'. Voor elk niveau is er een mooie route. **1. vmbo** 🔧 *(spreek uit: vee-em-bee-oo)* • Staat voor **voorbereidend middelbaar beroepsonderwijs**. • Duurt **4 jaar**. • Mix van **leren én praktijk** — je doet ook met je handen. • Daarna ga je meestal naar het **mbo** *(beroepsopleiding)*. **2. havo** 🎓 *(spreek uit: haa-voo)* • Staat voor **hoger algemeen voortgezet onderwijs**. • Duurt **5 jaar**. • Meer **theorie** dan vmbo, uit boeken. • Daarna ga je meestal naar het **hbo** * …

## 58. Wat is vmbo, havo en vwo? (en wat kun je ermee) (onderwijs-niveaus-vmbo-havo-vwo stap 1 vraag 6)
_Bestand: src/learnPaths/onderwijsNiveausVmboHavoVwo.js · stap-titel: De drie niveaus — vmbo, havo en vwo in het kort_
Vraag: Naar welke vervolgopleiding gaan vmbo-leerlingen **meestal**?
- ✅ A. Het mbo
- ▫️ B. De universiteit
- ▫️ C. Het hbo
- ▫️ D. Havo
wrongHints: [null,"Dat is de route via vwo.","Dat gaat via havo.","Dat kan vanuit de tl, maar lees de vraag: 'meestal'. Waar gaan de meeste vmbo'ers heen?"]
stap-uitleg (ingekort): Na groep 8 ga je naar de **middelbare school** (ook wel 'voortgezet onderwijs' genoemd). Daar zijn **drie niveaus**. Ze verschillen vooral in **hoe snel** en **hoe theoretisch** de stof gaat — niet in 'slim' of 'dom'. Voor elk niveau is er een mooie route. **1. vmbo** 🔧 *(spreek uit: vee-em-bee-oo)* • Staat voor **voorbereidend middelbaar beroepsonderwijs**. • Duurt **4 jaar**. • Mix van **leren én praktijk** — je doet ook met je handen. • Daarna ga je meestal naar het **mbo** *(beroepsopleiding)*. **2. havo** 🎓 *(spreek uit: haa-voo)* • Staat voor **hoger algemeen voortgezet onderwijs**. • Duurt **5 jaar**. • Meer **theorie** dan vmbo, uit boeken. • Daarna ga je meestal naar het **hbo** * …

## 59. Wat is vmbo, havo en vwo? (en wat kun je ermee) (onderwijs-niveaus-vmbo-havo-vwo stap 1 vraag 7)
_Bestand: src/learnPaths/onderwijsNiveausVmboHavoVwo.js · stap-titel: De drie niveaus — vmbo, havo en vwo in het kort_
Vraag: Welk niveau duurt het **kortst**?
- ✅ A. vmbo
- ▫️ B. havo
- ▫️ C. vwo
- ▫️ D. Ze duren alle drie even lang
wrongHints: [null,"Havo duurt 5 jaar. Weet je hoe lang de andere niveaus duren?","Het vwo heeft de meeste theorie en de langste route. Is dat dan het kortst?","Kijk in de uitleg: staat er bij elk niveau hetzelfde aantal jaren?"]
stap-uitleg (ingekort): Na groep 8 ga je naar de **middelbare school** (ook wel 'voortgezet onderwijs' genoemd). Daar zijn **drie niveaus**. Ze verschillen vooral in **hoe snel** en **hoe theoretisch** de stof gaat — niet in 'slim' of 'dom'. Voor elk niveau is er een mooie route. **1. vmbo** 🔧 *(spreek uit: vee-em-bee-oo)* • Staat voor **voorbereidend middelbaar beroepsonderwijs**. • Duurt **4 jaar**. • Mix van **leren én praktijk** — je doet ook met je handen. • Daarna ga je meestal naar het **mbo** *(beroepsopleiding)*. **2. havo** 🎓 *(spreek uit: haa-voo)* • Staat voor **hoger algemeen voortgezet onderwijs**. • Duurt **5 jaar**. • Meer **theorie** dan vmbo, uit boeken. • Daarna ga je meestal naar het **hbo** * …

## 60. Wat is vmbo, havo en vwo? (en wat kun je ermee) (onderwijs-niveaus-vmbo-havo-vwo stap 1 vraag 8)
_Bestand: src/learnPaths/onderwijsNiveausVmboHavoVwo.js · stap-titel: De drie niveaus — vmbo, havo en vwo in het kort_
Vraag: Waarin verschillen vmbo, havo en vwo **vooral**?
- ✅ A. In hoe snel en hoe theoretisch de stof gaat
- ▫️ B. In hoe slim of dom de leerlingen zijn
- ▫️ C. In hoe groot het schoolgebouw is
- ▫️ D. In hoe laat de lessen beginnen
wrongHints: [null,"Noemt de uitleg een niveau 'slim' of 'dom'?","Een schoolgebouw kan groot of klein zijn bij elk niveau. Waar gaat het verschil écht over?","De lessen beginnen op elk niveau ongeveer even laat. Waarin verschilt de stóf?"]
stap-uitleg (ingekort): Na groep 8 ga je naar de **middelbare school** (ook wel 'voortgezet onderwijs' genoemd). Daar zijn **drie niveaus**. Ze verschillen vooral in **hoe snel** en **hoe theoretisch** de stof gaat — niet in 'slim' of 'dom'. Voor elk niveau is er een mooie route. **1. vmbo** 🔧 *(spreek uit: vee-em-bee-oo)* • Staat voor **voorbereidend middelbaar beroepsonderwijs**. • Duurt **4 jaar**. • Mix van **leren én praktijk** — je doet ook met je handen. • Daarna ga je meestal naar het **mbo** *(beroepsopleiding)*. **2. havo** 🎓 *(spreek uit: haa-voo)* • Staat voor **hoger algemeen voortgezet onderwijs**. • Duurt **5 jaar**. • Meer **theorie** dan vmbo, uit boeken. • Daarna ga je meestal naar het **hbo** * …

