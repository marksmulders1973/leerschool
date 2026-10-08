// Leerpad: Winst rekenen — groep 6-8 PO.
// Onderdeel Toets-rekenen + leefwereld (financiële educatie). Referentieniveau 1F.
// 3 stappen met uitlegPad. Volgt op geld-rekenen.
//
// Dit is de "winst-stap" achter de Zookwartier-kraampjes en het inkoop-bonnetje:
// inkoop → verkoop → winst (verkoop − inkoop), winst per stuk × aantal, en de
// verkoopprijs voor een doel-winst. Eigen pad (niet in geld-rekenen geplakt) om
// de 15-min-belofte + 5-stappen-grens van geld-rekenen niet te breken.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  inkoop: "#ff7043",
  verkoop: "#42a5f5",
  winst: "#66bb6a",
  highlight: "#ffd54f",
};

const stepEmojis = ["🏷️", "📈", "🏆"];

const chapters = [
  { letter: "A", title: "Inkoop, verkoop en winst", emoji: "🏷️", from: 0, to: 0 },
  { letter: "B", title: "Winst per stuk + totale winst", emoji: "📈", from: 1, to: 1 },
  { letter: "C", title: "Eindopdracht", emoji: "🏆", from: 2, to: 2 },
];

// Inkoop − naar − verkoop, met de winst als groen blokje ertussen (€4 → €7 = €3).
function winstSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.highlight}" font-size="13" font-family="Arial" font-weight="bold">Winst = verkoopprijs − inkoopprijs</text>

<rect x="20" y="50" width="84" height="46" rx="6" fill="rgba(255,112,67,0.18)" stroke="${COLORS.inkoop}" stroke-width="1.5"/>
<text x="62" y="70" text-anchor="middle" fill="${COLORS.inkoop}" font-size="11" font-family="Arial" font-weight="bold">INKOOP</text>
<text x="62" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">€4</text>

<rect x="118" y="50" width="84" height="46" rx="6" fill="rgba(66,165,245,0.18)" stroke="${COLORS.verkoop}" stroke-width="1.5"/>
<text x="160" y="70" text-anchor="middle" fill="${COLORS.verkoop}" font-size="11" font-family="Arial" font-weight="bold">VERKOOP</text>
<text x="160" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">€7</text>

<text x="214" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="18" font-family="Arial">=</text>

<rect x="228" y="50" width="84" height="46" rx="6" fill="rgba(102,187,106,0.18)" stroke="${COLORS.winst}" stroke-width="1.5"/>
<text x="270" y="70" text-anchor="middle" fill="${COLORS.winst}" font-size="11" font-family="Arial" font-weight="bold">WINST</text>
<text x="270" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">€3</text>

