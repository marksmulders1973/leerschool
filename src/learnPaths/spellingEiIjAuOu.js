// Leerpad: Spelling ei/ij + au/ou — homofonen leren
// 9 stappen in 4 hoofdstukken (A t/m D).
// Doelgroep: groep 4-6 basisschool.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  ei: "#5d9cec",   // korte ei = blauw
  ij: "#ec407a",   // lange ij = roze
  au: "#69f0ae",   // au = groen
  ou: "#ffd54f",   // ou = geel
  fout: "#ef5350",
};

const stepEmojis = ["📝","🔵","🌟","💡","🟢","🟡","🆚","🎓","🏆"];

const chapters = [
  { letter: "A", title: "Het probleem — homofonen", emoji: "📝", from: 0, to: 0 },
  { letter: "B", title: "ei vs ij", emoji: "🔵", from: 1, to: 3 },
  { letter: "C", title: "au vs ou", emoji: "🟢", from: 4, to: 5 },
  { letter: "D", title: "Combineren + eindopdracht", emoji: "🏆", from: 6, to: 8 },
];

// Tabel met woorden gegroepeerd in 'ei' vs 'ij' (of 'au' vs 'ou')
function woordenTabelSvg(label1, label2, kleur1, kleur2, lijst1, lijst2) {
  return `<svg viewBox="0 0 320 320">
<rect x="0" y="0" width="320" height="320" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">Vergelijk: ${label1} versus ${label2}</text>

<!-- Twee kolommen -->
<rect x="20" y="35" width="135" height="270" rx="8" fill="${kleur1}" opacity="0.20" stroke="${kleur1}" stroke-width="1.5"/>
<rect x="165" y="35" width="135" height="270" rx="8" fill="${kleur2}" opacity="0.20" stroke="${kleur2}" stroke-width="1.5"/>

<text x="87" y="55" text-anchor="middle" fill="${kleur1}" font-size="20" font-family="Arial" font-weight="bold">${label1}</text>
<text x="232" y="55" text-anchor="middle" fill="${kleur2}" font-size="20" font-family="Arial" font-weight="bold">${label2}</text>

${lijst1.map((w, i) => `<text x="87" y="${85 + i * 22}" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">${w}</text>`).join('')}
${lijst2.map((w, i) => `<text x="232" y="${85 + i * 22}" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">${w}</text>`).join('')}
</svg>`;
}

const steps = [
  {
    title: "Wat is dit gedoe met ei/ij en au/ou?",
    explanation: "Sommige Nederlandse woorden klinken **hetzelfde** maar worden **anders geschreven**. Dat zijn **homofonen**.\n\n**Twee beruchte paren**:\n\n**1. ei vs ij**\nSpreek deze woorden uit:\n• 'reis' en 'rijs' — klinkt **identiek**!\n• 'klein' en 'klijn' — klinkt identiek (klijn is geen woord, voorbeeld)\n\nAlleen aan de spelling kun je zien wat 't is.\n\n**2. au vs ou**\nSpreek uit:\n• 'paus' en 'pous' — identiek!\n• 'rauw' en 'rouw' — identiek!\n\n**Waarom is dit zo?**\nVroeger (~500 jaar geleden) klonken **ei** en **ij** wél verschillend. Net zoals **au** en **ou**. Maar de uitspraak is samengesmolten — alleen de spelling bleef apart.\n\n**Hoe leer je het dan?**\nEr zijn **geen vaste regels** — je moet **woorden uit je hoofd kennen**. Maar er zijn **patronen** en **trucjes** die helpen. Dat leer je in dit pad.\n\n**Heel belangrijk**: bij twijfel **altijd checken** in een woordenboek. Zelfs volwassenen googlen 'reis ei of ij?' — niemand kent ze allemaal.\n\n**Geheugentruc 'kort vs lang'**:\n• **ei** heet ook wel **'korte ei'** *(omdat je 'm korter schrijft)*\n• **ij** heet ook wel **'lange ij'** *(omdat 'ie hoger reikt)*\n• **au** heet 'au'\n• **ou** heet 'ou'\n\n**In dit pad**:\n1. Woorden met **ei** (korte ei)\n2. Woorden met **ij** (lange ij)\n3. Woorden met **au**\n4. Woorden met **ou**\n5. Trucjes om te onthouden\n6. Eindopdracht",
    svg: woordenTabelSvg("ei", "ij", COLORS.ei, COLORS.ij, ["reis","klein","trein"], ["rijst","kijken","blij"]),
    checks: [
      {
        q: "Wat zijn **homofonen**?",
        options: ["Woorden die hetzelfde klinken, anders geschreven","Woorden die hetzelfde betekenen","Woorden die op elkaar rijmen","Woorden met dezelfde letters"],
        answer: 0,
        wrongHints: [null,"Niet — dat zijn synoniemen; het gaat hier om klank en spelling.","Niet — rijmwoorden klinken alleen aan het eind hetzelfde.","Niet — kijk naar klank en spelling."],
        uitlegPad: {
          stappen: [{ titel: "homo + foon", tekst: "Homo = gelijk. Foon = klank/geluid. Homofoon = woorden met gelijke KLANK maar andere SPELLING." }],
          woorden: [{ woord: "homofoon", uitleg: "Twee woorden die identiek klinken maar verschillend geschreven worden." }],
          theorie: "ei/ij en au/ou zijn de bekendste homofonen in het Nederlands.",
          voorbeelden: [{ type: "paar", tekst: "reist (ei) klinkt identiek aan rijst (ij)." }],
          basiskennis: [{ onderwerp: "Niet over telefoon", uitleg: "Het Griekse 'foon' betekent klank/geluid (zoals symFONIE)." }],
          niveaus: { basis: "Hetzelfde klinken, anders schrijven.", simpeler: "Homofoon = twee woorden die identiek klinken maar verschillend geschreven worden.", nogSimpeler: "Klinkt hetzelfde" },
        },
      },
      {
        q: "Klinken **'reist'** en **'rijst'** hetzelfde?",
        options: ["Ja, identiek","Nee, totaal verschillend","Ja maar 'rijst' is iets langer","Nee, 'reis' is hoger"],
        answer: 0,
        wrongHints: [null,"Zeg ze allebei langzaam hardop. Hoor je verschil?","Geen verschil in lengte.","Geen verschil in toon."],
        uitlegPad: {
          stappen: [{ titel: "Test: spreek uit", tekst: "Spreek 'reist' (ei) uit. Spreek 'rijst' (ij) uit. Verschil? NEE — 100% identiek." }],
          woorden: [{ woord: "reist", uitleg: "Met ei: van reizen (hij reist naar Spanje)." }, { woord: "rijst", uitleg: "Met ij: voedsel (witte korreltjes uit Azië)." }],
          theorie: "Homofoon-test: spreek beide hardop uit. Klinken identiek = homofoon. Alleen schrijfwijze verschilt.",
          voorbeelden: [{ type: "paar", tekst: "Hij reist = hij gaat op reis. Hij eet rijst = hij eet voedsel. Klinkt hetzelfde, maar de betekenis is ANDERS." }],
          basiskennis: [{ onderwerp: "500 jaar geleden", uitleg: "Vroeger klonken ei en ij wél verschillend — nu uitspraak samengesmolten." }],
          niveaus: { basis: "Ja, identiek.", simpeler: "Spreek hardop: r-ei-st en r-ij-st. Geen verschil in klank.", nogSimpeler: "Identiek" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoe noem je de **ei** in 'klein' ook wel?",
        options: ["korte ei", "lange ij", "dubbele e", "korte i"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de naam van de andere schrijfwijze, zoals in 'tijd'.",
          null,
          "Kijk naar de twee letters: e en i.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Twee namen",
              tekst: "De ei (e + i) heet de korte ei. De ij heet de lange ij.",
            },
          ],
          woorden: [
            {
              woord: "korte ei",
              uitleg: "De ei, zoals in klein, trein en plein.",
            },
          ],
          theorie: "ei = korte ei, ij = lange ij. Ze klinken hetzelfde, maar je schrijft ze anders.",
          voorbeelden: [
            {
              type: "lijst",
              tekst: "korte ei: klein, trein. Lange ij: tijd, wij.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Waarom kort en lang?",
              uitleg: "Ezelsbruggetje: de j van ij steekt ver onder de regel uit, dus die lijkt langer.",
            },
          ],
          niveaus: {
            basis: "klein = korte ei.",
            simpeler: "In klein schrijf je e + i. Die heet de korte ei.",
            nogSimpeler: "Korte ei",
          },
        },
      },
      {
        q: "Welke klank klinkt **hetzelfde** als **au**?",
        options: ["ou", "oe", "aa", "uu"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg 'auto' en 'oeto'. Klinkt dat gelijk?",
          null,
          "Zeg ze allebei hardop. Klinken ze echt gelijk?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Hardop testen",
              tekst: "Zeg 'rauw' en 'rouw'. Je hoort geen verschil. Dus au en ou klinken hetzelfde.",
            },
          ],
          woorden: [
            {
              woord: "au en ou",
              uitleg: "Twee schrijfwijzen voor dezelfde klank.",
            },
          ],
          theorie: "au en ou klinken hetzelfde. Je moet per woord weten welke je schrijft.",
          voorbeelden: [
            {
              type: "paar",
              tekst: "rauw (au) en rouw (ou) klinken precies gelijk.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Net als ei en ij",
              uitleg: "Bij ei en ij is het net zo: één klank, twee schrijfwijzen.",
            },
          ],
          niveaus: {
            basis: "au = ou in klank.",
            simpeler: "au en ou klinken gelijk. Bijvoorbeeld rauw en rouw.",
            nogSimpeler: "au = ou",
          },
        },
      },
      {
        q: "Hoe weet je of je een woord met **ei** of **ij** schrijft?",
        options: [
          "Je moet het woord kennen of opzoeken",
          "Je hoort het aan de klank",
          "Lange woorden hebben altijd ij",
          "Woorden met een e erin hebben ei",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Klinken ei en ij anders? Zeg 'reist' en 'rijst'.",
          null,
          "Denk aan 'hij leest'. Zit daar een ei in?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Leren en opzoeken",
              tekst: "Er is geen vaste regel. Je leert de woorden uit je hoofd. Twijfel je? Zoek het op in een woordenboek.",
            },
          ],
          woorden: [
            {
              woord: "woordenboek",
              uitleg: "Boek of website waarin je kunt zien hoe je een woord schrijft.",
            },
          ],
          theorie: "ei of ij hoor je niet. Je moet het woord kennen. Trucjes helpen, en een woordenboek ook.",
          voorbeelden: [
            {
              type: "tip",
              tekst: "Twijfel over 'trein'? Zoek het op: trein, met ei.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Iedereen twijfelt",
              uitleg: "Ook volwassenen zoeken soms op of een woord met ei of ij is.",
            },
          ],
          niveaus: {
            basis: "Kennen of opzoeken.",
            simpeler: "Je hoort het verschil niet. Dus: woord leren, of opzoeken in een woordenboek.",
            nogSimpeler: "Opzoeken",
          },
        },
      },
    ],
  },
  {
    title: "Woorden met EI (korte ei)",
    explanation: "Hier de belangrijkste woorden met **ei**. Deze leer je uit je hoofd.\n\n**Veelgebruikte ei-woorden**:\n\n| Werkwoorden | Zelfstandige naamwoorden | Andere |\n|---|---|---|\n| reis(zen) | trein | klein |\n| reizen | reis | hein (naam) |\n| breien | leider | wei |\n| zeilen | meisje | reine |\n| eisen | beide | brein |\n| weiden | wei | steil |\n| seinen | trein | rein |\n\n**Belangrijke ei-woorden om te kennen**:\n• **trein** — vervoer\n• **klein** — niet groot\n• **reis** — gaan ergens heen\n• **meisje** — meidje, jong vrouwelijk\n• **leider** — iemand die leidt\n• **eind** — einde van iets\n• **plein** — open ruimte in stad\n• **vlees** — wacht, dit is GEEN ei! 'vlees' = ee. Goed opletten.\n\n**Trucje 1: hoor je 'eind'?**\nVeel woorden met 'eind' (= einde) hebben **ei**: eindigen, einde, eindelijk.\n\n**Trucje 2: tweede letter is i (ei)**\n'Korte ei' is letterlijk: e-i. Twee letters die samen klinken als één klank.\n\n**Veelvoorkomende fouten**:\n• 'klijn' ❌ — moet 'klein' ✓\n• 'rijs' ❌ — moet 'reis' ✓\n• 'mij' ✓ wel correct (ij in 'mij')\n\nDus 'klein' en 'reis' = ei. Die zijn handig om te onthouden.\n\n**Verkleinwoorden en meervouden** houden hun klank:\n• klein → kleintje (ei blijft)\n• meisje → meisjes (ei blijft)\n• trein → treinen (ei blijft)",
    svg: woordenTabelSvg("ei (korte)", "Voorbeelden", COLORS.ei, COLORS.warm, ["klein","reis","trein","plein","meisje","eind","leider","brein","weiden"], ["eiland","keizer","zeil","dweil","feit","reiziger"]),
    checks: [
      {
        q: "Hoe schrijf je: het voertuig op rails?",
        options: ["trein","trijn","tryn","train"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen korte ei en lange ij.","Geen Nederlandse spelling.","Dat is Engels."],
        uitlegPad: {
          stappen: [{ titel: "trein = ei", tekst: "Trein hoort in het 'klein-rein-trein-plein' rijtje — allemaal ei." }],
          woorden: [{ woord: "trein", uitleg: "Voertuig op rails. Komt van Frans 'train' = sleep/rij." }],
          theorie: "ei-ezelsbrug: 'klein, plein, trein, rein, eind, brein' — onthoud als groep.",
          voorbeelden: [{ type: "rijm", tekst: "De trein staat klein op het plein." }],
          basiskennis: [{ onderwerp: "Geen 'tryn'", uitleg: "y wordt in het NL bijna nooit gebruikt voor deze klank." }],
          niveaus: { basis: "trein = ei.", simpeler: "Trein hoort bij klein/plein/rein — allemaal met ei (korte ei).", nogSimpeler: "Ei" },
        },
      },
      {
        q: "Hoe schrijf je: niet groot?",
        options: ["klein","klijn","kleyn","kleen"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen korte ei en lange ij.","Geen Nederlandse spelling.","Geen Nederlandse spelling."],
        uitlegPad: {
          stappen: [{ titel: "klein = ei", tekst: "Klein staat in het ei-rijtje 'klein-plein-trein-rein'." }],
          woorden: [{ woord: "klein", uitleg: "Niet groot. Bijvoeglijk naamwoord met ei." }],
          theorie: "Klein-familie: klein, kleinkind, kleintje — allemaal met ei.",
          voorbeelden: [{ type: "rijm", tekst: "Een kleine jongen op een groot plein." }],
          basiskennis: [{ onderwerp: "klijn bestaat niet", uitleg: "'Klijn' is geen Nederlands woord. Wel een achternaam (Klijn)." }],
          niveaus: { basis: "klein = ei.", simpeler: "Klein = ei (korte ei). Net als plein, trein, rein. 'Klijn' is geen woord.", nogSimpeler: "Ei" },
        },
      },
      {
        q: "Hoe schrijf je: een open ruimte in een stad?",
        options: ["plein","plijn","pleyn","plyn"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen korte ei en lange ij.","Geen Nederlandse spelling.","Geen Nederlandse spelling."],
        uitlegPad: {
          stappen: [{ titel: "plein = ei", tekst: "Plein hoort in 'klein-plein-trein' — allemaal ei. Onthoud groep." }],
          woorden: [{ woord: "plein", uitleg: "Open ruimte midden in stad of dorp." }],
          theorie: "ei-ezelsbrug 'klein-plein-trein-rein-brein-eind' — leer als geheel.",
          voorbeelden: [{ type: "rijm", tekst: "Op het plein staat een trein die klein is." }],
          basiskennis: [{ onderwerp: "Toets-strikvraag", uitleg: "Plein/plijn lijkt op rijm (klein/klijn). Beide ei!" }],
          niveaus: { basis: "plein = ei.", simpeler: "Plein staat in ei-groep met klein/trein/rein. Allemaal ei.", nogSimpeler: "Ei" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "'Het ____ speelt met haar pop.' Welk woord is goed?",
        options: ["meisje", "mijsje", "maisje", "meissje"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna — kies nog eens tussen korte ei en lange ij.",
          "Geen Nederlandse spelling.",
          "Tel de s'en nog eens.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "meisje = ei",
              tekst: "Meisje schrijf je met ei, de korte ei.",
            },
          ],
          woorden: [
            {
              woord: "meisje",
              uitleg: "Een jong kind dat een vrouw wordt als het groot is.",
            },
          ],
          theorie: "Meisje is een ei-woord. Ook in het meervoud blijft de ei: meisjes.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Het meisje en de meisjes — allebei met ei.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eén s",
              uitleg: "Meisje heeft maar één s: m-ei-s-j-e.",
            },
          ],
          niveaus: {
            basis: "meisje = ei.",
            simpeler: "Meisje schrijf je met ei. Meer meisjes: meisjes, ook met ei.",
            nogSimpeler: "Ei",
          },
        },
      },
      {
        q: "'De les gaat om drie uur ____.' (= ophouden)",
        options: ["eindigen", "ijndigen", "eindiegen", "eintigen"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna — kies nog eens tussen korte ei en lange ij.",
          "Kijk goed naar het stukje na de d.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "eind-woorden = ei",
              tekst: "Eindigen komt van eind. Woorden met eind hebben ei.",
            },
          ],
          woorden: [
            {
              woord: "eindigen",
              uitleg: "Ophouden, klaar zijn.",
            },
          ],
          theorie: "Trucje: hoor je 'eind'? Dan schrijf je ei. Eind, einde, eindigen, eindelijk.",
          voorbeelden: [
            {
              type: "lijst",
              tekst: "eind, einde, eindigen — allemaal ei.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "d blijft d",
              uitleg: "Eind eindigt op d, dus eindigen ook: ein-d-igen.",
            },
          ],
          niveaus: {
            basis: "eindigen = ei.",
            simpeler: "Eindigen komt van eind. Eind heeft ei, dus eindigen ook.",
            nogSimpeler: "Ei",
          },
        },
      },
      {
        q: "Hoe schrijf je: het grasland waar koeien grazen?",
        options: ["wei", "weij", "wai", "wey"],
        answer: 0,
        wrongHints: [null, "Kijk naar het eind: is daar een j nodig?", "Geen Nederlandse spelling.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "wei = ei",
              tekst: "Een wei is een weiland: gras waar koeien staan. Met ei.",
            },
          ],
          woorden: [
            {
              woord: "wei",
              uitleg: "Grasland voor koeien, schapen of paarden.",
            },
          ],
          theorie: "Wei is een ei-woord. Wij (zoals 'wij gaan') is een voornaamwoord, en dat is een ander woord.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "De koeien staan in de wei.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Weiland",
              uitleg: "Een wei heet ook weiland. Ook met ei.",
            },
          ],
          niveaus: {
            basis: "wei = ei.",
            simpeler: "Het gras voor koeien is de wei, met ei. Niet hetzelfde als 'wij'.",
            nogSimpeler: "Ei",
          },
        },
      },
      {
        q: "Welk woord schrijf je met **ei**?",
        options: ["leider", "lijst", "krijgen", "rijden"],
        answer: 0,
        wrongHints: [null, "Dit woord heeft een lange ij.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "leider = ei",
              tekst: "Een leider is iemand die de groep leidt. Leider schrijf je met ei.",
            },
          ],
          woorden: [
            {
              woord: "leider",
              uitleg: "Iemand die een groep leidt, zoals een kampleider.",
            },
          ],
          theorie: "Ei-woorden uit dit stuk: trein, klein, plein, meisje, leider, eind.",
          voorbeelden: [
            {
              type: "lijst",
              tekst: "leider, trein, meisje — ei. lijst, krijgen, rijden — ij.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Uit je hoofd",
              uitleg: "Welke van de twee het is, moet je per woord leren.",
            },
          ],
          niveaus: {
            basis: "leider = ei.",
            simpeler: "Leider heeft ei. Lijst, krijgen en rijden hebben ij.",
            nogSimpeler: "Ei",
          },
        },
      },
    ],
  },
  {
    title: "Woorden met IJ (lange ij)",
    explanation: "Hier de belangrijkste woorden met **ij**.\n\n**Veelgebruikte ij-woorden**:\n\n| Werkwoorden | Zelfstandige naamwoorden | Andere |\n|---|---|---|\n| blijven | rijst | wij |\n| krijgen | tijd | bij |\n| schrijven | rij | hij |\n| rijden | wijn | jij |\n| stijgen | strijd | mij |\n| zwijgen | feit (wacht, dit is **ei**!) | zij |\n\n**Belangrijke ij-woorden om te kennen**:\n• **tijd** — uren/dagen\n• **wij/jij/hij/zij/mij** — alle voornaamwoorden!\n• **bij** — een diertje + voorzetsel\n• **rijst** — voedsel\n• **rijden** — auto besturen\n• **schrijven** — letters maken\n• **wijn** — drank\n• **prijs** — kosten of beloning\n• **lijst** — opsomming\n• **strijd** — gevecht\n\n**Trucje 1: voornaamwoorden**\nIedereen die 'ik' bedoelt of een ander persoon → **ij**:\n• ik → mij\n• jij\n• hij\n• zij (en zij = meervoud)\n• wij\n\n**Trucje 2: '-tijd'**\nWoorden met -tijd hebben altijd ij:\n• tijd, altijd, een tijdje, op tijd, vrije tijd.\n\n**Trucje 3: 'rij'**\nWoorden met -rij of rij- hebben ij:\n• rij, rijden, rijst, rijbewijs, rijles.\n\n**Combinatieoefening**:\nWelk woord heeft ei vs ij?\n\n• \"kl __ n\" → klein? klijn? → **klein** (ei). 'Klijn' bestaat niet.\n• \"r __ st\" → reist? rijst? → **rijst** (ij, voedsel). Of \"reist\" (ei) van 'reizen'. Beide bestaan! De zin bepaalt welke.\n\n**Voorbeeld waar context bepaalt**:\n• 'Ik **reis** naar Spanje' → reizen, ei.\n• 'Ik eet **rijst**' → voedsel, ij.\n• 'De boom **rijst** omhoog' → groeien/stijgen, ij.\n\n**Veelvoorkomende fouten**:\n• 'eend' (de vogel) heeft **ee**, niet ei of ij.\n• 'ein' (zoals 'eindigen') heeft **ei**.\n• 'tein' bestaat niet — 'trein' heeft ei.\n\n**Tip om te oefenen**: schrijf elke dag 5 woorden met ei en 5 met ij in zinnen. Na een tijdje voel je het verschil.",
    svg: woordenTabelSvg("ij (lange)", "Voorbeelden", COLORS.ij, COLORS.warm, ["tijd","wij","jij","hij","zij","mij","bij","rijst","schrijven","rijden","prijs"], ["kijken","blijven","wijzer","fijn","dijk","vlijt"]),
    checks: [
      {
        q: "Welk persoonlijk voornaamwoord heeft **ij**?",
        options: ["wij","jullie","wei","ons"],
        answer: 0,
        wrongHints: [null,"Zoek een woord met ij erin.","Is dit een voornaamwoord? Denk aan ik, jij, wij…","Zoek een woord met ij erin."],
        uitlegPad: {
          stappen: [{ titel: "Voornaamwoorden = ij", tekst: "Wij, jij, hij, zij en mij schrijf je altijd met ij, nooit met ei." }],
          woorden: [{ woord: "voornaamwoord", uitleg: "Woord dat een persoon vervangt: ik, jij, hij, zij, wij, jullie." }],
          theorie: "Hoofdregel: de voornaamwoorden jij, hij, zij, wij en mij schrijf je altijd met ij (lange ij), nooit met ei.",
          voorbeelden: [{ type: "lijst", tekst: "mij, jij, hij, zij, wij — allemaal ij." }],
          basiskennis: [{ onderwerp: "wei vs wij", uitleg: "Een wei is een weiland: gras waar koeien staan. Wij is een persoonlijk voornaamwoord. Ze klinken hetzelfde, maar je schrijft ze anders." }],
          niveaus: { basis: "wij = ij.", simpeler: "Voornaamwoorden zoals wij/jij/hij/mij hebben altijd ij. Wei en wijn zijn andere woorden.", nogSimpeler: "Voornaamwoord = ij" },
        },
      },
      {
        q: "Hoe schrijf je: het voedsel uit Azië (witte korreltjes)?",
        options: ["rijst","reist","reize","rijz"],
        answer: 0,
        wrongHints: [null,"'reist' = van reizen.","Geen Nederlandse spelling.","Geen Nederlandse spelling."],
        uitlegPad: {
          stappen: [{ titel: "rijst = ij", tekst: "Voedsel = rijst (ij). Werkwoord van reizen = reist (ei). Context bepaalt!" }],
          woorden: [{ woord: "rijst", uitleg: "Voedsel uit Azië, met ij." }, { woord: "reist", uitleg: "Werkwoordsvorm van reizen, met ei." }],
          theorie: "Klassieke homofoon: rijst (eten, ij) ≠ reist (op reis gaan, ei). Beide bestaan!",
          voorbeelden: [{ type: "context", tekst: "Hij eet rijst (ij). Hij reist naar Spanje (ei)." }],
          basiskennis: [{ onderwerp: "Truc voor rijst", uitleg: "Onthoud: 'r-ij-st' staat op verpakking — kijk maar naar pak rijst." }],
          niveaus: { basis: "rijst (eten) = ij.", simpeler: "Witte korreltjes = rijst met ij. Reist met ei = werkwoord (op reis gaan).", nogSimpeler: "Ij" },
        },
      },
      {
        q: "Hoe schrijf je: hoeveel uur het is?",
        options: ["tijd","teid","tied","tijt"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen korte ei en lange ij.","Geen Nederlandse spelling.","Bijna — maak het woord langer (meervoud). Hoor je dan een t of een d?"],
        uitlegPad: {
          stappen: [{ titel: "tijd = ij", tekst: "Tijd is een -tijd-woord. Alle -tijd-woorden hebben ij." }],
          woorden: [{ woord: "tijd", uitleg: "Wat de klok aangeeft. Met ij." }],
          theorie: "-tijd-regel: tijd, altijd, vrije tijd, werktijd, op tijd — allemaal met ij.",
          voorbeelden: [{ type: "lijst", tekst: "tijd, altijd, vroeg op tijd, vrije tijd, lange tijd." }],
          basiskennis: [{ onderwerp: "Truc tijd", uitleg: "T-IJ-D — i+j staat als de wijzers van een klok." }],
          niveaus: { basis: "tijd = ij.", simpeler: "Tijd hoort in -tijd-groep: altijd, vrije tijd, werktijd. Allemaal met ij.", nogSimpeler: "Ij" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "'Ik ga een brief ____ aan opa.' Welk woord is goed?",
        options: ["schrijven", "schreiven", "schrijfen", "sgrijven"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna — kies nog eens tussen korte ei en lange ij.",
          "Hoor je hier een f of een v?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "schrijven = ij",
              tekst: "Schrijven heeft een lange ij.",
            },
          ],
          woorden: [
            {
              woord: "schrijven",
              uitleg: "Letters en woorden maken met een pen of op een toetsenbord.",
            },
          ],
          theorie: "Schrijven is een ij-woord. Ook: ik schrijf, hij schrijft.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Ik schrijf een brief. Wij schrijven samen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "v in schrijven",
              uitleg: "Bij schrijven hoor je een v: schrij-ven.",
            },
          ],
          niveaus: {
            basis: "schrijven = ij.",
            simpeler: "Schrijven heeft ij, de lange ij. Met sch aan het begin en v in het midden.",
            nogSimpeler: "Ij",
          },
        },
      },
      {
        q: "'Wij ____ vandaag lekker thuis.' Welk woord is goed?",
        options: ["blijven", "bleiven", "blijfen", "bleifen"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna — kies nog eens tussen korte ei en lange ij.",
          "Hoor je hier een f of een v?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "blijven = ij",
              tekst: "Blijven heeft een lange ij.",
            },
          ],
          woorden: [
            {
              woord: "blijven",
              uitleg: "Ergens zijn en niet weggaan.",
            },
          ],
          theorie: "Blijven is een ij-woord. Ook: ik blijf, hij blijft.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Wij blijven thuis. Ik blijf even.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "v in blijven",
              uitleg: "In blijven hoor je een v: blij-ven.",
            },
          ],
          niveaus: {
            basis: "blijven = ij.",
            simpeler: "Blijven heeft ij. Met een v in het midden.",
            nogSimpeler: "Ij",
          },
        },
      },
      {
        q: "'Op mijn verjaardag ____ ik een cadeau.' Welk woord is goed?",
        options: ["krijg", "kreig", "kraig", "kryg"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna — kies nog eens tussen korte ei en lange ij.",
          "Geen Nederlandse spelling.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "krijgen = ij",
              tekst: "Krijgen heeft een lange ij. Ik krijg, jij krijgt.",
            },
          ],
          woorden: [
            {
              woord: "krijgen",
              uitleg: "Iets aangeboden krijgen, iets ontvangen.",
            },
          ],
          theorie: "Krijgen is een ij-woord. Ook: ik krijg, wij krijgen.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Ik krijg een cadeau. Wij krijgen taart.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geen y",
              uitleg: "De y gebruik je in het Nederlands bijna nooit voor deze klank.",
            },
          ],
          niveaus: {
            basis: "krijg = ij.",
            simpeler: "Krijgen heeft ij, dus 'ik krijg' ook.",
            nogSimpeler: "Ij",
          },
        },
      },
      {
        q: "'Mijn zus leert ____ op een paard.' Welk woord is goed?",
        options: ["rijden", "reiden", "ryden", "rijdden"],
        answer: 0,
        wrongHints: [null, "Bijna — kies nog eens tussen korte ei en lange ij.", null, "Tel de d's nog eens."],
        uitlegPad: {
          stappen: [
            {
              titel: "rijden = ij",
              tekst: "Rijden heeft een lange ij. Trucje: woorden met rij hebben ij.",
            },
          ],
          woorden: [
            {
              woord: "rijden",
              uitleg: "Op een fiets of paard, of in een auto vooruitgaan.",
            },
          ],
          theorie: "Rij-woorden: rij, rijden, rijbewijs, rijles — allemaal ij.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Ik leer paardrijden. Wij rijden naar huis.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eén d",
              uitleg: "Rijden heeft één d: rij-den.",
            },
          ],
          niveaus: {
            basis: "rijden = ij.",
            simpeler: "Rijden hoort bij het rij-rijtje: rij, rijles, rijbewijs. Allemaal ij.",
            nogSimpeler: "Ij",
          },
        },
      },
      {
        q: "'Wat moeten we kopen? Kijk even op de ____.'",
        options: ["lijst", "leist", "lyst", "lijsd"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna — kies nog eens tussen korte ei en lange ij.",
          null,
          "Hoor je aan het eind een t of een d?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "lijst = ij",
              tekst: "Een lijst is een rijtje dingen onder elkaar. Met ij.",
            },
          ],
          woorden: [
            {
              woord: "lijst",
              uitleg: "Rijtje woorden onder elkaar, zoals een boodschappenlijst.",
            },
          ],
          theorie: "Lijst is een ij-woord. Ook: boodschappenlijst, verlanglijst.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Op de lijst staan melk, brood en kaas.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eind op t",
              uitleg: "Lijst eindigt op st: lij-s-t.",
            },
          ],
          niveaus: {
            basis: "lijst = ij.",
            simpeler: "Lijst schrijf je met ij en eindigt op st.",
            nogSimpeler: "Ij",
          },
        },
      },
    ],
  },
  {
    title: "Trucjes om ei vs ij te kiezen",
    explanation: "**Lastig blijft het**: er zijn geen vaste regels die altijd werken. Maar deze trucjes helpen.\n\n**Trucje 1: voornaamwoorden = altijd ij**\n• mij, jij, hij, zij, wij\n\n**Trucje 2: -tijd, -lijk, -rij, -wij = ij**\n• tijd, altijd, vrije tijd\n• moeilijk, gemakkelijk, eindelijk (let op: 'eind' heeft ei!)\n• rij, rijden, rijst\n\n**Trucje 3: 'klein-rein-eind' = ei**\nBekende ei-woorden: klein, rein, einde, eind, plein, trein, brein.\n\n**Trucje 4: schrijfwijze van familie**\n• Achternamen met 'ij' (Klijn) of 'ei' (Klein) — onthoud die.\n• Plaats- en straatnamen: leer ze uit het hoofd.\n\n**Trucje 5: lopen-test (alleen werkwoord)**\nVoor werkwoordsvormen: vervang door **lopen**:\n• 'Hij rijdt' → vervang: 'hij loopt'. Klinkt beide met t-einde. Goed.\n• Maar dat zegt niets over ei/ij.\n• Niet zo nuttig hier.\n\n**Trucje 6: woordverwante woorden**\nKijk naar verwante woorden waarvan je de spelling wel kent:\n• 'reizen' → 'reisbureau' (ei).\n• 'rijden' → 'rijbewijs' (ij).\n\n**Trucje 7: mnemonics (zinnetjes onthouden)**\nVeel scholen leren rijmpjes om woorden in groepjes te onthouden:\n• \"De **trein** rijdt naar het **kleine** **plein**.\"\n• \"De **bij** vliegt **bij** de **wijn**flessen, terwijl **wij** **rijst** eten.\"\n\n**Trucje 8: lezen lezen lezen**\nDe BESTE manier: veel boeken lezen. Je gaat de juiste schrijfwijze automatisch herkennen — net zoals je 't gehoord hebt.\n\n**Wat als je écht twijfelt?**\n• **Woordenboek** — zoek het woord op in woordenboek of online.\n• **Verstandig schrijven**: in informele berichten (whatsapp) is 't OK om gewoon door te schrijven en achteraf te checken. Op school: schrijven, dan controleren.",
    svg: woordenTabelSvg("ei", "ij", COLORS.ei, COLORS.ij, ["klein","plein","trein","reis","brein","eind","meisje","weide"], ["mij","jij","hij","wij","tijd","rijst","schrijven","prijs"]),
    checks: [
      {
        q: "Hoe schrijf je: op elk moment, steeds?",
        options: ["altijd","alteid","altijt","altyd"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen korte ei en lange ij.","Bijna — denk aan het woord tijden. Hoor je een t of een d?","De 'y' wordt in modern Nederlands niet gebruikt voor deze klank."],
        uitlegPad: {
          stappen: [{ titel: "altijd = ij", tekst: "Al + tijd = altijd. Want -tijd heeft altijd ij." }],
          woorden: [{ woord: "altijd", uitleg: "Steeds, op elk moment. Samenstelling: al + tijd." }],
          theorie: "Samenstellingen met -tijd: altijd, op tijd, eindtijd, sluitingstijd. Allemaal ij.",
          voorbeelden: [{ type: "regel", tekst: "Tijd → altijd → bedtijd → vrije tijd. Allemaal ij." }],
          basiskennis: [{ onderwerp: "Geen tijdt", uitleg: "Tijdt bestaat niet. Tijden (meervoud) wel." }],
          niveaus: { basis: "altijd = ij.", simpeler: "Altijd = al + tijd. Tijd heeft ij, dus altijd ook.", nogSimpeler: "Ij" },
        },
      },
      {
        q: "Hoe schrijf je: wat iets kost?",
        options: ["prijs","preis","prijz","prys"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen korte ei en lange ij.","Bijna — aan het eind van een woord schrijf je hier geen z.","De 'y' wordt in modern Nederlands niet meer gebruikt voor deze klank."],
        uitlegPad: {
          stappen: [{ titel: "prijs = ij", tekst: "Prijs (kosten) heeft ij. Familie: prijslijst, prijswinnaar — allemaal ij." }],
          woorden: [{ woord: "prijs", uitleg: "Kosten van iets, of beloning bij wedstrijd." }],
          theorie: "Veel handels-woorden met ij: prijs, lijst, rij, prijskaartje.",
          voorbeelden: [{ type: "zin", tekst: "De prijs van rijst stijgt. Drie ij in één zin!" }],
          basiskennis: [{ onderwerp: "y is geen NL", uitleg: "y wordt in NL bijna nooit gebruikt voor de ei/ij-klank. Dus prys = fout." }],
          niveaus: { basis: "prijs = ij.", simpeler: "Prijs (kosten) heeft ij. Komt vaak met -ij in handelswoorden voor.", nogSimpeler: "Ij" },
        },
      },
      {
        q: "Welk woord is **goed** geschreven?",
        options: ["klein","klijn","kleyn","klyn"],
        answer: 0,
        wrongHints: [null,"Bestaat niet in deze schrijfwijze.","De 'ey'-combinatie wordt in Nederlands niet gebruikt voor deze klank.","De 'y' wordt in modern Nederlands niet meer gebruikt."],
        uitlegPad: {
          stappen: [{ titel: "klein = ei", tekst: "Alleen 'klein' is een echt Nederlands woord — met ei. Andere opties bestaan niet." }],
          woorden: [{ woord: "klein", uitleg: "Niet groot. Bijvoeglijk naamwoord met ei." }],
          theorie: "ei-rijtje 'klein-plein-trein' — leer als geheel.",
          voorbeelden: [{ type: "trio", tekst: "klein, plein, trein — drie ei-broers." }],
          basiskennis: [{ onderwerp: "Schrap nep-woorden", uitleg: "Klijn, kleyn, klyn = bestaan niet als gewoon NL woord." }],
          niveaus: { basis: "klein = ei.", simpeler: "Klein heeft ei. Andere opties zijn geen Nederlandse woorden.", nogSimpeler: "Ei" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je twijfelt bij het woord **bedtijd**. Welk trucje helpt je?",
        options: [
          "Het eindigt op -tijd, dus ij",
          "Het is een voornaamwoord, dus ij",
          "Het rijmt op klein, dus ei",
          "Het begint met aug-, dus au",
        ],
        answer: 0,
        wrongHints: [null, "Is bedtijd een woord als jij, hij of wij?", null, "Zit er een au-klank in bedtijd?"],
        uitlegPad: {
          stappen: [
            {
              titel: "-tijd = ij",
              tekst: "Bedtijd = bed + tijd. Woorden met -tijd hebben altijd ij.",
            },
          ],
          woorden: [
            {
              woord: "bedtijd",
              uitleg: "Het moment dat je naar bed gaat.",
            },
          ],
          theorie: "Trucje: -tijd = ij. Tijd, altijd, bedtijd, op tijd.",
          voorbeelden: [
            {
              type: "lijst",
              tekst: "tijd, altijd, bedtijd — allemaal ij.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Woord in stukjes",
              uitleg: "Knip een lang woord in stukjes: bed + tijd.",
            },
          ],
          niveaus: {
            basis: "-tijd = ij.",
            simpeler: "Bedtijd eindigt op tijd. Tijd heeft ij, dus bedtijd ook.",
            nogSimpeler: "Tijd = ij",
          },
        },
      },
      {
        q: "Welk woord hoort in het ei-rijtje **klein, rein, plein**?",
        options: ["trein", "tijd", "wij", "prijs"],
        answer: 0,
        wrongHints: [null, "Dit woord heeft een lange ij.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "ei-rijtje",
              tekst: "Klein, rein, plein en trein: allemaal met ei, de korte ei.",
            },
          ],
          woorden: [
            {
              woord: "rijtje",
              uitleg: "Een groepje woorden dat je samen onthoudt.",
            },
          ],
          theorie: "Trucje: klein, rein, plein, trein, eind — leer ze als groep, allemaal ei.",
          voorbeelden: [
            {
              type: "rijm",
              tekst: "De trein rijdt naar het kleine plein.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Rijm helpt",
              uitleg: "Klein, plein, trein rijmen ook nog. Dat maakt onthouden makkelijker.",
            },
          ],
          niveaus: {
            basis: "trein = ei.",
            simpeler: "Trein rijmt op klein en plein, en heeft ook ei.",
            nogSimpeler: "Ei",
          },
        },
      },
      {
        q: "'Het is ____ vakantie!' (na lang wachten) Welk woord is goed?",
        options: ["eindelijk", "ijndelijk", "eindeleik", "ijndeleik"],
        answer: 0,
        wrongHints: [
          null,
          "Het begin komt van eind. Hoe schrijf je eind?",
          null,
          "Kijk naar begin en eind van het woord.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "eind + -lijk",
              tekst: "Eindelijk = eind (ei) + -lijk (ij). Er zitten dus twee verschillende in!",
            },
          ],
          woorden: [
            {
              woord: "eindelijk",
              uitleg: "Na lang wachten, nu toch.",
            },
          ],
          theorie: "Trucje: eind = ei. Het stukje -lijk aan het eind schrijf je met ij, zoals in moeilijk.",
          voorbeelden: [
            {
              type: "woord",
              tekst: "eind-e-lijk: eerst ei, dan ij.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Let op",
              uitleg: "Eindelijk is een lastig woord: het begint met ei en eindigt met -lijk.",
            },
          ],
          niveaus: {
            basis: "eindelijk = ei + ij.",
            simpeler: "Eerst eind (ei), dan -lijk (ij). Zo krijg je eindelijk.",
            nogSimpeler: "Ei, dan ij",
          },
        },
      },
      {
        q: "'Deze som is best ____.' (= niet makkelijk) Welk woord is goed?",
        options: ["moeilijk", "moeileik", "moeilek", "moeilijck"],
        answer: 0,
        wrongHints: [
          null,
          "Hoe schrijf je het stukje aan het eind, zoals in eindelijk?",
          null,
          "Hoe eindigt het woord? Tel de letters na de ij.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "-lijk = ij",
              tekst: "Woorden die eindigen op -lijk schrijf je met ij: moeilijk, gemakkelijk, eindelijk.",
            },
          ],
          woorden: [
            {
              woord: "moeilijk",
              uitleg: "Lastig, niet makkelijk.",
            },
          ],
          theorie: "Trucje: het stukje -lijk aan het eind van een woord schrijf je met ij.",
          voorbeelden: [
            {
              type: "lijst",
              tekst: "moeilijk, gemakkelijk, eindelijk — allemaal -lijk.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geen ck",
              uitleg: "In het Nederlands eindigt -lijk gewoon op een k.",
            },
          ],
          niveaus: {
            basis: "moeilijk = -lijk.",
            simpeler: "Moeilijk eindigt op -lijk, en -lijk schrijf je met ij.",
            nogSimpeler: "-lijk",
          },
        },
      },
    ],
  },
  {
    title: "Woorden met AU",
    explanation: "Nu **au** versus **ou** — hetzelfde gedoe als ei/ij.\n\n**Au** en **ou** klinken **identiek** in het Nederlands. Maar ze worden anders gespeld.\n\n**Veelgebruikte au-woorden**:\n\n| Werkwoorden | Zelfstandige naamwoorden | Andere |\n|---|---|---|\n| pauzeren | pauze | nauw |\n| sausen | saus | gauw |\n| kauwen | klauw | rauw |\n| flauw | augurk | blauwen |\n| auto | augustus | klauwen |\n| vrouw (wacht — dit is OU!) | flauw | dauw |\n\n**Belangrijke au-woorden om te kennen**:\n• **auto** — voertuig\n• **augustus** — maand 8\n• **augurk** — groente\n• **gauw** — snel\n• **nauw** — niet wijd\n• **rauw** — niet gekookt\n• **blauw** — kleur\n• **flauw** — niet zout / niet sterk\n• **dauw** — vocht in ochtend\n• **klauw** — vinger van vogel/kat\n• **saus** — bij eten\n\n**Trucje voor au**:\nVeel **kleurnamen** + **dieren-onderdelen** + **maanden** met -aug:\n• **blauw, rauw, flauw, gauw, dauw** — eindigt op -auw\n• **augustus** — maand met 'aug-'\n• **klauw** — dier\n\n**Pas op met 'mauw' (kat-geluid)**: dit hangt af van de bron. Sommige woordenboeken hebben 'miauw'.\n\n**Trappen van vergelijking**:\nau blijft au:\n• gauw → gauwer, gauwst\n• rauw → rauwer, rauwst\n• nauw → nauwer, nauwst",
    svg: woordenTabelSvg("au", "ou", COLORS.au, COLORS.ou, ["auto","gauw","nauw","rauw","blauw","flauw","klauw","saus","augustus"], ["jou","mouw","kous","oude","goud","koud","oud","houden","trouwen"]),
    checks: [
      {
        q: "Hoe schrijf je: een **voertuig op vier wielen**?",
        options: ["auto","outo","oto","autoo"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Geen Nederlandse spelling.","Niet — kijk naar het eind van het woord."],
        uitlegPad: {
          stappen: [{ titel: "auto = au", tekst: "Auto komt van 'automobiel' — uit het Grieks/Frans, met au." }],
          woorden: [{ woord: "auto", uitleg: "Voertuig op 4 wielen. Met au." }],
          theorie: "Au-woorden: auto, augustus, augurk — vaak vreemde woorden uit Latijn/Grieks.",
          voorbeelden: [{ type: "zin", tekst: "Mijn vader heeft een blauwe auto." }],
          basiskennis: [{ onderwerp: "Geen koppelteken", uitleg: "Auto = 1 woord, geen au-to. Geen extra t aan einde." }],
          niveaus: { basis: "auto = au.", simpeler: "Auto begint met au (zoals augustus, augurk). Niet ou.", nogSimpeler: "Au" },
        },
      },
      {
        q: "Hoe schrijf je: de **maand 8** van het jaar?",
        options: ["augustus","ougustus","augustes","oogstus"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Geen 'augustes' in NL.","'oogstus' niet Nederlands."],
        uitlegPad: {
          stappen: [{ titel: "augustus = au", tekst: "Augustus komt uit Latijn, vernoemd naar keizer Augustus. Met au." }],
          woorden: [{ woord: "augustus", uitleg: "Maand 8 (zomermaand). Latijnse oorsprong." }],
          theorie: "Maandnamen uit Latijn: januari, februari, augustus — vaste spelling.",
          voorbeelden: [{ type: "zin", tekst: "In augustus is het meestal warm." }],
          basiskennis: [{ onderwerp: "Augustus regel", uitleg: "A-U-G in begin: au is vast. Net als augurk en auto." }],
          niveaus: { basis: "augustus = au.", simpeler: "Augustus (keizer) heeft au-begin. Niet 'ougustus'.", nogSimpeler: "Au" },
        },
      },
      {
        q: "Hoe schrijf je: niet sterk gekruid eten?",
        options: ["flauw","flouw","flou","flauwt"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Mist de w.","Geen extra t."],
        uitlegPad: {
          stappen: [{ titel: "flauw = au", tekst: "Flauw hoort in -auw-rijtje: blauw, gauw, rauw, flauw, dauw — allemaal au." }],
          woorden: [{ woord: "flauw", uitleg: "Niet sterk gekruid. Of: niet leuk (een flauwe grap)." }],
          theorie: "-auw-rijtje: blauw, gauw, rauw, flauw, dauw, klauw — al deze met au.",
          voorbeelden: [{ type: "rijm", tekst: "Een flauwe gauwe blauwe rauwe smaak." }],
          basiskennis: [{ onderwerp: "Niet ou", uitleg: "'flouw' bestaat niet. -auw is altijd au, niet ou." }],
          niveaus: { basis: "flauw = au.", simpeler: "Flauw hoort bij blauw/gauw/rauw — allemaal -auw met au.", nogSimpeler: "Au" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoe schrijf je: wat je over je pasta of patat doet, zoals ketchup?",
        options: ["saus", "souz", "sauz", "sause"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna — kies nog eens tussen au en ou.",
          "Hoor je aan het eind een s of een z?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "saus = au",
              tekst: "Saus schrijf je met au.",
            },
          ],
          woorden: [
            {
              woord: "saus",
              uitleg: "Iets nats en lekkers bij het eten, zoals tomatensaus.",
            },
          ],
          theorie: "Saus is een au-woord. Meer sauzen: sauzen (met z).",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Wil je saus op je patat?",
            },
          ],
          basiskennis: [
            {
              onderwerp: "s aan het eind",
              uitleg: "Saus eindigt op een s: s-au-s.",
            },
          ],
          niveaus: {
            basis: "saus = au.",
            simpeler: "Saus heeft au, niet ou. Met een s aan het eind.",
            nogSimpeler: "Au",
          },
        },
      },
      {
        q: "Hoe schrijf je: even rust tussen de lessen?",
        options: ["pauze", "pouze", "pause", "pouse"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna — kies nog eens tussen au en ou.",
          null,
          "Kijk naar de au/ou én naar de letter voor de e.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "pauze = au",
              tekst: "Pauze schrijf je met au en een z.",
            },
          ],
          woorden: [
            {
              woord: "pauze",
              uitleg: "Even rust, bijvoorbeeld op school tussen de lessen.",
            },
          ],
          theorie: "Pauze is een au-woord. Ook: pauzeren.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "In de pauze speel ik buiten.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "z in pauze",
              uitleg: "Pauze heeft een z: pau-ze.",
            },
          ],
          niveaus: {
            basis: "pauze = au.",
            simpeler: "Pauze schrijf je met au en een z.",
            nogSimpeler: "Au",
          },
        },
      },
      {
        q: "Hoe schrijf je: de poot van een kat met scherpe nagels?",
        options: ["klauw", "klouw", "klau", "klaw"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna — kies nog eens tussen au en ou.",
          "Hoor je aan het eind nog iets na de au?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "klauw = au",
              tekst: "Klauw schrijf je met -auw, net als blauw.",
            },
          ],
          woorden: [
            {
              woord: "klauw",
              uitleg: "Poot met scherpe nagels, van een kat of vogel.",
            },
          ],
          theorie: "-auw-rijtje: blauw, gauw, rauw, flauw, klauw — allemaal au.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "De kat krabt met zijn klauw.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "w aan het eind",
              uitleg: "Klauw eindigt op -auw: kl-auw.",
            },
          ],
          niveaus: {
            basis: "klauw = au.",
            simpeler: "Klauw hoort bij blauw en flauw: allemaal -auw.",
            nogSimpeler: "Au",
          },
        },
      },
      {
        q: "Hoe schrijf je: een zure groene groente uit een pot?",
        options: ["augurk", "ougurk", "augurck", "augerk"],
        answer: 0,
        wrongHints: [null, "Bijna — kies nog eens tussen au en ou.", null, "Zeg het langzaam: au-gurk."],
        uitlegPad: {
          stappen: [
            {
              titel: "augurk = au",
              tekst: "Augurk begint met au, net als augustus en auto.",
            },
          ],
          woorden: [
            {
              woord: "augurk",
              uitleg: "Kleine zure komkommer uit een pot.",
            },
          ],
          theorie: "Woorden die beginnen met aug- schrijf je met au: augurk, augustus.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Op mijn broodje ligt een augurk.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "aug- aan het begin",
              uitleg: "Au-gurk: au aan het begin, -gurk aan het eind.",
            },
          ],
          niveaus: {
            basis: "augurk = au.",
            simpeler: "Augurk begint met au, net als augustus.",
            nogSimpeler: "Au",
          },
        },
      },
      {
        q: "Hoe schrijf je: eten fijnmaken met je tanden?",
        options: ["kauwen", "kouwen", "kauwe", "kawen"],
        answer: 0,
        wrongHints: [null, "Bijna — kies nog eens tussen au en ou.", null, "Geen Nederlandse spelling."],
        uitlegPad: {
          stappen: [
            {
              titel: "kauwen = au",
              tekst: "Kauwen schrijf je met au en een w.",
            },
          ],
          woorden: [
            {
              woord: "kauwen",
              uitleg: "Eten fijnmaken met je tanden.",
            },
          ],
          theorie: "Kauwen is een au-woord. Ook: ik kauw, kauwgom.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Goed kauwen voor je slikt!",
            },
          ],
          basiskennis: [
            {
              onderwerp: "w in kauwen",
              uitleg: "Kau-wen: na de au komt een w.",
            },
          ],
          niveaus: {
            basis: "kauwen = au.",
            simpeler: "Kauwen heeft au, net als kauwgom.",
            nogSimpeler: "Au",
          },
        },
      },
    ],
  },
  {
    title: "Woorden met OU",
    explanation: "**Veelgebruikte ou-woorden**:\n\n| Werkwoorden | Zelfstandige naamwoorden | Andere |\n|---|---|---|\n| houden | goud | oud |\n| trouwen | hout | koud |\n| schouwen | mouw | jou |\n| onthouden | kous | nou |\n| kouder | zout | vrouw |\n| ouder | trouw | bouwen |\n| schouder | herfstkou | houders |\n\n**Belangrijke ou-woorden om te kennen**:\n• **oud** — niet jong\n• **koud** — niet warm\n• **goud** — geel metaal\n• **vrouw** — vrouwelijk persoon\n• **mouw** — deel van trui/jas\n• **kous** — sok\n• **hout** — van bomen\n• **bouw** / bouwen — maken\n• **trouw** / trouwen — huwelijk\n• **jou** / jouw — voor 'jij' bezittelijk\n• **nou** — informeel 'nu'\n\n**Trucje voor ou**:\n\n*Veel ou-woorden komen voor met '-oud' of '-ouw'*:\n• **-oud**: oud, koud, goud, zout, hout.\n• **-ouw**: vrouw, mouw, bouwen, trouwen, trouw.\n\n**'jou' of 'jouw'?**:\n• 'Hoe gaat het met **jou**?' (lijdend voorwerp van 'jij')\n• 'Is dat **jouw** boek?' (bezittelijk: 'het boek dat aan jou toebehoort')\n• Beide met **ou**.\n\n**Verschil met 'jij'**:\n• jij = onderwerpsvorm — 'jij gaat'\n• jou = lijdend voorwerp — 'ik zie jou'\n• jouw = bezittelijk — 'jouw boek'\n\n**Veelvoorkomende fouten**:\n• 'goud' ✓ NIET 'gaud' ❌\n• 'koud' ✓ NIET 'kaud' ❌\n• 'mouw' ✓ NIET 'mauw' ❌ (mauw bestaat niet als zelfst nw)\n\n**Andere vormen met ou**:\nou blijft ou:\n• goud → gouden\n• oud → ouder, oudst\n• kou → koud, kouder, koudst",
    svg: woordenTabelSvg("au", "ou", COLORS.au, COLORS.ou, ["auto","gauw","nauw","rauw","blauw","flauw","klauw"], ["jou","jouw","oud","koud","goud","vrouw","trouw","mouw","bouw","kous"]),
    checks: [
      {
        q: "Hoe schrijf je: het **gele metaal** voor sieraden?",
        options: ["goud","gaud","gout","goldt"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Klinkt als 'gout' maar dat is geen NL spelling.","Geen Nederlandse spelling."],
        uitlegPad: {
          stappen: [{ titel: "goud = ou", tekst: "Goud hoort in -oud-rijtje: oud, koud, goud, zout — allemaal ou." }],
          woorden: [{ woord: "goud", uitleg: "Geel edelmetaal voor sieraden, met ou." }],
          theorie: "-oud-rijtje: oud, koud, goud, zout, vouw, schouder — ou-spellingen.",
          voorbeelden: [{ type: "rijm", tekst: "Het oude goud is koud." }],
          basiskennis: [{ onderwerp: "Engels gold", uitleg: "Engels heeft 'gold' (heel ander), Nederlands altijd goud." }],
          niveaus: { basis: "goud = ou.", simpeler: "Goud hoort bij oud/koud/zout — allemaal -oud met ou.", nogSimpeler: "Ou" },
        },
      },
      {
        q: "Hoe schrijf je: 'Is dat ___ boek?' (bezittelijk):",
        options: ["jouw","jauw","joew","jou"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Geen Nederlandse spelling.","'jou' is lijdend voorwerp, niet bezittelijk."],
        uitlegPad: {
          stappen: [{ titel: "jouw = bezittelijk", tekst: "Bezittelijk = 'het boek dat aan jou toebehoort' = jouw boek (met w!)." }],
          woorden: [{ woord: "jouw", uitleg: "Bezittelijk voornaamwoord (= van jou). Met w." }, { woord: "jou", uitleg: "Lijdend voorwerp van jij. Zonder w." }],
          theorie: "jij/jou/jouw-regel: jij (onderwerp) → jou (lijdend voorwerp) → jouw (bezittelijk). Allemaal ou, alleen 'jouw' met w.",
          voorbeelden: [{ type: "context", tekst: "Jij gaat (onderwerp). Ik zie jou (lijdend). Is dat jouw boek? (bezittelijk)." }],
          basiskennis: [{ onderwerp: "Vervangtruc", uitleg: "Past 'mijn' in plaats van het lege woord? Dan = bezittelijk = jouw." }],
          niveaus: { basis: "jouw boek (bezittelijk).", simpeler: "'Jouw boek' = boek van jou = bezittelijk = jouw met w. Niet 'jou'.", nogSimpeler: "Jouw + w" },
        },
      },
      {
        q: "Hoe schrijf je: het deel van je jas om je arm?",
        options: ["mouw","mauw","mouwe","mauwe"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Geen Nederlandse spelling.","Geen Nederlandse spelling."],
        uitlegPad: {
          stappen: [{ titel: "mouw = ou", tekst: "Mouw (deel van trui/jas) heeft ou. 'Mauw' is geen NL woord (kat zegt miauw)." }],
          woorden: [{ woord: "mouw", uitleg: "Deel van een trui/jas/shirt waarin je arm zit." }],
          theorie: "-ouw-woorden: mouw, vrouw, bouwen, trouwen, jouw — allemaal ou.",
          voorbeelden: [{ type: "rijm", tekst: "Mijn vrouw heeft een gat in haar mouw." }],
          basiskennis: [{ onderwerp: "Geen mauw", uitleg: "Mauw bestaat niet. Een kat zegt 'miauw' (met i)." }],
          niveaus: { basis: "mouw = ou.", simpeler: "Mouw (van trui/jas) heeft ou. Hoort bij vrouw/jouw/bouwen — allemaal -ouw.", nogSimpeler: "Ou" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoe schrijf je: het materiaal van een boomstam?",
        options: ["hout", "haut", "hauwt", "hoout"],
        answer: 0,
        wrongHints: [null, "Bijna — kies nog eens tussen au en ou.", null, "Geen Nederlandse spelling."],
        uitlegPad: {
          stappen: [
            {
              titel: "hout = ou",
              tekst: "Hout schrijf je met ou.",
            },
          ],
          woorden: [
            {
              woord: "hout",
              uitleg: "Het materiaal van bomen. Je maakt er tafels en stoelen van.",
            },
          ],
          theorie: "Hout is een ou-woord. Ook: houten, houtje.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "De tafel is van hout.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "t aan het eind",
              uitleg: "Hout eindigt op een t: h-ou-t.",
            },
          ],
          niveaus: {
            basis: "hout = ou.",
            simpeler: "Hout heeft ou, net als oud en goud.",
            nogSimpeler: "Ou",
          },
        },
      },
      {
        q: "Hoe schrijf je: het witte, korrelige spul dat je op je patat strooit?",
        options: ["zout", "zaut", "zoud", "zouwt"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna — kies nog eens tussen au en ou.",
          "Hoor je aan het eind een t of een d?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "zout = ou",
              tekst: "Zout schrijf je met ou.",
            },
          ],
          woorden: [
            {
              woord: "zout",
              uitleg: "Wit, korrelig spul dat eten zout laat smaken.",
            },
          ],
          theorie: "-oud/-out-woorden: oud, koud, goud, zout, hout — allemaal ou.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Een beetje zout op je patat.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "t aan het eind",
              uitleg: "Zout eindigt op een t: z-ou-t.",
            },
          ],
          niveaus: {
            basis: "zout = ou.",
            simpeler: "Zout heeft ou, net als hout en goud.",
            nogSimpeler: "Ou",
          },
        },
      },
      {
        q: "Hoe schrijf je: het tegenovergestelde van **nieuw**?",
        options: ["oud", "aud", "oudt", "ouwd"],
        answer: 0,
        wrongHints: [null, "Bijna — kies nog eens tussen au en ou.", null, "Is er een w nodig?"],
        uitlegPad: {
          stappen: [
            {
              titel: "oud = ou",
              tekst: "Oud schrijf je met ou.",
            },
          ],
          woorden: [
            {
              woord: "oud",
              uitleg: "Niet nieuw, of niet jong.",
            },
          ],
          theorie: "-oud-rijtje: oud, koud, goud — allemaal ou. Oud → ouder → oudst, de ou blijft.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Mijn fiets is oud, die van jou is nieuw.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "d aan het eind",
              uitleg: "Oud eindigt op een d, want je zegt ouder.",
            },
          ],
          niveaus: {
            basis: "oud = ou.",
            simpeler: "Oud hoort bij koud en goud — allemaal ou.",
            nogSimpeler: "Ou",
          },
        },
      },
      {
        q: "Hoe schrijf je: het deel van je lichaam tussen je nek en je arm?",
        options: ["schouder", "schauder", "schouwder", "sgouder"],
        answer: 0,
        wrongHints: [null, "Bijna — kies nog eens tussen au en ou.", null, "Kijk naar het begin van het woord."],
        uitlegPad: {
          stappen: [
            {
              titel: "schouder = ou",
              tekst: "Schouder schrijf je met ou.",
            },
          ],
          woorden: [
            {
              woord: "schouder",
              uitleg: "Deel van je lichaam tussen je nek en je arm.",
            },
          ],
          theorie: "Schouder is een ou-woord, net als oud, koud en goud.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Hij legt zijn hand op mijn schouder.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "sch aan het begin",
              uitleg: "Schouder begint met sch: sch-ou-der.",
            },
          ],
          niveaus: {
            basis: "schouder = ou.",
            simpeler: "Schouder heeft ou. Met sch aan het begin.",
            nogSimpeler: "Ou",
          },
        },
      },
      {
        q: "'De kinderen ____ een hut van takken.' Welk woord is goed?",
        options: ["bouwen", "bauwen", "bouwe", "bauwe"],
        answer: 0,
        wrongHints: [null, "Bijna — kies nog eens tussen au en ou.", "Kijk naar het eind: wij bouw...?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "bouwen = ou",
              tekst: "Bouwen schrijf je met ou en een w.",
            },
          ],
          woorden: [
            {
              woord: "bouwen",
              uitleg: "Iets maken, zoals een huis of een hut.",
            },
          ],
          theorie: "-ouw-woorden: vrouw, mouw, bouwen, trouwen — allemaal ou.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Wij bouwen een hut. Ik bouw een toren.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "-en aan het eind",
              uitleg: "De kinderen = meer personen, dus bouwen (met -en).",
            },
          ],
          niveaus: {
            basis: "bouwen = ou.",
            simpeler: "Bouwen hoort bij vrouw en mouw — allemaal -ouw.",
            nogSimpeler: "Ou",
          },
        },
      },
    ],
  },
  {
    title: "Combinatie — alle 4 in één test",
    explanation: "Tijd om **alle 4** te combineren!\n\n**Snelle samenvatting**:\n\n| Klank | Heet | Voorbeelden |\n|---|---|---|\n| ei | korte ei | klein, reis, trein, plein, eind |\n| ij | lange ij | tijd, jij, prijs, rijst, schrijven |\n| au | au | auto, gauw, blauw, rauw, augustus |\n| ou | ou | oud, koud, goud, jou, mouw, vrouw |\n\n**4 belangrijkste tips**:\n1. **Voornaamwoorden** = ij (jij, hij, mij, wij, zij)\n2. **-tijd** = ij (altijd, vrije tijd)\n3. **Kleurnamen** + 'aug-' = au (blauw, augustus)\n4. **-oud** + '-ouw' = ou (oud, vrouw, mouw, bouwen)\n\n**Veel oefenen** is de enige weg om dit echt te onthouden. Lees boeken, schrijf veel, en vraag iemand om je te overhoren met een dictee.\n\n**Pas op voor 'verwarrers'**:\nSommige woorden lijken een patroon te volgen, maar zijn anders:\n• 'eind' = ei (niet 'ijnd' met ij)\n• 'flauw' = au (niet ou)\n• 'goud' = ou (niet 'gaud')\n• 'rijst' (eten) = ij — maar 'reist' (van reizen) = ei. **Context bepaalt!**",
    svg: woordenTabelSvg("ei + au", "ij + ou", COLORS.ei, COLORS.ij, ["klein","reis","trein","auto","blauw","augustus","gauw"], ["jij","tijd","prijs","oud","koud","jou","goud","vrouw"]),
    checks: [
      {
        q: "**'Het is heel ____ buiten'** (= zeer lage temperatuur):",
        options: ["koud","kaud","kouwd","koudt"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Geen Nederlandse spelling.","Geen extra t — bijvoeglijk naamwoord eindigt zonder t."],
        uitlegPad: {
          stappen: [{ titel: "koud = ou", tekst: "Koud hoort in -oud-rijtje: oud, koud, goud, zout — allemaal ou." }],
          woorden: [{ woord: "koud", uitleg: "Lage temperatuur. Bijvoeglijk naamwoord met ou." }],
          theorie: "-oud: oud, koud, goud, zout — allemaal ou-spelling.",
          voorbeelden: [{ type: "rijm", tekst: "Het koude goud lag in zijn oude hand." }],
          basiskennis: [{ onderwerp: "Bijvoeglijk = geen t", uitleg: "Koud is bijvoeglijk naamwoord, geen werkwoord — geen t aan einde." }],
          niveaus: { basis: "koud = ou.", simpeler: "Koud = ou. Hoort bij oud/goud/zout. Geen extra t (geen werkwoord).", nogSimpeler: "Ou" },
        },
      },
      {
        q: "**'Hij rijd / rijdt op zijn fiets'**: welke is goed?",
        options: ["rijdt","rijd","rijds","rijden"],
        answer: 0,
        wrongHints: [null,"Bij 'hij' krijg je geen kale stam — denk aan de regel.","-s is geen Nederlandse vervoeging.","-en is voor meervoud (wij/zij)."],
        uitlegPad: {
          stappen: [{ titel: "Hij/zij/het + stam + t", tekst: "Werkwoord rijden → stam = rijd. Hij/zij + stam + t = rijdt." }],
          woorden: [{ woord: "rijdt", uitleg: "3e persoon enkelvoud van rijden (hij/zij/het rijdt)." }],
          theorie: "Werkwoord-regel: ik = stam. Jij/hij/zij = stam + t. Wij/jullie/zij = stam + en.",
          voorbeelden: [{ type: "vervoeging", tekst: "Ik rijd. Jij rijdt. Hij rijdt. Wij rijden." }],
          basiskennis: [{ onderwerp: "Stam-eindigt-op-d", tekst: "Bij stam eindigend op -d (rijd, vind) toch + t = rijdt, vindt." }],
          niveaus: { basis: "Hij rijdt.", simpeler: "Werkwoord rijden → stam rijd → hij rijdt (stam + t). Klinkt hetzelfde maar schrijven met t.", nogSimpeler: "Rijdt" },
        },
      },
      {
        q: "**'____, wat kun jij hard rennen!'** (tussenwerpsel, zoals in 'nou zeg'):",
        options: ["Nou","Nau","Now","Nouw"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Dat is Engels.","Nou heeft geen w aan het eind."],
        uitlegPad: {
          stappen: [{ titel: "nou = ou", tekst: "Informeel 'nou' (= nu) wordt met ou geschreven." }],
          woorden: [{ woord: "nou", uitleg: "Informele variant van 'nu'. Met ou." }],
          theorie: "Korte ou-woorden: nou, jou, kou → eindigen op -ou.",
          voorbeelden: [{ type: "context", tekst: "'Nou ja!' = informele uitroep. 'Nu' = formele variant." }],
          basiskennis: [{ onderwerp: "Niet 'now'", uitleg: "'Now' is Engels. Nederlandse versie altijd met ou." }],
          niveaus: { basis: "Nou = ou.", simpeler: "Informele 'nu' = nou (met ou). Niet nau, niet now.", nogSimpeler: "Nou" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "In welk rijtje hebben **alle** woorden een **ij**?",
        options: ["tijd, jij, prijs", "tijd, trein, prijs", "klein, jij, prijs", "tijd, jij, reis"],
        answer: 0,
        wrongHints: [null, "Kijk goed naar het middelste woord.", null, "Kijk goed naar het laatste woord."],
        uitlegPad: {
          stappen: [
            {
              titel: "Elk woord checken",
              tekst: "Kijk elk woord apart na. Trein, klein en reis hebben ei. Tijd, jij en prijs hebben ij.",
            },
          ],
          woorden: [
            {
              woord: "ij",
              uitleg: "De lange ij, zoals in tijd en prijs.",
            },
          ],
          theorie: "ij: tijd, jij, prijs, rijst, schrijven. ei: klein, reis, trein, plein, eind.",
          voorbeelden: [
            {
              type: "lijst",
              tekst: "tijd, jij, prijs — allemaal ij.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Woord voor woord",
              uitleg: "Bij zo'n vraag kijk je elk woord apart na.",
            },
          ],
          niveaus: {
            basis: "tijd, jij, prijs.",
            simpeler: "In dat rijtje heeft elk woord ij. De andere rijtjes hebben een ei-woord.",
            nogSimpeler: "Alle drie ij",
          },
        },
      },
      {
        q: "Welke zin is helemaal **goed** geschreven?",
        options: [
          "De kleine trein rijdt naar het plein.",
          "De klijne trein rijdt naar het plein.",
          "De kleine trijn rijdt naar het plein.",
          "De kleine trein reidt naar het plein.",
        ],
        answer: 0,
        wrongHints: [null, "Kijk goed naar het tweede woord.", null, "Kijk goed naar het werkwoord."],
        uitlegPad: {
          stappen: [
            {
              titel: "Elk woord checken",
              tekst: "Klein, trein en plein hebben ei. Rijdt heeft ij.",
            },
          ],
          woorden: [
            {
              woord: "rijdt",
              uitleg: "Hij rijdt, zij rijdt: van rijden, met ij.",
            },
          ],
          theorie: "ei: klein, trein, plein. ij: rijden, rijdt.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "De kleine trein rijdt naar het plein.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Woord voor woord",
              uitleg: "Lees de zin langzaam en check elk woord met ei of ij.",
            },
          ],
          niveaus: {
            basis: "De kleine trein rijdt naar het plein.",
            simpeler: "Klein, trein, plein = ei. Rijdt = ij.",
            nogSimpeler: "Zin 1",
          },
        },
      },
      {
        q: "Welke klank schrijf je in **blauw**, **auto** en **augustus**?",
        options: ["au", "ou", "ei", "ij"],
        answer: 0,
        wrongHints: [null, "Klinkt hetzelfde, maar zo schrijf je deze drie niet.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "au-woorden",
              tekst: "Blauw, auto en augustus schrijf je alle drie met au.",
            },
          ],
          woorden: [
            {
              woord: "au",
              uitleg: "De au, zoals in auto.",
            },
          ],
          theorie: "Tip: kleurnamen en woorden met aug- hebben au: blauw, augustus.",
          voorbeelden: [
            {
              type: "lijst",
              tekst: "blauw, auto, augustus — allemaal au.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Klinkt als ou",
              uitleg: "Au en ou klinken hetzelfde. Daarom moet je de woorden leren.",
            },
          ],
          niveaus: {
            basis: "au.",
            simpeler: "Blauw, auto en augustus schrijf je met au.",
            nogSimpeler: "Au",
          },
        },
      },
    ],
  },
  {
    title: "Mini-test ei/ij/au/ou",
    explanation: "Test jezelf op alle 4 in willekeurige volgorde.\n\nVoorbeelden van zinnen om te checken:\n\n• De **trein** is **klein**.\n• **Wij** **rijden** in een **blauwe** **auto**.\n• In **augustus** is het **gauw** **koud**.\n• **Mijn** **oude** **vrouw** draagt een **gouden** ringetje.\n• Hij eet **rijst** en hij **reist** met de trein.\n\nLees deze zinnen hardop en let op de spelling.\n\nVeel succes!",
    svg: woordenTabelSvg("ei + au", "ij + ou", COLORS.ei, COLORS.ij, ["klein","plein","trein","reis","blauw","gauw","auto"], ["wij","jij","tijd","jou","goud","koud","oud"]),
    checks: [
      {
        q: "**'Ik ga met de ____'** (rijdt op rails):",
        options: ["trein","trijn","tryen","train"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen korte ei en lange ij.","Geen NL spelling.","Dat is Engels."],
        uitlegPad: {
          stappen: [{ titel: "trein = ei", tekst: "Trein hoort bij klein/plein/rein — ei-rijtje." }],
          woorden: [{ woord: "trein", uitleg: "Voertuig op rails. Met ei." }],
          theorie: "ei-rijtje 'klein-plein-trein-rein' onthouden als groep.",
          voorbeelden: [{ type: "rijm", tekst: "De trein staat klein op het plein." }],
          basiskennis: [{ onderwerp: "Geen extra t", uitleg: "Trein = zelfstandig naamwoord, geen werkwoord. Geen extra t aan einde." }],
          niveaus: { basis: "trein = ei.", simpeler: "Trein = ei (zoals klein, plein, rein). Geen extra t.", nogSimpeler: "Ei" },
        },
      },
      {
        q: "**'Mijn ____ heeft een nieuwe jas'** (vrouwelijk persoon, gehuwd):",
        options: ["vrouw","vrau","vrouwt","frouw"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Geen extra t.","Geen Nederlandse spelling."],
        uitlegPad: {
          stappen: [{ titel: "vrouw = ou", tekst: "Vrouw hoort in -ouw-rijtje: vrouw, mouw, jouw, bouwen — allemaal ou." }],
          woorden: [{ woord: "vrouw", uitleg: "Vrouwelijk persoon. Met ou." }],
          theorie: "-ouw-woorden: vrouw, mouw, jouw, bouwen, trouwen — ou-spelling.",
          voorbeelden: [{ type: "rijm", tekst: "Mijn vrouw heeft een gat in haar mouw." }],
          basiskennis: [{ onderwerp: "V niet F", uitleg: "Beginletter is V (vrouw), niet F (frouw bestaat niet)." }],
          niveaus: { basis: "vrouw = ou.", simpeler: "Vrouw = ou. Hoort bij mouw/jouw/bouwen — allemaal -ouw. V aan begin.", nogSimpeler: "Ou" },
        },
      },
      {
        q: "**'Hij heeft een ____ ring'** (van het gele edelmetaal):",
        options: ["gouden","gauden","goldene","goudte"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Duits — niet NL.","Geen NL vorm."],
        uitlegPad: {
          stappen: [{ titel: "gouden = ou", tekst: "Gouden komt van goud (ou). Verbuiging tot bijvoeglijk: gouden ring." }],
          woorden: [{ woord: "gouden", uitleg: "Bijvoeglijke vorm van goud (= van goud gemaakt)." }],
          theorie: "goud → gouden (van goud) → goudkleurig. Stam blijft ou.",
          voorbeelden: [{ type: "vorm", tekst: "Een gouden ring, een gouden ketting, een gouden kroon." }],
          basiskennis: [{ onderwerp: "Engels gold ≠ NL goud", uitleg: "Engels heeft 'golden', Nederlands 'gouden'. Verschillende stam." }],
          niveaus: { basis: "gouden = ou.", simpeler: "Goud (zelfst nw) → gouden (bijv nw) = ou-stam. Niet 'gauden', niet 'golden'.", nogSimpeler: "Ou" },
        },
      },
      {
        q: "**'Wij eten elke avond ____'** (witte korreltjes uit Azië):",
        options: ["rijst","reist","reizen","rijz"],
        answer: 0,
        wrongHints: [null,"Met ei = van 'reizen', een ander woord.","Dat is de -en-vorm (werkwoord).","Geen bestaande NL-spelling."],
        uitlegPad: {
          stappen: [{ titel: "rijst (eten) = ij", tekst: "Voedsel = rijst met ij. Werkwoord reist (van reizen) = ei. Context bepaalt!" }],
          woorden: [{ woord: "rijst", uitleg: "Voedsel uit Azië, met ij." }],
          theorie: "Klassieke ei/ij-homofoon: rijst (ij, eten) ≠ reist (ei, op reis).",
          voorbeelden: [{ type: "context", tekst: "Wij eten rijst (eten = ij). Hij reist naar Spanje (reizen = ei)." }],
          basiskennis: [{ onderwerp: "Truc voor rijst", uitleg: "Op rijstpak staat altijd 'rijst' = visualiseer dat voor ij." }],
          niveaus: { basis: "rijst (eten) = ij.", simpeler: "Witte korreltjes = rijst met ij. Niet reist (= van reizen).", nogSimpeler: "Ij" },
        },
      },
      {
        q: "**'Het is ____ in de winter'** (lage temperatuur):",
        options: ["koud","kaud","kowd","koudt"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Geen NL spelling.","Geen extra t."],
        uitlegPad: {
          stappen: [{ titel: "koud = ou", tekst: "Koud hoort in -oud-rijtje: oud, koud, goud, zout — allemaal ou." }],
          woorden: [{ woord: "koud", uitleg: "Lage temperatuur. Bijvoeglijk naamwoord met ou." }],
          theorie: "-oud-rijtje: oud, koud, goud, zout — ou-spelling.",
          voorbeelden: [{ type: "rijm", tekst: "De oude koude winter is nu hier." }],
          basiskennis: [{ onderwerp: "Bijvoeglijk = geen t", uitleg: "Koud is bijvoeglijk naamwoord, geen werkwoord — geen extra t." }],
          niveaus: { basis: "koud = ou.", simpeler: "Koud = ou (oud-rijtje). Geen 'kaud', geen extra t.", nogSimpeler: "Ou" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke twee woorden zijn **allebei** goed geschreven?",
        options: ["plein en tijd", "plijn en tijd", "plein en teid", "plijn en teid"],
        answer: 0,
        wrongHints: [null, "Kijk goed naar het eerste woord.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "plein en tijd",
              tekst: "Plein heeft ei (zoals klein). Tijd heeft ij (zoals altijd).",
            },
          ],
          woorden: [
            {
              woord: "plein",
              uitleg: "Open ruimte in een stad of dorp, met ei.",
            },
          ],
          theorie: "ei: klein, plein, trein. ij: tijd, altijd, prijs.",
          voorbeelden: [
            {
              type: "zin",
              tekst: "Op tijd staan we op het plein.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Twee checken",
              uitleg: "Bij twee woorden moet je ze allebei nakijken.",
            },
          ],
          niveaus: {
            basis: "plein en tijd.",
            simpeler: "Plein = ei, tijd = ij. Die zijn allebei goed.",
            nogSimpeler: "Plein + tijd",
          },
        },
      },
    ],
  },
  {
    title: "Eindopdracht — schrijf de zinnen goed",
    explanation: "Als je dit pad door hebt, kun je de meeste ei/ij + au/ou-woorden **goed schrijven**. Maar bedenk: zelfs volwassenen twijfelen soms. Bij twijfel: **woordenboek of Google**.\n\n**Wat heb je geleerd**:\n• Wat homofonen zijn (woorden die hetzelfde klinken)\n• Lijst veelvoorkomende ei-woorden (klein, reis, trein, plein, eind)\n• Lijst veelvoorkomende ij-woorden (tijd, jij, prijs, rijst, schrijven)\n• Lijst veelvoorkomende au-woorden (auto, gauw, blauw, augustus)\n• Lijst veelvoorkomende ou-woorden (oud, koud, goud, jou, vrouw)\n• Trucjes: voornaamwoorden = ij, -tijd = ij, -oud + -ouw = ou\n\n**Volgende stap**: schrijf elke dag minstens 3 zinnen waarin je deze woorden gebruikt. Veel lezen helpt ook — je gaat 't vanzelf voelen.\n\nVeel succes!",
    svg: woordenTabelSvg("ei", "ij", COLORS.ei, COLORS.ij, ["klein","reis","plein","eind","brein"], ["jij","tijd","prijs","wij","mij"]),
    checks: [
      {
        q: "**'____ heeft de mooiste fiets van de klas'** (persoonlijk vnw, één persoon, 2e p):",
        options: ["Jij","Jei","Jay","Joe"],
        answer: 0,
        wrongHints: [null,"Bijna — denk aan het trucje voor voornaamwoorden.","Geen NL spelling.","Engels."],
        uitlegPad: {
          stappen: [{ titel: "Voornaamwoord = ij", tekst: "Persoonlijke voornaamwoorden: jij, hij, zij, wij, mij — allemaal ij." }],
          woorden: [{ woord: "jij", uitleg: "Persoonlijk voornaamwoord, 2e persoon enkelvoud. Met ij." }],
          theorie: "Hoofdregel ij: de voornaamwoorden jij, hij, zij, wij en mij eindigen op -ij.",
          voorbeelden: [{ type: "lijst", tekst: "ik → mij. jij. hij. zij. wij. — vijf vormen, allemaal ij." }],
          basiskennis: [{ onderwerp: "Geen Engels", uitleg: "Jay/Joe zijn Engelse namen, geen Nederlandse voornaamwoorden." }],
          niveaus: { basis: "Jij = ij.", simpeler: "Voornaamwoord 2e persoon = jij met ij. Allerlei voornaamwoorden hebben ij.", nogSimpeler: "Jij" },
        },
      },
      {
        q: "**'In ____ hebben we zomervakantie'** (maand 8):",
        options: ["augustus","ougustus","augstus","august"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Mist een u.","Engels — niet NL."],
        uitlegPad: {
          stappen: [{ titel: "augustus = au", tekst: "Augustus uit Latijn (keizer Augustus). Begin met au, einde -us." }],
          woorden: [{ woord: "augustus", uitleg: "Maand 8 (zomermaand). Latijnse oorsprong." }],
          theorie: "Maandnamen Latijn: januari, februari, maart, april, mei, juni, juli, augustus, september, oktober, november, december.",
          voorbeelden: [{ type: "spelling", tekst: "A-U-G-U-S-T-U-S = 8 letters. Niet 'augstus' (mist u)." }],
          basiskennis: [{ onderwerp: "August (EN)", uitleg: "Engels = August. Nederlands = augustus (met -us)." }],
          niveaus: { basis: "augustus = au.", simpeler: "Maand 8 = augustus (au-begin, -us einde). Niet ougustus, niet august.", nogSimpeler: "Au" },
        },
      },
      {
        q: "**'De ____ heeft 4 wielen en rijdt op de weg'**:",
        options: ["auto","outo","oto","autto"],
        answer: 0,
        wrongHints: [null,"Bijna — kies nog eens tussen au en ou.","Mist een letter.","Niet — tel de t's nog eens."],
        uitlegPad: {
          stappen: [{ titel: "auto = au", tekst: "Auto = afkorting van 'automobiel'. Met au-begin." }],
          woorden: [{ woord: "auto", uitleg: "Voertuig op 4 wielen. Au-spelling." }],
          theorie: "Au-woorden uit Latijn/Grieks: auto, augustus, augurk.",
          voorbeelden: [{ type: "zin", tekst: "Mijn vader rijdt in een auto. Onze blauwe auto staat voor het huis." }],
          basiskennis: [{ onderwerp: "Geen extra t", uitleg: "Auto eindigt op -o, geen extra t." }],
          niveaus: { basis: "auto = au.", simpeler: "Auto met au (zoals augustus). 4 letters. Geen extra t.", nogSimpeler: "Au" },
        },
      },
      {
        q: "**'Mijn ____ poseert voor een portret'** (= echtgenote):",
        options: ["vrouw","frauw","vraau","vrouwt"],
        answer: 0,
        wrongHints: [null,"Kijk naar de eerste letter, en kies nog eens tussen au en ou.","Geen Nederlandse spelling.","Geen extra t."],
        uitlegPad: {
          stappen: [{ titel: "vrouw = ou", tekst: "Vrouw begint met V, heeft -ouw (ou + w). Net als mouw, jouw, bouwen." }],
          woorden: [{ woord: "vrouw", uitleg: "Vrouwelijk persoon. Met ou-spelling." }],
          theorie: "-ouw-woorden: vrouw, mouw, jouw, bouwen, trouwen, dauw — allemaal ou.",
          voorbeelden: [{ type: "rijm", tekst: "Mijn vrouw heeft een gat in haar mouw." }],
          basiskennis: [{ onderwerp: "V niet F", uitleg: "Vrouw begint met V (zoals vader, vis). Frouw bestaat niet." }],
          niveaus: { basis: "vrouw = ou.", simpeler: "Vrouw = ou (zoals mouw/jouw). V niet F. Geen extra t.", nogSimpeler: "Ou" },
        },
      },
      {
        q: "**'Hoe gaat het met ____'** (lijdend voorwerp van 'jij'):",
        options: ["jou","jij","jouw","jau"],
        answer: 0,
        wrongHints: [null,"'Jij' is het onderwerp — hier is het geen onderwerp.","'Jouw' is bezittelijk — hier gaat het niet over bezit.","Met ou, niet au."],
        uitlegPad: {
          stappen: [{ titel: "jou = lijdend voorwerp", tekst: "'Met jou' = met wie? = lijdend voorwerp = jou (zonder w)." }],
          woorden: [{ woord: "jou", uitleg: "Lijdend voorwerp van jij. Komt vaak na voorzetsel (met jou, voor jou)." }],
          theorie: "jij/jou/jouw-systeem: jij (onderwerp), jou (lijdend), jouw (bezittelijk). Allemaal ou.",
          voorbeelden: [{ type: "verschil", tekst: "Jij gaat (onderwerp). Ik zie jou (lijdend). Is dat jouw boek? (bezittelijk)." }],
          basiskennis: [{ onderwerp: "Truc met je/jou", uitleg: "Past 'je' in plaats van het lege woord (= 'met je')? Dan = jou (zonder w)." }],
          niveaus: { basis: "met jou.", simpeler: "'Hoe gaat het met jou' = lijdend voorwerp na 'met' = jou (zonder w). Jij is onderwerp, jouw bezittelijk.", nogSimpeler: "Jou" },
        },
      },
      { q: "Schrijf juist: 'Hij is een k___ in rekenen.'", options: ["kei","kij","kai","key"], answer: 0, wrongHints: [null, "Bijna — kies nog eens tussen korte ei en lange ij.", "Die klank schrijf je in het Nederlands als ei of ij, niet als ai.", "Dat is Engels."] },
      { q: "Schrijf juist: 'Ik woon b___ jou.'", options: ["bij","bei","bai","by"], answer: 0, wrongHints: [null, "Bijna — kies nog eens tussen korte ei en lange ij.", "Die klank schrijf je in het Nederlands als ei of ij, niet als ai.", "Dat is Engels."] },
      { q: "Schrijf juist: 'Een ___ in de pan.'", options: ["ei","ij","ey","ai"], answer: 0, wrongHints: [null, "Niet — geen voornaamwoord.", "Engels.", "Niet."] },
      { q: "Schrijf juist: 'De ring is van g___d.'", options: ["ou","au","aw","ow"], answer: 0, wrongHints: [null, "Bijna — kies nog eens tussen au en ou.", "Engels.", "Engels."] },
      { q: "Schrijf juist: 'Het is k___d.'", options: ["ou","au","oe","ouw"], answer: 0, wrongHints: [null, "Bijna — kies nog eens tussen au en ou.", "Met oe staat er 'koed' — dat is een ander woord.", "Koud heeft geen w."] },
      { q: "Schrijf juist: 'Zij is een vr___w.'", options: ["ou","au","ouw","aw"], answer: 0, wrongHints: [null, "Bijna — kies nog eens tussen au en ou.", "Bijna — kijk goed: de w staat al in de zin.", "Engels."] },
      { q: "Schrijf juist: 'Wat een bl___we lucht!'", options: ["au","ou","auw","ouw"], answer: 0, wrongHints: [null, "ou klinkt hetzelfde, maar zo schrijf je de kleur van de lucht niet.", "Bijna — kijk goed: de w staat al in de zin.", "Niet."] },
      { q: "Schrijf juist: 'Mijn k___s heeft een gat.'", options: ["ou","au","aw","ow"], answer: 0, wrongHints: [null, "Bijna — kies nog eens tussen au en ou.", "Geen Nederlandse spelling.", "Geen Nederlandse spelling."] },
      { q: "Schrijf juist: 'De p___s woont in Rome.'", options: ["au","ou","aw","ow"], answer: 0, wrongHints: [null, "Bijna — kies nog eens tussen au en ou.", "Niet.", "Niet."] },
      { q: "Schrijf juist: 'Vergeet jouw bril niet, ___!'", options: ["wijsneus","weisneus","wijsneuws","wysneus"], answer: 0, wrongHints: [null, "Bijna — kies nog eens tussen korte ei en lange ij.", "Niet — kijk naar het eind van het woord.", "Niet — geen y."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const spellingEiIjAuOu = {
  id: "spelling-ei-ij-au-ou",
  title: "Spelling — ei vs ij + au vs ou",
  emoji: "📝",
  level: "groep4-6",
  subject: "spelling",
  referentieNiveau: "1F",
  sloThema: "Taalverzorging — spelling ei/ij & au/ou",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
  ],
  intro:
    "De vier klassieke homofoon-paren in het Nederlands: ei vs ij (reist vs rijst) en au vs ou (paus vs pous). Met woordlijsten, trucjes (voornaamwoorden = ij, -oud + -ouw = ou) en context-voorbeelden. Voor groep 4-6.",
  triggerKeywords: [
    "ei ij","au ou","spelling ei","spelling ij","spelling au","spelling ou",
    "homofoon","klein vs klijn","reis vs rijst",
    "korte ei","lange ij",
    "voornaamwoorden ij","mij jij hij wij zij",
    "augustus","auto","blauw","gauw","rauw","flauw",
    "oud","koud","goud","vrouw","mouw","kous","jou","jouw","trouwen","bouwen",
  ],
  chapters,
  steps,
};

export default spellingEiIjAuOu;
