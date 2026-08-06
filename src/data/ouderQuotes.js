// 💬 Echte quotes voor sociaal bewijs op de homepage (Mark 4 aug 2026).
//
// SPELREGELS (niet onderhandelbaar):
// 1. Alleen ECHTE uitspraken van echte mensen — nooit verzonnen of "in de
//    geest van". Een lege lijst is beter dan een nep-quote.
// 2. Alleen plaatsen MET expliciete (schriftelijke) toestemming van de
//    persoon — ook voor naam + rol-vermelding. Zie de concept-vraagmails
//    die 4 aug voor Mark zijn klaargezet (Inez/Leergeld, Schaake/VB
//    Smallingerland, Nelissen/VB Purmerend).
// 3. Rol-omschrijving eerlijk en herkenbaar houden ("moeder van een kind in
//    groep 8", "Stichting Leergeld Haarlemmermeer") — geen opgeblazen titels.
//
// Zodra een toestemming binnen is: quote hieronder toevoegen en de sectie
// op de homepage verschijnt vanzelf (HomePage.jsx rendert alleen bij
// OUDER_QUOTES.length > 0). Daarna ook overwegen op de
// doorstroomtoets-landingspagina's (public/*.html) + Review/JSON-LD.
//
// Formaat: { tekst: "…", naam: "Voornaam", rol: "moeder, groep 8" }
//
// Toestemmingen 6 aug 2026 (schriftelijk per mail, exact deze formuleringen
// + naamsvermeldingen — niet herformuleren zonder nieuwe toestemming):
// - Inez de Ruiter 10:07 "Dat mag, hoor."
// - R. Schaake 11:18 "Prima om op de website te zetten!"
// - Amber van Leeuwen (VB Rotterdam) 11:33 "Tuurlijk mag je die zin gebruiken."

export const OUDER_QUOTES = [
  {
    tekst: "Wat fijn dat je hiermee gezinnen helpt die dat goed kunnen gebruiken.",
    naam: "Inez",
    rol: "Stichting Leergeld Haarlemmermeer",
  },
  {
    tekst: "Een mooi initiatief! Onze focus is voedsel, maar mooie initiatieven willen wij wel steunen.",
    naam: "R. Schaake",
    rol: "Voedselbank Smallingerland",
  },
  {
    tekst: "Wat een leuk initiatief! We zien er zeker een meerwaarde in om de app te promoten.",
    naam: "Voedselbank Rotterdam",
    rol: "",
  },
];
