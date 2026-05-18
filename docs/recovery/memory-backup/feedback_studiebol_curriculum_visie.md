---
name: Studiebol — uitwisselbaarheid toets ↔ leerpad ↔ curriculum
description: Mark's visie voor het Studiebol-leersysteem: vrijuit kunnen schakelen tussen toets-vraag, uitleg-leerpad en doorlopend curriculum, ipv geïsoleerde features.
type: feedback
originSessionId: 82c346ec-655b-4577-a515-24689d3060b1
---
Bij Studiebol moet **toets, leerpad en curriculum één geïntegreerd systeem** worden — geen losse features. Drie bewegingen die de leerling moet kunnen maken:

1. **Toets-vraag → uitleg**: bij élke vraag tijdens een toets moet er een knop "Snap ik niet" zijn die naar de **specifieke leerpad-stap** springt die deze vraag uitlegt (niet generiek naar stap 0).
2. **Leerpad-stap → toets**: vanuit een uitleg moet er een knop naar een toets over dat specifieke onderwerp zijn ("Test wat je geleerd hebt").
3. **Curriculum-modus**: voor leerlingen die de basis nog niet hebben, moet het systeem ze automatisch door **alle onderwerpen** in goede volgorde leiden — eerste tot laatste.

**Why:** Mark's volledige product-visie. Quiz alleen = testen, leerpad alleen = saaie cursus. Combineer ze en je krijgt iets dat **echt leert**: leerling stuit op wat hij niet weet, klikt door naar uitleg op precies de juiste plek, oefent meteen na, en kan met één keuze starten met systematische opbouw als de basis ontbreekt.

**How to apply:**
- Bij toevoegen van quiz-vragen: zet er een `topicId` op die verwijst naar een leerpad-stap (`parabolen.13`, `ruimtemeetkunde.20` etc.). Dan kan `findLearnPathForQuestion` direct naar de juiste stap springen ipv keyword-matching.
- Bij voltooien van een leerpad-stap of -hoofdstuk: bied een mini-toets aan (3-5 vragen specifiek over dit topic, via AI of een gefilterde `ai_question_pool` query op `topic`).
- Voor curriculum-modus: bouw een leerpad-volgorde per vak (bv. wiskunde klas 2: H8 → H9 → H10 → ...). Een nieuwe leerling die kiest voor "begeleid" doorloopt automatisch alle leerpaden + tussenliggende toetsen.
- Beslissingen die deze richting raken (homepage UX, tabel-schema's voor `progress`, `learn_progress`, `ai_question_pool`): kies wat de **integratie** versterkt. Geen aparte tabel per feature als één gedeelde structuur werkt.