<text x="160" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">💡 €7 verkoop − €4 inkoop = €3 winst per stuk</text>
<text x="160" y="158" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Verkoop je goedkoper dan de inkoop? Dan maak je verlies.</text>
</svg>`;
}

const steps = [
  // STAP A: Inkoop, verkoop, winst
  {
    title: "Inkoop, verkoop en winst",
    explanation:
      "Stel je hebt een **kraampje** of een **dierenpark**. Je koopt iets in en verkoopt het weer. Drie woorden helpen je rekenen:\n\n• **Inkoopprijs** 🏷️ = wat het **jou** kost om iets te kopen of te maken.\n• **Verkoopprijs** = het bedrag waarvoor jij het **aan een ander** verkoopt.\n• **Winst** 📈 = wat je **overhoudt**.\n\n**De som**:\n> **Winst = verkoopprijs − inkoopprijs**\n\n**Voorbeeld**:\n• Je koopt een knuffel in voor **€4**.\n• Je verkoopt 'm voor **€7**.\n• Winst: €7 − €4 = **€3**.\n\n**Belangrijk — verkoop boven je inkoop!**\nVerkoop je **goedkoper** dan je inkoop, dan raak je geld kwijt: je maakt **verlies**.\n• Inkoop €6, verkoop €5 → €5 − €6 = **−€1** *(€1 verlies)*.\n\nDaarom kiezen winkels en kraampjes een verkoopprijs die **hoger** is dan de inkoop. Maar niet té hoog, want dan koopt niemand het.\n\n**In Mijn Park** zie je dit terug: een dier of een patatje koop je in, en als een bezoeker het koopt verdien jij de **winst** *(verkoop − inkoop)*.\n\n**toetsvragen**:\n*'Wat is winst?'* → verkoopprijs min inkoopprijs.\n*'Inkoop €4, verkoop €7 — winst?'* → €3.\n*'Verkoop lager dan inkoop?'* → verlies.",
    svg: winstSvg(),
    checks: [
      {
        // 6 okt 2026 (melding 4 okt): "winst" is strikt verkoop − álle kosten; wat hier wordt
        // geoefend is de brutowinst (verkoop − inkoop). Zo heet het dan ook.
        q: "Wat is **brutowinst**?",
        options: ["De verkoopprijs min de inkoopprijs", "De inkoopprijs min de verkoopprijs", "De verkoopprijs plus de inkoopprijs", "Alleen de verkoopprijs"],
        answer: 0,
        wrongHints: [null, "Andersom — dan krijg je bij winst een negatief getal.", "Optellen klopt niet; winst is wat je overhoudt.", "De inkoop telt ook mee — die ben je kwijtgeraakt."],
        uitlegPad: {
          stappen: [
            { titel: "Wat houd je over?", tekst: "Je verkoopt iets en krijgt de verkoopprijs. Maar het kostte jou eerst de inkoopprijs. Wat overblijft is de brutowinst." },
            { titel: "De som", tekst: "Brutowinst = verkoopprijs − inkoopprijs. Je trekt af wat het jou kostte van wat je ervoor kreeg. (Trek je ook andere kosten af, zoals huur of loon, dan houd je de nettowinst over.)" },
            { titel: "Voorbeeld", tekst: "Verkoop €7, inkoop €4. Winst = €7 − €4 = €3. Die €3 is voor jou." },
          ],
          woorden: [
            { woord: "inkoopprijs", uitleg: "Wat het jou kost om iets te kopen of te maken." },
            { woord: "verkoopprijs", uitleg: "Het bedrag waarvoor jij het aan een ander verkoopt." },
            { woord: "brutowinst", uitleg: "Wat je overhoudt: verkoop − inkoop (vóór andere kosten)." },
          ],
          theorie: "Toets-kern: Winst = Verkoop − Inkoop. Truc: 'Wat je KRIJGT' min 'wat het je KOSTTE'. Het antwoord moet positief zijn als je boven je inkoop verkoopt.",
          voorbeelden: [
            { type: "stap", tekst: "Verkoop €10, inkoop €6 → winst €4." },
            { type: "stap", tekst: "Verkoop €3, inkoop €2 → winst €1." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Verkoop staat vooraan in de som, inkoop gaat eraf. Verkoop − inkoop = winst." }],
          niveaus: {
            basis: "Winst = verkoopprijs − inkoopprijs.",
            simpeler: "Trek van wat je krijgt (verkoop) af wat het je kostte (inkoop). Dat is je winst.",
            nogSimpeler: "Verkoop − inkoop.",
          },
        },
      },
      {
        q: "Je koopt een knuffel in voor **€4** en verkoopt 'm voor **€7**. Hoeveel **winst**?",
        options: ["€3", "€11", "€4", "€7"],
        answer: 0,
        wrongHints: [null, "Niet optellen — je verdient niet het hele verkoopbedrag plus de inkoop.", "Dat is je inkoop, niet je winst.", "Daar zit de inkoop nog in die je eerst kwijt was."],
        uitlegPad: {
          stappen: [
            { titel: "Welke som?", tekst: "Winst = verkoopprijs − inkoopprijs." },
            { titel: "Vul in", tekst: "Verkoop = €7. Inkoop = €4. Dus: €7 − €4." },
            { titel: "Reken uit", tekst: "€7 − €4 = **€3** winst. Tel terug: €4 inkoop + €3 winst = €7 verkoop. Klopt!" },
          ],
          woorden: [
            { woord: "aftrekken", uitleg: "Iets eraf halen (het min-teken −)." },
          ],
          theorie: "Toets-valkuil: niet het hele verkoopbedrag (€7) is winst — de inkoop van €4 was je eerst kwijt. Winst is alleen het verschil: €3.",
          voorbeelden: [
            { type: "stap", tekst: "Inkoop €2, verkoop €5 → winst €3." },
            { type: "stap", tekst: "Inkoop €8, verkoop €12 → winst €4." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Winst is altijd kleiner dan de verkoopprijs (want de inkoop gaat eraf)." }],
          niveaus: {
            basis: "€3 (€7 − €4).",
            simpeler: "Verkoop €7 min inkoop €4 = €3 winst.",
            nogSimpeler: "€3",
          },
        },
      },
      {
        q: "Wat is de **inkoopprijs**?",
        options: ["Wat het jou kost om iets te kopen of te maken", "Wat je overhoudt nadat je iets hebt verkocht", "Al het geld dat je bij de verkoop binnenkrijgt", "Het bedrag dat de klant aan jou betaalt"],
        answer: 0,
        wrongHints: [null, "Dat is juist de winst.", "Dat is de opbrengst — die komt pas ná de verkoop; inkoop is aan het begin.", "Dat is de verkoopprijs."],
      },
      {
        q: "Je koopt iets in voor **€6** en verkoopt het voor **€5**. Wat gebeurt er?",
        options: ["Je maakt €1 verlies", "Je maakt €1 winst", "Je maakt €11 winst", "Je houdt precies niets over"],
        answer: 0,
        wrongHints: [null, "Je verkocht juist goedkoper dan je inkoop — dan win je niet.", "Optellen klopt niet; je verkocht voor minder dan de inkoop.", "Er is wél een verschil van €1 — alleen de verkeerde kant op."],
        uitlegPad: {
          stappen: [
            { titel: "Reken de winst-som", tekst: "Winst = verkoop − inkoop = €5 − €6 = −€1." },
            { titel: "Min-getal = verlies", tekst: "Een negatief antwoord (−€1) betekent dat je geld kwijtraakt. Dat heet **verlies**." },
            { titel: "Waarom?", tekst: "Je betaalde €6 maar kreeg maar €5 terug. Je bent €1 armer geworden. Verkoop daarom altijd boven je inkoopprijs." },
          ],
          woorden: [
            { woord: "verlies", uitleg: "Het tegenovergestelde van winst — je raakt geld kwijt." },
          ],
          theorie: "Toets-kern: verkoop < inkoop → verlies. Verkoop > inkoop → winst. Verkoop = inkoop → je houdt niets over (quitte).",
          voorbeelden: [
            { type: "stap", tekst: "Inkoop €10, verkoop €8 → €2 verlies." },
            { type: "stap", tekst: "Inkoop €5, verkoop €5 → geen winst, geen verlies (quitte)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Is de verkoopprijs lager dan de inkoop? Dan maak je verlies, geen winst." }],
          niveaus: {
            basis: "€1 verlies (€5 − €6 = −€1).",
            simpeler: "Je betaalde €6 maar kreeg €5. Dus €1 kwijt = verlies.",
            nogSimpeler: "€1 verlies",
          },
        },
      },
      {
        q: "Je koopt een boek in voor **€9** en verkoopt het voor **€9**. Wat is je winst?",
        options: ["€0", "€9 winst", "€18 winst", "€9 verlies"],
        answer: 0,
        wrongHints: [null, "Dat zou alleen kloppen als de inkoop niets had gekost.", "Optellen klopt niet — winst is het verschil.", "Verlies maak je als de verkoop lager is dan de inkoop."],
        uitlegPad: {
          stappen: [
            { titel: "Reken de winst", tekst: "Winst = verkoop − inkoop = €9 − €9 = €0." },
            { titel: "Quitte", tekst: "Een winst van €0 betekent dat je precies terugkrijgt wat het jou kostte. Je bent 'quitte' — geen winst, geen verlies." },
          ],
          niveaus: {
            basis: "Winst = €9 − €9 = €0. Je bent quitte.",
            simpeler: "Verkoop en inkoop zijn gelijk, dus je verdient niets extra's.",
            nogSimpeler: "€0 — quitte.",
          },
        },
      },
      {
        q: "Je hebt **€15** voor een artikel betaald (inkoop). Je wilt minstens **€3 winst**. Wat is de laagste verkoopprijs die dat haalt?",
        options: ["€18", "€12", "€15", "€3"],
        answer: 0,
        wrongHints: [null, "Dan verkoop je goedkoper dan de inkoop — dat is verlies.", "Dan is de winst €0 — niet de gewenste €3.", "Dat is alleen de winst, de inkoop moet er ook in."],
        uitlegPad: {
          stappen: [
            { titel: "Welke som?", tekst: "Verkoopprijs = inkoopprijs + gewenste winst = €15 + €3." },
            { titel: "Reken uit", tekst: "€15 + €3 = **€18**. Check: €18 − €15 = €3 winst. Klopt!" },
          ],
          niveaus: {
            basis: "€18 (€15 + €3).",
            simpeler: "Inkoop + winst die je wilt = verkoopprijs: €15 + €3 = €18.",
            nogSimpeler: "€18",
          },
        },
      },
      {
        q: "Wat heet het als je iets verkoopt **voor precies de inkoopprijs**?",
        options: ["Quitte", "Grote winst", "Verlies", "Opbrengst"],
        answer: 0,
        wrongHints: [null, "Voor winst moet de verkoopprijs hoger zijn dan de inkoop.", "Voor verlies moet de verkoopprijs lager zijn — hier zijn ze gelijk.", "Opbrengst is al het geld dat binnenkomt, niet de eindstand."],
        uitlegPad: {
          stappen: [
            { titel: "Verkoop = inkoop", tekst: "Als je verkoopt voor precies de inkoopprijs, is het verschil €0." },
            { titel: "Quitte", tekst: "€0 winst én €0 verlies heet 'quitte'. Je hebt niets verdiend maar ook niets verloren." },
          ],
          niveaus: {
            basis: "Quitte: verkoop = inkoop, winst = €0.",
            simpeler: "Je krijgt terug precies wat het je kostte — niets over, niets kwijt.",
            nogSimpeler: "Quitte.",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je koopt een bal in voor **€11**. Bij welke **verkoopprijs** maak je **verlies**?",
        options: ["€10", "€11", "€12", "€15"],
        answer: 0,
        wrongHints: [
          null,
          "Wat houd je over als verkoop en inkoop even groot zijn?",
          null,
          "Is deze prijs hoger of lager dan wat de bal jou kostte?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wanneer is het verlies?",
              tekst: "Je maakt verlies als je verkoopt voor **minder** dan de inkoopprijs.",
            },
            {
              titel: "Vergelijk met €11",
              tekst: "€10 is lager dan €11. €11 is gelijk (quitte). €12 en €15 zijn hoger (winst).",
            },
            {
              titel: "Reken na",
              tekst: "€10 − €11 = −€1. Een min-getal betekent **verlies**.",
            },
          ],
          woorden: [
            {
              woord: "verlies",
              uitleg: "Je raakt geld kwijt, omdat je verkoopt voor minder dan het jou kostte.",
            },
          ],
          theorie: "Toets-kern: verkoop lager dan inkoop → verlies. Verkoop gelijk aan inkoop → quitte. Verkoop hoger dan inkoop → winst.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Inkoop €8, verkoop €7 → €1 verlies.",
            },
            {
              type: "stap",
              tekst: "Inkoop €8, verkoop €9 → €1 winst.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zoek de verkoopprijs die onder de inkoopprijs ligt. Die geeft verlies.",
            },
          ],
          niveaus: {
            basis: "€10, want dat is minder dan de inkoop van €11 (€10 − €11 = −€1).",
            simpeler: "De bal kostte jou €11. Krijg je er maar €10 voor? Dan ben je €1 kwijt.",
            nogSimpeler: "€10",
          },
        },
      },
      {
        q: "Vier kraampjes verkopen elk één ding. Welk kraampje maakt de **meeste winst**?",
        options: [
          "Inkoop €3, verkoop €8",
          "Inkoop €6, verkoop €10",
          "Inkoop €1, verkoop €4",
          "Inkoop €9, verkoop €11",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De hoogste verkoopprijs is niet vanzelf de meeste winst. Reken verkoop − inkoop.",
          "De laagste inkoop is niet vanzelf de meeste winst. Reken het verschil uit.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Reken per kraampje de winst",
              tekst: "Winst = verkoopprijs − inkoopprijs. Doe dat voor alle vier.",
            },
            {
              titel: "De vier winsten",
              tekst: "€8 − €3 = €5. €10 − €6 = €4. €4 − €1 = €3. €11 − €9 = €2.",
            },
            {
              titel: "Vergelijk",
              tekst: "€5 is het meest. Dus het kraampje met inkoop €3 en verkoop €8 maakt de meeste winst.",
            },
          ],
          woorden: [
            {
              woord: "winst",
              uitleg: "Wat je overhoudt: verkoopprijs − inkoopprijs.",
            },
          ],
          theorie: "Toets-valkuil: kijk niet alleen naar de hoogste verkoopprijs. Winst is het verschil tussen verkoop en inkoop.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Inkoop €2, verkoop €9 → winst €7.",
            },
            {
              type: "stap",
              tekst: "Inkoop €10, verkoop €12 → winst €2.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Schrijf bij elk kraampje de winst erbij. Kies daarna het grootste getal.",
            },
          ],
          niveaus: {
            basis: "Inkoop €3, verkoop €8: winst €5. De andere maken €4, €3 en €2.",
            simpeler: "Reken bij elk: verkoop min inkoop. Het grootste antwoord is €5.",
            nogSimpeler: "€8 − €3 = €5",
          },
        },
      },
      {
        q: "Je koopt een spel in voor **€20** en verkoopt het voor **€14**. Hoeveel **verlies** maak je?",
        options: ["€6", "€34", "€14", "€20"],
        answer: 0,
        wrongHints: [
          null,
          "Moet je hier optellen of het verschil zoeken?",
          null,
          "Dat is wat het spel jou kostte. Hoeveel kreeg je terug?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Reken de winst-som",
              tekst: "Winst = verkoop − inkoop = €14 − €20 = −€6.",
            },
            {
              titel: "Min-getal = verlies",
              tekst: "Het antwoord is negatief. Je bent dus **€6** kwijt: €6 verlies.",
            },
            {
              titel: "Check",
              tekst: "Je betaalde €20 en kreeg €14 terug. Van €14 naar €20 is €6. Klopt!",
            },
          ],
          woorden: [
            {
              woord: "verlies",
              uitleg: "Het tegenovergestelde van winst: je raakt geld kwijt.",
            },
          ],
          theorie: "Toets-kern: is de verkoop lager dan de inkoop, dan is het verschil je verlies. Verlies = inkoop − verkoop.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Inkoop €12, verkoop €9 → €3 verlies.",
            },
            {
              type: "stap",
              tekst: "Inkoop €30, verkoop €25 → €5 verlies.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Bij verlies zoek je ook het verschil tussen inkoop en verkoop, alleen de andere kant op.",
            },
          ],
          niveaus: {
            basis: "€6 verlies (€14 − €20 = −€6).",
            simpeler: "Je betaalde €20 en kreeg maar €14. Je bent €6 kwijt.",
            nogSimpeler: "€6",
          },
        },
      },
    ],
  },

  // STAP B: Winst per stuk + totale winst + verkoopprijs voor doel-winst
  {
    title: "Winst per stuk en totale winst",
    explanation:
      "Verkoop je **meerdere** dingen, dan reken je vaak eerst de **winst per stuk** uit en daarna de **totale winst**.\n\n**Winst per stuk** = verkoopprijs − inkoopprijs *(per één ding)*.\n\n**Totale winst** = winst per stuk **×** aantal.\n\n**Voorbeeld** *(kraampje)*:\n• Een ijsje koop je in voor **€0,50**.\n• Je verkoopt het voor **€1,20**.\n• Winst per ijsje: €1,20 − €0,50 = **€0,70**.\n• Verkoop je er **10**? Totale winst: €0,70 × 10 = **€7**.\n\n**Let op — opbrengst is niet hetzelfde als winst!**\n• **Opbrengst** = al het geld dat **binnenkomt** *(verkoopprijs × aantal)*.\n• **Winst** = wat je **overhoudt** *(opbrengst − inkoopkosten)*.\n• 10 ijsjes verkopen voor €1,20 = €12 opbrengst, maar de winst is maar €7.\n\n**Andersom rekenen — welke verkoopprijs?**\nWil je een bepaalde winst maken, dan reken je terug:\n> **Verkoopprijs = inkoopprijs + winst die je wilt**\n• Inkoop €3, je wilt €2 winst → verkoop voor €3 + €2 = **€5**.\n\n**toetsvragen**:\n*'Winst €2 per stuk, 5 stuks — totale winst?'* → €10.\n*'Inkoop €3, je wilt €2 winst — verkoopprijs?'* → €5.\n*'Opbrengst of winst?'* → opbrengst = alles binnen, winst = wat overblijft.",
    checks: [
      {
        q: "Je maakt **€2 winst per stuk** en verkoopt **5 stuks**. Hoeveel **totale winst**?",
        options: ["€10", "€7", "€3", "€25"],
        answer: 0,
        wrongHints: [null, "Niet optellen — bij 'per stuk × aantal' vermenigvuldig je.", "Niet aftrekken — elk stuk levert opnieuw €2 op.", "Kijk goed: welk bedrag is de winst per stuk?"],
        uitlegPad: {
          stappen: [
            { titel: "Welke som?", tekst: "Totale winst = winst per stuk × aantal." },
            { titel: "Vul in", tekst: "Winst per stuk = €2. Aantal = 5. Dus: €2 × 5." },
            { titel: "Reken uit", tekst: "€2 × 5 = **€10** totale winst. Elk van de 5 stuks levert €2 op, samen €10." },
          ],
          woorden: [
            { woord: "winst per stuk", uitleg: "Wat je aan één ding verdient." },
            { woord: "totale winst", uitleg: "De winst van alle stuks samen." },
          ],
          theorie: "Toets-truc: 'per stuk' + 'aantal' → vermenigvuldigen. Winst per stuk × aantal = totale winst.",
          voorbeelden: [
            { type: "stap", tekst: "€3 winst per stuk × 4 stuks = €12." },
            { type: "stap", tekst: "€0,50 winst per stuk × 10 stuks = €5." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "'Per stuk' is een signaalwoord voor keer (×) het aantal." }],
          niveaus: {
            basis: "€10 (€2 × 5).",
            simpeler: "5 stuks, elk €2 winst: €2 × 5 = €10.",
            nogSimpeler: "€10",
          },
        },
      },
      {
        q: "Je koopt iets in voor **€3** en wilt **€2 winst** maken. Voor hoeveel moet je het **verkopen**?",
        options: ["€5", "€1", "€2", "€6"],
        answer: 0,
        wrongHints: [null, "Aftrekken klopt niet — je wilt juist méér krijgen dan je inkoop.", "Dat is alleen de winst, de inkoop moet er nog bij.", "Dat is de inkoop verdubbeld; reken inkoop + gewenste winst."],
        uitlegPad: {
          stappen: [
            { titel: "Andersom rekenen", tekst: "Je weet de inkoop en de winst die je wilt. Je zoekt de verkoopprijs." },
            { titel: "De som", tekst: "Verkoopprijs = inkoopprijs + winst die je wilt = €3 + €2." },
            { titel: "Reken uit", tekst: "€3 + €2 = **€5**. Controleer: verkoop €5 − inkoop €3 = €2 winst. Klopt!" },
          ],
          woorden: [
            { woord: "terugrekenen", uitleg: "Van het antwoord (winst) terug naar de verkoopprijs." },
          ],
          theorie: "Toets-truc: ken je de inkoop én de gewenste winst? Tel ze op: verkoopprijs = inkoop + winst. Check altijd met verkoop − inkoop = winst.",
          voorbeelden: [
            { type: "stap", tekst: "Inkoop €4, wil €3 winst → verkoop €7." },
            { type: "stap", tekst: "Inkoop €1,50, wil €0,50 winst → verkoop €2." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Verkoopprijs = inkoopprijs + winst. De verkoopprijs is altijd hoger dan de inkoop." }],
          niveaus: {
            basis: "€5 (€3 + €2).",
            simpeler: "Tel je inkoop en de winst die je wilt op: €3 + €2 = €5.",
            nogSimpeler: "€5",
          },
        },
      },
      {
        q: "Een ijsje koop je in voor **€0,50** en verkoopt voor **€1,20**. Hoeveel **winst per ijsje**?",
        options: ["€0,70", "€1,70", "€0,50", "€1,20"],
        answer: 0,
        wrongHints: [null, "Niet optellen — winst is het verschil, niet de som.", "Dat is je inkoop.", "Daar zit de inkoop nog in."],
        uitlegPad: {
          stappen: [
            { titel: "Welke som?", tekst: "Winst per stuk = verkoopprijs − inkoopprijs = €1,20 − €0,50." },
            { titel: "Reken met de centen", tekst: "€1,20 − €0,50. Van 50 cent naar 120 cent = 70 cent. Dus **€0,70**." },
            { titel: "Check", tekst: "€0,50 inkoop + €0,70 winst = €1,20 verkoop. Klopt!" },
          ],
          woorden: [
            { woord: "winst per stuk", uitleg: "Verkoopprijs − inkoopprijs van één ding." },
          ],
          theorie: "Toets-tip: reken met centen als de bedragen onder €2 zijn. €1,20 = 120 cent, €0,50 = 50 cent, verschil 70 cent = €0,70.",
          voorbeelden: [
            { type: "stap", tekst: "Inkoop €0,80, verkoop €2 → winst €1,20." },
            { type: "stap", tekst: "Inkoop €1, verkoop €1,50 → winst €0,50." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Reken in centen bij kleine bedragen, dan hoef je niet met de komma te puzzelen." }],
          niveaus: {
            basis: "€0,70 (€1,20 − €0,50).",
            simpeler: "120 cent − 50 cent = 70 cent = €0,70.",
            nogSimpeler: "€0,70",
          },
        },
      },
      {
        q: "Je verkoopt **4 patatjes** voor **€3** per stuk. Hoeveel geld **komt binnen** (de opbrengst)?",
        options: ["€12", "€7", "€3", "€1"],
        answer: 0,
        wrongHints: [null, "Optellen van prijs en aantal klopt niet — bij een prijs per stuk en een aantal vermenigvuldig je.", "Dat is de prijs van één patatje.", "Niet aftrekken — bij een prijs per stuk en een aantal vermenigvuldig je."],
        uitlegPad: {
          stappen: [
            { titel: "Opbrengst = prijs × aantal", tekst: "Al het geld dat binnenkomt = verkoopprijs × aantal verkochte stuks." },
            { titel: "Vul in", tekst: "Prijs €3, aantal 4. Dus: €3 × 4 = **€12** opbrengst." },
            { titel: "Let op: dit is nog niet je winst!", tekst: "De opbrengst is al het geld dat binnenkomt. Je winst is pas de opbrengst min wat de patatjes jou kostten (de inkoop)." },
          ],
          woorden: [
            { woord: "opbrengst", uitleg: "Al het geld dat binnenkomt: verkoopprijs × aantal." },
            { woord: "winst", uitleg: "Wat overblijft ná de inkoopkosten." },
          ],
          theorie: "Toets-valkuil: opbrengst ≠ winst. Opbrengst = alles wat binnenkomt. Winst = opbrengst − inkoopkosten. De vraag hier vraagt alleen de opbrengst.",
          voorbeelden: [
            { type: "stap", tekst: "5 dingen × €2 = €10 opbrengst." },
            { type: "stap", tekst: "10 ijsjes × €1,20 = €12 opbrengst (winst is minder, want de inkoop gaat er nog af)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Opbrengst = verkoopprijs × aantal. Pas daarna trek je de inkoop eraf voor de winst." }],
          niveaus: {
            basis: "€12 (€3 × 4).",
            simpeler: "4 patatjes × €3 = €12 dat binnenkomt.",
            nogSimpeler: "€12",
          },
        },
      },
      {
        q: "Je koopt **8 stickers** in voor **€0,25** per stuk en verkoopt ze voor **€0,50** per stuk. Wat is de **totale winst**?",
        options: ["€2", "€4", "€0,25", "€0,50"],
        answer: 0,
        wrongHints: [null, "Dat is de totale opbrengst, niet de winst — de inkoop moet er nog af.", "Dat is de winst per sticker, niet de totale winst.", "Dat is de verkoopprijs van één sticker."],
        uitlegPad: {
          stappen: [
            { titel: "Winst per sticker", tekst: "Winst per stuk = €0,50 − €0,25 = €0,25." },
            { titel: "Totale winst", tekst: "Totale winst = €0,25 × 8 = **€2**." },
          ],
          niveaus: {
            basis: "€2 (winst per stuk €0,25 × 8).",
            simpeler: "Elke sticker levert 25 cent op. 8 × 25 cent = 200 cent = €2.",
            nogSimpeler: "€2",
          },
        },
      },
      {
        q: "Je verkoopt **10 koekjes** voor **€0,40** per stuk. De inkoop was **€0,15** per koekje. Wat is de **totale winst**?",
        options: ["€2,50", "€4", "€1,50", "€0,25"],
        answer: 0,
        wrongHints: [null, "Dat is de totale opbrengst (10 × €0,40) — trek de totale inkoop er nog af.", "Reken de winst per koekje en vermenigvuldig dan met 10.", "Dat is de winst per koekje, niet de totale winst."],
        uitlegPad: {
          stappen: [
            { titel: "Winst per koekje", tekst: "€0,40 − €0,15 = €0,25 per koekje." },
            { titel: "Totale winst", tekst: "€0,25 × 10 = **€2,50** totale winst." },
          ],
          niveaus: {
            basis: "€2,50 (winst per koekje €0,25 × 10).",
            simpeler: "Elk koekje levert 25 cent op. 10 × 25 cent = 250 cent = €2,50.",
            nogSimpeler: "€2,50",
          },
        },
      },
      {
        q: "Je wilt **€6 totale winst** maken door **12 boekenleggers** te verkopen. Hoeveel winst heb je nodig **per stuk**?",
        options: ["€0,50", "€6", "€2", "€72"],
        answer: 0,
        wrongHints: [null, "Dat is de totale winst — je zoekt de winst per stuk.", "Controleer: €2 × 12 = €24, niet €6.", "Dat is €6 × 12 — je deelt juist, niet vermenigvuldigt."],
        uitlegPad: {
          stappen: [
            { titel: "Winst per stuk = totale winst ÷ aantal", tekst: "€6 ÷ 12 = €0,50 per boekenlegger." },
            { titel: "Check", tekst: "€0,50 × 12 = €6 totale winst. Klopt!" },
          ],
          niveaus: {
            basis: "€0,50 (€6 ÷ 12).",
            simpeler: "Deel de totale winst door het aantal: €6 ÷ 12 = €0,50.",
            nogSimpeler: "€0,50",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je verkoopt **6 armbandjes** voor **€2** per stuk. De inkoop was samen **€5**. Hoeveel **winst** maak je?",
        options: ["€7", "€12", "€5", "€17"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is al het geld dat binnenkomt. Is dat ook wat je overhoudt?",
          null,
          "Moet de inkoop erbij of eraf?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst de opbrengst",
              tekst: "Opbrengst = verkoopprijs × aantal = €2 × 6 = €12.",
            },
            {
              titel: "Dan de winst",
              tekst: "Winst = opbrengst − inkoopkosten = €12 − €5 = **€7**.",
            },
            {
              titel: "Check",
              tekst: "€5 inkoop + €7 winst = €12 opbrengst. Klopt!",
            },
          ],
          woorden: [
            {
              woord: "opbrengst",
              uitleg: "Al het geld dat binnenkomt: verkoopprijs × aantal.",
            },
            {
              woord: "winst",
              uitleg: "Wat overblijft ná de inkoopkosten.",
            },
          ],
          theorie: "Toets-valkuil: de opbrengst (€12) is nog niet je winst. Trek de inkoop van alles samen eraf: €12 − €5 = €7.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "5 kaarten × €3 = €15 opbrengst. Inkoop samen €6 → winst €9.",
            },
            {
              type: "stap",
              tekst: "4 bekers × €5 = €20 opbrengst. Inkoop samen €8 → winst €12.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Twee stappen: eerst opbrengst (prijs × aantal), dan de inkoop eraf.",
            },
          ],
          niveaus: {
            basis: "€7 (€2 × 6 = €12, en €12 − €5 = €7).",
            simpeler: "Er komt €12 binnen. Je had €5 betaald. €12 − €5 = €7 over.",
            nogSimpeler: "€7",
          },
        },
      },
      {
        q: "Een flesje drinken koop je in voor **€0,60** en verkoop je voor **€1,00**. Je verkoopt er **15**. Hoeveel **totale winst**?",
        options: ["€6", "€15", "€9", "€0,40"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is al het geld dat binnenkomt. De inkoop moet er nog af.",
          "Dat is wat alle flesjes jou samen kostten.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Winst per flesje",
              tekst: "€1,00 − €0,60 = €0,40 per flesje.",
            },
            {
              titel: "Totale winst",
              tekst: "€0,40 × 15 = **€6**. In centen: 40 × 15 = 600 cent = €6.",
            },
            {
              titel: "Check",
              tekst: "Opbrengst €1,00 × 15 = €15. Inkoop €0,60 × 15 = €9. €15 − €9 = €6. Klopt!",
            },
          ],
          woorden: [
            {
              woord: "winst per stuk",
              uitleg: "Verkoopprijs − inkoopprijs van één ding.",
            },
            {
              woord: "totale winst",
              uitleg: "De winst van alle stuks samen.",
            },
          ],
          theorie: "Toets-truc: eerst de winst per stuk, dan keer het aantal. Reken bij kleine bedragen in centen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Inkoop €0,30, verkoop €0,80 → €0,50 winst per stuk. 6 stuks → €3.",
            },
            {
              type: "stap",
              tekst: "Inkoop €1, verkoop €1,20 → €0,20 winst per stuk. 20 stuks → €4.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Winst per stuk × aantal = totale winst.",
            },
          ],
          niveaus: {
            basis: "€6 (€0,40 winst per flesje × 15).",
            simpeler: "Elk flesje levert 40 cent op. 15 × 40 cent = 600 cent = €6.",
            nogSimpeler: "€6",
          },
        },
      },
    ],
  },

  // STAP C: Doorstroomtoets-mix
  {
    title: "Eindopdracht — winst mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: winst (verkoop − inkoop), winst per stuk × aantal, terugrekenen naar de verkoopprijs, en het verschil tussen opbrengst en winst.\n\nKijk goed of je moet **optellen, aftrekken of keer doen**. Veel succes!",
    checks: [
      {
        q: "Inkoop **€5**, verkoop **€8**. Hoeveel **winst**?",
        options: ["€3", "€13", "€5", "€8"],
        answer: 0,
        wrongHints: [null, "Niet optellen — winst is het verschil.", "Dat is je inkoop.", "Daar zit de inkoop nog in."],
      },
      {
        q: "Je maakt **€4 winst per stuk** en verkoopt **3 stuks**. **Totale winst**?",
        options: ["€12", "€7", "€1", "€43"],
        answer: 0,
        wrongHints: [null, "Bij 'per stuk × aantal' vermenigvuldig je, niet optellen.", "Aftrekken klopt niet — elk stuk levert €4 op.", "Reken €4 × 3, niet de cijfers naast elkaar."],
      },
      {
        q: "Inkoop **€2**, je wilt **€3 winst**. Voor hoeveel **verkopen**?",
        options: ["€5", "€1", "€6", "€3"],
        answer: 0,
        wrongHints: [null, "Aftrekken klopt niet — je wilt méér dan je inkoop.", "Niet vermenigvuldigen; reken inkoop + winst.", "Dat is alleen de winst; de inkoop moet erbij."],
      },
      {
        q: "Inkoop **€7**, verkoop **€6**. Wat gebeurt er?",
        options: ["€1 verlies", "€1 winst", "€13 winst", "Niets aan de hand"],
        answer: 0,
        wrongHints: [null, "Je verkocht goedkoper dan je inkoop — dan win je niet.", "Optellen klopt niet, en het is geen winst.", "Er is wél een verschil van €1."],
      },
      {
        q: "Je verkoopt **6 knuffels** voor **€5** per stuk. Hoeveel **opbrengst** komt binnen?",
        options: ["€30", "€11", "€5", "€6"],
        answer: 0,
        wrongHints: [null, "Optellen klopt niet — bij een prijs per stuk en een aantal vermenigvuldig je.", "Dat is de prijs van één knuffel.", "Dat is het aantal, niet het geld."],
      },
      {
        q: "Een dier koop je in voor **€10** en verkoopt voor **€14**. **Winst**?",
        options: ["€4", "€24", "€10", "€14"],
        answer: 0,
        wrongHints: [null, "Niet optellen — winst is het verschil.", "Dat is je inkoop.", "Daar zit de inkoop nog in."],
      },
      {
        q: "Wat is het verschil tussen **opbrengst** en **winst**?",
        options: ["Opbrengst is al het geld dat binnenkomt; winst is wat overblijft na de inkoop", "Ze zijn precies hetzelfde: allebei het geld dat bij de verkoop binnenkomt", "Winst is altijd groter dan de opbrengst, omdat de inkoop erbij wordt geteld", "Opbrengst is wat overblijft na de inkoop; winst is al het geld dat binnenkomt"],
        answer: 0,
        wrongHints: [null, "Niet hetzelfde — de inkoop gaat nog van de opbrengst af.", "Winst is juist kleiner; de inkoop gaat er nog af.", "Andersom: opbrengst komt binnen, winst blijft over."],
      },
      {
        q: "Een ijsje: inkoop **€0,40**, verkoop **€1,00**. **Winst per ijsje**?",
        options: ["€0,60", "€1,40", "€0,40", "€1,00"],
        answer: 0,
        wrongHints: [null, "Niet optellen — winst is het verschil.", "Dat is je inkoop.", "Daar zit de inkoop nog in."],
      },
      {
        q: "Je verkoopt **7 notitieboekjes** met **€1,50 winst per stuk**. Hoeveel **totale winst**?",
        options: ["€10,50", "€8,50", "€1,50", "€7"],
        answer: 0,
        wrongHints: [null, "Optellen klopt niet — gebruik vermenigvuldigen voor 'per stuk × aantal'.", "Dat is de winst per stuk, niet de totale winst.", "Dat is het aantal, niet de winst."],
        uitlegPad: {
          stappen: [
            { titel: "Totale winst", tekst: "Winst per stuk × aantal = €1,50 × 7 = **€10,50**." },
          ],
          niveaus: {
            basis: "€10,50 (€1,50 × 7).",
            simpeler: "Elk van de 7 stuks levert €1,50 op. 7 × €1,50 = €10,50.",
            nogSimpeler: "€10,50",
          },
        },
      },
      {
        q: "Inkoop **€3,50**, verkoop **€5,00**. Wat is de **winst per stuk**?",
        options: ["€1,50", "€8,50", "€3,50", "€5,00"],
        answer: 0,
        wrongHints: [null, "Niet optellen — winst is het verschil.", "Dat is je inkoop.", "Daar zit de inkoop nog in."],
        uitlegPad: {
          stappen: [
            { titel: "Winst per stuk", tekst: "Winst = verkoop − inkoop = €5,00 − €3,50 = **€1,50**." },
          ],
          niveaus: {
            basis: "€1,50 (€5,00 − €3,50).",
            simpeler: "500 cent − 350 cent = 150 cent = €1,50.",
            nogSimpeler: "€1,50",
          },
        },
      },
      {
        q: "Inkoop **€12**, gewenste winst **€8**. Hoeveel **verkoopprijs**?",
        options: ["€20", "€4", "€12", "€8"],
        answer: 0,
        wrongHints: [null, "Dan verkoop je voor minder dan de inkoop — verlies!", "Dat is de inkoopprijs zonder winst.", "Dat is alleen de gewenste winst, de inkoop moet erbij."],
        uitlegPad: {
          stappen: [
            { titel: "Verkoopprijs = inkoop + winst", tekst: "€12 + €8 = **€20**." },
            { titel: "Check", tekst: "€20 − €12 = €8 winst. Klopt!" },
          ],
          niveaus: {
            basis: "€20 (€12 + €8).",
            simpeler: "Tel inkoop en gewenste winst op: €12 + €8 = €20.",
            nogSimpeler: "€20",
          },
        },
      },
      {
        q: "Je koopt **5 pakken kaarten** in voor **€2** per pak en verkoopt elk pak voor **€3**. Wat is de **totale winst**?",
        options: ["€5", "€15", "€10", "€2"],
        answer: 0,
        wrongHints: [null, "Dat is de totale opbrengst (5 × €3) — de inkoop moet er nog af.", "Dat is de totale inkoop (5 × €2), niet de winst.", "Dat is de winst per pak, niet de totale winst."],
        uitlegPad: {
          stappen: [
            { titel: "Winst per pak", tekst: "€3 − €2 = €1 per pak." },
            { titel: "Totale winst", tekst: "€1 × 5 = **€5** totale winst." },
          ],
          niveaus: {
            basis: "€5 (€1 winst per pak × 5 pakken).",
            simpeler: "Elk pak levert €1 op. 5 pakken = €5 totaal.",
            nogSimpeler: "€5",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const winstRekenenPo = {
  id: "winst-rekenen-po",
  title: "Winst rekenen (groep 6-8)",
  emoji: "📈",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Rekenen + leefwereld — financiële educatie (winst)",
  prerequisites: [
    { id: "geld-rekenen", title: "Geld rekenen", niveau: "po-1F" },
  ],
  intro:
    "Winst rekenen voor groep 6-8 — inkoop, verkoop en winst (verkoop − inkoop), winst per stuk × aantal, terugrekenen naar de verkoopprijs en het verschil tussen opbrengst en winst. Met echte kraam- en park-sommen. ~12 min.",
  triggerKeywords: [
    "winst", "verlies", "inkoop", "verkoop", "inkoopprijs", "verkoopprijs",
    "opbrengst", "winst per stuk", "handel", "kraam",
  ],
  chapters,
  steps,
};

export default winstRekenenPo;
