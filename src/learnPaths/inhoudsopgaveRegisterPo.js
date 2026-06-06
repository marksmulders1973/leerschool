// Leerpad: Inhoudsopgave & register gebruiken — groep 7-8 PO.
// Doorstroomtoets-onderdeel STUDIEVAARDIGHEDEN (sloThema-prefix bepaalt pijler).
// Snel iets opzoeken in een boek: inhoudsopgave (voor) vs register (achter).
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "De inhoudsopgave", emoji: "📑", from: 0, to: 0 },
  { letter: "B", title: "Het register", emoji: "🔎", from: 1, to: 1 },
  { letter: "C", title: "Inhoudsopgave of register?", emoji: "🤔", from: 2, to: 2 },
  { letter: "D", title: "In het echt: snel opzoeken", emoji: "📚", from: 3, to: 3 },
];

const steps = [
  // ─── A. Inhoudsopgave ─────────────────────────────────────
  {
    title: "De inhoudsopgave",
    explanation:
      "De **inhoudsopgave** staat **vooraan** in een boek. Het is een lijst van alle **hoofdstukken** met het **paginanummer** waar ze beginnen, op **volgorde van het boek** (hoofdstuk 1, 2, 3…).\n\n" +
      "Voorbeeld:\n\n" +
      "| Hoofdstuk | Pagina |\n" +
      "|---|---|\n" +
      "| 1. Planten | 6 |\n" +
      "| 2. Dieren | 24 |\n" +
      "| 3. Het weer | 40 |\n\n" +
      "Zo zie je in één oogopslag waar elk hoofdstuk over gaat en op welke bladzijde het begint.",
    checks: [
      {
        q: "Waar in een boek staat de inhoudsopgave meestal?",
        options: ["vooraan", "achteraan", "precies in het midden", "op de kaft"],
        answer: 0,
        wrongHints: [null, "Achteraan staat juist het register.", "Niet in het midden.", "Op de kaft staat de titel, niet de inhoudsopgave."],
        uitlegPad: {
          stappen: [{ titel: "Vooraan", tekst: "De inhoudsopgave staat vooraan in het boek, vóór hoofdstuk 1." }],
          niveaus: {
            basis: "De inhoudsopgave staat vooraan.",
            simpeler: "Voor of achter in het boek staat de hoofdstukkenlijst?",
            nogSimpeler: "Staat de inhoudsopgave vooraan?",
          },
        },
      },
      {
        q: "Wat staat er in een inhoudsopgave?",
        options: [
          "de hoofdstukken met hun paginanummers",
          "alle woorden op alfabet",
          "de naam van de schrijver",
          "een samenvatting van het verhaal",
        ],
        answer: 0,
        wrongHints: [null, "Woorden op alfabet staan in het register.", "De schrijver staat voorin, maar dat is niet de inhoudsopgave.", "Een samenvatting is iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Hoofdstukken + pagina", tekst: "De inhoudsopgave noemt de hoofdstukken met de pagina waar ze beginnen." }],
          niveaus: {
            basis: "Hoofdstukken met paginanummers staan in de inhoudsopgave.",
            simpeler: "Welke lijst toont de hoofdstukken en hun pagina?",
            nogSimpeler: "Staan de hoofdstukken in de inhoudsopgave?",
          },
        },
      },
      {
        q: "In de inhoudsopgave staat: 'Hoofdstuk 2. Dieren ... 24'. Waar sla je het boek open om over dieren te lezen?",
        options: ["pagina 24", "pagina 2", "de laatste pagina", "de eerste pagina"],
        answer: 0,
        wrongHints: [null, "De 2 is het hoofdstuknummer, niet de pagina.", "Het hoofdstuk staat niet achteraan.", "Niet vooraan — daar staat hoofdstuk 1."],
        uitlegPad: {
          stappen: [{ titel: "Het paginanummer", tekst: "Achter 'Dieren' staat 24: dat is de pagina waar het hoofdstuk begint." }],
          niveaus: {
            basis: "Hoofdstuk Dieren begint op pagina 24.",
            simpeler: "Welk getal achter 'Dieren' is de pagina?",
            nogSimpeler: "Op welke pagina begint het dieren-hoofdstuk?",
          },
        },
      },
      {
        q: "Op welke volgorde staat de inhoudsopgave?",
        options: ["op volgorde van het boek (hoofdstuk 1, 2, 3…)", "op alfabet", "van duur naar goedkoop", "willekeurig"],
        answer: 0,
        wrongHints: [null, "Alfabetisch is het register, niet de inhoudsopgave.", "Een boek heeft geen prijs-volgorde.", "Het is juist netjes op hoofdstuk-volgorde."],
        uitlegPad: {
          stappen: [{ titel: "Boekvolgorde", tekst: "De inhoudsopgave volgt de volgorde van het boek: eerst hoofdstuk 1, dan 2, dan 3." }],
          niveaus: {
            basis: "De inhoudsopgave staat op hoofdstuk-volgorde.",
            simpeler: "Volgt de inhoudsopgave het boek of het alfabet?",
            nogSimpeler: "Hoofdstuk 1, 2, 3 — is dat boekvolgorde?",
          },
        },
      },
      {
        q: "In de inhoudsopgave staat: 'Hoofdstuk 3. Het weer ... 40'. Op welke pagina begint dat hoofdstuk?",
        options: ["pagina 40", "pagina 3", "pagina 1", "de laatste pagina"],
        answer: 0,
        wrongHints: [null, "De 3 is het hoofdstuknummer, niet de pagina.", "Vooraan staat hoofdstuk 1.", "Het hoofdstuk staat niet achteraan."],
        uitlegPad: {
          stappen: [{ titel: "Het getal achteraan", tekst: "Achter 'Het weer' staat 40: dat is de pagina waar het hoofdstuk begint." }],
          niveaus: {
            basis: "Hoofdstuk 'Het weer' begint op pagina 40.",
            simpeler: "Welk getal is de pagina: 3 of 40?",
            nogSimpeler: "Op welke pagina begint het weer-hoofdstuk?",
          },
        },
      },
      {
        q: "Welk hoofdstuk staat in de inhoudsopgave vlak vóór hoofdstuk 2?",
        options: ["hoofdstuk 1", "hoofdstuk 3", "het register", "het laatste hoofdstuk"],
        answer: 0,
        wrongHints: [null, "Hoofdstuk 3 komt juist ná 2.", "Het register staat niet in de hoofdstukken-rij.", "Dat staat helemaal aan het eind."],
        uitlegPad: {
          stappen: [{ titel: "Boekvolgorde", tekst: "De inhoudsopgave volgt 1, 2, 3… Vlak vóór hoofdstuk 2 staat dus hoofdstuk 1." }],
          niveaus: {
            basis: "Vóór hoofdstuk 2 komt hoofdstuk 1.",
            simpeler: "Welk hoofdstuk komt net vóór 2?",
            nogSimpeler: "1, 2, 3 — wat komt vóór de 2?",
          },
        },
      },
    ],
  },

  // ─── B. Register ──────────────────────────────────────────
  {
    title: "Het register",
    explanation:
      "Het **register** staat **achteraan** in een boek. Het is een lijst van **onderwerpen** op **alfabet**, met de **paginanummers** waar je dat onderwerp kunt vinden.\n\n" +
      "Voorbeeld:\n\n" +
      "| Onderwerp | Pagina's |\n" +
      "|---|---|\n" +
      "| bij | 12, 30 |\n" +
      "| vulkaan | 45, 78 |\n" +
      "| zon | 8 |\n\n" +
      "Handig als je **één bepaald onderwerp** zoekt: je kijkt op alfabet en gaat meteen naar de juiste pagina('s).",
    checks: [
      {
        q: "Waar in een boek staat het register?",
        options: ["achteraan", "vooraan", "in het midden", "op de kaft"],
        answer: 0,
        wrongHints: [null, "Vooraan staat de inhoudsopgave.", "Niet in het midden.", "Op de kaft staat de titel."],
        uitlegPad: {
          stappen: [{ titel: "Achteraan", tekst: "Het register staat achteraan in het boek." }],
          niveaus: {
            basis: "Het register staat achteraan.",
            simpeler: "Voor of achter staat de alfabetische onderwerpenlijst?",
            nogSimpeler: "Staat het register achteraan?",
          },
        },
      },
      {
        q: "Wat staat er in een register?",
        options: [
          "onderwerpen op alfabet met paginanummers",
          "de hoofdstukken op boekvolgorde",
          "de titel van het boek",
          "het hele verhaal",
        ],
        answer: 0,
        wrongHints: [null, "Hoofdstukken op boekvolgorde staan in de inhoudsopgave.", "De titel staat op de kaft.", "Het register is geen verhaal."],
        uitlegPad: {
          stappen: [{ titel: "Onderwerpen op alfabet", tekst: "Het register noemt onderwerpen op alfabet met de pagina's waar ze staan." }],
          niveaus: {
            basis: "Onderwerpen op alfabet + pagina's = register.",
            simpeler: "Welke lijst staat op alfabet met onderwerpen?",
            nogSimpeler: "Staan de onderwerpen op alfabet in het register?",
          },
        },
      },
      {
        q: "In het register staat: 'vulkaan ... 45, 78'. Wat betekenen die getallen?",
        options: [
          "de pagina's waar 'vulkaan' wordt genoemd",
          "het aantal vulkanen",
          "de hoofdstuknummers",
          "het jaartal",
        ],
        answer: 0,
        wrongHints: [null, "Het zijn geen aantallen vulkanen.", "Het zijn pagina's, geen hoofdstukken.", "Het is geen jaartal."],
        uitlegPad: {
          stappen: [{ titel: "Paginanummers", tekst: "Achter 'vulkaan' staan de pagina's (45 en 78) waar het onderwerp behandeld wordt." }],
          niveaus: {
            basis: "45 en 78 zijn de pagina's met 'vulkaan'.",
            simpeler: "Wat vind je op pagina 45 en 78? Iets over vulkanen.",
            nogSimpeler: "Zijn 45 en 78 paginanummers?",
          },
        },
      },
      {
        q: "Op welke volgorde staat een register?",
        options: ["op alfabet", "op boekvolgorde", "op paginanummer", "op grootte"],
        answer: 0,
        wrongHints: [null, "Boekvolgorde is de inhoudsopgave.", "Het is geordend op onderwerp-naam, niet op pagina.", "Grootte speelt geen rol."],
        uitlegPad: {
          stappen: [{ titel: "Alfabetisch", tekst: "Het register staat op alfabet, zodat je een onderwerp snel kunt opzoeken." }],
          niveaus: {
            basis: "Het register staat op alfabet.",
            simpeler: "Volgt het register het alfabet of de hoofdstukken?",
            nogSimpeler: "Staan de onderwerpen van A naar Z?",
          },
        },
      },
      {
        q: "In het register staat: 'bij ... 12, 30'. Op hoeveel pagina's wordt 'bij' genoemd?",
        options: ["2", "12", "30", "42"],
        answer: 0,
        wrongHints: [null, "Dat is het éérste paginanummer, geen aantal.", "Dat is het tweede paginanummer.", "Je hoeft de pagina's niet op te tellen."],
        uitlegPad: {
          stappen: [{ titel: "Tel de paginanummers", tekst: "Er staan twee pagina's genoemd (12 en 30), dus 'bij' komt op 2 pagina's voor." }],
          niveaus: {
            basis: "Twee paginanummers (12 en 30) → 2 pagina's.",
            simpeler: "Hoeveel getallen staan er achter 'bij'?",
            nogSimpeler: "12 en 30 — dat zijn hoeveel pagina's?",
          },
        },
      },
      {
        q: "Welk onderwerp staat in een alfabetisch register het eerst: zon, bij of vulkaan?",
        options: ["bij", "vulkaan", "zon", "ze staan door elkaar"],
        answer: 0,
        wrongHints: [null, "v komt later dan b.", "z is juist de laatste letter.", "Een register staat netjes op alfabet."],
        uitlegPad: {
          stappen: [{ titel: "Op alfabet: b, v, z", tekst: "Beginletters b (bij), v (vulkaan), z (zon). B komt het eerst, dus 'bij' staat vooraan." }],
          niveaus: {
            basis: "'bij' (b) komt het eerst in het alfabet.",
            simpeler: "Welke beginletter komt het vroegst: b, v of z?",
            nogSimpeler: "b, v of z — welke eerst?",
          },
        },
      },
    ],
  },

  // ─── C. Welke gebruik je ──────────────────────────────────
  {
    title: "Inhoudsopgave of register?",
    explanation:
      "Welke gebruik je waarvoor?\n\n" +
      "• **Inhoudsopgave** (voor, op boekvolgorde) — als je wilt weten **welke hoofdstukken** er zijn, of een heel hoofdstuk wilt opzoeken.\n" +
      "• **Register** (achter, op alfabet) — als je **één bepaald onderwerp of woord** snel wilt vinden.\n\n" +
      "Vuistregel: zoek je een **hoofdstuk/thema** → inhoudsopgave. Zoek je een **los onderwerp** (bijv. 'gletsjer') → register.",
    checks: [
      {
        q: "Je wilt snel weten op welke pagina het woord 'gletsjer' wordt uitgelegd. Wat gebruik je?",
        options: ["het register", "de inhoudsopgave", "de kaft", "de titelpagina"],
        answer: 0,
        wrongHints: [null, "De inhoudsopgave geeft hoofdstukken, geen losse woorden.", "Op de kaft staat geen pagina-info.", "De titelpagina helpt niet bij opzoeken."],
        uitlegPad: {
          stappen: [{ titel: "Los onderwerp → register", tekst: "Voor één bepaald woord/onderwerp kijk je in het register (alfabetisch)." }],
          niveaus: {
            basis: "Een los woord opzoeken → register.",
            simpeler: "Zoek je een hoofdstuk of een los woord? Een los woord → register.",
            nogSimpeler: "Waar staan losse onderwerpen op alfabet?",
          },
        },
      },
      {
        q: "Je wilt weten welke hoofdstukken het boek heeft. Wat gebruik je?",
        options: ["de inhoudsopgave", "het register", "de achterflap", "de laatste bladzijde"],
        answer: 0,
        wrongHints: [null, "Het register geeft losse onderwerpen, geen hoofdstuk-overzicht.", "De achterflap geeft een korte beschrijving, geen hoofdstukken.", "Daar staat geen hoofdstuk-overzicht."],
        uitlegPad: {
          stappen: [{ titel: "Hoofdstukken → inhoudsopgave", tekst: "Voor een overzicht van de hoofdstukken kijk je in de inhoudsopgave." }],
          niveaus: {
            basis: "Hoofdstukken-overzicht → inhoudsopgave.",
            simpeler: "Welke lijst toont alle hoofdstukken?",
            nogSimpeler: "Waar staat de hoofdstukkenlijst?",
          },
        },
      },
      {
        q: "Wat is het verschil in volgorde?",
        options: [
          "inhoudsopgave op boekvolgorde, register op alfabet",
          "allebei op alfabet",
          "allebei op boekvolgorde",
          "inhoudsopgave op alfabet, register op boekvolgorde",
        ],
        answer: 0,
        wrongHints: [null, "De inhoudsopgave is niet alfabetisch.", "Het register is wél alfabetisch.", "Het is precies andersom."],
        uitlegPad: {
          stappen: [{ titel: "Voor vs achter", tekst: "Inhoudsopgave (voor) volgt het boek; register (achter) is alfabetisch." }],
          niveaus: {
            basis: "Inhoudsopgave = boekvolgorde; register = alfabet.",
            simpeler: "Welke is alfabetisch: de inhoudsopgave of het register?",
            nogSimpeler: "Het register staat op alfabet — en de inhoudsopgave?",
          },
        },
      },
      {
        q: "Je zoekt in een dik natuurboek álles over 'bijen'. Het snelst kijk je in...",
        options: ["het register", "de inhoudsopgave", "het voorwoord", "de illustraties"],
        answer: 0,
        wrongHints: [null, "Bijen is misschien geen heel hoofdstuk — dan helpt de inhoudsopgave niet.", "Het voorwoord gaat over het boek zelf.", "Plaatjes geven geen pagina-overzicht."],
        uitlegPad: {
          stappen: [{ titel: "Onderwerp → register", tekst: "'Bijen' is een onderwerp; in het register vind je alle pagina's waar bijen voorkomen." }],
          niveaus: {
            basis: "Een onderwerp als 'bijen' zoek je in het register.",
            simpeler: "Staat 'bijen' als los onderwerp in het register of als hoofdstuk?",
            nogSimpeler: "Waar vind je alle pagina's over bijen?",
          },
        },
      },
      {
        q: "Je wilt het hele hoofdstuk over het heelal lezen. Wat gebruik je het best?",
        options: ["de inhoudsopgave", "het register", "de achterflap", "alleen de plaatjes"],
        answer: 0,
        wrongHints: [null, "Het register geeft losse onderwerpen, geen heel hoofdstuk.", "De achterflap geeft maar een korte beschrijving.", "Plaatjes geven geen hoofdstuk-overzicht."],
        uitlegPad: {
          stappen: [{ titel: "Heel hoofdstuk → inhoudsopgave", tekst: "Een heel hoofdstuk zoek je via de inhoudsopgave; daar staat op welke pagina het begint." }],
          niveaus: {
            basis: "Een heel hoofdstuk → inhoudsopgave.",
            simpeler: "Zoek je een hoofdstuk of een los woord? Een hoofdstuk → inhoudsopgave.",
            nogSimpeler: "Waar vind je waar een hoofdstuk begint?",
          },
        },
      },
      {
        q: "Je zoekt alléén de pagina waar het woord 'magneet' wordt uitgelegd. Wat gebruik je?",
        options: ["het register", "de inhoudsopgave", "het voorwoord", "de titelpagina"],
        answer: 0,
        wrongHints: [null, "De inhoudsopgave geeft hoofdstukken, geen losse woorden.", "Het voorwoord gaat over het boek zelf.", "De titelpagina helpt niet bij opzoeken."],
        uitlegPad: {
          stappen: [{ titel: "Los woord → register", tekst: "Eén bepaald woord als 'magneet' zoek je in het register (op alfabet)." }],
          niveaus: {
            basis: "Een los woord → register.",
            simpeler: "Waar staan losse onderwerpen op alfabet?",
            nogSimpeler: "Zoek je 'magneet' in het register of de inhoudsopgave?",
          },
        },
      },
    ],
  },

  // ─── D. In het echt ───────────────────────────────────────
  {
    title: "In het echt — snel opzoeken",
    explanation:
      "Bij de Doorstroomtoets (en bij een spreekbeurt of werkstuk) bespaar je veel tijd door slim op te zoeken:\n\n" +
      "1. **Heel hoofdstuk / thema?** → kijk vooraan in de **inhoudsopgave** en ga naar de juiste pagina.\n" +
      "2. **Eén onderwerp / woord?** → kijk achteraan in het **register** (op alfabet) en ga naar de genoemde pagina('s).\n\n" +
      "Zo hoef je nooit het hele boek door te bladeren.",
    checks: [
      {
        q: "In de inhoudsopgave staat 'Hoofdstuk 5. Het heelal ... 88'. Je wilt dat hoofdstuk lezen. Wat doe je?",
        options: ["naar pagina 88 bladeren", "naar pagina 5 bladeren", "het register lezen", "vooraan beginnen"],
        answer: 0,
        wrongHints: [null, "De 5 is het hoofdstuknummer, niet de pagina.", "Het register heb je hier niet nodig.", "Je hoeft niet alles vanaf het begin te lezen."],
        uitlegPad: {
          stappen: [{ titel: "Naar het paginanummer", tekst: "Achter het hoofdstuk staat 88: blader naar pagina 88." }],
          niveaus: {
            basis: "Hoofdstuk 5 begint op pagina 88 → daar naartoe.",
            simpeler: "Welk getal is de pagina: 5 of 88?",
            nogSimpeler: "Op welke pagina begint hoofdstuk 5?",
          },
        },
      },
      {
        q: "Waarom is een register handig?",
        options: [
          "je vindt snel een onderwerp zonder het hele boek te lezen",
          "het maakt het boek dikker",
          "het vertelt het einde van het verhaal",
          "het staat er voor de sier",
        ],
        answer: 0,
        wrongHints: [null, "Het gaat om sneller vinden, niet om dikte.", "Een register verklapt geen einde.", "Het heeft juist een nuttige functie."],
        uitlegPad: {
          stappen: [{ titel: "Snel vinden", tekst: "Met het register vind je een onderwerp meteen, zonder het hele boek door te bladeren." }],
          niveaus: {
            basis: "Een register helpt je snel een onderwerp te vinden.",
            simpeler: "Bespaart een register je tijd bij het zoeken?",
            nogSimpeler: "Vind je iets sneller mét of zónder register?",
          },
        },
      },
      {
        q: "Je houdt een spreekbeurt over orkanen en gebruikt een dik aardrijkskundeboek. Wat is de slimste eerste stap?",
        options: [
          "in het register zoeken bij 'orkaan'",
          "het hele boek van voor naar achter lezen",
          "alleen naar de plaatjes kijken",
          "de kaft bestuderen",
        ],
        answer: 0,
        wrongHints: [null, "Het hele boek lezen kost veel te veel tijd.", "Plaatjes geven niet alle info.", "De kaft helpt niet bij opzoeken."],
        uitlegPad: {
          stappen: [{ titel: "Register bij 'orkaan'", tekst: "Zoek 'orkaan' op in het register; daar staan meteen de pagina's met die informatie." }],
          niveaus: {
            basis: "Zoek het onderwerp 'orkaan' op in het register.",
            simpeler: "Waar vind je snel de pagina's over orkanen?",
            nogSimpeler: "Helpt het register je 'orkaan' snel te vinden?",
          },
        },
      },
      {
        q: "Waar staat het register en op welke volgorde?",
        options: ["achteraan, op alfabet", "vooraan, op alfabet", "achteraan, op boekvolgorde", "vooraan, op boekvolgorde"],
        answer: 0,
        wrongHints: [null, "Vooraan staat de inhoudsopgave.", "Het register is niet op boekvolgorde.", "Vooraan + boekvolgorde is juist de inhoudsopgave."],
        uitlegPad: {
          stappen: [{ titel: "Achter + alfabet", tekst: "Het register staat achteraan en is alfabetisch geordend." }],
          niveaus: {
            basis: "Register: achteraan, op alfabet.",
            simpeler: "Waar staat het register, en hoe is het geordend?",
            nogSimpeler: "Achteraan en op alfabet — klopt dat voor het register?",
          },
        },
      },
      {
        q: "In het register staat: 'rivier ... 22, 56'. Waar kijk je voor informatie over rivieren?",
        options: ["pagina 22 en pagina 56", "pagina 2", "hoofdstuk 22", "alleen pagina 1"],
        answer: 0,
        wrongHints: [null, "Er staan twee volle paginanummers, niet pagina 2.", "Het zijn pagina's, geen hoofdstuknummers.", "Er worden twee pagina's genoemd."],
        uitlegPad: {
          stappen: [{ titel: "Naar de genoemde pagina's", tekst: "Achter 'rivier' staan pagina 22 en 56. Daar vind je de informatie over rivieren." }],
          niveaus: {
            basis: "Informatie over rivieren staat op pagina 22 en 56.",
            simpeler: "Welke twee pagina's staan er achter 'rivier'?",
            nogSimpeler: "22 en 56 — zijn dat de pagina's?",
          },
        },
      },
      {
        q: "Je hebt nog 5 minuten en wilt snel één feit over de maan vinden in een dik boek. Wat doe je?",
        options: [
          "in het register zoeken bij 'maan'",
          "het hele boek van voor tot achter lezen",
          "bij het voorwoord beginnen",
          "alleen de kaft bekijken",
        ],
        answer: 0,
        wrongHints: [null, "Het hele boek lezen kost veel te veel tijd.", "Het voorwoord gaat over het boek, niet over de maan.", "De kaft helpt niet bij opzoeken."],
        uitlegPad: {
          stappen: [{ titel: "Register → snel", tekst: "Met het register vind je meteen de pagina('s) over 'maan', zonder te bladeren." }],
          niveaus: {
            basis: "Zoek 'maan' op in het register voor de snelste route.",
            simpeler: "Wat is sneller: het register of het hele boek lezen?",
            nogSimpeler: "Vind je 'maan' sneller via het register?",
          },
        },
      },
      {
        q: "Wat staat vooraan in het boek, op volgorde van de hoofdstukken?",
        options: ["de inhoudsopgave", "het register", "een onderwerpenlijst op alfabet", "de laatste bladzijde"],
        answer: 0,
        wrongHints: [null, "Het register staat juist achteraan.", "Een alfabetische onderwerpenlijst is het register (achteraan).", "Dat staat helemaal aan het eind."],
        uitlegPad: {
          stappen: [{ titel: "Voor + boekvolgorde", tekst: "De inhoudsopgave staat vooraan en volgt de volgorde van de hoofdstukken." }],
          niveaus: {
            basis: "Vooraan + op hoofdstuk-volgorde = de inhoudsopgave.",
            simpeler: "Welke lijst staat vooraan op boekvolgorde?",
            nogSimpeler: "Is de inhoudsopgave vooraan op boekvolgorde?",
          },
        },
      },
    ],
  },
];

export default {
  id: "inhoudsopgave-register-po",
  title: "Inhoudsopgave & register gebruiken",
  subject: "studievaardigheden",
  level: "groep7-8",
  sloThema: "studievaardigheden-register",
  chapters,
  steps,
  prerequisites: [],
};
