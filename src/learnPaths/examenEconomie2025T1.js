// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2025 tijdvak 1
// Pilot 2026-05-09 (Mark wens): 10 echte MC-vragen met informatiebron uit
// bijlage + officiële uitleg uit correctievoorschrift + link naar relevant
// Pincode-leerpad voor diepere uitleg.
//
// Specifiek voor klas 4 (eindexamen) — level: vmbo-gt-4.
// Vragen die afbeeldingen/grafieken vereisen (V12, V19) zijn niet
// meegenomen — die werken niet zonder visual.

const chapters = [
  { letter: "A", title: "V1 — Sint-Maarten — handel", emoji: "🎓", from: 0, to: 0 },
  { letter: "B", title: "V2 — Sint-Maarten — welvaart", emoji: "🎓", from: 1, to: 1 },
  { letter: "C", title: "V4 — Sint-Maarten — toerisme", emoji: "🎓", from: 2, to: 2 },
  { letter: "D", title: "V8 — De gemeente — taken", emoji: "🎓", from: 3, to: 3 },
  { letter: "E", title: "V9 — De gemeente — belastingen", emoji: "🎓", from: 4, to: 4 },
  { letter: "F", title: "V14 — Inkomen jongeren", emoji: "🎓", from: 5, to: 5 },
  { letter: "G", title: "V17 — Dog4fun — ondernemingsvorm", emoji: "🎓", from: 6, to: 6 },
  { letter: "H", title: "V29 — Buitenland — handelsoverschot", emoji: "🎓", from: 7, to: 7 },
  { letter: "I", title: "V32 — Buitenland — concurrentie", emoji: "🎓", from: 8, to: 8 },
  { letter: "J", title: "V37 — Sparen of beleggen", emoji: "🎓", from: 9, to: 9 },
];

