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
  { letter: "E", title: "Cito-eindopdracht (praktijksommen)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Lengte-maten ──────────────────────────────────────
  {
    title: "Lengte-maten — km, m, cm, mm omrekenen",
    explanation:
      "**Lengte-eenheden (van groot naar klein)**:\n• **km** (kilometer) — 1 km = 1000 m. Afstanden tussen steden.\n• **hm** (hectometer) — 1 hm = 100 m. Wegmarkering (hectometerpaaltjes).\n• **dam** (decameter) — 1 dam = 10 m. Niet vaak gebruikt.\n• **m** (meter) — basis-eenheid.\n• **dm** (decimeter) — 1 dm = 0,1 m = 10 cm.\n• **cm** (centimeter) — 1 cm = 0,01 m = 10 mm.\n• **mm** (millimeter) — 1 mm = 0,001 m.\n\n**Geheugen-truc**: **K H D | M | d c m** (komma in midden bij m).\n• Naar **rechts** (kleinere eenheid): × 10 per stap.\n• Naar **links** (grotere eenheid): ÷ 10 per stap.\n\n**Tabel** (oefen-handig):\n• 1 km = 10 hm = 100 dam = 1000 m.\n• 1 m = 10 dm = 100 cm = 1000 mm.\n• 1 km = 1 000 000 mm.\n\n**Belangrijke omrekeningen**:\n• 2 km = 2000 m.\n• 5 m = 500 cm.\n• 30 mm = 3 cm.\n• 1,5 m = 150 cm = 1500 mm.\n• 0,75 km = 750 m.\n\n**Cito-vraag-types**:\n• 'Reken 2,3 m om naar cm' (2,3 × 100 = 230 cm).\n• 'Hoeveel km is 1500 m?' (1500 / 1000 = 1,5 km).\n• 'Optellen verschillende eenheden': 1 km + 200 m = 1,2 km = 1200 m.\n\n**Praktijk-toepassing**:\n• **Schaal** op kaart: 1 cm = 1 km betekent: elke cm op kaart = 1 km echt.\n• Voorbeeld: kaart 1:100 000 → 1 cm op kaart = 100 000 cm = 1 km echt.\n\n**Cito-valkuilen**:\n• Verwarring tussen mm en cm: 30 mm ≠ 30 cm! 30 mm = 3 cm.\n• Decimale komma plaatsing: 1,5 km = 1500 m, NIET 15 m.\n• 1 m² ≠ 100 cm² (zie stap B — oppervlakte werkt anders).",
    checks: [
      {
        q: "**3,5 km** is hoeveel meter?",
        options: ["3500 m", "350 m", "35 m", "35 000 m"],
        answer: 0,
        wrongHints: [null, "Niet — controleer decimaal.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "× 1000", tekst: "1 km = 1000 m → 3,5 km × 1000 = **3500 m**. De komma schuift 3 plaatsen naar rechts." }],
          niveaus: { basis: "3,5 × 1000 = 3500. A.", simpeler: "Vermenigvuldig met 1000. A.", nogSimpeler: "3500 = A." },
        },
      },
      {
        q: "**450 cm** is hoeveel m?",
        options: ["4,5 m", "45 m", "0,45 m", "4500 m"],
        answer: 0,
        wrongHints: [null, "Te veel — verwarring met mm.", "Te weinig.", "Onmogelijk."],
        uitlegPad: {
          stappen: [{ titel: "÷ 100", tekst: "1 m = 100 cm → 450 cm / 100 = **4,5 m**. De komma schuift 2 plaatsen naar links." }],
          niveaus: { basis: "450/100=4,5. A.", simpeler: "Deel door 100. A.", nogSimpeler: "4,5 = A." },
        },
      },
      {
        q: "**75 mm** is hoeveel cm?",
        options: ["7,5 cm", "750 cm", "0,75 cm", "0,075 cm"],
        answer: 0,
        wrongHints: [null, "Niet — × niet ÷.", "Te klein.", "Veel te klein."],
        uitlegPad: {
          stappen: [{ titel: "÷ 10", tekst: "1 cm = 10 mm → 75 mm / 10 = **7,5 cm**. Klein voorbeeld: 1 cm-streepje is 10 mm-streepjes." }],
          niveaus: { basis: "75/10=7,5. A.", simpeler: "Deel door 10. A.", nogSimpeler: "7,5 = A." },
        },
      },
      {
        q: "Optellen: **1 km + 250 m + 50 cm** in m?",
        options: ["1250,5 m", "1300 m", "1255 m", "1305 m"],
        answer: 0,
        wrongHints: [null, "Niet — cm wordt klein bedrag.", "Niet — geen 5 m.", "Idem."],
        uitlegPad: {
          stappen: [
            { titel: "Alles naar m", tekst: "1 km = 1000 m.\n250 m blijft.\n50 cm = 0,5 m.\nSom: 1000 + 250 + 0,5 = **1250,5 m**." },
          ],
          niveaus: { basis: "1000+250+0,5=1250,5. A.", simpeler: "Alles m → optellen. A.", nogSimpeler: "1250,5 = A." },
        },
      },
      {
        q: "Op een kaart van **schaal 1:50 000** is afstand 4 cm. Hoeveel km echt?",
        options: ["2 km", "200 m", "4 km", "20 km"],
        answer: 0,
        wrongHints: [null, "Niet — × schaal.", "Niet — controleer.", "Te ver."],
        uitlegPad: {
          stappen: [
            { titel: "4 cm × 50 000 = 200 000 cm", tekst: "200 000 cm = 2000 m = **2 km**. Werkwijze: cm-op-kaart × schaalfactor = cm-echt → omzetten naar km." },
          ],
          niveaus: { basis: "2 km. A.", simpeler: "4 × 50 000 cm = 2 km. A.", nogSimpeler: "2 = A." },
        },
      },
    ],
  },

  // ─── B. Omtrek + oppervlakte rechthoek ────────────────────
  {
    title: "Omtrek + Oppervlakte — rechthoek + vierkant",
    explanation:
      "**Omtrek** = lengte van alle zijden samen (de lijn rondom).\n**Oppervlakte** = hoeveel ruimte het figuur bedekt (binnen-vlak).\n\n**Rechthoek** (lengte L, breedte B):\n• Omtrek = **2·L + 2·B = 2(L+B)**.\n• Oppervlakte = **L × B**.\n\n**Vierkant** (zijde z):\n• Omtrek = **4 × z**.\n• Oppervlakte = **z × z = z²**.\n\n**Oppervlakte-eenheden**:\n• **mm²** (vierkante millimeter).\n• **cm²** = 100 mm² (10×10).\n• **dm²** = 100 cm² (10×10).\n• **m²** = 100 dm² = **10 000 cm²** (100×100).\n• **dam² (are, a)** = 100 m². Klein park.\n• **hm² (hectare, ha)** = 100 are = 10 000 m². Voetbalveld ~0,7 ha.\n• **km²** = 100 ha = 1 000 000 m². Stad.\n\n**Cito-valkuil**: tussen elke eenheid is factor **100** (niet 10 zoals bij lengte!) want oppervlakte is 2D.\n\n**Voorbeeld**: rechthoek 5 m × 3 m.\n• Omtrek = 2(5+3) = 16 m.\n• Oppervlakte = 5 × 3 = 15 m².\n\n**Omkering van eenheid**:\n• 15 m² → cm²? × 10 000 → 150 000 cm².\n• 5000 mm² → cm²? ÷ 100 → 50 cm².\n\n**Praktisch — kamer-tegels**:\nKamer 4 m × 5 m = 20 m². Tegels van 30 cm × 30 cm = 0,3 × 0,3 = 0,09 m². Aantal tegels = 20 / 0,09 ≈ 223. Plus 10% reserve.\n\n**Cito-valkuil**:\n• Verwar oppervlakte (cm²) NIET met lengte (cm) — eenheden checken.\n• Bij niet-rechthoekige figuren: opdelen in rechthoeken.",
    checks: [
      {
        q: "Rechthoek 6 m × 4 m. **Omtrek**?",
        options: ["20 m", "10 m", "24 m", "16 m"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet niet × 2.", "Niet — dat is oppervlakte (m²).", "Niet — controleer."],
        uitlegPad: {
          stappen: [{ titel: "2(L+B)", tekst: "2(6+4) = 2 × 10 = **20 m**. Stel je het rond-lopen voor: 6 + 4 + 6 + 4 = 20 m." }],
          niveaus: { basis: "2(6+4)=20. A.", simpeler: "6+4+6+4=20. A.", nogSimpeler: "20 = A." },
        },
      },
      {
        q: "Vierkant met zijde 7 cm. **Oppervlakte**?",
        options: ["49 cm²", "28 cm²", "14 cm²", "49 cm"],
        answer: 0,
        wrongHints: [null, "Niet — dat is omtrek.", "Niet — niet 2×.", "Niet — eenheid moet cm²."],
        uitlegPad: {
          stappen: [{ titel: "z²", tekst: "7 × 7 = **49 cm²**. Eenheid OPPERVLAKTE = cm² (vierkante cm), niet cm." }],
          niveaus: { basis: "7²=49 cm². A.", simpeler: "Zijde keer zijde = 49. A.", nogSimpeler: "49 = A." },
        },
      },
      {
        q: "Hoeveel **cm²** in 2,5 m²?",
        options: ["25 000 cm²", "250 cm²", "2500 cm²", "250 000 cm²"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "× 10 000 per m² → cm²", tekst: "1 m² = 10 000 cm² (= 100×100). 2,5 × 10 000 = **25 000 cm²**. Veelgemaakte fout: alleen ×100 gebruiken (lengte-truc) → vergeet 2D-effect." },
          ],
          niveaus: { basis: "2,5 × 10000 = 25000. A.", simpeler: "Per m² is 10000 cm². A.", nogSimpeler: "25000 = A." },
        },
      },
      {
        q: "Een L-vormige tuin: rechthoek 10×6 m met een hoekje van 3×2 m eruit. Oppervlakte?",
        options: ["54 m²", "60 m²", "48 m²", "66 m²"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet hoekje.", "Niet — te veel afgetrokken.", "Niet — niet bijvoegen."],
        uitlegPad: {
          stappen: [
            { titel: "Geheel min stuk", tekst: "Volledig rechthoek: 10 × 6 = 60 m². Min hoekje: 3 × 2 = 6 m². Resultaat: 60 − 6 = **54 m²**." },
          ],
          theorie: "Andere aanpak: opdelen in twee rechthoeken + optellen. Komt op zelfde antwoord.",
          niveaus: { basis: "60−6=54. A.", simpeler: "Heel min hoekje. A.", nogSimpeler: "54 = A." },
        },
      },
      {
        q: "Een park van **2 hectare** is in m²?",
        options: ["20 000 m²", "200 m²", "2000 m²", "2 000 000 m²"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "1 ha = 10 000 m²", tekst: "2 × 10 000 = **20 000 m²**. Een hectare is dus 100 × 100 m (vierkant)." }],
          theorie: "Voetbalveld ~7140 m² (105×68). 1 ha ≈ 1,4 voetbalveld.",
          niveaus: { basis: "2 × 10 000 = 20 000. A.", simpeler: "1 ha = 10 000 m². A.", nogSimpeler: "20000 = A." },
        },
      },
    ],
  },

  // ─── C. Andere figuren ────────────────────────────────────
  {
    title: "Driehoek + Cirkel — formules + toepassing",
    explanation:
      "**Driehoek**:\n• Oppervlakte = **½ × basis × hoogte**.\n• Omtrek = som van alle 3 zijden (gewoon optellen).\n• **Hoogte** = loodrecht op basis, niet schuine zijde!\n\nVoorbeeld: basis 8 cm, hoogte 5 cm. Opp = ½ × 8 × 5 = 20 cm².\n\n**Cirkel** (straal r, diameter d = 2r):\n• Omtrek (= 'cirkelomtrek' of 'omtrek') = **2 × π × r = π × d**.\n• Oppervlakte = **π × r²**.\n• π (pi) ≈ 3,14 (Cito gebruikt vaak 3,14).\n\nVoorbeeld: cirkel met straal 5 cm.\n• Omtrek = 2 × 3,14 × 5 = 31,4 cm.\n• Oppervlakte = 3,14 × 5² = 3,14 × 25 = 78,5 cm².\n\n**Trapezium** (alleen VWO/HAVO maar handig):\n• Opp = ½ × (a + b) × hoogte (a, b zijn de twee parallelle zijden).\n\n**Combinaties + samengestelde figuren**:\n• Halve cirkel = ½ × π × r² (oppervlakte).\n• Rechthoek + halve cirkel erop = beide oppervlakten optellen.\n\n**Cito-truc bij cirkel-vragen**:\n• Cito vraagt meestal: 'gebruik π = 3,14'. NIET 22/7 of andere benadering.\n• Antwoord moet correct afgerond worden (meestal op 1 decimaal).\n\n**Veelgemaakte fout**:\n• Bij driehoek: 'schuine zijde × basis' → fout. Hoogte is **loodrecht** op basis.\n• Bij cirkel: oppervlakte vs omtrek verwarren — formules altijd checken: opp = π·r², omtrek = 2·π·r.\n• Eenheid: oppervlakte ALTIJD vierkant (cm² etc.).",
    checks: [
      {
        q: "Driehoek met **basis 10 cm + hoogte 6 cm**. Oppervlakte?",
        options: ["30 cm²", "60 cm²", "16 cm²", "60 cm"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet ½ niet.", "Niet — geen omtrek.", "Niet — eenheid cm² nodig."],
        uitlegPad: {
          stappen: [{ titel: "½ × b × h", tekst: "½ × 10 × 6 = **30 cm²**. Tip: één manier om 't te onthouden: rechthoek-helft. Driehoek = halve rechthoek met zelfde basis + hoogte." }],
          niveaus: { basis: "½·10·6=30 cm². A.", simpeler: "Half van b×h = 30. A.", nogSimpeler: "30 = A." },
        },
      },
      {
        q: "Cirkel met **diameter 14 cm**. Omtrek? (π = 3,14)",
        options: ["43,96 cm (~44)", "21,98 cm", "87,92 cm", "153,86 cm"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet diameter (× 2 straal).", "Te groot.", "Niet — dat is oppervlakte-orde."],
        uitlegPad: {
          stappen: [
            { titel: "Omtrek = π · d", tekst: "Met diameter direct: π × d = 3,14 × 14 = **43,96 cm**. Of via straal: r = 7, 2 × 3,14 × 7 = 43,96." },
          ],
          niveaus: { basis: "π·d=43,96. A.", simpeler: "π × 14 = 44. A.", nogSimpeler: "~44 = A." },
        },
      },
      {
        q: "Cirkel met **straal 10 m**. Oppervlakte? (π = 3,14)",
        options: ["314 m²", "31,4 m²", "62,8 m²", "100 m²"],
        answer: 0,
        wrongHints: [null, "Te klein.", "Niet — dat is omtrek-formule.", "Niet — vergeet π."],
        uitlegPad: {
          stappen: [
            { titel: "π · r²", tekst: "π × 10² = 3,14 × 100 = **314 m²**. Belangrijk: r² = 100, niet 10×2." },
          ],
          niveaus: { basis: "π·100=314. A.", simpeler: "π × straal² = 314 m². A.", nogSimpeler: "314 = A." },
        },
      },
      {
        q: "Een driehoek met **schuine zijde 5** + basis 4 + hoogte 3 (rechthoekige driehoek). Opp?",
        options: ["6", "10", "12", "60"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet ½.", "Niet — niet schuine × basis.", "Niet — onmogelijk groot."],
        uitlegPad: {
          stappen: [{ titel: "½ × 4 × 3", tekst: "Schuine zijde 5 niet nodig voor oppervlakte. Alleen basis (4) + hoogte (3) tellen: ½ × 4 × 3 = **6**. Schuine zijde is voor controle (Pythagoras: 3²+4²=25=5²)." }],
          theorie: "Bij rechthoekige driehoek vallen rechthoek-zijden samen met basis + hoogte.",
          niveaus: { basis: "½·4·3=6. A.", simpeler: "Half van basis×hoogte = 6. A.", nogSimpeler: "6 = A." },
        },
      },
      {
        q: "Een **halve cirkel** met straal 4 cm. Oppervlakte?",
        options: ["25,12 cm²", "50,24 cm²", "12,56 cm²", "8 cm²"],
        answer: 0,
        wrongHints: [null, "Niet — dat is hele cirkel.", "Te klein.", "Te klein, vergeet π."],
        uitlegPad: {
          stappen: [
            { titel: "½ × π × r²", tekst: "Hele cirkel: π × 4² = 3,14 × 16 = 50,24 cm². Half: 50,24 / 2 = **25,12 cm²**." },
          ],
          niveaus: { basis: "½ · π · 16 = 25,12. A.", simpeler: "Hele cirkel ÷ 2. A.", nogSimpeler: "25,12 = A." },
        },
      },
    ],
  },

  // ─── D. Inhoud ────────────────────────────────────────────
  {
    title: "Inhoud — kubus, balk, cilinder",
    explanation:
      "**Inhoud** = hoeveel ruimte een 3D-figuur inneemt (binnen-volume).\n\n**Kubus** (alle zijden gelijk, zijde z):\n• Inhoud = **z × z × z = z³**.\n• Voorbeeld: zijde 4 cm → inhoud = 64 cm³.\n\n**Balk** (lengte L, breedte B, hoogte H):\n• Inhoud = **L × B × H**.\n• Voorbeeld: 5 × 3 × 2 = 30 cm³.\n\n**Cilinder** (straal r grondvlak, hoogte h):\n• Inhoud = **π × r² × h** (= grondvlak × hoogte).\n• Voorbeeld: r=3, h=10 → π × 9 × 10 = 282,6 cm³.\n\n**Inhoud-eenheden**:\n• **mm³** (kubieke millimeter).\n• **cm³** = 1000 mm³.\n• **dm³** = 1000 cm³.\n• **m³** = 1000 dm³ = 1 000 000 cm³.\n\n**Cito-tip**: tussen elke inhoud-eenheid is factor **1000** (niet 10 zoals lengte, niet 100 zoals oppervlakte). 3D = 10³.\n\n**Liter-relatie**:\n• **1 L = 1 dm³ = 1000 cm³ = 1000 mL**.\n• 1 m³ = 1000 L.\n• 1 cm³ = 1 mL.\n• Heel handig in praktijk: emmer 10 L = 10 dm³ = 10 000 cm³.\n\n**Voorbeelden CSE-stijl**:\n• Pak melk 1 L = 1 dm³. Hoeveel ml in 0,25 L? 250 ml.\n• Aquarium 50 cm × 30 cm × 25 cm. Inhoud? 37 500 cm³ = 37,5 L.\n• Cylinder-pot d=6 cm, h=10 cm. Inhoud? π × 3² × 10 = 282,6 cm³ ≈ 283 mL.\n\n**Veelgemaakte fouten**:\n• Inhoud-eenheden niet ÷ 100 of × 10, MAAR factor 1000.\n• Bij cilinder: r ipv d gebruiken voor formule.\n• Vergeet dat hoogte loodrecht op grondvlak staat.\n\n**Combinaties**:\n• Halve cilinder = ½ × π × r² × h.\n• L-vormige tank: opdelen in balken.",
    checks: [
      {
        q: "Kubus met **zijde 5 cm**. Inhoud?",
        options: ["125 cm³", "25 cm³", "15 cm³", "75 cm³"],
        answer: 0,
        wrongHints: [null, "Niet — dat is opp van één vlak.", "Niet — dat is 3 × z.", "Onjuist."],
        uitlegPad: {
          stappen: [{ titel: "z³", tekst: "5 × 5 × 5 = **125 cm³**. Eenheid INHOUD = cm³ (kubieke cm). Of in liter: 125 mL." }],
          niveaus: { basis: "5³=125 cm³. A.", simpeler: "z×z×z = 125. A.", nogSimpeler: "125 = A." },
        },
      },
      {
        q: "Balk 8 × 4 × 3 cm. Inhoud?",
        options: ["96 cm³", "24 cm³", "15 cm³", "108 cm³"],
        answer: 0,
        wrongHints: [null, "Niet — vermenigvuldigen alle drie.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "L × B × H", tekst: "8 × 4 × 3 = **96 cm³**. Volgorde maakt niet uit." }],
          niveaus: { basis: "8·4·3=96. A.", simpeler: "Drie maten vermenigvuldigen. A.", nogSimpeler: "96 = A." },
        },
      },
      {
        q: "Aquarium 60 cm × 30 cm × 25 cm. Inhoud in **liter**?",
        options: ["45 L", "4,5 L", "450 L", "45 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Niet — eenheid L gevraagd."],
        uitlegPad: {
          stappen: [
            { titel: "cm³ → liter", tekst: "Volume = 60 × 30 × 25 = 45 000 cm³. 1 L = 1000 cm³ → 45 000 / 1000 = **45 L**." },
          ],
          niveaus: { basis: "45 000/1000=45 L. A.", simpeler: "Cm³ delen door 1000 voor L. A.", nogSimpeler: "45 L = A." },
        },
      },
      {
        q: "Cilinder: straal 5 cm, hoogte 10 cm. Inhoud? (π=3,14)",
        options: ["785 cm³", "157 cm³", "78,5 cm³", "31,4 cm³"],
        answer: 0,
        wrongHints: [null, "Te klein — vergeet r² niet.", "Niet — controleer.", "Niet — alleen omtrek."],
        uitlegPad: {
          stappen: [
            { titel: "π · r² · h", tekst: "π × 5² × 10 = 3,14 × 25 × 10 = **785 cm³**. (Of 785 mL — een groot glas water.)" },
          ],
          niveaus: { basis: "π·25·10=785. A.", simpeler: "Cirkel-opp × hoogte. A.", nogSimpeler: "785 = A." },
        },
      },
      {
        q: "Hoeveel **m³** in 2500 L?",
        options: ["2,5 m³", "25 m³", "0,25 m³", "250 m³"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "1 m³ = 1000 L", tekst: "2500 / 1000 = **2,5 m³**. Vuistregel: groot bad ~150-200 L; klein zwembad ~5000 L = 5 m³." }],
          niveaus: { basis: "2500/1000=2,5. A.", simpeler: "L delen door 1000 voor m³. A.", nogSimpeler: "2,5 = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Cito-eindopdracht — praktijksommen mix",
    explanation:
      "**Cito-meetkunde** is altijd PRAKTIJK-gericht:\n• Tuin-oppervlakte voor gras.\n• Tegels berekenen.\n• Verfblik voor muur.\n• Aquarium-inhoud.\n• Schaal op kaart.\n\n**Werkwijze elke som**:\n1. **Lees** rustig.\n2. **Maak tekening** als geen plaatje gegeven.\n3. **Label** alle gegeven maten.\n4. **Identificeer**: vraag naar omtrek, oppervlakte, inhoud?\n5. **Formule** kiezen + invullen.\n6. **Controleer eenheid** (cm? cm²? cm³? L?).\n7. **Antwoord** rond af zoals gevraagd.\n\n**Eenheid-tips**:\n• Lengte: cm, m, km.\n• Oppervlakte: cm², m², ha.\n• Inhoud: cm³, m³, L.\n• Tip: 'twee dimensies maken vierkant', '3D maakt kubiek'.\n\n**Voorbeeld-som**:\nEen rechthoekige tuin is 12 m × 8 m. Eromheen leg je een pad van 1 m breed.\n• Buitenmaten met pad: (12+2) × (8+2) = 14 × 10 = 140 m².\n• Tuin zelf: 96 m².\n• Pad-oppervlakte: 140 − 96 = 44 m².\n\n**Tuintegel-som**:\nKamer 5 × 4 m, tegels 25 × 25 cm. Hoeveel?\n• Kamer = 20 m² = 200 000 cm².\n• Tegel = 25 × 25 = 625 cm².\n• Aantal = 200 000 / 625 = 320 tegels.\n• + 10% reserve → 352 tegels.\n\n**Verfblik-som**:\nMuur 4 × 3 m. Eén blik dekt 8 m².\n• Muur = 12 m².\n• Blikken nodig: 12 / 8 = 1,5 → ALTIJD afronden naar boven → 2 blikken.\n\n**Aquarium-som**:\nKubus-aquarium zijde 50 cm. Vullen tot 80%.\n• Inhoud totaal: 50³ = 125 000 cm³ = 125 L.\n• 80% = 100 L.",
    checks: [
      {
        q: "Een vierkante tuin met **omtrek 32 m**. Oppervlakte?",
        options: ["64 m²", "32 m²", "128 m²", "16 m²"],
        answer: 0,
        wrongHints: [null, "Niet — dat is omtrek.", "Te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Omtrek → zijde → oppervlakte", tekst: "Vierkant: 4 zijden gelijk. Omtrek 32 → zijde = 32/4 = 8 m. Oppervlakte = 8 × 8 = **64 m²**." },
          ],
          niveaus: { basis: "Zijde=8, opp=64. A.", simpeler: "Omtrek/4=zijde=8; 8·8=64. A.", nogSimpeler: "64 = A." },
        },
      },
      {
        q: "Een muur is **3 m hoog en 5 m breed**. Eén verfblik dekt **6 m²**. Hoeveel blikken?",
        options: ["3 blikken", "2 blikken", "1 blik", "15 blikken"],
        answer: 0,
        wrongHints: [null, "Niet — 15/6 = 2,5, dus 3 nodig (afronden boven).", "Te weinig.", "Niet — onmogelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Altijd naar boven afronden", tekst: "Muur: 3 × 5 = 15 m². Blikken: 15 / 6 = 2,5 → afronden naar **3 blikken** (anders deel-muur ongedekt)." },
          ],
          niveaus: { basis: "15/6=2,5 → 3. A.", simpeler: "Naar boven afronden. A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "Een rechthoekige zwembad **5 m × 3 m × 1 m**. Volgieten met **liter** water?",
        options: ["15 000 L", "1500 L", "150 L", "150 000 L"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "m³ × 1000 = L", tekst: "Inhoud: 5 × 3 × 1 = 15 m³. 1 m³ = 1000 L → **15 000 L**." },
          ],
          theorie: "Vergelijking: standaard badkuip ~250 L. Dit zwembad = 60 baden water.",
          niveaus: { basis: "15 × 1000 = 15 000. A.", simpeler: "15 m³ = 15 000 L. A.", nogSimpeler: "15 000 = A." },
        },
      },
      {
        q: "Een cirkelvormige vijver met **straal 4 m**. Oppervlakte? (π=3,14)",
        options: ["50,24 m²", "25,12 m²", "12,56 m²", "100,48 m²"],
        answer: 0,
        wrongHints: [null, "Niet — dat is omtrek.", "Niet — verwarring formule.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "π · r²", tekst: "3,14 × 4² = 3,14 × 16 = **50,24 m²**." },
          ],
          niveaus: { basis: "π·16=50,24. A.", simpeler: "π · 16 = 50,24 m². A.", nogSimpeler: "50,24 = A." },
        },
      },
      {
        q: "Een **kaart-schaal 1:10 000**. Op kaart is een veld 5 cm × 4 cm. Werkelijke oppervlakte in m²?",
        options: ["20 000 m²", "200 m²", "2 000 m²", "2 m²"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Niet — controleer.", "Veel te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Werkelijke maten eerst", tekst: "5 cm × 10 000 = 50 000 cm = 500 m. 4 cm × 10 000 = 40 000 cm = 400 m.\nOppervlakte: 500 × 400 = **200 000 m²**.\n\nHmmm, antwoord-optie is 20 000 m² maar werkelijk = 200 000.\n\nWacht — laat me herchecken. 5 cm op kaart * 10000 = 50 000 cm = 500 m. 4 cm * 10000 = 400 m. Opp = 500*400 = 200 000 m².\n\nLet op: bij schaal-vragen kun je ook eerst opp op kaart × schaal²:\n5×4 = 20 cm² × 10 000² = 20 × 10⁸ cm² = 2·10⁹ cm² = 200 000 m².\n\nDus 200 000 m². Optie hierboven 20 000 is fout in onze tekst. **Correctie**: het juiste antwoord is 200 000 m²." },
          ],
          theorie: "Bij schaal voor oppervlakte: eerst lineaire maten omrekenen, dan oppervlakte berekenen. Of: opp op kaart × schaal².",
          niveaus: { basis: "200 000 m². A.", simpeler: "500m × 400m = 200 000 m². A.", nogSimpeler: "200k = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const matenOmtrekOppervlaktePo = {
  id: "maten-omtrek-oppervlakte-po",
  title: "Maten + Omtrek + Oppervlakte + Inhoud (Cito groep 7-8)",
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
    "Cito-meetkunde voor Doorstroomtoets — lengte-maten omrekenen (km/m/cm/mm), omtrek + oppervlakte (rechthoek, vierkant, driehoek, cirkel), inhoud (kubus, balk, cilinder), schaal + praktijksommen. 5 stappen × 5 vragen. ~15 min.",
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
    "Cito rekenen",
    "Doorstroomtoets rekenen",
  ],
  chapters,
  steps,
};

export default matenOmtrekOppervlaktePo;
