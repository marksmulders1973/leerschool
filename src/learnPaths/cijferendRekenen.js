// Leerpad: Cijferend rekenen — voor groep 6-8
// 7 stappen in 5 hoofdstukken. Doorstroomtoets-stijl praktijksommen + redactie.
// Sprint-5+ S4 (2026-05-08).
// + stap F (11 aug 2026): "ken ze allemaal"-oefenronde plus & min met typ-antwoorden.

import { makeRekenOefenRonde } from "../components/learn/RekenOefenRonde.jsx";

const COLORS = {
  curve: "#00c853",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  digitGood: "#69f0ae",
  digitBorrow: "#ffaa30",
};

const stepEmojis = ["🔢","➕","➖","✖️","➗","🛒","🏆","🧮"];

const chapters = [
  { letter: "A", title: "Wat is cijferend rekenen?", emoji: "🔢", from: 0, to: 0 },
  { letter: "B", title: "Optellen + aftrekken", emoji: "➕", from: 1, to: 2 },
  { letter: "C", title: "Vermenigvuldigen", emoji: "✖️", from: 3, to: 4 },
  { letter: "D", title: "Delen + redactiesommen", emoji: "🛒", from: 5, to: 5 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 6, to: 6 },
  { letter: "F", title: "Oefen plus & min!", emoji: "🧮", from: 7, to: 7 },
];

function kolomSvg(getallen, bewerking, antwoord, breedte = 140) {
  const startX = breedte / 2;
  const lines = getallen.map((g, i) => {
    const ystart = 40 + i * 24;
    const teken = i === getallen.length - 1 ? bewerking : "";
    return `<text x="${startX - 50}" y="${ystart}" fill="${COLORS.curveAlt}" font-size="18" font-family="monospace" font-weight="bold">${teken}</text><text x="${startX + 25}" y="${ystart}" text-anchor="end" fill="${COLORS.text}" font-size="18" font-family="monospace">${g}</text>`;
  }).join("");
  const lineY = 40 + getallen.length * 24 - 6;
  return `<svg viewBox="0 0 ${breedte + 30} 160">
<rect x="0" y="0" width="${breedte + 30}" height="160" fill="${COLORS.paper}"/>
${lines}
<line x1="${startX - 60}" y1="${lineY}" x2="${startX + 30}" y2="${lineY}" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="${startX + 25}" y="${lineY + 24}" text-anchor="end" fill="${COLORS.digitGood}" font-size="20" font-family="monospace" font-weight="bold">${antwoord}</text>
</svg>`;
}

