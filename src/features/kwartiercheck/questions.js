import { GROEP_SETS } from "./groepen/index.js";

// Diagnostische vragen voor de Kwartiercheck.
// Elke vraag heeft: concept (uit conceptMapping), niveau (1=makkelijk, 2=midden, 3=moeilijk),
// vraag, opties (4 stuks), correct (0-based index).
// Niveau 1: basiskennis. Niveau 2: toepassen. Niveau 3: complexe toepassing.

export const KWARTIERCHECK_VRAGEN = [

  // ─── TAFELS ────────────────────────────────────────────────────
  {
    id: "tafels-1a", concept: "tafels", niveau: 1,
    vraag: "Hoeveel is 6 × 7?",
    opties: ["36", "42", "48", "56"],
    correct: 1,
  },
  {
    id: "tafels-1b", concept: "tafels", niveau: 1,
    vraag: "Hoeveel is 8 × 9?",
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
  // Groep-8-niveau (29 sep 2026, Mark: "vervang de vragen die onder groep-8-niveau zitten"):
  // niveau 1 = ongelijknamig optellen, breuk van een hoeveelheid, breuk ↔ kommagetal ↔ procent;
  // niveau 2 = meerstaps in een Doorstroomtoets-achtige situatie.
  {
    id: "breuken-1a", concept: "breuken", niveau: 1,
    vraag: "Hoeveel is 3/4 + 1/6?",
    opties: ["4/10", "11/12", "11/24", "5/6"],
    correct: 1,
  },
  {
    id: "breuken-1b", concept: "breuken", niveau: 1,
    vraag: "Hoeveel is 3/8 van 72?",
    opties: ["9", "24", "45", "27"],
    correct: 3,
  },
  {
    id: "breuken-1c", concept: "breuken", niveau: 1,
    vraag: "Welk getal is het kleinst?",
    opties: ["0,4", "45%", "3/8", "1/2"],
    correct: 2,
  },
  {
    id: "breuken-2a", concept: "breuken", niveau: 2,
    vraag: "Groep 8 heeft 48 leerlingen. Op de sportdag doet 3/8 van hen mee aan voetbal en 1/3 aan hockey. De rest doet mee aan atletiek. Hoeveel leerlingen doen mee aan atletiek?",
    opties: ["34", "16", "14", "18"],
    correct: 2,
  },
  {
    id: "breuken-2b", concept: "breuken", niveau: 2,
    vraag: "Sem heeft een fles met 2 1/2 liter limonade. Hij schenkt glazen van 1/4 liter. Hoeveel glazen kan hij helemaal vullen?",
    opties: ["10", "5", "8", "6"],
    correct: 0,
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
    vraag: "Hoeveel is 35% van 240?",
    opties: ["84", "72", "96", "24"],
    correct: 0,
  },
  {
    id: "procenten-1b", concept: "procenten", niveau: 1,
    vraag: "Van de 40 kinderen in groep 8 gaan er 14 met de fiets op schoolreis. Hoeveel procent is dat?",
    opties: ["14%", "65%", "35%", "28%"],
    correct: 2,
  },
  {
    id: "procenten-1c", concept: "procenten", niveau: 1,
    vraag: "Welk percentage is even groot als 3/5?",
    opties: ["35%", "53%", "30%", "60%"],
    correct: 3,
  },
  {
    id: "procenten-2a", concept: "procenten", niveau: 2,
    vraag: "Een spelcomputer kost € 280. In de uitverkoop krijg je 15% korting. Hoeveel betaal je?",
    opties: ["€ 42", "€ 265", "€ 238", "€ 252"],
    correct: 2,
  },
  {
    id: "procenten-2b", concept: "procenten", niveau: 2,
    vraag: "Vorig jaar kostte een jaarabonnement op de sportclub € 80. Dit jaar kost het € 92. Met hoeveel procent is de prijs gestegen?",
    opties: ["12%", "15%", "13%", "20%"],
    correct: 1,
  },
  {
    id: "procenten-2c", concept: "procenten", niveau: 2,
    vraag: "Dezelfde voetbalschoenen zijn in twee winkels in de aanbieding. Winkel A: van € 50 voor 20% korting. Winkel B: van € 45 met € 4 korting. Welke uitspraak klopt?",
    opties: [
      "Winkel B is € 1 goedkoper.",
      "Winkel A is € 1 goedkoper.",
      "Ze zijn allebei even duur.",
      "Winkel A is € 5 goedkoper.",
    ],
    correct: 1,
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
    vraag: "Hoeveel centimeter is 0,045 km?",
    opties: ["450 cm", "4 500 cm", "45 cm", "45 000 cm"],
    correct: 1,
  },
  {
    id: "maten-1b", concept: "maten", niveau: 1,
    vraag: "Welke hoeveelheid is het grootst?",
    opties: ["1 050 ml", "11 dl", "125 cl", "1,2 liter"],
    correct: 2,
  },
  {
    id: "maten-1c", concept: "maten", niveau: 1,
    vraag: "Hoeveel cm² is 1 m²?",
    opties: ["100 cm²", "1 000 cm²", "100 000 cm²", "10 000 cm²"],
    correct: 3,
  },
  {
    id: "maten-1d", concept: "maten", niveau: 1,
    vraag: "Een pakket weegt 3 kg en 40 g. Hoeveel kilogram is dat?",
    opties: ["3,4 kg", "3,04 kg", "3,004 kg", "34 kg"],
    correct: 1,
  },
  {
    id: "maten-2a", concept: "maten", niveau: 2,
    vraag: "Een aquarium is 60 cm lang, 30 cm breed en 40 cm hoog. Je vult het tot 5 cm onder de rand met water. Hoeveel liter water zit erin? (1 dm³ = 1 liter)",
    opties: ["630 liter", "72 liter", "6,3 liter", "63 liter"],
    correct: 3,
  },
  {
    id: "maten-2b", concept: "maten", niveau: 2,
    vraag: "Een trein rijdt gemiddeld 120 km per uur. Hoe lang doet hij over een rit van 50 km?",
    opties: ["20 minuten", "42 minuten", "25 minuten", "30 minuten"],
    correct: 2,
  },
  {
    id: "maten-2c", concept: "maten", niveau: 2,
    vraag: "Een vloer is 4,5 m lang en 3,2 m breed. Er komen nieuwe tegels op. Met één doos tegels bedek je 1,5 m². Hoeveel dozen moet je minstens kopen?",
    opties: ["9", "11", "10", "14"],
    correct: 2,
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
    vraag: "Voor 6 pannenkoeken heb je 250 ml melk nodig. Hoeveel melk heb je nodig voor 15 pannenkoeken?",
    opties: ["750 ml", "500 ml", "625 ml", "375 ml"],
    correct: 2,
  },
  {
    id: "verhoudingen-1b", concept: "verhoudingen", niveau: 1,
    vraag: "De verhouding jongens:meisjes in een klas is 2:3. Er zijn 15 meisjes. Hoeveel jongens zijn er?",
    opties: ["6", "10", "12", "15"],
    correct: 1,
  },
  {
    id: "verhoudingen-1c", concept: "verhoudingen", niveau: 1,
    vraag: "Een fietskaart heeft schaal 1 : 50 000. Op de kaart is een fietspad 6 cm lang. Hoe lang is het fietspad in werkelijkheid?",
    opties: ["30 km", "300 m", "3 km", "50 km"],
    correct: 2,
  },
  {
    id: "verhoudingen-2a", concept: "verhoudingen", niveau: 2,
    vraag: "In de supermarkt liggen vier pakken hagelslag. Welk pak is het voordeligst (de laagste prijs per kilo)?",
    opties: ["500 g voor € 1,80", "1,5 kg voor € 4,80", "1 kg voor € 3,40", "250 g voor € 0,95"],
    correct: 1,
  },
  {
    id: "verhoudingen-2b", concept: "verhoudingen", niveau: 2,
    vraag: "In een klas is de verhouding jongens : meisjes = 3 : 5. Er zitten 32 kinderen in de klas. Hoeveel meisjes zijn er?",
    opties: ["12", "15", "20", "24"],
    correct: 2,
  },
  {
    id: "verhoudingen-2c", concept: "verhoudingen", niveau: 2,
    vraag: "Voor limonade meng je siroop en water in de verhouding 1 : 6. Je wilt 2,1 liter limonade maken. Hoeveel siroop heb je nodig?",
    opties: ["300 ml", "350 ml", "210 ml", "1 800 ml"],
    correct: 0,
  },
  {
    id: "verhoudingen-3a", concept: "verhoudingen", niveau: 3,
    vraag: "Op een plattegrond met schaal 1:500 is een kamer 4 cm lang. Hoe lang is de echte kamer?",
    opties: ["5 m", "20 m", "200 m", "2 m"],
    correct: 1,
  },

  // ─── SPELLING ──────────────────────────────────────────────────
  // Groep-8-niveau: trema, -tie, leenwoorden, tussen-n, koppelteken, hoofdletters,
  // stoffelijk bijvoeglijk naamwoord (houten). Werkwoordspelling zit bij werkwoordtijden.
  {
    id: "spelling-1a", concept: "spelling", niveau: 1,
    vraag: "Welk woord is goed geschreven?",
    opties: ["beeindigen", "beëindigen", "beëindiegen", "beeïndigen"],
    correct: 1,
  },
  {
    id: "spelling-1b", concept: "spelling", niveau: 1,
    vraag: "Welk woord is goed geschreven?",
    opties: ["positsie", "posietie", "positie", "possitie"],
    correct: 2,
  },
  {
    id: "spelling-1c", concept: "spelling", niveau: 1,
    vraag: "Welk woord is goed geschreven?",
    opties: ["restaurant", "restorant", "restaurand", "restaurent"],
    correct: 0,
  },
  {
    id: "spelling-1d", concept: "spelling", niveau: 1,
    vraag: "Welk woord is goed geschreven?",
    opties: ["kippesoep", "kipensoep", "kippensoup", "kippensoep"],
    correct: 3,
  },
  {
    id: "spelling-2a", concept: "spelling", niveau: 2,
    vraag: "Welke zin is goed geschreven?",
    opties: [
      "Op Dinsdag varen we met de boot over de Waddenzee naar Ameland.",
      "Op dinsdag varen we met de boot over de waddenzee naar Ameland.",
      "Op dinsdag varen we met de boot over de Waddenzee naar Ameland.",
      "Op dinsdag varen we met de boot over de Waddenzee naar ameland.",
    ],
    correct: 2,
  },
  {
    id: "spelling-2b", concept: "spelling", niveau: 2,
    vraag: "In welke zin staat een spelfout?",
    opties: [
      "Mijn opa is een echte Fries.",
      "We aten een heerlijke Italiaanse pizza.",
      "Het team won de finale met 3-1.",
      "Ze wonen in een klein houte huisje aan het water.",
    ],
    correct: 3,
  },
  {
    id: "spelling-2c", concept: "spelling", niveau: 2,
    vraag: "Welk woord is goed geschreven?",
    opties: ["zee-egel", "zeeëgel", "zeeegel", "zee-ëgel"],
    correct: 0,
  },
  {
    id: "spelling-3a", concept: "spelling", niveau: 3,
    vraag: "In welke zin zijn alle woorden goed geschreven?",
    opties: [
      "De chaufeur bracht de ideeën van de coördinator naar het kantoor.",
      "De chauffeur bracht de ideeen van de coördinator naar het kantoor.",
      "De chauffeur bracht de ideeën van de coördinator naar het kantoor.",
      "De chauffeur bracht de ideeën van de coordinator naar het kantoor.",
    ],
    correct: 2,
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
  // Groep-8-niveau: werkwoordspelling met de bekende valkuilen
  // (gebeurd/gebeurt, verhuisd, beantwoord, raadde, word/wordt, bijvoeglijk voltooid deelwoord).
  {
    id: "werkwoordtijden-1a", concept: "werkwoordtijden", niveau: 1,
    vraag: "Welke vorm is goed? 'Wat is er gisteren op het schoolplein …?' (gebeuren)",
    opties: ["gebeurt", "gebeurd", "gebeurdt", "gebeurde"],
    correct: 1,
  },
  {
    id: "werkwoordtijden-1b", concept: "werkwoordtijden", niveau: 1,
    vraag: "Welke vorm is goed? 'Gisteren … mijn broer het antwoord meteen.' (raden)",
    opties: ["raadde", "raade", "raadte", "raadden"],
    correct: 0,
  },
  {
    id: "werkwoordtijden-1c", concept: "werkwoordtijden", niveau: 1,
    vraag: "Welke vorm is goed? '… jij ook zo zenuwachtig voor de Doorstroomtoets?' (worden)",
    opties: ["Wordt", "Wort", "Worden", "Word"],
    correct: 3,
  },
  {
    id: "werkwoordtijden-1d", concept: "werkwoordtijden", niveau: 1,
    vraag: "Welke vorm is goed? 'Onze buren zijn vorige week naar Utrecht ….' (verhuizen)",
    opties: ["verhuizd", "verhuist", "verhuisdt", "verhuisd"],
    correct: 3,
  },
  {
    id: "werkwoordtijden-2a", concept: "werkwoordtijden", niveau: 2,
    vraag: "Welke vorm is goed? 'Heeft de juf jouw vraag al …?' (beantwoorden)",
    opties: ["beantwoord", "beantwoordt", "beantwoort", "beantwoorden"],
    correct: 0,
  },
  {
    id: "werkwoordtijden-2b", concept: "werkwoordtijden", niveau: 2,
    vraag: "Welke zin is helemaal goed geschreven?",
    opties: [
      "Wat er ook gebeurd, ik word morgen twaalf.",
      "Wat er ook gebeurt, ik wordt morgen twaalf.",
      "Wat er ook gebeurt, ik word morgen twaalf.",
      "Wat er ook gebeurd, ik wordt morgen twaalf.",
    ],
    correct: 2,
  },
  {
    id: "werkwoordtijden-2c", concept: "werkwoordtijden", niveau: 2,
    vraag: "Welke vorm is goed? 'De … band van mijn fiets was na een week alweer lek.' (plakken)",
    opties: ["geplakten", "geplakde", "geplakte", "geplakt"],
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
  // Groep-8-niveau: schooltaalwoorden, tegenstellingen, betekenis uit de context,
  // woorden met meer betekenissen en uitdrukkingen in een zin.
  {
    id: "woordenschat-1a", concept: "woordenschat", niveau: 1,
    vraag: "Wat betekent het woord 'tijdelijk'?",
    opties: ["voor altijd", "heel vaak", "maar voor een korte periode", "precies op tijd"],
    correct: 2,
  },
  {
    id: "woordenschat-1b", concept: "woordenschat", niveau: 1,
    vraag: "Wat betekent het woord 'beweren'?",
    opties: [
      "iets zeggen alsof het zeker waar is",
      "iets met bewijs laten zien",
      "iets heen en weer bewegen",
      "iets tegenspreken",
    ],
    correct: 0,
  },
  {
    id: "woordenschat-1c", concept: "woordenschat", niveau: 1,
    vraag: "Wat is het tegenovergestelde van 'optimistisch'?",
    opties: ["pessimistisch", "vrolijk", "realistisch", "energiek"],
    correct: 0,
  },
  {
    id: "woordenschat-2a", concept: "woordenschat", niveau: 2,
    vraag: "Lees de zin: 'Toen Noor hoorde dat haar tekening de landelijke prijs had gewonnen, was ze totaal verbijsterd: ze kon het gewoon niet geloven.' Wat betekent 'verbijsterd' in deze zin?",
    opties: ["heel erg teleurgesteld", "een beetje verveeld", "erg boos", "stomverbaasd"],
    correct: 3,
  },
  {
    id: "woordenschat-2b", concept: "woordenschat", niveau: 2,
    vraag: "Lees de zin: 'De scheidsrechter moest de wedstrijd staken, omdat het onweer te dichtbij kwam.' Wat betekent 'staken' in deze zin?",
    opties: ["weigeren te werken om iets te eisen", "stilleggen", "met palen afzetten", "verlengen"],
    correct: 1,
  },
  {
    id: "woordenschat-2c", concept: "woordenschat", niveau: 2,
    vraag: "Lees de tekst: 'De burgemeester wilde het plan eerst goed laten onderzoeken voordat hij een besluit nam. Hij wilde niet over één nacht ijs gaan.' Wat betekent 'niet over één nacht ijs gaan'?",
    opties: [
      "niet 's nachts gaan schaatsen",
      "iets niet overhaast en zonder nadenken doen",
      "een besluit voor altijd uitstellen",
      "niet op iemand anders willen wachten",
    ],
    correct: 1,
  },
  {
    id: "woordenschat-3a", concept: "woordenschat", niveau: 3,
    vraag: "Lees de zin: 'De juf zag het deze keer door de vingers dat Daan zijn huiswerk vergeten was, maar de volgende keer moest hij nablijven.' Wat betekent 'iets door de vingers zien'?",
    opties: [
      "iets heel nauwkeurig controleren",
      "een fout bewust niet bestraffen",
      "iets aan anderen laten zien",
      "iets per ongeluk kwijtraken",
    ],
    correct: 1,
  },

  // ─── HOOFDGEDACHTE ─────────────────────────────────────────────
  // Groep-8-niveau: altijd een tekst. Niveau 1 = korte tekst (4-6 zinnen) → hoofdgedachte;
  // niveau 2 = tekst van 5-8 zinnen met verbanden → hoofdgedachte, samenvatting of tekstdoel.
  {
    id: "hoofdgedachte-1a", concept: "hoofdgedachte", niveau: 1,
    vraag: "Lees de tekst. “Bijen zijn belangrijk voor ons eten. Als een bij van bloem naar bloem vliegt, neemt ze stuifmeel mee. Daardoor kunnen planten vruchten en zaden maken. Zonder bijen zouden er veel minder appels, aardbeien en tomaten zijn. Ook veel dieren eten van planten die door bijen bestoven worden.” Wat is de hoofdgedachte van de tekst?",
    opties: [
      "Bijen vliegen van bloem naar bloem.",
      "Bijen maken honing voor mensen.",
      "Aardbeien en tomaten hebben stuifmeel nodig.",
      "Bijen zijn nodig om veel van ons eten te laten groeien.",
    ],
    correct: 3,
  },
  {
    id: "hoofdgedachte-1b", concept: "hoofdgedachte", niveau: 1,
    vraag: "Lees de tekst. “Steeds meer gemeenten zetten 's nachts op sommige plekken de straatlantaarns uit. Daarmee besparen ze veel stroom en geld. Maar er is nog een reden. Door al het kunstlicht raken vleermuizen, vogels en insecten in de war. In het donker kunnen ze beter jagen en hun weg vinden. Op plekken waar het voor mensen onveilig kan worden, blijven de lampen wel aan.” Wat is de hoofdgedachte van de tekst?",
    opties: [
      "Vleermuizen jagen het liefst in het donker.",
      "Gemeenten doen lampen uit om stroom te besparen én om dieren te helpen.",
      "Straatlantaarns maken straten onveilig.",
      "Gemeenten willen dat mensen 's nachts binnen blijven.",
    ],
    correct: 1,
  },
  {
    id: "hoofdgedachte-1c", concept: "hoofdgedachte", niveau: 1,
    vraag: "Lees de tekst. “Veel kinderen denken dat je voor een toets de avond ervoor lang moet leren. Toch werkt dat meestal niet zo goed. Je onthoudt stof beter als je het leren over meerdere dagen verdeelt. Elke dag tien minuten, een week lang, levert meer op dan één uur op de laatste avond. Ook slaap helpt: tijdens het slapen slaan je hersenen op wat je hebt geleerd.” Wat is de hoofdgedachte van de tekst?",
    opties: [
      "Je moet de avond voor een toets lang leren.",
      "Slapen is belangrijker dan leren.",
      "Je onthoudt stof beter als je het leren over meerdere dagen verdeelt.",
      "Tien minuten leren is genoeg voor elke toets.",
    ],
    correct: 2,
  },
  {
    id: "hoofdgedachte-2a", concept: "hoofdgedachte", niveau: 2,
    vraag: "Lees de tekst. “In veel steden worden tuinen vol tegels weer groen gemaakt. Dat heeft een goede reden. Als het hard regent, kan het water niet door de tegels heen de grond in zakken. Het stroomt dan naar het riool, dat snel vol raakt. Daardoor lopen straten en kelders onder water. In een tuin met planten en gras zakt het regenwater juist wel weg. Bovendien blijft het in zo'n tuin 's zomers koeler. Sommige gemeenten geven bewoners daarom geld als ze tegels vervangen door planten.” Wat is de hoofdgedachte van de tekst?",
    opties: [
      "Riolen in Nederland zijn te klein.",
      "Groene tuinen helpen tegen wateroverlast en hitte; daarom worden tegeltuinen groen gemaakt.",
      "Gemeenten geven bewoners geld voor planten.",
      "In de zomer is het in de stad te warm.",
    ],
    correct: 1,
  },
  {
    id: "hoofdgedachte-2b", concept: "hoofdgedachte", niveau: 2,
    vraag: "Lees de tekst. “Sinds dit schooljaar mogen leerlingen op onze school hun mobiele telefoon niet meer in de klas gebruiken. Sommige kinderen vonden dat eerst oneerlijk. Toch merken de leraren dat er nu beter wordt opgelet. Ook in de pauze wordt er weer meer samen gespeeld in plaats van naar een scherm gekeken. Een paar ouders vinden het lastig dat ze hun kind overdag niet kunnen bereiken. De school heeft daarom afgesproken dat ouders in noodgevallen altijd naar de administratie mogen bellen.” Welke samenvatting past het best bij de tekst?",
    opties: [
      "Door het telefoonverbod letten leerlingen beter op en spelen ze meer samen; in noodgevallen kunnen ouders de school bellen.",
      "Kinderen vinden het telefoonverbod oneerlijk, dus moet het weer worden afgeschaft.",
      "Sinds het telefoonverbod kunnen ouders hun kind helemaal niet meer bereiken.",
      "Leerlingen mogen hun telefoon alleen in de pauze gebruiken.",
    ],
    correct: 0,
  },
  {
    id: "hoofdgedachte-2c", concept: "hoofdgedachte", niveau: 2,
    vraag: "Lees de tekst. “Heb jij thuis nog knuffels, puzzels of boeken die je niet meer gebruikt? Gooi ze dan niet weg! Op zaterdag 14 maart houden we op het schoolplein een grote ruilmarkt. Je kunt er je oude spullen ruilen voor iets wat jij leuk vindt. Wat overblijft, geven we aan het speelgoedcentrum in de wijk. Zo maak je een ander kind blij en hoeft er minder nieuw speelgoed gemaakt te worden. Kom jij ook?” Wat wil de schrijver vooral met deze tekst?",
    opties: [
      "uitleggen hoe speelgoed wordt gemaakt",
      "vertellen wat een speelgoedcentrum doet",
      "de lezer vermaken met een grappig verhaal",
      "lezers overhalen om naar de ruilmarkt te komen",
    ],
    correct: 3,
  },
  {
    id: "hoofdgedachte-3a", concept: "hoofdgedachte", niveau: 3,
    vraag: "Lees de tekst. “Robots nemen steeds meer werk van mensen over. In fabrieken zetten ze al jaren auto's in elkaar, en in sommige winkels vullen ze 's nachts de schappen. Veel mensen zijn bang dat ze daardoor hun baan kwijtraken. Dat gebeurt ook: sommige beroepen verdwijnen bijna helemaal. Toch ontstaan er tegelijk nieuwe banen, bijvoorbeeld voor mensen die robots ontwerpen, repareren en besturen. Werk waarbij je goed met mensen moet omgaan, zoals verplegen of lesgeven, kan een robot bovendien nog lang niet overnemen. Het werk verandert dus vooral van vorm.” Welke zin geeft de hoofdgedachte het best weer?",
    opties: [
      "Door robots is er straks geen werk meer voor mensen.",
      "Door robots verdwijnt er werk, maar er komt ook nieuw werk bij: het werk verandert vooral.",
      "Robots kunnen beter lesgeven dan leraren.",
      "In fabrieken werken al jaren robots.",
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

// Helper: geef vragen voor een concept, gesorteerd op niveau (vaste set + de sets per groep)
const ALLE_VRAGEN = [...KWARTIERCHECK_VRAGEN, ...Object.values(GROEP_SETS).flatMap((s) => s.vragen || [])];
// Binnen een niveau schudden, één keer per check (29 sep 2026): de check nam altijd de eerste vraag
// per niveau, dus wie hem twee keer deed kreeg precies dezelfde vragen en de rest werd nooit gebruikt.
// De volgorde blijft vast tijdens één check (de antwoorden verwijzen naar de index in deze lijst).
let volgorde = new Map();
export function nieuweVolgorde() { volgorde = new Map(); }
const schud = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
export function getVragenVoorConcept(conceptId) {
  if (!volgorde.has(conceptId)) {
    const eigen = ALLE_VRAGEN.filter((v) => v.concept === conceptId);
    const niveaus = [...new Set(eigen.map((v) => v.niveau))].sort((a, b) => a - b);
    volgorde.set(conceptId, niveaus.flatMap((n) => schud(eigen.filter((v) => v.niveau === n))));
  }
  return volgorde.get(conceptId);
}
