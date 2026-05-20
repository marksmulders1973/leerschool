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
      "**Ecosysteem** = leefgemeenschap (alle planten/dieren/microben) + abiotisch milieu (lucht, water, bodem).\n\n**Trofische niveaus** (van zon naar top):\n• **Producenten (P)** — planten, algen: maken eigen voedsel via fotosynthese.\n• **Consumenten 1e orde (C1)** — herbivoren (haas, koe).\n• **Consumenten 2e orde (C2)** — carnivoren (vos eet haas).\n• **Consumenten 3e orde (C3)** — toppredatoren (havik eet vos).\n• **Reducenten (R)** — bacteriën + schimmels: breken dode stof af → nutriënten terug naar bodem.\n\n**Voedselketen** = lineair pad (gras → haas → vos → adelaar).\n**Voedselweb** = vervlochten netwerk van vele ketens.\n\n**Energiestroom — '10%-regel'**:\nVan elk trofisch niveau gaat ~**10% van energie** naar volgend niveau. 90% verloren als:\n• Ademhaling (warmte).\n• Niet-eetbare delen (botten, haren).\n• Uitwerpselen.\n\n**Gevolg**: piramide-vorm.\n• 10 000 kg planten →\n• 1 000 kg herbivoren →\n• 100 kg carnivoren →\n• 10 kg toppredatoren.\n\nDaarom zijn toppredatoren altijd zeldzaam + zijn vegetarisch eten energie-efficiënter dan vlees (cattle eet veel plant voor weinig vlees-energie).\n\n**Zelfde, voor stof (mineralen)**: KRINGLOOP — niet verloren maar circulerend (zie stap C).\n\n**Niche** = ecologische functie + plek van soort. Twee soorten kunnen niet exact dezelfde niche bezetten zonder concurrentie.\n\n**Voorbeelden ecosystemen**:\n• Bos: gelaagd (kruidlaag, struiklaag, boomlaag).\n• Vijver: thermische gelaagdheid, planktonbasis.\n• Tropisch koraalrif: hoogste biodiversiteit per m².\n• Toendra: laag, traag, weinig soorten.",
    checks: [
      {
        q: "Wat is een **producent** in een ecosysteem?",
        options: [
          "Plant of alg die via fotosynthese eigen voedsel maakt",
          "Carnivoor die andere dieren eet",
          "Bacterie die dode stof afbreekt",
          "Mens die voedsel produceert"
        ],
        answer: 0,
        wrongHints: [null, "Niet — carnivoor is consument.", "Niet — dat is reducent.", "Niet — biologisch concept."],
        uitlegPad: {
          stappen: [{ titel: "P = autotroof", tekst: "Producenten (autotrofen) gebruiken zonlicht/anorganische stoffen om organisch materiaal te maken. Vooral planten + algen + cyanobacteriën. Begin van alle voedselketens." }],
          niveaus: { basis: "Plant via fotosynthese. A.", simpeler: "Maakt zelf voedsel uit zon. A.", nogSimpeler: "Plant = A." },
        },
      },
      {
        q: "Energie-verlies per trofische stap is ongeveer:",
        options: ["90% (slechts ~10% gaat door)", "10%", "50%", "99%"],
        answer: 0,
        wrongHints: [null, "Niet — andersom.", "Niet — energie-stroom is veel zuiniger niet.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "10%-regel", tekst: "Per niveau gaat ~10% over, 90% verloren (ademhaling, warmte, oneetbaar). Daarom zijn ecosysteem-piramides smal aan de top." }],
          theorie: "Daarom kunnen we max ~3-4 trofische niveaus hebben — daarna te weinig energie voor populatie.",
          niveaus: { basis: "90% verlies. A.", simpeler: "Slechts ~10% door per niveau. A.", nogSimpeler: "90% weg = A." },
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
        wrongHints: [null, "Niet — eet alleen geen plant.", "Niet — eet vlees.", "Niet — vos is geen schimmel."],
        uitlegPad: {
          stappen: [{ titel: "Trofische niveau", tekst: "Gras → P. Haas (eet plant) → C1. Vos (eet haas = C1) → **C2**. Een havik die vossen eet zou C3 zijn." }],
          niveaus: { basis: "C2. A.", simpeler: "Vos eet vleeseter → niveau 3 = C2. A.", nogSimpeler: "C2 = A." },
        },
      },
      {
        q: "Welke groep is **essentieel** om dode plant + dier-resten terug te brengen in de kringloop?",
        options: [
          "Reducenten (bacteriën + schimmels)",
          "Producenten",
          "Consumenten",
          "Toppredatoren"
        ],
        answer: 0,
        wrongHints: [null, "Niet — die verbruiken organisch.", "Niet — die eten ander organisch.", "Niet — top, niet afbraak."],
        uitlegPad: {
          stappen: [
            { titel: "R = afbraak → mineralen", tekst: "Reducenten breken dode stof af → maken anorganische mineralen vrij (N, P, K). Zonder R: voedingsstoffen zouden vastzitten in lijken; planten zouden geen nutriënten hebben → ecosysteem stort in." },
          ],
          theorie: "Daarom is bodemleven (regenwormen, schimmels, bacteriën) zo belangrijk voor landbouw + bosbouw.",
          niveaus: { basis: "Reducenten. A.", simpeler: "Bacteriën + schimmels recyclen. A.", nogSimpeler: "R = A." },
        },
      },
      {
        q: "Een **toppredator** zoals adelaar zit aan top van piramide omdat:",
        options: [
          "Energie-verliezen maken hoger niveau onmogelijk te ondersteunen",
          "Adelaars zijn de grootste vogels",
          "Geen eten meer boven",
          "Adelaars zijn beschermd"
        ],
        answer: 0,
        wrongHints: [null, "Niet — relevant maar geen reden.", "Tautologisch.", "Niet — beleid, niet ecologie."],
        uitlegPad: {
          stappen: [{ titel: "Energie-piramide", tekst: "Met 10% over per niveau: na 4 niveaus is er 0,001 (= 0,1%) van originele zonne-energie over. Te weinig om een groot dier te voeden. Daarom adelaars zeldzaam + groot territorium." }],
          niveaus: { basis: "Energie op. A.", simpeler: "Niet genoeg eten meer hoger. A.", nogSimpeler: "Energie-grens = A." },
        },
      },
    ],
  },

  // ─── B. Populatie-dynamica ────────────────────────────────
  {
    title: "Populatie-dynamica + draagkracht",
    explanation:
      "**Populatie** = groep individuen van zelfde soort op zelfde plek.\n\n**Populatie-groei** door 4 factoren:\n• **G**eboren + **I**mmigratie → groei.\n• **S**terfte + **E**migratie → afname.\n• Δ populatie = (G + I) − (S + E).\n\n**Exponentiële groei** (J-curve):\n• Bij overvloed voedsel + geen beperkingen: dN/dt = r·N.\n• N(t) = N₀ · e^(r·t).\n• Bacteriën in vers medium, invasieve soorten in nieuw gebied.\n• Korte termijn — niet duurzaam.\n\n**Logistische groei** (S-curve):\n• Met **draagkracht K** (carrying capacity): dN/dt = r·N·(1−N/K).\n• Beneden K: groei. Bij K: stabiel. Boven K: krimp.\n• Realistischer voor de meeste populaties.\n\n**Wat bepaalt K?**\n• Voedsel.\n• Ruimte.\n• Predatoren.\n• Ziekten.\n• Klimaat.\n• Concurrentie.\n\n**Predator-prooi-cycli** (Lotka-Volterra):\n• Veel prooi → predator populatie stijgt.\n• Meer predatoren → prooi populatie daalt.\n• Minder prooi → predator populatie daalt.\n• Minder predatoren → prooi populatie stijgt.\n• Cyclus → oscillerend evenwicht (klassiek: lynx-haas in Canada, periode ~10 jaar).\n\n**Concurrentie**:\n• Inter-specifiek: tussen verschillende soorten (concurrentie-uitsluitings-principe: 2 soorten met identieke niche kunnen niet samen leven).\n• Intra-specifiek: binnen zelfde soort (territorium, paartjes).\n\n**Densiteit-afhankelijke factoren**: werken sterker bij hoge populatie (voedseltekort, ziekten, parasieten).\n**Densiteit-onafhankelijke factoren**: werken bij elke densiteit (storm, vorst, brand).\n\n**Voorbeelden invasieve soorten**:\n• Halsbandparkiet in NL: groei zonder lokale predatoren.\n• Konijn in Australië: exponentieel → ecologische ramp.\n• Mens: K continu verhoogd via technologie (zie stap E).",
    checks: [
      {
        q: "Wat is **draagkracht K** van een ecosysteem?",
        options: [
          "Maximale populatie-grootte die ecosysteem duurzaam kan onderhouden",
          "Het gewicht van een groep",
          "De totale biomassa",
          "Het aantal soorten"
        ],
        answer: 0,
        wrongHints: [null, "Niet — letterlijk fout.", "Niet — biomassa is gerelateerd maar K is anders.", "Niet — dat is biodiversiteit."],
        uitlegPad: {
          stappen: [{ titel: "K = ceiling", tekst: "Boven K kan ecosysteem populatie niet meer voeden/herbergen → sterfte > geboorte → terugkeer naar K. Dynamische evenwichtswaarde." }],
          niveaus: { basis: "Max duurzame populatie. A.", simpeler: "Plafond voor populatie-grootte. A.", nogSimpeler: "K = A." },
        },
      },
      {
        q: "**Exponentiële groei** (J-curve) gebeurt typisch:",
        options: [
          "Bij invasieve soorten zonder predatoren + overvloed voedsel",
          "Bij stabiel evenwicht",
          "Bij hoge densiteit",
          "Bij oude populaties"
        ],
        answer: 0,
        wrongHints: [null, "Niet — stabiel = logistisch.", "Niet — hoge densiteit remt af.", "Niet — niet leeftijd-gerelateerd."],
        uitlegPad: {
          stappen: [{ titel: "Geen rem = explosie", tekst: "Klassiek voorbeeld: bacteriën in vers medium verdubbelen elke 20 minuten — zou in 3 dagen massa-aarde overschrijden ZONDER beperking. In praktijk lopen ze tegen K aan." }],
          theorie: "Daarom zijn invasieve soorten zo'n probleem: nieuwe omgeving zonder co-geëvolueerde predatoren → exponentieel.",
          niveaus: { basis: "Geen beperkingen → J-curve. A.", simpeler: "Vrij baan = explosie. A.", nogSimpeler: "Invasief = A." },
        },
      },
      {
        q: "Lynx en haas vertonen klassieke **predator-prooi-cyclus**. Wat gebeurt **vóór** lynx-piek?",
        options: [
          "Haas-populatie piekt (veel prooi → lynx kan groeien)",
          "Haas-populatie daalt",
          "Lynx-piek komt eerst",
          "Beide tegelijk piek"
        ],
        answer: 0,
        wrongHints: [null, "Niet — daling komt erna.", "Niet — predator volgt prooi.", "Niet — er is faseverschuiving."],
        uitlegPad: {
          stappen: [
            { titel: "Predator volgt prooi", tekst: "Tijd-lijn: 1) haas-piek (overvloed voedsel voor lynx). 2) lynx groeit. 3) lynx-piek → haas-daling. 4) lynx krimpt. 5) haas herstelt. 6) terug naar 1. Cyclus ~10 jaar in Canada-gegevens." },
          ],
          theorie: "Hudson Bay Company-gegevens (1845-1935) tonen 10-jaars-cycli — klassiek bewijs in ecologie-leerboeken.",
          niveaus: { basis: "Haas eerst, dan lynx. A.", simpeler: "Veel prooi → daarna veel predator. A.", nogSimpeler: "Haas eerst = A." },
        },
      },
      {
        q: "**Concurrentie-uitsluitings-principe** (Gause):",
        options: [
          "Twee soorten met identieke niche kunnen niet duurzaam samen leven",
          "Sterkste soort wint altijd",
          "Soorten delen netjes",
          "Geen concurrentie in natuur"
        ],
        answer: 0,
        wrongHints: [null, "Niet — 'sterkste' is te simpel.", "Niet — er IS competitie.", "Niet — er IS competitie."],
        uitlegPad: {
          stappen: [{ titel: "Niche-uitsplitsing", tekst: "Bij identieke niche: een soort verdrijft de andere. Vandaar dat in natuur soorten **niche-uitsplitsen** (eten andere insecten, op andere tijden actief, andere hoogtes in boom). Co-existentie vereist ecologisch verschil." }],
          niveaus: { basis: "Identieke niche kan niet. A.", simpeler: "Soorten moeten verschillen in niche om samen te leven. A.", nogSimpeler: "Verschil nodig = A." },
        },
      },
      {
        q: "Een orkaan vernietigt 50% van een bos — voorbeeld van welke factor?",
        options: [
          "Densiteit-onafhankelijke factor",
          "Densiteit-afhankelijke factor",
          "Predator-effect",
          "Concurrentie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — orkaan werkt onafhankelijk van populatie-densiteit.", "Niet — geen predator.", "Niet — geen soort-conflict."],
        uitlegPad: {
          stappen: [{ titel: "Storm slaat blind toe", tekst: "Densiteit-onafhankelijk: effect onafhankelijk van hoe vol het bos is. Tegen-voorbeeld densiteit-afhankelijk: ziekte verspreidt sneller bij volle populatie (meer contact)." }],
          niveaus: { basis: "Densiteit-onafh. A.", simpeler: "Storm slaat onafhankelijk van populatie. A.", nogSimpeler: "Onafh = A." },
        },
      },
    ],
  },

  // ─── C. Successie + kringlopen ────────────────────────────
  {
    title: "Successie + kringlopen (C, N, water)",
    explanation:
      "**Successie** = voorspelbare opeenvolging van soorten in een gebied over tijd.\n\n**Primaire successie**: kale rots/lava → pioniers → climaxgemeenschap.\n• Pionieren: korstmossen → mossen → kruiden → struiken → bomen → climax (bos).\n• Periode: eeuwen tot duizenden jaren.\n\n**Secundaire successie**: na verstoring (brand, kap) — sneller, want bodem bestaat al.\n• Periode: decennia.\n\n**Climaxgemeenschap**: stabiel eindstadium, in evenwicht met klimaat. NL: loofbos (eik, beuk).\n\n**Kringlopen** — stof gaat NIET verloren in ecosysteem (i.t.t. energie):\n\n**Koolstofkringloop**:\n• CO₂ + H₂O → glucose (fotosynthese, planten).\n• Glucose → CO₂ + H₂O (verbranding/ademhaling, alle organismen).\n• Dood materiaal → CO₂ (reducenten) of opgeslagen (turf, kolen, olie).\n• Mens verstoort: fossiele brandstoffen verbranden → extra CO₂ → klimaatverandering.\n\n**Stikstofkringloop**:\n• Atmosfeer 78% N₂ (luchtstikstof) — onbruikbaar voor meeste organismen.\n• **Stikstoffixatie**: bacteriën (rhizobia in vlinderbloemigen) + bliksem → NH₃/NO₃ in bodem.\n• Planten nemen NO₃ op → eiwitten.\n• Dieren eten planten → eiwitten.\n• Dood → ammonificatie → nitrificatie → terug naar NO₃.\n• Denitrificatie → terug naar N₂-lucht.\n• Mens: kunstmest (Haber-Bosch) verstoort balans → eutrofiëring.\n\n**Waterkringloop**:\n• Verdamping uit zee + meer → wolken → neerslag → afspoeling → zee.\n• Plant-transpiratie + dier-uitscheiding belangrijk in cyclus.\n• Bewuste menselijke ingrijpen: dammen, irrigatie, ontbossing → versnelt of vertraagt.\n\n**Fosforkringloop** (VWO): vooral lokaal, geen atmosferische fase. Vrijgegeven door verwering rotsen → planten → consumenten → dood → bodem. Mens: fosfaat-meststof uit eindige mijnen (over 50-100 jaar op).",
    checks: [
      {
        q: "Welke kringloop heeft GEEN belangrijke atmosferische fase?",
        options: ["Fosforkringloop", "Koolstofkringloop", "Stikstofkringloop", "Waterkringloop"],
        answer: 0,
        wrongHints: [null, "Niet — CO₂ in lucht.", "Niet — N₂ is 78% van lucht.", "Niet — waterdamp."],
        uitlegPad: {
          stappen: [{ titel: "P komt uit gesteente", tekst: "Fosfor zit voornamelijk in rots-mineralen + opgelost in water/bodem. Geen significante luchtfase (in tegenstelling tot C, N, H₂O). Daarom lokaal: één plek 'pakt' fosfor en geeft 'm langzaam vrij." }],
          theorie: "Daarom is fosfaat-meststof een eindige hulpbron. Belangrijke geopolitieke kwestie (Marokko + China hebben grote voorraden).",
          niveaus: { basis: "Fosfor = geen lucht. A.", simpeler: "P-kringloop alleen via bodem/water. A.", nogSimpeler: "P = A." },
        },
      },
      {
        q: "**Pioniersoorten** in primaire successie zijn vaak:",
        options: [
          "Korstmossen + algen — kunnen op kale rots leven",
          "Grote bomen",
          "Grazende dieren",
          "Vlinders + insecten"
        ],
        answer: 0,
        wrongHints: [null, "Niet — bomen vereisen bodem.", "Niet — eten gras dat er niet is.", "Niet — vereisen planten."],
        uitlegPad: {
          stappen: [{ titel: "Korstmossen breken rots af", tekst: "Korstmossen (symbiose schimmel + alg) produceren zuren die rots langzaam verweren. Pionierende mossen volgen, dan kruiden, struiken, bomen. Successie maakt bodem dieper + rijker." }],
          niveaus: { basis: "Korstmossen. A.", simpeler: "Eerste leven op kale rots. A.", nogSimpeler: "Korstmossen = A." },
        },
      },
      {
        q: "**Stikstoffixatie** wordt vooral gedaan door:",
        options: [
          "Bacteriën (rhizobia + cyanobacteriën) + bliksem",
          "Alle planten direct uit lucht",
          "Mensen via Haber-Bosch alleen",
          "Vissen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — planten kunnen N₂ niet zelf binden.", "Niet de enige weg.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Drievoudige stikstof-binding doorbreken", tekst: "N₂ heeft 3-voudige binding (heel sterk). Slechts enkele bacteriën (rhizobia, vrijwonend Azotobacter) + cyanobacteriën hebben enzym nitrogenase om dit te kraken. Plus: bliksem-energie vormt NO. Mens: industrieel Haber-Bosch sinds 1909 → 40% van wereldbevolking-voedsel afhankelijk." },
          ],
          theorie: "Vlinderbloemigen (klaver, soja, erwten) hebben rhizobia in wortelknolletjes → 'vangen' stikstof gratis. Daarom verbouw je ze in vruchtwisseling.",
          niveaus: { basis: "Bacteriën + bliksem. A.", simpeler: "Specifieke bacteriën vangen N₂ uit lucht. A.", nogSimpeler: "Bacteriën = A." },
        },
      },
      {
        q: "Een **climaxgemeenschap** in Nederland is:",
        options: ["Loofbos (eik/beuk)", "Tropisch regenwoud", "Toendra", "Woestijn"],
        answer: 0,
        wrongHints: [null, "Niet — verkeerd klimaat.", "Niet — te koud.", "Niet — te droog."],
        uitlegPad: {
          stappen: [{ titel: "Klimaat bepaalt climax", tekst: "Gematigd zee-klimaat in NL → loofbos eind-stadium. Eik (langzaam, schaduwbestendig) + beuk overheersen. Zonder mens-intervention zou ~95% NL bos zijn." }],
          niveaus: { basis: "Loofbos. A.", simpeler: "Eikenbos = NL-climax. A.", nogSimpeler: "Loofbos = A." },
        },
      },
      {
        q: "Verbranden van **fossiele brandstoffen** verstoort welke kringloop?",
        options: [
          "Koolstof (CO₂ stijgt in atmosfeer)",
          "Stikstof",
          "Fosfor",
          "Water"
        ],
        answer: 0,
        wrongHints: [null, "Niet — verbranding geeft geen N₂.", "Niet — geen P bij verbranding.", "Niet — al wel water-damp, maar primaire impact is CO₂."],
        uitlegPad: {
          stappen: [
            { titel: "Vastgelegd C → atmosferisch C", tekst: "Kolen/olie/gas = miljoenen-jaren oude plant-C, opgesloten onder de grond. Verbranding zet snel om naar CO₂ → atmosfeer 0,03% (preindustrieel) → 0,042% (2024). Versterkt broeikaseffect → opwarming." },
          ],
          theorie: "Wereldwijd ~37 Gt CO₂/jaar. Halvering t/m 2030 nodig voor 1,5 °C-doel.",
          niveaus: { basis: "Koolstofkringloop. A.", simpeler: "Fossielen → CO₂ → opwarming. A.", nogSimpeler: "CO₂ = A." },
        },
      },
    ],
  },

  // ─── D. Biodiversiteit + bedreigingen ─────────────────────
  {
    title: "Biodiversiteit + bedreigingen",
    explanation:
      "**Biodiversiteit** = verscheidenheid aan levens-vormen, op 3 niveaus:\n• **Genetisch** (variatie binnen soort).\n• **Soorten** (aantal verschillende soorten).\n• **Ecosystemen** (variatie aan habitats).\n\n**Waarom belangrijk?**\n• **Ecosysteem-diensten**: bestuiving, waterzuivering, klimaatregeling, CO₂-binding, voedselproductie.\n• **Veerkracht**: divers ecosysteem herstelt sneller na verstoring.\n• **Genetische bron**: voor toekomstige gewassen + medicijnen.\n• **Cultureel + ethisch**: intrinsieke waarde.\n\n**5 grote uitstervings-events** (geologische geschiedenis):\n• Krijt-Tertiair 66 mln j geleden: dinosauriërs (asteroïde).\n• Perm-Trias 252 mln j: 90% soorten weg (klimaat).\n• Nu: '**6e massa-uitsterving**' veroorzaakt door mens — verlies ~100-1000× natuurlijk tempo.\n\n**5 bedreigingen** ('HIPPO'):\n• **H**abitatverlies (ontbossing, landbouw, urbanisatie).\n• **I**nvasieve soorten.\n• **P**ollutie (chemicaliën, plastic, lucht).\n• **P**opulatie-druk (mens groeit).\n• **O**verexploitatie (overbevissing, jacht, ontbossing).\n\nPlus klimaatverandering (versnelt alle bovenstaande).\n\n**Specifieke voorbeelden NL**:\n• Insectensterfte: ~75% biomassa-afname sinds 1990 (Krefeld-studie).\n• Weidevogels: grutto, kievit halveren door intensieve landbouw.\n• Stikstof-overschot: heide verdringt door grassen + brandnetels.\n\n**Beheer + bescherming**:\n• Natura 2000-gebieden (EU-beschermd).\n• IUCN-rode-lijst-soorten.\n• Convention on Biological Diversity (CBD) — 2022 Kunming-Montréal: 30% land+zee beschermen tegen 2030.\n• Boeren-stewardship: 'natuurinclusieve landbouw'.\n\n**Genetische diversiteit + Cheetah's**:\n• Cheetah-populatie kromp ~10 000 jaar geleden tot ~7 dieren — genetische 'flessenhals'.\n• Vandaag: zeer lage genetische variatie → kwetsbaar voor ziekte.\n• Klassiek voorbeeld waarom genetische biodiversiteit telt.\n\n**Eilanden-biogeografie**: kleine eilanden = minder soorten + hoge endemiek (uniek). Maar bij habitat-fragmentatie krijg je 'eilanden' op vasteland → biodiversiteit-verlies.",
    checks: [
      {
        q: "**HIPPO** is een ezelsbruggetje voor 5 bedreigingen voor biodiversiteit. H staat voor:",
        options: ["Habitatverlies", "Honden + katten", "Hitte", "Honger"],
        answer: 0,
        wrongHints: [null, "Niet — niet direct.", "Niet — klimaat is een aparte factor.", "Niet — sub-onderdeel."],
        uitlegPad: {
          stappen: [{ titel: "H-I-P-P-O", tekst: "**H**abitatverlies → **I**nvasieve → **P**ollutie → **P**opulatie → **O**verexploitatie. Onthoud-truc, gebruikt door E.O. Wilson. Klimaat als 6e factor toegevoegd in laatste tijd." }],
          niveaus: { basis: "Habitatverlies. A.", simpeler: "H = habitat. A.", nogSimpeler: "Habitat = A." },
        },
      },
      {
        q: "Een **ecosysteemdienst** is:",
        options: [
          "Natuurlijke functie waarvan mens profiteert (bv. bestuiving)",
          "Service van overheid",
          "Internet-dienst",
          "Schoonmaak-service voor parken"
        ],
        answer: 0,
        wrongHints: [null, "Onjuist concept.", "Onzin.", "Niet — natuurlijk proces."],
        uitlegPad: {
          stappen: [
            { titel: "Vier categorieën (Millennium Ecosystem Assessment)", tekst: "1. **Productie**: voedsel, hout, water.\n2. **Regulering**: klimaat, water-zuivering, bestuiving.\n3. **Culturele**: recreatie, spirituele.\n4. **Ondersteunend**: bodemvorming, nutriënten-kringloop." },
          ],
          theorie: "Bestuivers (bijen) leveren ~$235-577 miljard waarde wereldwijd per jaar — bijensterfte heeft enorme economische impact.",
          niveaus: { basis: "Natuur-functie voor mens. A.", simpeler: "Bv. bestuiving, water-zuivering. A.", nogSimpeler: "Functie = A." },
        },
      },
      {
        q: "Cheetah's hebben **lage genetische diversiteit** door een **flessenhals**. Waarom is dat een probleem?",
        options: [
          "Minder veerkracht tegen ziekten + omgevingsverandering",
          "Cheetah's worden steeds langzamer",
          "Cheetah's zijn alleen geel",
          "Geen probleem"
        ],
        answer: 0,
        wrongHints: [null, "Onzin — snelheid is gewoon hetzelfde.", "Niet — kleur niet gerelateerd.", "Wel — kwetsbaarheid stijgt."],
        uitlegPad: {
          stappen: [{ titel: "Variatie = adaptatie-potentieel", tekst: "Met weinig genetische variatie zijn er weinig 'opties' bij nieuwe selectie-druk (nieuwe ziekte, klimaatwijziging). Bij identieke genen kan één virus de hele populatie wegvagen. Aardappel-Ierland 1845: monocultuur → Phytophthora → ramp." }],
          niveaus: { basis: "Minder adaptatie. A.", simpeler: "Genetisch arm → kwetsbaar. A.", nogSimpeler: "Kwetsbaar = A." },
        },
      },
      {
        q: "**Stikstof-overschot** in NL bedreigt biodiversiteit doordat:",
        options: [
          "Heide + voedselarme gebieden krijgen overdaad N → grassen + brandnetels verdringen zeldzame soorten",
          "N₂ is giftig voor planten",
          "N veroorzaakt zure regen",
          "N verlaagt CO₂"
        ],
        answer: 0,
        wrongHints: [null, "Niet — vrijwel inert gas.", "N kan ook leiden tot zure regen maar dat is indirect.", "Geen relatie."],
        uitlegPad: {
          stappen: [{ titel: "N-arme habitats lijden", tekst: "Heide, veen, kustduinen zijn van nature N-arm. Soorten daar aangepast aan armoede. Stikstof-depositie (uit veehouderij + verkeer) → vergrassing → biodiversiteit-verlies. Daarom: 'stikstof-crisis' in NL (boerprotesten 2019+)." }],
          niveaus: { basis: "N verstoort N-arme habitats. A.", simpeler: "Te veel mest → zeldzame planten verdwijnen. A.", nogSimpeler: "N-overschot = A." },
        },
      },
      {
        q: "Welke is GEEN bedreiging voor biodiversiteit?",
        options: [
          "Beschermde Natura 2000-gebieden",
          "Plastic in zee",
          "Ontbossing voor palmolie",
          "Klimaatverandering"
        ],
        answer: 0,
        wrongHints: [null, "Dat IS een bedreiging.", "Idem.", "Idem."],
        uitlegPad: {
          stappen: [{ titel: "Natura 2000 = bescherming", tekst: "Natura 2000 = EU-netwerk van beschermde natuurgebieden. Andere opties zijn allemaal bedreigingen: plastic verstrengelt + giftig, palmolie-ontbossing = habitatverlies, klimaat verschuift habitats sneller dan soorten kunnen volgen." }],
          niveaus: { basis: "Natura 2000 = oplossing. A.", simpeler: "Beschermd gebied is goed. A.", nogSimpeler: "Natura = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — mens, klimaat + ecosysteem",
    explanation:
      "**Mens als 'ecologische game-changer'**:\n• Bevolking: 1 mld (1800) → 8 mld (2023) → ~10 mld (2050 prognose).\n• Land-gebruik: ~50% bewoonbaar land is landbouw, ~37% bos, ~14% urbanisatie/anders.\n• Resource-voetafdruk: gemiddelde Nederlander gebruikt ~5 'aardes' qua draagvlak.\n\n**Klimaatverandering + ecosystemen**:\n• Temperatuurstijging 1,1-1,5 °C sinds 1850. Doel: <1,5 °C totaal.\n• Verschuiving leefgebieden: noordwaarts/hogere altitude (~5-10 km/decennium).\n• Koraal-bleek: water boven 30 °C → algensymbiose verbroken → bleek + dood.\n• Permafrost ontdooit → extra methaan vrij → feedback-lus.\n\n**Biotechnologie + landbouw**:\n• Voedsel voor 8 mld zonder ecosysteem-vernietiging?\n• Verticale + binnen-landbouw, kweekvlees (cellulair), insecteneiwit.\n• GMO (genetisch gewijzigd): meer opbrengst per oppervlak.\n\n**Conservatie-strategieën**:\n• **In-situ**: bescherming op de plek (nationale parken, Natura 2000).\n• **Ex-situ**: dierentuinen, zaadbanken, fokprogramma's (Svalbard Global Seed Vault).\n• **Re-wilding**: terugbrengen wilde soorten (wolven in Yellowstone, bever in NL).\n\n**Belangrijk concept**: **trophische cascades**.\nVoorbeeld Yellowstone:\n• Wolven uitgeroeid 1920s → elanden over-grazen wilg + populier → erosie.\n• Wolven terug 1995 → elanden vermijden riviergebieden → wilg herstelt → bevers terug → ecosysteem herstelt.\n\nLes: één soort kan **hele ecosysteem** sturen ('keystone species').\n\n**Wat kun je zelf doen?**\n• Minder vlees eten (10×-energie-rule).\n• Lokaal + biologisch (minder pesticide).\n• Geen plastic wegwerp.\n• Tuin: inheemse planten, bijen-vriendelijk, geen pesticide.\n• Stem op partijen met klimaat-beleid.\n\n**Filosofische vraag**: hebben soorten 'recht' om te bestaan onafhankelijk van mens-utility? Anthropocentrisme vs. biocentrisme — examen-essay-onderwerp.",
    checks: [
      {
        q: "Wolven uit Yellowstone weg → elanden over-grazen wilg → erosie. Wolven terug → herstel. Voorbeeld van:",
        options: [
          "Trophische cascade (keystone species)",
          "Successie",
          "Klimaatverandering",
          "Mutualisme"
        ],
        answer: 0,
        wrongHints: [null, "Niet — successie is langere termijn.", "Niet — geen klimaat-element.", "Niet — geen 'beiden-winnen'."],
        uitlegPad: {
          stappen: [{ titel: "Eén soort, grote impact", tekst: "Sleutelsoort (keystone species) heeft impact die veel groter is dan hun aantal of biomassa zou suggereren. Wolven aantal: klein, maar effect op hele ecosysteem: groot. Andere keystones: zee-otters voor kelpbossen, olifanten voor savanne." }],
          niveaus: { basis: "Trophische cascade. A.", simpeler: "Top-predator stuurt hele systeem. A.", nogSimpeler: "Cascade = A." },
        },
      },
      {
        q: "Een dier-pop. groeit van 100 naar 200 in 1 jaar (zonder beperking). Wat is de **groeiratio r** per jaar?",
        options: ["~0,69", "1,0", "2,0", "0,5"],
        answer: 0,
        wrongHints: [null, "Niet — dat is volledig nieuwgeboren-aantal.", "Niet — dat is factor van verdubbeling.", "Niet — half-tempo."],
        uitlegPad: {
          stappen: [
            { titel: "ln(N/N₀) = r·t", tekst: "N(t)/N₀ = e^(rt) → ln(2) = r·1 → r = **ln 2 ≈ 0,693 per jaar**. Hoog tempo." },
          ],
          niveaus: { basis: "r ≈ 0,69. A.", simpeler: "Verdubbelen geeft r = ln 2. A.", nogSimpeler: "0,69 = A." },
        },
      },
      {
        q: "**Eutrofiëring** van een meer is:",
        options: [
          "Overmaat nutriënten → algen-bloei → zuurstoftekort → vis-sterfte",
          "Uitdroging van meer",
          "Stijging van pH",
          "Vermindering van planten"
        ],
        answer: 0,
        wrongHints: [null, "Niet — geen droogte.", "Niet — alleen indirect.", "Niet — tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Te veel N+P", tekst: "Mest-afspoeling + riolering → veel N + P → algen-explosie → algen sterven → bacteriën verbruiken zuurstof om af te breken → anoxie → vissen sterven. Klassiek probleem rond agrarische gebieden + steden." },
          ],
          theorie: "Algen-bloei kan ook toxisch zijn (blauwalg) → zwemverbod NL-meren in zomer.",
          niveaus: { basis: "Nutriënten-overdaad. A.", simpeler: "Te veel mest = algen-explosie + vis-sterfte. A.", nogSimpeler: "Eutrofiëring = A." },
        },
      },
      {
        q: "Het **6e massa-uitsterven** is uniek omdat:",
        options: [
          "Veroorzaakt door één soort (mens), niet door asteroïde/klimaat",
          "Het al gestopt is",
          "Het is een goede zaak",
          "Het is bedacht"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — sterfteopvolging zorg.", "Wetenschappelijk verifieerbaar."],
        uitlegPad: {
          stappen: [{ titel: "Eerste antropogene massa-uitsterven", tekst: "Vorige 5 events door geologisch/astronomisch oorzaken (asteroïde Krijt-Tertiair, vulkanen Perm-Trias). Huidige door **mens-activiteiten**: ontbossing, jacht, klimaat-verandering, invasieve soorten. Tempo: 100-1000× natuurlijk basistempo." }],
          theorie: "Schattingen: 1 mln soorten dreigen uit te sterven, ~25% van zoogdieren in directe gevaar.",
          niveaus: { basis: "Door mens veroorzaakt. A.", simpeler: "Eerste keer door één soort. A.", nogSimpeler: "Mens = A." },
        },
      },
      {
        q: "Wat is de **effectiefste** persoonlijke actie tegen klimaat- + biodiversiteit-crisis?",
        options: [
          "Significant minder vlees + auto + vliegen + iets meer kinderen krijgen (de top 4)",
          "Recyclen flessen",
          "Plastic rietjes vermijden",
          "LED-lampen kopen"
        ],
        answer: 0,
        wrongHints: [null, "Helpt iets maar relatief klein.", "Vrij triviale impact.", "Helpt maar marginal."],
        uitlegPad: {
          stappen: [
            { titel: "Wynes & Nicholas 2017 review", tekst: "Onderzoek wetenschappelijke studies: top-4 grote impact:\n1. Eén kind minder krijgen (~58 ton CO₂/jaar).\n2. Auto-vrij leven (~2,4 ton).\n3. Vluchten vermijden (~1,6 ton/lange reis).\n4. Plantaardig dieet (~0,8 ton).\n\nKleine acties (recyclen, lampen) belangrijk maar relatief klein effect (<0,2 ton elk)." },
          ],
          basiskennis: [{ onderwerp: "Niet 'óf-óf'", uitleg: "Beste: combineer grote + kleine acties + politieke betrokkenheid (stemmen, bedrijven aanspreken)." }],
          niveaus: { basis: "Grote levensstijl-keuzes. A.", simpeler: "Vlees, auto, vlucht = top-impact. A.", nogSimpeler: "Top-4 = A." },
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
    { id: "cellen-biologie", title: "Cellen + leven (basis)", niveau: "vmbo-2" },
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
