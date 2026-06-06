// Leerpad: Verwijswoorden in een tekst — groep 7-8 PO.
// Doorstroomtoets-onderdeel taal (begrijpend lezen). Naar wie/wat verwijst
// hij/zij/het/die/dat/deze/dit/hem/haar/ze/daarmee.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Wat is een verwijswoord?", emoji: "🔗", from: 0, to: 0 },
  { letter: "B", title: "Hij, zij, het, hem", emoji: "👉", from: 1, to: 1 },
  { letter: "C", title: "Die, dat, deze, dit", emoji: "📍", from: 2, to: 2 },
  { letter: "D", title: "In een tekst: waar verwijst het naar?", emoji: "📖", from: 3, to: 3 },
];

const steps = [
  // ─── A. Wat is een verwijswoord ───────────────────────────
  {
    title: "Wat is een verwijswoord?",
    explanation:
      "Een **verwijswoord** is een kort woord dat **terugwijst** naar iets of iemand dat al eerder genoemd is. Zo hoef je niet steeds hetzelfde woord te herhalen.\n\n" +
      "*Tom pakt zijn jas. **Hij** heeft het koud.* → 'Hij' verwijst naar **Tom**.\n\n" +
      "Veelvoorkomende verwijswoorden: *hij, zij, het, ze, hem, haar, die, dat, deze, dit, daar, daarmee.*\n\n" +
      "**Hoe vind je waar het naar verwijst?** Vraag je af: over wie of wat gaat dit korte woord? Kijk in de zin(nen) **ervóór** — daar is het meestal genoemd.",
    checks: [
      {
        q: "*Tom pakt zijn jas. Hij heeft het koud.* Naar wie verwijst 'Hij'?",
        options: ["Tom", "de jas", "het koud", "niemand"],
        answer: 0,
        wrongHints: [null, "Een jas heeft het niet koud — wie wel?", "Dat is geen persoon.", "Er is wel degelijk iemand: kijk in de zin ervoor."],
        uitlegPad: {
          stappen: [{ titel: "Wie heeft het koud?", tekst: "'Hij' is een persoon die het koud heeft. In de zin ervoor staat 'Tom'. 'Hij' verwijst dus naar Tom." }],
          niveaus: {
            basis: "'Hij' verwijst naar de persoon ervoor: Tom.",
            simpeler: "Wie pakte er een jas omdat hij het koud had?",
            nogSimpeler: "Over wie gaat het: Tom of de jas?",
          },
        },
      },
      {
        q: "Een verwijswoord is een woord dat...",
        options: [
          "terugwijst naar iets dat eerder genoemd is",
          "altijd vooraan de zin staat",
          "een nieuw onderwerp begint",
          "alleen in vragen voorkomt",
        ],
        answer: 0,
        wrongHints: [null, "Het kan overal in de zin staan.", "Juist niet — het wijst terug naar iets bekends.", "Verwijswoorden staan in alle soorten zinnen."],
        uitlegPad: {
          stappen: [{ titel: "Terugwijzen", tekst: "Een verwijswoord wijst terug naar iets of iemand dat al genoemd is, zodat je het woord niet hoeft te herhalen." }],
          niveaus: {
            basis: "Een verwijswoord wijst terug naar iets dat al genoemd is.",
            simpeler: "Verwijst zo'n woord naar iets nieuws of iets bekends?",
            nogSimpeler: "Wijst een verwijswoord terug of vooruit?",
          },
        },
      },
      {
        q: "*De hond rent door de tuin. Hij blaft hard.* Wat is het verwijswoord?",
        options: ["Hij", "hond", "tuin", "blaft"],
        answer: 0,
        wrongHints: [null, "Dat is waar 'Hij' naar verwijst, niet het verwijswoord zelf.", "Dat is een plaats.", "Dat is een werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Welk woord wijst terug?", tekst: "'Hij' is het korte woord dat terugwijst naar 'de hond'. Dat is het verwijswoord." }],
          niveaus: {
            basis: "'Hij' is het verwijswoord; het verwijst naar de hond.",
            simpeler: "Welk woord vervangt 'de hond' in de tweede zin?",
            nogSimpeler: "Welk woordje staat er in plaats van 'de hond'?",
          },
        },
      },
      {
        q: "Waarom gebruiken we verwijswoorden?",
        options: [
          "om niet steeds hetzelfde woord te herhalen",
          "om de zin langer te maken",
          "om een vraag te stellen",
          "om iets tegen te spreken",
        ],
        answer: 0,
        wrongHints: [null, "Ze maken de tekst juist korter en prettiger.", "Daar dienen ze niet voor.", "Daar dienen ze niet voor."],
        uitlegPad: {
          stappen: [{ titel: "Herhaling voorkomen", tekst: "Met een verwijswoord (hij, die) hoef je 'de hond' niet steeds te herhalen. Dat leest prettiger." }],
          niveaus: {
            basis: "Verwijswoorden voorkomen dat je hetzelfde woord blijft herhalen.",
            simpeler: "Maken ze de tekst prettiger of vervelender om te lezen?",
            nogSimpeler: "Zou je liever 'de hond, de hond, de hond' lezen, of 'hij'?",
          },
        },
      },
      {
        q: "*Sara fietst naar school. Ze is laat.* Naar wie verwijst 'Ze'?",
        options: ["Sara", "de school", "laat", "niemand"],
        answer: 0,
        wrongHints: [null, "Een school fietst niet — wie wel?", "Dat zegt hóé ze is, geen persoon.", "Er is wél iemand: kijk in de zin ervoor."],
        uitlegPad: {
          stappen: [{ titel: "Wie is er laat?", tekst: "'Ze' is een persoon die fietst en laat is. In de zin ervoor staat 'Sara'." }],
          niveaus: {
            basis: "'Ze' verwijst naar de persoon ervoor: Sara.",
            simpeler: "Wie fietst er naar school?",
            nogSimpeler: "Over wie gaat 'ze': Sara of de school?",
          },
        },
      },
      {
        q: "Welk woord is GEEN verwijswoord?",
        options: ["tafel", "hij", "die", "het"],
        answer: 0,
        wrongHints: [null, "Dat is wél een verwijswoord (verwijst naar een man/de-woord).", "Dat is wél een verwijswoord.", "Dat is wél een verwijswoord."],
        uitlegPad: {
          stappen: [{ titel: "Zelfstandig naamwoord vs verwijswoord", tekst: "'Tafel' is een gewoon ding (zelfstandig naamwoord). 'Hij, die, het' wijzen terug naar iets — dat zijn verwijswoorden." }],
          niveaus: {
            basis: "'Tafel' is een ding zelf, geen verwijswoord.",
            simpeler: "Welk woord noemt een ding, in plaats van ernaar terug te wijzen?",
            nogSimpeler: "Drie woorden wijzen terug; welk woord is gewoon een ding?",
          },
        },
      },
    ],
  },

  // ─── B. Hij/zij/het/hem ───────────────────────────────────
  {
    title: "Hij, zij, het, hem",
    explanation:
      "De verwijswoorden **hij, zij (ze), het, hem, haar** verwijzen naar een persoon of ding dat eerder genoemd is.\n\n" +
      "• **hij / hem** — een man of een 'de'-woord: *de stoel → hij.*\n" +
      "• **zij / ze / haar** — een vrouw of meerdere: *Lisa → zij.*\n" +
      "• **het** — een 'het'-woord: *het boek → het.*\n\n" +
      "Let op: in één zin kunnen er twee verwijswoorden staan die naar verschillende dingen wijzen:\n" +
      "*Opa heeft een fiets. **Hij** gebruikt **hem** elke dag.* → 'Hij' = opa, 'hem' = de fiets.",
    checks: [
      {
        q: "*Lisa leest een boek. Zij vindt het spannend.* Naar wie verwijst 'Zij'?",
        options: ["Lisa", "het boek", "spannend", "niemand"],
        answer: 0,
        wrongHints: [null, "Dat is een ding; 'zij' is hier een persoon.", "Dat is geen persoon.", "Er is wél iemand: kijk ervoor."],
        uitlegPad: {
          stappen: [{ titel: "Wie leest en vindt het spannend?", tekst: "'Zij' is een persoon. In de zin ervoor staat 'Lisa'. 'Zij' verwijst dus naar Lisa." }],
          niveaus: {
            basis: "'Zij' verwijst naar de persoon ervoor: Lisa.",
            simpeler: "Wie is er aan het lezen?",
            nogSimpeler: "Over wie gaat 'zij': Lisa of het boek?",
          },
        },
      },
      {
        q: "*Lisa leest een boek. Zij vindt het spannend.* Waar verwijst 'het' naar?",
        options: ["het boek", "Lisa", "spannend", "het lezen"],
        answer: 0,
        wrongHints: [null, "Lisa is een persoon; 'het' is hier een ding.", "Dat is hoe ze het vindt, geen ding.", "Net niet — wat vindt ze spannend?"],
        uitlegPad: {
          stappen: [{ titel: "Wat vindt ze spannend?", tekst: "Ze vindt het boek spannend. 'Het' verwijst naar het boek (een 'het'-woord)." }],
          niveaus: {
            basis: "'Het' verwijst naar het boek.",
            simpeler: "Wat leest Lisa, dat ze spannend vindt?",
            nogSimpeler: "Waar gaat 'het' over: het boek of Lisa?",
          },
        },
      },
      {
        q: "*De auto staat langs de weg. Hij is kapot.* Waar verwijst 'Hij' naar?",
        options: ["de auto", "de weg", "kapot", "niemand"],
        answer: 0,
        wrongHints: [null, "Een weg gaat niet kapot op deze manier — wat wel?", "Dat is geen ding dat kapot is.", "Er is wél iets: kijk ervoor."],
        uitlegPad: {
          stappen: [{ titel: "Wat is er kapot?", tekst: "De auto is kapot. 'Hij' verwijst naar de auto (een 'de'-woord)." }],
          niveaus: {
            basis: "'Hij' verwijst naar de auto.",
            simpeler: "Wat staat er stil omdat het kapot is?",
            nogSimpeler: "Waar gaat 'hij' over: de auto of de weg?",
          },
        },
      },
      {
        q: "*Opa heeft een fiets. Hij gebruikt hem elke dag.* Waar verwijst 'hem' naar?",
        options: ["de fiets", "opa", "elke dag", "gebruikt"],
        answer: 0,
        wrongHints: [null, "Opa is degene die gebruikt (hij), niet wat gebruikt wordt.", "Dat zegt wannéér.", "Dat is een werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Twee verwijswoorden", tekst: "'Hij' = opa (die gebruikt). 'Hem' = de fiets (die gebruikt wórdt). 'Hem' verwijst dus naar de fiets." }],
          niveaus: {
            basis: "'Hem' verwijst naar de fiets; 'hij' naar opa.",
            simpeler: "Wat gebruikt opa elke dag?",
            nogSimpeler: "Wat wordt er gebruikt: opa of de fiets?",
          },
        },
      },
      {
        q: "*De kat ligt op de bank. Hij slaapt lekker.* Waar verwijst 'Hij' naar?",
        options: ["de kat", "de bank", "slaapt", "niemand"],
        answer: 0,
        wrongHints: [null, "Een bank slaapt niet — wat wel?", "Dat is een werkwoord.", "Er is wél een dier: kijk ervoor."],
        uitlegPad: {
          stappen: [{ titel: "Wat slaapt er?", tekst: "De kat slaapt. 'Hij' verwijst naar de kat (een 'de'-woord)." }],
          niveaus: {
            basis: "'Hij' verwijst naar de kat.",
            simpeler: "Wat ligt er lekker te slapen?",
            nogSimpeler: "Waar gaat 'hij' over: de kat of de bank?",
          },
        },
      },
      {
        q: "*Sophie heeft een nieuwe jas. Ze draagt hem vaak.* Waar verwijst 'hem' naar?",
        options: ["de jas", "Sophie", "vaak", "draagt"],
        answer: 0,
        wrongHints: [null, "Sophie is degene die draagt (ze), niet wat gedragen wordt.", "Dat zegt hoe váák.", "Dat is een werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Twee verwijswoorden", tekst: "'Ze' = Sophie (die draagt). 'Hem' = de jas (die gedragen wórdt). 'Hem' verwijst naar de jas." }],
          niveaus: {
            basis: "'Hem' verwijst naar de jas; 'ze' naar Sophie.",
            simpeler: "Wat draagt Sophie vaak?",
            nogSimpeler: "Wat wordt er gedragen: Sophie of de jas?",
          },
        },
      },
    ],
  },

  // ─── C. Die/dat/deze/dit ──────────────────────────────────
  {
    title: "Die, dat, deze, dit",
    explanation:
      "De verwijswoorden **die, dat, deze, dit** verwijzen ook terug naar iets dat genoemd is.\n\n" +
      "• **die / deze** — bij een 'de'-woord: *de film → die / deze film.*\n" +
      "• **dat / dit** — bij een 'het'-woord: *het touw → dat / dit.*\n\n" +
      "*Ik zag een film. **Die** was spannend.* → 'Die' verwijst naar de film.\n" +
      "*Pak het touw. Bind **dat** goed vast.* → 'Dat' verwijst naar het touw.\n\n" +
      "**Deze/dit** gebruik je vaak voor iets dat dichtbij of net genoemd is; **die/dat** voor iets iets verder weg.",
    checks: [
      {
        q: "*Ik heb gisteren een film gezien. Die was echt spannend.* Waar verwijst 'Die' naar?",
        options: ["de film", "gisteren", "spannend", "ik"],
        answer: 0,
        wrongHints: [null, "Dat zegt wannéér, geen ding.", "Dat is hoe het was, geen ding.", "Dat is de kijker, niet wat bekeken is."],
        uitlegPad: {
          stappen: [{ titel: "Wat was er spannend?", tekst: "De film was spannend. 'Die' verwijst naar de film (een 'de'-woord)." }],
          niveaus: {
            basis: "'Die' verwijst naar de film.",
            simpeler: "Wat heb je gezien dat spannend was?",
            nogSimpeler: "Waar gaat 'die' over: de film of gisteren?",
          },
        },
      },
      {
        q: "*Pak het touw uit de kast. Bind dat goed vast.* Waar verwijst 'dat' naar?",
        options: ["het touw", "de kast", "vast", "pak"],
        answer: 0,
        wrongHints: [null, "Een kast bind je niet vast — wat wel?", "Dat is geen ding.", "Dat is een werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Wat moet je vastbinden?", tekst: "Je bindt het touw vast. 'Dat' verwijst naar het touw (een 'het'-woord, dus 'dat')." }],
          niveaus: {
            basis: "'Dat' verwijst naar het touw.",
            simpeler: "Wat moet er goed worden vastgebonden?",
            nogSimpeler: "Bind je het touw of de kast vast?",
          },
        },
      },
      {
        q: "Bij welk woord hoort het verwijswoord 'dat' (in plaats van 'die')?",
        options: ["het huis", "de boom", "de hond", "de tafel"],
        answer: 0,
        wrongHints: [null, "Een 'de'-woord (de boom) krijgt 'die', niet 'dat'.", "Ook een 'de'-woord — dus 'die'.", "'de tafel' is ook een 'de'-woord → 'die'."],
        uitlegPad: {
          stappen: [{ titel: "'het'-woord → dat", tekst: "Bij een 'het'-woord (het huis) past 'dat'. Bij 'de'-woorden (de boom, de hond, de tafel) past 'die'." }],
          niveaus: {
            basis: "'het huis' → 'dat'. 'de'-woorden krijgen 'die'.",
            simpeler: "Welk woord is een 'het'-woord? Daar hoort 'dat' bij.",
            nogSimpeler: "Zeg je 'het huis' of 'de huis'? Dan hoort 'dat' erbij.",
          },
        },
      },
      {
        q: "*Er liggen twee pennen op tafel. Deze is van mij.* Waar verwijst 'Deze' naar?",
        options: ["een pen", "de tafel", "twee", "mij"],
        answer: 0,
        wrongHints: [null, "Het gaat niet over de tafel maar over wat erop ligt.", "Dat is een aantal.", "Dat is de eigenaar, niet het ding."],
        uitlegPad: {
          stappen: [{ titel: "Welk ding is van mij?", tekst: "'Deze' wijst naar één van de pennen — die dichtbij is. 'Deze' verwijst dus naar een pen." }],
          niveaus: {
            basis: "'Deze' verwijst naar een pen.",
            simpeler: "Wat ligt er op tafel waarvan er eentje van jou is?",
            nogSimpeler: "Waar gaat 'deze' over: een pen of de tafel?",
          },
        },
      },
      {
        q: "*Ik kocht een boek. Dit lees ik nu.* Waar verwijst 'Dit' naar?",
        options: ["het boek", "ik", "nu", "kopen"],
        answer: 0,
        wrongHints: [null, "Dat is de lezer, niet wat gelezen wordt.", "Dat zegt wannéér.", "Dat is een werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Wat lees je nu?", tekst: "Je leest het boek. 'Dit' verwijst naar het boek (een 'het'-woord, dus 'dit')." }],
          niveaus: {
            basis: "'Dit' verwijst naar het boek.",
            simpeler: "Wat heb je gekocht en lees je nu?",
            nogSimpeler: "Waar gaat 'dit' over: het boek of nu?",
          },
        },
      },
      {
        q: "Bij welk woord hoort het verwijswoord 'die' (in plaats van 'dat')?",
        options: ["de fiets", "het huis", "het kind", "het raam"],
        answer: 0,
        wrongHints: [null, "Een 'het'-woord krijgt 'dat', niet 'die'.", "Ook een 'het'-woord → 'dat'.", "Ook een 'het'-woord → 'dat'."],
        uitlegPad: {
          stappen: [{ titel: "'de'-woord → die", tekst: "Bij een 'de'-woord (de fiets) past 'die'. Bij 'het'-woorden (het huis, het kind, het raam) past 'dat'." }],
          niveaus: {
            basis: "'de fiets' → 'die'. 'het'-woorden krijgen 'dat'.",
            simpeler: "Welk woord is een 'de'-woord? Daar hoort 'die' bij.",
            nogSimpeler: "Zeg je 'de fiets' of 'het fiets'? Dan hoort 'die' erbij.",
          },
        },
      },
    ],
  },

  // ─── D. In een tekst ──────────────────────────────────────
  {
    title: "In een tekst — waar verwijst het naar?",
    explanation:
      "Bij de Doorstroomtoets moet je aanwijzen **naar wie of wat** een verwijswoord verwijst. Doe het zo:\n\n" +
      "1. **Zoek het verwijswoord** (hij, ze, die, dat, hem, daarmee…).\n" +
      "2. **Kijk in de zin(nen) ervóór**: welke persoon of welk ding past?\n" +
      "3. **Controleer**: klopt het qua persoon/ding en qua 'de'- of 'het'-woord?\n\n" +
      "Soms staan er meerdere personen of dingen; kies degene waar de zin logisch over gaat.",
    checks: [
      {
        q: "*De kinderen spelen in het park. Ze hebben veel plezier.* Naar wie verwijst 'Ze'?",
        options: ["de kinderen", "het park", "plezier", "niemand"],
        answer: 0,
        wrongHints: [null, "Een park heeft geen plezier — wie wel?", "Dat is een gevoel, geen persoon.", "Er zijn wél personen: kijk ervoor."],
        uitlegPad: {
          stappen: [{ titel: "Wie hebben plezier?", tekst: "'Ze' (meervoud) verwijst naar de kinderen, die in het park spelen." }],
          niveaus: {
            basis: "'Ze' verwijst naar de kinderen.",
            simpeler: "Wie zijn er aan het spelen met plezier?",
            nogSimpeler: "Over wie gaat 'ze': de kinderen of het park?",
          },
        },
      },
      {
        q: "*Sanne en Tom koken samen. Zij maken soep.* Naar wie verwijst 'Zij'?",
        options: ["Sanne en Tom", "alleen Sanne", "alleen Tom", "de soep"],
        answer: 0,
        wrongHints: [null, "Het zijn er twee — kijk wie er samen koken.", "Het zijn er twee, niet één.", "Soep is geen persoon."],
        uitlegPad: {
          stappen: [{ titel: "Wie maken samen soep?", tekst: "'Zij' is meervoud en verwijst naar Sanne en Tom samen." }],
          niveaus: {
            basis: "'Zij' verwijst naar Sanne en Tom.",
            simpeler: "Wie koken er samen?",
            nogSimpeler: "Is 'zij' één persoon of allebei?",
          },
        },
      },
      {
        q: "*De leraar pakt het krijtje. Daarmee schrijft hij op het bord.* Waar verwijst 'Daarmee' naar?",
        options: ["het krijtje", "de leraar", "het bord", "schrijven"],
        answer: 0,
        wrongHints: [null, "'Daarmee' is het middel waarmee hij schrijft, niet wie.", "Dat is waaróp hij schrijft, niet waarmee.", "Dat is de handeling, geen voorwerp."],
        uitlegPad: {
          stappen: [{ titel: "Waarmee schrijft hij?", tekst: "Hij schrijft met het krijtje. 'Daarmee' verwijst naar het krijtje." }],
          niveaus: {
            basis: "'Daarmee' verwijst naar het krijtje (het middel).",
            simpeler: "Welk voorwerp gebruikt hij om te schrijven?",
            nogSimpeler: "Waarmee schrijf je op een bord: met het krijtje of met het bord?",
          },
        },
      },
      {
        q: "*Mijn zus heeft een nieuwe telefoon gekocht. Ze is er heel blij mee.* Waar verwijst 'er ... mee' naar?",
        options: ["de telefoon", "mijn zus", "blij", "kopen"],
        answer: 0,
        wrongHints: [null, "Je zus is degene die blij is, niet waar ze blij mee is.", "Dat is het gevoel, geen ding.", "Dat is een werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Waar is ze blij mee?", tekst: "Ze is blij met de telefoon. 'Er … mee' verwijst naar de telefoon." }],
          niveaus: {
            basis: "'Er … mee' verwijst naar de telefoon.",
            simpeler: "Wat heeft ze gekocht waar ze blij mee is?",
            nogSimpeler: "Waar is je zus blij mee: de telefoon of het kopen?",
          },
        },
      },
      {
        q: "*De meisjes zingen in het koor. Ze oefenen elke week.* Naar wie verwijst 'Ze'?",
        options: ["de meisjes", "het koor", "elke week", "zingen"],
        answer: 0,
        wrongHints: [null, "Een koor is de groep/plek; wie oefenen er?", "Dat zegt hoe váák.", "Dat is een werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Wie oefenen er?", tekst: "'Ze' (meervoud) verwijst naar de meisjes, die zingen en oefenen." }],
          niveaus: {
            basis: "'Ze' verwijst naar de meisjes.",
            simpeler: "Wie zingen er en oefenen elke week?",
            nogSimpeler: "Over wie gaat 'ze': de meisjes of het koor?",
          },
        },
      },
      {
        q: "*Tom geeft Lisa een cadeau. Hij heeft het zelf ingepakt.* Waar verwijst 'het' naar?",
        options: ["het cadeau", "Tom", "Lisa", "inpakken"],
        answer: 0,
        wrongHints: [null, "Tom is degene die inpakt (hij), niet wat ingepakt is.", "Lisa krijgt het, maar 'het' is het voorwerp.", "Dat is een werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Wat is er ingepakt?", tekst: "Tom pakte het cadeau in. 'Het' verwijst naar het cadeau ('hij' = Tom)." }],
          niveaus: {
            basis: "'Het' verwijst naar het cadeau.",
            simpeler: "Wat heeft Tom ingepakt?",
            nogSimpeler: "Wat is er ingepakt: Tom of het cadeau?",
          },
        },
      },
      {
        q: "*We gingen naar het strand. Daar bouwden we een zandkasteel.* Waar verwijst 'Daar' naar?",
        options: ["het strand", "het zandkasteel", "wij", "bouwen"],
        answer: 0,
        wrongHints: [null, "Het zandkasteel maakten jullie dáár — 'daar' is de plek.", "'Daar' is een plaats, geen personen.", "Dat is een werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Waar bouwden jullie?", tekst: "'Daar' wijst naar een plaats: het strand. Op het strand bouwden jullie het zandkasteel." }],
          niveaus: {
            basis: "'Daar' verwijst naar de plaats: het strand.",
            simpeler: "Op welke plek bouwden jullie het zandkasteel?",
            nogSimpeler: "Waar gaat 'daar' over: het strand (plek) of het zandkasteel?",
          },
        },
      },
    ],
  },
];

export default {
  id: "verwijswoorden-po",
  title: "Verwijswoorden in een tekst",
  subject: "taal",
  level: "groep7-8",
  sloThema: "taal-verwijswoorden",
  chapters,
  steps,
  prerequisites: [],
};
