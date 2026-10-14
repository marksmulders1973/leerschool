// Leerpad: Ruimtevaart - groep 6-8 wereldoriëntatie.
// toets-relevant. 1F. 4 stappen.

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
      "**Raket** = voertuig dat **boven atmosfeer** kan komen *(de ruimte begint op 100 km hoogte)*.\n\n**Hoe komt raket omhoog?**\n\n**Newton's derde wet** *(actie = reactie)*:\n• Raket duwt **hete gassen naar beneden**.\n• Gassen duwen **raket naar boven**.\n• Net als een ballon die je loslaat: de lucht spuit eruit en duwt 'm vooruit.\n\n**Brandstof**:\n• Vaak **vloeibare waterstof + zuurstof** *(verbranden tot waterdamp)*.\n• Of **kerosine + zuurstof** *(zoals Falcon 9)*.\n• Of **vaste brandstof** *(veel kracht, niet uit te zetten — boosters)*.\n• **Heel** veel nodig: ~90% van raket-gewicht is brandstof.\n\n**Waarom zo veel brandstof?**\n• **Aantrekkingskracht** van aarde is sterk.\n• Om aan de **aarde** te ontsnappen: **11,2 km/s** *(40.000 km/u — 'ontsnappingssnelheid')*.\n• Om in **baan rond aarde**: ~7,8 km/s.\n• Tonnen brandstof = explosieve kracht.\n\n**Hoeveel weegt raket?**\n\n**Saturn V** *(Apollo, 1969)*:\n• 110 meter hoog *(zo hoog als Domtoren)*.\n• 3000 ton *(zo zwaar als ~7 volle Boeing 747's)*.\n• Lange tijd de krachtigste raket ooit.\n\n**Falcon 9** *(SpaceX, modern)*:\n• 70 meter hoog.\n• 550 ton.\n• Herbruikbaar *(eerste trap landt terug op platform)*.\n\n**Starship** *(SpaceX, nieuwste)*:\n• 120 meter hoog.\n• Bedoeld voor Mars-reis.\n• Test-vluchten sinds 2023.\n\n**Stadia (stages)**:\n• Raket bestaat uit **meerdere delen** *(2-3 stadia)*.\n• Onderste deel = grootste brandstoftank — werkt eerst.\n• Als leeg: **valt af** + tweede deel start.\n• Zo wordt raket steeds **lichter** + bereikt baan.\n\n**Lanceerlocaties belangrijk**:\n• **Cape Canaveral** *(VS, Florida)*: NASA + SpaceX.\n• **Bajkonoer** *(Kazachstan)*: Russische lanceringen.\n• **Kourou** *(Frans-Guyana, Zuid-Amerika)*: ESA *(Europees Ruimteagentschap)*.\n• **Wenchang** *(China)*.\n• **Kennedy Space Center** *(VS)*.\n\n**Waarom dicht bij evenaar?**\n• Aarde draait sneller bij evenaar.\n• Geeft raket **extra duwtje** *(gratis snelheid)*.\n\n**Wat is een **astronaut?**\n• Persoon die **naar ruimte** gaat.\n• Russisch: **kosmonaut**.\n• Chinees: **taikonaut**.\n• Eerst militair-piloot, nu ook wetenschapper.\n• Training: 2-3 jaar voor missie.\n• Moet **fysiek + mentaal sterk** zijn.\n\n**Eerste mens in ruimte**:\n• **Joeri Gagarin** *(Sovjet-Unie)*, 12 april 1961.\n• 108 minuten rond aarde.\n• Werd wereldheld.\n\n**Eerste vrouw in ruimte**:\n• **Valentina Teresjkova** *(Sovjet)*, juni 1963.\n• 3 dagen + 48 keer rond aarde.\n\n**Toets-feitje**:\n**Wubbo Ockels** was de **eerste Nederlander in de ruimte** *(1985, Spacelab)*. André Kuipers was 2x in de ruimte *(2004 + 2011-12, ISS)*. Geen NL'er op de maan geweest.",
    checks: [
      {
        q: "Door welke **wet** werkt een raket?",
        options: ["Newtons 3e wet", "Newtons 1e wet", "De wet van Archimedes", "De wet van de zwaartekracht"],
        answer: 0,
        wrongHints: [null, "De 1e wet gaat over iets dat stil blijft liggen of doorrolt. Welke wet gaat over duwen en terugduwen?", "Archimedes gaat over drijven in water. Een raket drijft niet.", "De zwaartekracht trekt de raket juist naar beneden."],
      },
      {
        q: "Wat is **ontsnappingssnelheid** vanaf aarde?",
        options: ["~11,2 km/s", "~1,1 km/s", "~112 km/s", "~11,2 km/u"],
        answer: 0,
        wrongHints: [null, "Zo traag kom je niet los van de aarde: dat is nog geen 4000 km per uur.", "Zo snel hoeft het niet. Kijk nog eens naar de komma.", "11,2 km per uur is fietstempo! Kijk naar de eenheid."],
      },
      {
        q: "Wie was de **eerste mens in de ruimte**?",
        options: ["Joeri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Valentina Teresjkova"],
        answer: 0,
        wrongHints: [null, "Neil Armstrong ging pas in de jaren '60 voor het eerst de ruimte in. Iemand anders was eerder.", "Buzz Aldrin ging pas in 1966 voor het eerst de ruimte in.", "Valentina Teresjkova was in 1963 de eerste vrouw in de ruimte. Een man was nog eerder."],
      },
      {
        q: "Waarom lanceer je een raket het liefst **dicht bij de evenaar**?",
        options: ["De aarde draait daar sneller", "Er is daar mooier weer", "De zwaartekracht is daar sterker", "Er is daar minder vliegverkeer"],
        answer: 0,
        wrongHints: [null, "Goed weer helpt, maar ook elders kan het mooi weer zijn. Wat is er bijzonder aan de evenaar?", "Was de zwaartekracht sterker, dan zou lanceren juist moeilijker zijn.", "Vliegtuigen hebben er niets mee te maken."],
      },
    ],
  },
  {
    title: "Maanlanding + Apollo-missies",
    explanation:
      "**Apollo-programma** *(1961-1972, NASA)*:\n• Doel: **mens op maan** vóór 1970.\n• Bedacht door **John F. Kennedy** *(1962 toespraak: 'We kiezen om naar de maan te gaan...')*.\n• Reactie op Sovjet-voorsprong *(Sputnik 1957, Gagarin 1961)*.\n• Onderdeel **Koude Oorlog-wedloop**.\n\n**Apollo 11** *(juli 1969)*:\n• Eerste maanlanding.\n• Bemanning: **Neil Armstrong**, **Buzz Aldrin**, **Michael Collins**.\n• Collins bleef in baan rond maan.\n• Armstrong + Aldrin daalden in **'Eagle'**-maanmodule.\n• **20 juli 1969** — eerste mens op maan.\n• Armstrong's beroemde woorden:\n*'That's one small step for man, one giant leap for mankind.'*\n*(Een kleine stap voor een mens, een grote sprong voor de mensheid.)*\n• ~600 miljoen mensen keken live mee op TV.\n• Verbleven ~21 uur op maan + 2,5 uur buiten module.\n\n**Wat brachten ze mee?**\n• ~22 kg maanstenen.\n• Onderzoek naar maanbodem.\n• Amerikaanse vlag.\n• Plaque: 'Hier kwamen mensen uit aarde voor het eerst op de maan. Juli 1969 n.Chr. We kwamen in vrede voor heel de mensheid.'\n\n**6 succesvolle maanlandingen** *(1969-1972)*:\n• Apollo 11, 12, 14, 15, 16, 17.\n• **12 astronauten** liepen op maan in totaal.\n• Allemaal Amerikaans.\n• Laatste: **Apollo 17, december 1972**.\n• Sindsdien (ruim 50 jaar!) **niemand meer op maan**.\n\n**Apollo 13** *(1970)*:\n• Beroemde **'geslaagde mislukking'**.\n• Zuurstof-tank explodeerde op weg naar maan.\n• 'Houston, we have a problem.'\n• Bemanning kwam toch veilig terug *(Apollo 13-film 1995 — Tom Hanks)*.\n\n**Bekende maanwandelaars**:\n• **Neil Armstrong** *(1930-2012)*: eerste.\n• **Buzz Aldrin** *(geb. 1930)*: tweede.\n• **Pete Conrad** *(Apollo 12)*.\n• **Alan Shepard** *(Apollo 14)*: sloeg golfbal op maan!\n• **John Young + Charlie Duke** *(Apollo 16)*.\n• **Eugene Cernan** *(Apollo 17)*: laatste mens op maan.\n\n**Sovjet-poging**:\n• USSR probeerde ook, lukte niet.\n• Hun **N1-raket** explodeerde 4 keer.\n• Programma gestopt 1974.\n• Apollo won maan-race.\n\n**Wat hebben we ervan geleerd?**\n\n**Wetenschap**:\n• Maan ontstaan: botsing van aarde met hemellichaam *(Theia, 4,5 mld jr geleden)* — brokstukken vormden de maan.\n• Maan = ~4,5 miljard jaar oud.\n• Heeft geen atmosfeer + geen water *(op oppervlak)*.\n• In poolgebied: bevroren water *(in donkere kraters)*.\n\n**Technologie**:\n• Apollo versnelde veel techniek *(o.a. computerchips)*.\n• Gaf computertechniek een flinke duw.\n\n**Inspiratie**:\n• Generatie wetenschap-fans + ingenieurs.\n• 'Apollo-effect' — focus + samenwerken kan grote doelen halen.\n\n**Complottheorie** 🌚:\nSommigen geloven dat Apollo nooit op maan landde *(filmstudio-theorie)*.\n**Niet waar** — bewijzen overweldigend:\n• Satellieten rond de maan fotografeerden de landingsplekken.\n• 400.000+ mensen werkten eraan — niemand heeft bedrog bekend.\n• Maanstenen analyse uniek.\n• Live TV niet te vervalsen in 1969.\n\n**Toets-feitje**:\nMet het **Artemis**-programma wil NASA de komende jaren opnieuw mensen op de maan zetten (o.a. de eerste vrouw). Daarna Mars als doel. SpaceX werkt mee.",
    checks: [
      {
        q: "Wie was de **eerste mens op de maan**?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Joeri Gagarin", "Michael Collins"],
        answer: 0,
        wrongHints: [null, "Buzz Aldrin stapte als tweede uit.", "Joeri Gagarin is nooit op de maan geweest.", "Michael Collins bleef in de capsule rond de maan vliegen."],
      },
      {
        q: "Bij welke missie was de **eerste maanlanding**?",
        options: ["Apollo 11", "Apollo 13", "Sputnik 1", "Apollo 8"],
        answer: 0,
        wrongHints: [null, "Die landde juist níét op de maan.", "Sputnik 1 was de eerste satelliet, zonder mensen aan boord.", "Apollo 8 vloog rond de maan, maar landde niet."],
      },
      {
        q: "Hoeveel mensen hebben in totaal **op de maan** gelopen?",
        options: ["12", "2", "6", "24"],
        answer: 0,
        wrongHints: [null, "Bij de eerste landing liepen er twee. Daarna volgden er meer landingen.", "Zes is het aantal landingen. Hoeveel mensen stapten er per keer uit?", "24 mensen vlogen naar de maan, maar niet iedereen stapte uit."],
      },
      {
        q: "Wat is **Artemis**?",
        options: ["Een NASA-plan om terug naar de maan te gaan", "Een sterrenstelsel ver weg in het heelal", "Een Russisch plan om naar Mars te gaan", "Een Chinees ruimtestation rond de aarde"],
        answer: 0,
        wrongHints: [null, "Het gaat om ruimtevaart, niet om sterren.", "Het is geen Russisch plan.", "Het station van China heet Tiangong."],
      },
    ],
  },
  {
    title: "ISS + Mars + SpaceX + toekomst",
    explanation:
      "**Internationaal Ruimtestation (ISS)** 🛰️:\n• Sinds **1998** in baan rond aarde.\n• ~400 km hoog.\n• ~28.000 km/u snelheid.\n• Rondt aarde **elke 90 minuten** *(16 keer per dag)*.\n• Zo groot als **voetbalveld**.\n• Permanent bewoond door **astronauten** *(meestal 6-7)*.\n• Internationaal: **VS, Rusland, Europa, Japan, Canada** samen.\n• Verblijf: meestal 6 maanden per astronaut.\n• Doel: **onderzoek** in microzwaartekracht *(planten, materialen, medicijnen, menselijk lichaam)*.\n\n**Wat doen astronauten op ISS?**\n• **Experimenten** *(zwaartekracht-effect)*.\n• **Onderhoud** + reparatie.\n• **EVA's** *(spacewalks)* — buiten ISS in pak.\n• Eten + slapen + sporten *(2 uur per dag verplicht tegen spier-verlies)*.\n• Communicatie met aarde *(via radio + video)*.\n\n**Nederlanders op ISS**:\n• **André Kuipers** *(2004 + 2011-2012)*.\n• Lange missies — 6 maanden tweede keer.\n• Veel voorlichting aan kinderen na missies.\n\n**ISS-toekomst**:\n• Plan om **rond 2030 te ontmantelen** *(uit baan halen)*.\n• China heeft **eigen ruimtestation 'Tiangong'** *(sinds 2021)*.\n• Privé-ruimtestations in ontwikkeling.\n\n**Mars-onderzoek** 🔴:\n\n**Marsverkenners (rovers)** zijn al lang bezig:\n• **Sojourner** *(1997)*: eerste rover.\n• **Spirit + Opportunity** *(2004-2010+)*.\n• **Curiosity** *(2012+, jarenlang actief!)*.\n• **Perseverance** *(2021+)*: zoekt naar tekenen van vroeger leven.\n• **Zhurong** *(China, 2021)*.\n• **Ingenuity** *(2021)*: helikopter op Mars!\n\n**Wat ontdekten we?**\n• Mars heeft **vroeger water** gehad *(rivieren, meren)*.\n• Nu vooral droog + koud *(-60°C gem)*.\n• Atmosfeer dun *(CO₂)*.\n• Twee polen met **ijs**.\n• Misschien **microscopisch leven** ooit *(nooit bewezen)*.\n\n**Mensen naar Mars?**\n• **SpaceX (Elon Musk)** wil tegen **2030-2040** mensen naar Mars.\n• Reisduur: **6-9 maanden** één weg.\n• Terug pas mogelijk na ~2 jaar *(als Mars en aarde weer dichtbij staan)*.\n• Veel uitdagingen: stralingsbescherming, leven-ondersteuning, terugreis.\n\n**SpaceX + nieuwe ruimtevaart** 🚀:\n\n**SpaceX** *(Elon Musk, 2002)*:\n• **Eerste privé-bedrijf** dat astronauten naar ruimte stuurde *(2020)*.\n• **Falcon 9**: herbruikbaar — landt terug.\n• **Crew Dragon**: bemand naar ISS.\n• **Starlink**: duizenden satellieten voor internet.\n• **Starship**: enorm + voor Mars.\n\n**Andere private-ruimtevaart-bedrijven**:\n• **Blue Origin** *(Jeff Bezos)*: ruimtetoerisme.\n• **Virgin Galactic** *(Richard Branson)*: korte ruimtevluchten.\n• **Rocket Lab**: kleine raketten.\n\n**Ruimtetoerisme** 🎫:\n• Sinds 2021 vaker mogelijk *(maar duur — $250.000+ per stoel)*.\n• Eerste toeristen: Branson, Bezos, en betalende klanten.\n• Korte vluchten net boven 100 km.\n\n**Ruimte-puzzles** *(open vragen)*:\n• Bestaat **leven elders**?\n• **Donkere materie + energie** — 95% van heelal mysterieus.\n• Hoe is **heelal ontstaan**? *(Oerknal-theorie)*\n• **Bewoonbare planeten** elders? Telescopen vinden er steeds meer *(exoplaneten)*.\n\n**James Webb-telescoop (JWST)**:\n• Gelanceerd 2021.\n• 1,5 miljoen km van aarde.\n• Kijkt 13,5 miljard jaar terug in tijd *(naar eerste sterren)*.\n• Vindt water + atmosfeer in exoplaneten.\n\n**Reden om naar ruimte te gaan?**\n• **Wetenschap** *(begrijp universum)*.\n• **Technologie-ontwikkeling**.\n• **Inspiratie + dromen**.\n• **'Plan B'** als aarde onbewoonbaar wordt.\n• **Rijke materialen** in asteroïden *(toekomst-mijnbouw)*.\n• **Toerisme + zaken**.\n\n**Toets-feitje**:\nDe beroemde foto van **aarde vanuit ruimte** *(door Apollo 8, kerstavond 1968 — 'Earthrise')* veranderde hoe mensen naar planeet keken. Maakte mensen zich bewust hoe **klein** + **kwetsbaar** aarde is — versterkte milieubeweging. Wereldberoemd plaatje.",
    checks: [
      {
        q: "Hoe lang doet het **ISS** over een rondje om de aarde?",
        options: ["~90 minuten", "24 uur", "~9 uur", "~1 week"],
        answer: 0,
        wrongHints: [null, "In 24 uur draait de aarde één keer om zichzelf. Het ISS gaat veel sneller.", "Nog veel sneller: het ISS vliegt zo'n 28.000 km per uur.", "Veel sneller: astronauten zien elke dag meer dan 15 keer de zon opkomen."],
      },
      {
        q: "Welke **rover** is sinds 2012 actief op Mars?",
        options: ["Curiosity", "Sojourner", "Perseverance", "Ingenuity"],
        answer: 0,
        wrongHints: [null, "1997.", "2021.", "Helikopter."],
      },
      {
        q: "Welk **bedrijf** wil met de raket Starship mensen naar Mars brengen?",
        options: ["SpaceX", "Virgin Galactic", "Rocket Lab", "Blue Origin"],
        answer: 0,
        wrongHints: [null, "Dat bedrijf doet korte toeristenvluchten.", "Dat bedrijf maakt kleine raketten.", "Blue Origin bouwt ook raketten, maar Starship is niet van hen."],
      },
      {
        q: "Wat is **James Webb** (gelanceerd in 2021)?",
        options: ["Een ruimtetelescoop", "Een onderdeel van het ISS", "Een raket van NASA", "Een robotwagen op Mars"],
        answer: 0,
        wrongHints: [null, "In het ISS wonen astronauten — James Webb hoort daar niet bij.", "Een raket brengt dingen omhoog — wat werd er in 2021 zélf omhoog gebracht?", "Een robotwagen rijdt over een planeet. Waarmee kijk je diep het heelal in?"],
      },
    ],
  },
  {
    title: "Eind-toets — ruimtevaart mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wie zette als eerste mens een voet op de **maan**?", options: ["Neil Armstrong", "Buzz Aldrin", "Joeri Gagarin", "André Kuipers"], answer: 0, wrongHints: [null, "Buzz Aldrin stapte als tweede uit.", "Joeri Gagarin is nooit op de maan geweest.", "Er is nog nooit een Nederlander op de maan geweest."] },
      { q: "Wie ging als eerste mens de **ruimte** in?", options: ["Joeri Gagarin", "Neil Armstrong", "Valentina Teresjkova", "André Kuipers"], answer: 0, wrongHints: [null, "Neil Armstrong ging pas in de jaren '60 de ruimte in. Iemand anders was eerder.", "Valentina Teresjkova was de eerste vrouw in de ruimte. Een man was nog eerder.", "André Kuipers ging pas in 2004 de ruimte in."] },
      { q: "Hoeveel mensen liepen er in totaal **op de maan**?", options: ["12", "3", "6", "20"], answer: 0, wrongHints: [null, "Bij één landing stapten er twee uit, en er waren meer landingen.", "Zes is het aantal landingen. Hoeveel mensen stapten er per keer uit?", "Zoveel waren het er niet."] },
      { q: "In welk jaar landde **Apollo 11** op de maan?", options: ["1969", "1957", "1979", "1961"], answer: 0, wrongHints: [null, "In 1957 ging de eerste satelliet, Sputnik, de ruimte in.", "In 1979 waren de maanreizen al voorbij.", "In 1961 ging de eerste mens de ruimte in. De maanlanding kwam later."] },
      { q: "Wat is het **ISS**?", options: ["Internationaal ruimtestation in baan", "Raket die naar de maan vliegt", "Natuurlijke maan van de aarde", "Robotwagen die op Mars rijdt"], answer: 0, wrongHints: [null, "Een raket vliegt op en neer — waar verblijven astronauten maandenlang?", "De maan is een natuurlijk hemellichaam — het ISS is door mensen gebouwd.", "Rovers rijden op een planeet — waar draait het ISS omheen?"] },
      { q: "Waar ging de Nederlandse astronaut **André Kuipers** twee keer naartoe?", options: ["ISS", "Maan", "Mars", "Ruimtestation Mir"], answer: 0, wrongHints: [null, "Er is nog nooit een Nederlander op de maan geweest.", "Naar Mars zijn nog nooit mensen gegaan.", "Het Russische station Mir bestond toen al niet meer."] },
      { q: "Welke **planeet** is het **dichtst bij de zon**?", options: ["Mercurius", "Venus", "Mars", "Aarde"], answer: 0, wrongHints: [null, "Tweede.", "Vierde.", "Derde."] },
      { q: "Welke planeet wordt de **rode planeet** genoemd?", options: ["Mars", "Jupiter", "Venus", "Saturnus"], answer: 0, wrongHints: [null, "Grootste — bruin.", "Helderste — geelwit.", "Saturnus is geelachtig van kleur."] },
      { q: "Hoeveel **manen** heeft de **Aarde**?", options: ["1", "0", "2", "3"], answer: 0, wrongHints: [null, "Kijk 's nachts omhoog. Wat zie je dan vaak aan de hemel?", "Mars heeft twee maantjes. De aarde ook?", "Zoveel manen heeft de aarde niet."] },
      { q: "Wat is een **lichtjaar**?", options: ["De afstand die licht in 1 jaar aflegt", "Een jaar waarin het altijd licht is", "De tijd die een ster blijft branden", "Een jaar op een andere planeet"], answer: 0, wrongHints: [null, "Een lichtjaar gaat niet over hoe licht het is.", "Hoe lang een ster brandt, heeft een andere naam.", "Een jaar op Mars heet gewoon een Marsjaar. Wat doet licht in een jaar?"] },
      { q: "Welke **planeet** heeft **opvallende ringen**?", options: ["Saturnus", "Aarde", "Mars", "Mercurius"], answer: 0, wrongHints: [null, "De aarde heeft geen ringen. Denk aan een planeet verder weg.", "Mars heeft geen ringen. Zoek een grote planeet verder weg.", "Mercurius is klein en kaal, vlak bij de zon — zoek juist verder van de zon."] },
      { q: "Hoe heet ons **sterrenstelsel**?", options: ["Melkweg", "Andromeda", "Plejaden", "Zonnestelsel"], answer: 0, wrongHints: [null, "Andromeda is een ander sterrenstelsel, ver bij ons vandaan.", "De Plejaden zijn een klein groepje sterren.", "Het zonnestelsel is alleen de zon met zijn planeten. Een sterrenstelsel is veel groter."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const ruimtevaartPo = {
  id: "ruimtevaart-po",
  title: "Ruimtevaart (groep 6-8, Doorstroomtoets-stof)",
  emoji: "🚀",
  level: "groep6-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / sterrenkunde",
  prerequisites: [
    { id: "sterren-planeten", title: "Sterren + planeten", niveau: "1F" },
  ],
  intro:
    "Ruimtevaart voor groep 6-8, Doorstroomtoets-stof — hoe raket werkt (Newton's 3e wet, brandstof, lanceerlocaties) + maanlanding Apollo 11 (Armstrong/Aldrin 1969) + ISS (sinds 1998, André Kuipers) + Mars-rovers + SpaceX/Musk + James Webb telescoop + Artemis (terug naar de maan). Sluit op sterren-planeten. ~15 min.",
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
