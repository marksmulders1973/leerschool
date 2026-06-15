// Leerpad: Mol + Stoichiometrie + Redox — HAVO/VWO Scheikunde
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Mol, Avogadro, molair volume,
// reactievergelijkingen balanceren, stoichiometrie, opbrengst, redox.
// VWO-extra: evenwicht (Kc, Le Chatelier), elektrolyse.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["⚖️", "🧪", "🧮", "🔋", "🏆"];

const chapters = [
  { letter: "A", title: "Mol + Avogadro", emoji: "⚖️", from: 0, to: 0 },
  { letter: "B", title: "Reactievergelijking balanceren", emoji: "🧪", from: 1, to: 1 },
  { letter: "C", title: "Stoichiometrie + opbrengst", emoji: "🧮", from: 2, to: 2 },
  { letter: "D", title: "Redox-reacties", emoji: "🔋", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (incl. evenwicht-VWO)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Mol + Avogadro ────────────────────────────────────
  {
    title: "Mol — Avogadro's getal + molair volume",
    explanation:
      "**Mol (mol)** = SI-eenheid voor hoeveelheid stof. 1 mol bevat **6,022·10²³ deeltjes** (= **Avogadro's getal N_A**).\n\n**Waarom mol?**\nAtomen zijn onnoembaar klein. 1 gram water bevat ~3,3·10²² moleculen. Door in mol te tellen krijgen we hanteerbare getallen.\n\n**Molaire massa M** (g/mol):\n• = massa van 1 mol stof.\n• Gelijk aan **atoommassa A** (van periodiek systeem) in g/mol.\n• Voorbeelden:\n  - H: M = 1,01 g/mol.\n  - C: M = 12,01 g/mol.\n  - O: M = 16,00 g/mol.\n  - Na: M = 22,99 g/mol.\n  - Cl: M = 35,45 g/mol.\n\n**Molaire massa van moleculen**: som van atomaire massa's.\n• H₂O: 2·1 + 16 = **18 g/mol**.\n• CO₂: 12 + 2·16 = **44 g/mol**.\n• NaCl: 23 + 35,5 = **58,5 g/mol**.\n\n**Kernformule** voor mol-massa-conversie:\n**n = m / M**\n• n = aantal mol.\n• m = massa (g).\n• M = molaire massa (g/mol).\n\n**Voor gassen** (STP: 0 °C + 1 atm):\n**V_mol = 22,4 L/mol**\n• Bij kamertemperatuur (25 °C): ~24,5 L/mol.\n• Geldt voor ELK ideaal gas (Avogadro's wet).\n\n**Aantal deeltjes**:\n**N = n · N_A**\n\n**Voorbeeld**: 18 g water = ?\n• n = 18/18 = 1 mol water.\n• Bevat N = 1·6,022·10²³ moleculen H₂O.\n• Bevat 3·6,022·10²³ = 1,8·10²⁴ atomen totaal (2H + 1O per molecuul).\n\n**Concentratie** (oplossingen):\n• c = n / V (mol/L = M = molair).\n• 1 M = 1 mol opgelost per liter.\n• Pure water: 55,5 M (= 1000/18).\n\n**Cito/CSE-tips**:\n• Bij gasvragen: gebruik 22,4 L/mol vóór som te beginnen.\n• Massa → mol: deel door M. Mol → massa: vermenigvuldig met M.",
    checks: [
      {
        q: "Molaire massa van **CO₂**? (C: 12, O: 16)",
        options: ["44 g/mol", "28 g/mol", "32 g/mol", "60 g/mol"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet de twee O's niet.", "Niet — dat is O₂.", "Niet — let op koolstof-deel."],
        uitlegPad: {
          stappen: [{ titel: "Som atoommassa's", tekst: "M(CO₂) = M(C) + 2·M(O) = 12 + 2·16 = **44 g/mol**." }],
          niveaus: { basis: "12+32=44 g/mol.", simpeler: "C + 2 O = 12+32 = 44.", nogSimpeler: "44" },
        },
      },
      {
        q: "Hoeveel mol zit er in **36 g water** (M=18 g/mol)?",
        options: ["2,0 mol", "0,5 mol", "18 mol", "36 mol"],
        answer: 0,
        wrongHints: [null, "Niet — andersom (m/M).", "Niet — verwarring m vs n.", "Niet — controleer formule."],
        uitlegPad: {
          stappen: [{ titel: "n = m/M", tekst: "n = 36/18 = **2,0 mol** water." }],
          niveaus: { basis: "36/18=2.", simpeler: "Massa delen door molaire massa: 2 mol.", nogSimpeler: "2,0" },
        },
      },
      {
        q: "Bij STP (0 °C, 1 atm): hoeveel L heeft **2 mol stikstofgas (N₂)**?",
        options: ["44,8 L", "22,4 L", "11,2 L", "2,8 L"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 1 mol.", "Niet — half.", "Onmogelijk."],
        uitlegPad: {
          stappen: [{ titel: "V = n · V_mol", tekst: "V = 2 · 22,4 = **44,8 L**. Alle ideale gassen nemen dezelfde volume per mol bij STP — onafhankelijk van stof." }],
          theorie: "Bij 25 °C i.p.v. 0 °C: gebruik 24,5 L/mol.",
          niveaus: { basis: "2·22,4 L.", simpeler: "Per mol 22,4 L → 2 mol = 44,8 L.", nogSimpeler: "44,8" },
        },
      },
      {
        q: "Hoeveel **moleculen** in 0,50 mol glucose?",
        options: ["3,01·10²³", "6,02·10²³", "1,5·10²⁴", "0,5"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 1 mol.", "Niet — te veel.", "Niet — dat is mol, geen deeltjes."],
        uitlegPad: {
          stappen: [{ titel: "N = n · N_A", tekst: "N = 0,50 · 6,022·10²³ = **3,01·10²³** moleculen. Avogadro-getal is constant — onafhankelijk van stof." }],
          niveaus: { basis: "0,5·6·10²³ = 3·10²³.", simpeler: "Half van Avogadro = 3·10²³.", nogSimpeler: "3·10²³" },
        },
      },
      {
        q: "Een NaCl-oplossing: 11,7 g NaCl in 0,50 L water. Concentratie? (M_NaCl = 58,5 g/mol)",
        options: ["0,40 M", "11,7 M", "0,20 M", "4,0 M"],
        answer: 0,
        wrongHints: [null, "Niet — dat is m, geen c.", "Niet — controleer rekening.", "Te hoog."],
        uitlegPad: {
          stappen: [
            { titel: "c = n/V", tekst: "n = 11,7/58,5 = 0,20 mol. c = 0,20/0,50 = **0,40 M** (mol/L). Vrij geconcentreerde NaCl-oplossing — vergelijkbaar met zeewater (~0,6 M)." },
          ],
          niveaus: { basis: "c=0,40 M.", simpeler: "Mol delen door volume = 0,4 M.", nogSimpeler: "0,4" },
        },
      },
    ],
  },

  // ─── B. Reactievergelijking balanceren ────────────────────
  {
    title: "Reactievergelijkingen balanceren",
    explanation:
      "**Wet van behoud van massa** (Lavoisier 1789): in een chemische reactie verandert massa niet — atomen kunnen alleen herschikken.\n\n**Gevolg**: aantal atomen LINKS = aantal atomen RECHTS van pijl.\n\n**Vorm reactievergelijking**:\nA + B → C + D\n• A, B = uitgangsstoffen (reactanten).\n• C, D = reactieproducten.\n• Pijl = 'reageert tot'.\n• Dubbelpijl (⇌): evenwichtsreactie.\n\n**Balanceren-procedure**:\n1. Schrijf ongebalanceerde vergelijking.\n2. Tel atomen per element links + rechts.\n3. Voeg **coëfficienten** vóór formules toe (NIET binnen formules!) om gelijk te maken.\n4. Begin met meest complexe molecuul. Houd O + H meestal laatste.\n5. Controleer alle atomen.\n\n**Voorbeeld 1 — methaan-verbranding**:\nCH₄ + O₂ → CO₂ + H₂O\nOngebalanceerd: 1C, 4H, 2O ↔ 1C, 2H, 3O.\nStap: 2 H₂O voor 4 H → CH₄ + O₂ → CO₂ + 2 H₂O.\nNu: 1C, 4H, 2O ↔ 1C, 4H, 4O.\nO mismatch: 2 O₂ voor 4 O → **CH₄ + 2 O₂ → CO₂ + 2 H₂O**. ✓\n\n**Voorbeeld 2 — synthese ammoniak**:\nN₂ + H₂ → NH₃\nGebalanceerd: **N₂ + 3 H₂ → 2 NH₃**.\n\n**Soorten reacties**:\n• **Verbranding**: stof + O₂ → oxiden (+ H₂O bij organische).\n• **Synthese**: A + B → AB.\n• **Ontleding**: AB → A + B.\n• **Substitutie**: AB + C → AC + B.\n• **Neutralisatie**: zuur + base → zout + water.\n\n**Toestandssymbolen**:\n• (s) = vast.\n• (l) = vloeibaar.\n• (g) = gas.\n• (aq) = aqua (in water opgelost).\n• Bv: HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l).\n\n**Cito/CSE-vraag-types**:\n• Coëfficienten invullen.\n• Onbalanceerde vergelijking afmaken.\n• Verbranding-formules organische stoffen.",
    checks: [
      {
        q: "Balanceer: ** ___ H₂ + ___ O₂ → ___ H₂O** — kleinste gehele coëfficienten?",
        options: ["2, 1, 2", "1, 1, 1", "1, 2, 2", "2, 2, 2"],
        answer: 0,
        wrongHints: [null, "Niet — links 2 H, rechts 1 H mis-balans.", "Niet — links 2 O, rechts 4 O.", "Niet — niet kleinste."],
        uitlegPad: {
          stappen: [{ titel: "2 H₂ + 1 O₂ → 2 H₂O", tekst: "Links: 4H, 2O. Rechts: 4H, 2O. ✓\nWatersynthese (knalgas-explosie)." }],
          niveaus: { basis: "2,1,2.", simpeler: "Twee H₂ + één O₂ → twee H₂O.", nogSimpeler: "2-1-2" },
        },
      },
      {
        q: "Verbranding propaan: C₃H₈ + ___ O₂ → ___ CO₂ + ___ H₂O?",
        options: ["5, 3, 4", "3, 3, 4", "4, 3, 3", "5, 3, 8"],
        answer: 0,
        wrongHints: [null, "Niet — O is verkeerd.", "Niet — controleer C.", "Niet — H telling."],
        uitlegPad: {
          stappen: [
            { titel: "C, H, dan O", tekst: "C₃H₈ + O₂ → CO₂ + H₂O. 3 C → 3 CO₂. 8 H → 4 H₂O. Rechts: 3·2 + 4·1 = 10 O → 5 O₂.\n\n**C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O**." },
          ],
          theorie: "Klassieke 'butaan/propaan-verbranding'-CSE-vraag. Brandgevaar in barbecue + gas-fornuis-reactie.",
          niveaus: { basis: "5,3,4.", simpeler: "Vijf zuurstof, drie CO₂, vier water.", nogSimpeler: "5-3-4" },
        },
      },
      {
        q: "Wat behoudt **massa** + **aantal atomen** in een reactie?",
        options: [
          "Atomen — alleen herschikt, niet vernietigd of gemaakt",
          "Moleculen behouden",
          "Energie behouden (Einstein)",
          "Geen behoud"
        ],
        answer: 0,
        wrongHints: [null, "Niet — moleculen veranderen wel.", "Onjuist hier — energie wel, maar vraag was atomen.", "Onjuist — wel behoud."],
        uitlegPad: {
          stappen: [{ titel: "Wet Lavoisier", tekst: "Atomen blijven dezelfde, alleen ze schuiven naar nieuwe combinaties. Daarom telt links = rechts per element. Massa-behoud is gevolg." }],
          niveaus: { basis: "Atomen behouden.", simpeler: "Aantal atomen elk element gelijk.", nogSimpeler: "Atomen" },
        },
      },
      {
        q: "**Neutralisatie**: HCl + NaOH → ___ + ___?",
        options: ["NaCl + H₂O", "NaH + ClOH", "Na + HCl + OH", "2 NaCl"],
        answer: 0,
        wrongHints: [null, "Niet — combinaties bestaan zo niet.", "Niet — molecuul vorm.", "Niet — geen Na+Cl los."],
        uitlegPad: {
          stappen: [
            { titel: "Zuur + base → zout + water", tekst: "HCl(aq) + NaOH(aq) → **NaCl(aq) + H₂O(l)**. Klassiek neutralisatie-patroon — zuur en base elimineren elkaar." },
          ],
          theorie: "Industriële toepassing: water-zuiveren, pH-regulatie in zwembad.",
          niveaus: { basis: "NaCl + H₂O.", simpeler: "Zout + water.", nogSimpeler: "Zout+water" },
        },
      },
      {
        q: "Welke verbranding-product van **koolstof + zuurstof** bij voldoende O₂?",
        options: ["CO₂", "CO", "C₂O", "H₂O"],
        answer: 0,
        wrongHints: [null, "Niet — dat is bij O-tekort.", "Bestaat niet.", "Geen waterstof in C+O."],
        uitlegPad: {
          stappen: [{ titel: "C + O₂ → CO₂", tekst: "Bij voldoende zuurstof: volledige verbranding → CO₂ (koolstof-dioxide). Bij tekort O: CO (koolmonoxide, GIFTIG, kleur- en reukloos = stille killer). Daarom altijd ventileren bij gas-apparaten." }],
          niveaus: { basis: "CO₂ bij voldoende O.", simpeler: "Volledig: CO₂. Tekort: CO.", nogSimpeler: "CO₂" },
        },
      },
    ],
  },

  // ─── C. Stoichiometrie + opbrengst ────────────────────────
  {
    title: "Stoichiometrie — mol-verhoudingen + opbrengst",
    explanation:
      "**Stoichiometrie**: berekenen met mol-verhoudingen uit reactievergelijkingen.\n\n**Coëfficienten = mol-verhouding**:\n2 H₂ + O₂ → 2 H₂O betekent:\n• 2 mol H₂ + 1 mol O₂ → 2 mol H₂O.\n• Of: 2 moleculen H₂ + 1 molecuul O₂ → 2 moleculen H₂O.\n\n**5-stappen-aanpak**:\n1. **Vergelijking** balanceren.\n2. **Gegeven** omzetten naar mol (n = m/M of n = V/V_mol).\n3. **Verhouding** toepassen om mol van gevraagde stof te krijgen.\n4. **Antwoord** omzetten naar gevraagde eenheid (g, L, of mol).\n5. **Controle**: massa-behoud klopt?\n\n**Voorbeeld**: hoeveel g water uit 16 g methaan-verbranding?\nCH₄ + 2 O₂ → CO₂ + **2 H₂O**.\n• n(CH₄) = 16/16 = 1 mol.\n• Verhouding 1 CH₄ : 2 H₂O → 2 mol H₂O.\n• m(H₂O) = 2 · 18 = **36 g**.\n\n**Beperkende reactant**:\nVaak heb je niet exact stoechiometrische hoeveelheden. De stof die EERST OP is = **limiterende reactant** → bepaalt opbrengst.\n\nVoorbeeld: 1 mol H₂ + 1 mol O₂ → ?\nReactie 2 H₂ + O₂ → 2 H₂O verlangt H₂:O₂ = 2:1. We hebben 1:1 → H₂ is limiterend.\n• Mol H₂O = mol H₂ × (2 H₂O / 2 H₂) = 1 mol.\n• Overblijvend O₂: 1 − 0,5 = 0,5 mol (de helft was 'overmaat').\n\n**Opbrengstpercentage**:\n• Theoretische opbrengst = max berekend.\n• Werkelijke opbrengst = wat je daadwerkelijk verzamelt (lab).\n• % opbrengst = (werkelijk/theoretisch) · 100%.\n• Verliezen door: niet volledig reagerend, bijproducten, filtratie-verlies.\n\n**Industriële schaal**: bij chemische fabriek, optimaliseren via Le Chatelier (drukken, T) om opbrengst > 95% te krijgen.",
    checks: [
      {
        q: "Reactie: **N₂ + 3 H₂ → 2 NH₃** (Haber-Bosch). Hoeveel mol NH₃ uit **6 mol H₂** (overmaat N₂)?",
        options: ["4 mol", "6 mol", "2 mol", "12 mol"],
        answer: 0,
        wrongHints: [null, "Niet — H₂ is limiterend.", "Niet — half.", "Niet — te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Mol-verhouding 3 H₂ : 2 NH₃", tekst: "n(NH₃) = 6 · (2/3) = **4 mol**. Met N₂ in overmaat is H₂ limiterend." },
          ],
          theorie: "Haber-Bosch is industrieel kunstmest-proces, 1 % van werelds-energiegebruik. Cruciaal voor voedselproductie.",
          niveaus: { basis: "6·2/3=4.", simpeler: "Voor elke 3 H₂ → 2 NH₃; dus 6 → 4.", nogSimpeler: "4" },
        },
      },
      {
        q: "Hoeveel **g CaCO₃** nodig om door zoutzuur **44 g CO₂** te maken? (CaCO₃ + 2 HCl → CaCl₂ + CO₂ + H₂O, M_CaCO₃=100, M_CO₂=44)",
        options: ["100 g", "200 g", "44 g", "50 g"],
        answer: 0,
        wrongHints: [null, "Niet — 1:1 verhouding.", "Niet — dat is massa CO₂.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "1:1 CaCO₃:CO₂", tekst: "n(CO₂) = 44/44 = 1 mol. Verhouding 1:1 → 1 mol CaCO₃ → m = 1·100 = **100 g**." },
          ],
          niveaus: { basis: "100 g.", simpeler: "Een mol CO₂ = een mol CaCO₃ = 100 g.", nogSimpeler: "100" },
        },
      },
      {
        q: "Een fabrikant maakt 80 g aspirine maar theoretisch zou 100 g mogelijk zijn. **Opbrengst** %?",
        options: ["80%", "20%", "100%", "125%"],
        answer: 0,
        wrongHints: [null, "Niet — dat is verlies.", "Niet — verlies aanwezig.", "Onmogelijk."],
        uitlegPad: {
          stappen: [{ titel: "Opbrengst = werk/theor × 100", tekst: "= 80/100 · 100% = **80%**. 20% verlies door niet-perfecte reactie + zuivering." }],
          niveaus: { basis: "80%.", simpeler: "80 uit 100 = 80%.", nogSimpeler: "80" },
        },
      },
      {
        q: "Bij **2 mol H₂ + 3 mol O₂** (2H₂ + O₂ → 2 H₂O): welke is limiterend?",
        options: ["H₂", "O₂", "Beide gelijk", "Geen — overmaat beide"],
        answer: 0,
        wrongHints: [null, "Niet — er is veel meer O₂ dan nodig.", "Niet — verhouding klopt niet.", "Niet — een is meer dan nodig."],
        uitlegPad: {
          stappen: [
            { titel: "Verhouding 2:1, gegeven 2:3", tekst: "Voor 2 mol H₂ heb je 1 mol O₂ nodig. Je hebt 3 mol O₂ = overmaat. **H₂ is limiterend** — het loopt eerder op. Resultaat: 2 mol H₂O + 2 mol O₂ over." },
          ],
          niveaus: { basis: "H₂ limiterend.", simpeler: "Veel teveel O₂; H₂ raakt eerst op.", nogSimpeler: "H₂" },
        },
      },
      {
        q: "Bij ideale verbranding 1 mol methaan: hoeveel **L CO₂** ontstaat? (STP, 22,4 L/mol)",
        options: ["22,4 L", "44,8 L", "11,2 L", "1 L"],
        answer: 0,
        wrongHints: [null, "Niet — 1:1.", "Niet — half.", "Verkeerde eenheid."],
        uitlegPad: {
          stappen: [
            { titel: "1:1 CH₄:CO₂", tekst: "CH₄ + 2 O₂ → CO₂ + 2 H₂O. 1 mol CH₄ → 1 mol CO₂ → V = 1 · 22,4 = **22,4 L** bij STP." },
          ],
          niveaus: { basis: "22,4 L.", simpeler: "Een mol gas = 22,4 L bij STP.", nogSimpeler: "22,4" },
        },
      },
    ],
  },

  // ─── D. Redox ─────────────────────────────────────────────
  {
    title: "Redox-reacties — oxidatie + reductie",
    explanation:
      "**Redox-reactie** = **electron-overdracht** tussen twee deeltjes.\n\n**Definities**:\n• **Oxidatie**: stof **verliest** elektronen → oxidatiegetal stijgt.\n• **Reductie**: stof **krijgt** elektronen → oxidatiegetal daalt.\n• **Oxidator**: stof die elektronen aantrekt → wordt ZELF gereduceerd.\n• **Reductor**: stof die elektronen geeft → wordt ZELF geoxideerd.\n\n*Geheugen-truc OIL RIG*: Oxidation Is Loss (of electrons), Reduction Is Gain.\n\n**Oxidatiegetallen** (HAVO basis):\n• Vrij element: 0 (Fe-metaal: 0; H₂-gas: 0).\n• Monatomisch ion: lading (Na⁺: +1; Cl⁻: −1).\n• O in oxide: meestal −2 (uitzondering: H₂O₂ = −1).\n• H: meestal +1 (uitzondering: metaalhydride zoals NaH = −1).\n• Som oxidatiegetallen in neutraal molecuul: 0.\n• Som in ion: lading van ion.\n\n**Voorbeeld**:\nFe + Cu²⁺ → Fe²⁺ + Cu\n• Fe: 0 → +2 → **GEOXIDEERD** (afgeeft 2 e⁻) → Fe is reductor.\n• Cu²⁺: +2 → 0 → **GEREDUCEERD** (neemt 2 e⁻ op) → Cu²⁺ is oxidator.\n\n**Veelvoorkomende redox**:\n• Roesten: Fe + O₂ + H₂O → Fe(OH)₃ (Fe oxideert van 0 naar +3).\n• Verbranding: C + O₂ → CO₂ (C oxideert).\n• Fotosynthese: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (omgekeerd, energie van zon).\n• Batterij: chemische redox → elektrische stroom.\n\n**Electrochemische cel**:\n• Twee halfcellen met elektroden in oplossingen.\n• Anode: oxidatie (− pool in batterij, + pool in galvanische cel).\n• Kathode: reductie.\n• Elektronen lopen door extern circuit van anode naar kathode.\n• Stroomsterkte × tijd × valentie = mol elektronen.\n\n**Edel- + onedele metalen**:\n• Edel (Au, Pt, Ag, Cu) = lage neiging om elektronen af te geven → minder roesten.\n• Onedel (Na, Mg, Zn, Fe) = hoge neiging om e⁻ af te geven → makkelijk geoxideerd.\n• 'Spanningsreeks' van onedel naar edel: K Ca Na Mg Al Zn Fe Pb (H) Cu Ag Au.\n\n**Cito/CSE-vraag-types**:\n• Identificeer oxidator/reductor.\n• Oxidatiegetal opstellen.\n• Halfreactie opschrijven.",
    checks: [
      {
        q: "Reactie: **Zn + Cu²⁺ → Zn²⁺ + Cu**. Wat wordt **geoxideerd**?",
        options: ["Zn", "Cu²⁺", "Zn²⁺", "Cu"],
        answer: 0,
        wrongHints: [null, "Niet — Cu²⁺ wordt gereduceerd.", "Niet — dat is een ION-product.", "Niet — eindproduct, zegt niets over reactie."],
        uitlegPad: {
          stappen: [{ titel: "Zn: 0 → +2 = oxidatie", tekst: "Zn verliest 2 elektronen → wordt Zn²⁺. Oxidatie = elektronen verlies. Zn is dus reductor (geeft elektronen aan Cu²⁺ over)." }],
          theorie: "Klassiek demonstratie-experiment: Zn-staaf in CuSO₄-oplossing → kopermetaal slaat neer op staaf, oplossing wordt kleurloos.",
          niveaus: { basis: "Zn → Zn²⁺ = oxidatie.", simpeler: "Zink geeft elektronen weg → wordt geoxideerd.", nogSimpeler: "Zn" },
        },
      },
      {
        q: "Oxidatie betekent:",
        options: [
          "Verlies van elektronen",
          "Winst van elektronen",
          "Reactie met zuur",
          "Reactie met water"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is reductie.", "Niet — verwarring zuur-base.", "Niet — niet specifiek voor redox."],
        uitlegPad: {
          stappen: [{ titel: "OIL — Oxidation Is Loss", tekst: "Onthoud-truc: OIL RIG.\n- **O**xidation **I**s **L**oss (of electrons).\n- **R**eduction **I**s **G**ain.\nOoit verwarring? Bedenk: oxidatie kwam oorspronkelijk van 'reactie met oxygen' (O₂). Maar verbreed: 'elektron-verlies' is de moderne def." }],
          niveaus: { basis: "Verlies van e⁻.", simpeler: "Oxidatie = elektronen weggeven.", nogSimpeler: "Verlies" },
        },
      },
      {
        q: "Oxidatiegetal van Mn in **KMnO₄**?",
        options: ["+7", "+5", "+4", "−1"],
        answer: 0,
        wrongHints: [null, "Niet — controleer som.", "Niet — dat is MnO₂.", "Onjuist teken."],
        uitlegPad: {
          stappen: [
            { titel: "Som = 0 oplossen", tekst: "K: +1 (alkali-metaal). O: −2 (×4 = −8). Totaal molecuul: 0.\n+1 + Mn + (−8) = 0 → Mn = **+7**. Sterk oxidator (paars zout, lab-reagens)." },
          ],
          theorie: "Mn in +7 is een van de hoogste oxidatiegetallen → 'wil' graag elektronen aannemen → krachtige oxidator (Mn²⁺ pink-rood eindproduct).",
          niveaus: { basis: "Mn = +7.", simpeler: "K(+1) + 4·O(−2) + Mn = 0 → Mn = +7.", nogSimpeler: "+7" },
        },
      },
      {
        q: "Roesten van ijzer (Fe + O₂ + H₂O → roest): Fe **wordt**:",
        options: [
          "Geoxideerd (van 0 naar +3)",
          "Gereduceerd",
          "Verzuurd",
          "Bevriezen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — Fe geeft elektronen.", "Onjuist concept.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "Fe → Fe³⁺ in roest", tekst: "In Fe(OH)₃ of Fe₂O₃ heeft Fe oxidatiegetal +3. Ging van 0 (metaal) naar +3 = oxidatie. O₂ is hier oxidator (wordt zelf gereduceerd van 0 naar −2 in OH⁻)." }],
          theorie: "Voorkoming roest: galvaniseren (zink-laag → 'opoffert' zich, beschermt Fe), schilderen (lucht buiten houden), of edelmetalen-leg-ringen.",
          niveaus: { basis: "Fe-geoxideerd.", simpeler: "IJzer geeft elektronen → oxidatie.", nogSimpeler: "Geoxideerd" },
        },
      },
      {
        q: "In een batterij is de **anode**:",
        options: [
          "De plek waar oxidatie plaatsvindt (− pool in cel)",
          "Altijd + pool",
          "Heeft geen functie",
          "Vangst elektronen op"
        ],
        answer: 0,
        wrongHints: [null, "Niet — in batterij is anode −.", "Onjuist.", "Niet — dat is kathode."],
        uitlegPad: {
          stappen: [
            { titel: "Anode = oxidatie", tekst: "Anode is per definitie waar oxidatie plaatsvindt (elektronen verlaten elektrode → naar extern circuit). In gewone batterij (galvanische cel): anode = − pool. In elektrolyse-cel: anode = + pool (geforceerd). Verwarrend! Onthoud regel: ANode = Anodische = OXidatie." },
          ],
          theorie: "Elektronen lopen door extern circuit van anode (−) naar kathode (+). Daarvoor 'opent' batterij het circuit.",
          niveaus: { basis: "Anode = oxidatie.", simpeler: "Anode geeft elektronen weg.", nogSimpeler: "Anode" },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — mix + evenwicht (VWO) + elektrolyse",
    explanation:
      "**Chemisch evenwicht** (VWO):\nBij omkeerbare reactie kan reactie zowel heen (→) als terug (←) lopen. Bij evenwicht: snelheden gelijk → concentraties veranderen niet meer.\n\n**Evenwichtsvoorwaarde** voor a A + b B ⇌ c C + d D:\n**K_c = [C]^c·[D]^d / ([A]^a·[B]^b)** (alleen concentraties; bij gassen K_p met partiële drukken).\n\n• K groot (>1000): evenwicht ligt rechts (veel product).\n• K klein (<10⁻³): evenwicht ligt links (weinig product).\n\n**Le Chatelier-principe**:\nAls een verstoring optreedt, verschuift evenwicht in de richting die de verstoring **tegenwerkt**.\n\n• Toevoegen reactant → schuift naar producten.\n• Wegnemen product → schuift naar producten.\n• Temperatuur ↑ → schuift naar **endotherme** kant.\n• Druk ↑ (gassen) → schuift naar zijde met **minder mol gas**.\n• Katalysator → verandert evenwicht NIET, alleen snelheid.\n\n**Industrieel Haber-Bosch** (NH₃-synthese, klassiek voorbeeld):\nN₂ + 3 H₂ ⇌ 2 NH₃, ΔH < 0 (exotherm).\n• Hoge druk → schuift naar minder mol gas-zijde (rechts, 4 mol → 2 mol).\n• Lage T zou rechts schuiven (Le Chatelier), maar snelheid daalt te ver → compromis ~450 °C met Fe-katalysator.\n\n**Elektrolyse** (VWO-onderwerp):\nGeforceerde redox via elektrische stroom. Anode = oxidatie (+ pool in elektrolyse), kathode = reductie (− pool).\n\n• Elektrolyse van water: 2 H₂O → 2 H₂ + O₂.\n• Aluminium-productie: Al₂O₃ (gesmolten) elektrolyseert → Al-metaal aan kathode.\n• Galvaniseren: voorwerp = kathode in oplossing → metaalionen worden er op afgezet.\n\n**Faraday-wet** (VWO):\nm = (M · I · t) / (z · F)\n• I = stroom (A), t = tijd (s), z = lading-getal, F = 96 485 C/mol.\n• Bv. hoeveel Cu uit oplossing met 2 A gedurende 30 min?",
    checks: [
      {
        q: "Hoeveel **mol H₂** bij verbranding van **8 g** methaan (M=16)?",
        options: [
          "Geen — methaan verbrandt naar CO₂ + H₂O, niet H₂",
          "0,5 mol",
          "1 mol",
          "0,25 mol"
        ],
        answer: 0,
        wrongHints: [null, "Niet — geen H₂ als product.", "Niet — geen H₂.", "Niet — geen H₂."],
        uitlegPad: {
          stappen: [{ titel: "Trick-vraag", tekst: "CH₄ + 2 O₂ → CO₂ + 2 H₂O. Producten zijn CO₂ + H₂O. Geen H₂-gas. Stoichiometrie-vraag vereist eerst kijken: bestaat dat product? Hier: nee." }],
          niveaus: { basis: "Geen H₂.", simpeler: "Verbranding geeft water, niet H₂.", nogSimpeler: "0" },
        },
      },
      {
        q: "**N₂ + 3 H₂ ⇌ 2 NH₃** (exotherm). Druk verhoogt — evenwicht schuift:",
        options: [
          "Naar rechts (richting NH₃, minder mol gas)",
          "Naar links",
          "Geen verandering",
          "Hangt af van katalysator"
        ],
        answer: 0,
        wrongHints: [null, "Niet — minder mol = rechts in dit geval.", "Onjuist — Le Chatelier reageert.", "Katalysator verandert evenwicht niet."],
        uitlegPad: {
          stappen: [
            { titel: "Le Chatelier — minder mol", tekst: "Links: 1+3 = 4 mol gas. Rechts: 2 mol. Hogere druk → evenwicht naar zijde met minder mol → **rechts** (meer NH₃). Daarom werkt Haber-Bosch op 200 atm." },
          ],
          theorie: "Voor exotherme reactie zou ook KOELEN rechts schuiven; maar te koud = te traag → industrieel compromis ~450 °C.",
          niveaus: { basis: "Druk↑ → rechts.", simpeler: "Minder mol-zijde = rechts.", nogSimpeler: "Rechts" },
        },
      },
      {
        q: "Een katalysator:",
        options: [
          "Versnelt reactie zonder evenwicht te verschuiven",
          "Verschuift evenwicht naar producten",
          "Werkt alleen bij hoge T",
          "Wordt verbruikt in reactie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — evenwicht onveranderd.", "Niet — onafhankelijk van T.", "Niet — wordt regenereerd."],
        uitlegPad: {
          stappen: [{ titel: "Verlaagt activeringsenergie", tekst: "Katalysator biedt alternatief reactie-pad met lagere Ea → reactie verloopt sneller. Geldt voor zowel heen- als terug-reactie → evenwichtspositie verandert NIET. Hoeveelheid katalysator blijft zelfde na reactie." }],
          theorie: "Voorbeelden: enzymen in cellen, platina in auto-katalysator (uitlaatgassen-zuivering), Fe in Haber-Bosch.",
          niveaus: { basis: "Sneller, geen schuiven.", simpeler: "Versnelt heen + terug evenveel.", nogSimpeler: "Snelheid" },
        },
      },
      {
        q: "Concentratie-eenheid M (molair) is gelijk aan:",
        options: ["mol/L", "g/L", "mol/kg", "deeltjes/L"],
        answer: 0,
        wrongHints: [null, "Niet — dat is dichtheid-massa.", "Niet — dat is molaliteit.", "Niet — deeltjes ≠ mol."],
        uitlegPad: {
          stappen: [{ titel: "M = molair = mol/L", tekst: "Bv. 1 M HCl = 1 mol opgelost in 1 L oplossing. Veel gebruikt in lab + medische context." }],
          niveaus: { basis: "M = mol/L.", simpeler: "Molair = mol per liter.", nogSimpeler: "mol/L" },
        },
      },
      {
        q: "Bij elektrolyse van **gesmolten NaCl**: aan **kathode** vormt zich:",
        options: [
          "Na-metaal (reductie van Na⁺)",
          "Cl₂-gas",
          "H₂-gas",
          "O₂-gas"
        ],
        answer: 0,
        wrongHints: [null, "Niet — Cl₂ vormt zich aan ANODE.", "Niet — geen water aanwezig.", "Niet — geen O."],
        uitlegPad: {
          stappen: [
            { titel: "Kathode = reductie", tekst: "Aan kathode (− pool): Na⁺ + e⁻ → Na (reductie). Aan anode (+ pool): 2 Cl⁻ → Cl₂ + 2 e⁻ (oxidatie). Industriële Na + Cl₂ productie via dit proces (chloor-alkali-elektrolyse)." },
          ],
          theorie: "In oplossing (NaCl in water) wint H₂O voor reductie aan kathode → H₂ ipv Na. Daarom gesmolten zout nodig voor Na-metaal.",
          niveaus: { basis: "Na aan kathode.", simpeler: "Kathode reduceert Na⁺ tot Na.", nogSimpeler: "Na" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const molStoichiometrieHavoVwo = {
  id: "mol-stoichiometrie-havo-vwo",
  title: "Mol + Stoichiometrie + Redox (HAVO/VWO Scheikunde)",
  emoji: "⚖️",
  level: "havo-vwo-4-5",
  subject: "scheikunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Scheikunde — Mol + Stoichiometrie + Redox (CSE-onderwerp)",
  prerequisites: [
    { id: "atoombouw-scheikunde", title: "Atoombouw + periodiek systeem", niveau: "vmbo-3" },
    { id: "chemische-reacties-scheikunde", title: "Chemische reacties (basis)", niveau: "vmbo-3" },
  ],
  intro:
    "Mol + stoichiometrie + redox voor HAVO/VWO eindexamen — Avogadro, molaire massa, reactievergelijkingen balanceren, mol-verhoudingen, opbrengst, redox-reacties + oxidatiegetallen. VWO-stof: chemisch evenwicht + Le Chatelier + elektrolyse + Faraday. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "mol", "molair", "molariteit",
    "Avogadro", "6,022·10²³", "N_A",
    "molaire massa", "M",
    "molair volume", "22,4 L",
    "STP",
    "concentratie", "M", "mol/L",
    "reactievergelijking", "balanceren",
    "coëfficient", "stoichiometrie",
    "limiterende reactant", "overmaat",
    "opbrengst", "rendement chemie",
    "verbranding", "methaan", "propaan",
    "neutralisatie", "zuur base",
    "synthese", "ontleding", "substitutie",
    "redox", "oxidatie", "reductie",
    "oxidator", "reductor",
    "OIL RIG",
    "oxidatiegetal",
    "Zn", "Cu", "Fe", "roest",
    "elektrochemische cel", "anode", "kathode",
    "elektrolyse", "Faraday",
    "Haber-Bosch", "NH₃-synthese",
    "evenwicht", "K_c", "K_p",
    "Le Chatelier",
    "katalysator", "activeringsenergie",
  ],
  chapters,
  steps,
};

export default molStoichiometrieHavoVwo;
