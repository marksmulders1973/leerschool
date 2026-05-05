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
    explanation: "Sommige Nederlandse woorden klinken **hetzelfde** maar worden **anders geschreven**. Dat zijn **homofonen**.\n\n**Twee beruchte paren**:\n\n**1. ei vs ij**\nSpreek deze woorden uit:\n• 'reis' en 'rijs' — klinkt **identiek**!\n• 'klein' en 'klijn' — klinkt identiek (klijn is geen woord, voorbeeld)\n\nAlleen aan de spelling kun je zien wat 't is.\n\n**2. au vs ou**\nSpreek uit:\n• 'paus' en 'pous' — identiek!\n• 'rauw' en 'rouw' — identiek!\n\n**Waarom is dit zo?**\nVroeger (~500 jaar geleden) klonken **ei** en **ij** wél verschillend. Net zoals **au** en **ou**. Maar de uitspraak is samengesmolten — alleen de spelling bleef aparte.\n\n**Hoe leer je het dan?**\nEr zijn **geen vaste regels** — je moet **woorden uit je hoofd kennen**. Maar er zijn **patronen** en **trucjes** die helpen. Dat leer je in dit pad.\n\n**Heel belangrijk**: bij twijfel **altijd checken** in een woordenboek. Zelfs volwassenen googlen 'reis ei of ij?' — niemand kent ze allemaal.\n\n**Geheugentruc 'kort vs lang'**:\n• **ei** heet ook wel **'korte ei'** *(omdat je 'm korter schrijft)*\n• **ij** heet ook wel **'lange ij'** *(omdat 'ie hoger reikt)*\n• **au** heet 'au'\n• **ou** heet 'ou'\n\n**In dit pad**:\n1. Woorden met **ei** (korte ei)\n2. Woorden met **ij** (lange ij)\n3. Woorden met **au**\n4. Woorden met **ou**\n5. Trucjes om te onthouden\n6. Eindopdracht",
    svg: woordenTabelSvg("ei", "ij", COLORS.ei, COLORS.ij, ["reis","klein","trein"], ["rijst","klijn","blij"]),
    checks: [
      {
        q: "Wat zijn **homofonen**?",
        options: ["Woorden die hetzelfde klinken maar anders geschreven","Een soort grammatica","Een telefoonsoort","Boeken"],
        answer: 0,
        wrongHints: [null,"Geen grammaticabegrip — uitspraak vs spelling.","Niet over telefoons.","Niet boeken."],
      },
      {
        q: "Klinken **'reis'** en **'rijst'** hetzelfde?",
        options: ["Ja, identiek","Nee, totaal verschillend","Ja maar 'rijst' is iets langer","Nee, 'reis' is hoger"],
        answer: 0,
        wrongHints: [null,"Ze klinken juist hetzelfde.","Geen verschil in lengte.","Geen verschil in toon."],
      },
    ],
  },
  {
    title: "Woorden met EI (korte ei)",
    explanation: "Hier de belangrijkste woorden met **ei**. Deze leer je uit je hoofd.\n\n**Veelgebruikte ei-woorden**:\n\n| Werkwoorden | Zelfstandige naamwoorden | Andere |\n|---|---|---|\n| reis(zen) | trein | klein |\n| reizen | reis | hein (naam) |\n| breien | leider | wei |\n| zeilen | meisje | reine |\n| eisen | beide | brein |\n| weiden | wei | stein |\n| smeken | trein | rein |\n\n**Belangrijke ei-woorden om te kennen**:\n• **trein** — vervoer\n• **klein** — niet groot\n• **reis** — gaan ergens heen\n• **meisje** — meidje, jong vrouwelijk\n• **leider** — iemand die leidt\n• **eind** — einde van iets\n• **plein** — open ruimte in stad\n• **vlees** — wacht, dit is GEEN ei! 'vlees' = ee. Goed opletten.\n\n**Trucje 1: hoor je 'eind'?**\nVeel woorden met 'eind' (= einde) hebben **ei**: eindigen, einde, eindelijk.\n\n**Trucje 2: tweede letter is i (ei)**\n'Korte ei' is letterlijk: e-i. Twee letters die samen klinken als één klank.\n\n**Veelvoorkomende fouten**:\n• 'klijn' ❌ — moet 'klein' ✓\n• 'rijs' ❌ — moet 'reis' ✓\n• 'mij' ✓ wel correct (ij in 'mij')\n\nDus 'klein' en 'reis' = ei. Dat zijn handige om te onthouden.\n\n**Verkleinwoorden** behouden meestal hun klinker:\n• klein → kleintje (ei blijft)\n• meisje → meisjes (ei blijft)\n• trein → treinen (ei blijft)",
    svg: woordenTabelSvg("ei (korte)", "Voorbeelden", COLORS.ei, COLORS.warm, ["klein","reis","trein","plein","meisje","eind","leider","brein","weiden"], ["dit zijn","veelvoorkomende","ei-woorden","onthoud","ze","goed!"]),
    checks: [
      {
        q: "Hoe schrijf je: het wervende voertuig op rails?",
        options: ["trein","trijn","tryn","trein t"],
        answer: 0,
        wrongHints: [null,"Met ei niet ij.","Geen Nederlandse spelling.","Geen extra t."],
      },
      {
        q: "Hoe schrijf je: niet groot?",
        options: ["klein","klijn","kleyn","kleen"],
        answer: 0,
        wrongHints: [null,"Met ei niet ij.","Geen Nederlandse spelling.","Geen Nederlandse spelling."],
      },
      {
        q: "Hoe schrijf je: een open ruimte in een stad?",
        options: ["plein","plijn","pleyn","plyn"],
        answer: 0,
        wrongHints: [null,"Met ei niet ij.","Geen Nederlandse spelling.","Geen Nederlandse spelling."],
      },
    ],
  },
  {
    title: "Woorden met IJ (lange ij)",
    explanation: "Hier de belangrijkste woorden met **ij**.\n\n**Veelgebruikte ij-woorden**:\n\n| Werkwoorden | Zelfstandige naamwoorden | Andere |\n|---|---|---|\n| blijven | rijst | wij |\n| krijgen | tijd | bij |\n| schrijven | rij | hij |\n| rijden | wijn | jij |\n| stijgen | strijd | mij |\n| zwijgen | feit (wacht, dit is **ei**!) | zij |\n\n**Belangrijke ij-woorden om te kennen**:\n• **tijd** — uren/dagen\n• **wij/jij/hij/zij/mij** — alle voornaamwoorden!\n• **bij** — een diertje + voorzetsel\n• **rijst** — voedsel\n• **rijden** — auto besturen\n• **schrijven** — letters maken\n• **wijn** — drank\n• **prijs** — kosten of beloning\n• **lijst** — opsomming\n• **strijd** — gevecht\n\n**Trucje 1: voornaamwoorden**\nIedereen die 'ik' bedoelt of een ander persoon → **ij**:\n• ik → mij\n• jij\n• hij\n• zij (en zij = meervoud)\n• wij\n\n**Trucje 2: '-tijd'**\nWoorden met -tijd hebben altijd ij:\n• tijd, altijd, soms wel een tijd, deze tijd, vrijetijd.\n\n**Trucje 3: 'rij'**\nWoorden met -rij of rij- hebben ij:\n• rij, rijden, rijst, rijbewijs, rijles, rijst, lijst (na lij).\n\n**Combinatieoefening**:\nWelk woord heeft ei vs ij?\n\n• \"k __ n\" → klein? klijn? → **klein** (ei). Geen 'klijn' bestaat.\n• \"r __ st\" → reist? rijst? → **rijst** (ij, voedsel). Of \"reist\" (ei) van 'reizen'. Beide bestaan! De zin bepaalt welke.\n\n**Voorbeeld waar context bepaalt**:\n• 'Ik **reis** naar Spanje' → reizen, ei.\n• 'Ik eet **rijst**' → voedsel, ij.\n• 'De boom **rijst** omhoog' → groeien/stijgen, ij.\n\n**Veelvoorkomende fouten**:\n• 'eend' (de vogel) heeft **ee**, niet ei of ij.\n• 'ein' (zoals 'eindigen') heeft **ei**.\n• 'tein' bestaat niet — 'trein' heeft ei.\n\n**Tip om te oefenen**: schrijf elke dag 5 woorden met ei en 5 met ij in zinnen. Na een tijdje voel je het verschil.",
    svg: woordenTabelSvg("ij (lange)", "Voorbeelden", COLORS.ij, COLORS.warm, ["tijd","wij","jij","hij","zij","mij","bij","rijst","schrijven","rijden","prijs"], ["dit zijn","veel ij-woorden","mooi","handig","onthoud!","goed werk"]),
    checks: [
      {
        q: "Welk persoonlijk voornaamwoord heeft **ij**?",
        options: ["wij","Pe","wei","wijn (wacht — niet voornaamwoord)"],
        answer: 0,
        wrongHints: [null,"Geen voornaamwoord.","Wei is geen voornaamwoord — wel een drankje!","Wijn is geen voornaamwoord."],
      },
      {
        q: "Hoe schrijf je: het voedsel uit Azië (witte korreltjes)?",
        options: ["rijst","reist","reize","rijz"],
        answer: 0,
        wrongHints: [null,"'reist' = van reizen.","Geen Nederlandse spelling.","Geen Nederlandse spelling."],
      },
      {
        q: "Hoe schrijf je: hoeveel uur het is?",
        options: ["tijd","teid","tied","tijd t"],
        answer: 0,
        wrongHints: [null,"Met ij niet ei.","Geen Nederlandse spelling.","Geen extra t."],
      },
    ],
  },
  {
    title: "Trucjes om ei vs ij te kiezen",
    explanation: "**Lastig blijven**: er zijn geen vaste regels die altijd werken. Maar deze trucjes helpen.\n\n**Trucje 1: voornaamwoorden = altijd ij**\n• mij, jij, hij, zij, wij\n\n**Trucje 2: -tijd, -lijk, -rij, -wij = ij**\n• tijd, altijd, vrijetijd\n• mooilijk, gemakkelijk, eindelijk (let op: 'eind' heeft ei!)\n• rij, rijden, rijst\n\n**Trucje 3: 'klein-rein-eind' = ei**\nBekende ei-woorden: klein, rein, einde, eind, plein, trein, brein.\n\n**Trucje 4: schrijfwijze van familie**\n• Geboortenaam met 'ij' (Wim/Klijn) of 'ei' (Klein) — onthoud die.\n• Plaats- en straatnamen: leer ze uit het hoofd.\n\n**Trucje 5: lopen-test (alleen werkwoord)**\nVoor werkwoordsvormen: vervang door **lopen**:\n• 'Hij rijdt' → vervang: 'hij loopt'. Klinkt beide met t-einde. Goed.\n• Maar dat zegt niets over ei/ij.\n• Niet zo nuttig hier.\n\n**Trucje 6: woordverwante woorden**\nKijk naar verwante woorden waarvan je de spelling wel kent:\n• 'reizen' → 'reisbureau' (ei).\n• 'rijden' → 'rijbewijs' (ij).\n\n**Trucje 7: mnemonics (zinnetjes onthouden)**\nVeel scholen leren rijmpjes om woorden in groepjes te onthouden:\n• \"De **trein** rijdt naar **klein** stadje **plein**.\"\n• \"De **bij** vliegt **bij** de **wijn**flessen, terwijl **wij** **rijst** eten.\"\n\n**Trucje 8: lezen lezen lezen**\nDe BESTE manier: veel boeken lezen. Je gaat de juiste schrijfwijze automatisch herkennen — net zoals je 't gehoord hebt.\n\n**Wat als je écht twijfelt?**\n• **Dictionary check** — zoek het woord op in woordenboek of online.\n• **Schrijven verstandig**: in informele berichten (whatsapp) is 't OK om gewoon door te schrijven en achteraf te checken. Op school: schrijven, dan controleren.",
    svg: woordenTabelSvg("ei", "ij", COLORS.ei, COLORS.ij, ["klein","plein","trein","reis","brein","eind","meisje","weide"], ["mij","jij","hij","wij","tijd","rijst","schrijven","prijs"]),
    checks: [
      {
        q: "Welk woord eindigt op '-tijd' (lang i):",
        options: ["altijd","alteid","tijdt","alttd"],
        answer: 0,
        wrongHints: [null,"Met ij — woorden met -tijd hebben ij.","Geen Nederlandse spelling.","Geen Nederlandse spelling."],
      },
      {
        q: "Hoe schrijf je: 'het wordt steeds duurder'?",
        options: ["prijs","preis","prijsj","prys"],
        answer: 0,
        wrongHints: [null,"Met ij — prijs.","Geen Nederlandse spelling.","Geen Nederlandse spelling."],
      },
      {
        q: "Welk woord heeft **ei**?",
        options: ["klein","klijn","kleyn","klyn"],
        answer: 0,
        wrongHints: [null,"Bestaat niet — 'klein' = ei.","Geen Nederlandse spelling.","Geen Nederlandse spelling."],
      },
    ],
  },
  {
    title: "Woorden met AU",
    explanation: "Nu **au** versus **ou** — dezelfde gedoe als ei/ij.\n\n**Au** en **ou** klinken **identiek** in het Nederlands. Maar verschillende spelling.\n\n**Veelgebruikte au-woorden**:\n\n| Werkwoorden | Zelfstandige naamwoorden | Andere |\n|---|---|---|\n| pauseren | pauze | nauw |\n| sausen | saus | gauw |\n| zoals | klauw | rauw |\n| flauw | augurk | blauwen |\n| auto | augustus | klauwen |\n| vrouw (wacht — dit is OU!) | flauw | dauw |\n\n**Belangrijke au-woorden om te kennen**:\n• **auto** — voertuig\n• **augustus** — maand 8\n• **augurk** — groente\n• **gauw** — snel\n• **nauw** — niet wijd\n• **rauw** — niet gekookt\n• **blauw** — kleur\n• **flauw** — niet zout / niet sterk\n• **dauw** — vocht in ochtend\n• **klauw** — vinger van vogel/kat\n• **saus** — bij eten\n\n**Trucje voor au**:\nVeel **kleurnamen** + **dieren-onderdelen** + **maanden** met -aug:\n• **blauw, rauw, flauw, gauw, dauw** — eindigt op -auw\n• **augustus** — maand met 'aug-'\n• **klauw** — dier\n\n**Pas op met 'mauw' (kat-geluid)**: dit hangt af van de bron. Sommige woordenboeken hebben 'miauw'.\n\n**Verkleinwoorden au**:\nau blijft au:\n• gauw → gauwer, gauwst\n• rauw → rauwer, rauwst\n• nauw → nauwer, nauwst",
    svg: woordenTabelSvg("au", "ou", COLORS.au, COLORS.ou, ["auto","gauw","nauw","rauw","blauw","flauw","klauw","saus","augustus"], ["jou","mouw","kous","oude","goud","koud","oud","houden","trouwen"]),
    checks: [
      {
        q: "Hoe schrijf je: een **voertuig op vier wielen**?",
        options: ["auto","outo","oto","au-to t"],
        answer: 0,
        wrongHints: [null,"Met au niet ou.","Geen Nederlandse spelling.","Geen koppelteken."],
      },
      {
        q: "Hoe schrijf je: de **maand 8** van het jaar?",
        options: ["augustus","ougustus","augustes","oogstus"],
        answer: 0,
        wrongHints: [null,"Met au niet ou.","Geen 'augustes' in NL.","'oogstus' niet Nederlands."],
      },
      {
        q: "Hoe schrijf je: niet sterk gekruid eten?",
        options: ["flauw","flouw","flou","flau t"],
        answer: 0,
        wrongHints: [null,"Met au niet ou.","Mist de w.","Geen extra t."],
      },
    ],
  },
  {
    title: "Woorden met OU",
    explanation: "**Veelgebruikte ou-woorden**:\n\n| Werkwoorden | Zelfstandige naamwoorden | Andere |\n|---|---|---|\n| houden | goud | oud |\n| trouwen | hout | koud |\n| schouwen | mouw | jou |\n| onthouden | kous | nou |\n| kouder | route | vrouw |\n| ouder | trouw | bouwen |\n| schoul... wacht, niet bestaand | herfstkou | houders |\n\n**Belangrijke ou-woorden om te kennen**:\n• **oud** — niet jong\n• **koud** — niet warm\n• **goud** — geel metaal\n• **vrouw** — vrouwelijk persoon\n• **mouw** — deel van trui/jas\n• **kous** — sok\n• **hout** — van bomen\n• **bouw** / bouwen — maken\n• **trouw** / trouwen — huwelijk\n• **jou** / jouw — voor 'jij' bezittelijk\n• **nou** — informeel 'nu'\n• **route** — pad of weg\n\n**Trucje voor ou**:\n\n*Veel ou-woorden komen voor met '-oud' of '-ouw'*:\n• **-oud**: oud, koud, goud, smal-oud (?), mond-houd (mondvoll bouw met w)... niet alle woorden volgen dit.\n• **-ouw**: vrouw, mouw, bouwen, trouwen, trouw.\n\n*Zelfstandige naamwoorden uit het Engels of Frans*:\n• route (Frans)\n• beauté → schoonheid (verloren in NL)\n• Veel internationale woorden\n\n**Bezittelijke voornaamwoorden 'jouw / jou'**:\n• 'Hoe gaat het met **jou**?' (lijdend voorwerp van 'jij')\n• 'Is dat **jouw** boek?' (bezittelijk: 'het boek dat aan jou toebehoort')\n• Beide met **ou**.\n\n**Verschil met 'jij'**:\n• jij = onderwerpsvorm — 'jij gaat'\n• jou = lijdend voorwerp — 'ik zie jou'\n• jouw = bezittelijk — 'jouw boek'\n\n**Veelvoorkomende fouten**:\n• 'goud' ✓ NIET 'gaud' ❌\n• 'koud' ✓ NIET 'kaud' ❌\n• 'mouw' ✓ NIET 'mauw' ❌ (mauw bestaat niet als zelfst nw)\n\n**Verkleinwoorden ou**:\nou blijft ou:\n• goud → gouden, gouder (?)\n• oud → ouder, oudst\n• kou → koud, kouder, koudst",
    svg: woordenTabelSvg("au", "ou", COLORS.au, COLORS.ou, ["auto","gauw","nauw","rauw","blauw","flauw","klauw"], ["jou","jouw","oud","koud","goud","vrouw","trouw","mouw","bouw","kous"]),
    checks: [
      {
        q: "Hoe schrijf je: het **gele metaal** voor sieraden?",
        options: ["goud","gaud","gout","goldt"],
        answer: 0,
        wrongHints: [null,"Met ou niet au.","Klinkt als 'gout' maar dat is geen NL spelling.","Geen Nederlandse spelling."],
      },
      {
        q: "Hoe schrijf je: 'Is dat ___ boek?' (bezittelijk):",
        options: ["jouw","jauw","joew","jou"],
        answer: 0,
        wrongHints: [null,"Met ou niet au.","Geen Nederlandse spelling.","'jou' is lijdend voorwerp, niet bezittelijk."],
      },
      {
        q: "Welk woord heeft **ou** (niet au)?",
        options: ["mouw","mauw","mouwe","mauwe"],
        answer: 0,
        wrongHints: [null,"Bestaat niet — 'mouw' is correct met ou.","Geen Nederlandse spelling.","Geen Nederlandse spelling."],
      },
    ],
  },
  {
    title: "Combinatie — alle 4 in één test",
    explanation: "Tijd om **alle 4** te combineren!\n\n**Snelle samenvatting**:\n\n| Klank | Heet | Voorbeelden |\n|---|---|---|\n| ei | korte ei | klein, reis, trein, plein, eind |\n| ij | lange ij | tijd, jij, prijs, rijst, schrijven |\n| au | au | auto, gauw, blauw, rauw, augustus |\n| ou | ou | oud, koud, goud, jou, mouw, vrouw |\n\n**4 belangrijkste tips**:\n1. **Voornaamwoorden** = ij (jij, hij, mij, wij, zij)\n2. **-tijd** = ij (altijd, vrijetijd)\n3. **Kleurnamen** + 'aug-' = au (blauw, augustus)\n4. **-oud** + '-ouw' = ou (oud, vrouw, mouw, bouwen)\n\n**Veel oefenen** is de enige weg om dit echt te onthouden. Lees boeken, schrijf veel, en vraag iemand om je te overhoren met een dictee.\n\n**Pas op voor 'verwarrers'**:\nSommige woorden lijken een patroon te volgen, maar zijn anders:\n• 'eind' = ei (niet 'eind' met ij)\n• 'flauw' = au (niet ou)\n• 'goud' = ou (niet 'gaud')\n• 'rijst' (eten) = ij — maar 'reist' (van reizen) = ei. **Context bepaalt!**",
    svg: woordenTabelSvg("ei + au", "ij + ou", COLORS.ei, COLORS.ij, ["klein","reis","trein","auto","blauw","augustus","gauw"], ["jij","tijd","prijs","oud","koud","jou","goud","vrouw"]),
    checks: [
      {
        q: "**'Het is heel ____ buiten'** (= zeer lage temperatuur):",
        options: ["koud","kaud","kouwd","koudt"],
        answer: 0,
        wrongHints: [null,"Met ou niet au.","Geen Nederlandse spelling.","Geen extra t — 'koud' is bijvoeglijk."],
      },
      {
        q: "**'Hij rijd / rijdt op zijn fiets'**: welke is goed?",
        options: ["rijdt","rijd","rijds","rijden"],
        answer: 0,
        wrongHints: [null,"Bij hij/zij = stam (rijd) + t = rijdt.","-s is geen NL vervoeging.","-en is voor meervoud."],
      },
      {
        q: "**'____ je kan jij heel hard'** (informeel 'nu'):",
        options: ["Nou","Nau","Now","Nu (correct maar formeel)"],
        answer: 0,
        wrongHints: [null,"Met ou niet au.","Geen Nederlands woord.","'Nu' is correct maar de vraag vroeg om informele 'nou'."],
      },
    ],
  },
  {
    title: "Mini-test ei/ij/au/ou",
    explanation: "Test jezelf op alle 4 in willekeurige volgorde.\n\nVoorbeelden van zinnen om te checken:\n\n• De **trein** is **klein**.\n• **Wij** **rijden** in een **blauwe** **auto**.\n• In **augustus** is het **gauw** **koud**.\n• **Mijn** **oude** **vrouw** draagt een **goud** ringetje.\n• Hij eet **rijst** — niet **reist** met de trein.\n\nLees deze zinnen hardop en let op de spelling.\n\nVeel succes!",
    svg: woordenTabelSvg("ei + au", "ij + ou", COLORS.ei, COLORS.ij, ["klein","plein","trein","reis","blauw","gauw","auto"], ["wij","jij","tijd","jou","goud","koud","oud"]),
    checks: [
      {
        q: "**'Ik ga naar de ____'** (waar treinen aankomen):",
        options: ["trein","trijn","tryen","trein t"],
        answer: 0,
        wrongHints: [null,"Met ei niet ij.","Geen NL spelling.","Geen extra t."],
      },
      {
        q: "**'Mijn ____ heeft een nieuwe jas'** (vrouwelijk persoon, gehuwd):",
        options: ["vrouw","vrau","vrouw t","frouw"],
        answer: 0,
        wrongHints: [null,"Met ou niet au.","Geen extra t.","Geen Nederlandse spelling."],
      },
      {
        q: "**'Hij heeft een ____ ring'** (van het gele edelmetaal):",
        options: ["gouden","gauden","goldene","goudte"],
        answer: 0,
        wrongHints: [null,"Met ou niet au.","Engels — niet NL.","Geen NL vorm."],
      },
      {
        q: "**'Wij eten elke avond ____'** (witte korreltjes uit Azië):",
        options: ["rijst","reist","reizen","rijz"],
        answer: 0,
        wrongHints: [null,"Met ij — voedsel.","Met ei = van reizen, ander woord.","-en vorm.","Geen NL spelling."],
      },
      {
        q: "**'Het is ____ in de winter'** (lage temperatuur):",
        options: ["koud","kaud","kowd","koudt"],
        answer: 0,
        wrongHints: [null,"Met ou niet au.","Geen NL spelling.","Geen extra t."],
      },
    ],
  },
  {
    title: "Eindopdracht — schrijf de zinnen goed",
    explanation: "Als je dit pad door hebt, kun je de meeste ei/ij + au/ou-woorden **goed schrijven**. Maar bedenk: zelfs volwassenen twijfelen soms. Bij twijfel: **woordenboek of Google**.\n\n**Wat heb je geleerd**:\n• Wat homofonen zijn (woorden die hetzelfde klinken)\n• Lijst veelvoorkomende ei-woorden (klein, reis, trein, plein, eind)\n• Lijst veelvoorkomende ij-woorden (tijd, jij, prijs, rijst, schrijven)\n• Lijst veelvoorkomende au-woorden (auto, gauw, blauw, augustus)\n• Lijst veelvoorkomende ou-woorden (oud, koud, goud, jou, vrouw)\n• Trucjes: voornaamwoorden = ij, -tijd = ij, -oud + -ouw = ou\n\n**Volgend stap**: schrijf elke dag minstens 3 zinnen waarin je deze woorden gebruikt. Veel lezen helpt ook — je gaat 't vanzelf voelen.\n\nVeel succes!",
    svg: woordenTabelSvg("ei", "ij", COLORS.ei, COLORS.ij, ["klein","reis","plein","eind","brein"], ["jij","tijd","prijs","wij","mij"]),
    checks: [
      {
        q: "**'____ heeft de mooiste fiets van de klas'** (persoonlijk vnw, één persoon, 2e p):",
        options: ["Jij","Jei","Jay","Joe"],
        answer: 0,
        wrongHints: [null,"Met ij niet ei — voornaamwoorden.","Geen NL spelling.","Engels."],
      },
      {
        q: "**'In ____ is het altijd warm'** (maand 8):",
        options: ["augustus","ougustus","augstus","august"],
        answer: 0,
        wrongHints: [null,"Met au niet ou.","Mist een u.","Engels — niet NL."],
      },
      {
        q: "**'De ____ heeft 4 wielen en rijdt op de weg'**:",
        options: ["auto","outo","oto","auto t"],
        answer: 0,
        wrongHints: [null,"Met au niet ou.","Mist een letter.","Geen extra t."],
      },
      {
        q: "**'Mijn ____ staat in het portret te poseren'** (= moeder/vrouw):",
        options: ["vrouw","frauw","vraau","vrouwt"],
        answer: 0,
        wrongHints: [null,"Met ou niet au.","V niet f, en niet au.","Geen extra t."],
      },
      {
        q: "**'Hoe gaat het met ____'** (lijdend voorwerp van 'jij'):",
        options: ["jou","jij","jouw","jau"],
        answer: 0,
        wrongHints: [null,"Lijdend voorwerp = jou.","Bezittelijk = jouw.","Onderwerp = jij."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const spellingEiIjAuOu = {
  id: "spelling-ei-ij-au-ou",
  title: "Spelling — ei vs ij + au vs ou",
  emoji: "📝",
  level: "groep4-6",
  subject: "taal",
  intro:
    "De vier klassieke homofoon-paren in het Nederlands: ei vs ij (reis vs rijst) en au vs ou (paus vs pous). Met woordlijsten, trucjes (voornaamwoorden = ij, -oud + -ouw = ou) en context-voorbeelden. Voor groep 4-6.",
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
