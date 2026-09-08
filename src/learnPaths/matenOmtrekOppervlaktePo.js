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
      "**Lengte-eenheden (van groot naar klein)**:\n• **km** (kilometer) — 1 km = 1000 m. Afstanden tussen steden.\n• **hm** (hectometer) — 1 hm = 100 m. Wegmarkering (hectometerpaaltjes).\n• **dam** (decameter) — 1 dam = 10 m. Niet vaak gebruikt.\n• **m** (meter) — basis-eenheid.\n• **dm** (decimeter) — 1 dm = 0,1 m = 10 cm.\n• **cm** (centimeter) — 1 cm = 0,01 m = 10 mm.\n• **mm** (millimeter) — 1 mm = 0,001 m.\n\n**Geheugen-truc**: **K H D | M | d c m** (komma in midden bij m).\n• Naar **rechts** (kleinere eenheid): × 10 per stap.\n• Naar **links** (grotere eenheid): ÷ 10 per stap.\n\n**Tabel** (oefen-handig):\n• 1 km = 10 hm = 100 dam = 1000 m.\n• 1 m = 10 dm = 100 cm = 1000 mm.\n• 1 km = 1 000 000 mm.\n\n**Belangrijke omrekeningen**:\n• 2 km = 2000 m.\n• 5 m = 500 cm.\n• 30 mm = 3 cm.\n• 1,5 m = 150 cm = 1500 mm.\n• 0,75 km = 750 m.\n\n**toetsvraag-types**:\n• 'Reken 2,3 m om naar cm' (2,3 × 100 = 230 cm).\n• 'Hoeveel km is 1500 m?' (1500 / 1000 = 1,5 km).\n• 'Optellen verschillende eenheden': 1 km + 200 m = 1,2 km = 1200 m.\n\n**Praktijk-toepassing**:\n• **Schaal** op kaart: 1 cm = 1 km betekent: elke cm op kaart = 1 km echt.\n• Voorbeeld: kaart 1:100 000 → 1 cm op kaart = 100 000 cm = 1 km echt.\n\n**Toets-valkuilen**:\n• Verwarring tussen mm en cm: 30 mm ≠ 30 cm! 30 mm = 3 cm.\n• Decimale komma plaatsing: 1,5 km = 1500 m, NIET 15 m.\n• 1 m² ≠ 100 cm² (zie stap B — oppervlakte werkt anders).",
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
        wrongHints: [null, "Niet — × niet ÷.", "Te klein.", "Veel te klein."],
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
          theorie: "De **hectare** (ha) is een handige eenheid voor grote oppervlaktes zoals velden en parken. Eén hectare komt overeen met een vierkant van honderd meter bij honderd meter. Een voetbalveld (~7140 m²) is ongeveer 1,4 hectare.",
          voorbeelden: [{ type: "buiten", tekst: "Een boer met 5 hectare land rekent dat om naar vierkante meter om te weten hoeveel gewas erop past." }],
          basiskennis: [{ onderwerp: "Vierkant van 100 bij 100", uitleg: "Eén hectare is de oppervlakte van een vierkant van 100 meter bij 100 meter." }],
          niveaus: { basis: "2 × 10 000 = 20 000.", simpeler: "1 ha = 10 000 m².", nogSimpeler: "Hoeveel m² gaan er in 1 hectare? Vermenigvuldig dat met 2." },
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
        options: ["43,96 cm (~44)", "21,98 cm", "87,92 cm", "153,86 cm"],
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
        wrongHints: [null, "Niet — vergeet ½.", "Niet — niet schuine × basis.", "Niet — onmogelijk groot."],
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
        q: "Een **halve cirkel** met straal 4 cm. Oppervlakte?",
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
      "**Inhoud** = hoeveel ruimte een 3D-figuur inneemt (binnen-volume).\n\n**Kubus** (alle zijden gelijk, zijde z):\n• Inhoud = **z × z × z = z³**.\n• Voorbeeld: zijde 4 cm → inhoud = 64 cm³.\n\n**Balk** (lengte L, breedte B, hoogte H):\n• Inhoud = **L × B × H**.\n• Voorbeeld: 5 × 3 × 2 = 30 cm³.\n\n**Cilinder** (straal r grondvlak, hoogte h):\n• Inhoud = **π × r² × h** (= grondvlak × hoogte).\n• Voorbeeld: r=3, h=10 → π × 9 × 10 = 282,6 cm³.\n\n**Inhoud-eenheden**:\n• **mm³** (kubieke millimeter).\n• **cm³** = 1000 mm³.\n• **dm³** = 1000 cm³.\n• **m³** = 1000 dm³ = 1 000 000 cm³.\n\n**Toets-tip**: tussen elke inhoud-eenheid is factor **1000** (niet 10 zoals lengte, niet 100 zoals oppervlakte). 3D = 10³.\n\n**Liter-relatie**:\n• **1 L = 1 dm³ = 1000 cm³ = 1000 mL**.\n• 1 m³ = 1000 L.\n• 1 cm³ = 1 mL.\n• Heel handig in praktijk: emmer 10 L = 10 dm³ = 10 000 cm³.\n\n**Voorbeelden CSE-stijl**:\n• Pak melk 1 L = 1 dm³. Hoeveel ml in 0,25 L? 250 ml.\n• Aquarium 50 cm × 30 cm × 25 cm. Inhoud? 37 500 cm³ = 37,5 L.\n• Cylinder-pot d=6 cm, h=10 cm. Inhoud? π × 3² × 10 = 282,6 cm³ ≈ 283 mL.\n\n**Veelgemaakte fouten**:\n• Inhoud-eenheden niet ÷ 100 of × 10, MAAR factor 1000.\n• Bij cilinder: r ipv d gebruiken voor formule.\n• Vergeet dat hoogte loodrecht op grondvlak staat.\n\n**Combinaties**:\n• Halve cilinder = ½ × π × r² × h.\n• L-vormige tank: opdelen in balken.",
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
        q: "Een rechthoekige zwembad **5 m × 3 m × 1 m**. Volgieten met **liter** water?",
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
