# Vervolgset Studievaardigheden · groep 7 — vraag 21 t/m 60 (deel B: met antwoord, hints en uitleg)

Zelfde vragen als deel A. ✔ = stond al als goed/twijfel in docs/audit/goedgekeurd.json (hash klopt nog).

## 21. Dienstregeling & roosters lezen (dienstregeling-roosters-po stap 1 vraag 7)
_Bestand: src/learnPaths/dienstregelingRoostersPo.js · stap-titel: Een dienstregeling (trein/bus) lezen_
Vraag: Busdienstregeling lijn 12 — Dorp: 7:50, 8:20, 8:50 · Markt: 8:05, 8:35, 9:05 · Station: 8:18, 8:48, 9:18. De eerste bus vertrekt om 7:50 uit Dorp. Hoe lang duurt de rit naar het Station?
- ✅ A. 28 minuten
- ▫️ B. 18 minuten
- ▫️ C. 32 minuten
- ▫️ D. 38 minuten
wrongHints: [null,"Tel eerst van 7:50 tot 8:00 en daarna verder tot 8:18.",null,null]
niveaus: {"basis":"7:50 → 8:00 (10 min) + 8:00 → 8:18 (18 min) = 28 minuten.","simpeler":"Tel van 7:50 tot het hele uur, en dan verder tot 8:18.","nogSimpeler":"10 minuten + 18 minuten = ?"}
stap-uitleg (ingekort): Een **dienstregeling** is een tabel met vertrek- en aankomsttijden. Je leest 'm zo: zoek de juiste **rij** (het station) en de juiste **kolom** (de trein/bus). Voorbeeld treintabel: | Station | Trein A | Trein B | Trein C | |---|---|---|---| | Utrecht | 9:10 | 9:40 | 10:10 | | Amersfoort | 9:25 | 9:55 | 10:25 | | Zwolle | 10:00 | 10:30 | 11:00 | **Handige stappen:** • **Reistijd** = aankomsttijd − vertrektijd. • **Wachttijd** = tijd tot de eerstvolgende vertrektijd. • Moet je ergens **vóór** een bepaalde tijd zijn? Kies de laatste trein die nog op tijd aankomt.

## 22. Dienstregeling & roosters lezen (dienstregeling-roosters-po stap 1 vraag 8)
_Bestand: src/learnPaths/dienstregelingRoostersPo.js · stap-titel: Een dienstregeling (trein/bus) lezen_
Vraag: Busdienstregeling lijn 12 — Dorp: 7:50, 8:20, 8:50 · Markt: 8:05, 8:35, 9:05 · Station: 8:18, 8:48, 9:18. Je bent om 8:40 bij de halte Markt. Hoe laat ben je op zijn vroegst bij het Station?
- ✅ A. 9:18
- ▫️ B. 8:48
- ▫️ C. 9:05
- ▫️ D. 8:35
wrongHints: [null,"Rijdt de bus van 8:35 nog als jij om 8:40 bij de Markt bent?",null,null]
niveaus: {"basis":"Na 8:40 vertrekt de eerste bus om 9:05 bij de Markt; die is om 9:18 bij het Station.","simpeler":"Welke vertrektijd bij de Markt komt het eerst ná 8:40? Volg die bus naar het Station.","nogSimpeler":"Welke bus vertrekt bij de Markt na 8:40?"}
stap-uitleg (ingekort): Een **dienstregeling** is een tabel met vertrek- en aankomsttijden. Je leest 'm zo: zoek de juiste **rij** (het station) en de juiste **kolom** (de trein/bus). Voorbeeld treintabel: | Station | Trein A | Trein B | Trein C | |---|---|---|---| | Utrecht | 9:10 | 9:40 | 10:10 | | Amersfoort | 9:25 | 9:55 | 10:25 | | Zwolle | 10:00 | 10:30 | 11:00 | **Handige stappen:** • **Reistijd** = aankomsttijd − vertrektijd. • **Wachttijd** = tijd tot de eerstvolgende vertrektijd. • Moet je ergens **vóór** een bepaalde tijd zijn? Kies de laatste trein die nog op tijd aankomt.

## 23. Dienstregeling & roosters lezen (dienstregeling-roosters-po stap 1 vraag 9)
_Bestand: src/learnPaths/dienstregelingRoostersPo.js · stap-titel: Een dienstregeling (trein/bus) lezen_
Vraag: Busdienstregeling lijn 12 — Dorp: 7:50, 8:20, 8:50 · Markt: 8:05, 8:35, 9:05 · Station: 8:18, 8:48, 9:18. Je moet uiterlijk 9:00 bij het Station zijn. Welke bus uit Dorp is de laatste die je kunt nemen?
- ✅ A. de bus van 8:20
- ▫️ B. de bus van 7:50
- ▫️ C. de bus van 8:50
- ▫️ D. geen enkele bus
wrongHints: [null,"Die komt op tijd aan, maar is het ook de laatste bus die op tijd is?",null,null]
niveaus: {"basis":"Bus van 8:20 is om 8:48 bij het Station (op tijd); die van 8:50 pas om 9:18.","simpeler":"Kijk bij elke bus hoe laat hij bij het Station is. Welke is nog vóór 9:00?","nogSimpeler":"Is 8:48 vóór 9:00? En 9:18?"}
stap-uitleg (ingekort): Een **dienstregeling** is een tabel met vertrek- en aankomsttijden. Je leest 'm zo: zoek de juiste **rij** (het station) en de juiste **kolom** (de trein/bus). Voorbeeld treintabel: | Station | Trein A | Trein B | Trein C | |---|---|---|---| | Utrecht | 9:10 | 9:40 | 10:10 | | Amersfoort | 9:25 | 9:55 | 10:25 | | Zwolle | 10:00 | 10:30 | 11:00 | **Handige stappen:** • **Reistijd** = aankomsttijd − vertrektijd. • **Wachttijd** = tijd tot de eerstvolgende vertrektijd. • Moet je ergens **vóór** een bepaalde tijd zijn? Kies de laatste trein die nog op tijd aankomt.

