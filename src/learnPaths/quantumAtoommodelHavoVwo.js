// Leerpad: Quantum + Atoommodel — HAVO/VWO Natuurkunde
// CSE-onderwerp. Fotonen + foto-elektrisch effect, Bohr-model + spectrum,
// energieniveaus, de Broglie-golf (VWO), onzekerheidsrelatie (VWO).
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["⚛️", "💡", "🧪", "🌈", "🏆"];

const chapters = [
  { letter: "A", title: "Foton + E=h·f", emoji: "⚛️", from: 0, to: 0 },
  { letter: "B", title: "Foto-elektrisch effect", emoji: "💡", from: 1, to: 1 },
  { letter: "C", title: "Atoom + energieniveaus", emoji: "🧪", from: 2, to: 2 },
  { letter: "D", title: "Spectraallijnen", emoji: "🌈", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (incl. de Broglie-VWO)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Foton ─────────────────────────────────────────────
  {
    title: "Foton — licht als deeltje",
    explanation:
      "**Quantummechanica** (1900-1930) ontdekt: licht heeft naast golf-eigenschappen ook **deeltjes-eigenschappen**. Lichtdeeltje = **foton**.\n\n**Foton-energie**: **E = h · f = h · c / λ**\n• h = constante van Planck = 6,626·10⁻³⁴ J·s.\n• f = frequentie (Hz).\n• c = lichtsnelheid in vacuüm.\n• Hoe hoger f (kortere λ) → meer E per foton.\n\n**Voorbeelden**:\n• Rood foton (f≈4,3·10¹⁴ Hz): E ≈ 2,8·10⁻¹⁹ J ≈ 1,8 eV.\n• Violet foton (f≈7,5·10¹⁴ Hz): E ≈ 3,1 eV.\n• Röntgen-foton (f≈10¹⁸ Hz): E ≈ 4·10³ eV = 4 keV.\n• Gamma-foton: nog hoger.\n\n**Eenheid elektronvolt** (eV):\n• 1 eV = 1,602·10⁻¹⁹ J (energie die elektron krijgt door 1 V verschil).\n• In kernfysica: MeV (10⁶ eV) of GeV (10⁹ eV).\n\n**Golf-deeltje dualiteit**:\n• Licht gedraagt zich als **golf** bij interferentie/breking.\n• Maar als **deeltjes-stroom** bij foto-elektrisch effect of single-foton-experimenten.\n• Het is NIET 'of of' — licht is iets fundamenteel anders dan beide, en vertoont afhankelijk van setup een van twee aspecten.\n\n**Aanpassing voor astrofysica**:\n• Zon zendt continu spectrum (zwarte-straler) → veel fotonen tegelijk → klassiek golf-gedrag overheerst.\n• Bij hoge energie / lage intensiteit (gamma-detectie, lage-licht-camera) telt elke foton.\n\n**Cito/CSE-tip**: bij Q-vragen altijd eerst f of λ → E uitrekenen. h waarde + c kennen of in formuleblad opzoeken.",
    checks: [
      {
        q: "Welke kleur foton heeft **meer energie**?",
        options: ["Violet (λ≈400 nm)", "Rood (λ≈700 nm)", "Beide gelijk", "Geel (λ≈580 nm)"],
        answer: 0,
        wrongHints: [null, "Niet — langere λ = lagere f = minder E.", "Niet — E hangt af van f.", "Niet — zit tussen rood en violet in."],
        uitlegPad: {
          stappen: [{ titel: "E = h·c/λ → korte λ = hoge E", tekst: "Violet: E ≈ 4,97·10⁻¹⁹ J ≈ 3,1 eV. Rood: ~1,77 eV. Violet ~1,8× zoveel energie per foton." }],
          theorie: "Daarom is UV/röntgen gevaarlijk voor cellen: hoogenergetische fotonen kunnen DNA breken. Rood licht (lager E) niet.",
          niveaus: { basis: "Violet = hoogste E. A.", simpeler: "Kortere golflengte → meer energie per foton. A.", nogSimpeler: "Violet = A." },
        },
      },
      {
        q: "Een foton heeft λ=500 nm. E in J? (h=6,626·10⁻³⁴, c=3·10⁸)",
        options: ["~4,0·10⁻¹⁹ J", "~4,0·10⁻²³ J", "~1,3·10⁻²⁷ J", "~4·10¹⁹ J"],
        answer: 0,
        wrongHints: [null, "Niet — te klein.", "Niet — verkeerde formule.", "Onmogelijk — te groot."],
        uitlegPad: {
          stappen: [
            { titel: "E = hc/λ", tekst: "E = (6,626·10⁻³⁴ · 3·10⁸) / 500·10⁻⁹ = 1,988·10⁻²⁵ / 5·10⁻⁷ = **3,98·10⁻¹⁹ J** ≈ 2,48 eV. Groen licht, midden zichtbaar spectrum." },
          ],
          niveaus: { basis: "E ≈ 4·10⁻¹⁹ J. A.", simpeler: "Plancks formule: ~4·10⁻¹⁹ J. A.", nogSimpeler: "4·10⁻¹⁹ = A." },
        },
      },
      {
        q: "Voor 1 eV energie heeft elektron welke spanning doorlopen?",
        options: ["1 V", "1 J", "1 kV", "Geen verband"],
        answer: 0,
        wrongHints: [null, "Niet — J is energie-eenheid.", "Te groot.", "Wel verband."],
        uitlegPad: {
          stappen: [{ titel: "1 eV = 1 V × e", tekst: "Definitie: 1 eV = arbeid die elektron krijgt door 1 V potentiaalverschil. 1 eV = e·1V = 1,6·10⁻¹⁹ J. Praktisch in atomaire fysica omdat J-getallen anders veel decimalen heeft." }],
          niveaus: { basis: "1 V. A.", simpeler: "e × 1V = 1 eV per definitie. A.", nogSimpeler: "1 V = A." },
        },
      },
      {
        q: "Constante van Planck (h) is fundamenteel omdat:",
        options: [
          "Het de schaal van quantum-effecten bepaalt (heel klein)",
          "Het de lichtsnelheid bepaalt",
          "Het de gravitatie verklaart",
          "Het magnetische velden levert"
        ],
        answer: 0,
        wrongHints: [null, "Niet — c is een aparte constante.", "Onzin in dit kader.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "h = 6,626·10⁻³⁴ J·s — heel klein", tekst: "Omdat h zo klein is, zien wij op dagelijkse schaal geen quantum-effecten. Een tennisbal heeft de Broglie-golf van ~10⁻³⁵ m → onmeetbaar. Een elektron heeft λ ~10⁻¹⁰ m → wel meetbaar." }],
          niveaus: { basis: "h is schaal van quantum. A.", simpeler: "Hele kleine constante = quantum-wereld. A.", nogSimpeler: "h = A." },
        },
      },
      {
        q: "Een gele lamp zendt fotonen van **2,1 eV** uit. Welk type licht is dat?",
        options: ["Zichtbaar (geel)", "Ultraviolet", "Röntgen", "Infrarood"],
        answer: 0,
        wrongHints: [null, "Niet — UV is >3 eV.", "Niet — keV-bereik.", "Niet — IR is <1,5 eV."],
        uitlegPad: {
          stappen: [{ titel: "Zichtbaar = 1,8-3,1 eV", tekst: "Zichtbaar bereik per foton: rood ~1,8 eV → violet ~3,1 eV. Geel ligt rond 2,1 eV. UV begint vanaf 3,1 eV; röntgen vanaf ~100 eV." }],
          niveaus: { basis: "2,1 eV = zichtbaar geel. A.", simpeler: "In zichtbaar bereik. A.", nogSimpeler: "Geel = A." },
        },
      },
    ],
  },

  // ─── B. Foto-elektrisch effect ────────────────────────────
  {
    title: "Foto-elektrisch effect — Einstein 1905",
    explanation:
      "**Verschijnsel**: licht op een metaal **slaat elektronen los** (foto-elektronen).\n\n**Klassieke verwachting** (golf-theorie): meer intensiteit → meer energie per elektron. → **FOUT.**\n\n**Werkelijkheid (Einstein 1905)**:\n• Onder een minimum-frequentie **f_drempel**: GEEN elektronen, ongeacht intensiteit.\n• Boven f_drempel: aantal elektronen ~ intensiteit, maar energie per elektron ~ frequentie.\n• Conclusie: licht komt in pakketjes (fotonen) E=hf.\n\n**Einstein-vergelijking**:\n**E_kin,max = h·f − W_uittree**\n• W_uittree = uittree-arbeid (eigenschap van metaal, in J of eV).\n• h·f = foton-energie.\n• Onder drempel: hf < W → geen elektron loskomt.\n\n**Voorbeelden W_uittree**:\n• Cesium: 2,1 eV (lage drempel, gebruikt in fotodetectors).\n• Zink: 4,3 eV.\n• Platina: 6,4 eV.\n\n**Toepassingen**:\n• **Fotocel/zonnepaneel**: licht → stroom direct.\n• **Foto-vermenigvuldiger** (PMT): voor astronomie + medische diagnostiek.\n• **CCD/CMOS-sensor** (camera): elke pixel telt fotonen.\n• **Bewegingssensor IR**: warme objecten zenden IR-fotonen.\n\n**Compton-effect** (VWO-extra): bewijs dat foton ook impuls heeft: p = h/λ. Botst met elektron en verstrooit (zoals biljartballen) → bewijst foton = deeltje.\n\n**Cito/CSE-vraag-types**:\n• Gegeven W + λ → E_kin van elektron berekenen.\n• Bepaal drempel-frequentie/golflengte.\n• Wat verandert bij hogere intensiteit? (aantal elektronen, NIET hun snelheid).",
    checks: [
      {
        q: "Bij **hogere intensiteit** licht boven drempel, wat verandert?",
        options: [
          "Aantal elektronen per seconde stijgt, energie per elektron blijft",
          "Energie per elektron stijgt",
          "Beide stijgen",
          "Niets — alles van frequentie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat zou klassieke verwachting zijn.", "Niet — alleen aantal verandert.", "Niet — intensiteit doet wel iets."],
        uitlegPad: {
          stappen: [{ titel: "Intensiteit = aantal fotonen/s", tekst: "Meer licht = meer fotonen per seconde = meer elektron-uitslagen per seconde. Maar elke foton heeft dezelfde E (hf) → elektron krijgt dezelfde energie. Dit was de cruciale Einstein-vondst: energie per elektron hangt af van FREQUENTIE, niet INTENSITEIT." }],
          niveaus: { basis: "Aantal stijgt, E blijft. A.", simpeler: "Meer fotonen = meer elektronen, maar zelfde energie elk. A.", nogSimpeler: "Aantal = A." },
        },
      },
      {
        q: "Drempel-frequentie voor cesium (W=2,1 eV)?",
        options: [
          "~5,1·10¹⁴ Hz (oranje-geel)",
          "~5,1·10⁸ Hz",
          "~5,1·10¹⁶ Hz",
          "Bestaat niet"
        ],
        answer: 0,
        wrongHints: [null, "Te laag — radiogolven.", "Te hoog — röntgen.", "Bestaat wel."],
        uitlegPad: {
          stappen: [
            { titel: "f_d = W/h", tekst: "W = 2,1 eV = 2,1 · 1,6·10⁻¹⁹ = 3,36·10⁻¹⁹ J. f_d = W/h = 3,36·10⁻¹⁹ / 6,626·10⁻³⁴ ≈ **5,07·10¹⁴ Hz** (oranje-gele licht). Dat is waarom cesium handig is: zelfs gewoon zichtbaar licht slaat elektronen los." },
          ],
          niveaus: { basis: "f_d ≈ 5·10¹⁴ Hz. A.", simpeler: "W/h ≈ 5·10¹⁴ Hz (zichtbaar). A.", nogSimpeler: "5·10¹⁴ = A." },
        },
      },
      {
        q: "Een metaal met W=4 eV. Foton 3 eV. Wat gebeurt?",
        options: [
          "Geen elektron — onder drempel",
          "Elektron met 3 eV",
          "Elektron met 7 eV",
          "Foton wordt geabsorbeerd zonder elektron"
        ],
        answer: 0,
        wrongHints: [null, "Niet — niet genoeg E.", "Niet — totaal foute formule.", "In theorie maar drempel wel."],
        uitlegPad: {
          stappen: [{ titel: "hf < W → geen verlossing", tekst: "Foton-energie (3 eV) is te klein om elektron over uittree-arbeid (4 eV) te tillen. Foton wordt geabsorbeerd (verwarmt metaal) maar geen losgeslagen elektron. **Hogere intensiteit helpt niet** — méér zwakke fotonen blijven zwak." }],
          niveaus: { basis: "hf<W → niets. A.", simpeler: "Foton te zwak → elektron blijft. A.", nogSimpeler: "Niets = A." },
        },
      },
      {
        q: "Een **zonnecel** zet licht direct om in elektriciteit via:",
        options: ["Foto-elektrisch effect in halfgeleider", "Reflectie", "Inductie", "Statische lading"],
        answer: 0,
        wrongHints: [null, "Niet — reflectie wekt geen stroom op.", "Niet — geen bewegend veld.", "Niet — geen wrijving."],
        uitlegPad: {
          stappen: [{ titel: "Foton → elektron-gat-paar", tekst: "In silicium-zonnecel: foton met E ≥ bandkloof-energie tilt elektron uit valentieband naar geleidingsband. Achtergebleven 'gat' + vrij elektron → stroom door interne diode-structuur. Rendement 15-25% (commercieel)." }],
          theorie: "Hogere zonintensiteit → meer fotonen → meer stroom. Daarom werkt zonnecel beter bij heldere zon dan bewolkt.",
          niveaus: { basis: "Foto-elektrisch in halfgeleider. A.", simpeler: "Licht slaat elektronen los → stroom. A.", nogSimpeler: "Foto-elektrisch = A." },
        },
      },
      {
        q: "Eenheid uittree-arbeid W?",
        options: ["J (of eV)", "W (watt)", "V (volt)", "Hz"],
        answer: 0,
        wrongHints: [null, "Niet — W is vermogen.", "Niet — V is spanning.", "Niet — Hz is frequentie."],
        uitlegPad: {
          stappen: [{ titel: "W is energie-eenheid", tekst: "Uittree-arbeid = minimum energie nodig om elektron uit metaal te krijgen. Energie-eenheid = J of vaker eV in atomaire/quantum context." }],
          niveaus: { basis: "J of eV. A.", simpeler: "Energie-eenheid (J of eV). A.", nogSimpeler: "J = A." },
        },
      },
    ],
  },

  // ─── C. Atoom + energieniveaus ────────────────────────────
  {
    title: "Atoom-model + energieniveaus (Bohr)",
    explanation:
      "**Klassiek probleem 1911**: Rutherford-model (kern + draaiende elektronen) zou elektronen laten 'spiraliseren' in kern door stralingsverlies → atoom kan niet bestaan!\n\n**Bohr 1913** (planeet-model met quantum-twist):\n• Elektronen draaien in **vaste banen** (toegestane energie-niveaus).\n• In zo'n baan: GEEN stralingsverlies.\n• Energie alleen vrij/op-genomen bij **sprong tussen niveaus**: ΔE = E_2 − E_1 = h·f.\n\n**Energie-niveaus waterstof**:\n• E_n = −13,6 eV / n² (n = 1, 2, 3, ...).\n• n=1 (grondtoestand): −13,6 eV.\n• n=2: −3,4 eV.\n• n=3: −1,51 eV.\n• n=∞ (vrij): 0 eV.\n\n**Ionisatie-energie**: vanaf grondtoestand naar vrij = +13,6 eV nodig.\n\n**Spronkenwetten**:\n• Foton absorberen: elektron springt omhoog (alleen exact matching ΔE).\n• Foton uitzenden: elektron valt omlaag → foton met E = ΔE = hf.\n\n**Voorbeeld**: H-atoom van n=3 naar n=2:\n• ΔE = E_3 − E_2 = (−1,51) − (−3,4) = +1,89 eV.\n• f = ΔE/h ≈ 4,57·10¹⁴ Hz → rood licht (Hα-lijn, klassiek waterstof-spectrum).\n\n**Series in waterstof**:\n• Lyman-serie (naar n=1): UV-fotonen.\n• Balmer-serie (naar n=2): zichtbaar (Hα rood, Hβ blauw-groen, Hγ violet).\n• Paschen-serie (naar n=3): infrarood.\n\n**Beperkingen Bohr-model**:\n• Werkt alleen voor waterstof + helium-+.\n• Faalt voor zwaardere atomen → quantum-mechanica met orbitalen (s, p, d, f) nodig.\n• Wel beste eerste stap voor begrip.",
    checks: [
      {
        q: "Een H-atoom in n=1 absorbeert een foton en gaat naar n=3. ΔE?",
        options: [
          "+12,09 eV",
          "−12,09 eV",
          "+10,2 eV",
          "+1,89 eV"
        ],
        answer: 0,
        wrongHints: [null, "Niet — bij absorberen stijgt E (positief).", "Niet — dat is n=1 → n=2.", "Niet — dat is n=3 → n=2."],
        uitlegPad: {
          stappen: [
            { titel: "ΔE = E_3 − E_1", tekst: "E_3 = −13,6/9 = −1,51 eV. E_1 = −13,6 eV.\nΔE = −1,51 − (−13,6) = **+12,09 eV**. Bij absorptie stijgt E. UV-foton (87 nm) nodig." },
          ],
          niveaus: { basis: "ΔE ≈ +12,09 eV. A.", simpeler: "Verschil energieniveaus: ~12 eV. A.", nogSimpeler: "+12,1 = A." },
        },
      },
      {
        q: "Ionisatie-energie van H-atoom (vanuit grondtoestand)?",
        options: ["13,6 eV", "3,4 eV", "1,51 eV", "0 eV"],
        answer: 0,
        wrongHints: [null, "Niet — dat is n=2-energie absolute.", "Niet — n=3.", "Niet — vrij heeft 0 eV, dus afstand vanaf −13,6 is 13,6."],
        uitlegPad: {
          stappen: [{ titel: "Van n=1 naar n=∞", tekst: "Energie om elektron volledig vrij te maken = 0 − (−13,6) = **13,6 eV**. Beroemde Rydberg-energie. Goed te onthouden." }],
          theorie: "Helium: 24,6 eV. Argon: 15,8 eV. Hoge ionisatie-energie betekent kern houdt elektron stevig vast — typisch voor edelgassen (vol elektron-omhulsel).",
          niveaus: { basis: "13,6 eV. A.", simpeler: "Klassiek H-getal: 13,6 eV. A.", nogSimpeler: "13,6 = A." },
        },
      },
      {
        q: "Een atoom kan **alleen** fotonen absorberen met:",
        options: [
          "Energie die exact past op een sprong tussen niveaus",
          "Elke energie",
          "Alleen rode fotonen",
          "Alleen UV-fotonen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — gequantiseerd.", "Niet — kleur-onafhankelijk principe.", "Niet — niveau-afhankelijk."],
        uitlegPad: {
          stappen: [{ titel: "Discreet spectrum", tekst: "Daarom zien we voor elk atoom een **uniek spectrum** van absorptielijnen (en emissielijnen). Identificatie van sterren-samenstelling werkt zo: spectrum vergelijken met lab-spectra van elementen." }],
          theorie: "Helium werd in 1868 ontdekt in zon-spectrum (gele lijn die geen aards element matchte). Pas 30 jaar later op aarde gevonden.",
          niveaus: { basis: "Alleen exacte sprong-E. A.", simpeler: "Gequantiseerde sprongen alleen. A.", nogSimpeler: "Exacte E = A." },
        },
      },
      {
        q: "Een **emissie-spectrum** ontstaat doordat:",
        options: [
          "Aangeslagen atomen vallen terug naar lagere niveaus en stralen fotonen uit",
          "Atomen absorberen licht",
          "Elektronen bewegen langs banen",
          "Atomen botsen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is absorptie-spectrum.", "Niet — banen zelf geven geen straling.", "Niet — botsing energie-overdracht, niet foton."],
        uitlegPad: {
          stappen: [{ titel: "Sprong omlaag = foton uit", tekst: "Stof verhit (vlam, vonk, gasontlading) → elektronen aangeslagen naar hoger niveau → vallen terug → fotonen vrij met ΔE = hf. Elk element heeft uniek patroon: natrium = geel (D-lijn), neon = rood-oranje, etc." }],
          theorie: "Vuurwerk-kleuren komen ook hieruit: koper-zouten = groen, strontium = rood, natrium = geel, etc.",
          niveaus: { basis: "Terugval geeft foton. A.", simpeler: "Atoom valt terug → licht uit. A.", nogSimpeler: "Terugval = A." },
        },
      },
      {
        q: "Waarom faalt het **Bohr-model** voor atomen zwaarder dan helium?",
        options: [
          "Onderlinge elektron-afstoting maakt rekening complex; vereist orbitalen + quantummechanica",
          "Bohr-model is helemaal fout",
          "Zwaardere atomen volgen klassieke fysica",
          "Geen fotonen mogelijk"
        ],
        answer: 0,
        wrongHints: [null, "Niet — Bohr is goede 1e benadering.", "Tegenovergesteld.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Eén-elektron-model", tekst: "Bohr nam aan: 1 elektron in vaste cirkelbaan rondom kern. Werkt voor H + He⁺ (één elektron rond kern). Bij Li (3 elektronen) gaan elektronen elkaar afstoten + 'verstrengelen' (Pauli-principe) → klassieke banen onmogelijk. Moderne quantummechanica gebruikt **orbitalen** (waarschijnlijkheids-wolken s, p, d, f)." },
          ],
          niveaus: { basis: "Meerdere elektronen → quantum-modelen. A.", simpeler: "Te complex met >1 elektron. A.", nogSimpeler: "Te complex = A." },
        },
      },
    ],
  },

  // ─── D. Spectraallijnen ──────────────────────────────────
  {
    title: "Spectraal-analyse — vingerafdrukken van atomen",
    explanation:
      "**Drie soorten spectra**:\n\n1. **Continu spectrum**: hete vaste stof of dichte gas → alle kleuren (zoals zonnedisk, gloeilamp). Wien-piek bij T-afhankelijke λ.\n2. **Lijn-emissie-spectrum**: heet, dun gas (neon-buis, sterren-corona) → losse lijnen tegen donker.\n3. **Lijn-absorptie-spectrum**: continu spectrum door koud gas → donkere lijnen (Fraunhofer-lijnen in zonlicht).\n\n**Kirchhoff's wetten** (1859):\n• Heet dicht → continu.\n• Heet dun → emissielijnen.\n• Koud gas voor continue → absorptielijnen.\n\n**Toepassingen**:\n• **Astronomie**: spectraal-analyse onthult samenstelling sterren + temperatuur (via Wien-piek) + snelheid (Doppler-verschuiving).\n• **Spectrochemie**: bepaal welke metalen in monster via emissielijnen.\n• **Fraunhofer-lijnen**: ~25 000 donkere lijnen in zonlicht door koudere zon-atmosfeer (chromosfeer) → samenstelling van zon precies bepaald.\n\n**Doppler-shift in spectrum**:\n• Ster komt naar je toe → spectrum naar blauw (kortere λ).\n• Ster gaat weg → spectrum naar rood.\n• Mate van shift → snelheid (z = Δλ/λ).\n• Hubble (1929): bijna alle sterrenstelsels rood-verschoven → uitdijing heelal.\n\n**Toepassing kosmologie**: kosmische achtergrond-straling (~2,7 K) gevonden door Penzias + Wilson 1965 → bewijs Big Bang.\n\n**Natrium-lamp (oranje straatverlichting)**:\n• D-lijn op 589 nm → smal spectrum → energiezuinig (geen UV/IR-verlies) + monochroom (geen kleurherkenning, daarom in 'kleur-arme' straten gebruikt).\n• Vervangen door wit-LED voor betere kleurweergave + nog zuiniger.\n\n**Astronomie-classificatie sterren** (O B A F G K M, van heet naar koel):\n• O-ster: ~30 000 K, blauw, sterke He-lijnen.\n• G-ster (zoals zon): ~5800 K, geel.\n• M-ster: ~3000 K, rood, sterke moleculaire banden.\n\n*Geheugen-truc*: Oh Be A Fine Girl, Kiss Me.",
    checks: [
      {
        q: "Een **neon-buis** geeft welk type spectrum?",
        options: ["Lijn-emissie", "Continu", "Lijn-absorptie", "Geen spectrum"],
        answer: 0,
        wrongHints: [null, "Niet — alleen vaste/dichte stof geeft continu.", "Niet — geen kouder gas vóór.", "Wel een spectrum (rode kleur)."],
        uitlegPad: {
          stappen: [{ titel: "Heet + dun gas", tekst: "Neon-gas onder elektrische ontlading: aangeslagen → emissielijnen, vooral in rood-oranje (650 nm). Discreet patroon, niet 'wit'. Daarom monochrome neon-borden." }],
          niveaus: { basis: "Lijn-emissie. A.", simpeler: "Heet dun gas → emissielijnen. A.", nogSimpeler: "Emissielijnen = A." },
        },
      },
      {
        q: "**Fraunhofer-lijnen** in zonlicht zijn:",
        options: [
          "Donkere absorptielijnen door koudere zon-atmosfeer",
          "Heldere lijnen van neon in atmosfeer",
          "Reflectie tegen aarde-atmosfeer",
          "Verzonnen — bestaan niet"
        ],
        answer: 0,
        wrongHints: [null, "Niet — chromosfeer absorbeert.", "Niet — atmosfeer-rol klein.", "Bestaan wel."],
        uitlegPad: {
          stappen: [
            { titel: "Continu + koudere absorptie", tekst: "Zon-bol (~6000 K, dicht) zendt continu spectrum uit. Daar bovenop ligt koudere chromosfeer (~4500 K, dunner gas) die specifieke λ absorbeert. Resultaat: continu met donkere strepen — Fraunhofer-lijnen, ~25 000 stuks (waterstof, helium, ijzer, calcium, etc.)." },
          ],
          theorie: "Helium ('helios' = zon) werd ontdekt als gele Fraunhofer-lijn vóórdat het op aarde was gevonden.",
          niveaus: { basis: "Donkere absorptielijnen. A.", simpeler: "Koude zon-buitenlaag slokt fotonen op. A.", nogSimpeler: "Absorptie = A." },
        },
      },
      {
        q: "Een ster met spectrum **rood-verschoven** beweegt:",
        options: ["Van ons af", "Naar ons toe", "Stilstand", "Hangt af van ster-grootte"],
        answer: 0,
        wrongHints: [null, "Niet — dat zou blauw-verschoven zijn.", "Niet — Doppler.", "Niet — Doppler-onafhankelijk."],
        uitlegPad: {
          stappen: [{ titel: "Doppler-effect licht", tekst: "Bron beweegt weg → golven uitgerekt → langere λ → naar rood verschoven. Mate van verschuiving (z) → snelheid weg. Hubble's wet: z evenredig met afstand → heelal-uitdijing." }],
          niveaus: { basis: "Weg van ons. A.", simpeler: "Rood = wegbewegen. A.", nogSimpeler: "Weg = A." },
        },
      },
      {
        q: "Een **O-ster** is volgens classificatie:",
        options: [
          "Heet + blauw (~30 000 K)",
          "Koel + rood",
          "Geel als zon",
          "Wit-dwerg"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is M-ster.", "Niet — dat is G-ster.", "Niet — eind-fase, andere klasse."],
        uitlegPad: {
          stappen: [{ titel: "OBAFGKM van heet naar koel", tekst: "O-sterren zijn zeldzame, jonge, heel zware sterren (>16 zonsmassa's). Heet → blauw spectrum. Branden snel op (paar miljoen jaar) en eindigen als supernova." }],
          theorie: "Zon = G2-ster (~5800 K, geel). Sirius = A1 (~9900 K, witblauw). Betelgeuse = M2 (~3500 K, rood).",
          niveaus: { basis: "O = heet + blauw. A.", simpeler: "O = hete blauwe ster. A.", nogSimpeler: "Heet blauw = A." },
        },
      },
      {
        q: "**Wien-verschuivingswet**: piek van spectrum verschuift met T. Bij hogere T:",
        options: [
          "Korter golflengte-piek (richting blauw/UV)",
          "Langere golflengte-piek (richting rood/IR)",
          "Geen verandering",
          "Splitsen in twee pieken"
        ],
        answer: 0,
        wrongHints: [null, "Niet — andersom.", "Niet — verschuift wel.", "Niet — gewoon één piek."],
        uitlegPad: {
          stappen: [{ titel: "λ_max · T = 2,9·10⁻³ m·K", tekst: "Hogere T → kortere piek-λ. Voorbeelden:\n- Kamer (300 K): piek ~10 μm (infrarood).\n- Gloeidraad (3000 K): ~1 μm (nabij IR + rood).\n- Zon (5800 K): ~500 nm (geel-groen).\n- O-ster (30 000 K): ~100 nm (UV)." }],
          niveaus: { basis: "Korter λ bij hoger T. A.", simpeler: "Hete sterren stralen blauwer. A.", nogSimpeler: "λ↓ = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — examen-mix + de Broglie (VWO)",
    explanation:
      "**De Broglie-golf** (VWO, 1924):\nNiet alleen licht heeft golf-deeltje-dualiteit — **ELK deeltje** heeft een golflengte:\n\n**λ = h / p** (met p = m·v voor niet-relativistisch).\n\n**Voorbeelden**:\n• Elektron @ 1·10⁶ m/s: λ ≈ 7·10⁻¹⁰ m (vergelijkbaar met atoom!) → elektron-microscopie.\n• Tennisbal 100 g @ 30 m/s: λ ≈ 2·10⁻³⁴ m → onmeetbaar → klassiek deeltje-gedrag.\n\n**Elektronen-diffractie** (Davisson-Germer 1927):\n• Elektronen door kristal → diffractie-patroon zoals X-rays.\n• Bewees dat elektron echt een golf is, niet alleen een deeltje.\n\n**Heisenberg-onzekerheidsrelatie** (VWO):\n• Δx · Δp ≥ ℏ/2 (met ℏ = h/2π).\n• Hoe nauwkeuriger plek (Δx klein), des te onzekerder impuls (Δp groot).\n• Fundamenteel — geen tekortkoming van meting, maar natuurwet.\n\n**Praktisch**: 'baan van elektron in atoom' is geen lijn maar een **waarschijnlijkheidswolk** (orbital).\n\n**Quantum-tunneling**: deeltjes kunnen door een 'energiebarrière' heen alsof het er niet is — bij smalle barriers waar klassiek 'verboden'. Toepassing: scanning-tunneling-microscoop (atomen zien).\n\n**Toepassingen quantum-fysica**:\n• Lasers, LED's, halfgeleiders.\n• Atoomklokken (basis GPS).\n• MRI-scanner.\n• Solar cells.\n• Quantum-computers (in ontwikkeling).",
    checks: [
      {
        q: "Een UV-foton (λ = 200 nm). E in eV?",
        options: ["~6,2 eV", "~62 eV", "~620 eV", "~0,62 eV"],
        answer: 0,
        wrongHints: [null, "Niet — te groot.", "Niet — röntgen-bereik.", "Niet — IR-bereik."],
        uitlegPad: {
          stappen: [
            { titel: "E = hc/λ → eV", tekst: "E = 1240 eV·nm / 200 nm = **6,2 eV** (handige formule: hc = 1240 eV·nm). UV-bereik, kan DNA-bindingen breken." },
          ],
          theorie: "Vuistregel: 'energie in eV = 1240 / golflengte in nm'.",
          niveaus: { basis: "E ≈ 6,2 eV. A.", simpeler: "1240/200=6,2. A.", nogSimpeler: "6,2 = A." },
        },
      },
      {
        q: "De Broglie-golflengte van elektron bij v = 1·10⁶ m/s. (m_e = 9,11·10⁻³¹ kg)",
        options: ["~7,3·10⁻¹⁰ m", "~7,3·10⁻⁷ m", "~7,3·10⁻¹⁵ m", "Niet meetbaar"],
        answer: 0,
        wrongHints: [null, "Niet — te groot voor elektron.", "Niet — fout machten.", "Is wel meetbaar (elektronenmicroscoop)."],
        uitlegPad: {
          stappen: [
            { titel: "λ = h/(mv)", tekst: "λ = 6,626·10⁻³⁴ / (9,11·10⁻³¹ · 1·10⁶) = 6,626·10⁻³⁴ / 9,11·10⁻²⁵ ≈ **7,3·10⁻¹⁰ m** (sub-nanometer). Vergelijkbaar met atoom-grootte → elektron-microscoop ziet detail op die schaal." },
          ],
          niveaus: { basis: "λ ≈ 7·10⁻¹⁰ m. A.", simpeler: "h/(mv) → ~0,7 nm. A.", nogSimpeler: "10⁻¹⁰ = A." },
        },
      },
      {
        q: "Welk type spectrum geeft een **gloeiende wolfraam-draad** (gloeilamp)?",
        options: ["Continu", "Lijn-emissie", "Lijn-absorptie", "Geen spectrum"],
        answer: 0,
        wrongHints: [null, "Niet — alleen dun heet gas.", "Niet — geen koud gas voor.", "Niet — geeft wel licht."],
        uitlegPad: {
          stappen: [{ titel: "Vaste stof = continu", tekst: "Hete vaste stof (wolfraam-draad, ~2500 K) zendt continu spectrum uit — alle golflengten vertegenwoordigd, met piek volgens Wien (rood-geel-warm-licht). Daarom worden gloeilampen energieverspilling: <5% in zichtbaar, 95%+ in IR (warmte)." }],
          niveaus: { basis: "Continu. A.", simpeler: "Vaste stof straalt continu. A.", nogSimpeler: "Continu = A." },
        },
      },
      {
        q: "Heisenberg: ΔX · Δp ≥ ℏ/2 betekent:",
        options: [
          "Plek + impuls niet gelijktijdig exact te bepalen — fundamentele natuurwet",
          "Meetinstrument is gewoon te slecht",
          "Alleen geldt voor lichte deeltjes",
          "Alleen op kwantumcomputers"
        ],
        answer: 0,
        wrongHints: [null, "Niet — geen beter instrument helpt.", "Niet — geldt voor alles, maar pas merkbaar bij klein.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "Fundamenteel, niet meetfout", tekst: "Geen experimenteel tekort maar natuurwet. Een deeltje HEEFT geen scherp gedefinieerde plek + impuls tegelijk; het is een waarschijnlijkheidsverdeling. Bij macroscopische objecten verwaarloosbaar (ℏ is heel klein); bij elektron significant." }],
          theorie: "Daarom bestaat 'baan' van elektron in atoom niet — alleen orbitalen (waarschijnlijkheidswolken).",
          niveaus: { basis: "Fundamentele wet. A.", simpeler: "Plek + snelheid niet beide tegelijk scherp. A.", nogSimpeler: "Wet = A." },
        },
      },
      {
        q: "Bij **emissie van een rood foton** (λ≈656 nm, Hα-lijn) door waterstof: welke sprong?",
        options: ["n=3 → n=2", "n=2 → n=1", "n=4 → n=3", "n=3 → n=1"],
        answer: 0,
        wrongHints: [null, "Niet — dat is UV (Lyman).", "Niet — dat is IR (Paschen).", "Niet — UV (Lyman)."],
        uitlegPad: {
          stappen: [
            { titel: "Balmer-serie naar n=2", tekst: "ΔE = E_3 − E_2 = (−1,51) − (−3,4) = +1,89 eV → λ = 1240/1,89 ≈ 656 nm (rood). Klassieke Hα-lijn, zichtbaar in waterstof-spectrum en in zon (één van de prominentste Fraunhofer-lijnen)." },
          ],
          theorie: "Balmer-serie eindigt altijd op n=2, geeft zichtbaar licht. Lyman (op n=1): UV. Paschen (n=3): IR.",
          niveaus: { basis: "n=3 → n=2 = Hα rood. A.", simpeler: "Balmer-α-lijn = rood. A.", nogSimpeler: "3→2 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const quantumAtoommodelHavoVwo = {
  id: "quantum-atoommodel-havo-vwo",
  title: "Quantum + Atoommodel (HAVO/VWO Natuurkunde)",
  emoji: "⚛️",
  level: "havo-vwo-4-5",
  subject: "natuurkunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Natuurkunde — Quantum + Atoommodel (CSE-onderwerp)",
  prerequisites: [
    { id: "trillingen-golven-havo-vwo", title: "Trillingen + Golven", niveau: "havo-3F" },
    { id: "optica-havo-vwo", title: "Optica", niveau: "havo-3F" },
  ],
  intro:
    "Quantum + Atoommodel voor HAVO/VWO eindexamen — foton E=hf, foto-elektrisch effect, Bohr-energieniveaus, spectraal-analyse. VWO-stof: de Broglie + onzekerheid. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "quantum", "kwantum",
    "foton", "lichtkwantum",
    "Planck", "h", "constante van Planck",
    "E=hf", "foton-energie",
    "elektronvolt", "eV",
    "foto-elektrisch", "Einstein 1905",
    "uittree-arbeid", "drempelfrequentie",
    "fotocel", "zonnecel",
    "atoommodel", "Rutherford", "Bohr",
    "energieniveau", "energiesprong",
    "ionisatie-energie", "13,6 eV",
    "Balmer", "Lyman", "Paschen",
    "Hα-lijn", "waterstof-spectrum",
    "spectrum", "emissielijn", "absorptielijn",
    "Fraunhofer", "Kirchhoff",
    "Wien", "stralingswet",
    "OBAFGKM", "sterclassificatie",
    "Doppler licht", "roodverschuiving",
    "kosmische achtergrond",
    "de Broglie", "materiegolf",
    "Heisenberg", "onzekerheidsrelatie",
    "elektronmicroscoop", "Davisson-Germer",
    "quantum-tunneling", "STM",
  ],
  chapters,
  steps,
};

export default quantumAtoommodelHavoVwo;
