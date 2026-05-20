// Leerpad: Radioactiviteit + Kernfysica — HAVO/VWO Natuurkunde
// CSE-onderwerp. Soorten straling, halveringstijd, activiteit,
// kernreacties (fissie/fusie), bindingsenergie, dosis + toepassingen.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["☢️", "⏳", "🔬", "💥", "🏆"];

const chapters = [
  { letter: "A", title: "Atoomkern + isotopen", emoji: "☢️", from: 0, to: 0 },
  { letter: "B", title: "α/β/γ-straling", emoji: "⏳", from: 1, to: 1 },
  { letter: "C", title: "Halveringstijd + activiteit", emoji: "🔬", from: 2, to: 2 },
  { letter: "D", title: "Fissie + fusie + bindingsenergie", emoji: "💥", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (toepassingen + dosis)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Atoomkern + isotopen ──────────────────────────────
  {
    title: "Atoomkern — protonen, neutronen, isotopen",
    explanation:
      "**Atoomkern** = piepklein middenstuk van atoom (~10⁻¹⁵ m, 10 000× kleiner dan atoom zelf).\n\n**Bestanddelen**:\n• **Proton** (p): +1 lading, massa ≈ 1 u (1,67·10⁻²⁷ kg).\n• **Neutron** (n): geen lading, massa ≈ 1 u (iets zwaarder dan proton).\n• Elektronen draaien er omheen (−1 lading, m ≈ 1/1836 u).\n\n**Notatie**: ⁽^A_Z⁾X waar:\n• **Z = atoomnummer** = aantal protonen = bepaalt welk element. (H Z=1, He Z=2, ...)\n• **A = massagetal** = protonen + neutronen.\n• Aantal neutronen = A − Z.\n• Voorbeeld: ⁽²³⁵_₉₂⁾U = uranium, 92 protonen, 143 neutronen.\n\n**Isotopen** = atomen met **zelfde Z, verschillende A**. Dezelfde scheikundige eigenschappen, ander gewicht + soms stabiel/instabiel.\n• ¹²C (stabiel, 6p+6n), ¹³C (stabiel, 6p+7n), ¹⁴C (radioactief, 6p+8n).\n• ¹H (gewoon waterstof), ²H = deuterium (zwaar water), ³H = tritium (radioactief).\n\n**Stabiliteit**:\n• Lichte kernen: stabiel als ongeveer evenveel p als n.\n• Zware kernen (Z > 20): hebben **meer neutronen** dan protonen nodig — neutronen 'verdunnen' afstoting tussen protonen.\n• **Z > 83** (bismut): alle isotopen radioactief.\n\n**Eenheid massa**: atomaire massa-eenheid u = 1/12 van massa ¹²C = 1,66·10⁻²⁷ kg.\n• Eenheid energie in kernfysica: **elektronvolt eV** = 1,6·10⁻¹⁹ J. Vaak MeV = 10⁶ eV.\n• Einstein E = mc²: 1 u ≈ 931,5 MeV — handig voor bindingsenergie.",
    checks: [
      {
        q: "Uranium-238 ⁽²³⁸_₉₂⁾U bevat hoeveel **neutronen**?",
        options: ["146", "92", "238", "330"],
        answer: 0,
        wrongHints: [null, "Niet — dat zijn protonen.", "Niet — dat is massagetal A.", "Niet — A+Z is geen fysische grootheid."],
        uitlegPad: {
          stappen: [{ titel: "n = A − Z", tekst: "Massagetal A = 238, atoomnummer Z = 92. Aantal neutronen = A − Z = 238 − 92 = **146**." }],
          niveaus: { basis: "238−92=146. A.", simpeler: "A − Z = neutronen. A.", nogSimpeler: "146 = A." },
        },
      },
      {
        q: "Welke twee atomen zijn **isotopen** van elkaar?",
        options: [
          "¹²C en ¹⁴C",
          "¹²C en ¹²N",
          "¹⁴N en ¹⁴C",
          "¹H en ⁴He"
        ],
        answer: 0,
        wrongHints: [null, "Niet — N heeft Z=7, C heeft Z=6, dus ander element.", "Niet — verschillende Z = verschillende element.", "Niet — totaal andere elementen."],
        uitlegPad: {
          stappen: [{ titel: "Isotopen = zelfde Z", tekst: "¹²C en ¹⁴C hebben beide Z = 6 (zelfde element koolstof), maar verschillende A (12 vs 14). Andere stof heeft andere Z dus is een ander element." }],
          niveaus: { basis: "Zelfde Z = isotopen. A.", simpeler: "Beide koolstof (Z=6), ander massagetal. A.", nogSimpeler: "C-12 + C-14 = A." },
        },
      },
      {
        q: "Een atoomkern van **calcium-40** heeft welke samenstelling? (Ca: Z = 20)",
        options: ["20 p + 20 n", "40 p + 20 n", "20 p + 40 n", "40 p + 40 n"],
        answer: 0,
        wrongHints: [null, "Niet — dat is meer dan een Ca-atoom heeft.", "Niet — A telt p + n samen.", "Niet — onmogelijk."],
        uitlegPad: {
          stappen: [{ titel: "Z = 20, A = 40", tekst: "Ca-40: Z=20 (atoomnummer), A=40 (massagetal). Protonen=Z=20. Neutronen=A−Z=20. Stabiel (lichte kern, p≈n)." }],
          niveaus: { basis: "20 p + 20 n. A.", simpeler: "Z protonen + A−Z neutronen = 20 + 20. A.", nogSimpeler: "20+20 = A." },
        },
      },
      {
        q: "Waarom hebben **zware kernen** méér neutronen dan protonen?",
        options: [
          "Neutronen verdunnen de elektrische afstoting tussen protonen",
          "Neutronen zijn lichter",
          "Neutronen zijn elektrisch positief en versterken",
          "Toeval"
        ],
        answer: 0,
        wrongHints: [null, "Neutronen zijn juist iets zwaarder dan protonen.", "Niet — neutronen zijn ongeladen.", "Niet — er is een fysische reden."],
        uitlegPad: {
          stappen: [
            { titel: "Sterke kernkracht + Coulomb-afstoting", tekst: "Protonen stoten elkaar af (Coulomb). De sterke kernkracht trekt p-p, p-n, n-n aan — maar werkt alleen op zeer korte afstand. Bij grote kernen wordt afstoting overheersend, tenzij extra neutronen zorgen voor genoeg aantrekkende kracht zonder extra afstoting." },
          ],
          niveaus: { basis: "Neutronen verdunnen Coulomb-afstoting. A.", simpeler: "Extra neutronen lijmen de kern zonder extra afstoting. A.", nogSimpeler: "Verdunnen = A." },
        },
      },
      {
        q: "Elementen **boven Z = 83** (bismut) zijn:",
        options: [
          "Allemaal radioactief — geen stabiele isotoop",
          "Allemaal stabiel",
          "Half stabiel, half radioactief",
          "Bestaan niet"
        ],
        answer: 0,
        wrongHints: [null, "Niet — zware kernen worden instabiel.", "Niet — duidelijke grens bij bismut.", "Niet — bestaan wel (uranium, plutonium, etc.)."],
        uitlegPad: {
          stappen: [{ titel: "Bismut = laatste stabiele", tekst: "Z=83 (bismut) is het zwaarste element met (vrijwel) stabiele isotopen. Z≥84: polonium → uranium → transuranen (lab-gemaakt) → allemaal radioactief vervallen vroeg of laat naar lichter element." }],
          niveaus: { basis: "Z>83 = radioactief. A.", simpeler: "Alle elementen voorbij bismut zijn instabiel. A.", nogSimpeler: "Allemaal radioactief = A." },
        },
      },
    ],
  },

  // ─── B. α/β/γ-straling ────────────────────────────────────
  {
    title: "Drie soorten straling — α / β / γ",
    explanation:
      "**Radioactief verval**: instabiele kern wordt stabieler door **straling** uit te zenden.\n\n**α-straling (alfa)**:\n• Bestaat uit **helium-4 kernen**: 2 protonen + 2 neutronen (⁴He of α).\n• Z daalt met 2, A met 4.\n• Voorbeeld: ²³⁸U → ²³⁴Th + α.\n• **Snelheid** ~5% c. **Doordringend vermogen klein**: papier of paar cm lucht stopt α.\n• Binnen lichaam (ingeademd, gegeten): zeer gevaarlijk (radon-gas).\n\n**β-straling (bèta)**:\n• **β⁻**: kern stuurt een ELECTRON uit. Een neutron wordt proton: n → p + e⁻ + antineutrino.\n  - Z stijgt met 1, A blijft gelijk.\n  - Voorbeeld: ¹⁴C → ¹⁴N + e⁻.\n• **β⁺ (positron)** (zeldzamer, op VWO+): proton → neutron + e⁺ + neutrino.\n• **Snelheid** tot ~99% c. **Doordringend vermogen middel**: een paar mm aluminium stopt het.\n\n**γ-straling (gamma)**:\n• Geen materie maar **elektromagnetische golf** (heel hoge frequentie, hoge E-foton).\n• Z + A blijven gelijk — kern dumpt alleen overtollige energie.\n• Vaak NA α- of β-verval (kern komt in lagere energie-toestand).\n• **Doordringend vermogen groot**: dikke laag lood of beton nodig om te stoppen.\n\n**Vergelijkingstabel**:\n| | Wat | Z-effect | A-effect | Stopt door |\n|---|---|---|---|---|\n| α | He-kern | −2 | −4 | papier |\n| β⁻ | e⁻ uit kern | +1 | 0 | dun Al |\n| γ | foton | 0 | 0 | dik Pb |\n\n**Cito/CSE-vraag-types**:\n• Gegeven beginkern + soort verval → eindkern.\n• Vergelijking balanceren (Z en A behouden).\n• Welke straling stopt door welke barrière.",
    checks: [
      {
        q: "²²⁶Ra (Z=88) doet **α-verval**. Wat is de dochterkern?",
        options: ["²²²Rn (Z=86)", "²²⁶Ac (Z=89)", "²²²Ac (Z=89)", "²²⁶Rn (Z=86)"],
        answer: 0,
        wrongHints: [null, "Niet — bij α gaat Z OMLAAG.", "Niet — Z=89 zou β-verval zijn.", "Niet — A moet met 4 dalen."],
        uitlegPad: {
          stappen: [{ titel: "α: Z−2, A−4", tekst: "Ra-226 (Z=88, A=226) stuurt α (Z=2, A=4) uit. Dochter: Z=88−2=86 (radon), A=226−4=222 → ²²²Rn. Klassiek voorbeeld: radon-gas uit graniet/aardlagen." }],
          niveaus: { basis: "α: 88-2=86, 226-4=222. A.", simpeler: "Twee protonen en twee neutronen weg → Rn-222. A.", nogSimpeler: "Rn-222 = A." },
        },
      },
      {
        q: "¹⁴C (Z=6) verval β⁻ naar:",
        options: ["¹⁴N (Z=7)", "¹⁴B (Z=5)", "¹⁰Be + α", "¹³C"],
        answer: 0,
        wrongHints: [null, "Niet — β⁻ verhoogt Z, niet verlaagt.", "Niet — dat zou α zijn.", "Niet — A verandert niet bij β."],
        uitlegPad: {
          stappen: [
            { titel: "β⁻: Z+1, A blijft", tekst: "Bij β⁻ wordt een neutron een proton + elektron + antineutrino. C-14 (Z=6) → N-14 (Z=7). A blijft 14 (elektron is bijna massaloos). Dit is de basis van koolstof-14-datering!" },
          ],
          theorie: "Levende organismen hebben constant aandeel C-14 (uitwisseling met lucht). Na dood stopt uitwisseling → C-14 vervalt met halveringstijd 5730 j → archeologische ouderdomsbepaling.",
          niveaus: { basis: "β⁻: Z 6→7. A.", simpeler: "Neutron → proton + elektron uit. C wordt N. A.", nogSimpeler: "N-14 = A." },
        },
      },
      {
        q: "**γ-straling** is:",
        options: [
          "Elektromagnetische golf — foton met hoge energie",
          "Heliumkern",
          "Elektron uit de kern",
          "Stroom van neutronen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is α.", "Niet — dat is β⁻.", "Niet — neutronen-straling bestaat wel maar is geen γ."],
        uitlegPad: {
          stappen: [{ titel: "γ = foton, geen materie", tekst: "γ-straling is gewoon elektromagnetische straling (zoals licht, maar veel hogere frequentie en energie). Geen massa, geen lading. Beweegt met c. Komt vaak vrij na α- of β-verval als de kern naar lagere E-toestand 'valt'." }],
          niveaus: { basis: "γ = EM-foton. A.", simpeler: "Gamma is hoog-energetisch licht. A.", nogSimpeler: "Foton = A." },
        },
      },
      {
        q: "Welke straling wordt gestopt door **een vel papier**?",
        options: ["α", "β⁻", "γ", "Geen — alle gaan erdoorheen"],
        answer: 0,
        wrongHints: [null, "Niet — β gaat door papier, vereist dun aluminium.", "Niet — γ vereist dik lood/beton.", "Niet — α stopt wel."],
        uitlegPad: {
          stappen: [{ titel: "α heeft lage doordringkracht", tekst: "α-deeltjes zijn relatief zwaar (He-kern) + dubbel geladen → veel botsingen met materie → snel afgeremd. Papier of paar cm lucht stopt α. β gaat door tot dunne metaalplaat; γ door dikke loodlaag." }],
          basiskennis: [{ onderwerp: "Maar gevaarlijk in lichaam", uitleg: "α buiten lichaam = onschuldig. INGEADEMD of GEGETEN (zoals radon-gas) = zeer gevaarlijk: alle energie afgeleverd in klein volume weefsel." }],
          niveaus: { basis: "α stopt door papier. A.", simpeler: "Alpha is laagste doordringend → papier genoeg. A.", nogSimpeler: "α = A." },
        },
      },
      {
        q: "²³⁸U vervalt via α + 2β⁻ naar:",
        options: ["²³⁴U (Z=92, A=234)", "²³⁴Th (Z=90)", "²³⁰Pa", "²³⁸Pu"],
        answer: 0,
        wrongHints: [null, "Niet — 2 β-jes verhogen Z weer met 2.", "Niet — A moet kloppen.", "Niet — Pu (Z=94) > U."],
        uitlegPad: {
          stappen: [
            { titel: "Som van veranderingen", tekst: "α: Z−2, A−4. β⁻: Z+1, A=0 (per stuk). Twee β⁻: Z+2.\n\nStart: U-238 (Z=92, A=238).\nNa α: Z=90, A=234 (Th-234).\nNa 1 β: Z=91, A=234 (Pa-234).\nNa 2 β: Z=92, A=234 (U-234).\n\nEindkern: **U-234** — isotoop van het oorspronkelijke uranium maar lichter." },
          ],
          theorie: "Klassiek deel van de natuurlijke uraniumvervalreeks (U-238 → ... → Pb-206 over ~14 stappen).",
          niveaus: { basis: "U-234 na alle verandering. A.", simpeler: "−2+2=0 voor Z, −4 voor A. A.", nogSimpeler: "U-234 = A." },
        },
      },
    ],
  },

  // ─── C. Halveringstijd + activiteit ───────────────────────
  {
    title: "Halveringstijd t½ + activiteit",
    explanation:
      "**Halveringstijd t½**: de tijd waarna de **helft** van een radioactieve stof is vervallen.\n\n• Na 1× t½: 50% over.\n• Na 2× t½: 25% over.\n• Na 3× t½: 12,5% over.\n• Na n× t½: (½)ⁿ over.\n\n**Formule**: N(t) = N₀ · (½)^(t/t½)\n• Of equivalent: N(t) = N₀ · e^(−λ·t), met λ = ln(2)/t½ (vervalconstante).\n\n**Activiteit A** (eenheid: becquerel Bq = 1 verval/s):\n• A = λ · N (aantal vervaltjes per seconde).\n• A halveert met dezelfde halveringstijd als N.\n• 1 Bq = zeer weinig; medische tracers ~MBq (miljoenen).\n\n**Bekende halveringstijden**:\n• ¹⁴C: 5730 j (koolstofdatering).\n• ²³⁸U: 4,5 miljard jaar (≈ leeftijd aarde).\n• ¹³¹I: 8,0 dagen (jodium-tabletten na Tsjernobyl/Fukushima).\n• ²²²Rn: 3,8 dagen (radon-gas in kruipruimtes).\n• ⁹⁹ᵐTc: 6,0 uur (medische beeldvorming).\n\n**Toepassingen**:\n• **¹⁴C-datering**: levend wezen heeft constant C-14-niveau. Na dood begint t½-klok te tikken. Na 5730 j helft over → leeftijd te bepalen.\n• **Radio-tracer**: kort-halverende isotoop (uren) in patiënt → snel weg uit lichaam.\n• **Geochronologie**: U-Pb-methode voor miljoenen jaren oude rotsen.\n\n**Examen-trucs**:\n• 'Hoeveel procent na 3 halveringstijden?' → (½)³ = 12,5%.\n• 'Wanneer is nog 25% over?' → 2 halveringstijden = 2 × t½.\n• Activiteit halveert met dezelfde t½ als aantal kernen.",
    checks: [
      {
        q: "¹³¹I heeft t½ = 8 dagen. Na **24 dagen** is welk percentage over?",
        options: ["12,5%", "25%", "50%", "33%"],
        answer: 0,
        wrongHints: [null, "Niet — dat is na 2 halveringen.", "Niet — dat is na 1 halvering.", "Niet — verval is exponentieel, niet lineair."],
        uitlegPad: {
          stappen: [
            { titel: "24/8 = 3 halveringen", tekst: "3× t½ → (½)³ = 1/8 = **12,5%** over. Tabel: 100% → 50% → 25% → 12,5%." },
          ],
          niveaus: { basis: "(½)³=12,5%. A.", simpeler: "3 halveringen → 100 → 50 → 25 → 12,5. A.", nogSimpeler: "12,5% = A." },
        },
      },
      {
        q: "Een stof heeft halveringstijd 4 jaar. Activiteit nu: 1000 Bq. Over **12 jaar**?",
        options: ["125 Bq", "250 Bq", "500 Bq", "0 Bq"],
        answer: 0,
        wrongHints: [null, "Niet — 12 jaar = 3 halveringen.", "Niet — dat is na 2 halveringen.", "Niet — verval gaat nooit naar nul in eindige tijd."],
        uitlegPad: {
          stappen: [
            { titel: "12/4=3 halveringen", tekst: "Activiteit halveert net als aantal kernen: 1000 → 500 → 250 → **125 Bq** na 3× t½." },
          ],
          theorie: "Activiteit nadert nul maar bereikt het pas in oneindige tijd — exponentieel afval.",
          niveaus: { basis: "1000/8=125. A.", simpeler: "Drie keer halveren: 500, 250, 125 Bq. A.", nogSimpeler: "125 = A." },
        },
      },
      {
        q: "Een houtmonster bevat **25%** van het oorspronkelijke C-14 (t½ = 5730 j). Hoe **oud**?",
        options: ["~11 460 j", "~5 730 j", "~22 920 j", "~2 865 j"],
        answer: 0,
        wrongHints: [null, "Niet — 50% over zou betekenen.", "Niet — te oud.", "Niet — te jong."],
        uitlegPad: {
          stappen: [
            { titel: "25% = 2 halveringen", tekst: "100% → 50% (na 1× t½) → 25% (na 2× t½). Dus 2 × 5730 = **11 460 jaar**. Toepassing op archeologische vondsten (bv. veen-lijken, mummies)." },
          ],
          niveaus: { basis: "2×5730=11460. A.", simpeler: "25% = 2 halveringen = 2×5730 j. A.", nogSimpeler: "11 460 = A." },
        },
      },
      {
        q: "Een radio-tracer in een patiënt moet **snel uit het lichaam**. Welke t½ is geschikt?",
        options: ["Uren", "Decennia", "Miljoenen jaren", "Seconden"],
        answer: 0,
        wrongHints: [null, "Niet — patiënt blijft jarenlang stralen.", "Idem maar erger.", "Niet — te kort om beeld te maken."],
        uitlegPad: {
          stappen: [
            { titel: "Trade-off tijd vs stralingsdosis", tekst: "Te lang (jaren): patiënt blijft stralen. Te kort (sec): is weg vóór de scan. **Uren** is ideaal: voldoende tijd voor beeldvorming, daarna snel afgevallen. Tc-99m (6 uur) is favoriete medische tracer." },
          ],
          theorie: "Tc-99m geeft alleen γ (geen α/β in lichaam → minder schade), kort t½, gemakkelijk te maken uit moeder-isotoop Mo-99.",
          niveaus: { basis: "Uren is ideaal. A.", simpeler: "Niet te lang in lijf, niet te snel weg. A.", nogSimpeler: "Uren = A." },
        },
      },
      {
        q: "Activiteit A is **evenredig** met:",
        options: [
          "Aantal radioactieve kernen N (op dat moment)",
          "Massa van het hele monster",
          "Volume van het monster",
          "Temperatuur"
        ],
        answer: 0,
        wrongHints: [null, "Niet — alleen het radioactieve deel telt.", "Niet — volume irrelevant.", "Niet — radioactief verval is OAFHANKELIJK van temperatuur (uniek!)."],
        uitlegPad: {
          stappen: [
            { titel: "A = λ·N", tekst: "Hoe meer radioactieve kernen aanwezig, hoe meer per seconde vervallen → grotere A. Vervalconstante λ = ln(2)/t½ is een eigenschap van de isotoop." },
          ],
          theorie: "Radioactief verval is uniek: hangt **niet** af van temperatuur, druk, chemische binding, etc. Alleen aantal kernen + λ.",
          niveaus: { basis: "A ~ N. A.", simpeler: "Meer kernen = meer vervaltjes per seconde. A.", nogSimpeler: "A=λN = A." },
        },
      },
    ],
  },

  // ─── D. Fissie + fusie + bindingsenergie ──────────────────
  {
    title: "Fissie + fusie + bindingsenergie",
    explanation:
      "**Bindingsenergie E_b**: energie die nodig is om een kern uit elkaar te halen tot losse p + n. Per nucleon (E_b/A) heeft een kromme:\n• Klein bij waterstof.\n• **Maximum rond ijzer** (Fe-56) ≈ 8,8 MeV/nucleon.\n• Daalt langzaam voor zware kernen.\n\n**Gevolg**: energie wordt vrij wanneer:\n• **Lichte kernen samensmelten** (fusie) tot zwaardere → richting Fe.\n• **Zware kernen splijten** (fissie) in kleinere → ook richting Fe.\n\n**Massadefect**: stuk van een kern is altijd minder dan optelsom van losse p + n. Dat verschil Δm zit als energie 'verstopt' (E_b = Δm · c²).\n\n**Fissie** (splijten):\n• Zware kern (U-235, Pu-239) absorbeert neutron → splijt in 2 lichtere kernen + **2-3 neutronen** + ~200 MeV energie.\n• Voorbeeld: n + ²³⁵U → ¹⁴¹Ba + ⁹²Kr + 3n + energie.\n• Kettingreactie: 3 neutronen kunnen weer 3 splijtingen veroorzaken → exponentiële groei.\n\n**Fissie-toepassing**:\n• **Kerncentrale**: gecontroleerde kettingreactie. Regelstaven (cadmium/borium) absorberen neutronen → ketting in toom houden.\n• **Atoombom**: ongecontroleerde kettingreactie.\n• Restproduct: radioactief afval (lange t½, lastig).\n\n**Fusie** (samensmelten):\n• Lichte kernen + extreem hoge T (10⁷ K) → samensmelting → zwaardere kern + energie.\n• In zon: 4 ¹H → ⁴He + 2 e⁺ + 2 ν + energie (proton-proton-keten).\n• Op aarde: ²H + ³H → ⁴He + n + 17,6 MeV (D-T fusie, ITER-experiment).\n\n**Voordeel fusie**:\n• Brandstof overvloedig (deuterium uit zeewater).\n• Weinig radioactief afval (vooral kort-halverend).\n• Geen kettingreactie (kan niet 'op hol slaan').\n\n**Nadeel fusie**:\n• Extreem moeilijk: extreem hoge T + druk nodig.\n• Plasma-opsluiting (Tokamak, ITER) nog niet commercieel rendabel.\n\n**Einstein E = m·c²**: ook al verandert massa heel weinig — c² is enorm (9·10¹⁶ m²/s²) → energie aanzienlijk. 1 gram massa-verlies ≈ 9·10¹³ J ≈ energie 25 GWh.",
    checks: [
      {
        q: "Bij **fissie** komt energie vrij omdat:",
        options: [
          "Eindproducten dichter bij Fe-piek liggen → hogere E_b/nucleon",
          "Er extra protonen ontstaan",
          "De temperatuur stijgt",
          "Er meer neutronen zijn dan in de uitgangsstof"
        ],
        answer: 0,
        wrongHints: [null, "Niet — protonen worden niet extra gemaakt.", "Niet — T-stijging is gevolg, niet oorzaak.", "Niet — neutronen-overschot is bijproduct."],
        uitlegPad: {
          stappen: [
            { titel: "E_b/A-piek = Fe", tekst: "Bij U-235 (zware kern, lager E_b/A) → splijten naar middelzware kernen (hoger E_b/A). Massadefect groter → energie vrij volgens E=mc². Per splijting ~200 MeV — 1 miljoen keer chemische reactie." },
          ],
          niveaus: { basis: "Dichter bij Fe = stabieler = E vrij. A.", simpeler: "Splijtproducten zijn sterker gebonden → energie over. A.", nogSimpeler: "Bindingsenergie-winst = A." },
        },
      },
      {
        q: "Welke kern heeft de **hoogste bindingsenergie per nucleon**?",
        options: ["Fe-56", "H-1", "U-235", "He-4"],
        answer: 0,
        wrongHints: [null, "Niet — proton alleen heeft 0 E_b.", "Niet — U zit weg van piek (hoog A).", "Niet — He heeft hoge E_b, maar Fe meer."],
        uitlegPad: {
          stappen: [{ titel: "Fe-piek ≈ 8,8 MeV/nucleon", tekst: "IJzer-56 zit op de top van de bindingsenergie-kromme. Daarom is fusie naar Fe in sterren (na koolstof, zuurstof) een 'doodlopende straat': zwaarder fuseren KOST energie. Daarom ontploft een ster in een supernova zodra Fe-kern groot wordt." }],
          theorie: "Alle elementen zwaarder dan Fe (goud, uranium) ontstaan in supernova-explosies — niet in 'gewone' stervorming.",
          niveaus: { basis: "Fe-56. A.", simpeler: "IJzer is meest stabiel. A.", nogSimpeler: "Fe = A." },
        },
      },
      {
        q: "Wat is de **brandstof** van fusie in de zon?",
        options: ["Waterstof → helium", "Uranium", "Koolstof", "Zuurstof"],
        answer: 0,
        wrongHints: [null, "Niet — uranium = fissie op aarde.", "Niet — koolstof is in zwaardere sterren.", "Niet — zuurstof is fusie-product, niet brandstof."],
        uitlegPad: {
          stappen: [{ titel: "p-p-keten", tekst: "4 ¹H → ⁴He + 2 e⁺ + 2 ν + ~26 MeV. Zon zet elke seconde ~4·10⁹ kg waterstof in helium om. Voldoende voor nog 5 miljard jaar." }],
          theorie: "In zwaardere sterren (rode reuzen) lopen ook koolstof- en zuurstof-fusies → produceren zwaardere elementen tot Fe.",
          niveaus: { basis: "H → He fusie. A.", simpeler: "Waterstof smelt samen tot helium. A.", nogSimpeler: "H → He = A." },
        },
      },
      {
        q: "Voordeel **fusie** boven fissie?",
        options: [
          "Brandstof overvloedig + bijna geen langlevend radioactief afval",
          "Werkt bij kamertemperatuur",
          "Geen plasma nodig",
          "Geen netto energie nodig"
        ],
        answer: 0,
        wrongHints: [null, "Niet — vereist 10⁷ K plasma.", "Niet — vereist juist plasma-toestand.", "Onjuist — er is altijd opstart-energie."],
        uitlegPad: {
          stappen: [{ titel: "Deuterium uit zeewater + schoner", tekst: "Deuterium (²H) is in 1 op 6000 waterstof-atomen aanwezig — wereldzeeën leveren 'oneindig' brandstof. Fusie produceert vooral helium (niet-radioactief) + neutronen die kortlevend afval geven (jaren, niet duizenden jaren). Geen kettingreactie-risico." }],
          niveaus: { basis: "Brandstof overvloedig, weinig afval. A.", simpeler: "Zeewater geeft brandstof + nauwelijks afval. A.", nogSimpeler: "Schoner = A." },
        },
      },
      {
        q: "Een fissie-reactor gebruikt **regelstaven** (cadmium/borium) om:",
        options: [
          "Neutronen te absorberen → kettingreactie regelen",
          "Warmte op te slaan",
          "Elektriciteit op te wekken",
          "Radioactief afval te zuiveren"
        ],
        answer: 0,
        wrongHints: [null, "Niet — warmte gaat naar stoom-systeem.", "Niet — dat is generator/turbine.", "Niet — niet de functie."],
        uitlegPad: {
          stappen: [
            { titel: "Neutronen-absorbers", tekst: "Cadmium + borium hebben enorm grote neutron-absorptie-doorsnede. Staven in reactor inschuiven → meer absorptie → minder neutronen voor splijting → reactie zwakt af. Uitschuiven → meer neutronen → harder. **Volledig inschuiven = noodstop** (SCRAM)." },
          ],
          theorie: "Verschillend van koelmiddel (water): water voert warmte af + modereert neutronen (langzamer = beter geabsorbeerd door U-235).",
          niveaus: { basis: "Neutronen absorberen = reactie regelen. A.", simpeler: "Staven slokken neutronen op → minder splijting. A.", nogSimpeler: "Regelen = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — toepassingen + stralingsdosis",
    explanation:
      "**Equivalente dosis H** (Sv = sievert): biologische schade per kg weefsel, rekening houdend met **stralingstype**:\n• α: Q-factor 20 — 20× meer schade per joule.\n• β: Q-factor 1.\n• γ: Q-factor 1.\n• H = Q · D, met D = geabsorbeerde dosis (Gy = gray = J/kg).\n\n**Achtergrond-niveaus**:\n• Natuurlijke achtergrond NL: ~2 mSv/jaar (kosmische straling + radon + bodem).\n• Borstkas-röntgen: ~0,02 mSv (1% van jaardosis).\n• CT-scan: ~5-10 mSv.\n• Vlucht over Atlantische Oceaan: ~0,05 mSv (kosmische straling op hoogte).\n• Acute dosis (1 keer):\n  - 100 mSv: kans op kanker meetbaar verhoogd.\n  - 1 Sv: stralingsziekte.\n  - 5 Sv: 50% sterfte.\n\n**Beschermen**:\n• **Afstand**: dosis ~1/r². 2× verder = 4× minder.\n• **Tijd**: korter blijven = minder dosis (dosis = stralings-intensiteit × tijd).\n• **Afscherming**: papier voor α, Al voor β, dik lood/beton voor γ.\n\n**Toepassingen**:\n• Medisch: röntgenfoto (γ), CT, PET (positronen), bestraling tumor (gerichte γ), tracers (Tc-99m).\n• Industrie: niveau-meting tank, laskwaliteit-controle, sterilisatie medische instrumenten.\n• Datering: C-14 (archeologie), U-Pb (geologie miljard-jaren), K-Ar (lava).\n• Energie: kerncentrale (fissie), ITER-experiment (fusie).\n\n**VWO-extra**: stralings-werking op DNA → kanker / mutaties / acute effecten.",
    checks: [
      {
        q: "**Equivalente dosis** H = ?",
        options: ["Q · D (kwaliteitsfactor × geabsorbeerde dosis)", "D / Q", "Q + D", "Alleen D"],
        answer: 0,
        wrongHints: [null, "Niet — Q komt MAAL D.", "Niet — geen optelling.", "Niet — Q-factor wel meenemen."],
        uitlegPad: {
          stappen: [{ titel: "H = Q·D in sievert", tekst: "α heeft Q=20: dezelfde D (in Gy) geeft 20× zoveel schade als β of γ. Eenheid: J/kg, maar genoemd Sv om biologisch belang te markeren." }],
          niveaus: { basis: "H=Q·D. A.", simpeler: "Vermenigvuldigen voor schade-dosis. A.", nogSimpeler: "Q·D = A." },
        },
      },
      {
        q: "Verdubbeling van afstand tot bron geeft welke dosis-verandering?",
        options: ["4× lager", "2× lager", "Onveranderd", "4× hoger"],
        answer: 0,
        wrongHints: [null, "Niet — bij punt-bron is het 1/r²-wet.", "Niet — meer afstand = minder dosis.", "Niet — tegenovergesteld."],
        uitlegPad: {
          stappen: [{ titel: "1/r²-wet", tekst: "Net als geluid en licht: straling vanaf punt-bron verdeelt zich over bol-oppervlak 4πr². Verdubbel r → oppervlak 4×, intensiteit ÷4." }],
          theorie: "Daarom werkt afstand-bewaking goed: 5 m van bron = 25× minder dan 1 m.",
          niveaus: { basis: "1/r² → 4× minder. A.", simpeler: "Twee keer verder = vier keer minder. A.", nogSimpeler: "÷4 = A." },
        },
      },
      {
        q: "Welke isotoop heeft halveringstijd **van miljarden jaren** + wordt gebruikt voor leeftijds-bepaling rotsen?",
        options: ["U-238", "C-14", "I-131", "Tc-99m"],
        answer: 0,
        wrongHints: [null, "C-14 wordt voor iets ouds maar veel jongers ingezet.", "Medische isotoop, niet voor rotsen.", "Medische isotoop, niet voor rotsen."],
        uitlegPad: {
          stappen: [{ titel: "U-238 → Pb-206, t½=4,5 mld j", tekst: "Uranium-238 vervalt naar lood-206 met halveringstijd ~4,5 miljard jaar — ongeveer leeftijd aarde. Verhouding U/Pb in een rots → ouderdom. Klassieke methode voor oudste aardrotsen (4,4 mld j!)." }],
          niveaus: { basis: "U-238 voor rotsdatering. A.", simpeler: "Lange halveringstijd → miljard-jaren bereik. A.", nogSimpeler: "U-238 = A." },
        },
      },
      {
        q: "Een patiënt krijgt CT-scan van 10 mSv. Achtergrond is 2 mSv/j. Equivalent aan hoeveel achtergrond?",
        options: ["5 jaar", "5 dagen", "5 maanden", "5 weken"],
        answer: 0,
        wrongHints: [null, "Niet — 5 dagen achtergrond zou ~27 μSv zijn.", "Niet — controleer rekening.", "Niet — te kort."],
        uitlegPad: {
          stappen: [{ titel: "10 mSv / (2 mSv/j) = 5 jaar", tekst: "Een CT-scan = ~5 jaar natuurlijke achtergrond in één keer. Daarom alleen CT als medisch geïndiceerd, niet 'voor de zekerheid'." }],
          niveaus: { basis: "10/2=5 jaar. A.", simpeler: "CT-scan = 5 jaar achtergrond. A.", nogSimpeler: "5 j = A." },
        },
      },
      {
        q: "Welk stralingstype is **biologisch het gevaarlijkst** binnen het lichaam (ingeademd/gegeten)?",
        options: [
          "α — alle energie in klein volume + Q=20",
          "γ — gaat door alles heen",
          "β — gemiddeld doordringend",
          "Allemaal gelijk gevaarlijk"
        ],
        answer: 0,
        wrongHints: [null, "Niet — γ buiten lichaam is gevaarlijker, maar binnen verspreidt energie meer.", "Niet — minder gevaarlijk dan α binnen lijf.", "Niet — α heeft veel hogere Q-factor."],
        uitlegPad: {
          stappen: [
            { titel: "α binnen = lokaal vernietigend", tekst: "α-deeltje deponeert ALLE energie in 50 μm weefsel → cel-DNA in nabij gebied wordt verwoest. Buiten lichaam stopt α door huid. Maar **ingeademd radon** of **gegeten polonium** → α-bron in long/maag-cellen → kankerrisico hoog. Q-factor 20 weerspiegelt deze schade." },
          ],
          basiskennis: [
            { onderwerp: "Buiten vs binnen", uitleg: "Buiten lichaam: γ is gevaarlijkst (gaat door). Binnen lichaam: α is gevaarlijkst (lokaal sterk vernietigend)." },
          ],
          niveaus: { basis: "α intern = grootste schade. A.", simpeler: "Alpha-deeltjes vernietigen lokaal cellen → in lijf gevaarlijk. A.", nogSimpeler: "α binnen = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const radioactiviteitHavoVwo = {
  id: "radioactiviteit-havo-vwo",
  title: "Radioactiviteit + Kernfysica (HAVO/VWO Natuurkunde)",
  emoji: "☢️",
  level: "havo-vwo-4-5",
  subject: "natuurkunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Natuurkunde — Radioactiviteit + Kernfysica (CSE-onderwerp)",
  prerequisites: [
    { id: "elektriciteit-natuurkunde", title: "Elektriciteit (basis)", niveau: "vmbo-3" },
    { id: "mechanica-havo-vwo", title: "Mechanica (HAVO/VWO)", niveau: "havo-3F" },
  ],
  intro:
    "Radioactiviteit + kernfysica voor het HAVO/VWO CSE (Centraal Schriftelijk Eindexamen) — atoomkern, α/β/γ-straling, halveringstijd, activiteit, fissie + fusie + bindingsenergie, dosis + toepassingen. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "radioactief", "radioactiviteit", "straling",
    "atoomkern", "isotoop", "atoomnummer", "massagetal",
    "proton", "neutron", "elektron",
    "alpha", "alfa", "α-straling",
    "beta", "bèta", "β-straling",
    "gamma", "γ-straling",
    "halveringstijd", "t½",
    "becquerel", "Bq", "activiteit",
    "C-14", "koolstofdatering", "C-14-datering",
    "U-238", "uranium", "Pu-239", "plutonium",
    "fissie", "splijten", "kernsplijting",
    "fusie", "samensmelten",
    "kerncentrale", "kettingreactie",
    "regelstaaf", "moderator",
    "bindingsenergie", "Fe-56",
    "Einstein", "E=mc²",
    "tokamak", "ITER",
    "sievert", "Sv", "gray", "Gy",
    "dosis", "kwaliteitsfactor",
    "radon", "Tsjernobyl", "Fukushima",
    "Tc-99m", "PET", "röntgen",
  ],
  chapters,
  steps,
};

export default radioactiviteitHavoVwo;