## 24. Dienstregeling & roosters lezen (dienstregeling-roosters-po stap 1 vraag 10)
_Bestand: src/learnPaths/dienstregelingRoostersPo.js · stap-titel: Een dienstregeling (trein/bus) lezen_
Vraag: Busdienstregeling lijn 12 — Dorp: 7:50, 8:20, 8:50 · Markt: 8:05, 8:35, 9:05 · Station: 8:18, 8:48, 9:18. Hoe lang rijdt de bus van de halte Markt naar het Station?
- ✅ A. 13 minuten
- ▫️ B. 15 minuten
- ▫️ C. 23 minuten
- ▫️ D. 18 minuten
wrongHints: [null,null,null,"Dat is het getal achter de dubbele punt van de aankomsttijd, niet de reistijd."]
niveaus: {"basis":"8:05 → 8:18 = 13 minuten.","simpeler":"Kies één bus en trek de vertrektijd bij de Markt af van de aankomsttijd bij het Station.","nogSimpeler":"Van 8:05 tot 8:18 is hoeveel minuten?"}
stap-uitleg (ingekort): Een **dienstregeling** is een tabel met vertrek- en aankomsttijden. Je leest 'm zo: zoek de juiste **rij** (het station) en de juiste **kolom** (de trein/bus). Voorbeeld treintabel: | Station | Trein A | Trein B | Trein C | |---|---|---|---| | Utrecht | 9:10 | 9:40 | 10:10 | | Amersfoort | 9:25 | 9:55 | 10:25 | | Zwolle | 10:00 | 10:30 | 11:00 | **Handige stappen:** • **Reistijd** = aankomsttijd − vertrektijd. • **Wachttijd** = tijd tot de eerstvolgende vertrektijd. • Moet je ergens **vóór** een bepaalde tijd zijn? Kies de laatste trein die nog op tijd aankomt.

