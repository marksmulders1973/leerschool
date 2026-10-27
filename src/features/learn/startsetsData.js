// 🎯 Startsets — de eerste 20 vragen per groep × vak (Mark 26 okt 2026, plan docs/PLAN-BREEDTE-EERST.md:
// "bij rekenen krijgen de kinderen eerst 20 vragen; zorg eerst dat alles over de breedte klopt").
//
// Een startset is een vaste, nagekeken reeks van 20 vragen uit bestaande leerpaden, oplopend in
// moeilijkheid en passend bij de groep. Het Begin-kwartier en "Oefen nu" op de vak-tegel pakken die
// eerst; pas als alle 20 beantwoord zijn, kiest de gewone motor (zwakste plek, mix) weer zelf.
//
// Elk item: { pad, stap (1-based, zoals in het leerpad-bestand), n = zoveel vragen uit die stap,
// in de volgorde van het bestand }. De test src/features/learn/startsets.test.js controleert dat elke
// set precies 20 geldige vragen oplevert en schrijft ze uit naar docs/audit/STARTSET-<groep>-<vak>.md
// om na te kijken. Dit bestand is bewust puur (geen imports): de Vandaag-motor leest het ook.

export const STARTSET_N = 20;

export const STARTSETS = {
  // ───────────────────────── Groep 3 ─────────────────────────
  // Dun: twee rekenpaden, één taal-, één spellingpad (plan B5). De sets putten uit wat er is.
  "3|rekenen": {
    titel: "Rekenen · groep 3",
    emoji: "🔢",
    items: [
      { pad: "getallen-tot-20-po", stap: 1, n: 4 },
      { pad: "getallen-tot-20-po", stap: 2, n: 4 },
      { pad: "getallen-tot-20-po", stap: 3, n: 4 },
      { pad: "getallen-tot-20-po", stap: 4, n: 4 },
      { pad: "klokkijken", stap: 1, n: 2 },   // wat is een klok
      { pad: "klokkijken", stap: 2, n: 2 },   // hele uren (vraag 3 = 24-uurs notatie, dat is groep 5-6)
    ],
  },
  "3|taal": {
    titel: "Taal & lezen · groep 3",
    emoji: "✏️",
    items: [
      { pad: "taal-leren-lezen-g3", stap: 1, n: 4 },  // letters en klanken
      { pad: "taal-leren-lezen-g3", stap: 2, n: 4 },  // rijmen
      { pad: "taal-leren-lezen-g3", stap: 3, n: 4 },  // hakken en plakken
      { pad: "taal-leren-lezen-g3", stap: 4, n: 4 },  // woordjes lezen
      { pad: "taal-leren-lezen-g3", stap: 5, n: 4 },  // een zinnetje lezen
    ],
  },
  "3|spelling": {
    titel: "Spelling · groep 3",
    emoji: "📝",
    items: [
      { pad: "spelling-eerste-woorden-g3", stap: 1, n: 5 },  // schrijf wat je hoort
      { pad: "spelling-eerste-woorden-g3", stap: 2, n: 4 },  // lange klanken
      { pad: "spelling-eerste-woorden-g3", stap: 3, n: 5 },  // oe, ie, eu
      { pad: "spelling-eerste-woorden-g3", stap: 4, n: 3 },  // sch- en -ng
      { pad: "spelling-eerste-woorden-g3", stap: 5, n: 3 },  // door elkaar
    ],
  },

  // ───────────────────────── Groep 4 ─────────────────────────
  // Natuur groep 4 heeft nog geen pad (plan B5) → geen set.
  "4|rekenen": {
    titel: "Rekenen · groep 4",
    emoji: "🔢",
    items: [
      { pad: "getallen-tot-20-po", stap: 3, n: 2 },
      { pad: "getallen-tot-20-po", stap: 4, n: 2 },
      { pad: "tafels-po", stap: 1, n: 2 },   // wat is een tafel
      { pad: "tafels-po", stap: 2, n: 5 },   // makkelijke tafels (2, 5, 10)
      { pad: "tafels-po", stap: 3, n: 4 },   // tafels van 3 en 4
      { pad: "klokkijken", stap: 2, n: 2 },  // hele uren
      { pad: "klokkijken", stap: 3, n: 1 },  // halve uren (vraag 2 = 24-uurs notatie, groep 5-6)
      { pad: "klokkijken", stap: 4, n: 2 },  // kwartieren
    ],
  },
  "4|taal": {
    titel: "Taal & lezen · groep 4",
    emoji: "✏️",
    items: [
      { pad: "taal-woorden-zinnen-g4", stap: 1, n: 4 },  // het alfabet
      { pad: "taal-woorden-zinnen-g4", stap: 2, n: 4 },  // meervoud
      { pad: "taal-woorden-zinnen-g4", stap: 3, n: 4 },  // verkleinwoorden
      { pad: "taal-woorden-zinnen-g4", stap: 4, n: 4 },  // tegenstellingen
      { pad: "taal-woorden-zinnen-g4", stap: 5, n: 4 },  // zinnen maken
    ],
  },
  "4|spelling": {
    titel: "Spelling · groep 4",
    emoji: "📝",
    items: [
      // stap 1 ("Wat zijn homofonen?") is te abstract voor groep 4 — meteen woorden schrijven.
      { pad: "spelling-ei-ij-au-ou", stap: 2, n: 5 },  // ei
      { pad: "spelling-ei-ij-au-ou", stap: 3, n: 5 },  // ij
      { pad: "spelling-ei-ij-au-ou", stap: 4, n: 2 },  // trucjes
      { pad: "spelling-ei-ij-au-ou", stap: 5, n: 4 },  // au
      { pad: "spelling-ei-ij-au-ou", stap: 6, n: 4 },  // ou
    ],
  },
  "4|natuur": {
    titel: "Natuur & techniek · groep 4",
    emoji: "🌱",
    items: [
      { pad: "natuur-seizoenen-dieren-g4", stap: 1, n: 5 },  // de vier seizoenen
      { pad: "natuur-seizoenen-dieren-g4", stap: 2, n: 5 },  // dieren om je heen
      { pad: "natuur-seizoenen-dieren-g4", stap: 3, n: 5 },  // van zaadje tot plant
      { pad: "natuur-seizoenen-dieren-g4", stap: 4, n: 5 },  // het weer
    ],
  },
  "4|begrijpend-lezen": {
    titel: "Begrijpend lezen · groep 4",
    emoji: "📖",
    items: [
      { pad: "korte-teksten-snappen-g4", stap: 1, n: 5 },  // één zin goed lezen
      { pad: "korte-teksten-snappen-g4", stap: 2, n: 4 },  // drie zinnen
      { pad: "korte-teksten-snappen-g4", stap: 3, n: 4 },  // het antwoord staat in de tekst
      { pad: "korte-teksten-snappen-g4", stap: 4, n: 4 },  // volgorde
      { pad: "korte-teksten-snappen-g4", stap: 5, n: 3 },  // een echt tekstje
    ],
  },

  // Groep 5 rekenen (curriculum: alle tafels en deeltafels, rekenen tot 1000, klokkijken, geld,
  // kennismaken met breuken). Van makkelijk naar lastig: tafels → deeltafels → klok → geld →
  // afronden → een redactiesom → de eerste breuken.
  "5|rekenen": {
    titel: "Rekenen · groep 5",
    emoji: "🔢",
    items: [
      { pad: "tafels-po", stap: 2, n: 2 },            // makkelijke tafels (2, 5, 10)
      { pad: "tafels-po", stap: 3, n: 2 },            // tafels van 3 en 4
      { pad: "tafels-po", stap: 4, n: 2 },            // lastige tafels (6-9)
      { pad: "delen-po", stap: 2, n: 2 },             // delen door 2, 5 en 10
      { pad: "delen-po", stap: 3, n: 1 },             // delen door 3 t/m 9
      { pad: "klokkijken", stap: 2, n: 1 },           // hele uren
      { pad: "klokkijken", stap: 3, n: 1 },           // halve uren
      { pad: "klokkijken", stap: 4, n: 1 },           // kwartieren
      { pad: "klokkijken", stap: 5, n: 1 },           // minuten
      { pad: "geld-rekenen", stap: 1, n: 1 },         // euro's en centen
      { pad: "geld-rekenen", stap: 2, n: 2 },         // optellen en aftrekken met geld
      { pad: "schatten-afronden", stap: 2, n: 2 },    // afronden op 10, 100, 1000
      { pad: "redactiesommen-pad", stap: 3, n: 1 },   // een één-stap-som
      { pad: "breuken-po", stap: 1, n: 1 },           // wat is een breuk? (kennismaken: één vraag)
    ],
  },

  // Groep 5 taal (curriculum: woordsoorten zelfstandig naamwoord en werkwoord; woordenschat).
  // Opwarmen met groep-4-stof (meervoud, verkleinwoord) → woordsoorten → synoniem/tegenstelling →
  // woorden in zinnen → hoofdletters en leestekens.
  "5|taal": {
    titel: "Taal & lezen · groep 5",
    emoji: "✏️",
    items: [
      { pad: "taal-woorden-zinnen-g4", stap: 2, n: 2 },        // meervoud
      { pad: "taal-woorden-zinnen-g4", stap: 3, n: 2 },        // verkleinwoorden
      { pad: "woordsoorten-po", stap: 1, n: 3 },               // zelfstandig naamwoord
      { pad: "woordsoorten-po", stap: 2, n: 3 },               // werkwoord
      { pad: "synoniemen-tegenstellingen-po", stap: 1, n: 2 }, // synoniem
      { pad: "synoniemen-tegenstellingen-po", stap: 3, n: 2 }, // tegenstelling
      // woordenschat-po stap 4 ("vorderde gestaag", "belachelijk klein") is groep 7-8-woordenschat — eruit (nakijkers 26 okt).
      { pad: "interpunctie-po", stap: 2, n: 3 },               // hoofdletters
      { pad: "interpunctie-po", stap: 3, n: 3 },               // punt, vraagteken, uitroepteken
    ],
  },

  // Groep 5 spelling (ei/ij en au/ou zitten vast; samenstellingen, hoofdletters, -isch/-lijk;
  // eerste werkwoordspelling = tegenwoordige tijd, de d/t-regels komen in groep 6).
  "5|spelling": {
    titel: "Spelling · groep 5",
    emoji: "📝",
    items: [
      { pad: "spelling-ei-ij-au-ou", stap: 2, n: 2 },   // woorden met ei
      { pad: "spelling-ei-ij-au-ou", stap: 3, n: 2 },   // woorden met ij
      { pad: "spelling-ei-ij-au-ou", stap: 4, n: 2 },   // trucjes ei/ij
      { pad: "spelling-ei-ij-au-ou", stap: 5, n: 2 },   // au
      { pad: "spelling-ei-ij-au-ou", stap: 6, n: 2 },   // ou
      { pad: "spelling-overige-po", stap: 3, n: 3 },    // samenstellingen
      { pad: "spelling-overige-po", stap: 4, n: 2 },    // hoofdletters
      { pad: "spelling-overige-po", stap: 1, n: 2 },    // -isch en -lijk
      { pad: "spelling-ei-ij-au-ou", stap: 7, n: 1 },   // alle vier door elkaar ("koud"; vraag 2 van die stap is weer d/t)
      { pad: "werkwoordsspelling-dt", stap: 1, n: 1 },  // wat is een werkwoord? (stap 8 van ei/ij begint met "trein" = al vraag 1)
      { pad: "werkwoordsspelling-dt", stap: 2, n: 1 },  // tegenwoordige tijd: "hij speelt" (de jij-inversie is groep 6-7 — nakijkers 26 okt)
    ],
  },

  // Groep 5 begrijpend lezen ("wordt een echt vak"): van zoeken in korte tekstjes naar tekstsoort,
  // signaalwoorden, hoofdgedachte en twee echte teksten.
  "5|begrijpend-lezen": {
    titel: "Begrijpend lezen · groep 5",
    emoji: "📖",
    items: [
      { pad: "korte-teksten-snappen-g4", stap: 3, n: 3 },       // het antwoord staat in de tekst
      { pad: "korte-teksten-snappen-g4", stap: 2, n: 3 },       // drie zinnen — wie, wat, waar
      { pad: "korte-teksten-snappen-g4", stap: 4, n: 2 },       // volgorde
      { pad: "begrijpend-lezen-strategie", stap: 2, n: 2 },     // tekstsoorten
      { pad: "begrijpend-lezen-strategie", stap: 3, n: 3 },     // signaalwoorden
      { pad: "samenvatten-hoofdgedachte-po", stap: 1, n: 4 },   // wat is een hoofdgedachte
      // Bewust geen vragen uit begrijpend-lezen-teksten-po (lange teksten, elke vraag herhaalt de hele
      // tekst) — voor de eerste 20 van groep 5 korte tekstjes die in de vraag zelf staan; als slot één
      // echt tekstje van zes zinnen met drie vragen.
      { pad: "korte-teksten-snappen-g4", stap: 5, n: 3 },       // een echt tekstje
    ],
  },

  // Groep 5 Engels (op veel scholen de start): het nieuwe groep-5-pad, alle 20 vragen.
  "5|engels": {
    titel: "Engels · groep 5",
    emoji: "📕",
    items: [
      { pad: "engels-eerste-woorden-g5", stap: 1, n: 5 },  // hello — groeten
      { pad: "engels-eerste-woorden-g5", stap: 2, n: 5 },  // kleuren en tellen
      { pad: "engels-eerste-woorden-g5", stap: 3, n: 5 },  // dieren
      { pad: "engels-eerste-woorden-g5", stap: 4, n: 5 },  // in de klas
    ],
  },

  // Groep 5 natuur & techniek: dieren en seizoenen, dierenklassen, eerste blik op het zonnestelsel.
  "5|natuur": {
    titel: "Natuur & techniek · groep 5",
    emoji: "🌱",
    items: [
      { pad: "dieren-seizoenen-natuur", stap: 2, n: 2 },   // zoogdieren
      { pad: "dieren-seizoenen-natuur", stap: 3, n: 2 },   // vogels
      { pad: "dieren-seizoenen-natuur", stap: 6, n: 1 },   // levensstadia
      { pad: "dieren-seizoenen-natuur", stap: 7, n: 1 },   // lente (de zomer-vraag is groep-7-stof: schuine aardas)
      { pad: "dieren-seizoenen-natuur", stap: 8, n: 2 },   // herfst en winter
      // stap 9 (planten) begint met "fotosynthese" = groep 7-8-term; stap 4 van sterren-planeten (eb/vloed,
      // maanlanding) idem — eruit (nakijkers 26 okt).
      { pad: "dieren-seizoenen-natuur", stap: 10, n: 2 },  // voedselketen
      { pad: "dierenklassen-po", stap: 1, n: 1 },          // de 6 dierenklassen (vleermuis; de walvis zat al in vraag 1)
      { pad: "dierenklassen-po", stap: 2, n: 2 },          // zoogdieren + vogels
      { pad: "dierenklassen-po", stap: 3, n: 2 },          // vissen + amfibieën
      { pad: "dierenklassen-po", stap: 4, n: 1 },          // reptielen + insecten
      { pad: "dieren-seizoenen-natuur", stap: 4, n: 2 },   // vissen, reptielen en amfibieën
      // sterren-planeten stap 1 ("bal van gas die kernfusie doet") is te abstract voor groep 5 — alleen stap 2.
      { pad: "sterren-planeten", stap: 2, n: 2 },          // het zonnestelsel
    ],
  },

  // Groep 5 aardrijkskunde (start als vak): kaartlezen is het enige groep-5-pad → dun, zie plan B5.
  "5|aardrijkskunde": {
    titel: "Aardrijkskunde · groep 5",
    emoji: "🌍",
    items: [
      { pad: "kaartlezen-po", stap: 1, n: 8 },  // wat is een kaart
      { pad: "kaartlezen-po", stap: 2, n: 7 },  // kompasroos
      { pad: "kaartlezen-po", stap: 3, n: 1 },  // schaal: alleen "1 cm = 1 km" (rekenen met schaal is groep 6-7 — nakijkers 26 okt)
      { pad: "kaartlezen-po", stap: 4, n: 4 },  // legenda
    ],
  },

  // Groep 5 geschiedenis (start: vroeger en nu): één pad → dun, zie plan B5.
  "5|geschiedenis": {
    titel: "Geschiedenis · groep 5",
    emoji: "🏛️",
    items: [
      { pad: "geschiedenis-vroeger-en-nu-g5", stap: 1, n: 5 },  // wat is geschiedenis
      { pad: "geschiedenis-vroeger-en-nu-g5", stap: 2, n: 5 },  // de tijdbalk
      { pad: "geschiedenis-vroeger-en-nu-g5", stap: 3, n: 5 },  // leven en school vroeger
      { pad: "geschiedenis-vroeger-en-nu-g5", stap: 4, n: 5 },  // ridders en kastelen
    ],
  },

  // ───────────────────────── Groep 6 ─────────────────────────
  // Curriculum: breuken, kommagetallen, procenten en staartdelen; zinsontleding en werkwoordspelling
  // (tt/vt); begrijpend lezen verdiept; Engels start op veel scholen; topografie Nederland; de tijdvakken.

  "6|rekenen": {
    titel: "Rekenen · groep 6",
    emoji: "🔢",
    items: [
      { pad: "delen-po", stap: 3, n: 2 },               // delen door 3 t/m 9
      { pad: "cijferend-rekenen", stap: 1, n: 2 },      // cijferend optellen
      { pad: "cijferend-rekenen", stap: 2, n: 2 },      // cijferend aftrekken
      { pad: "breuken-po", stap: 3, n: 2 },             // vereenvoudigen + gelijke breuken
      { pad: "breuken-po", stap: 4, n: 2 },             // optellen en aftrekken — gelijke noemer
      { pad: "kommagetallen-po", stap: 1, n: 2 },       // wat is een kommagetal
      { pad: "kommagetallen-po", stap: 2, n: 2 },       // optellen & aftrekken met komma's
      { pad: "procenten-po", stap: 1, n: 2 },           // % betekent per honderd
      { pad: "geld-rekenen", stap: 3, n: 2 },           // wisselgeld
      { pad: "schatten-afronden", stap: 3, n: 2 },      // schatten van sommen
    ],
  },

  "6|taal": {
    titel: "Taal & lezen · groep 6",
    emoji: "✏️",
    items: [
      { pad: "woordsoorten-po", stap: 3, n: 3 },               // bijvoeglijk naamwoord
      { pad: "woordsoorten-po", stap: 4, n: 3 },               // lidwoord & voornaamwoord
      { pad: "werkwoord-tijden-po", stap: 2, n: 2 },           // tegenwoordige tijd
      { pad: "werkwoord-tijden-po", stap: 3, n: 2 },           // verleden tijd — zwak
      { pad: "synoniemen-tegenstellingen-po", stap: 2, n: 2 }, // synoniemen-paren
      { pad: "synoniemen-tegenstellingen-po", stap: 4, n: 2 }, // welk woord past in de zin
      { pad: "spreekwoorden-uitdrukkingen-po", stap: 1, n: 2 }, // letterlijk vs figuurlijk
      { pad: "spreekwoorden-uitdrukkingen-po", stap: 2, n: 2 }, // veel-gebruikte uitdrukkingen
      { pad: "interpunctie-po", stap: 4, n: 2 },               // komma's
    ],
  },

  "6|spelling": {
    titel: "Spelling · groep 6",
    emoji: "📝",
    items: [
      { pad: "werkwoordsspelling-dt", stap: 2, n: 3 },  // tegenwoordige tijd — basisregel
      { pad: "werkwoordsspelling-dt", stap: 3, n: 3 },  // stam eindigt op d
      { pad: "werkwoordsspelling-dt", stap: 4, n: 3 },  // stam eindigt op t
      { pad: "werkwoordsspelling-dt", stap: 5, n: 3 },  // verleden tijd — 't kofschip
      { pad: "spelling-overige-po", stap: 1, n: 2 },    // -isch en -lijk
      { pad: "spelling-overige-po", stap: 3, n: 2 },    // samenstellingen
      { pad: "spelling-ei-ij-au-ou", stap: 7, n: 2 },   // ei/ij/au/ou door elkaar
      { pad: "werkwoordsspelling-dt", stap: 6, n: 2 },  // verleden tijd vs voltooid deelwoord (leestekens-vragen waren te makkelijk — nakijker 26 okt)
    ],
  },

  "6|begrijpend-lezen": {
    titel: "Begrijpend lezen · groep 6",
    emoji: "📖",
    items: [
      { pad: "begrijpend-lezen-strategie", stap: 5, n: 2 },        // skim + scan (stap 4 overlapte met samenvatten: "waar staat de hoofdgedachte")
      { pad: "begrijpend-lezen-strategie", stap: 6, n: 2 },        // vraagsoorten
      { pad: "samenvatten-hoofdgedachte-po", stap: 2, n: 2 },      // hoofdgedachte vinden
      { pad: "samenvatten-hoofdgedachte-po", stap: 3, n: 2 },      // hoofdzaken vs bijzaken
      { pad: "verwijswoorden-begrijpend-lezen-po", stap: 1, n: 2 }, // wat is een verwijswoord
      { pad: "verwijswoorden-begrijpend-lezen-po", stap: 2, n: 2 }, // verwijswoorden in een tekst
      { pad: "feiten-details-opzoeken-po", stap: 1, n: 2 },        // de zoekstrategie
      { pad: "feiten-details-opzoeken-po", stap: 2, n: 2 },        // zoeken in een tekst
      { pad: "tekstverbanden-oorzaak-gevolg-po", stap: 1, n: 2 },  // oorzaak, gevolg, signaalwoorden
      { pad: "woordbetekenis-context-po", stap: 1, n: 2 },         // kijk om het woord heen
    ],
  },

  "6|engels": {
    titel: "Engels · groep 6",
    emoji: "📕",
    items: [
      { pad: "woordenschat-engels-po", stap: 1, n: 2 },     // hello & basics
      { pad: "woordenschat-engels-po", stap: 2, n: 2 },     // numbers
      { pad: "woordenschat-engels-po", stap: 3, n: 2 },     // colors
      { pad: "woordenschat-engels-po", stap: 4, n: 2 },     // days & months
      { pad: "woordenschat-engels-po", stap: 5, n: 2 },     // family
      { pad: "woordenschat-engels-po", stap: 6, n: 2 },     // food & drinks
      { pad: "basis-grammatica-engels-po", stap: 1, n: 2 }, // a / an
      { pad: "basis-grammatica-engels-po", stap: 2, n: 2 }, // plural
      { pad: "basis-grammatica-engels-po", stap: 3, n: 2 }, // this / that
      { pad: "basis-grammatica-engels-po", stap: 4, n: 2 }, // to be
    ],
  },

  "6|natuur": {
    titel: "Natuur & techniek · groep 6",
    emoji: "🌱",
    items: [
      { pad: "lichaam-gezondheid-po", stap: 1, n: 2 },  // het skelet
      { pad: "lichaam-gezondheid-po", stap: 3, n: 2 },  // de organen
      { pad: "gezonde-voeding-po", stap: 2, n: 2 },     // Schijf van Vijf
      { pad: "toestand-stoffen-po", stap: 1, n: 2 },    // vast, vloeibaar, gas
      { pad: "waterkringloop-po", stap: 1, n: 2 },      // hoe werkt de waterkringloop
      // waterkringloop stap 2 (cumulonimbus, "een stapelwolk weegt ~500 ton") is te specialistisch voor groep 6.
      { pad: "toestand-stoffen-po", stap: 4, n: 2 },    // overgangen + watercyclus
      { pad: "weersvoorspelling-po", stap: 1, n: 2 },   // wat is weer
      { pad: "dierenklassen-po", stap: 5, n: 2 },       // voedselketens en biotopen
      { pad: "energiebronnen-po", stap: 1, n: 2 },      // wat is energie
      { pad: "recyclen-afval-po", stap: 1, n: 2 },      // afval scheiden
    ],
  },

  "6|aardrijkskunde": {
    titel: "Aardrijkskunde · groep 6",
    emoji: "🌍",
    items: [
      { pad: "topografie-nederland", stap: 1, n: 2 },        // wat is Nederland
      { pad: "topografie-nederland", stap: 2, n: 4 },        // de 12 provincies
      { pad: "topografie-nederland", stap: 3, n: 2 },        // hoofdsteden noord + midden
      { pad: "topografie-nederland", stap: 4, n: 1 },        // hoofdsteden west + zuid
      { pad: "topografie-nederland", stap: 5, n: 2 },        // belangrijke wateren
      { pad: "topografie-nederland", stap: 6, n: 1 },        // Waddeneilanden (vraag 2 = "% onder zeeniveau", zit al in Nederland en water)
      { pad: "kaartlezen-po", stap: 3, n: 2 },               // schaal
      { pad: "topografie-nederland", stap: 7, n: 2 },        // 5 grootste steden + buurlanden (legenda-symbolen zonder kaart eruit — nakijker 26 okt)
      { pad: "water-erfgoed-nederland-po", stap: 1, n: 2 },  // land onder zeeniveau
      { pad: "water-erfgoed-nederland-po", stap: 2, n: 2 },  // dijken en duinen
    ],
  },

  "6|geschiedenis": {
    titel: "Geschiedenis · groep 6",
    emoji: "🏛️",
    items: [
      // Chronologisch (nakijker 26 okt): oudheid → prehistorie/Romeinen in NL → middeleeuwen → Gouden Eeuw → nu.
      { pad: "oudheid-egyptenaren-grieken-romeinen-po", stap: 1, n: 2 }, // Egyptenaren
      { pad: "oudheid-egyptenaren-grieken-romeinen-po", stap: 3, n: 1 }, // Romeinen
      { pad: "tijdvakken-nederland-po", stap: 1, n: 4 },  // prehistorie & Romeinse tijd
      { pad: "tijdvakken-nederland-po", stap: 2, n: 4 },  // middeleeuwen
      { pad: "ontdekkingsreizen-po", stap: 3, n: 2 },     // Nederlandse ontdekkers + VOC (1602)
      { pad: "tijdvakken-nederland-po", stap: 3, n: 4 },  // Gouden Eeuw & Republiek
      { pad: "tijdvakken-nederland-po", stap: 4, n: 3 },  // industriële tijd, oorlogen & nu
    ],
  },

  // ───────────────────────── Groep 7 ─────────────────────────
  // Curriculum: breuken ↔ procenten ↔ kommagetallen, schaal en grafieken; ontleden (onderwerp,
  // persoonsvorm) en trappen van vergelijking; werkwoordspelling compleet (ook voltooid deelwoord);
  // studievaardigheden (opzoeken, roosters, plattegrond); topografie Europa.

  "7|rekenen": {
    titel: "Rekenen · groep 7",
    emoji: "🔢",
    items: [
      { pad: "omzetten-breuk-procent-komma-po", stap: 1, n: 2 }, // breuk ↔ kommagetal
      { pad: "omzetten-breuk-procent-komma-po", stap: 2, n: 2 }, // kommagetal ↔ procent
      { pad: "omzetten-breuk-procent-komma-po", stap: 3, n: 2 }, // breuk ↔ procent
      { pad: "procenten-po", stap: 3, n: 2 },                    // hoeveel is X% van een getal
      { pad: "kommagetallen-po", stap: 3, n: 2 },                // vermenigvuldigen met kommagetallen
      { pad: "deelsommen-met-rest-po", stap: 1, n: 2 },          // delen met rest
      { pad: "schaal-kaart-rekenen-po", stap: 2, n: 2 },         // van de kaart naar het echt
      { pad: "grafieken-lezen-po", stap: 2, n: 2 },              // staafdiagram lezen
      { pad: "maten-eenheden", stap: 2, n: 2 },                  // lengte — km, m, dm, cm, mm
      { pad: "gemiddelden-statistiek-po", stap: 2, n: 2 },       // gemiddelde uitrekenen
    ],
  },

  "7|taal": {
    titel: "Taal & lezen · groep 7",
    emoji: "✏️",
    items: [
      { pad: "zinsontleding-onderwerp-persoonsvorm-po", stap: 1, n: 3 }, // persoonsvorm vinden
      { pad: "zinsontleding-onderwerp-persoonsvorm-po", stap: 2, n: 3 }, // onderwerp vinden
      { pad: "trappen-van-vergelijking-po", stap: 2, n: 2 },             // vergrotende trap
      { pad: "trappen-van-vergelijking-po", stap: 3, n: 2 },             // overtreffende trap
      { pad: "signaalwoorden-verbanden-po", stap: 1, n: 2 },             // tegenstelling & opsomming
      { pad: "signaalwoorden-verbanden-po", stap: 2, n: 2 },             // oorzaak & gevolg
      { pad: "verwijswoorden-po", stap: 2, n: 2 },                       // hij, zij, het, hem
      { pad: "feit-mening-po", stap: 1, n: 1 },                          // wat is een feit
      { pad: "feit-mening-po", stap: 2, n: 1 },                          // wat is een mening
      { pad: "lettergrepen-klemtoon-po", stap: 2, n: 2 },                // woorden in lettergrepen verdelen
    ],
  },

  "7|spelling": {
    titel: "Spelling · groep 7",
    emoji: "📝",
    items: [
      { pad: "werkwoordsspelling-dt", stap: 3, n: 3 },           // stam eindigt op d
      { pad: "werkwoordsspelling-dt", stap: 4, n: 3 },           // stam eindigt op t
      { pad: "werkwoordsspelling-dt", stap: 5, n: 3 },           // verleden tijd — 't kofschip
      { pad: "werkwoordsspelling-dt", stap: 6, n: 4 },           // verleden tijd vs voltooid deelwoord
      { pad: "werkwoordsspelling-dt", stap: 7, n: 1 },           // "Word jij …?" (vraag 2 van die stap = "Hij wordt boos", zat al in stap 3)
      { pad: "samenstellingen-tussenletters-po", stap: 2, n: 2 }, // tussen-n
      { pad: "samenstellingen-tussenletters-po", stap: 3, n: 2 }, // tussen-s
      { pad: "leestekens-hoofdletters-po", stap: 4, n: 2 },      // directe rede
    ],
  },

  "7|begrijpend-lezen": {
    titel: "Begrijpend lezen · groep 7",
    emoji: "📖",
    items: [
      { pad: "tekstdoel-schrijversdoel-po", stap: 1, n: 2 },      // de vier schrijversdoelen
      { pad: "tekstdoel-schrijversdoel-po", stap: 2, n: 2 },      // voor wie is dit geschreven
      { pad: "alinea-functies-tussenkopjes-po", stap: 1, n: 2 }, // wat is een alinea
      { pad: "alinea-functies-tussenkopjes-po", stap: 3, n: 2 }, // tussenkopjes kiezen
      { pad: "conclusies-trekken-po", stap: 1, n: 2 },           // wat is een conclusie
      { pad: "conclusies-trekken-po", stap: 2, n: 2 },           // gevoelens afleiden (met tekst)
      { pad: "nieuwsbericht-lezen-po", stap: 1, n: 2 },          // zo zit een nieuwsbericht in elkaar
      { pad: "nieuwsbericht-lezen-po", stap: 2, n: 2 },          // de vragenbril op een echt bericht (met tekst)
      { pad: "schema-tekst-combi-po", stap: 1, n: 2 },           // zo lees je een tabel of lijst
      { pad: "schema-tekst-combi-po", stap: 2, n: 2 },           // tekst + prijslijst (met tekst)
    ],
  },

  "7|engels": {
    titel: "Engels · groep 7",
    emoji: "📕",
    items: [
      { pad: "woordenschat-engels-po", stap: 2, n: 2 },     // numbers
      { pad: "woordenschat-engels-po", stap: 4, n: 2 },     // days & months
      { pad: "woordenschat-engels-po", stap: 5, n: 2 },     // family
      { pad: "woordenschat-engels-po", stap: 6, n: 2 },     // food & drinks
      { pad: "woordenschat-engels-po", stap: 7, n: 1 },     // body parts (vraag 2 = "hand" → "hand", te raden)
      { pad: "woordenschat-engels-po", stap: 3, n: 1 },     // colors
      { pad: "basis-grammatica-engels-po", stap: 3, n: 2 }, // this / that / these / those
      { pad: "basis-grammatica-engels-po", stap: 4, n: 2 }, // to be
      { pad: "basis-grammatica-engels-po", stap: 5, n: 3 }, // present simple
      { pad: "basis-grammatica-engels-po", stap: 6, n: 3 }, // vragen + ontkenning
    ],
  },

  "7|studievaardigheden": {
    titel: "Studievaardigheden · groep 7",
    emoji: "🧠",
    items: [
      { pad: "alfabet-woordenboek-po", stap: 1, n: 2 },      // alfabetische volgorde
      { pad: "alfabet-woordenboek-po", stap: 3, n: 2 },      // verder dan de eerste letter
      { pad: "inhoudsopgave-register-po", stap: 1, n: 2 },   // de inhoudsopgave
      { pad: "inhoudsopgave-register-po", stap: 2, n: 2 },   // het register
      { pad: "dienstregeling-roosters-po", stap: 1, n: 2 },  // dienstregeling lezen
      { pad: "dienstregeling-roosters-po", stap: 2, n: 2 },  // rooster lezen
      { pad: "plattegrond-legenda-po", stap: 2, n: 2 },      // de legenda
      { pad: "plattegrond-legenda-po", stap: 3, n: 2 },      // route & windrichting
      { pad: "folder-bon-advertentie-po", stap: 1, n: 2 },   // een kassabon lezen
      { pad: "folder-bon-advertentie-po", stap: 2, n: 2 },   // een aanbieding in de folder
    ],
  },

  "7|natuur": {
    titel: "Natuur & techniek · groep 7",
    emoji: "🌱",
    items: [
      { pad: "lichaam-gezondheid-po", stap: 2, n: 2 },     // spieren en bloed
      { pad: "lichaam-gezondheid-po", stap: 5, n: 2 },     // hygiëne, slaap en bewegen
      { pad: "energiebronnen-po", stap: 2, n: 1 },         // fossiele brandstoffen (vraag 2 = jaartal Groningen-gasveld, te specifiek)
      { pad: "energiebronnen-po", stap: 3, n: 3 },         // duurzame energie
      { pad: "weersvoorspelling-po", stap: 1, n: 1 },      // wat is weer
      { pad: "weersvoorspelling-po", stap: 2, n: 2 },      // wind + luchtdruk + onweer
      { pad: "weersvoorspelling-po", stap: 3, n: 1 },      // KNMI (vraag 2 "isobaren" is middelbare-schoolstof)
      { pad: "sterren-planeten", stap: 4, n: 2 },          // aarde + maan
      { pad: "sterren-planeten", stap: 5, n: 2 },          // Mars
      { pad: "bekende-wetenschappers-po", stap: 1, n: 2 }, // Galileo + Copernicus
      { pad: "evolutie-mens-po", stap: 1, n: 2 },          // wat is evolutie
    ],
  },

  "7|aardrijkskunde": {
    titel: "Aardrijkskunde · groep 7",
    emoji: "🌍",
    items: [
      // Geen "hoeveel werelddelen / oceanen"-telvragen: methode-afhankelijk (5 of 7, 4 of 5) — nakijkers 26 okt.
      { pad: "kaartlezen-po", stap: 2, n: 2 },               // windrichtingen
      { pad: "continenten-wereld-po", stap: 1, n: 2 },       // continenten (telt expliciet N-/Z-Amerika apart en Antarctica mee)
      { pad: "werelddelen-landen-po", stap: 2, n: 4 },       // Europa + Azië
      { pad: "werelddelen-landen-po", stap: 3, n: 3 },       // Amerika + Afrika + Oceanië
      { pad: "topografie-nederland", stap: 7, n: 3 },        // 5 grootste steden + buurlanden
      { pad: "topografie-nederland", stap: 8, n: 2 },        // bekende plekken op de kaart
      { pad: "water-erfgoed-nederland-po", stap: 3, n: 2 },  // polders
      { pad: "water-erfgoed-nederland-po", stap: 5, n: 2 },  // Deltawerken
    ],
  },

  "7|geschiedenis": {
    titel: "Geschiedenis · groep 7",
    emoji: "🏛️",
    items: [
      { pad: "tijdvakken-nederland-po", stap: 3, n: 3 },        // Gouden Eeuw & Republiek
      { pad: "tijdvakken-nederland-po", stap: 4, n: 3 },        // industriële tijd, oorlogen & nu
      { pad: "industriele-revolutie-po", stap: 2, n: 2 },       // stoommachine + uitvindingen
      { pad: "industriele-revolutie-po", stap: 4, n: 2 },       // kinderarbeid + sociale strijd
      { pad: "ontdekkingsreizen-po", stap: 1, n: 1 },           // waarom ontdekkingsreizen (vraag 2 "astrolabium" zonder uitleg te zwaar)
      { pad: "ontdekkingsreizen-po", stap: 2, n: 2 },           // Columbus + Vasco da Gama
      { pad: "ontdekkingsreizen-po", stap: 3, n: 1 },           // VOC
      { pad: "oudheid-egyptenaren-grieken-romeinen-po", stap: 2, n: 2 }, // Grieken
      { pad: "politiek-democratie-po", stap: 1, n: 2 },         // wat is democratie
      { pad: "politiek-democratie-po", stap: 3, n: 2 },         // koning + Tweede Kamer + regering
    ],
  },

  // ───────────────────────── Groep 8 ─────────────────────────
  // Het Doorstroomtoets-jaar: waar het kan putten de sets uit de doorstroomtoets-paden (eigen vragen
  // "in stijl van"), aangevuld met de verdiepende paden van groep 7-8.

  "8|rekenen": {
    titel: "Rekenen · groep 8",
    emoji: "🔢",
    items: [
      { pad: "doorstroomtoets-rekenen-g8", stap: 1, n: 4 },  // breuken & decimalen
      { pad: "doorstroomtoets-rekenen-g8", stap: 2, n: 4 },  // procenten & verhoudingen
      { pad: "doorstroomtoets-rekenen-g8", stap: 3, n: 3 },  // meten & schaal
      { pad: "doorstroomtoets-rekenen-g8", stap: 5, n: 3 },  // geld & kommagetallen
      { pad: "doorstroomtoets-rekenen-g8", stap: 6, n: 2 },  // tijd, snelheid & kalender
      { pad: "doorstroomtoets-rekenen-g8", stap: 4, n: 2 },  // redactiesommen
      { pad: "gemiddelden-statistiek-po", stap: 3, n: 1 },   // modus
      { pad: "gemiddelden-statistiek-po", stap: 4, n: 1 },   // mediaan
    ],
  },

  "8|taal": {
    titel: "Taal & lezen · groep 8",
    emoji: "✏️",
    items: [
      { pad: "doorstroomtoets-taal-g8", stap: 1, n: 4 },                 // woordenschat
      { pad: "zinsontleding-onderwerp-persoonsvorm-po", stap: 3, n: 3 }, // onderwerp en persoonsvorm samen
      { pad: "zinsontleding-onderwerp-persoonsvorm-po", stap: 4, n: 2 }, // zinnen ontleden
      { pad: "signaalwoorden-verbanden-po", stap: 4, n: 2 },             // welk verband in de tekst
      { pad: "spreekwoorden-uitdrukkingen-po", stap: 3, n: 2 },          // spreekwoorden
      { pad: "trappen-van-vergelijking-po", stap: 4, n: 2 },             // trappen: kiezen & spellen
      { pad: "verwijswoorden-po", stap: 3, n: 2 },                       // die, dat, deze, dit
      { pad: "doorstroomtoets-taal-g8", stap: 5, n: 3 },                 // werkwoordspelling — lastige gevallen
    ],
  },

  "8|spelling": {
    titel: "Spelling · groep 8",
    emoji: "📝",
    items: [
      { pad: "leestekens-hoofdletters-po", stap: 1, n: 2 },        // hoofdletters
      { pad: "leestekens-hoofdletters-po", stap: 3, n: 2 },        // de komma
      { pad: "samenstellingen-tussenletters-po", stap: 4, n: 3 },  // herkennen & spellen
      { pad: "werkwoordsspelling-dt", stap: 6, n: 4 },             // verleden tijd vs voltooid deelwoord
      { pad: "werkwoordsspelling-dt", stap: 7, n: 3 },             // word / wordt
      { pad: "doorstroomtoets-taal-g8", stap: 3, n: 6 },           // spelling in toets-stijl
    ],
  },

  "8|begrijpend-lezen": {
    titel: "Begrijpend lezen · groep 8",
    emoji: "📖",
    items: [
      { pad: "lange-toets-teksten-g8-po", stap: 1, n: 2 },      // je plan voor lange teksten
      { pad: "verhaal-diepte-lezen-po", stap: 1, n: 2 },        // tussen de regels lezen
      { pad: "verhaal-diepte-lezen-po", stap: 3, n: 2 },        // beeldspraak en sfeer
      { pad: "conclusies-trekken-po", stap: 3, n: 2 },          // onderbouwd of een gok
      { pad: "verhaal-diepte-lezen-po", stap: 2, n: 2 },        // door wiens ogen — perspectief (met tekst)
      { pad: "woordbetekenis-context-po", stap: 3, n: 3 },      // één woord, meerdere betekenissen
      { pad: "alinea-functies-tussenkopjes-po", stap: 2, n: 2 }, // de functie van een alinea (met tekst)
      { pad: "feiten-details-opzoeken-po", stap: 3, n: 2 },      // lastige gevallen bij opzoeken
      // Niet: tekstdoel stap 3 (vragen over een folder die alleen in de uitleg staat) en doorstroomtoets-taal
      // stap 2 ("lees eerst de vragen" botst met het lange-teksten-advies "lees eerst de tekst") — zie plan.
      { pad: "lange-toets-teksten-g8-po", stap: 2, n: 3 },      // training: een lange informatieve tekst (met tekst)
    ],
  },

  "8|engels": {
    titel: "Engels · groep 8",
    emoji: "📕",
    items: [
      { pad: "woordenschat-engels-po", stap: 1, n: 2 },     // hello & basics
      { pad: "woordenschat-engels-po", stap: 3, n: 2 },     // colors
      { pad: "woordenschat-engels-po", stap: 7, n: 2 },     // body parts
      { pad: "basis-grammatica-engels-po", stap: 2, n: 2 }, // plural
      { pad: "basis-grammatica-engels-po", stap: 5, n: 4 }, // present simple
      { pad: "basis-grammatica-engels-po", stap: 6, n: 4 }, // vragen + ontkenning
      { pad: "basis-grammatica-engels-po", stap: 7, n: 4 }, // alles samen
    ],
  },

  "8|studievaardigheden": {
    titel: "Studievaardigheden · groep 8",
    emoji: "🧠",
    items: [
      { pad: "doorstroomtoets-studievaardigheden-g8", stap: 1, n: 3 },  // kaart + schaal lezen
      { pad: "doorstroomtoets-studievaardigheden-g8", stap: 2, n: 3 },  // tabel + grafiek lezen
      { pad: "doorstroomtoets-studievaardigheden-g8", stap: 3, n: 3 },  // woordenboek, atlas + index
      { pad: "doorstroomtoets-studievaardigheden-g8", stap: 4, n: 3 },  // schema's + stappenplan
      { pad: "betrouwbaarheid-bronnen-po", stap: 1, n: 2 },             // wie zegt het
      { pad: "betrouwbaarheid-bronnen-po", stap: 3, n: 2 },             // klopt het — controleren en de datum
      { pad: "dienstregeling-roosters-po", stap: 3, n: 2 },             // openingstijden lezen
      { pad: "dienstregeling-roosters-po", stap: 4, n: 2 },             // plannen met roosters
    ],
  },

  "8|natuur": {
    titel: "Natuur & techniek · groep 8",
    emoji: "🌱",
    items: [
      { pad: "bekende-wetenschappers-po", stap: 2, n: 1 },  // Newton (zwaartekracht; "eerste wet" is middelbare-schoolstof)
      { pad: "bekende-wetenschappers-po", stap: 3, n: 2 },  // Darwin
      { pad: "bekende-wetenschappers-po", stap: 4, n: 1 },  // Einstein + Curie
      { pad: "evolutie-mens-po", stap: 2, n: 2 },           // gemeenschappelijke voorouder
      { pad: "evolutie-mens-po", stap: 3, n: 2 },           // bewijzen voor evolutie
      { pad: "energiebronnen-po", stap: 4, n: 2 },          // kernenergie
      { pad: "energiebronnen-po", stap: 5, n: 2 },          // Nederland en energie
      { pad: "recyclen-afval-po", stap: 2, n: 2 },          // recyclen + circulaire economie
      { pad: "recyclen-afval-po", stap: 3, n: 2 },          // plastic soup
      { pad: "sterren-planeten", stap: 6, n: 2 },           // gasreuzen
      { pad: "sterren-planeten", stap: 8, n: 2 },           // Pluto, asteroïden, kometen
    ],
  },

  "8|aardrijkskunde": {
    titel: "Aardrijkskunde · groep 8",
    emoji: "🌍",
    items: [
      { pad: "werelddelen-landen-po", stap: 3, n: 6 },          // Amerika + Afrika + Oceanië
      { pad: "continenten-wereld-po", stap: 3, n: 3 },          // in welk continent ligt …
      { pad: "continenten-wereld-po", stap: 4, n: 3 },          // tijdzones
      { pad: "topografie-wereld-werelddelen-po", stap: 1, n: 1 }, // (pad is vooral kaart-interactie: 1 losse vraag)
      { pad: "topografie-europa-landen-po", stap: 1, n: 1 },      // (idem)
      { pad: "vulkanen-po", stap: 1, n: 2 },                      // wat is een vulkaan
      { pad: "vulkanen-po", stap: 2, n: 2 },                      // waarom barst een vulkaan uit
      { pad: "water-erfgoed-nederland-po", stap: 4, n: 2 },       // Watersnoodramp 1953
    ],
  },

  "8|geschiedenis": {
    titel: "Geschiedenis · groep 8",
    emoji: "🏛️",
    items: [
      { pad: "nederlandse-kunstenaars-po", stap: 1, n: 2 },  // Rembrandt + Vermeer (Gouden Eeuw)
      { pad: "industriele-revolutie-po", stap: 1, n: 1 },    // vóór de industriële revolutie
      { pad: "industriele-revolutie-po", stap: 3, n: 1 },    // werkdag in een vroege fabriek ("bourgeoisie" is te zwaar)
      { pad: "industriele-revolutie-po", stap: 5, n: 2 },    // Nederland en de industriële revolutie
      { pad: "bekende-nederlanders-po", stap: 1, n: 2 },
      { pad: "koude-oorlog-modern-po", stap: 1, n: 2 },      // Koude Oorlog — wat was het
      { pad: "koude-oorlog-modern-po", stap: 2, n: 2 },      // Berlijnse Muur, Cuba, Vietnam
      { pad: "koude-oorlog-modern-po", stap: 3, n: 2 },      // val van de Muur + nu
      { pad: "politiek-democratie-po", stap: 2, n: 2 },      // trias politica
      { pad: "politiek-democratie-po", stap: 4, n: 2 },      // gemeente + provincie + Europa
      { pad: "politiek-democratie-po", stap: 5, n: 2 },      // grondwet + grondrechten
    ],
  },
};

