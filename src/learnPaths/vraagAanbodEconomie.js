// Leerpad: Vraag en aanbod — Economie onderbouw / havo
// 10 stappen in 4 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  vraag: "#42a5f5", aanbod: "#ef5350", evenwicht: "#00c853",
};

const stepEmojis = ["📈", "🛒", "🏭", "⚖️", "💰", "📉", "🌟", "🪙", "🌍", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is economie?", emoji: "💰", from: 0, to: 0 },
  { letter: "B", title: "Vraag en aanbod", emoji: "⚖️", from: 1, to: 4 },
  { letter: "C", title: "Verschuivingen & invloeden", emoji: "📉", from: 5, to: 7 },
  { letter: "D", title: "Toepassen + eindopdracht", emoji: "🏆", from: 8, to: 9 },
];

const steps = [
  {
    title: "Wat is economie?",
    explanation: "**Economie** gaat over **schaarste**: er is altijd meer gewenst dan beschikbaar. Mensen, bedrijven en overheden moeten dus **kiezen** wat ze met hun beperkte middelen (geld, tijd, grondstoffen) doen.\n\n**Drie hoofdvragen** in elke economie:\n1. **Wat** wordt geproduceerd?\n2. **Hoe** wordt het gemaakt?\n3. **Voor wie** is het bedoeld?\n\n**Twee niveaus**:\n• **Micro-economie**: keuzes van individuen en bedrijven (waarom kies je merk A?).\n• **Macro-economie**: het hele land (werkloosheid, inflatie, BBP).\n\n**Markt**: een plek (fysiek of online) waar **vragers** (kopers) en **aanbieders** (verkopers) elkaar ontmoeten en de prijs tot stand komt.\n\nIn dit leerpad kijken we vooral naar **één markt** — bijvoorbeeld de markt voor sneakers — en hoe de prijs daarop ontstaat.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">economie = kiezen bij schaarste</text>
<rect x="40" y="50" width="220" height="40" rx="8" fill="${COLORS.paper}" stroke="${COLORS.text}" stroke-width="1"/>
<text x="150" y="75" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">behoeften > middelen</text>
<text x="60" y="120" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">VRAGER</text>
<text x="60" y="138" fill="${COLORS.text}" font-size="10" font-family="Arial">koper / consument</text>
<text x="180" y="120" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">AANBIEDER</text>
<text x="180" y="138" fill="${COLORS.text}" font-size="10" font-family="Arial">verkoper / bedrijf</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.evenwicht}" font-size="11" font-family="Arial">samen op de markt</text>
</svg>`,
    checks: [
      {
        q: "Wat is **schaarste** in de economie?",
        options: [
          "Behoeften zijn groter dan beschikbare middelen",
          "Iets is op",
          "Er is genoeg voor iedereen",
          "Iets duur is",
        ],
        answer: 0,
        wrongHints: [null, "Niet 'op' — er is iets, maar niet genoeg voor alle wensen.", "Tegenovergesteld.", "Duur is een gevolg, niet de definitie."],
      },
      {
        q: "Wie is de **vrager** op een markt?",
        options: ["De koper / consument", "De producent", "De overheid", "De bank"],
        answer: 0,
        wrongHints: [null, "Producent = aanbieder.", "Overheid kan vrager zijn (van beton voor wegen) maar de standaard rol is 'koper'.", "Bank is niet automatisch de vrager."],
      },
    ],
  },
  {
    title: "De vraag — hoeveel willen kopers?",
    explanation: "De **vraag** is hoeveel een product wordt gewenst bij verschillende prijzen.\n\n**Wet van de vraag**: \n> Hoe **hoger** de prijs, hoe **minder** mensen willen kopen.\n> Hoe **lager** de prijs, hoe **meer** mensen willen kopen.\n\n**Voorbeeld**: appels.\n• Prijs €3 per kg → vraag = 100 kg per dag.\n• Prijs €2 per kg → vraag = 200 kg per dag.\n• Prijs €1 per kg → vraag = 400 kg per dag.\n\nIn een grafiek loopt de **vraaglijn** schuin **naar rechts beneden** (hogere prijs op de Y-as, hoeveelheid op de X-as):\n\n**Waarom?**\n• Bij hogere prijs kan je niet alles betalen → mensen kiezen alternatieven.\n• Bij lagere prijs kun je meer kopen voor hetzelfde geld.",
    svg: `<svg viewBox="0 0 300 180">
<line x1="40" y1="20" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="280" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="20" y="90" fill="${COLORS.text}" font-size="11" font-family="Arial">prijs</text>
<text x="260" y="175" fill="${COLORS.text}" font-size="11" font-family="Arial">aantal</text>
<line x1="60" y1="40" x2="270" y2="155" stroke="${COLORS.vraag}" stroke-width="3"/>
<text x="200" y="50" fill="${COLORS.vraag}" font-size="12" font-family="Arial" font-weight="bold">VRAAG (V)</text>
<text x="65" y="35" fill="${COLORS.text}" font-size="10" font-family="Arial">hoog</text>
<text x="240" y="155" fill="${COLORS.text}" font-size="10" font-family="Arial">veel</text>
</svg>`,
    checks: [
      {
        q: "Wat zegt de wet van de vraag?",
        options: [
          "Hoe hoger de prijs, hoe lager de gevraagde hoeveelheid",
          "Hoe hoger de prijs, hoe meer wordt gevraagd",
          "Vraag is constant",
          "Vraag heeft niets met prijs te maken",
        ],
        answer: 0,
        wrongHints: [null, "Andersom — bij hoge prijs willen mensen minder kopen.", "Vraag verandert juist met de prijs.", "Prijs is het belangrijkste."],
      },
      {
        q: "Wat doet de vraaglijn in een grafiek (prijs op Y, aantal op X)?",
        options: [
          "Loopt schuin naar rechts beneden",
          "Loopt schuin naar rechts boven",
          "Is horizontaal",
          "Is verticaal",
        ],
        answer: 0,
        wrongHints: [null, "Dat is de aanbodlijn.", "Een horizontale lijn = prijs onafhankelijk van vraag — niet realistisch.", "Verticaal = vraag onafhankelijk van prijs — ook niet."],
      },
    ],
  },
  {
    title: "Het aanbod — hoeveel willen verkopers leveren?",
    explanation: "**Aanbod** is hoeveel verkopers/producenten willen leveren bij verschillende prijzen.\n\n**Wet van het aanbod**: \n> Hoe **hoger** de prijs, hoe **meer** verkopers willen leveren.\n> Hoe **lager** de prijs, hoe **minder**.\n\n**Voorbeeld**: appels.\n• Prijs €1 per kg → boer wil 50 kg per dag verkopen.\n• Prijs €2 per kg → boer wil 200 kg per dag.\n• Prijs €3 per kg → boer wil 350 kg.\n\nIn een grafiek loopt de **aanbodlijn** schuin **naar rechts boven**:\n\n**Waarom?**\n• Bij hogere prijs is het winstgevender → meer producenten willen mee doen.\n• Bij hogere prijs kunnen producenten ook duurdere productiemethoden gebruiken.\n• Bij lage prijs stoppen veel producenten met verkopen — niet rendabel.",
    svg: `<svg viewBox="0 0 300 180">
<line x1="40" y1="20" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="280" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="20" y="90" fill="${COLORS.text}" font-size="11" font-family="Arial">prijs</text>
<text x="260" y="175" fill="${COLORS.text}" font-size="11" font-family="Arial">aantal</text>
<line x1="50" y1="155" x2="270" y2="40" stroke="${COLORS.aanbod}" stroke-width="3"/>
<text x="180" y="55" fill="${COLORS.aanbod}" font-size="12" font-family="Arial" font-weight="bold">AANBOD (A)</text>
</svg>`,
    checks: [
      {
        q: "Wat doet de aanbodlijn?",
        options: [
          "Loopt schuin naar rechts boven",
          "Loopt schuin naar rechts beneden",
          "Is horizontaal",
          "Verandert nooit",
        ],
        answer: 0,
        wrongHints: [null, "Dat is de vraaglijn.", "Niet horizontaal — aanbod hangt af van prijs.", "Aanbod kan zeker veranderen."],
      },
      {
        q: "Waarom willen verkopers méér leveren bij hogere prijzen?",
        options: [
          "Het is winstgevender",
          "Ze willen mensen helpen",
          "Hun productiekosten dalen",
          "De vraag stijgt",
        ],
        answer: 0,
        wrongHints: [null, "Goede actie, maar niet de hoofdreden.", "Productiekosten zijn vaak vrij stabiel; het gaat om winst.", "Aanbod hangt af van prijs, niet van vraag."],
      },
    ],
  },
  {
    title: "Marktevenwicht — waar vraag en aanbod elkaar raken",
    explanation: "Op een markt komt **vanzelf een evenwicht** tot stand: het punt waar **vraag = aanbod**.\n\n**Marktevenwicht**:\n• De **evenwichtsprijs** is de prijs waarbij precies even veel wordt gevraagd als aangeboden.\n• De **evenwichtshoeveelheid** is hoeveel er bij die prijs wordt verhandeld.\n\nIn de grafiek: het **kruispunt** van de vraaglijn (V) en aanbodlijn (A).\n\n**Wat als de prijs te hoog is?**\n• Meer aanbod dan vraag → **overschot** → verkopers moeten prijs verlagen.\n\n**Wat als de prijs te laag is?**\n• Meer vraag dan aanbod → **tekort** → kopers willen meer betalen → prijs stijgt.\n\nDe markt 'zoekt' dus naar de evenwichtsprijs — dat is het mooie van het systeem.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="20" x2="40" y2="180" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="180" x2="280" y2="180" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="60" y1="40" x2="270" y2="170" stroke="${COLORS.vraag}" stroke-width="3"/>
<line x1="50" y1="170" x2="270" y2="40" stroke="${COLORS.aanbod}" stroke-width="3"/>
<circle cx="160" cy="105" r="6" fill="${COLORS.evenwicht}" stroke="#fff" stroke-width="2"/>
<line x1="160" y1="105" x2="40" y2="105" stroke="${COLORS.evenwicht}" stroke-width="1" stroke-dasharray="3"/>
<line x1="160" y1="105" x2="160" y2="180" stroke="${COLORS.evenwicht}" stroke-width="1" stroke-dasharray="3"/>
<text x="20" y="100" fill="${COLORS.evenwicht}" font-size="10" font-family="Arial" font-weight="bold">P*</text>
<text x="155" y="195" fill="${COLORS.evenwicht}" font-size="10" font-family="Arial" font-weight="bold">Q*</text>
<text x="200" y="55" fill="${COLORS.aanbod}" font-size="10" font-family="Arial">A</text>
<text x="220" y="160" fill="${COLORS.vraag}" font-size="10" font-family="Arial">V</text>
</svg>`,
    checks: [
      {
        q: "Wat is **evenwichtsprijs**?",
        options: [
          "De prijs waarbij vraag = aanbod",
          "De hoogste prijs ooit",
          "De gemiddelde prijs",
          "De prijs van vorige week",
        ],
        answer: 0,
        wrongHints: [null, "Hoogste prijs ooit heeft niets met evenwicht te maken.", "Een gemiddelde geeft geen evenwicht.", "Tijd doet er niet toe in deze definitie."],
      },
      {
        q: "Wat gebeurt er bij een prijs **boven** de evenwichtsprijs?",
        options: [
          "Overschot — verkopers verlagen prijs",
          "Tekort",
          "De prijs stijgt verder",
          "Niets",
        ],
        answer: 0,
        wrongHints: [null, "Bij hogere prijs is aanbod groot, vraag klein → overschot, geen tekort.", "Andersom — overschot duwt prijs juist terug.", "Markt zoekt evenwicht — er gebeurt wel wat."],
      },
    ],
  },

  // C
  {
    title: "Vraagverschuivingen — wat verandert vraag?",
    explanation: "Niet alleen de prijs verandert de vraag. Ook andere factoren (de **vraag-niet-prijsfactoren**):\n\n• **Inkomen**: meer inkomen → meer vraag naar normale goederen, minder naar inferieure goederen (huismerk).\n• **Smaak / mode**: trends — als iets populair wordt, stijgt de vraag.\n• **Prijs van andere producten**:\n  - **Substituten** (vervangers): prijs koffie omhoog → meer vraag naar thee.\n  - **Complementen** (samen gebruikt): prijs auto omhoog → minder vraag naar benzine.\n• **Aantal vragers**: meer mensen → meer totale vraag (bv. groei bevolking).\n• **Verwachtingen**: 'morgen wordt het duurder' → mensen kopen vandaag al.\n\n**Wat doet de vraaglijn?** \nBij verandering van een niet-prijsfactor verschuift de **hele lijn** naar links (minder vraag) of rechts (meer vraag). Bij een prijswijziging gaan we over de **bestaande** lijn.",
    svg: `<svg viewBox="0 0 300 180">
<line x1="40" y1="20" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="280" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="60" y1="50" x2="220" y2="155" stroke="${COLORS.vraag}" stroke-width="3" opacity="0.6"/>
<line x1="100" y1="50" x2="270" y2="155" stroke="${COLORS.vraag}" stroke-width="3"/>
<text x="180" y="40" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">V₁ → V₂</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">vraagverschuiving (rechts = meer)</text>
</svg>`,
    checks: [
      {
        q: "Smartphone wordt heel populair. Wat gebeurt met de vraag?",
        options: [
          "Vraaglijn schuift naar rechts (meer vraag)",
          "Vraaglijn schuift naar links",
          "Niets verandert",
          "Het is een aanbodverschuiving",
        ],
        answer: 0,
        wrongHints: [null, "Links = minder vraag — onlogisch bij populair.", "Smaak/mode is duidelijk een vraagfactor.", "Smaak hoort bij vraag, niet aanbod."],
      },
      {
        q: "Prijs van koffie stijgt. Wat gebeurt met de vraag naar **thee**?",
        options: [
          "Vraaglijn naar thee schuift naar rechts (meer vraag)",
          "Vraaglijn naar thee schuift naar links",
          "Niets — het zijn aparte producten",
          "Prijs thee stijgt automatisch ook",
        ],
        answer: 0,
        wrongHints: [null, "Substituut: koffie duur → thee aantrekkelijker, dus méér thee.", "Het zijn substituten — wel verbonden.", "Het effect zit in de vraag, niet automatisch in prijs."],
      },
    ],
  },
  {
    title: "Aanbodverschuivingen — wat verandert het aanbod?",
    explanation: "Ook het aanbod verschuift door **niet-prijsfactoren**:\n\n• **Productiekosten**: gas duurder → energie-intensieve productie wordt duurder → minder aanbod (lijn naar links).\n• **Technologie**: betere robots → goedkoper produceren → meer aanbod.\n• **Aantal aanbieders**: meer concurrenten → meer totaal aanbod.\n• **Belastingen / subsidies**: hogere btw → minder aanbod. Subsidie op zonnepanelen → meer aanbod.\n• **Verwachtingen**: producent verwacht hogere prijzen volgende maand → houdt nu vast → minder aanbod nu.\n• **Natuurlijke factoren**: slecht weer → minder oogst → minder aanbod.\n\n**Voorbeeld**:\n• Tomatenprijs in winter is hoger dan in zomer → in zomer is er meer aanbod (kassen + buitenteelt).\n• 2008 financiële crisis → veel bedrijven failliet → minder aanbod.",
    svg: `<svg viewBox="0 0 300 180">
<line x1="40" y1="20" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="280" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="60" y1="155" x2="220" y2="50" stroke="${COLORS.aanbod}" stroke-width="3" opacity="0.6"/>
<line x1="100" y1="155" x2="270" y2="50" stroke="${COLORS.aanbod}" stroke-width="3"/>
<text x="180" y="40" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">A₁ → A₂</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">aanbodverschuiving</text>
</svg>`,
    checks: [
      {
        q: "Energieprijzen stijgen sterk. Wat gebeurt met aanbod van staal?",
        options: [
          "Aanbodlijn schuift naar links (minder aanbod)",
          "Aanbodlijn schuift naar rechts",
          "Niets",
          "Vraaglijn verandert",
        ],
        answer: 0,
        wrongHints: [null, "Hogere kosten → producent kan minder leveren bij dezelfde prijs.", "Energie is een productiekost.", "Dit gaat over aanbod, niet vraag."],
      },
      {
        q: "Subsidie op zonnepanelen — wat gebeurt met het aanbod?",
        options: [
          "Aanbodlijn naar rechts (meer aanbod)",
          "Aanbodlijn naar links",
          "Niets",
          "Alleen vraagverandering",
        ],
        answer: 0,
        wrongHints: [null, "Subsidie verlaagt kosten → meer aanbod, niet minder.", "Subsidie maakt produceren goedkoper.", "Subsidie aan producent = aanbodfactor."],
      },
    ],
  },
  {
    title: "Hoe veranderen verschuivingen het evenwicht?",
    explanation: "Als V of A verschuift, ontstaat een **nieuw marktevenwicht** met andere prijs en hoeveelheid.\n\n**Vier basis-effecten**:\n\n**1. Vraag stijgt** (V naar rechts):\n→ Nieuwe evenwichtsprijs **hoger**, hoeveelheid **groter**. *(Bijv. mode-trend)*\n\n**2. Vraag daalt** (V naar links):\n→ Nieuwe prijs **lager**, hoeveelheid **kleiner**. *(Iets uit de mode)*\n\n**3. Aanbod stijgt** (A naar rechts):\n→ Nieuwe prijs **lager**, hoeveelheid **groter**. *(Nieuwe technologie maakt productie goedkoper)*\n\n**4. Aanbod daalt** (A naar links):\n→ Nieuwe prijs **hoger**, hoeveelheid **kleiner**. *(Slechte oogst, hogere kosten)*\n\n**Onthoud**: een vraagverschuiving zet prijs en hoeveelheid in **dezelfde** richting. Een aanbodverschuiving zet ze in **tegengestelde** richting.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="20" x2="40" y2="180" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="180" x2="280" y2="180" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="60" y1="40" x2="270" y2="170" stroke="${COLORS.vraag}" stroke-width="2.5"/>
<line x1="50" y1="170" x2="270" y2="40" stroke="${COLORS.aanbod}" stroke-width="2.5"/>
<line x1="100" y1="40" x2="280" y2="170" stroke="${COLORS.vraag}" stroke-width="2.5" opacity="0.5"/>
<circle cx="160" cy="105" r="5" fill="${COLORS.evenwicht}" opacity="0.5"/>
<circle cx="195" cy="92" r="5" fill="${COLORS.evenwicht}" stroke="#fff" stroke-width="2"/>
<text x="220" y="195" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">V↑ → P↑ Q↑</text>
</svg>`,
    checks: [
      {
        q: "Vraag stijgt. Wat gebeurt met evenwichtsprijs en -hoeveelheid?",
        options: [
          "Beide stijgen",
          "Beide dalen",
          "Prijs stijgt, hoeveelheid daalt",
          "Prijs daalt, hoeveelheid stijgt",
        ],
        answer: 0,
        wrongHints: [null, "Vraagverschuiving zet prijs en hoeveelheid in dezelfde richting.", "Dat is bij aanbodverschuiving naar links.", "Dat is bij aanbodverschuiving naar rechts."],
      },
      {
        q: "Aanbod stijgt (technologie). Wat gebeurt?",
        options: [
          "Prijs daalt, hoeveelheid stijgt",
          "Beide stijgen",
          "Beide dalen",
          "Prijs stijgt, hoeveelheid daalt",
        ],
        answer: 0,
        wrongHints: [null, "Aanbodverschuiving = tegengestelde richting (P en Q).", "Dat is bij aanbod naar links.", "Dat is bij vraag naar rechts."],
      },
    ],
  },

  // D
  {
    title: "Toepassen — kortingen en marktwerking",
    explanation: "Praktische voorbeelden van vraag-en-aanbod in actie:\n\n**1. Uitverkoop / sale**\n• Winkelier zet prijs lager → meer mensen kopen → voorraad raakt op.\n• Mechanisme: prijs daalt → vraag stijgt langs vraaglijn.\n\n**2. Schaarste tijdens crisis**\n• Plotseling tekort (bv. mondkapjes 2020) → prijs stijgt enorm.\n• Mechanisme: aanbod daalt sterk → nieuwe evenwichtsprijs is hoger.\n\n**3. Seizoensproducten**\n• Aardbeien in juni: groot aanbod → lage prijs.\n• Aardbeien in januari: klein aanbod (kas, import) → hoge prijs.\n\n**4. Treinkaartjes spits / dal**\n• Spits: veel vraag → hoge prijs of geen korting.\n• Dal: weinig vraag → korting (NS Dal Voordeel) om vraag te stimuleren.\n\n**5. Concertkaartjes**\n• Beperkt aanbod (1 stadion). Veel vraag (Taylor Swift) → prijs schiet omhoog. Doorverkoop.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">vraag/aanbod overal</text>
<text x="20" y="52" fill="${COLORS.text}" font-size="11" font-family="Arial">• sale = prijs ↓ → vraag ↑</text>
<text x="20" y="72" fill="${COLORS.text}" font-size="11" font-family="Arial">• schaarste = aanbod ↓ → prijs ↑</text>
<text x="20" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">• seizoen = aanbod schommelt</text>
<text x="20" y="112" fill="${COLORS.text}" font-size="11" font-family="Arial">• spits/dal = vraag schommelt</text>
<text x="20" y="132" fill="${COLORS.text}" font-size="11" font-family="Arial">• beperkt aanbod = hoge prijs</text>
</svg>`,
    checks: [
      {
        q: "Aardbeien zijn in januari duurder dan in juni. Waardoor?",
        options: [
          "In januari is het aanbod kleiner (geen oogst)",
          "Mensen willen ze minder graag",
          "Belasting is hoger in januari",
          "Aardbeien houden niet van zon",
        ],
        answer: 0,
        wrongHints: [null, "Vraag is meestal best stabiel — aanbod schommelt seizoensgewijs.", "Niet seizoensgebonden zo.", "Niet de hoofdreden."],
      },
      {
        q: "Concertkaartjes voor Taylor Swift zijn duur. Waarom?",
        options: [
          "Beperkt aanbod, hoge vraag → hoge evenwichtsprijs",
          "Belasting op kaartjes",
          "Iedereen koopt extra",
          "De zaal is gratis",
        ],
        answer: 0,
        wrongHints: [null, "Belasting is een kleinere factor.", "Vraag wel hoog, maar dat is precies waarom.", "Zaalkosten zijn een aanbodfactor."],
      },
    ],
  },
  {
    title: "Eindopdracht — analyseer de markt",
    explanation: "Tijd om alles toe te passen!\n\n**Snelle samenvatting**:\n\n| Begrip | Wat |\n|---|---|\n| Vraag | Hoeveel kopers willen kopen bij prijs |\n| Aanbod | Hoeveel verkopers willen leveren bij prijs |\n| Wet vraag | Prijs ↑ → vraag ↓ |\n| Wet aanbod | Prijs ↑ → aanbod ↑ |\n| Evenwicht | V = A → marktprijs |\n| Vraag-shift | Inkomen, smaak, prijs ander product |\n| Aanbod-shift | Kosten, technologie, weer, belasting |\n| V↑ | P↑ + Q↑ |\n| A↑ | P↓ + Q↑ |\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="24" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">checklist</text>
<text x="20" y="50" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Wat is V en wat is A?</text>
<text x="20" y="68" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Welke factor verandert?</text>
<text x="20" y="86" fill="${COLORS.text}" font-size="11" font-family="Arial">3. V of A schuift, en welke kant op?</text>
<text x="20" y="104" fill="${COLORS.text}" font-size="11" font-family="Arial">4. Hoe verandert P en Q?</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.evenwicht}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "Door betere oogst is er veel meer aanbod tomaten. Wat gebeurt er?",
        options: [
          "Prijs daalt, hoeveelheid stijgt",
          "Prijs stijgt, hoeveelheid daalt",
          "Beide dalen",
          "Beide stijgen",
        ],
        answer: 0,
        wrongHints: [null, "Aanbod ↑ = prijs ↓ + Q ↑.", "Dat zou bij vraag ↑ kunnen.", "Aanbod ↑ → meer Q, niet minder."],
      },
      {
        q: "Iedereen wil opeens fietsen kopen. Wat gebeurt er bij gelijk aanbod?",
        options: [
          "Prijs en hoeveelheid stijgen",
          "Beide dalen",
          "Niets",
          "Prijs daalt",
        ],
        answer: 0,
        wrongHints: [null, "Vraag ↑ = P ↑ + Q ↑.", "Markt verandert wel.", "Hogere vraag = hogere prijs, niet lagere."],
      },
      {
        q: "Wat is een **substituut** van koffie?",
        options: ["Thee", "Suiker", "Koffiebeker", "Espressomachine"],
        answer: 0,
        wrongHints: [null, "Suiker is complement (samen gebruikt).", "Beker is complement.", "Espressomachine is complement."],
      },
      {
        q: "Wat zegt de wet van het aanbod?",
        options: [
          "Hoe hoger de prijs, hoe meer aanbod",
          "Aanbod is altijd gelijk",
          "Hoe lager de prijs, hoe meer aanbod",
          "Aanbod hangt niet van prijs af",
        ],
        answer: 0,
        wrongHints: [null, "Aanbod schommelt zeker.", "Tegenovergesteld.", "Prijs is dé motivator voor aanbieders."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const vraagAanbodEconomie = {
  id: "vraag-aanbod-economie",
  title: "Vraag en aanbod",
  emoji: "📈",
  level: "klas3-havo4",
  subject: "economie",
  intro:
    "De motor van elke markt: vraag en aanbod. Vraagwet, aanbodwet, marktevenwicht, vraag- en aanbodverschuivingen, met praktische voorbeelden van uitverkoop tot concertkaartjes. Eerste pad economie.",
  triggerKeywords: [
    "vraag", "aanbod", "vraag en aanbod", "marktwerking",
    "evenwicht", "evenwichtsprijs", "marktevenwicht",
    "vraaglijn", "aanbodlijn", "verschuiving",
    "substituut", "complement",
    "schaarste", "markt",
    "economie", "micro-economie",
  ],
  chapters,
  steps,
};

export default vraagAanbodEconomie;
