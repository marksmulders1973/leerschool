// Leerpad: Schaal & kaart rekenen — groep 7-8 PO.
// Doorstroomtoets-onderdeel rekenen (meten/verhoudingen). Wat schaal betekent,
// van kaart naar echt en terug rekenen.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Wat betekent schaal?", emoji: "🗺️", from: 0, to: 0 },
  { letter: "B", title: "Van kaart naar het echt", emoji: "📏", from: 1, to: 1 },
  { letter: "C", title: "Van het echt naar de kaart", emoji: "📐", from: 2, to: 2 },
  { letter: "D", title: "In het echt: afstanden", emoji: "🧭", from: 3, to: 3 },
];

const steps = [
  // ─── A. Wat betekent schaal ───────────────────────────────
  {
    title: "Wat betekent schaal?",
    explanation:
      "Een kaart is een **verkleining** van de werkelijkheid. De **schaal** vertelt hoeveel kleiner.\n\n" +
      "**Schaal 1 : 100** betekent: **1 cm op de kaart = 100 cm in het echt.** Alles is dus 100 keer verkleind.\n\n" +
      "Andere voorbeelden:\n" +
      "• 1 : 1.000 → 1 cm op de kaart = 1.000 cm = 10 m echt.\n" +
      "• 1 : 100.000 → 1 cm op de kaart = 100.000 cm = 1 km echt.\n\n" +
      "**Belangrijk:** het tweede getal is het aantal keer dat het verkleind is. Hoe groter dat getal, hoe meer de werkelijkheid is verkleind.",
    checks: [
      {
        q: "Schaal 1 : 100 betekent: 1 cm op de kaart is in het echt...",
        options: ["100 cm", "1 cm", "10 cm", "1.000 cm"],
        answer: 0,
        wrongHints: [null, "Dan zou de kaart even groot zijn als het echt.", "Te weinig — kijk naar het schaalgetal.", "Dat hoort bij schaal 1 : 1.000."],
        uitlegPad: {
          stappen: [
            { titel: "Wat zegt een schaalgetal?", tekst: "Bij een schaal als 1 : 100 vertelt het tweede getal hoe vaak de kaart kleiner is dan de werkelijkheid." },
            { titel: "Reken het om", tekst: "Neem de afstand op de kaart in centimeter en vermenigvuldig die met het schaalgetal. Zo vind je de echte afstand, ook in centimeter." },
          ],
          woorden: [{ woord: "schaal", uitleg: "Het getal dat vertelt hoeveel keer een kaart kleiner is dan de werkelijkheid, geschreven als 1 : een getal." }],
          theorie: "Een **schaal** zoals 1 : 100 betekent dat de kaart precies honderd keer kleiner is dan de werkelijkheid. Het getal vóór de dubbele punt hoort altijd bij de kaart, het getal ná de dubbele punt hoort bij het echte leven. Om van de kaart naar de werkelijkheid te gaan, **vermenigvuldig** je met het schaalgetal.",
          voorbeelden: [{ type: "school", tekst: "Op een plattegrond van school staat de gang 1 cm lang. Bij schaal 1 : 500 reken je uit hoe lang de gang in het echt is door met 500 te vermenigvuldigen." }],
          basiskennis: [{ onderwerp: "Verhoudingen", uitleg: "Een schaal is een verhouding tussen twee lengtes: kaart-lengte staat tot echte lengte." }],
          niveaus: {
            basis: "Het tweede getal (100) zegt hoeveel cm echt bij 1 cm op de kaart hoort: 100 cm.",
            simpeler: "1 cm op de kaart = … cm echt? Kijk naar het getal achter de dubbele punt.",
            nogSimpeler: "Wat staat er na de '1 :' ?",
          },
        },
      },
      {
        q: "Bij schaal 1 : 1.000 is de werkelijkheid hoeveel keer verkleind op de kaart?",
        options: ["1.000 keer", "10 keer", "100 keer", "1 keer"],
        answer: 0,
        wrongHints: [null, "Dat hoort bij 1 : 10.", "Dat hoort bij 1 : 100.", "Dan zou er niets verkleind zijn."],
        uitlegPad: {
          stappen: [
            { titel: "Het schaalgetal is de verkleinfactor", tekst: "Bij een schaal 1 : een getal zegt dat getal precies hoe vaak alles kleiner is gemaakt op de kaart." },
            { titel: "Kijk naar het getal na de dubbele punt", tekst: "Zoek het getal dat achter de '1 :' staat — dat is het antwoord op 'hoeveel keer kleiner'." },
          ],
          woorden: [{ woord: "verkleind", uitleg: "Kleiner gemaakt. Bij een kaart betekent dit dat alles evenveel keer kleiner is dan in het echt." }],
          theorie: "Het schaalgetal (het getal ná de dubbele punt) geeft altijd de **verkleinfactor** aan: hoe vaak de werkelijkheid past in de kaartafbeelding. Hoe groter dat getal, hoe sterker alles is verkleind. Dit getal is voor élke afstand op die kaart hetzelfde.",
          voorbeelden: [{ type: "thuis", tekst: "Een speelgoedauto op schaal 1 : 18 is achttien keer kleiner dan de echte auto — elk onderdeel is even vaak verkleind." }],
          basiskennis: [{ onderwerp: "Verhoudingsgetal", uitleg: "Het getal ná de dubbele punt bij een schaal staat los van de eenheid — het is gewoon een aantal keer." }],
          niveaus: {
            basis: "Het tweede getal (1.000) is het aantal keer verkleind.",
            simpeler: "Welk getal staat er na de dubbele punt?",
            nogSimpeler: "1 : 1.000 → hoeveel keer kleiner?",
          },
        },
      },
      {
        q: "Schaal 1 : 50.000 — 1 cm op de kaart is hoeveel meter in het echt?",
        options: ["500 m", "50 m", "5.000 m", "5 m"],
        answer: 0,
        wrongHints: [null, "Te weinig — 50.000 cm is meer dan 50 m.", "Te veel — reken cm naar m terug.", "Veel te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst naar centimeter", tekst: "Bij schaal 1 : 50.000 hoort bij elke centimeter op de kaart vijftigduizend centimeter in het echt." },
            { titel: "Reken cm om naar meter", tekst: "Omdat 100 cm gelijk is aan 1 meter, deel je het aantal centimeter door 100 om de lengte in meter te krijgen." },
          ],
          woorden: [{ woord: "omrekenen", uitleg: "Een lengte van de ene eenheid (zoals cm) veranderen naar een andere eenheid (zoals m of km)." }],
          theorie: "Bij schaalvragen kom je vaak eerst uit op een antwoord in **centimeter**, terwijl er om meters of kilometers gevraagd wordt. Vergeet die laatste stap niet: 100 cm = 1 m en 100.000 cm = 1 km. Werk daarom altijd in twee stappen: eerst vermenigvuldigen met het schaalgetal, dan pas omrekenen naar de gevraagde eenheid.",
          voorbeelden: [{ type: "sport", tekst: "Op een plattegrond van een sportpark met schaal 1 : 20.000 reken je een afstand van 2 cm eerst om naar centimeter in het echt, en pas daarna naar meter." }],
          basiskennis: [{ onderwerp: "Lengte-eenheden", uitleg: "100 centimeter = 1 meter; 1.000 meter = 1 kilometer." }],
          niveaus: {
            basis: "50.000 cm = 500 m (100 cm = 1 m).",
            simpeler: "1 cm = 50.000 cm. Hoeveel meter is 50.000 cm?",
            nogSimpeler: "50.000 ÷ 100 = ?",
          },
        },
      },
      {
        q: "Welke schaal is het meest verkleind (de kaart toont het grootste gebied)?",
        options: ["1 : 100.000", "1 : 1.000", "1 : 100", "1 : 10"],
        answer: 0,
        wrongHints: [null, "Dat is veel minder verkleind.", "Nog minder verkleind.", "Het minst verkleind van allemaal."],
        uitlegPad: {
          stappen: [
            { titel: "Groter schaalgetal = sterker verkleind", tekst: "Hoe groter het getal ná de dubbele punt, hoe kleiner alles op de kaart is getekend en hoe meer werkelijkheid er op past." },
            { titel: "Vergelijk de vier getallen", tekst: "Leg de schaalgetallen naast elkaar en zoek welke het grootste is — dat is degene die het gebied het meest samenperst." },
          ],
          woorden: [{ woord: "gebied", uitleg: "Het stuk werkelijkheid (bijvoorbeeld een provincie of land) dat op de kaart te zien is." }],
          theorie: "Een kaart met een **groot schaalgetal** (zoals 1 : 1.000.000) toont een heel groot gebied, maar met weinig details, omdat alles extreem is verkleind. Een kaart met een **klein schaalgetal** (zoals 1 : 100) toont juist een klein gebied heel gedetailleerd. Om te bepalen welke kaart het grootste gebied laat zien, vergelijk je simpelweg welk schaalgetal het grootst is.",
          voorbeelden: [{ type: "school", tekst: "Een wereldkaart heeft een veel groter schaalgetal dan een plattegrond van je eigen straat, want de wereldkaart moet veel meer werkelijkheid op hetzelfde vel papier laten passen." }],
          basiskennis: [{ onderwerp: "Grote getallen vergelijken", uitleg: "Bij getallen met punten zoals 100.000 en 1.000: tel eerst hoeveel cijfers ervoor staan, dat laat meteen zien welk getal groter is." }],
          niveaus: {
            basis: "1 : 100.000 heeft het grootste getal → het meest verkleind.",
            simpeler: "Welk schaalgetal is het grootst?",
            nogSimpeler: "Welk getal is groter: 100.000 of 100?",
          },
        },
      },
      {
        q: "Schaal 1 : 200 betekent dat 1 cm op de kaart … cm in het echt is.",
        options: ["200 cm", "2 cm", "20 cm", "2.000 cm"],
        answer: 0,
        wrongHints: [null, "Kijk naar het schaalgetal — het is groter dan 2.", "Te weinig — kijk naar het getal na de dubbele punt.", "Dat hoort bij schaal 1 : 2.000."],
        uitlegPad: {
          stappen: [
            { titel: "Het schaalgetal lezen", tekst: "Het getal ná de dubbele punt in 1 : 200 vertelt hoeveel keer groter de werkelijkheid is dan de kaart." },
            { titel: "Zet om naar centimeter", tekst: "Vermenigvuldig de kaart-afstand in centimeter met dat schaalgetal om de echte afstand in centimeter te vinden." },
          ],
          woorden: [{ woord: "dubbele punt", uitleg: "Het teken ':' in een schaal, dat de kaart-maat scheidt van de echte maat." }],
          theorie: "Bij een schaal 1 : 200 geldt: elke centimeter op de kaart stelt tweehonderd keer zoveel centimeter in het echt voor. Deze regel geldt voor élke lengte op die kaart, niet alleen voor 1 cm. Reken daarom altijd de kaart-afstand keer het schaalgetal uit.",
          voorbeelden: [{ type: "winkel", tekst: "Een bouwtekening van een keuken met schaal 1 : 50 laat zien hoe je een kastje van 3 cm op papier omrekent naar de echte breedte." }],
          basiskennis: [{ onderwerp: "Vermenigvuldigen", uitleg: "Kaart-afstand × schaalgetal = echte afstand, allebei in dezelfde eenheid (meestal cm)." }],
          niveaus: {
            basis: "Het getal na de dubbele punt (200) is de echte lengte in cm bij 1 cm op de kaart.",
            simpeler: "1 cm op de kaart = ? cm echt. Kijk naar het getal achter de '1 :'.",
            nogSimpeler: "Wat staat er na de '1 :' in schaal 1 : 200?",
          },
        },
      },
      {
        q: "Schaal 1 : 10.000 — 1 cm op de kaart is hoeveel meter in het echt?",
        options: ["100 m", "10 m", "1.000 m", "10.000 m"],
        answer: 0,
        wrongHints: [null, "Te weinig — 10.000 cm is meer dan 10 m.", "Te veel — deel 10.000 door 100 om naar meters te gaan.", "Dat zijn centimeters, niet meters."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst het schaalgetal", tekst: "Bij schaal 1 : 10.000 hoort bij elke centimeter op de kaart tienduizend centimeter in het echt." },
            { titel: "Van cm naar meter", tekst: "Deel het aantal centimeter door honderd om de afstand in meter te krijgen." },
          ],
          woorden: [{ woord: "tienduizend", uitleg: "Het getal 10.000 — tien keer duizend." }],
          theorie: "Grote schaalgetallen zoals 10.000 leveren bij het rekenen al snel een uitkomst in duizenden centimeters op. Daarom reken je zulke antwoorden bijna altijd meteen door naar meter, met de regel 100 cm = 1 m. Zo blijft het antwoord overzichtelijk.",
          voorbeelden: [{ type: "sport", tekst: "Op een wandelkaart met schaal 1 : 10.000 stelt 3 cm een pad voor dat je in het echt moet omrekenen naar meters om te weten hoe ver je loopt." }],
          basiskennis: [{ onderwerp: "cm naar m", uitleg: "Om van centimeter naar meter te gaan, deel je door 100." }],
          niveaus: {
            basis: "10.000 cm = 100 m (100 cm = 1 m).",
            simpeler: "1 cm = 10.000 cm. Hoeveel meter is 10.000 cm?",
            nogSimpeler: "10.000 ÷ 100 = ?",
          },
        },
      },
    ],
  },

  // ─── B. Kaart → echt ──────────────────────────────────────
  {
    title: "Van de kaart naar het echt",
    explanation:
      "Om van een afstand **op de kaart** naar de **echte** afstand te gaan:\n\n" +
      "**afstand op kaart (cm) × schaalgetal = echte afstand (cm)**\n\n" +
      "Daarna reken je de cm om naar m of km:\n" +
      "• 100 cm = 1 m\n" +
      "• 100.000 cm = 1 km\n\n" +
      "Voorbeeld: schaal 1 : 1.000, op de kaart 3 cm. → 3 × 1.000 = 3.000 cm = 30 m.",
    checks: [
      {
        q: "Schaal 1 : 100. Op de kaart is iets 5 cm. Hoeveel cm is dat in het echt?",
        options: ["500 cm", "50 cm", "105 cm", "5 cm"],
        answer: 0,
        wrongHints: [null, "Reken: 5 × 100.", "Niet optellen — vermenigvuldigen met de schaal.", "Dat is de kaart-afstand zelf."],
        uitlegPad: {
          stappen: [
            { titel: "Welke kant op?", tekst: "Je gaat van de kaart naar de werkelijkheid, dus vermenigvuldig je met het schaalgetal." },
            { titel: "Reken de vermenigvuldiging uit", tekst: "Neem de kaart-afstand in centimeter en vermenigvuldig die met het schaalgetal 100." },
          ],
          woorden: [{ woord: "kaart-afstand", uitleg: "De lengte die je meet op de kaart zelf, meestal in centimeter." }],
          theorie: "Om van een afstand **op de kaart** naar de **echte** afstand te gaan, gebruik je altijd dezelfde regel: kaart-afstand × schaalgetal = echte afstand, in dezelfde eenheid. Deze richting (kaart → echt) is altijd een vermenigvuldiging, omdat de werkelijkheid groter is dan de kaart.",
          voorbeelden: [{ type: "thuis", tekst: "Een plattegrond van je slaapkamer met schaal 1 : 50 laat je bed als 4 cm zien — vermenigvuldig met 50 om de echte lengte te vinden." }],
          basiskennis: [{ onderwerp: "Vermenigvuldigen bij kaart → echt", uitleg: "De richting 'van klein naar groot' hoort bij vermenigvuldigen, niet bij delen." }],
          niveaus: {
            basis: "5 × 100 = 500 cm.",
            simpeler: "Vermenigvuldig de kaart-afstand met 100.",
            nogSimpeler: "5 × 100 = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 1.000. Op de kaart 3 cm. Hoeveel meter in het echt?",
        options: ["30 m", "3 m", "300 m", "3.000 m"],
        answer: 0,
        wrongHints: [null, "Reken 3 × 1.000 cm en dan naar meter.", "Vergeet de schaal niet.", "Je vergat cm naar m om te rekenen."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldig eerst", tekst: "Neem de kaart-afstand in centimeter en vermenigvuldig die met het schaalgetal om de echte afstand in centimeter te krijgen." },
            { titel: "Zet daarna om naar meter", tekst: "Deel de uitkomst in centimeter door honderd, want honderd centimeter is één meter." },
          ],
          woorden: [{ woord: "twee rekenstappen", uitleg: "Bij schaalsommen met meters of kilometers reken je meestal eerst naar cm, en daarna pas om naar de gevraagde eenheid." }],
          theorie: "Een schaalvraag met meters of kilometers vraagt bijna altijd om **twee stappen**: eerst vermenigvuldig je de kaart-afstand met het schaalgetal (uitkomst in cm), en daarna reken je die centimeters om naar de gevraagde eenheid. Sla je die laatste stap over, dan is je antwoord honderd keer te groot.",
          voorbeelden: [{ type: "school", tekst: "Op een plattegrond van het schoolplein met schaal 1 : 300 meet je een pad van 2 cm — na het vermenigvuldigen reken je de uitkomst nog om naar meter." }],
          basiskennis: [{ onderwerp: "cm naar m", uitleg: "100 centimeter is gelijk aan 1 meter." }],
          niveaus: {
            basis: "3 × 1.000 = 3.000 cm = 30 m.",
            simpeler: "3.000 cm omrekenen naar meter: deel door 100.",
            nogSimpeler: "3.000 ÷ 100 = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 100.000. Op de kaart 4 cm. Hoeveel km in het echt?",
        options: ["4 km", "40 km", "400 m", "0,4 km"],
        answer: 0,
        wrongHints: [null, "Te veel — reken cm goed naar km.", "Te weinig.", "Te weinig — het is meerdere kilometers."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldig met het schaalgetal", tekst: "Neem de kaart-afstand keer honderdduizend om de echte afstand in centimeter te vinden." },
            { titel: "Ken de handige truc", tekst: "Bij schaal 1 : 100.000 komt elke centimeter op de kaart overeen met precies één kilometer in het echt — dat maakt omrekenen snel." },
          ],
          woorden: [{ woord: "kilometer", uitleg: "Een lengte-eenheid gelijk aan 1.000 meter, gebruikt voor grote afstanden." }],
          theorie: "Schaal **1 : 100.000** komt zo vaak voor bij landkaarten dat het slim is de vuistregel te onthouden: 1 cm op de kaart is dan altijd 1 km in het echt. Dat komt omdat 100.000 cm precies gelijk is aan 1 km. Zo hoef je niet elke keer helemaal via centimeters te rekenen.",
          voorbeelden: [{ type: "sport", tekst: "Op een fietskaart met schaal 1 : 100.000 kun je meteen de kilometers aflezen door het aantal centimeters van de route te tellen." }],
          basiskennis: [{ onderwerp: "100.000 cm = 1 km", uitleg: "Honderdduizend centimeter is gelijk aan duizend meter, en dat is precies 1 kilometer." }],
          niveaus: {
            basis: "4 × 100.000 = 400.000 cm = 4 km.",
            simpeler: "Bij schaal 1 : 100.000 is 1 cm = 1 km. Dus 4 cm = 4 km.",
            nogSimpeler: "1 cm = 1 km, hoeveel is 4 cm?",
          },
        },
      },
      {
        q: "Schaal 1 : 50.000. Op de kaart 2 cm. Hoeveel km in het echt?",
        options: ["1 km", "2 km", "0,5 km", "10 km"],
        answer: 0,
        wrongHints: [null, "Reken: 2 × 50.000 cm en dan naar km.", "Net niet — 100.000 cm is 1 km.", "Veel te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldig eerst in centimeter", tekst: "Neem de kaart-afstand keer vijftigduizend om de echte afstand in centimeter te krijgen." },
            { titel: "Reken door naar kilometer", tekst: "Onthoud dat honderdduizend centimeter gelijk is aan één kilometer, en gebruik dat om je uitkomst om te zetten." },
          ],
          woorden: [{ woord: "vuistregel", uitleg: "Een handig, makkelijk te onthouden rekentrucje voor een veelvoorkomende situatie." }],
          theorie: "Bij schaal 1 : 50.000 stelt elke centimeter op de kaart een halve kilometer in het echt voor. Zo'n vuistregel is handig, maar werkt alleen bij dít schaalgetal — reken bij een andere schaal altijd opnieuw via centimeters. Vermenigvuldig eerst met het schaalgetal, reken daarna om naar de gevraagde eenheid.",
          voorbeelden: [{ type: "winkel", tekst: "Op een wandelroutekaart met schaal 1 : 50.000 kun je met deze vuistregel snel inschatten hoe lang een wandeling in het echt wordt." }],
          basiskennis: [{ onderwerp: "cm naar km", uitleg: "Honderdduizend centimeter is gelijk aan één kilometer." }],
          niveaus: {
            basis: "2 × 50.000 = 100.000 cm = 1 km.",
            simpeler: "1 cm = 50.000 cm = 0,5 km. Dus 2 cm = 1 km.",
            nogSimpeler: "0,5 km + 0,5 km = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 25.000. Op de kaart 8 cm. Hoeveel km is dat in het echt?",
        options: ["2 km", "8 km", "0,2 km", "20 km"],
        answer: 0,
        wrongHints: [null, "Reken: 8 × 25.000 cm en zet om naar km.", "Te weinig — reken de cm goed om.", "Te veel — controleer hoeveel km bij 1 cm hoort."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst vermenigvuldigen", tekst: "Neem de kaart-afstand keer het schaalgetal om de echte afstand in centimeter uit te rekenen." },
            { titel: "Dan omrekenen naar kilometer", tekst: "Deel de uitkomst in centimeter door honderdduizend om de afstand in kilometer te krijgen." },
          ],
          woorden: [{ woord: "controleren", uitleg: "Na het rekenen even nagaan of de uitkomst logisch is bij de vraag." }],
          theorie: "Bij grotere schaalgetallen zoals 25.000 werk je met grotere tussenuitkomsten in centimeter. Blijf toch rustig in twee stappen werken: eerst vermenigvuldigen met het schaalgetal, dan pas omrekenen naar de gevraagde eenheid. Zo maak je minder rekenfouten dan wanneer je het in één keer probeert.",
          voorbeelden: [{ type: "school", tekst: "Bij een topografische kaart van de klas met schaal 1 : 25.000 reken je de afstand tussen twee dorpen stap voor stap om naar kilometers." }],
          basiskennis: [{ onderwerp: "cm naar km", uitleg: "Honderdduizend centimeter is gelijk aan één kilometer." }],
          niveaus: {
            basis: "8 × 25.000 = 200.000 cm = 2 km.",
            simpeler: "1 cm = 25.000 cm = 0,25 km. Dus 8 cm = 8 × 0,25 = 2 km.",
            nogSimpeler: "200.000 ÷ 100.000 = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 100. Op de kaart staat een weg van 12 cm. Hoe lang is de weg in het echt in meter?",
        options: ["12 m", "1,2 m", "120 m", "1.200 m"],
        answer: 0,
        wrongHints: [null, "Reken 12 × 100 cm en zet om naar meter.", "Reken 12 × 100 eerst in cm.", "Controleer de omrekening van cm naar m."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldig met het schaalgetal", tekst: "Neem de lengte op de kaart keer honderd om de echte lengte in centimeter te krijgen." },
            { titel: "Zet om naar meter", tekst: "Deel de uitkomst in centimeter door honderd om de lengte in meter te vinden." },
          ],
          woorden: [{ woord: "weg", uitleg: "Een pad of straat waarover je loopt, fietst of rijdt." }],
          theorie: "Bij schaal 1 : 100 reken je een lengte op de kaart eerst om naar centimeter in het echt door te vermenigvuldigen met honderd. Vraagt de opgave om meters, dan deel je die uitkomst nog een keer door honderd. Zo blijft elke stap klein en overzichtelijk.",
          voorbeelden: [{ type: "sport", tekst: "Op de plattegrond van een sportveld met schaal 1 : 100 reken je de lengte van een looppad om naar de echte afstand in meter." }],
          basiskennis: [{ onderwerp: "Twee keer rekenen", uitleg: "Eerst kaart-afstand × schaalgetal, dan pas cm omzetten naar meter." }],
          niveaus: {
            basis: "12 × 100 = 1.200 cm = 12 m.",
            simpeler: "Reken de cm uit (1.200), dan deel door 100 voor meters.",
            nogSimpeler: "1.200 ÷ 100 = ?",
          },
        },
      },
    ],
  },

  // ─── C. Echt → kaart ──────────────────────────────────────
  {
    title: "Van het echt naar de kaart",
    explanation:
      "Andersom: van een **echte** afstand naar de afstand **op de kaart**:\n\n" +
      "**echte afstand (cm) ÷ schaalgetal = afstand op kaart (cm)**\n\n" +
      "Let op: reken de echte afstand eerst om naar **cm** (1 m = 100 cm, 1 km = 100.000 cm).\n\n" +
      "Voorbeeld: schaal 1 : 1.000, echte weg 50 m. → 50 m = 5.000 cm. → 5.000 ÷ 1.000 = 5 cm op de kaart.",
    checks: [
      {
        q: "Schaal 1 : 100. Een muur is in het echt 300 cm. Hoe lang is hij op de kaart?",
        options: ["3 cm", "30 cm", "300 cm", "0,3 cm"],
        answer: 0,
        wrongHints: [null, "Deel door 100, je deelde door 10.", "Dat is de echte lengte.", "Te klein — deel door 100, niet door 1.000."],
        uitlegPad: {
          stappen: [
            { titel: "Andere richting, andere bewerking", tekst: "Je gaat nu van de werkelijkheid naar de kaart, dus deel je door het schaalgetal in plaats van te vermenigvuldigen." },
            { titel: "Voer de deling uit", tekst: "Deel de echte lengte in centimeter door het schaalgetal honderd." },
          ],
          woorden: [{ woord: "delen", uitleg: "De rekenbewerking waarmee je een grote hoeveelheid verdeelt in kleinere, gelijke stukken — hier gebruikt om iets kleiner te maken." }],
          theorie: "Ga je van de **echte** afstand naar de afstand **op de kaart**, dan deel je door het schaalgetal in plaats van te vermenigvuldigen. Dat is logisch: de kaart is kleiner dan de werkelijkheid, dus de uitkomst moet ook kleiner worden. Zorg dat de echte afstand eerst in centimeter staat voor je gaat delen.",
          voorbeelden: [{ type: "thuis", tekst: "Wil je een tekening maken van je huis op schaal 1 : 100, dan deel je elke echte muurlengte door honderd om de lengte op papier te vinden." }],
          basiskennis: [{ onderwerp: "Echt → kaart is delen", uitleg: "Van groot naar klein ga je bij schaalsommen altijd delen door het schaalgetal." }],
          niveaus: {
            basis: "300 ÷ 100 = 3 cm.",
            simpeler: "Deel de echte lengte door 100.",
            nogSimpeler: "300 ÷ 100 = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 1.000. Een weg is 50 m lang. Hoe lang op de kaart?",
        options: ["5 cm", "50 cm", "0,5 cm", "500 cm"],
        answer: 0,
        wrongHints: [null, "Reken 50 m eerst naar cm (5.000), dan ÷ 1.000.", "Je vergat door de schaal te delen.", "Te klein."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst naar centimeter", tekst: "Zet de echte lengte om naar centimeter, want het schaalgetal werkt met centimeters." },
            { titel: "Dan delen door het schaalgetal", tekst: "Deel het aantal centimeter door het schaalgetal duizend om de lengte op de kaart te vinden." },
          ],
          woorden: [{ woord: "omzetten", uitleg: "Een lengte van meter naar centimeter (of andersom) herschrijven, zodat je ermee kunt rekenen." }],
          theorie: "Staat de echte afstand in meters of kilometers, zet die dan eerst om naar **centimeter** — want de schaal vergelijkt altijd centimeter met centimeter. Pas daarna deel je door het schaalgetal om de afstand op de kaart te vinden. Deze twee stappen samen voorkomen rekenfouten.",
          voorbeelden: [{ type: "school", tekst: "Voor een werkstuk teken je het schoolplein op schaal 1 : 1.000 — een echte afstand van 20 m zet je eerst om naar centimeter voor je gaat delen." }],
          basiskennis: [{ onderwerp: "m naar cm", uitleg: "1 meter is gelijk aan 100 centimeter." }],
          niveaus: {
            basis: "50 m = 5.000 cm; 5.000 ÷ 1.000 = 5 cm.",
            simpeler: "Maak van 50 m eerst cm, deel dan door 1.000.",
            nogSimpeler: "5.000 ÷ 1.000 = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 100.000. De afstand tussen twee dorpen is 5 km. Hoe lang op de kaart?",
        options: ["5 cm", "50 cm", "0,5 cm", "500 cm"],
        answer: 0,
        wrongHints: [null, "Reken: hoeveel cm zijn 5 km bij deze schaal? Begin met 1 km.", "Te groot — kijk goed naar de schaalverhouding.", "Te klein — je mist een factor."],
        uitlegPad: {
          stappen: [
            { titel: "De vuistregel toepassen", tekst: "Bij schaal 1 : 100.000 is elke kilometer in het echt gelijk aan één centimeter op de kaart." },
            { titel: "Reken de kilometers om", tekst: "Gebruik die vuistregel om het aantal kilometers direct om te zetten naar centimeter op de kaart." },
          ],
          woorden: [{ woord: "dorpen", uitleg: "Kleine plaatsen; op een kaart worden de afstanden ertussen vaak in kilometers gegeven." }],
          theorie: "Ook in de richting **echt → kaart** werkt de vuistregel voor schaal 1 : 100.000: één kilometer in het echt hoort bij precies één centimeter op de kaart. Dat is handig, maar reken bij een andere schaal altijd via de gewone regel: echte afstand in centimeter gedeeld door het schaalgetal.",
          voorbeelden: [{ type: "sport", tekst: "Voor een hardloopwedstrijd van 8 km teken je met schaal 1 : 100.000 een route die je met deze vuistregel snel op papier zet." }],
          basiskennis: [{ onderwerp: "1 km = 1 cm bij deze schaal", uitleg: "Dit werkt alleen bij schaal 1 : 100.000, omdat 100.000 cm precies 1 km is." }],
          niveaus: {
            basis: "1 : 100.000 → 1 km = 1 cm. 5 km = 5 cm.",
            simpeler: "Hoeveel cm hoort er bij 1 km? En bij 5 km?",
            nogSimpeler: "1 km = 1 cm, dus 5 km = … cm?",
          },
        },
      },
      {
        q: "Hoe ga je van de echte afstand naar de afstand op de kaart?",
        options: ["delen door het schaalgetal", "keer het schaalgetal", "het schaalgetal erbij optellen", "het schaalgetal eraf halen"],
        answer: 0,
        wrongHints: [null, "Dat is juist andersom (kaart → echt).", "Optellen klopt niet bij schaal.", "Aftrekken klopt niet bij schaal."],
        uitlegPad: {
          stappen: [
            { titel: "Kijk naar de richting", tekst: "De kaart is altijd kleiner dan de werkelijkheid, dus de bewerking moet de afstand kleiner maken." },
            { titel: "Welke bewerking maakt kleiner?", tekst: "Van de twee hoofdbewerkingen optellen/aftrekken en vermenigvuldigen/delen maakt delen een getal kleiner, als je door een getal groter dan 1 rekent." },
          ],
          woorden: [{ woord: "bewerking", uitleg: "Een rekenstap zoals optellen, aftrekken, vermenigvuldigen of delen." }],
          theorie: "Bij schaalsommen zijn er maar twee richtingen mogelijk: van de kaart naar het echt (de afstand wordt groter, dus je **vermenigvuldigt**) of van het echt naar de kaart (de afstand wordt kleiner, dus je **deelt**). Onthoud deze twee richtingen goed, want ze zijn precies elkaars tegenovergestelde.",
          voorbeelden: [{ type: "thuis", tekst: "Een architect die een huis eerst op ware grootte bouwt en daarna een kleine tekening maakt, gebruikt dezelfde denkstap: van groot naar klein." }],
          basiskennis: [{ onderwerp: "Tegenovergestelde bewerkingen", uitleg: "Vermenigvuldigen en delen zijn elkaars tegenovergestelde — de ene maakt groter, de andere kleiner." }],
          niveaus: {
            basis: "Echte afstand ÷ schaalgetal = kaart-afstand.",
            simpeler: "Wordt het op de kaart groter of kleiner? Kleiner → delen.",
            nogSimpeler: "De kaart is kleiner: keer of delen?",
          },
        },
      },
      {
        q: "Schaal 1 : 200. Een schutting is in het echt 600 cm. Hoe lang is hij op de kaart?",
        options: ["3 cm", "30 cm", "120 cm", "0,3 cm"],
        answer: 0,
        wrongHints: [null, "Deel door 200, niet door 20.", "Vergeet niet door de schaal te delen.", "Te klein — deel door 200, niet door 2.000."],
        uitlegPad: {
          stappen: [
            { titel: "Andere richting", tekst: "De echte lengte is gegeven, dus je gaat nu van het echt naar de kaart en dus delen." },
            { titel: "Voer de deling uit", tekst: "Deel de echte lengte in centimeter door het schaalgetal tweehonderd." },
          ],
          woorden: [{ woord: "schutting", uitleg: "Een houten of ander hek rond een tuin." }],
          theorie: "Bij elke schaalsom van echt naar kaart geldt dezelfde regel: echte lengte in centimeter gedeeld door het schaalgetal geeft de lengte op de kaart. Controleer voor je begint of de echte lengte al in centimeter staat — anders zet je die eerst om.",
          voorbeelden: [{ type: "thuis", tekst: "Bij het tekenen van de tuin op schaal 1 : 200 deel je de echte lengte van elk hek door tweehonderd." }],
          basiskennis: [{ onderwerp: "Echt → kaart is delen", uitleg: "Deel de echte afstand in centimeter door het schaalgetal." }],
          niveaus: {
            basis: "600 ÷ 200 = 3 cm.",
            simpeler: "Deel de echte lengte door 200.",
            nogSimpeler: "600 ÷ 200 = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 50.000. Twee dorpen liggen 10 km uit elkaar. Hoe ver is dat op de kaart?",
        options: ["20 cm", "10 cm", "2 cm", "100 cm"],
        answer: 0,
        wrongHints: [null, "Reken: 10 km = hoeveel cm? Deel dat door 50.000.", "Te klein — hoeveel cm zijn 10 km?", "Veel te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst naar centimeter", tekst: "Zet de tien kilometer om naar centimeter, zodat je met het schaalgetal kunt rekenen." },
            { titel: "Deel door het schaalgetal", tekst: "Deel het aantal centimeter door vijftigduizend om de afstand op de kaart te vinden." },
          ],
          woorden: [{ woord: "uit elkaar liggen", uitleg: "De afstand tussen twee plaatsen." }],
          theorie: "Bij grote afstanden in kilometers reken je eerst om naar centimeter (1 km = 100.000 cm), en pas daarna deel je door het schaalgetal. Zo blijven de rekenstappen behapbaar, ook al is de uitkomst in centimeter eerst een groot getal.",
          voorbeelden: [{ type: "sport", tekst: "Voor een wielerkaart met schaal 1 : 50.000 reken je een parcours van 15 km eerst om naar centimeter voor je de kaartlengte bepaalt." }],
          basiskennis: [{ onderwerp: "km naar cm", uitleg: "1 kilometer is gelijk aan 100.000 centimeter." }],
          niveaus: {
            basis: "10 km = 1.000.000 cm; 1.000.000 ÷ 50.000 = 20 cm.",
            simpeler: "Bij 1 : 50.000 is 1 cm op de kaart 0,5 km. Dus 10 km is 10 ÷ 0,5 = 20 cm.",
            nogSimpeler: "1 cm = 0,5 km, hoeveel cm is dan 10 km?",
          },
        },
      },
    ],
  },

  // ─── D. In het echt ───────────────────────────────────────
  {
    title: "In het echt — afstanden op de kaart",
    explanation:
      "Bij de Doorstroomtoets staan schaalvragen vaak in een verhaal met een kaart. Werk altijd in deze volgorde:\n\n" +
      "1. **Welke kant op?** Van kaart naar echt = × schaalgetal. Van echt naar kaart = ÷ schaalgetal.\n" +
      "2. **Reken** uit (in cm).\n" +
      "3. **Zet om** naar de gevraagde eenheid (m of km).\n\n" +
      "Onthoud de handige stap: bij schaal 1 : 100.000 is **1 cm = 1 km**.",
    checks: [
      {
        q: "Op een kaart (schaal 1 : 100.000) is de route 7 cm. Hoeveel km moet je echt fietsen?",
        options: ["7 km", "70 km", "0,7 km", "700 m"],
        answer: 0,
        wrongHints: [null, "Te veel — reken eerst hoeveel kilometer één cm op de kaart voorstelt.", "Te weinig — zet de schaal om: hoeveel kilometer hoort bij één cm?", "Te weinig — het zijn meerdere kilometers."],
        uitlegPad: {
          stappen: [
            { titel: "Herken de vuistregel", tekst: "Bij schaal 1 : 100.000 stelt elke centimeter op de kaart precies één kilometer in het echt voor." },
            { titel: "Pas de vuistregel toe", tekst: "Gebruik dat om het aantal centimeter direct om te zetten naar het aantal kilometer." },
          ],
          woorden: [{ woord: "route", uitleg: "De weg die je aflegt van je startpunt naar je bestemming." }],
          theorie: "De vuistregel 1 cm = 1 km geldt precies bij schaal **1 : 100.000**, een schaal die vaak gebruikt wordt voor fiets- en wandelkaarten. Zonder deze vuistregel reken je hetzelfde uit via centimeters: kaart-afstand keer honderdduizend, en dat weer omrekenen naar kilometer.",
          voorbeelden: [{ type: "sport", tekst: "Op een fietskaart met schaal 1 : 100.000 tel je zo snel de kilometers van een tocht af aan de hand van de centimeters op de kaart." }],
          basiskennis: [{ onderwerp: "1 cm = 1 km bij 1 : 100.000", uitleg: "Dit klopt omdat honderdduizend centimeter precies gelijk is aan één kilometer." }],
          niveaus: {
            basis: "7 cm × (1 km per cm) = 7 km.",
            simpeler: "1 cm is 1 km. Hoeveel is 7 cm?",
            nogSimpeler: "1 cm = 1 km, 7 cm = … km?",
          },
        },
      },
      {
        q: "Schaal 1 : 200. Op de kaart is een gebouw 6 cm. Hoeveel meter is het in het echt?",
        options: ["12 m", "1,2 m", "120 m", "6 m"],
        answer: 0,
        wrongHints: [null, "Reken 6 × 200 cm en dan naar meter.", "Te klein — reken nog eens.", "Te groot."],
        uitlegPad: {
          stappen: [
            { titel: "Bepaal de richting", tekst: "Je gaat van de kaart naar het echt, dus vermenigvuldig je met het schaalgetal." },
            { titel: "Reken uit en zet om", tekst: "Vermenigvuldig de kaart-afstand met tweehonderd voor de lengte in centimeter, en deel die daarna door honderd voor de lengte in meter." },
          ],
          woorden: [{ woord: "gebouw", uitleg: "Een huis, school of ander bouwwerk." }],
          theorie: "Ook bij grotere gebouwen werkt dezelfde twee-stappen-regel: eerst kaart-afstand keer schaalgetal voor de lengte in centimeter, dan die centimeters omrekenen naar de gevraagde eenheid. Sla geen van beide stappen over, ook al lijkt het antwoord na de eerste stap al klaar.",
          voorbeelden: [{ type: "school", tekst: "Op een plattegrond van een schoolgebouw met schaal 1 : 200 reken je de lengte van een lokaal in twee stappen om naar de echte lengte in meter." }],
          basiskennis: [{ onderwerp: "Twee-stappen-regel", uitleg: "Kaart × schaalgetal = cm echt; daarna cm ÷ 100 = meter." }],
          niveaus: {
            basis: "6 × 200 = 1.200 cm = 12 m.",
            simpeler: "Reken eerst de cm uit (1.200), dan naar meter.",
            nogSimpeler: "1.200 ÷ 100 = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 1.000. Een speeltuin is in het echt 80 m breed. Hoe breed op de kaart?",
        options: ["8 cm", "80 cm", "0,8 cm", "800 cm"],
        answer: 0,
        wrongHints: [null, "Reken 80 m naar cm (8.000), dan ÷ 1.000.", "Je vergat door de schaal te delen.", "Te klein."],
        uitlegPad: {
          stappen: [
            { titel: "Bepaal de richting", tekst: "De echte breedte is gegeven, dus je rekent van het echt naar de kaart en dus deel je." },
            { titel: "Reken in twee stappen", tekst: "Zet de tachtig meter eerst om naar centimeter, en deel die uitkomst daarna door het schaalgetal duizend." },
          ],
          woorden: [{ woord: "speeltuin", uitleg: "Een plek met speeltoestellen, bijvoorbeeld in een park." }],
          theorie: "Bij het tekenen van iets groots zoals een speeltuin op een kleine kaart, werk je van echt naar kaart: eerst de echte lengte omzetten naar centimeter, dan delen door het schaalgetal. Zo wordt een grote werkelijkheid netjes klein op papier.",
          voorbeelden: [{ type: "thuis", tekst: "Voor een plattegrond van de achtertuin met schaal 1 : 1.000 reken je de echte breedte op dezelfde manier om naar de kaart." }],
          basiskennis: [{ onderwerp: "m naar cm, dan delen", uitleg: "Eerst de echte lengte in centimeter zetten, dan pas delen door het schaalgetal." }],
          niveaus: {
            basis: "80 m = 8.000 cm; 8.000 ÷ 1.000 = 8 cm.",
            simpeler: "Maak van 80 m eerst cm, deel dan door 1.000.",
            nogSimpeler: "8.000 ÷ 1.000 = ?",
          },
        },
      },
      {
        q: "Twee steden liggen 3 km uit elkaar. Op een kaart staan ze 6 cm uit elkaar. Welke schaal heeft de kaart?",
        options: ["1 : 50.000", "1 : 100.000", "1 : 5.000", "1 : 500.000"],
        answer: 0,
        wrongHints: [null, "Reken: hoeveel cm is 3 km? Deel dat door het aantal cm op de kaart.", "Dan zou 6 cm een andere werkelijke afstand vertegenwoordigen — klopt dat met de gegeven steden?", "Veel te klein — hoe groot wordt het tweede getal als je deelt?"],
        uitlegPad: {
          stappen: [
            { titel: "Zet de echte afstand om", tekst: "Reken de drie kilometer eerst om naar centimeter, zodat je met de kaartafstand kunt vergelijken." },
            { titel: "Deel echt door kaart", tekst: "Deel het aantal centimeter in het echt door het aantal centimeter op de kaart — die uitkomst is het schaalgetal." },
          ],
          woorden: [{ woord: "steden", uitleg: "Grotere plaatsen; de afstand ertussen wordt op een kaart vaak in centimeters getekend." }],
          theorie: "Om een **onbekende schaal** te vinden, gebruik je de omgekeerde denkstap: deel de echte afstand (in centimeter) door de afstand op de kaart (in centimeter). De uitkomst is het schaalgetal, het getal dat achter de '1 :' komt te staan.",
          voorbeelden: [{ type: "school", tekst: "Bij een werkstuk over een zelfgetekende plattegrond bereken je de schaal door de echte afstand tussen twee punten te delen door de gemeten afstand op je eigen tekening." }],
          basiskennis: [{ onderwerp: "Schaal terugrekenen", uitleg: "Schaalgetal = echte afstand (cm) ÷ kaartafstand (cm)." }],
          niveaus: {
            basis: "300.000 cm echt ÷ 6 cm kaart = 50.000 → schaal 1 : 50.000.",
            simpeler: "Hoeveel cm echt hoort bij 1 cm kaart? 300.000 ÷ 6.",
            nogSimpeler: "300.000 ÷ 6 = ?",
          },
        },
      },
      {
        q: "Op een kaart (schaal 1 : 100.000) is een rivier 3,5 cm lang. Hoe lang is de rivier echt?",
        options: ["3,5 km", "35 km", "0,35 km", "350 km"],
        answer: 0,
        wrongHints: [null, "Reken: 3,5 × 100.000 cm en zet dat om naar km.", "Te weinig — reken de schaalfactor goed.", "Veel te veel."],
        uitlegPad: {
          stappen: [
            { titel: "De vuistregel bij deze schaal", tekst: "Bij schaal 1 : 100.000 komt elke centimeter op de kaart overeen met één kilometer in het echt." },
            { titel: "Pas toe op een kommagetal", tekst: "Deze vuistregel werkt ook bij een lengte met een komma erin — reken het aantal centimeter gewoon één op één om naar kilometer." },
          ],
          woorden: [{ woord: "rivier", uitleg: "Een lange, natuurlijke waterstroom." }],
          theorie: "De vuistregel 1 cm = 1 km bij schaal 1 : 100.000 werkt ook bij lengtes met een komma, zoals 2,5 cm of 4,5 cm. Reken zulke getallen op precies dezelfde manier om als hele getallen — de vuistregel verandert niet.",
          voorbeelden: [{ type: "sport", tekst: "Op een wandelkaart met schaal 1 : 100.000 lees je een pad van 1,5 cm net zo makkelijk af in kilometers als een pad van een heel getal." }],
          basiskennis: [{ onderwerp: "Kommagetallen omrekenen", uitleg: "Een vuistregel geldt ook voor lengtes met een komma; je rekent alleen met een ander soort getal." }],
          niveaus: {
            basis: "1 : 100.000 → 1 cm = 1 km. 3,5 cm = 3,5 km.",
            simpeler: "Hoeveel km hoort bij 1 cm? En bij 3,5 cm?",
            nogSimpeler: "1 cm = 1 km, 3,5 cm = … km?",
          },
        },
      },
      {
        q: "Een tuin is in het echt 15 m breed. Op de bouwtekening (schaal 1 : 500) is hij op de kaart … breed.",
        options: ["3 cm", "30 cm", "0,3 cm", "15 cm"],
        answer: 0,
        wrongHints: [null, "Reken 15 m naar cm (1.500), dan ÷ 500.", "Te klein — deel door 500, niet door 5.000.", "Dat is de echte breedte in meter, niet de kaart-breedte."],
        uitlegPad: {
          stappen: [
            { titel: "Bepaal de richting", tekst: "De echte breedte is gegeven, dus je gaat van het echt naar de kaart en dus deel je door het schaalgetal." },
            { titel: "Zet om en deel", tekst: "Reken de vijftien meter eerst om naar centimeter, en deel die uitkomst daarna door het schaalgetal vijfhonderd." },
          ],
          woorden: [{ woord: "bouwtekening", uitleg: "Een tekening op schaal die precies laat zien hoe iets gebouwd moet worden." }],
          theorie: "Bouwtekeningen gebruiken vaak schaal 1 : 500 voor tuinen of terreinen. De rekenwijze blijft hetzelfde: echte lengte omzetten naar centimeter, en dan delen door het schaalgetal om de lengte op de tekening te vinden.",
          voorbeelden: [{ type: "thuis", tekst: "Een architect tekent de oprit van een huis op schaal 1 : 500 door de echte lengte in centimeter te delen door vijfhonderd." }],
          basiskennis: [{ onderwerp: "m naar cm, dan delen", uitleg: "Eerst de echte lengte in centimeter zetten, dan pas delen door het schaalgetal." }],
          niveaus: {
            basis: "15 m = 1.500 cm; 1.500 ÷ 500 = 3 cm.",
            simpeler: "Maak van 15 m eerst cm (1.500), deel dan door 500.",
            nogSimpeler: "1.500 ÷ 500 = ?",
          },
        },
      },
      {
        q: "Welke stap doe je ALTIJD als eerste bij een schaalvraag?",
        options: [
          "Bepaal de richting: van kaart naar echt (×) of van echt naar kaart (÷)?",
          "Zet het antwoord direct om naar km",
          "Deel altijd door het schaalgetal",
          "Vermenigvuldig altijd met het schaalgetal",
        ],
        answer: 0,
        wrongHints: [null, "Dat is stap 3 — eerst de richting bepalen.", "Delen is alleen voor echt → kaart.", "Vermenigvuldigen is alleen voor kaart → echt."],
        uitlegPad: {
          stappen: [
            { titel: "Denk aan de twee richtingen", tekst: "Bij elke schaalvraag kun je maar twee kanten op: van de kaart naar de werkelijkheid, of van de werkelijkheid naar de kaart." },
            { titel: "Kies de bewerking die daarbij hoort", tekst: "Elke richting hoort bij een vaste bewerking — pas als je weet welke kant je op gaat, weet je of je moet vermenigvuldigen of delen." },
          ],
          woorden: [{ woord: "richting", uitleg: "Van welke kant naar welke kant je rekent: van kaart naar echt, of van echt naar kaart." }],
          theorie: "Voordat je begint te rekenen bij een schaalvraag, is de belangrijkste vraag: ga ik van de kaart náár de werkelijkheid, of van de werkelijkheid náár de kaart? Pas als dat duidelijk is, weet je zeker of je moet vermenigvuldigen of delen. Rekenen zonder eerst de richting te bepalen leidt vaak tot de verkeerde bewerking.",
          voorbeelden: [{ type: "school", tekst: "Bij een topografie-toets over kaartlezen is het handig om bij elke vraag eerst hardop te zeggen welke kant je op rekent, voor je een getal invult." }],
          basiskennis: [{ onderwerp: "Twee richtingen, twee bewerkingen", uitleg: "Kaart → echt is vermenigvuldigen; echt → kaart is delen." }],
          niveaus: {
            basis: "Richting: kaart → echt = ×; echt → kaart = ÷.",
            simpeler: "Lees de vraag: wil je de echte afstand of de kaart-afstand weten?",
            nogSimpeler: "Maak je het kleiner (kaart) of groter (echt)?",
          },
        },
      },
      {
        q: "Schaal 1 : 10. Een maquette van een huis is 30 cm breed. Hoe breed is het echte huis?",
        options: ["3 m", "30 m", "0,3 m", "300 m"],
        answer: 0,
        wrongHints: [null, "Reken 30 × 10 cm en zet dan om naar meter.", "Te klein — vergeet niet te vermenigvuldigen met 10.", "Veel te groot."],
        uitlegPad: {
          stappen: [
            { titel: "Bepaal de richting", tekst: "De maquette is de kaart-kant, dus je gaat van de kaart naar het echt en vermenigvuldig je." },
            { titel: "Reken uit en zet om", tekst: "Vermenigvuldig de maquette-breedte met het schaalgetal tien voor de lengte in centimeter, en deel die daarna door honderd voor de lengte in meter." },
          ],
          woorden: [{ woord: "maquette", uitleg: "Een klein, nagemaakt model van bijvoorbeeld een huis of gebouw." }],
          theorie: "Een maquette is eigenlijk een 3D-kaart: hetzelfde schaal-idee geldt, alleen dan in de hoogte, breedte én diepte. Om van de maquette-maat naar de echte maat te gaan, vermenigvuldig je met het schaalgetal — precies zoals bij een platte kaart.",
          voorbeelden: [{ type: "school", tekst: "Bij een techniekles bouwen leerlingen een maquette van hun eigen huis op schaal 1 : 20 en rekenen ze de echte hoogte van de voordeur uit." }],
          basiskennis: [{ onderwerp: "Maquette = 3D-schaal", uitleg: "Bij een maquette geldt dezelfde schaalregel als bij een platte kaart, maar dan in alle richtingen." }],
          niveaus: {
            basis: "30 × 10 = 300 cm = 3 m.",
            simpeler: "Vermenigvuldig de maquette-maat met 10 en reken cm naar m.",
            nogSimpeler: "300 ÷ 100 = ?",
          },
        },
      },
    ],
  },
];

export default {
  id: "schaal-kaart-rekenen-po",
  title: "Schaal & kaart rekenen",
  subject: "rekenen",
  level: "groep7-8",
  sloThema: "rekenen-schaal",
  chapters,
  steps,
  prerequisites: [],
};
