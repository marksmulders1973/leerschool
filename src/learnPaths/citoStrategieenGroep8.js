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
  { letter: "A", title: "Wat is de Doorstroomtoets?", emoji: "🎯", from: 0, to: 1 },
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
    explanation: "Aan het einde van groep 8 maak je de **Doorstroomtoets** (vroeger heette dit de 'Eindtoets'). Sinds 2024 zijn er meerdere aanbieders: **Cito** (meest gebruikt), IEP, ROUTE 8, AMN. Veel scholen kiezen Cito.\n\nDeze toets:\n\n• **Test wat je in 8 jaar basisschool hebt geleerd** — rekenen, taal, soms ook wereldoriëntatie.\n• **Geeft een toetsadvies** voor je vervolg-niveau (vmbo / havo / vwo).\n• Wordt op **alle reguliere basisscholen** afgenomen.\n• Duurt **meerdere dagdelen**, gespreid over ~3 dagen in begin februari.\n\n**Belangrijk — regels sinds 2024**:\n\nJouw schooladvies wordt eerst gegeven (uiterlijk **eind januari**). Daarna maak je de Doorstroomtoets in **eerste of tweede week van februari**. Vervolgens geldt:\n\n• Toetsadvies **hoger** dan schooladvies → school **moet** het schooladvies heroverwegen (niet 'kan'). Vaak gaat advies dan omhoog.\n• Toetsadvies **lager** dan schooladvies → schooladvies blijft staan.\n\nDus: **toets kan alleen helpen, niet schaden**. Geen reden om bang te zijn dat je 'omlaag valt'.\n\n**Wat je niet hoeft te kunnen**:\n• Geen rekenmachine — alles uit het hoofd of op papier.\n• Geen kladpapier — vaak wel, maar simpel.\n• Geen heel diepgaande wereldkennis — wel **basis**.\n\n**Wat je WEL moet kunnen**:\n• **Tekst lezen + samenvatten** in eigen woorden.\n• **Rekenen** met breuken, procenten, oppervlakte, volume, schaal, snelheid.\n• **Spellen + grammatica** — werkwoordsvormen, leestekens, hoofdletters.\n• **Studievaardigheden** — kaart aflezen, grafiek interpreteren, woordenboek-zoeken.\n\n**Stress over Cito?**\nVeel kinderen vinden het spannend. Tip: zie 't als een kans om te laten zien wat je kunt — niet als een examen waar je voor of tegen kan slagen. **Iedereen 'haalt' de toets** — er is geen zakken.\n\n**Goed nieuws**: je hoeft niet 100% te scoren. Het gemiddelde ligt rond ~70-75%. Iedereen maakt een paar fouten — dat is normaal.",
    svg: onderdelenSvg(),
    checks: [
      {
        q: "Wat is de Cito Doorstroomtoets?",
        options: ["Een toets aan het einde van groep 8 die advies geeft voor de middelbare school","Een toets om groep 8 over te doen","Een wereldwijd examen","Een huiswerktoets"],
        answer: 0,
        wrongHints: [null,"Wat denk je: zakt iemand voor de Cito, of mag iedereen door?","Wordt deze toets ook in andere landen afgenomen?","Wie maakt deze toets — alleen jij thuis, of iedereen op school?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat doet de toets?", tekst: "Geeft een ADVIES voor je vervolg-school (vmbo/havo/vwo). Niet om groep 8 over te doen." },
            { titel: "Wanneer + voor wie?", tekst: "Februari, na schooladvies. Iedereen op de basisschool. Geen 'zakken'." },
          ],
          woorden: [
            { woord: "Doorstroomtoets", uitleg: "Toets eind groep 8, sinds 2024. Geeft advies voor middelbare school." },
            { woord: "Voortgezet onderwijs (VO)", uitleg: "Officiele naam voor middelbare school." },
          ],
          theorie: "Belangrijk: je krijgt eerst SCHOOLADVIES (januari), DAARNA Cito (februari). Toets kan advies HOGER bijstellen, niet lager.",
          voorbeelden: [{ type: "advies-flow", tekst: "Schooladvies vmbo-tl + Cito havo → school MOET heroverwegen. Andersom (advies havo + Cito vmbo) → advies blijft havo." }],
          basiskennis: [{ onderwerp: "Geen zakken", uitleg: "Iedereen mag door naar de middelbare school. Geen examen-stress." }],
          niveaus: {
            basis: "Cito = toets in groep 8 + advies middelbare school. A.",
            simpeler: "Aan het einde van groep 8 maak je een grote toets. Die helpt te bepalen welk soort middelbare school (vmbo/havo/vwo) bij jou past. = A.",
            nogSimpeler: "Toets + advies middelbare school = A.",
          },
        },
      },
      {
        q: "Wat is **leidend** voor je vervolg-niveau?",
        options: ["Het schooladvies van je leerkracht","De Doorstroomtoets","Je rapportcijfers","Je eigen voorkeur"],
        answer: 0,
        wrongHints: [null,"Wie kent jou al jaren en kijkt naar veel meer dan één toets?","Tellen losse cijfers zwaarder dan het oordeel van iemand die je al jaren ziet?","Mag jij zelf bepalen naar welk niveau je gaat, of denkt iemand met je mee?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is leidend?", tekst: "Het SCHOOLADVIES van je leerkracht is de basis. Die kent je al 8 jaar." },
            { titel: "Cito-rol", tekst: "Cito kan het advies HOGER duwen, niet lager. Het is een check, geen overrule." },
          ],
          woorden: [
            { woord: "leidend", uitleg: "De belangrijkste, doorslaggevende. Wat de basis is." },
            { woord: "schooladvies", uitleg: "De juffrouw/meester adviseert welk niveau bij jou past — vmbo/havo/vwo." },
          ],
          theorie: "Sinds 2024: schooladvies leidend, Doorstroomtoets als HEROVERWEGINGSMOGELIJKHEID bij hoger resultaat.",
          voorbeelden: [{ type: "leidend", tekst: "Schooladvies = vmbo-tl. Cito = havo. School heroverweegt → advies meestal omhoog naar havo." }],
          basiskennis: [{ onderwerp: "Vertrouw je leerkracht", uitleg: "8 jaar observatie weegt zwaarder dan 1 toets." }],
          niveaus: {
            basis: "Schooladvies = leidend. A.",
            simpeler: "Wie weet het beste wat bij jou past? Iemand die je 1 dag toetst, of iemand die je al jaren elke dag ziet? Dat is je leerkracht. = A.",
            nogSimpeler: "Schooladvies = A.",
          },
        },
      },
    ],
  },
  {
    title: "Welke onderdelen zitten erin?",
    explanation: "De Doorstroomtoets heeft **3 hoofdonderdelen**:\n\n**1. Rekenen** *(~50 vragen)*\nWat verwacht je:\n• Optellen, aftrekken, vermenigvuldigen, delen — soms met grote getallen.\n• **Breuken**: optellen, vergelijken, vereenvoudigen.\n• **Procenten**: korting, btw, percentage van.\n• **Verhoudingen** + schaal: 'op een kaart 1:50.000...'\n• **Meten**: oppervlakte, omtrek, volume, gewicht, tijd.\n• **Snelheid**: km/u uitrekenen.\n• **Geld**: euro's en centen, kortingen, uitgaven.\n• **Patronen**: getallenrijen voortzetten.\n\n**2. Taal** *(~50 vragen)*\nWat verwacht je:\n• **Spelling**: d/t-regels, ei/ij, au/ou, hoofdletters, leestekens.\n• **Werkwoordsvormen**: hij wordt, ze loopt, jij werkt.\n• **Grammatica**: persoonlijk vnw (jij/jou/jouw), bijvoeglijk nw, lijdend voorwerp.\n• **Woordenschat**: synoniemen, antoniemen, betekenis van woorden.\n• **Begrijpend lezen**: lange teksten + vragen wat de tekst zegt of bedoelt.\n• **Stijlfiguren**: metafoor, personificatie, vergelijking.\n\n**3. Studievaardigheden** *(~25 vragen)*\nDe minst bekende onderdeel — gaat over **handige skills**:\n• **Woordenboek** of **register** zoeken (waar staat 'X' alfabetisch?).\n• **Kaart** of **grafiek** aflezen.\n• **Tabel** interpreteren.\n• **Inhoudsopgave** of **agenda** gebruiken.\n• **Zoektermen** kiezen voor internet.\n\n**4. (Optioneel) Wereldoriëntatie** *(~25 vragen)*\nNiet alle scholen doen dit, maar handig om te kennen:\n• **Aardrijkskunde**: NL provincies, EU, werelddelen, klimaat.\n• **Geschiedenis**: tijdvakken, WO2, oorlogen, oudheid, Renaissance.\n• **Natuur**: lichaam, dieren, planten, weer, ruimte.\n• **Burgerschap**: democratie, mensenrechten.\n\nIn totaal ~**125 vragen**, gespreid over **3 dagen**. Per dag dus ~40-45 vragen.",
    svg: onderdelenSvg(),
    checks: [
      {
        q: "Hoeveel hoofdonderdelen heeft de Doorstroomtoets meestal?",
        options: ["3 (rekenen, taal, studievaardigheden)","1 (allemaal samen)","5","2"],
        answer: 0,
        wrongHints: [null,"Worden rekenen en taal echt samen op één blaadje gezet, of apart?","Tel eens de hoofdvakken: rekenen, taal, en wat is dat derde ook alweer?","Er is meer dan alleen rekenen + taal — wat hoort daar nog bij?"],
      },
      {
        q: "Wat hoort bij **studievaardigheden**?",
        options: ["Woordenboek + kaart + grafiek aflezen","Spelling + werkwoorden","Optellen + aftrekken","Geschiedenis + aardrijkskunde"],
        answer: 0,
        wrongHints: [null,"In welk vak leer je over werkwoorden en spelling?","In welk vak doe je sommen?","In welk vak leer je over Nederland en de wereld?"],
      },
    ],
  },
  {
    title: "Tijd-management — pacing",
    explanation: "Je hebt **niet onbeperkt tijd** — gemiddeld krijg je **~1 minuut per vraag**. Snelheid is belangrijk, maar niet ten koste van zorgvuldigheid.\n\n**De 3 fases per onderdeel** *(~50 vragen, ~50 minuten)*:\n\n**Fase 1 — Eerste 12-15 vragen** *(de makkelijke)*\nDe toets begint vaak met simpele vragen. Dit zijn de 'gratis' punten. **Doe ze snel** — 30 seconden per vraag — en bewaar tijd voor later. Niet **te snel** dat je dom-fouten maakt!\n\n**Fase 2 — Middelste 25-30 vragen** *(de gewone)*\nNormaal tempo. ~1 minuut per vraag. **Lees goed**, denk na, kies. **Twijfel je tussen 2 opties? Markeer en ga door** (zie volgende stap).\n\n**Fase 3 — Laatste 10-15 vragen** *(de zwaarste)*\nMoeilijkste vragen + tijd om twijfels te checken. **Niet panieken** als je hier ergens vastloopt — sla over en ga door.\n\n**De drie KEY-regels**:\n\n**1. Vastlopen? SKIP.**\nLiever 3 vragen verderop goed dan 5 minuten op 1 vraag dom-staren. Doorstroomtoetsen geven evenveel punten per vraag — een makkelijke is even waardevol als een moeilijke.\n\n**2. Bewaar 5 minuten voor controle.**\nAan het einde: ga snel terug naar de markeerd vragen. Vaak weet je het tweede keer wel.\n\n**3. Vul ALTIJD iets in.**\nGeen vraag leeg laten! Bij Cito krijg je geen aftrek voor verkeerde antwoorden — alleen punten voor goede. Beter een gokje dan niets.\n\n**Trucje voor pacing**: kijk om de 10 vragen op de klok.\n• Vraag 10 → moet ~10 min bezig zijn.\n• Vraag 25 → ~25 min.\n• Vraag 40 → ~40 min.\n• Loop je voor: rustig aan + extra check.\n• Loop je achter: skip moeilijke en kom terug.",
    svg: tijdSvg(),
    checks: [
      {
        q: "Wat doe je als je vastloopt op een moeilijke vraag?",
        options: ["Skippen en aan einde terugkomen","Doorpiekeren tot 't lukt","Willekeurig antwoord en doorgaan","Je leerkracht roepen"],
        answer: 0,
        wrongHints: [null,"Wat kost meer punten: één moeilijke vraag of vijf makkelijke die je niet meer haalt?","Als je écht geen idee hebt is een gokje OK — maar wat doe je eerst als er nog tijd is?","Mag dat tijdens een toets? En wat doe je liever zelf?"],
        uitlegPad: {
          stappen: [
            { titel: "Vastlopen = SKIP", tekst: "Als een vraag te lang duurt, ga door naar de volgende. Kom later terug." },
            { titel: "Waarom?", tekst: "5 min op 1 vraag = 5 makkelijke vragen daarna missen. Tijdsverlies." },
          ],
          woorden: [{ woord: "skippen", uitleg: "Overslaan om later terug te komen." }],
          theorie: "Cito-tijd is strak. Liever 50 vragen aanraken dan 30 met perfectionisme. Aan einde tijd voor twijfels.",
          voorbeelden: [{ type: "tijdverdeling", tekst: "75 min, 50 vragen = 1.5 min/vraag. Vastlopen op 1 vraag mag niet meer dan 2 min." }],
          basiskennis: [{ onderwerp: "Markeer skip", uitleg: "Onderlijn vraagnummer op kladpapier zodat je 'm later terugvindt." }],
          niveaus: {
            basis: "Vastloop = skip + later terug. A.",
            simpeler: "Stel je vast op vraag 8. Doorpiekeren = je verliest tijd voor vraag 9-15. Beter: skip 8, doe 9-15 makkelijk, kom terug op 8. = A.",
            nogSimpeler: "Vast = skip = A.",
          },
        },
      },
      {
        q: "Hoeveel tijd heb je gemiddeld per vraag?",
        options: ["Ongeveer 1 minuut","30 seconden","5 minuten","Onbeperkt"],
        answer: 0,
        wrongHints: [null,"Lukt het je in een halve minuut om een vraag te lezen, te denken én een antwoord te kiezen?","Stel je voor: 50 vragen × dat aantal — past dat in een toetsuur?","Een toets duurt niet eindeloos. Hoeveel tijd zou er per vraag overblijven?"],
        uitlegPad: {
          stappen: [
            { titel: "Reken zelf", tekst: "Toets = ~75 min. Vragen = ~50-60. Per vraag = ongeveer 1 minuut." },
            { titel: "Niet meer, niet minder", tekst: "30 sec = te kort om te denken. 5 min = te lang, dan haal je 't einde niet." },
          ],
          woorden: [{ woord: "pacing", uitleg: "Tempo verdelen — niet te snel, niet te langzaam." }],
          theorie: "Pacing-truc: kijk om de 10 vragen op de klok. Achter? Versnel. Voor? Goed bezig.",
          voorbeelden: [{ type: "pacing", tekst: "Na 10 vragen op klok kijken. Pas 8 min ipv 10? Te snel. 12 min? Te langzaam — versnel." }],
          basiskennis: [{ onderwerp: "Tijd-bewustzijn", uitleg: "Een klok in zicht = essentieel voor pacing." }],
          niveaus: {
            basis: "~1 min per vraag. A.",
            simpeler: "75 min ÷ 50 vragen = 1.5 min per vraag. Reken iets minder voor controle = ~1 min per vraag goed gemiddelde. = A.",
            nogSimpeler: "1 min per vraag = A.",
          },
        },
      },
      {
        q: "Wat doe je als je twijfelt tussen 2 antwoorden en geen tijd hebt?",
        options: ["Gokken — vul iets in","Niets invullen","Klagen bij de leerkracht","Beide invullen"],
        answer: 0,
        wrongHints: [null,"Krijg je strafpunten voor een fout antwoord? En voor leeg laten?","Gaat klagen je een punt opleveren? Wat helpt jou wél verder?","Tellen er meerdere antwoorden, of moet je er één kiezen?"],
        uitlegPad: {
          stappen: [
            { titel: "Twijfel = nog steeds 50% kans", tekst: "Tussen 2 antwoorden = 50% gokkans. Leeg = 0%." },
            { titel: "Wat te doen?", tekst: "Vul gewoon iets in. Geen punten af voor fout — alleen punten voor goed." },
          ],
          woorden: [{ woord: "gokken", uitleg: "Een antwoord kiezen zonder zeker te zijn." }],
          theorie: "Cito straft NIET voor foute antwoorden. Leeg laten = 0 punten gegarandeerd. Gokken = kans op 1 punt. Altijd gokken.",
          voorbeelden: [{ type: "kans", tekst: "Twijfel tussen A en B = 50% goed. Bij 4 onbekend = 25%. Bij 0 invullen = altijd 0%." }],
          basiskennis: [{ onderwerp: "Geen strafpunten", uitleg: "Bij Cito zijn er geen aftrek-punten voor fout." }],
          niveaus: {
            basis: "Gokken = altijd beter dan leeg. A.",
            simpeler: "Stel: leeg = 0 punten. Gokken = misschien 1 punt. Wat kies je? Gokken natuurlijk. = A.",
            nogSimpeler: "Leeg nooit = gokken = A.",
          },
        },
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
        wrongHints: [null,"Als je gokt zonder eerst te denken: hoe groot is je kans dan?","Wat als je het antwoord eigenlijk al weet — sla je dat dan over?","Mag dat tijdens een toets? Wat kun je wél zelf doen?"],
        uitlegPad: {
          stappen: [
            { titel: "Eerst denken, dan kijken", tekst: "Bedenk eerst zelf wat het antwoord IS. Dan vergelijk met opties." },
            { titel: "Waarom?", tekst: "Foute opties zijn slim gemaakt om je te verwarren. Als je eerst kijkt, kies je sneller verkeerd." },
          ],
          woorden: [{ woord: "voor-bedenken", uitleg: "Antwoord eerst zelf bedenken voordat je opties leest." }],
          theorie: "Met eigen antwoord in je hoofd: zoek de optie die DAAR bij past. Anders laat je je beïnvloeden door verleidelijke valstrik-opties.",
          voorbeelden: [{ type: "voorbedenken", tekst: "Vraag: 'Hoofdstad van België?' Eerst denken: 'Brussel'. Dan opties bekijken — Brussel staat erbij = direct kiezen." }],
          basiskennis: [{ onderwerp: "Anti-valstrik", uitleg: "Cito-makers zetten BEWUST verleidelijke foute opties. Voorbedenken beschermt je." }],
          niveaus: {
            basis: "Eerst zelf bedenken. A.",
            simpeler: "Stel: vraag over hoofdstad België. Bedenk EERST 'Brussel' in je hoofd. Daarna kijk je naar opties — je herkent Brussel meteen. Anders laat je je verwarren door 'Antwerpen' of 'Brugge'. = A.",
            nogSimpeler: "Voor-denken = A.",
          },
        },
      },
      {
        q: "Wat is **eliminatie**?",
        options: ["Foute antwoorden uitsluiten","Goede antwoorden zoeken","Vragen weglaten","Snel kiezen"],
        answer: 0,
        wrongHints: [null,"Wat doe je bij eliminatie eerst: zoeken naar de juiste, of fouten wegstrepen?","Lees het woord nog eens: 'eliminatie' — gaat dat over toevoegen of weghalen?","Heeft eliminatie iets te maken met overslaan, of met opties wegstrepen?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is elimineren?", tekst: "= UITSLUITEN. Streep de antwoorden weg die ZEKER fout zijn." },
            { titel: "Wat blijft over?", tekst: "Als je 3 van 4 wegstreept, blijft 1 over = je antwoord. Werkt ook als je 't antwoord niet zeker weet." },
          ],
          woorden: [
            { woord: "eliminatie", uitleg: "Wegstrepen, uitsluiten — verwijderen wat NIET kan." },
          ],
          theorie: "Eliminatie-truc: vaak kun je 2-3 opties herkennen als ZEKER fout. De overgebleven optie = juiste antwoord, ook al wist je 'm niet direct.",
          voorbeelden: [{ type: "elimineren", tekst: "Vraag: 'Hoofdstad België?' Opties: A) Parijs (= FR ✗), B) Brussel, C) Berlijn (= DE ✗), D) Madrid (= ES ✗). 3 weg, 1 over = B." }],
          basiskennis: [{ onderwerp: "Halve kennis = vol antwoord", uitleg: "Je hoeft 't antwoord niet 100% te weten. Genoeg om 3 fouten te herkennen." }],
          niveaus: {
            basis: "Eliminatie = foute antwoorden wegstrepen. A.",
            simpeler: "Stel je weet niet WIE Spider-Man speelt, maar je weet wel dat Brad Pitt 't NIET is. Streep Brad Pitt weg. Doe dat met 3 opties → 1 blijft over. = eliminatie = A.",
            nogSimpeler: "Foute weg = A.",
          },
        },
      },
      {
        q: "Welke woorden in een optie maken hem **verdacht fout**?",
        options: ["'altijd' of 'nooit' (te absoluut)","'meestal'","'vaak'","'soms'"],
        answer: 0,
        wrongHints: [null,"Zijn er uitzonderingen op iets dat 'meestal' gebeurt? En klinkt dat dan verdacht?","Geeft 'vaak' ruimte voor uitzonderingen, of sluit het ze uit?","Klinkt 'soms' streng of voorzichtig — en wat is verdachter in een toets?"],
        uitlegPad: {
          stappen: [
            { titel: "Te absolute woorden = verdacht", tekst: "'Altijd' en 'nooit' zijn EXTREEM. Bijna alles heeft uitzonderingen — dus die opties zijn vaak fout." },
            { titel: "Veiliger woorden", tekst: "'Meestal', 'vaak', 'soms' geven RUIMTE. Daar zit altijd wel waarheid in." },
          ],
          woorden: [
            { woord: "absoluut", uitleg: "Zonder uitzondering. Bv. 'altijd', 'nooit', 'iedereen'." },
            { woord: "uitzondering", uitleg: "Een geval dat anders is dan de regel." },
          ],
          theorie: "Cito-trucje: als 'altijd' of 'nooit' in een optie staat, vraag jezelf: 'is er een uitzondering?'. Bijna altijd = ja → optie is fout.",
          voorbeelden: [{ type: "absoluut", tekst: "'Vogels kunnen ALTIJD vliegen' = fout (pinguïn, struisvogel kunnen niet). 'Vogels kunnen MEESTAL vliegen' = OK." }],
          basiskennis: [{ onderwerp: "Logica van extremen", uitleg: "Extreme uitspraken zijn meestal ongenuanceerd = fout in toetsen." }],
          niveaus: {
            basis: "'Altijd'/'nooit' = verdacht. A.",
            simpeler: "Bijna alles heeft uitzonderingen. Dus 'altijd waar' of 'nooit waar' is bijna nooit het juiste antwoord. Zoek 'meestal', 'vaak', 'soms' — die zijn realistischer. = A.",
            nogSimpeler: "Altijd/nooit = vaak fout = A.",
          },
        },
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
        wrongHints: [null,"Hoeveel tijd verlies je als je elk woord leest van een lange tekst?","Kun je een goed antwoord geven zónder de tekst te bekijken?","Mag dat tijdens een toets — en wat helpt je het meest?"],
        uitlegPad: {
          stappen: [
            { titel: "Skim eerst", tekst: "Snel overzicht via titel + eerste zinnen. ~30 sec." },
            { titel: "Daarna vragen lezen", tekst: "Weet wat je moet vinden voordat je gericht zoekt." },
          ],
          woorden: [{ woord: "skimmen", uitleg: "Snel-overzicht-techniek." }],
          theorie: "Volgorde: skim → vragen → scan voor antwoorden. Anders verlies je tijd.",
          voorbeelden: [{ type: "tijd", tekst: "Skim 30s + vragen 30s = 1 min. Daarna 1 min per vraag = past in 5-7 min totaal." }],
          basiskennis: [{ onderwerp: "Niet woord-voor-woord", uitleg: "Cito-tijd is te kort voor diep-lezen. Slim aanpakken." }],
          niveaus: {
            basis: "Skim + vragen lezen eerst. A.",
            simpeler: "Niet meteen heel artikel lezen. Eerst snel scannen waar het over gaat (skim) + bekijken wat je moet vinden (vragen). Dan gericht zoeken. = A.",
            nogSimpeler: "Skim + vragen = A.",
          },
        },
      },
      {
        q: "Het antwoord op een begrijpend-lezen-vraag staat altijd...",
        options: ["In de tekst (niet in je eigen kennis)","In je rugzak","Bij de uitleg achter","Bij de leerkracht"],
        answer: 0,
        wrongHints: [null,"Heb je je rugzak nodig om antwoord te vinden, of staat het ergens anders?","Staan de antwoorden in de vraag zelf, of moet je nog ergens kijken?","Mag dat tijdens een toets — en is dat hier de bron?"],
        uitlegPad: {
          stappen: [
            { titel: "Antwoord komt uit TEKST", tekst: "Niet uit je eigen kennis, mening, ervaring — alleen uit wat in de tekst staat." },
            { titel: "Waarom?", tekst: "Test of je de TEKST begrijpt, niet of je dingen weet. Eigen kennis kan zelfs verkeerd zijn." },
          ],
          woorden: [{ woord: "tekstgebaseerd", uitleg: "Antwoord komt uit de tekst, niet uit jezelf." }],
          theorie: "Begrijpend-lezen-regel #1: alle antwoorden zijn in de tekst (letterlijk OF logisch af te leiden). Je eigen mening telt niet.",
          voorbeelden: [{ type: "eigen mening", tekst: "Vraag: 'Volgens de schrijver, is roken slecht?' Schrijver kan ANDERE mening hebben dan jij. Antwoord = wat schrijver zegt, niet jouw mening." }],
          basiskennis: [{ onderwerp: "Cito ≠ algemene kennis", uitleg: "Begrijpend lezen test LEEScapaciteit, niet weten." }],
          niveaus: {
            basis: "Antwoord = uit tekst. A.",
            simpeler: "Wat de schrijver zegt geldt — ook al ben je het er niet mee eens. Je eigen kennis of mening telt niet bij begrijpend lezen. = A.",
            nogSimpeler: "Tekst = bron = A.",
          },
        },
      },
      {
        q: "Wat doe je bij een **NIET-vraag** ('Wat staat NIET in de tekst?')",
        options: ["Markeer 'NIET' om niet te missen","Skip 'm","Vraag toelichting","Gokken"],
        answer: 0,
        wrongHints: [null,"Lever je punten in als je 'm overslaat? Wat kan je doen om de NIET niet te missen?","Mag dat tijdens een toets? Hoe pak je 'm zelf aan?","Werkt gokken op een NIET-vraag goed, of is er een slimmer trucje?"],
        uitlegPad: {
          stappen: [
            { titel: "NIET-vraag = strik", tekst: "'NIET' is klein, makkelijk te missen. Mis je 'm = kies je het tegenovergestelde antwoord." },
            { titel: "Markeer", tekst: "Onderlijn 'NIET' in je hoofd of op papier. Loop dan alle 4 opties langs in tekst." },
          ],
          woorden: [{ woord: "markeren", uitleg: "Onderlijnen of omcirkelen om aandacht erop te houden." }],
          theorie: "Bij NIET: 3 opties komen in tekst voor (vink af). 1 niet. Die ENE = antwoord.",
          voorbeelden: [{ type: "checklist", tekst: "Vraag 'Welk dier zit NIET in...': vink elk dier af in tekst. 3 staan er, 1 niet → die niet-staande = antwoord." }],
          basiskennis: [{ onderwerp: "Lees vragen 2x", uitleg: "Vooral bij NIET — anders kies je het tegengestelde." }],
          niveaus: {
            basis: "Onderlijn 'NIET'. A.",
            simpeler: "'NIET' is een klein woord, makkelijk te missen. Onderlijn 'm direct als je 'm ziet — dan vergeet je niet dat je het TEGENGESTELDE zoekt. = A.",
            nogSimpeler: "Markeer NIET = A.",
          },
        },
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
        wrongHints: [null,"Wat zou je tussenstap kunnen zijn om je antwoord te checken voordat je 'm opschrijft?","Hoe weet je of je antwoord ongeveer klopt zónder eerst te denken?","Wat doe je als je gokt zonder schatting — kun je je fout dan ontdekken?"],
        uitlegPad: {
          stappen: [
            { titel: "Schat eerst", tekst: "Bedenk grof: ongeveer hoeveel zou het zijn? Bv. 12% van 85 ≈ 10." },
            { titel: "Waarom?", tekst: "Schatting helpt je dom-foute antwoorden uit te sluiten. Als je antwoord ver van schatting ligt = check je rekenfout." },
          ],
          woorden: [{ woord: "schatten", uitleg: "Grof berekenen — niet exact, wel ongeveer." }],
          theorie: "Schatten via afronding: 12% van 85 → 10% van 85 = 8.5, +20% extra = ~10. Bij optie €1.000 = onmogelijk fout, bij €10 = goed.",
          voorbeelden: [{ type: "schatting", tekst: "Vraag: 19 × 21. Schat: 20 × 20 = 400. Echt antwoord moet rond 400 liggen. Optie 800 = fout, 399 = OK." }],
          basiskennis: [{ onderwerp: "Afronden helpt", uitleg: "Naar tientallen of vijftallen ronden = snel schatten." }],
          niveaus: {
            basis: "Eerst schatten. A.",
            simpeler: "Stel je krijgt 19 × 21. Reken niet meteen — schat eerst: 20 × 20 = 400. Nu weet je: antwoord ligt rond 400. Bij rekenen: check of je antwoord daar bij past. = A.",
            nogSimpeler: "Schat = A.",
          },
        },
      },
      {
        q: "Een rok kost €40 en wordt 25% goedkoper. Wat betaal je?",
        options: ["€30","€35","€20","€50"],
        answer: 0,
        wrongHints: [null,"Reken eerst de korting uit: hoeveel euro is 25% van 40?","Welk deel van 40 betaal je nog na 25% korting? Reken dat eerst uit.","Bij korting wordt het bedrag lager. Welke optie is dan logisch?"],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1 — bereken de korting", tekst: "25% van €40 = €40 × 0,25 = €10 korting." },
            { titel: "Stap 2 — trek af", tekst: "€40 − €10 = €30. Antwoord A." },
            { titel: "Sneltruc", tekst: "25% korting = je betaalt 75%. €40 × 0,75 = €30. Zelfde antwoord." },
          ],
          woorden: [
            { woord: "korting", uitleg: "Bedrag dat van de prijs af gaat." },
            { woord: "procent", uitleg: "Per 100. 25% = 25 per 100 = ¼." },
          ],
          theorie: "**Procent-berekening:**\n• X% van Y = (X/100) × Y\n• 25% = ¼ (delen door 4)\n• 50% = ½ (helft)\n• 10% = ÷10\n\nNa korting: trek af. Snel: bereken (100-X)% van origineel.",
          voorbeelden: [{ type: "korting", tekst: "€80 met 25% korting: ¼ van 80 = 20. Betaal: 80 − 20 = €60. Of 75% × 80 = 60." }],
          basiskennis: [{ onderwerp: "25% = kwart", uitleg: "Onthoud: 25% = ¼, 50% = ½, 75% = ¾." }],
          niveaus: {
            basis: "25% van €40 = €10 korting → €30 betalen. A.",
            simpeler: "Stel: rok €40. 25% korting. ¼ van €40 = €10 (€40 ÷ 4). Trek af: €40 − €10 = €30. = A.",
            nogSimpeler: "€40 − €10 = €30 = A.",
          },
        },
      },
      {
        q: "Wat is het verschil tussen 'hij is 25% goedkoper' en 'hij werd met 25% verhoogd'?",
        options: ["Eerste = -25% (omlaag), tweede = +25% (omhoog)","Geen verschil","Beide = -25%","Beide = +25%"],
        answer: 0,
        wrongHints: [null,"Lees de twee zinnen nog eens. Betekenen 'goedkoper' en 'verhoogd' echt hetzelfde?","Wat doet de prijs als iets goedkoper wordt — gaat hij omhoog of omlaag?","Wat doet de prijs als hij verhoogd wordt — omhoog of omlaag?"],
        uitlegPad: {
          stappen: [
            { titel: "Lees signaalwoorden", tekst: "'Goedkoper' = OMLAAG (-). 'Verhoogd' = OMHOOG (+). Tegengesteld." },
            { titel: "Bij rekensommen", tekst: "Eerst kijken: gaat het bedrag omhoog of omlaag? Dan pas rekenen." },
          ],
          woorden: [
            { woord: "verhoogd", uitleg: "Hoger geworden, omhoog gegaan." },
            { woord: "goedkoper", uitleg: "Lagere prijs, omlaag gegaan." },
          ],
          theorie: "**Cito-strikvragen** spelen vaak met TAAL: zelfde percentage, verschillende richting. Lees zorgvuldig: hoger of lager?\n\nSignaalwoorden:\n• OMLAAG: korting, goedkoper, verlaagd, afgenomen, daling\n• OMHOOG: verhoogd, duurder, toegenomen, stijging, premie",
          voorbeelden: [
            { type: "min", tekst: "€100, 20% goedkoper = €100 − €20 = €80." },
            { type: "plus", tekst: "€100, 20% verhoogd = €100 + €20 = €120." },
          ],
          basiskennis: [{ onderwerp: "Richting eerst", uitleg: "Bepaal eerst HOGER of LAGER, dan reken pas." }],
          niveaus: {
            basis: "Goedkoper = −, verhoogd = +. A.",
            simpeler: "Goedkoper = prijs gaat OMLAAG. Verhoogd = prijs gaat OMHOOG. Helemaal verschillend, ook al is het percentage gelijk. = A.",
            nogSimpeler: "Min vs plus = A.",
          },
        },
      },
    ],
  },
  {
    title: "Eindopdracht — alle strategieën samen",
    explanation: "Tijd om alle strategieën samen toe te passen!\n\n**Snelle samenvatting**:\n\n**Vóór de toets**:\n• Goed slapen — minimaal 8 uur.\n• Ontbijt eten — energie voor je hersenen.\n• Op tijd op school zijn.\n• Pen, gum, potlood mee.\n• **Geen extreem stress** — je bent voorbereid.\n\n**Tijdens de toets**:\n• **Skim** alles eerst (overzicht).\n• **Pacing**: ~1 minuut per vraag, kijk om de 10 vragen op klok.\n• **Vastlopen? SKIP** en kom terug.\n• **Niets leeg** laten — vul altijd iets in.\n• **Eliminatie** voor lastige meerkeuze.\n• **Schat** rekensommen voordat je gaat rekenen.\n• **Lees vragen 2×** — vooral 'NIET'-vragen.\n• Bewaar **5 min** voor controle.\n\n**Na de toets**:\n• **Niet stressen** — je hebt het beste gedaan wat je kon.\n• Toetsadvies komt **medio maart**. Ligt 't toetsadvies hoger dan je schooladvies, dan **moet** de school heroverwegen — vaak gaat advies dan omhoog.\n\n**Zelfvertrouwen-mantra**:\n*'Iedereen 'haalt' de toets. Mijn schooladvies komt eerst. De toets kan alleen helpen, niet schaden. Ik heb het voorbereid en ga gewoon mijn best doen.'*\n\n**Veel succes!**",
    svg: tijdSvg(),
    checks: [
      {
        q: "Wat is de **veiligste** strategie als je tijd hebt voor maar 1 controle-ronde?",
        options: ["Markeer twijfels tijdens, controleer aan einde","Direct alle antwoorden checken","Niets controleren","Volledig herlezen vanaf vraag 1"],
        answer: 0,
        wrongHints: [null,"Heb je tijd om alles opnieuw na te lopen — ook de makkelijke?","Wat als je dit doet en geen tijd meer hebt voor de twijfels?","Hoef je vragen die je zeker wist nog eens te bekijken?"],
        uitlegPad: {
          stappen: [
            { titel: "Markeer tijdens", tekst: "Twijfel tijdens een vraag? Vink het vraagnummer op kladpapier. Ga snel verder." },
            { titel: "Aan einde controle", tekst: "Met overgebleven tijd kijk je alleen naar gemarkeerde twijfels. Niet alle 50 vragen." },
          ],
          woorden: [{ woord: "controleren", uitleg: "Antwoord nog eens checken op fouten." }],
          theorie: "Slimme controle = gericht. Alle 50 antwoorden herlezen = tijdverlies. Alleen jouw twijfels = geconcentreerd én haalbaar.",
          voorbeelden: [{ type: "markeer", tekst: "Tijdens toets: vraag 7, 12, 23 = twijfel. Vink op kladpapier. Aan einde: 5 min over → check alleen 7, 12, 23." }],
          basiskennis: [{ onderwerp: "Tijd voor controle", uitleg: "Plan ~5 min over voor controle aan einde. Niet meer, niet minder." }],
          niveaus: {
            basis: "Markeer twijfels, check aan einde. A.",
            simpeler: "Tijdens toets twijfel je bij sommige vragen. Schrijf die vraagnummers op kladpapier. Aan het eind, met overgebleven tijd, kijk je alleen die nog eens. = A.",
            nogSimpeler: "Markeer + check eind = A.",
          },
        },
      },
      {
        q: "Welke houding is **goed** voor de Doorstroomtoets?",
        options: ["Gewoon mijn best doen, ik ben voorbereid","Stress & paniek — er is veel afhankelijk","Alles vergeten en raden","Iemand anders laten meedoen"],
        answer: 0,
        wrongHints: [null,"Wat doet stress met je hoofd: helpt het je denken of juist niet?","Werkt raden zonder iets uit het hoofd op te halen écht in jouw voordeel?","Mag iemand anders jouw toets maken? En wat zou dat zelfs als het mocht opleveren?"],
        uitlegPad: {
          stappen: [
            { titel: "Mindset", tekst: "Rustig + voorbereid. Niet gespannen. Je hebt 8 jaar geleerd, dat is je basis." },
            { titel: "Waarom?", tekst: "Stress blokkeert je hersenen. Je weet meer dan je in stress kunt ophalen." },
          ],
          woorden: [{ woord: "houding", uitleg: "Hoe je over iets denkt en jezelf erop voorbereidt." }],
          theorie: "Onderzoek: matige spanning helpt prestatie, hoge stress blokkeert. Doel = matige spanning (focus) niet hoge (paniek).\n\nTrucjes:\n- Goed slapen avond ervoor\n- Ontbijt eten\n- Diep ademhalen voor je begint\n- Mantra: 'ik doe gewoon mijn best'",
          voorbeelden: [{ type: "mantra", tekst: "Voor toets: zeg in jezelf 'ik ben voorbereid, ik doe mijn best, dat is genoeg'. Werkt." }],
          basiskennis: [{ onderwerp: "Cito ≠ overleven", uitleg: "Toets = kans om te laten zien wat je kunt. Geen examen waar je voor zakt." }],
          niveaus: {
            basis: "Rustig + best doen. A.",
            simpeler: "Doorstroomtoets = kans om te laten zien wat je kunt. Niet doodstress over. Iedereen 'haalt' Cito (geen zakken). Doe gewoon je best. = A.",
            nogSimpeler: "Rustig + best = A.",
          },
        },
      },
      {
        q: "Doorstroomtoets: wat krijg je als resultaat?",
        options: ["Advies voor vervolg-niveau (vmbo/havo/vwo)","Een eindcijfer als 7,5","Een tijdsregistratie","Niets"],
        answer: 0,
        wrongHints: [null,"Krijg je bij Cito hetzelfde soort cijfer als op je rapport?","Telt hoe snel je was, of vooral wat je antwoordde?","Krijg je echt niets terug, of wel een soort uitkomst?"],
        uitlegPad: {
          stappen: [
            { titel: "Resultaat = ADVIES", tekst: "Cito geeft een ADVIES voor vervolg-niveau (vmbo / havo / vwo). Geen cijfer." },
            { titel: "Wat doe je ermee?", tekst: "Het advies wordt vergeleken met schooladvies. Hoger? School heroverweegt. Lager? Schooladvies blijft." },
          ],
          woorden: [
            { woord: "toetsadvies", uitleg: "Het advies dat de Doorstroomtoets geeft over je vervolg-niveau." },
            { woord: "schooladvies", uitleg: "Het advies van je leerkracht (gegeven in januari)." },
          ],
          theorie: "Cito-resultaat is GEEN rapportcijfer. Geen 7,5. Het is een ADVIES: 'past best bij vmbo-tl' of 'past best bij havo'. Komt medio maart binnen.",
          voorbeelden: [{ type: "advies", tekst: "Schooladvies = vmbo-tl (januari). Cito-advies = havo (februari). School heroverweegt → vaak gaat advies naar havo." }],
          basiskennis: [{ onderwerp: "Geen punt-cijfer", uitleg: "Anders dan rapport: Cito geeft niveau-categorie, geen cijfer." }],
          niveaus: {
            basis: "Cito = advies vervolg-niveau. A.",
            simpeler: "Wat krijg je terug van Cito? Geen 7 of 8. Maar: 'past best bij vmbo' of 'past best bij havo' — een advies voor je middelbare school. = A.",
            nogSimpeler: "Advies = A.",
          },
        },
      },
      {
        q: "Wat is het verschil tussen schooladvies en toetsadvies (sinds 2024)?",
        options: ["Schooladvies komt eerst; bij hoger toetsadvies moet school heroverwegen","Toetsadvies leidend, schooladvies onbelangrijk","Beide gelijk","Geen verschil"],
        answer: 0,
        wrongHints: [null,"Wat is jaren leerkracht-observatie waard versus één toetsdag?","Welk advies krijg je het eerst in groep 8?","Wat zou er gebeuren als één toets meer telt dan jouw hele schoolervaring?"],
        uitlegPad: {
          stappen: [
            { titel: "Volgorde sinds 2024", tekst: "1. Schooladvies (januari) eerst. 2. Doorstroomtoets februari. 3. Toetsadvies maart." },
            { titel: "Wat is leidend?", tekst: "Schooladvies is leidend. Toetsadvies = check + heroverwegingsmogelijkheid bij hoger." },
          ],
          woorden: [
            { woord: "leidend", uitleg: "Doorslaggevend, de basis." },
            { woord: "heroverwegen", uitleg: "Nog eens bekijken om eventueel aan te passen." },
          ],
          theorie: "Sinds 2024 gewijzigde regels:\n- Schooladvies leidend (basis voor middelbaar)\n- Toetsadvies HOGER → school MOET heroverwegen (niet 'kan')\n- Toetsadvies LAGER → schooladvies blijft\n\nDoel: leerkracht-oordeel telt zwaarder dan 1 toetsdag.",
          voorbeelden: [{ type: "heroverweging", tekst: "Schooladvies vmbo-tl + Cito havo → school heroverweegt → vaak naar havo. Andersom (havo-advies + Cito vmbo) blijft havo." }],
          basiskennis: [{ onderwerp: "Twee adviezen", uitleg: "Vroeger: 1 advies. Nu: 2 (school + toets), school telt zwaarder." }],
          niveaus: {
            basis: "Schooladvies eerst + leidend. Toetsadvies kan ophogen. A.",
            simpeler: "Eerst krijg je schooladvies van leerkracht (januari). Dan Cito (februari). Cito-resultaat hoger = school MOET nog eens kijken. Lager = schooladvies blijft. = A.",
            nogSimpeler: "School eerst + Cito-check = A.",
          },
        },
      },
      {
        q: "Wat is **niet handig** te doen tijdens Cito?",
        options: ["Doorpiekeren op 1 vraag tot je het weet","Skippen + later terugkomen","Iets gokken bij twijfel","Eliminatie van foute opties"],
        answer: 0,
        wrongHints: [null,"Verlies je tijd of win je tijd door even verder te gaan?","Helpt iets invullen je punten, of kost het je punten?","Helpt het wegstrepen van foute opties je sneller naar een antwoord?"],
        uitlegPad: {
          stappen: [
            { titel: "Welke is fout?", tekst: "Doorpiekeren op 1 vraag = grote tijdverspilling. De rest van de strategieën (skip, gokken, eliminatie) zijn ALLEMAAL slim." },
            { titel: "Waarom doorpiekeren slecht is", tekst: "5 min op 1 vraag = 5 makkelijke vragen daarna missen. Slechte ruil." },
          ],
          woorden: [{ woord: "doorpiekeren", uitleg: "Eindeloos blijven nadenken zonder resultaat — vastlopen mentaal." }],
          theorie: "Slimme strategieën: skip, gokken, eliminatie, markeren, schatten. Allemaal verstandig. NIET-slim: doorpiekeren / leeg laten / paniekeren.",
          voorbeelden: [{ type: "tijdverlies", tekst: "Vraag 8 = lastig. Doorpiekeren 5 min → vraag 9-15 niet gehaald. = 7 punten verloren voor misschien 1 punt." }],
          basiskennis: [{ onderwerp: "Tijd is kostbaar", uitleg: "Cito-tijd is strak. Elke minuut telt." }],
          niveaus: {
            basis: "Doorpiekeren = niet handig. A.",
            simpeler: "De andere opties (skippen, gokken, eliminatie) zijn allemaal SLIM. Doorpiekeren op 1 vraag = je verliest tijd voor 5 andere. Slechtste optie. = A.",
            nogSimpeler: "Vastlopen = A.",
          },
        },
      },
      {
        q: "Wat doe je 's **avonds voor de Doorstroomtoets**?",
        options: ["Rustig avond, vroeg slapen — geen last-minute studeren","Tot 1 uur 's nachts blokken","Niets — toets is morgen","Veel coffee drinken om wakker te blijven"],
        answer: 0,
        wrongHints: [null,"Klopt — uitgerust = beter scoren. Brein heeft slaap nodig om geheugen vast te zetten.","Tegenovergesteld — last-minute werkt averechts, brein moet rusten.","Klopt deels maar 'niets' is te passief — bedoeling is bewust uitrusten.","Cafeïne stoort slaap = brein werkt slechter."],
        uitlegPad: {
          stappen: [
            { titel: "Slaap = brein-prestatie", tekst: "Wetenschappers tonen: **goede nachtrust voor toets** = beter resultaat dan extra studeren. Brein verwerkt geleerde stof tijdens slaap. 10-12-jarigen hebben **9-10 uur** slaap nodig." },
            { titel: "Avond-routine voor toets", tekst: "**Wel doen**:\n• Vroeg eten (geen zwaar maal)\n• Spullen klaar leggen (potlood, gum, bril, lunch)\n• Iets ontspannends — boek, tekenen, wandeling\n• In bed uiterlijk 21:00\n• Telefoon NIET in slaapkamer (blauw licht verstoort slaap)\n\n**Niet doen**:\n• Tot middernacht oefenen\n• Stress-gesprekken\n• Caffeïne (cola, ijskoffie)\n• Beeldscherm 1 uur voor slapen" },
            { titel: "Cito-feit: prestatie + slaap", tekst: "Onderzoek Universiteit Tilburg: kinderen die <8 uur slapen vóór toets scoorden **15% lager** dan goed-uitgeruste klasgenoten. Studeer-uren < slaap-uren in prestatie-impact. Daarom: **voorbereiding gebeurt WEKEN vooraf, niet avond ervoor**." },
          ],
          woorden: [
            { woord: "consolidatie", uitleg: "Brein-proces waarbij dagelijkse kennis wordt vastgezet in lange-termijn-geheugen. Gebeurt vooral in slaap." },
            { woord: "REM-slaap", uitleg: "Diepe slaap-fase waarin brein leren verwerkt. Cruciaal voor geheugen." },
          ],
          theorie: "Doorstroomtoets-week aanpak:\n• **Week ervoor**: rustige routine, voldoende slaap, lichte herhaling\n• **Avond ervoor**: NIET studeren, vroeg slapen, ontspanning\n• **Ochtend zelf**: gezond ontbijt, op tijd zijn, mentaal rustig\n• **Tijdens toets**: ademen, niet panieken, plan tijd\n\nOuder-tip: maak avond ervoor rustig + warm. Geen druk-makende gesprekken.",
          voorbeelden: [
            { type: "stap", tekst: "Goed scenario: 19:00 eten, 20:00 boek/spel, 20:45 tanden poetsen + slapen-routine, 21:15 in bed. 7:00 wakker = 9u45 slaap." },
          ],
          basiskennis: [{ onderwerp: "Niet stressen", uitleg: "Stress remt brein. Toets is NIET einde van wereld — bij twijfel kunt u (ouder) doorstroomtoets-advies aanvechten." }],
          niveaus: { basis: "Rustig + vroeg slapen. = A.", simpeler: "Avond voor Doorstroomtoets: niet meer studeren, ontspannen, vroeg slapen (9-10 uur). Uitgerust brein scoort beter dan vermoeid brein. = A.", nogSimpeler: "Slapen = A." },
        },
      },
      {
        q: "Wat doe je bij een **lastige rekenvraag** in de Doorstroomtoets als je echt vast loopt?",
        options: ["Slimme schatting + markeren (later terug)","Lang doorrekenen — moet kloppen","Volgende vraag overslaan zonder iets","Foutief antwoord opzettelijk"],
        answer: 0,
        wrongHints: [null,"Klopt — schatting + markeer (?) + door, terugkomen als tijd over.","Tijdverlies — kost te veel andere vragen.","Beter: SCHAT + markeer dan helemaal niets.","Onzin — bewust fout is dom."],
        uitlegPad: {
          stappen: [
            { titel: "De 'schat + markeer + door'-truc", tekst: "Bij lastige vraag (>1 min vast):\n1. **Schat** een redelijk antwoord (vergelijk met opties: welke past qua orde van grootte?)\n2. **Markeer** vraag (rondje om vraag-nummer)\n3. **Ga door** naar volgende\n4. **Kom terug** in laatste 5 minuten als er tijd over is\n\nNooit leeg laten — geschat antwoord = 25% kans op punt vs 0% bij leeg." },
            { titel: "Eliminatie-truc voor rekenvragen", tekst: "Bij meerkeuze 4 opties:\n• **Schat eerst**: ongeveer hoeveel kan het antwoord zijn?\n• **Sluit onmogelijke opties uit** (te groot, te klein, verkeerde eenheid)\n• Vaak blijven 2 plausibele opties over → kans 50% bij gok\n• Soms 1 = direct juiste antwoord\n\nVoorbeeld: '4 × 25 = ?' Opties: 1) 80, 2) 100, 3) 200, 4) 500. Schat 4×25=100 → optie 2." },
            { titel: "Cito-feit: tijd-management", tekst: "Doorstroomtoets ~150 min totaal. **Tip**:\n• Maak eerst **alle makkelijke vragen** (~80% van vragen)\n• Markeer lastige\n• **Laatste 15 min**: terug naar gemarkeerde vragen\n• **Niet panieken** bij 1 lastige — er zijn 100+ vragen, 1 missen heeft minimaal effect" },
          ],
          woorden: [
            { woord: "markeren", uitleg: "Klein tekentje (rondje, kruisje) bij vraag-nummer om later terug te keren." },
            { woord: "eliminatie", uitleg: "Onmogelijke antwoorden uitsluiten om kans op juiste te verhogen." },
            { woord: "schatting", uitleg: "Ongeveer-berekening om grove fout te vermijden + plausibele antwoord te vinden." },
          ],
          theorie: "Doorstroomtoets-strategie:\n1. **Begin** bij vraag 1, ga **op tempo**\n2. Vraag te lastig (>1 min)? **Schat + markeer + door**\n3. **Maak eerste ronde** rust + simpel\n4. **Tweede ronde** terug naar lastige\n5. **Laatste 5 min**: controleer alle antwoorden — niet blanco laten",
          voorbeelden: [
            { type: "stap", tekst: "Vraag: '12,5% van 240 = ?' Opties: 15, 30, 45, 60. Schat: 10% van 240 = 24. 12,5% ≈ 30. Antwoord B." },
          ],
          basiskennis: [{ onderwerp: "Nooit blanco", uitleg: "Bij meerkeuze: ALTIJD invullen. Blanco = zeker 0 punten. Geschat = kans op punt." }],
          niveaus: { basis: "Schatten + markeren. = A.", simpeler: "Lastige vraag: schat antwoord, markeer met rondje, ga door. Kom terug aan einde als tijd over. = A.", nogSimpeler: "Schat + markeer = A." },
        },
      },
      {
        q: "Een **multiple-choice vraag** met 4 opties — je weet 2 antwoorden zeker NIET. Wat doe je?",
        options: ["Gok tussen de 2 overgebleven opties","Geef op + laat leeg","Vraag de buurman","Allebei aanvinken"],
        answer: 0,
        wrongHints: [null,"Klopt — 50% kans op punt is beter dan 0% bij leeg.","Tegenovergesteld — leeg = zeker 0 punt. Gokken = kans.","Niet — dat is spieken, mag niet.","Niet — kan vaak maar 1 optie aanvinken op antwoordblad."],
        uitlegPad: {
          stappen: [
            { titel: "Eliminatie-strategie", tekst: "Bij meerkeuze 4 opties + je weet 2 zeker fout:\n• Optie 1: gokken tussen overgebleven 2 → **50% kans op punt**\n• Optie 2: leeg laten → **0% kans op punt**\n\nWiskundig: gokken is altijd beter dan leeg laten bij MC-toetsen zonder strafpunten. Bij Doorstroomtoets = geen strafpunten." },
            { titel: "Hoe elimineer je?", tekst: "Sluit fout-opties uit op basis van:\n• **Eenheid klopt niet** (vraag in km, antwoord in cm)\n• **Orde van grootte** klopt niet (vraagt 'hoeveel kinderen', antwoord 1.000.000)\n• **Direct tegengesteld** aan wat tekst zegt\n• **Belachelijk** (klopt niet met logica)\n\nVaak blijven 2 plausibele opties — gok tussen die." },
            { titel: "Cito-feit: kans-berekening", tekst: "Bij 4 opties + willekeurige gok:\n• Geen eliminatie: **25%** kans op punt\n• 1 fout eruit: **33%** kans (3 over)\n• 2 fout eruit: **50%** kans (2 over)\n• 3 fout eruit: **100%** kans (= weten welke goed is)\n\nElke eliminatie verhoogt je kans. Doe het altijd!" },
          ],
          woorden: [
            { woord: "eliminatie", uitleg: "Uitsluiten van onmogelijke antwoorden." },
            { woord: "multiple-choice", uitleg: "Vraag met vooraf gegeven antwoord-opties (meestal 3-4)." },
            { woord: "gokken", uitleg: "Antwoord kiezen zonder zeker te weten. Bij elimineren = slimme gok." },
          ],
          theorie: "Wiskundige logica gokken:\n• 25% per vraag bij willekeur\n• 40 vragen × 25% = 10 punten gemiddeld zonder kennis\n• Met half-eliminatie: ~50% × N = veel meer punten\n\nBijdrage aan totaal-score: niet onderschatten.",
          voorbeelden: [
            { type: "stap", tekst: "Vraag: 'Wat is Cito-eindtoets-datum 2027?' Opties: 1) jan, 2) april, 3) juni, 4) sept. Cito is altijd februari → eliminate 3+4. Gok 1 of 2 = 50% kans." },
          ],
          basiskennis: [{ onderwerp: "Nooit blanco bij MC", uitleg: "Bij multiple-choice + geen strafpunten: gokken altijd beter dan blanco. Math achter de logica." }],
          niveaus: { basis: "Gok tussen 2. = A.", simpeler: "Bij MC: weet je 2 opties zeker fout, gok tussen overgebleven 2 = 50% kans op punt. Beter dan leeg (0%). = A.", nogSimpeler: "Gokken = A." },
        },
      },
      {
        q: "Stress vlak voor de toets — wat helpt **direct** om rustig te worden?",
        options: ["Diep ademhalen (4-7-8 techniek)","Veel cafeïne","Klagen tegen klasgenoten","Nog snel studeren"],
        answer: 0,
        wrongHints: [null,"Klopt — 4 sec inademen, 7 sec vasthouden, 8 sec uitademen. Brein kalmeert.","Tegenovergesteld — cafeïne verhoogt hartslag = meer stress-gevoel.","Niet — stress overdraagbaar op anderen.","Geen tijd meer — vergroot stress."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is examen-stress?", tekst: "**Examen-stress** is normaal — lichaam maakt **adrenaline + cortisol** klaar voor 'vechten of vluchten'. Helpt wel scherp + alert. Te veel = verlamt + concentreert slecht.\n\nSymptomen:\n• Hart bonst snel\n• Zweten handen\n• Maag-gevoel ('vlinders')\n• Gedachten malen\n• Vergeten wat je wist" },
            { titel: "4-7-8 ademhalingstruc", tekst: "**4-7-8 techniek** (1 keer = 30 sec):\n1. Adem **4 sec** rustig in door neus\n2. Houd **7 sec** vast\n3. Adem **8 sec** uit door mond\n4. Herhaal 3-4×\n\nWaarom werkt het: vertraagt hartslag, kalmeert zenuwstelsel, verlaagt cortisol. Brein schakelt van 'paniek' naar 'denken'." },
            { titel: "Andere tips bij examen-stress", tekst: "**Direct vóór toets**:\n• 4-7-8 ademhaling\n• Schouders rondschudden\n• Korte wandeling buiten (frisse lucht)\n• Glas water (niet veel)\n• Positieve zelfspraak ('ik kan dit')\n• Klasgenoten vermijden die piekeren\n\n**Langere termijn**:\n• Voldoende slaap\n• Sport tijdens leerweek\n• Niet alles op laatste moment\n• Praten met ouder/leerkracht over zorgen" },
          ],
          woorden: [
            { woord: "examen-stress", uitleg: "Stress-reactie vóór + tijdens een toets. Normaal." },
            { woord: "cortisol", uitleg: "Stress-hormoon. Helpt alert zijn, te veel = verlammend." },
            { woord: "4-7-8", uitleg: "Ademhalingstruc: 4 in, 7 vast, 8 uit. Kalmeert direct." },
          ],
          theorie: "Stress-management Cito:\n• **Erkennen** dat stress normaal is\n• **Ademen** om kalmeren (4-7-8)\n• **Bewegen** om energie kwijt te raken\n• **Praten** als het te veel wordt\n\nNet als sport-prestatie: te gespannen = mindere prestatie. Iets stress = scherp. Veel = verlamd.",
          voorbeelden: [
            { type: "stap", tekst: "Topsporters gebruiken 4-7-8 ademhalingsoefening ook vóór belangrijke wedstrijden — zelfde principe." },
          ],
          basiskennis: [{ onderwerp: "Niet vermijden", uitleg: "Stress vermijden lukt niet helemaal. Wel kun je ermee LEREN omgaan. Helpt levenslang." }],
          niveaus: { basis: "Diep ademen. = A.", simpeler: "Stress vlak voor toets? Doe 4-7-8 ademhaling: 4 sec in, 7 sec vasthouden, 8 sec uit. Kalmeert brein binnen 1 minuut. = A.", nogSimpeler: "Ademhalen = A." },
        },
      },
      { q: "Wat doe je bij een **moeilijke vraag** in de Doorstroomtoets?", options: ["Skip + later terug","Lang puzzelen","Random gokken zonder eliminatie","Stoppen"], answer: 0, wrongHints: [null,"Klopt — tijd-bescherming.","Verbruikt tijd voor makkelijke.","Eerst eliminatie proberen.","Niet — door."] },
      { q: "Bij een **meerkeuze-vraag** met 4 opties: hoeveel kans bij gokken zonder eliminatie?", options: ["25%","50%","100%","0%"], answer: 0, wrongHints: [null,"Klopt — 1 op 4.","Bij 2 opties.","Niet — alleen bij weten.","Wel kans."] },
      { q: "Bij eliminatie van 2 foute opties, hoeveel kans wordt het?", options: ["50%","25%","100%","0%"], answer: 0, wrongHints: [null,"Klopt — 1 van 2 over.","Niet — beter dan dat.","Niet — geen zekerheid.","Wel kans."] },
      { q: "Wat **niet** doen tijdens Doorstroomtoets?", options: ["Antwoorden vergelijken met buurman","Diep ademhalen","Skippen van moeilijke vraag","Pacing controleren"], answer: 0, wrongHints: [null,"Klopt — spieken = diskwalificatie.","Wel goed.","Wel goed.","Wel goed."] },
      { q: "Wat is **pacing**?", options: ["Tempo bewaken zodat je op tijd klaar bent","Snel doorbladeren","Stil zitten","Eten"], answer: 0, wrongHints: [null,"Klopt — kijken hoever je bent.","Niet alleen kijken.","Niet relevant.","Niet relevant."] },
      { q: "Bij **begrijpend lezen-vraag**: wat doe je eerst?", options: ["Vraag lezen, dan tekst doorzoeken","Tekst hardop lezen","Random kiezen","Skippen"], answer: 0, wrongHints: [null,"Klopt — gerichter lezen.","Te traag.","Niet — denk na.","Eerst proberen."] },
      { q: "Bij **rekensom met %**: wat doe je eerst?", options: ["Lezen wat gevraagd wordt","Direct rekenen","Antwoord raden","Stoppen"], answer: 0, wrongHints: [null,"Klopt — context begrijpen.","Niet zonder vraag goed te begrijpen.","Eerst proberen.","Doorgaan."] },
      { q: "Welke **nacht** voor de toets is belangrijk?", options: ["Goed slapen","Tot laat leren","Tot laat gamen","Niet eten"], answer: 0, wrongHints: [null,"Klopt — bewezen prestatie-boost.","Niet — overmatig leren werkt slecht.","Vermoeidheid.","Energie nodig."] },
      { q: "Wat eet je voor de toets?", options: ["Goed ontbijt (volkorenbrood/fruit)","Niets","Veel suiker","Energy-drink"], answer: 0, wrongHints: [null,"Klopt — energie voor uren.","Niet — laag energie.","Crash later.","Te veel cafeïne."] },
      { q: "Bij **twijfel tussen 2 opties**: wat doe je?", options: ["Kies de eerste ingeving en ga door","Lang twijfelen","Beide aanstrepen","Niet kiezen"], answer: 0, wrongHints: [null,"Klopt — bewezen vaak goed.","Tijd weg.","Werkt niet.","Verlies."] },
      { q: "Wat is een **strikvraag**?", options: ["Vraag die zo geschreven is dat je makkelijk fout antwoordt","Vraag over touw","Vraag over magie","Geen vraag"], answer: 0, wrongHints: [null,"Klopt — lezen lezen lezen.","Niet relevant.","Niet relevant.","Wel vraag."] },
      { q: "Bij **negatieve vraag** ('niet'/'behalve') wat doe je extra?", options: ["Onderstreep 'niet' / 'behalve'","Sla over","Random","Stop"], answer: 0, wrongHints: [null,"Klopt — anders verkeerde optie.","Niet zomaar.","Risico.","Niet — doorgaan."] },
      { q: "Hoe **controleer** je je antwoorden achteraf?", options: ["Doe de berekening anders / lees vraag opnieuw","Niet — eerste poging is altijd goed","Vraag aan buurman","Random aanpassen"], answer: 0, wrongHints: [null,"Klopt — 2e check pakt fouten.","Niet altijd.","Niet — spieken.","Slechtste manier."] },
      { q: "Wat is een **mind-blank** tijdens toets?", options: ["Tijdelijk niet meer weten — diep ademhalen helpt","Defect papier","Stroomstoring","Eind toets"], answer: 0, wrongHints: [null,"Klopt — normaal, gaat over.","Niet relevant.","Niet relevant.","Niet relevant."] },
      { q: "Bij **groep 8** Doorstroomtoets gaat over?", options: ["Taal + rekenen + studievaardigheden","Alleen rekenen","Alleen geschiedenis","Engels"], answer: 0, wrongHints: [null,"Klopt — 3 pijlers.","Niet alleen rekenen.","Niet hoofdvak.","Geen Engels-onderdeel."] },
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
  // SLO-referentieniveau (sprint-4 G4a): omvat 1F + 1S in lezen + rekenen
  // — een meta-pad over álle eind-basisschool-domeinen.
  referentieNiveau: "1F/1S",
  sloThema: "Eindtoets — alle domeinen",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
    { id: "schemas-stappenplannen-po", title: "Schema's en stappenplannen", niveau: "po-1F" },
  ],
  intro:
    "Hoe je slim met de Doorstroomtoets omgaat: pacing, eliminatie bij meerkeuze, slimme aanpak voor begrijpend lezen + rekenen, omgaan met twijfel + tijdgebrek. Niet alleen 'kennen', ook 'aanpakken'.",
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
