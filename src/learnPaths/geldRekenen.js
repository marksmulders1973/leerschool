// Leerpad: Geld rekenen — voor groep 5-8
// 5 stappen. Cito-stijl praktijksommen.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#00c853",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  euro: "#ffaa30",
};

const stepEmojis = ["💶","➕","🛒","📊","🏆"];

const chapters = [
  { letter: "A", title: "Euro's en centen", emoji: "💶", from: 0, to: 0 },
  { letter: "B", title: "Optellen en aftrekken", emoji: "➕", from: 1, to: 1 },
  { letter: "C", title: "Wisselgeld + slim kopen", emoji: "🛒", from: 2, to: 2 },
  { letter: "D", title: "Vergelijken — wat is voordeligst?", emoji: "📊", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Euro's en centen",
    explanation: "**1 euro = 100 cent**. Net zoals 1 meter = 100 cm.\n\nGeld schrijf je met een **komma** tussen euro's en centen:\n• € 1,50 = 1 euro 50 cent\n• € 0,75 = 75 cent\n• € 12,05 = 12 euro 5 cent *(let op: nul-cent niet vergeten!)*\n• € 100,00 = honderd euro precies\n\n**Belangrijk**: na de komma altijd **2 cijfers** voor de centen.\n• € 3,5 schrijven we als € 3,50.\n• € 0,5 = € 0,50.\n• € 10 = € 10,00.\n\n**Munten en biljetten in Nederland**:\n• Munten: 1, 2, 5, 10, 20, 50 cent + 1 en 2 euro.\n• Biljetten: 5, 10, 20, 50, 100, 200, 500 euro.\n\n**Cent → euro** *(omrekenen)*:\n• 250 cent = € 2,50.\n• 1000 cent = € 10,00.\n• 75 cent = € 0,75.\n\n**Euro → cent**:\n• € 3,40 = 340 cent.\n• € 0,80 = 80 cent.\n• € 1,05 = 105 cent.",
    checks: [
      {
        q: "**€ 2,75** — hoeveel **cent**?",
        options: ["275","2750","27,5","27"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je per ongeluk × 1000 ipv × 100 gedaan?","Past niet — cent zijn hele getallen, geen kommagetallen.","Te weinig — komma vergeten?"],
        uitlegPad: {
          stappen: [{ titel: "Euro→cent", tekst: "1 euro = 100 cent. €2,75 × 100 = 275 cent." }],
          woorden: [{ woord: "cent", uitleg: "1/100 euro. 100 cent = 1 euro." }],
          theorie: "Komma 2 plekken naar rechts schuiven = ×100. €2,75 → 275 cent.",
          voorbeelden: [{ type: "omrekenen", tekst: "€1=100c, €0,50=50c, €2,75=275c, €10=1000c." }],
          basiskennis: [{ onderwerp: "Cent = heel getal", uitleg: "Cent geen kommagetal — altijd hele getal." }],
          niveaus: { basis: "€2,75 = 275 cent. A.", simpeler: "1 euro = 100 cent. €2,75 = 2×100 + 75 = 275 cent. = A.", nogSimpeler: "275 = A." },
        },
      },
      {
        q: "Welk bedrag is **correct geschreven** voor 'drie euro vijftig cent'?",
        options: ["€ 3,50","€ 3,5","€ 350","€ 3,05"],
        answer: 0,
        wrongHints: [null,"Bijna — maar geld schrijf je altijd met 2 cijfers achter de komma.","Veel te veel — dat is € 350 (drie­honderd­vijftig euro).","Dat is 5 cent, niet 50 cent."],
        uitlegPad: {
          stappen: [
            { titel: "Geld-notatie", tekst: "Altijd 2 cijfers na komma. €3,50 (50 cent), €3,05 (5 cent), niet '€3,5'." },
          ],
          woorden: [{ woord: "decimaal", uitleg: "Cijfers na komma. Bij geld: altijd 2 (cent)." }],
          theorie: "Geld-conventie: €X,YZ. Y en Z zijn altijd 2 cijfers, ook bij ronde bedragen (€10,00).",
          voorbeelden: [{ type: "notatie", tekst: "€3,50 ✓. €3,5 ✗ (mist cijfer). €3,05 = 5 cent (niet 50)." }],
          basiskennis: [{ onderwerp: "0 invullen", uitleg: "Bij minder dan 10 cent: 0 ervoor. €0,05 = 5 cent." }],
          niveaus: { basis: "€3,50 met 2 decimalen. A.", simpeler: "Geld schrijf je altijd met 2 cijfers na komma. 50 cent = ',50'. Dus €3,50. = A.", nogSimpeler: "€3,50 = A." },
        },
      },
      {
        q: "**450 cent** = ?",
        options: ["€ 4,50","€ 0,45","€ 45,00","€ 4,05"],
        answer: 0,
        wrongHints: [null,"Komma fout — heb je per ongeluk × 100 ipv ÷ 100 gedaan?","Veel te veel — dat is 4500 cent.","5 vergeten meegerekend?"],
        uitlegPad: {
          stappen: [{ titel: "Cent→euro", tekst: "÷100 = komma 2 plekken naar links. 450 → €4,50." }],
          woorden: [{ woord: "omrekenen", uitleg: "Cent → euro = ÷100." }],
          theorie: "Andersom van euro→cent: cent ÷100 = euro. 450 cent ÷100 = €4,50.",
          voorbeelden: [{ type: "cent→euro", tekst: "100c=€1. 250c=€2,50. 450c=€4,50. 1000c=€10." }],
          basiskennis: [{ onderwerp: "Komma schuiven", uitleg: "÷100 = komma 2 plekken naar links." }],
          niveaus: { basis: "450c ÷100 = €4,50. A.", simpeler: "100 cent = €1. 400 cent = €4. + 50 cent = €4,50. = A.", nogSimpeler: "€4,50 = A." },
        },
      },
    ],
  },

  {
    title: "Optellen en aftrekken met geld",
    explanation: "Geldsommen werken net als gewone sommen, maar pas op met de **komma**.\n\n**Voorbeelden — optellen**:\n• € 2,50 + € 1,75 = ?\n  - 2,50 + 1,75 — schrijf onder elkaar, zorg dat komma's recht staan.\n  - Eindbedrag: **€ 4,25**.\n\n• € 0,80 + € 0,30 = ?\n  - Cents: 80 + 30 = 110 cent = € 1,10.\n  - Of: 0,80 + 0,30 = **1,10**.\n\n**Voorbeelden — aftrekken**:\n• € 5,00 − € 2,35 = ?\n  - Schrijf onder elkaar: 5,00 − 2,35.\n  - Eindbedrag: **€ 2,65**.\n\n• € 10,00 − € 3,75 = ?\n  - Truc: gebruik 9,99 − 3,75 = 6,24, dan +0,01 = **€ 6,25**.\n\n**Cito-tip**:\n• Schrijf altijd **netjes onder elkaar** met komma's recht.\n• Cento's tellen los kan ook: € 2,75 + € 1,80 → 275 + 180 = 455 cent → **€ 4,55**.",
    checks: [
      {
        q: "**€ 3,40 + € 1,75** = ?",
        options: ["€ 5,15","€ 5,05","€ 4,95","€ 5,25"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer cent-deel: 40+75=115 = 1 euro 15.","Veel te weinig — heb je het euro-deel correct?","Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Cent + cent", tekst: "Cent: 40+75=115 cent = €1,15. Plus euro's: 3+1+1=5. Totaal €5,15." },
          ],
          woorden: [{ woord: "geld optellen", uitleg: "Centen apart, euro's apart. Centen >100 = onthoudje euro." }],
          theorie: "Truc: tel centen apart (40+75=115). 100 cent = 1 euro extra. Schrijf 15 cent + 1 euro extra erbij.",
          voorbeelden: [{ type: "stap", tekst: "€3,40 + €1,75: cent 40+75=115 (€1,15). Euro 3+1+1=5. = €5,15." }],
          basiskennis: [{ onderwerp: "Schat", uitleg: "Schat: 3+2=5. Antwoord rond €5. €5,15 past." }],
          niveaus: { basis: "€3,40+€1,75=€5,15. A.", simpeler: "Cent eerst: 40+75=115 (= €1,15). Euro's: 3+1+1(onthoud)=5. Antwoord €5,15. = A.", nogSimpeler: "€5,15 = A." },
        },
      },
      {
        q: "**€ 10,00 − € 3,45** = ?",
        options: ["€ 6,55","€ 6,45","€ 7,55","€ 6,65"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer cent-deel.","Veel te veel — heb je 3,45 wel afgetrokken?","Te veel — bijna goed maar niet helemaal."],
        uitlegPad: {
          stappen: [
            { titel: "999-truc", tekst: "10 − 3,45 = 9,99 − 3,45 + 0,01 = 6,54 + 0,01 = €6,55." },
            { titel: "Of vooruit-tellen", tekst: "Van 3,45 → 4 = 0,55. Van 4 → 10 = 6. Totaal: 6,55." },
          ],
          woorden: [{ woord: "vooruit-tellen", uitleg: "Tel vanaf het kleine getal naar het grote — alternatief voor aftrekken." }],
          theorie: "Bij 'rond getal − iets' = vooruit-tellen vaak makkelijker dan cijferen.",
          voorbeelden: [{ type: "vooruit", tekst: "10 − 3,45: van 3,45 naar 4 = +0,55. Van 4 naar 10 = +6. Samen 6,55." }],
          basiskennis: [{ onderwerp: "Wisselgeld-truc", uitleg: "Vooruit-tellen werkt extra goed bij wisselgeld-vragen." }],
          niveaus: { basis: "€10−€3,45=€6,55. A.", simpeler: "Vooruit-tellen vanaf 3,45: +0,55=4, +6=10. Totaal +6,55. = A.", nogSimpeler: "€6,55 = A." },
        },
      },
      {
        q: "Mam koopt **brood € 2,15**, **kaas € 4,80**, **fruit € 3,55**. Totaal?",
        options: ["€ 10,50","€ 9,50","€ 11,50","€ 10,40"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je een product overgeslagen?","Te veel — controleer met schatting (2+5+4=11).","Te weinig — controleer cent-totaal."],
        uitlegPad: {
          stappen: [
            { titel: "Tel op", tekst: "Cent: 15+80+55=150 (=€1,50). Euro: 2+4+3+1(onthoud)=10. Totaal €10,50." },
          ],
          woorden: [{ woord: "boodschappen-totaal", uitleg: "Alles bij elkaar optellen." }],
          theorie: "Bij 3+ items: tel ze allemaal op. Centen tellen kan vaak in hoofd (afronden helpt).",
          voorbeelden: [{ type: "totaal", tekst: "Schat: 2+5+4=11. Echt: €10,50. Past." }],
          basiskennis: [{ onderwerp: "Schat eerst", uitleg: "Schatting helpt om dom-foute antwoorden uit te sluiten." }],
          niveaus: { basis: "Totaal €10,50. A.", simpeler: "Centen: 15+80+55=150 (= €1,50). Euro: 2+4+3=9. Plus de €1,50 = €10,50. = A.", nogSimpeler: "€10,50 = A." },
        },
      },
    ],
  },

  {
    title: "Wisselgeld berekenen",
    explanation: "Bij **wisselgeld** krijg je terug = (wat je betaalt) − (wat het kost).\n\n**Voorbeeld**: een ijsje kost € 1,80. Je betaalt met € 5. Wisselgeld?\n• €5,00 − €1,80 = **€3,20**.\n\n**Cito-truc — terug-tellen**:\nJe kunt ook **vooruit tellen** vanaf de prijs.\n• €1,80 → €0,20 erbij → €2,00 *(20 cent)*\n• €2,00 → €3 erbij → €5,00 *(3 euro)*\n• Totaal terug: **€3 + €0,20 = €3,20**.\n\n**Voorbeeld 2**: 3 spullen van € 2,75 betaalt met biljet van € 10:\n• 3 × €2,75 = €8,25.\n• €10 − €8,25 = **€1,75 wisselgeld**.\n\n**Cito-tip**:\nReken altijd met de **gevolgde cijfers** *(een biljet van 5,00 lees je als € 5)*. Schrijf netjes op.",
    checks: [
      {
        q: "Een tas kost **€ 24,50**. Je betaalt met **€ 50**. Wisselgeld?",
        options: ["€ 25,50","€ 24,50","€ 26,50","€ 35,50"],
        answer: 0,
        wrongHints: [null,"Dat is de prijs — je hebt aftrekking nodig.","Te veel — heb je 50 wel meegenomen?","Veel te veel — controleer met schatting."],
        uitlegPad: {
          stappen: [
            { titel: "Wisselgeld = betaald − prijs", tekst: "€50 − €24,50 = €25,50. Vooruit-tellen: van €24,50 → €25 = €0,50 erbij. Van €25 → €50 = €25 erbij. Totaal €25,50." },
          ],
          woorden: [{ woord: "wisselgeld", uitleg: "Wat je TERUGKRIJGT als je meer betaalt dan de prijs." }],
          theorie: "Wisselgeld = betaald − prijs. Vooruit-tellen vanaf prijs is vaak sneller dan cijferen.",
          voorbeelden: [{ type: "wisselgeld", tekst: "Prijs €24,50, biljet €50: 50−24,50 = 25,50. Of vooruit-tellen vanaf 24,50." }],
          basiskennis: [{ onderwerp: "Niet de prijs!", uitleg: "Verwar wisselgeld niet met de prijs zelf." }],
          niveaus: { basis: "€50 − €24,50 = €25,50. A.", simpeler: "Vooruit-tellen: €24,50 → €25 = +€0,50. €25 → €50 = +€25. Totaal wisselgeld €25,50. = A.", nogSimpeler: "€25,50 = A." },
        },
      },
      {
        q: "**3 koeken van € 1,25** met een **€ 5-biljet**. Wisselgeld?",
        options: ["€ 1,25","€ 0,75","€ 2,25","€ 3,75"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer: 3 × €1,25 = €3,75. €5 − €3,75 = ?","Te veel — controleer som van koeken.","Dat is wat de koeken kosten, niet wisselgeld."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: kosten", tekst: "3 × €1,25 = €3,75 (totaal koeken)." },
            { titel: "Stap 2: wisselgeld", tekst: "€5 − €3,75 = €1,25 wisselgeld." },
          ],
          woorden: [{ woord: "totaalkosten", uitleg: "Aantal × prijs per stuk = totaal." }],
          theorie: "Bij 'meerdere stuks + wisselgeld' = 2 stappen: eerst kosten berekenen, dan aftrekken.",
          voorbeelden: [{ type: "2-stappen", tekst: "3 × €1,25 = €3,75. €5 − €3,75 = €1,25 wisselgeld." }],
          basiskennis: [{ onderwerp: "Niet 1 stap", uitleg: "Vergeet niet de aantallen mee te nemen." }],
          niveaus: { basis: "3 × €1,25 = €3,75. €5 − €3,75 = €1,25. A.", simpeler: "Eerst kosten: 3 koeken × €1,25 = €3,75. Dan: €5 − €3,75 = €1,25. = A.", nogSimpeler: "€1,25 = A." },
        },
      },
      {
        q: "Een speelgoed van **€ 17,40** met **2 × € 10-biljetten**. Wisselgeld?",
        options: ["€ 2,60","€ 2,40","€ 3,60","€ 7,60"],
        answer: 0,
        wrongHints: [null,"Te weinig — vooruit-tellen: van 17,40 naar 18 = 0,60. Van 18 naar 20 = 2,00. Totaal 2,60.","Te veel — fout met cent-deel.","Te veel — heb je 1 biljet ipv 2 gerekend?"],
        uitlegPad: {
          stappen: [
            { titel: "Betaald", tekst: "2 × €10 = €20." },
            { titel: "Wisselgeld", tekst: "Vooruit-tellen: 17,40 → 18 = +0,60. 18 → 20 = +2. Totaal €2,60." },
          ],
          woorden: [{ woord: "vooruit-tellen", uitleg: "Vanaf de prijs naar het betaalde bedrag tellen." }],
          theorie: "Wisselgeld via vooruit-tellen werkt vaak snel: van prijs → ronde getal → betaalde bedrag.",
          voorbeelden: [{ type: "vooruit", tekst: "17,40 → 18 (+0,60). 18 → 20 (+2). Totaal: 2,60." }],
          basiskennis: [{ onderwerp: "2 biljetten = €20", uitleg: "Niet 1 biljet! 2×10=20." }],
          niveaus: { basis: "20−17,40=€2,60. A.", simpeler: "2 biljetten van 10 = €20. Wisselgeld vanaf 17,40 → 18 (+0,60) → 20 (+2) = €2,60. = A.", nogSimpeler: "€2,60 = A." },
        },
      },
    ],
  },

  {
    title: "Wat is voordeligst? — vergelijken",
    explanation: "Cito-vragen vragen vaak: **welke aanbieding is goedkoper per stuk**?\n\n**Voorbeeld**: chips!\n• A: een zak van **200 g** voor **€ 1,80**.\n• B: een zak van **500 g** voor **€ 4,00**.\n\nWelke is **voordeliger per gram**?\n\n**Aanpak — prijs per eenheid berekenen**:\n• A: 1,80 ÷ 200 = € 0,009 per gram = **0,9 cent per g**.\n• B: 4,00 ÷ 500 = € 0,008 per gram = **0,8 cent per g**.\n\n**Antwoord**: B is goedkoper per gram.\n\n**Cito-truc — vergelijk per 100 g**:\nMakkelijker zonder kommagetallen:\n• A: 200 g voor € 1,80 → 100 g = € 0,90.\n• B: 500 g voor € 4,00 → 100 g = € 0,80.\n• Per 100 g: B is goedkoper.\n\n**Voorbeeld 2 — limonade**:\n• A: 1 L = € 2,40.\n• B: 1,5 L = € 3,30.\n\nPer L:\n• A: € 2,40.\n• B: 3,30 ÷ 1,5 = € 2,20.\n• B is voordeliger.\n\n**Cito-tip**:\nReken altijd **per zelfde eenheid** *(per 100 g, per liter, per stuk)*. Anders vergelijk je appels met peren.",
    checks: [
      {
        q: "Pak A: **6 koekjes voor € 1,20**. Pak B: **10 koekjes voor € 2,40**. Welke is **goedkoper per koekje**?",
        options: ["A","B","Hetzelfde","Niet te zeggen"],
        answer: 0,
        wrongHints: [null,"Reken: A is € 0,20/koekje. B is € 0,24/koekje.","Niet hetzelfde — reken per koekje.","Wel te zeggen — deel prijs door aantal."],
        uitlegPad: {
          stappen: [
            { titel: "Per koekje", tekst: "A: 1,20÷6 = €0,20/koekje. B: 2,40÷10 = €0,24/koekje. A is goedkoper." },
          ],
          woorden: [{ woord: "per stuk", uitleg: "Prijs gedeeld door aantal = prijs per individueel item." }],
          theorie: "Voordelig vergelijken: deel prijs door aantal. Laagste prijs per stuk = winnaar.",
          voorbeelden: [{ type: "per-stuk", tekst: "A: €0,20/k. B: €0,24/k. A wint." }],
          basiskennis: [{ onderwerp: "Niet de totaalprijs", uitleg: "Hoogste totaalprijs ≠ duurder per stuk. Reken per stuk!" }],
          niveaus: { basis: "A: €0,20. B: €0,24. A wint. A.", simpeler: "Reken per stuk: A €1,20÷6=€0,20. B €2,40÷10=€0,24. A is goedkoper per koekje. = A.", nogSimpeler: "A goedkoper = A." },
        },
      },
      {
        q: "Pak A: **500 g rijst € 1,50**. Pak B: **1 kg rijst € 2,80**. **Voordeligst**?",
        options: ["B","A","Hetzelfde","Niet vergelijkbaar"],
        answer: 0,
        wrongHints: [null,"A: 1,50 / 500 = € 0,30/100g. B: 2,80/1000 = € 0,28/100g. B is iets goedkoper.","Niet hetzelfde — reken per 100 g.","Wel — beide is rijst."],
        uitlegPad: {
          stappen: [
            { titel: "Per 100 g", tekst: "A: 500g €1,50 → 100g = €0,30. B: 1000g €2,80 → 100g = €0,28. B goedkoper." },
          ],
          woorden: [{ woord: "per gewicht", uitleg: "Vergelijk altijd per zelfde eenheid (100g, kg, liter)." }],
          theorie: "Verschillende verpakkingsgrootten? Reken per 100g (of per kg). Ander niet eerlijk vergelijken.",
          voorbeelden: [{ type: "per-100g", tekst: "A €0,30/100g. B €0,28/100g. B 2 cent goedkoper per 100g." }],
          basiskennis: [{ onderwerp: "kg ≠ g", uitleg: "1 kg = 1000 g. Even omrekenen voor je vergelijkt." }],
          niveaus: { basis: "A €0,30/100g. B €0,28/100g. B wint. A.", simpeler: "Per 100g vergelijken. A: 500g voor 1,50 → 100g voor 0,30. B: 1000g voor 2,80 → 100g voor 0,28. B 2 cent goedkoper. = A.", nogSimpeler: "B goedkoper = A." },
        },
      },
      {
        q: "Pak A: **4 yoghurts € 2,00**. Pak B: **6 yoghurts € 2,40**. **Voordeligst per stuk**?",
        options: ["B","A","Hetzelfde","B duurder"],
        answer: 0,
        wrongHints: [null,"A: € 0,50/stuk. B: € 0,40/stuk. B is goedkoper.","Niet hetzelfde — reken per stuk.","Andersom — B is goedkoper."],
        uitlegPad: {
          stappen: [
            { titel: "Per stuk", tekst: "A: 2,00÷4=€0,50. B: 2,40÷6=€0,40. B is €0,10 goedkoper per yoghurt." },
          ],
          woorden: [{ woord: "vergelijken", uitleg: "Reken altijd per zelfde eenheid." }],
          theorie: "Bigger pack ≠ altijd voordeliger — reken NA om te checken.",
          voorbeelden: [{ type: "per-stuk", tekst: "A €0,50/stuk. B €0,40/stuk. B wint." }],
          basiskennis: [{ onderwerp: "Reken altijd na", uitleg: "Niet vertrouwen op intuïtie — reken het uit." }],
          niveaus: { basis: "B €0,40/stuk. A €0,50/stuk. B wint. A.", simpeler: "A: €2 voor 4 = €0,50/stuk. B: €2,40 voor 6 = €0,40/stuk. B is goedkoper. = A (= 'B').", nogSimpeler: "B goedkoper = A." },
        },
      },
    ],
  },

  {
    title: "Cito-eindopdracht — geldsommen mix",
    explanation: "Mix-toets met geldsommen in Cito-stijl. Verschillende vragen — winkel, wisselgeld, vergelijken.\n\nVeel succes!",
    checks: [
      {
        q: "**€ 4,75 + € 2,80** = ?",
        options: ["€ 7,55","€ 7,45","€ 6,55","€ 7,65"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer cent-deel.","Te weinig — euro-deel correct?","Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Optellen", tekst: "Cent: 75+80=155 (€1,55). Euro: 4+2+1=7. Totaal €7,55." }],
          woorden: [{ woord: "geld optellen", uitleg: "Cent + cent, euro + euro. Cent>100 = onthoudje." }],
          theorie: "Schat: €5+€3=€8. Antwoord rond €7,50. €7,55 past.",
          voorbeelden: [{ type: "stap", tekst: "75+80=155 (1,55). 4+2+1=7. €7,55." }],
          basiskennis: [{ onderwerp: "Schat", uitleg: "Schatting helpt om foute antwoorden uit te sluiten." }],
          niveaus: { basis: "€4,75+€2,80=€7,55. A.", simpeler: "Cent: 75+80=155 (€1,55 = 1 euro extra + 55c). Euro 4+2+1=7. €7,55. = A.", nogSimpeler: "€7,55 = A." },
        },
      },
      {
        q: "Een tas van **€ 35**, **15% korting**. Wat **betaal** je?",
        options: ["€ 29,75","€ 30","€ 5,25","€ 31,75"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer korting (15% van 35 = 5,25).","Klopt niet — dat is wat je BESPAART, niet betaalt.","Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Korting berekenen", tekst: "15% van €35 = 35 × 0,15 = €5,25." },
            { titel: "Betaal = prijs − korting", tekst: "35 − 5,25 = €29,75." },
          ],
          woorden: [
            { woord: "korting", uitleg: "Bedrag dat je MINDER hoeft te betalen." },
            { woord: "procent", uitleg: "Per 100. 15% = 15 per 100 = 0,15." },
          ],
          theorie: "Truc: 15% = 10% + 5%. 10% van 35 = 3,50. 5% = 1,75. Samen 5,25. Of: 35×0,15 direct.",
          voorbeelden: [{ type: "korting", tekst: "Tas €35 met 15% korting. Korting €5,25. Betalen €29,75." }],
          basiskennis: [{ onderwerp: "Niet 15", uitleg: "5,25 is de KORTING (wat je bespaart), niet wat je betaalt." }],
          niveaus: { basis: "35−5,25=€29,75. A.", simpeler: "15% korting van €35: bereken 15% (=€5,25). Trek af: 35−5,25=€29,75. = A.", nogSimpeler: "€29,75 = A." },
        },
      },
      {
        q: "Pak A: **3 sokken € 6**. Pak B: **5 sokken € 8**. Per **paar** voordeligst?",
        options: ["B","A","Hetzelfde","Geen verschil"],
        answer: 0,
        wrongHints: [null,"A: € 2/paar. B: € 1,60/paar. B is goedkoper.","Niet hetzelfde.","Wel — reken per stuk."],
        uitlegPad: {
          stappen: [{ titel: "Per paar", tekst: "A: 6÷3=€2/paar. B: 8÷5=€1,60/paar. B is goedkoper." }],
          woorden: [{ woord: "per paar", uitleg: "Prijs gedeeld door aantal paren." }],
          theorie: "Reken per zelfde eenheid (paar). Laagste prijs/paar wint.",
          voorbeelden: [{ type: "per-paar", tekst: "A €2/paar. B €1,60/paar. Verschil €0,40 per paar." }],
          basiskennis: [{ onderwerp: "Niet de totaalprijs", uitleg: "B kost meer (€8 vs €6) maar IS goedkoper per paar." }],
          niveaus: { basis: "B €1,60/paar wint. A.", simpeler: "A: €6÷3=€2/paar. B: €8÷5=€1,60/paar. B is voordeliger. = A (= 'B').", nogSimpeler: "B = A." },
        },
      },
      {
        q: "Tom heeft **€ 25**. Hij koopt boeken van **€ 8,50** + **€ 12,75**. Hoeveel **over**?",
        options: ["€ 3,75","€ 4,75","€ 2,75","€ 21,25"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je beide boeken meegerekend?","Te weinig — controleer som van boeken.","Veel te veel — controleer aftrekking."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: kosten", tekst: "8,50+12,75=€21,25." },
            { titel: "Stap 2: over", tekst: "25−21,25=€3,75." },
          ],
          woorden: [{ woord: "over", uitleg: "Wat je niet uitgeeft = startbedrag − uitgaven." }],
          theorie: "2-stappen-vraag: eerst kosten, dan startbedrag − kosten.",
          voorbeelden: [{ type: "2-stappen", tekst: "€25 budget − €21,25 boeken = €3,75 over." }],
          basiskennis: [{ onderwerp: "Beide boeken", uitleg: "Niet 1 boek vergeten — tel beide op." }],
          niveaus: { basis: "25−21,25=€3,75. A.", simpeler: "Eerst kosten: €8,50+€12,75=€21,25. Dan: €25−€21,25=€3,75. = A.", nogSimpeler: "€3,75 = A." },
        },
      },
      {
        q: "**12 stickers van € 0,15** — totaal?",
        options: ["€ 1,80","€ 1,50","€ 1,20","€ 2,00"],
        answer: 0,
        wrongHints: [null,"Te weinig — 12 × 15 cent = 180 cent.","Veel te weinig.","Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldigen", tekst: "12 × €0,15 = 12 × 15 cent = 180 cent = €1,80." },
          ],
          woorden: [{ woord: "stuks × prijs", uitleg: "Aantal × prijs per stuk = totaal." }],
          theorie: "Tip: reken in cent als prijs <€1. 12×15c=180c=€1,80. Anders met komma rekenen.",
          voorbeelden: [{ type: "stuks", tekst: "12 × 15c = 180c = €1,80. Of 12×0,15=1,80." }],
          basiskennis: [{ onderwerp: "Cent of euro", uitleg: "Beide manieren werken — kies de makkelijkste." }],
          niveaus: { basis: "12×0,15=€1,80. A.", simpeler: "12 stickers × 15 cent = 180 cent = €1,80. = A.", nogSimpeler: "€1,80 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const geldRekenen = {
  id: "geld-rekenen",
  title: "Geld rekenen — Cito groep 5-8",
  emoji: "💶",
  level: "groep5-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen — geld",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "procenten-po", title: "Procenten", niveau: "po-1F" },
  ],
  intro:
    "Geld rekenen voor groep 5-8: euro's en centen, optellen + aftrekken, wisselgeld berekenen, vergelijken (wat is voordeligst). Cito-stijl praktijksommen. ~12 min.",
  triggerKeywords: [
    "geld","euro","cent","wisselgeld","prijs","kosten","betalen","goedkoper",
    "voordeliger","vergelijken","kassabon",
  ],
  chapters,
  steps,
};

export default geldRekenen;
