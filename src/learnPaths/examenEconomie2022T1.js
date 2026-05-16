// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2022 tijdvak 1.
// 2026-05-16: 7e economie-pilot — vult de 2022-T1 slot (oudste jaar).
// 5 echte MC-vragen geselecteerd uit 11 (V40 volgorde-vraag overgeslagen).
// Bron: examenblad.nl, examen 0233 GT 2022-1.

const chapters = [
  { letter: "A", title: "EU & overheid", emoji: "🏛️", from: 0, to: 1 },
  { letter: "B", title: "Inkomen & koopkracht", emoji: "💰", from: 2, to: 3 },
  { letter: "C", title: "Markt & uitkeringen", emoji: "📊", from: 4, to: 4 },
];

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Economie 2022 tijdvak 1, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2022/vmbo-gl/documenten/cse-1/gt-0233-a-22-1-o";

const compactUitleg = (kernUitleg, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kernUitleg }],
  woorden,
  theorie: "Cito-truc: lees de vraag zorgvuldig, koppel sleutel-begrip uit vraag aan het juiste economische concept.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const steps = [
  {
    title: "Vraag 13 — Vrij verkeer van personen in EU",
    explanation: "Echte examenvraag uit Economie 2022-T1, vraag 13. Onderwerp: 4 vrijheden EU-interne markt.",
    emoji: "🎓",
    checks: [{
      q: "Inwoners van een EU-land mogen werken en wonen in een ander EU-land vanwege:",
      options: [
        "vrij verkeer van goederen en diensten.",
        "vrij verkeer van kapitaal.",
        "vrij verkeer van personen.",
        "vrij verkeer van werkgelegenheid.",
      ],
      answer: 2,
      wrongHints: ["Goederen en diensten = handel zonder tarieven, niet over mensen.", "Kapitaal = geld + investeringen vrij verplaatsen, niet personen.", null, "'Vrij verkeer van werkgelegenheid' bestaat NIET — dat is een verzonnen optie."],
      explanation: "EU-interne markt heeft 4 vrijheden: goederen, diensten, kapitaal, **personen**. Vrij verkeer van personen = elk EU-burger mag werken, wonen, studeren in ander EU-land zonder visum. Optie C.",
      examenBron: BRON_LABEL(13),
      bronLink: BRON_LINK,
      leerpadLink: { id: "pincode-buitenland-eu", title: "Pincode — buitenland + EU" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'vrij verkeer', 'EU', 'kapitaal', 'werkgelegenheid'" },
        { id: "pincode-buitenland-eu", title: "Pincode — buitenland + EU", niveau: "VMBO klas 3-4", why: "4 vrijheden EU-interne markt — kern van deze vraag" },
      ],
      uitlegPad: compactUitleg(
        "EU heeft 4 vrijheden (sinds Maastricht 1992): goederen, diensten, kapitaal, **personen**. Wonen + werken in ander EU-land = onderdeel van vrij verkeer van personen.",
        { basis: "Vrij verkeer van personen. = C.", simpeler: "EU heeft 4 vrijheden: goederen/diensten/kapitaal/PERSONEN. Wonen+werken = personen. = C.", nogSimpeler: "Personen = C." },
        [{ woord: "interne markt", uitleg: "EU-gebied zonder grenzen voor handel + reizen." }],
      ),
    }],
  },
  {
    title: "Vraag 19 — Prinsjesdag: CPB rekent economisch door",
    explanation: "Echte examenvraag uit Economie 2022-T1, vraag 19. Onderwerp: instituties Nederlandse overheid.",
    emoji: "🎓",
    checks: [{
      q: "De plannen die op Prinsjesdag gepubliceerd worden door de regering worden doorgerekend op financiële en economische gevolgen. Welke instantie berekent de economische gevolgen van de regeringsplannen?",
      options: [
        "Centraal Bureau voor de Statistiek",
        "Centraal Plan Bureau",
        "Sociaal Economische Raad",
        "Uitvoeringsinstituut Werknemersverzekeringen",
      ],
      answer: 1,
      wrongHints: ["CBS doet statistiek (CIJFERS van wat er IS gebeurd), niet voorspellingen.", null, "SER adviseert over sociaal-economisch BELEID, geen prognoses.", "UWV is uitvoering uitkeringen — geen rekenwerk."],
      explanation: "**CPB (Centraal Planbureau)** is het instituut dat alle regeringsplannen + verkiezingsprogramma's doorrekent op economische effecten. CBS = statistiek (cijfers van verleden). SER = sociaal-economisch advies. UWV = uitvoering uitkeringen. Optie B.",
      examenBron: BRON_LABEL(19),
      bronLink: BRON_LINK,
      leerpadLink: { id: "pincode-overheid", title: "Pincode — overheid" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'CBS', 'CPB', 'SER', 'UWV', 'Prinsjesdag', 'doorrekenen'" },
        { id: "pincode-overheid", title: "Pincode — overheid", niveau: "VMBO klas 3-4", why: "Rijksbegroting + Prinsjesdag + 4 NL-economische-instituten" },
      ],
      uitlegPad: compactUitleg(
        "Vier instituten met afkortingen onthouden: **CBS** = Statistiek (cijfers verleden). **CPB** = Planbureau (toekomst-prognoses). **SER** = Sociaal-Economische Raad (advies). **UWV** = Werknemersverzekeringen (uitvoering). Voor Prinsjesdag-doorrekening = CPB.",
        { basis: "CPB rekent door. = B.", simpeler: "CPB = Centraal PlanBureau = economische prognoses. = B.", nogSimpeler: "CPB = B." },
        [
          { woord: "CBS", uitleg: "Centraal Bureau voor de Statistiek." },
          { woord: "CPB", uitleg: "Centraal Plan Bureau — rekent regeringsplannen door." },
          { woord: "SER", uitleg: "Sociaal Economische Raad — advies." },
          { woord: "UWV", uitleg: "Uitvoeringsinstituut Werknemersverzekeringen." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 37 — Modaal inkomen = meest voorkomend",
    explanation: "Echte examenvraag uit Economie 2022-T1, vraag 37. Onderwerp: definitie modaal inkomen.",
    emoji: "🎓",
    checks: [{
      q: "Wat wordt bedoeld met het modaal inkomen in Nederland?",
      options: [
        "het gemiddelde inkomen in Nederland",
        "het hoogste inkomen dat in Nederland wordt verdiend",
        "het inkomen dat het meest voorkomt in Nederland",
        "het laagste inkomen dat in Nederland wordt verdiend",
      ],
      answer: 2,
      wrongHints: ["Gemiddelde = optellen + delen door aantal. Modaal is iets anders.", "Hoogste = maximum, niet modaal.", null, "Laagste = minimum, niet modaal."],
      explanation: "**Modaal** komt van 'modus' = de waarde die het vaakst voorkomt in een verdeling. Modaal inkomen = inkomen dat de meeste Nederlanders verdienen (~€37.000 bruto in 2022). Anders dan **gemiddelde** (alle inkomens opgeteld ÷ aantal). Optie C.",
      examenBron: BRON_LABEL(37),
      bronLink: BRON_LINK,
      leerpadLink: { id: "pincode-inkomen-welvaart", title: "Pincode — inkomen + welvaart" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'modaal', 'modus', 'gemiddelde', 'verdienen'" },
        { id: "gemiddelden-statistiek-po", title: "Gemiddelde + modus + mediaan", niveau: "groep 6-8", why: "modus = vaakst voorkomend — directe kennis voor modaal-definitie" },
        { id: "pincode-inkomen-welvaart", title: "Pincode — inkomen + welvaart", niveau: "VMBO klas 3-4", why: "Nederlandse inkomensbegrippen: modaal / minimum / maximum / gemiddeld" },
      ],
      uitlegPad: compactUitleg(
        "Modaal = modus = vaakst voorkomend. Bij salarissen: het inkomen dat de meeste mensen verdienen. In NL ~€37.000 bruto (2022). Niet gemiddelde (=optellen+delen). Niet hoogste/laagste.",
        { basis: "Meest voorkomend. = C.", simpeler: "Modaal komt van 'modus' = vaakst. Modaal inkomen = wat de meeste NL'ers verdienen. = C.", nogSimpeler: "Vaakst = C." },
        [{ woord: "modaal", uitleg: "Inkomen dat het vaakst voorkomt (~€37k bruto)." }, { woord: "modus", uitleg: "Statistisch: vaakst voorkomende waarde." }],
      ),
    }],
  },
  {
    title: "Vraag 32 — Recordoogst → prijs daalt door groter aanbod",
    explanation: "Echte examenvraag uit Economie 2022-T1, vraag 32. Onderwerp: vraag-aanbod-mechanisme.",
    emoji: "🎓",
    checks: [{
      q: "Het goede weer leverde dit jaar een recordoogst aan landbouwproducten op voor India. Welk gevolg heeft de recordoogst voor de verkoopprijzen van deze landbouwproducten?",
      options: [
        "Door het grotere aanbod dalen de verkoopprijzen.",
        "Door het grotere aanbod stijgen de verkoopprijzen.",
        "Door het lagere aanbod dalen de verkoopprijzen.",
        "Door het lagere aanbod stijgen de verkoopprijzen.",
      ],
      answer: 0,
      wrongHints: [null, "Onmogelijk — meer aanbod en hogere prijs gaan tegen marktwerking in.", "Niet 'lager aanbod' — recordoogst = juist MEER aanbod.", "Niet 'lager aanbod' — recordoogst is meer, niet minder."],
      explanation: "Klassiek vraag-aanbod-principe: **meer aanbod (recordoogst) → prijzen dalen** als vraag gelijk blijft. Boeren bieden meer aan op markt → klanten kunnen kiezen → prijs zakt. Bij landbouw is dit een bekend 'oogst-paradox': goede oogst = lage prijs = soms minder inkomen voor boer.",
      examenBron: BRON_LABEL(32),
      bronLink: BRON_LINK,
      leerpadLink: { id: "vraag-aanbod-economie", title: "Vraag + aanbod" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'recordoogst', 'aanbod', 'verkoopprijs'" },
        { id: "vraag-aanbod-economie", title: "Vraag + aanbod", niveau: "VMBO klas 3-4", why: "marktwerking: aanbod ↑ → prijs ↓ — kern van deze vraag" },
      ],
      uitlegPad: compactUitleg(
        "Recordoogst = veel meer producten beschikbaar dan normaal. Bij gelijke vraag betekent dit dat boeren tegen elkaar concurreren, prijs daalt. Klassieke vraag-aanbod-curve: aanbod stijgt → prijs daalt.",
        { basis: "Groter aanbod → prijs daalt. = A.", simpeler: "Meer producten op markt + zelfde vraag = prijs gaat omlaag. = A.", nogSimpeler: "Veel oogst = lage prijs. = A." },
      ),
    }],
  },
  {
    title: "Vraag 41 — UWV verzorgt werknemersverzekeringen",
    explanation: "Echte examenvraag uit Economie 2022-T1, vraag 41. Onderwerp: sociale zekerheid in Nederland.",
    emoji: "🎓",
    checks: [{
      q: "Welke taak verricht het UWV voor mensen als Wim (werkloos)? Het UWV verzorgt de uitvoering van:",
      options: [
        "collectieve voorzieningen.",
        "de pensioenen.",
        "de volksverzekeringen.",
        "de werknemersverzekeringen.",
      ],
      answer: 3,
      wrongHints: ["Collectieve voorzieningen = openbare diensten (onderwijs, infrastructuur) — niet UWV.", "Pensioenen = SVB (AOW) of pensioenfonds — niet UWV.", "Volksverzekeringen = SVB doet uitvoering (AOW, kinderbijslag) — niet UWV.", null],
      explanation: "**UWV** = Uitvoeringsinstituut **Werknemers**Verzekeringen — voert werknemersverzekeringen uit (WW, WIA, ZW). **SVB** doet volksverzekeringen (AOW, AKW). Wim was werknemer + werkloos = UWV is zijn instantie voor WW. Optie D.",
      examenBron: BRON_LABEL(41),
      bronLink: BRON_LINK,
      leerpadLink: { id: "pincode-werk-arbeidsmarkt", title: "Pincode — werk + arbeidsmarkt" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'UWV', 'volksverzekering', 'werknemersverzekering', 'pensioen'" },
        { id: "pincode-werk-arbeidsmarkt", title: "Pincode — werk + arbeidsmarkt", niveau: "VMBO klas 3-4", why: "sociale zekerheid: WW/WIA/AOW/bijstand — wie regelt wat" },
      ],
      uitlegPad: compactUitleg(
        "Nederland-uitkeringen-systeem: **UWV** = werknemersverzekeringen (WW, WIA, ZW — voor werkenden). **SVB** = volksverzekeringen (AOW, kinderbijslag — voor alle inwoners). **Gemeente** = bijstand (sociaal vangnet laagste). Wim werkloos = WW = UWV.",
        { basis: "Werknemersverzekeringen. = D.", simpeler: "UWV = Uitvoeringsinstituut WerknemersVerzekeringen. WW valt onder werknemers. = D.", nogSimpeler: "UWV = werknemers = D." },
        [{ woord: "UWV", uitleg: "Uitvoeringsinstituut Werknemersverzekeringen." }, { woord: "SVB", uitleg: "Sociale Verzekeringsbank — volksverzekeringen." }],
      ),
    }],
  },
];

const examenEconomie2022T1 = {
  id: "examen-economie-2022-t1",
  title: "Examen oefenen — Economie 2022 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2022-T1",
  intro: "5 echte examenvragen uit VMBO-GL/TL Economie 2022 tijdvak 1. Onderwerpen: EU vrij verkeer personen, CPB doorrekening Prinsjesdag, recordoogst & prijsdaling, modaal inkomen, UWV werknemersverzekeringen.",
  triggerKeywords: ["examen economie 2022 tijdvak 1", "eu vrij verkeer personen", "cpb prinsjesdag", "modaal inkomen", "uwv werknemersverzekeringen", "vraag aanbod"],
  chapters,
  steps,
};

export default examenEconomie2022T1;
