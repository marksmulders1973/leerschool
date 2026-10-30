// Leerpad: Getallen tot 20 + optellen/aftrekken — groep 3-4 PO.
// Basisbouwsteen rekenen, ontbrak nog in Leerkwartier.
// 5 stappen × ~5 checks.
// + stap F (11 aug 2026): speelse oefenronde met plaatjes/geluid (jong-modus).

import { makeRekenOefenRonde } from "../components/learn/RekenOefenRonde.jsx";

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  blauw: "#1565c0",
  groen: "#00897b",
  oranje: "#ef6c00",
  goud: "#ffd54f",
};

const stepEmojis = ["🔢", "➕", "➖", "🔟", "🏆", "🎈"];

const chapters = [
  { letter: "A", title: "Getallen 0-20 herkennen", emoji: "🔢", from: 0, to: 0 },
  { letter: "B", title: "Optellen tot 10", emoji: "➕", from: 1, to: 1 },
  { letter: "C", title: "Aftrekken tot 10", emoji: "➖", from: 2, to: 2 },
  { letter: "D", title: "Sommen tot 20", emoji: "🔟", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
  { letter: "F", title: "Sommen-feestje!", emoji: "🎈", from: 5, to: 5 },
];

const steps = [
  // ─── A. Getallen 0-20 ─────────────────────────────────────
  {
    title: "Getallen 0 t/m 20 — herkennen en tellen",
    explanation:
      "Voor groep 3 is **getalbegrip 0-20** de basis van alle rekenen.\n\n**Tellen**:\n• 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.\n• 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.\n• Belangrijk: 11 en 12 zijn **uitzonderingen** (geen 'tienpunteen' of 'eenentien').\n\n**Cijfer vs hoeveelheid**:\n• **Cijfer** = teken: 5, 7, 12.\n• **Hoeveelheid** = aantal dingen: ●●●●● = 5 stippen.\n\n**Tien-structuur**:\n• Onze getallen werken in **groepen van tien**.\n• 13 = 1 tiental + 3 eenheden = 10 + 3.\n• 17 = 1 tiental + 7 eenheden = 10 + 7.\n\n**Onthoud**:\n• 'Tien' is een speciale stop — daar begint elke nieuwe rij.\n• Na 20: 21, 22, 23 etc.",
    checks: [
      {
        q: "Welk getal komt **na 7**?",
        options: ["8","6","9","10"],
        answer: 0,
        wrongHints: [null, "Dat komt VOOR 7.", "Je slaat er eentje over — welk getal komt metéén na 7?", "Dat komt 3 verder dan 7."],
        uitlegPad: {
          stappen: [{ titel: "Tellen op", tekst: "Telrij: 5, 6, **7, 8**, 9, 10. Na 7 komt 8." }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Tel mee: 1-2-3-4-5-6-**7**-**8**-9-10." }],
          basiskennis: [{ onderwerp: "Telrij", uitleg: "Elke keer 1 erbij = volgend getal." }],
          niveaus: { basis: "8 komt na 7.", simpeler: "Tel op: 7 → 8.", nogSimpeler: "8" },
        },
      },
      {
        q: "Hoeveel stippen zijn dit: **● ● ● ● ●**?",
        options: ["5","4","6","10"],
        answer: 0,
        wrongHints: [null, "Bijna — tel nog eens, en wijs elke stip maar één keer aan.", "Te veel — er staan er minder.", "Wijs elke stip één keer aan — zijn het er echt zoveel?"],
        uitlegPad: {
          stappen: [{ titel: "Tellen", tekst: "Tel elke stip met je vinger: 1, 2, 3, 4, 5. Vijf stippen → cijfer 5." }],
          niveaus: { basis: "5 stippen.", simpeler: "Tel mee: 1-2-3-4-5.", nogSimpeler: "5" },
        },
      },
      {
        q: "Welk getal is het **kleinst**?",
        options: ["8","12","10","9"],
        answer: 0,
        wrongHints: [null, "Dat is juist het grootste getal — 12 komt het laatst in de telrij.", "Dat is niet het kleinste — er komt nog een getal eerder in de telrij.", "Bijna — er is nog een getal dat eerder komt in de telrij."],
        uitlegPad: {
          stappen: [{ titel: "In de telrij", tekst: "Kijk naar de telrij: 1-2-3-4-5-6-7-**8**-9-10-11-**12**. Het getal dat je het eerst tegenkomt, is het kleinste." }],
          woorden: [{ woord: "kleinst", uitleg: "Het minste van allemaal." }],
          niveaus: { basis: "Het getal dat het eerst komt in de telrij, is het kleinste.", simpeler: "Tel maar: 7, 8, 9, 10, 11, 12. Welk van de vier getallen zeg je het eerst?", nogSimpeler: "8" },
        },
      },
      {
        q: "Welk getal komt **tussen 14 en 16**?",
        options: ["15","13","17","16"],
        answer: 0,
        wrongHints: [null, "Dat komt VOOR 14.", "Dat komt NA 16.", "Dat is het tweede getal zelf. Welk getal ligt ertussen?"],
        uitlegPad: {
          stappen: [{ titel: "Telrij hoge getallen", tekst: "...13, 14, **15**, 16, 17... Tussen 14 en 16 zit 15." }],
          niveaus: { basis: "15 tussen 14 en 16.", simpeler: "14 → 15 → 16.", nogSimpeler: "15" },
        },
      },
      {
        q: "Vul in: 10 + ? = **20**",
        options: ["10","8","5","12"],
        answer: 0,
        wrongHints: [null, "Tel het na: is 10 + 8 echt gelijk aan 20?", "Tel het na: is 10 + 5 echt gelijk aan 20?", "Te veel — 10 + 12 gaat al voorbij 20."],
        uitlegPad: {
          stappen: [{ titel: "Tientallen + eenheden", tekst: "20 = 2 tientallen = 10 + 10. Twee tientallen samen = 20." }],
          theorie: "Toets-onthouden: 20 is bijzonder = 2 keer 10.",
          niveaus: { basis: "10 + 10 = 20.", simpeler: "Twee tientallen = 20.", nogSimpeler: "10" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk getal komt **voor 13**?",
        options: ["12", "14", "11", "3"],
        answer: 0,
        wrongHints: [null, "Dat komt NA 13.", null, "Kijk goed: 13 is meer dan 10."],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel terug",
              tekst: "Telrij: 10, 11, **12, 13**, 14, 15. Vlak voor 13 staat 12.",
            },
          ],
          niveaus: {
            basis: "12 komt voor 13.",
            simpeler: "Tel: 11, 12, 13. Voor 13 komt 12.",
            nogSimpeler: "12",
          },
        },
      },
      {
        q: "Welk getal is het **grootst**?",
        options: ["18", "15", "9", "12"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk welk getal het laatst komt in de telrij.",
          null,
          "Er is een getal dat nog later komt.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "In de telrij",
              tekst: "Zet ze op volgorde: 9, 12, 15, **18**. Het laatste getal is het grootst.",
            },
          ],
          niveaus: {
            basis: "18 is het grootst.",
            simpeler: "18 komt het laatst in de telrij.",
            nogSimpeler: "18",
          },
        },
      },
      {
        q: "Tel verder: 17, 18, 19, ___",
        options: ["20", "21", "10", "18"],
        answer: 0,
        wrongHints: [null, "Dat is twee verder dan 19.", null, "Dat getal had je al."],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel op",
              tekst: "17, 18, 19, **20**. Elke keer 1 erbij.",
            },
          ],
          niveaus: {
            basis: "Na 19 komt 20.",
            simpeler: "19 + 1 = 20.",
            nogSimpeler: "20",
          },
        },
      },
      {
        q: "Hoe schrijf je **twaalf** in cijfers?",
        options: ["12", "21", "102", "11"],
        answer: 0,
        wrongHints: [null, "Dat is eenentwintig.", null, "Dat is elf."],
        uitlegPad: {
          stappen: [
            {
              titel: "Twaalf",
              tekst: "Twaalf = 10 + 2 = **12**. Eerst de 1 van het tiental, dan de 2.",
            },
          ],
          niveaus: {
            basis: "Twaalf = 12.",
            simpeler: "10 en nog 2 = 12.",
            nogSimpeler: "12",
          },
        },
      },
    ],
  },

  // ─── B. Optellen tot 10 ───────────────────────────────────
  {
    title: "Optellen tot 10 — handig splitsen",
    explanation:
      "**Optellen** = erbij doen.\n\n**Splitsen helpt**:\n• 5 = 1+4 = 2+3 = 0+5.\n• 10 = 1+9 = 2+8 = 3+7 = 4+6 = 5+5 = 6+4 = 7+3 = 8+2 = 9+1.\n\n**Dubbele** (super handig om snel uit te rekenen):\n• 1+1=2, 2+2=4, 3+3=6, 4+4=8, 5+5=10.\n• Onthoud deze — dan kun je de sommen eromheen ook snel uitrekenen.\n\n**Truc 'bijna dubbele'**:\n• 4+5 = (4+4) + 1 = 8 + 1 = 9.\n• 3+4 = (3+3) + 1 = 6 + 1 = 7.\n\n**Plus 1, plus 2**:\n• X + 1 = volgend getal. 6 + 1 = 7. Heel snel.\n• X + 2 = volgende-volgende. 6 + 2 = 8.\n\n**Truc plus 0**:\n• X + 0 = X. 7 + 0 = 7. Niets erbij.\n\n**Volgorde maakt niet uit**:\n• 3 + 5 = 5 + 3 = 8. **Wisselen mag**.\n• Tip: zet **grootste getal eerst** en tel op met kleinste.",
    checks: [
      {
        q: "**5 + 3** = ?",
        options: ["8","7","9","6"],
        answer: 0,
        wrongHints: [null, "Te weinig — 5 + 3, niet 5 + 2.", "Te veel — dat is 5 + 4.", "Te weinig — dat is 5 + 1."],
        uitlegPad: {
          stappen: [{ titel: "Tel door", tekst: "5 + 3 → vanaf 5 nog 3 erbij: 6, 7, **8**. Of: 5 + 3 = 5 + 5 - 2 = 10 - 2 = 8." }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Begin bij 5, tel verder: 5 → 6 (+1) → 7 (+2) → 8 (+3) ✓." }],
          niveaus: { basis: "5 + 3 = 8.", simpeler: "Tel vanaf 5: 6, 7, 8.", nogSimpeler: "8" },
        },
      },
      {
        q: "4 + 4 is een dubbele som. Hoeveel is **4 + 4**?",
        options: ["8","6","7","9"],
        answer: 0,
        wrongHints: [null, "Dat is het dubbele van 3, niet van 4.", "Tel vanaf 4 nog vier verder: kom je dan op 7 uit?", "Dat is 4 + 5 — maar je telt twee keer 4 op."],
        uitlegPad: {
          stappen: [{ titel: "Dubbele = 2x zelfde", tekst: "4 + 4 = **8**. Even getal want je telt 2 keer hetzelfde. Onthoud lijstje: 1+1=2, 2+2=4, 3+3=6, 4+4=**8**, 5+5=10." }],
          niveaus: { basis: "4 + 4 = 8.", simpeler: "Dubbele 4 = 8.", nogSimpeler: "8" },
        },
      },
      {
        q: "Welke twee getallen zijn samen **10**?",
        options: ["6 + 4","5 + 4","7 + 4","3 + 6"],
        answer: 0,
        wrongHints: [null, "Tel het na: is 5 + 4 echt gelijk aan 10?", "Te veel — 7 + 4 gaat al voorbij 10.", "Tel het na: is 3 + 6 echt gelijk aan 10?"],
        uitlegPad: {
          stappen: [{ titel: "Tientallen-buurman", tekst: "6 + 4 = 10. Onthoud: 10 = 6+4 (buurman-paar), 7+3, 8+2, 9+1, 5+5. Allemaal samen 10." }],
          theorie: "Toets-truc: 'Welke maakt 10?' kennis = essentieel voor groep 3-4. Oefen lijstje 'tientallen-paren'.",
          niveaus: { basis: "6 + 4 = 10.", simpeler: "6 en 4 samen = 10.", nogSimpeler: "6+4" },
        },
      },
      {
        q: "**7 + 0** = ?",
        options: ["7","8","0","1"],
        answer: 0,
        wrongHints: [null, "Te veel — er kwam niets bij.", "Bij plus 0 gaat er niets af — hoeveel had je al?", "Plus 0 betekent: er komt niets bij. Hoeveel had je al?"],
        uitlegPad: {
          stappen: [{ titel: "Plus 0 = niets erbij", tekst: "**Plus 0 verandert niets.** 7 + 0 = 7 en 100 + 0 = 100. Dat is altijd zo." }],
          theorie: "Bij plus 0 komt er niets bij, dus je houdt precies wat je al had.",
          niveaus: { basis: "Plus 0 betekent: er komt niets bij. Je houdt wat je had.", simpeler: "Je had 7 en er komt niets bij. Dan heb je nog steeds 7.", nogSimpeler: "7" },
        },
      },
      {
        q: "**3 + 7** is hetzelfde als ___ + 3. Welk getal hoort op de lijn?",
        options: ["7","10","3","4"],
        answer: 0,
        wrongHints: [null, "10 is de uitkomst. Welk getal moet er vóór de + 3 staan?", "Dan staat er 3 + 3 — is dat hetzelfde als 3 + 7?", "Reken na: is 4 + 3 hetzelfde als 3 + 7?"],
        uitlegPad: {
          stappen: [{ titel: "Omdraaien mag", tekst: "Bij optellen mag je de getallen **omdraaien**. 3 + 7 is hetzelfde als 7 + 3, allebei 10. Zo maak je sommen vaak makkelijker." }],
          woorden: [{ woord: "omdraaien", uitleg: "De twee getallen van plek wisselen. Bij een plus-som mag dat altijd." }],
          theorie: "Tip: zet het grootste getal vooraan en tel het kleinste erbij. 3 + 7 = 7 + 3. Vanaf 7 tellen: 8, 9, 10.",
          niveaus: { basis: "Bij een plus-som mag je de getallen omdraaien. De uitkomst blijft hetzelfde.", simpeler: "3 + 7 is hetzelfde als 7 + 3. Welk getal staat dan vóór de + 3?", nogSimpeler: "7" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke som is **niet** samen 10?",
        options: ["6 + 3", "3 + 7", "8 + 2", "5 + 5"],
        answer: 0,
        wrongHints: [null, "Reken na: 3 + 7 = ?", null, "Dat is een dubbele: 5 + 5 = ?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Reken ze na",
              tekst: "3 + 7 = 10. 8 + 2 = 10. 5 + 5 = 10. Maar **6 + 3 = 9**.",
            },
          ],
          niveaus: {
            basis: "6 + 3 = 9, geen 10.",
            simpeler: "De andere drie zijn samen 10.",
            nogSimpeler: "6 + 3",
          },
        },
      },
      {
        q: "**8 + 1** = ?",
        options: ["9", "8", "10", "7"],
        answer: 0,
        wrongHints: [null, "Er komt wel iets bij: 1.", "Dat is 8 + 2.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Plus 1",
              tekst: "Plus 1 = het volgende getal. Na 8 komt **9**.",
            },
          ],
          niveaus: {
            basis: "8 + 1 = 9.",
            simpeler: "Tel: 8, 9.",
            nogSimpeler: "9",
          },
        },
      },
    ],
  },

  // ─── C. Aftrekken tot 10 ──────────────────────────────────
  {
    title: "Aftrekken tot 10 — eraf halen",
    explanation:
      "**Aftrekken** = eraf halen. Tegenovergesteld van optellen.\n\n**Tellen-omlaag**:\n• 8 - 3 → begin bij 8, tel terug: 7, 6, **5**.\n• 6 - 2 → 5, **4**.\n\n**Familie-sommen**:\n• Als je 3 + 4 = 7 weet, weet je ook 7 - 3 = 4 en 7 - 4 = 3.\n• Eén optelsom + twee aftreksommen = **één familie**.\n\n**Min 0** = blijft hetzelfde:\n• 8 - 0 = 8. Niets eraf.\n\n**Iets - zichzelf** = 0:\n• 7 - 7 = 0. Alles eraf = niets over.\n\n**Toets-truc bijna-dubbele**:\n• 9 - 4 = (10 - 4) - 1 = 6 - 1 = 5.\n• Of: 9 - 4 = 5 (want 4 + 5 = 9).\n\n**LET OP**: **volgorde maakt WEL uit** bij aftrekken!\n• 5 - 3 = 2 ✓.\n• 3 - 5 = ?? → 'negatief', leren we later. Voor groep 3-4: niet doen.\n\n**Toets-truc 'verschil'**:\n• 'Wat is het **verschil** tussen 8 en 3?' → 8 - 3 = 5.\n• Verschil = altijd aftrekken (groot min klein).",
    checks: [
      {
        q: "**6 - 2** = ?",
        options: ["4","8","3","5"],
        answer: 0,
        wrongHints: [null, "Te veel — dat is 6 + 2.", "Te weinig — dat is 6 - 3.", "Te veel — dat is 6 - 1."],
        uitlegPad: {
          stappen: [{ titel: "Tel terug", tekst: "6 - 2 → vanaf 6 twee stappen terug: 5, **4**. Of: 6 = 4 + 2, dus 6 - 2 = 4." }],
          niveaus: { basis: "6 - 2 = 4.", simpeler: "Tel terug vanaf 6: 5, 4.", nogSimpeler: "4" },
        },
      },
      {
        q: "**10 - 7** = ?",
        options: ["3","4","2","5"],
        answer: 0,
        wrongHints: [null, "Te veel — hoeveel moet je bij 7 optellen om 10 te krijgen?", "Te weinig — dat is 10-8.", "Te veel — dat is 10-5."],
        uitlegPad: {
          stappen: [{ titel: "Tientallen-buurman", tekst: "10 - 7 = 3 (want 7 + 3 = 10, dus 10 - 7 = 3). **Familie-som**." }],
          theorie: "Toets-truc: '10 min iets' is **buurman van dat iets** dat samen 10 maakt.",
          niveaus: { basis: "10 - 7 = 3.", simpeler: "10 - 7 = 3 (want 7+3=10).", nogSimpeler: "3" },
        },
      },
      {
        q: "Wat is het **verschil** tussen **8 en 3**?",
        options: ["5","11","2","6"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 8 + 3.", "Te weinig — tel eens van 3 naar 8: hoeveel stappen zijn dat?", "Te veel — dat is 8 - 2."],
        uitlegPad: {
          stappen: [{ titel: "Verschil = aftrekken", tekst: "Het **verschil** is hoeveel meer het grote getal is dan het kleine. Groot min klein: 8 - 3 = **5**. Hoor je 'wat is het verschil tussen …'? Dan trek je af." }],
          woorden: [{ woord: "verschil", uitleg: "Hoeveel meer of minder het ene getal is dan het andere." }],
          niveaus: { basis: "Het verschil is hoeveel meer 8 is dan 3. Dat reken je uit met 8 - 3.", simpeler: "Tel van 3 naar 8: 4, 5, 6, 7, 8. Dat zijn 5 stappen.", nogSimpeler: "5" },
        },
      },
      {
        q: "**9 - 9** = ?",
        options: ["0","1","9","18"],
        answer: 0,
        wrongHints: [null, "Je haalt er 9 af van 9 — blijft er dan nog eentje over?", "Dan is er niets afgegaan — maar je haalt er 9 af.", "Dat is 9 + 9 — hier staat min."],
        uitlegPad: {
          stappen: [{ titel: "Iets - zichzelf = 0", tekst: "Als je alles eraf haalt blijft er niets over. 9 - 9 = **0**. Werkt voor elk getal: 5 - 5 = 0, 100 - 100 = 0." }],
          niveaus: { basis: "Je haalt van 9 precies 9 weg. Dan is alles weg.", simpeler: "Als je alles weghaalt, blijft er niets over: 0.", nogSimpeler: "0" },
        },
      },
      {
        q: "Vul in: **7 - ?** = 3",
        options: ["4","10","3","2"],
        answer: 0,
        wrongHints: [null, "Te veel — je kunt geen 10 weghalen als je maar 7 hebt.", "Reken na: hoeveel is 7 - 3? Is dat 3?", "Te weinig — controleer: wat krijg je als je 7 - 2 uitrekent?"],
        uitlegPad: {
          stappen: [{ titel: "Familie-som omkeren", tekst: "7 - ? = 3. Wat moet er weg om 3 over te houden? 7 - **4** = 3. Dit hoort bij elkaar: 3 + 4 = 7, dus 7 - 4 = 3 en 7 - 3 = 4." }],
          niveaus: { basis: "Welk getal haal je van 7 weg om 3 over te houden? Denk aan de plus-som: 3 + ? = 7.", simpeler: "3 + 4 = 7, dus 7 - 4 = 3.", nogSimpeler: "4" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**5 - 0** = ?",
        options: ["5", "0", "4", "6"],
        answer: 0,
        wrongHints: [null, "Er gaat niets af.", null, "Bij min komt er niets bij."],
        uitlegPad: {
          stappen: [
            {
              titel: "Min 0",
              tekst: "Min 0 = er gaat niets af. Dus 5 - 0 = **5**.",
            },
          ],
          niveaus: {
            basis: "5 - 0 = 5.",
            simpeler: "Niets eraf, dus het blijft 5.",
            nogSimpeler: "5",
          },
        },
      },
      {
        q: "Je weet: **2 + 5 = 7**. Wat is dan **7 - 5**?",
        options: ["2", "5", "12", "3"],
        answer: 0,
        wrongHints: [null, "Dat getal haal je er juist af.", "Dat is plus, geen min.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Familie-som",
              tekst: "2 + 5 = 7 hoort bij 7 - 5 = **2** en 7 - 2 = 5. Dat is één familie.",
            },
          ],
          niveaus: {
            basis: "7 - 5 = 2.",
            simpeler: "2 en 5 maken samen 7. Haal je 5 weg, dan blijft 2 over.",
            nogSimpeler: "2",
          },
        },
      },
      {
        q: "**9 - 3** = ?",
        options: ["6", "5", "7", "12"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — tel 3 stappen terug, niet 4.",
          "Te veel — tel 3 stappen terug, niet 2.",
          "Dat is 9 + 3.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel terug",
              tekst: "Begin bij 9 en tel 3 terug: 8, 7, **6**.",
            },
          ],
          niveaus: {
            basis: "9 - 3 = 6.",
            simpeler: "Tel terug vanaf 9: 8, 7, 6.",
            nogSimpeler: "6",
          },
        },
      },
      {
        q: "Welke som is **goed**?",
        options: ["10 - 4 = 6", "10 - 4 = 5", "10 - 4 = 7", "10 - 4 = 14"],
        answer: 0,
        wrongHints: [null, "Reken na: tel vanaf 10 precies 4 stappen terug.", null, "Dat is 10 + 4."],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel terug",
              tekst: "10 - 4 → 9, 8, 7, **6**. Check: 6 + 4 = 10 ✓.",
            },
          ],
          niveaus: {
            basis: "10 - 4 = 6.",
            simpeler: "6 + 4 = 10, dus 10 - 4 = 6.",
            nogSimpeler: "6",
          },
        },
      },
    ],
  },

  // ─── D. Sommen tot 20 ─────────────────────────────────────
  {
    title: "Sommen tot 20 — over de 10 heen",
    explanation:
      "Voor groep 3-4 is **over de 10 heen rekenen** lastig.\n\n**Truc: maak eerst tien**:\n• 8 + 5 = ?\n• Stap 1: 8 + 2 = 10 (eerst 10 maken, splits 5 in 2 + 3).\n• Stap 2: 10 + 3 = 13.\n• Dus 8 + 5 = 13. ✓\n\n**Truc: splits het tweede getal**:\n• 7 + 6 = 7 + 3 + 3 = 10 + 3 = 13.\n• 9 + 5 = 9 + 1 + 4 = 10 + 4 = 14.\n\n**Aftrekken over 10**:\n• 13 - 5 = ?\n• Stap 1: 13 - 3 = 10 (eerst 10 maken).\n• Stap 2: 10 - 2 = 8.\n• Dus 13 - 5 = 8. ✓\n\n**Onthoud die '10' als rustpunt** — het tussenstap-getal.\n\n**Sommen 11-20**:\n• 11 = 10 + 1.\n• 14 = 10 + 4.\n• 17 = 10 + 7.\n• Dus 14 + 3 = (10+4) + 3 = 10 + 7 = 17. Eenvoudig.\n\n**Toets-truc redactiesom**:\n• 'Sam heeft 8 knikkers, krijgt 5 erbij. Hoeveel nu?'\n• Plus-som: 8 + 5 = 13.\n• Antwoord: 13 knikkers.",
    checks: [
      {
        q: "**8 + 5** = ?",
        options: ["13","12","14","15"],
        answer: 0,
        wrongHints: [null, "Te weinig — je hebt niet 4 maar 5 bij 8 opgeteld.", "Te veel — dat is 8+6.", "Te veel — dat is 8+7."],
        uitlegPad: {
          stappen: [{ titel: "Maak eerst 10", tekst: "8 + 5 → splits 5 in 2 + 3. 8 + 2 = 10. 10 + 3 = **13**." }],
          voorbeelden: [{ type: "voorbeeld", tekst: "8 + 5 = 8 + 2 + 3 = 10 + 3 = 13 ✓." }],
          niveaus: { basis: "8+5 = 13.", simpeler: "8+2=10, 10+3=13.", nogSimpeler: "13" },
        },
      },
      {
        q: "**15 - 7** = ?",
        options: ["8","9","7","6"],
        answer: 0,
        wrongHints: [null, "Te veel — je hebt 6 afgetrokken in plaats van 7.", "Te weinig — je hebt 8 afgetrokken in plaats van 7.", "Te weinig — je hebt 9 afgetrokken in plaats van 7."],
        uitlegPad: {
          stappen: [{ titel: "Eerst naar 10", tekst: "15 - 7 → splits 7 in 5 + 2. 15 - 5 = 10. 10 - 2 = **8**." }],
          niveaus: { basis: "15-7 = 8.", simpeler: "15-5=10, 10-2=8.", nogSimpeler: "8" },
        },
      },
      {
        q: "**14 + 5** = ?",
        options: ["19","20","18","13"],
        answer: 0,
        wrongHints: [null, "Te veel — je hebt er te veel bij opgeteld.", "Te weinig — je hebt 4 opgeteld, maar de som vraagt om 5.", "Dat is 14 - 1 — hier staat plus."],
        uitlegPad: {
          stappen: [{ titel: "Splits 14", tekst: "14 = 10 + 4. Dus 14 + 5 = 10 + 4 + 5 = 10 + 9 = **19**." }],
          theorie: "Of: 4 + 5 = 9, en dan 10 + 9 = 19. Hetzelfde resultaat.",
          niveaus: { basis: "14 is 10 en 4. Reken eerst 4 + 5 uit en zet de 10 er weer bij.", simpeler: "4 + 5 = 9, en 10 + 9 = 19.", nogSimpeler: "19" },
        },
      },
      {
        q: "Tom heeft 9 stickers. Hij krijgt er 4 bij. Hoeveel heeft hij nu?",
        options: ["13","12","14","5"],
        answer: 0,
        wrongHints: [null, "Te weinig — je hebt 3 erbij geteld, maar de som vraagt om 4.", "Te veel — je hebt 5 erbij geteld, maar de som vraagt om 4.", "Dat is 9 - 4 — maar Tom krijgt er stickers bij."],
        uitlegPad: {
          stappen: [{ titel: "Erbij krijgen = plus", tekst: "Tom krijgt er 4 bij, dus het is een plus-som. 9 + 4 = 9 + 1 + 3 = 10 + 3 = **13**." }],
          theorie: "Let op de woorden in het verhaal: 'krijgt erbij' is een plus-som, 'geeft weg' of 'eet op' is een min-som.",
          niveaus: { basis: "Erbij krijgen is een plus-som: 9 + 4.", simpeler: "9 + 1 = 10, en dan nog 3 erbij: 13.", nogSimpeler: "13" },
        },
      },
      {
        q: "Welk getal komt **het eerst** in de telrij?",
        options: ["13","17","15","19"],
        answer: 0,
        wrongHints: [null, "Tel vanaf 10: kom je 17 eerst tegen, of een ander getal?", "Tel vanaf 10: kom je 15 eerst tegen, of een ander getal?", "Dat getal komt juist het laatst van de vier."],
        uitlegPad: {
          stappen: [{ titel: "Tellen 11-20", tekst: "De telrij: 11, 12, **13**, 14, 15, 16, 17, 18, 19, 20. Van 13, 15, 17 en 19 kom je **13** het eerst tegen." }],
          niveaus: { basis: "Het getal dat je het eerst zegt als je telt, komt het eerst in de telrij.", simpeler: "Tel maar vanaf 10: 11, 12, 13, 14 … Welk van de vier getallen zeg je het eerst?", nogSimpeler: "13" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**8 + 4** = ?",
        options: ["12", "11", "13", "14"],
        answer: 0,
        wrongHints: [null, "Te weinig — maak eerst 10 en tel dan verder.", "Te veel — dat is 8 + 5.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Maak eerst 10",
              tekst: "8 + 4 → splits 4 in 2 + 2. 8 + 2 = 10. 10 + 2 = **12**.",
            },
          ],
          niveaus: {
            basis: "8 + 4 = 12.",
            simpeler: "8 + 2 = 10, 10 + 2 = 12.",
            nogSimpeler: "12",
          },
        },
      },
      {
        q: "**13 + 4** = ?",
        options: ["17", "16", "18", "9"],
        answer: 0,
        wrongHints: [null, "Te weinig — reken eerst 3 + 4 uit.", null, "Dat is 13 - 4."],
        uitlegPad: {
          stappen: [
            {
              titel: "Splits 13",
              tekst: "13 = 10 + 3. Dus 13 + 4 = 10 + 3 + 4 = 10 + 7 = **17**.",
            },
          ],
          niveaus: {
            basis: "13 + 4 = 17.",
            simpeler: "3 + 4 = 7, en 10 + 7 = 17.",
            nogSimpeler: "17",
          },
        },
      },
      {
        q: "In de klas zitten 9 jongens en 6 meisjes. Hoeveel kinderen zijn dat samen?",
        options: ["15", "14", "16", "3"],
        answer: 0,
        wrongHints: [null, "Te weinig — maak eerst 10: 9 + 1.", null, "Samen = erbij, niet eraf."],
        uitlegPad: {
          stappen: [
            {
              titel: "Samen = plus",
              tekst: "9 + 6 → splits 6 in 1 + 5. 9 + 1 = 10. 10 + 5 = **15**.",
            },
          ],
          niveaus: {
            basis: "9 + 6 = 15 kinderen.",
            simpeler: "9 + 1 = 10, 10 + 5 = 15.",
            nogSimpeler: "15",
          },
        },
      },
      {
        q: "Hoe reken je **8 + 6** handig uit?",
        options: ["8 + 2 + 4", "8 + 3 + 4", "8 + 1 + 6", "8 + 6 + 2"],
        answer: 0,
        wrongHints: [null, "Reken na: zijn 3 en 4 samen 6?", null, "Dan doe je er te veel bij."],
        uitlegPad: {
          stappen: [
            {
              titel: "Splits het tweede getal",
              tekst: "Splits 6 in 2 + 4. 8 + 2 = 10. 10 + 4 = **14**. Dus 8 + 6 = 8 + 2 + 4.",
            },
          ],
          niveaus: {
            basis: "8 + 6 = 8 + 2 + 4 = 14.",
            simpeler: "8 + 2 = 10, en dan nog 4 erbij.",
            nogSimpeler: "8 + 2 + 4",
          },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — sommen door elkaar",
    explanation:
      "Mix van plus + min tot 20. Geen tijdslimiet — denk rustig na.\n\nVeel succes!",
    checks: [
      {
        q: "**6 + 7** = ?",
        options: ["13","12","14","11"],
        answer: 0,
        wrongHints: [null, "Te weinig — je hebt 6 bij 6 opgeteld, maar de som vraagt om 7.", "Te veel — je hebt 8 bij 6 opgeteld, maar de som vraagt om 7.", "Te weinig — je hebt 5 bij 6 opgeteld, maar de som vraagt om 7."],
        uitlegPad: {
          stappen: [{ titel: "Maak 10", tekst: "6 + 7 = 6 + 4 + 3 = 10 + 3 = **13**." }],
          niveaus: { basis: "Maak eerst 10: 6 + 4 = 10. Dan nog 3 erbij.", simpeler: "Tel vanaf 6 nog 7 verder: 7, 8, 9, 10, 11, 12, 13.", nogSimpeler: "13" },
        },
      },
      {
        q: "**17 - 9** = ?",
        options: ["8","9","7","10"],
        answer: 0,
        wrongHints: [null, "Te veel — je hebt te weinig afgetrokken.", "Te weinig — je hebt te veel afgetrokken.", "Te veel — je hebt 7 afgetrokken in plaats van 9."],
        uitlegPad: {
          stappen: [{ titel: "Familie-som", tekst: "17 - 9 = **8** (want 9 + 8 = 17). Of: 17 - 7 = 10, 10 - 2 = 8." }],
          niveaus: { basis: "Haal eerst 7 weg: 17 - 7 = 10. Dan nog 2 weg.", simpeler: "Denk aan de plus-som: 9 + ? = 17. Tel vanaf 9 door tot 17.", nogSimpeler: "8" },
        },
      },
      {
        q: "Hoeveel is **5 + 5 + 5**?",
        options: ["15","10","20","12"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 5+5.", "Te veel — 5+5+5+5.", "Tel in sprongen van 5: 5, 10, ... kom je dan op 12 uit?"],
        uitlegPad: {
          stappen: [{ titel: "Driemaal vijf", tekst: "5 + 5 = 10. 10 + 5 = **15**. Drie keer 5 = 15. Dit ga je later '3 × 5' noemen — vermenigvuldigen!" }],
          niveaus: { basis: "Doe het in twee stappen: eerst 5 + 5, dan nog 5 erbij.", simpeler: "Tel in sprongen van 5: 5, 10, 15.", nogSimpeler: "15" },
        },
      },
      {
        q: "Anna heeft 12 snoepjes. Ze eet er 4 op. Hoeveel heeft ze nog over?",
        options: ["8","6","9","10"],
        answer: 0,
        wrongHints: [null, "Te weinig — je hebt te veel afgetrokken.", "Te veel — je hebt 3 afgetrokken in plaats van 4.", "Te veel — je hebt 2 afgetrokken in plaats van 4."],
        uitlegPad: {
          stappen: [{ titel: "Opeten = min", tekst: "'Eet op' → min-som. 12 - 4 = 12 - 2 - 2 = 10 - 2 = **8**." }],
          niveaus: { basis: "Opeten is eraf halen. Dus je rekent 12 - 4.", simpeler: "Haal eerst 2 weg: 12 - 2 = 10. Dan nog 2 weg: 10 - 2 = 8.", nogSimpeler: "8" },
        },
      },
      {
        q: "Welk getal is **dubbel zo veel** als 6?",
        options: ["12","8","10","16"],
        answer: 0,
        wrongHints: [null, "Dat is het dubbele van 4.", "Dat is het dubbele van 5.", "Dat is het dubbele van 8."],
        uitlegPad: {
          stappen: [{ titel: "Dubbele 6", tekst: "Dubbele = 2x. 6 + 6 = **12**. Of: 2 × 6 = 12 (vermenigvuldigen later)." }],
          niveaus: { basis: "Dubbel zo veel betekent: nog een keer hetzelfde erbij. Dus 6 + 6.", simpeler: "Zes en nog eens zes: 6 + 6 = 12.", nogSimpeler: "12" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**9 + 8** = ?",
        options: ["17", "16", "18", "1"],
        answer: 0,
        wrongHints: [null, "Te weinig — maak eerst 10 en tel dan verder.", null, "Dat is 9 - 8."],
        uitlegPad: {
          stappen: [
            {
              titel: "Maak 10",
              tekst: "9 + 8 = 9 + 1 + 7 = 10 + 7 = **17**.",
            },
          ],
          niveaus: {
            basis: "Maak eerst 10: 9 + 1 = 10. Dan nog 7 erbij.",
            simpeler: "9 + 1 = 10, en 10 + 7 = 17.",
            nogSimpeler: "17",
          },
        },
      },
      {
        q: "Er zitten 14 vogels in een boom. Er vliegen er 6 weg. Hoeveel vogels zitten er nog?",
        options: ["8", "20", "9", "7"],
        answer: 0,
        wrongHints: [null, "Wegvliegen is eraf, niet erbij.", null, "Te weinig — tel nog eens precies 6 terug."],
        uitlegPad: {
          stappen: [
            {
              titel: "Wegvliegen = min",
              tekst: "14 - 6 = 14 - 4 - 2 = 10 - 2 = **8**.",
            },
          ],
          niveaus: {
            basis: "Wegvliegen is eraf halen. Dus je rekent 14 - 6.",
            simpeler: "Haal eerst 4 weg: 14 - 4 = 10. Dan nog 2 weg: 10 - 2 = 8.",
            nogSimpeler: "8",
          },
        },
      },
      {
        q: "**11 + 7** = ?",
        options: ["18", "17", "19", "4"],
        answer: 0,
        wrongHints: [null, "Te weinig — reken eerst 1 + 7 uit.", null, "Dat is 11 - 7."],
        uitlegPad: {
          stappen: [
            {
              titel: "Splits 11",
              tekst: "11 = 10 + 1. Dus 11 + 7 = 10 + 1 + 7 = 10 + 8 = **18**.",
            },
          ],
          niveaus: {
            basis: "11 is 10 en 1. Reken eerst 1 + 7 uit en zet de 10 er weer bij.",
            simpeler: "1 + 7 = 8, en 10 + 8 = 18.",
            nogSimpeler: "18",
          },
        },
      },
      {
        q: "Welke som heeft als uitkomst **10**?",
        options: ["15 - 5", "15 - 4", "6 + 5", "12 - 3"],
        answer: 0,
        wrongHints: [null, "Reken na: 15 - 4 = ?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Reken ze na",
              tekst: "15 - 5 = **10**. 15 - 4 = 11. 6 + 5 = 11. 12 - 3 = 9.",
            },
          ],
          niveaus: {
            basis: "15 - 5 = 10.",
            simpeler: "15 = 10 + 5. Haal je de 5 weg, dan blijft 10.",
            nogSimpeler: "15 - 5",
          },
        },
      },
    ],
  },
  // F. Speelse oefenronde (Mark 11 aug: "de laagste groepen zien weinig
  // plaatjes — maak het leuker met plaatjes, kleuren of geluiden").
  // jong-modus: telbare emoji bij elke som, confetti + geluidje bij goed,
  // 🔊-knop leest de som voor. Stoppen mag altijd.
  {
    title: "Sommen-feestje!",
    explanation:
      "Nu ben je er klaar voor: **10 sommen** met plaatjes!\n\n" +
      "• Je ziet de som ook als **plaatjes** — tel maar mee!\n" +
      "• Kun je nog niet zo snel lezen? Druk op **🔊** en de som wordt voorgelezen.\n" +
      "• In één keer goed → ✔ en een klein feestje. Mis? Dan komt de som straks nog een keertje terug.\n\n" +
      "Genoeg gedaan? Stoppen mag altijd.",
    interactiveComponent: makeRekenOefenRonde({ soort: ["optellen", "aftrekken"], aantal: 10, totMax: 20, emoji: "🎈", meervoud: "sommen", jong: true }),
    checks: [
      { q: "7 + 6 = ?", options: ["13", "12", "14", "11"], answer: 0, wrongHints: [null, "Te weinig — tel nog eens verder vanaf 7.", "Te veel — tel nog eens precies.", "Tel nog eens rustig."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const getallenTot20Po = {
  id: "getallen-tot-20-po",
  title: "Getallen + sommen tot 20 (groep 3-4)",
  emoji: "🔢",
  level: "groep3-5",
  subject: "rekenen",
  referentieNiveau: "po-1F",
  sloThema: "Rekenen — getalbegrip + optellen/aftrekken tot 20 onderbouw",
  prerequisites: [],
  intro:
    "Eerste rekensommen — getallen 0 tot 20, plus en min, splitsen + dubbele + truc 'eerst tien maken'. Voor groep 3-4. ~15 min.",
  triggerKeywords: [
    "getallen tot 20", "sommen", "optellen", "aftrekken",
    "splitsen", "dubbele", "telrij",
    "groep 3", "groep 4", "rekenen basis",
    "verschil",
  ],
  chapters,
  steps,
};

export default getallenTot20Po;