const steps = [
  {
    title: "V1 — Sint-Maarten — handel",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 1. Lees eerst de bron(nen). Doorklik na de vraag voor diepe uitleg in het Pincode-leerpad **Nederland en het buitenland**.",
    checks: [
      {
        q: "Welke bewering over de export en import van Sint-Maarten is juist?",
        options: ["In 2010 was de waarde van de export lager dan de waarde van de import.", "In 2016 was de waarde van de export lager dan de waarde van de import.", "In 2017 was de waarde van de export lager dan de waarde van de import.", "In alle jaren was de waarde van de export lager dan de waarde van de import."],
        answer: 2,
        wrongHints: [null, null, null, null],
        explanation: "Het juiste antwoord is C.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 1, vraag 1",
        bronTekst: {
          titel: "informatiebron 1: economische gegevens van Sint-Maarten 2010,",
          body: "--- informatiebron 1 ---\n2016 en 2017, omgerekend in euro's\n\nnationaal inkomen (in miljoen)        2010      2016          2017\nre'le nationaal inkomen (in miljoen)       798       960           934\nwaarde export van goederen en              746       840          798\ndiensten (in miljoen)                      854                    835\nwaarde import van goederen en                     1.046\ndiensten (in miljoen)\naantal verblijfstoeristen             847       1.014         921\naantal cruisetoeristen ( 1.000)\nbevolking Sint-Maarten                443.136   528.150   402.092\n                                         1.513     1.669     1.238\n\n                                       34.496    39.410    40.535",
        },
      },
    ],
  },
  {
    title: "V2 — Sint-Maarten — welvaart",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 2. Lees eerst de bron(nen). Doorklik na de vraag voor diepe uitleg in het Pincode-leerpad **Inkomen en welvaart**.",
    checks: [
      {
        q: "De welvaart van een land kan worden gemeten door het nationaal inkomen te berekenen. Waarmee moet je rekening houden als je het re'le nationale inkomen berekent?",
        options: ["de belastingen", "de inkomensverdeling", "de veranderde prijzen", "zelfvoorziening Gebruik informatiebron 1."],
        answer: 2,
        wrongHints: [null, null, null, null],
        explanation: "Het juiste antwoord is C.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 2, vraag 2",
        bronTekst: {
          titel: "informatiebron 1: economische gegevens van Sint-Maarten 2010,",
          body: "--- informatiebron 1 ---\n2016 en 2017, omgerekend in euro's\n\nnationaal inkomen (in miljoen)        2010      2016          2017\nre'le nationaal inkomen (in miljoen)       798       960           934\nwaarde export van goederen en              746       840          798\ndiensten (in miljoen)                      854                    835\nwaarde import van goederen en                     1.046\ndiensten (in miljoen)\naantal verblijfstoeristen             847       1.014         921\naantal cruisetoeristen ( 1.000)\nbevolking Sint-Maarten                443.136   528.150   402.092\n                                         1.513     1.669     1.238\n\n                                       34.496    39.410    40.535",
        },
      },
    ],
  },
  {
    title: "V4 — Sint-Maarten — toerisme",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 4. Lees eerst de bron(nen). Doorklik na de vraag voor diepe uitleg in het Pincode-leerpad **Nederland en het buitenland**.",
    checks: [
      {
        q: "Waartoe behoren de uitgaven van de toeristen, die een souvenir kopen op Sint-Maarten?",
        options: ["Tot de export van diensten door Sint-Maarten.", "Tot de export van goederen door Sint-Maarten.", "Tot de import van diensten door Sint-Maarten.", "Tot de import van goederen door Sint-Maarten. Gebruik informatiebron 1."],
        answer: 1,
        wrongHints: [null, null, null, null],
        explanation: "Het juiste antwoord is B.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 4, vraag 4",
        bronTekst: {
          titel: "informatiebron 1: economische gegevens van Sint-Maarten 2010, + informatiebron 2: de hulp van het Nederlandse Rode Kruis aan",
          body: "--- informatiebron 1 ---\n2016 en 2017, omgerekend in euro's\n\nnationaal inkomen (in miljoen)        2010      2016          2017\nre'le nationaal inkomen (in miljoen)       798       960           934\nwaarde export van goederen en              746       840          798\ndiensten (in miljoen)                      854                    835\nwaarde import van goederen en                     1.046\ndiensten (in miljoen)\naantal verblijfstoeristen             847       1.014         921\naantal cruisetoeristen ( 1.000)\nbevolking Sint-Maarten                443.136   528.150   402.092\n                                         1.513     1.669     1.238\n\n                                       34.496    39.410    40.535\n\n--- informatiebron 2 ---\nSint-Maarten\n\n fase 1\n Wat als je plotseling geen dak meer boven het hoofd hebt? Of geen keuken\n om in te koken? In de eerste maanden na de ramp was het belangrijk om\n direct in actie te komen. Daarom bood het Rode Kruis:\n  tenten\n  drinkwater en voedselpakketten\n  medische voorzieningen\n\n fase 2\n De schade van een orkaan is niet binnen een paar maanden hersteld.\n Nederland stelt daarom geld beschikbaar voor bijvoorbeeld:\n  het verbeteren van de infrastructuur\n  het opleiden en inhuren van bouwvakkers\n\n De gemeente",
        },
      },
    ],
  },
  {
    title: "V8 — De gemeente — taken",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 8. Lees eerst de bron(nen). Doorklik na de vraag voor diepe uitleg in het Pincode-leerpad **De overheid**.",
    checks: [
      {
        q: "Welke overheidstaken voert de gemeente uit?",
        options: ["Het onderhoud aan dijken, kanalen en waterwegen.", "Het uitgeven van een paspoort, identiteitskaart en rijbewijs.", "Het verstrekken van huur- en zorgtoeslag.", "Het verstrekken van uitkeringen, zoals de AOW."],
        answer: 1,
        wrongHints: [null, null, null, null],
        explanation: "Het juiste antwoord is B.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 8, vraag 8",
        bronTekst: {
          titel: "informatiebron 3: aantal huishoudens en hun gemiddelde vermogen",
          body: "--- informatiebron 3 ---\naantal huishoudens  gemeente Rijkwijk  gemeente Armere\n                    6.433              174.765\ngemiddeld vermogen   230.000            18.000\nper huishouden\n\n(Be)leg het opzij voor later",
        },
      },
    ],
  },
  {
    title: "V9 — De gemeente — belastingen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 9. Lees eerst de bron(nen). Doorklik na de vraag voor diepe uitleg in het Pincode-leerpad **De overheid**.",
    checks: [
      {
        q: "Een gemeente ontvangt inkomsten vanuit de gemeentelijke belastingen en gemeentelijke heffingen. Welke belasting betalen de inwoners aan de gemeente?",
        options: ["accijns", "motorrijtuigenbelasting", "onroerendezaakbelasting", "vennootschapsbelasting Het aantal gemeenten in Nederland daalt omdat veel kleine gemeenten worden samengevoegd tot nieuwe, grotere gemeenten. De gemeente Rijkwijk en de gemeente Armere worden samengevoegd tot de gemeente Rijkmere. Gebruik informatiebron 3."],
        answer: 2,
        wrongHints: [null, null, null, null],
        explanation: "Het juiste antwoord is C.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 9, vraag 9",
        bronTekst: {
          titel: "informatiebron 3: aantal huishoudens en hun gemiddelde vermogen",
          body: "--- informatiebron 3 ---\naantal huishoudens  gemeente Rijkwijk  gemeente Armere\n                    6.433              174.765\ngemiddeld vermogen   230.000            18.000\nper huishouden\n\n(Be)leg het opzij voor later",
        },
      },
    ],
  },
  {
    title: "V14 — Inkomen jongeren",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 14. Lees eerst de bron(nen). Doorklik na de vraag voor diepe uitleg in het Pincode-leerpad **Inkomen en welvaart**.",
    checks: [
      {
        q: "Gemiddeld beginnen jongeren op 21-jarige leeftijd met een (volledige) baan. Voor die tijd hebben jongeren meestal verschillende bronnen van inkomen, zoals een overdrachtsinkomen. Wat is een voorbeeld van een overdrachtsinkomen?",
        options: ["loon", "rente", "winst", "zakgeld Nour zoekt informatie over rentepercentages op de site van zijn ABC-bank. ABC-bank          spaarrekening: jongeren 2,1% rente ouder dan 21 jaar 1,5% rente betaalrekening: jongeren 1,1% rente ouder dan 21 jaar 0% rente"],
        answer: 3,
        wrongHints: [null, null, null, null],
        explanation: "Het juiste antwoord is D.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 14, vraag 14",
        bronTekst: {
          titel: "informatiebron 7: de staatsschuld, het nationaal inkomen en de",
          body: "--- informatiebron 7 ---\nstaatsschuldquote in vijf jaren tussen 2013-2026\n\njaar              staatsschuld     nationaal inkomen  de staatsschuldquote1)\n                  in miljard euro  in miljard euro\n2014              457              672                68%\n2018              426              775                55%\n2020              408              850                48%\n2021              450              765                59%\n20252)            510              850                60%\n\nnoot 1 staatsschuldquote =  staatsschuld        100%\n\n                            nationaal inkomen\n\nnoot 2 De bedragen voor 2025 zijn verwachtingen.\n\nExportboeren",
        },
      },
    ],
  },
  {
    title: "V17 — Dog4fun — ondernemingsvorm",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 17. Lees eerst de bron(nen). Doorklik na de vraag voor diepe uitleg in het Pincode-leerpad **Ondernemen**.",
    checks: [
      {
        q: "De leerlingen van de klas doen allemaal mee. Ze zijn allen priv' aansprakelijk voor de eventuele schulden van Dog4fun. Welke ondernemingsvorm heeft Dog4fun?",
        options: ["besloten vennootschap (bv)", "eenmanszaak", "naamloze vennootschap (nv)", "vennootschap onder firma (vof) De klas doet eerst marktonderzoek in de wijk. Elke hondenbezitter heeft 1 hond. een vraag uit het onderzoek: Wij komen op woensdag-, vrijdag- en zaterdagmiddag langs uw huis en halen uw hond op om deze uit te laten op een omheind terrein. Twee uur later brengen we uw h"],
        answer: 3,
        wrongHints: [null, null, null, null],
        explanation: "Het juiste antwoord is D.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 17, vraag 17",
        bronTekst: {
          titel: "informatiebron 5: vraaglijn Dog4fun + informatiebron 6: informatie concurrent Dogrunner",
          body: "--- informatiebron 5 ---\n\n\n--- informatiebron 6 ---\nWij halen uw hond bij u thuis op met een van onze speciaal ingerichte\nverwarmde bussen en nemen uw hond mee naar ons eigen ruime en\nomheinde uitlaatterrein in de duinen. Uw hond kan zo'n twee uur lekker\nrennen, spelen en dollen met soortgenoten onder deskundig toezicht van\ntwee Wibevo-gecertificeerde hondenbegeleiders. Wij zorgen ook voor\npremium kwaliteit hondenbrokken. U kiest zelf de uitlaatdagen.\n\ntarieven abonnement (per hond per week)\n\n3 maal per week         29\n\n4 maal per week         37\n\n5 maal per week         47,50\n\n De staatsschuld stijgt",
        },
      },
    ],
  },
  {
    title: "V29 — Buitenland — handelsoverschot",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 29. Lees eerst de bron(nen). Doorklik na de vraag voor diepe uitleg in het Pincode-leerpad **Nederland en het buitenland**.",
    checks: [
      {
        q: "De import van agrarische producten is procentueel sterker gegroeid dan de export. Toch is het Nederlandse handelsoverschot van de handel toegenomen. Wat kan daarvan de reden zijn?",
        options: ["Het prijspeil van de export is minder gestegen dan het prijspeil van de import.", "Het prijspeil van de export is meer gestegen dan het prijspeil van de import.", "De ge'xporteerde hoeveelheid is minder gestegen dan de ge'mporteerde hoeveelheid. Duitsland, Belgi' en het Verenigd Koninkrijk (VK) zijn de belangrijkste exportlanden voor Nederland. De export naar Duitsland en Belgi' laat al jaren een groei zien."],
        answer: 1,
        wrongHints: [null, null, null, null],
        explanation: "Het juiste antwoord is B.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 29, vraag 29",
        bronTekst: {
          titel: "informatiebron 8: agrarische import en export van Nederland + informatiebron 9: verantwoorde woonlasten, volgens Nibud",
          body: "--- informatiebron 8 ---\nin 2018 naar regio\n\n Een huis zonder gas\n\n--- informatiebron 9 ---\ninkomen per maand    maximaal verantwoorde woonlasten\n 1.500 -  3.000      25%\n 3.000 -  4.500      30%\n 4.500 -  6.000      33%\n 6.000 en meer       35%",
        },
      },
    ],
  },
  {
    title: "V32 — Buitenland — concurrentie",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 32. Lees eerst de bron(nen). Doorklik na de vraag voor diepe uitleg in het Pincode-leerpad **Ondernemen**.",
    checks: [
      {
        q: "Volgens Bram kunnen Nederlandse zuivelboeren door de melkrobot de concurrentie met buitenlandse zuivelboeren beter aan. De melkrobot kan leiden tot een hogere afzet. Hier staan drie economische verschijnselen: 1 hogere arbeidsproductiviteit 2 lagere kosten per product 3 betere concurrentiepositie van Nederlandse zuivelboeren In welke regel staan de verschijnselen zo, dat er een logische gedachtegang ontstaat?",
        options: ["inzet melkrobot  1  2  3  hogere afzet", "inzet melkrobot  1  3  2  hogere afzet", "inzet melkrobot  2  1  3  hogere afzet", "inzet melkrobot  2  3  1  hogere afzet", "inzet melkrobot  3  1  2  hogere afzet F inzet melkrobot  3  2  1  hogere afzet Een huis zonder gas Bij de beantwoording van de vragen in deze opgave moet je soms gebruikmaken van informatiebron 9 en 10 in de bijlage. In Nederland is een groot tekort aan huurwoningen. Daardoor gaan mensen op zoek na"],
        answer: 0,
        wrongHints: [null, null, null, null],
        explanation: "Vraag Antwoord                                                                  Scores\n\n   Een huis zonder gas                                                             1\n                                                                                   1",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 32, vraag 32",
        bronTekst: {
          titel: "informatiebron 8: agrarische import en export van Nederland",
          body: "--- informatiebron 8 ---\nin 2018 naar regio\n\n Een huis zonder gas",
        },
      },
    ],
  },
  {
    title: "V37 — Sparen of beleggen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 37. Lees eerst de bron(nen). Doorklik na de vraag voor diepe uitleg in het Pincode-leerpad **Geld, sparen en lenen**.",
    checks: [
      {
        q: "Germaine: \"Tegenwoordig levert sparen weinig op en is geld lenen goedkoop. Spaarders kunnen beter het geld investeren in een warmtepomp, dat levert op termijn meer op.\" Wat is een juiste samenvatting van Germaines bewering?",
        options: ["De besparing op energiekosten is hoger dan de te ontvangen rente.", "De besparing op energiekosten is lager dan de te ontvangen rente.", "Geld lenen is goedkoper dan de investering in een warmtepomp.", "Geld lenen is duurder dan de investering in een warmtepomp."],
        answer: 0,
        wrongHints: [null, null, null, null],
        explanation: "Het juiste antwoord is A.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 37, vraag 37",
        bronTekst: {
          titel: "informatiebron 10: offerte persoonlijke lening + informatiebron 11: de AOW-uitkering",
          body: "--- informatiebron 10 ---\nleenbedrag        looptijd     maandbedrag\n 50.000           120 maanden   500\n\nDoorwerken\n\n--- informatiebron 11 ---\nuw AOW en woonsituatie\n       Hoeveel AOW u krijgt hangt af van uw woonsituatie. Als alleenstaande\n       krijgt u een netto-uitkering van  1.201 per maand. Bent u getrouwd of\n       samenwonend, dan krijgt u 50% van het minimumloon.\n\n       volledige AOW opbouwen\n       U krijgt een volledige AOW-uitkering als u 50 jaar achter elkaar in\n       Nederland heeft gewoond voordat uw AOW-uitkering ingaat.\n       Voor elk jaar dat u minder in Nederland heeft gewoond wordt de\n       AOW-uitkering verlaagd met 2%.\n\nGT-0233-a-25-1-b     6/6                                 lees verdeer inde",
        },
      },
    ],
  },
];

steps.forEach((s) => { s.emoji = "🎓"; });

const examenEconomie2025T1 = {
  id: "examen-economie-2025-t1",
  title: "Examen oefenen — Economie 2025 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2025-T1",
  intro:
    "10 echte examenvragen uit het VMBO-GL/TL economie-examen 2025 tijdvak 1, met de officiële informatiebronnen uit de bijlage en de uitleg uit het correctievoorschrift. Klik bij elke vraag op '📖 Leg uit' voor de officiële uitleg.",
  triggerKeywords: [
    "examen 2025", "examen oefenen", "echte examenvragen",
    "informatiebron", "sint-maarten", "dog4fun",
  ],
  chapters,
  steps,
};

export default examenEconomie2025T1;