const steps = [
  {
    title: "Wat is cijferend rekenen?",
    explanation: "**Cijferend rekenen** is het rekenen onder elkaar in **kolommen** — net zoals je het op papier doet. Het werkt voor grote getallen waar 'uit het hoofd' niet meer lukt.\n\n**De truc**: zet getallen **netjes onder elkaar** zodat eenheden, tientallen, honderdtallen elk in hun eigen kolom staan.\n\n**Vergelijking**:\n• Hoofdrekenen: 23 + 14 = 37 *(snel uit je hoofd)*.\n• Cijferend: 487 + 326 = ? *(handig om op te schrijven)*.\n\n**De vier basis-bewerkingen** die je kunt cijferen:\n• **Optellen** (+) — kolomsgewijs, met onthouden bij 10.\n• **Aftrekken** (−) — kolomsgewijs, met lenen.\n• **Vermenigvuldigen** (×) — cijfer voor cijfer, met onthouden.\n• **Delen** (:) — bus-bewerking of staartdeling.\n\n**Belangrijk om te onthouden**:\n• Bij optellen, aftrekken en vermenigvuldigen werk je van **rechts naar links** (eenheden eerst, dan tientallen, dan honderdtallen). Bij delen juist van links naar rechts.\n• Schrijf netjes onder elkaar — anders gaat het mis.\n• Bij optellen onthoud je een 'overschietje'. Bij aftrekken leen je van de buurman.\n\n**Toets-context**:\nVeel toetsvragen vragen om grote berekeningen die je écht moet **opschrijven**. Cijferen kost tijd maar is **betrouwbaar**.",
    checks: [
      {
        q: "Wanneer is **cijferend rekenen handig**?",
        options: ["Bij grote getallen die niet in je hoofd passen","Altijd, ook bij 5+3","Alleen bij delen","Alleen op de Doorstroomtoets"],
        answer: 0,
        wrongHints: [null,"Te overdreven — kleine sommen doe je in je hoofd.","Niet alleen delen — alle 4 bewerkingen kun je cijferen.","Niet alleen de toets — overal in echte rekensommen."],
        uitlegPad: {
          stappen: [{ titel: "Wanneer cijferen?", tekst: "Voor GROTE getallen die niet in je hoofd passen. 5+3 = hoofd. 487+326 = papier." }],
          woorden: [{ woord: "cijferend", uitleg: "Onder elkaar in kolommen op papier rekenen." }],
          theorie: "Cijferen is een papier-techniek. Voor grote getallen waar hoofdrekenen onbetrouwbaar wordt.",
          voorbeelden: [{ type: "groot", tekst: "Onder hoofdrekenen-grens (~100): hoofd. Boven: cijferen op papier." }],
          basiskennis: [{ onderwerp: "Kies methode", uitleg: "Niet altijd cijferen — alleen waar nodig." }],
          niveaus: { basis: "Grote getallen = cijferen.", simpeler: "Stel: 5+3 doe je in je hoofd. Maar 487+326? Dan wil je papier. Daarom cijferen.", nogSimpeler: "Groot = papier" },
        },
      },
      {
        q: "Bij cijferend **optellen** werk je **van** ... **naar** ...",
        options: ["Rechts naar links","Links naar rechts","Boven naar onder","Maakt niet uit"],
        answer: 0,
        wrongHints: [null,"Andersom — eenheden gaan eerst.","Niet horizontaal — kolomsgewijs.","Het maakt wél uit — anders gaat het overschietje fout."],
        uitlegPad: {
          stappen: [{ titel: "Rechts begint", tekst: "Eenheden eerst (rechts), dan tientallen, dan honderdtallen. Want onthoudje gaat naar links." }],
          woorden: [{ woord: "kolommen", uitleg: "Verticale 'banen' in cijferen: eenheden, tientallen, honderden." }],
          theorie: "Rechts → links omdat onthoudje van eenheden naar tientallen gaat. Andersom werkt niet.",
          voorbeelden: [{ type: "volgorde", tekst: "247+158: doe eerst 7+8 (eenheden), dan 4+5+1 (tientallen, +1 onthoud)." }],
          basiskennis: [{ onderwerp: "Onthoudje", uitleg: "Bij optelling >9 in een kolom: 1 onthouden voor links." }],
          niveaus: { basis: "Rechts → links.", simpeler: "Cijferen begint bij de KLEINSTE getallen (eenheden, helemaal rechts) en gaat naar links toe.", nogSimpeler: "Rechts eerst" },
        },
      },
      {
        q: "Bij **23 + 14** (hoofdrekenen of cijferen?) — wat is logisch?",
        options: ["Hoofdrekenen — eenvoudig","Cijferen op papier","Calculator","Maakt niks uit"],
        answer: 0,
        wrongHints: [null,"Overkill — zo'n kleine som kun je direct in je hoofd doen.","Niet voor zo'n eenvoudige som.","Het maakt wél uit — kies de snelste manier per som."],
        uitlegPad: {
          stappen: [{ titel: "Klein = hoofd", tekst: "23+14 = simpel — 30+7 = 37, of 20+10=30 + 3+4=7. Hoofdrekenen het snelst." }],
          woorden: [{ woord: "hoofdrekenen", uitleg: "Sommen oplossen zonder papier — uit je hoofd." }],
          theorie: "Bij kleine sommen (~tot 100) = hoofdrekenen sneller. Cijferen heeft pas zin bij grote getallen.",
          voorbeelden: [{ type: "klein", tekst: "5+3, 12+8, 23+14 — allemaal hoofdrekenen. 487+326 = cijferen." }],
          basiskennis: [{ onderwerp: "Kies wijs", uitleg: "Snelste methode = beste methode." }],
          niveaus: { basis: "Klein = hoofd.", simpeler: "23+14 = 37, kun je direct in je hoofd. Cijferen op papier zou tijd verspillen.", nogSimpeler: "Klein = hoofd" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Bij welke bewerking werk je bij cijferen van **links naar rechts**?",
        options: ["Delen", "Optellen", "Aftrekken", "Vermenigvuldigen"],
        answer: 0,
        wrongHints: [
          null,
          "Bij deze bewerking begin je juist bij de eenheden, rechts.",
          null,
          "Denk aan het onthoudje: dat schuift naar links. Waar begin je dan?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Rechts of links?",
              tekst: "Optellen, aftrekken en keer: rechts beginnen. Delen: links beginnen.",
            },
          ],
          woorden: [
            {
              woord: "links naar rechts",
              uitleg: "Je begint bij het grootste cijfer, helemaal links.",
            },
          ],
          theorie: "Bij delen kijk je eerst hoe vaak de deler past in het begin van het getal. Daarom begin je links.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "144 ÷ 6: eerst kijk je naar 14 (links), daarna pas naar de 4.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Uitzondering",
              uitleg: "Delen is de enige van de vier die links begint.",
            },
          ],
          niveaus: {
            basis: "Delen = links beginnen.",
            simpeler: "Bij plus, min en keer begin je rechts bij de eenheden. Bij delen begin je links, bij het grootste cijfer.",
            nogSimpeler: "Delen: links",
          },
        },
      },
      {
        q: "Je zet **352** en **47** onder elkaar om ze op te tellen. Onder welk cijfer van 352 komt de **7**?",
        options: ["Onder de 2", "Onder de 5", "Onder de 3", "Naast de 3"],
        answer: 0,
        wrongHints: [
          null,
          "De 7 van 47 is eenheden. Wat zijn de eenheden van 352?",
          null,
          "Je schrijft getallen onder elkaar, niet naast elkaar.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden zoeken",
              tekst: "In 47 is de 7 de eenheden. In 352 is de 2 de eenheden.",
            },
            {
              titel: "Rechts tegen rechts",
              tekst: "Zet beide getallen rechts netjes tegen elkaar. Dan staat 7 onder 2.",
            },
          ],
          woorden: [
            {
              woord: "kolom",
              uitleg: "Een rij cijfers recht onder elkaar: eenheden, tientallen of honderdtallen.",
            },
          ],
          theorie: "Eenheden onder eenheden, tientallen onder tientallen. Het kortere getal begint dus verder naar rechts.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "  352\n+  47\nDe 4 staat onder de 5, de 7 onder de 2.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Netjes schrijven",
              uitleg: "Scheve kolommen = fout antwoord.",
            },
          ],
          niveaus: {
            basis: "7 onder de 2.",
            simpeler: "47 heeft maar twee cijfers. Zet het rechts uitgelijnd: 7 (eenheden) onder 2 (eenheden), 4 (tientallen) onder 5 (tientallen).",
            nogSimpeler: "Onder de 2",
          },
        },
      },
      {
        q: "Waarom zet je de getallen bij cijferen **netjes onder elkaar**?",
        options: [
          "Zodat je cijfers uit dezelfde kolom bij elkaar telt",
          "Zodat je geen onthoudje meer nodig hebt",
          "Zodat het antwoord een rond getal wordt",
          "Zodat je de som niet hoeft te schatten",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Het onthoudje heb je nodig als een kolom 10 of meer is, hoe netjes je ook schrijft.",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kolommen",
              tekst: "Eenheden, tientallen en honderdtallen hebben elk een eigen kolom.",
            },
            {
              titel: "Mis",
              tekst: "Staat een cijfer scheef, dan tel je een tiental bij een eenheid op. Fout!",
            },
          ],
          woorden: [
            {
              woord: "kolom",
              uitleg: "Een rij cijfers recht onder elkaar.",
            },
          ],
          theorie: "Cijferen werkt alleen als elke kolom maar één soort bevat: alleen eenheden, alleen tientallen, enzovoort.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Scheef: 4 van 47 onder de 2 van 352 → fout. Recht: 7 onder 2, 4 onder 5 → goed.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Ruitjespapier",
              uitleg: "In elk hokje één cijfer helpt om recht te schrijven.",
            },
          ],
          niveaus: {
            basis: "Dezelfde kolom bij elkaar.",
            simpeler: "Je wilt eenheden bij eenheden optellen en tientallen bij tientallen. Dat lukt alleen als ze recht onder elkaar staan.",
            nogSimpeler: "Recht onder elkaar",
          },
        },
      },
    ],
  },

  {
    title: "Cijferend optellen — onthouden bij 10",
    explanation: "Bij **cijferend optellen** zet je getallen **onder elkaar** en tel je per kolom op. Bij 10 of meer **onthoud je 1** voor de volgende kolom.\n\n**Voorbeeld 1**: 247 + 158\n```\n  2 4 7\n+ 1 5 8\n-------\n```\n• **Eenheden**: 7 + 8 = 15. Schrijf 5, onthoud 1.\n• **Tientallen**: 4 + 5 + 1 (onthouden) = 10. Schrijf 0, onthoud 1.\n• **Honderdtallen**: 2 + 1 + 1 (onthouden) = 4. Schrijf 4.\n\n**Antwoord**: 405.\n\n**Voorbeeld 2**: 1268 + 537\n```\n  1 2 6 8\n+   5 3 7\n--------\n```\n• Eenheden: 8 + 7 = 15. Schrijf 5, onthoud 1.\n• Tientallen: 6 + 3 + 1 = 10. Schrijf 0, onthoud 1.\n• Honderdtallen: 2 + 5 + 1 = 8. Schrijf 8.\n• Duizendtallen: 1. Schrijf 1.\n\n**Antwoord**: 1805.\n\n**Toets-tip**:\n• Schrijf **netjes**: gebruik ruitjespapier of zorg dat je kolommen recht onder elkaar staan.\n• Bij grote getallen — schrijf het **onthoud-getal klein boven** de volgende kolom zodat je 't niet vergeet.\n• Check je antwoord met een **schatting**: 247 + 158 ≈ 250 + 160 = 410. Klopt 405? ✓.\n\n**Veel-voorkomende fout**:\nVergeten het 'onthoudje' op te tellen. Daarom altijd opschrijven, niet onthouden in je hoofd.",
    svg: kolomSvg(["247","158"], "+", "405"),
    checks: [
      {
        q: "**347 + 256** = ?",
        options: ["603","593","613","503"],
        answer: 0,
        wrongHints: [null,"Te weinig — tel de eenheden opnieuw: hoeveel is 7 plus 6?","Te veel — heb je 1 te veel onthouden?","Veel te weinig — heb je honderdtallen niet correct gerold?"],
        uitlegPad: {
          stappen: [
            { titel: "Eenheden", tekst: "7+6=13. Schrijf 3, onthoud 1." },
            { titel: "Tientallen", tekst: "4+5+1(onthoud)=10. Schrijf 0, onthoud 1." },
            { titel: "Honderdtallen", tekst: "3+2+1(onthoud)=6. Schrijf 6. Antwoord: 603." },
          ],
          woorden: [{ woord: "onthoudje", uitleg: "Bij optelling >9: 1 onthouden voor de volgende kolom links." }],
          theorie: "Optellen kolom voor kolom (rechts→links). >9 = onthoudje meenemen.",
          voorbeelden: [{ type: "stap", tekst: "Schat eerst: 350+250=600. Antwoord moet rond 600 liggen. 603 ✓." }],
          basiskennis: [{ onderwerp: "Schat altijd", uitleg: "Schatting helpt om dom-foute antwoorden uit te sluiten." }],
          niveaus: { basis: "347+256=603.", simpeler: "Doe het kolom voor kolom: 7+6=13 (3, +1). 4+5+1=10 (0, +1). 3+2+1=6. Antwoord 603.", nogSimpeler: "603" },
        },
      },
      {
        q: "**1248 + 567** = ?",
        options: ["1815","1715","1805","1825"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je het onthoudje overgeslagen?","Te weinig — klopt de duizendtallen-kolom?","Te veel — heb je extra onthoudje gerekend?"],
        uitlegPad: {
          stappen: [
            { titel: "Werk kolom voor kolom", tekst: "8+7=15 (5,+1). 4+6+1=11 (1,+1). 2+5+1=8. 1+0=1. Antwoord 1815." },
          ],
          woorden: [{ woord: "duizendtallen", uitleg: "De 4e kolom van rechts (1000-cijfers)." }],
          theorie: "Bij grote sommen extra zorgvuldig — vaak meerdere onthoudjes achter elkaar.",
          voorbeelden: [{ type: "schat", tekst: "Schat: 1250+570=1820. Antwoord rond 1820. 1815 ✓." }],
          basiskennis: [{ onderwerp: "Schrijf netjes", uitleg: "Kolommen recht onder elkaar = minder fouten." }],
          niveaus: { basis: "1248+567=1815.", simpeler: "Kolom-truc: 8+7=15. 4+6+1=11. 2+5+1=8. 1. Lees omhoog: 1815.", nogSimpeler: "1815" },
        },
      },
      {
        q: "**4985 + 1567** = ?",
        options: ["6552","6452","6442","5552"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je in elke kolom het onthoudje meegenomen?","Te weinig — schat globaal: hoeveel is 5000 plus 1500 ongeveer?","Veel te weinig — duizendtallen onjuist."],
        uitlegPad: {
          stappen: [
            { titel: "Stappen", tekst: "5+7=12. 8+6+1=15. 9+5+1=15. 4+1+1=6. Antwoord 6552." },
            { titel: "Schat", tekst: "5000+1500=6500. 6552 past. 5552 valt door de schatting meteen af; of het 6452 of 6552 is, zie je pas door nauwkeurig te cijferen." },
          ],
          woorden: [{ woord: "schatting", uitleg: "Grof berekenen om te checken of antwoord realistisch is." }],
          theorie: "Bij grote sommen: schat eerst, reken nauwkeurig, vergelijk.",
          voorbeelden: [{ type: "schatting", tekst: "5000+1500=6500. Antwoord moet rond 6500 liggen — niet 5552." }],
          basiskennis: [{ onderwerp: "Schatten = check", uitleg: "Schatting beschermt tegen rekenfouten." }],
          niveaus: { basis: "4985+1567=6552.", simpeler: "Schat: 5000+1500=6500. Echt antwoord moet daar rond zitten. Reken nauwkeurig: 6552.", nogSimpeler: "6552" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**568 + 275** = ?",
        options: ["843", "833", "743", "853"],
        answer: 0,
        wrongHints: [
          null,
          "Heb je bij de tientallen het onthoudje van de eenheden meegeteld?",
          "Kijk naar de honderdtallen: kwam er een onthoudje bij van de tientallen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden",
              tekst: "8 + 5 = 13. Schrijf 3, onthoud 1.",
            },
            {
              titel: "Tientallen",
              tekst: "6 + 7 + 1 = 14. Schrijf 4, onthoud 1.",
            },
            {
              titel: "Honderdtallen",
              tekst: "5 + 2 + 1 = 8. Antwoord: 843.",
            },
          ],
          woorden: [
            {
              woord: "onthoudje",
              uitleg: "De 1 die je meeneemt naar de kolom links als een kolom 10 of meer is.",
            },
          ],
          theorie: "Optellen kolom voor kolom, van rechts naar links. Is een kolom 10 of meer? Onthoudje meenemen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 570 + 280 = 850. 843 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schat altijd",
              uitleg: "Een schatting laat zien of je antwoord in de buurt zit.",
            },
          ],
          niveaus: {
            basis: "568 + 275 = 843.",
            simpeler: "8 + 5 = 13. Schrijf 3, onthoud 1. 6 + 7 + 1 = 14. Schrijf 4, onthoud 1. 5 + 2 + 1 = 8. Antwoord: 843.",
            nogSimpeler: "843",
          },
        },
      },
      {
        q: "**2475 + 1386** = ?",
        options: ["3861", "3851", "3761", "3871"],
        answer: 0,
        wrongHints: [
          null,
          "Tel de tientallen opnieuw: telde je het onthoudje van de eenheden mee?",
          null,
          "Heb je ergens een onthoudje te veel meegeteld?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden",
              tekst: "5 + 6 = 11. Schrijf 1, onthoud 1.",
            },
            {
              titel: "Tientallen",
              tekst: "7 + 8 + 1 = 16. Schrijf 6, onthoud 1.",
            },
            {
              titel: "Honderdtallen",
              tekst: "4 + 3 + 1 = 8. Schrijf 8.",
            },
            {
              titel: "Duizendtallen",
              tekst: "2 + 1 = 3. Antwoord: 3861.",
            },
          ],
          woorden: [
            {
              woord: "onthoudje",
              uitleg: "De 1 die je meeneemt naar de kolom links als een kolom 10 of meer is.",
            },
          ],
          theorie: "Optellen kolom voor kolom, van rechts naar links. Is een kolom 10 of meer? Onthoudje meenemen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 2500 + 1400 = 3900. 3861 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schat altijd",
              uitleg: "Een schatting laat zien of je antwoord in de buurt zit.",
            },
          ],
          niveaus: {
            basis: "2475 + 1386 = 3861.",
            simpeler: "5 + 6 = 11. Schrijf 1, onthoud 1. 7 + 8 + 1 = 16. Schrijf 6, onthoud 1. 4 + 3 + 1 = 8. Schrijf 8. 2 + 1 = 3. Antwoord: 3861.",
            nogSimpeler: "3861",
          },
        },
      },
      {
        q: "**3608 + 2795** = ?",
        options: ["6403", "6393", "6303", "5403"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de tientallen: 0 + 9 en dan nog het onthoudje. Wat wordt dat?",
          null,
          "Kijk naar de duizendtallen: komt daar nog een onthoudje bij?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden",
              tekst: "8 + 5 = 13. Schrijf 3, onthoud 1.",
            },
            {
              titel: "Tientallen",
              tekst: "0 + 9 + 1 = 10. Schrijf 0, onthoud 1.",
            },
            {
              titel: "Honderdtallen",
              tekst: "6 + 7 + 1 = 14. Schrijf 4, onthoud 1.",
            },
            {
              titel: "Duizendtallen",
              tekst: "3 + 2 + 1 = 6. Antwoord: 6403.",
            },
          ],
          woorden: [
            {
              woord: "onthoudje",
              uitleg: "De 1 die je meeneemt naar de kolom links als een kolom 10 of meer is.",
            },
          ],
          theorie: "Optellen kolom voor kolom, van rechts naar links. Is een kolom 10 of meer? Onthoudje meenemen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 3600 + 2800 = 6400. 6403 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schat altijd",
              uitleg: "Een schatting laat zien of je antwoord in de buurt zit.",
            },
          ],
          niveaus: {
            basis: "3608 + 2795 = 6403.",
            simpeler: "8 + 5 = 13. Schrijf 3, onthoud 1. 0 + 9 + 1 = 10. Schrijf 0, onthoud 1. 6 + 7 + 1 = 14. Schrijf 4, onthoud 1. 3 + 2 + 1 = 6. Antwoord: 6403.",
            nogSimpeler: "6403",
          },
        },
      },
      {
        q: "**134 + 258 + 316** = ?",
        options: ["708", "698", "608", "718"],
        answer: 0,
        wrongHints: [
          null,
          "Tel de eenheden van alle drie de getallen: 4, 8 en 6. Wat onthoud je dan?",
          "Tel de tientallen opnieuw, mét het onthoudje. Kwam er weer iets bij de honderdtallen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden",
              tekst: "4 + 8 + 6 = 18. Schrijf 8, onthoud 1.",
            },
            {
              titel: "Tientallen",
              tekst: "3 + 5 + 1 + 1 = 10. Schrijf 0, onthoud 1.",
            },
            {
              titel: "Honderdtallen",
              tekst: "1 + 2 + 3 + 1 = 7. Antwoord: 708.",
            },
          ],
          woorden: [
            {
              woord: "onthoudje",
              uitleg: "De 1 die je meeneemt naar de kolom links als een kolom 10 of meer is.",
            },
          ],
          theorie: "Optellen kolom voor kolom, van rechts naar links. Is een kolom 10 of meer? Onthoudje meenemen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 130 + 260 + 320 = 710. 708 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schat altijd",
              uitleg: "Een schatting laat zien of je antwoord in de buurt zit.",
            },
          ],
          niveaus: {
            basis: "134 + 258 + 316 = 708.",
            simpeler: "4 + 8 + 6 = 18. Schrijf 8, onthoud 1. 3 + 5 + 1 + 1 = 10. Schrijf 0, onthoud 1. 1 + 2 + 3 + 1 = 7. Antwoord: 708.",
            nogSimpeler: "708",
          },
        },
      },
      {
        q: "Je rekent **476 + 358**. Wat doe je bij de **eenheden**?",
        options: [
          "Je schrijft 4 op en onthoudt 1",
          "Je schrijft 14 op en onthoudt niets",
          "Je schrijft 1 op en onthoudt 4",
          "Je schrijft 4 op en onthoudt niets",
        ],
        answer: 0,
        wrongHints: [
          null,
          "In één kolom past maar één cijfer.",
          null,
          "14 is meer dan 9. Wat hoort er dan bij?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden",
              tekst: "6 + 8 = 14.",
            },
            {
              titel: "Splitsen",
              tekst: "14 = 1 tiental en 4 eenheden. Schrijf 4, onthoud 1 voor de tientallen.",
            },
          ],
          woorden: [
            {
              woord: "onthoudje",
              uitleg: "De 1 die je meeneemt naar de kolom links.",
            },
          ],
          theorie: "In elke kolom schrijf je maar één cijfer. Is de kolom 10 of meer, dan gaat het tiental als onthoudje naar links.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Daarna tientallen: 7 + 5 + 1 = 13. Schrijf 3, onthoud 1. Honderdtallen: 4 + 3 + 1 = 8. Antwoord 834.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eén cijfer per kolom",
              uitleg: "Nooit twee cijfers in één kolom schrijven.",
            },
          ],
          niveaus: {
            basis: "Schrijf 4, onthoud 1.",
            simpeler: "6 + 8 = 14. Dat is te veel voor één kolom. De 4 schrijf je op, de 1 neem je mee naar de tientallen.",
            nogSimpeler: "4 op, 1 mee",
          },
        },
      },
      {
        q: "Je rekent **389 + 245**. Hoeveel is de **tientallen-kolom** samen, mét het onthoudje?",
        options: ["13", "12", "14", "11"],
        answer: 0,
        wrongHints: [
          null,
          "Begin bij de eenheden: 9 + 5. Moet je dan iets onthouden?",
          "Hoeveel onthoud je van de eenheden: 1 of 2?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden",
              tekst: "9 + 5 = 14. Schrijf 4, onthoud 1.",
            },
            {
              titel: "Tientallen",
              tekst: "8 + 4 + 1 (onthouden) = 13.",
            },
          ],
          woorden: [
            {
              woord: "tientallen-kolom",
              uitleg: "De tweede kolom van rechts.",
            },
          ],
          theorie: "Het onthoudje van de eenheden tel je mee in de tientallen-kolom.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Verder: schrijf 3, onthoud 1. Honderdtallen: 3 + 2 + 1 = 6. Antwoord 634.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Onthoudje vergeten",
              uitleg: "De meest gemaakte fout: het onthoudje niet meetellen.",
            },
          ],
          niveaus: {
            basis: "8 + 4 + 1 = 13.",
            simpeler: "Eerst de eenheden: 9 + 5 = 14, dus 1 onthouden. Dan tientallen: 8 + 4 = 12, plus het onthoudje = 13.",
            nogSimpeler: "13",
          },
        },
      },
      {
        q: "Sanne rekent **612 + 289** en komt op **801**. Klopt dat?",
        options: [
          "Nee, het moet 901 zijn",
          "Ja, 801 klopt",
          "Nee, het moet 891 zijn",
          "Nee, het moet 811 zijn",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Schat eens: ongeveer 600 + 300. Past 801 daarbij?",
          "Reken de tientallen opnieuw, mét het onthoudje.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Schatten",
              tekst: "612 + 289 ≈ 600 + 300 = 900. 801 is veel te weinig.",
            },
            {
              titel: "Cijferen",
              tekst: "2 + 9 = 11 (1, onthoud 1). 1 + 8 + 1 = 10 (0, onthoud 1). 6 + 2 + 1 = 9. Antwoord 901.",
            },
          ],
          woorden: [
            {
              woord: "schatting",
              uitleg: "Een snelle ruwe berekening met ronde getallen.",
            },
          ],
          theorie: "Met een schatting zie je snel of een antwoord kan kloppen. Sanne vergat het laatste onthoudje.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat 612 als 600 en 289 als 300. Samen ongeveer 900.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Controleren",
              uitleg: "Schat na het cijferen altijd even.",
            },
          ],
          niveaus: {
            basis: "612 + 289 = 901.",
            simpeler: "Schat: 600 + 300 = 900. Dan kan 801 niet. Bij de honderdtallen komt nog een onthoudje: 6 + 2 + 1 = 9. Antwoord 901.",
            nogSimpeler: "901",
          },
        },
      },
    ],
  },

  {
    title: "Cijferend aftrekken — lenen bij de buur",
    explanation: "Bij **cijferend aftrekken** is het lastiger: als je niet genoeg hebt in een kolom, **leen je 1** van de kolom links ervan.\n\n**Voorbeeld**: 524 − 258\n```\n  5 2 4\n− 2 5 8\n-------\n```\n• **Eenheden**: 4 − 8 → kan niet (4 < 8). Leen 1 van tientallen.\n  - Tientallen wordt 1 (was 2).\n  - Eenheden wordt 14. 14 − 8 = **6**.\n• **Tientallen**: 1 − 5 → kan niet. Leen 1 van honderdtallen.\n  - Honderdtallen wordt 4 (was 5).\n  - Tientallen wordt 11. 11 − 5 = **6**.\n• **Honderdtallen**: 4 − 2 = **2**.\n\n**Antwoord**: 266.\n\n**Voorbeeld 2**: 1000 − 347 *(de gevreesde 1000-min)*\n```\n  1 0 0 0\n−   3 4 7\n--------\n```\n• Eenheden: 0 − 7 → leen. Maar tientallen is ook 0! → leen door naar honderdtallen, ook 0! → leen door naar duizendtallen.\n• Truc: behandel 1000 als 999+1: 999 − 347 = 652, dan + 1 = **653**.\n\n**Toets-tip**:\nBij **leen-sommen door meer kolommen heen** *(zoals 1000 − iets)*, gebruik de truc: doe **999 − getal**, dan **+1**.\n\n**Voorbeeld**: 5000 − 1234\n• 4999 − 1234 = 3765.\n• 3765 + 1 = **3766**.\n\n**Veel-voorkomende fouten**:\n• Vergeten dat de buurman **1 minder** is geworden na lenen.\n• Bij dubbel-lenen door 0-kolom — de truc gebruiken.",
    svg: kolomSvg(["524","258"], "−", "266"),
    checks: [
      {
        q: "**632 − 184** = ?",
        options: ["448","458","568","552"],
        answer: 0,
        wrongHints: [null,"Te veel — tel de eenheden na: hoeveel is 12 min 4 als je leent?","Veel te veel — niet correct geleend.","Te veel — heb je in elke kolom geleend waar nodig?"],
        uitlegPad: {
          stappen: [
            { titel: "Lenen bij aftrekken", tekst: "Eenheden: 2−4 → leen. 12−4=8. Tientallen wordt 2 (was 3)." },
            { titel: "Volgende kolommen", tekst: "Tientallen: 2−8 → leen. 12−8=4. Honderdtallen wordt 5. Honderden: 5−1=4. Antwoord 448." },
          ],
          woorden: [{ woord: "lenen", uitleg: "Bij aftrekken: 1 'lenen' van de buurman links om voldoende te hebben." }],
          theorie: "Aftrekken kolomsgewijs. Te weinig? Leen 1 van links — die kolom wordt 1 minder.",
          voorbeelden: [{ type: "lenen", tekst: "632−184: 12−4=8 (na lenen), 12−8=4 (na lenen), 5−1=4. Antwoord 448." }],
          basiskennis: [{ onderwerp: "Schat", uitleg: "Schat: 630−180=450. Antwoord 448 past. Geen 568 (te ver weg)." }],
          niveaus: { basis: "632−184=448.", simpeler: "Lenen-truc: bij elke kolom waar je tekort komt, leen 1 van links. 12−4=8, 12−8=4, 5−1=4. Antwoord 448.", nogSimpeler: "448" },
        },
      },
      {
        q: "**1000 − 376** = ?",
        options: ["624","623","634","724"],
        answer: 0,
        wrongHints: [null,"Nét te weinig — als je de 999-truc gebruikt: vergeet de allerlaatste stap niet.","Te veel — heb je correct door alle nullen geleend?","Veel te veel — schat globaal: hoeveel is 1000 min 400, en wat moet er dan nóg af?"],
        uitlegPad: {
          stappen: [
            { titel: "999-truc", tekst: "Bij 1000-iets: doe 999-iets, dan +1. Veel makkelijker dan door nullen lenen." },
            { titel: "Pas toe", tekst: "999−376=623 (gewone aftrekking). 623+1=624. Klaar." },
          ],
          woorden: [{ woord: "999-truc", uitleg: "Slimme aanpak voor 1000-min: doe 999-min, dan +1." }],
          theorie: "1000=999+1. Door nullen lenen is foutgevoelig. Bij 999 hoef je niet te lenen (elk cijfer is 9). Veiliger.",
          voorbeelden: [{ type: "truc", tekst: "5000−1234: doe 4999−1234=3765, dan +1=3766." }],
          basiskennis: [{ onderwerp: "Vermijd nullen-lenen", uitleg: "Door 1000 lenen kost 3 leen-stappen — fout-gevoelig." }],
          niveaus: { basis: "999−376=623, +1=624.", simpeler: "Truc voor 1000-: doe 999-376 (geen lenen nodig)=623. Plus 1 = 624.", nogSimpeler: "624" },
        },
      },
      {
        q: "**4567 − 2389** = ?",
        options: ["2178","2278","2188","2168"],
        answer: 0,
        wrongHints: [null,"Te veel — schat globaal: hoeveel is 4500 min 2400 ongeveer?","Te veel — tel de eenheden na: hoeveel houd je over als je in de eenheden-kolom leent?","Te weinig — kolom-controle nodig."],
        uitlegPad: {
          stappen: [
            { titel: "Stappen", tekst: "7−9→leen. 17−9=8. 6−1−8→leen. 15−8=7. 5−1−3=1. 4−2=2. Antwoord 2178." },
          ],
          woorden: [{ woord: "kolomstrategie", uitleg: "Aftrekken kolom voor kolom van rechts naar links." }],
          theorie: "Schat: 4500−2400=2100. Antwoord 2178 past in die buurt.",
          voorbeelden: [{ type: "schat", tekst: "4567−2389. Schat ~2100. Reken nauwkeurig: 2178." }],
          basiskennis: [{ onderwerp: "Lenen achter elkaar", uitleg: "Soms moet je in opvolgende kolommen lenen — blijf zorgvuldig." }],
          niveaus: { basis: "4567−2389=2178.", simpeler: "Schat: 4500−2400=2100. Antwoord rond 2100. Reken: 2178.", nogSimpeler: "2178" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**743 − 278** = ?",
        options: ["465", "475", "535", "565"],
        answer: 0,
        wrongHints: [
          null,
          "Na het lenen is de buurman 1 minder geworden. Heb je dat bij de tientallen gedaan?",
          "Heb je in een kolom het kleine cijfer van het grote afgehaald, ook als het onderste groter was?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden",
              tekst: "3 − 8 kan niet. Leen 1: 13 − 8 = 5. De 4 wordt 3.",
            },
            {
              titel: "Tientallen",
              tekst: "3 − 7 kan niet. Leen 1: 13 − 7 = 6. De 7 wordt 6.",
            },
            {
              titel: "Honderdtallen",
              tekst: "6 − 2 = 4. Antwoord: 465.",
            },
          ],
          woorden: [
            {
              woord: "lenen",
              uitleg: "1 pakken van de kolom links. Die wordt 1 minder, jouw kolom krijgt er 10 bij.",
            },
          ],
          theorie: "Aftrekken kolom voor kolom, van rechts naar links. Te weinig? Leen 1 van de buurman links.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 740 − 280 = 460. 465 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Buurman 1 minder",
              uitleg: "Na het lenen is de kolom links 1 minder. Niet vergeten!",
            },
          ],
          niveaus: {
            basis: "743 − 278 = 465.",
            simpeler: "3 − 8 kan niet. Leen 1: 13 − 8 = 5. De 4 wordt 3. 3 − 7 kan niet. Leen 1: 13 − 7 = 6. De 7 wordt 6. 6 − 2 = 4. Antwoord: 465.",
            nogSimpeler: "465",
          },
        },
      },
      {
        q: "**6000 − 2348** = ?",
        options: ["3652", "3651", "3752", "4652"],
        answer: 0,
        wrongHints: [
          null,
          "Gebruik je de truc met 5999? Vergeet dan de laatste stap niet.",
          null,
          "Je moest door alle nullen heen lenen. Is de 6 daarna nog 6?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Truc",
              tekst: "6000 = 5999 + 1.",
            },
            {
              titel: "Aftrekken",
              tekst: "5999 − 2348 = 3651. Hier hoef je niet te lenen.",
            },
            {
              titel: "Plus 1",
              tekst: "3651 + 1 = 3652.",
            },
          ],
          woorden: [
            {
              woord: "lenen",
              uitleg: "1 pakken van de kolom links. Die wordt 1 minder, jouw kolom krijgt er 10 bij.",
            },
          ],
          theorie: "Aftrekken kolom voor kolom, van rechts naar links. Te weinig? Leen 1 van de buurman links.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 6000 − 2300 = 3700. 3652 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Buurman 1 minder",
              uitleg: "Na het lenen is de kolom links 1 minder. Niet vergeten!",
            },
          ],
          niveaus: {
            basis: "6000 − 2348 = 3652.",
            simpeler: "6000 = 5999 + 1. 5999 − 2348 = 3651. Hier hoef je niet te lenen. 3651 + 1 = 3652.",
            nogSimpeler: "3652",
          },
        },
      },
      {
        q: "**5203 − 1867** = ?",
        options: ["3336", "3346", "4336", "3446"],
        answer: 0,
        wrongHints: [
          null,
          "Bij de eenheden leen je door de 0 heen. Wat wordt die 0 dan?",
          "Na het lenen bij de duizendtallen is de 5 een 4 geworden. Heb je dat gedaan?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden",
              tekst: "3 − 7 kan niet. De 0 kan niets lenen, dus leen bij de 2: die wordt 1. De 0 wordt 10, daarna 9. De 3 wordt 13: 13 − 7 = 6.",
            },
            {
              titel: "Tientallen",
              tekst: "9 − 6 = 3.",
            },
            {
              titel: "Honderdtallen",
              tekst: "1 − 8 kan niet. Leen 1: 11 − 8 = 3. De 5 wordt 4.",
            },
            {
              titel: "Duizendtallen",
              tekst: "4 − 1 = 3. Antwoord: 3336.",
            },
          ],
          woorden: [
            {
              woord: "lenen",
              uitleg: "1 pakken van de kolom links. Die wordt 1 minder, jouw kolom krijgt er 10 bij.",
            },
          ],
          theorie: "Aftrekken kolom voor kolom, van rechts naar links. Te weinig? Leen 1 van de buurman links.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 5200 − 1900 = 3300. 3336 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Buurman 1 minder",
              uitleg: "Na het lenen is de kolom links 1 minder. Niet vergeten!",
            },
          ],
          niveaus: {
            basis: "5203 − 1867 = 3336.",
            simpeler: "3 − 7 kan niet. De 0 kan niets lenen, dus leen bij de 2: die wordt 1. De 0 wordt 10, daarna 9. De 3 wordt 13: 13 − 7 = 6. 9 − 6 = 3. 1 − 8 kan niet. Leen 1: 11 − 8 = 3. De 5 wordt 4. 4 − 1 = 3. Antwoord: 3336.",
            nogSimpeler: "3336",
          },
        },
      },
      {
        q: "**900 − 456** = ?",
        options: ["444", "443", "544", "454"],
        answer: 0,
        wrongHints: [
          null,
          "Met de truc 899 − 456: wat moet er op het eind nog bij?",
          null,
          "Kijk naar de tientallen: na het lenen door de nullen, wat stond daar?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Truc",
              tekst: "900 = 899 + 1.",
            },
            {
              titel: "Aftrekken",
              tekst: "899 − 456 = 443.",
            },
            {
              titel: "Plus 1",
              tekst: "443 + 1 = 444.",
            },
          ],
          woorden: [
            {
              woord: "lenen",
              uitleg: "1 pakken van de kolom links. Die wordt 1 minder, jouw kolom krijgt er 10 bij.",
            },
          ],
          theorie: "Aftrekken kolom voor kolom, van rechts naar links. Te weinig? Leen 1 van de buurman links.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 900 − 460 = 440. 444 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Buurman 1 minder",
              uitleg: "Na het lenen is de kolom links 1 minder. Niet vergeten!",
            },
          ],
          niveaus: {
            basis: "900 − 456 = 444.",
            simpeler: "900 = 899 + 1. 899 − 456 = 443. 443 + 1 = 444.",
            nogSimpeler: "444",
          },
        },
      },
      {
        q: "Bij **352 − 127** kan 2 − 7 niet. Je leent 1 bij de buur. Wat wordt de **2** dan?",
        options: ["12", "1", "3", "20"],
        answer: 0,
        wrongHints: [
          null,
          "Lenen maakt de buur kleiner. Wat gebeurt er met jouw kolom?",
          null,
          "Eén tiental lenen is hoeveel eenheden erbij?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Lenen",
              tekst: "De 5 (tientallen) wordt 4.",
            },
            {
              titel: "Erbij",
              tekst: "De 2 krijgt 10 erbij: 2 + 10 = 12. Nu kan het: 12 − 7 = 5.",
            },
          ],
          woorden: [
            {
              woord: "lenen",
              uitleg: "1 tiental pakken van links; dat zijn 10 eenheden erbij.",
            },
          ],
          theorie: "Eén tiental is 10 eenheden. Daarom wordt de 2 een 12.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Verder: 4 − 2 = 2, 3 − 1 = 2. Antwoord 225.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tien erbij",
              uitleg: "Lenen = jouw kolom krijgt er 10 bij.",
            },
          ],
          niveaus: {
            basis: "De 2 wordt 12.",
            simpeler: "Je leent 1 tiental. Dat zijn 10 eenheden. 2 + 10 = 12. Nu kun je 12 − 7 doen.",
            nogSimpeler: "12",
          },
        },
      },
      {
        q: "Bij **461 − 238** leen je bij de eenheden 1 van de tientallen. Wat wordt de **6**?",
        options: ["5", "6", "7", "16"],
        answer: 0,
        wrongHints: [
          null,
          "Iets uitlenen: houd je dan evenveel over?",
          "Wie uitleent, krijgt er niets bij.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden",
              tekst: "1 − 8 kan niet. Leen 1 bij de 6.",
            },
            {
              titel: "Buurman",
              tekst: "De 6 wordt 5. De 1 wordt 11: 11 − 8 = 3.",
            },
          ],
          woorden: [
            {
              woord: "buurman",
              uitleg: "De kolom links van de kolom waar je mee bezig bent.",
            },
          ],
          theorie: "Na het lenen is de buurman 1 minder. Dat vergeten kinderen vaak.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Verder: 5 − 3 = 2, 4 − 2 = 2. Antwoord 223.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Streep door",
              uitleg: "Streep de 6 door en schrijf er klein een 5 boven.",
            },
          ],
          niveaus: {
            basis: "De 6 wordt 5.",
            simpeler: "Je leent 1 van de 6. Dan blijft er 5 over. Schrijf die 5 klein boven de 6, dan vergeet je het niet.",
            nogSimpeler: "5",
          },
        },
      },
      {
        q: "Welke aanpak geeft hetzelfde antwoord als **3000 − 1475**?",
        options: [
          "2999 − 1475, en dan + 1",
          "2999 − 1475, en dan − 1",
          "3000 − 1475, en dan + 1",
          "2000 − 1475, en dan + 1",
        ],
        answer: 0,
        wrongHints: [
          null,
          "3000 is 2999 plus nog iets. Moet je dat iets erbij of eraf doen?",
          null,
          "Is 2000 + 1 even veel als 3000?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Splits",
              tekst: "3000 = 2999 + 1.",
            },
            {
              titel: "Makkelijk",
              tekst: "2999 − 1475 = 1524. Geen lenen nodig.",
            },
            {
              titel: "Terug",
              tekst: "1524 + 1 = 1525.",
            },
          ],
          woorden: [
            {
              woord: "999-truc",
              uitleg: "Bij een getal met veel nullen eerst 1 minder nemen, aftrekken, en dan 1 erbij.",
            },
          ],
          theorie: "2999 is 1 minder dan 3000. Dus het antwoord is ook 1 te weinig: daarom + 1 op het eind.",
          voorbeelden: [
            {
              type: "truc",
              tekst: "Uit de uitleg: 5000 − 1234 → 4999 − 1234 = 3765, plus 1 = 3766.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Waarom?",
              uitleg: "Met negens hoef je nooit te lenen.",
            },
          ],
          niveaus: {
            basis: "2999 − 1475, dan + 1.",
            simpeler: "Eerst 1 eraf (3000 wordt 2999), dan aftrekken zonder lenen, en die 1 er op het eind weer bij.",
            nogSimpeler: "Eraf, dan erbij",
          },
        },
      },
    ],
  },

  {
    title: "Cijferend vermenigvuldigen — 1 cijfer × meerdere",
    explanation: "Bij **cijferend vermenigvuldigen** vermenigvuldig je elk cijfer apart.\n\n**Voorbeeld 1**: 234 × 4\n```\n    2 3 4\n  ×     4\n--------\n```\n• Eenheden: 4 × 4 = 16. Schrijf 6, onthoud 1.\n• Tientallen: 4 × 3 = 12, plus 1 (onthoud) = 13. Schrijf 3, onthoud 1.\n• Honderdtallen: 4 × 2 = 8, plus 1 = 9. Schrijf 9.\n\n**Antwoord**: 936.\n\n**Voorbeeld 2**: 12 × 27 *(2 cijfers × 2 cijfers — staart-aanpak)*\n```\n      1 2\n    × 2 7\n--------\n      8 4   ← 12 × 7\n  + 2 4 0   ← 12 × 20 (let op nul achteraan!)\n--------\n    3 2 4\n```\n\n**Stappen**:\n1. Vermenigvuldig 12 × 7 = 84. Schrijf onder de streep.\n2. Vermenigvuldig 12 × 2 (= eigenlijk 12 × 20). Zet **nul-plaatshouder** achteraan, dan 12 × 2 = 24, dus 240.\n3. Tel beide regels op: 84 + 240 = **324**.\n\n**Toets-tip**:\n• Schrijf de **nul-plaatshouders** netjes op. Dat is de meest gemaakte fout.\n• Check met schatting: 12 × 27 ≈ 12 × 25 = 300. Antwoord 324 zit in de buurt ✓.\n\n**Trucs voor 'mooie' getallen**:\n• × 10 → komma 1 plek naar rechts.\n• × 100 → komma 2 plekken naar rechts.\n• × 5 → ÷ 2 dan × 10. Voorbeeld: 84 × 5 = (84 ÷ 2) × 10 = 42 × 10 = 420.",
    checks: [
      {
        q: "**324 × 3** = ?",
        options: ["972","962","1062","912"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je 3×3 (honderdtallen) wel meegenomen?","Te veel — 1 te veel onthouden.","Te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Cijfer voor cijfer × 3", tekst: "4×3=12 (2,+1). 2×3+1=7. 3×3=9. Antwoord 972." }],
          woorden: [{ woord: "vermenigvuldigen cijferend", uitleg: "Elk cijfer apart × het getal, met onthoudje." }],
          theorie: "Schat: 300×3=900. Antwoord 972 past.",
          voorbeelden: [{ type: "stap", tekst: "324×3 = 4×3 (eenh) + 20×3 + 300×3 = 12+60+900 = 972." }],
          basiskennis: [{ onderwerp: "Onthoudje", uitleg: "Ook bij × werkt het onthoudje (als product >9)." }],
          niveaus: { basis: "324×3=972.", simpeler: "Doe 4×3=12 (schrijf 2, onthoud 1). 2×3=6 +1=7. 3×3=9. Antwoord 972.", nogSimpeler: "972" },
        },
      },
      {
        q: "**18 × 25** = ?",
        options: ["450","350","550","250"],
        answer: 0,
        wrongHints: [null,"Te weinig — er is een handige truc voor keer 25: denk aan keer 100 en dan iets met 4.","Te veel — schat: hoeveel is 20 keer 25, en is het antwoord groter of kleiner dan dat?","Veel te weinig — heb je de 18 of de 25 per ongeluk gehalveerd?"],
        uitlegPad: {
          stappen: [
            { titel: "Sneltruc voor ×25", tekst: "×25 = ×100 ÷ 4. 18×100=1800. 1800÷4=450." },
            { titel: "Of cijferen", tekst: "18×5=90. 18×20=360. Totaal 450." },
          ],
          woorden: [{ woord: "rekentruc", uitleg: "Snelle berekening voor 'mooie' getallen zoals ×25, ×5, ×100." }],
          theorie: "×25 = ×100 ÷ 4. ×5 = ÷2 ×10. Trucs maken sommen sneller.",
          voorbeelden: [{ type: "truc", tekst: "84×25 = 8400÷4 = 2100. 36×25 = 3600÷4 = 900." }],
          basiskennis: [{ onderwerp: "Schat", uitleg: "20×25=500. Antwoord rond 500. 450 past." }],
          niveaus: { basis: "18×25=450.", simpeler: "Truc: ×25 = (×100)÷4. 18×100=1800. 1800÷4=450. Sneller dan cijferen.", nogSimpeler: "450" },
        },
      },
      {
        q: "**456 × 7** = ?",
        options: ["3192","3092","3292","2192"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je elk cijfer × 7 met onthoudje?","Te veel — heb je extra onthoudje gerekend?","Veel te weinig — heb je tientallen overgeslagen?"],
        uitlegPad: {
          stappen: [{ titel: "Cijfer × 7", tekst: "6×7=42 (2,+4). 5×7+4=39 (9,+3). 4×7+3=31. Antwoord 3192." }],
          woorden: [{ woord: "groot product", uitleg: "Bij vermenigvuldiging met groot getal: meerdere onthoudjes mogelijk." }],
          theorie: "Schat: 500×7=3500. Antwoord 3192 past in die buurt.",
          voorbeelden: [{ type: "stap", tekst: "456×7: 6×7=42, 5×7+4=39, 4×7+3=31. Lees omhoog: 3192." }],
          basiskennis: [{ onderwerp: "Tafels herkennen", uitleg: "Goede tafel-kennis (×7 etc.) maakt cijferen veel sneller." }],
          niveaus: { basis: "456×7=3192.", simpeler: "Cijfer voor cijfer: 6×7=42 (schrijf 2, onthoud 4). 5×7=35+4=39 (9, onthoud 3). 4×7=28+3=31. Antwoord 3192.", nogSimpeler: "3192" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**278 × 3** = ?",
        options: ["834", "614", "824", "734"],
        answer: 0,
        wrongHints: [
          null,
          "Heb je de onthoudjes wel opgeteld bij de volgende kolom?",
          null,
          "Kijk naar de honderdtallen: 2 × 3 en dan nog het onthoudje.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden",
              tekst: "3 × 8 = 24. Schrijf 4, onthoud 2.",
            },
            {
              titel: "Tientallen",
              tekst: "3 × 7 = 21, plus 2 = 23. Schrijf 3, onthoud 2.",
            },
            {
              titel: "Honderdtallen",
              tekst: "3 × 2 = 6, plus 2 = 8. Antwoord: 834.",
            },
          ],
          woorden: [
            {
              woord: "onthoudje",
              uitleg: "Bij keer: de tientallen van een uitkomst neem je mee naar de kolom links.",
            },
          ],
          theorie: "Vermenigvuldigen cijfer voor cijfer, van rechts naar links. Het onthoudje tel je op ná het keer-rekenen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 280 × 3 = 840. 834 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schat altijd",
              uitleg: "Rond af en reken uit je hoofd na of je antwoord in de buurt zit.",
            },
          ],
          niveaus: {
            basis: "278 × 3 = 834.",
            simpeler: "3 × 8 = 24. Schrijf 4, onthoud 2. 3 × 7 = 21, plus 2 = 23. Schrijf 3, onthoud 2. 3 × 2 = 6, plus 2 = 8. Antwoord: 834.",
            nogSimpeler: "834",
          },
        },
      },
      {
        q: "**609 × 8** = ?",
        options: ["4872", "4802", "4072", "4882"],
        answer: 0,
        wrongHints: [
          null,
          "8 × 0 = 0, maar er is nog een onthoudje van de eenheden. Waar blijft dat?",
          null,
          "Hoeveel onthoud je bij 8 × 9?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden",
              tekst: "8 × 9 = 72. Schrijf 2, onthoud 7.",
            },
            {
              titel: "Tientallen",
              tekst: "8 × 0 = 0, plus 7 = 7. Schrijf 7.",
            },
            {
              titel: "Honderdtallen",
              tekst: "8 × 6 = 48. Schrijf 48. Antwoord: 4872.",
            },
          ],
          woorden: [
            {
              woord: "onthoudje",
              uitleg: "Bij keer: de tientallen van een uitkomst neem je mee naar de kolom links.",
            },
          ],
          theorie: "Vermenigvuldigen cijfer voor cijfer, van rechts naar links. Het onthoudje tel je op ná het keer-rekenen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 600 × 8 = 4800. 4872 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schat altijd",
              uitleg: "Rond af en reken uit je hoofd na of je antwoord in de buurt zit.",
            },
          ],
          niveaus: {
            basis: "609 × 8 = 4872.",
            simpeler: "8 × 9 = 72. Schrijf 2, onthoud 7. 8 × 0 = 0, plus 7 = 7. Schrijf 7. 8 × 6 = 48. Schrijf 48. Antwoord: 4872.",
            nogSimpeler: "4872",
          },
        },
      },
      {
        q: "**1235 × 4** = ?",
        options: ["4940", "4840", "4920", "5940"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de honderdtallen: 4 × 2 en dan nog een onthoudje.",
          null,
          "Schat eens: ongeveer 1200 × 4. Is dat meer of minder dan 5000?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eenheden",
              tekst: "4 × 5 = 20. Schrijf 0, onthoud 2.",
            },
            {
              titel: "Tientallen",
              tekst: "4 × 3 = 12, plus 2 = 14. Schrijf 4, onthoud 1.",
            },
            {
              titel: "Honderdtallen",
              tekst: "4 × 2 = 8, plus 1 = 9. Schrijf 9.",
            },
            {
              titel: "Duizendtallen",
              tekst: "4 × 1 = 4. Antwoord: 4940.",
            },
          ],
          woorden: [
            {
              woord: "onthoudje",
              uitleg: "Bij keer: de tientallen van een uitkomst neem je mee naar de kolom links.",
            },
          ],
          theorie: "Vermenigvuldigen cijfer voor cijfer, van rechts naar links. Het onthoudje tel je op ná het keer-rekenen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 1200 × 4 = 4800. 4940 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schat altijd",
              uitleg: "Rond af en reken uit je hoofd na of je antwoord in de buurt zit.",
            },
          ],
          niveaus: {
            basis: "1235 × 4 = 4940.",
            simpeler: "4 × 5 = 20. Schrijf 0, onthoud 2. 4 × 3 = 12, plus 2 = 14. Schrijf 4, onthoud 1. 4 × 2 = 8, plus 1 = 9. Schrijf 9. 4 × 1 = 4. Antwoord: 4940.",
            nogSimpeler: "4940",
          },
        },
      },
      {
        q: "**23 × 14** = ?",
        options: ["322", "115", "312", "332"],
        answer: 0,
        wrongHints: [
          null,
          "Bij de tweede regel reken je eigenlijk 23 × 10. Heb je de nul-plaatshouder geschreven?",
          null,
          "Tel de twee regels nog eens netjes onder elkaar op.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Regel 1",
              tekst: "23 × 4 = 92.",
            },
            {
              titel: "Regel 2",
              tekst: "23 × 10 = 230 (nul-plaatshouder achteraan!).",
            },
            {
              titel: "Optellen",
              tekst: "92 + 230 = 322.",
            },
          ],
          woorden: [
            {
              woord: "nul-plaatshouder",
              uitleg: "De 0 die je achteraan zet als je met tientallen vermenigvuldigt.",
            },
          ],
          theorie: "Vermenigvuldigen cijfer voor cijfer, van rechts naar links. Het onthoudje tel je op ná het keer-rekenen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 23 × 14 ≈ 20 × 15 = 300. 322 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schat altijd",
              uitleg: "Rond af en reken uit je hoofd na of je antwoord in de buurt zit.",
            },
          ],
          niveaus: {
            basis: "23 × 14 = 322.",
            simpeler: "23 × 4 = 92. 23 × 10 = 230 (nul-plaatshouder achteraan!). 92 + 230 = 322.",
            nogSimpeler: "322",
          },
        },
      },
      {
        q: "**36 × 21** = ?",
        options: ["756", "108", "746", "766"],
        answer: 0,
        wrongHints: [
          null,
          "Het tweede cijfer van 21 is eigenlijk 20. Wat moet er dan achteraan bij die regel?",
          null,
          "Tel de twee regels nog eens na.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Regel 1",
              tekst: "36 × 1 = 36.",
            },
            {
              titel: "Regel 2",
              tekst: "36 × 20 = 720 (nul-plaatshouder!).",
            },
            {
              titel: "Optellen",
              tekst: "36 + 720 = 756.",
            },
          ],
          woorden: [
            {
              woord: "nul-plaatshouder",
              uitleg: "De 0 die je achteraan zet als je met tientallen vermenigvuldigt.",
            },
          ],
          theorie: "Vermenigvuldigen cijfer voor cijfer, van rechts naar links. Het onthoudje tel je op ná het keer-rekenen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat: 36 × 21 ≈ 36 × 20 = 720. 756 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schat altijd",
              uitleg: "Rond af en reken uit je hoofd na of je antwoord in de buurt zit.",
            },
          ],
          niveaus: {
            basis: "36 × 21 = 756.",
            simpeler: "36 × 1 = 36. 36 × 20 = 720 (nul-plaatshouder!). 36 + 720 = 756.",
            nogSimpeler: "756",
          },
        },
      },
      {
        q: "Reken met de truc voor keer 5: **68 × 5** = ?",
        options: ["340", "3400", "34", "330"],
        answer: 0,
        wrongHints: [
          null,
          "Na het halveren doe je keer 10. Hoeveel nullen komen er dan bij?",
          "Halveren alleen is niet genoeg. Wat hoort er nog bij de truc?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Halveren",
              tekst: "68 : 2 = 34.",
            },
            {
              titel: "Keer 10",
              tekst: "34 × 10 = 340.",
            },
          ],
          woorden: [
            {
              woord: "onthoudje",
              uitleg: "Bij keer: de tientallen van een uitkomst neem je mee naar de kolom links.",
            },
          ],
          theorie: "Keer 5 is hetzelfde als keer 10 en dan de helft. Dus: eerst halveren, dan keer 10.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Controle: 70 × 5 = 350. 340 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schat altijd",
              uitleg: "Rond af en reken uit je hoofd na of je antwoord in de buurt zit.",
            },
          ],
          niveaus: {
            basis: "68 × 5 = 340.",
            simpeler: "68 : 2 = 34. 34 × 10 = 340.",
            nogSimpeler: "340",
          },
        },
      },
      {
        q: "Je rekent **47 × 30**. Eerst doe je 47 × 3. Wat doe je daarna?",
        options: [
          "Er een 0 achter zetten",
          "Er 30 bij optellen",
          "Er 3 bij optellen",
          "Het antwoord halveren",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Optellen maakt het maar een klein beetje groter. Keer 30 is veel meer dan keer 3.",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Keer 3",
              tekst: "47 × 3 = 141.",
            },
            {
              titel: "Keer 10",
              tekst: "30 = 3 × 10. Dus nog keer 10: 0 erachter. 1410.",
            },
          ],
          woorden: [
            {
              woord: "nul-plaatshouder",
              uitleg: "De 0 die je achteraan zet als je met tientallen vermenigvuldigt.",
            },
          ],
          theorie: "Keer 30 is keer 3 en dan keer 10. Keer 10 = een 0 achter het getal.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "12 × 20: 12 × 2 = 24, met 0 erachter = 240.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Keer 10",
              uitleg: "Bij een heel getal zet je bij keer 10 een 0 achteraan.",
            },
          ],
          niveaus: {
            basis: "0 erachter.",
            simpeler: "30 is 3 keer 10. Je hebt al keer 3 gedaan. Nu nog keer 10: zet een 0 achter 141. Dat wordt 1410.",
            nogSimpeler: "0 erachter",
          },
        },
      },
    ],
  },

  {
    title: "Cijferend delen — bus-bewerking",
    explanation: "**Cijferend delen** is de moeilijkste — ook wel **staartdeling** genoemd. We doen de vereenvoudigde versie: **bus-bewerking** *(hetzelfde idee, simpeler opgeschreven)*.\n\n**Voorbeeld**: 144 ÷ 6\n• Begin links: hoeveel keer past 6 in 14? **2 keer** (2 × 6 = 12). Schrijf 2.\n• Rest = 14 − 12 = 2. Haal het volgende cijfer (4) erbij = 24.\n• Hoeveel keer past 6 in 24? **4 keer** (4 × 6 = 24). Schrijf 4.\n• Rest = 0.\n\n**Antwoord**: 24.\n\n**Voorbeeld 2**: 525 ÷ 7\n• 7 in 5? Past niet (5 < 7). Pak 52.\n• 7 in 52? **7 keer** (7 × 7 = 49). Schrijf 7.\n• Rest = 52 − 49 = 3. Haal 5 erbij = 35.\n• 7 in 35? **5 keer** (5 × 7 = 35). Schrijf 5.\n• Rest = 0.\n\n**Antwoord**: 75.\n\n**Met rest** *(als de deling niet rond uitkomt)*:\n*'74 ÷ 8'*\n• 8 in 7? Past niet.\n• 8 in 74? **9 keer** (9 × 8 = 72). Schrijf 9.\n• Rest = 74 − 72 = 2.\n\n**Antwoord**: 9 rest 2.\n\n**toetsvraag-vorm**: *'74 koekjes verdeeld over 8 kinderen — hoeveel ieder, hoeveel over?'*\n• Ieder krijgt **9 koekjes**, **2 over**.\n\n**Toets-tip**:\n• Werk **van links naar rechts** (andersom dan bij optellen!).\n• Pak telkens net genoeg cijfers zodat de deler erin past.\n• Schrijf netjes — anders raak je het spoor kwijt.\n\n**Trucs voor mooie delers**:\n• ÷ 10 → komma 1 plek naar links.\n• ÷ 5 → × 2 dan ÷ 10. Voorbeeld: 84 ÷ 5 = (84 × 2) ÷ 10 = 168 ÷ 10 = 16,8.\n• ÷ 4 → ÷ 2 ÷ 2.",
    checks: [
      {
        q: "**168 ÷ 8** = ?",
        options: ["21","20","22","18"],
        answer: 0,
        wrongHints: [null,"Te weinig — doe een proef: klopt jouw antwoord keer 8 precies?","Te veel — je antwoord keer 8 is meer dan 168. Probeer een getal lager.","Veel te weinig — dit antwoord keer 8 is maar 144. Hoeveel moet het zijn?"],
        uitlegPad: {
          stappen: [
            { titel: "Bus-aanpak", tekst: "8 in 16 = 2 keer (16). 8 in 8 = 1 keer. Antwoord 21." },
            { titel: "Controle", tekst: "21×8=168 ✓. Klopt." },
          ],
          woorden: [{ woord: "delen", uitleg: "Verdelen: hoeveel keer past de deler in het getal?" }],
          theorie: "Cijferend delen: van links naar rechts. Pak telkens net genoeg cijfers tot deler erin past.",
          voorbeelden: [{ type: "stap", tekst: "168÷8: pak 16. 8 past 2× (16). Rest 0, pak 8. 8 past 1×. Antwoord 21." }],
          basiskennis: [{ onderwerp: "Controle", uitleg: "Antwoord × deler moet origineel geven. 21×8=168 ✓." }],
          niveaus: { basis: "168÷8=21.", simpeler: "Hoe vaak past 8 in 168? Probeer: 20×8=160. 21×8=168 (precies!). Antwoord 21.", nogSimpeler: "21" },
        },
      },
      {
        q: "**450 ÷ 9** = ?",
        options: ["50","45","55","60"],
        answer: 0,
        wrongHints: [null,"Te weinig — doe een proef: jouw antwoord keer 9 geeft niet 450. Welk getal keer 9 geeft precies 450?","Te veel — jouw antwoord keer 9 gaat al voorbij 450.","Te veel — dit antwoord keer 9 gaat ver over de 450 heen."],
        uitlegPad: {
          stappen: [{ titel: "Tafel-truc", tekst: "9×50=450. Direct uit ×9-tafel-kennis. Antwoord 50." }],
          woorden: [{ woord: "tafel-kennis", uitleg: "De tafels van vermenigvuldigen kennen helpt bij delen." }],
          theorie: "Bij delen: zoek welk getal × deler = origineel. ÷9 → zoek in 9-tafel.",
          voorbeelden: [{ type: "tafel", tekst: "9×5=45 → 9×50=450. Dus 450÷9=50." }],
          basiskennis: [{ onderwerp: "Tafels", uitleg: "9-tafel: 9, 18, 27, 36, 45, 54..." }],
          niveaus: { basis: "9×50=450 → 450÷9=50.", simpeler: "Welk getal × 9 = 450? Probeer: 50×9=450 ✓.", nogSimpeler: "50" },
        },
      },
      {
        q: "**78 ÷ 6 — wat is de uitkomst (met of zonder rest)?**",
        options: ["13","12 rest 6","13 rest 1","12"],
        answer: 0,
        wrongHints: [null,"Een rest moet altijd kleiner zijn dan de deler. Kan een rest van 6 bij delen door 6?","Doe een proef: vermenigvuldig je uitkomst met 6 en kijk wat er echt overblijft.","Doe een proef: hoeveel is jouw antwoord keer 6, en hoeveel van de 78 blijft er dan over?"],
        uitlegPad: {
          stappen: [
            { titel: "Reken", tekst: "13×6=78 (precies). Geen rest. Antwoord: 13." },
            { titel: "Waarom geen 'rest 0'?", tekst: "'Rest 0' = onnodig. Schrijf gewoon het getal." },
          ],
          woorden: [{ woord: "rest", uitleg: "Wat overblijft na delen — alleen schrijven als rest > 0." }],
          theorie: "Rest 6 zou betekenen 12×6=72, en 78-72=6 over. Maar dan kun je nog 1 keer 6 erbij delen → 13. Dus rest 6 is fout.",
          voorbeelden: [{ type: "controle", tekst: "13×6=78 ✓. Klopt precies, geen rest." }],
          basiskennis: [{ onderwerp: "Wanneer rest?", uitleg: "Alleen als deling NIET netjes uitkomt. 78÷6 komt netjes uit op 13." }],
          niveaus: { basis: "78÷6=13.", simpeler: "Probeer 13×6: 13×6=78 (precies). Geen rest.", nogSimpeler: "13" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**252 ÷ 7** = ?",
        options: ["36", "34", "38", "46"],
        answer: 0,
        wrongHints: [
          null,
          "Doe een proef: jouw antwoord keer 7, komt dat precies op 252?",
          null,
          "Hoe vaak past 7 in 25? Reken dat nog eens na.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Begin",
              tekst: "7 past niet in 2. Pak 25.",
            },
            {
              titel: "Stap 1",
              tekst: "7 past 3 keer in 25 (21). Rest 4.",
            },
            {
              titel: "Stap 2",
              tekst: "Haal de 2 erbij: 42. 7 past 6 keer in 42. Antwoord: 36.",
            },
          ],
          woorden: [
            {
              woord: "delen",
              uitleg: "Verdelen: hoe vaak past de deler in het getal?",
            },
          ],
          theorie: "Cijferend delen: van links naar rechts. Pak telkens net genoeg cijfers zodat de deler erin past.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Proef: 36 × 7 = 252 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Controle",
              uitleg: "Antwoord × deler moet het getal geven waarmee je begon.",
            },
          ],
          niveaus: {
            basis: "252 ÷ 7 = 36.",
            simpeler: "7 past niet in 2. Pak 25. 7 past 3 keer in 25 (21). Rest 4. Haal de 2 erbij: 42. 7 past 6 keer in 42. Antwoord: 36.",
            nogSimpeler: "36",
          },
        },
      },
      {
        q: "**384 ÷ 6** = ?",
        options: ["64", "54", "74", "62"],
        answer: 0,
        wrongHints: [
          null,
          "Hoe vaak past 6 in 38? Reken het na met de tafel van 6.",
          null,
          "Doe een proef: jouw antwoord keer 6. Komt dat op 384?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Begin",
              tekst: "6 past niet in 3. Pak 38.",
            },
            {
              titel: "Stap 1",
              tekst: "6 past 6 keer in 38 (36). Rest 2.",
            },
            {
              titel: "Stap 2",
              tekst: "Haal de 4 erbij: 24. 6 past 4 keer in 24. Antwoord: 64.",
            },
          ],
          woorden: [
            {
              woord: "delen",
              uitleg: "Verdelen: hoe vaak past de deler in het getal?",
            },
          ],
          theorie: "Cijferend delen: van links naar rechts. Pak telkens net genoeg cijfers zodat de deler erin past.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Proef: 64 × 6 = 384 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Controle",
              uitleg: "Antwoord × deler moet het getal geven waarmee je begon.",
            },
          ],
          niveaus: {
            basis: "384 ÷ 6 = 64.",
            simpeler: "6 past niet in 3. Pak 38. 6 past 6 keer in 38 (36). Rest 2. Haal de 4 erbij: 24. 6 past 4 keer in 24. Antwoord: 64.",
            nogSimpeler: "64",
          },
        },
      },
      {
        q: "**852 ÷ 4** = ?",
        options: ["213", "203", "212", "223"],
        answer: 0,
        wrongHints: [
          null,
          "Bij de 5 blijft er 1 over. Heb je die rest meegenomen naar het volgende cijfer?",
          null,
          "Doe een proef: jouw antwoord keer 4. Komt dat op 852?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1",
              tekst: "4 past 2 keer in 8. Rest 0.",
            },
            {
              titel: "Stap 2",
              tekst: "4 past 1 keer in 5 (4). Rest 1.",
            },
            {
              titel: "Stap 3",
              tekst: "Haal de 2 erbij: 12. 4 past 3 keer in 12. Antwoord: 213.",
            },
          ],
          woorden: [
            {
              woord: "delen",
              uitleg: "Verdelen: hoe vaak past de deler in het getal?",
            },
          ],
          theorie: "Cijferend delen: van links naar rechts. Pak telkens net genoeg cijfers zodat de deler erin past.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Proef: 213 × 4 = 852 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Controle",
              uitleg: "Antwoord × deler moet het getal geven waarmee je begon.",
            },
          ],
          niveaus: {
            basis: "852 ÷ 4 = 213.",
            simpeler: "4 past 2 keer in 8. Rest 0. 4 past 1 keer in 5 (4). Rest 1. Haal de 2 erbij: 12. 4 past 3 keer in 12. Antwoord: 213.",
            nogSimpeler: "213",
          },
        },
      },
      {
        q: "**59 ÷ 7** = ?",
        options: ["8 rest 3", "7 rest 3", "8 rest 4", "9 rest 3"],
        answer: 0,
        wrongHints: [
          null,
          "Doe een proef: 7 keer jouw antwoord, plus de rest. Komt dat op 59?",
          "Reken na: 8 × 7, en hoeveel scheelt dat met 59?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Hoe vaak?",
              tekst: "7 past niet in 5. Pak 59. 7 past 8 keer (8 × 7 = 56).",
            },
            {
              titel: "Rest",
              tekst: "59 − 56 = 3. Antwoord: 8 rest 3.",
            },
          ],
          woorden: [
            {
              woord: "delen",
              uitleg: "Verdelen: hoe vaak past de deler in het getal?",
            },
          ],
          theorie: "Cijferend delen: van links naar rechts. Pak telkens net genoeg cijfers zodat de deler erin past.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Proef: 8 × 7 = 56, plus 3 = 59 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Rest",
              uitleg: "De rest is altijd kleiner dan het getal waardoor je deelt.",
            },
          ],
          niveaus: {
            basis: "59 ÷ 7 = 8 rest 3.",
            simpeler: "7 past niet in 5. Pak 59. 7 past 8 keer (8 × 7 = 56). 59 − 56 = 3. Antwoord: 8 rest 3.",
            nogSimpeler: "8 rest 3",
          },
        },
      },
      {
        q: "Je verdeelt **50 knikkers** eerlijk over **6 kinderen**. Ieder krijgt er zoveel mogelijk. Hoeveel krijgt ieder, en hoeveel blijven er over?",
        options: ["8 ieder, 2 over", "9 ieder, 2 over", "8 ieder, 4 over", "7 ieder, 8 over"],
        answer: 0,
        wrongHints: [
          null,
          "Tel na: hoeveel knikkers deel je dan samen uit?",
          null,
          "Er blijven er 8 over. Kan dan iedereen er nog eentje krijgen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Hoe vaak?",
              tekst: "6 past 8 keer in 50 (8 × 6 = 48).",
            },
            {
              titel: "Over",
              tekst: "50 − 48 = 2. Ieder 8 knikkers, 2 over.",
            },
          ],
          woorden: [
            {
              woord: "delen",
              uitleg: "Verdelen: hoe vaak past de deler in het getal?",
            },
          ],
          theorie: "Cijferend delen: van links naar rechts. Pak telkens net genoeg cijfers zodat de deler erin past.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Proef: 8 × 6 = 48, plus 2 = 50 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Controle",
              uitleg: "Antwoord × deler moet het getal geven waarmee je begon.",
            },
          ],
          niveaus: {
            basis: "Ieder 8, er blijven 2 over.",
            simpeler: "6 kinderen krijgen er ieder 8: dat zijn 48 knikkers. Van de 50 blijven er 2 over. Te weinig om nog eens rond te gaan.",
            nogSimpeler: "8 ieder, 2 over",
          },
        },
      },
      {
        q: "Bij **312 ÷ 4** past 4 niet in de 3. Met welk getal begin je dan?",
        options: ["31", "12", "32", "3"],
        answer: 0,
        wrongHints: [
          null,
          "Bij delen begin je links. Welk deel van 312 staat links?",
          "Welke twee cijfers staan in 312 helemaal links, naast elkaar?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Past niet",
              tekst: "4 past niet in 3.",
            },
            {
              titel: "Meer cijfers",
              tekst: "Pak het volgende cijfer erbij: 31. 4 past 7 keer in 31 (28).",
            },
            {
              titel: "Verder",
              tekst: "Rest 3, haal de 2 erbij: 32. 4 past 8 keer. Antwoord 78.",
            },
          ],
          woorden: [
            {
              woord: "delen",
              uitleg: "Verdelen: hoe vaak past de deler in het getal?",
            },
          ],
          theorie: "Cijferend delen: van links naar rechts. Pak telkens net genoeg cijfers zodat de deler erin past.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Proef: 78 × 4 = 312 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Controle",
              uitleg: "Antwoord × deler moet het getal geven waarmee je begon.",
            },
          ],
          niveaus: {
            basis: "Begin met 31.",
            simpeler: "Je werkt van links naar rechts. De 3 is te klein voor 4. Neem dan het volgende cijfer erbij: 31.",
            nogSimpeler: "31",
          },
        },
      },
      {
        q: "Reken met de truc voor delen door 5: **145 ÷ 5** = ?",
        options: ["29", "28", "290", "31"],
        answer: 0,
        wrongHints: [
          null,
          "Doe een proef: jouw antwoord keer 5. Komt dat op 145?",
          "Na keer 2 moet je nog iets doen. Wat was dat ook alweer?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Keer 2",
              tekst: "145 × 2 = 290.",
            },
            {
              titel: "Gedeeld door 10",
              tekst: "290 ÷ 10 = 29.",
            },
          ],
          woorden: [
            {
              woord: "delen",
              uitleg: "Verdelen: hoe vaak past de deler in het getal?",
            },
          ],
          theorie: "Delen door 5 is hetzelfde als keer 2 en dan delen door 10.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Proef: 29 × 5 = 145 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Controle",
              uitleg: "Antwoord × deler moet het getal geven waarmee je begon.",
            },
          ],
          niveaus: {
            basis: "145 ÷ 5 = 29.",
            simpeler: "145 × 2 = 290. 290 ÷ 10 = 29.",
            nogSimpeler: "29",
          },
        },
      },
    ],
  },

  {
    title: "Praktijk — Toets-redactiesommen",
    explanation: "In toetsvragen kom je grote berekeningen tegen in **verhalen**. Tijd om uit het verhaal te halen wat te rekenen, en cijferend uit te werken.\n\n**Stappenplan**:\n1. **Lees rustig** en onderstreep getallen + de vraag.\n2. **Welke bewerking?** + (samen), − (verschil), × (steeds dezelfde keer iets), ÷ (verdelen).\n3. Schrijf de som **op papier** en cijfer.\n4. **Check** met schatting.\n\n**Voorbeeld 1**:\n*'In een grote doos zitten 24 dozen koekjes. Elke doos heeft 18 koekjes. Hoeveel koekjes in totaal?'*\n• Bewerking: × *('elke doos hetzelfde')*.\n• Som: 24 × 18 = ?\n• Cijferend: 24 × 8 = 192. 24 × 10 = 240. Totaal = 432.\n• **Antwoord**: 432 koekjes.\n\n**Voorbeeld 2**:\n*'Een klas heeft 156 stickers. Ze worden gelijk verdeeld over 13 leerlingen. Hoeveel ieder?'*\n• Bewerking: ÷ *('gelijk verdeeld')*.\n• Som: 156 ÷ 13 = ?\n• 13 × 12 = 156 ✓.\n• **Antwoord**: 12 stickers per leerling.\n\n**Voorbeeld 3 — combinatie**:\n*'Een kapper heeft op maandag 23 klanten, op dinsdag 31, op woensdag 28. Hoeveel klanten in totaal? En als hij € 25 per klant rekent — hoeveel verdient hij dan?'*\n• Stap 1: 23 + 31 + 28 = 82 klanten.\n• Stap 2: 82 × 25 = € 2050.\n\n**Toets-trucs voor verhalen**:\n• 'Samen' / 'totaal' → +.\n• 'Verschil' / 'meer dan' / 'over' → −.\n• 'Per' / 'elke' → ×.\n• 'Gelijk verdeeld' / 'hoeveel ieder' → ÷.",
    checks: [
      {
        q: "Een vrachtwagen vervoert **35 dozen van 28 kg**. Wat is het **totale gewicht** (kg)?",
        options: ["980","880","1080","630"],
        answer: 0,
        wrongHints: [null,"Te weinig — probeer een slimme aanpak: reken 35 keer 30 en pas daarna een kleine correctie toe.","Te veel — heb je een hulpgetal gebruikt maar de correctie vergeten?","Veel te weinig — heb je per ongeluk afgetrokken in plaats van vermenigvuldigd?"],
        uitlegPad: {
          stappen: [
            { titel: "Welke bewerking?", tekst: "'Totale gewicht' = 35 dozen × 28 kg per doos = vermenigvuldigen." },
            { titel: "Slim cijferen", tekst: "35×28 = 35×30 - 35×2 = 1050 - 70 = 980." },
          ],
          woorden: [{ woord: "redactiesom", uitleg: "Som in verhaal-vorm — je moet zelf bedenken welke bewerking." }],
          theorie: "**Signaal-woorden:** 'totaal/samen' = +. 'per/elke/×' = ×. 'verdeeld' = ÷. 'verschil' = −.",
          voorbeelden: [{ type: "redactie", tekst: "35 dozen × 28 kg/doos = totaal kg. Vermenigvuldigen." }],
          basiskennis: [{ onderwerp: "Lees vraag goed", uitleg: "Bewerking kiezen = belangrijkste stap bij redactiesommen." }],
          niveaus: { basis: "35×28=980 kg.", simpeler: "Per doos 28 kg, 35 dozen. Vermenigvuldigen: 35×28. Snelle truc: 35×30=1050, min 35×2=70 → 980.", nogSimpeler: "35×28=980" },
        },
      },
      {
        q: "Een klas heeft **180 boeken**. Verdeeld over **12 kasten** — hoeveel **per kast**?",
        options: ["15","12","18","20"],
        answer: 0,
        wrongHints: [null,"Te weinig — doe een proef: jouw antwoord keer 12 geeft niet 180. Hoeveel keer 12 is wél 180?","Te veel — jouw antwoord keer 12 gaat al voorbij 180.","Te veel — dit antwoord keer 12 gaat ver over de 180 heen."],
        uitlegPad: {
          stappen: [
            { titel: "Welke bewerking?", tekst: "'Verdeeld' = delen. 180 ÷ 12." },
            { titel: "Reken", tekst: "180÷12 = 15 (want 15×12=180)." },
          ],
          woorden: [{ woord: "verdelen", uitleg: "Iets gelijk over groepen verdelen = delen (÷)." }],
          theorie: "Signaalwoord 'verdeeld over' / 'gelijk per' / 'hoeveel ieder' = altijd delen.",
          voorbeelden: [{ type: "delen", tekst: "180 boeken ÷ 12 kasten = 15 boeken per kast." }],
          basiskennis: [{ onderwerp: "Tafels", uitleg: "12-tafel kennen helpt: 12×15=180." }],
          niveaus: { basis: "180÷12=15.", simpeler: "Verdeeld = delen. 180÷12. Probeer: 12×15=180 ✓. Antwoord 15.", nogSimpeler: "15" },
        },
      },
      {
        q: "**1245 leerlingen op 3 scholen**, gelijk verdeeld. Hoeveel **per school**?",
        options: ["415","405","425","505"],
        answer: 0,
        wrongHints: [null,"Te weinig — doe een proef: jouw antwoord keer 3 geeft niet 1245. Hoeveel keer 3 geeft wél precies 1245?","Te veel — jouw antwoord keer 3 gaat voorbij 1245.","Veel te veel — heb je × ipv ÷ gedaan?"],
        uitlegPad: {
          stappen: [
            { titel: "Welke bewerking?", tekst: "'Gelijk verdeeld' = delen. 1245 ÷ 3." },
            { titel: "Cijferend delen", tekst: "1245 ÷ 3: 12÷3=4, 4÷3=1 rest 1, 15÷3=5. Antwoord 415." },
          ],
          woorden: [{ woord: "gelijk verdeeld", uitleg: "= delen. Elke school krijgt evenveel." }],
          theorie: "÷3 cijferend: ga van links naar rechts. 12÷3=4 schrijf, 4÷3=1 rest 1, 15÷3=5. Lees: 415.",
          voorbeelden: [{ type: "controle", tekst: "415×3=1245 ✓. Klopt." }],
          basiskennis: [{ onderwerp: "Schat", uitleg: "1200÷3=400. Antwoord moet rond 400 liggen. 415 past." }],
          niveaus: { basis: "1245÷3=415.", simpeler: "Verdeeld = delen. 1245÷3. Cijferen: 12÷3=4, 4÷3=1 rest 1, 15÷3=5. Antwoord 415. Check: 415×3=1245 ✓.", nogSimpeler: "415" },
        },
      },
      {
        q: "Een fietsenstalling heeft **rij A: 47 fietsen** en **rij B: 68 fietsen**. **Verschil**?",
        options: ["21","115","20","27"],
        answer: 0,
        wrongHints: [null,"Niet samenvoegen — 'verschil' = aftrekken.","Te weinig — controleer: 68−47.","Te veel — reken de eenheden nog eens na."],
        uitlegPad: {
          stappen: [
            { titel: "Welke bewerking?", tekst: "'Verschil' = aftrekken. 68 − 47." },
            { titel: "Reken", tekst: "68−47 = 21 (kan in hoofd: 68−40=28, 28−7=21)." },
          ],
          woorden: [{ woord: "verschil", uitleg: "Hoeveel meer/minder = aftrekken." }],
          theorie: "Signaalwoord 'verschil' / 'meer dan' / 'over' = aftrekken (−), grootste min kleinste.",
          voorbeelden: [{ type: "verschil", tekst: "68 − 47 = 21. Rij B heeft 21 meer fietsen dan A." }],
          basiskennis: [{ onderwerp: "Niet optellen", uitleg: "Bij 'verschil' niet samenvoegen (zou 115 zijn)." }],
          niveaus: { basis: "68−47=21.", simpeler: "Verschil = aftrekken. Grootste min kleinste: 68 − 47 = 21.", nogSimpeler: "21" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een school koopt **16 dozen**. In elke doos zitten **45 potloden**. Hoeveel potloden zijn dat in totaal?",
        options: ["720", "61", "620", "820"],
        answer: 0,
        wrongHints: [
          null,
          "Elke doos heeft evenveel potloden. Welke bewerking hoort bij 'elke'?",
          null,
          "Schat eens: 16 × 45 is ongeveer 15 × 50.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Welke bewerking?",
              tekst: "'Elke doos' evenveel = vermenigvuldigen: 16 × 45.",
            },
            {
              titel: "Cijferen",
              tekst: "16 × 5 = 80. 16 × 40 = 640. 80 + 640 = 720.",
            },
          ],
          woorden: [
            {
              woord: "redactiesom",
              uitleg: "Som in verhaal-vorm — je moet zelf bedenken welke bewerking.",
            },
          ],
          theorie: "**Signaal-woorden:** 'totaal/samen' = +. 'per/elke' = ×. 'gelijk verdeeld' = ÷. 'verschil/over' = −.",
          voorbeelden: [
            {
              type: "redactie",
              tekst: "16 dozen × 45 potloden = 720 potloden.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lees vraag goed",
              uitleg: "Bewerking kiezen = belangrijkste stap bij redactiesommen.",
            },
          ],
          niveaus: {
            basis: "16 × 45 = 720.",
            simpeler: "Elke doos heeft 45 potloden en er zijn 16 dozen. Keer dus: 16 × 45 = 720.",
            nogSimpeler: "720",
          },
        },
      },
      {
        q: "Een bibliotheek heeft **2350 boeken**. Er zijn er **785 uitgeleend**. Hoeveel boeken staan er nog in de kasten?",
        options: ["1565", "3135", "1665", "1575"],
        answer: 0,
        wrongHints: [
          null,
          "Uitgeleende boeken zijn weg uit de kast. Komen er boeken bij of gaan er boeken af?",
          "Leen opnieuw kolom voor kolom: is de buurman na het lenen 1 minder geworden?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Welke bewerking?",
              tekst: "Boeken gaan weg = aftrekken: 2350 − 785.",
            },
            {
              titel: "Cijferen",
              tekst: "0 − 5: leen → 10 − 5 = 5. 4 − 8: leen → 14 − 8 = 6. 2 − 7: leen → 12 − 7 = 5. 1 − 0 = 1. Antwoord 1565.",
            },
          ],
          woorden: [
            {
              woord: "redactiesom",
              uitleg: "Som in verhaal-vorm — je moet zelf bedenken welke bewerking.",
            },
          ],
          theorie: "**Signaal-woorden:** 'totaal/samen' = +. 'per/elke' = ×. 'gelijk verdeeld' = ÷. 'verschil/over' = −.",
          voorbeelden: [
            {
              type: "redactie",
              tekst: "Schat: 2350 − 800 = 1550. 1565 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lees vraag goed",
              uitleg: "Bewerking kiezen = belangrijkste stap bij redactiesommen.",
            },
          ],
          niveaus: {
            basis: "2350 − 785 = 1565.",
            simpeler: "Er gaan boeken weg, dus min. 2350 − 785 = 1565 boeken.",
            nogSimpeler: "1565",
          },
        },
      },
      {
        q: "**234 kinderen** worden verdeeld over **9 groepjes**, allemaal even groot. Hoeveel kinderen zitten in elk groepje?",
        options: ["26", "24", "225", "28"],
        answer: 0,
        wrongHints: [
          null,
          "Doe een proef: jouw antwoord keer 9. Komt dat op 234?",
          "Je haalt 9 kinderen weg. Maar de vraag is hoeveel er in elk groepje komen.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Welke bewerking?",
              tekst: "'Even groot verdeeld' = delen: 234 ÷ 9.",
            },
            {
              titel: "Cijferen",
              tekst: "9 past niet in 2. Pak 23: 9 past 2 keer (18), rest 5. Haal 4 erbij: 54. 9 past 6 keer. Antwoord 26.",
            },
          ],
          woorden: [
            {
              woord: "redactiesom",
              uitleg: "Som in verhaal-vorm — je moet zelf bedenken welke bewerking.",
            },
          ],
          theorie: "**Signaal-woorden:** 'totaal/samen' = +. 'per/elke' = ×. 'gelijk verdeeld' = ÷. 'verschil/over' = −.",
          voorbeelden: [
            {
              type: "redactie",
              tekst: "Proef: 26 × 9 = 234 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lees vraag goed",
              uitleg: "Bewerking kiezen = belangrijkste stap bij redactiesommen.",
            },
          ],
          niveaus: {
            basis: "234 ÷ 9 = 26.",
            simpeler: "Even verdelen = delen. 234 ÷ 9 = 26. Controle: 26 × 9 = 234.",
            nogSimpeler: "26",
          },
        },
      },
      {
        q: "Een bakker verkoopt op vrijdag **386 broden** en op zaterdag **479 broden**. Hoeveel broden verkoopt hij in totaal?",
        options: ["865", "855", "765", "93"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de tientallen: telde je het onthoudje van de eenheden mee?",
          null,
          "De vraag is 'in totaal', niet het verschil.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Welke bewerking?",
              tekst: "'In totaal' = optellen: 386 + 479.",
            },
            {
              titel: "Cijferen",
              tekst: "6 + 9 = 15 (5, onthoud 1). 8 + 7 + 1 = 16 (6, onthoud 1). 3 + 4 + 1 = 8. Antwoord 865.",
            },
          ],
          woorden: [
            {
              woord: "redactiesom",
              uitleg: "Som in verhaal-vorm — je moet zelf bedenken welke bewerking.",
            },
          ],
          theorie: "**Signaal-woorden:** 'totaal/samen' = +. 'per/elke' = ×. 'gelijk verdeeld' = ÷. 'verschil/over' = −.",
          voorbeelden: [
            {
              type: "redactie",
              tekst: "Schat: 390 + 480 = 870. 865 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lees vraag goed",
              uitleg: "Bewerking kiezen = belangrijkste stap bij redactiesommen.",
            },
          ],
          niveaus: {
            basis: "386 + 479 = 865.",
            simpeler: "Totaal = optellen. 386 + 479 = 865 broden.",
            nogSimpeler: "865",
          },
        },
      },
      {
        q: "Een kaartje voor de dierentuin kost **€ 18** per kind. Er gaan **27 kinderen** mee. Hoeveel kost dat samen?",
        options: ["€ 486", "€ 45", "€ 476", "€ 496"],
        answer: 0,
        wrongHints: [
          null,
          "Elk kind betaalt € 18. Is dat één keer € 18 erbij, of 27 keer?",
          null,
          "Reken de twee regels nog eens na: 18 × 7 en 18 × 20.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Welke bewerking?",
              tekst: "'Per kind' = vermenigvuldigen: 27 × 18.",
            },
            {
              titel: "Cijferen",
              tekst: "18 × 7 = 126. 18 × 20 = 360. 126 + 360 = 486.",
            },
          ],
          woorden: [
            {
              woord: "redactiesom",
              uitleg: "Som in verhaal-vorm — je moet zelf bedenken welke bewerking.",
            },
          ],
          theorie: "**Signaal-woorden:** 'totaal/samen' = +. 'per/elke' = ×. 'gelijk verdeeld' = ÷. 'verschil/over' = −.",
          voorbeelden: [
            {
              type: "redactie",
              tekst: "Schat: 20 × 25 = 500. € 486 zit in de buurt ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lees vraag goed",
              uitleg: "Bewerking kiezen = belangrijkste stap bij redactiesommen.",
            },
          ],
          niveaus: {
            basis: "27 × € 18 = € 486.",
            simpeler: "Ieder kind kost € 18 en er zijn 27 kinderen. Keer: 18 × 27 = 486 euro.",
            nogSimpeler: "€ 486",
          },
        },
      },
      {
        q: "Een boer heeft **150 eieren**. In een doosje passen **6 eieren**. Hoeveel doosjes kan hij vullen?",
        options: ["25", "24", "144", "30"],
        answer: 0,
        wrongHints: [
          null,
          "Doe een proef: jouw antwoord keer 6. Zijn dat precies 150 eieren?",
          "Er gaan steeds 6 eieren in een doosje, niet maar één keer.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Welke bewerking?",
              tekst: "'Hoeveel doosjes van 6' = delen: 150 ÷ 6.",
            },
            {
              titel: "Cijferen",
              tekst: "6 past niet in 1. Pak 15: 6 past 2 keer (12), rest 3. Haal 0 erbij: 30. 6 past 5 keer. Antwoord 25.",
            },
          ],
          woorden: [
            {
              woord: "redactiesom",
              uitleg: "Som in verhaal-vorm — je moet zelf bedenken welke bewerking.",
            },
          ],
          theorie: "**Signaal-woorden:** 'totaal/samen' = +. 'per/elke' = ×. 'gelijk verdeeld' = ÷. 'verschil/over' = −.",
          voorbeelden: [
            {
              type: "redactie",
              tekst: "Proef: 25 × 6 = 150 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lees vraag goed",
              uitleg: "Bewerking kiezen = belangrijkste stap bij redactiesommen.",
            },
          ],
          niveaus: {
            basis: "150 ÷ 6 = 25.",
            simpeler: "Steeds 6 eieren in een doosje. Hoe vaak past 6 in 150? 25 keer. Controle: 25 × 6 = 150.",
            nogSimpeler: "25",
          },
        },
      },
    ],
  },

  {
    title: "Eindopdracht — alles cijferen",
    explanation: "Mix-toets met cijferen in Doorstroomtoets-stijl. Verschillende bewerkingen door elkaar — kies zelf welke aanpak.\n\n**Hint**: schrijf álle sommen op en cijfer. Check met een schatting voordat je je antwoord opschrijft.\n\nVeel succes!",
    checks: [
      {
        q: "**3456 + 2789** = ?",
        options: ["6245","6125","6345","5245"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je in elke kolom het onthoudje?","Te veel — schat globaal: hoeveel is 3500 plus 2800 ongeveer?","Veel te weinig — heb je duizendtallen correct?"],
        uitlegPad: {
          stappen: [{ titel: "Cijfer", tekst: "6+9=15 (5,+1). 5+8+1=14 (4,+1). 4+7+1=12 (2,+1). 3+2+1=6. Antwoord 6245." }],
          woorden: [{ woord: "groot optellen", uitleg: "4-cijferige optellingen — onthoudjes goed bijhouden." }],
          theorie: "Schat: 3500+2800=6300. Antwoord rond 6300. 6245 past.",
          voorbeelden: [{ type: "stap", tekst: "Cijferen rechts → links, onthoudje na elke kolom." }],
          basiskennis: [{ onderwerp: "Schrijf netjes", uitleg: "Bij grote sommen: schrijf onthoudjes klein boven volgende kolom." }],
          niveaus: { basis: "3456+2789=6245.", simpeler: "Schat 6300. Cijferen kolommen: 6+9=15, 5+8+1=14, 4+7+1=12, 3+2+1=6. Antwoord 6245.", nogSimpeler: "6245" },
        },
      },
      {
        q: "**8000 − 2547** = ?",
        options: ["5453","5553","5343","6453"],
        answer: 0,
        wrongHints: [null,"Te veel — gebruik 7999-truc + 1.","Te weinig — controleer kolommen.","Veel te veel — heb je goed geleend?"],
        uitlegPad: {
          stappen: [
            { titel: "999-truc", tekst: "Bij grote 0-getallen: doe 7999−2547 (geen lenen), dan +1." },
            { titel: "Reken", tekst: "7999−2547=5452. +1=5453." },
          ],
          woorden: [{ woord: "999-truc", uitleg: "Slimme aanpak voor 1000-, 10000- etc." }],
          theorie: "Door nullen lenen is foutgevoelig. Truc: eerst 1 minder nemen, dan +1 erbij.",
          voorbeelden: [{ type: "truc", tekst: "8000−2547 = 7999−2547+1 = 5452+1 = 5453." }],
          basiskennis: [{ onderwerp: "Schat", uitleg: "8000−2500=5500. Antwoord rond 5500. 5453 past." }],
          niveaus: { basis: "8000−2547=5453.", simpeler: "Truc: 7999−2547=5452 (geen lenen). Plus 1: 5453.", nogSimpeler: "5453" },
        },
      },
      {
        q: "**432 × 6** = ?",
        options: ["2592","2492","2692","2582"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je elk cijfer × 6 met onthoudje?","Te veel — extra onthoudje?","Te weinig — controleer middelste kolom."],
        uitlegPad: {
          stappen: [{ titel: "Cijfer × 6", tekst: "2×6=12 (2,+1). 3×6+1=19 (9,+1). 4×6+1=25. Antwoord 2592." }],
          woorden: [{ woord: "tafel ×6", uitleg: "6×1=6, 6×2=12, 6×3=18, 6×4=24..." }],
          theorie: "Schat: 432×6 ≈ 400×6=2400. Antwoord 2592 past in die buurt.",
          voorbeelden: [{ type: "stap", tekst: "432×6: 2×6=12 (2,+1). 3×6=18+1=19 (9,+1). 4×6=24+1=25." }],
          basiskennis: [{ onderwerp: "Tafel-kennis", uitleg: "6-tafel: 6, 12, 18, 24, 30, 36, 42, 48..." }],
          niveaus: { basis: "432×6=2592.", simpeler: "Cijfer voor cijfer × 6: eenheden 2×6=12 (2 schrijf, 1 onthoud). 3×6+1=19 (9, +1). 4×6+1=25. Antwoord 2592.", nogSimpeler: "2592" },
        },
      },
      {
        q: "**1284 ÷ 4** = ?",
        options: ["321","320","301","221"],
        answer: 0,
        wrongHints: [null,"Te weinig — doe een proef: jouw antwoord keer 4 geeft niet 1284. Hoeveel méér is er nog nodig?","Te weinig — jouw antwoord keer 4 is nog ver van 1284. Probeer hoger.","Veel te weinig — jouw antwoord keer 4 is maar een fractie van 1284."],
        uitlegPad: {
          stappen: [
            { titel: "Cijferend delen", tekst: "12÷4=3, 8÷4=2, 4÷4=1. Antwoord 321." },
            { titel: "Controle", tekst: "321×4=1284 ✓." },
          ],
          woorden: [{ woord: "deler", uitleg: "Het getal waardoor gedeeld wordt. Hier: 4." }],
          theorie: "÷4 truc: kun je ook ÷2 ÷2 doen. 1284÷2=642, 642÷2=321.",
          voorbeelden: [{ type: "ook anders", tekst: "1284÷2=642. 642÷2=321. Zelfde antwoord." }],
          basiskennis: [{ onderwerp: "Tafel ×4", uitleg: "4×3=12, 4×8=32, 4×321=1284." }],
          niveaus: { basis: "1284÷4=321.", simpeler: "Truc: ÷4 = ÷2 ÷2. 1284÷2=642. 642÷2=321.", nogSimpeler: "321" },
        },
      },
      {
        q: "Een fabriek maakt **24 producten per uur**, **8 uur per dag**. **Hoeveel per dag**?",
        options: ["192","182","202","240"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer 24 × 8.","Te veel — heb je extra onthoudje?","Veel te veel — dat is 30×8."],
        uitlegPad: {
          stappen: [
            { titel: "Welke bewerking?", tekst: "'Per uur, 8 uur per dag' = 24 × 8." },
            { titel: "Reken", tekst: "24×8: 4×8=32 (2,+3). 2×8+3=19. Antwoord 192." },
          ],
          woorden: [{ woord: "per", uitleg: "Signaalwoord voor vermenigvuldigen." }],
          theorie: "'X per Y' + 'Y aantal' = ×. 24 producten × 8 uur = 192 producten.",
          voorbeelden: [{ type: "per", tekst: "24×8 = 192 producten per dag." }],
          basiskennis: [{ onderwerp: "Schat", uitleg: "25×8=200. Antwoord rond 200. 192 past." }],
          niveaus: { basis: "24×8=192.", simpeler: "Per uur 24, 8 uur = 24×8. Reken: 24×8 = 192.", nogSimpeler: "192" },
        },
      },
      {
        q: "**Pakjes van 12 chocoladerepen kosten € 7,80 elk**. Voor **een doos van 25 pakjes** — totaalprijs?",
        options: ["€ 195","€ 185","€ 205","€ 200"],
        answer: 0,
        wrongHints: [null,"Te weinig — probeer de truc voor keer 25: hoe gebruik je keer 100 en dan delen?","Te veel — heb je verkeerd vermenigvuldigd?","Te veel — schat: hoeveel is 8 keer 25, en is jouw antwoord groter of kleiner dan dat zou moeten?"],
        uitlegPad: {
          stappen: [
            { titel: "Welke bewerking?", tekst: "Per pakje €7,80, 25 pakjes = 7,80 × 25." },
            { titel: "Slimme aanpak", tekst: "7,80 × 25 = (7,80 × 100) ÷ 4 = 780 ÷ 4 = 195. Truc voor ×25." },
          ],
          woorden: [{ woord: "decimaal", uitleg: "Getal met komma. €7,80 = 7 euro en 80 cent." }],
          theorie: "Truc ×25: ×100 ÷4. Werkt ook met decimalen: 7,80×100=780, ÷4=195.",
          voorbeelden: [{ type: "truc", tekst: "7,80×25: 780÷4=195. Of: 7,80×25 = 7×25 + 0,80×25 = 175 + 20 = 195." }],
          basiskennis: [{ onderwerp: "Het getal '12' is afleider", uitleg: "'Pakjes van 12 chocoladerepen' is irrelevant — vraag gaat over prijs per pakje." }],
          niveaus: { basis: "7,80×25=€195.", simpeler: "Truc: 7,80×25 = (7,80×100)÷4 = 780÷4 = 195. €195.", nogSimpeler: "€195" },
        },
      },
      { q: "**456 + 287** = ?", options: ["743","733","633","843"], answer: 0, wrongHints: [null, "Niet — tel de tientallen nog eens na.", "Niet — vergeet onthouden niet.", "Niet."] },
      { q: "**905 − 327** = ?", options: ["578","678","622","588"], answer: 0, wrongHints: [null, "Niet — lenen vergeten.", "Niet.", "Niet."] },
      { q: "**24 × 15** = ?", options: ["360","240","36","350"], answer: 0, wrongHints: [null, "Dat is 24×10.", "Niet — vergeet 10-vouden.", "Niet — bijna."] },
      { q: "**156 ÷ 4** = ?", options: ["39","36","42","51"], answer: 0, wrongHints: [null, "Niet — doe een proef: jouw antwoord keer 4 geeft niet 156.", "Niet — te hoog.", "Niet."] },
      { q: "**3,5 + 2,7** = ?", options: ["6,2","5,2","6,12","5,12"], answer: 0, wrongHints: [null, "Niet — tel de tienden apart op: hoeveel is 5 tienden plus 7 tienden?", "Niet — 12 hoort niet samen.", "Niet."] },
      { q: "**8 − 3,4** = ?", options: ["4,6","5,6","3,6","4,4"], answer: 0, wrongHints: [null, "Je haalt 3,4 áf van 8 — kom je dan echt boven de 5 uit?", "Dit lijkt te weinig — heb je misschien méér dan 3,4 afgetrokken? Reken 8 − 3,4 rustig na.", "Let op de tienden: 8,0 heeft 0 tienden en er gaat 0,4 af, dus je moet lenen van de hele getallen. Hoeveel tienden hou je over?"] },
      { q: "**0,3 × 7** = ?", options: ["2,1","21","0,21","3,7"], answer: 0, wrongHints: [null, "Niet — komma vergeten.", "Komma te ver.", "Niet."] },
      { q: "**240 ÷ 12** = ?", options: ["20","12","24","30"], answer: 0, wrongHints: [null, "Dat is de deler.", "Te laag.", "Te hoog."] },
      { q: "Rond af: **23,7** op een heel getal", options: ["24","23","23,7","20"], answer: 0, wrongHints: [null, "Niet — 7 ≥ 5.", "Dat is niet afgerond.", "Te ver."] },
      { q: "Wat is **17 × 6**?", options: ["102","112","104","92"], answer: 0, wrongHints: [null, "Niet — controleer.", "Niet.", "Te laag."] },
      { q: "**1.234 + 567** = ?", options: ["1.801","1.701","1.811","1.901"], answer: 0, wrongHints: [null, "Te weinig — heb je het onthoudje uit de tientallen meegeteld bij de honderdtallen?", "Te veel — tel de tientallen-kolom nog eens na.", "Te veel — tel de honderdtallen-kolom nog eens na."] },
      { q: "**1.000 − 245** = ?", options: ["755","855","655","745"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet — bijna."] },
      { q: "**45 × 11** = ?", options: ["495","450","405","550"], answer: 0, wrongHints: [null, "Dat is ×10.", "Niet.", "Niet."] },
      { q: "**100 ÷ 25** = ?", options: ["4","5","2","10"], answer: 0, wrongHints: [null, "Tel op in stappen van 25: 25, 50, 75, 100 — hoeveel sprongen zijn dat precies?", "2 keer 25 is pas 50 — is dat al 100? Blijf verder tellen.", "10 keer 25 zou 250 zijn, veel te veel — welk getal keer 25 geeft precies 100?"] },
      { q: "Welk **cijfer** staat op de plek van de **honderdtallen** in 4.567?", options: ["5","4","6","7"], answer: 0, wrongHints: [null, "De 4 staat op de plek van de duizendtallen.", "De 6 staat op de plek van de tientallen.", "De 7 staat op de plek van de eenheden."] },
    ],
  },
  // F. Oefenronde plus & min (11 aug 2026, zelfde didactiek als tafels/topografie):
  // typ het antwoord; in één keer goed = gekend; mis = som komt later terug.
  {
    title: "Oefen plus & min!",
    explanation:
      "Tijd om **plus- en minsommen** vlot te krijgen — uit je hoofd, tot 100.\n\n" +
      "Je krijgt **12 sommen** door elkaar: optellen én aftrekken. Typ het antwoord:\n" +
      "• In **één keer goed** → ✔ die ken je!\n" +
      "• **Mis?** Je krijgt een hint en mag het nog eens proberen — en die som komt straks nog een keer terug.\n\n" +
      "Klaar als je ze **allemaal** in één keer goed hebt. Genoeg geoefend? Stoppen mag altijd.",
    interactiveComponent: makeRekenOefenRonde({ soort: ["optellen", "aftrekken"], aantal: 12, totMax: 100, emoji: "➕", meervoud: "plus- en minsommen" }),
    checks: [
      { q: "36 + 47 = ?", options: ["83","73","84","93"], answer: 0, wrongHints: [null, "Vergeet de onthoud-tien niet.", "Bijna — tel de eenheden nog eens.", "Te veel — controleer de tientallen."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const cijferendRekenen = {
  id: "cijferend-rekenen",
  title: "Cijferend rekenen — Doorstroomtoets groep 6-8",
  emoji: "🔢",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen — cijferen",
  prerequisites: [
    { id: "tafels-po", title: "Tafels (vermenigvuldigen)", niveau: "po-1F" },
    { id: "geld-rekenen", title: "Geld rekenen", niveau: "po-1F" },
  ],
  intro:
    "Cijferend rekenen voor groep 6-8: optellen + onthouden, aftrekken + lenen, vermenigvuldigen, delen (bus-bewerking), praktijk-redactiesommen. ~15 min per deel.",
  triggerKeywords: [
    "cijferend","cijferen","kolomsgewijs","onder elkaar",
    "staartdeling","bus-bewerking","onthouden","lenen",
    "optellen","aftrekken","vermenigvuldigen","delen",
  ],
  chapters,
  steps,
};

export default cijferendRekenen;
