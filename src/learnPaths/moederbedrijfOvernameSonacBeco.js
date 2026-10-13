// Leerpad: Moederbedrijven & overnames — voorbeeld Sonac Vuren (economie, VO).
// Ontstaan uit gebruikersfeedback (2026-06-05): een AI-gegenereerde vraag over
// Sonac/Vion klopte niet. Hier de gecorrigeerde, geverifieerde feiten in een
// vast bestand, verpakt als economie-concept (moederbedrijf/dochter/overname).
//
// Bronnen: Wikipedia "Wed. P. Smits en Zoon / De Benenkluif", sonac.biz,
// darlingii.com/sonac, vuren-dorp.nl.
//
// ✅ FEITEN BEVESTIGD door een Sonac-medewerker (Mark) op 2026-06-05 (zie
//    wensenbord). NIET 'verbeteren' naar "Vion/Sovion is de voorganger van
//    Sonac" — dat is juist de FOUT. Correct: Smits = voorganger van de FABRIEK;
//    Vion/Sovion = vroegere MOEDERbedrijven (Sovion = oude naam Vion); sinds
//    2014 is het moederbedrijf Darling Ingredients.

const chapters = [
  { letter: "A", title: "Moederbedrijf & dochter", emoji: "🏢", from: 0, to: 1 },
  { letter: "B", title: "Voorbeeld: Sonac Vuren", emoji: "🦴", from: 2, to: 3 },
];

