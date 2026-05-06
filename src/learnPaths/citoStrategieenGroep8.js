// Leerpad: Cito Doorstroomtoets — strategieën voor groep 8
// 7 stappen in 4 hoofdstukken (A t/m D).
// Focus: hoe ga je slim met de toets om — niet alleen 'kennen', maar ook 'aanpakken'.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  rekenen: "#5d9cec",
  taal: "#ec407a",
  bl: "#9be069",
  wereld: "#ffd54f",
};

const stepEmojis = ["🎯","📋","⏱","✅","📖","🧮","🏆"];

const chapters = [
  { letter: "A", title: "Wat is de Cito-toets?", emoji: "🎯", from: 0, to: 1 },
  { letter: "B", title: "Tijd + meerkeuze-strategie", emoji: "⏱", from: 2, to: 3 },
  { letter: "C", title: "Per onderdeel", emoji: "📖", from: 4, to: 5 },
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 6, to: 6 },
];

function onderdelenSvg() {
  const stuks = [
    { naam: "Rekenen", aantal: "~50 vragen", kleur: COLORS.rekenen, x: 30, w: 70 },
    { naam: "Taal", aantal: "~50 vragen", kleur: COLORS.taal, x: 110, w: 70 },
    { naam: "Studie­vaardigheden", aantal: "~25 vragen", kleur: COLORS.bl, x: 190, w: 90 },
    { naam: "Wereldoriëntatie (sommige scholen)", aantal: "extra", kleur: COLORS.wereld, x: 30, w: 250 },
  ];
  return `<svg viewBox="0 0 320 280">
<rect x="0" y="0" width="320" height="280" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">Onderdelen Cito Doorstroomtoets — globaal overzicht</text>

${stuks.slice(0, 3).map((s, i) => `
<rect x="${s.x}" y="50" width="${s.w}" height="80" rx="8" fill="${s.kleur}" opacity="0.50"/>
<text x="${s.x + s.w/2}" y="80" text-anchor="middle" fill="#fff" font-size="13" font-family="Arial" font-weight="bold">${s.naam}</text>
<text x="${s.x + s.w/2}" y="100" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">${s.aantal}</text>`).join('')}

<rect x="30" y="150" width="250" height="50" rx="8" fill="${stuks[3].kleur}" opacity="0.30" stroke-dasharray="4,3" stroke="${stuks[3].kleur}" stroke-width="1"/>
<text x="155" y="175" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">+ Wereldoriëntatie</text>
<text x="155" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">(optioneel — niet alle scholen)</text>

<text x="160" y="230" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">Totaal: ~125 vragen, gespreid over meerdere dagen</text>
<text x="160" y="248" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Aantal kan jaarlijks iets verschillen</text>
<text x="160" y="265" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Adviseert je vervolg-niveau in voortgezet onderwijs</text>
</svg>`;
}

function tijdSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="18" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">Pacing — verdeel je tijd</text>

<line x1="20" y1="100" x2="300" y2="100" stroke="${COLORS.muted}" stroke-width="2"/>
<rect x="20" y="92" width="80" height="16" fill="${COLORS.good}" opacity="0.6"/>
<text x="60" y="84" text-anchor="middle" fill="${COLORS.good}" font-size="10" font-family="Arial" font-weight="bold">Eerste 25%</text>
<text x="60" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">makkelijke vragen</text>
<text x="60" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">snel doorlopen</text>

<rect x="100" y="92" width="120" height="16" fill="${COLORS.warm}" opacity="0.6"/>
<text x="160" y="84" text-anchor="middle" fill="${COLORS.warm}" font-size="10" font-family="Arial" font-weight="bold">Middelste 50%</text>
<text x="160" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">normaal tempo</text>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">denken + checken</text>

<rect x="220" y="92" width="80" height="16" fill="${COLORS.alt}" opacity="0.6"/>
<text x="260" y="84" text-anchor="middle" fill="${COLORS.alt}" font-size="10" font-family="Arial" font-weight="bold">Laatste 25%</text>
<text x="260" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">zwaarste vragen</text>
<text x="260" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">+ tijd voor twijfel</text>

<text x="160" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Bij vastlopen: <tspan fill="${COLORS.warm}" font-weight="bold">SKIPPEN</tspan> en aan einde terugkomen</text>
<text x="160" y="188" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Liever 2 vragen verderop dan 5 min op 1 vraag</text>
</svg>`;
}

