// Leerpad: Organische chemie HAVO/VWO scheikunde — eindexamen.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  zwart: "#1a1a1a",
  wit: "#f5f5f5",
  rood: "#c62828",
  groen: "#00897b",
  blauw: "#1565c0",
  geel: "#ffd54f",
};

const stepEmojis = ["⚛️", "🔗", "🧪", "🔥", "🏆"];

const chapters = [
  { letter: "A", title: "Koolstof + bindingen", emoji: "⚛️", from: 0, to: 0 },
  { letter: "B", title: "Alkanen + naamgeving", emoji: "🔗", from: 1, to: 1 },
  { letter: "C", title: "Functionele groepen", emoji: "🧪", from: 2, to: 2 },
  { letter: "D", title: "Reacties + verbranding", emoji: "🔥", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Koolstof + bindingen ──────────────────────────────
  {
    title: "Koolstof — element van het leven",
    explanation:
      "**Organische chemie** = chemie van **koolstof-verbindingen**. Alle bekende leven op aarde is op koolstof-basis. Een paar miljoen organische verbindingen bekend, vs ~100.000 anorganische.\n\n**Waarom koolstof zo bijzonder**:\n• Koolstof heeft **4 valentie-elektronen** → kan **4 covalente bindingen** maken.\n• Vormt **lange ketens** + **vertakkingen** + **ringen**.\n• Kan ook **dubbele** en **drievoudige** bindingen vormen (C=C, C≡C).\n• Resultaat: enorme variëteit aan moleculen.\n\n**Octetregel + koolstof**:\n• Atomen willen 8 elektronen in buitenste schil (edelgas-config).\n• Koolstof heeft 4 → deelt 4 → krijgt 8 (octet).\n• Daarom altijd **4 bindingen** in stabiel koolstof.\n\n**Veel-voorkomende atomen in organische verbindingen**:\n• **C** (koolstof): 4 bindingen.\n• **H** (waterstof): 1 binding.\n• **O** (zuurstof): 2 bindingen.\n• **N** (stikstof): 3 bindingen.\n• Halogenen (F, Cl, Br, I): 1 binding.\n\n**Notatie organisch**:\n• **Structuurformule**: alle atomen + bindingen getekend. CH₄ = methaan = C met 4 H eromheen.\n• **Skelet-formule**: alleen koolstof-skelet getekend, H weglaten. Veel sneller voor lange moleculen.\n• **Molecuulformule**: alleen atomen tellen. CH₄, C₂H₆, C₃H₈.\n\n**Levensbouwstenen organisch**:\n• **Eiwitten** (proteïnen): koolstof + waterstof + zuurstof + stikstof + zwavel.\n• **Koolhydraten** (suikers): C + H + O. Bv. glucose C₆H₁₂O₆.\n• **Vetten**: C + H + O.\n• **DNA**: C + H + O + N + P.",
    checks: [
      {
        q: "Hoeveel **bindingen** maakt koolstof normaal?",
        options: ["4","1","2","Wisselt sterk"],
        answer: 0,
        wrongHints: [null, "Niet — dat is waterstof.", "Niet — dat is zuurstof.", "Niet — koolstof is stabiel 4."],
        uitlegPad: {
          stappen: [{ titel: "4 valentie-elektronen", tekst: "Koolstof heeft **4 elektronen** in buitenste schil. Wil naar 8 (octet) → deelt 4 met andere atomen → **4 covalente bindingen**. Altijd. Stabiel." }],
          woorden: [{ woord: "valentie-elektron", uitleg: "Elektron in buitenste schil — bepaalt binding-gedrag." }, { woord: "covalente binding", uitleg: "Gedeelde elektronenparen tussen atomen." }],
          theorie: "Octetregel: atomen willen 8 elektronen in buitenste schil (edelgas-config Ne, Ar, Kr).",
          niveaus: { basis: "4. A.", simpeler: "Koolstof = 4 bindingen = A.", nogSimpeler: "4 = A." },
        },
      },
      {
        q: "Wat is de **molecuulformule** van methaan?",
        options: ["CH₄","CH₃","C₂H₆","CO₂"],
        answer: 0,
        wrongHints: [null, "Niet — onmogelijk (3 H + 1 C zou C 1 binding open laten).", "Niet — dat is ethaan.", "Niet — dat is koolstofdioxide (geen koolstof-waterstof)."],
        uitlegPad: {
          stappen: [{ titel: "1 C + 4 H = methaan", tekst: "**Methaan** = simpelste alkaan. 1 koolstof + 4 waterstof = CH₄. Structuur: tetrahedrisch (4 H rond C, hoeken 109,5°)." }],
          theorie: "Aardgas = grotendeels methaan. Geur (rotte eieren) is toegevoegd voor veiligheid — methaan zelf reukloos.",
          niveaus: { basis: "CH₄. A.", simpeler: "Methaan = CH₄ = A.", nogSimpeler: "CH4 = A." },
        },
      },
      {
        q: "Welk atoom heeft **1 binding** in organische verbindingen?",
        options: ["H (waterstof)","C","O","N"],
        answer: 0,
        wrongHints: [null, "Niet — 4 bindingen.", "Niet — 2 bindingen.", "Niet — 3 bindingen."],
        uitlegPad: {
          stappen: [{ titel: "H = 1 elektron = 1 binding", tekst: "Waterstof heeft maar **1 elektron** → maar 1 binding. Vandaar dat H altijd 'eindpunt' is in organische molecule." }],
          theorie: "Onthoud: C=4, H=1, O=2, N=3, halogenen=1.",
          niveaus: { basis: "H. A.", simpeler: "Waterstof = 1 binding = A.", nogSimpeler: "H = A." },
        },
      },
      {
        q: "Welke verbinding is **organisch**?",
        options: ["Glucose (C₆H₁₂O₆)","Water (H₂O)","Zout (NaCl)","Zuurstofgas (O₂)"],
        answer: 0,
        wrongHints: [null, "Niet — geen koolstof.", "Niet — anorganisch.", "Niet — geen koolstof."],
        uitlegPad: {
          stappen: [{ titel: "Organisch = koolstof-verbinding", tekst: "**Organisch** = bevat koolstof (en meestal waterstof). Glucose = C₆H₁₂O₆ = klassiek organisch. Water, zout, zuurstofgas = anorganisch (geen C of geen typische C-H-binding)." }],
          theorie: "Uitzonderingen: CO₂, CO, carbonaten (zoals kalk CaCO₃) zijn koolstof-bevattend maar anorganisch.",
          niveaus: { basis: "Glucose. A.", simpeler: "Glucose heeft C = organisch = A.", nogSimpeler: "Glucose = A." },
        },
      },
      {
        q: "Welke binding-soorten kan koolstof vormen?",
        options: ["Enkele, dubbele, drievoudige","Alleen enkele","Alleen dubbele","Onbeperkt veel"],
        answer: 0,
        wrongHints: [null, "Niet — ook C=C en C≡C.", "Niet — ook enkele.", "Niet — max 3 (octetregel)."],
        uitlegPad: {
          stappen: [{ titel: "Enkele/dubbele/drievoudige", tekst: "Koolstof kan delen: **1 paar** (enkele, C-C), **2 paren** (dubbele, C=C), **3 paren** (drievoudige, C≡C). Voorbeeld: ethaan (enkel), etheen (dubbel), ethyn (drievoudig)." }],
          niveaus: { basis: "Drie soorten. A.", simpeler: "1, 2 of 3 paren = A.", nogSimpeler: "1-2-3 = A." },
        },
      },
    ],
  },

  // ─── B. Alkanen + naamgeving ──────────────────────────────
  {
    title: "Alkanen + naamgeving",
    explanation:
      "**Alkanen** = verzadigde koolwaterstoffen (alleen enkele bindingen). Algemene formule: **CₙH₂ₙ₊₂**.\n\n**Eerste 10 alkanen** (onthouden!):\n| n | Naam | Formule | Toepassing |\n|---|------|---------|------------|\n| 1 | methaan | CH₄ | aardgas |\n| 2 | ethaan | C₂H₆ | aardgas |\n| 3 | propaan | C₃H₈ | barbecue |\n| 4 | butaan | C₄H₁₀ | aansteker |\n| 5 | pentaan | C₅H₁₂ | benzine-fractie |\n| 6 | hexaan | C₆H₁₄ | benzine |\n| 7 | heptaan | C₇H₁₆ | benzine |\n| 8 | octaan | C₈H₁₈ | benzine (vandaar 'octaangetal') |\n| 9 | nonaan | C₉H₂₀ | benzine |\n| 10 | decaan | C₁₀H₂₂ | diesel |\n\n**Geheugen-bruggetje**: 'Met Em Pakte Bij Pap Het Hele Octopus-Net Dichter' (M-E-P-B-P-H-H-O-N-D).\n\n**Naamgeving regels (IUPAC)**:\n1. **Vind langste C-keten** = hoofdketen → bepaalt naam.\n2. **Nummer atomen** zo dat zijgroepen laagste nummers krijgen.\n3. **Vermeld zijgroepen** met positie + naam vooraan.\n4. **Alfabetiseer** zijgroepen.\n5. **Multi-prefix** (di, tri, tetra) telt niet voor alfabet.\n\n**Zijgroepen** (alkylgroepen):\n• 1 C: methyl (-CH₃).\n• 2 C: ethyl (-C₂H₅).\n• 3 C: propyl (-C₃H₇).\n\n**Voorbeeld 2-methylpropaan**:\n```\n     CH₃\n      |\nCH₃ - CH - CH₃\n```\nNiet 'isobutaan' meer in IUPAC, maar **2-methylpropaan** (methyl op koolstof 2 van propaan-keten).\n\n**Isomerie**:\n• Zelfde molecuulformule, andere structuur.\n• Butaan C₄H₁₀ kan 'gewoon' butaan (n-butaan) OF 2-methylpropaan zijn.\n• Bij meer atomen explodeert het aantal isomeren: C₅H₁₂ = 3 isomeren, C₁₀H₂₂ = 75 isomeren.\n\n**Cyclo-alkanen**:\n• Ringen i.p.v. ketens. Formule CₙH₂ₙ.\n• Cyclohexaan = C₆H₁₂.\n• Komt veel voor in benzine + chemische industrie.",
    checks: [
      {
        q: "Wat is de **algemene formule** van een alkaan?",
        options: ["CₙH₂ₙ₊₂","CₙH₂ₙ","CₙHₙ","CₙH₂ₙ₋₂"],
        answer: 0,
        wrongHints: [null, "Niet — dat is alkenen (dubbele binding) of cyclo-alkanen.", "Niet.", "Niet — dat is alkynen (drievoudig)."],
        uitlegPad: {
          stappen: [{ titel: "Verzadigd = max H", tekst: "Alkanen = alleen enkele bindingen = max waterstof. Formule **CₙH₂ₙ₊₂**. Bv. n=3: C₃H₈ (propaan)." }],
          theorie: "Onthoud verschil: alkaan CₙH₂ₙ₊₂, alkeen CₙH₂ₙ (1 dubbel), alkyn CₙH₂ₙ₋₂ (1 driedubbel), cyclo-alkaan CₙH₂ₙ.",
          niveaus: { basis: "CₙH₂ₙ₊₂. A.", simpeler: "Alkaan = CₙH₂ₙ₊₂ = A.", nogSimpeler: "2n+2 = A." },
        },
      },
      {
        q: "Hoeveel **koolstofatomen** heeft pentaan?",
        options: ["5","3","6","10"],
        answer: 0,
        wrongHints: [null, "Niet — dat is propaan.", "Niet — dat is hexaan.", "Niet — dat is decaan."],
        uitlegPad: {
          stappen: [{ titel: "Penta = 5", tekst: "Penta-prefix (Grieks: vijf). **Pentaan = C₅H₁₂**. Veel-gebruikt: penthouse (5 verdiepingen), pentagram (5-puntige ster), pentathlon (5 sporten)." }],
          theorie: "Memo: meth=1, eth=2, prop=3, but=4, pent=5, hex=6, hept=7, oct=8, non=9, dec=10.",
          niveaus: { basis: "5. A.", simpeler: "Pentaan = 5 C = A.", nogSimpeler: "5 = A." },
        },
      },
      {
        q: "**Octaangetal** in benzine verwijst naar:",
        options: ["Verbrandingseigenschap (anti-klopcapaciteit)","Aantal octaan-moleculen","Octopus-uitvinding","Olie-prijs"],
        answer: 0,
        wrongHints: [null, "Niet — geen rechtstreekse aantal.", "Niet — irrelevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Octaangetal = brandeigenschap", tekst: "**Octaangetal** geeft hoe **goed brandstof presteert** in motor. Schaal: octaan (zeer goed) = 100, heptaan (slecht, klopt) = 0. Benzine 95 = vergelijkbaar met mix van 95% octaan + 5% heptaan." }],
          theorie: "Cito-actueel: Euro 95 / 98 verwijst naar octaangetal. Hogere octaangetal = duurder + voor zwaardere motoren.",
          niveaus: { basis: "Verbrandingseigenschap. A.", simpeler: "Octaangetal = brandkwaliteit = A.", nogSimpeler: "Brand = A." },
        },
      },
      {
        q: "Hoeveel **isomeren** heeft butaan C₄H₁₀?",
        options: ["2 (n-butaan + iso-butaan)","1","3","Onbeperkt"],
        answer: 0,
        wrongHints: [null, "Niet — minstens 2.", "Niet — meer voor C₅H₁₂.", "Niet — beperkt."],
        uitlegPad: {
          stappen: [{ titel: "Twee isomeren C₄H₁₀", tekst: "1) **n-Butaan**: rechte keten CH₃-CH₂-CH₂-CH₃. 2) **2-Methylpropaan** (iso-butaan): vertakt. Zelfde formule, andere structuur." }],
          woorden: [{ woord: "isomeer", uitleg: "Verbinding met dezelfde molecuulformule maar verschillende structuur." }],
          theorie: "C₅H₁₂ heeft 3 isomeren, C₆H₁₄ heeft 5, C₁₀H₂₂ heeft 75. Aantal groeit snel.",
          niveaus: { basis: "2. A.", simpeler: "C₄H₁₀ = 2 isomeren = A.", nogSimpeler: "2 = A." },
        },
      },
      {
        q: "Welke alkaan zit in een **aansteker**?",
        options: ["Butaan","Methaan","Decaan","Benzeen"],
        answer: 0,
        wrongHints: [null, "Niet — dat is aardgas (geen vloeistof).", "Niet — diesel, niet aansteker.", "Niet — benzeen is anders (aromatisch)."],
        uitlegPad: {
          stappen: [{ titel: "Butaan = vloeibaar bij druk", tekst: "**Butaan** (C₄H₁₀) is gas bij kamertemperatuur maar wordt **vloeibaar onder druk** in aansteker. Bij openen vervliegt + ontbrandt. Propaan (C₃H₈) zit in barbecue-tanks." }],
          theorie: "Cito-pattern: butaan vs propaan = vergelijkbaar maar butaan vloeibaar bij lagere druk.",
          niveaus: { basis: "Butaan. A.", simpeler: "Aansteker = butaan = A.", nogSimpeler: "Butaan = A." },
        },
      },
    ],
  },

  // ─── C. Functionele groepen ───────────────────────────────
  {
    title: "Functionele groepen — alcoholen, zuren, esters",
    explanation:
      "**Functionele groep** = chemisch reactief deel van een molecuul. Bepaalt eigenschappen + reacties.\n\n**Belangrijkste functionele groepen op HAVO/VWO**:\n\n**1. Alcohol** (-OH, hydroxylgroep):\n• Voorbeeld: ethanol C₂H₅OH (drank-alcohol).\n• Naamgeving: -ol-uitgang.\n• Methanol (CH₃OH) = giftig (auto-brandstof, biobrandstof).\n• Ethanol (CH₃CH₂OH) = drinkbaar (in maat).\n• Propanol, butanol, etc.\n\n**2. Carbonzuur** (-COOH):\n• Voorbeeld: azijnzuur (ethaanzuur) CH₃COOH.\n• Naamgeving: -zuur-uitgang.\n• Mierenzuur (methaanzuur) HCOOH = giftig.\n• Citroenzuur, melkzuur, vetzuren.\n• Reageren als **zwak zuur** (proton-donor).\n\n**3. Ester** (-COO-, koppelt zuur + alcohol):\n• Voorbeeld: ethylacetaat (ester van azijnzuur + ethanol).\n• Naamgeving: alcohol-naam + zuur-naam-aat.\n• Geuren in fruit + parfum: ester-verbindingen.\n• Banaan-aroma = isoamyl-acetaat.\n\n**4. Aldehyde** (-CHO, eindstandig):\n• Voorbeeld: formaldehyde HCHO.\n• Naamgeving: -al-uitgang.\n• Gebruikt in conservering, plastic.\n\n**5. Keton** (C=O, midden in keten):\n• Voorbeeld: aceton CH₃COCH₃.\n• Naamgeving: -on-uitgang.\n• Aceton in nagellak-verwijderaar.\n\n**6. Amine** (-NH₂, lijkt op ammoniak):\n• Voorbeeld: methylamine CH₃NH₂.\n• Aminozuren bevatten amine + carbonzuur.\n• Basische eigenschappen.\n\n**Ester-vorming (verestering)**:\nZuur + alcohol → ester + water (omkeerbare reactie):\n• CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O\n• Azijnzuur + ethanol → ethylacetaat + water.\n\n**Detecteren met indicatoren** (Cito-onderdeel):\n• Alcohol: niet zuur/basisch in water.\n• Carbonzuur: zuur in water (pH < 7), rood lakmoes.\n• Amine: basisch in water (pH > 7), blauw lakmoes.\n• Pas op: niet alle organische verbindingen reageren met lakmoes.",
    checks: [
      {
        q: "Welke **functionele groep** heeft ethanol?",
        options: ["-OH (alcohol)","-COOH (zuur)","-CHO (aldehyde)","-NH₂ (amine)"],
        answer: 0,
        wrongHints: [null, "Niet — dat is azijnzuur etc.", "Niet — dat is aldehyde.", "Niet — dat is amine."],
        uitlegPad: {
          stappen: [{ titel: "-OL = alcohol = -OH", tekst: "**Ethanol** (drank-alcohol) C₂H₅OH heeft een **hydroxylgroep** (-OH) → het IS een alcohol. -ol uitgang in naam." }],
          woorden: [{ woord: "hydroxylgroep", uitleg: "-OH groep, kenmerk van alcohol." }],
          niveaus: { basis: "-OH. A.", simpeler: "Ethanol = alcohol = -OH = A.", nogSimpeler: "-OH = A." },
        },
      },
      {
        q: "Welk **carbonzuur** zit in azijn?",
        options: ["Ethaanzuur (CH₃COOH)","Methaanzuur (HCOOH)","Salicylzuur","Zwavelzuur"],
        answer: 0,
        wrongHints: [null, "Niet — dat is mierenzuur.", "Niet — dat zit in aspirine.", "Niet — dat is anorganisch."],
        uitlegPad: {
          stappen: [{ titel: "Azijn = 5% ethaanzuur", tekst: "Azijn = waterige oplossing van **5% ethaanzuur** (= azijnzuur, CH₃COOH). Smaak zuur door H⁺ vrijgave in water." }],
          theorie: "Andere namen: 'azijnzuur' is dezelfde stof als 'ethaanzuur' (= IUPAC).",
          niveaus: { basis: "Ethaanzuur. A.", simpeler: "Azijn = ethaanzuur = A.", nogSimpeler: "Azijnzuur = A." },
        },
      },
      {
        q: "Welk soort verbinding ontstaat bij **alcohol + zuur**?",
        options: ["Ester","Aldehyde","Keton","Amine"],
        answer: 0,
        wrongHints: [null, "Niet — andere reactie nodig.", "Niet — keton uit alcohol-oxidatie.", "Niet — uit ammoniak-derivaten."],
        uitlegPad: {
          stappen: [{ titel: "Verestering", tekst: "**Alcohol + carbonzuur → ester + water** (omkeerbare reactie). Voorbeeld: ethanol + azijnzuur → ethylacetaat + water. Esters geuren prettig (fruit, parfum)." }],
          theorie: "Cito-favoriet: ester-vorming als reactie-vraag. Vergeet 'water' niet als bijproduct.",
          niveaus: { basis: "Ester. A.", simpeler: "Alcohol + zuur = ester (+ water) = A.", nogSimpeler: "Ester = A." },
        },
      },
      {
        q: "**Aceton** (CH₃COCH₃) is een:",
        options: ["Keton","Aldehyde","Alcohol","Amine"],
        answer: 0,
        wrongHints: [null, "Niet — C=O zit in midden, niet aan einde.", "Niet — geen -OH.", "Niet — geen N."],
        uitlegPad: {
          stappen: [{ titel: "Keton vs aldehyde", tekst: "**Keton**: C=O groep **in midden** van keten (R-CO-R'). **Aldehyde**: C=O groep **aan einde** (R-CHO). Aceton (CH₃COCH₃) = midden → keton. Naamgeving -on-uitgang." }],
          theorie: "Toepassing aceton: nagellak-verwijderaar, plastic-oplosmiddel.",
          niveaus: { basis: "Keton. A.", simpeler: "C=O midden = keton = A.", nogSimpeler: "Keton = A." },
        },
      },
      {
        q: "Een **amine** is basisch omdat:",
        options: ["N-atoom kan H⁺ opnemen","H-atomen vrijgeven","Geen reactie","Wel zuur"],
        answer: 0,
        wrongHints: [null, "Niet — dat is juist zuur.", "Niet — wel reactie.", "Niet — basisch."],
        uitlegPad: {
          stappen: [{ titel: "Amine = ammoniak-derivaat", tekst: "**Amines** (-NH₂) zijn afgeleid van ammoniak (NH₃). N heeft 1 vrij elektronenpaar — kan H⁺ opnemen → basisch. pH > 7 in water." }],
          theorie: "Cito-pattern: amines kleuren rood lakmoes BLAUW (basisch), carbonzuren omgekeerd.",
          niveaus: { basis: "N neemt H⁺ op. A.", simpeler: "Amine basisch door N = A.", nogSimpeler: "H⁺ op = A." },
        },
      },
    ],
  },

  // ─── D. Reacties + verbranding ────────────────────────────
  {
    title: "Reacties + verbranding",
    explanation:
      "Organische verbindingen ondergaan diverse reacties. Belangrijkste voor HAVO/VWO:\n\n**1. Verbranding (oxidatie)**:\n\n**Volledige verbranding** (genoeg zuurstof):\n• Alkaan + O₂ → **CO₂ + H₂O** + warmte.\n• Bv. propaan: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.\n• **Balansvergelijking**: tel C, H, O links + rechts. Moet kloppen.\n\n**Onvolledige verbranding** (te weinig zuurstof):\n• Alkaan + minder O₂ → **CO** (koolmonoxide) + H₂O + roet.\n• Gevaarlijk: CO is reukloos + dodelijk (CO-vergiftiging).\n• Zwart roet zichtbaar.\n• Gebeurt in slecht-ventileerde geisers, oude open haarden.\n\n**Energie-vergelijking**:\n• Verbrandingsreactie is **exotherm** = geeft energie af (warmte + licht).\n• Brandstof-waarde: hoeveel J energie per gram of mol.\n• Methaan ~890 kJ/mol bij volledige verbranding.\n\n**2. Substitutie (alkanen + halogeen)**:\n• CH₄ + Cl₂ → CH₃Cl + HCl (met UV-licht).\n• 1 H vervangen door Cl.\n• Klassiek HAVO-reactie.\n\n**3. Additie (alkenen + alkynen)**:\n• Dubbele binding kan reageren met H₂, X₂ (halogeen), HX, etc.\n• Bv: etheen + waterstof → ethaan: C₂H₄ + H₂ → C₂H₆.\n• Bv: etheen + broom → 1,2-dibromoethaan: C₂H₄ + Br₂ → C₂H₄Br₂.\n• Onverzadigd → verzadigd.\n\n**4. Polymerisatie**:\n• Vele kleine monomeren → polymeer (lange keten).\n• Voorbeeld plastics: etheen (C₂H₄) → poly-etheen (PE, plastic-zak).\n• Andere: PVC (uit chloor-etheen), PET (frisdrank-flessen).\n\n**5. Verestering** (zie stap C):\n• Alcohol + zuur → ester + water.\n\n**6. Hydrolyse**:\n• Omgekeerd van verestering: ester + water → alcohol + zuur.\n• Ook eiwit-verbindingen, vetten, koolhydraten kunnen hydrolyseren.\n\n**Brandstoffen** (Cito-actueel):\n• Aardgas (methaan): NL-belangrijkste energiebron tot ~2020.\n• Benzine: mix van C₅-C₁₂ alkanen.\n• Diesel: mix van C₁₀-C₂₀.\n• LPG: butaan + propaan.\n• Biobrandstoffen: ethanol uit maïs/suikerriet, biodiesel uit plantaardige olie.\n• Waterstof: schoon (alleen H₂O bij verbranding), maar duur.\n\n**Klimaat-context**: bij elke verbranding van koolstof-verbindingen komt **CO₂** vrij. Hoofdoorzaak antropogene klimaatverandering. Oplossingen: minder fossiele brandstof, meer hernieuwbaar.",
    checks: [
      {
        q: "Bij **volledige verbranding** van methaan ontstaat:",
        options: ["CO₂ + H₂O","CO + H₂O","CH₂O","Alleen O₂"],
        answer: 0,
        wrongHints: [null, "Niet — dat is onvolledig.", "Niet — geen reactieproduct.", "Niet — O₂ wordt verbruikt."],
        uitlegPad: {
          stappen: [{ titel: "CH₄ + 2 O₂ → CO₂ + 2 H₂O", tekst: "Volledige verbranding methaan: **CH₄ + 2 O₂ → CO₂ + 2 H₂O**. Balanceer: 1 C, 4 H, 4 O links + rechts. Kloppen ✓." }],
          theorie: "Onvolledige verbranding (te weinig O₂): CH₄ + minder O₂ → CO (giftig) + H₂O + roet.",
          niveaus: { basis: "CO₂ + H₂O. A.", simpeler: "Volledig = CO₂+H₂O = A.", nogSimpeler: "CO₂+H₂O = A." },
        },
      },
      {
        q: "**Koolmonoxide (CO)** is gevaarlijk omdat:",
        options: ["Het is reukloos + dodelijk","Het ruikt slecht","Het maakt veel rook","Het is brandbaar"],
        answer: 0,
        wrongHints: [null, "Niet — onruikbaar = gevaar.", "Niet — onzichtbaar.", "Wel brandbaar maar dat is niet hoofd-gevaar."],
        uitlegPad: {
          stappen: [{ titel: "CO bind aan hemoglobine", tekst: "**CO** bindt 200× sterker aan hemoglobine dan zuurstof. Hemoglobine kan geen O₂ meer vervoeren → verstikking. **Reukloos + smaakloos** → slachtoffer merkt niets, valt in slaap, sterft. Slecht-ventileerde geisers = klassieke oorzaak." }],
          theorie: "Cito-actueel: CO-melders verplicht sinds 2024 in elke woning met gasapparaat. Voorkomt ~10 NL-doden per jaar.",
          niveaus: { basis: "Reukloos + dodelijk. A.", simpeler: "CO = stille killer = A.", nogSimpeler: "Reukloos = A." },
        },
      },
      {
        q: "Etheen (C₂H₄) + waterstof (H₂) → ?",
        options: ["Ethaan (C₂H₆)","Ethanol","Etheen","Methaan"],
        answer: 0,
        wrongHints: [null, "Niet — dat heeft -OH erbij.", "Niet — zelfde uitgangsstof.", "Niet — minder koolstof."],
        uitlegPad: {
          stappen: [{ titel: "Additie aan dubbele binding", tekst: "**Additie**: C=C neemt H₂ op → C-C (enkele binding). C₂H₄ (etheen, onverzadigd) + H₂ → **C₂H₆** (ethaan, verzadigd)." }],
          theorie: "Cito-pattern: onverzadigde verbindingen (=C= of ≡C≡) kunnen ADDITIE ondergaan. Verzadigde alleen substitutie.",
          niveaus: { basis: "Ethaan. A.", simpeler: "Etheen + H₂ = ethaan = A.", nogSimpeler: "Ethaan = A." },
        },
      },
      {
        q: "Wat is **polyetheen (PE)**?",
        options: ["Polymeer van etheen-monomeren","Eén molecuul etheen","Mengsel etheen + alcohol","Aluminium"],
        answer: 0,
        wrongHints: [null, "Niet — heel veel etheen-eenheden.", "Niet — geen alcohol.", "Niet — geen metaal."],
        uitlegPad: {
          stappen: [{ titel: "Plastic-keten", tekst: "**Polyetheen (PE)** = duizenden etheen-moleculen aan elkaar gekoppeld via polymerisatie. C₂H₄ → (-CH₂-CH₂-)ₙ. Toepassing: plastic-zakken, flessen." }],
          woorden: [{ woord: "polymerisatie", uitleg: "Reactie waarbij vele kleine moleculen (monomeren) één lange keten (polymeer) vormen." }],
          theorie: "Verschil PE-LDPE (laag-dichtheid, flexibel) vs PE-HDPE (hoog-dichtheid, stevig).",
          niveaus: { basis: "Polymeer etheen. A.", simpeler: "PE = polyetheen = veel etheen = A.", nogSimpeler: "Polymeer = A." },
        },
      },
      {
        q: "Verbranding van koolstof-verbindingen is **schadelijk voor klimaat** omdat:",
        options: ["CO₂ versterkt broeikaseffect","O₂ verdwijnt","Te veel water ontstaat","Methaan ontstaat"],
        answer: 0,
        wrongHints: [null, "Niet — O₂-niveau blijft hoog.", "Niet relevant.", "Niet — methaan = uitgangsstof bij verbranding."],
        uitlegPad: {
          stappen: [{ titel: "CO₂ = broeikasgas", tekst: "Bij verbranding van fossiele brandstof komt **CO₂** vrij. CO₂ houdt warmte vast in atmosfeer → **versterkt broeikaseffect** → klimaatopwarming. Sinds 1850: CO₂ van 280 ppm → 420 ppm (2024)." }],
          theorie: "Cito-actueel: NL-klimaatakkoord 2019 wil 49% CO₂-reductie 2030 vs 1990 (zie pad Sociale Zekerheid).",
          niveaus: { basis: "CO₂ = broeikas. A.", simpeler: "CO₂ → klimaatopwarming = A.", nogSimpeler: "CO₂ = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — organische chemie mix",
    explanation:
      "Mix van koolstof + alkanen + functionele groepen + reacties.\n\nVeel succes!",
    checks: [
      {
        q: "Wat is **propaan**?",
        options: ["C₃H₈","C₂H₆","C₄H₁₀","CH₄"],
        answer: 0,
        wrongHints: [null, "Niet — dat is ethaan.", "Niet — dat is butaan.", "Niet — dat is methaan."],
        uitlegPad: {
          stappen: [{ titel: "Prop = 3", tekst: "**Propaan** = 3 C-atomen alkaan = C₃H₈ (volgens 2n+2 → 8H)." }],
          niveaus: { basis: "C₃H₈. A.", simpeler: "Propaan = C₃H₈ = A.", nogSimpeler: "C₃H₈ = A." },
        },
      },
      {
        q: "Welke functionele groep is **-COOH**?",
        options: ["Carbonzuur","Alcohol","Aldehyde","Ester"],
        answer: 0,
        wrongHints: [null, "Niet — dat is -OH.", "Niet — dat is -CHO.", "Niet — dat is -COO-."],
        uitlegPad: {
          stappen: [{ titel: "-COOH = zuur", tekst: "**-COOH** = carbonzuur-groep. C=O + O-H. Geeft H⁺ vrij in water → zuur. Naamgeving: -zuur." }],
          niveaus: { basis: "Carbonzuur. A.", simpeler: "-COOH = zuur = A.", nogSimpeler: "Zuur = A." },
        },
      },
      {
        q: "Wat is **isomeren**?",
        options: ["Zelfde formule, andere structuur","Verschillende formule","Onbestaand","Polymeer"],
        answer: 0,
        wrongHints: [null, "Niet.", "Wel bestaand.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Iso = gelijk + meer = deel", tekst: "**Isomeren** = verbindingen met dezelfde **molecuulformule** maar verschillende **structuur**. Voorbeeld: butaan (rechte keten) en 2-methylpropaan (vertakt) = beide C₄H₁₀." }],
          niveaus: { basis: "Zelfde formule. A.", simpeler: "Iso = zelfde formule, andere bouw = A.", nogSimpeler: "Iso = A." },
        },
      },
      {
        q: "Welk product ontstaat bij **ethanol + azijnzuur**?",
        options: ["Ester (ethylacetaat) + water","Methaan","Aldehyde","Alcohol"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — geen oxidatie hier.", "Niet — wel uitgangsstof."],
        uitlegPad: {
          stappen: [{ titel: "Verestering", tekst: "**Alcohol + zuur → ester + water**. Ethanol (C₂H₅OH) + azijnzuur (CH₃COOH) → **ethylacetaat (CH₃COOC₂H₅) + H₂O**." }],
          niveaus: { basis: "Ester. A.", simpeler: "Alc + zuur = ester (+water) = A.", nogSimpeler: "Ester = A." },
        },
      },
      {
        q: "Wat is **bio-ethanol**?",
        options: ["Ethanol uit plantaardige bron (maïs, suikerriet)","Synthetisch alcohol","Een nieuw vak","Methaan-derivaat"],
        answer: 0,
        wrongHints: [null, "Niet — biologisch (uit organisch).", "Niet relevant.", "Niet — uit suiker, niet methaan."],
        uitlegPad: {
          stappen: [{ titel: "Bio = uit levende organismen", tekst: "**Bio-ethanol** = ethanol gemaakt door **fermentatie** van suikers (uit maïs, suikerriet, etc.) door gist. Hernieuwbaar maar nadeel: concurreert met voedsel-landbouw. Gebruikt als brandstof-bijmenging (E10, E85)." }],
          niveaus: { basis: "Uit planten. A.", simpeler: "Bio-ethanol = uit plant-suiker = A.", nogSimpeler: "Plant = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const organischeChemieHavoVwo = {
  id: "organische-chemie-havo-vwo",
  title: "Organische chemie (HAVO/VWO scheikunde)",
  emoji: "🧪",
  level: "havo4-5-vwo",
  subject: "scheikunde",
  referentieNiveau: "havo-vwo-CSE",
  sloThema: "Scheikunde HAVO/VWO — organische chemie CSE-stof",
  prerequisites: [
    { id: "atoombouw-scheikunde", title: "Atoombouw", niveau: "klas3" },
    { id: "chemische-reacties-scheikunde", title: "Chemische reacties", niveau: "klas3" },
    { id: "periodiek", title: "Periodiek systeem", niveau: "klas3" },
  ],
  intro:
    "Organische chemie op HAVO/VWO-niveau. Koolstof-bindingen + alkanen (eerste 10) + naamgeving (IUPAC) + functionele groepen (alcohol/zuur/ester/keton) + reacties (verbranding/additie/polymerisatie). ~15 min.",
  triggerKeywords: [
    "organische chemie", "koolstof",
    "alkaan", "alkeen", "alkyn", "cyclo-alkaan",
    "methaan", "ethaan", "propaan", "butaan", "pentaan",
    "isomerie", "isomeer", "octaangetal",
    "alcohol", "ethanol", "methanol", "hydroxyl",
    "carbonzuur", "azijnzuur", "ethaanzuur",
    "ester", "verestering",
    "aldehyde", "keton", "aceton",
    "amine",
    "verbranding", "volledige verbranding", "onvolledig",
    "koolmonoxide", "CO",
    "substitutie", "additie", "polymerisatie",
    "polyetheen", "PE", "PVC", "PET",
    "biobrandstof", "bio-ethanol",
  ],
  chapters,
  steps,
};

export default organischeChemieHavoVwo;
