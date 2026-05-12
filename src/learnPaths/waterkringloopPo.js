// Leerpad: Waterkringloop - groep 6-8 natuur/aardrijkskunde.
// Cito-relevant. 1F. 4 stappen.

const stepEmojis = ["💧", "☁️", "🚿", "🏆"];

const chapters = [
  { letter: "A", title: "De kringloop", emoji: "💧", from: 0, to: 0 },
  { letter: "B", title: "Wolken + neerslag", emoji: "☁️", from: 1, to: 1 },
  { letter: "C", title: "Water in NL + thuis", emoji: "🚿", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Hoe werkt de waterkringloop?",
    explanation:
      "**Waterkringloop** *(water-cyclus)* = water dat **rondgaat** op aarde — verdamping, wolken, regen, terug naar zee.\n\n**Hoeveelheid water op aarde**:\n• **71% van aardoppervlak** = water.\n• Daarvan **97% zout** *(zeeën + oceanen)*.\n• Slechts **3% zoet water**:\n  - 2,5% bevroren *(poolijs + gletsjers)*.\n  - 0,5% vloeibaar *(rivieren, meren, grondwater)*.\n• Totaal blijft **gelijk** — water verdwijnt niet, alleen verplaatst.\n\n**Vier stappen** van de kringloop:\n\n**1. Verdamping (evaporatie)** ☀️\n• Zonnewarmte verandert vloeibaar water in **damp** *(gas)*.\n• Gebeurt vooral op zeeën + oceanen.\n• Ook bij meren, rivieren, planten *(transpiratie)*, jouw zweet.\n• Per dag verdampt **~1200 km³** water wereldwijd.\n\n**2. Condensatie** ☁️\n• Damp stijgt op + koelt af in hogere luchtlagen.\n• Wordt **kleine waterdruppels** *(of ijskristallen)*.\n• Vormt **wolken**.\n• Hoe meer afkoeling, hoe meer condensatie.\n\n**3. Neerslag** 🌧️\n• Wolken te zwaar → druppels vallen.\n• Vormen:\n  - **Regen** *(vloeibaar)*.\n  - **Sneeuw** *(bevroren druppels in vlokken)*.\n  - **Hagel** *(ijsklompjes)*.\n  - **IJzel** *(regen die bevriest bij contact)*.\n  - **Mist** *(wolk op grondniveau)*.\n  - **Dauw** *(condens op koud oppervlak 's nachts)*.\n\n**4. Afstroming + grondwater** 🏞️\n• Water op aarde gaat naar:\n  - **Beken + rivieren** *(stromen naar zee)*.\n  - **Meren** *(blijven liggen)*.\n  - **Grondwater** *(zakt in bodem)*.\n  - **Gletsjers** *(bevriest bovenin bergen)*.\n• Water bereikt uiteindelijk weer **zee**.\n• Cyclus begint opnieuw.\n\n**Versie kort**:\nZee → verdamping → wolken → regen → land → rivier → zee.\n\n**Hoe lang duurt de cyclus?**\n• Een waterdruppel kan **eeuwen** in oceaan, **wereken** in atmosfeer, **dagen** in rivier, **duizenden jaren** in poolijs.\n• Gemiddeld: 1 cyclus = ~8-10 dagen voor wolkenwater.\n\n**Water = altijd zelfde water**:\n• Het water dat een dinosaurus dronk is misschien in jouw glas vandaag.\n• Hele kringloop op aarde = ~4 miljard jaar oud.\n• Geen nieuw water 'gemaakt' — alleen omgezet tussen vormen.\n\n**Cito-feitje**:\nDe **diepste plek in oceaan** *(Marianentrog, Stille Oceaan)* is **11 km diep** — daar zou de **Mount Everest** *(8848 m)* in kunnen + nog 2 km over.",
    checks: [
      {
        q: "Hoeveel **zoet water** op aarde (totaal water)?",
        options: ["~3%", "50%", "97%", "99%"],
        answer: 0,
        wrongHints: [null, "Klopt — meeste is zout.", "Veel meer.", "Zout water.", "Te hoog."],
      },
      {
        q: "Wat is **verdamping**?",
        options: ["Vloeibaar water → damp", "Damp → vloeibaar", "Wolken naar regen", "IJs smelt"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Condensatie.", "Neerslag.", "Smelten."],
      },
      {
        q: "Wat is **condensatie**?",
        options: ["Damp koelt af → wolken", "Regen valt", "Water bevriest", "Verdampen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Neerslag.", "Niet primair.", "Tegenovergesteld."],
      },
      {
        q: "Hoe lang duurt **gemiddeld cyclus** wolkenwater?",
        options: ["~8-10 dagen", "1 uur", "Eeuwen", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te kort.", "Wel sommige plekken, niet gemiddeld.", "Wel."],
      },
    ],
  },
  {
    title: "Wolken + soorten neerslag",
    explanation:
      "**Wolken** = veel kleine waterdruppels + ijskristallen samen.\n\n**Hoe ontstaan wolken?**\n• Warme lucht stijgt *(want lichter)*.\n• Bij hoogte koelt het af.\n• **Waterdamp** in lucht **condenseert** rond stofdeeltjes.\n• Miljarden druppels samen = wolk.\n\n**Hoeveel weegt een wolk?**\n• Een gemiddelde cumulus-wolk weegt ~500 ton *(zo zwaar als 100 olifanten)*!\n• Druppels heel klein dus blijven zweven.\n\n**Soorten wolken** *(op basis van hoogte + vorm)*:\n\n**Hoge wolken** *(boven 5 km)*:\n• **Cirrus** *(veerwolken)*: dun, wit, sliertvormig.\n• **Cirrocumulus**: kleine schaapjes.\n• Bestaan vaak uit ijskristallen.\n\n**Middelhoge wolken** *(2-5 km)*:\n• **Altocumulus**: grote witte schapen.\n• **Altostratus**: grijze laag, zon zichtbaar maar wazig.\n\n**Lage wolken** *(onder 2 km)*:\n• **Stratus**: lage grijze laag *(soort mist hoger)*.\n• **Cumulus**: grote witte bolwolken *(zomerse stapelwolk)*.\n• **Stratocumulus**: groot stukken bewolking.\n\n**Verticaal-uitgebreid**:\n• **Cumulonimbus**: enorme stapelwolken *(onweerswolk)*. Kan **15 km hoog** worden.\n• Brengt regen, hagel, onweer, soms tornado.\n\n**Voorspellen weer**:\n• Stapelwolken *(cumulonimbus)* → bui komt.\n• Sluierwolken *(cirrus)* → vaak goed weer.\n• Lage grijze laag *(stratus)* → bewolkt + miezerige regen.\n\n**Soorten neerslag** 🌧️:\n\n**1. Regen**:\n• Druppels groter dan 0,5 mm.\n• Bij temperatuur boven 0°C.\n• Per jaar in NL: ~850 mm (= 850 L/m²).\n\n**2. Motregen / miezer**:\n• Hele kleine druppels *(<0,5 mm)*.\n• Hangt in lucht.\n\n**3. Sneeuw**:\n• IJskristallen in wolk groeien tot vlokken.\n• Bij temperatuur onder 0°C.\n• Elke sneeuwvlok uniek *(6-hoekige structuur)*.\n• 10 cm sneeuw = ~1 cm water.\n\n**4. Hagel**:\n• Druppels gaan op + neer in cumulonimbus → vriezen + groeien.\n• Soms zo groot als knikker of ei.\n• Kan schade doen aan auto's + gewassen.\n\n**5. Ijzel**:\n• Druppels bevriezen bij contact met **koude grond/bomen**.\n• Glad ijslaag.\n• Gevaarlijk verkeer.\n\n**6. Mist + dauw**:\n• **Mist** = wolk op grondniveau, zicht <1 km.\n• **Dauw** = condens 's nachts op gras (koudere oppervlak).\n• **Rijp** = bevroren dauw.\n\n**7. Regenboog** 🌈:\n• Bij regen + zon.\n• Zonlicht breekt in druppel → 7 kleuren *(rood-oranje-geel-groen-blauw-indigo-violet)*.\n• 'Boog' want druppels bollen — kleuren in cirkel.\n• Soms **dubbele regenboog** *(2e flauwer, kleuren omgekeerd)*.\n\n**Cito-feitje**:\nEen **regenboog** zie je alleen wanneer de **zon achter** je staat + regen voor. Bij volle zon kan **dauw**-regenboog op gras ontstaan. Aan einde van regenboog ligt geen pot goud (sprookje) — geen einde, het is een **cirkel**.",
    checks: [
      {
        q: "Welke wolk brengt **onweer**?",
        options: ["Cumulonimbus", "Cirrus", "Stratus", "Altostratus"],
        answer: 0,
        wrongHints: [null, "Klopt — enorme stapelwolk.", "Hoog veer.", "Lage laag.", "Middelhoog."],
      },
      {
        q: "Hoeveel weegt **gemiddelde cumulus-wolk**?",
        options: ["~500 ton", "1 kg", "Geen gewicht", "1 miljoen ton"],
        answer: 0,
        wrongHints: [null, "Klopt — 100 olifanten.", "Te weinig.", "Wel zwaar.", "Te veel."],
      },
      {
        q: "Wat is **ijzel**?",
        options: ["Regen die bevriest bij contact", "Sneeuw", "Hagel", "Mist"],
        answer: 0,
        wrongHints: [null, "Klopt — glad.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Hoeveel **kleuren** in regenboog?",
        options: ["7 (ROYGBIV)", "3", "10", "Oneindig"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Wel onderscheidbaar 7."],
      },
    ],
  },
  {
    title: "Water in Nederland + thuis",
    explanation:
      "**Water in NL** — speciaal hoofdstuk, want NL is een **waterland**.\n\n**NL kenmerken**:\n• Een **kwart van NL** ligt **onder zeeniveau**.\n• Zonder dijken zou groot deel onder water staan.\n• 18% van NL = water.\n• 7000 km dijken + 14.500 km waterwegen.\n\n**Belangrijke rivieren**:\n• **Rijn** *(uit Zwitserland)* → splitst in **Waal, Lek, IJssel** in NL.\n• **Maas** *(uit Frankrijk)*.\n• **Schelde** *(uit België → Westerschelde)*.\n• **IJssel** + **Vecht** + **Eem** *(kleinere)*.\n\n**Meren + zee**:\n• **IJsselmeer** *(vroeger Zuiderzee — afgesloten 1932 door Afsluitdijk)*.\n• **Markermeer** *(deel van IJsselmeer)*.\n• **Noordzee** *(West NL)*.\n• **Waddenzee** *(boven NL — UNESCO)*.\n\n**Polders** 🌾:\n• Land dat **drooggemaakt** is.\n• Vroeger zee of moeras.\n• Bekend: **Flevoland** *(hele provincie was Zuiderzee)*.\n• **Beemster** *(UNESCO, 17e eeuw)*.\n• Werkt met **gemalen + dijken**.\n\n**Watermanagement**:\n• **Rijkswaterstaat**: rijk-niveau *(grote rivieren, snelwegen-bruggen)*.\n• **Waterschappen** *(21 stuks)*: regionaal *(dijken, water-niveau)*.\n• **Deltawerken** *(1953-1997)*: na Watersnoodramp 1953, beschermen tegen storm + zeespiegelstijging.\n\n**Watersnoodramp 1953**:\n• Februari 1953 → **stormvloed** + springtij.\n• Dijken braken in Zeeland + Zuid-Holland.\n• **1836 doden**.\n• Reactie: **Deltawerken** gebouwd.\n• Bekendste: **Oosterscheldekering** *(stormstuw)*.\n\n**Water thuis**:\n\n**Drinkwater**:\n• In NL: **kraanwater = veiligste ter wereld**.\n• Komt uit **grondwater** + duin-water + rivieren *(gezuiverd)*.\n• 10 grote drinkwaterbedrijven *(Waternet, Vitens, Dunea, etc.)*.\n• Kosten: ~€2 per 1000 L.\n• In flesje: 1000x duurder.\n\n**Hoeveel gebruiken we?**\n• Gemiddelde Nederlander: **~130 L per dag**.\n• Daarvan: douchen (39 L), wc (35 L), kleren-wassen (15 L), drinken+koken (5 L), rest.\n• Vergelijking: VS = 300 L/dag.\n\n**Riolering**:\n• Vies water uit huis → riool → **waterzuivering**.\n• Waterzuiveringinstallaties filteren + maken schoon.\n• Daarna terug in rivier.\n\n**Waterbesparing**:\n• Kort douchen *(5 min ipv 15)*: scheelt 70 L.\n• Wc niet als prullenbak.\n• Tuin sproeien 's avonds *(minder verdamping)*.\n• Regenton voor planten.\n• Vaatwasser ipv handwas *(minder water!)*.\n\n**Hard vs zacht water**:\n• In NL: vooral **hard water** *(veel kalk)*.\n• Goed voor botten, maar kalkaanslag op kraan + apparaten.\n• In sommige regio's *(Limburg, kuststreek)* zacht water.\n\n**Watervervuiling**:\n• Plastic in oceanen — **plastic soup**.\n• Medicijnresten in rivieren *(uit urine + afval)*.\n• Microplastics in vis + kraanwater.\n• Probleem: niet alles te filteren.\n\n**Cito-feitje**:\nIn **NL is drinkwater zo schoon** dat er amper bleekmiddel/chloor in zit. In andere landen *(VS, Frankrijk)* wel veel chloor. Daarom proeft NL-kraanwater 'puur'. **Niet** in flessen drinken — slechter voor milieu + duurder.",
    checks: [
      {
        q: "Hoeveel **NL onder zeeniveau**?",
        options: ["~25%", "100%", "0%", "75%"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te veel.", "Wel.", "Te veel."],
      },
      {
        q: "Wanneer **Watersnoodramp**?",
        options: ["1953", "1900", "2000", "1850"],
        answer: 0,
        wrongHints: [null, "Klopt — 1836 doden.", "Te vroeg.", "Veel later.", "Te vroeg."],
      },
      {
        q: "Hoeveel **water per dag** Nederlander?",
        options: ["~130 L", "10 L", "500 L", "1 L"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Veel meer.", "VS-niveau.", "Veel meer."],
      },
      {
        q: "Wat is een **polder**?",
        options: ["Drooggemaakt land", "Berg", "Meer", "Stad"],
        answer: 0,
        wrongHints: [null, "Klopt — bv Flevoland.", "Niet.", "Niet primair.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — water mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Verdamping** = ?", options: ["Vloeibaar → damp", "Damp → vloeibaar", "Bevriezen", "Smelten"], answer: 0, wrongHints: [null, "Klopt.", "Condensatie.", "Niet.", "Niet."] },
      { q: "Welke **wolk** = onweer?", options: ["Cumulonimbus", "Cirrus", "Stratus", "Altocumulus"], answer: 0, wrongHints: [null, "Klopt.", "Hoog.", "Lage laag.", "Middelhoog."] },
      { q: "Hoeveel **zoet water** op aarde?", options: ["~3%", "50%", "100%", "97%"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Wel water maar zout.", "Zout."] },
      { q: "**Polder** = ?", options: ["Drooggemaakt land", "Bergweide", "Meer", "Niet bestaand"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Wel."] },
      { q: "Wanneer **Afsluitdijk**?", options: ["1932 (sloot Zuiderzee af)", "1953", "1900", "Nooit"], answer: 0, wrongHints: [null, "Klopt — werd IJsselmeer.", "Watersnood.", "Te vroeg.", "Wel."] },
      { q: "Hoeveel **kleuren** regenboog?", options: ["7", "3", "10", "1"], answer: 0, wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const waterkringloopPo = {
  id: "waterkringloop-po",
  title: "Waterkringloop (Cito groep 6-8)",
  emoji: "💧",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / aardrijkskunde",
  prerequisites: [
    { id: "klimaten-aardrijkskunde", title: "Klimaten", niveau: "2F" },
  ],
  intro:
    "Waterkringloop voor Cito groep 6-8 — 4 fasen (verdamping/condensatie/neerslag/afstroming) + soorten wolken (cumulus/cirrus/cumulonimbus) + soorten neerslag (regen/sneeuw/hagel/ijzel/mist/dauw/regenboog) + NL-water (Deltawerken/polders/IJsselmeer) + thuis-gebruik (130 L/dag). ~15 min.",
  triggerKeywords: [
    "waterkringloop", "watercyclus",
    "verdamping", "condensatie", "neerslag",
    "regen", "sneeuw", "hagel", "ijzel", "mist", "regenboog",
    "wolken", "cumulus", "cirrus", "cumulonimbus",
    "polder", "dijk", "Deltawerken",
    "Watersnoodramp 1953", "Afsluitdijk",
    "drinkwater", "kraanwater",
  ],
  chapters,
  steps,
};

export default waterkringloopPo;
