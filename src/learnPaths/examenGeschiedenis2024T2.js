// Leerpad: Examen-oefenpad Geschiedenis & staatsinrichting VMBO-GL/TL 2024 tijdvak 2
// 2026-05-14. Bron: examenblad.nl GT-0125-a-24-2.
// 3 MC-vragen geselecteerd uit 8 (veel bron-afhankelijke vragen geskipt).

const chapters = [
  { letter: "A", title: "Industriële Revolutie", emoji: "🏭", from: 0, to: 0 },
  { letter: "B", title: "WO2 + nazi-Duitsland", emoji: "⚔️", from: 1, to: 2 },
];

const PDF_LINK = "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0125-a-24-2-o-spr.pdf";
const BRON = (v) => `🎓 Echt examen VMBO-GL/TL Geschiedenis 2024 tijdvak 2, vraag ${v}`;

const steps = [
  {
    title: "Vraag 5 — Wat veroorzaakte de massaproductie in 19e eeuw?",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2024 tijdvak 2, vraag 5.",
    emoji: "🎓",
    checks: [
      {
        q: "In de 19e eeuw werden steeds meer goederen in grote fabrieken gemaakt in plaats van thuis met de hand. Wat is een belangrijke oorzaak van deze ontwikkeling?",
        options: ["distributiesysteem", "industrialisatie", "mobilisatie", "werkverschaffing"],
        answer: 1,
        wrongHints: [
          "Distributiesysteem = manier waarop goederen verspreid worden. Een GEVOLG van productie, geen oorzaak.",
          null,
          "Mobilisatie = leger op oorlogsvoet brengen. Geen verband met fabrieken.",
          "Werkverschaffing = overheidsbanen voor werklozen, vooral jaren '30. Te laat + andere doel.",
        ],
        explanation: "**Industrialisatie** = overgang van handenarbeid + kleine werkplaatsen naar mechanische productie in grote fabrieken (vanaf ~1750 in Engeland, in NL pas in late 19e eeuw). Stoommachines + later elektriciteit + machine-productie waren technologische motor. Sociale gevolgen: trek naar steden, arbeidersklasse, kinderarbeid, vakbonden.",
        examenBron: BRON(5),
        bronLink: PDF_LINK,
        leerpadLink: { id: "industriele-revolutie-po", title: "Industriële Revolutie" },
        voorkennisKeten: [
          { id: "industriele-revolutie-po", title: "Industriële Revolutie", niveau: "po-1F", why: "context industrialisatie + 19e eeuw" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Industrialisatie kort", tekst: "Industrialisatie = grootschalige fabrieks-productie vervangt thuis-werk. Begon in Engeland (~1750), kwam in NL pas eind 19e eeuw. Stoommachine + machinaal weefgetouw + spoorwegen waren motoren." },
            { titel: "Andere termen onderscheiden", tekst: "**Distributiesysteem** = hoe goederen rondkomen.\n**Mobilisatie** = leger klaarmaken.\n**Werkverschaffing** = overheidsbanen tijdens crisis (jaren '30)." },
          ],
          woorden: [
            { woord: "industrialisatie", uitleg: "Overgang naar grootschalige machinale fabrieks-productie." },
            { woord: "mobilisatie", uitleg: "Leger oproepen + klaarmaken voor oorlog." },
          ],
          theorie: "Onthoud: fabrieken + massaproductie = INDUSTRIALISATIE.",
          voorbeelden: [{ type: "stap", tekst: "Twentse textielfabrieken vanaf ~1860 — kinderen + vrouwen werkten lange dagen aan stoom-aangedreven weefgetouwen. Klassiek industrialisatie-NL." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Industrie = fabriek. -satie = proces erheen." }],
          niveaus: {
            basis: "Industrialisatie. Antwoord B.",
            simpeler: "Fabrieken + machines in plaats van handwerk = industrialisatie. Antwoord B.",
            nogSimpeler: "Fabrieken = industrialisatie = B.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 16 — Duitsland na Beurskrach 1929",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2024 tijdvak 2, vraag 16.",
    emoji: "🎓",
    checks: [
      {
        q: "Duitsland werd na de Beurskrach van 1929 extra zwaar getroffen door de wereldwijde economische crisis. Wat was een gevolg van die crisis in Duitsland?",
        options: [
          "De aanhang van antidemocratische partijen werd groter.",
          "De parlementaire democratie werd hersteld.",
          "Duitsland verloor zijn koloniën.",
          "Duitsland werd communistisch door een revolutie.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Parlementaire democratie verzwakte juist (Weimar-republiek faalde). Tegenovergesteld.",
          "Koloniën waren al verloren in 1919 (Vredesverdrag Versailles) — niet door de crisis.",
          "Tegen 1933 nam Hitler de macht — Duitsland werd nationaal-socialistisch, niet communistisch.",
        ],
        explanation: "Wereldwijde crisis na **Beurskrach 1929** raakte Duitsland extra hard (afhankelijk van VS-leningen die werden teruggetrokken). Werkloosheid explodeerde tot 6 miljoen. Wanhopige burgers vluchtten naar **antidemocratische** partijen: vooral de **NSDAP** (nazi's onder Hitler) en de KPD (communisten). De democratie van Weimar viel uiteen → 1933: Hitler aan de macht.",
        examenBron: BRON(16),
        bronLink: PDF_LINK,
        voorkennisKeten: [
          { id: "wereldoorlog1-geschiedenis", title: "Eerste Wereldoorlog + interbellum", niveau: "vmbo-3", why: "context Weimar-Duitsland + interbellum-crises" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Beurskrach 1929 → crisis", tekst: "**24 oktober 1929** ('Black Thursday'): NY-beurs stort in. Vertrouwen weg → banken sluiten → bedrijven failliet → werkloosheid → minder besteding → meer faillissementen. Vicieuze cirkel. Wereldwijd voelbaar." },
            { titel: "Waarom Duitsland extra hard", tekst: "Duitsland had grote oorlogsschulden + leefde op leningen uit VS. Toen VS leningen terugtrok = totale instorting. Werkloosheid steeg van 1 miljoen (1928) naar 6 miljoen (1932). Vele bedrijven failliet." },
            { titel: "Politiek gevolg", tekst: "Mensen verloren vertrouwen in democratie. Stemmen naar extremen: nazi's beloven 'sterke leider + werk + grootsheid'. NSDAP groeit van 12 zetels (1928) naar 230 (1932). 1933: Hitler kanselier." },
          ],
          woorden: [
            { woord: "Beurskrach", uitleg: "Plotselinge instorting van de aandelenmarkt." },
            { woord: "Weimar-republiek", uitleg: "Democratisch Duitsland 1919-1933 — viel om door crisis + nazi-opkomst." },
            { woord: "NSDAP", uitleg: "Hitlers nationaal-socialistische partij." },
          ],
          theorie: "Economische crisis + zwakke democratie = recept voor extremisme. Geldt altijd, niet alleen 1929. Les van geschiedenis.",
          voorbeelden: [{ type: "stap", tekst: "NSDAP verkiezing 1928: 2,6%. 1930: 18%. Juli 1932: 37%. Crisis-jaren = sprongetjes naar nazi-aanhang." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Crisis + werkloosheid → mensen vluchten naar extreme partijen." }],
          niveaus: {
            basis: "Antidemocratische partijen groter. Antwoord A.",
            simpeler: "Economische crisis → werkloosheid → vertrouwen in democratie weg → mensen stemmen op extremen (nazi's). Antwoord A.",
            nogSimpeler: "Crisis → extremen groter = A.",
          },
        },
      },
    ],
  },

  {
    title: "Vraag 30 — Wat was de Gestapo?",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2024 tijdvak 2, vraag 30.",
    emoji: "🎓",
    checks: [
      {
        q: "Een omschrijving: De taak van deze Duitse organisatie was onder andere het opsporen van politieke tegenstanders, joden en andere 'staatsvijanden' tijdens de nazi-periode. Welke organisatie is dit?",
        options: ["Gestapo", "Hitlerjugend", "NSB", "NSDAP"],
        answer: 0,
        wrongHints: [
          null,
          "Hitlerjugend = nazi-JEUGDORGANISATIE. Voor opvoeding/indoctrinatie, geen opsporing.",
          "NSB = Nederlandse Nationaal-Socialistische Beweging — Mussert. Politieke partij in NL, geen Duitse opsporingsdienst.",
          "NSDAP = Hitler's POLITIEKE PARTIJ. Daar viel de Gestapo onder, maar partij zelf is niet 'opsporings-organisatie'.",
        ],
        explanation: "**Gestapo** (Geheime Staatspolizei) = nazi-geheime politie. Berucht voor wrede ondervragingen + arrestaties zonder proces. Opsporen van: communisten, sociaaldemocraten, joden, homoseksuelen, kerkverzet, kunstenaars met 'verkeerde' ideeën. In bezet NL ook actief — vaak met hulp van NL-collaborateurs.",
        examenBron: BRON(30),
        bronLink: PDF_LINK,
        voorkennisKeten: [
          { id: "wereldoorlog1-geschiedenis", title: "Wereldoorlogen", niveau: "vmbo-3", why: "context WO2 + nazi-organisaties" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "4 nazi-organisaties uit elkaar", tekst: "**Gestapo** = geheime politie (Geheime Staats-Polizei). Opsporing van vijanden.\n**Hitlerjugend** = nazi-jeugdbeweging (10-18 jaar). Indoctrinatie.\n**NSB** = NL-nazi-partij (Mussert). Politieke beweging.\n**NSDAP** = Hitlers Duitse partij." },
            { titel: "Gestapo-methodes", tekst: "Verklikkers/informanten. Anonieme tips. Geen rechtsbescherming. Verhoor onder marteling. Concentratiekamp zonder veroordeling. Symbool van nazi-terreur." },
          ],
          woorden: [
            { woord: "Gestapo", uitleg: "Geheime Staatspolizei — nazi-geheime politie." },
            { woord: "Hitlerjugend", uitleg: "Nazi-jeugdorganisatie." },
            { woord: "NSB", uitleg: "Nederlandse Nazi-partij (Mussert)." },
          ],
          theorie: "Onthoud:\n• Gestapo = OPSPOREN tegenstanders\n• Hitlerjugend = JEUGD-indoctrinatie\n• NSB = NL-partij\n• NSDAP = Duits-partij",
          voorbeelden: [{ type: "stap", tekst: "Anne Frank en haar familie werden in 1944 opgepakt door politie + Gestapo, na verraad door een nog onbekende tipgever." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Gestapo = 'Geheime' politie = OPSPOREN. Jugend = Jeugd. NSB = NL. NSDAP = Duits." }],
          niveaus: {
            basis: "Gestapo. Antwoord A.",
            simpeler: "Gestapo = nazi-geheime politie die politieke vijanden opspoorde. Antwoord A.",
            nogSimpeler: "Geheime politie = Gestapo = A.",
          },
        },
      },
    ],
  },
];

const examenGeschiedenis2024T2 = {
  id: "examen-geschiedenis-2024-t2",
  title: "Examen oefenen — Geschiedenis 2024 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "geschiedenis",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Geschiedenis - eindexamen oefenen 2024-T2",
  intro:
    "3 echte examenvragen uit het VMBO-GL/TL geschiedenis-examen 2024 tijdvak 2. Vooral bron-afhankelijke (kaart, tekening, foto) vragen geskipt. Per vraag officiële antwoorden + uitleg + doorklik naar bestaande paden.",
  triggerKeywords: [
    "examen geschiedenis 2024 tijdvak 2", "industrialisatie",
    "beurskrach 1929 antidemocratisch", "gestapo nazi geheime politie",
  ],
  chapters,
  steps,
};

export default examenGeschiedenis2024T2;
