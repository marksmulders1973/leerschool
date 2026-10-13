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
        options: ["Rechtdoor, zonder te breken", "Breken naar de normaal toe", "Breken van de normaal af", "Volledig terugkaatsen"],
        answer: 0,
        wrongHints: [null, "Niet — wat is de invalshoek als de straal loodrecht valt? Wat zegt de brekingswet dan?", "Van de normaal af breken gebeurt bij een schuine straal die naar een minder dichte stof gaat. Wat is de invalshoek hier?", "Totale reflectie kan alleen van een dichtere naar een minder dichte stof en boven de grenshoek. Geldt dat hier?"],
        uitlegPad: {
          stappen: [{ titel: "sin(0)=0 → geen breking", tekst: "Bij loodrechte inval: invalshoek θ₁=0°. Snellius: 1·sin(0) = n₂·sin(θ₂) → sin(θ₂)=0 → θ₂=0. Geen knik. Licht loopt door, alleen langzamer in glas." }],
          niveaus: { basis: "Loodrecht = geen breking.", simpeler: "Recht in = recht door.", nogSimpeler: "Doorlopen" },
        },
      },
      {
        q: "Licht gaat van lucht (n=1,0) naar water (n=1,33). Invalshoek 60°. Brekingshoek?",
        options: ["~40,6°", "~60°", "~50°", "Totaal reflecteren"],
        answer: 0,
        wrongHints: [null, "Bij 60° in en 60° uit is er geen breking. Verandert licht van richting als het van lucht naar water gaat?", "Reken sin r = sin 60° / 1,33 nog eens na. Hoe groot is sin 60°?", "Totale reflectie kan alleen van een dichtere naar een minder dichte stof. Is water dichter of minder dicht dan lucht?"],
        uitlegPad: {
          stappen: [
            { titel: "Snellius toepassen", tekst: "n₁·sin(θ₁) = n₂·sin(θ₂)\n1,0·sin(60°) = 1,33·sin(θ₂)\nsin(θ₂) = 0,866/1,33 = 0,651\nθ₂ = arcsin(0,651) ≈ **40,6°**." },
          ],
          theorie: "Naar dichter medium (water) → buigen naar normaal (kleinere hoek).",
          niveaus: { basis: "sin(θ₂)=0,866/1,33 → 40,6°.", simpeler: "Vermenigvuldig + delen Snellius.", nogSimpeler: "~41°" },
        },
      },
      {
        q: "Brekingsindex van diamant is 2,42. Snelheid van licht in diamant?",
        options: ["~1,24·10⁸ m/s", "~3,0·10⁸ m/s", "~7,3·10⁸ m/s", "~0,41·10⁸ m/s"],
        answer: 0,
        wrongHints: [null, "3,0·10⁸ m/s is de lichtsnelheid in vacuüm. Gaat licht in diamant even snel?", "Je vermenigvuldigde c met n. Kan licht in een stof sneller gaan dan in vacuüm?", "Je rekende 1/n uit. Wat moet je eigenlijk door n delen?"],
        uitlegPad: {
          stappen: [{ titel: "v = c/n", tekst: "v = 3,0·10⁸ / 2,42 ≈ **1,24·10⁸ m/s**. Licht is in diamant ongeveer 2,4× langzamer dan in vacuüm." }],
          theorie: "Daarom is diamant zo schitterend: hoog n + perfecte slijp → veel totale reflectie binnen de steen → veel kleur en vonk.",
          niveaus: { basis: "v=3·10⁸/2,42=1,24·10⁸.", simpeler: "Lichtsnelheid gedeeld door n.", nogSimpeler: "1,24·10⁸" },
        },
      },
      {
        q: "Reflectiewet zegt:",
        options: [
          "Invalshoek = reflectiehoek, t.o.v. de normaal",
          "Invalshoek = brekingshoek, t.o.v. de normaal",
          "Invalshoek + reflectiehoek = 90°, t.o.v. de normaal",
          "Reflectiehoek = 2 × invalshoek, t.o.v. de normaal"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is breking, niet reflectie.", "Kies een invalshoek van 30°: kaatst de straal dan onder 60° terug?", "Teken een straal op een spiegel: gaat de teruggekaatste straal twee keer zo schuin weg?"],
        uitlegPad: {
          stappen: [{ titel: "Hoeken t.o.v. normaal (loodrecht)", tekst: "De normaal is een denkbeeldige lijn loodrecht op het oppervlak op het invalspunt. Invalshoek wordt vanaf de normaal gemeten — NIET vanaf het oppervlak (een veelgemaakte fout!)." }],
          niveaus: { basis: "Invalshoek = reflectiehoek.", simpeler: "Gelijke hoek bij weerkaatsing.", nogSimpeler: "Gelijk" },
        },
      },
      {
        q: "Welk medium heeft de **grootste lichtsnelheid**?",
        options: ["Vacuüm (n=1)", "Lucht (n=1,0003)", "Water (n=1,33)", "Glas (n=1,5)"],
        answer: 0,
        wrongHints: [null, "n = 1,0003 is net iets meer dan 1. Wat betekent een grotere n voor de snelheid?", "Hoe groter n, hoe langzamer het licht. Welke stof heeft de kleinste n?", "Glas heeft de grootste n van deze vier. Is dat de snelste of de traagste stof?"],
        uitlegPad: {
          stappen: [{ titel: "v = c/n, dus n=1 geeft max v", tekst: "Vacuüm heeft per definitie n=1 → v=c=3·10⁸ m/s. Elk medium met n>1 maakt het licht langzamer." }],
          niveaus: { basis: "Vacuüm.", simpeler: "Lichtsnelheid c in vacuüm.", nogSimpeler: "Vacuüm" },
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
          "Totale reflectie: alles kaatst terug in het water",
          "Breking: de straal komt eruit onder ongeveer 35°",
          "Breking: de straal scheert langs het oppervlak",
          "Deels terugkaatsen, deels breken naar buiten"
        ],
        answer: 0,
        wrongHints: [null, "Bereken eerst de grenshoek van water met sin θ_g = 1/n. Ligt 50° daarboven of daaronder?", "Langs het oppervlak scheren gebeurt alleen precies bij de grenshoek. Is 50° de grenshoek van water?", "Bij welke invalshoeken komt er nog licht uit het water? Hoort 50° daarbij? Reken de grenshoek uit."],
        uitlegPad: {
          stappen: [
            { titel: "θ_g berekenen + vergelijken", tekst: "sin(θ_g) = n_lucht/n_water = 1/1,33 = 0,752 → θ_g ≈ 48,8°. 50° > 48,8° → boven grens → totale interne reflectie. Niets komt uit." },
          ],
          theorie: "Daarom werken glasvezels: licht binnen raakt de glaswand onder een hoek >θ_g → ketst altijd terug naar binnen → over km's met heel weinig verlies.",
          niveaus: { basis: "50° > 48,8° → totale reflectie.", simpeler: "Boven grenshoek = alles terug, niets uit.", nogSimpeler: "Totale reflectie" },
        },
      },
      {
        q: "Welke kleur licht heeft de **kleinste brekingsindex** in glas?",
        options: ["Rood", "Geel", "Blauw", "Violet"],
        answer: 0,
        wrongHints: [null, "Denk aan een prisma: welke kleur wordt het minst afgebogen? Is dat geel?", "Welke kleuren buigen in een prisma het sterkst af? Hoort blauw daarbij?", "Staat violet in een prisma aan de kant die het minst of het meest afbuigt?"],
        uitlegPad: {
          stappen: [{ titel: "Lange λ → kleinste n", tekst: "In een gewoon dispersie-medium (glas, water): lange golflengten (rood) breken minder dan korte (violet). Daarom komt rood **bovenaan** uit een prisma, violet **onderaan**." }],
          theorie: "Cijfers: rood n≈1,51; violet n≈1,53 in standaard glas.",
          niveaus: { basis: "Rood = kleinste n.", simpeler: "Rood buigt minst.", nogSimpeler: "Rood" },
        },
      },
      {
        q: "Hoe ontstaat een **regenboog**?",
        options: [
          "Breking en weerkaatsing in regendruppels",
          "Weerkaatsing van zonlicht tegen de wolken",
          "Buiging van licht langs de rand van wolken",
          "Breking in ijskristallen hoog in de lucht"
        ],
        answer: 0,
        wrongHints: [null, "Niet — weerkaatsing tegen wolken splitst licht niet in kleuren.", "Buiging langs een rand geeft andere patronen, geen boog met een vaste kleurvolgorde.", "Breking in ijskristallen geeft een kring (halo) rond de zon. Zie je een regenboog bij ijs of bij regen?"],
        uitlegPad: {
          stappen: [
            { titel: "Drie stappen per druppel", tekst: "1. Zonlicht treedt druppel binnen → breekt (dispersie: kleuren splitsen).\n2. Reflecteert intern aan achterkant druppel.\n3. Breekt opnieuw bij uittreden.\nVerschillende kleuren komen onder iets verschillende hoek uit → boogvorm met rood buitenaan, violet binnenaan." },
          ],
          basiskennis: [{ onderwerp: "Hoek 42°", uitleg: "Primaire regenboog verschijnt op 42° van het anti-zon-punt (de plek tegenover de zon, vanuit jou gezien)." }],
          niveaus: { basis: "Breking + reflectie + breking in druppel.", simpeler: "Druppel splitst en buigt licht in boog.", nogSimpeler: "Druppels" },
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
        wrongHints: [null, "Niet — een lens focust licht, maar geleidt het niet over grote afstand door.", "In glasvezel zit geen metaal: het is een heel dunne draad van glas.", "Niet — vezel zelf geeft geen licht."],
        uitlegPad: {
          stappen: [{ titel: "Licht ketst, geen verlies", tekst: "Glasvezel-kern heeft hoger n dan de mantel. Licht in de kern raakt mantel onder hoek >θ_g → totale reflectie → ketst verder. Bij de reflectie gaat geen licht verloren, en het glas absorbeert heel weinig. Daarom km-bereik mogelijk + extreem hoge bandbreedte." }],
          niveaus: { basis: "Totale reflectie binnen vezel.", simpeler: "Licht ketst binnen kern zonder uit te komen.", nogSimpeler: "Totale refl." },
        },
      },
      {
        q: "Grenshoek voor glas (n=1,5) naar lucht?",
        options: ["~41,8°", "~30°", "~45°", "~60°"],
        answer: 0,
        wrongHints: [null, "Bij 30° is de sinus 0,5. Is 1/n hier 0,5?", "Bij 45° is de sinus 0,71. Is 1/1,5 gelijk aan 0,71?", "Bij 60° is de sinus 0,87. Is 1/1,5 zo groot?"],
        uitlegPad: {
          stappen: [{ titel: "sin(θ_g) = 1/n", tekst: "sin(θ_g) = 1/1,5 = 0,667 → θ_g = arcsin(0,667) ≈ **41,8°**." }],
          niveaus: { basis: "arcsin(1/1,5)≈41,8°.", simpeler: "1/1,5=0,667, arcsin daarvan = 42°.", nogSimpeler: "42°" },
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
        wrongHints: [null, "Je rekende 2 × 100. Geldt S = f, of S = 1/f met f in meter?", "Bij f = 20 cm = 0,20 m hoort S = 1/0,20. Hoeveel dioptrie is dat?", "Een lens met f = 2 cm is zo sterk als de loep van een horlogemaker. Hoeveel dioptrie zou die hebben?"],
        uitlegPad: {
          stappen: [{ titel: "f = 1/S", tekst: "S = 2,0 D = 2,0 1/m. f = 1/S = 0,50 m = **50 cm**. Dat is de afstand waarop deze bril evenwijdig invallend licht focust." }],
          theorie: "Typische leesbrillen: +1 tot +3 D. Hoger = sterker = kortere f.",
          niveaus: { basis: "f=1/2=0,5 m.", simpeler: "f is omgekeerde sterkte → 1/2 = 50 cm.", nogSimpeler: "50 cm" },
        },
      },
      {
        q: "Een voorwerp staat op v = 30 cm voor lens met f = 20 cm. Beeldafstand b?",
        options: ["60 cm", "12 cm", "−60 cm", "10 cm"],
        answer: 0,
        wrongHints: [null, "Je telde 1/30 en 1/20 op. Hoe vind je 1/b uit 1/f = 1/v + 1/b?", "Een negatieve b hoort bij een virtueel beeld, als v kleiner is dan f. Is 30 cm kleiner dan 20 cm?", "Je trok de afstanden zelf van elkaar af. Moet je de afstanden aftrekken of hun omgekeerden?"],
        uitlegPad: {
          stappen: [
            { titel: "1/f = 1/v + 1/b", tekst: "1/20 = 1/30 + 1/b → 1/b = 1/20 − 1/30 = 3/60 − 2/60 = 1/60 → b = **60 cm**. Reëel + omgekeerd + 2× vergroot (N = 60/30 = 2)." },
          ],
          niveaus: { basis: "b=60 cm.", simpeler: "Breuken aftrekken in de lensformule.", nogSimpeler: "60 cm" },
        },
      },
      {
        q: "Een **bolle lens** als vergrootglas: voorwerp **dichter dan f**. Beeld?",
        options: [
          "Virtueel + rechtop + vergroot",
          "Reëel + omgekeerd + vergroot",
          "Reëel + rechtop + verkleind",
          "Virtueel + omgekeerd + vergroot"
        ],
        answer: 0,
        wrongHints: [null, "Een reëel, omgekeerd beeld krijg je als het voorwerp verder dan f staat. Waar staat het voorwerp hier?", "Door een vergrootglas zie je de dingen groter. Is het beeld dan verkleind?", "Een virtueel beeld zie je door de lens heen, zoals bij een loep. Staat dat beeld op zijn kop?"],
        uitlegPad: {
          stappen: [{ titel: "v < f → virtueel", tekst: "Bij v < f lopen stralen na lens divergerend. Brein extrapoleert recht achter → schijnbaar beeld 'achter' lens (= virtueel). Rechtop en vergroot — daarom werkt het als vergrootglas." }],
          theorie: "Zelfde principe in de loep en in het oculair van een microscoop.",
          niveaus: { basis: "Virtueel + rechtop + vergroot.", simpeler: "Vergrootglas: dichtbij = virtueel + vergroot.", nogSimpeler: "Vergroot" },
        },
      },
      {
        q: "Een **bijziend** oog (focust te dicht). Wat schrijft oogarts voor?",
        options: ["Negatieve (holle) bril", "Positieve (bolle) bril", "Bril met cilinderglazen", "Bril met prismaglazen"],
        answer: 0,
        wrongHints: [null, "Een bolle bril bundelt het licht extra. Helpt dat een oog dat het licht al te sterk bundelt?", "Cilinderglazen corrigeren astigmatisme (een scheef gebogen hoornvlies). Breekt een bijziend oog scheef of te sterk?", "Prismaglazen helpen als je ogen niet goed samen kijken. Moet de lichtbundel bij een bijziend oog meer of minder gebundeld worden?"],
        uitlegPad: {
          stappen: [{ titel: "Bijziend = oog focust te dicht", tekst: "Het oog focust het beeld VOOR netvlies (te sterke lens). Holle bril divergeert licht eerst → schijnbaar voorwerp dichter → oog focust dan op netvlies. Dioptrie negatief, bijv. −2 D voor matig bijziend." }],
          theorie: "Verziend (hypermetropie) is omgekeerd: positieve bril nodig.",
          niveaus: { basis: "Holle/negatieve bril.", simpeler: "Bijziend = min-bril.", nogSimpeler: "Negatief" },
        },
      },
      {
        q: "De **camera** vormt een **reëel + omgekeerd** beeld op sensor. Voorwerpsafstand t.o.v. f:",
        options: ["v > f", "v < f", "v = f", "Maakt niet uit"],
        answer: 0,
        wrongHints: [null, "Bij v < f krijg je een virtueel beeld, zoals bij een loep. Kan een sensor dat opvangen?", "Bij v = f gaan de stralen evenwijdig verder. Waar ontstaat dan een beeld?", "Een loep vlak bij een voorwerp geeft een rechtopstaand, virtueel beeld. Maakt de afstand dan echt niet uit?"],
        uitlegPad: {
          stappen: [{ titel: "Reëel = v > f", tekst: "Reëel beeld vereist v > f. Bij v > 2f: verkleind beeld (normale foto). Bij f<v<2f: vergroot beeld (macro-fotografie). Lens-stelmotor in camera past b (afstand lens–sensor) aan voor scherpstellen." }],
          niveaus: { basis: "v>f.", simpeler: "Voorwerp verder dan brandpunt → reëel beeld.", nogSimpeler: "v>f" },
        },
      },
    ],
  },

  // ─── D. Kleuren + spectrum ────────────────────────────────
  {
    title: "Kleuren + spectrum",
    explanation:
      "**Zichtbaar licht** = klein deel van EM-spectrum: golflengte ~400 nm (violet) tot ~700 nm (rood).\n\n**Volgorde wit-licht-spectrum** (lange → korte golflengte):\nRood → Oranje → Geel → Groen → Cyaan → Blauw → Violet.\n*Geheugen-truc*: ROGGBV.\n\n**Frequentie + golflengte** (in vacuüm/lucht):\n• Rood: λ ≈ 700 nm → f ≈ 4,3·10¹⁴ Hz.\n• Groen: λ ≈ 550 nm → f ≈ 5,5·10¹⁴ Hz.\n• Violet: λ ≈ 400 nm → f ≈ 7,5·10¹⁴ Hz.\n• In medium: λ verandert, f blijft (de bron bepaalt f).\n\n**Primaire kleuren licht** (additief, **RGB**):\n• **R**ood + **G**roen + **B**lauw → wit.\n• Beeldschermen + projectoren gebruiken RGB.\n\n**Primaire kleuren verf** (subtractief, **CMY**):\n• **C**yaan + **M**agenta + **G**eel (yellow) → zwart.\n• Inkt-printers gebruiken CMY(K, K=zwart).\n\n**Waarom blauwe lucht?** Rayleigh-verstrooiing: lucht-moleculen verstrooien blauw licht meer dan rood (omgekeerd evenredig met λ⁴). Bij zonsondergang reist licht langer door atmosfeer → blauw weggestrooid → rood blijft over.\n\n**Absorberen + reflecteren**:\n• Een rode appel **reflecteert** rood + absorbeert andere kleuren.\n• Witte stof reflecteert alles, zwarte absorbeert alles.\n• Onder rood licht ziet groen blad **zwart** (geen groen om te reflecteren).\n\n**Spectraal-analyse**:\n• Prisma of tralie splitst licht in spectrum.\n• Elke stof heeft uniek emissie- of absorptiespectrum (vingerafdruk).\n• Astronomie: spectrum van ster vertelt over samenstelling + temperatuur.\n\n**Doppler-roodverschuiving**:\n• Sterrenstelsels die van ons af bewegen → spectrum verschoven naar rood (langer λ).\n• Hubble (1929) ontdekte: hoe verder, hoe sneller weg → uitbreiding heelal.",
    checks: [
      {
        q: "De **3 primaire kleuren** voor RGB-schermen zijn:",
        options: ["Rood, Groen, Blauw", "Rood, Geel, Blauw", "Cyaan, Magenta, Geel", "Rood, Groen, Geel"],
        answer: 0,
        wrongHints: [null, "Rood, geel en blauw ken je van het mengen van verf. Werkt licht mengen op dezelfde manier?", "Cyaan, magenta en geel zitten in printerinkt. Mengt een scherm licht of inkt?", "Geel licht kun je mengen uit rood en groen licht. Is geel dan een basiskleur?"],
        uitlegPad: {
          stappen: [{ titel: "Additieve menging", tekst: "Licht: alle 3 RGB op vol → wit. Beeldschermen hebben miljoenen R-, G- en B-subpixels. Door verschillende intensiteiten → miljoenen kleuren." }],
          theorie: "Verf werkt omgekeerd (subtractief): CMY mengen → zwart, want elke verf absorbeert deel van het spectrum.",
          niveaus: { basis: "R + G + B.", simpeler: "Rood, groen, blauw voor schermen.", nogSimpeler: "RGB" },
        },
      },
      {
        q: "Een **blad** is groen. Onder pure **rode** lamp lijkt het:",
        options: ["Zwart", "Groen", "Rood", "Geel"],
        answer: 0,
        wrongHints: [null, "Niet — onder rood licht geen groen om te reflecteren.", "Niet — het blad absorbeert rood licht en kaatst dus geen rood terug.", "Een mengkleur ontstaat als er meerdere kleuren licht terugkomen. Welke kleur licht valt hier op het blad, en kaatst het blad die terug?"],
        uitlegPad: {
          stappen: [{ titel: "Geen groen → niets terug", tekst: "Blad reflecteert alleen groen, absorbeert rest. Bij rode lamp: er IS geen groen licht aanwezig → blad heeft niets om te reflecteren → ziet er zwart uit." }],
          theorie: "Daarom gebruiken theaters gekleurde lampen om kleuren te 'doven': een groen kostuum verdwijnt onder magenta licht.",
          niveaus: { basis: "Geen groen licht = zwart blad.", simpeler: "Blad reflecteert geen rood → zwart.", nogSimpeler: "Zwart" },
        },
      },
      {
        q: "Welke kleur licht heeft de **hoogste frequentie**?",
        options: ["Violet", "Rood", "Geel", "Groen"],
        answer: 0,
        wrongHints: [null, "Rood ligt aan de kant van de lange golflengtes. Hoort daar een hoge of een lage frequentie bij?", "Geel zit midden in het spectrum. Welke kant van de regenboog heeft de kortste golflengte?", "Groen zit midden in het spectrum. Welke kleur heeft een nog kortere golflengte?"],
        uitlegPad: {
          stappen: [{ titel: "f = c/λ → korte λ = hoge f", tekst: "Violet λ ≈ 400 nm → f ≈ 7,5·10¹⁴ Hz. Rood λ ≈ 700 nm → f ≈ 4,3·10¹⁴ Hz. Hoe blauwer/violetter → kortere golflengte → hogere frequentie → hogere energie per foton (E=hf)." }],
          basiskennis: [{ onderwerp: "Net buiten zichtbaar", uitleg: "Voorbij violet (kortere λ) → UV → röntgen → gamma. Voorbij rood (langere λ) → infrarood → microgolf → radio." }],
          niveaus: { basis: "Violet = hoogste f.", simpeler: "Kortste golflengte = hoogste frequentie = violet.", nogSimpeler: "Violet" },
        },
      },
      {
        q: "Waarom is de **lucht overdag blauw**?",
        options: [
          "Verstrooiing — blauw wordt sterker verstrooid dan rood",
          "Absorptie — de lucht slokt rood op en laat blauw door",
          "Weerkaatsing — de zeeën kaatsen blauw licht omhoog",
          "Gevoeligheid — onze ogen zien vooral blauw licht"
        ],
        answer: 0,
        wrongHints: [null, "De zon zelf ziet er overdag wit-geel uit, niet blauw. Slokt de lucht dan veel licht op?", "Ook midden boven de Sahara is de lucht blauw. Kan het dan door de zee komen?", "Onze ogen zien alle kleuren, en 's avonds kleurt dezelfde lucht rood. Kan het dan aan je ogen liggen?"],
        uitlegPad: {
          stappen: [
            { titel: "1/λ⁴-wet", tekst: "Korte golflengte (blauw) → veel meer verstrooid door lucht-moleculen dan lange (rood). Vandaar: zon-licht via verstrooiing → vooral blauw bereikt onze ogen uit alle richtingen → blauwe lucht. Bij zonsondergang reist licht lang door atmosfeer → al het blauw weggestrooid → rest = rood/oranje." },
          ],
          niveaus: { basis: "Rayleigh-verstrooiing.", simpeler: "Blauw licht stuitert af op lucht-moleculen → komt alle kanten op naar ons toe.", nogSimpeler: "Verstrooiing" },
        },
      },
      {
        q: "Een ster-spectrum is **naar rood verschoven**. Wat betekent dit?",
        options: [
          "De ster beweegt van ons af",
          "De ster is letterlijk rood gekleurd",
          "De ster komt naar ons toe",
          "De ster wordt steeds heter"
        ],
        answer: 0,
        wrongHints: [null, "Een rode ster heeft een andere kleur, maar haar lijnen liggen op de normale plek. Wat betekent het als de lijnen zelf verschoven zijn?", "Als een bron naar je toe beweegt, worden de golven in elkaar gedrukt. Wordt de golflengte dan langer of korter?", "Een hetere ster straalt juist meer blauw uit (wet van Wien). En bij roodverschuiving schuiven álle lijnen op; waar wijst dat op?"],
        uitlegPad: {
          stappen: [
            { titel: "Doppler-effect voor licht", tekst: "Bron beweegt weg → golven uitgerekt → langere λ → naar rood. Andersom: ster komt naar je toe → blauwverschuiving. Hubble (1929): bijna alle sterrenstelsels rood-verschoven → heelal dijt uit." },
          ],
          theorie: "Mate van verschuiving (z-waarde) → snelheid + afstand. Verste objecten: z>1 (heelal-rand).",
          niveaus: { basis: "Rood = weg = uitdijing-bewijs.", simpeler: "Roodverschuiving = bewegen vandaan.", nogSimpeler: "Weg" },
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
        wrongHints: [null, "Bij 45° in en 45° uit is er geen breking. Verandert licht van richting als het het water in gaat?", "Licht dat water in gaat, breekt naar de normaal toe. Wordt de hoek dan groter of kleiner dan 45°?", "Totale reflectie kan alleen van een dichtere naar een minder dichte stof. Is dat hier het geval?"],
        uitlegPad: {
          stappen: [{ titel: "1·sin(45)=1,33·sin(θ)", tekst: "sin(45°) = 0,707. sin(θ) = 0,707/1,33 ≈ 0,532 → θ ≈ **32,1°**. Buigen naar de normaal." }],
          niveaus: { basis: "θ≈32°.", simpeler: "Snellius doorrekenen.", nogSimpeler: "32°" },
        },
      },
      {
        q: "Een dubbelspleet (d = 0,10 mm) belicht met λ = 600 nm. Hoek 1e maximum?",
        options: ["~0,34°", "~3°", "~0,06°", "~6°"],
        answer: 0,
        wrongHints: [null, "Te groot: kijk of je d goed omrekent. 0,10 mm = 1,0·10⁻⁴ m.", "Gebruik sin θ = λ/d. Staan λ en d allebei in meter?", "Reken d om naar meter: 0,10 mm = 1,0·10⁻⁴ m. Klopt jouw macht van 10?"],
        uitlegPad: {
          stappen: [
            { titel: "d·sin(θ)=n·λ → θ klein", tekst: "n=1: sin(θ) = λ/d = 600·10⁻⁹ / 10⁻⁴ = 6·10⁻³ → θ ≈ 0,344°. Bij kleine hoeken: sin(θ)≈θ in radialen ≈ 0,006 rad." },
          ],
          niveaus: { basis: "θ ≈ 0,34°.", simpeler: "Bereken sin(θ) = λ/d → kleine hoek.", nogSimpeler: "0,34°" },
        },
      },
      {
        q: "Wat onthult **spectraal-analyse** van een ster?",
        options: [
          "Chemische samenstelling + temperatuur + snelheid",
          "Afstand tot de aarde + leeftijd + grootte",
          "Kleur + helderheid + afstand tot de aarde",
          "Massa + leeftijd + aantal planeten eromheen"
        ],
        answer: 0,
        wrongHints: [null, "Een spectrum toont lijnen bij vaste golflengtes. Welke eigenschappen lees je direct af uit welke lijnen er zijn en hoe ver ze verschoven zijn?", "Kleur en helderheid zie je ook zonder spectrum. Wat vertellen de losse lijnen in het spectrum je extra?", "Massa en leeftijd lees je niet direct af uit spectraallijnen. Wat vertellen de lijnen en hun verschuiving wel?"],
        uitlegPad: {
          stappen: [
            { titel: "Absorptie-lijnen", tekst: "Donkere lijnen in spectrum = wat de ster-atmosfeer absorbeert. Elke chemische stof heeft unieke absorptie → vingerafdruk. Kleurverdeling van het spectrum (wet van Wien) → temperatuur. Doppler-verschuiving lijnen → snelheid (rood/blauwverschuiving)." },
          ],
          theorie: "Helium werd in zon-spectrum ontdekt VÓÓR aarde-laboratorium (Janssen 1868). Naam van Grieks 'helios' (zon).",
          niveaus: { basis: "Samenstelling + T + v uit spectrum.", simpeler: "Spectraal-vingerafdrukken vertellen veel.", nogSimpeler: "Veel info" },
        },
      },
      {
        q: "Een **microscoop** vergroot met:",
        options: [
          "Twee lenzen: objectief en oculair",
          "Eén lens: een sterk vergrootglas",
          "Een holle spiegel en een oculair",
          "Twee spiegels: een holle en een bolle"
        ],
        answer: 0,
        wrongHints: [null, "Een vergrootglas haalt hooguit zo'n 10×. Hoe haalt een microscoop dan 400×?", "Holle spiegels zitten in sommige telescopen. Wat zit er in de buis van een microscoop?", "Het spiegeltje onder een schoolmicroscoop geeft alleen licht. Wat zit er in de buis om te vergroten?"],
        uitlegPad: {
          stappen: [
            { titel: "Twee-traps-systeem", tekst: "Objectief (klein f, dicht bij preparaat) maakt vergroot reëel beeld. Oculair fungeert als loep en vergroot dat reële beeld nog eens virtueel. Totale vergroting = N_objectief × N_oculair (bv. 40 × 10 = 400×)." },
          ],
          niveaus: { basis: "Twee lenzen achter elkaar.", simpeler: "Objectief + oculair = twee-stappen-vergroting.", nogSimpeler: "2 lenzen" },
        },
      },
      {
        q: "Waarom gebruiken **moderne telescopen** spiegels in plaats van lenzen?",
        options: [
          "Geen dispersie + groter te maken zonder vervorming",
          "Spiegels zijn goedkoper en gaan langer mee",
          "Een spiegel vergroot sterker dan een lens",
          "Spiegels vangen meer licht omdat ze glanzen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — kosten zijn bijzaak. Welk probleem hebben grote lenzen met kleuren en gewicht?", "De vergroting hangt af van brandpuntsafstanden, niet van spiegel of lens.", "Hoeveel licht je vangt, hangt af van de doorsnede, niet van glans. Welk probleem hebben grote lenzen?"],
        uitlegPad: {
          stappen: [
            { titel: "Geen kleur-fout", tekst: "Lenzen hebben **chromatische aberratie**: verschillende kleuren breken anders → onscherp beeld met kleur-rand. Spiegels reflecteren alle kleuren gelijk → geen kleur-fout. Plus: grote lenzen vervormen onder eigen gewicht (Yerkes 1,02 m is grens). Spiegels kunnen veel groter (10+ m, ESO VLT)." },
          ],
          niveaus: { basis: "Geen dispersie + groter mogelijk.", simpeler: "Spiegels hebben geen kleurfout en kunnen reuze worden.", nogSimpeler: "Spiegels" },
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
