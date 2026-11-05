// 🔥 Opwarmset op het ere-scherm (5 nov 2026, gebruiksanalyse punt 3 "de eerste 5 vragen").
// Meting 28 dagen: 105 apparaten stopten na precies één vraag, 85 daarvan kwamen van het
// ere-scherm — dat stelde één opwarmvraag en stuurde daarna naar de startpagina. Nu vijf korte
// vragen achter elkaar, zonder groep te kennen (het ere-scherm weet de groep nog niet), zonder
// schoolwoorden, afwisselend taal en rekenen. Zelf geschreven, niet uit een toets overgenomen.
// Puur bestand (geen imports): de test eerOpwarmVragen.test.js controleert de vorm.
export const EER_OPWARM = {
  nl: [
    { q: "Welk woord hoort er niet bij?", opties: ["appel", "peer", "stoel", "banaan"], goed: 2, hint: "Drie woorden kun je eten. Welke niet?", uitleg: "Appel, peer en banaan zijn fruit. Een stoel niet." },
    { q: "Hoeveel is 6 + 5?", opties: ["10", "11", "12", "9"], goed: 1, hint: "Begin bij 6 en tel er 5 bij: 7, 8, 9, …", uitleg: "6 + 5 = 11." },
    { q: "Wat is het tegenovergestelde van 'groot'?", opties: ["lang", "klein", "zwaar", "breed"], goed: 1, hint: "Een olifant is groot. Een muis is …?", uitleg: "Groot en klein zijn tegenovergestelden." },
    { q: "Welke dag komt na woensdag?", opties: ["dinsdag", "vrijdag", "donderdag", "zaterdag"], goed: 2, hint: "Maandag, dinsdag, woensdag, …", uitleg: "Na woensdag komt donderdag." },
    { q: "Welk getal is het grootst?", opties: ["48", "84", "18", "81"], goed: 1, hint: "Kijk eerst naar het eerste cijfer: 4, 8, 1 of 8. Daarna naar het tweede.", uitleg: "84 is het grootst: 8 tientallen en nog 4." },
  ],
  en: [
    { q: "Which word does not belong?", opties: ["apple", "pear", "chair", "banana"], goed: 2, hint: "You can eat three of them. Which one not?", uitleg: "Apple, pear and banana are fruit. A chair is not." },
    { q: "What is 6 + 5?", opties: ["10", "11", "12", "9"], goed: 1, hint: "Start at 6 and count 5 more: 7, 8, 9, …", uitleg: "6 + 5 = 11." },
    { q: "What is the opposite of 'big'?", opties: ["long", "small", "heavy", "wide"], goed: 1, hint: "An elephant is big. A mouse is …?", uitleg: "Big and small are opposites." },
    { q: "Which day comes after Wednesday?", opties: ["Tuesday", "Friday", "Thursday", "Saturday"], goed: 2, hint: "Monday, Tuesday, Wednesday, …", uitleg: "After Wednesday comes Thursday." },
    { q: "Which number is the biggest?", opties: ["48", "84", "18", "81"], goed: 1, hint: "Look at the first digit first: 4, 8, 1 or 8. Then at the second.", uitleg: "84 is the biggest: 8 tens and 4 more." },
  ],
};