/** Sleutel van de startset voor een groep (1-8) en vak-id uit VAKKEN_PER_GROEP; "wiskunde" telt als rekenen. */
export function startsetSleutel(groep, vak) {
  const g = Number(groep);
  const v = vak === "wiskunde" ? "rekenen" : vak;
  return g >= 1 && g <= 8 && v ? `${g}|${v}` : null;
}

export function startsetVan(sleutel) {
  return (sleutel && STARTSETS[sleutel]) || null;
}

/** De paden waar een startset uit put (om dubbele blokjes in het kwartier te vermijden). */
export function startsetPaden(sleutel) {
  const s = startsetVan(sleutel);
  return s ? [...new Set(s.items.map((it) => it.pad))] : [];
}

/** Een kwartier-blokje dat de volgende `n` nog niet beantwoorde vragen van de startset geeft. */
export function startsetBlok(sleutel, n = 5) {
  const s = startsetVan(sleutel);
  if (!s) return null;
  // 27 okt 2026 (kliktest): "startset" is geen kinderwoord → "de eerste 20 vragen".
  const totaal = (s.items || []).reduce((a, it) => a + (it.n || 0), 0) || 20;
  return { soort: "vragen", startset: sleutel, pathId: null, n, titel: `${s.emoji} ${s.titel} · de eerste ${totaal} vragen` };
}
