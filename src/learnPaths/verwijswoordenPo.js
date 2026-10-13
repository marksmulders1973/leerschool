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
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*Mijn buurman staat in de tuin. Hij harkt de bladeren bij elkaar.* Naar wie verwijst 'Hij'?",
        options: ["mijn buurman", "de tuin", "de bladeren", "niemand"],
        answer: 0,
        wrongHints: [null, "Kan een tuin harken? Wie doet dat wel?", null, "Kijk nog eens in de zin ervóór."],
        uitlegPad: {
          stappen: [
            {
              titel: "Wie harkt er?",
              tekst: "'Hij' is iemand die aan het harken is. In de zin ervoor staat 'mijn buurman'. 'Hij' verwijst dus naar de buurman.",
            },
          ],
          niveaus: {
            basis: "'Hij' verwijst naar de persoon in de zin ervoor: de buurman.",
            simpeler: "Wie staat er in de tuin en kan harken?",
            nogSimpeler: "Wie kan er harken: een persoon of een tuin?",
          },
        },
      },
      {
        q: "*Noor heeft een nieuwe pen. Die schrijft heel mooi.* Welk woord is het verwijswoord?",
        options: ["Die", "pen", "Noor", "schrijft"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het ding waar het verwijswoord naar wijst, niet het verwijswoord zelf.",
          null,
          "Dat zegt wat er gebeurt; het wijst nergens naar terug.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Welk woordje wijst terug?",
              tekst: "In de tweede zin staat 'Die' in plaats van 'de pen'. 'Die' is dus het verwijswoord; het wijst terug naar de pen.",
            },
          ],
          niveaus: {
            basis: "'Die' is het verwijswoord; het verwijst naar de pen.",
            simpeler: "Welk woordje staat in de tweede zin in plaats van 'de pen'?",
            nogSimpeler: "Welk kort woordje vervangt 'de pen'?",
          },
        },
      },
      {
        q: "In welk stukje staat een verwijswoord?",
        options: [
          "Lotte zoekt de hamster. Ze vindt hem onder de bank.",
          "Lotte zoekt de hamster. Lotte vindt de hamster onder de bank.",
          "De hamster is wit. De kooi staat in de kamer.",
          "Bram koopt voer. Bram geeft de hamster eten.",
        ],
        answer: 0,
        wrongHints: [null, "Hier worden 'Lotte' en 'de hamster' gewoon nog een keer genoemd.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Herhalen of terugwijzen?",
              tekst: "Een verwijswoord is een kort woord dat terugwijst, zodat je een woord niet hoeft te herhalen. In 'Ze vindt hem onder de bank' wijst 'Ze' terug naar Lotte en 'hem' naar de hamster.",
            },
          ],
          niveaus: {
            basis: "'Ze' en 'hem' zijn verwijswoorden: ze wijzen terug naar Lotte en de hamster.",
            simpeler: "In welk stukje staan korte woordjes zoals 'ze' of 'hem' in plaats van een naam?",
            nogSimpeler: "Waar staat 'ze' of 'hem'?",
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
      "• **zij / ze** — een vrouw of meerdere; **haar** — een vrouw: *Lisa → zij.*\n" +
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
        options: ["het boek", "Lisa", "spannend", "niemand"],
        answer: 0,
        wrongHints: [null, "Lisa is een persoon; 'het' is hier een ding.", "Dat is hoe ze het vindt, geen ding.", "Er wordt wél iets genoemd: kijk in de zin ervoor."],
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
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*Het konijn zit in het hok. Het eet een blaadje sla.* Waar verwijst 'Het' in de tweede zin naar?",
        options: ["het konijn", "het hok", "de sla", "niemand"],
        answer: 0,
        wrongHints: [null, "Kan een hok iets eten?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat eet er?",
              tekst: "Een konijn eet sla. 'Het' verwijst naar het konijn, een 'het'-woord.",
            },
          ],
          niveaus: {
            basis: "'Het' verwijst naar het konijn.",
            simpeler: "Wat zit er in het hok en eet een blaadje sla?",
            nogSimpeler: "Wie eet er: het konijn of het hok?",
          },
        },
      },
      {
        q: "Welk woord past op de lege plek? *Het boek ligt op tafel. ___ is erg dik.*",
        options: ["Het", "Hij", "Zij", "Hem"],
        answer: 0,
        wrongHints: [null, "'Hij' past bij een man of een 'de'-woord. Wat voor woord is 'boek'?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "'het'-woord → het",
              tekst: "Je zegt 'het boek'. Bij een 'het'-woord past het verwijswoord 'het': Het boek ligt op tafel. Het is erg dik.",
            },
          ],
          niveaus: {
            basis: "Bij 'het boek' hoort het verwijswoord 'het'.",
            simpeler: "Zeg je 'de boek' of 'het boek'?",
            nogSimpeler: "Het boek … ___ is dik. Welk woordje past bij 'het boek'?",
          },
        },
      },
      {
        q: "*De juf geeft Bas een sticker. Ze plakt hem op zijn schrift.* Naar wie verwijst 'Ze'?",
        options: ["de juf", "Bas", "de sticker", "het schrift"],
        answer: 0,
        wrongHints: [null, "Bas is een jongen. Past 'ze' bij hem?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wie plakt er?",
              tekst: "'Ze' is hier één vrouw. In de zin ervoor staat 'de juf'. De juf plakt de sticker op het schrift.",
            },
          ],
          niveaus: {
            basis: "'Ze' verwijst naar de juf.",
            simpeler: "Wie geeft er een sticker en plakt die op het schrift?",
            nogSimpeler: "Wie is een vrouw: de juf of Bas?",
          },
        },
      },
      {
        q: "*De bal rolt de straat op. ___ stuitert tegen een auto.* Welk woord past op de lege plek?",
        options: ["Hij", "Het", "Haar", "Hem"],
        answer: 0,
        wrongHints: [null, "Zeg je 'het bal' of 'de bal'?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "'de'-woord → hij",
              tekst: "'De bal' is een 'de'-woord. Bij een 'de'-woord zoals 'de stoel' of 'de bal' past 'hij' vooraan in de zin.",
            },
          ],
          niveaus: {
            basis: "Bij 'de bal' hoort 'hij'.",
            simpeler: "Is 'bal' een 'de'-woord of een 'het'-woord?",
            nogSimpeler: "De stoel → hij. De bal → …?",
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
      "**Deze/dit** gebruik je vaak voor iets dat dichtbij of net genoemd is; **die/dat** voor iets verder weg.",
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
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*Ik heb een nieuw spel gekregen. ___ is heel leuk.* Welk woord past op de lege plek?",
        options: ["Dat", "Die", "Hem", "Zij"],
        answer: 0,
        wrongHints: [null, "Zeg je 'de spel' of 'het spel'?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "'het'-woord → dat",
              tekst: "'Het spel' is een 'het'-woord. Bij een 'het'-woord past 'dat' (of 'dit').",
            },
          ],
          niveaus: {
            basis: "Bij 'het spel' past 'dat'.",
            simpeler: "Is 'spel' een 'de'-woord of een 'het'-woord?",
            nogSimpeler: "Het touw → dat. Het spel → …?",
          },
        },
      },
      {
        q: "Welk stukje is goed?",
        options: [
          "Ik zag een mooie vogel. Die zat in de boom.",
          "Ik zag een mooie vogel. Dat zat in de boom.",
          "Ik zag een mooi paard. Die stond in de wei.",
          "Ik zag een mooie vogel. Het zat in de boom.",
        ],
        answer: 0,
        wrongHints: [null, null, "Zeg je 'de paard' of 'het paard'?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Klopt het verwijswoord?",
              tekst: "'De vogel' is een 'de'-woord, dus daar past 'die'. 'Het paard' is een 'het'-woord; daar past 'dat'.",
            },
          ],
          niveaus: {
            basis: "'De vogel' → 'die'. Dat stukje klopt.",
            simpeler: "Bij welk woord hoort 'die': bij een 'de'-woord of bij een 'het'-woord?",
            nogSimpeler: "De vogel → die of dat?",
          },
        },
      },
      {
        q: "*Oma koopt op de markt een meloen. Die is heel zoet.* Waar verwijst 'Die' naar?",
        options: ["de meloen", "de markt", "oma", "zoet"],
        answer: 0,
        wrongHints: [null, "Kan een markt zoet zijn?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is er zoet?",
              tekst: "De meloen is zoet. 'Die' verwijst naar de meloen, een 'de'-woord.",
            },
          ],
          niveaus: {
            basis: "'Die' verwijst naar de meloen.",
            simpeler: "Wat koopt oma dat zoet kan zijn?",
            nogSimpeler: "Wat is zoet: de meloen of de markt?",
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
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*De boer roept zijn koeien. Ze komen meteen naar de stal.* Naar wie verwijst 'Ze'?",
        options: ["de koeien", "de boer", "de stal", "niemand"],
        answer: 0,
        wrongHints: [null, "De boer is één man. Zou je dan 'ze' zeggen?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wie komen er?",
              tekst: "De boer roept, en de koeien komen naar de stal. 'Ze' (meer dan één) verwijst naar de koeien.",
            },
          ],
          niveaus: {
            basis: "'Ze' verwijst naar de koeien.",
            simpeler: "Wie worden er geroepen en komen naar de stal?",
            nogSimpeler: "Wie komen er: de koeien of de stal?",
          },
        },
      },
      {
        q: "*Fenna krijgt een brief van haar tante. Die leest ze drie keer.* Waar verwijst 'Die' naar?",
        options: ["de brief", "haar tante", "Fenna", "drie keer"],
        answer: 0,
        wrongHints: [null, "Kun je een tante lezen?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat leest Fenna?",
              tekst: "Fenna ('ze') leest iets drie keer. Je leest een brief. 'Die' verwijst dus naar de brief.",
            },
          ],
          niveaus: {
            basis: "'Die' verwijst naar de brief.",
            simpeler: "Wat kun je drie keer lezen?",
            nogSimpeler: "Lees je een brief of een tante?",
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
