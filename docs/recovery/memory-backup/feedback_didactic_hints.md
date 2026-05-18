---
name: Didactiek — wrongHints geven richting, geen antwoord
description: Bij hints/feedback op fout antwoord: wijs op het denkwerk dat ontbreekt, geef het antwoord niet weg. Geldt voor leerpaden, tutorials, fouten-uitleg in quizzes.
type: feedback
originSessionId: 82c346ec-655b-4577-a515-24689d3060b1
---
Bij feedback op een fout antwoord NIET het juiste antwoord direct in de hint zetten ('Dus dal', '...is dus 5', 'antwoord is X'). Schrijf hints als **korte vragen of denkprikkels** die wijzen op de stap die ontbrak. De leerling moet zelf de laatste stap zetten.

**Why:** Mark zag in stap 2 van het parabolen-leerpad een hint die zei "Het getal 5 staat positief vóór x² (geen min). Dus dal." en wees terecht op het probleem: dit is voorzeggen, geen leren. Bij Studiebol gaat het Mark expliciet om het echte leerproces, niet alleen toetsen — dus hints die het antwoord weggeven schaden het hele doel van de leerpad-feature.

**How to apply:** Bij elke wrongHint check ik nu: kan een leerling deze tekst lezen en daarna direct het juiste antwoord aanklikken zonder zelf te denken? Zo ja → herschrijven. Goede vorm: "X zou betekenen dat... — klopt dat?" of "Kijk nog eens naar Y — wat zie je daar?". Geldt voor: leerpaden in `src/learnPaths/`, ook potentieel voor `wrongHints` in toekomstige quiz-flows.
