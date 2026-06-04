// Leerpad: Folder, bon & advertentie lezen — groep 7-8 PO.
// Doorstroomtoets-onderdeel STUDIEVAARDIGHEDEN (sloThema-prefix bepaalt pijler).
// Kassabon lezen, aanbiedingen begrijpen, reclame kritisch lezen, rekenen met korting.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Een kassabon lezen", emoji: "🧾", from: 0, to: 0 },
  { letter: "B", title: "Een aanbieding in de folder", emoji: "🏷️", from: 1, to: 1 },
  { letter: "C", title: "Een advertentie kritisch lezen", emoji: "📢", from: 2, to: 2 },
  { letter: "D", title: "In het echt: rekenen met aanbiedingen", emoji: "🛒", from: 3, to: 3 },
];

const steps = [
  // ─── A. Kassabon ──────────────────────────────────────────
  {
    title: "Een kassabon lezen",
    explanation:
      "Op een **kassabon** staat wat je gekocht hebt, hoeveel stuks, de prijs per stuk en het **totaalbedrag** onderaan.\n\n" +
      "Voorbeeld:\n\n" +
      "| Artikel | Aantal | Prijs/stuk | Totaal |\n" +
      "|---|---|---|---|\n" +
      "| Brood | 3 | €1,20 | €3,60 |\n" +
      "| Melk | 2 | €0,90 | €1,80 |\n" +
      "| **Totaal** | | | **€5,40** |\n\n" +
      "• **Prijs van meerdere stuks** = aantal × prijs per stuk.\n" +
      "• **Totaalbedrag** = alles bij elkaar opgeteld.\n" +
      "• **Wisselgeld** = wat je betaalt − het totaalbedrag.\n" +
      "Soms staat er **BTW** (belasting toegevoegde waarde) op de bon: dat is belasting die al in de prijs zit.",
    checks: [
      {
        q: "Je koopt 3 broden van €1,20 per stuk. Hoeveel kost het brood samen?",
        options: ["€3,60", "€1,20", "€2,40", "€3,00"],
        answer: 0,
        wrongHints: [null, "Dat is de prijs van één brood.", "Dat zijn er maar twee.", "Reken nog eens: 3 × €1,20."],
        uitlegPad: {
          stappen: [{ titel: "Aantal × prijs", tekst: "3 × €1,20 = €3,60. Drie keer 1,20: 1,20 + 1,20 + 1,20." }],
          niveaus: {
            basis: "3 broden × €1,20 = €3,60.",
            simpeler: "Tel drie keer €1,20 op.",
            nogSimpeler: "1,20 + 1,20 + 1,20 = ?",
          },
        },
      },
      {
        q: "Het totaalbedrag is €8,40. Je betaalt met een briefje van €10. Hoeveel wisselgeld krijg je terug?",
        options: ["€1,60", "€2,40", "€1,40", "€2,60"],
        answer: 0,
        wrongHints: [null, "Reken nog eens: €10 − €8,40.", "Net niet — let op de centen.", "Te veel terug."],
        uitlegPad: {
          stappen: [{ titel: "Betaald − totaal", tekst: "€10,00 − €8,40 = €1,60 wisselgeld." }],
          niveaus: {
            basis: "Wisselgeld = €10 − €8,40 = €1,60.",
            simpeler: "Van €8,40 naar €10: hoeveel is dat erbij?",
            nogSimpeler: "€8,40 + … = €10,00?",
          },
        },
      },
      {
        q: "Op de bon staat 'BTW'. Wat betekent dat?",
        options: ["belasting die in de prijs zit", "korting die je krijgt", "een fooi voor de kassière", "statiegeld op flessen"],
        answer: 0,
        wrongHints: [null, "Het maakt iets juist niet goedkoper.", "Het is geen extraatje voor het personeel.", "Dat is iets anders (geld terug op flessen)."],
        uitlegPad: {
          stappen: [{ titel: "BTW = belasting toegevoegde waarde", tekst: "BTW is belasting die de overheid heft. Die zit al in de prijs die je betaalt." }],
          niveaus: {
            basis: "BTW is belasting die al in de prijs verwerkt zit.",
            simpeler: "Is BTW een korting of juist belasting? Het is belasting.",
            nogSimpeler: "BTW is een soort … (belasting/korting?).",
          },
        },
      },
      {
        q: "Wat is het 'totaalbedrag' onderaan een bon?",
        options: ["alles bij elkaar opgeteld", "het duurste artikel", "het goedkoopste artikel", "alleen de BTW"],
        answer: 0,
        wrongHints: [null, "Het is meer dan één artikel.", "Ook niet — het is de som van alles.", "BTW is maar een klein deel."],
        uitlegPad: {
          stappen: [{ titel: "Totaal = de som", tekst: "Het totaalbedrag is alle artikelen bij elkaar opgeteld — dat betaal je samen." }],
          niveaus: {
            basis: "Het totaalbedrag is alles opgeteld.",
            simpeler: "Is het totaal één artikel of alles samen?",
            nogSimpeler: "Wat betaal je in totaal voor alles?",
          },
        },
      },
    ],
  },

  // ─── B. Aanbieding ────────────────────────────────────────
  {
    title: "Een aanbieding in de folder",
    explanation:
      "In een **folder** staan aanbiedingen. Lees ze goed, want ze klinken vaak voordeliger dan ze zijn.\n\n" +
      "Veelgebruikte teksten:\n" +
      "• **'2 halen, 1 betalen'** — je krijgt er eentje gratis bij.\n" +
      "• **'2e artikel halve prijs'** — het tweede is voor de helft.\n" +
      "• **'25% korting'** — een kwart van de prijs gaat eraf.\n" +
      "• **'Op = op'** — alleen zolang de voorraad strekt.\n" +
      "• **'van €12 voor €9'** — je bespaart het verschil (€3).\n\n" +
      "**Korting uitrekenen:** 25% korting op €40 = 25% van 40 = €10 eraf → je betaalt €30.",
    checks: [
      {
        q: "Een aanbieding zegt '2 halen, 1 betalen'. Voor hoeveel stuks betaal je als je er 2 pakt?",
        options: ["1", "2", "3", "0"],
        answer: 0,
        wrongHints: [null, "Eentje is juist gratis.", "Je pakt er maar 2.", "Helemaal gratis is het niet."],
        uitlegPad: {
          stappen: [{ titel: "Eentje gratis", tekst: "Bij '2 halen, 1 betalen' krijg je het tweede gratis. Je betaalt dus voor 1." }],
          niveaus: {
            basis: "Je betaalt er 1 en krijgt er 1 gratis bij.",
            simpeler: "Hoeveel van de 2 moet je betalen?",
            nogSimpeler: "1 gratis, dus betalen voor … stuk(s)?",
          },
        },
      },
      {
        q: "Er is 25% korting op een jas van €40. Hoeveel korting is dat in euro's?",
        options: ["€10", "€25", "€15", "€4"],
        answer: 0,
        wrongHints: [null, "25% is geen 25 euro — het is een kwart van de prijs.", "Reken: een kwart van €40.", "Dat is maar 10%."],
        uitlegPad: {
          stappen: [{ titel: "25% = een kwart", tekst: "25% van €40 = €40 ÷ 4 = €10 korting." }],
          niveaus: {
            basis: "25% is een kwart. Een kwart van €40 is €10.",
            simpeler: "Verdeel €40 in 4 stukken; één stuk is de korting.",
            nogSimpeler: "€40 ÷ 4 = ?",
          },
        },
      },
      {
        q: "Bij een aanbieding staat 'op = op'. Wat betekent dat?",
        options: ["alleen zolang de voorraad strekt", "geldig voor altijd", "alleen op zondag", "twee keer zo duur"],
        answer: 0,
        wrongHints: [null, "Juist niet — het kan snel uitverkocht zijn.", "Het gaat niet over een dag.", "Het zegt niets over de prijs."],
        uitlegPad: {
          stappen: [{ titel: "Op = uitverkocht", tekst: "'Op = op' betekent: als het product op is, is de aanbieding voorbij. Dus zolang de voorraad strekt." }],
          niveaus: {
            basis: "'Op = op' betekent: zolang er voorraad is.",
            simpeler: "Wat gebeurt er als het product uitverkocht is?",
            nogSimpeler: "Geldt de aanbieding nog als alles weg is?",
          },
        },
      },
      {
        q: "Een spel was €12 en is nu €9. Hoeveel goedkoper is het geworden?",
        options: ["€3", "€9", "€12", "€21"],
        answer: 0,
        wrongHints: [null, "Dat is de nieuwe prijs, niet de besparing.", "Dat is de oude prijs.", "Dat is alles opgeteld — dat klopt niet."],
        uitlegPad: {
          stappen: [{ titel: "Oude prijs − nieuwe prijs", tekst: "€12 − €9 = €3 goedkoper." }],
          niveaus: {
            basis: "Besparing = €12 − €9 = €3.",
            simpeler: "Hoeveel zit er tussen €12 en €9?",
            nogSimpeler: "€12 − €9 = ?",
          },
        },
      },
    ],
  },

  // ─── C. Advertentie kritisch ──────────────────────────────
  {
    title: "Een advertentie kritisch lezen",
    explanation:
      "Een **advertentie (reclame)** wil vooral één ding: dat je iets **koopt**. Daarom gebruikt reclame mooie woorden die geen feit zijn, maar een mening.\n\n" +
      "Let op:\n" +
      "• **Overdreven woorden**: 'de allerbeste', 'fantastisch', 'nooit eerder vertoond'. Dat is een mening van de verkoper, geen feit.\n" +
      "• **'Gratis erbij' / 'nu met...'** — bedoeld om je te verleiden.\n" +
      "• **Kleine lettertjes** onderaan: daar staan vaak de **voorwaarden** (bijv. 'alleen geldig deze week').\n\n" +
      "Wees kritisch: een advertentie vertelt je vooral de góéde kanten, niet de hele waarheid.",
    checks: [
      {
        q: "Een advertentie roept: 'De allerbeste tandpasta ter wereld!' Is dat een feit of een mening?",
        options: ["een mening (reclame)", "een bewezen feit", "een korting", "een voorwaarde"],
        answer: 0,
        wrongHints: [null, "'Allerbeste' kun je niet nameten — het is wat de verkoper beweert.", "Het is geen prijsverlaging.", "Het is geen kleine-lettertjes-regel."],
        uitlegPad: {
          stappen: [{ titel: "'Allerbeste' = mening", tekst: "Of het de allerbeste is, kun je niet bewijzen. De verkoper zegt dat om je te laten kopen — een mening." }],
          niveaus: {
            basis: "'Allerbeste' is niet te bewijzen → een reclame-mening.",
            simpeler: "Kun je nameten of het écht de beste is? Nee.",
            nogSimpeler: "Is 'de allerbeste' een feit of wat de verkoper vindt?",
          },
        },
      },
      {
        q: "Wat wil een advertentie vooral bereiken?",
        options: ["dat je iets koopt", "dat je iets leert", "dat je iets weggeeft", "dat je gaat sparen"],
        answer: 0,
        wrongHints: [null, "Informeren is niet het hoofddoel van reclame.", "Daar is reclame niet voor.", "Reclame wil juist dat je geld uitgeeft."],
        uitlegPad: {
          stappen: [{ titel: "Reclame = verkopen", tekst: "Het doel van een advertentie is dat jij het product koopt. Daarom klinkt alles zo positief." }],
          niveaus: {
            basis: "Een advertentie wil dat je iets koopt.",
            simpeler: "Waarom maakt een winkel reclame?",
            nogSimpeler: "Wil reclame dat je koopt of dat je leert?",
          },
        },
      },
      {
        q: "Onder een advertentie staan kleine lettertjes. Wat staat daar vaak in?",
        options: ["de voorwaarden", "het grootste nieuws", "de leukste foto's", "niets belangrijks"],
        answer: 0,
        wrongHints: [null, "Het belangrijke nieuws staat juist groot.", "Foto's staan niet in de kleine lettertjes.", "Juist wél belangrijk — lees ze."],
        uitlegPad: {
          stappen: [{ titel: "Kleine lettertjes = voorwaarden", tekst: "In de kleine lettertjes staan de voorwaarden, bijvoorbeeld 'alleen deze week' of 'zolang de voorraad strekt'." }],
          niveaus: {
            basis: "Kleine lettertjes bevatten meestal de voorwaarden.",
            simpeler: "Waarom is het slim de kleine lettertjes tóch te lezen?",
            nogSimpeler: "Staan daar de regels/voorwaarden of grappige plaatjes?",
          },
        },
      },
      {
        q: "Bij een product staat: 'Nu met gratis sticker!' Waarom zetten ze dat erbij?",
        options: ["om je te verleiden het te kopen", "omdat stickers verplicht zijn", "om het duurder te maken", "omdat de sticker stuk is"],
        answer: 0,
        wrongHints: [null, "Een extraatje maakt kopen aantrekkelijker.", "Stickers zijn niet verplicht.", "'Gratis' maakt het juist aantrekkelijker, niet duurder."],
        uitlegPad: {
          stappen: [{ titel: "Gratis extraatje = lokkertje", tekst: "Een 'gratis' extraatje is bedoeld om je over te halen het product te kopen." }],
          niveaus: {
            basis: "Een gratis extraatje moet je verleiden te kopen.",
            simpeler: "Maakt 'gratis erbij' het kopen aantrekkelijker?",
            nogSimpeler: "Waarom geven ze een sticker gratis weg?",
          },
        },
      },
    ],
  },

  // ─── D. Rekenen met aanbiedingen ──────────────────────────
  {
    title: "In het echt — rekenen met aanbiedingen",
    explanation:
      "Bij de Doorstroomtoets moet je vaak **rekenen** met aanbiedingen. Werk stap voor stap:\n\n" +
      "1. **Lees** de aanbieding precies (korting? 2e halve prijs? gratis erbij?).\n" +
      "2. **Reken** uit wat je betaalt of bespaart.\n" +
      "3. **Controleer** of het antwoord logisch is.\n\n" +
      "Onthoud: **50% korting = de helft eraf**; **2e halve prijs = volle prijs + halve prijs**.",
    checks: [
      {
        q: "Een spel kost €20. Er is 50% korting. Wat betaal je?",
        options: ["€10", "€20", "€15", "€5"],
        answer: 0,
        wrongHints: [null, "Dat is de volle prijs — er gaat juist iets af.", "Dat is maar een kwart eraf.", "Te veel korting — 50% is de helft."],
        uitlegPad: {
          stappen: [{ titel: "50% = de helft", tekst: "50% korting betekent de helft eraf. De helft van €20 is €10, dus je betaalt €10." }],
          niveaus: {
            basis: "Helft van €20 = €10. Dat betaal je.",
            simpeler: "Wat is de helft van €20?",
            nogSimpeler: "€20 ÷ 2 = ?",
          },
        },
      },
      {
        q: "Een shirt kost €16. Aanbieding: 2e shirt halve prijs. Wat betaal je voor 2 shirts?",
        options: ["€24", "€32", "€16", "€8"],
        answer: 0,
        wrongHints: [null, "Dat is de volle prijs voor twee — het tweede is goedkoper.", "Dat is voor maar één shirt.", "Dat is alleen het tweede shirt."],
        uitlegPad: {
          stappen: [{ titel: "Vol + half", tekst: "Eerste shirt €16 (vol), tweede €8 (halve prijs). Samen €16 + €8 = €24." }],
          niveaus: {
            basis: "€16 (vol) + €8 (half) = €24.",
            simpeler: "Eén shirt vol (€16), één voor de helft (€8). Tel op.",
            nogSimpeler: "16 + 8 = ?",
          },
        },
      },
      {
        q: "Eén pak koekjes kost €2. Aanbieding: 3 pakken voor €5. Hoeveel bespaar je bij 3 pakken?",
        options: ["€1", "€5", "€6", "€2"],
        answer: 0,
        wrongHints: [null, "Dat is de aanbiedingsprijs, niet de besparing.", "Dat is de normale prijs van 3 pakken.", "Reken: normale prijs − aanbiedingsprijs."],
        uitlegPad: {
          stappen: [{ titel: "Normaal − aanbieding", tekst: "Normaal: 3 × €2 = €6. Aanbieding: €5. Je bespaart €6 − €5 = €1." }],
          niveaus: {
            basis: "Normaal €6, nu €5 → €1 bespaard.",
            simpeler: "Wat kosten 3 pakken normaal? En wat nu? Het verschil is de besparing.",
            nogSimpeler: "€6 − €5 = ?",
          },
        },
      },
      {
        q: "Een boek kost €30. Je krijgt 10% korting, maar betaalt €2 verzendkosten. Wat betaal je in totaal?",
        options: ["€29", "€27", "€32", "€28"],
        answer: 0,
        wrongHints: [null, "Vergeet de verzendkosten niet erbij op te tellen.", "Dat is zónder verzendkosten.", "Je vergat de korting eraf te halen."],
        uitlegPad: {
          stappen: [{ titel: "Korting eraf, verzending erbij", tekst: "10% van €30 = €3 korting → €27. Dan €2 verzendkosten erbij: €27 + €2 = €29." }],
          niveaus: {
            basis: "€30 − €3 (10%) = €27, plus €2 verzending = €29.",
            simpeler: "Eerst korting eraf (€3), dan verzendkosten erbij (€2).",
            nogSimpeler: "30 − 3 = 27, en 27 + 2 = ?",
          },
        },
      },
    ],
  },
];

export default {
  id: "folder-bon-advertentie-po",
  title: "Folder, bon & advertentie lezen",
  subject: "studievaardigheden",
  level: "groep7-8",
  sloThema: "studievaardigheden-folder",
  chapters,
  steps,
  prerequisites: [],
};
