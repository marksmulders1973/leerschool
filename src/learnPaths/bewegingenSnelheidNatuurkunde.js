// Leerpad: Bewegingen + snelheid — klas 1-2 natuurkunde.
// Onderdeel natuurkunde basis. Referentieniveau 2F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  v: "#42a5f5",
  s: "#ffd54f",
  t: "#ff8a65",
  highlight: "#ff7043",
};

const stepEmojis = ["🏃", "🛣️", "⚡", "📈", "🚗", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is snelheid?", emoji: "🏃", from: 0, to: 0 },
  { letter: "B", title: "Eenheden (m/s, km/u)", emoji: "🛣️", from: 1, to: 1 },
  { letter: "C", title: "Versnelling + remmen", emoji: "⚡", from: 2, to: 2 },
  { letter: "D", title: "Afstand-tijd-grafiek", emoji: "📈", from: 3, to: 3 },
  { letter: "E", title: "Praktijk — auto, sport, ruimte", emoji: "🚗", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function formuleSvg() {
  return `<svg viewBox="0 0 320 160">
<rect x="0" y="0" width="320" height="160" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">De drie-hoek-formule</text>

<polygon points="160,40 230,140 90,140" fill="none" stroke="${COLORS.curve2}" stroke-width="2"/>
<line x1="125" y1="90" x2="195" y2="90" stroke="${COLORS.curve2}" stroke-width="1.5"/>
<line x1="160" y1="90" x2="160" y2="140" stroke="${COLORS.curve2}" stroke-width="1.5"/>

<text x="160" y="80" text-anchor="middle" fill="${COLORS.s}" font-size="22" font-family="Arial" font-weight="bold">s</text>
<text x="130" y="125" text-anchor="middle" fill="${COLORS.v}" font-size="20" font-family="Arial" font-weight="bold">v</text>
<text x="190" y="125" text-anchor="middle" fill="${COLORS.t}" font-size="20" font-family="Arial" font-weight="bold">t</text>

<text x="20" y="60" fill="${COLORS.s}" font-size="11" font-family="Arial">s = afstand</text>
<text x="20" y="75" fill="${COLORS.v}" font-size="11" font-family="Arial">v = snelheid</text>
<text x="20" y="90" fill="${COLORS.t}" font-size="11" font-family="Arial">t = tijd</text>

<text x="280" y="60" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">s = v × t</text>
<text x="280" y="75" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">v = s ÷ t</text>
<text x="280" y="90" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">t = s ÷ v</text>

<text x="160" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Bedek het gezochte → zie de formule</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is snelheid?
  {
    title: "Wat is snelheid?",
    explanation:
      "**Snelheid** vertelt **hoe snel** iets beweegt. Het meet **afstand per tijd**.\n\n**Formule** *(uit het hoofd!)*:\n**v = s ÷ t**\n• **v** = snelheid *(velocity)*.\n• **s** = afstand *(spatium / strecke)*.\n• **t** = tijd.\n\n**Voorbeeld**:\nEen auto rijdt 100 km in 2 uur.\n• v = s ÷ t = 100 km ÷ 2 uur = **50 km/u**.\n\n**3 vormen van de formule**:\n• **v = s ÷ t** — snelheid vinden.\n• **s = v × t** — afstand vinden.\n• **t = s ÷ v** — tijd vinden.\n\n**Trucje** *(de drie-hoek)*:\nDek met je vinger het gezochte af → zie de formule.\n• Snelheid weg → s/t.\n• Afstand weg → v × t.\n• Tijd weg → s/v.\n\n**Voorbeelden uit het echt**:\n• **Wandelen**: ~5 km/u.\n• **Fietsen**: ~15-25 km/u.\n• **Bromfiets**: 45 km/u (NL).\n• **Auto in stad**: 50 km/u.\n• **Snelweg**: 100-130 km/u (NL).\n• **Trein**: 120-160 km/u.\n• **HSL/TGV**: 300 km/u.\n• **Vliegtuig**: ~900 km/u.\n• **Geluid**: 1.235 km/u (in lucht).\n• **Licht**: 1.080.000.000 km/u (= 300.000 km/s).\n\n**Cito-vragen**:\n*'Een auto rijdt 80 km in 1 uur. Snelheid?'* → 80 km/u.\n*'Een fietser rijdt 30 min met 20 km/u. Afstand?'* → 20 × 0,5 = 10 km.\n*'Een trein rijdt 200 km met 100 km/u. Tijd?'* → 200 ÷ 100 = 2 uur.\n\n**Belangrijke termen**:\n• **v** *(velocity)* — Engelse afkorting.\n• **m/s** of **km/u** — eenheden.\n• **Gemiddelde snelheid** = totale afstand ÷ totale tijd *(ook al stop je tussendoor)*.",
    svg: formuleSvg(),
    checks: [
      {
        q: "Wat is de **formule** voor snelheid?",
        options: ["v = s ÷ t", "v = s × t", "v = s + t", "v = s - t"],
        answer: 0,
        wrongHints: [null, "Vermenigvuldigen geeft geen snelheid.", "Optellen geeft geen snelheid.", "Aftrekken geeft geen snelheid."],
      },
      {
        q: "Auto rijdt **100 km in 2 uur**. Snelheid?",
        options: ["50 km/u", "200 km/u", "100 km/u", "2 km/u"],
        answer: 0,
        wrongHints: [null, "Vermenigvuldigen.", "Niet 100 — controleer.", "Te langzaam."],
      },
      {
        q: "**s = v × t** — voor wat?",
        options: ["Afstand uitrekenen", "Snelheid", "Tijd", "Gewicht"],
        answer: 0,
        wrongHints: [null, "Andere formule.", "Andere formule.", "Geen formule."],
      },
      {
        q: "Fietser rijdt **30 min** met **20 km/u**. **Afstand**?",
        options: ["10 km", "20 km", "600 km", "5 km"],
        answer: 0,
        wrongHints: [null, "Vergeet de halve uur.", "Veel te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Tijd in uren", tekst: "30 min = 0,5 uur. Bij snelheid in km/u moet tijd ook in uren." },
            { titel: "s = v × t", tekst: "s = 20 km/u × 0,5 uur = 10 km." },
          ],
          woorden: [{ woord: "km/u", uitleg: "Kilometer per uur — eenheid van snelheid." }],
          theorie: "Bij km/u-snelheden moet je tijd ook in uren omzetten (30 min = 0,5 uur).",
          voorbeelden: [{ type: "stap", tekst: "20 km/u betekent: 20 km in 1 uur. In een half uur: 10 km." }],
          basiskennis: [{ onderwerp: "30 min = 0,5 uur", uitleg: "Half uur = 0,5 uur. Kwartier = 0,25 uur." }],
          niveaus: {
            basis: "20 × 0,5 = 10 km. A.",
            simpeler: "Snelheid 20 km/u = 20 km in 1 uur. In een half uur (= 30 min) fietst hij de helft: 10 km. = A.",
            nogSimpeler: "10 km = A.",
          },
        },
      },
    ],
  },

  // STAP 2: Eenheden
  {
    title: "Eenheden — m/s vs km/u omrekenen",
    explanation:
      "Snelheid kun je in **2 belangrijke eenheden** uitdrukken:\n\n**1. m/s** *(meter per seconde)* — voor wetenschap + korte afstanden.\n**2. km/u** *(kilometer per uur)* — voor dagelijks leven + verkeer.\n\n**Omrekenen — formule**:\n\n**Van m/s naar km/u**: × 3,6.\n**Van km/u naar m/s**: ÷ 3,6.\n\n**Waarom 3,6?**\n• 1 km = 1000 m.\n• 1 uur = 3600 sec.\n• Dus 1 m/s = 1000/3600 m per uur = ... laat me rekenen: 3600 sec → 3600 m → 3,6 km. Dus 1 m/s = 3,6 km/u.\n\n**Voorbeelden**:\n• 10 m/s = 10 × 3,6 = **36 km/u**.\n• 20 m/s = 20 × 3,6 = **72 km/u** (een snelle fietser).\n• 30 m/s = 30 × 3,6 = **108 km/u** (auto op snelweg).\n• 100 km/u = 100 ÷ 3,6 ≈ **27,8 m/s**.\n• 50 km/u = 50 ÷ 3,6 ≈ **13,9 m/s**.\n\n**Snelheids-niveaus** *(om gevoel te krijgen)*:\n• 1 m/s = 3,6 km/u → wandelen rustig.\n• 5 m/s = 18 km/u → fietsen normaal.\n• 10 m/s = 36 km/u → rennen heel snel.\n• 30 m/s = 108 km/u → auto snelweg.\n• 100 m/s = 360 km/u → super snel.\n• 343 m/s = ~1.235 km/u → geluidssnelheid.\n• 300.000 km/s = 1.080.000.000 km/u → lichtsnelheid.\n\n**Andere eenheden** *(zelden in NL)*:\n• **mph** *(miles per hour)* — Engeland, VS. 1 mile ≈ 1,6 km.\n• **knopen** — scheepvaart, vliegen. 1 knoop ≈ 1,85 km/u.\n\n**Cito-vragen**:\n*'10 m/s = ... km/u?'* → 36 km/u.\n*'50 km/u = ... m/s?'* → 50 ÷ 3,6 ≈ 14 m/s.\n*'Auto rijdt 90 km/u. Hoeveel m/s?'* → 90 ÷ 3,6 = 25 m/s.\n\n**Tip — schatten**:\n• Zie je m/s? × 3,6 ≈ × 4 (snel even gokken).\n• Zie je km/u? ÷ 3,6 ≈ ÷ 4 (snel gokken voor m/s).\n\nVoorbeeld: 25 m/s ≈ 25 × 4 = 100 km/u *(precies: 90, dichtbij)*. Voor Cito-vragen meestal precies × 3,6 doen.",
    checks: [
      {
        q: "Hoe **reken je m/s om naar km/u**?",
        options: ["× 3,6", "÷ 3,6", "× 60", "÷ 60"],
        answer: 0,
        wrongHints: [null, "Andersom.", "Wel verband maar specifiek 3,6.", "Andersom."],
      },
      {
        q: "**20 m/s** = ... km/u?",
        options: ["72", "20", "36", "180"],
        answer: 0,
        wrongHints: [null, "Geen omrekening.", "Helft.", "Verkeerd."],
      },
      {
        q: "**100 km/u** ≈ ... m/s?",
        options: ["~28", "~10", "~360", "~1000"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Vermenigvuldigd.", "Veel te veel."],
      },
      {
        q: "Bij **wetenschap** gebruik je meestal welke eenheid?",
        options: ["m/s", "km/u", "mph", "knopen"],
        answer: 0,
        wrongHints: [null, "Voor verkeer.", "Engels-systeem.", "Voor scheepvaart."],
      },
    ],
  },

  // STAP 3: Versnelling
  {
    title: "Versnelling + remmen",
    explanation:
      "Een voorwerp dat **steeds sneller** gaat **versnelt**. Een voorwerp dat **steeds langzamer** gaat **vertraagt** (= negatieve versnelling = remmen).\n\n**Versnelling = verandering snelheid ÷ tijd**\n• Symbool: **a** *(acceleration)*.\n• Eenheid: **m/s²** *(meter per seconde kwadraat)*.\n\nFormule: **a = (v_eind − v_begin) ÷ t**.\n\n**Voorbeeld 1 — auto trekt op**:\nAuto van 0 → 27 m/s (100 km/u) in 10 sec.\n• a = (27 − 0) ÷ 10 = **2,7 m/s²**.\n\n**Voorbeeld 2 — auto remt**:\nAuto van 30 m/s → 0 in 5 sec.\n• a = (0 − 30) ÷ 5 = **−6 m/s²** *(min = remmen)*.\n\n**Begrijp m/s²**:\n• 1 m/s² betekent: elke seconde **1 m/s erbij**.\n• 5 m/s² → na 1 sec ben je 5 m/s, na 2 sec 10 m/s, etc.\n\n**Zwaartekracht**:\n• Op aarde: **g = 9,8 m/s²** (vaak afgerond op 10).\n• Vallend voorwerp versnelt met deze waarde.\n• Bv. na 1 sec vallen ben je 10 m/s, na 2 sec 20 m/s.\n• **Maan**: g = 1,6 m/s² *(6× minder, daarom kun je daar 'springen')*.\n\n**Stop-afstand bij autorijden**:\n• **Reactietijd** *(de 1 sec dat je nog niets doet — bewustwording)*.\n• **Remweg** *(afstand dat auto nog rijdt na remmen)*.\n• Totaal **stop-afstand** = reactietijd-afstand + remweg.\n\n**Voorbeeld stopafstand** *(50 km/u, 1 sec reactie)*:\n• Reactie-afstand: 14 m/s × 1 s = **14 m**.\n• Remweg op droog asfalt: ~14 m.\n• **Totaal**: ~28 m.\n\n**Bij hogere snelheid** wordt remweg **kwadratisch groter**:\n• 50 km/u → ~14 m remweg.\n• 100 km/u → ~55 m remweg *(4× zoveel, niet 2×)*.\n• 130 km/u → ~95 m remweg.\n\nDaarom: harder rijden = veel langer remweg → meer kans op ongeluk.\n\n**Cito-feitje**:\nBij **drukke straat 50 km/u** is reactietijd van 1 sec al heel weinig. Een afgeleide bestuurder *(telefoon, etc.)* heeft 2-3 sec reactietijd → veel langer remweg → grotere kans op ongeval.\n\n**Cito-vragen**:\n*'Wat is versnelling?'* → verandering van snelheid per tijd.\n*'Eenheid?'* → m/s².\n*'Zwaartekracht-versnelling op aarde?'* → 9,8 m/s² (~10).",
    checks: [
      {
        q: "Wat is **versnelling**?",
        options: ["Verandering snelheid per tijd", "Hoge snelheid", "Hoeveelheid afstand", "Constant snel"],
        answer: 0,
        wrongHints: [null, "Dat is snelheid zelf.", "Geen verandering.", "Geen verandering."],
      },
      {
        q: "Auto: 0 → 30 m/s in **10 sec**. Versnelling?",
        options: ["3 m/s²", "30 m/s²", "10 m/s²", "0,3 m/s²"],
        answer: 0,
        wrongHints: [null, "Vermenigvuldigen.", "Tijd, niet versnelling.", "Komma verkeerd."],
      },
      {
        q: "**Zwaartekracht** op aarde ongeveer?",
        options: ["~10 m/s²", "~1 m/s²", "~100 m/s²", "0 m/s²"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Wel zwaartekracht."],
      },
      {
        q: "Welke factor maakt **remweg** veel langer?",
        options: ["Snelheid (kwadratisch effect)", "Kleur auto", "Weersomstandigheden alleen", "Bestuurders gewicht"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Speelt mee maar niet kwadratisch.", "Niet hoofdfactor."],
      },
    ],
  },

  // STAP 4: Grafiek
  {
    title: "Afstand-tijd-grafiek lezen",
    explanation:
      "Een **afstand-tijd-grafiek** *(s,t-grafiek)* toont hoe ver iets gereisd is na elke tijd.\n\n**Assen**:\n• **x-as**: tijd (in seconden of uren).\n• **y-as**: afstand (in m of km).\n\n**Wat zegt de lijn?**\n\n**1. Rechte lijn omhoog** = constante snelheid.\n• Steilere helling = hogere snelheid.\n• Voorbeeld: lijn van (0,0) naar (10,100) → 100 m in 10 sec = 10 m/s.\n\n**2. Vlakke lijn (horizontaal)** = stilstaan.\n• Tijd gaat door, afstand niet.\n• Voorbeeld: pauze tijdens een rit.\n\n**3. Steiler wordende lijn (curve)** = versnellen.\n• Bv. auto trekt op.\n\n**4. Steeds minder steil** = vertragen / remmen.\n\n**5. Daling** = terug-bewegen (negatief).\n• Soms heten ze 'verplaatsing-tijd' i.p.v. 'afstand-tijd'.\n\n**Snelheid uit grafiek**:\n**Snelheid = helling van de lijn** *(stijging ÷ afstand op x-as)*.\n\nVoorbeeld: lijn van (0,0) naar (5,50) → helling = 50/5 = 10 m/s.\n\n**Snelheid-tijd-grafiek** *(v,t-grafiek)*:\n• **x-as**: tijd.\n• **y-as**: snelheid.\n• Vlakke lijn op v=20 m/s → constant 20 m/s.\n• Stijgende lijn → versnellen.\n• Dalende lijn → vertragen.\n• **Oppervlakte onder lijn** = totale afstand.\n\n**Cito-vraag voorbeelden**:\n*'Wat is de snelheid van object X tussen 0 en 5 sec?'*\n→ Lees grafiek af. Bereken helling.\n\n*'Wanneer staat het object stil?'*\n→ Zoek waar lijn horizontaal is.\n\n*'Wanneer beweegt het sneller?'*\n→ Zoek waar lijn steiler is.\n\n**Praktijk-voorbeeld**:\nVerhaal: 'Anna fietst 5 km in 20 min. Dan pauze 10 min. Dan 3 km verder in 15 min.'\nGrafiek:\n• 0-20 min: stijgt van 0 naar 5 km *(snelheid 5 km / 20 min = 15 km/u)*.\n• 20-30 min: vlak op 5 km (pauze).\n• 30-45 min: stijgt van 5 naar 8 km *(3 km / 15 min = 12 km/u)*.\n\nTotaal: **8 km in 45 min** = ~10,7 km/u gemiddeld.",
    checks: [
      {
        q: "Wat betekent een **vlakke lijn** in een afstand-tijd-grafiek?",
        options: ["Stilstaan", "Versnellen", "Heel snel", "Achteruit"],
        answer: 0,
        wrongHints: [null, "Dat is curve.", "Dat is steile lijn.", "Dat is dalend."],
      },
      {
        q: "Wat geeft een **steile rechte lijn** aan?",
        options: ["Hoge constante snelheid", "Stilstaan", "Versnellen", "Pauze"],
        answer: 0,
        wrongHints: [null, "Vlakke lijn.", "Curve, niet recht.", "Vlakke lijn."],
      },
      {
        q: "Hoe bereken je **snelheid** uit een afstand-tijd-grafiek?",
        options: ["Helling van de lijn (Δy ÷ Δx)", "Lengte van lijn", "Y-waarde", "X-waarde"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Dat is afstand.", "Dat is tijd."],
      },
      {
        q: "In een **snelheid-tijd-grafiek**: oppervlakte onder lijn = ?",
        options: ["Totale afstand", "Snelheid", "Versnelling", "Tijd"],
        answer: 0,
        wrongHints: [null, "Dat is y-waarde.", "Dat is helling.", "Dat is x-as."],
      },
    ],
  },

  // STAP 5: Praktijk
  {
    title: "Praktijk — auto, atletiek, ruimte",
    explanation:
      "**Snelheids-feitjes voor alledag**:\n\n**1. Auto + verkeer**:\n• Stad: **50 km/u** (NL max).\n• Buiten bebouwde kom: **80 km/u**.\n• Provinciale weg: **80-100 km/u**.\n• Snelweg dag: **100 km/u** *(sinds 2020)*. Nacht: **130 km/u** *(0-6 uur)*.\n• Boete bij overschrijden — gemiddeld €30 per km/u te veel.\n• **Tunnel-snelheid** controle met camera's.\n\n**2. Wereldrecords atletiek**:\n• **100 m sprint** (man): Usain Bolt 9,58 sec → ~37 km/u.\n• **100 m sprint** (vrouw): Florence Griffith-Joyner 10,49 sec → ~34 km/u.\n• **Marathon**: ~21 km/u gemiddeld.\n• **Wielrennen tour**: 40 km/u gemiddeld in vlakke etappe.\n\n**3. Dieren**:\n• Cheetah: ~120 km/u (kort).\n• Paard: ~70 km/u.\n• Hond (greyhound): ~70 km/u.\n• Mens topsnelheid: ~37 km/u.\n• Slak: ~0,05 km/u.\n\n**4. Geluid**:\n• In **lucht** *(20°C)*: 343 m/s = 1.235 km/u.\n• In **water**: ~1.500 m/s.\n• In **staal**: ~5.000 m/s.\n• **Mach 1** = snelheid van geluid. Concorde vloog Mach 2 (twee keer geluid).\n• **Knal**: vliegtuig sneller dan geluid → 'sonic boom'.\n\n**5. Licht**:\n• 300.000 km/s = 1.080.000.000 km/u.\n• Niets gaat sneller in heelal.\n• Aarde-Maan in 1,3 sec.\n• Aarde-Zon in 8,3 min.\n• Aarde-Mars in 3-22 min *(afh. baan)*.\n\n**6. Ruimte**:\n• Aarde draait om as: 1.670 km/u (op evenaar).\n• Aarde om zon: 107.000 km/u.\n• ISS (Internationaal ruimtestation): 28.000 km/u → 90 min per omloop.\n• Voyager 1 (verste sonde): 17 km/s = 61.000 km/u.\n\n**7. Vliegtuig**:\n• Commercieel (Boeing 737): ~900 km/u.\n• Concorde (gestopt): 2.180 km/u.\n• Straaljager F-16: ~2.400 km/u.\n• SR-71 Blackbird (record): 3.530 km/u.\n\n**Cito-voorbeeld**:\n*'Een trein rijdt 240 km in 2 uur. Snelheid?'*\n→ 240 ÷ 2 = 120 km/u.\n\n*'Auto: 100 km/u. Hoeveel m/s?'*\n→ 100 ÷ 3,6 ≈ 28 m/s.\n\n*'In hoeveel min legt licht 1 lichtminuut af?'*\n→ 1 minuut *(definitie!)* — licht legt 1 lichtminuut per minuut af.\n\n**Cito-feitje**:\nDe **G-kracht** van super-versnelling is meetbaar:\n• Normaal staan = 1 G.\n• Achtbaan-piek = 4-5 G.\n• Straaljager-piloot = tot 9 G.\n• Apollo-launch = 4 G.\n• Daarboven = bewustzijn verliezen.",
    checks: [
      {
        q: "**100 km/u** op snelweg in NL — wanneer?",
        options: ["Overdag", "Alleen 's nachts", "Nooit", "Altijd"],
        answer: 0,
        wrongHints: [null, "Nachts mag 130.", "Wel toegestaan.", "Niet altijd — nachts 130."],
      },
      {
        q: "Snelheid **geluid in lucht**?",
        options: ["~343 m/s", "~100 m/s", "~1.000 m/s", "~10.000 m/s"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Veel te veel."],
      },
      {
        q: "**Lichtsnelheid**?",
        options: ["300.000 km/s", "300 km/s", "30.000 km/s", "Oneindig"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Niet oneindig."],
      },
      {
        q: "ISS *(ruimtestation)* draait in **~90 min** rond aarde — snelheid?",
        options: ["~28.000 km/u", "~1.000 km/u", "~100.000 km/u", "~280 km/u"],
        answer: 0,
        wrongHints: [null, "Te langzaam.", "Te snel.", "Veel te langzaam."],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — bewegingen mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: snelheid, eenheden, versnelling, grafiek.\n\nVeel succes!",
    checks: [
      {
        q: "**v = ?** in basis-formule.",
        options: ["s ÷ t", "s × t", "s + t", "s - t"],
        answer: 0,
        wrongHints: [null, "Geeft afstand.", "Geen formule.", "Geen formule."],
      },
      {
        q: "**60 km in 30 min**. Snelheid?",
        options: ["120 km/u", "30 km/u", "60 km/u", "2 km/u"],
        answer: 0,
        wrongHints: [null, "Helft.", "Niet verhouding.", "Te weinig."],
      },
      {
        q: "**5 m/s** in km/u?",
        options: ["18 km/u", "5 km/u", "50 km/u", "1,4 km/u"],
        answer: 0,
        wrongHints: [null, "Geen omrekening.", "Te veel.", "Andersom."],
      },
      {
        q: "**Versnelling-eenheid**?",
        options: ["m/s²", "km/u", "m", "sec"],
        answer: 0,
        wrongHints: [null, "Snelheid.", "Afstand.", "Tijd."],
      },
      {
        q: "**Vlakke lijn** afstand-tijd-grafiek = ?",
        options: ["Stilstaan", "Hoge snelheid", "Versnellen", "Terug bewegen"],
        answer: 0,
        wrongHints: [null, "Steile lijn.", "Curve.", "Dalende lijn."],
      },
      {
        q: "**Zwaartekracht** versnelling aarde?",
        options: ["~10 m/s²", "~5 m/s²", "~100 m/s²", "0 m/s²"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Wel zwaartekracht."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const bewegingenSnelheidNatuurkunde = {
  id: "bewegingen-snelheid-natuurkunde",
  title: "Bewegingen + snelheid (klas 1-2)",
  emoji: "🏃",
  level: "klas1-2",
  subject: "natuurkunde",
  referentieNiveau: "2F",
  sloThema: "Natuurkunde — bewegingen + snelheid",
  prerequisites: [
    { id: "krachten-natuurkunde", title: "Krachten en bewegingen", niveau: "2F" },
  ],
  intro:
    "Bewegingen + snelheid voor klas 1-2 natuurkunde — formule v=s/t, eenheden m/s vs km/u (× 3,6), versnelling (m/s², zwaartekracht 9,8), afstand-tijd-grafiek lezen, praktijksnelheden (verkeer, atletiek, geluid 343 m/s, licht 300.000 km/s, ISS). ~15 min.",
  triggerKeywords: [
    "snelheid", "beweging", "afstand", "tijd",
    "v = s / t", "m/s", "km/u",
    "versnelling", "zwaartekracht", "g-kracht",
    "lichtsnelheid", "geluidssnelheid",
    "grafiek snelheid", "remweg",
  ],
  chapters,
  steps,
};

export default bewegingenSnelheidNatuurkunde;
