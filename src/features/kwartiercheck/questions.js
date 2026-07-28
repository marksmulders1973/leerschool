// Diagnostische vragen voor de Kwartiercheck.
// Elke vraag heeft: concept (uit conceptMapping), niveau (1=makkelijk, 2=midden, 3=moeilijk),
// vraag, opties (4 stuks), correct (0-based index).
// Niveau 1: basiskennis. Niveau 2: toepassen. Niveau 3: complexe toepassing.

export const KWARTIERCHECK_VRAGEN = [

  // ─── TAFELS ────────────────────────────────────────────────────
  {
    id: "tafels-1a", concept: "tafels", niveau: 1,
    vraag: "Wat is 6 × 7?",
    opties: ["36", "42", "48", "56"],
    correct: 1,
  },
  {
    id: "tafels-1b", concept: "tafels", niveau: 1,
    vraag: "Wat is 8 × 9?",
    opties: ["63", "72", "81", "64"],
    correct: 1,
  },
  {
    id: "tafels-2a", concept: "tafels", niveau: 2,
    vraag: "Een doos heeft 6 rijen van 8 appels. Hoeveel appels zijn dat in totaal?",
    opties: ["42", "48", "54", "56"],
    correct: 1,
  },
  {
    id: "tafels-2b", concept: "tafels", niveau: 2,
    vraag: "24 leerlingen gaan in groepjes van 4. Hoeveel groepjes zijn er?",
    opties: ["4", "6", "8", "10"],
    correct: 1,
  },
  {
    id: "tafels-3a", concept: "tafels", niveau: 3,
    vraag: "Een bakker maakt elke dag 7 broden in 9 soorten. In een werkweek (5 dagen) hoeveel broden maakt hij?",
    opties: ["315", "350", "360", "270"],
    correct: 0,
  },

  // ─── BREUKEN ───────────────────────────────────────────────────
  {
    id: "breuken-1a", concept: "breuken", niveau: 1,
    vraag: "Welke breuk is het grootst?",
    opties: ["1/2", "1/4", "1/3", "1/6"],
    correct: 0,
  },
  {
    id: "breuken-1b", concept: "breuken", niveau: 1,
    vraag: "Hoeveel is 1/2 van 20?",
    opties: ["5", "8", "10", "12"],
    correct: 2,
  },
  {
    id: "breuken-2a", concept: "breuken", niveau: 2,
    vraag: "Een pizza is verdeeld in 8 stukken. Tom eet 3 stukken. Welk deel eet Tom?",
    opties: ["3/5", "3/8", "5/8", "1/3"],
    correct: 1,
  },
  {
    id: "breuken-2b", concept: "breuken", niveau: 2,
    vraag: "1/4 + 2/4 = ?",
    opties: ["2/8", "3/4", "3/8", "1/2"],
    correct: 1,
  },
  {
    id: "breuken-3a", concept: "breuken", niveau: 3,
    vraag: "Van een lat van 2/3 meter wordt 1/4 meter afgeknipt. Hoeveel meter blijft er over?",
    opties: ["5/12", "7/12", "1/3", "1/2"],
    correct: 0,
  },

  // ─── PROCENTEN ─────────────────────────────────────────────────
  {
    id: "procenten-1a", concept: "procenten", niveau: 1,
    vraag: "Hoeveel is 10% van 80?",
    opties: ["6", "8", "10", "12"],
    correct: 1,
  },
  {
    id: "procenten-1b", concept: "procenten", niveau: 1,
    vraag: "Wat is 50% van 40?",
    opties: ["10", "20", "25", "30"],
    correct: 1,
  },
  {
    id: "procenten-2a", concept: "procenten", niveau: 2,
    vraag: "Een trui kost €60. Er is 25% korting. Wat betaal je?",
    opties: ["€40", "€45", "€48", "€50"],
    correct: 1,
  },
  {
    id: "procenten-2b", concept: "procenten", niveau: 2,
    vraag: "15 van de 60 leerlingen hebben een hond. Welk percentage is dat?",
    opties: ["15%", "20%", "25%", "30%"],
    correct: 2,
  },
  {
    id: "procenten-3a", concept: "procenten", niveau: 3,
    vraag: "Een fiets kost €200. Hij wordt 15% duurder en daarna nog eens 10% duurder. Wat is de eindprijs?",
    opties: ["€245", "€250", "€253", "€270"],
    correct: 2,
  },

  // ─── MATEN ─────────────────────────────────────────────────────
  {
    id: "maten-1a", concept: "maten", niveau: 1,
    vraag: "Hoeveel centimeter is 2 meter?",
    opties: ["20 cm", "200 cm", "2000 cm", "20 000 cm"],
    correct: 1,
  },
  {
    id: "maten-1b", concept: "maten", niveau: 1,
    vraag: "Hoeveel gram is 3 kilogram?",
    opties: ["30 g", "300 g", "3 000 g", "30 000 g"],
    correct: 2,
  },
  {
    id: "maten-2a", concept: "maten", niveau: 2,
    vraag: "Een bak heeft 2,5 liter sap. Hoeveel milliliter is dat?",
    opties: ["25 ml", "250 ml", "2 500 ml", "25 000 ml"],
    correct: 2,
  },
  {
    id: "maten-2b", concept: "maten", niveau: 2,
    vraag: "550 cm + 3,5 m = ? m",
    opties: ["4 m", "9 m", "9,5 m", "8,5 m"],
    correct: 1,
  },
  {
    id: "maten-3a", concept: "maten", niveau: 3,
    vraag: "Een zwembad is 25 m lang, 10 m breed en 1,5 m diep. Hoeveel liter water past erin? (1 m³ = 1 000 liter)",
    opties: ["250 000 L", "375 000 L", "500 000 L", "37 500 L"],
    correct: 1,
  },

  // ─── VERHOUDINGEN ──────────────────────────────────────────────
  {
    id: "verhoudingen-1a", concept: "verhoudingen", niveau: 1,
    vraag: "Op een kaart is 1 cm = 10 km. Hoe ver is 3 cm op de kaart in werkelijkheid?",
    opties: ["3 km", "13 km", "30 km", "100 km"],
    correct: 2,
  },
  {
    id: "verhoudingen-1b", concept: "verhoudingen", niveau: 1,
    vraag: "De verhouding jongens:meisjes in een klas is 2:3. Er zijn 15 meisjes. Hoeveel jongens zijn er?",
    opties: ["6", "10", "12", "15"],
    correct: 1,
  },
  {
    id: "verhoudingen-2a", concept: "verhoudingen", niveau: 2,
    vraag: "Een recept voor 4 personen gebruikt 200 gram bloem. Hoeveel gram heb je nodig voor 10 personen?",
    opties: ["400 g", "450 g", "500 g", "600 g"],
    correct: 2,
  },
  {
    id: "verhoudingen-2b", concept: "verhoudingen", niveau: 2,
    vraag: "Jan fietst 30 km in 2 uur. Hoe ver rijdt hij in 5 uur bij dezelfde snelheid?",
    opties: ["60 km", "70 km", "75 km", "90 km"],
    correct: 2,
  },
  {
    id: "verhoudingen-3a", concept: "verhoudingen", niveau: 3,
    vraag: "Op een plattegrond met schaal 1:500 is een kamer 4 cm lang. Hoe lang is de echte kamer?",
    opties: ["5 m", "20 m", "200 m", "2 m"],
    correct: 1,
  },

  // ─── SPELLING ──────────────────────────────────────────────────
  {
    id: "spelling-1a", concept: "spelling", niveau: 1,
    vraag: "Welk woord is goed gespeld?",
    opties: ["wagen", "waagen", "waagon", "waggen"],
    correct: 0,
  },
  {
    id: "spelling-1b", concept: "spelling", niveau: 1,
    vraag: "Welk woord is goed gespeld?",
    opties: ["suiker", "suijker", "zuiker", "zuijker"],
    correct: 0,
  },
  {
    id: "spelling-2a", concept: "spelling", niveau: 2,
    vraag: "Welke zin heeft de juiste spelling?",
    opties: [
      "Hij loopt snel naar huis.",
      "Hij loopt snel naar huijs.",
      "Hij loopt snell naar huis.",
      "Hij loopt snel naar huiz.",
    ],
    correct: 0,
  },
  {
    id: "spelling-2b", concept: "spelling", niveau: 2,
    vraag: "Wat is de juiste spelling? 'Hij ... (worden) morgen tien jaar.'",
    opties: ["word", "wordt", "wort", "worden"],
    correct: 1,
  },
  {
    id: "spelling-3a", concept: "spelling", niveau: 3,
    vraag: "Welke zin heeft de juiste werkwoordspelling?",
    opties: [
      "Gisteren fietste hij naar school.",
      "Gisteren fietsde hij naar school.",
      "Gisteren fietsten hij naar school.",
      "Gisteren fiets hij naar school.",
    ],
    correct: 0,
  },

  // ─── WOORDSOORTEN ──────────────────────────────────────────────
  {
    id: "woordsoorten-1a", concept: "woordsoorten", niveau: 1,
    vraag: "Wat voor woordsoort is het onderstreepte woord in 'De _rode_ fiets staat buiten'?",
    opties: ["Werkwoord", "Zelfstandig naamwoord", "Bijvoeglijk naamwoord", "Lidwoord"],
    correct: 2,
  },
  {
    id: "woordsoorten-1b", concept: "woordsoorten", niveau: 1,
    vraag: "Welk woord is een zelfstandig naamwoord?",
    opties: ["snel", "lopen", "fiets", "groot"],
    correct: 2,
  },
  {
    id: "woordsoorten-2a", concept: "woordsoorten", niveau: 2,
    vraag: "In de zin 'Lisa _rent_ snel naar de bus' — wat voor woordsoort is het onderstreepte woord?",
    opties: ["Bijvoeglijk naamwoord", "Bijwoord", "Werkwoord", "Voegwoord"],
    correct: 2,
  },
  {
    id: "woordsoorten-2b", concept: "woordsoorten", niveau: 2,
    vraag: "Welk woord is een bijwoord?",
    opties: ["mooi", "gisteren", "fiets", "de"],
    correct: 1,
  },
  {
    id: "woordsoorten-3a", concept: "woordsoorten", niveau: 3,
    vraag: "In 'Hij geeft _haar_ het boek' — wat is het woord 'haar'?",
    opties: ["Bezittelijk voornaamwoord", "Persoonlijk voornaamwoord", "Bijvoeglijk naamwoord", "Lidwoord"],
    correct: 1,
  },

  // ─── WERKWOORDTIJDEN ───────────────────────────────────────────
  {
    id: "werkwoordtijden-1a", concept: "werkwoordtijden", niveau: 1,
    vraag: "Welke tijd is 'Hij werkt'?",
    opties: ["Verleden tijd", "Onvoltooid tegenwoordige tijd", "Toekomende tijd", "Voltooid tegenwoordige tijd"],
    correct: 1,
  },
  {
    id: "werkwoordtijden-1b", concept: "werkwoordtijden", niveau: 1,
    vraag: "Zet het werkwoord in de verleden tijd: 'Ik (spelen) buiten.'",
    opties: ["speelde", "gespeeld", "speel", "speelt"],
    correct: 0,
  },
  {
    id: "werkwoordtijden-2a", concept: "werkwoordtijden", niveau: 2,
    vraag: "Welke zin staat in de onvoltooid verleden tijd?",
    opties: [
      "Ze heeft gisteren gevoetbald.",
      "Ze voetbalt morgen.",
      "Ze voetbalde gisteren.",
      "Ze gaat voetballen.",
    ],
    correct: 2,
  },
  {
    id: "werkwoordtijden-2b", concept: "werkwoordtijden", niveau: 2,
    vraag: "Welke zin staat in de voltooid tegenwoordige tijd?",
    opties: [
      "Hij loopt naar school.",
      "Hij liep naar school.",
      "Hij heeft naar school gelopen.",
      "Hij zal naar school lopen.",
    ],
    correct: 2,
  },
  {
    id: "werkwoordtijden-3a", concept: "werkwoordtijden", niveau: 3,
    vraag: "Welke zin bevat een voltooid verleden tijd?",
    opties: [
      "Ze eet al haar boterham op.",
      "Ze had al haar boterham opgegeten.",
      "Ze heeft haar boterham opgegeten.",
      "Ze at haar boterham op.",
    ],
    correct: 1,
  },

  // ─── WOORDENSCHAT ──────────────────────────────────────────────
  {
    id: "woordenschat-1a", concept: "woordenschat", niveau: 1,
    vraag: "Wat betekent het woord 'glinsteren'?",
    opties: ["Donker worden", "Licht schitteren", "Geluid maken", "Bewegen"],
    correct: 1,
  },
  {
    id: "woordenschat-1b", concept: "woordenschat", niveau: 1,
    vraag: "Wat is een synoniem voor 'snel'?",
    opties: ["langzaam", "rustig", "vlug", "zwaar"],
    correct: 2,
  },
  {
    id: "woordenschat-2a", concept: "woordenschat", niveau: 2,
    vraag: "In de zin 'Hij was verbijsterd door het nieuws' betekent 'verbijsterd':?",
    opties: ["blij verrast", "erg in de war / geschokt", "heel boos", "erg moe"],
    correct: 1,
  },
  {
    id: "woordenschat-2b", concept: "woordenschat", niveau: 2,
    vraag: "Welk woord hoort NIET in de reeks: 'moe, uitgeput, vermoeid, energiek'?",
    opties: ["moe", "uitgeput", "vermoeid", "energiek"],
    correct: 3,
  },
  {
    id: "woordenschat-3a", concept: "woordenschat", niveau: 3,
    vraag: "Wat betekent de uitdrukking 'iets door de vingers zien'?",
    opties: [
      "Iets heel nauwkeurig controleren",
      "Iets expres over het hoofd zien / door de vingers laten glippen",
      "Iets aan anderen laten zien",
      "Iets heel moeilijk vinden",
    ],
    correct: 1,
  },

  // ─── HOOFDGEDACHTE ─────────────────────────────────────────────
  {
    id: "hoofdgedachte-1a", concept: "hoofdgedachte", niveau: 1,
    vraag: "Lees: 'Honden zijn trouwe dieren. Ze helpen mensen op veel manieren. Ze bewaken huizen en helpen blinden.' Wat is de hoofdgedachte?",
    opties: [
      "Honden bewaken huizen.",
      "Honden zijn erg nuttig voor mensen.",
      "Honden zijn moeilijk te trainen.",
      "Blinden hebben honden nodig.",
    ],
    correct: 1,
  },
  {
    id: "hoofdgedachte-1b", concept: "hoofdgedachte", niveau: 1,
    vraag: "Wat is de beste samenvatting van een alinea?",
    opties: [
      "De eerste zin van de alinea",
      "Alle details op een rij",
      "De kern van wat de alinea zegt in één zin",
      "Het laatste woord van de alinea",
    ],
    correct: 2,
  },
  {
    id: "hoofdgedachte-2a", concept: "hoofdgedachte", niveau: 2,
    vraag: "Lees: 'Plastic vervuilt de oceanen. Vissen eten plastic en worden ziek. Mensen eten vis en krijgen zo plastic binnen. Dat is slecht voor onze gezondheid.' Wat is de hoofdgedachte?",
    opties: [
      "Vissen eten plastic.",
      "Plastic in de oceaan is gevaarlijk voor mens en dier.",
      "We mogen geen vis meer eten.",
      "Mensen gooien te veel plastic weg.",
    ],
    correct: 1,
  },
  {
    id: "hoofdgedachte-2b", concept: "hoofdgedachte", niveau: 2,
    vraag: "Wat is het verschil tussen een hoofd- en een bijzin in een tekst?",
    opties: [
      "De hoofdzin is de kortste zin",
      "De hoofdzin geeft het belangrijkste idee; de bijzin geeft extra informatie",
      "De bijzin komt altijd aan het begin",
      "Er is geen verschil",
    ],
    correct: 1,
  },
  {
    id: "hoofdgedachte-3a", concept: "hoofdgedachte", niveau: 3,
    vraag: "Lees: 'Steeds meer jongeren gebruiken sociale media. Experts waarschuwen voor verslaving en slaapproblemen. Toch zeggen veel jongeren dat ze er vrienden mee maken.' Welke samenvatting klopt het best?",
    opties: [
      "Sociale media is alleen gevaarlijk voor jongeren.",
      "Sociale media heeft zowel voor- als nadelen voor jongeren.",
      "Experts zijn voor meer gebruik van sociale media.",
      "Jongeren slapen slecht door vriendschappen.",
    ],
    correct: 1,
  },

  // ─── TEKSTBEGRIP ───────────────────────────────────────────────
  {
    id: "tekstbegrip-1a", concept: "tekstbegrip", niveau: 1,
    vraag: "Je zoekt in een tekst hoe laat de bibliotheek sluit. Waar kijk je als eerste?",
    opties: ["De eerste alinea", "De tussenkopjes / inhoudsopgave", "De laatste alinea", "De inleiding"],
    correct: 1,
  },
  {
    id: "tekstbegrip-1b", concept: "tekstbegrip", niveau: 1,
    vraag: "Wat is het doel van een tussenkopje in een tekst?",
    opties: [
      "De tekst mooier maken",
      "Snel zien waar een stukje tekst over gaat",
      "De tekst langer maken",
      "De schrijver noemen",
    ],
    correct: 1,
  },
  {
    id: "tekstbegrip-2a", concept: "tekstbegrip", niveau: 2,
    vraag: "Lees: 'De wedstrijd begint om 14:00. Het stadion is dan twee uur open.' Hoe laat gaat het stadion open?",
    opties: ["12:00", "13:00", "14:00", "15:00"],
    correct: 0,
  },
  {
    id: "tekstbegrip-2b", concept: "tekstbegrip", niveau: 2,
    vraag: "Een tekst heeft een inleiding, een middenstuk en een slot. Waar vind je meestal de conclusie?",
    opties: ["In de inleiding", "In het middenstuk", "In het slot", "In de tussenkopjes"],
    correct: 2,
  },
  {
    id: "tekstbegrip-3a", concept: "tekstbegrip", niveau: 3,
    vraag: "Een tekst betoogt dat iedereen meer groente moet eten. Welke zin is een mening (geen feit)?",
    opties: [
      "Groente bevat vitaminen.",
      "Nederland produceert jaarlijks miljoenen kilo's groente.",
      "Iedereen die groente eet, leeft langer.",
      "Groente eten is de beste keuze die je kunt maken.",
    ],
    correct: 3,
  },

  // ─── OORZAAKGEVOLG ─────────────────────────────────────────────
  {
    id: "oorzaakgevolg-1a", concept: "oorzaakgevolg", niveau: 1,
    vraag: "Welk woord geeft een oorzaak aan?",
    opties: ["daarna", "want", "maar", "ook"],
    correct: 1,
  },
  {
    id: "oorzaakgevolg-1b", concept: "oorzaakgevolg", niveau: 1,
    vraag: "Lees: 'Het regende hard, _daarom_ bleven we binnen.' Wat is de oorzaak?",
    opties: ["Binnen blijven", "Het regende hard", "Buiten gaan", "Ons huis"],
    correct: 1,
  },
  {
    id: "oorzaakgevolg-2a", concept: "oorzaakgevolg", niveau: 2,
    vraag: "Lees: 'Door de droogte groeiden de gewassen slecht. De boeren hadden een slechte oogst.' Wat is het gevolg?",
    opties: ["De droogte", "Slechte groei van gewassen", "Een slechte oogst voor de boeren", "Weinig regen"],
    correct: 2,
  },
  {
    id: "oorzaakgevolg-2b", concept: "oorzaakgevolg", niveau: 2,
    vraag: "Welke zin toont een oorzaak-gevolgverband?",
    opties: [
      "Hij at een broodje en daarna dronk hij water.",
      "Ze sliep te weinig, dus was ze overdag moe.",
      "Mia houdt van paarden en honden.",
      "De trein rijdt om 8 uur.",
    ],
    correct: 1,
  },
  {
    id: "oorzaakgevolg-3a", concept: "oorzaakgevolg", niveau: 3,
    vraag: "Lees: 'De fabrieken stootten veel CO₂ uit. CO₂ houdt warmte vast in de atmosfeer. Daardoor stijgt de temperatuur op aarde.' Hoeveel oorzaak-gevolgstappen zijn er?",
    opties: ["0", "1", "2", "3"],
    correct: 2,
  },
];

// Helper: geef vragen voor een concept, gesorteerd op niveau
export function getVragenVoorConcept(conceptId) {
  return KWARTIERCHECK_VRAGEN
    .filter((v) => v.concept === conceptId)
    .sort((a, b) => a.niveau - b.niveau);
}
