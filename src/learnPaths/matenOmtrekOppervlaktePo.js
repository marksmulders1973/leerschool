// Leerpad: Maten + Omtrek + Oppervlakte + Inhoud — groep 7-8 PO.
// Cito-Doorstroomtoets onderdeel rekenen-meetkunde. Lengte-, oppervlakte-,
// inhoud-maten, omrekenen, formules, praktijksommen.
// 5 stappen × ~5 checks. Referentieniveau 1F/1S.

const stepEmojis = ["📏", "📐", "🟦", "🧊", "🏆"];

const chapters = [
  { letter: "A", title: "Lengte-maten (km/m/cm/mm)", emoji: "📏", from: 0, to: 0 },
  { letter: "B", title: "Omtrek + Oppervlakte rechthoek", emoji: "📐", from: 1, to: 1 },
  { letter: "C", title: "Andere figuren (driehoek, cirkel)", emoji: "🟦", from: 2, to: 2 },
  { letter: "D", title: "Inhoud (kubus, balk, cilinder)", emoji: "🧊", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (praktijksommen)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Lengte-maten ──────────────────────────────────────
  {
    title: "Lengte-maten — km, m, cm, mm omrekenen",
    explanation:
      "**Lengte-eenheden (van groot naar klein)**:\n• **km** (kilometer) — 1 km = 1000 m. Afstanden tussen steden.\n• **hm** (hectometer) — 1 hm = 100 m. Wegmarkering (hectometerpaaltjes).\n• **dam** (decameter) — 1 dam = 10 m. Niet vaak gebruikt.\n• **m** (meter) — basis-eenheid.\n• **dm** (decimeter) — 1 dm = 0,1 m = 10 cm.\n• **cm** (centimeter) — 1 cm = 0,01 m = 10 mm.\n• **mm** (millimeter) — 1 mm = 0,001 m.\n\n**Geheugen-truc**: **K H D | M | d c m** (komma in midden bij m).\n• Naar **rechts** (kleinere eenheid): × 10 per stap.\n• Naar **links** (grotere eenheid): ÷ 10 per stap.\n\n**Tabel** (oefen-handig):\n• 1 km = 10 hm = 100 dam = 1000 m.\n• 1 m = 10 dm = 100 cm = 1000 mm.\n• 1 km = 1 000 000 mm.\n\n**Belangrijke omrekeningen**:\n• 2 km = 2000 m.\n• 5 m = 500 cm.\n• 30 mm = 3 cm.\n• 1,5 m = 150 cm = 1500 mm.\n• 0,75 km = 750 m.\n\n**toetsvraag-types**:\n• 'Reken 2,3 m om naar cm' (2,3 × 100 = 230 cm).\n• 'Hoeveel km is 1500 m?' (1500 / 1000 = 1,5 km).\n• 'Optellen verschillende eenheden': 1 km + 200 m = 1,2 km = 1200 m.\n\n**Praktijk-toepassing**:\n• **Schaal** op kaart: 1 cm = 1 km betekent: elke cm op kaart = 1 km echt.\n• Voorbeeld: kaart 1:100 000 → 1 cm op kaart = 100 000 cm = 1 km echt.\n\n**Toets-valkuilen**:\n• Verwarring tussen mm en cm: 30 mm ≠ 30 cm! 30 mm = 3 cm.\n• Decimale komma plaatsing: 1,5 km = 1500 m, NIET 15 m.\n• 1 m² ≠ 100 cm² (zie stap 2 — oppervlakte werkt anders).",
    checks: [
      {
        q: "**3,5 km** is hoeveel meter?",
        options: ["3500 m", "350 m", "35 m", "35 000 m"],
        answer: 0,
        wrongHints: [null, "Niet — controleer decimaal.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Van kilometer naar meter", tekst: "Een kilometer is een grotere eenheid dan een meter. Ga je van een grote naar een kleinere eenheid, dan vermenigvuldig je." },
            { titel: "Met hoeveel vermenigvuldig je?", tekst: "Bedenk hoeveel meter er in één kilometer gaan, en vermenigvuldig 3,5 daarmee. Let op waar de komma dan komt te staan." },
          ],
          woorden: [{ woord: "kilometer", uitleg: "Een lengte-eenheid voor grote afstanden, zoals tussen twee steden. Veel groter dan een meter." }],
          theorie: "Lengte-eenheden zoals **kilometer**, **meter**, **centimeter** en **millimeter** vormen een reeks die per stap tien keer groter of kleiner wordt. Reken je van een grote naar een kleine eenheid, dan **vermenigvuldig** je; van klein naar groot **deel** je. Tussen kilometer en meter is de stap keer duizend.",
          voorbeelden: [{ type: "sport", tekst: "Een hardloopwedstrijd van 2,3 kilometer reken je om naar meter om te weten hoeveel ronden van 400 meter dat ongeveer is." }],
          basiskennis: [{ onderwerp: "Groot naar klein = keer", uitleg: "Ga je van een grotere naar een kleinere lengte-eenheid, dan wordt het getal groter — dus vermenigvuldig je." }],
          niveaus: { basis: "3,5 × 1000 = 3500.", simpeler: "Vermenigvuldig met 1000.", nogSimpeler: "Hoeveel meter gaan er in één kilometer? Vermenigvuldig daarmee." },
        },
      },
      {
        q: "**450 cm** is hoeveel m?",
        options: ["4,5 m", "45 m", "0,45 m", "4500 m"],
        answer: 0,
        wrongHints: [null, "Te veel — verwarring met mm.", "Te weinig.", "Onmogelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Van centimeter naar meter", tekst: "Centimeter is een kleinere eenheid dan meter. Ga je van klein naar groot, dan deel je." },
            { titel: "Met hoeveel deel je?", tekst: "Bedenk hoeveel centimeter er in één meter gaan, en deel 450 daardoor." },
          ],
          woorden: [{ woord: "centimeter", uitleg: "Een kleine lengte-eenheid; een vinger is ongeveer 1 cm breed." }],
          theorie: "Bij het omrekenen tussen lengte-eenheden geldt: elke stap van een grotere naar een kleinere eenheid is **keer 10**, en andersom **deel door 10**. Tussen centimeter en meter zit een stap van honderd.",
          voorbeelden: [{ type: "thuis", tekst: "Een tafel van 120 cm reken je om naar meter om te checken of hij in de auto past." }],
          basiskennis: [{ onderwerp: "Klein naar groot = delen", uitleg: "Ga je van een kleinere naar een grotere eenheid, dan wordt het getal kleiner — dus deel je." }],
          niveaus: { basis: "450/100=4,5.", simpeler: "Deel door 100.", nogSimpeler: "Hoeveel centimeter gaan er in één meter? Deel daardoor." },
        },
      },
      {
        q: "**75 mm** is hoeveel cm?",
        options: ["7,5 cm", "750 cm", "0,75 cm", "0,075 cm"],
        answer: 0,
        wrongHints: [null, "Niet — je moet delen, niet vermenigvuldigen.", "Te klein.", "Veel te klein."],
        uitlegPad: {
          stappen: [
            { titel: "Millimeter naar centimeter", tekst: "Millimeter is nog kleiner dan centimeter. Ga je naar een grotere eenheid, dan deel je." },
            { titel: "Reken uit", tekst: "Bedenk hoeveel millimeter er in één centimeter gaan, en deel 75 daardoor." },
          ],
          woorden: [{ woord: "millimeter", uitleg: "De kleinste lengte-eenheid die je op een liniaal ziet — de kleine streepjes tussen de centimeters." }],
          theorie: "Tussen millimeter en centimeter zit een stap van tien: 1 centimeter bestaat uit tien millimeter. Dat is dezelfde soort stap als tussen andere buur-eenheden in de lengtereeks.",
          voorbeelden: [{ type: "school", tekst: "Op je liniaal tel je 30 streepjes millimeter — dat reken je om naar centimeter om de lengte van je potlood op te schrijven." }],
          basiskennis: [{ onderwerp: "Liniaal", uitleg: "Op een liniaal staan de kleine streepjes voor millimeter, de grote cijfers voor centimeter." }],
          niveaus: { basis: "75/10=7,5.", simpeler: "Deel door 10.", nogSimpeler: "Hoeveel millimeter gaan er in één centimeter? Deel daardoor." },
        },
      },
      {
        q: "Optellen: **1 km + 250 m + 50 cm** in m?",
        options: ["1250,5 m", "1300 m", "1255 m", "1305 m"],
        answer: 0,
        wrongHints: [null, "Niet — cm wordt klein bedrag.", "Niet — geen 5 m.", "Idem."],
        uitlegPad: {
          stappen: [
            { titel: "Alles naar dezelfde eenheid", tekst: "Voor je kunt optellen, moeten alle maten in dezelfde eenheid staan. Reken de kilometer en de centimeter allebei om naar meter." },
            { titel: "Tel op", tekst: "Zet de drie omgerekende getallen onder elkaar en tel ze bij elkaar op." },
          ],
          woorden: [{ woord: "optellen met eenheden", uitleg: "Je mag afstanden in verschillende eenheden pas optellen nadat je ze allemaal naar dezelfde eenheid hebt omgerekend." }],
          theorie: "Bij een som met meerdere lengte-eenheden (zoals kilometer, meter en centimeter door elkaar) reken je **eerst alles om naar één eenheid**, en tel je pas daarna op. Doe je dat niet, dan tel je eigenlijk appels en peren bij elkaar op.",
          voorbeelden: [{ type: "thuis", tekst: "Je legt een route van 2 km, dan nog 400 m, en tot slot 25 cm tot de deur — voor de totale afstand zet je alles eerst om naar meter." }],
          basiskennis: [{ onderwerp: "Niet zomaar optellen", uitleg: "1 km en 1 cm zijn geen 'gelijke stukken' — eerst allebei omzetten naar dezelfde eenheid, dan pas optellen." }],
          niveaus: { basis: "1000+250+0,5=1250,5.", simpeler: "Alles m → optellen.", nogSimpeler: "Zet kilometer en centimeter allebei om naar meter — wat krijg je als je alles optelt?" },
        },
      },
      {
        q: "Op een kaart van **schaal 1:50 000** is afstand 4 cm. Hoeveel km echt?",
        options: ["2 km", "200 m", "4 km", "20 km"],
        answer: 0,
        wrongHints: [null, "Niet — × schaal.", "Niet — controleer.", "Te ver."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent de schaal?", tekst: "Bij schaal 1:50 000 betekent elke centimeter op de kaart 50 000 centimeter in het echt." },
            { titel: "Reken de echte afstand uit", tekst: "Vermenigvuldig de 4 centimeter op de kaart met de schaalfactor, en zet de uitkomst om naar kilometer." },
          ],
          woorden: [{ woord: "schaal", uitleg: "Het getal dat aangeeft hoeveel keer kleiner een kaart is dan de werkelijkheid, bijvoorbeeld 1:50 000." }],
          theorie: "Een **schaal** zoals 1:50 000 vertelt hoeveel keer de werkelijkheid is verkleind op een kaart. Om een echte afstand te vinden, vermenigvuldig je de gemeten afstand op de kaart met het tweede getal van de schaal, en reken je daarna om naar een handige eenheid zoals kilometer.",
          voorbeelden: [{ type: "school", tekst: "Bij een schoolreisje bekijk je een wandelkaart met schaal 1:25 000 om te zien hoe ver de picknickplek écht is." }],
          basiskennis: [{ onderwerp: "Schaal-getal", uitleg: "Bij 1:50 000 is elke centimeter op de kaart in werkelijkheid 50 000 centimeter." }],
          niveaus: { basis: "2 km.", simpeler: "4 × 50 000 cm = 2 km.", nogSimpeler: "Vermenigvuldig 4 met de schaalfactor — hoeveel kilometer is dat?" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoeveel cm is **2,4 m**?",
        options: ["240 cm", "24 cm", "2400 cm", "0,24 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Wordt een getal groter of kleiner als je naar een kleinere maat gaat?",
          null,
          "Hoeveel centimeter gaan er in één meter?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Van groot naar klein",
              tekst: "Een centimeter is kleiner dan een meter. Dan krijg je een groter getal.",
            },
            {
              titel: "Keer 100",
              tekst: "In 1 meter gaan 100 centimeter. Doe het getal dus keer 100.",
            },
          ],
          woorden: [
            {
              woord: "centimeter",
              uitleg: "Een kleine lengtemaat: 100 centimeter is samen 1 meter.",
            },
          ],
          theorie: "Ga je van **meter** naar **centimeter**, dan doe je **× 100**, want 1 m = 100 cm. De komma schuift dan twee plaatsen naar rechts.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Een deur is ongeveer 2,1 m hoog. Dat is 210 cm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "1 m = 100 cm",
              uitleg: "Meter naar centimeter: keer 100.",
            },
          ],
          niveaus: {
            basis: "2,4 × 100 = 240 cm.",
            simpeler: "2 m = 200 cm, en 0,4 m = 40 cm. Samen 240 cm.",
            nogSimpeler: "Eén meter is honderd centimeter. Hoeveel is twee meter en nog een stukje?",
          },
        },
      },
      {
        q: "Hoeveel km is **2600 m**?",
        options: ["2,6 km", "26 km", "0,26 km", "260 km"],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel meter gaan er in één kilometer?",
          null,
          "Ga je naar een grotere maat? Wordt het getal dan groter of kleiner?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Van klein naar groot",
              tekst: "Een kilometer is groter dan een meter. Dan krijg je een kleiner getal.",
            },
            {
              titel: "Delen door 1000",
              tekst: "In 1 km gaan 1000 m. Deel het getal dus door 1000.",
            },
          ],
          woorden: [
            {
              woord: "kilometer",
              uitleg: "Een grote lengtemaat voor afstanden: 1 kilometer is 1000 meter.",
            },
          ],
          theorie: "Ga je van **meter** naar **kilometer**, dan doe je **÷ 1000**, want 1 km = 1000 m. De komma schuift drie plaatsen naar links.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Een rondje om de wijk van 3200 m is 3,2 km.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "1 km = 1000 m",
              uitleg: "Meter naar kilometer: delen door 1000.",
            },
          ],
          niveaus: {
            basis: "2600 ÷ 1000 = 2,6 km.",
            simpeler: "2000 m is 2 km. De 600 m die over is, is 0,6 km. Samen 2,6 km.",
            nogSimpeler: "Duizend meter is één kilometer. Hoeveel keer duizend zit er in 2600?",
          },
        },
      },
      {
        q: "Welke lengte is het **langst**?",
        options: ["1,2 m", "1100 mm", "95 cm", "105 cm"],
        answer: 0,
        wrongHints: [null, "Zet eerst alle lengtes om naar dezelfde maat, bijvoorbeeld centimeter.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zelfde maat",
              tekst: "Je kunt lengtes alleen goed vergelijken als ze in dezelfde maat staan.",
            },
            {
              titel: "Alles in cm",
              tekst: "Reken alles om naar centimeter en kijk welk getal het grootst is.",
            },
          ],
          woorden: [
            {
              woord: "millimeter",
              uitleg: "Een heel kleine lengtemaat: 10 millimeter is 1 centimeter.",
            },
          ],
          theorie: "Vergelijk lengtes altijd in **dezelfde eenheid**. Een groot getal in mm kan best korter zijn dan een klein getal in m.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Een liniaal van 300 mm is even lang als een liniaal van 30 cm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Omrekenen",
              uitleg: "1 m = 100 cm en 10 mm = 1 cm.",
            },
          ],
          niveaus: {
            basis: "1,2 m = 120 cm, 1100 mm = 110 cm. Dus 1,2 m is het langst.",
            simpeler: "Reken alles om: 120 cm, 110 cm, 95 cm en 105 cm. Welke is het grootst?",
            nogSimpeler: "Hoeveel centimeter is 1,2 meter? Is dat meer dan de andere lengtes?",
          },
        },
      },
      {
        q: "Sanne fietst **800 m** naar de bakker en **800 m** terug. Hoeveel **km** fietst ze samen?",
        options: ["1,6 km", "16 km", "0,16 km", "1,06 km"],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel meter is het samen? Reken dat daarna pas om naar km.",
          "Hoeveel meter is 1 km?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst optellen",
              tekst: "Tel de twee stukken bij elkaar op in meter.",
            },
            {
              titel: "Dan omrekenen",
              tekst: "Reken de meters om naar kilometer: delen door 1000.",
            },
          ],
          woorden: [
            {
              woord: "kilometer",
              uitleg: "Een lengtemaat voor afstanden: 1 km is 1000 m.",
            },
          ],
          theorie: "Bij een vraag met **heen en terug** tel je de afstand twee keer. Daarna reken je om: **1000 m = 1 km**.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Je loopt 500 m naar een vriend en 500 m terug. Dat is samen 1000 m = 1 km.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "1 km = 1000 m",
              uitleg: "Meter naar kilometer: delen door 1000.",
            },
          ],
          niveaus: {
            basis: "800 + 800 = 1600 m = 1,6 km.",
            simpeler: "1000 m is 1 km. Er blijft 600 m over, dat is 0,6 km. Samen 1,6 km.",
            nogSimpeler: "Twee keer 800 meter. Is dat meer of minder dan een kilometer?",
          },
        },
      },
      {
        q: "Welke omrekening is **NIET** goed?",
        options: ["4 cm = 400 mm", "6 m = 600 cm", "3 km = 3000 m", "50 mm = 5 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel centimeter gaan er in één meter?",
          null,
          "Hoeveel millimeter gaan er in één centimeter?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Ken de stappen",
              tekst: "1 km = 1000 m, 1 m = 100 cm en 1 cm = 10 mm.",
            },
            {
              titel: "Controleer elke regel",
              tekst: "Reken bij elke omrekening na of het getal klopt.",
            },
          ],
          woorden: [
            {
              woord: "millimeter",
              uitleg: "Een heel kleine lengtemaat: 10 millimeter is 1 centimeter.",
            },
          ],
          theorie: "Tussen **cm** en **mm** zit maar **× 10**. Tussen **m** en **cm** zit **× 100**, en tussen **km** en **m** zit **× 1000**.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Een gum van 4 cm is 40 mm lang.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "1 cm = 10 mm",
              uitleg: "Centimeter naar millimeter: keer 10.",
            },
          ],
          niveaus: {
            basis: "4 cm = 40 mm, niet 400 mm.",
            simpeler: "1 cm is 10 mm. Dan is 4 cm dus 4 × 10 mm.",
            nogSimpeler: "Hoeveel millimeter zit er in één centimeter? En in vier?",
          },
        },
      },
    ],
  },

  // ─── B. Omtrek + oppervlakte rechthoek ────────────────────
  {
    title: "Omtrek + Oppervlakte — rechthoek + vierkant",
    explanation:
      "**Omtrek** = lengte van alle zijden samen (de lijn rondom).\n**Oppervlakte** = hoeveel ruimte het figuur bedekt (binnen-vlak).\n\n**Rechthoek** (lengte L, breedte B):\n• Omtrek = **2·L + 2·B = 2(L+B)**.\n• Oppervlakte = **L × B**.\n\n**Vierkant** (zijde z):\n• Omtrek = **4 × z**.\n• Oppervlakte = **z × z = z²**.\n\n**Oppervlakte-eenheden**:\n• **mm²** (vierkante millimeter).\n• **cm²** = 100 mm² (10×10).\n• **dm²** = 100 cm² (10×10).\n• **m²** = 100 dm² = **10 000 cm²** (100×100).\n• **dam² (are, a)** = 100 m². Klein park.\n• **hm² (hectare, ha)** = 100 are = 10 000 m². Voetbalveld ~0,7 ha.\n• **km²** = 100 ha = 1 000 000 m². Stad.\n\n**Toets-valkuil**: tussen elke eenheid is factor **100** (niet 10 zoals bij lengte!) want oppervlakte is 2D.\n\n**Voorbeeld**: rechthoek 5 m × 3 m.\n• Omtrek = 2(5+3) = 16 m.\n• Oppervlakte = 5 × 3 = 15 m².\n\n**Omkering van eenheid**:\n• 15 m² → cm²? × 10 000 → 150 000 cm².\n• 5000 mm² → cm²? ÷ 100 → 50 cm².\n\n**Praktisch — kamer-tegels**:\nKamer 4 m × 5 m = 20 m². Tegels van 30 cm × 30 cm = 0,3 × 0,3 = 0,09 m². Aantal tegels = 20 / 0,09 ≈ 223. Plus 10% reserve.\n\n**Toets-valkuil**:\n• Verwar oppervlakte (cm²) NIET met lengte (cm) — eenheden checken.\n• Bij niet-rechthoekige figuren: opdelen in rechthoeken.",
    checks: [
      {
        q: "Rechthoek 6 m × 4 m. **Omtrek**?",
        options: ["20 m", "10 m", "24 m", "16 m"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet niet × 2.", "Niet — dat is oppervlakte (m²).", "Niet — controleer."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is omtrek?", tekst: "Omtrek is de afstand als je helemaal om de rechthoek heen loopt — alle vier de zijden samen." },
            { titel: "Gebruik de formule", tekst: "Tel lengte en breedte bij elkaar op en verdubbel dat — zo bereken je de omtrek van een rechthoek." },
          ],
          woorden: [{ woord: "omtrek", uitleg: "De totale lengte van de rand van een figuur, als je er helemaal omheen loopt." }],
          theorie: "Bij een **rechthoek** met lengte L en breedte B bereken je de omtrek met **2 × (L + B)**, omdat een rechthoek twee lange en twee korte zijden heeft. Een vierkant is een bijzondere rechthoek waarbij alle zijden even lang zijn.",
          voorbeelden: [{ type: "thuis", tekst: "Om te weten hoeveel plint je nodig hebt langs de rand van een kamer van 5 bij 3 meter, bereken je eerst de omtrek." }],
          basiskennis: [{ onderwerp: "Vier zijden", uitleg: "Een rechthoek heeft twee lange en twee korte zijden — bij de omtrek tel je ze allemaal mee." }],
          niveaus: { basis: "2(6+4)=20.", simpeler: "6+4+6+4=20.", nogSimpeler: "Tel lengte en breedte op en verdubbel dat — wat kom je uit?" },
        },
      },
      {
        q: "Vierkant met zijde 7 cm. **Oppervlakte**?",
        options: ["49 cm²", "28 cm²", "14 cm²", "49 cm"],
        answer: 0,
        wrongHints: [null, "Niet — dat is omtrek.", "Niet — niet 2×.", "Niet — eenheid moet cm²."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is oppervlakte?", tekst: "Oppervlakte is hoeveel ruimte er binnen het figuur past — niet de rand, maar het vlak zelf." },
            { titel: "Formule voor een vierkant", tekst: "Bij een vierkant vermenigvuldig je de zijde met zichzelf." },
          ],
          woorden: [{ woord: "vierkant", uitleg: "Een figuur met vier gelijke zijden en vier rechte hoeken." }],
          theorie: "De oppervlakte van een **vierkant** met zijde z bereken je met **z × z**. De uitkomst staat altijd in vierkante eenheden, zoals cm², omdat je een lengte met een lengte vermenigvuldigt.",
          voorbeelden: [{ type: "school", tekst: "Een vierkant tegeltje van 10 cm bij 10 cm gebruik je om te berekenen hoeveel ruimte het inneemt op tafel." }],
          basiskennis: [{ onderwerp: "Vierkante eenheid", uitleg: "Oppervlakte reken je altijd in vierkante eenheden zoals cm² of m², niet in gewone cm of m." }],
          niveaus: { basis: "7²=49 cm².", simpeler: "Zijde keer zijde = 49.", nogSimpeler: "Vermenigvuldig de zijde met zichzelf — wat kom je uit?" },
        },
      },
      {
        q: "Hoeveel **cm²** in 2,5 m²?",
        options: ["25 000 cm²", "250 cm²", "2500 cm²", "250 000 cm²"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Oppervlakte werkt anders dan lengte", tekst: "Bij oppervlakte-eenheden is de stap tussen buur-eenheden keer honderd, niet keer tien zoals bij lengte." },
            { titel: "Reken om", tekst: "Bedenk hoeveel vierkante centimeter er in één vierkante meter gaan, en vermenigvuldig dat met 2,5." },
          ],
          woorden: [{ woord: "vierkante meter (m²)", uitleg: "De oppervlakte van een vierkant van 1 meter bij 1 meter." }],
          theorie: "Omdat oppervlakte **twee richtingen** tegelijk heeft (lengte én breedte), is de stap tussen twee oppervlakte-eenheden **honderd** keer zo groot, in plaats van tien zoals bij lengte. Dit is een veelgemaakte fout op de toets.",
          voorbeelden: [{ type: "thuis", tekst: "Een woonkamer van 20 m² reken je om naar cm² om te zien hoeveel kleine tegeltjes van 1 cm² er theoretisch in zouden passen." }],
          basiskennis: [{ onderwerp: "Factor honderd", uitleg: "Tussen twee opeenvolgende oppervlakte-eenheden (zoals cm² en dm²) zit altijd een factor honderd." }],
          niveaus: { basis: "2,5 × 10000 = 25000.", simpeler: "Per m² is 10000 cm².", nogSimpeler: "Hoeveel cm² gaan er in 1 m²? Vermenigvuldig dat met 2,5." },
        },
      },
      {
        q: "Een L-vormige tuin: rechthoek 10×6 m met een hoekje van 3×2 m eruit. Oppervlakte?",
        options: ["54 m²", "60 m²", "48 m²", "66 m²"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet hoekje.", "Niet — te veel afgetrokken.", "Niet — niet bijvoegen."],
        uitlegPad: {
          stappen: [
            { titel: "Denk in twee stukken", tekst: "Bereken eerst de oppervlakte van de hele rechthoek, alsof het hoekje er nog in zit." },
            { titel: "Haal het hoekje eraf", tekst: "Bereken de oppervlakte van het weggehaalde hoekje apart en trek die af van de hele rechthoek." },
          ],
          woorden: [{ woord: "samengestelde figuur", uitleg: "Een figuur dat is opgebouwd uit meerdere rechthoeken, of een rechthoek met een stuk eraf." }],
          theorie: "Bij een **samengestelde figuur** (geen gewone rechthoek) splits je de vorm op in eenvoudige rechthoeken. Je telt de oppervlaktes bij elkaar op, of trekt een ontbrekend stuk af van een groter geheel — beide manieren geven hetzelfde antwoord.",
          voorbeelden: [{ type: "thuis", tekst: "Een L-vormige woonkamer bereken je door 'm op te delen in twee rechthoeken en de oppervlaktes op te tellen." }],
          basiskennis: [{ onderwerp: "Twee manieren", uitleg: "Je kunt optellen (twee rechthoeken samen) of aftrekken (groot geheel min een hoekje) — kies wat handiger uitrekent." }],
          niveaus: { basis: "60−6=54.", simpeler: "Heel min hoekje.", nogSimpeler: "Bereken de hele rechthoek, en trek daar het hoekje van af — wat kom je uit?" },
        },
      },
      {
        q: "Een park van **2 hectare** is in m²?",
        options: ["20 000 m²", "200 m²", "2000 m²", "2 000 000 m²"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een hectare?", tekst: "Een hectare is een oppervlakte-eenheid die je vaak ziet bij velden, parken en boerderijen." },
            { titel: "Reken om naar m²", tekst: "Bedenk hoeveel vierkante meter er in één hectare gaan, en vermenigvuldig dat met 2." },
          ],
          woorden: [{ woord: "hectare", uitleg: "Een grote oppervlakte-eenheid, ongeveer zo groot als anderhalf voetbalveld." }],
          theorie: "De **hectare** (ha) is een handige eenheid voor grote oppervlaktes zoals velden en parken. Eén hectare komt overeen met een vierkant van honderd meter bij honderd meter. Een voetbalveld (~7140 m²) is ongeveer 0,7 hectare.",
          voorbeelden: [{ type: "buiten", tekst: "Een boer met 5 hectare land rekent dat om naar vierkante meter om te weten hoeveel gewas erop past." }],
          basiskennis: [{ onderwerp: "Vierkant van 100 bij 100", uitleg: "Eén hectare is de oppervlakte van een vierkant van 100 meter bij 100 meter." }],
          niveaus: { basis: "2 × 10 000 = 20 000.", simpeler: "1 ha = 10 000 m².", nogSimpeler: "Hoeveel m² gaan er in 1 hectare? Vermenigvuldig dat met 2." },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een vierkant heeft zijden van **9 cm**. Wat is de **omtrek**?",
        options: ["36 cm", "81 cm", "18 cm", "27 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Vraagt de opdracht naar de rand of naar het vlak binnenin?",
          null,
          "Hoeveel zijden heeft een vierkant?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is omtrek?",
              tekst: "Omtrek is de lengte van de hele rand: alle zijden samen.",
            },
            {
              titel: "Vier gelijke zijden",
              tekst: "Een vierkant heeft 4 zijden die even lang zijn. Doe dus 4 × de zijde.",
            },
          ],
          woorden: [
            {
              woord: "omtrek",
              uitleg: "De lengte van de rand als je helemaal om een figuur heen loopt.",
            },
          ],
          theorie: "Bij een **vierkant** met zijde z is de omtrek **4 × z**. De oppervlakte is z × z, maar daar vraagt deze opdracht niet naar.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Een vierkante tafel met zijden van 1 m heeft een rand van 4 m.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Omtrek vierkant",
              uitleg: "4 × de zijde.",
            },
          ],
          niveaus: {
            basis: "4 × 9 = 36 cm.",
            simpeler: "9 + 9 + 9 + 9 = 36 cm.",
            nogSimpeler: "Tel vier keer de 9 bij elkaar op. Wat krijg je?",
          },
        },
      },
      {
        q: "Een moestuin is **7 m lang** en **5 m breed**. Je zet er een hekje omheen. Hoeveel meter hek heb je nodig?",
        options: ["24 m", "35 m", "12 m", "17 m"],
        answer: 0,
        wrongHints: [
          null,
          "Heb je nu de rand berekend of het vlak binnenin?",
          "Ga je echt helemaal rond de tuin?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Rondom = omtrek",
              tekst: "Een hek om de tuin gaat langs de hele rand. Je zoekt dus de omtrek.",
            },
            {
              titel: "Vier zijden",
              tekst: "Een rechthoek heeft twee lange en twee korte zijden. Tel ze alle vier op.",
            },
          ],
          woorden: [
            {
              woord: "omtrek",
              uitleg: "De lengte van de rand als je helemaal om een figuur heen loopt.",
            },
          ],
          theorie: "Bij een **rechthoek** is de omtrek **2 × (lengte + breedte)**. Je telt elke zijde één keer mee.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Een plint langs de muren van een kamer meet je ook met de omtrek.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Omtrek rechthoek",
              uitleg: "2 × (L + B).",
            },
          ],
          niveaus: {
            basis: "2 × (7 + 5) = 24 m.",
            simpeler: "7 + 5 + 7 + 5 = 24 m.",
            nogSimpeler: "Loop in gedachten om de tuin: 7, dan 5, dan weer 7, dan weer 5. Hoeveel samen?",
          },
        },
      },
      {
        q: "Een rechthoek heeft een oppervlakte van **24 cm²**. De lengte is **8 cm**. Hoe **breed** is de rechthoek?",
        options: ["3 cm", "16 cm", "5 cm", "6 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Oppervlakte is lengte KEER breedte. Welke som past daarbij?",
          null,
          "Controleer: 8 keer jouw antwoord moet 24 zijn.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Oppervlakte = L × B",
              tekst: "Je weet de uitkomst (24) en één getal (8). Het andere getal zoek je.",
            },
            {
              titel: "Terugrekenen met delen",
              tekst: "8 × ? = 24. Dat vind je met 24 ÷ 8.",
            },
          ],
          woorden: [
            {
              woord: "oppervlakte",
              uitleg: "Hoeveel ruimte een plat figuur binnenin bedekt, in vierkante maten zoals cm².",
            },
          ],
          theorie: "Bij een rechthoek geldt **oppervlakte = lengte × breedte**. Weet je de oppervlakte en de lengte, dan vind je de breedte met **oppervlakte ÷ lengte**.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Een kleed van 12 m² dat 4 m lang is, is 3 m breed.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Keer en delen",
              uitleg: "Delen is de omgekeerde som van keer.",
            },
          ],
          niveaus: {
            basis: "24 ÷ 8 = 3 cm.",
            simpeler: "8 × 3 = 24, dus de breedte is 3 cm.",
            nogSimpeler: "Welk getal keer 8 geeft 24?",
          },
        },
      },
      {
        q: "Welke rechthoek heeft de **grootste oppervlakte**?",
        options: ["5 cm × 5 cm", "8 cm × 3 cm", "10 cm × 2 cm", "12 cm × 2 cm"],
        answer: 0,
        wrongHints: [null, "Reken bij elke rechthoek lengte keer breedte uit.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Oppervlakte uitrekenen",
              tekst: "Doe bij elke rechthoek lengte × breedte.",
            },
            {
              titel: "Vergelijken",
              tekst: "Kijk daarna welke uitkomst het grootst is.",
            },
          ],
          woorden: [
            {
              woord: "oppervlakte",
              uitleg: "Hoeveel ruimte een plat figuur binnenin bedekt, in vierkante maten zoals cm².",
            },
          ],
          theorie: "De oppervlakte van een rechthoek is **lengte × breedte**. Een lange, smalle rechthoek kan een kleinere oppervlakte hebben dan een vierkant. Een vierkant is ook een rechthoek.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Twee kleden kunnen allebei een lange rand hebben, maar toch een ander stuk vloer bedekken.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Oppervlakte rechthoek",
              uitleg: "L × B, in cm².",
            },
          ],
          niveaus: {
            basis: "25 cm², 24 cm², 20 cm² en 24 cm². 5 × 5 is het grootst.",
            simpeler: "Reken uit: 5 × 5, 8 × 3, 10 × 2 en 12 × 2. Welke is het meest?",
            nogSimpeler: "Hoeveel is 5 keer 5? Is dat meer dan 8 keer 3?",
          },
        },
      },
    ],
  },

  // ─── C. Andere figuren ────────────────────────────────────
  {
    title: "Driehoek + Cirkel — formules + toepassing",
    explanation:
      "**Driehoek**:\n• Oppervlakte = **½ × basis × hoogte**.\n• Omtrek = som van alle 3 zijden (gewoon optellen).\n• **Hoogte** = loodrecht op basis, niet schuine zijde!\n\nVoorbeeld: basis 8 cm, hoogte 5 cm. Opp = ½ × 8 × 5 = 20 cm².\n\n**Cirkel** (straal r, diameter d = 2r):\n• Omtrek (= 'cirkelomtrek' of 'omtrek') = **2 × π × r = π × d**.\n• Oppervlakte = **π × r²**.\n• π (pi) ≈ 3,14 (De toets gebruikt vaak 3,14).\n\nVoorbeeld: cirkel met straal 5 cm.\n• Omtrek = 2 × 3,14 × 5 = 31,4 cm.\n• Oppervlakte = 3,14 × 5² = 3,14 × 25 = 78,5 cm².\n\n**Trapezium** (alleen VWO/HAVO maar handig):\n• Opp = ½ × (a + b) × hoogte (a, b zijn de twee parallelle zijden).\n\n**Combinaties + samengestelde figuren**:\n• Halve cirkel = ½ × π × r² (oppervlakte).\n• Rechthoek + halve cirkel erop = beide oppervlakten optellen.\n\n**Toets-truc bij cirkel-vragen**:\n• De toets vraagt meestal: 'gebruik π = 3,14'. NIET 22/7 of andere benadering.\n• Antwoord moet correct afgerond worden (meestal op 1 decimaal).\n\n**Veelgemaakte fout**:\n• Bij driehoek: 'schuine zijde × basis' → fout. Hoogte is **loodrecht** op basis.\n• Bij cirkel: oppervlakte vs omtrek verwarren — formules altijd checken: opp = π·r², omtrek = 2·π·r.\n• Eenheid: oppervlakte ALTIJD vierkant (cm² etc.).",
    checks: [
      {
        q: "Driehoek met **basis 10 cm + hoogte 6 cm**. Oppervlakte?",
        options: ["30 cm²", "60 cm²", "16 cm²", "60 cm"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet ½ niet.", "Niet — geen omtrek.", "Niet — eenheid cm² nodig."],
        uitlegPad: {
          stappen: [
            { titel: "Formule driehoek", tekst: "De oppervlakte van een driehoek is de helft van basis keer hoogte." },
            { titel: "Reken uit", tekst: "Vermenigvuldig basis en hoogte met elkaar, en neem daar de helft van." },
          ],
          woorden: [{ woord: "hoogte (bij driehoek)", uitleg: "De loodrechte lijn van de basis naar de tegenoverliggende hoek — niet de schuine zijde." }],
          theorie: "De oppervlakte van een **driehoek** is altijd **de helft** van basis keer hoogte, omdat een driehoek precies de helft is van een rechthoek met dezelfde basis en hoogte. Let op: de hoogte staat loodrecht op de basis, niet schuin.",
          voorbeelden: [{ type: "school", tekst: "Een driehoekige vlag van 20 cm basis en 8 cm hoogte bereken je met dezelfde formule." }],
          basiskennis: [{ onderwerp: "Halve rechthoek", uitleg: "Een driehoek is de helft van een rechthoek met dezelfde basis en hoogte." }],
          niveaus: { basis: "½·10·6=30 cm².", simpeler: "Half van b×h = 30.", nogSimpeler: "Vermenigvuldig basis en hoogte, en neem daar de helft van — wat kom je uit?" },
        },
      },
      {
        q: "Cirkel met **diameter 14 cm**. Omtrek? (π = 3,14)",
        options: ["43,96 cm", "21,98 cm", "87,92 cm", "153,86 cm"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet diameter (× 2 straal).", "Te groot.", "Niet — dat is oppervlakte-orde."],
        uitlegPad: {
          stappen: [
            { titel: "Omtrek-formule cirkel", tekst: "De omtrek van een cirkel bereken je met π keer de diameter." },
            { titel: "Vul in", tekst: "Vermenigvuldig 3,14 met de diameter van deze cirkel." },
          ],
          woorden: [{ woord: "diameter", uitleg: "De lijn dwars door het midden van de cirkel, van rand tot rand — twee keer de straal." }],
          theorie: "De omtrek van een **cirkel** bereken je met **π × diameter** (of hetzelfde: 2 × π × straal). Op de toets gebruik je meestal π ≈ 3,14.",
          voorbeelden: [{ type: "sport", tekst: "Een rond zwembad met een diameter van 6 meter — de omtrek daarvan reken je uit met dezelfde formule." }],
          basiskennis: [{ onderwerp: "Diameter versus straal", uitleg: "De diameter is twee keer zo lang als de straal — let op welke van de twee gegeven is." }],
          niveaus: { basis: "π·d=43,96.", simpeler: "π × 14 = 44.", nogSimpeler: "Vermenigvuldig 3,14 met de diameter — wat kom je uit?" },
        },
      },
      {
        q: "Cirkel met **straal 10 m**. Oppervlakte? (π = 3,14)",
        options: ["314 m²", "31,4 m²", "62,8 m²", "100 m²"],
        answer: 0,
        wrongHints: [null, "Te klein.", "Niet — dat is omtrek-formule.", "Niet — vergeet π."],
        uitlegPad: {
          stappen: [
            { titel: "Oppervlakte-formule cirkel", tekst: "De oppervlakte van een cirkel bereken je met π keer de straal in het kwadraat." },
            { titel: "Vul in", tekst: "Vermenigvuldig de straal met zichzelf, en vermenigvuldig dat met 3,14." },
          ],
          woorden: [{ woord: "straal (radius)", uitleg: "De afstand van het midden van de cirkel tot de rand." }],
          theorie: "De oppervlakte van een **cirkel** bereken je met **π × straal²**. Vergeet niet eerst de straal te kwadrateren (met zichzelf te vermenigvuldigen) vóórdat je met π vermenigvuldigt.",
          voorbeelden: [{ type: "buiten", tekst: "Een rond terras met een straal van 3 meter — de oppervlakte daarvan bereken je met dezelfde formule." }],
          basiskennis: [{ onderwerp: "Kwadraat", uitleg: "Straal² betekent de straal keer zichzelf, niet de straal keer 2." }],
          niveaus: { basis: "π·100=314.", simpeler: "π × straal² = 314 m².", nogSimpeler: "Vermenigvuldig de straal met zichzelf, en dan met 3,14 — wat kom je uit?" },
        },
      },
      {
        q: "Een driehoek met **schuine zijde 5** + basis 4 + hoogte 3 (rechthoekige driehoek). Opp?",
        options: ["6", "10", "12", "60"],
        answer: 0,
        wrongHints: [null, "Niet — de schuine zijde hoort niet in de formule.", "Niet — vergeet ½ niet.", "Niet — onmogelijk groot."],
        uitlegPad: {
          stappen: [
            { titel: "Welke maten heb je nodig?", tekst: "Voor de oppervlakte van een driehoek gebruik je alleen de basis en de hoogte — de schuine zijde is hier niet nodig." },
            { titel: "Reken uit", tekst: "Vermenigvuldig basis en hoogte, en neem daar de helft van." },
          ],
          woorden: [{ woord: "schuine zijde", uitleg: "De langste zijde van een rechthoekige driehoek, tegenover de rechte hoek — telt niet mee bij de oppervlakte-formule." }],
          theorie: "Bij een driehoek gebruik je voor de oppervlakte altijd **basis en hoogte** — extra gegeven zijden, zoals een schuine zijde, zijn voor deze berekening niet nodig. Ze kunnen wel gebruikt worden om iets anders te controleren, zoals met de stelling van Pythagoras.",
          voorbeelden: [{ type: "school", tekst: "Bij een driehoekig dak krijg je soms ook de lengte van de dakrand (schuine zijde) erbij, terwijl je voor de oppervlakte alleen basis en hoogte nodig hebt." }],
          basiskennis: [{ onderwerp: "Niet alle info is nodig", uitleg: "Een som kan meer maten geven dan je nodig hebt — kies alleen wat bij de formule hoort." }],
          niveaus: { basis: "½·4·3=6.", simpeler: "Half van basis×hoogte = 6.", nogSimpeler: "Vermenigvuldig basis en hoogte, en neem daar de helft van — wat kom je uit?" },
        },
      },
      {
        q: "Een **halve cirkel** met straal 4 cm. Oppervlakte? (π = 3,14)",
        options: ["25,12 cm²", "50,24 cm²", "12,56 cm²", "8 cm²"],
        answer: 0,
        wrongHints: [null, "Niet — dat is hele cirkel.", "Te klein.", "Te klein, vergeet π."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst de hele cirkel", tekst: "Bereken eerst de oppervlakte van de hele cirkel met π keer straal in het kwadraat." },
            { titel: "Dan de helft", tekst: "Omdat het om een halve cirkel gaat, deel je die oppervlakte door twee." },
          ],
          woorden: [{ woord: "halve cirkel", uitleg: "Een cirkel die precies doormidden is gedeeld, bijvoorbeeld een regenboog-vorm." }],
          theorie: "Voor een **halve cirkel** bereken je eerst de oppervlakte van de hele cirkel, en deel je die uitkomst door twee. Dit werkt ook voor een kwart cirkel — dan deel je door vier.",
          voorbeelden: [{ type: "thuis", tekst: "Een halfrond raam boven de voordeur met een straal van 50 cm bereken je op dezelfde manier." }],
          basiskennis: [{ onderwerp: "Deel-cirkels", uitleg: "Bij een deel van een cirkel bereken je eerst de hele cirkel, en deel je daarna door het juiste aantal delen." }],
          niveaus: { basis: "½ · π · 16 = 25,12.", simpeler: "Hele cirkel ÷ 2.", nogSimpeler: "Bereken eerst de hele cirkel, en deel dat door twee — wat kom je uit?" },
        },
      },
    ],
  },

  // ─── D. Inhoud ────────────────────────────────────────────
  {
    title: "Inhoud — kubus, balk, cilinder",
    explanation:
      "**Inhoud** = hoeveel ruimte een 3D-figuur inneemt (binnen-volume).\n\n**Kubus** (alle zijden gelijk, zijde z):\n• Inhoud = **z × z × z = z³**.\n• Voorbeeld: zijde 4 cm → inhoud = 64 cm³.\n\n**Balk** (lengte L, breedte B, hoogte H):\n• Inhoud = **L × B × H**.\n• Voorbeeld: 5 × 3 × 2 = 30 cm³.\n\n**Cilinder** (straal r grondvlak, hoogte h):\n• Inhoud = **π × r² × h** (= grondvlak × hoogte).\n• Voorbeeld: r=3, h=10 → π × 9 × 10 = 282,6 cm³.\n\n**Inhoud-eenheden**:\n• **mm³** (kubieke millimeter).\n• **cm³** = 1000 mm³.\n• **dm³** = 1000 cm³.\n• **m³** = 1000 dm³ = 1 000 000 cm³.\n\n**Toets-tip**: tussen elke inhoud-eenheid is factor **1000** (niet 10 zoals lengte, niet 100 zoals oppervlakte). 3D = 10³.\n\n**Liter-relatie**:\n• **1 L = 1 dm³ = 1000 cm³ = 1000 mL**.\n• 1 m³ = 1000 L.\n• 1 cm³ = 1 mL.\n• Heel handig in praktijk: emmer 10 L = 10 dm³ = 10 000 cm³.\n\n**Voorbeelden CSE-stijl**:\n• Pak melk 1 L = 1 dm³. Hoeveel ml in 0,25 L? 250 ml.\n• Aquarium 50 cm × 30 cm × 25 cm. Inhoud? 37 500 cm³ = 37,5 L.\n• Cilinder-pot d=6 cm, h=10 cm. Inhoud? π × 3² × 10 = 282,6 cm³ ≈ 283 mL.\n\n**Veelgemaakte fouten**:\n• Inhoud-eenheden niet ÷ 100 of × 10, MAAR factor 1000.\n• Bij cilinder: r ipv d gebruiken voor formule.\n• Vergeet dat hoogte loodrecht op grondvlak staat.\n\n**Combinaties**:\n• Halve cilinder = ½ × π × r² × h.\n• L-vormige tank: opdelen in balken.",
    checks: [
      {
        q: "Kubus met **zijde 5 cm**. Inhoud?",
        options: ["125 cm³", "25 cm³", "15 cm³", "75 cm³"],
        answer: 0,
        wrongHints: [null, "Niet — dat is opp van één vlak.", "Niet — dat is 3 × z.", "Onjuist."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is inhoud?", tekst: "Inhoud is hoeveel ruimte een 3D-figuur inneemt, zoals hoeveel water er in past." },
            { titel: "Formule kubus", tekst: "Bij een kubus vermenigvuldig je de zijde drie keer met zichzelf." },
          ],
          woorden: [{ woord: "kubus", uitleg: "Een 3D-figuur waarbij alle zijden even lang zijn, zoals een dobbelsteen." }],
          theorie: "De inhoud van een **kubus** met zijde z bereken je met **z × z × z**. De uitkomst staat in kubieke eenheden, zoals cm³, omdat je drie lengtes met elkaar vermenigvuldigt.",
          voorbeelden: [{ type: "thuis", tekst: "Een kubusvormige opbergdoos met een zijde van 20 cm — de inhoud daarvan bereken je met dezelfde formule." }],
          basiskennis: [{ onderwerp: "Kubieke eenheid", uitleg: "Inhoud reken je altijd in kubieke eenheden zoals cm³ of m³, omdat het om drie dimensies gaat." }],
          niveaus: { basis: "5³=125 cm³.", simpeler: "z×z×z = 125.", nogSimpeler: "Vermenigvuldig de zijde drie keer met zichzelf — wat kom je uit?" },
        },
      },
      {
        q: "Balk 8 × 4 × 3 cm. Inhoud?",
        options: ["96 cm³", "24 cm³", "15 cm³", "108 cm³"],
        answer: 0,
        wrongHints: [null, "Niet — vermenigvuldigen alle drie.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Formule balk", tekst: "Bij een balk vermenigvuldig je lengte, breedte en hoogte met elkaar." },
            { titel: "Reken uit", tekst: "Vermenigvuldig de drie gegeven maten stap voor stap met elkaar." },
          ],
          woorden: [{ woord: "balk", uitleg: "Een 3D-figuur zoals een schoenendoos, met lengte, breedte en hoogte die niet allemaal gelijk hoeven te zijn." }],
          theorie: "De inhoud van een **balk** bereken je met **lengte × breedte × hoogte**. In tegenstelling tot een kubus hoeven deze drie maten niet gelijk te zijn.",
          voorbeelden: [{ type: "thuis", tekst: "Een verhuisdoos van 50 cm bij 30 cm bij 40 cm — de inhoud daarvan bereken je met dezelfde formule." }],
          basiskennis: [{ onderwerp: "Volgorde maakt niet uit", uitleg: "Bij vermenigvuldigen mag je de drie maten in elke volgorde met elkaar vermenigvuldigen — de uitkomst blijft gelijk." }],
          niveaus: { basis: "8·4·3=96.", simpeler: "Drie maten vermenigvuldigen.", nogSimpeler: "Vermenigvuldig de drie maten met elkaar — wat kom je uit?" },
        },
      },
      {
        q: "Aquarium 60 cm × 30 cm × 25 cm. Inhoud in **liter**?",
        options: ["45 L", "4,5 L", "450 L", "45 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Niet — eenheid L gevraagd."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst de inhoud in cm³", tekst: "Bereken eerst de inhoud van het aquarium in kubieke centimeter, zoals bij elke balk." },
            { titel: "Dan omzetten naar liter", tekst: "Bedenk hoeveel kubieke centimeter er in één liter gaan, en deel je uitkomst daardoor." },
          ],
          woorden: [{ woord: "liter", uitleg: "Een inhoudsmaat die je kent van pakken melk of flessen water." }],
          theorie: "Er geldt een handige regel: **1 liter is precies 1000 kubieke centimeter**. Bereken je de inhoud van iets in cm³, dan hoef je alleen door duizend te delen om liters te krijgen.",
          voorbeelden: [{ type: "thuis", tekst: "Een emmer van 20 cm bij 20 cm bij 25 cm — hoeveel liter water past daarin?" }],
          basiskennis: [{ onderwerp: "1 L = 1000 cm³", uitleg: "Deze omrekening gebruik je vaak bij aquaria, emmers en badjes." }],
          niveaus: { basis: "45 000/1000=45 L.", simpeler: "Cm³ delen door 1000 voor L.", nogSimpeler: "Deel de inhoud in cm³ door duizend — wat kom je uit in liter?" },
        },
      },
      {
        q: "Cilinder: straal 5 cm, hoogte 10 cm. Inhoud? (π=3,14)",
        options: ["785 cm³", "157 cm³", "78,5 cm³", "31,4 cm³"],
        answer: 0,
        wrongHints: [null, "Te klein — vergeet r² niet.", "Niet — controleer.", "Niet — alleen omtrek."],
        uitlegPad: {
          stappen: [
            { titel: "Formule cilinder", tekst: "De inhoud van een cilinder is de oppervlakte van het ronde grondvlak, vermenigvuldigd met de hoogte." },
            { titel: "Reken in twee stappen", tekst: "Bereken eerst de oppervlakte van de cirkel (π keer straal in het kwadraat), en vermenigvuldig die daarna met de hoogte." },
          ],
          woorden: [{ woord: "cilinder", uitleg: "Een 3D-figuur met een ronde bodem en rechte zijkanten, zoals een blikje of een pot." }],
          theorie: "De inhoud van een **cilinder** bereken je met **π × straal² × hoogte** — eigenlijk grondvlak-oppervlakte keer hoogte, net zoals bij een balk.",
          voorbeelden: [{ type: "thuis", tekst: "Een blikje soep met een straal van 4 cm en een hoogte van 12 cm — de inhoud daarvan bereken je met dezelfde formule." }],
          basiskennis: [{ onderwerp: "Grondvlak keer hoogte", uitleg: "Zowel bij een balk als bij een cilinder geldt: inhoud = oppervlakte van het grondvlak keer de hoogte." }],
          niveaus: { basis: "π·25·10=785.", simpeler: "Cirkel-opp × hoogte.", nogSimpeler: "Bereken eerst de cirkel-oppervlakte, en vermenigvuldig die met de hoogte — wat kom je uit?" },
        },
      },
      {
        q: "Hoeveel **m³** in 2500 L?",
        options: ["2,5 m³", "25 m³", "0,25 m³", "250 m³"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Ken de omrekening", tekst: "Er geldt een vaste regel tussen liter en kubieke meter." },
            { titel: "Reken om", tekst: "Bedenk hoeveel liter er in één kubieke meter gaan, en deel 2500 daardoor." },
          ],
          woorden: [{ woord: "kubieke meter (m³)", uitleg: "De inhoud van een kubus van 1 meter bij 1 meter bij 1 meter." }],
          theorie: "Er geldt: **1 kubieke meter is 1000 liter**. Deze omrekening gebruik je bijvoorbeeld bij zwembaden, regentonnen en watertanks.",
          voorbeelden: [{ type: "buiten", tekst: "Een regenton van 200 liter — hoeveel kubieke meter is dat?" }],
          basiskennis: [{ onderwerp: "1 m³ = 1000 L", uitleg: "Handig om te onthouden bij grote hoeveelheden water." }],
          niveaus: { basis: "2500/1000=2,5.", simpeler: "L delen door 1000 voor m³.", nogSimpeler: "Hoeveel liter gaan er in 1 m³? Deel 2500 daardoor." },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een doos is **10 cm lang**, **6 cm breed** en **5 cm hoog**. Wat is de **inhoud**?",
        options: ["300 cm³", "21 cm³", "60 cm³", "3000 cm³"],
        answer: 0,
        wrongHints: [
          null,
          "Moet je de maten optellen of vermenigvuldigen?",
          "Heb je alle drie de maten gebruikt?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Inhoud van een balk",
              tekst: "Een doos is een balk. Je vermenigvuldigt lengte, breedte en hoogte.",
            },
            {
              titel: "Stap voor stap",
              tekst: "Doe eerst lengte × breedte, en dat keer de hoogte.",
            },
          ],
          woorden: [
            {
              woord: "inhoud",
              uitleg: "Hoeveel ruimte er in een ruimtefiguur zit, in kubieke maten zoals cm³.",
            },
          ],
          theorie: "Inhoud van een **balk** = **lengte × breedte × hoogte**. De uitkomst schrijf je in **cm³**.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Een schoenendoos meet je ook zo: lengte keer breedte keer hoogte.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Inhoud balk",
              uitleg: "L × B × H, in cm³.",
            },
          ],
          niveaus: {
            basis: "10 × 6 × 5 = 300 cm³.",
            simpeler: "10 × 6 = 60. Daarna 60 × 5 = 300 cm³.",
            nogSimpeler: "Hoeveel is 10 keer 6? En dat nog eens keer 5?",
          },
        },
      },
      {
        q: "Hoeveel **liter** is **4000 cm³**?",
        options: ["4 L", "40 L", "0,4 L", "400 L"],
        answer: 0,
        wrongHints: [null, "Hoeveel cm³ gaan er in één liter?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "1 liter = 1000 cm³",
              tekst: "Een liter is precies evenveel als 1000 kubieke centimeter.",
            },
            {
              titel: "Delen door 1000",
              tekst: "Van cm³ naar liter deel je door 1000.",
            },
          ],
          woorden: [
            {
              woord: "liter",
              uitleg: "Een inhoudsmaat die je kent van pakken melk of flessen water.",
            },
          ],
          theorie: "Er geldt: **1 L = 1 dm³ = 1000 cm³**. Van cm³ naar liter: **÷ 1000**.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Een pak melk van 1 L past precies in een bakje van 10 cm bij 10 cm bij 10 cm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "1 L = 1000 cm³",
              uitleg: "cm³ naar liter: delen door 1000.",
            },
          ],
          niveaus: {
            basis: "4000 ÷ 1000 = 4 L.",
            simpeler: "1000 cm³ is 1 L. Hoe vaak past 1000 in 4000?",
            nogSimpeler: "Duizend cm³ is één liter. Hoeveel keer duizend is vierduizend?",
          },
        },
      },
      {
        q: "Welke hoeveelheid is het **meest**?",
        options: ["1200 cm³", "1 L", "900 ml", "0,8 L"],
        answer: 0,
        wrongHints: [null, "Zet eerst alles om naar dezelfde maat, bijvoorbeeld milliliter.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zelfde maat",
              tekst: "Je kunt hoeveelheden alleen goed vergelijken in dezelfde maat.",
            },
            {
              titel: "Alles in ml",
              tekst: "1 cm³ = 1 ml en 1 L = 1000 ml. Reken alles om naar ml.",
            },
          ],
          woorden: [
            {
              woord: "kubieke centimeter",
              uitleg: "Een blokje van 1 cm bij 1 cm bij 1 cm, geschreven als cm³. Dat is evenveel als 1 ml.",
            },
          ],
          theorie: "Handig om te onthouden: **1 cm³ = 1 ml** en **1 L = 1000 ml**. Dan kun je liters, milliliters en cm³ makkelijk vergelijken.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Een flesje van 330 ml is evenveel als 330 cm³.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "1 cm³ = 1 ml",
              uitleg: "En 1000 ml = 1 L.",
            },
          ],
          niveaus: {
            basis: "1200 ml, 1000 ml, 900 ml en 800 ml. 1200 cm³ is het meest.",
            simpeler: "Reken om naar ml: 1200 cm³ = 1200 ml, 1 L = 1000 ml, 0,8 L = 800 ml.",
            nogSimpeler: "Hoeveel ml is 1200 cm³? Is dat meer dan een liter?",
          },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — praktijksommen mix",
    explanation:
      "**Toets-meetkunde** is altijd PRAKTIJK-gericht:\n• Tuin-oppervlakte voor gras.\n• Tegels berekenen.\n• Verfblik voor muur.\n• Aquarium-inhoud.\n• Schaal op kaart.\n\n**Werkwijze elke som**:\n1. **Lees** rustig.\n2. **Maak tekening** als geen plaatje gegeven.\n3. **Label** alle gegeven maten.\n4. **Identificeer**: vraag naar omtrek, oppervlakte, inhoud?\n5. **Formule** kiezen + invullen.\n6. **Controleer eenheid** (cm? cm²? cm³? L?).\n7. **Antwoord** rond af zoals gevraagd.\n\n**Eenheid-tips**:\n• Lengte: cm, m, km.\n• Oppervlakte: cm², m², ha.\n• Inhoud: cm³, m³, L.\n• Tip: 'twee dimensies maken vierkant', '3D maakt kubiek'.\n\n**Voorbeeld-som**:\nEen rechthoekige tuin is 12 m × 8 m. Eromheen leg je een pad van 1 m breed.\n• Buitenmaten met pad: (12+2) × (8+2) = 14 × 10 = 140 m².\n• Tuin zelf: 96 m².\n• Pad-oppervlakte: 140 − 96 = 44 m².\n\n**Tuintegel-som**:\nKamer 5 × 4 m, tegels 25 × 25 cm. Hoeveel?\n• Kamer = 20 m² = 200 000 cm².\n• Tegel = 25 × 25 = 625 cm².\n• Aantal = 200 000 / 625 = 320 tegels.\n• + 10% reserve → 352 tegels.\n\n**Verfblik-som**:\nMuur 4 × 3 m. Eén blik dekt 8 m².\n• Muur = 12 m².\n• Blikken nodig: 12 / 8 = 1,5 → ALTIJD afronden naar boven → 2 blikken.\n\n**Aquarium-som**:\nKubus-aquarium zijde 50 cm. Vullen tot 80%.\n• Inhoud totaal: 50³ = 125 000 cm³ = 125 L.\n• 80% = 100 L.",
    checks: [
      {
        q: "Een vierkante tuin met **omtrek 32 m**. Oppervlakte?",
        options: ["64 m²", "32 m²", "128 m²", "16 m²"],
        answer: 0,
        wrongHints: [null, "Niet — dat is omtrek.", "Te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Van omtrek naar zijde", tekst: "Een vierkant heeft vier gelijke zijden. Deel de omtrek door vier om de lengte van één zijde te vinden." },
            { titel: "Van zijde naar oppervlakte", tekst: "Vermenigvuldig de gevonden zijde met zichzelf om de oppervlakte te krijgen." },
          ],
          woorden: [{ woord: "omtrek en oppervlakte", uitleg: "Omtrek is de rand-lengte, oppervlakte is de ruimte binnenin — twee verschillende dingen die je niet mag verwarren." }],
          theorie: "Bij een vierkant kun je van de **omtrek** terugrekenen naar de **zijde** door door vier te delen (want een vierkant heeft vier gelijke zijden). Met die zijde bereken je vervolgens de oppervlakte.",
          voorbeelden: [{ type: "thuis", tekst: "Een vierkant tapijt met een omtrek van 12 meter — hoe groot is de oppervlakte daarvan?" }],
          basiskennis: [{ onderwerp: "Terugrekenen", uitleg: "Soms geeft een som niet de zijde zelf, maar de omtrek — dan reken je eerst terug naar de zijde." }],
          niveaus: { basis: "Zijde=8, opp=64.", simpeler: "Omtrek/4=zijde=8; 8·8=64.", nogSimpeler: "Deel de omtrek door vier voor de zijde, en vermenigvuldig die zijde met zichzelf — wat kom je uit?" },
        },
      },
      {
        q: "Een muur is **3 m hoog en 5 m breed**. Eén verfblik dekt **6 m²**. Hoeveel blikken?",
        options: ["3 blikken", "2 blikken", "1 blik", "15 blikken"],
        answer: 0,
        wrongHints: [null, "Niet — bereken de oppervlakte van de muur, deel door wat een blik dekt, en denk aan afronden.", "Te weinig.", "Niet — onmogelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Bereken eerst de oppervlakte", tekst: "Vermenigvuldig hoogte en breedte van de muur om de oppervlakte te vinden." },
            { titel: "Deel door de dekking, en rond naar boven af", tekst: "Deel de oppervlakte van de muur door wat één blik dekt. Kom je op iets meer dan een heel getal uit, dan heb je toch een extra blik nodig." },
          ],
          woorden: [{ woord: "naar boven afronden", uitleg: "Bij hoeveelheden zoals verfblikken kun je nooit een half blik kopen — je rondt daarom altijd naar boven af." }],
          theorie: "Bij praktijksommen over **hoeveel verpakkingen** je nodig hebt (verf, tegels, dozen), bereken je eerst hoeveel je in totaal nodig hebt, deel je dat door de inhoud van één verpakking, en **rond je altijd naar boven af** — ook al is de uitkomst maar net iets boven een heel getal.",
          voorbeelden: [{ type: "school", tekst: "Voor een schoolfeest heb je 50 bekertjes nodig en zitten er 12 in een pak — hoeveel pakken koop je?" }],
          basiskennis: [{ onderwerp: "Altijd naar boven", uitleg: "Bij verpakkingen rond je nooit naar beneden af, ook al is de rest maar klein." }],
          niveaus: { basis: "15/6=2,5 → 3.", simpeler: "Naar boven afronden.", nogSimpeler: "Deel de oppervlakte van de muur door wat één blik dekt, en rond naar boven af — wat kom je uit?" },
        },
      },
      {
        q: "Een rechthoekig zwembad is **5 m × 3 m × 1 m**. Hoeveel **liter** water past erin?",
        options: ["15 000 L", "1500 L", "150 L", "150 000 L"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Bereken eerst de inhoud in m³", tekst: "Vermenigvuldig de drie afmetingen van het zwembad met elkaar." },
            { titel: "Zet om naar liter", tekst: "Bedenk hoeveel liter er in één kubieke meter gaan, en vermenigvuldig je uitkomst daarmee." },
          ],
          woorden: [{ woord: "volgieten", uitleg: "Helemaal vullen met water — hier gevraagd in liters in plaats van kubieke meter." }],
          theorie: "Bij inhoud-sommen met water is het handig om eerst de inhoud in **kubieke meter** te berekenen, en die daarna om te zetten naar **liter** met de vaste regel: 1 kubieke meter is duizend liter. Ter vergelijking: een gewone badkuip is ongeveer 250 liter.",
          voorbeelden: [{ type: "buiten", tekst: "Een vijver van 2 bij 1 bij 0,5 meter — hoeveel liter water past daarin?" }],
          basiskennis: [{ onderwerp: "Grote hoeveelheden water", uitleg: "Zwembaden en vijvers reken je meestal eerst uit in m³, en pas daarna om naar liter." }],
          niveaus: { basis: "15 × 1000 = 15 000.", simpeler: "15 m³ = 15 000 L.", nogSimpeler: "Bereken eerst de inhoud in m³, en vermenigvuldig dat met duizend voor liters — wat kom je uit?" },
        },
      },
      {
        q: "Een cirkelvormige vijver met **straal 4 m**. Oppervlakte? (π=3,14)",
        options: ["50,24 m²", "25,12 m²", "12,56 m²", "100,48 m²"],
        answer: 0,
        wrongHints: [null, "Niet — dat is omtrek.", "Niet — verwarring formule.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Formule cirkel-oppervlakte", tekst: "Gebruik dezelfde formule als bij elke cirkel: π keer de straal in het kwadraat." },
            { titel: "Reken uit", tekst: "Vermenigvuldig de straal met zichzelf, en vermenigvuldig dat met 3,14." },
          ],
          woorden: [{ woord: "vijver", uitleg: "Een klein rond of ovaal stukje water, vaak in een tuin of park." }],
          theorie: "Een ronde vijver reken je op dezelfde manier als elke andere **cirkel**: oppervlakte = π × straal². Het maakt voor de formule niet uit of het om een vijver, een bord of een wiel gaat.",
          voorbeelden: [{ type: "buiten", tekst: "Een rond terras met straal 3 meter bereken je met dezelfde cirkel-formule als een vijver." }],
          basiskennis: [{ onderwerp: "Cirkel-vorm herkennen", uitleg: "Zodra iets rond is, gebruik je de cirkel-formules — of het nu een vijver, wiel of bord is." }],
          niveaus: { basis: "π·16=50,24.", simpeler: "π · 16 = 50,24 m².", nogSimpeler: "Vermenigvuldig de straal met zichzelf, en dan met 3,14 — wat kom je uit?" },
        },
      },
      {
        q: "Een **kaart-schaal 1:10 000**. Op kaart is een veld 5 cm × 4 cm. Werkelijke oppervlakte in m²?",
        // 5 sep 2026: antwoord was een factor 10 te klein (5 cm × 10 000 = 500 m; 4 cm = 400 m; 500 × 400 = 200 000 m²).
        options: ["200 000 m²", "20 000 m²", "2 000 m²", "200 m²"],
        answer: 0,
        wrongHints: [null, "Factor 10 te weinig — reken eerst élke zijde om naar meters (5 cm op de kaart = 500 m).", "Nee — 5 cm op de kaart is in het echt 500 m, niet 50 m.", "Veel te weinig — de schaal telt in beide richtingen mee."],
        uitlegPad: {
          stappen: [
            { titel: "Reken eerst de echte lengtes uit", tekst: "Vermenigvuldig beide kaart-lengtes met de schaalfactor om de werkelijke lengte en breedte in centimeter te krijgen, en zet die om naar meter." },
            { titel: "Vermenigvuldig voor de oppervlakte", tekst: "Vermenigvuldig de twee werkelijke afmetingen met elkaar om de oppervlakte te krijgen." },
          ],
          woorden: [{ woord: "schaal bij oppervlakte", uitleg: "Bij oppervlakte werkt een schaal net iets anders dan bij lengte — je vermenigvuldigt de lengte-schaal twee keer (voor lengte én breedte)." }],
          theorie: "Bij een **schaal-vraag over oppervlakte** reken je eerst de losse lengtes om naar de werkelijkheid, en vermenigvuldig je die pas daarna met elkaar. Let op: de oppervlakte wordt hierdoor véél groter dan bij een gewone lengte-omrekening, omdat de schaal-vergroting twee keer meetelt (voor beide richtingen).",
          voorbeelden: [{ type: "school", tekst: "Op een plattegrond van school met schaal 1:500 is het schoolplein 6 bij 4 cm — om de echte oppervlakte te krijgen, reken je eerst beide lengtes om en vermenigvuldig je ze daarna." }],
          basiskennis: [{ onderwerp: "Twee keer schaal-effect", uitleg: "Bij oppervlakte tel je de schaal-vergroting in beide richtingen mee — dat maakt het verschil met een gewone lengte-vraag veel groter dan je zou denken." }],
          niveaus: { basis: "Reken beide lengtes om naar de werkelijkheid, vermenigvuldig ze dan.", simpeler: "Eerst lengte × schaal, dan de twee uitkomsten vermenigvuldigen.", nogSimpeler: "Reken beide kaart-lengtes eerst om naar de werkelijkheid — welke twee getallen vermenigvuldig je daarna?" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een grasveld is **12 m lang** en **8 m breed**. Een zak graszaad is genoeg voor **20 m²**. Hoeveel zakken heb je **minstens** nodig?",
        options: ["5 zakken", "4 zakken", "6 zakken", "2 zakken"],
        answer: 0,
        wrongHints: [
          null,
          "Is dat genoeg voor het hele veld? Reken na hoeveel m² je dan kunt inzaaien.",
          null,
          "Heb je de oppervlakte van het veld uitgerekend, of de rand?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Oppervlakte van het veld",
              tekst: "Reken eerst uit hoeveel m² het veld is: lengte × breedte.",
            },
            {
              titel: "Delen en naar boven afronden",
              tekst: "Deel door 20. Kom je niet precies uit, dan heb je een zak extra nodig.",
            },
          ],
          woorden: [
            {
              woord: "minstens",
              uitleg: "Het kleinste aantal dat nog net genoeg is.",
            },
          ],
          theorie: "Eerst de **oppervlakte**, dan **delen** door wat één zak kan. Blijft er een stukje over, dan rond je **naar boven** af: een halve zak kun je niet kopen.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Heb je 2,5 pak koekjes nodig voor de klas, dan koop je 3 pakken.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Naar boven afronden",
              uitleg: "Bij spullen kopen rond je altijd naar boven af.",
            },
          ],
          niveaus: {
            basis: "12 × 8 = 96 m². 96 ÷ 20 = 4,8 → 5 zakken.",
            simpeler: "4 zakken is 80 m². Dat is te weinig voor 96 m². Dus 5 zakken.",
            nogSimpeler: "Hoeveel m² is het veld? Hoeveel zakken van 20 m² heb je nodig om daar te komen?",
          },
        },
      },
      {
        q: "Een terras is **2 m** bij **3 m**. Je legt tegels van **50 cm** bij **50 cm**. Hoeveel tegels heb je nodig?",
        options: ["24 tegels", "12 tegels", "6 tegels", "48 tegels"],
        answer: 0,
        wrongHints: [null, "Hoeveel tegels van 50 cm passen er naast elkaar in 1 meter?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tegels per rij",
              tekst: "50 cm is een halve meter. In 2 m passen 4 tegels, in 3 m passen 6 tegels.",
            },
            {
              titel: "Rijen keer tegels",
              tekst: "Je krijgt 4 rijen van 6 tegels. Vermenigvuldig die getallen.",
            },
          ],
          woorden: [
            {
              woord: "tegel",
              uitleg: "Een plat stuk steen waarmee je een vloer of terras bedekt.",
            },
          ],
          theorie: "Reken bij tegels eerst uit hoeveel er **in de lengte** en **in de breedte** passen. Vermenigvuldig die twee aantallen. Zorg dat je alles in **dezelfde maat** zet.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Op een vloer van 1 m bij 1 m passen 4 tegels van 50 cm bij 50 cm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Zelfde maat",
              uitleg: "50 cm = 0,5 m.",
            },
          ],
          niveaus: {
            basis: "4 × 6 = 24 tegels.",
            simpeler: "In 2 m passen 4 tegels en in 3 m passen 6 tegels. 4 × 6 = 24.",
            nogSimpeler: "Hoeveel tegels leg je in één rij van 3 meter? En hoeveel rijen passen er in 2 meter?",
          },
        },
      },
      {
        q: "Een vierkante zandbak heeft een oppervlakte van **16 m²**. Hoe lang is **één zijde**?",
        options: ["4 m", "8 m", "2 m", "16 m"],
        answer: 0,
        wrongHints: [
          null,
          "Controleer: zijde keer zijde moet 16 zijn.",
          null,
          "Is dat de oppervlakte of de lengte van een zijde?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Oppervlakte vierkant",
              tekst: "Bij een vierkant is de oppervlakte zijde × zijde.",
            },
            {
              titel: "Terugzoeken",
              tekst: "Zoek het getal dat keer zichzelf 16 is.",
            },
          ],
          woorden: [
            {
              woord: "vierkant",
              uitleg: "Een figuur met vier even lange zijden en vier rechte hoeken.",
            },
          ],
          theorie: "Bij een **vierkant** is de oppervlakte **z × z**. Weet je de oppervlakte, dan zoek je het getal dat keer zichzelf die uitkomst geeft.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Een vierkante tegel van 9 dm² heeft zijden van 3 dm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Oppervlakte vierkant",
              uitleg: "z × z.",
            },
          ],
          niveaus: {
            basis: "4 × 4 = 16, dus de zijde is 4 m.",
            simpeler: "Probeer: 2 × 2 = 4, 3 × 3 = 9, 4 × 4 = 16.",
            nogSimpeler: "Welk getal keer zichzelf is zestien?",
          },
        },
      },
      {
        q: "Een bak is **50 cm lang**, **20 cm breed** en **30 cm hoog**. Je vult hem tot de **helft** met water. Hoeveel **liter** water zit erin?",
        options: ["15 L", "30 L", "150 L", "1,5 L"],
        answer: 0,
        wrongHints: [null, "Heb je de helft al genomen?", "Hoeveel cm³ gaan er in één liter?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Inhoud van de bak",
              tekst: "Reken de inhoud uit: lengte × breedte × hoogte, in cm³.",
            },
            {
              titel: "Naar liter en de helft",
              tekst: "Deel door 1000 voor liters. Neem daarna de helft.",
            },
          ],
          woorden: [
            {
              woord: "inhoud",
              uitleg: "Hoeveel ruimte er in een ruimtefiguur zit, in kubieke maten zoals cm³.",
            },
          ],
          theorie: "Inhoud van een balk = **L × B × H**. Daarna: **1000 cm³ = 1 L**. Is de bak maar half vol, dan neem je **de helft** van de inhoud.",
          voorbeelden: [
            {
              type: "thuis",
              tekst: "Een emmer van 10 L die half vol is, bevat 5 L water.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "1 L = 1000 cm³",
              uitleg: "cm³ naar liter: delen door 1000.",
            },
          ],
          niveaus: {
            basis: "50 × 20 × 30 = 30 000 cm³ = 30 L. De helft is 15 L.",
            simpeler: "De hele bak is 30 L. Half vol is 30 ÷ 2 = 15 L.",
            nogSimpeler: "Hoeveel liter past er in de hele bak? En hoeveel is de helft daarvan?",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const matenOmtrekOppervlaktePo = {
  id: "maten-omtrek-oppervlakte-po",
  title: "Maten + Omtrek + Oppervlakte + Inhoud (Doorstroomtoets groep 7-8)",
  emoji: "📏",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Rekenen — Meetkunde / Doorstroomtoets-onderdeel rekenen",
  prerequisites: [
    { id: "tafels-po", title: "Tafels (basis)", niveau: "groep4-5" },
    { id: "verhoudingen", title: "Verhoudingen + breuken", niveau: "groep5-6" },
  ],
  intro:
    "Toets-meetkunde voor Doorstroomtoets — lengte-maten omrekenen (km/m/cm/mm), omtrek + oppervlakte (rechthoek, vierkant, driehoek, cirkel), inhoud (kubus, balk, cilinder), schaal + praktijksommen. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "maten", "lengte",
    "km", "kilometer", "meter", "centimeter", "millimeter",
    "omrekenen",
    "schaal", "kaart",
    "omtrek", "oppervlakte",
    "rechthoek", "vierkant",
    "driehoek", "basis hoogte",
    "cirkel", "straal", "diameter",
    "pi", "π", "3,14",
    "halve cirkel",
    "trapezium",
    "inhoud", "volume",
    "kubus", "balk", "cilinder",
    "cm²", "m²", "ha", "hectare", "are",
    "cm³", "m³", "liter", "L",
    "aquarium",
    "tegels berekenen", "verf",
    "De toets rekenen",
    "Doorstroomtoets rekenen",
  ],
  chapters,
  steps,
};

export default matenOmtrekOppervlaktePo;
