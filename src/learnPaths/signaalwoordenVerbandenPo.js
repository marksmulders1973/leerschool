// Leerpad: Signaalwoorden & verbanden in een tekst — groep 7-8 PO.
// Doorstroomtoets-onderdeel taal (begrijpend lezen). Tegenstelling, opsomming,
// oorzaak-gevolg, tijd/volgorde herkennen aan signaalwoorden.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Tegenstelling & opsomming", emoji: "↔️", from: 0, to: 0 },
  { letter: "B", title: "Oorzaak & gevolg", emoji: "➡️", from: 1, to: 1 },
  { letter: "C", title: "Tijd & volgorde", emoji: "⏭️", from: 2, to: 2 },
  { letter: "D", title: "Welk verband in de tekst?", emoji: "📖", from: 3, to: 3 },
];

const steps = [
  // ─── A. Tegenstelling & opsomming ─────────────────────────
  {
    title: "Tegenstelling & opsomming",
    explanation:
      "**Signaalwoorden** zijn woorden die je laten zien hóé twee stukjes tekst met elkaar te maken hebben. Als je ze herkent, begrijp je een tekst veel sneller.\n\n" +
      "**Opsomming** — er komt iets bíj (een rijtje):\n" +
      "*en, ook, daarnaast, bovendien, ten eerste, ten tweede.*\n\n" +
      "**Tegenstelling** — er komt iets tegenovergestelds:\n" +
      "*maar, echter, toch, hoewel, daarentegen.*\n\n" +
      "Voorbeeld tegenstelling: *Ik wilde naar buiten, **maar** het regende.* → het tweede deel botst met het eerste.",
    checks: [
      {
        q: "Welk woord past? *Ik wilde naar buiten, ___ het regende.*",
        options: ["maar", "en", "omdat", "dus"],
        answer: 0,
        wrongHints: [null, "Dat zou er iets bij optellen — terwijl deze twee delen juist botsen.", "Dat geeft een reden — wordt hier een reden gegeven?", "Dat geeft een gevolg."],
        uitlegPad: {
          stappen: [{ titel: "De delen botsen → tegenstelling", tekst: "Je wilde naar buiten, maar het tegenovergestelde gebeurt (het regent). Dat is een tegenstelling: 'maar'." }],
          niveaus: {
            basis: "De twee delen zijn tegengesteld → gebruik een tegenstelling-woord: maar.",
            simpeler: "Het tweede deel gooit roet in het eten. Welk woord past daarbij?",
            nogSimpeler: "… ik wilde buiten spelen, … het regende. Welk woordje botst?",
          },
        },
      },
      {
        q: "Welk woord geeft een **opsomming** aan (er komt iets bij)?",
        options: ["bovendien", "maar", "echter", "hoewel"],
        answer: 0,
        wrongHints: [null, "Dat is juist een tegenstelling.", "Ook een tegenstelling.", "Ook een tegenstelling."],
        uitlegPad: {
          stappen: [{ titel: "Opsomming = erbij", tekst: "'Bovendien' voegt iets toe aan wat er al stond. 'Maar/echter/hoewel' geven juist een tegenstelling." }],
          niveaus: {
            basis: "'Bovendien' telt iets op bij de vorige zin = opsomming.",
            simpeler: "Welk woord betekent ongeveer 'en daar komt nog bij'?",
            nogSimpeler: "Welk woord voegt iets toe in plaats van iets tegenovergestelds?",
          },
        },
      },
      {
        q: "Welk woord past? *Mijn broer is sterk, ___ niet zo snel.*",
        options: ["maar", "en", "want", "dus"],
        answer: 0,
        wrongHints: [null, "Dat zou er gewoon iets bij optellen; hier staat een tegenstelling.", "Dat geeft een reden.", "Dat geeft een gevolg."],
        uitlegPad: {
          stappen: [{ titel: "Sterk ↔ niet snel = tegenstelling", tekst: "Sterk zijn en niet snel zijn botsen een beetje met elkaar. Dat vraagt om 'maar'." }],
          niveaus: {
            basis: "De twee eigenschappen staan tegenover elkaar → 'maar'.",
            simpeler: "Welk woord past tussen twee dingen die botsen?",
            nogSimpeler: "Sterk … niet snel. Welk woordje hoort daar?",
          },
        },
      },
      {
        q: "Welk woord is óók een tegenstelling-woord (net als 'maar')?",
        options: ["echter", "ook", "daarnaast", "eveneens"],
        answer: 0,
        wrongHints: [null, "Dat voegt juist iets toe (opsomming).", "Ook een opsomming-woord.", "Ook een opsomming-woord."],
        uitlegPad: {
          stappen: [{ titel: "Echter = maar", tekst: "'Echter' betekent ongeveer hetzelfde als 'maar': het geeft een tegenstelling aan. De andere woorden voegen juist iets toe." }],
          niveaus: {
            basis: "'Echter' is een tegenstelling-woord, net als 'maar'.",
            simpeler: "Welk woord botst met de vorige zin in plaats van iets toe te voegen?",
            nogSimpeler: "Welk woord lijkt op 'maar'?",
          },
        },
      },
      {
        q: "Welk woord past? *Ik hou van zwemmen ___ van voetballen.*",
        options: ["en", "maar", "omdat", "dus"],
        answer: 0,
        wrongHints: [null, "Dat zou een tegenstelling zijn; hier komt er gewoon iets bij.", "Dat geeft een reden.", "Dat geeft een gevolg."],
        uitlegPad: {
          stappen: [{ titel: "Allebei leuk → opsomming", tekst: "Je houdt van twee dingen; het tweede komt erbij. Dat is een opsomming: 'en'." }],
          niveaus: {
            basis: "Er wordt iets toegevoegd (allebei leuk) → 'en'.",
            simpeler: "Komt er iets bij, of botst het? Het komt erbij.",
            nogSimpeler: "Zwemmen … voetballen — welk woord telt op?",
          },
        },
      },
      {
        q: "Welk woord past? *Hij is aardig ___ behulpzaam.*",
        options: ["en", "maar", "want", "dus"],
        answer: 0,
        wrongHints: [null, "Allebei positief — er botst niets, dus geen tegenstelling.", "Dat geeft een reden.", "Dat geeft een gevolg."],
        uitlegPad: {
          stappen: [{ titel: "Twee pluspunten → opsomming", tekst: "Aardig én behulpzaam zijn allebei positief; het tweede komt erbij. Opsomming: 'en'." }],
          niveaus: {
            basis: "Twee eigenschappen die bij elkaar passen → 'en'.",
            simpeler: "Botsen 'aardig' en 'behulpzaam'? Nee → er komt iets bij.",
            nogSimpeler: "aardig … behulpzaam — welk woordje telt op?",
          },
        },
      },
    ],
  },

  // ─── B. Oorzaak & gevolg ──────────────────────────────────
  {
    title: "Oorzaak & gevolg",
    explanation:
      "Bij **oorzaak en gevolg** is het ene het gevolg van het andere.\n\n" +
      "**Oorzaak/reden** (waaróm) — signaalwoorden:\n" +
      "*omdat, doordat, want, vanwege.*\n" +
      "*De sloot vroor dicht **omdat** het hard vroor.*\n\n" +
      "**Gevolg** (en wat gebeurt er dán) — signaalwoorden:\n" +
      "*daardoor, daarom, dus, zodat.*\n" +
      "*Het vroor hard, **daardoor** vroor de sloot dicht.*\n\n" +
      "**Truc:** kun je 'waarom?' vragen en is het antwoord het andere deel? Dan is het oorzaak-gevolg.",
    checks: [
      {
        q: "Welk woord past? *De wedstrijd ging niet door, ___ het hard regende.*",
        options: ["omdat", "maar", "zodat", "of"],
        answer: 0,
        wrongHints: [null, "Dat is een tegenstelling; hier wordt een reden gegeven.", "Dat geeft een doel, geen reden.", "Dat geeft een keuze."],
        uitlegPad: {
          stappen: [{ titel: "Reden = omdat", tekst: "Waarom ging de wedstrijd niet door? Omdat het regende. 'Omdat' geeft de reden." }],
          niveaus: {
            basis: "Het tweede deel is de reden van het eerste → 'omdat'.",
            simpeler: "Welk woord geeft antwoord op 'waarom ging het niet door?'",
            nogSimpeler: "… niet door, … het regende. Welk woord betekent 'want'?",
          },
        },
      },
      {
        q: "Welk woord past? *Het vroor hard, ___ was de sloot dichtgevroren.*",
        options: ["daardoor", "hoewel", "maar", "of"],
        answer: 0,
        wrongHints: [null, "Dat is een tegenstelling; hier komt juist een gevolg.", "Ook een tegenstelling.", "Dat geeft een keuze."],
        uitlegPad: {
          stappen: [{ titel: "Gevolg = daardoor", tekst: "Het harde vriezen had een gevolg: de sloot vroor dicht. 'Daardoor' wijst op dat gevolg." }],
          niveaus: {
            basis: "Het tweede deel is het gevolg van het eerste → 'daardoor'.",
            simpeler: "Wat is het resultaat van het harde vriezen? Welk woord wijst daarop?",
            nogSimpeler: "Welk woord betekent 'en dat zorgde ervoor dat …'?",
          },
        },
      },
      {
        q: "Welk woord wijst op een **gevolg** (en dus …)?",
        options: ["dus", "omdat", "want", "doordat"],
        answer: 0,
        wrongHints: [null, "Dat geeft juist de reden/oorzaak.", "Ook een reden-woord.", "Ook een oorzaak-woord."],
        uitlegPad: {
          stappen: [{ titel: "Dus = conclusie/gevolg", tekst: "'Dus' trekt een conclusie: er volgt een gevolg. 'Omdat/want/doordat' geven juist de reden ervoor." }],
          niveaus: {
            basis: "'Dus' wijst op het gevolg. De andere woorden geven de oorzaak.",
            simpeler: "Welk woord betekent 'daarom' / 'het resultaat is'?",
            nogSimpeler: "Welk woord komt vlak vóór een conclusie?",
          },
        },
      },
      {
        q: "Welk woord past? *Ik oefen elke dag, ___ ik wil een goed cijfer halen.*",
        options: ["want", "maar", "dus", "toch"],
        answer: 0,
        wrongHints: [null, "Dat is een tegenstelling; hier komt een reden.", "Dat geeft een gevolg, geen reden.", "Ook een tegenstelling."],
        uitlegPad: {
          stappen: [{ titel: "Want geeft de reden", tekst: "Waarom oefen ik elke dag? Want ik wil een goed cijfer. 'Want' geeft de reden." }],
          niveaus: {
            basis: "Het tweede deel is de reden om te oefenen → 'want'.",
            simpeler: "Welk woord geeft antwoord op 'waarom oefen je?'",
            nogSimpeler: "… ik oefen, … ik wil een goed cijfer. Welk woord betekent 'omdat'?",
          },
        },
      },
      {
        q: "Welk woord past? *Ze was moe, ___ ging ze vroeg naar bed.*",
        options: ["daarom", "maar", "hoewel", "of"],
        answer: 0,
        wrongHints: [null, "Dat is een tegenstelling; hier komt een gevolg.", "Ook een tegenstelling.", "Dat geeft een keuze."],
        uitlegPad: {
          stappen: [{ titel: "Moe → vroeg naar bed (gevolg)", tekst: "Het moe-zijn had een gevolg: vroeg naar bed. 'Daarom' wijst op dat gevolg." }],
          niveaus: {
            basis: "Het tweede deel is het gevolg van het eerste → 'daarom'.",
            simpeler: "Wat is het gevolg van moe zijn? Welk woord wijst daarop?",
            nogSimpeler: "Welk woord betekent 'om die reden'?",
          },
        },
      },
      {
        q: "Welk woord geeft een **reden/oorzaak** aan (waaróm)?",
        options: ["doordat", "daardoor", "dus", "daarom"],
        answer: 0,
        wrongHints: [null, "Dat wijst juist op het gevolg.", "Ook een gevolg-woord.", "Ook een gevolg-woord."],
        uitlegPad: {
          stappen: [{ titel: "Doordat = oorzaak", tekst: "'Doordat' geeft de oorzaak/reden. 'Daardoor/dus/daarom' wijzen juist op het gevolg." }],
          niveaus: {
            basis: "'Doordat' geeft de oorzaak; de andere drie geven het gevolg.",
            simpeler: "Welk woord geeft antwoord op 'waarom?' i.p.v. 'en wat dan?'",
            nogSimpeler: "Welk woord lijkt op 'omdat'?",
          },
        },
      },
    ],
  },

  // ─── C. Tijd & volgorde ───────────────────────────────────
  {
    title: "Tijd & volgorde",
    explanation:
      "Sommige signaalwoorden laten de **volgorde in de tijd** zien — wat eerst gebeurt en wat daarna. Handig bij recepten, stappenplannen en verhalen.\n\n" +
      "*eerst → daarna → vervolgens → ten slotte.*\n" +
      "Andere tijdwoorden: *toen, nadat, terwijl, intussen.*\n\n" +
      "**Eerst** = de eerste stap. **Ten slotte** = de láátste stap. **Daarna/vervolgens** = een volgende stap.",
    checks: [
      {
        q: "Welk woord past? *___ deed hij zijn jas aan, daarna pakte hij zijn tas.*",
        options: ["Eerst", "Ten slotte", "Toch", "Omdat"],
        answer: 0,
        wrongHints: [null, "Dat zou de láátste stap zijn, maar dit is het begin.", "Dat is een tegenstelling.", "Dat geeft een reden."],
        uitlegPad: {
          stappen: [{ titel: "De eerste stap", tekst: "Er staat 'daarna' in het tweede deel, dus het eerste deel is de éérste stap: 'Eerst'." }],
          niveaus: {
            basis: "Het is de eerste handeling, gevolgd door 'daarna' → 'Eerst'.",
            simpeler: "Welk woord betekent 'om mee te beginnen'?",
            nogSimpeler: "Wat doe je als állereerste? Welk woord hoort daarbij?",
          },
        },
      },
      {
        q: "Welk woord geeft de **laatste** stap aan?",
        options: ["ten slotte", "eerst", "vervolgens", "daarna"],
        answer: 0,
        wrongHints: [null, "Dat is juist de eerste stap.", "Dat is een tussenstap.", "Ook een tussenstap."],
        uitlegPad: {
          stappen: [{ titel: "Ten slotte = als laatste", tekst: "'Ten slotte' betekent 'als laatste'. 'Eerst' is het begin, 'vervolgens/daarna' zijn tussenstappen." }],
          niveaus: {
            basis: "'Ten slotte' wijst op de laatste stap.",
            simpeler: "Welk woord betekent 'aan het eind'?",
            nogSimpeler: "Welk woord komt bij de allerlaatste stap?",
          },
        },
      },
      {
        q: "Wat laat het woord 'vervolgens' zien?",
        options: ["een volgende stap", "een tegenstelling", "een oorzaak", "een voorbeeld"],
        answer: 0,
        wrongHints: [null, "Dat zou 'maar' of 'echter' zijn.", "Dat zou 'omdat' of 'daardoor' zijn.", "Dat zou 'bijvoorbeeld' zijn."],
        uitlegPad: {
          stappen: [{ titel: "Vervolgens = daarna", tekst: "'Vervolgens' betekent 'daarna' — het wijst op de volgende stap in een reeks." }],
          niveaus: {
            basis: "'Vervolgens' hoort bij volgorde: het is een volgende stap.",
            simpeler: "Komt 'vervolgens' bij tijd/volgorde of bij een tegenstelling?",
            nogSimpeler: "'Vervolgens' lijkt op welk woord: daarna, of maar?",
          },
        },
      },
      {
        q: "Welk woord past? *Meng de bloem en suiker. ___ voeg je de eieren toe.*",
        options: ["Daarna", "Maar", "Omdat", "Hoewel"],
        answer: 0,
        wrongHints: [null, "Dat is een tegenstelling; hier komt gewoon de volgende stap.", "Dat geeft een reden.", "Ook een tegenstelling."],
        uitlegPad: {
          stappen: [{ titel: "Volgende stap in een recept", tekst: "Na het mengen komt de volgende stap. 'Daarna' geeft die volgorde aan." }],
          niveaus: {
            basis: "Het is de volgende stap in het recept → 'Daarna'.",
            simpeler: "Welk woord betekent 'als volgende stap'?",
            nogSimpeler: "Eerst mengen, … de eieren erbij. Welk woord betekent 'vervolgens'?",
          },
        },
      },
      {
        q: "Welk woord past? *We aten eerst soep. ___ kwam het hoofdgerecht.*",
        options: ["Daarna", "Maar", "Omdat", "Hoewel"],
        answer: 0,
        wrongHints: [null, "Dat is een tegenstelling; hier komt de volgende gang.", "Dat geeft een reden.", "Ook een tegenstelling."],
        uitlegPad: {
          stappen: [{ titel: "Volgende stap", tekst: "Na de soep komt de volgende gang. 'Daarna' geeft die volgorde aan." }],
          niveaus: {
            basis: "Het is de volgende stap in de tijd → 'Daarna'.",
            simpeler: "Welk woord betekent 'als volgende'?",
            nogSimpeler: "Eerst soep, … hoofdgerecht. Welk woord betekent 'vervolgens'?",
          },
        },
      },
      {
        q: "Welk woord hoort NIET bij tijd/volgorde?",
        options: ["echter", "eerst", "daarna", "ten slotte"],
        answer: 0,
        wrongHints: [null, "Dat is juist de eerste stap (volgorde).", "Dat is een volgende stap (volgorde).", "Dat is de laatste stap (volgorde)."],
        uitlegPad: {
          stappen: [{ titel: "Echter = tegenstelling", tekst: "'Echter' geeft een tegenstelling, geen volgorde. 'Eerst/daarna/ten slotte' horen wél bij tijd/volgorde." }],
          niveaus: {
            basis: "'Echter' hoort bij tegenstelling, niet bij volgorde.",
            simpeler: "Welk woord betekent 'maar' i.p.v. een stap in de tijd?",
            nogSimpeler: "Drie woorden zijn stappen; welke is dat niet?",
          },
        },
      },
    ],
  },

  // ─── D. Welk verband ──────────────────────────────────────
  {
    title: "Welk verband in de tekst?",
    explanation:
      "Bij de Doorstroomtoets moet je vaak zeggen **welk soort verband** een signaalwoord aangeeft. Onthoud de vier groepen:\n\n" +
      "• **Opsomming** (erbij): en, ook, bovendien.\n" +
      "• **Tegenstelling** (botst): maar, echter, toch.\n" +
      "• **Oorzaak/gevolg** (waarom/daardoor): omdat, want, daardoor, dus.\n" +
      "• **Tijd/volgorde** (wanneer): eerst, daarna, ten slotte.\n\n" +
      "Lees het signaalwoord en vraag je af: voegt het iets toe, botst het, geeft het een reden/gevolg, of een volgorde?",
    checks: [
      {
        q: "*Hij trainde elke dag. Daardoor werd hij steeds beter.* Welk verband geeft 'daardoor' aan?",
        options: ["oorzaak en gevolg", "tegenstelling", "opsomming", "voorbeeld"],
        answer: 0,
        wrongHints: [null, "Er botst hier niets — het een leidt tot het ander.", "Er wordt niets opgesomd.", "Er wordt geen voorbeeld gegeven."],
        uitlegPad: {
          stappen: [{ titel: "Trainen → beter worden", tekst: "Het trainen had een gevolg: hij werd beter. 'Daardoor' wijst op oorzaak en gevolg." }],
          niveaus: {
            basis: "Het een veroorzaakt het ander → oorzaak en gevolg.",
            simpeler: "Leidt het trainen tot iets? Dan is het oorzaak-gevolg.",
            nogSimpeler: "Wat zorgde ervoor dat hij beter werd?",
          },
        },
      },
      {
        q: "*De film was spannend, maar veel te lang.* Welk verband geeft 'maar' aan?",
        options: ["tegenstelling", "oorzaak en gevolg", "opsomming", "tijd/volgorde"],
        answer: 0,
        wrongHints: [null, "Er wordt geen reden of gevolg gegeven.", "Er wordt niets opgeteld.", "Er is geen sprake van volgorde in tijd."],
        uitlegPad: {
          stappen: [{ titel: "Spannend ↔ te lang", tekst: "Spannend (positief) en te lang (negatief) botsen. 'Maar' geeft een tegenstelling." }],
          niveaus: {
            basis: "Twee dingen die botsen → tegenstelling.",
            simpeler: "Is 'spannend' en 'te lang' positief én negatief? Dan botst het.",
            nogSimpeler: "Welk verband hoort bij het woord 'maar'?",
          },
        },
      },
      {
        q: "*Je hebt zonnebrand nodig, bijvoorbeeld op het strand.* Wat doet 'bijvoorbeeld' hier?",
        options: ["het geeft een voorbeeld", "het geeft een tegenstelling", "het geeft een oorzaak", "het geeft een volgorde"],
        answer: 0,
        wrongHints: [null, "Er botst niets.", "Er wordt geen reden gegeven.", "Er is geen sprake van stappen in de tijd."],
        uitlegPad: {
          stappen: [{ titel: "Bijvoorbeeld = voorbeeld", tekst: "'Bijvoorbeeld' kondigt een voorbeeld aan: het strand is een voorbeeld van waar je zonnebrand nodig hebt." }],
          niveaus: {
            basis: "'Bijvoorbeeld' geeft altijd een voorbeeld.",
            simpeler: "Wordt er een voorbeeld genoemd na dit woord?",
            nogSimpeler: "Wat betekent 'bijvoorbeeld'?",
          },
        },
      },
      {
        q: "*Eerst kook je het water, vervolgens doe je de pasta erin.* Welk soort verband is dit?",
        options: ["tijd/volgorde", "tegenstelling", "oorzaak en gevolg", "opsomming"],
        answer: 0,
        wrongHints: [null, "Er botst niets.", "Het een veroorzaakt het ander niet direct — het zijn stappen.", "Het is meer dan een rijtje: het is een vólgorde."],
        uitlegPad: {
          stappen: [{ titel: "Eerst → vervolgens", tekst: "'Eerst' en 'vervolgens' geven de volgorde van stappen aan: dit is een tijd/volgorde-verband." }],
          niveaus: {
            basis: "Stappen na elkaar in de tijd → tijd/volgorde.",
            simpeler: "De woorden 'eerst' en 'vervolgens' horen bij welk verband?",
            nogSimpeler: "Gaat het hier over de volgorde van stappen?",
          },
        },
      },
      {
        q: "*Ik wil een ijsje, en ook patat.* Welk verband geeft 'en ook' aan?",
        options: ["opsomming", "tegenstelling", "oorzaak en gevolg", "tijd/volgorde"],
        answer: 0,
        wrongHints: [null, "Er botst niets — er komt iets bij.", "Er wordt geen reden of gevolg gegeven.", "Er is geen sprake van stappen in de tijd."],
        uitlegPad: {
          stappen: [{ titel: "Erbij = opsomming", tekst: "Bij het ijsje komt patat erbij. 'En ook' telt iets op: dat is een opsomming." }],
          niveaus: {
            basis: "Er wordt iets toegevoegd → opsomming.",
            simpeler: "Komt patat erbij, of botst het met het ijsje? Het komt erbij.",
            nogSimpeler: "Welk verband hoort bij 'en ook'?",
          },
        },
      },
      {
        q: "*Hoewel het regende, gingen we toch wandelen.* Welk verband geeft 'hoewel' aan?",
        options: ["tegenstelling", "opsomming", "oorzaak en gevolg", "voorbeeld"],
        answer: 0,
        wrongHints: [null, "Er wordt niets opgesomd.", "Er wordt geen reden of gevolg gegeven.", "Er wordt geen voorbeeld gegeven."],
        uitlegPad: {
          stappen: [{ titel: "Regen ↔ toch wandelen", tekst: "Je zou bij regen binnen blijven, maar je gaat tóch. Dat botst: 'hoewel' geeft een tegenstelling." }],
          niveaus: {
            basis: "Iets gebeurt tegen de verwachting in → tegenstelling.",
            simpeler: "Past 'regen' en 'toch wandelen' bij elkaar of botst het?",
            nogSimpeler: "'Hoewel' lijkt op welk verband-woord: maar, of en?",
          },
        },
      },
      {
        q: "*De plant ging dood doordat hij geen water kreeg.* Welk verband geeft 'doordat' aan?",
        options: ["oorzaak en gevolg", "tegenstelling", "opsomming", "tijd/volgorde"],
        answer: 0,
        wrongHints: [null, "Er botst niets.", "Er wordt niets opgesomd.", "Er is geen sprake van stappen in de tijd."],
        uitlegPad: {
          stappen: [{ titel: "Geen water → dood", tekst: "Het geen-water-krijgen is de oorzaak van het doodgaan. 'Doordat' wijst op oorzaak en gevolg." }],
          niveaus: {
            basis: "Het een veroorzaakt het ander → oorzaak en gevolg.",
            simpeler: "Waaróm ging de plant dood? Dan is het oorzaak-gevolg.",
            nogSimpeler: "Wat zorgde ervoor dat de plant doodging?",
          },
        },
      },
    ],
  },
];

export default {
  id: "signaalwoorden-verbanden-po",
  title: "Signaalwoorden & verbanden",
  subject: "taal",
  level: "groep7-8",
  sloThema: "taal-signaalwoorden",
  chapters,
  steps,
  prerequisites: [],
};
