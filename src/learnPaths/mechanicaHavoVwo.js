// Leerpad: Mechanica — HAVO/VWO Natuurkunde
// Newton-wetten, arbeid + energie, impuls + behoud. Eindexamen-CSE-stof.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  kracht: "#ef5350",
  snelheid: "#42a5f5",
  energie: "#ffd54f",
  arbeid: "#66bb6a",
};

const stepEmojis = ["📏", "💪", "⚡", "🔄", "🏆"];

const chapters = [
  { letter: "A", title: "Kinematica", emoji: "📏", from: 0, to: 0 },
  { letter: "B", title: "Newton-wetten + krachten", emoji: "💪", from: 1, to: 1 },
  { letter: "C", title: "Arbeid + energie", emoji: "⚡", from: 2, to: 2 },
  { letter: "D", title: "Impuls + behoudswetten", emoji: "🔄", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Kinematica ────────────────────────────────────────
  {
    title: "Kinematica — beweging beschrijven",
    explanation:
      "**Kinematica** = beschrijving van beweging (positie, snelheid, versnelling) zonder naar oorzaken te kijken.\n\n**Positie + verplaatsing**:\n• Positie x: waar object zich bevindt (m).\n• Verplaatsing Δx = x_eind − x_begin. Kan negatief (terug).\n• Afgelegde afstand: totale weg (altijd positief).\n\n**Snelheid v** (m/s):\n• v_gem = Δx / Δt.\n• Momentane snelheid = afgeleide positie naar tijd: v = dx/dt.\n• Op grafiek (x-t): helling = snelheid.\n• Eenheden: 1 m/s = 3,6 km/h.\n\n**Versnelling a** (m/s²):\n• a = Δv / Δt (gemiddeld) of dv/dt (momentaan).\n• Op grafiek (v-t): helling = versnelling.\n• Op grafiek (v-t): oppervlakte onder = verplaatsing.\n\n**Eenparige beweging** (a = 0):\n• v = constant.\n• x = x₀ + v·t.\n• v-t-grafiek: horizontale lijn.\n\n**Eenparig versnelde beweging** (a = constant):\nFormules:\n• v(t) = v₀ + a·t\n• x(t) = x₀ + v₀·t + ½·a·t²\n• v² = v₀² + 2·a·(x − x₀) **(tijd-loze formule)**\n\n**Vrije val** (a = g ≈ 9,81 m/s²):\n• Object valt onder zwaartekracht alleen.\n• Op aarde: g = 9,81 m/s² (op CSE vaak 10 m/s² afgerond).\n• Vacuüm: alle objecten vallen even snel (Galileï's experiment).\n• Met luchtweerstand: zware/aerodynamische objecten vallen sneller dan lichte/luchtige.\n\n**Voorbeeld vrije val**:\nVan 20 m hoog naar beneden, v₀=0:\n• v² = 0 + 2·9,81·20 → v = √392 ≈ 19,8 m/s bij grond.\n• Tijd: v = g·t → t = 19,8/9,81 ≈ 2,02 s.\n\n**Omhoog gooien** (verticaal):\n• Op hoogste punt: v = 0 (even).\n• Boven gaat snelheid nul, kracht zwaartekracht blijft.\n• Symmetrisch: stijgen + dalen-tijden gelijk (zonder luchtweerstand).\n\n**Schuine worp** (2D):\n• Horizontaal: eenparig (a=0 zonder lucht).\n• Verticaal: eenparig versneld (a=g).\n• Onafhankelijk → tegelijk berekenen.\n• Maximale afstand: hoek 45° (vacuüm).\n\n**Grafieken-conversies**:\n• x-t: positie. Helling = v.\n• v-t: snelheid. Helling = a. Oppervlakte = verplaatsing.\n• a-t: versnelling. Oppervlakte = Δv.",
    checks: [
      {
        q: "Op een **v-t-grafiek** stelt de **oppervlakte onder** de curve voor:",
        options: ["Verplaatsing","Versnelling","Tijd","Snelheid"],
        answer: 0,
        wrongHints: [null, "Niet — versnelling = helling.", "Niet — tijd is as.", "Niet — snelheid is y-waarde."],
        uitlegPad: {
          stappen: [{ titel: "Oppervlakte v-t = afstand", tekst: "Bij eenparige beweging: x = v·t. Op v-t-grafiek vormt v·t een **rechthoek** waarvan oppervlakte = afstand. Bij variabele v: oppervlakte onder curve = integraal van v over t = **verplaatsing**." }],
          theorie: "Cito-classics: 'gegeven v-t-diagram, hoeveel m heeft auto afgelegd?' Antwoord: oppervlakte bepalen (rechthoek, driehoek, trapezium).",
          niveaus: { basis: "Verplaatsing. A.", simpeler: "Opp. v-t = afstand = A.", nogSimpeler: "Afstand = A." },
        },
      },
      {
        q: "Object start op rust, **a = 2 m/s²**. Snelheid na 5 s?",
        options: ["10 m/s","2 m/s","25 m/s","Onbepaald"],
        answer: 0,
        wrongHints: [null, "Niet — dat is a.", "Niet — dat is verplaatsing.", "Wel bepaald."],
        uitlegPad: {
          stappen: [{ titel: "v = v₀ + a·t", tekst: "Begin v₀ = 0. **v(t) = 0 + 2 × 5 = 10 m/s**. Eenparig versneld dus snelheid groeit lineair." }],
          niveaus: { basis: "10 m/s. A.", simpeler: "v=at=2·5=10 = A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "Vrije val vanaf **5 m hoog** (v₀=0, g=10). Eindsnelheid bij grond?",
        options: ["10 m/s","5 m/s","20 m/s","2 m/s"],
        answer: 0,
        wrongHints: [null, "Niet — wel groter.", "Te groot.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "Tijd-loze formule", tekst: "v² = v₀² + 2g·h = 0 + 2·10·5 = 100. **v = √100 = 10 m/s** bij grond." }],
          theorie: "Of via tijd: h=½gt² → 5=5t² → t=1s → v=gt=10 m/s.",
          niveaus: { basis: "10 m/s. A.", simpeler: "v²=2·g·h=100, v=10 = A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "Op **hoogste punt** van een verticaal omhoog-geworpen bal: v = ?",
        options: ["0","Maximaal","Onbepaald","Negatief"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel bepaald.", "Niet — gewoon 0 op precies dat moment."],
        uitlegPad: {
          stappen: [{ titel: "Snelheid keert om", tekst: "Bal stijgt → snelheid daalt door zwaartekracht → bereikt nul precies op hoogste punt → daarna negatief (terug). Op **top** = v=0**. Versnelling blijft wel g (-9,81 m/s²) — zwaartekracht blijft." }],
          niveaus: { basis: "0. A.", simpeler: "Top = v=0 = A.", nogSimpeler: "0 = A." },
        },
      },
      {
        q: "Snelheid in **km/h** omrekenen naar m/s — formule?",
        options: ["÷ 3,6","× 3,6","× 60","÷ 1000"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — minuten-conversie.", "Niet — m vs km, dan tijd nog."],
        uitlegPad: {
          stappen: [{ titel: "km/h ÷ 3,6 = m/s", tekst: "1 km = 1000 m, 1 h = 3600 s → 1 km/h = 1000/3600 = **1/3,6 m/s**. Dus km/h ÷ 3,6 = m/s. Omgekeerd: m/s × 3,6 = km/h.\n\nVoorbeeld: 90 km/h ÷ 3,6 = 25 m/s." }],
          theorie: "Cito-klassieker. Onthoud: 36 km/h = 10 m/s.",
          niveaus: { basis: "÷ 3,6. A.", simpeler: "km/h → m/s = ÷3,6 = A.", nogSimpeler: "÷3,6 = A." },
        },
      },
    ],
  },

  // ─── B. Newton-wetten + krachten ──────────────────────────
  {
    title: "Newton-wetten + krachten",
    explanation:
      "**Isaac Newton** (1687, Principia Mathematica) formuleerde 3 hoofdwetten van beweging.\n\n**1. Wet van traagheid** (eerste wet):\n• Een voorwerp behoudt zijn snelheid (incl. richting) wanneer de **resulterende kracht** nul is.\n• Stilstand of constante snelheid = geen netto kracht.\n• Anders gezegd: tegen verandering 'verzet' het object zich = traagheid.\n• Voorbeeld: in trein die remt voel je voorwaartse 'duw' — eigenlijk jij wilt door, de trein remt.\n\n**2. F = m · a** (tweede wet):\n• **F_res** (resulterende kracht in N) = **m** (massa in kg) × **a** (versnelling in m/s²).\n• Verband tussen kracht, massa en versnelling.\n• Voorbeeld: 1000 kg auto met netto 2000 N voorwaartse kracht → a = 2000/1000 = 2 m/s².\n• Vector-grootheid: kracht + versnelling hebben richting.\n\n**3. Actie = reactie** (derde wet):\n• Voor elke kracht (actie) is er een gelijke maar tegengestelde kracht (reactie) op het andere object.\n• Je duwt tegen muur (10 N) → muur duwt jou terug (10 N).\n• Werken altijd op **verschillende objecten** (anders zouden ze elkaar opheffen).\n• Voorbeeld: raket stoot gas uit (omlaag) → gas duwt raket omhoog. Lopen: voet duwt grond achteruit → grond duwt voet vooruit.\n\n**Belangrijke krachten**:\n\n**Zwaartekracht F_z**:\n• F_z = m × g (kracht in N waarmee aarde object aantrekt).\n• g = 9,81 N/kg (op aarde, op zeeniveau). Op maan: 1,62 N/kg.\n• Massa (kg) blijft overal gelijk; gewicht (N) hangt van g af.\n\n**Normaalkracht F_N**:\n• Kracht die oppervlak uitoefent op object loodrecht op oppervlak.\n• Op horizontale grond: F_N = F_z (om in evenwicht te blijven).\n• Op helling: F_N = m·g·cos(α).\n\n**Wrijving F_w**:\n• Tegenwerkt beweging.\n• **Statisch**: tot object beweegt. Max F_w ≤ μ_s · F_N.\n• **Kinetisch** (rol/glij): tijdens beweging. F_w = μ_k · F_N.\n• μ = wrijvingscoëfficiënt (afhankelijk materialen).\n• Lucht-weerstand: F_lucht ≈ ½·ρ·v²·C·A (vereenvoudigd v² → groter bij snelheid).\n\n**Spankracht F_s** (in touw/staaf):\n• Door touw/staaf overgedragen kracht.\n• Bij massaloze touw + katrol: zelfde over hele touw.\n\n**Veerkracht F_veer** (Hooke):\n• F_veer = C · u (C = veerconstante in N/m, u = uitrekking in m).\n• Bv. 200 N/m veer, uitgerekt 0,1 m → F = 20 N.\n\n**Krachten combineren**:\n• Krachten in zelfde richting: optellen.\n• Tegengestelde: aftrekken (let op tekens).\n• Loodrecht: Pythagoras + componenten.\n• 2D: ontbinden in x en y componenten via cos/sin.\n\n**Krachten-figuur** (vector-diagram):\n• Teken alle krachten als pijlen vanaf object.\n• Resulterende = vectorsom.\n• Bij evenwicht (geen versnelling): F_res = 0 in elke richting.\n\n**Helling (klassiek probleem)**:\n• Component zwaartekracht langs helling: m·g·sin(α).\n• Component loodrecht: m·g·cos(α) = F_N.\n• Bij geen wrijving: a = g·sin(α) langs helling omlaag.\n• Met wrijving: a = g·sin(α) − μ·g·cos(α).",
    checks: [
      {
        q: "Welke Newton-wet luidt **F_res = m · a**?",
        options: ["Tweede","Eerste","Derde","Geen — verkeerde formule"],
        answer: 0,
        wrongHints: [null, "Niet — die is traagheid.", "Niet — die is actie-reactie.", "Wel correct."],
        uitlegPad: {
          stappen: [{ titel: "F=ma is tweede", tekst: "**Tweede Newton-wet**: F_res = m·a. Verbindt kracht, massa, versnelling. **Eerste** = traagheid (F=0 → v constant). **Derde** = actie-reactie." }],
          niveaus: { basis: "Tweede. A.", simpeler: "F=ma = 2e Newton = A.", nogSimpeler: "2e = A." },
        },
      },
      {
        q: "Auto **1000 kg** met netto kracht **5000 N** voorwaarts. Versnelling?",
        options: ["5 m/s²","5000 m/s²","0,2 m/s²","100 m/s²"],
        answer: 0,
        wrongHints: [null, "Niet — niet rechtstreeks kracht.", "Niet — verwisseld.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "a = F/m", tekst: "Tweede Newton: F = m·a → **a = F/m = 5000/1000 = 5 m/s²**." }],
          niveaus: { basis: "5 m/s². A.", simpeler: "5000/1000 = 5 = A.", nogSimpeler: "5 = A." },
        },
      },
      {
        q: "Object **10 kg** op aarde. Zwaartekracht (gebruik g=10)?",
        options: ["100 N","10 N","1 N","9,81 kg"],
        answer: 0,
        wrongHints: [null, "Niet — vermenigvuldig met g.", "Te klein.", "Niet kg — N."],
        uitlegPad: {
          stappen: [{ titel: "F_z = mg", tekst: "**F_z = m × g = 10 × 10 = 100 N**. Massa blijft 10 kg (overal). Op maan: 10 × 1,62 ≈ 16 N." }],
          niveaus: { basis: "100 N. A.", simpeler: "10·10 = 100 N = A.", nogSimpeler: "100 = A." },
        },
      },
      {
        q: "Je springt van een trampoline. Welke wet beschrijft dat trampoline jou omhoog duwt?",
        options: ["Derde Newton (actie-reactie)","Eerste Newton","Tweede Newton alleen","Pythagoras"],
        answer: 0,
        wrongHints: [null, "Niet — die gaat over evenwicht.", "Niet primair — wel meegerekend.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Actie = reactie", tekst: "Je duwt trampoline naar beneden (actie). Trampoline duwt jou met gelijke kracht omhoog (reactie). **Derde Newton-wet**. Beide krachten gelijk in grootte, tegengesteld, op verschillende objecten." }],
          niveaus: { basis: "Derde. A.", simpeler: "Actie+reactie = 3e Newton = A.", nogSimpeler: "3e = A." },
        },
      },
      {
        q: "Object op **helling van 30°**, m = 5 kg, geen wrijving. Versnelling langs helling? (g=10)",
        options: ["5 m/s²","10 m/s²","2,5 m/s²","8,7 m/s²"],
        answer: 0,
        wrongHints: [null, "Niet — alleen component.", "Niet — halve g eerder.", "Niet — fout component (cos)."],
        uitlegPad: {
          stappen: [{ titel: "a = g·sin(α)", tekst: "Component zwaartekracht langs helling: F_// = m·g·sin(α). Versnelling: **a = g·sin(α) = 10·sin(30°) = 10·0,5 = 5 m/s²**.\n\n(Massa valt weg in formule.)" }],
          theorie: "Memo: 30° → sin=0,5, cos=0,866. 45° → beide 0,707. 60° → sin=0,866, cos=0,5.",
          niveaus: { basis: "5 m/s². A.", simpeler: "g·sin30 = 5 = A.", nogSimpeler: "5 = A." },
        },
      },
    ],
  },

  // ─── C. Arbeid + energie ──────────────────────────────────
  {
    title: "Arbeid + energie + vermogen",
    explanation:
      "**Arbeid W** (Joule):\n• W = F × s × cos(α)\n  - F = kracht (N)\n  - s = verplaatsing (m)\n  - α = hoek tussen F en s\n• Bij F in zelfde richting als s: W = F·s.\n• Loodrechte kracht (cos90°=0): geen arbeid.\n• Tegen-richting: negatieve arbeid (W<0).\n• Eenheid: 1 Joule = 1 N·m.\n\n**Voorbeelden arbeid**:\n• Sleep een doos 10 m met 50 N: W = 50 × 10 = 500 J.\n• Til 2 kg 1 m hoog tegen zwaartekracht: W = 2 × 10 × 1 = 20 J.\n• Loop met tas in hand 5 m horizontaal: W = 0 (kracht omhoog, beweging horizontaal).\n\n**Energie E**:\n• Bezit van object om arbeid te verrichten.\n• Eenheid: Joule (zelfde als arbeid).\n• Conversie tussen verschillende vormen.\n\n**Kinetische energie** (bewegings-energie):\n**E_k = ½ · m · v²**\n• Voorbeeld: auto 1000 kg, 20 m/s: E_k = ½·1000·400 = 200.000 J = 200 kJ.\n• Verdubbelen v → E_k ×4 (kwadraat-effect).\n\n**Zwaartepunts-energie** (potentiële energie zwaartekracht):\n**E_p = m · g · h**\n• Voorbeeld: 2 kg op 5 m hoog: E_p = 2·10·5 = 100 J.\n\n**Veerspanning-energie**:\n**E_veer = ½ · C · u²**\n• Veer C=200 N/m, uitgerekt 0,1 m: E = ½·200·0,01 = 1 J.\n\n**Andere energievormen**:\n• Chemisch (in brandstof, batterij): omgezet via verbranding/reactie.\n• Thermisch (warmte): trillingen moleculen.\n• Stralings (licht, infrarood).\n• Kern: in atoomkernen.\n• Elektrisch.\n\n**Wet van behoud van energie**:\n• Totale energie blijft constant in gesloten systeem.\n• Energie kan **omgezet** worden van vorm naar vorm, niet vernietigd of gecreëerd.\n• Bij wrijving: kinetische → warmte (verloren als nuttig vermogen).\n\n**Voorbeeld energie-omzetting**:\nBal van 1 kg valt vanaf 10 m hoogte:\n• Boven: E_p = 1·10·10 = 100 J, E_k = 0.\n• Net voor grond: E_p = 0, E_k = 100 J → v = √(2·100/1) = √200 ≈ 14,1 m/s.\n• Energie volledig omgezet.\n\n**Energie-balans bij sleep/duw**:\nW_voorwaartse_kracht − W_wrijving = ΔE_k\n\n**Rendement η**:\n• η = (nuttige energie / totale energie) × 100%.\n• Voorbeeld: motor levert 800 W mechanisch terwijl hij 1000 W elektrisch ontvangt → η = 80%.\n• Ideaal niet bereikbaar (warmte-verlies altijd).\n\n**Vermogen P** (Watt):\n**P = W / t = F · v** (constante snelheid)\n• Vermogen = energie per tijd.\n• Eenheid: 1 Watt = 1 J/s.\n• 1000 W = 1 kW.\n• 1 paardenkracht (pk) ≈ 735 W.\n\n**Voorbeelden vermogen**:\n• Gloeilamp: 60 W.\n• Mens trapt fiets: ~100-300 W.\n• Sportauto motor: ~150 kW (200 pk).\n• Centrale: 100-1500 MW.\n\n**Energie-rekening thuis** (kWh):\n• 1 kWh = 1000 W × 3600 s = 3,6 MJ.\n• Gloeilamp 60 W × 10 h = 0,6 kWh ≈ €0,15 (bij €0,25/kWh).\n• Wasmachine 2 kW × 1 h = 2 kWh ≈ €0,50.\n\n**Voertuig-kinematica**:\n• Remmen: E_k → wrijvingswarmte. F_rem × s = ½·m·v² → remafstand s = v²/(2·a). **Verdubbelen snelheid → 4× zo lange remafstand**.",
    checks: [
      {
        q: "Wat is **arbeid** bij F=20 N en s=5 m in zelfde richting?",
        options: ["100 J","25 J","4 J","20 J"],
        answer: 0,
        wrongHints: [null, "Niet — verkeerde bewerking.", "Niet — verkeerde bewerking.", "Mist factor s."],
        uitlegPad: {
          stappen: [{ titel: "W = F·s", tekst: "Bij parallelle F en s: **W = F · s = 20 × 5 = 100 J**." }],
          niveaus: { basis: "100 J. A.", simpeler: "W=F·s=20·5=100 = A.", nogSimpeler: "100 = A." },
        },
      },
      {
        q: "**Kinetische energie** auto 1000 kg op 20 m/s?",
        options: ["200.000 J","20.000 J","20 J","1.000.000 J"],
        answer: 0,
        wrongHints: [null, "Mist factor.", "Mist veel.", "Te groot."],
        uitlegPad: {
          stappen: [{ titel: "E_k = ½mv²", tekst: "E_k = ½ × m × v² = ½ × 1000 × 20² = ½ × 1000 × 400 = **200.000 J = 200 kJ**." }],
          theorie: "Bij verdubbelen v wordt E_k 4×. Cito-favoriet: 'auto van 50 → 100 km/h hoeveel x energie meer?' → 4×.",
          niveaus: { basis: "200.000 J. A.", simpeler: "½·1000·400 = 200000 = A.", nogSimpeler: "200 kJ = A." },
        },
      },
      {
        q: "Bal 2 kg valt van 5 m hoog. **Welke snelheid bij grond** (g=10, geen luchtweerstand)?",
        options: ["10 m/s","5 m/s","20 m/s","2 m/s"],
        answer: 0,
        wrongHints: [null, "Te klein.", "Te groot.", "Niet correct."],
        uitlegPad: {
          stappen: [
            { titel: "Energie-behoud", tekst: "E_p_boven = E_k_beneden → mgh = ½mv² → v² = 2gh = 2·10·5 = 100 → **v = 10 m/s**." },
            { titel: "Massa valt weg", tekst: "Massa in beide kanten — valt weg. Snelheid hangt alleen af van hoogte (zonder lucht)." },
          ],
          niveaus: { basis: "10 m/s. A.", simpeler: "v²=2gh=100, v=10 = A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "Motor levert **2400 J in 60 s**. Vermogen?",
        options: ["40 W","2400 W","144.000 W","0,025 W"],
        answer: 0,
        wrongHints: [null, "Niet — door tijd delen.", "Niet — vermenigvuldigd.", "Niet — fout-omgedraaid."],
        uitlegPad: {
          stappen: [{ titel: "P = W/t", tekst: "**Vermogen = energie/tijd = 2400 / 60 = 40 W**." }],
          niveaus: { basis: "40 W. A.", simpeler: "2400/60 = 40 = A.", nogSimpeler: "40 = A." },
        },
      },
      {
        q: "Auto verdubbelt snelheid 50→100 km/h. **Remafstand wordt**:",
        options: ["4× zo lang","2× zo lang","Gelijk","Half zo lang"],
        answer: 0,
        wrongHints: [null, "Niet — kwadraat.", "Tegenovergesteld.", "Niet — wel groter."],
        uitlegPad: {
          stappen: [{ titel: "v² in formule", tekst: "Remafstand s = v²/(2a). Verdubbelen v → v² ×4 → **s ×4**.\n\n50 km/h vergt bv 15 m. 100 km/h vergt 60 m.\n\nDit is reden waarom snelheidslimiet zo cruciaal is voor verkeersveiligheid." }],
          theorie: "Cito-toepassing: dodehoek + reactietijd. Reactietijd schaalt lineair (×2), remafstand schaalt kwadratisch (×4). Samen veel langere stopafstand bij hoge snelheid.",
          niveaus: { basis: "4× lang. A.", simpeler: "v² → ×4 = A.", nogSimpeler: "4× = A." },
        },
      },
    ],
  },

  // ─── D. Impuls + behoudswetten ────────────────────────────
  {
    title: "Impuls + behoudswetten",
    explanation:
      "**Impuls p** (kg·m/s, vector-grootheid):\n**p = m × v**\n• Voorbeeld: 1000 kg auto op 20 m/s → p = 20.000 kg·m/s.\n• Richting = richting snelheid.\n\n**Wet van behoud van impuls**:\nIn gesloten systeem (geen externe krachten) blijft totale impuls **constant**.\nΣ p_voor = Σ p_na.\n\n**Botsingen** (2 voorwerpen):\n\n**Elastische botsing**:\n• Behoud van impuls + behoud van kinetische energie.\n• Voorbeelden: biljartballen, ideale veer.\n• Voorwerpen scheiden weer na botsing.\n\n**Plastische (volledig inelastische) botsing**:\n• Behoud van impuls (altijd).\n• Géén behoud kinetische energie (deel wordt warmte/vervorming).\n• Voorwerpen blijven samen.\n• Voorbeeld: klei-bal raakt klei-bal en plakt vast.\n\n**Gemengde** (inelastisch): tussen elastisch en plastisch in.\n\n**Voorbeeld plastische botsing**:\nKar 1 (2 kg, 5 m/s) raakt kar 2 (3 kg, stilstand). Plakken samen vast.\nVoor: p = 2·5 + 3·0 = 10 kg·m/s.\nNa: p = (2+3)·v = 10 → v = 2 m/s.\n\n**Impuls-versus-kracht-relatie**:\nΔp = F · Δt = **stoot**.\n• Verandering van impuls = kracht × tijd.\n• Vandaar: in lange botstijd is kracht lager → veiligheids-design (kreukel-zone, airbag).\n\n**Voorbeeld autoraap**:\nAuto 1000 kg, 20 m/s → 0 m/s in 0,1 s (zonder kreukel-zone):\n• Δp = 20.000 kg·m/s.\n• F = Δp/Δt = 20.000/0,1 = 200.000 N. Levensgevaarlijk.\n\nMet kreukel-zone (botstijd 0,5 s):\n• F = 20.000/0,5 = 40.000 N. Veel beperkter (nog steeds zwaar, maar overleefbaar).\n\n**Behoudswetten** in mechanica:\n1. **Impulsbehoud**: bij elke botsing.\n2. **Energie-behoud**: alleen bij elastische botsing (kinetisch). Altijd bij totale energie (incl. warmte).\n3. **Massa-behoud**: altijd in mechanica (kernfysica anders).\n\n**Toepassing impulsbehoud**: raket\n• Voor lancering: alles stil. p_totaal = 0.\n• Gas eruit naar achteren (impuls negatief) + raket vooruit (impuls positief). Samen 0 — behouden.\n• Hoe meer gas-massa × snelheid, hoe meer voorwaartse impuls raket.\n\n**Voorbeeld biljart-classic**:\nBal A (5 m/s) raakt bal B (stilstand), beide gelijke massa. Elastisch.\n• Na botsing: A staat stil, B beweegt 5 m/s.\n• Impuls behouden + energie behouden.\n• Bal A geeft volledige impuls + energie aan B (alleen mogelijk bij gelijke massa).\n\n**Centrum-van-massa**:\n• Punt waar massa als geconcentreerd kan worden beschouwd.\n• In gesloten systeem zonder externe kracht beweegt centrum-massa met constante snelheid (volgt uit impuls-behoud).",
    checks: [
      {
        q: "Wat is **impuls** van 500 kg-voorwerp op 10 m/s?",
        options: ["5000 kg·m/s","500 kg·m/s","50 kg·m/s","0,02 kg·m/s"],
        answer: 0,
        wrongHints: [null, "Niet — vermenigvuldig met v.", "Niet — niet rechtstreeks.", "Niet — fout-bewerking."],
        uitlegPad: {
          stappen: [{ titel: "p = m·v", tekst: "**Impuls** p = m × v = 500 × 10 = **5000 kg·m/s**." }],
          niveaus: { basis: "5000 kg·m/s. A.", simpeler: "p=mv=500·10=5000 = A.", nogSimpeler: "5000 = A." },
        },
      },
      {
        q: "Twee karren botsen + plakken samen. Welke behoudswet **altijd**?",
        options: ["Impuls","Kinetische energie","Beide","Geen"],
        answer: 0,
        wrongHints: [null, "Niet — plastisch verliest kinetische.", "Niet — energie niet bij plastisch.", "Wel impuls."],
        uitlegPad: {
          stappen: [{ titel: "Impulsbehoud universeel", tekst: "**Impulsbehoud** geldt in **elke** botsing (zonder externe kracht). Kinetische energie-behoud alleen bij **elastische** botsing. Plastische (plakken) verliest E_k aan warmte + vervorming." }],
          niveaus: { basis: "Impuls. A.", simpeler: "Botsing = impulsbehoud = A.", nogSimpeler: "Impuls = A." },
        },
      },
      {
        q: "Kar 4 kg, 6 m/s raakt stilstaande 2 kg, plakken samen. Snelheid na?",
        options: ["4 m/s","6 m/s","2 m/s","12 m/s"],
        answer: 0,
        wrongHints: [null, "Te groot — massa nam toe.", "Te klein.", "Te groot."],
        uitlegPad: {
          stappen: [
            { titel: "Impulsbehoud", tekst: "Voor: p = 4·6 + 2·0 = 24 kg·m/s. Na: p = (4+2)·v = 6v." },
            { titel: "Oplos v", tekst: "6v = 24 → **v = 4 m/s**." },
          ],
          niveaus: { basis: "4 m/s. A.", simpeler: "24/6=4 = A.", nogSimpeler: "4 = A." },
        },
      },
      {
        q: "**Airbag** in auto vermindert letsel door:",
        options: ["Botstijd verlengen → kracht verlagen","Energie absorberen","Snelheid stoppen","Geen invloed"],
        answer: 0,
        wrongHints: [null, "Indirect — primair via tijd.", "Wel — verzacht.", "Wel veel invloed."],
        uitlegPad: {
          stappen: [{ titel: "F = Δp/Δt", tekst: "**Airbag** rekt botstijd Δt op (van milliseconden naar 0,1-0,5 s). Bij vaste Δp (snelheidsverandering): grotere Δt → **kleinere F** op lichaam. Voorkomt levensgevaarlijke krachten op hoofd/borst." }],
          theorie: "Zelfde principe: kreukel-zone, bouwhelm, paratroop-rolafval, springtouw op trampoline.",
          niveaus: { basis: "Botstijd↑ → kracht↓. A.", simpeler: "Airbag = tijd langer = F lager = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Bal A 5 m/s raakt **gelijke** bal B in rust, elastisch. Na botsing:",
        options: ["A staat stil, B 5 m/s","Beide 2,5 m/s","A 5 m/s, B 0","Beide stil"],
        answer: 0,
        wrongHints: [null, "Klopt impuls maar niet energie.", "Niet — A botst wel.", "Niet relevant."],
        uitlegPad: {
          stappen: [
            { titel: "Klassieke biljart-uitkomst", tekst: "Bij **elastische botsing van 2 gelijke massa's** met 1 in rust: bewegende stopt, stilstaande neemt alle snelheid over. Impuls + E_k beide behouden." },
            { titel: "Check", tekst: "Impuls voor: m·5. Impuls na: 0 + m·5 ✓. E_k voor: ½m·25. E_k na: 0 + ½m·25 ✓." },
          ],
          niveaus: { basis: "A stop, B beweegt. A.", simpeler: "Gelijk massa elastisch = ruil snelheid = A.", nogSimpeler: "Ruil = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — mechanica mix",
    explanation:
      "Mix van kinematica + Newton + energie + impuls.\n\nVeel succes!",
    checks: [
      {
        q: "Object eenparig versneld start v=0, na 4 s heeft v=20 m/s. **Verplaatsing**?",
        options: ["40 m","80 m","20 m","100 m"],
        answer: 0,
        wrongHints: [null, "Niet — opp. v-t = 80/2.", "Niet correct.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "Oppervlakte v-t-driehoek", tekst: "Op v-t-diagram is dit driehoek met basis 4 + hoogte 20. **Opp = ½·4·20 = 40 m** = verplaatsing. (Of via x=½·a·t² met a=5: ½·5·16=40 m. ✓)" }],
          niveaus: { basis: "40 m. A.", simpeler: "½·4·20=40 = A.", nogSimpeler: "40 = A." },
        },
      },
      {
        q: "Wat is **vermogen** in W bij F=100 N, v=2 m/s constant?",
        options: ["200 W","50 W","100 W","2 W"],
        answer: 0,
        wrongHints: [null, "Niet — vermenigvuldig.", "Mist v.", "Mist F."],
        uitlegPad: {
          stappen: [{ titel: "P = F·v", tekst: "Bij constante snelheid: **P = F × v = 100 × 2 = 200 W**." }],
          niveaus: { basis: "200 W. A.", simpeler: "P=Fv=100·2=200 = A.", nogSimpeler: "200 = A." },
        },
      },
      {
        q: "**Wet van traagheid** is welke Newton-wet?",
        options: ["Eerste","Tweede","Derde","Vierde"],
        answer: 0,
        wrongHints: [null, "Niet — F=ma.", "Niet — actie-reactie.", "Bestaat niet."],
        uitlegPad: {
          stappen: [{ titel: "Eerste = traagheid", tekst: "**Eerste Newton-wet** = **wet van traagheid**: zonder netto kracht behoudt object snelheid (incl. richting) of blijft in rust. Tweede = F=ma. Derde = actie-reactie." }],
          niveaus: { basis: "Eerste. A.", simpeler: "Traagheid = 1e = A.", nogSimpeler: "1e = A." },
        },
      },
      {
        q: "Bij **klimmen 2 m hoogte** met 70 kg-persoon: arbeid? (g=10)",
        options: ["1400 J","700 J","140 J","100 J"],
        answer: 0,
        wrongHints: [null, "Niet — wel meer.", "Niet correct.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "Tegen zwaartekracht = mgh", tekst: "Arbeid = ΔE_p = m·g·h = 70 × 10 × 2 = **1400 J**." }],
          niveaus: { basis: "1400 J. A.", simpeler: "70·10·2=1400 = A.", nogSimpeler: "1400 = A." },
        },
      },
      {
        q: "Raket lanceert door gas naar beneden te stoten. Welke Newton-wet **primair**?",
        options: ["Derde (actie-reactie)","Eerste (traagheid)","Pythagoras","Geen Newton"],
        answer: 0,
        wrongHints: [null, "Niet — traagheid speelt geen rol bij lancering.", "Niet relevant.", "Wel Newton."],
        uitlegPad: {
          stappen: [{ titel: "Raket = actie-reactie", tekst: "Raket duwt gas omlaag (actie) → gas duwt raket omhoog met gelijke kracht (reactie). **Derde Newton + impulsbehoud** zorgen samen voor lift. Hoe meer gasmassa × gas-snelheid eruit, hoe meer raketsnelheid omhoog." }],
          niveaus: { basis: "Derde. A.", simpeler: "Raket = 3e Newton = A.", nogSimpeler: "3e = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const mechanicaHavoVwo = {
  id: "mechanica-havo-vwo",
  title: "Mechanica (HAVO/VWO natuurkunde)",
  emoji: "💪",
  level: "havo4-5-vwo",
  subject: "natuurkunde",
  referentieNiveau: "havo-vwo-CSE-natuurkunde",
  sloThema: "Natuurkunde HAVO/VWO — mechanica eindexamen-stof",
  prerequisites: [
    { id: "krachten-natuurkunde", title: "Krachten", niveau: "klas3" },
    { id: "bewegingen-snelheid-natuurkunde", title: "Bewegingen + snelheid", niveau: "klas3" },
    { id: "pythagoras", title: "Pythagoras", niveau: "klas2" },
    { id: "goniometrie", title: "Goniometrie", niveau: "klas3" },
  ],
  intro:
    "Mechanica HAVO/VWO natuurkunde eindexamen. Kinematica (positie/snelheid/versnelling, vrije val, grafieken), Newton-wetten + krachten (zwaarte/normaal/wrijving/helling), arbeid + energie (E_k/E_p/E_veer + behoud + rendement + vermogen P=Fv), impuls + behoudswetten (elastisch/plastisch + airbag-toepassing). ~15-20 min.",
  triggerKeywords: [
    "mechanica", "kinematica", "dynamica",
    "snelheid", "versnelling", "afgelegde weg",
    "v-t diagram", "x-t diagram",
    "vrije val", "g=9,81", "valbeweging",
    "Newton", "F=ma", "F = m·a",
    "wet van traagheid", "actie-reactie",
    "zwaartekracht", "F_z",
    "normaalkracht", "F_N",
    "wrijving", "wrijvingscoëfficiënt",
    "veerkracht", "Hooke",
    "helling", "schuin vlak",
    "arbeid", "W = F·s",
    "energie", "joule",
    "kinetische energie", "Ek", "½mv²",
    "potentiële energie", "Ep", "mgh",
    "veerspanning-energie",
    "behoud van energie",
    "vermogen", "watt", "P=Fv",
    "rendement",
    "remafstand", "remmen",
    "impuls", "p=mv",
    "impulsbehoud",
    "elastische botsing", "plastische botsing",
    "airbag", "kreukelzone",
    "raket lancering",
  ],
  chapters,
  steps,
};

export default mechanicaHavoVwo;
