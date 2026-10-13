// Leerpad: Ecosystemen + Biodiversiteit — HAVO/VWO Biologie
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Voedselweb + energiestroom,
// populatie-dynamica, successie, biodiversiteit, mens-natuur.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["🌳", "🐺", "🌿", "🦋", "🏆"];

const chapters = [
  { letter: "A", title: "Voedselweb + energiestroom", emoji: "🌳", from: 0, to: 0 },
  { letter: "B", title: "Populatie-dynamica", emoji: "🐺", from: 1, to: 1 },
  { letter: "C", title: "Successie + kringlopen", emoji: "🌿", from: 2, to: 2 },
  { letter: "D", title: "Biodiversiteit + bedreigingen", emoji: "🦋", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — mens + natuur", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Voedselweb + energiestroom ────────────────────────
  {
    title: "Voedselweb + energiestroom",
    explanation:
      "**Ecosysteem** = leefgemeenschap (alle planten/dieren/microben) + abiotisch milieu (lucht, water, bodem).\n\n**Trofische niveaus** (van zon naar top):\n• **Producenten (P)** — planten, algen: maken eigen voedsel via fotosynthese.\n• **Consumenten 1e orde (C1)** — herbivoren (haas, koe).\n• **Consumenten 2e orde (C2)** — carnivoren (vos eet haas).\n• **Consumenten 3e orde (C3)** — toppredatoren (adelaar eet vos).\n• **Reducenten (R)** — bacteriën + schimmels: breken dode stof af → nutriënten terug naar bodem.\n\n**Voedselketen** = lineair pad (gras → haas → vos → adelaar).\n**Voedselweb** = vervlochten netwerk van vele ketens.\n\n**Energiestroom — '10%-regel'**:\nVan elk trofisch niveau gaat ~**10% van energie** naar volgend niveau. 90% verloren als:\n• Ademhaling (warmte).\n• Niet-eetbare delen (botten, haren).\n• Uitwerpselen.\n\n**Gevolg**: piramide-vorm.\n• 10 000 kg planten →\n• 1 000 kg herbivoren →\n• 100 kg carnivoren →\n• 10 kg toppredatoren.\n\nDaarom zijn toppredatoren altijd zeldzaam + is vegetarisch eten energie-efficiënter dan vlees eten (vee eet veel plant voor weinig vlees-energie).\n\n**Zelfde, voor stof (mineralen)**: KRINGLOOP — niet verloren maar circulerend (zie stap 3).\n\n**Niche** = ecologische functie + plek van soort. Twee soorten kunnen niet exact dezelfde niche bezetten zonder concurrentie.\n\n**Voorbeelden ecosystemen**:\n• Bos: gelaagd (kruidlaag, struiklaag, boomlaag).\n• Vijver: thermische gelaagdheid, planktonbasis.\n• Tropisch koraalrif: hoogste biodiversiteit per m².\n• Toendra: laag, traag, weinig soorten.",
    checks: [
      {
        q: "Wat is een **producent** in een ecosysteem?",
        options: [
          "Plant of alg die zelf zijn voedsel aanmaakt",
          "Herbivoor die plantenstof omzet in vlees",
          "Bacterie die dode resten omzet in mineralen",
          "Carnivoor die andere dieren eet"
        ],
        answer: 0,
        wrongHints: [null, "Een herbivoor zet voedsel om, maar heeft hij dat voedsel zelf gemaakt? Waar haalt hij het vandaan?", "Dat is een reducent: die werkt aan het eind van de kringloop. Wie staat er aan het begin van een voedselketen?", "Een carnivoor eet andere dieren. Maakt hij dan zelf zijn voedsel?"],
        uitlegPad: {
          stappen: [{ titel: "P = autotroof", tekst: "Producenten (autotrofen) gebruiken zonlicht/anorganische stoffen om organisch materiaal te maken. Vooral planten + algen + cyanobacteriën. Begin van alle voedselketens." }],
          niveaus: { basis: "Plant via fotosynthese.", simpeler: "Maakt zelf voedsel uit zon.", nogSimpeler: "Plant" },
        },
      },
      {
        q: "Energie-verlies per trofische stap is ongeveer:",
        options: ["90%", "10%", "50%", "99%"],
        answer: 0,
        wrongHints: [null, "Lees de vraag goed: gaat het om wat doorgaat of om wat verloren gaat?", "Als de helft doorging, zouden ketens van tien schakels makkelijk zijn. Zie je die in de natuur?", "Dan zou een vos bijna niets aan een haas hebben. Kan een voedselketen dan nog drie niveaus hebben?"],
        uitlegPad: {
          stappen: [{ titel: "10%-regel", tekst: "Per niveau gaat ~10% over, 90% verloren (ademhaling, warmte, oneetbaar). Daarom zijn ecosysteem-piramides smal aan de top." }],
          theorie: "Daarom kunnen we max ~3-4 trofische niveaus hebben — daarna te weinig energie voor populatie.",
          niveaus: { basis: "90% verlies.", simpeler: "Slechts ~10% door per niveau.", nogSimpeler: "90% weg" },
        },
      },
      {
        q: "Een **vos eet een haas** die gras heeft gegeten. De vos is:",
        options: [
          "Consument 2e orde (C2)",
          "Producent",
          "Consument 1e orde (C1)",
          "Reducent"
        ],
        answer: 0,
        wrongHints: [null, "Een producent maakt zelf voedsel met zonlicht. Doet een vos dat?", "Een C1 eet planten. Wat eet de haas, en wat eet de vos?", "Een reducent breekt dode resten af. Doet de vos dat met een levende haas?"],
        uitlegPad: {
          stappen: [{ titel: "Trofische niveau", tekst: "Gras → P. Haas (eet plant) → C1. Vos (eet haas = C1) → **C2**. Een adelaar die vossen eet zou C3 zijn." }],
          niveaus: { basis: "C2.", simpeler: "Vos eet planteneter → niveau 3 = C2.", nogSimpeler: "C2" },
        },
      },
      {
        q: "Welke groep is **essentieel** om dode plant + dier-resten terug te brengen in de kringloop?",
        options: [
          "Reducenten",
          "Producenten",
          "Consumenten",
          "Toppredatoren"
        ],
        answer: 0,
        wrongHints: [null, "Producenten bouwen nieuwe stof op uit CO₂ en water. Breken ze ook dode resten af?", "Consumenten eten levende planten en dieren. Wie ruimt een dood blad op de bosgrond op?", "Een adelaar eet levende prooi. Wie breekt een dode adelaar uiteindelijk af?"],
        uitlegPad: {
          stappen: [
            { titel: "R = afbraak → mineralen", tekst: "Reducenten breken dode stof af → maken anorganische mineralen vrij (N, P, K). Zonder R: voedingsstoffen zouden vastzitten in lijken; planten zouden geen nutriënten hebben → ecosysteem stort in." },
          ],
          theorie: "Daarom is bodemleven (regenwormen, schimmels, bacteriën) zo belangrijk voor landbouw + bosbouw.",
          niveaus: { basis: "Reducenten.", simpeler: "Bacteriën + schimmels recyclen.", nogSimpeler: "R" },
        },
      },
      {
        q: "Een **toppredator** zoals adelaar zit aan top van piramide omdat:",
        options: [
          "Er is te weinig energie over voor nog een niveau",
          "Ze krijgen de meeste energie van alle niveaus",
          "Hun soort heeft de grootste biomassa van allemaal",
          "Adelaars zijn wettelijk beschermd tegen de jacht"
        ],
        answer: 0,
        wrongHints: [null, "Bij elke stap omhoog gaat er energie verloren. Op welk niveau is er dan het meeste energie?", "Hoeveel adelaars leven er in een bos, vergeleken met muizen of grassprieten?", "Bescherming is een regel van mensen. Verklaart dat waarom er van nature zo weinig toppredatoren zijn?"],
        uitlegPad: {
          stappen: [{ titel: "Energie-piramide", tekst: "Met 10% over per niveau: na 4 niveaus is er 0,001 (= 0,1%) van de energie in de producenten over. Te weinig om een groot dier te voeden. Daarom adelaars zeldzaam + groot territorium." }],
          niveaus: { basis: "Energie op.", simpeler: "Niet genoeg eten meer hoger.", nogSimpeler: "Energie-grens" },
        },
      },
    ],
  },

  // ─── B. Populatie-dynamica ────────────────────────────────
  {
    title: "Populatie-dynamica + draagkracht",
    explanation:
      "**Populatie** = groep individuen van zelfde soort op zelfde plek.\n\n**Populatie-groei** door 4 factoren:\n• **G**eboren + **I**mmigratie → groei.\n• **S**terfte + **E**migratie → afname.\n• Δ populatie = (G + I) − (S + E).\n\n**Exponentiële groei** (J-curve):\n• Bij overvloed voedsel + geen beperkingen: dN/dt = r·N.\n• N(t) = N₀ · e^(r·t).\n• Bacteriën in vers medium, invasieve soorten in nieuw gebied.\n• Korte termijn — niet duurzaam.\n\n**Logistische groei** (S-curve):\n• Met **draagkracht K** (carrying capacity): dN/dt = r·N·(1−N/K).\n• Beneden K: groei. Bij K: stabiel. Boven K: krimp.\n• Realistischer voor de meeste populaties.\n\n**Wat bepaalt K?**\n• Voedsel.\n• Ruimte.\n• Predatoren.\n• Ziekten.\n• Klimaat.\n• Concurrentie.\n\n**Predator-prooi-cycli** (Lotka-Volterra):\n• Veel prooi → predator populatie stijgt.\n• Meer predatoren → prooi populatie daalt.\n• Minder prooi → predator populatie daalt.\n• Minder predatoren → prooi populatie stijgt.\n• Cyclus → oscillerend evenwicht (klassiek: lynx-haas in Canada, periode ~10 jaar).\n\n**Concurrentie**:\n• Inter-specifiek: tussen verschillende soorten (concurrentie-uitsluitings-principe: 2 soorten met identieke niche kunnen niet samen leven).\n• Intra-specifiek: binnen zelfde soort (territorium, paartjes).\n\n**Densiteit-afhankelijke factoren**: werken sterker bij hoge populatie (voedseltekort, ziekten, parasieten).\n**Densiteit-onafhankelijke factoren**: werken bij elke densiteit (storm, vorst, brand).\n\n**Voorbeelden invasieve soorten**:\n• Halsbandparkiet in NL: groei zonder lokale predatoren.\n• Konijn in Australië: exponentieel → ecologische ramp.\n• Mens: K continu verhoogd via technologie (zie stap 5).",
    checks: [
      {
        q: "Wat is **draagkracht K** van een ecosysteem?",
        options: [
          "Grootste populatie die een gebied op lange termijn aankan",
          "De snelheid waarmee een populatie maximaal groeit",
          "De totale biomassa van alle organismen in het gebied",
          "Het aantal verschillende soorten in het ecosysteem"
        ],
        answer: 0,
        wrongHints: [null, "Dat is de groeisnelheid (r). Waar op de S-curve vind je K?", "Biomassa is het gewicht van alles wat leeft. Gaat K over gewicht, of over het aantal dieren van één soort?", "Het aantal soorten heet biodiversiteit. Gaat K over veel soorten of over één populatie?"],
        uitlegPad: {
          stappen: [{ titel: "K = plafond", tekst: "Boven K kan ecosysteem populatie niet meer voeden/herbergen → sterfte > geboorte → terugkeer naar K. Dynamische evenwichtswaarde." }],
          niveaus: { basis: "Max duurzame populatie.", simpeler: "Plafond voor populatie-grootte.", nogSimpeler: "K" },
        },
      },
      {
        q: "**Exponentiële groei** (J-curve) gebeurt typisch:",
        options: [
          "Bij een nieuwe soort in een gebied zonder natuurlijke vijanden",
          "Bij een populatie die haar draagkracht K net heeft bereikt",
          "Bij een soort met volop voedsel maar veel natuurlijke vijanden",
          "Bij een populatie die al eeuwen in evenwicht met haar omgeving leeft"
        ],
        answer: 0,
        wrongHints: [null, "Rond K vlakt de groeicurve af. Is dat een steil stijgende J?", "Wat doen veel natuurlijke vijanden met het aantal jongen dat volwassen wordt?", "In evenwicht blijft een populatie ongeveer even groot. Past daar een steil stijgende J-curve bij?"],
        uitlegPad: {
          stappen: [{ titel: "Geen rem = explosie", tekst: "Klassiek voorbeeld: bacteriën in vers medium verdubbelen elke 20 minuten — zou in 3 dagen massa-aarde overschrijden ZONDER beperking. In praktijk lopen ze tegen K aan." }],
          theorie: "Daarom zijn invasieve soorten zo'n probleem: nieuwe omgeving zonder co-geëvolueerde predatoren → exponentieel.",
          niveaus: { basis: "Geen beperkingen → J-curve.", simpeler: "Vrije baan = explosie.", nogSimpeler: "Invasief" },
        },
      },
      {
        q: "Lynx en haas vertonen klassieke **predator-prooi-cyclus**. Wat gebeurt **vóór** lynx-piek?",
        options: [
          "Haas-populatie piekt",
          "Haas-populatie daalt",
          "Lynx-piek komt eerst",
          "Beide pieken tegelijk"
        ],
        answer: 0,
        wrongHints: [null, "Als de hazen al afnemen, hebben de lynxen dan meer of minder te eten?", "Kunnen lynxen talrijk worden voordat er genoeg voedsel voor hen is?", "Lynxen hebben tijd nodig om jongen groot te brengen. Kunnen ze meteen meegroeien met de hazen?"],
        uitlegPad: {
          stappen: [
            { titel: "Predator volgt prooi", tekst: "Tijd-lijn: 1) haas-piek (overvloed voedsel voor lynx). 2) lynx groeit. 3) lynx-piek → haas-daling. 4) lynx krimpt. 5) haas herstelt. 6) terug naar 1. Cyclus ~10 jaar in Canada-gegevens." },
          ],
          theorie: "Hudson Bay Company-gegevens (1845-1935) tonen 10-jaars-cycli — klassiek bewijs in ecologie-leerboeken.",
          niveaus: { basis: "Haas eerst, dan lynx.", simpeler: "Veel prooi → daarna veel predator.", nogSimpeler: "Haas eerst" },
        },
      },
      {
        q: "**Concurrentie-uitsluitings-principe** (Gause):",
        options: [
          "Bij dezelfde niche verdringt de ene soort op den duur de andere",
          "Soorten met verschillende niches kunnen niet samenleven",
          "Bij dezelfde niche verdelen twee soorten het voedsel eerlijk",
          "Een roofdier verdringt op den duur zijn prooisoort uit het gebied"
        ],
        answer: 0,
        wrongHints: [null, "Een vos en een konijn hebben een heel andere niche en leven toch samen in hetzelfde bos. Klopt deze bewering dan?", "Als twee soorten precies hetzelfde nodig hebben, blijft het dan bij eerlijk delen?", "Een roofdier en zijn prooi zijn geen concurrenten van elkaar. Om wie gaat het bij concurrentie?"],
        uitlegPad: {
          stappen: [{ titel: "Niche-uitsplitsing", tekst: "Bij identieke niche: een soort verdrijft de andere. Vandaar dat in natuur soorten **niche-uitsplitsen** (eten andere insecten, op andere tijden actief, andere hoogtes in boom). Co-existentie vereist ecologisch verschil." }],
          niveaus: { basis: "Identieke niche kan niet.", simpeler: "Soorten moeten verschillen in niche om samen te leven.", nogSimpeler: "Verschil nodig" },
        },
      },
      {
        q: "Een orkaan vernietigt 50% van een bos — voorbeeld van welke factor?",
        options: [
          "Densiteit-onafhankelijke factor",
          "Densiteit-afhankelijke factor",
          "Predatie als regulerende factor",
          "Concurrentie als beperkende factor"
        ],
        answer: 0,
        wrongHints: [null, "Maakt het voor de orkaan uit of er 10 of 1000 bomen per hectare staan?", "Bij predatie eet een dier een ander dier op. Gebeurt dat hier?", "Bij concurrentie strijden soorten om hetzelfde voedsel of dezelfde ruimte. Wie strijdt hier met wie?"],
        uitlegPad: {
          stappen: [{ titel: "Storm slaat blind toe", tekst: "Densiteit-onafhankelijk: effect onafhankelijk van hoe vol het bos is. Tegen-voorbeeld densiteit-afhankelijk: ziekte verspreidt sneller bij volle populatie (meer contact)." }],
          niveaus: { basis: "Densiteit-onafh.", simpeler: "Storm slaat toe, onafhankelijk van populatie.", nogSimpeler: "Onafh" },
        },
      },
    ],
  },

  // ─── C. Successie + kringlopen ────────────────────────────
  {
    title: "Successie + kringlopen (C, N, water)",
    explanation:
      "**Successie** = voorspelbare opeenvolging van soorten in een gebied over tijd.\n\n**Primaire successie**: kale rots/lava → pioniers → climaxgemeenschap.\n• Pioniers: korstmossen → mossen → kruiden → struiken → bomen → climax (bos).\n• Periode: eeuwen tot duizenden jaren.\n\n**Secundaire successie**: na verstoring (brand, kap) — sneller, want bodem bestaat al.\n• Periode: decennia.\n\n**Climaxgemeenschap**: stabiel eindstadium, in evenwicht met klimaat. NL: loofbos (eik, beuk).\n\n**Kringlopen** — stof gaat NIET verloren in ecosysteem (i.t.t. energie):\n\n**Koolstofkringloop**:\n• CO₂ + H₂O → glucose (fotosynthese, planten).\n• Glucose → CO₂ + H₂O (verbranding/ademhaling, alle organismen).\n• Dood materiaal → CO₂ (reducenten) of opgeslagen (turf, kolen, olie).\n• Mens verstoort: fossiele brandstoffen verbranden → extra CO₂ → klimaatverandering.\n\n**Stikstofkringloop**:\n• Atmosfeer 78% N₂ (luchtstikstof) — onbruikbaar voor meeste organismen.\n• **Stikstoffixatie**: bacteriën (rhizobia in vlinderbloemigen) + bliksem → NH₃/NO₃ in bodem.\n• Planten nemen NO₃ op → eiwitten.\n• Dieren eten planten → eiwitten.\n• Dood → ammonificatie → nitrificatie → terug naar NO₃.\n• Denitrificatie → terug naar N₂-lucht.\n• Mens: kunstmest (Haber-Bosch) verstoort balans → eutrofiëring.\n\n**Waterkringloop**:\n• Verdamping uit zee + meer → wolken → neerslag → afspoeling → zee.\n• Plant-transpiratie + dier-uitscheiding belangrijk in cyclus.\n• Bewust menselijk ingrijpen: dammen, irrigatie, ontbossing → versnelt of vertraagt.\n\n**Fosforkringloop** (VWO): vooral lokaal, geen atmosferische fase. Vrijgegeven door verwering rotsen → planten → consumenten → dood → bodem. Mens: fosfaat-meststof uit eindige mijnen (over 50-100 jaar op).",
    checks: [
      {
        q: "Welke kringloop heeft GEEN belangrijke atmosferische fase?",
        options: ["Fosforkringloop", "Koolstofkringloop", "Stikstofkringloop", "Waterkringloop"],
        answer: 0,
        wrongHints: [null, "Planten halen CO₂ uit de lucht. Zit koolstof dan ook in de atmosfeer?", "Waar bestaat het grootste deel van de lucht uit?", "Wolken bestaan uit waterdruppels. Gaat water dan ook door de lucht?"],
        uitlegPad: {
          stappen: [{ titel: "P komt uit gesteente", tekst: "Fosfor zit voornamelijk in rots-mineralen + opgelost in water/bodem. Geen significante luchtfase (in tegenstelling tot C, N, H₂O). Daarom lokaal: één plek 'pakt' fosfor en geeft 'm langzaam vrij." }],
          theorie: "Daarom is fosfaat-meststof een eindige hulpbron. Belangrijke geopolitieke kwestie (Marokko + China hebben grote voorraden).",
          niveaus: { basis: "Fosfor = geen lucht.", simpeler: "P-kringloop alleen via bodem/water.", nogSimpeler: "P" },
        },
      },
      {
        q: "**Pioniersoorten** in primaire successie zijn vaak:",
        options: [
          "Korstmossen en algen",
          "Grote bomen",
          "Grazende dieren",
          "Vlinders en andere insecten"
        ],
        answer: 0,
        wrongHints: [null, "Kan een grote boom wortelen op kale rots zonder bodem?", "Wat zouden grazers moeten eten op kale rots?", "Waar halen vlinders hun nectar als er nog geen bloemen zijn?"],
        uitlegPad: {
          stappen: [{ titel: "Korstmossen breken rots af", tekst: "Korstmossen (symbiose schimmel + alg) produceren zuren die rots langzaam verweren. Pionierende mossen volgen, dan kruiden, struiken, bomen. Successie maakt bodem dieper + rijker." }],
          niveaus: { basis: "Korstmossen.", simpeler: "Eerste leven op kale rots.", nogSimpeler: "Korstmossen" },
        },
      },
      {
        q: "**Stikstoffixatie** wordt vooral gedaan door:",
        options: [
          "Bacteriën in de bodem en bliksem",
          "Planten die N₂ via hun bladeren opnemen",
          "Dieren die stikstofrijk voedsel eten",
          "Schimmels die dode resten afbreken"
        ],
        answer: 0,
        wrongHints: [null, "N₂ komt wel de bladeren in, maar kan een plant die sterke drievoudige binding zelf verbreken?", "Dieren krijgen stikstof binnen via hun voedsel. Maken ze daarmee ook N₂ uit de lucht bruikbaar?", "Afbrekers maken stikstof vrij uit dode resten. Maar halen ze ook N₂ uit de lucht?"],
        uitlegPad: {
          stappen: [
            { titel: "Drievoudige stikstof-binding doorbreken", tekst: "N₂ heeft 3-voudige binding (heel sterk). Slechts enkele bacteriën (rhizobia, vrijwonend Azotobacter) + cyanobacteriën hebben enzym nitrogenase om dit te kraken. Plus: bliksem-energie vormt NO. Mens: industrieel Haber-Bosch sinds 1909 → 40% van wereldbevolking-voedsel afhankelijk." },
          ],
          theorie: "Vlinderbloemigen (klaver, soja, erwten) hebben rhizobia in wortelknolletjes → 'vangen' stikstof gratis. Daarom verbouw je ze in vruchtwisseling.",
          niveaus: { basis: "Bacteriën + bliksem.", simpeler: "Specifieke bacteriën vangen N₂ uit lucht.", nogSimpeler: "Bacteriën" },
        },
      },
      {
        q: "Een **climaxgemeenschap** in Nederland is:",
        options: ["Loofbos", "Heide", "Grasland", "Rietmoeras"],
        answer: 0,
        wrongHints: [null, "Wat gebeurt er met heide als er geen schapen meer grazen en niemand plagt?", "Als je een weiland nooit meer maait of begraast, blijft het dan gras?", "Riet maakt het water ondieper en de bodem voller. Wat groeit daar na een tijd?"],
        uitlegPad: {
          stappen: [{ titel: "Klimaat bepaalt climax", tekst: "Gematigd zee-klimaat in NL → loofbos eind-stadium. Beuk (schaduwbestendig) + eik overheersen. Zonder menselijk ingrijpen zou ~95% NL bos zijn." }],
          niveaus: { basis: "Loofbos.", simpeler: "Eikenbos = NL-climax.", nogSimpeler: "Loofbos" },
        },
      },
      {
        q: "Verbranden van **fossiele brandstoffen** verstoort vooral welke kringloop?",
        options: [
          "Koolstof",
          "Stikstof",
          "Fosfor",
          "Water"
        ],
        answer: 0,
        wrongHints: [null, "Verbranding geeft ook wat stikstofoxiden, maar welk gas komt er véél meer vrij?", "Fosfor zit vooral in gesteente en mest. Wat komt er uit een uitlaat of schoorsteen?", "Bij verbranding ontstaat ook waterdamp, maar die regent snel weer uit. Welk gas stapelt zich op in de lucht?"],
        uitlegPad: {
          stappen: [
            { titel: "Vastgelegd C → atmosferisch C", tekst: "Kolen/olie/gas = miljoenen-jaren oude plant-C, opgesloten onder de grond. Verbranding zet snel om naar CO₂ → atmosfeer 0,03% (preindustrieel) → 0,042% (2024). Versterkt broeikaseffect → opwarming." },
          ],
          theorie: "Wereldwijd ~37 Gt CO₂/jaar. Halvering t/m 2030 nodig voor 1,5 °C-doel.",
          niveaus: { basis: "Koolstofkringloop.", simpeler: "Fossielen → CO₂ → opwarming.", nogSimpeler: "CO₂" },
        },
      },
    ],
  },

  // ─── D. Biodiversiteit + bedreigingen ─────────────────────
  {
    title: "Biodiversiteit + bedreigingen",
    explanation:
      "**Biodiversiteit** = verscheidenheid aan levens-vormen, op 3 niveaus:\n• **Genetisch** (variatie binnen soort).\n• **Soorten** (aantal verschillende soorten).\n• **Ecosystemen** (variatie aan habitats).\n\n**Waarom belangrijk?**\n• **Ecosysteem-diensten**: bestuiving, waterzuivering, klimaatregeling, CO₂-binding, voedselproductie.\n• **Veerkracht**: divers ecosysteem herstelt sneller na verstoring.\n• **Genetische bron**: voor toekomstige gewassen + medicijnen.\n• **Cultureel + ethisch**: intrinsieke waarde.\n\n**5 grote uitstervings-events** (geologische geschiedenis):\n• Krijt-Tertiair 66 mln j geleden: dinosauriërs (asteroïde).\n• Perm-Trias 252 mln j: 90% soorten weg (klimaat).\n• Nu: '**6e massa-uitsterving**' veroorzaakt door mens — verlies ~100-1000× natuurlijk tempo.\n\n**5 bedreigingen** ('HIPPO'):\n• **H**abitatverlies (ontbossing, landbouw, urbanisatie).\n• **I**nvasieve soorten.\n• **P**ollutie (chemicaliën, plastic, lucht).\n• **P**opulatie-druk (mens groeit).\n• **O**verexploitatie (overbevissing, jacht, ontbossing).\n\nPlus klimaatverandering (versnelt alle bovenstaande).\n\n**Specifieke voorbeelden NL**:\n• Insectensterfte: ~75% biomassa-afname sinds 1990 (Krefeld-studie, Duitsland).\n• Weidevogels: grutto, kievit halveren door intensieve landbouw.\n• Stikstof-overschot: heide wordt verdrongen door grassen + brandnetels.\n\n**Beheer + bescherming**:\n• Natura 2000-gebieden (EU-beschermd).\n• IUCN-rode-lijst-soorten.\n• Convention on Biological Diversity (CBD) — 2022 Kunming-Montréal: 30% land+zee beschermen tegen 2030.\n• Boeren-stewardship: 'natuurinclusieve landbouw'.\n\n**Genetische diversiteit + Cheetah's**:\n• Cheetah-populatie kromp ~10 000 jaar geleden tot ~7 dieren — genetische 'flessenhals'.\n• Vandaag: zeer lage genetische variatie → kwetsbaar voor ziekte.\n• Klassiek voorbeeld waarom genetische biodiversiteit telt.\n\n**Eilanden-biogeografie**: kleine eilanden = minder soorten + hoge endemiek (uniek). Maar bij habitat-fragmentatie krijg je 'eilanden' op vasteland → biodiversiteit-verlies.",
    checks: [
      {
        q: "**HIPPO** is een ezelsbruggetje voor 5 bedreigingen voor biodiversiteit. H staat voor:",
        options: ["Habitatverlies", "Handel in wilde dieren", "Hitte door klimaatverandering", "Huisdieren die verwilderen"],
        answer: 0,
        wrongHints: [null, "Wilde dieren wegvangen en verkopen is overexploitatie. Bij welke letter van HIPPO hoort dat?", "Klimaat zit niet in de oorspronkelijke vijf letters. Waar draait de H dan om?", "Verwilderde of uitgezette dieren zijn invasieve soorten. Bij welke letter hoort dat?"],
        uitlegPad: {
          stappen: [{ titel: "H-I-P-P-O", tekst: "**H**abitatverlies → **I**nvasieve → **P**ollutie → **P**opulatie → **O**verexploitatie. Onthoud-truc, gebruikt door E.O. Wilson. Klimaat als 6e factor toegevoegd in laatste tijd." }],
          niveaus: { basis: "Habitatverlies.", simpeler: "H = habitat.", nogSimpeler: "Habitat" },
        },
      },
      {
        q: "Een **ecosysteemdienst** is:",
        options: [
          "Natuurlijke functie waarvan de mens profiteert",
          "Werk dat boswachters doen om de natuur te onderhouden",
          "Voordeel dat twee soorten elkaar geven, zoals bij symbiose",
          "Geld dat mensen betalen om natuur te beschermen"
        ],
        answer: 0,
        wrongHints: [null, "Een boswachter is een mens. Is een ecosysteemdienst werk dat mensen doen?", "Dat heet mutualisme: twee soorten helpen elkaar. Gaat een ecosysteemdienst over een relatie tussen twee diersoorten?", "Dat is geld van mensen. Is een ecosysteemdienst iets wat mensen betalen, of iets wat de natuur zelf doet?"],
        uitlegPad: {
          stappen: [
            { titel: "Vier categorieën (Millennium Ecosystem Assessment)", tekst: "1. **Productie**: voedsel, hout, water.\n2. **Regulering**: klimaat, water-zuivering, bestuiving.\n3. **Culturele**: recreatie, spiritualiteit.\n4. **Ondersteunend**: bodemvorming, nutriënten-kringloop." },
          ],
          theorie: "Bestuivers (bijen) leveren ~$235-577 miljard waarde wereldwijd per jaar — bijensterfte heeft enorme economische impact.",
          niveaus: { basis: "Natuur-functie voor mens.", simpeler: "Bv. bestuiving, water-zuivering.", nogSimpeler: "Functie" },
        },
      },
      {
        q: "Cheetah's hebben **lage genetische diversiteit** door een **flessenhals**. Waarom is dat een probleem?",
        options: [
          "Eén nieuwe ziekte kan bijna de hele populatie treffen",
          "Er ontstaan per generatie veel meer schadelijke mutaties",
          "De dieren geven hun eigenschappen slechter door aan hun jongen",
          "Hun lichaam past zich minder snel aan tijdens hun leven"
        ],
        answer: 0,
        wrongHints: [null, "Mutaties zijn toevallige kopieerfouten. Hangt hun aantal af van hoeveel variatie er al is?", "Erfelijkheid werkt bij elk dier hetzelfde. Gaat het probleem over het doorgeven zelf, of over wát er door te geven valt?", "Evolutie gebeurt in een populatie over generaties, niet in één lichaam. Wat is dan het risico voor de hele groep?"],
        uitlegPad: {
          stappen: [{ titel: "Variatie = adaptatie-potentieel", tekst: "Met weinig genetische variatie zijn er weinig 'opties' bij nieuwe selectie-druk (nieuwe ziekte, klimaatwijziging). Bij identieke genen kan één virus de hele populatie wegvagen. Aardappel-Ierland 1845: monocultuur → Phytophthora → ramp." }],
          niveaus: { basis: "Minder adaptatie.", simpeler: "Genetisch arm → kwetsbaar.", nogSimpeler: "Kwetsbaar" },
        },
      },
      {
        q: "**Stikstof-overschot** in NL bedreigt biodiversiteit doordat:",
        options: [
          "Snelle groeiers verdringen zeldzame planten",
          "Stikstofgas (N₂) is giftig voor de meeste planten",
          "Stikstof maakt de bodem droger en zanderiger",
          "Stikstof verlaagt de hoeveelheid CO₂ in de lucht"
        ],
        answer: 0,
        wrongHints: [null, "N₂ is 78% van de lucht die overal om planten heen zit. Zou dat gas dan giftig voor ze zijn?", "Stikstof verandert vooral de voedselrijkdom van de bodem, niet het vochtgehalte.", "Zelfs als dat zo was: waarom zouden zeldzame planten daardoor verdwijnen?"],
        uitlegPad: {
          stappen: [{ titel: "N-arme habitats lijden", tekst: "Heide, veen, kustduinen zijn van nature N-arm. Soorten daar aangepast aan armoede. Stikstof-depositie (uit veehouderij + verkeer) → vergrassing → biodiversiteit-verlies. Daarom: 'stikstof-crisis' in NL (boerenprotesten 2019+)." }],
          niveaus: { basis: "N verstoort N-arme habitats.", simpeler: "Te veel mest → zeldzame planten verdwijnen.", nogSimpeler: "N-overschot" },
        },
      },
      {
        q: "Welke is GEEN bedreiging voor biodiversiteit?",
        options: [
          "Een gebied aanwijzen als Natura 2000-gebied",
          "Exotische waterplanten in vijvers zetten",
          "Oerbos vervangen door één soort productiebos",
          "Graslanden extra bemesten voor meer opbrengst"
        ],
        answer: 0,
        wrongHints: [null, "Wat gebeurt er als zo'n plant in de sloot belandt en hier geen natuurlijke vijanden heeft?", "Hoeveel soorten vinden een plek in een bos met maar één soort boom?", "Denk aan stikstof: welke planten profiteren van extra voeding, en welke verdwijnen dan?"],
        uitlegPad: {
          stappen: [{ titel: "Natura 2000 = bescherming", tekst: "Natura 2000 = EU-netwerk van beschermde natuurgebieden. De andere opties zijn bedreigingen: exoten zonder natuurlijke vijanden verdringen inheemse soorten, één soort productiebos = habitatverlies, extra mest (stikstof) laat een paar snelle soorten winnen ten koste van de rest." }],
          niveaus: { basis: "Natura 2000 = oplossing.", simpeler: "Beschermd gebied is goed.", nogSimpeler: "Natura" },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — mens, klimaat + ecosysteem",
    explanation:
      "**Mens als 'ecologische game-changer'**:\n• Bevolking: 1 mld (1800) → 8 mld (2023) → ~10 mld (2050 prognose).\n• Land-gebruik: ~50% bewoonbaar land is landbouw, ~37% bos, ~14% urbanisatie/anders.\n• Resource-voetafdruk: gemiddelde Nederlander gebruikt ~5 'aardes' qua draagvlak.\n\n**Klimaatverandering + ecosystemen**:\n• Temperatuurstijging 1,1-1,5 °C sinds 1850. Doel: <1,5 °C totaal.\n• Verschuiving leefgebieden: noordwaarts/hoger gelegen gebieden (~5-10 km/decennium).\n• Koraal-bleek: water boven 30 °C → algensymbiose verbroken → bleek + dood.\n• Permafrost ontdooit → extra methaan vrij → feedback-lus.\n\n**Biotechnologie + landbouw**:\n• Voedsel voor 8 mld zonder ecosysteem-vernietiging?\n• Verticale + binnen-landbouw, kweekvlees (cellulair), insecteneiwit.\n• GMO (genetisch gewijzigd): meer opbrengst per oppervlak.\n\n**Conservatie-strategieën**:\n• **In-situ**: bescherming op de plek (nationale parken, Natura 2000).\n• **Ex-situ**: dierentuinen, zaadbanken, fokprogramma's (Svalbard Global Seed Vault).\n• **Re-wilding**: terugbrengen wilde soorten (wolven in Yellowstone, bever in NL).\n\n**Belangrijk concept**: **trofische cascades**.\nVoorbeeld Yellowstone:\n• Wolven uitgeroeid jaren 1920 → elanden over-grazen wilg + populier → erosie.\n• Wolven terug 1995 → elanden vermijden riviergebieden → wilg herstelt → bevers terug → ecosysteem herstelt.\n\nLes: één soort kan **hele ecosysteem** sturen ('keystone species').\n\n**Wat kun je zelf doen?**\n• Minder vlees eten (10%-regel).\n• Lokaal + biologisch (minder pesticide).\n• Geen plastic wegwerp.\n• Tuin: inheemse planten, bijen-vriendelijk, geen pesticide.\n• Stem op partijen met klimaat-beleid.\n\n**Filosofische vraag**: hebben soorten 'recht' om te bestaan onafhankelijk van hun nut voor de mens? Antropocentrisme vs. biocentrisme — examen-essay-onderwerp.",
    checks: [
      {
        q: "Wolven uit Yellowstone weg → elanden over-grazen wilg → erosie. Wolven terug → herstel. Voorbeeld van:",
        options: [
          "Trofische cascade (keystone species)",
          "Successie (vegetatie-opvolging)",
          "Klimaatverandering (opwarming)",
          "Mutualisme (beide soorten winnen)"
        ],
        answer: 0,
        wrongHints: [null, "Successie is een opeenvolging van begroeiing op kale of verstoorde grond. Begon het hier met kale grond?", "Wat veranderde hier: het weer, of welke dieren er rondliepen?", "Bij mutualisme winnen beide soorten. Wint de eland bij de terugkeer van de wolf?"],
        uitlegPad: {
          stappen: [{ titel: "Eén soort, grote impact", tekst: "Sleutelsoort (keystone species) heeft impact die veel groter is dan zijn aantal of biomassa zou suggereren. Wolven aantal: klein, maar effect op hele ecosysteem: groot. Andere keystones: zee-otters voor kelpbossen, olifanten voor savanne." }],
          niveaus: { basis: "Trofische cascade.", simpeler: "Top-predator stuurt hele systeem.", nogSimpeler: "Cascade" },
        },
      },
      {
        q: "Een dier-pop. groeit van 100 naar 200 in 1 jaar (zonder beperking). Wat is de **groeiratio r** per jaar in het model N(t) = N₀ · e^(r·t)?",
        options: ["~0,69", "1,0", "2,0", "0,5"],
        answer: 0,
        wrongHints: [null, "Vul r = 1 in: e¹ ≈ 2,72. Wordt 100 dan 200?", "De groeifactor is 2, maar is r hetzelfde als die factor? Reken e² eens uit.", "Reken e^0,5 uit. Komt daar 2 uit?"],
        uitlegPad: {
          stappen: [
            { titel: "ln(N/N₀) = r·t", tekst: "N(t)/N₀ = e^(rt) → ln(2) = r·1 → r = **ln 2 ≈ 0,693 per jaar**. Hoog tempo." },
          ],
          niveaus: { basis: "r ≈ 0,69.", simpeler: "Verdubbelen geeft r = ln 2.", nogSimpeler: "0,69" },
        },
      },
      {
        q: "**Eutrofiëring** van een meer is:",
        options: [
          "Overmaat aan voedingsstoffen in het water",
          "Uitdroging van het meer door verdamping",
          "Stijging van de pH door kalk in het water",
          "Opwarming van het water door de zon"
        ],
        answer: 0,
        wrongHints: [null, "Verdwijnt er bij eutrofiëring water, of verandert er iets ín het water?", "Kalk kan de pH veranderen, maar wat spoelt er met mest en kunstmest de sloot in?", "Warm water versnelt de algengroei wel, maar wat moet er eerst in het water zitten?"],
        uitlegPad: {
          stappen: [
            { titel: "Te veel N+P", tekst: "Mest-afspoeling + riolering → veel N + P → algen-explosie → algen sterven → bacteriën verbruiken zuurstof om af te breken → anoxie → vissen sterven. Klassiek probleem rond agrarische gebieden + steden." },
          ],
          theorie: "Algen-bloei kan ook toxisch zijn (blauwalg) → zwemverbod NL-meren in zomer.",
          niveaus: { basis: "Nutriënten-overdaad.", simpeler: "Te veel mest = algen-explosie + vis-sterfte.", nogSimpeler: "Eutrofiëring" },
        },
      },
      {
        q: "Het **6e massa-uitsterven** is uniek omdat:",
        options: [
          "Het wordt veroorzaakt door de mens",
          "Het in de vorige eeuw alweer gestopt is",
          "Het zorgt voor meer nieuwe soorten dan ooit",
          "Het wordt veroorzaakt door een meteorietinslag"
        ],
        answer: 0,
        wrongHints: [null, "Kijk naar de cijfers van nu: verdwijnen er nog steeds soorten?", "Nieuwe soorten ontstaan in miljoenen jaren. Hoe snel verdwijnen ze nu?", "Een inslag verklaarde het uitsterven van de dinosauriërs. Is dat nu ook de oorzaak?"],
        uitlegPad: {
          stappen: [{ titel: "Eerste antropogene massa-uitsterven", tekst: "Vorige 5 events door geologische/astronomische oorzaken (asteroïde Krijt-Tertiair, vulkanen Perm-Trias). Huidige door **mens-activiteiten**: ontbossing, jacht, klimaat-verandering, invasieve soorten. Tempo: 100-1000× natuurlijk basistempo." }],
          theorie: "Schattingen: 1 mln soorten dreigen uit te sterven, ~25% van zoogdieren in direct gevaar.",
          niveaus: { basis: "Door mens veroorzaakt.", simpeler: "Eerste keer door één soort.", nogSimpeler: "Mens" },
        },
      },
      {
        q: "Wat is de **effectiefste** persoonlijke actie tegen klimaat- + biodiversiteit-crisis?",
        options: [
          "Minder vlees eten, autorijden en vliegen",
          "Flessen, blikjes en papier recyclen",
          "Plastic rietjes, bekers en tasjes mijden",
          "LED-lampen en zuinige apparaten kopen"
        ],
        answer: 0,
        wrongHints: [null, "Recyclen helpt, maar hoeveel CO₂ scheelt een blikje vergeleken met een vliegreis?", "Een rietje weegt een paar gram. Hoe groot is dat vergeleken met het land en de uitstoot voor vlees?", "Lampen en apparaten gebruiken relatief weinig stroom. Wat weegt zwaarder: je lamp of je auto?"],
        uitlegPad: {
          stappen: [
            { titel: "Wynes & Nicholas 2017 review", tekst: "Onderzoek wetenschappelijke studies: top-4 grote impact:\n1. Eén kind minder krijgen (~58 ton CO₂/jaar).\n2. Auto-vrij leven (~2,4 ton).\n3. Vluchten vermijden (~1,6 ton/lange reis).\n4. Plantaardig dieet (~0,8 ton).\n\nKleine acties (recyclen, lampen) belangrijk maar relatief klein effect (<0,2 ton elk)." },
          ],
          basiskennis: [{ onderwerp: "Niet 'óf-óf'", uitleg: "Beste: combineer grote + kleine acties + politieke betrokkenheid (stemmen, bedrijven aanspreken)." }],
          niveaus: { basis: "Grote levensstijl-keuzes.", simpeler: "Vlees, auto, vlucht = top-impact.", nogSimpeler: "Top-4" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const ecosystemenHavoVwo = {
  id: "ecosystemen-havo-vwo",
  title: "Ecosystemen + Biodiversiteit (HAVO/VWO Biologie)",
  emoji: "🌳",
  level: "havo-vwo-4-5",
  subject: "biologie",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Biologie — Ecosystemen + Biodiversiteit (CSE-onderwerp)",
  prerequisites: [
    { id: "cel-biologie", title: "Cellen + leven (basis)", niveau: "vmbo-2" },
  ],
  intro:
    "Ecosystemen voor HAVO/VWO eindexamen — voedselweb + 10%-energie, populatie-dynamica + draagkracht, successie + kringlopen (C/N/water), biodiversiteit + bedreigingen, mens-natuur-interactie. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "ecosysteem", "ecologie",
    "voedselketen", "voedselweb",
    "producent", "consument", "reducent",
    "trofisch niveau", "energiepiramide",
    "10%-regel", "energiestroom",
    "fotosynthese", "respiratie",
    "populatie", "draagkracht", "K",
    "exponentiële groei", "logistische groei",
    "predator-prooi", "Lotka-Volterra",
    "Lynx", "haas",
    "concurrentie", "niche",
    "invasieve soort",
    "successie", "pionier", "climax",
    "kringloop", "C-kringloop", "N-kringloop",
    "stikstoffixatie", "rhizobia", "Haber-Bosch",
    "fosforkringloop",
    "biodiversiteit", "genetische diversiteit",
    "ecosysteemdienst", "bestuiving",
    "HIPPO", "habitatverlies",
    "6e massa-uitsterven", "antropoceen",
    "Natura 2000", "IUCN",
    "klimaatverandering", "broeikaseffect",
    "trophische cascade", "keystone species",
    "Yellowstone", "wolven",
    "eutrofiëring", "algen-bloei",
    "duurzaamheid",
  ],
  chapters,
  steps,
};

export default ecosystemenHavoVwo;