const steps = [
  {
    title: "Moederbedrijf en dochteronderneming",
    explanation:
      "Grote bedrijven bestaan vaak uit meerdere kleinere bedrijven. Het bedrijf dat de **baas** is en de andere **bezit**, heet het **moederbedrijf** (of concern). De bedrijven die eronder vallen heten **dochterondernemingen** (dochters).\n\n" +
      "Voorbeeld: een groot voedingsconcern kan tientallen fabrieken bezitten. Elke fabriek is een dochter; het concern erboven is de moeder.\n\n" +
      "**Let op het verschil:**\n" +
      "• **Moederbedrijf** = het bedrijf dat eigenaar is (de baas boven).\n" +
      "• **Voorganger** = een bedrijf dat er vróéger was en is opgehouden/veranderd van naam. Dat is iets ánders dan een moederbedrijf!",
    checks: [
      {
        q: "Hoe noem je het bedrijf dat eigenaar is van — en de baas over — andere, kleinere bedrijven?",
        options: ["Moederbedrijf", "Dochteronderneming", "Hoofdkantoor", "Zusterbedrijf"],
        answer: 0,
        wrongHints: [null, "Een dochter is zelf eigendom van een ander bedrijf. Is zij hier de eigenaar?", "Een hoofdkantoor is de plek waar de leiding van één bedrijf zit. Is het ook eigenaar van andere bedrijven?", "Zusterbedrijven staan naast elkaar, onder dezelfde eigenaar. Wie staat er dan boven?"],
        uitlegPad: {
          stappen: [{ titel: "Moeder = eigenaar boven", tekst: "Het moederbedrijf bezit de dochterondernemingen en is de baas erboven." }],
          niveaus: {
            basis: "Het bedrijf dat eigenaar is van andere bedrijven heet het moederbedrijf.",
            simpeler: "Welke 'familie'-naam past bij het bedrijf dat de baas boven is?",
            nogSimpeler: "Moeder of dochter — wie is de baas boven?",
          },
        },
      },
    ],
  },
  {
    title: "Een overname",
    explanation:
      "Soms **koopt** een groot bedrijf een ander bedrijf op. Dat heet een **overname**. Het opgekochte bedrijf wordt dan een **dochter** van de koper.\n\n" +
      "Een bedrijf kan in de loop van de jaren door **verschillende moederbedrijven** worden bezeten — telkens als het wordt doorverkocht. De naam van de fabriek zelf kan hetzelfde blijven, terwijl de moeder erboven verandert.",
    checks: [
      {
        q: "Een groot concern koopt een kleinere fabriek op. Hoe heet dat?",
        options: ["Een overname", "Een uitbesteding", "Een afsplitsing", "Een fusie van gelijken"],
        answer: 0,
        wrongHints: [null, "Bij uitbesteden laat een bedrijf werk doen door een ander bedrijf, zonder dat bedrijf te kopen. Wat gebeurt hier?", "Bij een afsplitsing wordt een deel van een bedrijf juist losgemaakt. Hier komt er een fabriek bij: hoe heet dat?", "Dat is als twee even grote bedrijven samengaan — hier koopt de één de ander."],
        uitlegPad: {
          stappen: [{ titel: "Opkopen = overname", tekst: "Als een bedrijf een ander bedrijf koopt, heet dat een overname." }],
          niveaus: {
            basis: "Een bedrijf opkopen heet een overname.",
            simpeler: "Welk woord betekent 'een bedrijf kopen'?",
            nogSimpeler: "Over… name?",
          },
        },
      },
    ],
  },
  {
    title: "Sonac Vuren was vroeger Smits",
    explanation:
      "In het dorp **Vuren** (Gelderland) staat de fabriek **Sonac**. Sonac verwerkt **botten** van koeien en varkens tot **gelatine, collageen en calciumfosfaat** — grondstoffen voor o.a. voeding en medicijnen.\n\n" +
      "De fabriek bestond al lang vóór de naam 'Sonac':\n" +
      "• Het begon als **Wed. P. Smits en Zoon** (sinds **1827**, eerst in Utrecht).\n" +
      "• In **1965** verhuisde de fabriek naar **Vuren** → **Smits Vuren BV**.\n" +
      "• Later werd het **Sonac Vuren**.\n\n" +
      "Dus **Smits** is de **voorganger** (de oude naam van de fabriek zelf).",
    checks: [
      {
        q: "Hoe heette de fabriek in Vuren vóórdat het Sonac werd?",
        options: ["Smits", "Vion", "Sovion", "Darling Ingredients"],
        answer: 0,
        wrongHints: [null, "Dat was een moederbedrijf erboven, niet de oude fabrieksnaam.", "Dat was de oude naam van dat moederbedrijf — niet van de fabriek.", "Klinkt die naam als een Nederlands familiebedrijf uit 1827? Lees nog eens hoe de fabriek begon."],
        uitlegPad: {
          stappen: [{ titel: "Voorganger fabriek = Smits", tekst: "De fabriek heette eerst Smits (Wed. P. Smits en Zoon, naar Vuren in 1965)." }],
          niveaus: {
            basis: "De voorganger van Sonac Vuren is de fabriek Smits.",
            simpeler: "Welke naam hoort bij de fabriek zélf van vroeger (niet de baas erboven)?",
            nogSimpeler: "Begint met Sm…?",
          },
        },
      },
    ],
  },
  {
    title: "De moederbedrijven van Sonac",
    explanation:
      "Boven Sonac stonden door de jaren heen verschillende **moederbedrijven**:\n" +
      "• Lange tijd viel Sonac onder **VION** (het voedingsconcern; **VION heette vroeger 'Sovion'**).\n" +
      "• **Sinds 2014** is Sonac onderdeel van **Darling Ingredients** — een groot internationaal bedrijf met meer dan 200 locaties wereldwijd.\n\n" +
      "**Belangrijk (en een veelgemaakte fout):** **Vion** en **Sovion** waren **moederbedrijven** boven Sonac — het zijn géén 'voorgangers' van Sonac. Sovion is gewoon de oude naam van Vion. De **voorganger van de fabriek zelf** was **Smits**.",
    checks: [
      {
        q: "Onder welk internationaal moederbedrijf valt Sonac sinds 2014?",
        options: ["Darling Ingredients", "Vion Food Group", "Sovion", "Danish Crown"],
        answer: 0,
        wrongHints: [null, "Dat was het moederbedrijf vóór 2014.", "Dat was de oude naam van dat eerdere moederbedrijf.", "Danish Crown is een groot Deens vleesbedrijf, maar het heeft Sonac nooit gekocht. Welk concern nam Sonac in 2014 over?"],
        uitlegPad: {
          stappen: [{ titel: "Sinds 2014 → Darling Ingredients", tekst: "Sonac is sinds 2014 onderdeel van Darling Ingredients; daarvóór van Vion (eerder Sovion)." }],
          niveaus: {
            basis: "Sinds 2014 is het moederbedrijf van Sonac: Darling Ingredients.",
            simpeler: "Welk huidig (internationaal) bedrijf is sinds 2014 de baas boven Sonac?",
            nogSimpeler: "Begint met Darling…?",
          },
        },
      },
    ],
  },
];

export default {
  id: "moederbedrijf-overname-sonac-beco",
  title: "Moederbedrijven & overnames — voorbeeld Sonac Vuren",
  subject: "economie",
  level: "klas3",
  sloThema: "economie-bedrijfsstructuur",
  chapters,
  steps,
  prerequisites: [],
};
