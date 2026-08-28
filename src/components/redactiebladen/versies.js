// Redactiebladen versies B t/m E (Mark-go 28 aug 2026: Leesladder-model naar
// de printpakketten — A t/m C gratis, D+ = Familie-laag, nu bèta-gratis).
// Versie A = de bestaande bundel uit het redactiesommen-leerpad; deze file
// bevat de verse versies. Antwoord staat altijd op index 0 — de pagina
// husselt seeded (net als versie A), zodat blad en sleutel blijven matchen.
// Eigen werk in Cito-stijl; elke som is handmatig nagerekend.

export const REDACTIE_VERSIES = {
  B: {
    letter: "B",
    titel: "Versie B — één stap, verse verhalen",
    subtitel: "Groep 5-6 · één bewerking per som",
    gratis: true,
    hoofdstukken: [
      {
        titel: "Keer- en deelsommen",
        emoji: "✖️",
        vragen: [
          { q: "Emma koopt 6 zakjes knikkers. In elk zakje zitten 8 knikkers. Hoeveel knikkers heeft ze in totaal?", options: ["48", "42", "54", "14"], answer: 0, uitleg: "\"In elk zakje\" → keersom: 6 × 8 = 48." },
          { q: "Juf verdeelt 45 potloden eerlijk over 9 tafels. Hoeveel potloden liggen er op elke tafel?", options: ["5", "6", "4", "9"], answer: 0, uitleg: "\"Eerlijk verdeeld\" → deelsom: 45 ÷ 9 = 5." },
          { q: "De bakker heeft 7 dozen met in elke doos 12 eieren. Hoeveel eieren zijn dat samen?", options: ["84", "72", "96", "19"], answer: 0, uitleg: "7 × 12 = 84." },
          { q: "63 leerlingen worden verdeeld in groepjes van 7. Hoeveel groepjes zijn dat?", options: ["9", "8", "7", "70"], answer: 0, uitleg: "\"In groepen van\" → deelsom: 63 ÷ 7 = 9." },
          { q: "Een kaartje voor het zwembad kost € 3. Het gezin van Milan gaat met 5 personen. Hoeveel betalen ze samen?", options: ["€ 15", "€ 12", "€ 18", "€ 8"], answer: 0, uitleg: "\"Per persoon\" → keersom: 5 × € 3 = € 15." },
        ],
      },
      {
        titel: "Plus- en minsommen",
        emoji: "➕",
        vragen: [
          { q: "In de bus zitten 34 mensen. Bij de halte stappen er 9 uit. Hoeveel mensen zitten er nu in de bus?", options: ["25", "26", "43", "23"], answer: 0, uitleg: "\"Stappen uit\" → minsom: 34 − 9 = 25." },
          { q: "Sam heeft 28 stickers. Hij krijgt er 17 bij van zijn opa. Hoeveel stickers heeft hij nu?", options: ["45", "44", "11", "35"], answer: 0, uitleg: "\"Erbij\" → plussom: 28 + 17 = 45." },
          { q: "Een boek heeft 96 bladzijden. Lisa heeft er al 58 gelezen. Hoeveel bladzijden moet ze nog?", options: ["38", "42", "48", "154"], answer: 0, uitleg: "\"Nog over\" → minsom: 96 − 58 = 38." },
          { q: "Tom wandelt elke dag 400 meter naar school. Hoeveel meter loopt hij in 5 schooldagen?", options: ["2.000 meter", "1.600 meter", "2.400 meter", "405 meter"], answer: 0, uitleg: "\"Elke dag\" → keersom: 5 × 400 = 2.000 meter." },
          { q: "Op een plank in de bibliotheek staan 120 boeken. Er zijn er 35 uitgeleend. Hoeveel boeken staan er nog?", options: ["85", "95", "75", "155"], answer: 0, uitleg: "\"Uitgeleend\" → minsom: 120 − 35 = 85." },
        ],
      },
    ],
  },

  C: {
    letter: "C",
    titel: "Versie C — twee stappen + afleiders",
    subtitel: "Groep 6-7 · eerst denken, dan rekenen",
    gratis: true,
    hoofdstukken: [
      {
        titel: "Twee stappen",
        emoji: "🪜",
        vragen: [
          { q: "Mila koopt 3 pakken met elk 12 stiften. Ze geeft 5 stiften aan haar zusje. Hoeveel stiften houdt Mila over?", options: ["31", "36", "41", "7"], answer: 0, uitleg: "Stap 1: 3 × 12 = 36. Stap 2: 36 − 5 = 31." },
          { q: "In de zaal staan 8 rijen met elk 15 stoelen. Er blijven 27 stoelen leeg. Op hoeveel stoelen zit iemand?", options: ["93", "120", "147", "87"], answer: 0, uitleg: "8 × 15 = 120 stoelen; 120 − 27 = 93 bezet." },
          { q: "Jayden heeft € 50. Hij koopt een game van € 32 en een poster van € 9. Hoeveel geld houdt hij over?", options: ["€ 9", "€ 18", "€ 41", "€ 32"], answer: 0, uitleg: "32 + 9 = € 41 uitgegeven; 50 − 41 = € 9 over." },
          { q: "De bakker bakt 6 platen met elk 24 koekjes. Hij verkoopt er 100. Hoeveel koekjes zijn er nog?", options: ["44", "144", "100", "54"], answer: 0, uitleg: "6 × 24 = 144; 144 − 100 = 44." },
          { q: "Op het plein spelen 46 kinderen. Er komen 18 kinderen bij en er gaan 12 naar binnen. Hoeveel kinderen spelen er nu?", options: ["52", "64", "40", "76"], answer: 0, uitleg: "46 + 18 = 64; 64 − 12 = 52." },
          { q: "Noor spaart elke week € 4. Na 6 weken koopt ze een boek van € 19. Hoeveel houdt ze over?", options: ["€ 5", "€ 24", "€ 19", "€ 10"], answer: 0, uitleg: "6 × 4 = € 24 gespaard; 24 − 19 = € 5." },
        ],
      },
      {
        titel: "Pas op: afleiders!",
        emoji: "🎯",
        vragen: [
          { q: "In groep 7 zitten 28 leerlingen. Juf Sanne (34 jaar) verdeelt de klas in 4 gelijke teams. Hoeveel leerlingen zitten er in elk team?", options: ["7", "8", "6", "34"], answer: 0, uitleg: "De leeftijd van de juf doet niet mee — dat is een afleider. 28 ÷ 4 = 7." },
          { q: "Een trein van 160 meter lang vertrekt met 240 reizigers. In Zwolle stappen 85 mensen uit en 40 mensen in. Hoeveel reizigers zijn er nu?", options: ["195", "155", "205", "115"], answer: 0, uitleg: "De lengte van de trein is een afleider. 240 − 85 + 40 = 195." },
          { q: "Bram koopt 4 broden van € 2 per stuk. Hij betaalt met een briefje van € 10. Hoeveel wisselgeld krijgt hij?", options: ["€ 2", "€ 8", "€ 6", "€ 4"], answer: 0, uitleg: "4 × 2 = € 8; 10 − 8 = € 2 terug." },
          { q: "In een doos zitten 5 lagen met elk 16 chocolaatjes. Oma (72 jaar) eet er 6 op. Hoeveel chocolaatjes zitten er nog in de doos?", options: ["74", "80", "86", "66"], answer: 0, uitleg: "De leeftijd is een afleider. 5 × 16 = 80; 80 − 6 = 74." },
        ],
      },
    ],
  },

  D: {
    letter: "D",
    titel: "Versie D — geld & kommagetallen",
    subtitel: "Groep 7-8 · rekenen met euro's, korting en wisselgeld",
    gratis: false,
    hoofdstukken: [
      {
        titel: "Betalen en wisselgeld",
        emoji: "💶",
        vragen: [
          { q: "Een broodje kost € 2,45. Yara koopt er 3 en betaalt met € 10. Hoeveel wisselgeld krijgt ze?", options: ["€ 2,65", "€ 2,55", "€ 3,65", "€ 7,35"], answer: 0, uitleg: "3 × 2,45 = € 7,35; 10 − 7,35 = € 2,65." },
          { q: "Eén kilo appels kost € 1,80. Hoeveel betaal je voor 2,5 kilo?", options: ["€ 4,50", "€ 4,05", "€ 3,60", "€ 2,50"], answer: 0, uitleg: "2 kilo = € 3,60 en een halve kilo = € 0,90 → samen € 4,50." },
          { q: "Sportschoenen kosten € 49,95. Met de klantenkaart krijg je € 7,50 korting. Wat betaal je?", options: ["€ 42,45", "€ 41,45", "€ 42,55", "€ 57,45"], answer: 0, uitleg: "49,95 − 7,50 = € 42,45." },
          { q: "Vier vrienden delen een rekening van € 38,80 eerlijk. Hoeveel betaalt ieder?", options: ["€ 9,70", "€ 9,20", "€ 8,70", "€ 9,95"], answer: 0, uitleg: "38,80 ÷ 4 = € 9,70." },
          { q: "Aardbeien kosten € 2,90 per doosje; het tweede doosje is voor de halve prijs. Wat kosten 2 doosjes samen?", options: ["€ 4,35", "€ 5,80", "€ 2,90", "€ 4,25"], answer: 0, uitleg: "Tweede doosje: 2,90 ÷ 2 = € 1,45. Samen: 2,90 + 1,45 = € 4,35." },
        ],
      },
      {
        titel: "Korting en slim kiezen",
        emoji: "🏷️",
        vragen: [
          { q: "Een jas van € 60 is afgeprijsd met 25% korting. Wat betaal je nu?", options: ["€ 45", "€ 35", "€ 40", "€ 15"], answer: 0, uitleg: "25% van 60 = € 15 korting; 60 − 15 = € 45." },
          { q: "Fee krijgt € 3,25 zakgeld per week. Hoeveel heeft ze na 8 weken gespaard?", options: ["€ 26,00", "€ 24,00", "€ 25,60", "€ 26,50"], answer: 0, uitleg: "8 × 3 = € 24 en 8 × 0,25 = € 2 → samen € 26,00." },
          { q: "Een flesje sap kost in de winkel € 1,15 en uit de automaat € 1,60. Hoeveel duurder zijn 5 flesjes uit de automaat?", options: ["€ 2,25", "€ 0,45", "€ 8,00", "€ 2,75"], answer: 0, uitleg: "Verschil per flesje: 1,60 − 1,15 = € 0,45; keer 5 = € 2,25." },
          { q: "Een tramkaartje kost € 2,40 per rit; een dagkaart kost € 7,50. Vanaf hoeveel ritten op één dag is de dagkaart goedkoper?", options: ["4 ritten", "3 ritten", "2 ritten", "5 ritten"], answer: 0, uitleg: "3 ritten = € 7,20 (losse kaartjes winnen); 4 ritten = € 9,60 → vanaf 4 ritten wint de dagkaart." },
          { q: "Ties heeft € 12,35 gespaard en wil een bouwset van € 25. Hoeveel moet hij nog sparen?", options: ["€ 12,65", "€ 12,35", "€ 13,65", "€ 12,75"], answer: 0, uitleg: "25 − 12,35 = € 12,65." },
        ],
      },
    ],
  },

  E: {
    letter: "E",
    titel: "Versie E — tijd, afstand & verhoudingen",
    subtitel: "Groep 7-8 · klokken, kilometers en recepten",
    gratis: false,
    hoofdstukken: [
      {
        titel: "Tijd",
        emoji: "🕒",
        vragen: [
          { q: "De film begint om 19:40 uur en duurt 1 uur en 35 minuten. Hoe laat is de film afgelopen?", options: ["21:15 uur", "21:05 uur", "20:55 uur", "21:25 uur"], answer: 0, uitleg: "19:40 + 1 uur = 20:40; + 20 min = 21:00; + 15 min = 21:15." },
          { q: "De trein vertrekt om 8:52 uur en komt aan om 10:07 uur. Hoe lang duurt de reis?", options: ["1 uur en 15 minuten", "1 uur en 25 minuten", "1 uur en 5 minuten", "1 uur en 55 minuten"], answer: 0, uitleg: "8:52 → 9:00 is 8 min; 9:00 → 10:07 is 1 uur 7 min; samen 1 uur 15 min." },
          { q: "Jesse mist de bus van 14:03 uur. De bus rijdt elke 12 minuten. Hoe laat komt de volgende bus?", options: ["14:15 uur", "14:12 uur", "14:23 uur", "14:30 uur"], answer: 0, uitleg: "14:03 + 12 minuten = 14:15." },
          { q: "Iris leert elke dag een kwartier voor de Doorstroomtoets. Hoeveel uur is dat in 4 weken (28 dagen)?", options: ["7 uur", "6 uur", "5 uur", "14 uur"], answer: 0, uitleg: "28 × 15 = 420 minuten; 420 ÷ 60 = 7 uur." },
        ],
      },
      {
        titel: "Afstand en verhoudingen",
        emoji: "📏",
        vragen: [
          { q: "Roos fietst 12 kilometer in één uur. Hoe ver komt ze in 2,5 uur (in hetzelfde tempo)?", options: ["30 km", "24 km", "25 km", "28 km"], answer: 0, uitleg: "2 uur = 24 km en een half uur = 6 km → 30 km." },
          { q: "Een recept voor 4 personen vraagt 300 gram pasta. Hoeveel gram heb je nodig voor 6 personen?", options: ["450 gram", "400 gram", "500 gram", "600 gram"], answer: 0, uitleg: "Per persoon: 300 ÷ 4 = 75 gram; 6 × 75 = 450 gram." },
          { q: "Een kaart heeft schaal 1 : 100.000. Twee dorpen liggen op de kaart 3 centimeter uit elkaar. Hoeveel kilometer is dat in het echt?", options: ["3 km", "30 km", "300 km", "0,3 km"], answer: 0, uitleg: "1 cm = 100.000 cm = 1 km in het echt; 3 cm = 3 km." },
          { q: "Zes lopers rennen samen een estafette van 42 kilometer. Ieder loopt even ver. Hoeveel kilometer loopt elke loper?", options: ["7 km", "6 km", "8 km", "36 km"], answer: 0, uitleg: "42 ÷ 6 = 7 km." },
          { q: "Voor limonade meng je 1 deel siroop met 6 delen water. Hoeveel water hoort bij 200 ml siroop?", options: ["1.200 ml", "600 ml", "1.000 ml", "1.400 ml"], answer: 0, uitleg: "6 × 200 = 1.200 ml (= 1,2 liter)." },
          { q: "Een zonnebloem van 1,20 meter groeit 8 centimeter per week. Hoe hoog is hij na 5 weken?", options: ["1,60 meter", "1,28 meter", "2,00 meter", "1,50 meter"], answer: 0, uitleg: "5 × 8 = 40 cm erbij; 1,20 + 0,40 = 1,60 meter." },
        ],
      },
    ],
  },
};

// Volgorde voor de versie-kiezer; F t/m J volgen (Familie) — zie backlog.
export const VERSIE_VOLGORDE = ["A", "B", "C", "D", "E"];
