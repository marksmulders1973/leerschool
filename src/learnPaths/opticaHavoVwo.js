// Leerpad: Optica — HAVO/VWO Natuurkunde
// CSE-onderwerp. Reflectie, lichtbreking (Snellius), totale reflectie,
// lenzen (lensformule + beeldconstructie), dispersie + spectrum, kleuren.
// VWO-extra: interferentie + dubbelspleet-experiment (Young).
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["🪞", "🌈", "🔍", "🎨", "🏆"];

const chapters = [
  { letter: "A", title: "Reflectie + breking (Snellius)", emoji: "🪞", from: 0, to: 0 },
  { letter: "B", title: "Totale reflectie + dispersie", emoji: "🌈", from: 1, to: 1 },
  { letter: "C", title: "Lenzen + lensformule", emoji: "🔍", from: 2, to: 2 },
  { letter: "D", title: "Kleuren + spectrum", emoji: "🎨", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (incl. interferentie-VWO)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Reflectie + breking ───────────────────────────────
  {
    title: "Reflectie + lichtbreking — wet van Snellius",
    explanation:
      "**Licht** = elektromagnetische golf. In vacuüm: c = 3,0·10⁸ m/s. In materie langzamer.\n\n**Brekingsindex n** = c / v_medium (zonder eenheid):\n• Vacuüm: n = 1 (definitie).\n• Lucht: n ≈ 1,0003 (afgerond 1).\n• Water: n ≈ 1,33.\n• Glas: n ≈ 1,5 (varieert per soort).\n• Diamant: n ≈ 2,42.\n• Hoe groter n → langzamer licht → meer breking.\n\n**Reflectiewet** (spiegel/glasoppervlak):\n• Invalshoek = reflectiehoek (gemeten t.o.v. normaal, dwz loodrecht op oppervlak).\n• Beide stralen in zelfde vlak.\n\n**Brekingswet (Snellius)**:\n**n₁ · sin(θ₁) = n₂ · sin(θ₂)**\n• θ₁ = invalshoek in medium 1.\n• θ₂ = brekingshoek in medium 2.\n• Naar dichter medium (n stijgt): straal buigt **NAAR de normaal**.\n• Naar minder dicht medium (n daalt): straal buigt **WEG van de normaal**.\n\n**Voorbeeld**: licht van lucht (n=1) naar water (n=1,33), invalshoek 30°.\n• 1 · sin(30°) = 1,33 · sin(θ₂)\n• sin(θ₂) = 0,5/1,33 = 0,376 → θ₂ ≈ 22°.\n\n**Geheugen-truc**: 'pen-in-water'-illusie. De pen lijkt geknikt omdat licht uit het water bij vertrek breekt. Het brein extrapoleert recht — dus pen lijkt elders.\n\n**Cito/CSE-vraagtypes**:\n• Gegeven θ₁, n₁, n₂ → θ₂ berekenen.\n• Brekingsindex bepalen uit gegeven hoeken.\n• Bouwtekening lichtstraal door blok glas.",
    checks: [
      {
        q: "Een lichtstraal valt **loodrecht** op een glasplaat. Wat gebeurt er met de richting?",
        options: ["Recht doorlopen — geen breking", "30° breken naar normaal", "Totaal weerkaatsen", "Splitsen in kleuren"],
        answer: 0,
        wrongHints: [null, "Niet — bij loodrecht is θ=0 → ook θ₂=0.", "Niet — geen totale reflectie loodrecht.", "Niet — geen dispersie zonder schuine invalshoek."],
        uitlegPad: {
          stappen: [{ titel: "sin(0)=0 → geen breking", tekst: "Bij loodrechte inval: invalshoek θ₁=0°. Snellius: 1·sin(0) = n₂·sin(θ₂) → sin(θ₂)=0 → θ₂=0. Geen knik. Licht loopt door, alleen langzamer in glas." }],
          niveaus: { basis: "Loodrecht = geen breking. A.", simpeler: "Recht in = recht door. A.", nogSimpeler: "Doorlopen = A." },
        },
      },
      {
        q: "Licht gaat van lucht (n=1,0) naar water (n=1,33). Invalshoek 60°. Brekingshoek?",
        options: ["~40,6°", "~60°", "~50°", "Totaal reflecteren"],
        answer: 0,
        wrongHints: [null, "Niet — wel een breking.", "Niet — verkeerd toegepast.", "Niet — totale reflectie alleen van dicht naar minder dicht."],
        uitlegPad: {
          stappen: [
            { titel: "Snellius toepassen", tekst: "n₁·sin(θ₁) = n₂·sin(θ₂)\n1,0·sin(60°) = 1,33·sin(θ₂)\nsin(θ₂) = 0,866/1,33 = 0,651\nθ₂ = arcsin(0,651) ≈ **40,6°**." },
          ],
          theorie: "Naar dichter medium (water) → buigen naar normaal (kleinere hoek).",
          niveaus: { basis: "sin(θ₂)=0,866/1,33 → 40,6°. A.", simpeler: "Vermenigvuldig + delen Snellius. A.", nogSimpeler: "~41° = A." },
        },
      },
      {
        q: "Brekingsindex van diamant is 2,42. Snelheid van licht in diamant?",
        options: ["~1,24·10⁸ m/s", "~3,0·10⁸ m/s", "~7,3·10⁸ m/s", "Onbepaald"],
        answer: 0,
        wrongHints: [null, "Niet — dat is in vacuüm.", "Niet — licht gaat niet sneller dan c.", "Wel te berekenen."],
        uitlegPad: {
          stappen: [{ titel: "v = c/n", tekst: "v = 3,0·10⁸ / 2,42 ≈ **1,24·10⁸ m/s**. Licht is in diamant ongeveer 2,4× langzamer dan in vacuüm." }],
          theorie: "Daarom is diamant zo schitterend: hoog n + perfecte slijp → veel totale reflectie binnen de steen → veel kleur en vonk.",
          niveaus: { basis: "v=3·10⁸/2,42=1,24·10⁸. A.", simpeler: "Lichtsnelheid gedeeld door n. A.", nogSimpeler: "1,24·10⁸ = A." },
        },
      },
      {
        q: "Reflectiewet zegt:",
        options: [
          "Invalshoek = reflectiehoek, t.o.v. de normaal",
          "Invalshoek = brekingshoek",
          "Reflectiehoek is altijd 90°",
          "Reflectie hangt af van kleur"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is breking, niet reflectie.", "Onjuist — slechts speciaal geval.", "Niet — voor gewone spiegel niet."],
        uitlegPad: {
          stappen: [{ titel: "Hoeken t.o.v. normaal (loodrecht)", tekst: "De normaal is een denkbeeldige lijn loodrecht op het oppervlak op het invalspunt. Invalshoek wordt vanaf de normaal gemeten — NIET vanaf het oppervlak (een veelgemaakte fout!)." }],
          niveaus: { basis: "Invalshoek = reflectiehoek. A.", simpeler: "Gelijke hoek bij weerkaatsing. A.", nogSimpeler: "Gelijk = A." },
        },
      },
      {
        q: "Welk medium heeft de **grootste lichtsnelheid**?",
        options: ["Vacuüm (n=1)", "Lucht (n=1,0003)", "Water (n=1,33)", "Glas (n=1,5)"],
        answer: 0,
        wrongHints: [null, "Bijna gelijk maar net minder.", "Veel langzamer.", "Het traagst."],
        uitlegPad: {
          stappen: [{ titel: "v = c/n, dus n=1 geeft max v", tekst: "Vacuüm heeft per definitie n=1 → v=c=3·10⁸ m/s. Elk medium met n>1 maakt het licht langzamer." }],
          niveaus: { basis: "Vacuüm. A.", simpeler: "Lichtsnelheid c in vacuüm. A.", nogSimpeler: "Vacuüm = A." },
        },
      },
    ],
  },

  // ─── B. Totale reflectie + dispersie ──────────────────────
  {
    title: "Totale interne reflectie + dispersie",
    explanation:
      "**Totale interne reflectie**: bij overgang van dicht naar minder dicht medium (n₁ > n₂) kan **boven een bepaalde invalshoek** geen licht meer naar buiten breken — alles reflecteert terug.\n\n**Grenshoek θ_g**:\nUit Snellius met θ₂ = 90°: n₁·sin(θ_g) = n₂·sin(90°) = n₂.\n→ **sin(θ_g) = n₂ / n₁**.\n\n**Voorbeeld water → lucht**:\n• sin(θ_g) = 1/1,33 = 0,752 → θ_g ≈ 48,8°.\n• Boven 48,8° komt licht niet meer uit het water.\n\n**Voorbeeld glas → lucht** (n=1,5):\n• sin(θ_g) = 1/1,5 = 0,667 → θ_g ≈ 41,8°.\n\n**Toepassingen**:\n• **Glasvezel-kabel**: licht ketst door interne reflectie zonder verlies (internet snel).\n• **Verrekijker + prisma**: 45-90-45 prisma's vouwen licht zonder verlies.\n• **Diamant-schittering**: hoge n=2,42 → θ_g ≈ 24° → veel licht ketst binnen → fonkelen.\n\n**Dispersie**:\nIn een medium hangt n licht af van de **frequentie** (kleur). Voor glas:\n• Rood: n ≈ 1,51 — minst gebroken.\n• Violet: n ≈ 1,53 — meest gebroken.\n\n**Gevolg**: wit licht in prisma → spectrum (rood, oranje, geel, groen, blauw, violet).\n\n**Regenboog**:\n• Zonlicht valt in waterdruppel → breekt + reflecteert intern + breekt opnieuw uit.\n• Verschillende kleuren in iets verschillende richting → kleurboog.\n• Primaire regenboog: rood buiten, violet binnen, hoek ~42°.\n• Secundaire regenboog (zwakker): omgekeerd, twee interne reflecties, hoek ~51°.\n\n**Examen-tip**: bij vraag over 'kleur breken' altijd dispersie + Snellius combineren.",
    checks: [
      {
        q: "Een lichtstraal in water (n=1,33) bereikt het oppervlak met **50°**. Wat gebeurt?",
        options: [
          "Totale interne reflectie (50° > θ_g ≈ 48,8°)",
          "Breekt en komt uit, hoek ~37°",
          "Breekt en komt uit, hoek ~90°",
          "Reflecteert volledig én breekt"
        ],
        answer: 0,
        wrongHints: [null, "Niet — boven grenshoek geen breking.", "Niet — boven θ_g blijft alles binnen.", "Niet — bij totale reflectie geen breking."],
        uitlegPad: {
          stappen: [
            { titel: "θ_g berekenen + vergelijken", tekst: "sin(θ_g) = n_lucht/n_water = 1/1,33 = 0,752 → θ_g ≈ 48,8°. 50° > 48,8° → boven grens → totale interne reflectie. Niets komt uit." },
          ],
          theorie: "Daarom werken glasvezels: licht binnen wordt onder hoek >θ_g op de glas-wand aangestoten → ketst altijd terug binnen → tot km zonder verlies.",
          niveaus: { basis: "50° > 48,8° → totale reflectie. A.", simpeler: "Boven grenshoek = alles terug, niets uit. A.", nogSimpeler: "Totale reflectie = A." },
        },
      },
      {
        q: "Welke kleur licht heeft de **kleinste brekingsindex** in glas?",
        options: ["Rood", "Geel", "Blauw", "Violet"],
        answer: 0,
        wrongHints: [null, "Niet — geel zit in midden.", "Niet — blauw breekt meer dan rood.", "Niet — violet breekt het meest."],
        uitlegPad: {
          stappen: [{ titel: "Lange λ → kleinste n", tekst: "In een gewoon dispersie-medium (glas, water): lange golflengten (rood) breken minder dan korte (violet). Daarom komt rood **bovenaan** uit een prisma, violet **onderaan**." }],
          theorie: "Cijfers: rood n≈1,51; violet n≈1,53 in standaard glas.",
          niveaus: { basis: "Rood = kleinste n. A.", simpeler: "Rood buigt minst. A.", nogSimpeler: "Rood = A." },
        },
      },
      {
        q: "Hoe ontstaat een **regenboog**?",
        options: [
          "Breking + interne reflectie + breking in waterdruppels, verschillend per kleur",
          "Reflectie tegen wolken",
          "Diffractie achter wolk-rand",
          "Dispersie door luchtdruppels"
        ],
        answer: 0,
        wrongHints: [null, "Niet — wolk-reflectie geeft halo, geen regenboog.", "Niet — diffractie geeft andere patronen.", "Niet — geen 'lucht-druppels'."],
        uitlegPad: {
          stappen: [
            { titel: "Drie stappen per druppel", tekst: "1. Zonlicht treedt druppel binnen → breekt (dispersie: kleuren splitsen).\n2. Reflecteert intern aan achterkant druppel.\n3. Breekt opnieuw bij uittreden.\nVerschillende kleuren komen onder iets verschillende hoek uit → boogvorm met rood buitenaan, violet binnenaan." },
          ],
          basiskennis: [{ onderwerp: "Hoek 42°", uitleg: "Primaire regenboog verschijnt op 42° van het anti-zon-punt (de plek tegenover de zon, vanuit jou gezien)." }],
          niveaus: { basis: "Breking + reflectie + breking in druppel. A.", simpeler: "Druppel splitst en buigt licht in boog. A.", nogSimpeler: "Druppels = A." },
        },
      },
      {
        q: "**Glasvezel** voor internet werkt op:",
        options: [
          "Totale interne reflectie",
          "Refractie door lens",
          "Spiegelreflectie tegen metaal",
          "Lichtemissie door gloeidraad"
        ],
        answer: 0,
        wrongHints: [null, "Niet — een gewone lens focust, niet doorgeleidt.", "Niet — geen metaal in glasvezel.", "Niet — vezel zelf geeft geen licht."],
        uitlegPad: {
          stappen: [{ titel: "Licht ketst, geen verlies", tekst: "Glasvezel-kern heeft hoger n dan de mantel. Licht in de kern raakt mantel onder hoek >θ_g → totale reflectie → ketst verder. Geen energieverlies aan absorptie. Daarom km-bereik mogelijk + extreem hoge bandbreedte." }],
          niveaus: { basis: "Totale reflectie binnen vezel. A.", simpeler: "Licht ketst binnen kern zonder uit te komen. A.", nogSimpeler: "Totale refl. = A." },
        },
      },
      {
        q: "Grenshoek voor glas (n=1,5) naar lucht?",
        options: ["~41,8°", "~30°", "~45°", "~60°"],
        answer: 0,
        wrongHints: [null, "Te klein.", "Niet — hoewel handig getal.", "Te groot."],
        uitlegPad: {
          stappen: [{ titel: "sin(θ_g) = 1/n", tekst: "sin(θ_g) = 1/1,5 = 0,667 → θ_g = arcsin(0,667) ≈ **41,8°**." }],
          niveaus: { basis: "arcsin(1/1,5)≈41,8°. A.", simpeler: "1/1,5=0,667, arcsin daarvan = 42°. A.", nogSimpeler: "42° = A." },
        },
      },
    ],
  },

  // ─── C. Lenzen ────────────────────────────────────────────
  {
    title: "Lenzen — bolle + holle + lensformule",
    explanation:
      "**Lenzen** breken licht zodanig dat ze beelden vormen.\n\n**Twee soorten**:\n• **Bolle (convex) = positief**: dikker in midden. Convergeert lichtstralen → brandpunt F achter lens. Brandpuntsafstand f > 0.\n• **Holle (concaaf) = negatief**: dunner in midden. Divergeert lichtstralen → schijnbaar van een brandpunt F voor lens. f < 0.\n\n**Eenheid**: f in meter (of cm). **Sterkte S = 1/f** in dioptrie (D = 1/m). Brillenrecept '+2 D' = positieve lens f = 0,5 m.\n\n**Lensformule** (HAVO/VWO):\n**1/f = 1/v + 1/b**\n• v = voorwerpsafstand (positief, links van lens).\n• b = beeldafstand (positief = rechts/achter lens = reëel beeld; negatief = links = virtueel beeld).\n• f = brandpuntsafstand.\n\n**Vergroting N** = b/v (in absolute waarde). Negatief teken = beeld omgekeerd.\n\n**Beeldconstructie — 3 hoofdstralen**:\n1. Door optisch midden: rechtdoor.\n2. Evenwijdig aan optische as: na lens door achterste brandpunt.\n3. Door voorste brandpunt: na lens evenwijdig aan as.\n\n**Vier gevallen positieve lens**:\n• v > 2f: reëel + omgekeerd + verkleind (foto-camera).\n• v = 2f: reëel + omgekeerd + zelfde grootte.\n• f < v < 2f: reëel + omgekeerd + vergroot (projector).\n• v < f: virtueel + rechtop + vergroot (loep, vergrootglas).\n\n**Negatieve lens**: altijd virtueel + rechtop + verkleind.\n\n**Praktijk**:\n• **Camera/oog**: bolle lens → reëel beeld op sensor/netvlies.\n• **Bijziend (myopie)**: oog focust te dicht → holle bril nodig (negatieve dioptrie).\n• **Verziend (hypermetropie)**: oog focust te ver → bolle bril (positieve dioptrie).\n• **Bril +2 D** = leesbril.\n\n**Examen-stijl**: gegeven f + v → bereken b. Gegeven N + f → bereken v.",
    checks: [
      {
        q: "Een **leesbril** van **+2,0 dioptrie** heeft brandpuntsafstand:",
        options: ["50 cm", "200 cm", "20 cm", "2 cm"],
        answer: 0,
        wrongHints: [null, "Niet — controleer eenheden.", "Niet — komt door verwarring D/cm.", "Niet — veel te kort."],
        uitlegPad: {
          stappen: [{ titel: "f = 1/S", tekst: "S = 2,0 D = 2,0 1/m. f = 1/S = 0,50 m = **50 cm**. Dat is de afstand waarop deze bril collimaat licht (parallel) focust." }],
          theorie: "Typische leesbrillen: +1 tot +3 D. Hoger = sterker = kortere f.",
          niveaus: { basis: "f=1/2=0,5 m. A.", simpeler: "f is omgekeerde sterkte → 1/2 = 50 cm. A.", nogSimpeler: "50 cm = A." },
        },
      },
      {
        q: "Een voorwerp staat op v = 30 cm voor lens met f = 20 cm. Beeldafstand b?",
        options: ["60 cm", "12 cm", "−60 cm", "10 cm"],
        answer: 0,
        wrongHints: [null, "Niet — controleer formule.", "Niet — negatief = virtueel (alleen bij v<f).", "Niet — rekenfout."],
        uitlegPad: {
          stappen: [
            { titel: "1/f = 1/v + 1/b", tekst: "1/20 = 1/30 + 1/b → 1/b = 1/20 − 1/30 = 3/60 − 2/60 = 1/60 → b = **60 cm**. Reëel + omgekeerd + 2× vergroot (N = 60/30 = 2)." },
          ],
          niveaus: { basis: "b=60 cm. A.", simpeler: "Vermenigvuldig + aftrekken Snellius-formule. A.", nogSimpeler: "60 cm = A." },
        },
      },
      {
        q: "Een **bolle lens** als vergrootglas: voorwerp **dichter dan f**. Beeld?",
        options: [
          "Virtueel + rechtop + vergroot (achter lens kant je naar kijkt)",
          "Reëel + omgekeerd + vergroot",
          "Reëel + rechtop + verkleind",
          "Virtueel + omgekeerd"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is v > 2f.", "Niet — beeld is vergroot.", "Niet — virtueel beeld is rechtop."],
        uitlegPad: {
          stappen: [{ titel: "v < f → virtueel", tekst: "Bij v < f lopen stralen na lens divergerend. Brein extrapoleert recht achter → schijnbaar beeld 'achter' lens (= virtueel). Rechtop en vergroot — daarom werkt het als vergrootglas." }],
          theorie: "Zelfde principe in loep, microscoop-objectief op kort voorwerpsafstand.",
          niveaus: { basis: "Virtueel + rechtop + vergroot. A.", simpeler: "Vergrootglas: dichtbij = virtueel + vergroot. A.", nogSimpeler: "Vergroot = A." },
        },
      },
      {
        q: "Een **bijziend** oog (focust te dicht). Wat schrijft oogarts voor?",
        options: ["Negatieve (holle) bril", "Positieve (bolle) bril", "Geen bril nodig", "Spiegelende bril"],
        answer: 0,
        wrongHints: [null, "Niet — bolle bril is voor verziend.", "Niet — bril nodig om verre objecten scherp te zien.", "Niet — spiegel zou niet helpen."],
        uitlegPad: {
          stappen: [{ titel: "Bijziend = mind focus te dicht", tekst: "Het oog focust het beeld VOOR netvlies (te sterke lens). Holle bril divergeert licht eerst → schijnbaar voorwerp dichter → oog focust dan op netvlies. Dioptrie negatief, bijv. −2 D voor matig bijziend." }],
          theorie: "Verziend (hypermetropie) is omgekeerd: positieve bril nodig.",
          niveaus: { basis: "Holle/negatieve bril. A.", simpeler: "Bijziend = min-bril. A.", nogSimpeler: "Negatief = A." },
        },
      },
      {
        q: "De **camera** vormt een **reëel + omgekeerd** beeld op sensor. Voorwerpsafstand t.o.v. f:",
        options: ["v > f", "v < f", "v = f", "v = 0"],
        answer: 0,
        wrongHints: [null, "Niet — v<f geeft virtueel beeld (geen opname).", "Niet — bij v=f valt beeld op oneindig.", "Niet — onmogelijk."],
        uitlegPad: {
          stappen: [{ titel: "Reëel = v > f", tekst: "Reëel beeld vereist v > f. Bij v > 2f: verkleind beeld (normale foto). Bij f<v<2f: vergroot beeld (macro-fotografie). Lens-stelmotor in camera past v aan voor scherpstellen." }],
          niveaus: { basis: "v>f. A.", simpeler: "Voorwerp verder dan brandpunt → reëel beeld. A.", nogSimpeler: "v>f = A." },
        },
      },
    ],
  },

  // ─── D. Kleuren + spectrum ────────────────────────────────
  {
    title: "Kleuren + spectrum",
    explanation:
      "**Zichtbaar licht** = klein deel van EM-spectrum: golflengte ~400 nm (violet) tot ~700 nm (rood).\n\n**Volgorde wit-licht-spectrum** (lange → korte golflengte):\nRood → Oranje → Geel → Groen → Cyaan → Blauw → Violet.\n*Geheugen-truc*: ROGGBV.\n\n**Frequentie + golflengte** (in vacuüm/lucht):\n• Rood: λ ≈ 700 nm → f ≈ 4,3·10¹⁴ Hz.\n• Groen: λ ≈ 550 nm → f ≈ 5,5·10¹⁴ Hz.\n• Violet: λ ≈ 400 nm → f ≈ 7,5·10¹⁴ Hz.\n• In medium: λ verandert, f blijft (de bron bepaalt f).\n\n**Primaire kleuren licht** (additief, **RGB**):\n• **R**ood + **G**roen + **B**lauw → wit.\n• Beeldschermen + projectoren gebruiken RGB.\n\n**Primaire kleuren verf** (subtractief, **CMY**):\n• **C**yaan + **M**agenta + **G**eel (yellow) → zwart.\n• Inkt-printers gebruiken CMY(K, K=zwart).\n\n**Waarom blauwe lucht?** Rayleigh-verstrooiing: lucht-moleculen verstrooien blauw licht meer dan rood (omgekeerd evenredig met λ⁴). Bij zonsondergang reist licht langer door atmosfeer → blauw weggestrooid → rood blijft over.\n\n**Absorberen + reflecteren**:\n• Een rode appel **reflecteert** rood + absorbeert andere kleuren.\n• Witte stof reflecteert alles, zwarte absorbeert alles.\n• Onder rood licht ziet groen blad **zwart** (geen groen om te reflecteren).\n\n**Spectraal-analyse**:\n• Prisma of tralie splitst licht in spectrum.\n• Elke stof heeft uniek emissie- of absorptiespectrum (vingerafdruk).\n• Astronomie: spectrum van ster verteld over samenstelling + temperatuur.\n\n**Doppler-roodverschuiving**:\n• Sterrenstelsels die van ons af bewegen → spectrum verschoven naar rood (langer λ).\n• Hubble (1929) ontdekte: hoe verder, hoe sneller weg → uitbreiding heelal.",
    checks: [
      {
        q: "De **3 primaire kleuren** voor RGB-schermen zijn:",
        options: ["Rood, Groen, Blauw", "Rood, Geel, Blauw", "Cyaan, Magenta, Geel", "Rood, Blauw, Wit"],
        answer: 0,
        wrongHints: [null, "Niet — geel is geen primaire voor licht (wel voor verf).", "Niet — dat is verf, subtractief.", "Wit is geen kleur."],
        uitlegPad: {
          stappen: [{ titel: "Additieve menging", tekst: "Licht: alle 3 RGB op vol → wit. Beeldschermen hebben miljoenen R-, G- en B-LEDjes. Door verschillende intensiteiten → miljoenen kleuren." }],
          theorie: "Verf werkt omgekeerd (subtractief): CMY mengen → zwart, want elke verf absorbeert deel van het spectrum.",
          niveaus: { basis: "R + G + B. A.", simpeler: "Rood, groen, blauw voor schermen. A.", nogSimpeler: "RGB = A." },
        },
      },
      {
        q: "Een **blad** is groen. Onder pure **rode** lamp lijkt het:",
        options: ["Zwart", "Groen", "Rood", "Geel"],
        answer: 0,
        wrongHints: [null, "Niet — onder rood licht geen groen om te reflecteren.", "Niet — alleen onmogelijk om groen te zien zonder groen licht.", "Niet — mengkleur ontstaat niet zo."],
        uitlegPad: {
          stappen: [{ titel: "Geen groen → niets terug", tekst: "Blad reflecteert alleen groen, absorbeert rest. Bij rode lamp: er IS geen groen licht aanwezig → blad heeft niets om te reflecteren → ziet er zwart uit." }],
          theorie: "Daarom gebruiken theaters gekleurde lampen om kleuren te 'doven': een groen kostuum verdwijnt onder magenta licht.",
          niveaus: { basis: "Geen groen licht = zwart blad. A.", simpeler: "Blad heeft geen rood te reflecteren → zwart. A.", nogSimpeler: "Zwart = A." },
        },
      },
      {
        q: "Welke kleur licht heeft de **hoogste frequentie**?",
        options: ["Violet", "Rood", "Geel", "Groen"],
        answer: 0,
        wrongHints: [null, "Niet — rood is laagste frequentie.", "Niet — geel zit in midden.", "Niet — groen is iets lager."],
        uitlegPad: {
          stappen: [{ titel: "f = c/λ → korte λ = hoge f", tekst: "Violet λ ≈ 400 nm → f ≈ 7,5·10¹⁴ Hz. Rood λ ≈ 700 nm → f ≈ 4,3·10¹⁴ Hz. Hoe blauwer/violetter → kortere golflengte → hogere frequentie → hogere energie per foton (E=hf)." }],
          basiskennis: [{ onderwerp: "Net buiten zichtbaar", uitleg: "Voorbij violet (kortere λ) → UV → röntgen → gamma. Voorbij rood (langere λ) → infrarood → microgolf → radio." }],
          niveaus: { basis: "Violet = hoogste f. A.", simpeler: "Kortste golflengte = hoogste frequentie = violet. A.", nogSimpeler: "Violet = A." },
        },
      },
      {
        q: "Waarom is de **lucht overdag blauw**?",
        options: [
          "Rayleigh-verstrooiing — blauw wordt meer verstrooid dan rood",
          "Atmosfeer is blauw geverfd",
          "Zeeën reflecteren blauw omhoog",
          "Onze ogen zijn blauw-gevoelig"
        ],
        answer: 0,
        wrongHints: [null, "Niet letterlijk geverfd.", "Niet — ook boven Sahara blauw.", "Niet — ogen zien alle kleuren."],
        uitlegPad: {
          stappen: [
            { titel: "1/λ⁴-wet", tekst: "Korte golflengte (blauw) → veel meer verstrooid door lucht-moleculen dan lange (rood). Vandaar: zon-licht via verstrooiing → vooral blauw bereikt onze ogen uit alle richtingen → blauwe lucht. Bij zonsondergang reist licht lang door atmosfeer → al het blauw weggestrooid → rest = rood/oranje." },
          ],
          niveaus: { basis: "Rayleigh-verstrooiing. A.", simpeler: "Blauw licht stuitert af op lucht-moleculen → komt alle kanten op naar ons toe. A.", nogSimpeler: "Verstrooiing = A." },
        },
      },
      {
        q: "Een ster-spectrum is **naar rood verschoven**. Wat betekent dit?",
        options: [
          "De ster beweegt van ons af (Doppler-roodverschuiving)",
          "De ster is letterlijk rood gekleurd",
          "De ster is dichtbij",
          "De ster is in vacuüm"
        ],
        answer: 0,
        wrongHints: [null, "Niet — de verschuiving is t.o.v. lab-spectra.", "Niet — verband met afstand alleen via Hubble.", "Niet — vacuüm is overal."],
        uitlegPad: {
          stappen: [
            { titel: "Doppler-effect voor licht", tekst: "Bron beweegt weg → golven uitgerekt → langere λ → naar rood. Andersom: ster komt naar je toe → blauwverschuiving. Hubble (1929): bijna alle sterrenstelsels rood-verschoven → heelal dijt uit." },
          ],
          theorie: "Mate van verschuiving (z-waarde) → snelheid + afstand. Verste objecten: z>1 (heelal-rand).",
          niveaus: { basis: "Rood = weg = uitdijing-bewijs. A.", simpeler: "Roodverschuiving = bewegen vandaan. A.", nogSimpeler: "Weg = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — examen-mix + interferentie (VWO)",
    explanation:
      "**Interferentie** (VWO-extra):\nTwee coherente lichtbronnen → golven overlappen → versterking (in fase) + uitdoving (tegenfase).\n\n**Young's dubbelspleet-experiment** (1801):\n• Wit licht door 2 smalle spleten → patroon van lichte + donkere strepen op scherm.\n• Bewees dat licht zich als golf gedraagt (i.t.t. Newton's deeltjes-idee).\n\n**Formule maxima**: d·sin(θ_n) = n·λ\n• d = spleetafstand.\n• n = orde van maximum (0, 1, 2, ...).\n• θ_n = hoek van n-de max.\n\n**Minima**: d·sin(θ) = (n+½)·λ.\n\n**Toepassingen**:\n• Tralie (1000 spleten per mm) → spectraal-analyse (zoals prisma).\n• Anti-reflectie coating brillen.\n• Holografie.\n\n**Bonus optisch instrumenten**:\n• Microscoop: 2 lenzen achter elkaar (objectief klein + oculair).\n• Telescoop: groot objectief verzamelt + klein oculair vergroot.\n• Spiegel-telescoop (Newton, Cassegrain): grote concave spiegel ipv lens (geen dispersie!).",
    checks: [
      {
        q: "Bij **invalshoek 45°** op water (n=1,33), brekingshoek?",
        options: ["~32°", "~45°", "~60°", "Totaal reflecteren"],
        answer: 0,
        wrongHints: [null, "Niet — wel breking, geen 45.", "Niet — te groot.", "Niet — bij intreden water (dichter)."],
        uitlegPad: {
          stappen: [{ titel: "1·sin(45)=1,33·sin(θ)", tekst: "sin(45°) = 0,707. sin(θ) = 0,707/1,33 ≈ 0,532 → θ ≈ **32,1°**. Buigen naar de normaal." }],
          niveaus: { basis: "θ≈32°. A.", simpeler: "Snellius doorrekenen. A.", nogSimpeler: "32° = A." },
        },
      },
      {
        q: "Een dubbelspleet (d = 0,10 mm) belicht met λ = 600 nm. Hoek 1e maximum?",
        options: ["~0,34°", "~3°", "~0,06°", "~6°"],
        answer: 0,
        wrongHints: [null, "Te groot.", "Te klein.", "Niet — controleer rekening."],
        uitlegPad: {
          stappen: [
            { titel: "d·sin(θ)=n·λ → θ klein", tekst: "n=1: sin(θ) = λ/d = 600·10⁻⁹ / 10⁻⁴ = 6·10⁻³ → θ ≈ 0,344°. Bij kleine hoeken: sin(θ)≈θ in radialen ≈ 0,006 rad." },
          ],
          niveaus: { basis: "θ ≈ 0,34°. A.", simpeler: "Berg uit Snellius-Young: λ/d → klein hoek. A.", nogSimpeler: "0,34° = A." },
        },
      },
      {
        q: "Wat onthul **spectraal-analyse** van een ster?",
        options: [
          "Chemische samenstelling + temperatuur + snelheid",
          "Alleen kleur",
          "Alleen afstand",
          "Niets — licht reist te ver"
        ],
        answer: 0,
        wrongHints: [null, "Veel meer dan kleur.", "Onvolledig.", "Niet — sterren-licht draagt informatie mee."],
        uitlegPad: {
          stappen: [
            { titel: "Absorptie-lijnen", tekst: "Donkere lijnen in spectrum = wat de ster-atmosfeer absorbeert. Elke chemische stof heeft unieke absorptie → vingerafdruk. Verbreding lijnen → temperatuur. Doppler-verschuiving lijnen → snelheid (rood/blauwverschuiving)." },
          ],
          theorie: "Helium werd in zon-spectrum ontdekt VÓÓR aarde-laboratorium (Janssen 1868). Naam van Grieks 'helios' (zon).",
          niveaus: { basis: "Samenstelling + T + v uit spectrum. A.", simpeler: "Spectraal-vingerafdrukken vertellen veel. A.", nogSimpeler: "Veel info = A." },
        },
      },
      {
        q: "Een **microscoop** vergroot met:",
        options: [
          "Objectief × oculair (twee lenzen)",
          "Eén grote lens",
          "Spiegel + lens",
          "Alleen virtuele beelden"
        ],
        answer: 0,
        wrongHints: [null, "Onvoldoende vergroting.", "Niet — telescoop wel, microscoop niet.", "Een deel is virtueel, een deel reëel."],
        uitlegPad: {
          stappen: [
            { titel: "Twee-traps-systeem", tekst: "Objectief (klein f, dicht bij preparaat) maakt vergroot reëel beeld. Oculair fungeert als loep en vergroot dat reële beeld nog eens virtueel. Totale vergroting = N_objectief × N_oculair (bv. 40 × 10 = 400×)." },
          ],
          niveaus: { basis: "Twee lenzen achter elkaar. A.", simpeler: "Objectief + oculair = twee-stappen-vergroting. A.", nogSimpeler: "2 lenzen = A." },
        },
      },
      {
        q: "Waarom gebruiken **moderne telescopen** spiegels in plaats van lenzen?",
        options: [
          "Geen dispersie + groter te maken zonder vervorming",
          "Spiegels zijn goedkoper per cm",
          "Lenzen verbreken licht",
          "Spiegels schitteren mooier"
        ],
        answer: 0,
        wrongHints: [null, "Niet — kostenargument is bijzaak.", "Onzin — lenzen versterken niet verbreken.", "Niet — schitteren is bijwerking."],
        uitlegPad: {
          stappen: [
            { titel: "Geen kleur-fout", tekst: "Lenzen hebben **chromatische aberratie**: verschillende kleuren breken anders → onscherp beeld met kleur-rand. Spiegels reflecteren alle kleuren gelijk → geen kleur-fout. Plus: grote lenzen vervormen onder eigen gewicht (Yerkes 1.02 m is grens). Spiegels kunnen veel groter (10+ m, ESO VLT)." },
          ],
          niveaus: { basis: "Geen dispersie + groter mogelijk. A.", simpeler: "Spiegels hebben geen kleurfout en kunnen reuze worden. A.", nogSimpeler: "Spiegels = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const opticaHavoVwo = {
  id: "optica-havo-vwo",
  title: "Optica (HAVO/VWO Natuurkunde)",
  emoji: "🔍",
  level: "havo-vwo-4-5",
  subject: "natuurkunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Natuurkunde — Optica (CSE-onderwerp)",
  prerequisites: [
    { id: "trillingen-golven-havo-vwo", title: "Trillingen + Golven", niveau: "havo-3F" },
    { id: "licht-geluid-natuurkunde", title: "Licht + geluid (basis)", niveau: "vmbo-2" },
  ],
  intro:
    "Optica voor het HAVO/VWO CSE (Centraal Schriftelijk Eindexamen) — reflectie + lichtbreking (Snellius), totale interne reflectie, lenzen + lensformule, kleuren + spectrum. VWO-stof: Young's dubbelspleet + interferentie. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "optica", "licht", "lichtsnelheid",
    "reflectie", "spiegel", "spiegelwet",
    "breking", "lichtbreking", "Snellius",
    "brekingsindex", "n",
    "totale reflectie", "grenshoek",
    "glasvezel", "internet-kabel",
    "lens", "bolle lens", "holle lens", "convex", "concaaf",
    "brandpunt", "brandpuntsafstand", "f",
    "lensformule", "1/f=1/v+1/b",
    "dioptrie",
    "bril", "bijziend", "verziend", "myopie", "hypermetropie",
    "camera", "oog", "netvlies", "loep", "vergrootglas",
    "microscoop", "telescoop", "objectief", "oculair",
    "dispersie", "spectrum", "prisma",
    "regenboog", "Rayleigh", "blauwe lucht",
    "RGB", "CMY", "kleuren",
    "interferentie", "Young", "dubbelspleet",
    "rood verschuiving", "Doppler licht", "Hubble",
  ],
  chapters,
  steps,
};

export default opticaHavoVwo;
