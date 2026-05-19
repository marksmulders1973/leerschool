// Leerpad: Zuren, basen + pH — HAVO/VWO Scheikunde
// Eindexamen-CSE-stof. Brønsted-Lowry, pH-berekeningen, titraties.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  zuur: "#ef5350",
  base: "#42a5f5",
  neutraal: "#66bb6a",
  indicator: "#ffd54f",
};

const stepEmojis = ["⚗️", "🔢", "🧪", "📉", "🏆"];

const chapters = [
  { letter: "A", title: "Brønsted-Lowry zuren + basen", emoji: "⚗️", from: 0, to: 0 },
  { letter: "B", title: "pH + pOH-berekeningen", emoji: "🔢", from: 1, to: 1 },
  { letter: "C", title: "Sterk/zwak + buffers", emoji: "🧪", from: 2, to: 2 },
  { letter: "D", title: "Titratie + indicatoren", emoji: "📉", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Brønsted-Lowry ────────────────────────────────────
  {
    title: "Brønsted-Lowry — zuren + basen",
    explanation:
      "**Definitie Brønsted-Lowry** (1923):\n• **Zuur** = stof die H⁺ (proton) afstaat.\n• **Base** = stof die H⁺ opneemt.\n• Zuur-base-reactie = **protonoverdracht**.\n\nOudere definitie (Arrhenius): zuur geeft H⁺ in water, base geeft OH⁻. Brønsted-Lowry is breder.\n\n**Voorbeelden zuren** (proton-donors):\n• Sterke: HCl (zoutzuur), H₂SO₄ (zwavelzuur), HNO₃ (salpeterzuur), HBr, HI, HClO₄.\n• Zwakke: CH₃COOH (azijnzuur), HF (waterstoffluoride), HCOOH (mierenzuur), H₂CO₃ (koolzuur), H₃PO₄ (fosforzuur), citroenzuur, melkzuur.\n\n**Voorbeelden basen** (proton-acceptors):\n• Sterke: NaOH (natronloog), KOH (kaliloog), Ca(OH)₂, Ba(OH)₂.\n• Zwakke: NH₃ (ammoniak), CO₃²⁻ (carbonaat), HCO₃⁻ (bicarbonaat), F⁻, CH₃COO⁻ (acetaat).\n\n**Geconjugeerd zuur-base-paar**:\n• Zuur HA staat proton af → wordt A⁻ (geconjugeerde base).\n• Base B neemt proton op → wordt BH⁺ (geconjugeerd zuur).\n• Voorbeeld: HCl + H₂O → Cl⁻ + H₃O⁺.\n  - HCl/Cl⁻ = zuur/geconj.base-paar.\n  - H₂O/H₃O⁺ = base/geconj.zuur-paar.\n\n**Water amfoteer** (kan zuur EN base zijn):\n• Met HCl: H₂O is base (neemt H⁺ op → H₃O⁺).\n• Met NH₃: H₂O is zuur (geeft H⁺ af → OH⁻).\n• In zuiver water: zelf-protolyse → H₂O + H₂O ⇌ H₃O⁺ + OH⁻ (heel weinig).\n\n**Notatie H⁺ vs H₃O⁺**:\n• Strikt genomen: H⁺ in water bestaat niet vrij — het hangt altijd aan water = H₃O⁺ (hydronium-ion).\n• In formules vaak afgekort als H⁺ (eenvoudiger).\n• Op eindexamen: H₃O⁺ correcter bij Brønsted-Lowry-formules.\n\n**Zuur-/base-eigenschappen**:\n• Zure oplossing: zure smaak (citroen), reageert met metalen (geeft H₂-gas), rood lakmoes blijft rood / blauw → rood, geleiden elektriciteit (door ionen), pH < 7.\n• Basische oplossing: bittere smaak (zeep), glibberig, blauwe lakmoes blijft blauw / rood → blauw, geleiden, pH > 7.\n• Neutralisatie: zuur + base → zout + water (vaak). Bv: HCl + NaOH → NaCl + H₂O.\n\n**Niet-watersystemen** (uitbreiding Brønsted-Lowry):\n• In ammoniak-vloeistof: NH₃ als oplosmiddel; zuren staan H⁺ af aan NH₃ → NH₄⁺.\n• Belangrijk in organische chemie + industrie.",
    checks: [
      {
        q: "Wat is een **Brønsted-zuur**?",
        options: ["H⁺-donor","H⁺-acceptor","Elektron-donor","OH⁻-donor"],
        answer: 0,
        wrongHints: [null, "Dat is base.", "Niet — andere definitie (Lewis).", "Niet primair — Arrhenius-zicht."],
        uitlegPad: {
          stappen: [{ titel: "Zuur staat proton af", tekst: "**Brønsted-zuur** = stof die **H⁺ (proton) afstaat** aan andere stof. Voorbeeld: HCl + H₂O → Cl⁻ + H₃O⁺. HCl is zuur, geeft proton aan H₂O." }],
          theorie: "Cito-formulering: 'Brønsted-zuur = protondonor, Brønsted-base = protonacceptor'.",
          niveaus: { basis: "H⁺-donor. A.", simpeler: "Zuur = H⁺ afgeven = A.", nogSimpeler: "Donor = A." },
        },
      },
      {
        q: "Welke is de **geconjugeerde base** van HCl?",
        options: ["Cl⁻","H₂O","H₃O⁺","NaOH"],
        answer: 0,
        wrongHints: [null, "Niet — H₂O is base in deze reactie.", "Niet — geconj. zuur.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Zuur min proton = geconj. base", tekst: "**HCl → H⁺ + Cl⁻**. Zonder proton heet de zuurrest **Cl⁻**: geconjugeerde base van HCl. Geconjugeerd = ontstaan uit." }],
          theorie: "Patroon: HX (zuur) ⇌ X⁻ (geconj.base) + H⁺.",
          niveaus: { basis: "Cl⁻. A.", simpeler: "HCl − H⁺ = Cl⁻ = A.", nogSimpeler: "Cl⁻ = A." },
        },
      },
      {
        q: "Water is **amfoteer**. Welke betekenis?",
        options: ["Kan zuur én base zijn","Onveranderbaar","Altijd zuur","Smaakloos"],
        answer: 0,
        wrongHints: [null, "Niet wat amfoteer betekent.", "Wel kan, maar niet altijd.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Amfoteer = beide", tekst: "**Amfoteer**: kan zowel als zuur als als base functioneren. **Water**: met HCl is het base (neemt H⁺ op). Met NH₃ is het zuur (geeft H⁺ af). Komt door OH-groep + H die beide overgedragen kunnen worden." }],
          niveaus: { basis: "Beide. A.", simpeler: "Amfoteer = zuur+base = A.", nogSimpeler: "Beide = A." },
        },
      },
      {
        q: "Welke is een **sterk zuur**?",
        options: ["HCl","CH₃COOH (azijnzuur)","NH₃","NaCl"],
        answer: 0,
        wrongHints: [null, "Zwak zuur.", "Base.", "Zout (neutraal)."],
        uitlegPad: {
          stappen: [{ titel: "Sterke zuren-lijst", tekst: "**Sterke zuren** (volledig dissociëren in water): **HCl, H₂SO₄, HNO₃, HBr, HI, HClO₄**. Alle andere zijn zwak (azijnzuur, citroenzuur, koolzuur, etc.). Onthouden uit hoofd voor eindexamen." }],
          theorie: "Memo: HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄ = de 6 standaard-sterke zuren.",
          niveaus: { basis: "HCl. A.", simpeler: "Sterk zuur = HCl = A.", nogSimpeler: "HCl = A." },
        },
      },
      {
        q: "Zuur + base → ?",
        options: ["Zout + water","Niets","Gas","Vlam"],
        answer: 0,
        wrongHints: [null, "Wel reactie.", "Soms (bv. CO₂), niet altijd.", "Niet algemeen."],
        uitlegPad: {
          stappen: [{ titel: "Neutralisatie", tekst: "**Neutralisatie**: zuur + base → zout + water. Voorbeelden:\n• HCl + NaOH → NaCl + H₂O\n• H₂SO₄ + 2 KOH → K₂SO₄ + 2 H₂O\npH-verandering naar neutraal (7) als zuur + base evenredig zijn." }],
          niveaus: { basis: "Zout + water. A.", simpeler: "Z+B → zout+water = A.", nogSimpeler: "Zout+water = A." },
        },
      },
    ],
  },

  // ─── B. pH + pOH-berekeningen ─────────────────────────────
  {
    title: "pH-berekeningen — H₃O⁺ + OH⁻",
    explanation:
      "**pH** = mate van zuurgraad = negatieve logaritme van H₃O⁺-concentratie.\n\n**pH = −log[H₃O⁺]**\n\nDe vierkante haken [...] betekenen 'concentratie in mol/L'.\n\n**Bereik**:\n• pH = 0-14 in waterige oplossingen meestal.\n• pH < 7: zuur.\n• pH = 7: neutraal (zuiver water op 25°C).\n• pH > 7: basisch.\n\n**Voorbeelden**:\n• [H₃O⁺] = 10⁻³ → pH = 3 (zuur).\n• [H₃O⁺] = 10⁻⁷ → pH = 7 (neutraal).\n• [H₃O⁺] = 10⁻¹⁰ → pH = 10 (basisch).\n\n**Omgekeerd**: [H₃O⁺] = 10^(−pH).\n\n**Logaritmen-truc**:\n• [H₃O⁺] = 10⁻⁵ → pH = 5 (heel makkelijk).\n• [H₃O⁺] = 2 × 10⁻⁴ → pH = −log(2 × 10⁻⁴) = 4 − log(2) = 4 − 0,301 = **3,7**.\n• Op rekenmachine: gewoon log-knop indrukken.\n\n**Waterconstante Kw**:\nIn water: [H₃O⁺] × [OH⁻] = Kw = **10⁻¹⁴** (bij 25°C).\n\n**pOH = −log[OH⁻]**\n\n**Belangrijke relatie**: **pH + pOH = 14** (bij 25°C).\n\n**Voorbeeld**:\n• [OH⁻] = 10⁻³ → pOH = 3 → pH = 14 − 3 = 11 (basisch).\n• [OH⁻] = 0,01 mol/L → pOH = 2 → pH = 12.\n\n**Berekenen pH van sterke zuren**:\nVolledige dissociatie → [H₃O⁺] = concentratie van het zuur.\n• 0,1 M HCl → [H₃O⁺] = 0,1 = 10⁻¹ → pH = 1.\n• 0,001 M HCl → pH = 3.\n\n**Berekenen pH van sterke basen**:\nVolledige dissociatie naar OH⁻ → [OH⁻] = concentratie van de base (× aantal OH-groepen).\n• 0,01 M NaOH → [OH⁻] = 0,01 → pOH = 2 → pH = 12.\n• 0,001 M Ca(OH)₂ → [OH⁻] = 0,002 → pOH ≈ 2,7 → pH ≈ 11,3.\n\n**Verdunnen**:\n• Verdun 10× → [H₃O⁺] daalt 10× → pH stijgt met 1.\n• Voorbeeld: 0,1 M HCl (pH=1) → 10× verdund = 0,01 M (pH=2).\n\n**pH in dagelijks leven**:\n• Maagzuur: 1-2.\n• Citroensap: ~2.\n• Cola: ~2,5.\n• Koffie: ~5.\n• Regen (schoon): ~5,6 (CO₂-oplossing).\n• Speeksel: ~6,5.\n• Water: 7.\n• Bloed: 7,35-7,45 (zeer nauw gereguleerd!).\n• Zeep: 8-10.\n• Ammoniak schoonmaakmiddel: ~11.\n• Bleekloog: 13-14.",
    checks: [
      {
        q: "[H₃O⁺] = **10⁻⁴ mol/L**. **pH** = ?",
        options: ["4","−4","10","−10"],
        answer: 0,
        wrongHints: [null, "Niet — −log positief.", "Niet — niet rechtstreeks.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "pH = −log[H₃O⁺]", tekst: "pH = −log(10⁻⁴) = −(−4) = **4**. Bij macht van 10 = exponent invers (zonder min)." }],
          niveaus: { basis: "4. A.", simpeler: "−log(10⁻⁴) = 4 = A.", nogSimpeler: "4 = A." },
        },
      },
      {
        q: "0,01 M **HCl** in water. pH?",
        options: ["2","12","1","7"],
        answer: 0,
        wrongHints: [null, "Niet — dat is pOH-achtig.", "Niet — 0,1 M zou pH=1 zijn.", "Niet — wel zuur."],
        uitlegPad: {
          stappen: [{ titel: "Sterk zuur = volledige dissoc.", tekst: "HCl is sterk → 0,01 M HCl geeft [H₃O⁺] = 0,01 = 10⁻². **pH = −log(10⁻²) = 2**. Zuur." }],
          niveaus: { basis: "2. A.", simpeler: "0,01M HCl → pH=2 = A.", nogSimpeler: "2 = A." },
        },
      },
      {
        q: "Welke relatie geldt **altijd** in water (25°C)?",
        options: ["pH + pOH = 14","pH × pOH = 14","pH − pOH = 14","pH = pOH"],
        answer: 0,
        wrongHints: [null, "Niet — wel som.", "Niet — som.", "Alleen bij neutraal (beide = 7)."],
        uitlegPad: {
          stappen: [{ titel: "Kw = 10⁻¹⁴", tekst: "Waterconstante: [H₃O⁺][OH⁻] = **10⁻¹⁴**. Log-versie: **pH + pOH = 14** (bij 25°C). Bij neutraal: pH = pOH = 7." }],
          niveaus: { basis: "pH + pOH = 14. A.", simpeler: "Som = 14 = A.", nogSimpeler: "14 = A." },
        },
      },
      {
        q: "Oplossing met **[OH⁻] = 10⁻²** mol/L. pH?",
        options: ["12","2","14","7"],
        answer: 0,
        wrongHints: [null, "Niet — dat is pOH.", "Niet — niet totaal.", "Niet — base, geen neutraal."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst pOH", tekst: "[OH⁻] = 10⁻² → pOH = 2." },
            { titel: "Dan pH", tekst: "pH = 14 − pOH = 14 − 2 = **12**. Basische oplossing." },
          ],
          niveaus: { basis: "12. A.", simpeler: "pOH=2, pH=14−2=12 = A.", nogSimpeler: "12 = A." },
        },
      },
      {
        q: "Verdun 0,1 M HCl **10×**. Nieuwe pH?",
        options: ["2 (was 1)","1","0,1","12"],
        answer: 0,
        wrongHints: [null, "Niet — pH stijgt na verdunnen.", "Niet pH.", "Niet — geen base."],
        uitlegPad: {
          stappen: [{ titel: "10× verdund = pH +1", tekst: "0,1 M HCl heeft pH=1. **10× verdund** → 0,01 M → pH=**2**. Algemene regel: 10× verdunnen = pH stijgt 1 (zuur) of daalt 1 (base). Maximaal tot pH=7 (verdunde sterk zuur kan nooit basisch worden)." }],
          niveaus: { basis: "2. A.", simpeler: "10× verdund = pH+1 = 2 = A.", nogSimpeler: "2 = A." },
        },
      },
    ],
  },

  // ─── C. Sterk/zwak + buffers ──────────────────────────────
  {
    title: "Sterk vs zwak — buffers",
    explanation:
      "**Sterk zuur/base**: dissocieert **volledig** in water.\n• HCl → 100% naar Cl⁻ + H⁺.\n• [H⁺] = oorspronkelijke concentratie.\n\n**Zwak zuur/base**: dissocieert **gedeeltelijk** in water. Evenwicht.\n• CH₃COOH ⇌ CH₃COO⁻ + H⁺ (slechts ~1% bij 0,1 M).\n• [H⁺] < oorspronkelijke concentratie.\n\n**Zuurconstante Ka** (mate van dissociatie):\n• HA ⇌ A⁻ + H⁺\n• Ka = [A⁻][H⁺] / [HA]\n• **Hoge Ka = sterk zuur** (veel gedissocieerd).\n• **Lage Ka = zwak zuur**.\n• Sterk zuur: Ka >> 1.\n• Zwak zuur: Ka << 1 (vaak 10⁻³ tot 10⁻¹⁰).\n\n**pKa = −log(Ka)**:\n• Lage pKa = sterker zuur.\n• Hoge pKa = zwakker zuur.\n• Azijnzuur: Ka = 1,8 × 10⁻⁵ → pKa = 4,75.\n• HF: pKa = 3,17.\n• HCN: pKa = 9,2 (zeer zwak).\n\n**Berekenen pH zwak zuur** (HAVO/VWO):\n• Geef Ka + concentratie → benadering: [H⁺] ≈ √(Ka × C).\n• Voorbeeld: 0,1 M azijnzuur, Ka = 1,8 × 10⁻⁵:\n  - [H⁺] ≈ √(1,8×10⁻⁵ × 0,1) = √(1,8×10⁻⁶) ≈ 1,34 × 10⁻³.\n  - pH ≈ 2,87 (NIET 1 zoals 0,1 M HCl zou geven).\n\n**Buffers**:\n**Bufferoplossing** = mengsel zwak zuur + zijn geconjugeerde base in vergelijkbare hoeveelheden. **Weerstandsvermogen** tegen pH-verandering bij toevoegen kleine hoeveelheid zuur/base.\n\n**Voorbeelden buffer**:\n• CH₃COOH (azijnzuur) + CH₃COO⁻ (natriumacetaat). pH-bereik rond 4-6.\n• H₂CO₃ + HCO₃⁻. pH-bereik rond 6-8.\n• NH₄⁺ + NH₃. pH-bereik 8-10.\n\n**Werking**:\n• Bij toevoegen zuur: H⁺ reageert met base-component → afgevangen.\n• Bij toevoegen base: OH⁻ reageert met zuur-component → afgevangen.\n• pH blijft (ongeveer) constant.\n\n**Henderson-Hasselbalch-formule** (HAVO/VWO niet altijd vereist):\npH = pKa + log([A⁻]/[HA])\n• Als [A⁻] = [HA]: pH = pKa.\n\n**Bloed-buffer** (cruciaal voor leven!):\n• Bloed-pH = 7,35-7,45 (zeer nauw).\n• Bicarbonaat-buffer: H₂CO₃ ⇌ HCO₃⁻ + H⁺.\n• CO₂ in bloed → H₂CO₃ via koolzuuranhydrase enzym.\n• Hyperventilatie: te veel CO₂ uitademen → bloed wordt basisch (pH↑).\n• Onderademing: te weinig CO₂ uit → bloed zuur (pH↓).\n• Nieren reguleren HCO₃⁻ als langzame tweede laag.\n\n**Andere buffers in natuur**:\n• Speeksel: bicarbonaat — beschermt tandglazuur.\n• Oceaan: bicarbonaat — bufft CO₂-opname (maar overschrijden → oceaan-verzuring).\n• Bodem: humuszuren + carbonaten.",
    checks: [
      {
        q: "**Zwak zuur** dissocieert:",
        options: ["Gedeeltelijk (evenwicht)","Volledig","Niet","Alleen bij hitte"],
        answer: 0,
        wrongHints: [null, "Dat is sterk zuur.", "Wel — een beetje.", "Niet temperatuur-cruciaal hier."],
        uitlegPad: {
          stappen: [{ titel: "Evenwicht ⇌", tekst: "**Zwak zuur**: dissocieert **gedeeltelijk** → evenwicht tussen HA, A⁻ en H⁺. Bv. azijnzuur: ~1% gedissocieerd bij 0,1 M. Sterk zuur dissocieert volledig (~100%)." }],
          niveaus: { basis: "Gedeeltelijk. A.", simpeler: "Zwak = gedeeltelijk = A.", nogSimpeler: "Deels = A." },
        },
      },
      {
        q: "Lage Ka betekent:",
        options: ["Zwakker zuur","Sterker zuur","Geen zuur","Sterke base"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel zuur.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Ka = mate dissociatie", tekst: "**Ka** = evenwichts-constante zuur-dissociatie. **Hoge Ka** = veel gedissocieerd = sterk zuur. **Lage Ka** = weinig gedissocieerd = zwak zuur. pKa = −log(Ka) → lage pKa = sterk." }],
          niveaus: { basis: "Zwakker. A.", simpeler: "Lage Ka = zwak = A.", nogSimpeler: "Zwak = A." },
        },
      },
      {
        q: "Wat is een **buffer**?",
        options: ["Mengsel zwak zuur + zijn geconj. base","Sterk zuur","Volledig neutraal water","Vaste stof"],
        answer: 0,
        wrongHints: [null, "Niet — sterk zuur geen buffer.", "Niet — geen weerstand.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Zwak-zuur-paar = buffer", tekst: "**Buffer** = oplossing met **zwak zuur + zijn geconjugeerde base** (of zwakke base + geconj. zuur). Weerstaat pH-verandering bij toevoegen klein beetje zuur/base. Voorbeeld: azijnzuur + acetaat-zout." }],
          niveaus: { basis: "Zwak zuur + geconj.base. A.", simpeler: "Buffer = zwak-paar = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Bij **toevoegen klein beetje HCl** aan een acetaat-buffer:",
        options: ["pH blijft ongeveer gelijk","pH daalt heel sterk","Buffer verdampt","Geen reactie"],
        answer: 0,
        wrongHints: [null, "Niet — daar is buffer voor.", "Niet — bufferreactie.", "Wel reactie."],
        uitlegPad: {
          stappen: [{ titel: "Base-component vangt H⁺", tekst: "Acetaat-buffer: CH₃COO⁻ + H⁺ → CH₃COOH. H⁺ wordt opgenomen, pH blijft (bijna) gelijk. **Buffercapaciteit** is wel begrensd — bij grote hoeveelheid zuur loopt buffer 'op' en pH zakt alsnog snel." }],
          niveaus: { basis: "Blijft gelijk. A.", simpeler: "Buffer = pH stabiel = A.", nogSimpeler: "Stabiel = A." },
        },
      },
      {
        q: "Welke buffer is **cruciaal** voor bloed?",
        options: ["Bicarbonaat (H₂CO₃/HCO₃⁻)","Azijnzuur","Zoutzuur","Geen — bloed is gewoon water"],
        answer: 0,
        wrongHints: [null, "Niet — niet in bloed.", "Niet — sterk zuur, geen buffer.", "Niet — bloed-pH zeer nauw gereguleerd."],
        uitlegPad: {
          stappen: [{ titel: "Bicarbonaat = bloed-pH", tekst: "**Bicarbonaat-buffer** H₂CO₃ ⇌ HCO₃⁻ + H⁺ houdt bloed-pH op 7,35-7,45. Cruciaal — afwijking >0,4 = levensbedreigend. CO₂ uit ademhaling + nier-reabsorptie HCO₃⁻ samen reguleren." }],
          theorie: "Cito-actueel: hyperventilatie verhoogt pH (alkalose), longontsteking kan pH verlagen (acidose).",
          niveaus: { basis: "Bicarbonaat. A.", simpeler: "Bloed-buffer = bicarbonaat = A.", nogSimpeler: "Bicarbonaat = A." },
        },
      },
    ],
  },

  // ─── D. Titratie + indicatoren ────────────────────────────
  {
    title: "Titratie + indicatoren",
    explanation:
      "**Titratie** = analyse-techniek: bepaal onbekende concentratie zuur of base door druppelsgewijs sterk tegenmiddel toe te voegen tot equivalentie.\n\n**Uitvoering**:\n1. Bekend volume onbekende oplossing in erlenmeyer.\n2. Indicator (kleurstof die kleur verandert bij pH-omslag) toevoegen.\n3. Vul buret met titratieoplossing van bekende concentratie.\n4. Druppel langzaam toe, **roer** continu.\n5. Stop wanneer indicator (definitief) van kleur verandert = **equivalentiepunt** bereikt.\n6. Volume toegevoegd aflezen → bereken onbekende concentratie.\n\n**Equivalentiepunt** vs **eindpunt**:\n• **Equivalentiepunt**: exact theoretisch punt waarop zuur en base evenredig zijn.\n• **Eindpunt**: wanneer indicator van kleur verandert (praktisch).\n• Goed gekozen indicator → eindpunt = equivalentiepunt.\n\n**Berekening**:\nC_zuur × V_zuur = C_base × V_base (voor 1-protonig)\n\nVoor meer-protonig zuur of base: factor erbij.\n\n**Voorbeeld**:\n10 mL onbekend HCl getitreerd met 0,1 M NaOH. Indicator omslagt bij 15 mL NaOH.\nC_HCl × 10 = 0,1 × 15 → C_HCl = 0,15 M.\n\n**Indicatoren** (zwak zuur dat per kleur verschilt afhankelijk van pH):\n• **Lakmoes**: rood (zuur) ↔ blauw (basisch). Omslagpunt rond pH 5-8. Niet erg scherp.\n• **Fenolftaleïne**: kleurloos (pH<8) ↔ roze (pH>8,2). Voor titratie sterk zuur + sterk base.\n• **Methyloranje**: rood (pH<3,1) ↔ oranje-geel (pH>4,4). Voor titratie sterk zuur.\n• **BTB (broomthymolblauw)**: geel (pH<6) ↔ blauw (pH>7,6). Algemeen.\n• **Universeel indicator-papier**: meerdere kleuren over hele pH-bereik.\n\n**Indicator-keuze**:\n• Sterk zuur + sterk base (HCl + NaOH): equivalentiepunt = pH 7. Fenolftaleïne of methyloranje werken beide.\n• Sterk zuur + zwak base (HCl + NH₃): equivalentiepunt < 7 (zuur zout). Methyloranje.\n• Zwak zuur + sterk base (azijn + NaOH): equivalentiepunt > 7 (basisch zout). Fenolftaleïne.\n• Zwak zuur + zwak base: equivalentiepunt afhankelijk, vaak moeilijk visueel — gebruik pH-meter.\n\n**Titratiekromme** (pH vs toegevoegd volume):\n• Begint bij pH van oplossing.\n• Daalt/stijgt langzaam.\n• **Steile sprong** bij equivalentiepunt (pH springt ~3-7 binnen druppels).\n• Buffergebied (vlak deel) als zwak component aanwezig.\n• Bij zwak zuur + sterk base: pKa = pH bij half-equivalentiepunt.\n\n**Praktische foutbronnen**:\n• Te snel druppelen → voorbij equivalentiepunt.\n• Verkeerde indicator → eindpunt ≠ equivalentiepunt.\n• Erlenmeyer niet schoon → onbekende stoffen.\n• Buret niet gespoeld met titratie-oplossing → vermenging.\n\n**Pipet vs buret**:\n• Pipet: vast volume (10 mL, 25 mL).\n• Buret: variabel volume met aflezing.\n• Maatkolf: bekende totaal-volume (250 mL, 500 mL) — voor verdunning van standaard.",
    checks: [
      {
        q: "Wat is het **equivalentiepunt** in een titratie?",
        options: ["Punt waarop zuur en base evenredig zijn","Begin van titratie","Bij pH 7 altijd","Bij omslagpunt indicator"],
        answer: 0,
        wrongHints: [null, "Niet — begin = pH onbekend.", "Niet — alleen bij sterk-sterk.", "Eindpunt — niet hetzelfde."],
        uitlegPad: {
          stappen: [{ titel: "Stoichiometrisch", tekst: "**Equivalentiepunt** = exact moment waarop toegevoegde stof stoichiometrisch gelijk is aan beginstof. Bij sterk zuur + sterk base = pH 7. Bij zwak/sterk-combinaties anders." }],
          niveaus: { basis: "Stoichiometrisch evenwicht. A.", simpeler: "Equivalentie = even-veel = A.", nogSimpeler: "Even = A." },
        },
      },
      {
        q: "10 mL HCl getitreerd met **0,1 M NaOH**, indicator-omslag bij 15 mL. C(HCl)?",
        options: ["0,15 M","0,1 M","1,5 M","0,01 M"],
        answer: 0,
        wrongHints: [null, "Niet — meer volume nodig.", "Niet — niet 10× verschil.", "Niet — wel substantieel zuur."],
        uitlegPad: {
          stappen: [{ titel: "Cz·Vz = Cb·Vb", tekst: "1-protonig: **C_zuur × V_zuur = C_base × V_base**. C_HCl × 10 = 0,1 × 15 → C_HCl = 1,5/10 = **0,15 M**." }],
          niveaus: { basis: "0,15 M. A.", simpeler: "0,1·15/10 = 0,15 = A.", nogSimpeler: "0,15 = A." },
        },
      },
      {
        q: "Welke indicator voor **azijnzuur + NaOH-titratie**?",
        options: ["Fenolftaleïne","Methyloranje","Lakmoes alleen","Niet nodig"],
        answer: 0,
        wrongHints: [null, "Niet — omslag te vroeg.", "Te vaag.", "Wel nodig."],
        uitlegPad: {
          stappen: [{ titel: "Zwak zuur + sterk base = basisch eq.", tekst: "Bij zwak zuur (azijn) + sterk base (NaOH): equivalentiepunt **pH > 7** (acetaat-ion is base). **Fenolftaleïne** omslagt rond pH 8,2 → match. Methyloranje slaat al om bij pH 4 → veel te vroeg." }],
          niveaus: { basis: "Fenolftaleïne. A.", simpeler: "Azijn+NaOH = fenolftaleïne = A.", nogSimpeler: "Fenolft. = A." },
        },
      },
      {
        q: "Een **buret** wordt gebruikt voor:",
        options: ["Variabel volume druppelen + aflezen","Vast volume meten","Verhitten","Mengen"],
        answer: 0,
        wrongHints: [null, "Niet — dat is pipet.", "Niet — geen verhitter.", "Niet primair."],
        uitlegPad: {
          stappen: [{ titel: "Buret = lange schaal-cilinder", tekst: "**Buret** = lange glazen cilinder met kraan + schaalverdeling (vaak 50 mL met 0,1 mL nauwkeurig). Voor druppelsgewijs toevoegen + nauwkeurig volume aflezen tijdens titratie. **Pipet** = vast volume (10 mL, 25 mL)." }],
          niveaus: { basis: "Variabel + aflezen. A.", simpeler: "Buret = druppelen+meten = A.", nogSimpeler: "Buret = A." },
        },
      },
      {
        q: "Bij zwak zuur + sterk base, **pKa = pH op halfequivalentiepunt**?",
        options: ["Ja","Nee","Alleen bij neutralisatie","Onmogelijk te zeggen"],
        answer: 0,
        wrongHints: [null, "Wel — vaste relatie.", "Niet — overal in zwak-zuur-titratie.", "Wel — bekende relatie."],
        uitlegPad: {
          stappen: [{ titel: "Half-eq. = pKa", tekst: "Bij halfequivalentiepunt is precies de helft van zwak zuur omgezet in geconjugeerde base. Dan: [HA] = [A⁻] → Henderson-Hasselbalch: pH = pKa + log(1) = **pKa**. Handig om pKa experimenteel te bepalen." }],
          theorie: "Cito-toepassing: titratiekromme aflezen → punt waar pH=pKa.",
          niveaus: { basis: "Ja. A.", simpeler: "Half-eq.: pH=pKa = A.", nogSimpeler: "Ja = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — zuur-base mix",
    explanation:
      "Mix van Brønsted-Lowry + pH-berekeningen + sterk/zwak + buffers + titratie.\n\nVeel succes!",
    checks: [
      {
        q: "0,001 M **NaOH** in water. pH?",
        options: ["11","3","12","7"],
        answer: 0,
        wrongHints: [null, "Niet — dat is pOH.", "Niet — 0,01 M zou 12 zijn.", "Niet neutraal."],
        uitlegPad: {
          stappen: [{ titel: "Bereken via pOH", tekst: "[OH⁻] = 0,001 = 10⁻³ → pOH = 3 → pH = 14 − 3 = **11**." }],
          niveaus: { basis: "11. A.", simpeler: "pOH=3, pH=11 = A.", nogSimpeler: "11 = A." },
        },
      },
      {
        q: "Welke is **geconjugeerd zuur** van NH₃?",
        options: ["NH₄⁺","NH₂⁻","N₂","Geen"],
        answer: 0,
        wrongHints: [null, "Niet — dat is geconj. base.", "Niet relevant.", "Wel — NH₃ kan H⁺ opnemen."],
        uitlegPad: {
          stappen: [{ titel: "Base + H⁺ = geconj. zuur", tekst: "NH₃ + H⁺ → NH₄⁺ (ammonium-ion). Dus **NH₄⁺** = geconjugeerd zuur van NH₃. (Geconjugeerde base zou NH₂⁻ zijn — NH₃ als zuur, ongebruikelijk in water.)" }],
          niveaus: { basis: "NH₄⁺. A.", simpeler: "NH₃ + H⁺ = NH₄⁺ = A.", nogSimpeler: "NH₄⁺ = A." },
        },
      },
      {
        q: "Bloed-pH = 7,4. **Hyperventilatie** doet pH:",
        options: ["Stijgen (basisch worden)","Dalen","Geen invloed","Onmogelijk te zeggen"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel — CO₂ minder.", "Wel duidelijke richting."],
        uitlegPad: {
          stappen: [{ titel: "CO₂ uit → pH op", tekst: "**Hyperventilatie** = snel ademen → veel CO₂ uitgeademd → minder H₂CO₃ in bloed → minder H⁺ → pH **stijgt** (alkalose). Behandeling: in tasje ademen om CO₂ weer op te bouwen." }],
          theorie: "Onderademing (hypoventilatie): omgekeerd, pH daalt (acidose). Beide gevaarlijk.",
          niveaus: { basis: "Stijgen. A.", simpeler: "Hyperventilatie = pH↑ = A.", nogSimpeler: "Op = A." },
        },
      },
      {
        q: "Mengsel **CH₃COOH + CH₃COONa** = ?",
        options: ["Buffer (zwak zuur + geconj.base)","Sterk zuur","Sterk base","Geen reactie"],
        answer: 0,
        wrongHints: [null, "Niet — beide zwak.", "Niet primair.", "Wel werking."],
        uitlegPad: {
          stappen: [{ titel: "Klassieker", tekst: "**Azijnzuur + natriumacetaat** = zwak zuur + zijn geconjugeerde base = **buffer**. pH-bereik rond pKa azijnzuur (4,75)." }],
          niveaus: { basis: "Buffer. A.", simpeler: "Mengsel = buffer = A.", nogSimpeler: "Buffer = A." },
        },
      },
      {
        q: "Cola heeft pH ≈ 2,5 (door koolzuur + fosforzuur). Tandglazuur lost op bij pH < 5,5. Wat te doen?",
        options: ["Minder vaak drinken + water spoelen + niet meteen poetsen","Direct na cola heel hard poetsen","Niet relevant","Suikers blokkeren met spoelmiddel"],
        answer: 0,
        wrongHints: [null, "Niet — verergert schade.", "Wel relevant.", "Niet primair (suikers zijn ander mechanisme)."],
        uitlegPad: {
          stappen: [{ titel: "Glazuur kwetsbaar", tekst: "Cola pH 2,5 → veel onder 5,5 → glazuur lost op. Tips: minder drinken, **water spoelen** na om pH te verhogen, **niet direct poetsen** (glazuur is verzacht — poetsen schuurt het weg). Wacht 30 min." }],
          theorie: "Cito-toepassing: zuur-base-chemie in dagelijks leven. Tandarts-advies = direct uit chemie.",
          niveaus: { basis: "Spoelen + niet poetsen. A.", simpeler: "Niet meteen poetsen, wel spoelen = A.", nogSimpeler: "Spoelen = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const zurenBasenHavoVwo = {
  id: "zuren-basen-havo-vwo",
  title: "Zuren, basen + pH (HAVO/VWO scheikunde)",
  emoji: "⚗️",
  level: "havo4-5-vwo",
  subject: "scheikunde",
  referentieNiveau: "havo-vwo-CSE-scheikunde",
  sloThema: "Scheikunde HAVO/VWO — zuren basen evenwicht eindexamen",
  prerequisites: [
    { id: "atoombouw-scheikunde", title: "Atoombouw", niveau: "klas3-4" },
    { id: "chemische-reacties-scheikunde", title: "Chemische reacties", niveau: "klas3-4" },
    { id: "logaritmen", title: "Logaritmen", niveau: "klas4" },
    { id: "stoffen-mengsels-scheikunde", title: "Stoffen + mengsels", niveau: "klas2-3" },
  ],
  intro:
    "Zuur-base-chemie HAVO/VWO eindexamen. Brønsted-Lowry-definities, pH/pOH-berekeningen, sterke vs zwakke zuren + Ka/pKa, bufferoplossingen + bloed-buffer, titratie + indicator-keuze. ~15-20 min.",
  triggerKeywords: [
    "zuur", "zuren", "base", "basen",
    "Brønsted", "Brønsted-Lowry",
    "proton-donor", "proton-acceptor",
    "H+", "H3O+", "OH-",
    "geconjugeerd zuur", "geconjugeerde base",
    "amfoteer",
    "pH", "pOH", "Kw",
    "log", "pKa", "Ka",
    "sterk zuur", "zwak zuur",
    "HCl", "H2SO4", "HNO3",
    "azijnzuur", "CH3COOH",
    "NaOH", "natronloog",
    "ammoniak", "NH3",
    "buffer", "bufferoplossing",
    "bicarbonaat", "HCO3",
    "Henderson-Hasselbalch",
    "titratie", "buret", "pipet",
    "equivalentiepunt", "eindpunt",
    "indicator", "lakmoes", "fenolftaleine", "methyloranje", "BTB",
    "neutralisatie",
    "alkalose", "acidose",
  ],
  chapters,
  steps,
};

export default zurenBasenHavoVwo;
