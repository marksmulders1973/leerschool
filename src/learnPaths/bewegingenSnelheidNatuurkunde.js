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
      "**Snelheid** vertelt **hoe snel** iets beweegt. Het meet **afstand per tijd**.\n\n**Formule** *(uit het hoofd!)*:\n**v = s ÷ t**\n• **v** = snelheid *(velocity)*.\n• **s** = afstand *(spatium / strecke)*.\n• **t** = tijd.\n\n**Voorbeeld**:\nEen auto rijdt 100 km in 2 uur.\n• v = s ÷ t = 100 km ÷ 2 uur = **50 km/u**.\n\n**3 vormen van de formule**:\n• **v = s ÷ t** — snelheid vinden.\n• **s = v × t** — afstand vinden.\n• **t = s ÷ v** — tijd vinden.\n\n**Trucje** *(de drie-hoek)*:\nDek met je vinger het gezochte af → zie de formule.\n• Snelheid weg → s/t.\n• Afstand weg → v × t.\n• Tijd weg → s/v.\n\n**Voorbeelden uit het echte leven**:\n• **Wandelen**: ~5 km/u.\n• **Fietsen**: ~15-25 km/u.\n• **Bromfiets**: 45 km/u (NL).\n• **Auto in stad**: 50 km/u.\n• **Snelweg**: 100-130 km/u (NL).\n• **Trein**: 120-160 km/u.\n• **HSL/TGV**: 300 km/u.\n• **Vliegtuig**: ~900 km/u.\n• **Geluid**: 1.235 km/u (in lucht).\n• **Licht**: 1.080.000.000 km/u (= 300.000 km/s).\n\n**toetsvragen**:\n*'Een auto rijdt 80 km in 1 uur. Snelheid?'* → 80 km/u.\n*'Een fietser rijdt 30 min met 20 km/u. Afstand?'* → 20 × 0,5 = 10 km.\n*'Een trein rijdt 200 km met 100 km/u. Tijd?'* → 200 ÷ 100 = 2 uur.\n\n**Belangrijke termen**:\n• **v** *(velocity)* — Engelse afkorting.\n• **m/s** of **km/u** — eenheden.\n• **Gemiddelde snelheid** = totale afstand ÷ totale tijd *(ook al stop je tussendoor)*.",
    svg: formuleSvg(),
    checks: [
      {
        q: "Wat is de **formule** voor snelheid?",
        options: ["v = s ÷ t", "v = s × t", "v = s + t", "v = s - t"],
        answer: 0,
        wrongHints: [null, "Reken na: 100 km in 2 uur. Komt er met s × t een logische snelheid uit, en welke eenheid krijg je dan?", "Kun je kilometers en uren bij elkaar optellen? Welke eenheid zou de uitkomst dan hebben?", "Kun je uren van kilometers aftrekken? Welke eenheid zou de uitkomst dan hebben?"],
      },
      {
        q: "Auto rijdt **100 km in 2 uur**. Snelheid?",
        options: ["50 km/u", "200 km/u", "100 km/u", "2 km/u"],
        answer: 0,
        wrongHints: [null, "Je vermenigvuldigde 100 met 2. Rijdt een auto die 2 uur over 100 km doet echt 200 km/u?", "100 km is de hele afstand. Hoeveel km legt de auto in één uur af?", "2 km/u is langzamer dan wandelen. Deelde je het goede getal door het andere?"],
      },
      {
        q: "**s = v × t** — voor wat?",
        options: ["Afstand uitrekenen", "Snelheid uitrekenen", "Tijd uitrekenen", "Gewicht uitrekenen"],
        answer: 0,
        wrongHints: [null, "Welke grootheid staat in de formule alleen aan de linkerkant van het =-teken?", "Welke grootheid staat in de formule alleen aan de linkerkant van het =-teken?", "Komt massa of gewicht ergens in deze formule voor?"],
      },
      {
        q: "Fietser rijdt **30 min** met **20 km/u**. **Afstand**?",
        options: ["10 km", "20 km", "600 km", "5 km"],
        answer: 0,
        wrongHints: [null, "Vergeet het halve uur niet.", "Je rekende met 30 alsof het 30 uur was. Hoeveel uur is 30 minuten?", "Hoeveel km rijdt de fietser in een heel uur? En in een half uur dan?"],
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
            basis: "20 × 0,5 = 10 km.",
            simpeler: "Snelheid 20 km/u = 20 km in 1 uur. In een half uur (= 30 min) fietst hij de helft: 10 km.",
            nogSimpeler: "10 km",
          },
        },
      },
      {
        q: "Auto rijdt **60 km in 1 uur** — wat is de **gemiddelde snelheid**?",
        options: ["60 km/u", "30 km/u", "120 km/u", "1 km/u"],
        answer: 0,
        wrongHints: [null, "Bij 30 km/u haal je in een uur maar 30 km. Hoeveel km reed deze auto in dat uur?", "Bij 120 km/u rijd je in één uur 120 km. Hoeveel km reed deze auto in dat uur?", "1 is de tijd in uren, niet de snelheid. Welke afstand legt de auto in dat uur af?"],
      },
      {
        q: "Hoeveel **m/s** is **36 km/u**?",
        options: ["10 m/s", "36 m/s", "100 m/s", "1 m/s"],
        answer: 0,
        wrongHints: [null, "36 is het getal in km/u. Moet het getal in m/s groter of kleiner worden?", "100 m/s is 360 km/u, sneller dan een raceauto. Is 36 km/u zo hard?", "1 m/s is ongeveer wandeltempo (3,6 km/u). Is 36 km/u zo langzaam?"],
      },
    ],
  },

  // STAP 2: Eenheden
  {
    title: "Eenheden — m/s vs km/u omrekenen",
    explanation:
      "Snelheid kun je in **2 belangrijke eenheden** uitdrukken:\n\n**1. m/s** *(meter per seconde)* — voor wetenschap + korte afstanden.\n**2. km/u** *(kilometer per uur)* — voor dagelijks leven + verkeer.\n\n**Omrekenen — formule**:\n\n**Van m/s naar km/u**: × 3,6.\n**Van km/u naar m/s**: ÷ 3,6.\n\n**Waarom 3,6?**\n• 1 km = 1000 m.\n• 1 uur = 3600 sec.\n• Met 1 m/s leg je in 1 uur (3600 sec) dus 3600 m = 3,6 km af. Dus 1 m/s = 3,6 km/u.\n\n**Voorbeelden**:\n• 10 m/s = 10 × 3,6 = **36 km/u**.\n• 20 m/s = 20 × 3,6 = **72 km/u** (auto buiten de bebouwde kom).\n• 30 m/s = 30 × 3,6 = **108 km/u** (auto op snelweg).\n• 100 km/u = 100 ÷ 3,6 ≈ **27,8 m/s**.\n• 50 km/u = 50 ÷ 3,6 ≈ **13,9 m/s**.\n\n**Snelheids-niveaus** *(om gevoel te krijgen)*:\n• 1 m/s = 3,6 km/u → wandelen rustig.\n• 5 m/s = 18 km/u → fietsen normaal.\n• 10 m/s = 36 km/u → rennen heel snel.\n• 30 m/s = 108 km/u → auto snelweg.\n• 100 m/s = 360 km/u → super snel.\n• 343 m/s = ~1.235 km/u → geluidssnelheid.\n• 300.000 km/s = 1.080.000.000 km/u → lichtsnelheid.\n\n**Andere eenheden** *(zelden in NL)*:\n• **mph** *(miles per hour)* — Engeland, VS. 1 mile ≈ 1,6 km.\n• **knopen** — scheepvaart, vliegen. 1 knoop ≈ 1,85 km/u.\n\n**toetsvragen**:\n*'10 m/s = ... km/u?'* → 36 km/u.\n*'50 km/u = ... m/s?'* → 50 ÷ 3,6 ≈ 14 m/s.\n*'Auto rijdt 90 km/u. Hoeveel m/s?'* → 90 ÷ 3,6 = 25 m/s.\n\n**Tip — schatten**:\n• Zie je m/s? × 3,6 ≈ × 4 (snel even gokken).\n• Zie je km/u? ÷ 3,6 ≈ ÷ 4 (snel gokken voor m/s).\n\nVoorbeeld: 25 m/s ≈ 25 × 4 = 100 km/u *(precies: 90, dichtbij)*. Voor toetsvragen meestal precies × 3,6 doen.",
    checks: [
      {
        q: "Hoe **reken je m/s om naar km/u**?",
        options: ["× 3,6", "÷ 3,6", "× 60", "÷ 60"],
        answer: 0,
        wrongHints: [null, "Wordt het getal in km/u groter of kleiner dan in m/s? Hoeveel meter leg je in een uur af bij 1 m/s?", "Niet — denk aan 1000 m in een km en 3600 s in een uur.", "Niet — 60 hoort bij minuten; hier gaat het om meters én uren samen."],
      },
      {
        q: "**20 m/s** = ... km/u?",
        options: ["72", "20", "36", "5,6"],
        answer: 0,
        wrongHints: [null, "20 is het getal in m/s. Wat moet je doen om het in km/u te krijgen?", "Niet — met welke factor reken je m/s om naar km/u?", "Je deelde door 3,6. Wordt het getal in km/u groter of kleiner dan in m/s?"],
      },
      {
        q: "**100 km/u** ≈ ... m/s?",
        options: ["~28", "~10", "~360", "~1000"],
        answer: 0,
        wrongHints: [null, "10 m/s is 36 km/u. Rijdt een auto die 100 km/u gaat zo langzaam?", "Kan een auto die 100 km/u rijdt elke seconde 360 meter afleggen? Moet het getal groter of kleiner worden?", "1000 m/s is bijna drie keer zo snel als het geluid. Rijdt een auto zo hard?"],
      },
      {
        q: "Bij **wetenschap** gebruik je meestal welke eenheid?",
        options: ["m/s", "km/u", "mph", "knopen"],
        answer: 0,
        wrongHints: [null, "km/u zie je op verkeersborden. Rekenen natuurkundigen met kilometers en uren, of met de basiseenheden meter en seconde?", "Mijlen per uur gebruik je in Engeland en de Verenigde Staten. Is dat een eenheid uit het internationale stelsel?", "Knopen gebruik je op zee en in de luchtvaart. Is dat de eenheid uit de natuurkundeformules?"],
      },
      {
        q: "Hoe **verander je km/u naar m/s**?",
        options: ["Deel door 3,6", "Vermenigvuldig met 3,6", "Deel door 60", "Vermenigvuldig met 1000"],
        answer: 0,
        wrongHints: [null, "Is 1 meter per seconde meer of minder dan 1 km per uur? Moet het getal dus groter of kleiner worden?", "Met 60 reken je minuten om naar uren. Hoeveel seconden zitten er in een uur, en hoeveel meter in een km?", "Je rekent zo kilometers om naar meters, maar wat gebeurt er met de uren?"],
      },
      {
        q: "Hoe **verander je m/s naar km/u**?",
        options: ["Vermenigvuldig met 3,6", "Deel door 3,6", "Vermenigvuldig met 60", "Deel door 1000"],
        answer: 0,
        wrongHints: [null, "Is 1 meter per seconde meer of minder dan 1 km per uur? Moet het getal dus groter of kleiner worden?", "Met 60 reken je seconden om naar minuten. Hoeveel seconden zitten er in een uur, en hoeveel meter in een km?", "Je rekent zo meters om naar kilometers, maar wat gebeurt er met de seconden?"],
      },
    ],
  },

  // STAP 3: Versnelling
  {
    title: "Versnelling + remmen",
    explanation:
      "Een voorwerp dat **steeds sneller** gaat **versnelt**. Een voorwerp dat **steeds langzamer** gaat **vertraagt** (= negatieve versnelling = remmen).\n\n**Versnelling = verandering snelheid ÷ tijd**\n• Symbool: **a** *(acceleration)*.\n• Eenheid: **m/s²** *(meter per seconde kwadraat)*.\n\nFormule: **a = (v_eind − v_begin) ÷ t**.\n\n**Voorbeeld 1 — auto trekt op**:\nAuto van 0 → 27 m/s (100 km/u) in 10 sec.\n• a = (27 − 0) ÷ 10 = **2,7 m/s²**.\n\n**Voorbeeld 2 — auto remt**:\nAuto van 30 m/s → 0 in 5 sec.\n• a = (0 − 30) ÷ 5 = **−6 m/s²** *(min = remmen)*.\n\n**Begrijp m/s²**:\n• 1 m/s² betekent: elke seconde **1 m/s erbij**.\n• 5 m/s² → na 1 sec ben je 5 m/s, na 2 sec 10 m/s, etc.\n\n**Zwaartekracht**:\n• Op aarde: **g = 9,8 m/s²** (vaak afgerond op 10).\n• Vallend voorwerp versnelt met deze waarde.\n• Bv. na 1 sec vallen ben je 10 m/s, na 2 sec 20 m/s.\n• **Maan**: g = 1,6 m/s² *(6× minder, daarom kun je daar 'springen')*.\n\n**Stop-afstand bij autorijden**:\n• **Reactietijd** *(de 1 sec dat je nog niets doet — bewustwording)*.\n• **Remweg** *(afstand die de auto nog aflegt terwijl je remt)*.\n• Totaal **stop-afstand** = reactietijd-afstand + remweg.\n\n**Voorbeeld stopafstand** *(50 km/u, 1 sec reactie)*:\n• Reactie-afstand: 14 m/s × 1 s = **14 m**.\n• Remweg op droog asfalt: ~14 m.\n• **Totaal**: ~28 m.\n\n**Bij hogere snelheid** wordt remweg **kwadratisch groter**:\n• 50 km/u → ~14 m remweg.\n• 100 km/u → ~55 m remweg *(4× zoveel, niet 2×)*.\n• 130 km/u → ~95 m remweg.\n\nDaarom: harder rijden = veel langer remweg → meer kans op ongeluk.\n\n**Toets-feitje**:\nBij **drukke straat 50 km/u** is reactietijd van 1 sec al heel weinig. Een afgeleide bestuurder *(telefoon, etc.)* heeft 2-3 sec reactietijd → veel langer remweg → grotere kans op ongeval.\n\n**toetsvragen**:\n*'Wat is versnelling?'* → verandering van snelheid per tijd.\n*'Eenheid?'* → m/s².\n*'Zwaartekracht-versnelling op aarde?'* → 9,8 m/s² (~10).",
    checks: [
      {
        q: "Wat is **versnelling**?",
        options: ["Verandering snelheid per tijd", "Hoge snelheid op één moment", "Afgelegde afstand per tijd", "Steeds even snel blijven gaan"],
        answer: 0,
        wrongHints: [null, "Dat is snelheid zelf.", "Afstand per tijd is de snelheid, niet de versnelling.", "Verandert je snelheid dan? Gaat versnelling over iets dat gelijk blijft of iets dat verandert?"],
      },
      {
        q: "Auto: 0 → 30 m/s in **10 sec**. Versnelling?",
        options: ["3 m/s²", "30 m/s²", "10 m/s²", "0,3 m/s²"],
        answer: 0,
        wrongHints: [null, "30 m/s is de eindsnelheid. Hoeveel m/s komt er elke seconde bij?", "10 is het aantal seconden. Hoeveel m/s komt er per seconde bij?", "Reken 30 ÷ 10 nog eens na. Waar staat de komma?"],
      },
      {
        q: "**Zwaartekrachtversnelling** (valversnelling) op aarde ongeveer?",
        options: ["~10 m/s²", "~1 m/s²", "~100 m/s²", "0 m/s²"],
        answer: 0,
        wrongHints: [null, "Een steen die je 1 seconde laat vallen, gaat al ongeveer zo hard als een brommer. Past daar 1 m/s² bij?", "Zou een vallende steen na 1 seconde al 100 m/s (360 km/u) gaan?", "Bij 0 m/s² zou een losgelaten bal blijven hangen. Gebeurt dat op aarde?"],
      },
      {
        q: "Welke factor maakt **remweg** veel langer?",
        options: ["Snelheid van de auto", "Reactietijd van de bestuurder", "Afstand tot je voorligger", "Vermogen van de motor"],
        answer: 0,
        wrongHints: [null, "De reactietijd hoort bij de afstand vóórdat je gaat remmen. Wat bepaalt hoe lang het remmen zelf duurt?", "Je volgafstand bepaalt of je op tijd stilstaat, maar verandert die hoe lang het remmen zelf duurt?", "Een sterke motor helpt bij optrekken, niet bij remmen. Wat telt tijdens het remmen?"],
      },
    ],
  },

  // STAP 4: Grafiek
  {
    title: "Afstand-tijd-grafiek lezen",
    explanation:
      "Een **afstand-tijd-grafiek** *(s,t-grafiek)* toont hoe ver iets gereisd is na elke tijd.\n\n**Assen**:\n• **x-as**: tijd (in seconden of uren).\n• **y-as**: afstand (in m of km).\n\n**Wat zegt de lijn?**\n\n**1. Rechte lijn omhoog** = constante snelheid.\n• Steilere helling = hogere snelheid.\n• Voorbeeld: lijn van (0,0) naar (10,100) → 100 m in 10 sec = 10 m/s.\n\n**2. Vlakke lijn (horizontaal)** = stilstaan.\n• Tijd gaat door, afstand niet.\n• Voorbeeld: pauze tijdens een rit.\n\n**3. Steiler wordende lijn (curve)** = versnellen.\n• Bv. auto trekt op.\n\n**4. Steeds minder steil** = vertragen / remmen.\n\n**5. Daling** = terug-bewegen (negatief).\n• Soms heten ze 'verplaatsing-tijd' i.p.v. 'afstand-tijd'.\n\n**Snelheid uit grafiek**:\n**Snelheid = helling van de lijn** *(stijging op y-as ÷ verschil op x-as)*.\n\nVoorbeeld: lijn van (0,0) naar (5,50) → helling = 50/5 = 10 m/s.\n\n**Snelheid-tijd-grafiek** *(v,t-grafiek)*:\n• **x-as**: tijd.\n• **y-as**: snelheid.\n• Vlakke lijn op v=20 m/s → constant 20 m/s.\n• Stijgende lijn → versnellen.\n• Dalende lijn → vertragen.\n• **Oppervlakte onder lijn** = totale afstand.\n\n**toetsvraag voorbeelden**:\n*'Wat is de snelheid van object X tussen 0 en 5 sec?'*\n→ Lees grafiek af. Bereken helling.\n\n*'Wanneer staat het object stil?'*\n→ Zoek waar lijn horizontaal is.\n\n*'Wanneer beweegt het sneller?'*\n→ Zoek waar lijn steiler is.\n\n**Praktijk-voorbeeld**:\nVerhaal: 'Anna fietst 5 km in 20 min. Dan pauze 10 min. Dan 3 km verder in 15 min.'\nGrafiek:\n• 0-20 min: stijgt van 0 naar 5 km *(snelheid 5 km / 20 min = 15 km/u)*.\n• 20-30 min: vlak op 5 km (pauze).\n• 30-45 min: stijgt van 5 naar 8 km *(3 km / 15 min = 12 km/u)*.\n\nTotaal: **8 km in 45 min** = ~10,7 km/u gemiddeld.",
    checks: [
      {
        q: "Wat betekent een **vlakke lijn** in een afstand-tijd-grafiek?",
        options: ["Stilstaan", "Versnellen", "Heel snel", "Achteruit"],
        answer: 0,
        wrongHints: [null, "Bij versnellen wordt de lijn steeds steiler. Verandert de afstand eigenlijk bij een vlakke lijn?", "Hoe sneller je gaat, hoe steiler de lijn. Hoe steil is een vlakke lijn?", "Bij achteruit gaan wordt de afstand kleiner en daalt de lijn. Daalt een vlakke lijn?"],
      },
      {
        q: "Wat geeft een **steile rechte lijn** aan?",
        options: ["Hoge constante snelheid", "Stilstaan op één plek", "Gelijkmatig versnellen", "Lage constante snelheid"],
        answer: 0,
        wrongHints: [null, "Bij stilstaan verandert de afstand niet. Hoe ziet de lijn er dan uit?", "Bij versnellen wordt de lijn steeds steiler. Is hij dan nog recht?", "Bij een lage snelheid loopt de lijn bijna plat. Is dat steil?"],
      },
      {
        q: "Hoe bereken je **snelheid** uit een afstand-tijd-grafiek?",
        options: ["De helling van de lijn", "De oppervlakte onder de lijn", "De waarde op de y-as", "De waarde op de x-as"],
        answer: 0,
        wrongHints: [null, "De oppervlakte onder de lijn gebruik je bij een snelheid-tijd-grafiek. Wat lees je af bij een afstand-tijd-grafiek?", "De y-as laat zien hoe ver je op een bepaald moment bent. Zegt dat hoe snel je gaat?", "De x-as laat de tijd zien. Hoe zie je hoeveel afstand er per seconde bij komt?"],
      },
      {
        q: "In een **snelheid-tijd-grafiek**: oppervlakte onder lijn = ?",
        options: ["Totale afstand", "Snelheid", "Versnelling", "Tijd"],
        answer: 0,
        wrongHints: [null, "De snelheid lees je af op de y-as. Welke grootheid krijg je als je snelheid met tijd vermenigvuldigt?", "De versnelling is de helling van de lijn. Welke grootheid krijg je als je snelheid met tijd vermenigvuldigt?", "De tijd staat op de x-as. Welke grootheid krijg je als je snelheid met tijd vermenigvuldigt?"],
      },
    ],
  },

  // STAP 5: Praktijk
  {
    title: "Praktijk — auto, atletiek, ruimte",
    explanation:
      "**Snelheids-feitjes voor alledag**:\n\n**1. Auto + verkeer**:\n• Stad: **50 km/u** (NL max).\n• Buiten bebouwde kom: **80 km/u**.\n• Provinciale weg: **80-100 km/u**.\n• Snelweg dag: **100 km/u** *(sinds 2020)*. Avond + nacht: **130 km/u** *(19-6 uur)*.\n• Boete bij overschrijden — hoe harder, hoe hoger de boete.\n• **Tunnel-snelheid** controle met camera's.\n\n**2. Wereldrecords atletiek**:\n• **100 m sprint** (man): Usain Bolt 9,58 sec → ~37 km/u.\n• **100 m sprint** (vrouw): Florence Griffith-Joyner 10,49 sec → ~34 km/u.\n• **Marathon**: ~21 km/u gemiddeld.\n• **Wielrennen tour**: 40 km/u gemiddeld in vlakke etappe.\n\n**3. Dieren**:\n• Jachtluipaard: ~120 km/u (kort).\n• Paard: ~70 km/u.\n• Hond (greyhound): ~70 km/u.\n• Mens topsnelheid: ~37 km/u.\n• Slak: ~0,05 km/u.\n\n**4. Geluid**:\n• In **lucht** *(20°C)*: 343 m/s = 1.235 km/u.\n• In **water**: ~1.500 m/s.\n• In **staal**: ~5.000 m/s.\n• **Mach 1** = snelheid van geluid. Concorde vloog Mach 2 (twee keer de geluidssnelheid).\n• **Knal**: vliegtuig sneller dan geluid → 'sonic boom'.\n\n**5. Licht**:\n• 300.000 km/s = 1.080.000.000 km/u.\n• Niets gaat sneller in heelal.\n• Aarde-Maan in 1,3 sec.\n• Aarde-Zon in 8,3 min.\n• Aarde-Mars in 3-22 min *(afh. baan)*.\n\n**6. Ruimte**:\n• Aarde draait om as: 1.670 km/u (op evenaar).\n• Aarde om zon: 107.000 km/u.\n• ISS (Internationaal ruimtestation): 28.000 km/u → 90 min per omloop.\n• Voyager 1 (verste sonde): 17 km/s = 61.000 km/u.\n\n**7. Vliegtuig**:\n• Commercieel (Boeing 737): ~900 km/u.\n• Concorde (gestopt): 2.180 km/u.\n• Straaljager F-16: ~2.400 km/u.\n• SR-71 Blackbird (record): 3.530 km/u.\n\n**Toets-voorbeeld**:\n*'Een trein rijdt 240 km in 2 uur. Snelheid?'*\n→ 240 ÷ 2 = 120 km/u.\n\n*'Auto: 100 km/u. Hoeveel m/s?'*\n→ 100 ÷ 3,6 ≈ 28 m/s.\n\n*'In hoeveel min legt licht 1 lichtminuut af?'*\n→ 1 minuut *(definitie!)* — licht legt 1 lichtminuut per minuut af.\n\n**Toets-feitje**:\nDe **G-kracht** van super-versnelling is meetbaar:\n• Normaal staan = 1 G.\n• Achtbaan-piek = 4-5 G.\n• Straaljager-piloot = tot 9 G.\n• Apollo-launch = 4 G.\n• Ver boven 9 G = bewustzijn verliezen.",
    checks: [
      {
        q: "**100 km/u** op snelweg in NL — wanneer?",
        options: ["Overdag, van 6 tot 19 uur", "'s Nachts, van 19 tot 6 uur", "In de winter, van november tot maart", "In het weekend, op zaterdag en zondag"],
        answer: 0,
        wrongHints: [null, "Is het 's nachts druk of rustig op de snelweg? Wanneer is een lagere snelheid dan het meest nodig?", "De regel hangt af van het tijdstip op de dag, niet van het seizoen.", "De regel hangt af van het tijdstip op de dag, niet van de dag van de week."],
      },
      {
        q: "Snelheid **geluid in lucht**?",
        options: ["~343 m/s", "~100 m/s", "~1.000 m/s", "~10.000 m/s"],
        answer: 0,
        wrongHints: [null, "Bij onweer op 1 km afstand hoor je de donder na ongeveer 3 seconden. Hoeveel meter per seconde is dat?", "Bij onweer op 1 km afstand hoor je de donder na ongeveer 3 seconden, niet na 1 seconde. Wat betekent dat voor de snelheid?", "Zo snel gaat geluid zelfs niet door staal. Door lucht gaat het veel langzamer."],
      },
      {
        q: "**Lichtsnelheid**?",
        options: ["300.000 km/s", "300 km/s", "30.000 km/s", "Oneindig"],
        answer: 0,
        wrongHints: [null, "Licht van de maan (384.000 km ver) is in ruim 1 seconde hier. Past 300 km/s daarbij?", "Licht van de maan (384.000 km ver) is in ruim 1 seconde hier. Past 30.000 km/s daarbij?", "Licht van de zon doet er ruim 8 minuten over om de aarde te bereiken. Kan het dan oneindig snel zijn?"],
      },
      {
        q: "ISS *(ruimtestation)* draait in **~90 min** rond aarde — snelheid?",
        options: ["~28.000 km/u", "~1.000 km/u", "~100.000 km/u", "~2.800 km/u"],
        answer: 0,
        wrongHints: [null, "Eén rondje om de aarde is ruim 40.000 km. Haal je dat in 90 minuten met 1.000 km/u?", "Reken na: ruim 40.000 km in anderhalf uur. Kom je dan op 100.000 km/u?", "Met 2.800 km/u leg je in 90 minuten ruim 4.000 km af. Is één rondje om de aarde zo kort?"],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — bewegingen mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: snelheid, eenheden, versnelling, grafiek.\n\nVeel succes!",
    checks: [
      {
        q: "**v = ?** in basis-formule.",
        options: ["s ÷ t", "s × t", "s + t", "s - t"],
        answer: 0,
        wrongHints: [null, "Reken na: 100 km in 2 uur. Komt er met s × t een logische snelheid uit?", "Kun je kilometers en uren bij elkaar optellen? Welke eenheid zou dat geven?", "Kun je uren van kilometers aftrekken? Welke eenheid zou dat geven?"],
      },
      {
        q: "**60 km in 30 min**. Snelheid?",
        options: ["120 km/u", "30 km/u", "60 km/u", "2 km/u"],
        answer: 0,
        wrongHints: [null, "Niet — 30 minuten is geen 30 uur. Hoeveel uur is 30 min?", "Niet — de 60 km is niet in een heel uur gereden.", "Je deelde 60 door 30. Maar km/u gaat over kilometers per uur, niet per minuut."],
      },
      {
        q: "**5 m/s** in km/u?",
        options: ["18 km/u", "5 km/u", "50 km/u", "1,4 km/u"],
        answer: 0,
        wrongHints: [null, "5 is het getal in m/s. Wat moet je doen om het in km/u te krijgen?", "Je vermenigvuldigde met 10. Met welk getal reken je m/s om naar km/u?", "Wordt het getal in km/u groter of kleiner dan in m/s?"],
      },
      {
        q: "**Versnelling-eenheid**?",
        options: ["m/s²", "km/u", "m", "sec"],
        answer: 0,
        wrongHints: [null, "km/u is een eenheid van snelheid. Versnelling gaat over hoeveel snelheid er per seconde bijkomt.", "Meter is een afstand. Versnelling gaat over hoe snel de snelheid verandert.", "Seconde is een tijd. Versnelling gaat over hoeveel snelheid er per seconde bijkomt."],
      },
      {
        q: "**Vlakke lijn** afstand-tijd-grafiek = ?",
        options: ["Stilstaan", "Hoge snelheid", "Versnellen", "Terug bewegen"],
        answer: 0,
        wrongHints: [null, "Een hoge snelheid geeft een steile lijn. Hoe steil is een vlakke lijn?", "Bij versnellen buigt de lijn steeds steiler omhoog. Verandert de afstand bij een vlakke lijn?", "Bij terug bewegen daalt de lijn. Daalt een vlakke lijn?"],
      },
      {
        q: "**Zwaartekracht** versnelling aarde?",
        options: ["~10 m/s²", "~5 m/s²", "~100 m/s²", "0 m/s²"],
        answer: 0,
        wrongHints: [null, "Een steen die je 1 seconde laat vallen, gaat al ongeveer zo hard als een brommer (36 km/u). Hoeveel m/s is dat?", "Zou een vallende steen na 1 seconde al 100 m/s (360 km/u) gaan?", "Bij 0 m/s² zou een losgelaten bal blijven hangen. Gebeurt dat op aarde?"],
      },
      {
        q: "**Versnelling 0** betekent?",
        options: ["Snelheid blijft gelijk", "Afremmen tot stilstand", "Heel hoge snelheid", "Steeds sneller gaan"],
        answer: 0,
        wrongHints: [null, "Stoppen is afremmen: dan verandert je snelheid.", "Niet noodzakelijk — snelheid en versnelling zijn verschillende dingen.", "Dan is er juist wél versnelling."],
      },
      {
        q: "Formule **afstand = ?** (bij constante snelheid)",
        options: ["snelheid × tijd", "snelheid + tijd", "snelheid / tijd", "tijd / snelheid"],
        answer: 0,
        wrongHints: [null, "Kun je km/u en uren zomaar optellen? Welke eenheid krijg je dan?", "Reken het na: 20 km/u gedurende 2 uur. Kom je dan op 10 km?", "Reken het na: 20 km/u gedurende 2 uur. Kom je dan op 0,1 km?"],
      },
      {
        q: "**Open vraag**: bereken **afstand** bij 30 km/u en 2 uur rijden. Typ alleen getal in km.",
        kind: "open",
        acceptedAnswers: ["60"],
        numericTolerance: 0,
        explanation: "Afstand = snelheid × tijd = 30 × 2 = 60 km.",
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