## 25. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 3)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Op de bon staat 'BTW'. Wat betekent dat?
- ✅ A. belasting die in de prijs zit
- ▫️ B. korting die je krijgt
- ▫️ C. een fooi voor de kassière
- ▫️ D. statiegeld op flessen
wrongHints: [null,"Het maakt iets juist niet goedkoper.","Het is geen extraatje voor het personeel.","Dat is iets anders (geld terug op flessen)."]
niveaus: {"basis":"BTW is belasting die al in de prijs verwerkt zit.","simpeler":"Is BTW een korting of juist belasting? Het is belasting.","nogSimpeler":"BTW is een soort … (belasting/korting?)."}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 26. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 4)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Wat is het 'totaalbedrag' onderaan een bon?
- ✅ A. alles bij elkaar opgeteld
- ▫️ B. het duurste artikel
- ▫️ C. het goedkoopste artikel
- ▫️ D. alleen de BTW
wrongHints: [null,"Wat betekent het woord 'totaal'?","Betaal je dan alleen voor het goedkoopste ding?","BTW is maar een klein deel."]
niveaus: {"basis":"Het totaalbedrag is alles opgeteld.","simpeler":"Is het totaal één artikel of alles samen?","nogSimpeler":"Wat betaal je in totaal voor alles?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 27. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 5)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Je koopt 2 pakken melk van €0,90 per stuk. Hoeveel kost de melk samen?
- ✅ A. €1,80
- ▫️ B. €0,90
- ▫️ C. €2,70
- ▫️ D. €1,60
wrongHints: [null,"Dat is de prijs van één pak.","Dat zijn er drie.","Reken nog eens: 2 × €0,90."]
niveaus: {"basis":"2 pakken × €0,90 = €1,80.","simpeler":"Tel twee keer €0,90 op.","nogSimpeler":"0,90 + 0,90 = ?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 28. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 6)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Het totaalbedrag is €6,75. Je betaalt met €7,00. Hoeveel wisselgeld krijg je?
- ✅ A. €0,25
- ▫️ B. €0,75
- ▫️ C. €1,25
- ▫️ D. €0,35
wrongHints: [null,"Reken nog eens: €7,00 − €6,75.","Te veel terug.","Let op de centen."]
niveaus: {"basis":"Wisselgeld = €7,00 − €6,75 = €0,25.","simpeler":"Van €6,75 naar €7,00: hoeveel cent erbij?","nogSimpeler":"€6,75 + … = €7,00?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 29. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 7)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Op een kassabon is één bedrag onleesbaar: • Pennen 3 × €1,25 = €… Welk bedrag hoort op de plek van de puntjes?
- ✅ A. €3,75
- ▫️ B. €4,25
- ▫️ C. €3,25
- ▫️ D. €1,25
wrongHints: [null,"Reken 3 × €1,25 eens uit als €1,25 + €1,25 + €1,25.",null,"Dat is de prijs van één pen."]
niveaus: {"basis":"3 × €1,25 = €3,75.","simpeler":"Drie keer €1 is €3, drie keer 25 cent is 75 cent.","nogSimpeler":"€3 + €0,75 = ?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 30. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 8)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Onderaan een kassabon staat: • Totaal: €13,65 • Betaald (contant): €20,00 • Terug: €… Hoeveel krijg je terug?
- ✅ A. €6,35
- ▫️ B. €7,35
- ▫️ C. €6,45
- ▫️ D. €7,65
wrongHints: [null,"Reken van €13,65 omhoog naar €20,00.",null,null]
niveaus: {"basis":"Wisselgeld = €20,00 − €13,65 = €6,35.","simpeler":"Van €13,65 naar €14,00 is €0,35. Van €14,00 naar €20,00 is €6,00.","nogSimpeler":"€0,35 + €6,00 = ?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 31. Folder, bon & advertentie lezen (folder-bon-advertentie-po stap 1 vraag 9)
_Bestand: src/learnPaths/folderBonAdvertentiePo.js · stap-titel: Een kassabon lezen_
Vraag: Onderaan een kassabon staat: • Totaal: €7,26 • Waarvan btw: €1,26 Hoeveel heb je in totaal betaald?
- ✅ A. €7,26
- ▫️ B. €8,52
- ▫️ C. €6,00
- ▫️ D. €1,26
wrongHints: [null,"Lees in de uitleg nog eens na waar de btw zit.",null,"Dat is maar een deel van het bedrag."]
niveaus: {"basis":"Je betaalt het totaal: €7,26. De btw zit daar al in.","simpeler":"Komt de btw er nog bij, of zit hij al in het totaal? Hij zit er al in.","nogSimpeler":"Welk bedrag staat bij 'Totaal'?"}
stap-uitleg (ingekort): Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan. Voorbeeld: | Artikel | Aantal | Prijs/stuk | Totaal | |---|---|---|---| | Brood | 3 | €1,20 | €3,60 | | Melk | 2 | €0,90 | €1,80 | | **Totaal** | | | **€5,40** | • **Prijs van meerdere stuks** = aantal × prijs per stuk. • **Totaalbedrag** = alles bij elkaar opgeteld. • **Wisselgeld** = wat je betaalt − het totaalbedrag. Soms staat er **BTW** (belasting over de toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.

## 32. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 3)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: In de inhoudsopgave staat: 'Hoofdstuk 2. Dieren ... 24'. Waar sla je het boek open om over dieren te lezen?
- ✅ A. pagina 24
- ▫️ B. pagina 2
- ▫️ C. de laatste pagina
- ▫️ D. de eerste pagina
wrongHints: [null,"De 2 is het hoofdstuknummer, niet de pagina.","Het hoofdstuk staat niet achteraan.","Niet vooraan — daar staat hoofdstuk 1."]
niveaus: {"basis":"Hoofdstuk Dieren begint op pagina 24.","simpeler":"Welk getal achter 'Dieren' is de pagina?","nogSimpeler":"Op welke pagina begint het dieren-hoofdstuk?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 33. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 4)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: In welke volgorde staat de inhoudsopgave?
- ✅ A. op volgorde van het boek
- ▫️ B. op alfabet, van A tot Z
- ▫️ C. van kort naar lang hoofdstuk
- ▫️ D. in willekeurige volgorde
wrongHints: [null,"Alfabetisch is het register, niet de inhoudsopgave.","Hoe lang een hoofdstuk is, bepaalt niet zijn plek in de lijst. Kijk naar de nummers 1, 2, 3.","Het is juist netjes geordend. Kijk naar de nummers 1, 2, 3."]
niveaus: {"basis":"De inhoudsopgave staat op hoofdstuk-volgorde.","simpeler":"Volgt de inhoudsopgave het boek of het alfabet?","nogSimpeler":"Hoofdstuk 1, 2, 3 — is dat boekvolgorde?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 34. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 5)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: In de inhoudsopgave staat: 'Hoofdstuk 3. Het weer ... 40'. Op welke pagina begint dat hoofdstuk?
- ✅ A. pagina 40
- ▫️ B. pagina 3
- ▫️ C. pagina 1
- ▫️ D. de laatste pagina
wrongHints: [null,"De 3 is het hoofdstuknummer, niet de pagina.","Vooraan staat hoofdstuk 1.","Het hoofdstuk staat niet achteraan."]
niveaus: {"basis":"Hoofdstuk 'Het weer' begint op pagina 40.","simpeler":"Welk getal is de pagina: 3 of 40?","nogSimpeler":"Op welke pagina begint het weer-hoofdstuk?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 35. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 6)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: Welk hoofdstuk staat in de inhoudsopgave vlak vóór hoofdstuk 2?
- ✅ A. hoofdstuk 1
- ▫️ B. hoofdstuk 3
- ▫️ C. het register
- ▫️ D. het laatste hoofdstuk
wrongHints: [null,"Hoofdstuk 3 komt juist ná 2.","Het register staat niet in de hoofdstukken-rij.","Dat staat helemaal aan het eind."]
niveaus: {"basis":"Vóór hoofdstuk 2 komt hoofdstuk 1.","simpeler":"Welk hoofdstuk komt net vóór 2?","nogSimpeler":"1, 2, 3 — wat komt vóór de 2?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 36. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 7)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: Inhoudsopgave: 1. Het bos ... 5 2. De zee ... 19 3. De bergen ... 34 4. De woestijn ... 52 Op welke pagina **eindigt** hoofdstuk 2?
- ✅ A. pagina 33
- ▫️ B. pagina 34
- ▫️ C. pagina 19
- ▫️ D. pagina 20
wrongHints: [null,"Kijk op welke pagina hoofdstuk 3 begint. Hoort die pagina nog bij hoofdstuk 2?","Op die pagina begint het hoofdstuk juist.","Pagina 20 is pas de tweede bladzijde van hoofdstuk 2. Waar begint hoofdstuk 3?"]
niveaus: {"basis":"Hoofdstuk 2 loopt van pagina 19 tot en met 33.","simpeler":"Waar begint hoofdstuk 3? Hoofdstuk 2 stopt één pagina eerder.","nogSimpeler":"34 − 1 = ?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 37. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 8)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: Inhoudsopgave: 1. Het bos ... 5 2. De zee ... 19 3. De bergen ... 34 4. De woestijn ... 52 Je leest op pagina 40. In welk hoofdstuk ben je?
- ✅ A. De bergen
- ▫️ B. De woestijn
- ▫️ C. De zee
- ▫️ D. Het bos
wrongHints: [null,"Begint dat hoofdstuk al vóór pagina 40?","De zee begint op 19. Maar begint er daarna nog een hoofdstuk vóór pagina 40?","Het bos begint op 5. Beginnen er daarna nog hoofdstukken vóór pagina 40?"]
niveaus: {"basis":"Pagina 40 ligt tussen 34 en 52 → De bergen.","simpeler":"Welk hoofdstuk begint vóór pagina 40, terwijl het volgende pas ná 40 begint?","nogSimpeler":"Ligt 40 tussen 34 en 52?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 38. Inhoudsopgave & register gebruiken (inhoudsopgave-register-po stap 1 vraag 9)
_Bestand: src/learnPaths/inhoudsopgaveRegisterPo.js · stap-titel: De inhoudsopgave_
Vraag: Inhoudsopgave: 1. Het bos ... 5 2. De zee ... 19 3. De bergen ... 34 4. De woestijn ... 52 Je zit op pagina 20 en wilt over de woestijn lezen. Wat doe je?
- ✅ A. vooruit bladeren naar pagina 52
- ▫️ B. terug bladeren naar pagina 4
- ▫️ C. terug bladeren naar pagina 5
- ▫️ D. vooruit bladeren naar pagina 34
wrongHints: [null,"De 4 is het nummer van het hoofdstuk.","Op pagina 5 begint het eerste hoofdstuk. Welk hoofdstuk zoek jij?","Op pagina 34 begint 'De bergen'. Welk getal staat er achter 'De woestijn'?"]
niveaus: {"basis":"De woestijn begint op pagina 52 → vooruit bladeren.","simpeler":"Welk getal is de pagina: 4 of 52?","nogSimpeler":"Is 52 verder in het boek dan 20?"}
stap-uitleg (ingekort): De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…). Voorbeeld: | Hoofdstuk | Pagina | |---|---| | 1. Planten | 6 | | 2. Dieren | 24 | | 3. Het weer | 40 | Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.

## 39. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 1)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Wat is een plattegrond?
- ✅ A. een tekening van bovenaf
- ▫️ B. een foto van de voorkant
- ▫️ C. een tekening van de zijkant
- ▫️ D. een schilderij van een straat
wrongHints: [null,"Kun je op een foto van de voorkant zien hoe de kamers achter elkaar liggen?","Zie je van de zijkant wat er achter de muren ligt?","Zie je op een schilderij precies hoe alles naast elkaar ligt?"]
niveaus: {"basis":"Een plattegrond is een tekening van bovenaf van een gebouw/gebied.","simpeler":"Kijk je bij een plattegrond van voren of van boven?","nogSimpeler":"Is een plattegrond een tekening van bovenaf?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 40. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 2)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Vanaf welke kant bekijk je een plattegrond?
- ✅ A. van bovenaf
- ▫️ B. van de zijkant
- ▫️ C. van voren
- ▫️ D. van onderen
wrongHints: [null,"Van de zijkant zie je niet hoe alles ligt.","Van voren is een foto, geen plattegrond.","Van onderen kun je niet kijken."]
niveaus: {"basis":"Een plattegrond bekijk je van bovenaf.","simpeler":"Alsof je met een drone erboven hangt — welke kant is dat?","nogSimpeler":"Van boven of van de zijkant?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 41. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 3)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Waarvoor gebruik je een plattegrond?
- ✅ A. om te zien waar iets ligt
- ▫️ B. om te zien hoe een gebouw er van buiten uitziet
- ▫️ C. om te zien wanneer iets open is
- ▫️ D. om te lezen wat er in een gebouw gebeurt
wrongHints: [null,"Zie je op een plattegrond de buitenkant, of hoe het binnen is ingedeeld?","Staan er tijden op een plattegrond, of plekken?","Vertelt een plattegrond een verhaal, of laat hij iets anders zien?"]
niveaus: {"basis":"Een plattegrond helpt je de weg vinden.","simpeler":"Gebruik je een plattegrond om iets te vinden of om de tijd te weten?","nogSimpeler":"Helpt een plattegrond je de weg te vinden?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 42. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 4)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Op een plattegrond staat een stip met 'je bent hier'. Wat betekent dat?
- ✅ A. waar jij nu staat
- ▫️ B. waar de uitgang is
- ▫️ C. waar het toilet is
- ▫️ D. waar je naartoe moet
wrongHints: [null,"De uitgang heeft een eigen teken.","Het toilet heeft een eigen symbool.","Het is je startplek, niet je doel."]
niveaus: {"basis":"De stip toont waar jij nu bent.","simpeler":"'Je bent hier' = jouw eigen plek of je doel?","nogSimpeler":"Waar sta jij volgens de stip?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 43. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 5)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Wat kun je doen met een plattegrond van een dierentuin?
- ✅ A. zien waar de dieren wonen
- ▫️ B. zien hoe de dieren eruitzien
- ▫️ C. weten hoe oud de dieren zijn
- ▫️ D. zien wanneer de dieren eten krijgen
wrongHints: [null,"Staan er foto's van de dieren op, of vooral plekken?","Leeftijden staan niet op een plattegrond.","Is dat een plek op de kaart, of een tijd?"]
niveaus: {"basis":"Een plattegrond laat zien waar alles ligt.","simpeler":"Wat laat een plattegrond zien: waar dingen zijn of hoe oud dieren zijn?","nogSimpeler":"Zie je op een plattegrond waar de dieren liggen?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 44. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 6)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Een plattegrond lijkt nog het meest op...
- ✅ A. een foto recht van bovenaf
- ▫️ B. een foto van de voorkant
- ▫️ C. een tekening van opzij
- ▫️ D. een foto van heel dichtbij
wrongHints: [null,"Zie je op zo'n foto hoe de kamers achter elkaar liggen?","Zie je van opzij hoe alles naast elkaar ligt?","Zie je dan het hele gebouw, of maar een klein stukje?"]
niveaus: {"basis":"Een plattegrond is een bovenaanzicht, als een drone-foto.","simpeler":"Vanaf welke kant kijk je: van boven of van voren?","nogSimpeler":"Is een plattegrond van bovenaf?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 45. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 7)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Plattegrond van de bibliotheek: Links is de ingang met de stip 'je bent hier'. Vlak naast de ingang is de balie. In het midden staan de boekenkasten. Helemaal rechts zijn de toiletten. Waar sta je als je naar deze plattegrond kijkt?
- ✅ A. bij de ingang
- ▫️ B. bij de balie
- ▫️ C. bij de boekenkasten
- ▫️ D. bij de toiletten
wrongHints: [null,"Waar staat de stip precies?",null,null]
niveaus: {"basis":"Je staat bij de ingang, want daar is de stip.","simpeler":"Waar staat 'je bent hier'?","nogSimpeler":"Staat de stip bij de ingang?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 46. Plattegrond & legenda lezen (plattegrond-legenda-po stap 1 vraag 8)
_Bestand: src/learnPaths/plattegrondLegendaPo.js · stap-titel: Wat is een plattegrond?_
Vraag: Plattegrond van de bibliotheek: Links is de ingang met de stip 'je bent hier'. Vlak naast de ingang is de balie. In het midden staan de boekenkasten. Helemaal rechts zijn de toiletten. Wat ligt het verst van jouw startplek?
- ✅ A. de toiletten
- ▫️ B. de boekenkasten
- ▫️ C. de balie
- ▫️ D. de ingang
wrongHints: [null,null,"Die ligt vlak naast de ingang.",null]
niveaus: {"basis":"Helemaal rechts = het verst van links → de toiletten.","simpeler":"Je start links. Wat ligt helemaal aan de andere kant?","nogSimpeler":"Wat staat er helemaal rechts?"}
stap-uitleg (ingekort): Een **plattegrond** is een tekening van een gebouw of gebied, gezien **van bovenaf** (alsof je er met een drone boven hangt). Je gebruikt een plattegrond om de **weg te vinden** en te zien **waar iets is**: de ingang, de toiletten, een winkel, de dieren in een dierentuin. Op een plattegrond staat vaak een **'je bent hier'-stip**: dat is jouw startplek. Vanaf daar bepaal je welke kant je op moet.

## 47. Alfabetisch opzoeken & woordenboek (alfabet-woordenboek-po stap 2 vraag 1)
_Bestand: src/learnPaths/alfabetWoordenboekPo.js · stap-titel: Zoeken op de eerste letter_
Vraag: Bij welke letter staat het woord 'fiets' in het woordenboek?
- ✅ A. F
- ▫️ B. V
- ▫️ C. S
- ▫️ D. I
wrongHints: [null,"Je zoekt op de geschréven beginletter, en dat is een f.","De s staat aan het eind van 'fiets', niet vooraan.","De i is de tweede letter van 'fiets', niet de eerste."]
niveaus: {"basis":"'fiets' begint met f → zoek bij F.","simpeler":"Met welke letter begint 'fiets'?","nogSimpeler":"Wat is de eerste letter van 'fiets'?"}
stap-uitleg (ingekort): Om een woord op te zoeken, kijk je eerst naar de **eerste letter**. Daar zoek je het deel van het woordenboek op. Het woordenboek is ruwweg verdeeld: • **Vooraan**: A, B, C, D, E… • **Midden**: K, L, M, N… • **Achteraan**: S, T, U, V, W, X, Y, Z. Zo hoef je niet alle bladzijden door: een woord met **W** zoek je meteen achteraan.

## 48. Alfabetisch opzoeken & woordenboek (alfabet-woordenboek-po stap 2 vraag 2)
_Bestand: src/learnPaths/alfabetWoordenboekPo.js · stap-titel: Zoeken op de eerste letter_
Vraag: Welk woord vind je het eerst in het woordenboek?
- ✅ A. appel
- ▫️ B. olifant
- ▫️ C. tijger
- ▫️ D. wolk
wrongHints: [null,"O staat verder in het alfabet.","T staat achteraan.","W staat helemaal achteraan."]
niveaus: {"basis":"'appel' begint met a → vooraan in het woordenboek.","simpeler":"Welke beginletter komt het vroegst?","nogSimpeler":"a, o, t of w — welke eerst?"}
stap-uitleg (ingekort): Om een woord op te zoeken, kijk je eerst naar de **eerste letter**. Daar zoek je het deel van het woordenboek op. Het woordenboek is ruwweg verdeeld: • **Vooraan**: A, B, C, D, E… • **Midden**: K, L, M, N… • **Achteraan**: S, T, U, V, W, X, Y, Z. Zo hoef je niet alle bladzijden door: een woord met **W** zoek je meteen achteraan.

## 49. Alfabetisch opzoeken & woordenboek (alfabet-woordenboek-po stap 2 vraag 3)
_Bestand: src/learnPaths/alfabetWoordenboekPo.js · stap-titel: Zoeken op de eerste letter_
Vraag: Je zoekt het woord 'wolk'. Waar sla je het woordenboek het best open?
- ✅ A. achteraan
- ▫️ B. vooraan
- ▫️ C. precies in het midden
- ▫️ D. net vóór het midden
wrongHints: [null,"Vooraan staan de A's en B's, niet de W.","Welke letters staan rond het midden van het woordenboek? Hoort de W daarbij?","Welke letters staan in het eerste deel van het boek? Zit de W daartussen?"]
niveaus: {"basis":"W staat achteraan in het alfabet → achteraan zoeken.","simpeler":"Komt de W vooraan of achteraan in het alfabet?","nogSimpeler":"Waar staat de W: bij het begin of het eind?"}
stap-uitleg (ingekort): Om een woord op te zoeken, kijk je eerst naar de **eerste letter**. Daar zoek je het deel van het woordenboek op. Het woordenboek is ruwweg verdeeld: • **Vooraan**: A, B, C, D, E… • **Midden**: K, L, M, N… • **Achteraan**: S, T, U, V, W, X, Y, Z. Zo hoef je niet alle bladzijden door: een woord met **W** zoek je meteen achteraan.

## 50. Alfabetisch opzoeken & woordenboek (alfabet-woordenboek-po stap 2 vraag 4)
_Bestand: src/learnPaths/alfabetWoordenboekPo.js · stap-titel: Zoeken op de eerste letter_
Vraag: Tussen welke twee letters zoek je het woord 'hond'?
- ✅ A. tussen G en I
- ▫️ B. tussen A en C
- ▫️ C. tussen S en U
- ▫️ D. tussen W en Y
wrongHints: [null,"Dat is het begin van het alfabet; H zit verder.","Dat is achteraan.","Dat is helemaal achteraan."]
niveaus: {"basis":"H zit tussen G en I.","simpeler":"Welke letters staan vlak vóór en ná de H?","nogSimpeler":"G, H, I — waar zit de H?"}
stap-uitleg (ingekort): Om een woord op te zoeken, kijk je eerst naar de **eerste letter**. Daar zoek je het deel van het woordenboek op. Het woordenboek is ruwweg verdeeld: • **Vooraan**: A, B, C, D, E… • **Midden**: K, L, M, N… • **Achteraan**: S, T, U, V, W, X, Y, Z. Zo hoef je niet alle bladzijden door: een woord met **W** zoek je meteen achteraan.

## 51. Alfabetisch opzoeken & woordenboek (alfabet-woordenboek-po stap 2 vraag 5)
_Bestand: src/learnPaths/alfabetWoordenboekPo.js · stap-titel: Zoeken op de eerste letter_
Vraag: Bij welke letter zoek je het woord 'ziekenhuis'?
- ▫️ A. S
- ✅ B. Z
- ▫️ C. C
- ▫️ D. H
wrongHints: ["Het begint niet met een s, maar met z.",null,"Hoor je een s-klank? Kijk naar de letter die je echt opschrijft.","De h zit midden in het woord, niet vooraan."]
niveaus: {"basis":"'ziekenhuis' begint met z → zoek bij Z.","simpeler":"Met welke letter begint 'ziekenhuis'?","nogSimpeler":"Wat is de eerste letter van 'ziekenhuis'?"}
stap-uitleg (ingekort): Om een woord op te zoeken, kijk je eerst naar de **eerste letter**. Daar zoek je het deel van het woordenboek op. Het woordenboek is ruwweg verdeeld: • **Vooraan**: A, B, C, D, E… • **Midden**: K, L, M, N… • **Achteraan**: S, T, U, V, W, X, Y, Z. Zo hoef je niet alle bladzijden door: een woord met **W** zoek je meteen achteraan.

## 52. Alfabetisch opzoeken & woordenboek (alfabet-woordenboek-po stap 2 vraag 6)
_Bestand: src/learnPaths/alfabetWoordenboekPo.js · stap-titel: Zoeken op de eerste letter_
Vraag: Welk woord vind je het laatst in het woordenboek?
- ▫️ A. kabel
- ▫️ B. raket
- ▫️ C. vlieger
- ✅ D. zebra
wrongHints: ["k staat in het midden.","r staat verderop, maar niet het laatst.","v komt nog vóór z.",null]
niveaus: {"basis":"'zebra' begint met z → helemaal achteraan.","simpeler":"Welke beginletter komt het laatst: k, r, v of z?","nogSimpeler":"Welk woord begint met de z?"}
stap-uitleg (ingekort): Om een woord op te zoeken, kijk je eerst naar de **eerste letter**. Daar zoek je het deel van het woordenboek op. Het woordenboek is ruwweg verdeeld: • **Vooraan**: A, B, C, D, E… • **Midden**: K, L, M, N… • **Achteraan**: S, T, U, V, W, X, Y, Z. Zo hoef je niet alle bladzijden door: een woord met **W** zoek je meteen achteraan.

## 53. Alfabetisch opzoeken & woordenboek (alfabet-woordenboek-po stap 2 vraag 7)
_Bestand: src/learnPaths/alfabetWoordenboekPo.js · stap-titel: Zoeken op de eerste letter_
Vraag: Welke twee woorden zoek je bij dezelfde letter in het woordenboek?
- ✅ A. kaas en kers
- ▫️ B. kaas en cola
- ▫️ C. cent en sok
- ▫️ D. vis en fles
wrongHints: [null,"Luister niet naar de klank, maar kijk hoe de woorden geschreven worden.",null,null]
niveaus: {"basis":"'kaas' en 'kers' beginnen allebei met k, dus die staan bij dezelfde letter.","simpeler":"Schrijf van elk woord de eerste letter op. Welke twee zijn gelijk?","nogSimpeler":"Met welke letter begint 'kaas'? En 'kers'?"}
stap-uitleg (ingekort): Om een woord op te zoeken, kijk je eerst naar de **eerste letter**. Daar zoek je het deel van het woordenboek op. Het woordenboek is ruwweg verdeeld: • **Vooraan**: A, B, C, D, E… • **Midden**: K, L, M, N… • **Achteraan**: S, T, U, V, W, X, Y, Z. Zo hoef je niet alle bladzijden door: een woord met **W** zoek je meteen achteraan.

## 54. Alfabetisch opzoeken & woordenboek (alfabet-woordenboek-po stap 2 vraag 8)
_Bestand: src/learnPaths/alfabetWoordenboekPo.js · stap-titel: Zoeken op de eerste letter_
Vraag: Welk woord vind je in het middelste deel van het woordenboek?
- ✅ A. molen
- ▫️ B. dak
- ▫️ C. taart
- ▫️ D. zeep
wrongHints: [null,"De D staat vooraan in het alfabet.",null,null]
niveaus: {"basis":"'molen' begint met m, en de M staat in het midden van het woordenboek.","simpeler":"Welke beginletter hoort bij het midden: d, m, t of z?","nogSimpeler":"Staat de M vooraan, in het midden of achteraan?"}
stap-uitleg (ingekort): Om een woord op te zoeken, kijk je eerst naar de **eerste letter**. Daar zoek je het deel van het woordenboek op. Het woordenboek is ruwweg verdeeld: • **Vooraan**: A, B, C, D, E… • **Midden**: K, L, M, N… • **Achteraan**: S, T, U, V, W, X, Y, Z. Zo hoef je niet alle bladzijden door: een woord met **W** zoek je meteen achteraan.

## 55. Alfabetisch opzoeken & woordenboek (alfabet-woordenboek-po stap 2 vraag 9)
_Bestand: src/learnPaths/alfabetWoordenboekPo.js · stap-titel: Zoeken op de eerste letter_
Vraag: Je slaat het woordenboek open bij woorden met een M. Je zoekt het woord 'vork'. Welke kant blader je op?
- ✅ A. verder naar achteren
- ▫️ B. terug naar voren
- ▫️ C. blijven zoeken bij de M
- ▫️ D. eerst terug naar de A
wrongHints: [null,"Komt de V in het alfabet vóór of ná de M?","Begint 'vork' met een m?","Moet je echt helemaal opnieuw beginnen? Komt de V vóór of ná de M?"]
niveaus: {"basis":"De V komt ná de M, dus je bladert naar achteren.","simpeler":"Staat de V verder in het alfabet dan de M, of eerder?","nogSimpeler":"Wat komt later: M of V?"}
stap-uitleg (ingekort): Om een woord op te zoeken, kijk je eerst naar de **eerste letter**. Daar zoek je het deel van het woordenboek op. Het woordenboek is ruwweg verdeeld: • **Vooraan**: A, B, C, D, E… • **Midden**: K, L, M, N… • **Achteraan**: S, T, U, V, W, X, Y, Z. Zo hoef je niet alle bladzijden door: een woord met **W** zoek je meteen achteraan.

## 56. Alfabetisch opzoeken & woordenboek (alfabet-woordenboek-po stap 2 vraag 10)
_Bestand: src/learnPaths/alfabetWoordenboekPo.js · stap-titel: Zoeken op de eerste letter_
Vraag: Bij welke letter zoek je het woord 'circus' in het woordenboek?
- ✅ A. C
- ▫️ B. S
- ▫️ C. K
- ▫️ D. I
wrongHints: [null,"Het klinkt misschien zo, maar kijk naar de geschreven eerste letter.",null,"De i is de tweede letter van het woord."]
niveaus: {"basis":"'circus' begint met c, dus je zoekt bij de C.","simpeler":"Schrijf 'circus' op. Wat is de eerste letter?","nogSimpeler":"Wat is de eerste letter van 'circus'?"}
stap-uitleg (ingekort): Om een woord op te zoeken, kijk je eerst naar de **eerste letter**. Daar zoek je het deel van het woordenboek op. Het woordenboek is ruwweg verdeeld: • **Vooraan**: A, B, C, D, E… • **Midden**: K, L, M, N… • **Achteraan**: S, T, U, V, W, X, Y, Z. Zo hoef je niet alle bladzijden door: een woord met **W** zoek je meteen achteraan.

## 57. Betrouwbaarheid van bronnen (betrouwbaarheid-bronnen-po stap 2 vraag 1)
_Bestand: src/learnPaths/betrouwbaarheidBronnenPo.js · stap-titel: Feit, mening of reclame?_
Vraag: Een website zegt: 'Ons product is het allerbeste ter wereld!' Is dat betrouwbare informatie?
- ✅ A. nee, het is reclame
- ▫️ B. ja, het staat op internet
- ▫️ C. ja, want het klinkt zeker
- ▫️ D. ja, het is een feit
wrongHints: [null,"Niet alles op internet is waar.","Zeker klinken maakt iets niet waar.","'Allerbeste' kun je niet bewijzen — geen feit."]
niveaus: {"basis":"'Het allerbeste!' van de verkoper zelf = reclame.","simpeler":"Wil deze bron je iets verkopen? Dan is het reclame.","nogSimpeler":"Is 'wij zijn de beste' een feit of reclame?"}
stap-uitleg (ingekort): Betrouwbare informatie geeft vooral **feiten** die je kunt controleren. Pas op met: • **Meningen** — wat iemand vindt (mooi, het beste). Niet per se waar voor iedereen. • **Reclame** — wil je iets **verkopen**. Gebruikt overdreven woorden ('de allerbeste!'). Een betrouwbare bron probeert je niet iets aan te smeren en gebruikt geen overdreven taal, maar geeft nuchtere feiten met uitleg.

## 58. Betrouwbaarheid van bronnen (betrouwbaarheid-bronnen-po stap 2 vraag 2)
_Bestand: src/learnPaths/betrouwbaarheidBronnenPo.js · stap-titel: Feit, mening of reclame?_
Vraag: Betrouwbare informatie geeft vooral...
- ✅ A. feiten die je kunt controleren
- ▫️ B. woorden die alles overdrijven
- ▫️ C. meningen van één persoon
- ▫️ D. grappige plaatjes en filmpjes
wrongHints: [null,"Overdreven woorden horen bij reclame.","Meningen zijn niet voor iedereen waar.","Plaatjes zeggen niets over betrouwbaarheid."]
niveaus: {"basis":"Betrouwbare info = controleerbare feiten.","simpeler":"Geeft een goede bron feiten of overdreven reclame?","nogSimpeler":"Wat is betrouwbaarder: een feit of een mening?"}
stap-uitleg (ingekort): Betrouwbare informatie geeft vooral **feiten** die je kunt controleren. Pas op met: • **Meningen** — wat iemand vindt (mooi, het beste). Niet per se waar voor iedereen. • **Reclame** — wil je iets **verkopen**. Gebruikt overdreven woorden ('de allerbeste!'). Een betrouwbare bron probeert je niet iets aan te smeren en gebruikt geen overdreven taal, maar geeft nuchtere feiten met uitleg.

## 59. Betrouwbaarheid van bronnen (betrouwbaarheid-bronnen-po stap 2 vraag 3) ✔ al goedgekeurd
_Bestand: src/learnPaths/betrouwbaarheidBronnenPo.js · stap-titel: Feit, mening of reclame?_
Vraag: Hoe herken je dat iets reclame is?
- ✅ A. het wil je iets laten kopen
- ▫️ B. het noemt een datum van kort geleden
- ▫️ C. het noemt de naam van de schrijver
- ▫️ D. het geeft een lijst met bronnen
wrongHints: [null,"Een recente datum hoort juist bij betrouwbare info.","Een schrijver met naam maakt iets juist betrouwbaarder.","Bronnen noemen is juist een goed teken."]
niveaus: {"basis":"Reclame herken je doordat het iets wil verkopen.","simpeler":"Wat wil reclame: je informeren of je iets laten kopen?","nogSimpeler":"Wil reclame dat je koopt?"}
stap-uitleg (ingekort): Betrouwbare informatie geeft vooral **feiten** die je kunt controleren. Pas op met: • **Meningen** — wat iemand vindt (mooi, het beste). Niet per se waar voor iedereen. • **Reclame** — wil je iets **verkopen**. Gebruikt overdreven woorden ('de allerbeste!'). Een betrouwbare bron probeert je niet iets aan te smeren en gebruikt geen overdreven taal, maar geeft nuchtere feiten met uitleg.

## 60. Betrouwbaarheid van bronnen (betrouwbaarheid-bronnen-po stap 2 vraag 4)
_Bestand: src/learnPaths/betrouwbaarheidBronnenPo.js · stap-titel: Feit, mening of reclame?_
Vraag: Welke zin komt het meest uit een betrouwbare informatieve bron?
- ✅ A. De maan draait in ongeveer 27 dagen om de aarde.
- ▫️ B. Onze maankijker is de allerbeste van de wereld!
- ▫️ C. De maan is het mooiste wat je 's nachts ziet.
- ▫️ D. Koop nu onze maankijker met korting!
wrongHints: [null,"'Allerbeste' is reclame.","'Mooiste' is een mening.","Dat is reclame."]
niveaus: {"basis":"Het controleerbare feit over de maan is de betrouwbare zin.","simpeler":"Welke zin is een feit en geen reclame of mening?","nogSimpeler":"Welke zin kun je opzoeken/controleren?"}
stap-uitleg (ingekort): Betrouwbare informatie geeft vooral **feiten** die je kunt controleren. Pas op met: • **Meningen** — wat iemand vindt (mooi, het beste). Niet per se waar voor iedereen. • **Reclame** — wil je iets **verkopen**. Gebruikt overdreven woorden ('de allerbeste!'). Een betrouwbare bron probeert je niet iets aan te smeren en gebruikt geen overdreven taal, maar geeft nuchtere feiten met uitleg.