const steps = [
  {
    title: "Wat is de Cito Doorstroomtoets?",
    explanation: "Aan het einde van groep 8 maak je de **Cito Doorstroomtoets** (vroeger heette dit de **Eindtoets**). Deze toets:\n\n• **Test wat je in 8 jaar basisschool hebt geleerd** — rekenen, taal, soms ook wereldoriëntatie.\n• **Geeft een advies** voor je vervolg-niveau (vmbo / havo / vwo).\n• Wordt **op alle Nederlandse basisscholen** afgenomen (98% van de leerlingen).\n• Duurt **meerdere dagdelen**, gespreid over ~3 dagen.\n\n**Belangrijk om te weten**: jouw schooladvies in groep 8 is **leidend**. De Cito-toets is een **second opinion** — als je beter scoort dan je advies, kan je nog hogerop, maar slechter scoren betekent niet dat je advies omlaag gaat.\n\n**Wat je niet hoeft te kunnen**:\n• Geen rekenmachine — alles uit het hoofd of op papier.\n• Geen kladpapier — vaak wel, maar simpel.\n• Geen heel diepgaande wereldkennis — wel **basis**.\n\n**Wat je WEL moet kunnen**:\n• **Tekst lezen + samenvatten** in eigen woorden.\n• **Rekenen** met breuken, procenten, oppervlakte, volume, schaal, snelheid.\n• **Spellen + grammatica** — werkwoordsvormen, leestekens, hoofdletters.\n• **Studievaardigheden** — kaart aflezen, grafiek interpreteren, woordenboek-zoeken.\n\n**Stress over Cito?**\nVeel kinderen vinden het spannend. Tip: zie 't als een kans om te laten zien wat je kunt — niet als een examen waar je voor of tegen kan slagen. **Iedereen 'haalt' de Cito** — er is geen zakken.\n\n**Goed nieuws**: je hoeft niet 100% te scoren. Het gemiddelde ligt rond ~70-75%. Iedereen krijgt vragen niet goed.",
    svg: onderdelenSvg(),
    checks: [
      {
        q: "Wat is de Cito Doorstroomtoets?",
        options: ["Een toets aan het einde van groep 8 die advies geeft voor VO","Een toets om groep 8 over te doen","Een wereldwijd examen","Een huiswerktoets"],
        answer: 0,
        wrongHints: [null,"Niet om over te doen — iedereen mag door.","Alleen Nederland.","Officiële toets, geen huiswerk."],
      },
      {
        q: "Wat is **leidend** voor je vervolg-niveau?",
        options: ["Het schooladvies van je leerkracht","De Cito-toets","Je rapportcijfers","Je eigen voorkeur"],
        answer: 0,
        wrongHints: [null,"Cito is een 'second opinion' — alleen omhoog kan.","Cijfers wegen mee bij advies maar zijn niet alleen leidend.","Voorkeur is bijzaak."],
      },
    ],
  },
  {
    title: "Welke onderdelen zitten erin?",
    explanation: "De Cito-toets heeft **3 hoofdonderdelen**:\n\n**1. Rekenen** *(~50 vragen)*\nWat verwacht je:\n• Optellen, aftrekken, vermenigvuldigen, delen — soms met grote getallen.\n• **Breuken**: optellen, vergelijken, vereenvoudigen.\n• **Procenten**: korting, btw, percentage van.\n• **Verhoudingen** + schaal: 'op een kaart 1:50.000...'\n• **Meten**: oppervlakte, omtrek, volume, gewicht, tijd.\n• **Snelheid**: km/u uitrekenen.\n• **Geld**: euro's en centen, kortingen, uitgaven.\n• **Patronen**: getallenrijen voortzetten.\n\n**2. Taal** *(~50 vragen)*\nWat verwacht je:\n• **Spelling**: d/t-regels, ei/ij, au/ou, hoofdletters, leestekens.\n• **Werkwoordsvormen**: hij wordt, ze loopt, jij werkt.\n• **Grammatica**: persoonlijk vnw (jij/jou/jouw), bijvoeglijk nw, lijdend voorwerp.\n• **Woordenschat**: synoniemen, antoniemen, betekenis van woorden.\n• **Begrijpend lezen**: lange teksten + vragen wat de tekst zegt of bedoelt.\n• **Stijlfiguren**: metafoor, personificatie, vergelijking.\n\n**3. Studievaardigheden** *(~25 vragen)*\nDe minst bekende onderdeel — gaat over **handige skills**:\n• **Woordenboek** of **register** zoeken (waar staat 'X' alfabetisch?).\n• **Kaart** of **grafiek** aflezen.\n• **Tabel** interpreteren.\n• **Inhoudsopgave** of **agenda** gebruiken.\n• **Zoektermen** kiezen voor internet.\n\n**4. (Optioneel) Wereldoriëntatie** *(~25 vragen)*\nNiet alle scholen doen dit, maar handig om te kennen:\n• **Aardrijkskunde**: NL provincies, EU, werelddelen, klimaat.\n• **Geschiedenis**: tijdvakken, WO2, oorlogen, oudheid, Renaissance.\n• **Natuur**: lichaam, dieren, planten, weer, ruimte.\n• **Burgerschap**: democratie, mensenrechten.\n\nIn totaal ~**125 vragen**, gespreid over **3 dagen**. Per dag dus ~40-45 vragen.",
    svg: onderdelenSvg(),
    checks: [
      {
        q: "Hoeveel hoofdonderdelen heeft de Cito-toets meestal?",
        options: ["3 (rekenen, taal, studievaardigheden)","1 (allemaal samen)","5","2"],
        answer: 0,
        wrongHints: [null,"Wel apart per onderdeel.","Te veel.","Te weinig."],
      },
      {
        q: "Wat hoort bij **studievaardigheden**?",
        options: ["Woordenboek + kaart + grafiek aflezen","Spelling + werkwoorden","Optellen + aftrekken","Geschiedenis + aardrijkskunde"],
        answer: 0,
        wrongHints: [null,"Dat is taal.","Dat is rekenen.","Dat is wereldoriëntatie (optioneel)."],
      },
    ],
  },
  {
    title: "Tijd-management — pacing",
    explanation: "Je hebt **niet onbeperkt tijd** — gemiddeld krijg je **~1 minuut per vraag**. Snelheid is belangrijk, maar niet ten koste van zorgvuldigheid.\n\n**De 3 fases per onderdeel** *(~50 vragen, ~50 minuten)*:\n\n**Fase 1 — Eerste 12-15 vragen** *(de makkelijke)*\nDe toets begint vaak met simpele vragen. Dit zijn de 'gratis' punten. **Doe ze snel** — 30 seconden per vraag — en bewaar tijd voor later. Niet **te snel** dat je dom-fouten maakt!\n\n**Fase 2 — Middelste 25-30 vragen** *(de gewone)*\nNormaal tempo. ~1 minuut per vraag. **Lees goed**, denk na, kies. **Twijfel je tussen 2 opties? Markeer en ga door** (zie volgende stap).\n\n**Fase 3 — Laatste 10-15 vragen** *(de zwaarste)*\nMoeilijkste vragen + tijd om twijfels te checken. **Niet panieken** als je hier ergens vastloopt — sla over en ga door.\n\n**De drie KEY-regels**:\n\n**1. Vastlopen? SKIP.**\nLiever 3 vragen verderop goed dan 5 minuten op 1 vraag dom-staren. Cito-toetsen geven evenveel punten per vraag — een makkelijke is even waardevol als een moeilijke.\n\n**2. Bewaar 5 minuten voor controle.**\nAan het einde: ga snel terug naar de markeerd vragen. Vaak weet je het tweede keer wel.\n\n**3. Vul ALTIJD iets in.**\nGeen vraag leeg laten! Bij Cito krijg je geen aftrek voor verkeerde antwoorden — alleen punten voor goede. Beter een gokje dan niets.\n\n**Trucje voor pacing**: kijk om de 10 vragen op de klok.\n• Vraag 10 → moet ~10 min bezig zijn.\n• Vraag 25 → ~25 min.\n• Vraag 40 → ~40 min.\n• Loop je voor: rustig aan + extra check.\n• Loop je achter: skip moeilijke en kom terug.",
    svg: tijdSvg(),
    checks: [
      {
        q: "Wat doe je als je vastloopt op een moeilijke vraag?",
        options: ["Skippen en aan einde terugkomen","Doorpiekeren tot 't lukt","Willekeurig antwoord en doorgaan","Je leerkracht roepen"],
        answer: 0,
        wrongHints: [null,"Je verliest waardevolle tijd op andere vragen.","Soms beter (zie regel 3) maar liever eerst skippen + later proberen.","Mag niet tijdens een toets."],
      },
      {
        q: "Hoeveel tijd heb je gemiddeld per vraag?",
        options: ["Ongeveer 1 minuut","30 seconden","5 minuten","Onbeperkt"],
        answer: 0,
        wrongHints: [null,"Te kort — dan haal je het niet.","Veel te lang.","Wel beperkt — er is een tijdslimiet."],
      },
      {
        q: "Wat doe je als je twijfelt tussen 2 antwoorden en geen tijd hebt?",
        options: ["Gokken — vul iets in","Niets invullen","Klagen bij de leerkracht","Beide invullen"],
        answer: 0,
        wrongHints: [null,"Geen aftrek voor fouten — beter gokken dan leeg.","Niet helpend.","Maar 1 antwoord per vraag."],
      },
    ],
  },
  {
    title: "Meerkeuze-strategie — eliminatie",
    explanation: "Bij meerkeuze-vragen hoef je **niet altijd het juiste antwoord direct te weten**. Je kunt vaak via **eliminatie** het antwoord vinden — uitsluiten wat fout is.\n\n**De 4-stappen-eliminatie-techniek**:\n\n**Stap 1**: Lees de vraag **2× rustig** door. Wat wordt er precies gevraagd?\n\n**Stap 2**: Bedenk **zelf** een antwoord, **voordat** je naar de opties kijkt. Dit voorkomt dat de foute opties je beïnvloeden.\n\n**Stap 3**: Kijk naar de opties. Welke zijn **duidelijk fout**? Streep ze door.\n\n**Stap 4**: Tussen de overgebleven opties: kies de **best passende**.\n\n**Voorbeeld**:\n*\"Wat was de aanleiding voor de Eerste Wereldoorlog?\"*\n• A. Inval Polen door Duitsland\n• B. Aanslag op Frans Ferdinand\n• C. Pearl Harbor\n• D. Russische revolutie\n\n**Eliminatie**:\n• A: Polen-inval = WO2, niet WO1. **WEG**.\n• C: Pearl Harbor = WO2 (1941). **WEG**.\n• D: Russische revolutie = 1917, ná het uitbreken (1914). **WEG**.\n• Alleen B blijft over → **B is goed**.\n\nZelfs als je het antwoord niet **direct** weet, kun je via eliminatie tot het juiste komen.\n\n**Verraderlijke opties — wat te doen?**\n\n*1. 'Alle bovenstaande'*\nAls dit een optie is en 2+ opties lijken goed: meestal is het inderdaad 'alle bovenstaande'.\n\n*2. Twee bijna-identieke opties*\nVaak is één van de twee goed. De maker probeert je te verwarren met een **klein verschil**. Kijk **heel zorgvuldig** wat het verschil is.\n\n*3. Extreem absolute woorden ('altijd', 'nooit')*\nDeze zijn vaak fout — er zijn meestal uitzonderingen. Kies opties met 'meestal', 'vaak', 'soms'.\n\n*4. Lange complete optie + 3 korte*\nLange optie is **vaak** correct (omdat 'ie volledig probeert te zijn). Pas op: niet altijd!\n\n**Belangrijk**: deze trucjes zijn een **hulpmiddel**, geen vervanger voor kennis. Eerst denken, dan eliminatie als hulp.",
    svg: tijdSvg(),
    checks: [
      {
        q: "Wat doe je VOORDAT je naar de antwoordopties kijkt?",
        options: ["Bedenk zelf wat je denkt dat het antwoord is","Direct gokken","Vraag overslaan","Leerkracht vragen"],
        answer: 0,
        wrongHints: [null,"Niet zonder eigen denken.","Niet als je iets weet.","Mag niet."],
      },
      {
        q: "Wat is **eliminatie**?",
        options: ["Foute antwoorden uitsluiten","Goede antwoorden zoeken","Vragen weglaten","Snel kiezen"],
        answer: 0,
        wrongHints: [null,"Eerst foute weghalen, dan blijft het goede over.","Eerst weghalen wat fout is.","Niet vragen overslaan."],
      },
      {
        q: "Welke woorden in een optie maken hem **verdacht fout**?",
        options: ["'altijd' of 'nooit' (te absoluut)","'meestal'","'vaak'","'soms'"],
        answer: 0,
        wrongHints: [null,"'meestal' geeft ruimte voor uitzonderingen — vaak goed.","'vaak' geeft ruimte — ok.","'soms' geeft ruimte — ok."],
      },
    ],
  },
  {
    title: "Begrijpend lezen — slim aanpakken",
    explanation: "**Begrijpend lezen** is voor veel kinderen het zwaarste onderdeel. Je krijgt een **lange tekst** + 3-5 vragen erover. Veel tekst, weinig tijd.\n\n**De 5-stappen-aanpak**:\n\n**Stap 1: Skim de tekst (~30 seconden)**\nLees alleen de **eerste zin van elke alinea** + de titel. Dit geeft je het **onderwerp**. Vraag jezelf: 'Waar gaat deze tekst over?'\n\n**Stap 2: Lees de vragen** *(eerst, vóór de hele tekst!)*\nKijk welke informatie je moet vinden. Soms staan er specifieke woorden of namen — die ga je later opzoeken.\n\n**Stap 3: Scan voor antwoorden**\nNu lees je de tekst rustig, maar gericht. Bij elke vraag: **zoek het antwoord in de tekst**. Onderlijn of markeer.\n\n**Stap 4: Beantwoord op basis van de TEKST, niet je eigen mening**\nDit is **cruciaal**: het juiste antwoord staat in de tekst, niet wat jij denkt of weet.\n\n**Stap 5: Check je antwoord**\nVergelijk je antwoord met het stukje tekst. Klopt het echt?\n\n**Vraagsoorten en hoe ze aan te pakken**:\n\n**a. Letterlijke vraag** ('Wat staat er in de tekst over X?')\n→ Ga naar het deel dat over X gaat. Antwoord staat **letterlijk** of bijna letterlijk.\n\n**b. Hoofd-idee-vraag** ('Wat is de boodschap van de tekst?')\n→ Kijk naar **eerste en laatste alinea** + woorden zoals 'kortom', 'samenvattend'.\n\n**c. Inferentie-vraag** ('Wat denkt de schrijver?' of 'Waarom doet X dat?')\n→ Lees TUSSEN de regels. Kijk naar woorden met emotie of standpunt.\n\n**d. Woordbetekenis-vraag** ('Wat betekent het woord [X]?')\n→ Kijk naar de zin **eromheen**. Wat past in die context?\n\n**e. Tekstopbouw** ('Hoe is de tekst opgebouwd?')\n→ Kijk naar volgorde van alinea's: probleem → oplossing? Voor → tegen? Tijdslijn? Voorbeelden?\n\n**Veelvoorkomende fouten**:\n• Antwoord op basis van eigen mening ipv tekst.\n• Vraag verkeerd lezen (vooral 'NIET' missen!).\n• Te snel: één detail gemist.\n• Hele tekst woord-voor-woord lezen — kost te veel tijd.\n\n**Pro-tip**: bij **NIET-vragen** ('Wat staat er NIET in de tekst?') — schrijf 'NIET' onderstreept op kladpapier. Anders mis je het.",
    svg: tijdSvg(),
    checks: [
      {
        q: "Wat doe je **EERST** bij een begrijpend-lezen-vraag?",
        options: ["Tekst skimmen + vragen lezen voordat je hele tekst leest","Hele tekst woord-voor-woord lezen","Direct antwoorden gokken","Leerkracht vragen"],
        answer: 0,
        wrongHints: [null,"Te tijdrovend — eerst skimmen.","Niet zonder lezen.","Mag niet."],
      },
      {
        q: "Het antwoord op een begrijpend-lezen-vraag staat altijd...",
        options: ["In de tekst (niet in je eigen kennis)","In je rugzak","Bij de uitleg achter","Bij de leerkracht"],
        answer: 0,
        wrongHints: [null,"Niet in materialen.","De vragen zelf hebben geen antwoorden.","Mag niet."],
      },
      {
        q: "Wat doe je bij een **NIET-vraag** ('Wat staat NIET in de tekst?')",
        options: ["Markeer 'NIET' om niet te missen","Skip 'm","Vraag toelichting","Gokken"],
        answer: 0,
        wrongHints: [null,"Niet skippen — wel haalbaar met aandacht.","Mag niet bij toets.","Niet eerste keuze."],
      },
    ],
  },
  {
    title: "Rekenen — slim aanpakken",
    explanation: "Bij **rekenen-vragen** zit de truc vaak in **lezen wat er gevraagd wordt** + **schatten voordat je rekent**.\n\n**De 4-stappen-aanpak**:\n\n**Stap 1: Lees de vraag 2× rustig**\nWat staat er? Wat wordt gevraagd? Welke getallen zijn relevant?\n\n**Stap 2: Schat een redelijk antwoord**\nVoorbeeld: '12% van 85 = ?' \n• 10% van 85 = 8,5 \n• 12% is iets meer → ~10\n• Dus antwoord is rond 10. Optie '€95,20' (12% er bovenop) komt dichterbij dan '€97,00'.\n\nSchatten helpt **dom-foute antwoorden** uit te sluiten.\n\n**Stap 3: Reken zorgvuldig**\nGebruik kladpapier — niet uit het hoofd voor lastige sommen.\nSchrijf elke stap uit:\n```\n12% × 85\n= 0,12 × 85\n= 0,1 × 85 + 0,02 × 85\n= 8,5 + 1,7\n= 10,2\n85 + 10,2 = €95,20\n```\n\n**Stap 4: Check de eenheid**\n• Cm? Liter? Procent? Euro? Jaren?\n• Soms is het antwoord goed maar de **eenheid fout**.\n\n**Veel voorkomende valkuilen**:\n\n**1. Verschil tussen 'is' en 'wordt'**\n*\"Een prijs is €100. Hij wordt 20% **goedkoper**.\"* → -20%, nieuwe prijs €80.\n*\"Een prijs is €100. Hij **werd** met 20% verhoogd.\"* → +20%, nieuwe prijs €120.\n\n**2. Eenhedeb omrekenen**\n• 1 km = 1.000 m\n• 1 m = 100 cm = 1.000 mm\n• 1 m³ = 1.000 liter\n• 1 uur = 60 min = 3.600 sec\n• 1 jaar = 12 maand = 365 dag = ~52 week\n\n**3. Schaalberekening**\nKaart 1:50.000 betekent: 1 cm = 50.000 cm = 500 m = 0,5 km in werkelijkheid.\n• 4 cm op kaart = 4 × 0,5 = 2 km echt.\n• 8 cm = 4 km echt.\n\n**4. Procent uitrekenen**\n• 'X% van Y' = X/100 × Y\n• 10% van iets = deel door 10\n• 25% = deel door 4\n• 50% = de helft\n• 'X is hoeveel procent van Y' = X/Y × 100%\n\n**5. Snelheid (km/u)**\nSnelheid = afstand ÷ tijd\n• 150 km in 1,5 uur = 150 ÷ 1,5 = 100 km/u\n• 60 km in 30 min = 60 ÷ 0,5 = 120 km/u\n\n**Lastig met tijd**: minuten omzetten naar uren!\n• 30 min = 0,5 uur\n• 15 min = 0,25 uur\n• 45 min = 0,75 uur\n• 1 uur 15 min = 1,25 uur",
    svg: tijdSvg(),
    checks: [
      {
        q: "Wat doe je vóórdat je echt gaat rekenen?",
        options: ["Schat een redelijk antwoord","Direct opschrijven","Gokken","Vraag overslaan"],
        answer: 0,
        wrongHints: [null,"Schat eerst — voorkomt domme fouten.","Niet zonder denken.","Niet zonder denken."],
      },
      {
        q: "Een rok kost €40 en wordt 25% goedkoper. Wat betaal je?",
        options: ["€30","€35","€20","€50"],
        answer: 0,
        wrongHints: [null,"Niet 12,5% korting maar 25%.","Te weinig — je betaalt 75% van 40 = 30.","Goedkoper, niet duurder!"],
      },
      {
        q: "Wat is het verschil tussen 'hij is 25% goedkoper' en 'hij werd met 25% verhoogd'?",
        options: ["Eerste = -25% (omlaag), tweede = +25% (omhoog)","Geen verschil","Beide = -25%","Beide = +25%"],
        answer: 0,
        wrongHints: [null,"Wel — duidelijk verschil.","Goedkoper = lager.","Verhoogd = hoger."],
      },
    ],
  },
  {
    title: "Eindopdracht — alle strategieën samen",
    explanation: "Tijd om alle strategieën samen toe te passen!\n\n**Snelle samenvatting**:\n\n**Vóór de toets**:\n• Goed slapen — minimaal 8 uur.\n• Ontbijt eten — energie voor je hersenen.\n• Op tijd op school zijn.\n• Pen, gum, potlood mee.\n• **Geen extreem stress** — je bent voorbereid.\n\n**Tijdens de toets**:\n• **Skim** alles eerst (overzicht).\n• **Pacing**: ~1 minuut per vraag, kijk om de 10 vragen op klok.\n• **Vastlopen? SKIP** en kom terug.\n• **Niets leeg** laten — vul altijd iets in.\n• **Eliminatie** voor lastige meerkeuze.\n• **Schat** rekensommen voordat je gaat rekenen.\n• **Lees vragen 2×** — vooral 'NIET'-vragen.\n• Bewaar **5 min** voor controle.\n\n**Na de toets**:\n• **Niet stressen** — je hebt het beste gedaan wat je kon.\n• Resultaat duurt ~6 weken — je krijgt 'm via je leerkracht.\n\n**Zelfvertrouwen-mantra**:\n*'Iedereen 'haalt' de Cito-toets. Mijn schooladvies is leidend. Cito is alleen second opinion. Ik heb het voorbereid en ga gewoon mijn best doen.'*\n\n**Veel succes!**",
    svg: tijdSvg(),
    checks: [
      {
        q: "Wat is de **veiligste** strategie als je tijd hebt voor maar 1 controle-ronde?",
        options: ["Markeer twijfels tijdens, controleer aan einde","Direct alle antwoorden checken","Niets controleren","Volledig herlezen vanaf vraag 1"],
        answer: 0,
        wrongHints: [null,"Te tijdrovend.","Risico — 1 fout kan fataal zijn.","Niet alles — alleen waar je twijfel had."],
      },
      {
        q: "Welke houding is **goed** voor de Cito-toets?",
        options: ["Gewoon mijn best doen, ik ben voorbereid","Stress & paniek — er is veel afhankelijk","Alles vergeten en raden","Iemand anders laten meedoen"],
        answer: 0,
        wrongHints: [null,"Stress vermindert je prestatie.","Niet helpend.","Mag niet — fraude."],
      },
      {
        q: "Cito-toets: wat krijg je als resultaat?",
        options: ["Advies voor vervolg-niveau (vmbo/havo/vwo)","Een eindcijfer als 7,5","Een tijdsregistratie","Niets"],
        answer: 0,
        wrongHints: [null,"Ander systeem — wel een score maar vooral advies.","Geen tijdscore.","Wel iets — een advies."],
      },
      {
        q: "Wat is het verschil tussen schooladvies en Cito-advies?",
        options: ["Schooladvies leidend, Cito alleen omhoog kan bijstellen","Cito leidend, schooladvies onbelangrijk","Beide gelijk","Geen verschil"],
        answer: 0,
        wrongHints: [null,"Andersom.","Wel verschil.","Wel verschil — schooladvies wint normaliter."],
      },
      {
        q: "Wat is **niet handig** te doen tijdens Cito?",
        options: ["Doorpiekeren op 1 vraag tot je het weet","Skippen + later terugkomen","Iets gokken bij twijfel","Eliminatie van foute opties"],
        answer: 0,
        wrongHints: [null,"Wel handig — bewaar je tijd.","Wel handig — geen aftrek voor fouten.","Wel handig — leidt tot goede antwoord."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const citoStrategieenGroep8 = {
  id: "cito-strategieen-groep8",
  title: "Cito Doorstroomtoets — strategieën voor groep 8",
  emoji: "🎯",
  level: "groep8",
  subject: "cito",
  intro:
    "Hoe je slim met de Cito-toets omgaat: pacing, eliminatie bij meerkeuze, slimme aanpak voor begrijpend lezen + rekenen, omgaan met twijfel + tijdgebrek. Niet alleen 'kennen', ook 'aanpakken'.",
  triggerKeywords: [
    "cito","cito doorstroomtoets","cito groep 8","eindtoets",
    "tijd-management toets","skip strategie","eliminatie meerkeuze",
    "pacing toets","studievaardigheden","cito stress",
    "schooladvies","vmbo havo vwo advies",
    "begrijpend lezen strategie","skim scan",
  ],
  chapters,
  steps,
};

export default citoStrategieenGroep8;
