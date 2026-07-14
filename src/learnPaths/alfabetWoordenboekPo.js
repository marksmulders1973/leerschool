// Leerpad: Alfabetisch opzoeken & woordenboek — groep 7-8 PO.
// Doorstroomtoets-onderdeel STUDIEVAARDIGHEDEN (sloThema-prefix bepaalt pijler).
// Alfabetische volgorde, op 1e/2e letter zoeken, een woordenboek gebruiken.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Alfabetische volgorde", emoji: "🔤", from: 0, to: 0 },
  { letter: "B", title: "Zoeken op de eerste letter", emoji: "📖", from: 1, to: 1 },
  { letter: "C", title: "Verder dan de eerste letter", emoji: "🔎", from: 2, to: 2 },
  { letter: "D", title: "Een woordenboek gebruiken", emoji: "📚", from: 3, to: 3 },
];

const steps = [
  // ─── A. Alfabetische volgorde ─────────────────────────────
  {
    title: "Alfabetische volgorde",
    explanation:
      "In een woordenboek, register of telefoonlijst staan woorden op **alfabetische volgorde**: van A naar Z.\n\n" +
      "Het alfabet: **A B C D E F G H I J K L M N O P Q R S T U V W X Y Z**.\n\n" +
      "Om woorden te ordenen kijk je naar de **eerste letter**. Beginnen twee woorden met dezelfde letter? Dan kijk je naar de **tweede** letter, en zo verder.\n\n" +
      "Voorbeeld: *aap* komt vóór *kat*, want **a** komt vóór **k** in het alfabet.",
    checks: [
      {
        q: "Welk woord komt het eerst in het alfabet?",
        options: ["appel", "banaan", "citroen", "druif"],
        answer: 0,
        wrongHints: [null, "B komt ná A.", "C komt later.", "D komt nog later."],
        uitlegPad: {
          stappen: [{ titel: "Eerste letters vergelijken", tekst: "a, b, c, d — 'appel' begint met a, de vroegste letter. Dus appel komt eerst." }],
          niveaus: {
            basis: "A komt vooraan in het alfabet, dus 'appel' eerst.",
            simpeler: "Welk woord begint met de vroegste letter?",
            nogSimpeler: "Welke letter komt eerst: a, b, c of d?",
          },
        },
      },
      {
        q: "Welke letter komt direct ná de M?",
        options: ["N", "L", "O", "K"],
        answer: 0,
        wrongHints: [null, "L komt juist vóór M.", "O komt ná N.", "K komt eerder."],
        uitlegPad: {
          stappen: [{ titel: "…K L M N O…", tekst: "In het alfabet volgt na de M de N." }],
          niveaus: {
            basis: "Na M komt N (… L M N O …).",
            simpeler: "Zeg het stukje alfabet op: L, M, …?",
            nogSimpeler: "Welke letter komt na M?",
          },
        },
      },
      {
        q: "Zet op alfabet: kat, aap, muis. Welk woord komt het eerst?",
        options: ["aap", "kat", "muis", "ze zijn gelijk"],
        answer: 0,
        wrongHints: [null, "K komt ná A.", "M komt nog later.", "Ze beginnen met verschillende letters."],
        uitlegPad: {
          stappen: [{ titel: "a vóór k vóór m", tekst: "Eerste letters: a (aap), k (kat), m (muis). A is de vroegste, dus 'aap' eerst." }],
          niveaus: {
            basis: "'aap' begint met a → komt eerst.",
            simpeler: "Welk woord begint met de vroegste letter?",
            nogSimpeler: "a, k of m — welke komt eerst?",
          },
        },
      },
      {
        q: "Welk woord komt het laatst in het alfabet: zon, maan of ster?",
        options: ["zon", "ster", "maan", "ze zijn gelijk"],
        answer: 0,
        wrongHints: [null, "Kijk naar de beginletters: s, m en z — welke komt het laatst in het alfabet?", "S komt vóór z.", "M komt nog eerder."],
        uitlegPad: {
          stappen: [{ titel: "z is de laatste letter", tekst: "Eerste letters: m, s, z. Z komt het laatst in het alfabet, dus 'zon' komt het laatst." }],
          niveaus: {
            basis: "'zon' begint met z, de laatste letter → komt laatst.",
            simpeler: "Welke letter komt het laatst: m, s of z?",
            nogSimpeler: "Welk woord begint met z?",
          },
        },
      },
      {
        q: "Welke letter komt vlak vóór de S?",
        options: ["T", "R", "U", "Q"],
        answer: 1,
        wrongHints: ["T komt juist ná S.", null, "U komt later.", "Q komt eerder dan R."],
        uitlegPad: {
          stappen: [{ titel: "…Q R S T…", tekst: "In het alfabet komt vlak vóór de S de R (… Q R S T …)." }],
          niveaus: {
            basis: "Vóór S komt R (… R S T …).",
            simpeler: "Zeg op: …R, S, T… welke staat vlak vóór S?",
            nogSimpeler: "Welke letter komt net voor S?",
          },
        },
      },
      {
        q: "Zet op alfabet: vis, eend, geit. Welk woord komt het laatst?",
        options: ["eend", "geit", "vis", "ze zijn gelijk"],
        answer: 2,
        wrongHints: ["e komt juist vooraan.", "g komt vóór v.", null, "Ze beginnen met verschillende letters."],
        uitlegPad: {
          stappen: [{ titel: "v komt het laatst", tekst: "Eerste letters: e, g, v. V staat het verst in het alfabet, dus 'vis' komt het laatst." }],
          niveaus: {
            basis: "'vis' (v) staat het verst in het alfabet → komt laatst.",
            simpeler: "Welke beginletter komt het laatst: e, g of v?",
            nogSimpeler: "e, g of v — welke is de laatste?",
          },
        },
      },
    ],
  },

  // ─── B. Eerste letter ─────────────────────────────────────
  {
    title: "Zoeken op de eerste letter",
    explanation:
      "Om een woord op te zoeken, kijk je eerst naar de **eerste letter**. Daar zoek je het deel van het woordenboek op.\n\n" +
      "Het woordenboek is ruwweg verdeeld:\n" +
      "• **Vooraan**: A, B, C, D, E…\n" +
      "• **Midden**: K, L, M, N…\n" +
      "• **Achteraan**: S, T, U, V, W, X, Y, Z.\n\n" +
      "Zo hoef je niet alle bladzijden door: een woord met **W** zoek je meteen achteraan.",
    checks: [
      {
        q: "Bij welke letter staat het woord 'fiets' in het woordenboek?",
        options: ["F", "V", "P", "E"],
        answer: 0,
        wrongHints: [null, "Je zoekt op de geschréven beginletter, en dat is een f.", "Het begint niet met p.", "E is de tweede letter, niet de eerste."],
        uitlegPad: {
          stappen: [{ titel: "Eerste letter", tekst: "'Fiets' begint met de letter f, dus je zoekt het bij de F." }],
          niveaus: {
            basis: "'fiets' begint met f → zoek bij F.",
            simpeler: "Met welke letter begint 'fiets'?",
            nogSimpeler: "Wat is de eerste letter van 'fiets'?",
          },
        },
      },
      {
        q: "Welk woord vind je het eerst in het woordenboek?",
        options: ["appel", "olifant", "tijger", "wolk"],
        answer: 0,
        wrongHints: [null, "O staat verder in het alfabet.", "T staat achteraan.", "W staat helemaal achteraan."],
        uitlegPad: {
          stappen: [{ titel: "Vroegste beginletter", tekst: "a, o, t, w — 'appel' (a) komt het eerst in het woordenboek." }],
          niveaus: {
            basis: "'appel' begint met a → vooraan in het woordenboek.",
            simpeler: "Welke beginletter komt het vroegst?",
            nogSimpeler: "a, o, t of w — welke eerst?",
          },
        },
      },
      {
        q: "Je zoekt het woord 'wolk'. Waar sla je het woordenboek het best open?",
        options: ["achteraan", "vooraan", "precies in het midden", "het maakt niet uit"],
        answer: 0,
        wrongHints: [null, "Vooraan staan de A's en B's, niet de W.", "Het midden is bij K-M; W zit verder.", "Het scheelt veel tijd om op de goede plek te beginnen."],
        uitlegPad: {
          stappen: [{ titel: "W = achteraan", tekst: "De W zit bijna aan het eind van het alfabet, dus 'wolk' staat achteraan in het woordenboek." }],
          niveaus: {
            basis: "W staat achteraan in het alfabet → achteraan zoeken.",
            simpeler: "Komt de W vooraan of achteraan in het alfabet?",
            nogSimpeler: "Waar staat de W: bij het begin of het eind?",
          },
        },
      },
      {
        q: "Tussen welke twee letters zoek je het woord 'hond'?",
        options: ["tussen G en I", "tussen A en C", "tussen S en U", "tussen W en Y"],
        answer: 0,
        wrongHints: [null, "Dat is het begin van het alfabet; H zit verder.", "Dat is achteraan.", "Dat is helemaal achteraan."],
        uitlegPad: {
          stappen: [{ titel: "…G H I…", tekst: "'Hond' begint met h. In het alfabet zit h tussen g en i." }],
          niveaus: {
            basis: "H zit tussen G en I.",
            simpeler: "Welke letters staan vlak vóór en ná de H?",
            nogSimpeler: "G, H, I — waar zit de H?",
          },
        },
      },
      {
        q: "Bij welke letter zoek je het woord 'ziekenhuis'?",
        options: ["S", "Z", "C", "H"],
        answer: 1,
        wrongHints: ["Het begint niet met een s, maar met z.", null, "Niet met een c.", "De h zit midden in het woord, niet vooraan."],
        uitlegPad: {
          stappen: [{ titel: "Eerste letter", tekst: "'Ziekenhuis' begint met de letter z, dus je zoekt het achteraan bij de Z." }],
          niveaus: {
            basis: "'ziekenhuis' begint met z → zoek bij Z.",
            simpeler: "Met welke letter begint 'ziekenhuis'?",
            nogSimpeler: "Wat is de eerste letter van 'ziekenhuis'?",
          },
        },
      },
      {
        q: "Welk woord vind je het laatst in het woordenboek?",
        options: ["kabel", "raket", "vlieger", "zebra"],
        answer: 3,
        wrongHints: ["k staat in het midden.", "r staat verderop, maar niet het laatst.", "v komt nog vóór z.", null],
        uitlegPad: {
          stappen: [{ titel: "z is de laatste letter", tekst: "Beginletters k, r, v, z. Z staat het verst, dus 'zebra' komt het laatst in het woordenboek." }],
          niveaus: {
            basis: "'zebra' begint met z → helemaal achteraan.",
            simpeler: "Welke beginletter komt het laatst: k, r, v of z?",
            nogSimpeler: "Welk woord begint met de z?",
          },
        },
      },
    ],
  },

  // ─── C. Tweede letter ─────────────────────────────────────
  {
    title: "Verder dan de eerste letter",
    explanation:
      "Beginnen woorden met **dezelfde letter**? Dan kijk je naar de **tweede** letter, en zo nodig de derde.\n\n" +
      "Voorbeeld: *bal* en *boom* beginnen allebei met b. Kijk naar de tweede letter: **a** (bal) komt vóór **o** (boom). Dus *bal* staat eerst.\n\n" +
      "Zo zoek je steeds een letter dieper tot je verschil vindt: *school* (sc…) komt vóór *stoel* (st…), want **c** komt vóór **t**.",
    checks: [
      {
        q: "Welk woord komt eerst: bal of boom?",
        options: ["bal", "boom", "ze zijn gelijk", "boom, want korter"],
        answer: 0,
        wrongHints: [null, "Tweede letter o komt ná a.", "Ze verschillen bij de tweede letter.", "De lengte bepaalt de volgorde niet."],
        uitlegPad: {
          stappen: [{ titel: "Tweede letter: a vóór o", tekst: "Beide beginnen met b. Tweede letters: a (bal) en o (boom). A komt eerst, dus 'bal'." }],
          niveaus: {
            basis: "Bij gelijke eerste letter beslist de tweede: a < o, dus 'bal' eerst.",
            simpeler: "De b's zijn gelijk. Kijk naar de tweede letter: a of o?",
            nogSimpeler: "Wat komt eerst: a of o?",
          },
        },
      },
      {
        q: "Welk woord komt eerst: school of stoel?",
        options: ["school", "stoel", "ze zijn gelijk", "stoel, want korter"],
        answer: 0,
        wrongHints: [null, "Bij de tweede letter komt c vóór t.", "Ze verschillen bij de tweede letter.", "Lengte bepaalt het niet."],
        uitlegPad: {
          stappen: [{ titel: "s gelijk, dan c vóór t", tekst: "Beide beginnen met s. Tweede letters: c (school) en t (stoel). C komt eerst, dus 'school'." }],
          niveaus: {
            basis: "Eerste letter s gelijk; tweede letter c < t → 'school' eerst.",
            simpeler: "De s'en zijn gelijk. Kijk naar de tweede letter: c of t?",
            nogSimpeler: "Wat komt eerst: c of t?",
          },
        },
      },
      {
        q: "Zet op alfabet: kat, kip, koe. Welk woord komt het eerst?",
        options: ["kat", "kip", "koe", "ze zijn gelijk"],
        answer: 0,
        wrongHints: [null, "Tweede letter i komt ná a.", "Tweede letter o komt nog later.", "Ze verschillen bij de tweede letter."],
        uitlegPad: {
          stappen: [{ titel: "k gelijk, dan a < i < o", tekst: "Alle drie beginnen met k. Tweede letters: a, i, o. A komt eerst, dus 'kat'." }],
          niveaus: {
            basis: "Eerste letter k gelijk; tweede letters a, i, o → 'kat' (a) eerst.",
            simpeler: "De k's zijn gelijk. Welke tweede letter komt eerst: a, i of o?",
            nogSimpeler: "a, i, o — welke is de vroegste?",
          },
        },
      },
      {
        q: "Welk woord komt het laatst: tafel, tijger, toren?",
        options: ["toren", "tafel", "tijger", "ze zijn gelijk"],
        answer: 0,
        wrongHints: [null, "Alle drie beginnen met t — vergelijk dus de twééde letters: a, i en o. Komt de a dan het laatst?", "a komt juist het eerst.", "i komt vóór o."],
        uitlegPad: {
          stappen: [{ titel: "t gelijk, dan a < i < o", tekst: "Alle drie beginnen met t. Tweede letters: a, i, o. O komt het laatst, dus 'toren' het laatst." }],
          niveaus: {
            basis: "Tweede letters a, i, o → 'toren' (o) komt het laatst.",
            simpeler: "De t's zijn gelijk. Welke tweede letter komt het laatst: a, i of o?",
            nogSimpeler: "Welke is de laatste: a, i of o?",
          },
        },
      },
      {
        q: "Welk woord komt eerst: planten of plein?",
        options: ["planten", "plein", "ze zijn gelijk", "plein, want korter"],
        answer: 0,
        wrongHints: [null, "Bij de derde letter komt a vóór e.", "Ze verschillen bij de derde letter.", "Lengte bepaalt de volgorde niet."],
        uitlegPad: {
          stappen: [{ titel: "pl gelijk, dan a vóór e", tekst: "Beide beginnen met 'pl'. Derde letters: a (planten) en e (plein). A komt eerst, dus 'planten'." }],
          niveaus: {
            basis: "Eerste twee letters 'pl' gelijk; derde letter a < e → 'planten' eerst.",
            simpeler: "De 'pl' is gelijk. Kijk naar de derde letter: a of e?",
            nogSimpeler: "Wat komt eerst: a of e?",
          },
        },
      },
      {
        q: "Zet op alfabet: storm, station, stoel. Welk woord komt het eerst?",
        options: ["station", "stoel", "storm", "ze zijn gelijk"],
        answer: 0,
        wrongHints: [null, "Derde letter o komt ná de a.", "Ook hier komt o ná de a.", "Ze verschillen al bij de derde letter."],
        uitlegPad: {
          stappen: [{ titel: "st gelijk, dan a vóór o", tekst: "Alle drie beginnen met 'st'. Derde letters: a (station), o (stoel), o (storm). A komt eerst, dus 'station'." }],
          niveaus: {
            basis: "Derde letter a komt vóór o → 'station' eerst.",
            simpeler: "De 'st' is gelijk. Welke derde letter komt eerst: a of o?",
            nogSimpeler: "a of o — welke komt eerst?",
          },
        },
      },
    ],
  },

  // ─── D. Woordenboek gebruiken ─────────────────────────────
  {
    title: "Een woordenboek gebruiken",
    explanation:
      "In een **woordenboek** zoek je de **betekenis** of de **spelling** van een woord op.\n\n" +
      "• Het woord dat je opzoekt heet het **trefwoord** (het staat vet vooraan).\n" +
      "• Achter het trefwoord staat de **uitleg/betekenis**.\n" +
      "• Bovenaan elke bladzijde staan vaak **kopwoorden**: het eerste en laatste woord van die pagina. Daarmee zie je snel of je woord op die pagina staat.\n\n" +
      "Alles staat op alfabet, zodat je snel kunt zoeken.",
    checks: [
      {
        q: "Wat is een 'trefwoord' in een woordenboek?",
        options: [
          "het woord dat je opzoekt",
          "de naam van de schrijver",
          "het laatste woord van het boek",
          "een plaatje",
        ],
        answer: 0,
        wrongHints: [null, "Dat staat meestal voorin het boek, niet als trefwoord.", "Trefwoorden staan door het hele boek, op alfabet.", "Een trefwoord is een woord, geen plaatje."],
        uitlegPad: {
          stappen: [{ titel: "Trefwoord = het opgezochte woord", tekst: "Het trefwoord is het (vet gedrukte) woord dat je opzoekt; daarachter staat de betekenis." }],
          niveaus: {
            basis: "Het trefwoord is het woord dat je opzoekt.",
            simpeler: "Welk woord staat vet vooraan waar je de betekenis bij vindt?",
            nogSimpeler: "Is het trefwoord het woord dat je zoekt?",
          },
        },
      },
      {
        q: "Wat vind je meestal direct achter een trefwoord?",
        options: ["de betekenis/uitleg", "de prijs", "een spelletje", "de datum"],
        answer: 0,
        wrongHints: [null, "Een woordenboek geeft geen prijzen.", "Daar staat uitleg, geen spel.", "Geen datum — wel de betekenis."],
        uitlegPad: {
          stappen: [{ titel: "Betekenis", tekst: "Achter het trefwoord staat de uitleg: wat het woord betekent (en soms de uitspraak of voorbeelden)." }],
          niveaus: {
            basis: "Achter het trefwoord staat de betekenis.",
            simpeler: "Waarvoor gebruik je een woordenboek: de betekenis of de prijs?",
            nogSimpeler: "Geeft een woordenboek de betekenis van een woord?",
          },
        },
      },
      {
        q: "Waarom staan de woorden in een woordenboek op alfabet?",
        options: [
          "zodat je een woord snel kunt vinden",
          "omdat het mooier is",
          "om plaatjes te kunnen tonen",
          "dat heeft geen reden",
        ],
        answer: 0,
        wrongHints: [null, "Het gaat niet om mooi, maar om snel zoeken.", "Plaatjes hebben er niets mee te maken.", "Er is wel degelijk een reden: snel zoeken."],
        uitlegPad: {
          stappen: [{ titel: "Snel terugvinden", tekst: "Door de alfabetische volgorde weet je precies waar je moet zoeken, zonder alle pagina's door te bladeren." }],
          niveaus: {
            basis: "Op alfabet kun je een woord snel terugvinden.",
            simpeler: "Helpt alfabetische volgorde om iets snel te vinden?",
            nogSimpeler: "Zoek je sneller in een geordend of een rommelig boek?",
          },
        },
      },
      {
        q: "Bovenaan een woordenboekpagina staan de kopwoorden 'kraan' en 'kruik'. Welk woord staat op deze pagina?",
        options: ["krokus", "kaars", "lamp", "kwartet"],
        answer: 0,
        wrongHints: [null, "'kaars' (kaa…) komt vóór 'kraan' — dus niet op deze pagina.", "'lamp' begint met l, een latere letter dan kr-.", "'kwartet' (kw…) komt ná 'kruik'."],
        uitlegPad: {
          stappen: [{ titel: "Tussen de kopwoorden", tekst: "Op de pagina staan woorden tussen 'kraan' en 'kruik'. 'Krokus' (kro…) past daartussen; 'kaars' komt eerder, 'lamp' en 'kwartet' later." }],
          niveaus: {
            basis: "'krokus' valt alfabetisch tussen 'kraan' en 'kruik'.",
            simpeler: "Welk woord komt ná 'kraan' maar vóór 'kruik'?",
            nogSimpeler: "kraan – krokus – kruik: past 'krokus' ertussen?",
          },
        },
      },
      {
        q: "Bovenaan een pagina staan de kopwoorden 'appel' en 'arm'. Welk woord staat op deze pagina?",
        options: ["arend", "auto", "ananas", "beer"],
        answer: 0,
        wrongHints: [null, "'auto' (au…) komt ná 'arm'.", "'ananas' (an…) komt vóór 'appel'.", "'beer' begint met b, een latere letter."],
        uitlegPad: {
          stappen: [{ titel: "Tussen de kopwoorden", tekst: "Op de pagina staan woorden tussen 'appel' en 'arm'. 'Arend' (ar-e) past daartussen: ná 'appel' (ap-) en vóór 'arm' (ar-m)." }],
          niveaus: {
            basis: "'arend' valt alfabetisch tussen 'appel' en 'arm'.",
            simpeler: "Welk woord komt ná 'appel' maar vóór 'arm'?",
            nogSimpeler: "appel – arend – arm: past 'arend' ertussen?",
          },
        },
      },
      {
        q: "Je wilt weten hoe je een moeilijk woord schrijft. Wat pak je het best?",
        options: ["een woordenboek", "een atlas", "een stripboek", "een telefoongids"],
        answer: 0,
        wrongHints: [null, "Een atlas heeft kaarten, geen spelling.", "Een stripboek geeft geen schrijfwijze van woorden.", "Een telefoongids heeft namen en nummers."],
        uitlegPad: {
          stappen: [{ titel: "Woordenboek = spelling + betekenis", tekst: "In een woordenboek staat hoe je een woord schrijft én wat het betekent." }],
          niveaus: {
            basis: "Voor de spelling van een woord gebruik je een woordenboek.",
            simpeler: "Welk boek geeft de schrijfwijze van woorden?",
            nogSimpeler: "Waar zoek je hoe een woord geschreven wordt?",
          },
        },
      },
      {
        q: "Je zoekt het woord 'liep' (van lopen). Onder welk woord vind je de betekenis meestal?",
        options: ["lopen", "liep", "geliepen", "loopt"],
        answer: 0,
        wrongHints: [null, "Een woordenboek zet werkwoorden onder het hele werkwoord, niet de verleden tijd.", "Dat is geen bestaand woord.", "De vorm met -t staat ook niet apart als trefwoord."],
        uitlegPad: {
          stappen: [{ titel: "Hele werkwoord = trefwoord", tekst: "Werkwoorden staan in het woordenboek onder het hele werkwoord (de ik-vorm met -en). 'liep' zoek je dus onder 'lopen'." }],
          niveaus: {
            basis: "Werkwoorden staan onder het hele werkwoord → 'lopen'.",
            simpeler: "Onder welke vorm staat een werkwoord: de verleden tijd of het hele werkwoord?",
            nogSimpeler: "Zoek je 'liep' onder 'liep' of onder 'lopen'?",
          },
        },
      },
    ],
  },
];

export default {
  id: "alfabet-woordenboek-po",
  title: "Alfabetisch opzoeken & woordenboek",
  subject: "studievaardigheden",
  level: "groep7-8",
  sloThema: "studievaardigheden-alfabet",
  chapters,
  steps,
  prerequisites: [],
};
