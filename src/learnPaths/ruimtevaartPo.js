// Leerpad: Ruimtevaart - groep 6-8 wereldoriëntatie.
// Cito-relevant. 1F. 4 stappen.

const stepEmojis = ["🚀", "🌕", "🛰️", "🏆"];

const chapters = [
  { letter: "A", title: "Hoe een raket werkt", emoji: "🚀", from: 0, to: 0 },
  { letter: "B", title: "Maanlanding + Apollo", emoji: "🌕", from: 1, to: 1 },
  { letter: "C", title: "ISS + Mars + SpaceX", emoji: "🛰️", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Hoe werkt een raket?",
    explanation:
      "**Raket** = voertuig dat **boven atmosfeer** kan komen *(de ruimte begint op 100 km hoogte)*.\n\n**Hoe komt raket omhoog?**\n\n**Newton's derde wet** *(actie = reactie)*:\n• Raket duwt **hete gassen naar beneden**.\n• Gassen duwen **raket naar boven**.\n• Net als een ballon die je lekt — vliegt rond want lucht eruit duwt 'm.\n\n**Brandstof**:\n• Vaak **vloeibare waterstof + zuurstof** *(verbranden tot waterdamp)*.\n• Of **kerosine + zuurstof** *(zoals Falcon 9)*.\n• Of **vaste brandstof** *(snel, oncontroleerbaar — boostere)*.\n• **Heel** veel nodig: ~90% van raket-gewicht is brandstof.\n\n**Waarom zo veel brandstof?**\n• **Aantrekkingskracht** van aarde is sterk.\n• Om **uit baan** te ontsnappen: **11,2 km/s** *(40.000 km/u — 'ontsnappingssnelheid')*.\n• Om in **baan rond aarde**: ~7,8 km/s.\n• Tonnen brandstof = explosieve kracht.\n\n**Hoeveel weegt raket?**\n\n**Saturn V** *(Apollo, 1969)*:\n• 110 meter hoog *(zo hoog als Domtoren)*.\n• 3000 ton *(zoals 30 vliegtuigen Boeing 747)*.\n• Krachtigste raket OOIT gebouwd.\n\n**Falcon 9** *(SpaceX, modern)*:\n• 70 meter hoog.\n• 550 ton.\n• Herbruikbaar *(eerste trap landt terug op platform)*.\n\n**Starship** *(SpaceX, nieuwste)*:\n• 120 meter hoog.\n• Bedoeld voor Mars-reis.\n• Test-vluchten 2023-2024.\n\n**Stadia (stages)**:\n• Raket bestaat uit **meerdere delen** *(2-3 stadia)*.\n• Onderste deel = grootste brandstoftank — werkt eerst.\n• Als leeg: **valt af** + tweede deel start.\n• Zo wordt raket steeds **lichter** + bereikt baan.\n\n**Lanceerlocaties belangrijk**:\n• **Cape Canaveral** *(VS, Florida)*: NASA + SpaceX.\n• **Bajkonoer** *(Kazachstan)*: Russische lanceringen.\n• **Kourou** *(Frans-Guyana, Zuid-Amerika)*: ESA *(Europese Ruimtevaart)*.\n• **Wenchang** *(China)*.\n• **Kennedy Space Center** *(VS)*.\n\n**Waarom dicht bij evenaar?**\n• Aarde draait sneller bij evenaar.\n• Geeft raket **extra duwtje** *(gratis snelheid)*.\n\n**Wat is een **astronaut?**\n• Persoon die **naar ruimte** gaat.\n• Russisch: **kosmonaut**.\n• Chinees: **taikonaut**.\n• Eerst militair-piloot, nu ook wetenschapper.\n• Training: 2-3 jaar voor missie.\n• Moet **fysiek + mentaal sterk** zijn.\n\n**Eerste mens in ruimte**:\n• **Joeri Gagarin** *(Sovjet-Unie)*, 12 april 1961.\n• 108 minuten rond aarde.\n• Werd wereldheld.\n\n**Eerste vrouw in ruimte**:\n• **Valentina Teresjkova** *(Sovjet)*, juni 1963.\n• 3 dagen + 70 keer rond aarde.\n\n**Cito-feitje**:\n**Wim de Vries** was de **eerste Nederlander in ruimte** *(1985)*. **Wubbo Ockels** was eerder *(1985, Spacelab)*. Andre Kuipers was 2x in ruimte *(2004 + 2011-12, ISS)*. Geen NL'er op de maan geweest.",
    checks: [
      {
        q: "Welke **wet** doet raket werken?",
        options: ["Newton's 3e wet (actie=reactie)", "Zwaartekracht alleen", "Einstein", "Geen"],
        answer: 0,
        wrongHints: [null, "Wel maar tegen.", "Niet primair.", "Wel."],
      },
      {
        q: "Wat is **ontsnappingssnelheid** vanaf aarde?",
        options: ["~11,2 km/s", "100 km/u", "1 km/s", "100 km/s"],
        answer: 0,
        wrongHints: [null, "Te traag.", "Te traag.", "Te snel."],
      },
      {
        q: "Wie was **eerste mens in ruimte**?",
        options: ["Joeri Gagarin (1961)", "Armstrong", "Aldrin", "Verstappen"],
        answer: 0,
        wrongHints: [null, "Op maan.", "Op maan.", "F1."],
      },
      {
        q: "Waarom **dichtbij evenaar** lanceren?",
        options: ["Aarde draait sneller daar = gratis duwtje", "Mooier weer", "Geen reden", "Goedkoper"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Wel.", "Niet."],
      },
    ],
  },
  {
    title: "Maanlanding + Apollo-missies",
    explanation:
      "**Apollo-programma** *(1961-1972, NASA)*:\n• Doel: **mens op maan** vóór 1970.\n• Bedacht door **John F. Kennedy** *(1961 toespraak: 'We kiezen om naar de maan te gaan...')*.\n• Reactie op Sovjet-voorsprong *(Sputnik 1957, Gagarin 1961)*.\n• Onderdeel **Koude Oorlog-wedloop**.\n\n**Apollo 11** *(juli 1969)*:\n• Eerste maanlanding.\n• Bemanning: **Neil Armstrong**, **Buzz Aldrin**, **Michael Collins**.\n• Collins bleef in baan rond maan.\n• Armstrong + Aldrin daalden in **'Eagle'**-maanmodule.\n• **20 juli 1969** — eerste mens op maan.\n• Armstrong's beroemde woorden:\n*'That's one small step for man, one giant leap for mankind.'*\n*(Een kleine stap voor een mens, een grote sprong voor de mensheid.)*\n• ~600 miljoen mensen keken live mee op TV.\n• Verbleven ~21 uur op maan + 2,5 uur buiten module.\n\n**Wat brachten ze mee?**\n• ~22 kg maanstenen.\n• Onderzoek naar maanbodem.\n• Amerikaanse vlag *(staat nog steeds)*.\n• Plaque: 'Hier kwamen mensen uit aarde voor het eerst op de maan. Juli 1969 n.Chr. We kwamen in vrede voor heel de mensheid.'\n\n**6 succesvolle maanlandingen** *(1969-1972)*:\n• Apollo 11, 12, 14, 15, 16, 17.\n• **12 astronauten** liepen op maan in totaal.\n• Allemaal Amerikaans.\n• Laatste: **Apollo 17, december 1972**.\n• Sindsdien (52 jaar!) **niemand meer op maan**.\n\n**Apollo 13** *(1970)*:\n• Beroemd **mislukken-niet**.\n• Zuurstof-tank explodeerde op weg naar maan.\n• 'Houston, we have a problem.'\n• Bemanning bracht zichzelf veilig terug *(Apollo 13-film 1995 — Tom Hanks)*.\n\n**Bekende maanwandelaars**:\n• **Neil Armstrong** *(1930-2012)*: eerste.\n• **Buzz Aldrin** *(1930+)*: tweede + nog actief in ouderdom.\n• **Pete Conrad** *(Apollo 12)*.\n• **Alan Shepard** *(Apollo 14)*: sloeg golfbal op maan!\n• **John Young + Charlie Duke** *(Apollo 16)*.\n• **Eugene Cernan** *(Apollo 17)*: laatste mens op maan.\n\n**Sovjet-poging**:\n• USSR probeerde ook, lukte niet.\n• Hun **N1-raket** explodeerde 4 keer.\n• Programma gestopt 1974.\n• Apollo won maan-race.\n\n**Wat hebben we ervan geleerd?**\n\n**Wetenschap**:\n• Maan ontstaan: collision met grote planetoïde *(Theia, 4,5 mld jr geleden)* — stukjes maan uit aarde geslagen.\n• Maan = ~4,5 miljard jaar oud.\n• Heeft geen atmosfeer + geen water *(op oppervlak)*.\n• In poolgebied: bevroren water *(in donkere kraters)*.\n\n**Technologie**:\n• Veel uitvindingen door Apollo *(integrated circuit, GPS-voorlopers, memory foam, Velcro-tape)*.\n• ICT-revolutie ontketend.\n\n**Inspiratie**:\n• Generatie wetenschap-fans + ingenieurs.\n• 'Apollo-effect' — focus + samenwerken kan grote doelen halen.\n\n**Argyrosaurus (samenzweerderstheorie)** 🌚:\nSommigen geloven dat Apollo nooit op maan landde *(filmstudio-theorie)*.\n**Niet waar** — bewijzen overweldigend:\n• Russen + China zien Amerikaanse spullen via telescoop.\n• 400.000+ mensen werkten aan project — niemand bekend.\n• Maanstenen analyse uniek.\n• Live TV niet te vervalsen in 1969.\n\n**Cito-feitje**:\nIn **december 2024** is **Artemis** programma actief — NASA wil tegen **2026** opnieuw mensen op maan (eerst vrouw + 1e persoon van kleur). Daarna Mars als doel. SpaceX werkt mee.",
    checks: [
      {
        q: "Wie was **eerste mens op maan**?",
        options: ["Neil Armstrong (20 jul 1969)", "Aldrin", "Gagarin", "Collins"],
        answer: 0,
        wrongHints: [null, "Tweede.", "Eerst in ruimte (niet op maan).", "Bleef in baan."],
      },
      {
        q: "Welke missie was **eerste maanlanding**?",
        options: ["Apollo 11", "Apollo 13", "Sputnik 1", "ISS"],
        answer: 0,
        wrongHints: [null, "Mislukking-die-overleefden.", "Sovjet eerste satelliet.", "Niet maan."],
      },
      {
        q: "Hoeveel mensen liepen **op maan** totaal?",
        options: ["12 (allemaal Amerikaans)", "1", "100", "0"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Wel 12."],
      },
      {
        q: "Wat is **Artemis**?",
        options: ["NASA-programma om opnieuw op maan", "Sterrenstelsel", "Raketnaam alleen", "Sovjet-missie"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Wel raket maar programma.", "Niet."],
      },
    ],
  },
  {
    title: "ISS + Mars + SpaceX + toekomst",
    explanation:
      "**Internationaal Ruimtestation (ISS)** 🛰️:\n• Sinds **1998** in baan rond aarde.\n• ~400 km hoog.\n• ~28.000 km/u snelheid.\n• Rondt aarde **elke 90 minuten** *(16 keer per dag)*.\n• Zo groot als **voetbalveld**.\n• Permanent bewoond door **astronauten** *(meestal 6-7)*.\n• Internationaal: **VS, Rusland, Europa, Japan, Canada** samen.\n• Verblijf: meestal 6 maanden per astronaut.\n• Doel: **onderzoek** in microzwaartekracht *(planten, materialen, medicijnen, menselijk lichaam)*.\n\n**Wat doen astronauten op ISS?**\n• **Experimenten** *(zwaartekracht-effect)*.\n• **Onderhoud** + reparatie.\n• **EVA's** *(spacewalks)* — buiten ISS in pak.\n• Eten + slapen + sporten *(2 uur per dag verplicht tegen spier-verlies)*.\n• Communicatie met aarde *(via VHF + sociale media)*.\n\n**Nederlanders op ISS**:\n• **André Kuipers** *(2004 + 2011-2012)*.\n• Lange missies — 6 maanden tweede keer.\n• Veel kinderboek + voorlichting na missies.\n\n**ISS-toekomst**:\n• Plan om **rond 2030 te ontmantelen** *(uit baan halen)*.\n• China heeft **eigen ruimtestation 'Tiangong'** *(sinds 2021)*.\n• Privé-ruimtestations in ontwikkeling.\n\n**Mars-onderzoek** 🔴:\n\n**Marsverkenners (rovers)** zijn al lang bezig:\n• **Sojourner** *(1997)*: eerste rover.\n• **Spirit + Opportunity** *(2004-2010+)*.\n• **Curiosity** *(2012+, nog actief 2024!)*.\n• **Perseverance** *(2021+)*: zoekt naar tekenen van vroeger leven.\n• **Zhurong** *(China, 2021)*.\n• **Ingenuity** *(2021)*: helikopter op Mars!\n\n**Wat ontdekten we?**\n• Mars heeft **vroeger water** gehad *(rivieren, meren)*.\n• Nu vooral droog + koud *(-60°C gem)*.\n• Atmosfeer dun *(CO₂)*.\n• Twee polen met **ijs**.\n• Misschien **microscopisch leven** ooit *(nooit bewezen)*.\n\n**Mensen naar Mars?**\n• **SpaceX (Elon Musk)** wil tegen **2030-2040** mensen naar Mars.\n• Reisduur: **6-9 maanden** één weg.\n• Terug pas mogelijk na ~2 jaar *(Mars en aarde dichtbij elkaar)*.\n• Veel uitdagingen: stralingsbescherming, leven-ondersteuning, terugreis.\n\n**SpaceX + nieuwe ruimtevaart** 🚀:\n\n**SpaceX** *(Elon Musk, 2002)*:\n• **Eerste privé-bedrijf** dat astronauten naar ruimte stuurde *(2020)*.\n• **Falcon 9**: herbruikbaar — landt terug.\n• **Crew Dragon**: bemand naar ISS.\n• **Starlink**: 6000+ satellieten voor internet wereldwijd.\n• **Starship**: enorm + voor Mars.\n\n**Andere private-ruimtevaart-bedrijven**:\n• **Blue Origin** *(Jeff Bezos)*: ruimtetoerisme.\n• **Virgin Galactic** *(Richard Branson)*: korte ruimtevluchten.\n• **Rocket Lab**: kleine raketten.\n\n**Ruimtetoerisme** 🎫:\n• Sinds 2021 echt mogelijk *(maar duur — $250.000+ per stoel)*.\n• Eerste toeristen: Branson, Bezos, en betalende klanten.\n• Korte vluchten net boven 100 km.\n\n**Ruimte-puzzles** *(open vragen)*:\n• Bestaat **leven elders**?\n• **Donkere materie + energie** — 95% van heelal mysterieus.\n• Hoe is **heelal ontstaan**? *(Oerknal-theorie)*\n• **Bewoonbare planeten** elders? Telescopen vinden er steeds meer *(exoplaneten)*.\n\n**James Webb-telescoop (JWST)**:\n• Gelanceerd 2021.\n• 1,5 miljoen km van aarde.\n• Kijkt 13,5 miljard jaar terug in tijd *(naar eerste sterren)*.\n• Vindt water + atmosfeer in exoplaneten.\n\n**Reden om naar ruimte te gaan?**\n• **Wetenschap** *(begrijp universum)*.\n• **Technologie-ontwikkeling**.\n• **Inspiratie + dromen**.\n• **'Plan B'** als aarde onbewoonbaar wordt.\n• **Rijke materialen** in asteroïden *(toekomst-mijnbouw)*.\n• **Toerisme + zaken**.\n\n**Cito-feitje**:\nDe **'overlord-foto'** van **aarde vanuit ruimte** *(door Apollo 8, kerstdag 1968 — 'Earthrise')* veranderde hoe mensen naar planeet keken. Maakte mensen zich bewust hoe **klein** + **kwetsbaar** aarde is — versterkte milieubeweging. Wereldberoemd plaatje.",
    checks: [
      {
        q: "Hoe lang doet **ISS** over een rondje aarde?",
        options: ["~90 minuten", "24 uur", "1 maand", "Een jaar"],
        answer: 0,
        wrongHints: [null, "Wel — onze dag.", "Niet.", "Niet."],
      },
      {
        q: "Welke **rover** is sinds 2012 actief op Mars?",
        options: ["Curiosity", "Sojourner", "Perseverance", "Ingenuity"],
        answer: 0,
        wrongHints: [null, "1997.", "2021.", "Helikopter."],
      },
      {
        q: "Wie wil **mensen naar Mars**?",
        options: ["SpaceX / Elon Musk", "NASA alleen", "ESA", "Niemand"],
        answer: 0,
        wrongHints: [null, "Wel maar SpaceX leidt.", "Wel maar niet leidt.", "Wel."],
      },
      {
        q: "Wat is **James Webb Telescoop**?",
        options: ["Telescoop 1,5 mln km van aarde (2021)", "ISS-onderdeel", "Raket", "Auto"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — ruimtevaart mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Eerste **mens op maan**?", options: ["Neil Armstrong (1969)", "Aldrin", "Gagarin", "Kuipers"], answer: 0, wrongHints: [null, "Tweede.", "Niet maan.", "NL — niet maan."] },
      { q: "Eerste **mens in ruimte**?", options: ["Joeri Gagarin (1961)", "Armstrong", "Teresjkova", "Kuipers"], answer: 0, wrongHints: [null, "Maan, niet eerste in ruimte.", "Eerste vrouw.", "NL."] },
      { q: "Hoeveel mensen **op maan** totaal?", options: ["12", "0", "100", "1"], answer: 0, wrongHints: [null, "Wel.", "Te veel.", "Te weinig."] },
      { q: "**Apollo 11** wanneer?", options: ["1969", "1957", "1989", "2020"], answer: 0, wrongHints: [null, "Sputnik.", "Niet.", "Recent."] },
      { q: "**ISS** = ?", options: ["Internationaal ruimtestation in baan", "Raket", "Maan", "Mars-rover"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "NL-astronaut **André Kuipers** ging 2x naar?", options: ["ISS", "Maan", "Mars", "Sun"], answer: 0, wrongHints: [null, "Geen NL'er op maan.", "Onbemand.", "Onmogelijk."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const ruimtevaartPo = {
  id: "ruimtevaart-po",
  title: "Ruimtevaart (Cito groep 6-8)",
  emoji: "🚀",
  level: "groep6-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / sterrenkunde",
  prerequisites: [
    { id: "sterren-planeten", title: "Sterren + planeten", niveau: "1F" },
  ],
  intro:
    "Ruimtevaart voor Cito groep 6-8 — hoe raket werkt (Newton's 3e wet, brandstof, lanceerlocaties) + maanlanding Apollo 11 (Armstrong/Aldrin 1969) + ISS (sinds 1998, André Kuipers) + Mars-rovers + SpaceX/Musk + James Webb telescoop + Artemis (terug naar maan 2026). Sluit op sterren-planeten. ~15 min.",
  triggerKeywords: [
    "ruimtevaart", "ruimte", "raket",
    "Newton derde wet", "ontsnappingssnelheid",
    "maan", "maanlanding",
    "Armstrong", "Aldrin", "Apollo 11", "Apollo 13",
    "Joeri Gagarin", "kosmonaut",
    "ISS", "ruimtestation", "André Kuipers",
    "Mars", "Curiosity", "Perseverance",
    "SpaceX", "Elon Musk", "Starship",
    "James Webb", "Artemis",
  ],
  chapters,
  steps,
};

export default ruimtevaartPo;
