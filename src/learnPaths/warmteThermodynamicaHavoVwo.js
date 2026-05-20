// Leerpad: Warmte + Thermodynamica — HAVO/VWO Natuurkunde
// CSE-onderwerp. Temperatuur (K), warmte Q=mcΔT, faseovergangen, ideale gas,
// eerste hoofdwet, warmte-transport, rendement (VWO: Carnot).
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["🌡️", "💧", "💨", "🔥", "🏆"];

const chapters = [
  { letter: "A", title: "Temperatuur + Kelvin", emoji: "🌡️", from: 0, to: 0 },
  { letter: "B", title: "Warmte + faseovergang", emoji: "💧", from: 1, to: 1 },
  { letter: "C", title: "Ideale gas (pV=nRT)", emoji: "💨", from: 2, to: 2 },
  { letter: "D", title: "Eerste hoofdwet + transport", emoji: "🔥", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (incl. Carnot-VWO)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Temperatuur + Kelvin ──────────────────────────────
  {
    title: "Temperatuur — Celsius + Kelvin",
    explanation:
      "**Temperatuur** is een maat voor de **gemiddelde kinetische energie** van deeltjes (atomen, moleculen).\n\n**Schalen**:\n• **Celsius (°C)**: ijkpunten 0°C smelten ijs + 100°C koken water (bij 1 atm).\n• **Kelvin (K)**: absolute schaal. 0 K = absoluut nulpunt = geen beweging.\n• **Conversie**: T(K) = T(°C) + 273,15. Verschillen zijn gelijk: ΔT_K = ΔT_°C.\n\n**Belangrijke punten**:\n• 0 K = −273,15 °C (theoretisch onbereikbaar).\n• 0 °C = 273 K (smeltpunt water).\n• 25 °C = 298 K (kamertemperatuur).\n• 100 °C = 373 K (kookpunt water).\n• 6000 K ≈ zonsoppervlak.\n\n**Waarom Kelvin in natuurkunde?**\nFormules met temperatuur (zoals pV=nRT en stralingswet) gebruiken **alleen Kelvin**. Met °C zou je negatieve getallen krijgen → onzin in formules met factoren-temperatuur.\n\n**Thermische evenwicht**:\n• Twee objecten in contact wisselen energie tot ze dezelfde T hebben.\n• Warmte stroomt **altijd van hoog naar laag T**, nooit andersom (zonder pomp).\n\n**Deeltjes-beeld**:\n• Hoge T → snelle deeltjes → veel botsingen → grotere druk in gas, snellere diffusie.\n• Lage T → trage deeltjes.\n• Bij absoluut nulpunt: minimale energie (kwantum-grond-toestand).\n\n**Cito/CSE-tip**:\n• Verander altijd naar Kelvin VOORDAT je in formules invult.\n• Δ-vraagjes mogen in °C blijven (verschil is gelijk).",
    checks: [
      {
        q: "Conversie: **20 °C** is hoeveel kelvin?",
        options: ["293 K", "−253 K", "20 K", "313 K"],
        answer: 0,
        wrongHints: [null, "Niet — Kelvin is altijd ≥ 0.", "Niet — Celsius ≠ Kelvin directe waarde.", "Niet — controleer optellen 273."],
        uitlegPad: {
          stappen: [{ titel: "T(K) = T(°C) + 273", tekst: "20 + 273 = **293 K**. (Precies 293,15 K met 273,15 maar in CSE meestal 273.)" }],
          niveaus: { basis: "20+273=293 K. A.", simpeler: "Celsius + 273 = Kelvin. A.", nogSimpeler: "293 K = A." },
        },
      },
      {
        q: "Het **absolute nulpunt** ligt op:",
        options: ["−273,15 °C", "0 °C", "−100 °C", "−500 °C"],
        answer: 0,
        wrongHints: [null, "Niet — dat is smelten ijs.", "Niet — wel kouder.", "Onmogelijk — onder absoluut nulpunt bestaat niet."],
        uitlegPad: {
          stappen: [{ titel: "0 K", tekst: "Per definitie 0 K = −273,15 °C. Lager bestaat niet — daar zou kinetische energie negatief moeten zijn, fysisch onmogelijk." }],
          theorie: "In praktijk: laboratoria komen tot ~10⁻⁹ K, maar precies 0 is fundamenteel onbereikbaar (derde hoofdwet thermodynamica).",
          niveaus: { basis: "−273,15 °C. A.", simpeler: "Min 273 graden = nulpunt Kelvin. A.", nogSimpeler: "−273 = A." },
        },
      },
      {
        q: "Welke schaal gebruik je in **natuurkundige formules** (zoals pV=nRT)?",
        options: ["Kelvin (K)", "Celsius (°C)", "Fahrenheit (°F)", "Maakt niet uit"],
        answer: 0,
        wrongHints: [null, "Niet — zou negatieve T geven, onzin in formule.", "Onjuist in EU + wetenschap.", "Maakt wel uit."],
        uitlegPad: {
          stappen: [{ titel: "Absolute schaal vereist", tekst: "Bij ideale gas pV=nRT moet T evenredig met deeltjes-energie zijn — vanaf 0. Met Celsius krijg je negatieve T → negatieve p of V → onzin. Kelvin is de ENIGE schaal die werkt." }],
          niveaus: { basis: "Kelvin. A.", simpeler: "Altijd Kelvin in formules. A.", nogSimpeler: "K = A." },
        },
      },
      {
        q: "**Warmte stroomt** uit zichzelf altijd:",
        options: ["Van hoge T naar lage T", "Van lage T naar hoge T", "Beide kanten op", "Niet — energie blijft staan"],
        answer: 0,
        wrongHints: [null, "Niet — zou koelkast zonder energie kunnen, onmogelijk.", "Niet — netto stroom is eenrichting.", "Niet — wel beweging."],
        uitlegPad: {
          stappen: [{ titel: "Tweede hoofdwet thermodynamica", tekst: "Warm object verliest energie aan koud → tot evenwicht. Andersom kost werk (koelkast, airco), niet vanzelf." }],
          theorie: "Daarom kun je niet zomaar gratis stroom maken uit alleen omgevingsruimte — vereist temperatuurverschil.",
          niveaus: { basis: "Hoog → laag T. A.", simpeler: "Warmte gaat naar koud, niet andersom. A.", nogSimpeler: "Hoog→laag = A." },
        },
      },
      {
        q: "Een glas water in een warme kamer. Wat gebeurt op den duur?",
        options: [
          "Water + kamer komen op zelfde T (thermisch evenwicht)",
          "Water blijft koud, kamer warm",
          "Water wordt steeds kouder",
          "Niets verandert"
        ],
        answer: 0,
        wrongHints: [null, "Niet — energie wisselt continu.", "Niet — water wordt warmer, niet kouder.", "Onjuist — energie stroomt wel."],
        uitlegPad: {
          stappen: [{ titel: "Thermisch evenwicht", tekst: "Warmte stroomt van warmere kamer naar koudere water. Na lange tijd: gelijk. Snelheid van uitwisseling hangt af van isolatie, oppervlak, materiaal." }],
          niveaus: { basis: "Beide dezelfde T. A.", simpeler: "Water wordt warmer tot kamer-T. A.", nogSimpeler: "Evenwicht = A." },
        },
      },
    ],
  },

  // ─── B. Warmte + faseovergang ─────────────────────────────
  {
    title: "Warmte + soortelijke warmte + faseovergangen",
    explanation:
      "**Warmte Q** = energie die stroomt door temperatuurverschil. Eenheid: joule (J). 1 calorie = 4,2 J (oude eenheid in voeding).\n\n**Soortelijke warmte c** (specifieke warmtecapaciteit):\n**Q = m · c · ΔT**\n• m = massa (kg).\n• c = soortelijke warmte (J/(kg·K)) — eigenschap van het materiaal.\n• ΔT = temperatuurverandering (K of °C; verschillen zijn gelijk).\n\n**Waarden c** (te onthouden):\n• **Water: 4180 J/(kg·K)** — heel hoog → water is uitstekende warmtebuffer.\n• IJs: 2100 J/(kg·K).\n• Lucht: ~1000 J/(kg·K).\n• Aluminium: 900.\n• IJzer: 450.\n• Beton: 880.\n\n**Voorbeeld**: 1 kg water 1 °C opwarmen kost 4180 J. 1 kg ijzer slechts 450 J — daarom voelt ijzer 'kouder' (trekt snel warmte uit hand).\n\n**Faseovergangen** (smelten/verdampen/condenseren/stollen):\n• Tijdens faseovergang verandert T **NIET**, ondanks dat je energie blijft toevoegen.\n• Alle energie gaat in **brekken van bindingen** tussen moleculen.\n\n**Smeltwarmte L_s** (kJ/kg):\n• Q = m · L_s.\n• Water: L_s = 334 kJ/kg (ijs → water, allebei 0 °C).\n\n**Verdampingswarmte L_v** (kJ/kg):\n• Q = m · L_v.\n• Water: L_v = 2260 kJ/kg (water → stoom, beide 100 °C).\n• Heel hoog → daarom zweten lichaam-koeling (stof verdampt → onttrekt warmte).\n\n**Energie-berekening met faseovergang**:\nVoorbeeld: 1 kg ijs van −20 °C naar stoom van 120 °C:\n1. Opwarmen ijs −20 → 0 °C: Q₁ = 1 · 2100 · 20 = 42 000 J.\n2. Smelten ijs → water bij 0 °C: Q₂ = 1 · 334 000 = 334 000 J.\n3. Opwarmen water 0 → 100 °C: Q₃ = 1 · 4180 · 100 = 418 000 J.\n4. Verdampen water → stoom bij 100 °C: Q₄ = 1 · 2 260 000 = 2 260 000 J.\n5. Opwarmen stoom 100 → 120 °C: Q₅ = 1 · 2000 · 20 = 40 000 J.\n• Totaal: ~3 094 000 J = 3,1 MJ.\n\n**Verdamping > opwarmen**: stap 4 alleen al is groter dan alle anderen samen!",
    checks: [
      {
        q: "Hoeveel energie nodig om **0,50 kg water** van 20 °C naar 90 °C op te warmen? (c = 4180 J/(kg·K))",
        options: ["~1,5·10⁵ J", "~3·10⁵ J", "~7,5·10⁴ J", "~7·10² J"],
        answer: 0,
        wrongHints: [null, "Te groot — controleer rekensom.", "Te klein — vergeet massa.", "Veel te klein."],
        uitlegPad: {
          stappen: [{ titel: "Q = m·c·ΔT", tekst: "Q = 0,50 · 4180 · (90−20) = 0,50 · 4180 · 70 = **146 300 J ≈ 1,5·10⁵ J**." }],
          niveaus: { basis: "Q≈1,5·10⁵ J. A.", simpeler: "Massa × c × ΔT = ~146 kJ. A.", nogSimpeler: "~1,5·10⁵ = A." },
        },
      },
      {
        q: "Tijdens smelten van ijs bij 0 °C:",
        options: [
          "Temperatuur blijft 0 °C terwijl energie binnenkomt",
          "Temperatuur stijgt gelijkmatig",
          "Temperatuur daalt",
          "Geen energie nodig"
        ],
        answer: 0,
        wrongHints: [null, "Niet — energie gaat in bindingen breken.", "Niet — stijging komt pas na smelten.", "Wel veel energie nodig (smeltwarmte)."],
        uitlegPad: {
          stappen: [{ titel: "Energie gaat in faseverandering", tekst: "Alle binnenkomende warmte breekt waterstof-bruggen in ijs → moleculen 'vrij' in vloeistof. T blijft constant tot al het ijs gesmolten is. Daarna pas opwarmen." }],
          theorie: "Daarom blijft een ijs-water-mengsel exact 0 °C totdat alle ijs op is — handig voor koel-experimenten + reactievaten.",
          niveaus: { basis: "T blijft 0 °C tijdens smelten. A.", simpeler: "Energie gaat in smelten, niet opwarmen. A.", nogSimpeler: "0°C blijft = A." },
        },
      },
      {
        q: "Waarom voelt **metaal kouder** dan hout, ondanks dezelfde T (kamer)?",
        options: [
          "Metaal heeft veel hogere warmtegeleiding + lagere soortelijke warmte",
          "Metaal is kouder dan hout zelf",
          "Hout reflecteert warmte",
          "Optische illusie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — meet maar, beide kamer-T.", "Niet — geen reflectie hier.", "Niet — fysisch verschil."],
        uitlegPad: {
          stappen: [{ titel: "Warmte stroomt snel uit hand", tekst: "Metaal geleidt warmte goed → onttrekt snel warmte aan je hand → koud-gevoel. Hout is een isolator → warmte blijft → voelt minder koud. Lagere c metaal = sneller op-en-neer in T (warmte-flow groot)." }],
          niveaus: { basis: "Geleiding + lage c. A.", simpeler: "Metaal slokt warmte uit hand. A.", nogSimpeler: "Geleiding = A." },
        },
      },
      {
        q: "Verdampingswarmte van water = 2260 kJ/kg. Energie om **0,1 kg** water van 100 °C te verdampen?",
        options: ["226 kJ", "22,6 kJ", "2260 kJ", "10 kJ"],
        answer: 0,
        wrongHints: [null, "Niet — vermenigvuldig massa.", "Niet — dat is voor 1 kg.", "Veel te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Q = m·L_v", tekst: "Q = 0,1 · 2260 = **226 kJ**. Veel meer dan opwarmen ditzelfde water van 0 naar 100 °C (dat was 418 kJ/kg → 41,8 kJ voor 0,1 kg)." }],
          niveaus: { basis: "0,1·2260=226. A.", simpeler: "Massa × verdampingswarmte = 226 kJ. A.", nogSimpeler: "226 = A." },
        },
      },
      {
        q: "Waarom **koelt zweten** je lichaam?",
        options: [
          "Verdamping onttrekt veel energie (verdampingswarmte)",
          "Zout reageert met huid",
          "Zweten verlaagt bloeddruk",
          "Zweten geeft koud gevoel maar koelt niet echt"
        ],
        answer: 0,
        wrongHints: [null, "Niet — zout is bijproduct.", "Niet — bloeddruk niet de fysische reden.", "Onjuist — werkt fysisch."],
        uitlegPad: {
          stappen: [{ titel: "L_v water heel hoog", tekst: "Verdampen van 1 g zweet kost 2260 J — afkomstig uit huid. Daarom koelen we werkelijk af. Hoe meer wind/lage luchtvochtigheid → snellere verdamping → meer koeling. Daarom voelt het zo verkwikkend om handdoek over hoofd te leggen na de sauna." }],
          theorie: "Hond hijgt om zelfde reden — verdamping uit longen/tong.",
          niveaus: { basis: "Verdamping kost veel energie. A.", simpeler: "Zweet verdampt → energie uit huid → koel. A.", nogSimpeler: "L_v = A." },
        },
      },
    ],
  },

  // ─── C. Ideale gas ────────────────────────────────────────
  {
    title: "Ideale gaswet — p · V = n · R · T",
    explanation:
      "**Ideale gaswet**: **p · V = n · R · T**\n• p = druk (Pa = N/m²). 1 atm = 101 325 Pa ≈ 10⁵ Pa.\n• V = volume (m³). 1 L = 10⁻³ m³.\n• n = aantal mol gas.\n• R = gasconstante = 8,314 J/(mol·K).\n• T = absolute T (Kelvin!).\n\n**Vereenvoudiging**: voor 1 mol gas bij **STP (standard temp pressure: 0 °C, 1 atm)**, V = 22,4 L.\n\n**Drie deelwetten** (constante hoeveelheid n):\n• **Boyle-Mariotte** (T constant): p₁·V₁ = p₂·V₂.\n  - Volume halveren → druk verdubbelen (fietsbandje pompen).\n• **Gay-Lussac** (V constant): p₁/T₁ = p₂/T₂.\n  - T verdubbelen → druk verdubbelen.\n• **Charles** (p constant): V₁/T₁ = V₂/T₂.\n  - Warme lucht zet uit → minder dicht → opwaartse stroming → wind.\n\n**Algemene vorm**: p₁·V₁/T₁ = p₂·V₂/T₂.\n\n**Voorbeelden**:\n• Spuitbus in vuur: T stijgt → p stijgt (constante V) → ontploffen.\n• Heteluchtballon: lucht verwarmt → uitzet → lichter → opwaarts.\n• Frisdrank-fles open: hoge p binnen → bij openen p valt → CO₂ uit oplossing → bruisen.\n\n**Microscopisch beeld**:\n• Druk = botsingen-impuls op wand per oppervlak.\n• Hogere T → snellere moleculen → hardere/vaker botsingen → hogere druk.\n• Meer moleculen (n) → meer botsingen → hogere druk.\n\n**Niet-ideaal gas**:\n• Bij hoge p of lage T (dichter bij vloeistof) gaat ideale gaswet mis.\n• Echte gassen hebben intermoleculaire krachten (van der Waals).\n\n**Examen-tip**: bij ALLE p-V-T-berekeningen eerst T omzetten naar K, p in Pa, V in m³.",
    checks: [
      {
        q: "Een gas heeft p=1,0·10⁵ Pa bij V=2,0 L. Bij **isotherm** persen tot V=1,0 L. Nieuwe p?",
        options: ["2,0·10⁵ Pa", "0,5·10⁵ Pa", "1,0·10⁵ Pa", "4,0·10⁵ Pa"],
        answer: 0,
        wrongHints: [null, "Niet — pers samen → p stijgt.", "Niet — p verandert wel.", "Niet — controleer."],
        uitlegPad: {
          stappen: [{ titel: "Boyle: pV=const", tekst: "p₁V₁ = p₂V₂ → 10⁵·2 = p₂·1 → p₂ = **2,0·10⁵ Pa**. Volume gehalveerd → druk verdubbeld." }],
          niveaus: { basis: "p₂=2·10⁵. A.", simpeler: "V/2 → p ×2. A.", nogSimpeler: "2·10⁵ = A." },
        },
      },
      {
        q: "Een **spuitbus in vuur**: waarom ontploft hij?",
        options: [
          "T stijgt → p stijgt (vaste V) → wand begeeft",
          "Verf reageert met vlam",
          "Vacuüm trekt wand naar binnen",
          "Magnetisme van vuur"
        ],
        answer: 0,
        wrongHints: [null, "Niet primair de reden.", "Niet — geen vacuüm.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "Gay-Lussac: p ~ T", tekst: "Bij vaste V: p/T = constant → T verdubbelen → p verdubbelen. Spuitbus binnen 5-10 atm; bij 100 °C extra reeds risico-grens overschreden → explosie." }],
          niveaus: { basis: "T↑ → p↑ → barst. A.", simpeler: "Warm gas wil meer ruimte; bus barst. A.", nogSimpeler: "p↑ = A." },
        },
      },
      {
        q: "Bij STP (0 °C, 1 atm) bevat **1 mol** gas welk volume?",
        options: ["22,4 L", "1,0 L", "100 L", "Afhankelijk van gas"],
        answer: 0,
        wrongHints: [null, "Te klein.", "Te groot.", "Niet — voor ideale gas hetzelfde."],
        uitlegPad: {
          stappen: [{ titel: "Molair volume STP", tekst: "1 mol ideaal gas bij 0 °C + 1 atm vult 22,4 L (= 22,4·10⁻³ m³). Onafhankelijk van wélk gas (zuurstof, stikstof, etc.) — alle gassen hebben dezelfde V_mol bij STP." }],
          theorie: "Bij 25 °C (kamer-T) iets meer: 24,5 L.",
          niveaus: { basis: "22,4 L. A.", simpeler: "1 mol = 22,4 L bij standaard. A.", nogSimpeler: "22,4 = A." },
        },
      },
      {
        q: "Een ballon vol heliumgas op zee-niveau (1 atm). Wat gebeurt als ballon **opstijgt** naar grote hoogte (lagere p)?",
        options: [
          "Volume neemt toe — kan barsten",
          "Volume neemt af",
          "T daalt zonder V-verandering",
          "Massa verdwijnt"
        ],
        answer: 0,
        wrongHints: [null, "Niet — bij lagere buiten-p zet ballon uit.", "Niet — V verandert wel.", "Niet — massa blijft."],
        uitlegPad: {
          stappen: [{ titel: "Boyle: lagere p → grotere V", tekst: "Buitendruk daalt op hoogte → ballon-wand drukt minder hard tegen helium → gas zet uit. Stratosferische ballonnen kunnen oplopen tot 100× origineel volume → wand barst bij grens. Bemande ballonnen hebben een 'klep' om gas af te laten." }],
          theorie: "Ook 'lege' chips-zak bovenop berg lijkt opgeblazen — uitzettende lucht in zak bij lagere buitendruk.",
          niveaus: { basis: "V neemt toe (lagere p). A.", simpeler: "Minder buiten-druk → ballon zet uit. A.", nogSimpeler: "V↑ = A." },
        },
      },
      {
        q: "Een gas T=300 K, p=1·10⁵ Pa, V=10 L. Hoeveel mol?",
        options: ["~0,40 mol", "~4,0 mol", "~40 mol", "~0,04 mol"],
        answer: 0,
        wrongHints: [null, "Niet — controleer eenheden.", "Te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "n = pV/(RT)", tekst: "V = 10 L = 0,010 m³. n = pV/(RT) = (10⁵ · 0,010) / (8,314 · 300) = 1000 / 2494 ≈ **0,40 mol**." },
          ],
          niveaus: { basis: "n≈0,40 mol. A.", simpeler: "pV/(RT) = 0,4 mol. A.", nogSimpeler: "0,4 = A." },
        },
      },
    ],
  },

  // ─── D. Eerste hoofdwet + transport ───────────────────────
  {
    title: "Eerste hoofdwet + warmte-transport",
    explanation:
      "**Eerste hoofdwet thermodynamica** = energie-behoud voor warmte + arbeid:\n**ΔU = Q − W**\n• ΔU = verandering inwendige energie (J).\n• Q = warmte toegevoegd aan systeem (+) of afgegeven (−).\n• W = arbeid die het systeem VERRICHT op omgeving (+) of die OP het systeem wordt gedaan (−).\n\n**Speciale processen**:\n• **Isotherm** (T constant): ΔU = 0 → Q = W. Warmte in = arbeid uit.\n• **Adiabatisch** (Q=0): ΔU = −W. Bij compressie: ΔU > 0 → T stijgt (fietsbandje pompen wordt warm).\n• **Isochoor** (V constant, W=0): ΔU = Q.\n• **Isobaar** (p constant): W = p·ΔV.\n\n**Drie soorten warmte-transport**:\n\n1. **Geleiding (conductie)**:\n• Warmte door rechtstreeks contact via deeltjes-trillingen.\n• Snel in metalen (vrije elektronen).\n• Langzaam in lucht/wol/styropor.\n• Formule (HAVO): Q/t = (λ·A·ΔT) / d, met λ = warmtegeleidingscoëfficient.\n\n2. **Convectie (stroming)**:\n• Warm fluïdum (gas/vloeistof) stijgt, koud daalt → circulatie.\n• Centrale verwarming, weersystemen, kookwater.\n\n3. **Straling (radiatie)**:\n• Elke warm object zendt elektromagnetische straling uit.\n• **Wet van Stefan-Boltzmann**: P = σ·A·T⁴ (vermogen evenredig met T⁴).\n• Zon verwarmt aarde via straling (geen contact, geen lucht ertussen).\n• Hoe hoger T → vooral kortere golflengte (Wien): kamer ~10 μm IR; gloeiend metaal ~1 μm rood; zonnen oppervlak 500 nm geel.\n\n**Isolatie van een huis**:\n• **Dubbel glas**: lucht/argon tussen glasplaten remt geleiding + straling.\n• **Spouwmuur + glaswol**: stilstaande lucht remt convectie.\n• **Reflecterend folie zolder**: weerkaatst stralingsenergie.\n\n**Warmtepomp**:\n• Pakt warmte uit koude buitenlucht (zelfs −10 °C) + dumpt binnen.\n• Vereist arbeid (elektriciteit) maar levert 3-4× meer warmte dan elektrische verwarming.",
    checks: [
      {
        q: "Een gas krijgt **500 J warmte** + doet **200 J arbeid** op omgeving. ΔU?",
        options: ["+300 J", "+700 J", "−300 J", "+100 J"],
        answer: 0,
        wrongHints: [null, "Niet — arbeid uit telt min.", "Niet — gas wint, niet verliest U.", "Niet — controleer formule."],
        uitlegPad: {
          stappen: [{ titel: "ΔU = Q − W", tekst: "ΔU = 500 − 200 = **+300 J**. Gas heeft netto 300 J binnen-energie gewonnen (T stijgt of fasecomponent verandert)." }],
          niveaus: { basis: "500−200=300. A.", simpeler: "Warmte in min arbeid uit = 300 J. A.", nogSimpeler: "+300 = A." },
        },
      },
      {
        q: "Welk transport-type voor zon naar aarde?",
        options: ["Straling — geen medium nodig", "Geleiding", "Convectie", "Alle drie even sterk"],
        answer: 0,
        wrongHints: [null, "Niet — vacuüm tussen.", "Niet — geen lucht-stroming door ruimte.", "Onjuist — alleen straling kan door vacuüm."],
        uitlegPad: {
          stappen: [{ titel: "Vacuüm = alleen EM-straling", tekst: "Tussen zon en aarde is vacuüm. Geleiding + convectie hebben materie nodig. Alleen straling (zichtbaar + IR + UV) plant zich voort door vacuüm." }],
          theorie: "Zonnewind brengt ook materie, maar de warmte is bijna geheel via stralings-energie.",
          niveaus: { basis: "Straling door vacuüm. A.", simpeler: "Vacuüm: alleen EM-golven. A.", nogSimpeler: "Straling = A." },
        },
      },
      {
        q: "Een **fietspomp** wordt warm bij pompen. Welk proces?",
        options: [
          "Adiabatische compressie (W in → ΔU stijgt → T stijgt)",
          "Convectie",
          "Geleiding van warmte uit lucht",
          "Stralingswarmte"
        ],
        answer: 0,
        wrongHints: [null, "Niet — convectie speelt klein.", "Andersom — pomp wordt warm, niet lucht doet warmte erin.", "Niet — niet de hoofdoorzaak."],
        uitlegPad: {
          stappen: [{ titel: "Snelle samenpersing = adiabatisch", tekst: "Bij snel pompen kan warmte niet ontsnappen → Q≈0. Je doet arbeid op gas: ΔU = −W (W<0 want op systeem) → ΔU>0 → T stijgt. Voel je in pomp + ventiel." }],
          theorie: "Andersom: gas uit fles dat snel uitzet (adiabatisch) koelt af — daarom kan een CO₂-fles op je hand 'ijzig' aanvoelen.",
          niveaus: { basis: "Adiabatische compressie. A.", simpeler: "Snel persen → warm zonder warmte-uit. A.", nogSimpeler: "Compressie = A." },
        },
      },
      {
        q: "Voor isolatie: welke materiaal heeft **lage warmtegeleidingscoëfficient**?",
        options: ["Glaswol", "IJzer", "Aluminium", "Koper"],
        answer: 0,
        wrongHints: [null, "Niet — metalen geleiden goed.", "Niet — metaal.", "Niet — koper geleidt zelfs uitstekend."],
        uitlegPad: {
          stappen: [{ titel: "Lage λ = isolator", tekst: "Glaswol bevat veel stilstaande lucht-poriën → lucht is slechte geleider → stoppt warmtetransport. λ ~ 0,04 W/(m·K), vergeleken met koper ~400 W/(m·K) → 10 000× verschil." }],
          theorie: "Daarom zijn winterjassen vol met lucht (donsveren, polyester-vezel): de isolatie zit in de stilstaande lucht, niet in de stof.",
          niveaus: { basis: "Glaswol = isolator. A.", simpeler: "Glaswol heeft lucht in poriën → slecht geleiden. A.", nogSimpeler: "Glaswol = A." },
        },
      },
      {
        q: "Een warmtepomp levert 4 kJ warmte voor elke 1 kJ elektriciteit. Wat is dat?",
        options: [
          "COP = 4 (coefficient of performance)",
          "Rendement van 4%",
          "Vier-stuks-trafo",
          "Vier-kanaals motor"
        ],
        answer: 0,
        wrongHints: [null, "Niet — kop kan >100% (verzamelt warmte uit buitenlucht).", "Onzin term.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "COP = Q_warm / W_elek", tekst: "Warmtepomp doet geen tovenarij: 3 kJ komen uit buiten-omgeving, 1 kJ doet pomp-werk. Totaal 4 kJ binnen. Daarom veel zuiniger dan elektrisch kacheltje (COP ≈ 1)." }],
          basiskennis: [
            { onderwerp: "Tweede hoofdwet niet geschonden", uitleg: "COP > 1 lijkt vrij energie maar is gewoon transport van bestaande omgevingswarmte — werkt alleen omdat buiten warmer is dan absoluut nulpunt." },
          ],
          niveaus: { basis: "COP=4. A.", simpeler: "Warmtepomp factor 4 zuiniger. A.", nogSimpeler: "COP = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — examen-mix + Carnot (VWO)",
    explanation:
      "**Carnot-rendement** (VWO):\nDe **maximaal mogelijke** efficiëntie van een warmtemotor tussen twee reservoirs:\n**η_Carnot = 1 − T_koud / T_warm** (T in Kelvin!)\n\n**Voorbeeld stoommachine**:\n• T_warm = 500 K (verwarmde stoom).\n• T_koud = 300 K (omgeving).\n• η_max = 1 − 300/500 = 0,40 = **40%**.\n• Echte machine: lager door verliezen (wrijving, niet-isotherme stappen).\n\n**Gevolgen**:\n• Hoe groter T-verschil → hoger rendement.\n• T_koud kan nooit 0 K bereiken → η nooit 100%.\n• Daarom thermische centrale rendement ~40%; rest gaat als afval-warmte in koelwater/torens.\n\n**Tweede hoofdwet** (informeel): er bestaat geen perfect rendabele warmtemotor. Een deel van de energie moet altijd als warmte naar het koudere reservoir.\n\n**Entropie S** (VWO): maat voor wanorde. Tweede hoofdwet: totale entropie van geïsoleerd systeem neemt toe (of blijft gelijk in omkeerbaar proces). 'Pijl van de tijd'.\n\n**Toepassingen examen**:\n• Auto-motor + benzine-rendement (~25-30%, vooral wrijving + niet-Carnot).\n• Zonnecollector (~40% naar warm water; PV-paneel ~20%).\n• Klimaat-warmtepomp (geen warmtemotor maar omgekeerd).",
    checks: [
      {
        q: "Een gas wordt **isotherm** uitgezet. ΔU?",
        options: ["0 (isotherm = T constant)", "Maximaal", "−Q", "+W"],
        answer: 0,
        wrongHints: [null, "Niet — isotherm betekent ΔU=0.", "Niet — dat is fout teken.", "Niet — eerste hoofdwet zegt ΔU=Q−W."],
        uitlegPad: {
          stappen: [{ titel: "ΔU hangt alleen af van T", tekst: "Inwendige energie U van ideaal gas is functie van T. ΔT=0 → ΔU=0. Dan Q = W: alle binnenkomende warmte wordt arbeid (gas duwt zuiger weg). Klassieke 'warmte → arbeid'-stap." }],
          niveaus: { basis: "ΔU=0 bij isotherm. A.", simpeler: "Geen T-verandering = geen U-verandering. A.", nogSimpeler: "0 = A." },
        },
      },
      {
        q: "Carnot-rendement tussen 600 K en 300 K?",
        options: ["50%", "100%", "67%", "33%"],
        answer: 0,
        wrongHints: [null, "Onmogelijk — geen reservoir-grens van 0 K.", "Niet — controleer formule.", "Niet — andere richting."],
        uitlegPad: {
          stappen: [{ titel: "η = 1 − T_k/T_w", tekst: "η = 1 − 300/600 = 1 − 0,5 = **0,50 = 50%**. Werkelijke motoren halen lager door wrijving + niet-Carnot-cycli." }],
          niveaus: { basis: "1−300/600=0,5. A.", simpeler: "Helft van energie wordt arbeid. A.", nogSimpeler: "50% = A." },
        },
      },
      {
        q: "Heteluchtballon stijgt op. Onderliggende fysica?",
        options: [
          "Hete lucht heeft lagere dichtheid → opwaartse Archimedes-kracht",
          "Vlam duwt ballon omhoog",
          "Wind blaast ballon omhoog",
          "Anti-zwaartekracht"
        ],
        answer: 0,
        wrongHints: [null, "Niet — vlam levert warmte, niet directe duw.", "Niet — wind beweegt zijwaarts.", "Bestaat niet."],
        uitlegPad: {
          stappen: [
            { titel: "Warm = ijler", tekst: "Bij vaste p (atmosfeer): T↑ → V/m↑ (Charles) → ρ↓. Ballon vol hete lucht is lichter dan zelfde V koude buitenlucht → opwaartse kracht (Archimedes: F = ρ_buiten · V · g). Brander warm houden = blijven zweven." },
          ],
          niveaus: { basis: "Warm = ijler = opwaarts. A.", simpeler: "Heet gas weegt minder; ballon stijgt. A.", nogSimpeler: "Archimedes = A." },
        },
      },
      {
        q: "Een **thermoskan** houdt thee warm door:",
        options: [
          "Vacuüm + reflecterende wanden = blokkeert alle 3 transport-typen",
          "Alleen isolatie tegen geleiding",
          "Alleen tegen convectie",
          "Magnetisch verbod warmte"
        ],
        answer: 0,
        wrongHints: [null, "Onvolledig — er zit meer in.", "Onvolledig.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Drie barrières", tekst: "1. Dubbele wand met vacuüm → geen geleiding/convectie (geen medium).\n2. Verzilverde binnenkant → reflecteert stralingsenergie terug naar inhoud.\n3. Kurk-deksel (slechte geleider) tegen verlies door opening.\n\nResultaat: 6-12 uur thee warm." },
          ],
          niveaus: { basis: "Vacuüm + reflectie. A.", simpeler: "Alle drie warmte-stroming geblokkeerd. A.", nogSimpeler: "3 in 1 = A." },
        },
      },
      {
        q: "**Stefan-Boltzmann**: vermogen ~ T⁴. Verdubbel T: vermogen wordt:",
        options: ["16× hoger", "2× hoger", "4× hoger", "8× hoger"],
        answer: 0,
        wrongHints: [null, "Niet — vierde macht.", "Niet — kwadraat zou 4× zijn.", "Niet — derde macht."],
        uitlegPad: {
          stappen: [{ titel: "T⁴", tekst: "P ~ T⁴. T verdubbelen → 2⁴ = **16×** zoveel vermogen. Daarom hete sterren geweldig veel feller stralen dan koude. Zon (5800 K) straalt veel feller dan rode dwerg (3000 K)." }],
          theorie: "Daarom moet je T altijd in Kelvin (absolute schaal) gebruiken — verdubbelen Celsius geeft onzin antwoord.",
          niveaus: { basis: "2⁴=16×. A.", simpeler: "Vierde macht: 2·2·2·2 = 16. A.", nogSimpeler: "16× = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const warmteThermodynamicaHavoVwo = {
  id: "warmte-thermodynamica-havo-vwo",
  title: "Warmte + Thermodynamica (HAVO/VWO Natuurkunde)",
  emoji: "🌡️",
  level: "havo-vwo-4-5",
  subject: "natuurkunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Natuurkunde — Warmte + Thermodynamica (CSE-onderwerp)",
  prerequisites: [
    { id: "mechanica-havo-vwo", title: "Mechanica (HAVO/VWO)", niveau: "havo-3F" },
  ],
  intro:
    "Warmte + Thermodynamica voor HAVO/VWO eindexamen — Kelvin-schaal, Q=mcΔT, faseovergangen, ideale gaswet pV=nRT, 1e hoofdwet, warmte-transport (geleiding/convectie/straling). VWO-stof: Carnot-rendement. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "temperatuur", "Celsius", "Kelvin", "absoluut nulpunt",
    "warmte", "Q", "joule",
    "soortelijke warmte", "warmtecapaciteit", "c",
    "smeltwarmte", "verdampingswarmte", "L_s", "L_v",
    "faseovergang", "smelten", "verdampen", "koken", "condenseren",
    "ideale gas", "pV=nRT", "gaswet",
    "Boyle-Mariotte", "Gay-Lussac", "Charles",
    "isotherm", "isobaar", "isochoor", "adiabatisch",
    "eerste hoofdwet", "ΔU=Q-W",
    "inwendige energie",
    "geleiding", "conductie", "convectie", "straling", "radiatie",
    "Stefan-Boltzmann", "Wien",
    "isolatie", "dubbel glas", "spouwmuur", "glaswol",
    "thermos", "warmtepomp", "COP",
    "Carnot", "rendement",
    "tweede hoofdwet", "entropie",
    "warmtemotor", "stoommachine",
  ],
  chapters,
  steps,
};

export default warmteThermodynamicaHavoVwo;
