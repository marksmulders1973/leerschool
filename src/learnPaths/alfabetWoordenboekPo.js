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
        wrongHints: [null, "L komt juist vóór M.", "Zeg het alfabet op vanaf de L. Komt de O direct na de M?", "Komt de K vóór of ná de M?"],
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
        q: "Zet op alfabet: kat, aap, muis, egel. Welk woord komt het eerst?",
        options: ["aap", "kat", "muis", "egel"],
        answer: 0,
        wrongHints: [null, "Kijk naar de beginletters: is er een die nog eerder komt dan de k?", "Staat de m vooraan in het alfabet?", "Is er een beginletter die nog vóór de e komt?"],
        uitlegPad: {
          stappen: [{ titel: "a vóór k vóór m", tekst: "Eerste letters: a (aap), k (kat), m (muis), e (egel). A is de vroegste, dus 'aap' eerst." }],
          niveaus: {
            basis: "'aap' begint met a → komt eerst.",
            simpeler: "Welk woord begint met de vroegste letter?",
            nogSimpeler: "a, k, m of e — welke komt eerst?",
          },
        },
      },
      {
        q: "Welk woord komt het laatst in het alfabet: zon, maan, ster of wolk?",
        options: ["zon", "ster", "maan", "wolk"],
        answer: 0,
        wrongHints: [null, "Staat de s helemaal achteraan in het alfabet? Kijk ook naar de andere beginletters.", "M komt juist vroeg in het alfabet, niet het laatst.", "De w komt laat, maar is er een beginletter die nog later komt?"],
        uitlegPad: {
          stappen: [{ titel: "z is de laatste letter", tekst: "Eerste letters: m, s, w, z. Z komt het laatst in het alfabet, dus 'zon' komt het laatst." }],
          niveaus: {
            basis: "'zon' begint met z, de laatste letter → komt laatst.",
            simpeler: "Welke letter komt het laatst: m, s, w of z?",
            nogSimpeler: "Welk woord begint met z?",
          },
        },
      },
      {
        q: "Welke letter komt vlak vóór de S?",
        options: ["T", "R", "U", "Q"],
        answer: 1,
        wrongHints: ["T komt juist ná S.", null, "U komt later.", "Q staat niet direct naast S. Zeg het alfabet op vanaf P."],
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
        q: "Zet op alfabet: vis, eend, geit, raaf. Welk woord komt het laatst?",
        options: ["eend", "geit", "vis", "raaf"],
        answer: 2,
        wrongHints: ["e komt juist vooraan.", "Komt de g ná alle andere beginletters?", null, "De r komt laat, maar is er een beginletter die nog later komt?"],
        uitlegPad: {
          stappen: [{ titel: "v komt het laatst", tekst: "Eerste letters: e, g, r, v. V staat het verst in het alfabet, dus 'vis' komt het laatst." }],
          niveaus: {
            basis: "'vis' (v) staat het verst in het alfabet → komt laatst.",
            simpeler: "Welke beginletter komt het laatst: e, g, r of v?",
            nogSimpeler: "e, g, r of v — welke is de laatste?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke rij letters staat in de goede alfabetische volgorde?",
        options: ["D E F G", "D F E G", "E D F G", "D E G F"],
        answer: 0,
        wrongHints: [null, "Komt de F in het alfabet echt vóór de E?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zeg het alfabet op",
              tekst: "Het stukje alfabet gaat zo: … C D E F G H … Na de D komt de E, dan de F en dan de G.",
            },
          ],
          niveaus: {
            basis: "De goede volgorde is D E F G.",
            simpeler: "Zeg het alfabet op vanaf de D: welke vier letters hoor je?",
            nogSimpeler: "Wat komt na D: E of F?",
          },
        },
      },
      {
        q: "Hoeveel letters heeft het alfabet?",
        options: ["26", "24", "25", "28"],
        answer: 0,
        wrongHints: [null, "Tel de letters van A tot en met Z nog eens rustig.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tellen van A tot Z",
              tekst: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Als je ze allemaal telt, kom je op 26 letters.",
            },
          ],
          niveaus: {
            basis: "Het alfabet heeft 26 letters, van A tot en met Z.",
            simpeler: "Tel de letters van A tot Z met je vingers mee.",
            nogSimpeler: "Hoeveel letters tel je van A tot Z?",
          },
        },
      },
      {
        q: "Je zet de namen Yara, Daan, Pim en Femke op alfabetische volgorde. Wie staat op de derde plek?",
        options: ["Pim", "Femke", "Yara", "Daan"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "De Y staat bijna achteraan in het alfabet.",
          "De D is de vroegste beginletter van de vier.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kijk naar de beginletters",
              tekst: "De beginletters zijn Y, D, P en F. Op volgorde: D (Daan), F (Femke), P (Pim), Y (Yara). Op de derde plek staat Pim.",
            },
          ],
          niveaus: {
            basis: "Op volgorde: Daan, Femke, Pim, Yara. De derde is Pim.",
            simpeler: "Zet eerst de beginletters D, F, P en Y op volgorde.",
            nogSimpeler: "Welke naam staat na Daan en Femke?",
          },
        },
      },
      {
        q: "Welke letter staat in het alfabet precies tussen de J en de L?",
        options: ["K", "I", "M", "N"],
        answer: 0,
        wrongHints: [null, "De I komt nog vóór de J.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "… J K L …",
              tekst: "Zeg het stukje alfabet op: I, J, K, L, M. Tussen de J en de L staat de K.",
            },
          ],
          niveaus: {
            basis: "Tussen J en L staat K.",
            simpeler: "Zeg op: … J, ?, L … welke letter hoor je in het midden?",
            nogSimpeler: "Welke letter komt na de J?",
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
        options: ["F", "V", "S", "I"],
        answer: 0,
        wrongHints: [null, "Een v en een f klinken bijna hetzelfde, maar kijk naar de letter waarmee je 'fiets' schrijft.", "De s staat aan het eind van 'fiets', niet vooraan.", "De i is de tweede letter van 'fiets', niet de eerste."],
        uitlegPad: {
          stappen: [{ titel: "Eerste letter", tekst: "'Fiets' begint met de letter f, dus je zoekt het bij de F." }],
          niveaus: {
            basis: "Kijk naar de letter waarmee je 'fiets' schrijft, niet naar de klank die je hoort.",
            simpeler: "Met welke letter begint 'fiets'?",
            nogSimpeler: "'Fiets' begint met een f, dus je zoekt bij de F.",
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
            basis: "Zeg het alfabet op en let op de beginletters a, o, t en w. Welke komt het eerst?",
            simpeler: "Welke beginletter komt het vroegst in het alfabet?",
            nogSimpeler: "'Appel' begint met een a en staat dus het eerst in het woordenboek.",
          },
        },
      },
      {
        q: "Je zoekt het woord 'wolk'. Waar sla je het woordenboek het best open?",
        options: ["achteraan", "vooraan", "precies in het midden", "net vóór het midden"],
        answer: 0,
        wrongHints: [null, "Vooraan staan de A's en B's, niet de W.", "Welke letters staan rond het midden van het woordenboek? Hoort de W daarbij?", "Welke letters staan in het eerste deel van het boek? Zit de W daartussen?"],
        uitlegPad: {
          stappen: [{ titel: "W = achteraan", tekst: "De W zit bijna aan het eind van het alfabet, dus 'wolk' staat achteraan in het woordenboek." }],
          niveaus: {
            basis: "Zeg het alfabet op. Komt de W aan het begin, in het midden of aan het eind?",
            simpeler: "Komt de W vooraan of achteraan in het alfabet?",
            nogSimpeler: "De W staat achteraan in het alfabet, dus je slaat het woordenboek achteraan open.",
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
            basis: "'Hond' begint met een h. Zeg het alfabet op en kijk welke letters vlak vóór en ná de h komen.",
            simpeler: "Welke letters staan vlak vóór en ná de H?",
            nogSimpeler: "De H zit tussen de G en de I.",
          },
        },
      },
      {
        q: "Bij welke letter zoek je het woord 'ziekenhuis'?",
        options: ["S", "Z", "C", "H"],
        answer: 1,
        wrongHints: ["Een z en een s klinken bijna hetzelfde, maar kijk naar de letter waarmee je 'ziekenhuis' schrijft.", null, "Hoor je een s-klank? Kijk naar de letter die je echt opschrijft.", "De h zit midden in het woord, niet vooraan."],
        uitlegPad: {
          stappen: [{ titel: "Eerste letter", tekst: "'Ziekenhuis' begint met de letter z, dus je zoekt het achteraan bij de Z." }],
          niveaus: {
            basis: "Schrijf 'ziekenhuis' op en kijk naar de eerste letter die je schrijft, niet naar de klank.",
            simpeler: "Met welke letter begint 'ziekenhuis'?",
            nogSimpeler: "'Ziekenhuis' begint met een z, dus je zoekt bij de Z.",
          },
        },
      },
      {
        q: "Welk woord vind je het laatst in het woordenboek?",
        options: ["kabel", "raket", "vlieger", "zebra"],
        answer: 3,
        wrongHints: ["k staat in het midden.", "r staat verderop, maar niet het laatst.", "De v staat ver achterin het alfabet, maar er komen nog letters na de v.", null],
        uitlegPad: {
          stappen: [{ titel: "z is de laatste letter", tekst: "Beginletters k, r, v, z. Z staat het verst, dus 'zebra' komt het laatst in het woordenboek." }],
          niveaus: {
            basis: "Zeg het alfabet op en let op de beginletters k, r, v en z. Welke komt het laatst?",
            simpeler: "Welke beginletter komt het laatst in het alfabet: k, r, v of z?",
            nogSimpeler: "'Zebra' begint met een z, de laatste letter van het alfabet, en staat dus het laatst.",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke twee woorden zoek je bij dezelfde letter in het woordenboek?",
        options: ["kaas en kers", "kaas en cola", "cent en sok", "vis en fles"],
        answer: 0,
        wrongHints: [
          null,
          "Luister niet naar de klank, maar kijk hoe de woorden geschreven worden.",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "De geschreven eerste letter",
              tekst: "Je zoekt op de letter waarmee een woord geschreven wordt. 'Kaas' en 'kers' beginnen allebei met een k. 'Cola' begint met een c, ook al klinkt het als een k.",
            },
          ],
          niveaus: {
            basis: "Kijk naar de geschreven eerste letter van elk woord, niet naar hoe het klinkt.",
            simpeler: "Schrijf van elk woord de eerste letter op. Welke twee zijn gelijk?",
            nogSimpeler: "'Kaas' en 'kers' beginnen allebei met een k, dus die staan bij dezelfde letter.",
          },
        },
      },
      {
        q: "Welk woord vind je in het middelste deel van het woordenboek?",
        options: ["molen", "dak", "taart", "zeep"],
        answer: 0,
        wrongHints: [null, "De D staat vooraan in het alfabet.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Vooraan, midden, achteraan",
              tekst: "Vooraan staan A, B, C, D, E. In het midden staan K, L, M, N. Achteraan staan S tot en met Z. 'Molen' begint met een m, dus die staat in het midden.",
            },
          ],
          niveaus: {
            basis: "Vooraan staan A tot en met E, in het midden K tot en met N, achteraan S tot en met Z. Welke beginletter hoort bij het midden?",
            simpeler: "Welke beginletter hoort bij het midden van het alfabet: d, m, t of z?",
            nogSimpeler: "'Molen' begint met een m, en de M staat in het midden van het woordenboek.",
          },
        },
      },
      {
        q: "Je slaat het woordenboek open bij woorden met een M. Je zoekt het woord 'vork'. Welke kant blader je op?",
        options: [
          "verder naar achteren",
          "terug naar voren",
          "blijven zoeken bij de M",
          "eerst terug naar de A",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Komt de V in het alfabet vóór of ná de M?",
          "Begint 'vork' met een m?",
          "Moet je echt helemaal opnieuw beginnen? Komt de V vóór of ná de M?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "V komt ná M",
              tekst: "De V staat verder in het alfabet dan de M. Woorden met een v staan dus verder achter in het woordenboek. Je bladert naar achteren.",
            },
          ],
          niveaus: {
            basis: "Zeg het alfabet op vanaf de M. Kom je de V dan vóór of ná de M tegen?",
            simpeler: "Staat de V verder in het alfabet dan de M, of eerder?",
            nogSimpeler: "De V komt ná de M, dus je bladert verder naar achteren.",
          },
        },
      },
      {
        q: "Bij welke letter zoek je het woord 'circus' in het woordenboek?",
        options: ["C", "S", "K", "I"],
        answer: 0,
        wrongHints: [
          null,
          "Het klinkt misschien zo, maar kijk naar de geschreven eerste letter.",
          null,
          "De i is de tweede letter van het woord.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerste letter",
              tekst: "'Circus' schrijf je met een c vooraan. Daarom zoek je het bij de C, ook al hoor je een s-klank.",
            },
          ],
          niveaus: {
            basis: "Schrijf 'circus' op. Je zoekt op de eerste geschreven letter, ook als die anders klinkt.",
            simpeler: "Wat is de eerste letter die je schrijft bij 'circus'?",
            nogSimpeler: "'Circus' begint met een c, dus je zoekt bij de C.",
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
      "Zo zoek je steeds een letter dieper tot je een verschil vindt: *school* (sc…) komt vóór *stoel* (st…), want **c** komt vóór **t**.",
    checks: [
      {
        q: "Welk woord komt het eerst: boom, bal, bus of beer?",
        options: ["bal", "boom", "bus", "beer"],
        answer: 0,
        wrongHints: [null, "Alle vier beginnen met b. Vergelijk de tweede letters: komt de o het eerst?", "Is de u een vroege of een late letter in het alfabet?", "Vergelijk de tweede letters. Is er een die nog vóór de e komt?"],
        uitlegPad: {
          stappen: [{ titel: "Tweede letter: a vóór o", tekst: "Alle vier beginnen met b. Tweede letters: a (bal), o (boom), u (bus) en e (beer). A komt eerst, dus 'bal'." }],
          niveaus: {
            basis: "Bij gelijke eerste letter beslist de tweede: a < e < o < u, dus 'bal' eerst.",
            simpeler: "De b's zijn gelijk. Kijk naar de tweede letter: a, o, u of e?",
            nogSimpeler: "Wat komt eerst: a, e, o of u?",
          },
        },
      },
      {
        q: "Welk woord komt het eerst: stoel, school, stip of stam?",
        options: ["school", "stoel", "stip", "stam"],
        answer: 0,
        wrongHints: [null, "Vergelijk eerst de tweede letters van alle woorden. Welke komt het eerst?", "Is de tweede letter van 'stip' de vroegste van allemaal?", "De a is vroeg, maar kijk eerst naar de tweede letter. Is die bij alle woorden hetzelfde?"],
        uitlegPad: {
          stappen: [{ titel: "s gelijk, dan c vóór t", tekst: "Alle vier beginnen met s. Tweede letters: c (school) en t (stoel, stip, stam). C komt eerst, dus 'school'." }],
          niveaus: {
            basis: "Eerste letter s gelijk; tweede letter c < t → 'school' eerst.",
            simpeler: "De s'en zijn gelijk. Kijk naar de tweede letter: c of t?",
            nogSimpeler: "Wat komt eerst: c of t? Let op: de derde letter doet er hier nog niet toe.",
          },
        },
      },
      {
        q: "Zet op alfabet: kat, kip, koe, kus. Welk woord komt het eerst?",
        options: ["kat", "kip", "koe", "kus"],
        answer: 0,
        wrongHints: [null, "Is de i de vroegste van de tweede letters?", "Komt de o vroeg of laat, vergeleken met de andere tweede letters?", "De u komt laat in het alfabet. Welke tweede letter komt het vroegst?"],
        uitlegPad: {
          stappen: [{ titel: "k gelijk, dan a < i < o", tekst: "Alle vier beginnen met k. Tweede letters: a, i, o, u. A komt eerst, dus 'kat'." }],
          niveaus: {
            basis: "Eerste letter k gelijk; tweede letters a, i, o, u → 'kat' (a) eerst.",
            simpeler: "De k's zijn gelijk. Welke tweede letter komt eerst: a, i, o of u?",
            nogSimpeler: "a, i, o, u — welke is de vroegste?",
          },
        },
      },
      {
        q: "Welk woord komt het laatst: tafel, tijger, toren, tent?",
        options: ["toren", "tafel", "tijger", "tent"],
        answer: 0,
        wrongHints: [null, "Alle vier beginnen met t — vergelijk dus de tweede letters. Komt de a het laatst?", "Vergelijk de tweede letters: komt de i het laatst?", "Vergelijk de tweede letters: komt de e het laatst?"],
        uitlegPad: {
          stappen: [{ titel: "t gelijk, dan a < i < o", tekst: "Alle vier beginnen met t. Tweede letters: a, i, o, e. O komt het laatst, dus 'toren' het laatst." }],
          niveaus: {
            basis: "Tweede letters a, e, i, o → 'toren' (o) komt het laatst.",
            simpeler: "De t's zijn gelijk. Welke tweede letter komt het laatst: a, i, o of e?",
            nogSimpeler: "Welke is de laatste: a, e, i of o?",
          },
        },
      },
      {
        q: "Welk woord komt het eerst: planten, plein, ploeg of pluim?",
        options: ["planten", "plein", "ploeg", "pluim"],
        answer: 0,
        wrongHints: [null, "Alle woorden beginnen met pl. Vergelijk de derde letter: is de e de vroegste?", "Vergelijk de derde letters. Is er een die nog vóór de o komt?", "Is de u een vroege of een late letter?"],
        uitlegPad: {
          stappen: [{ titel: "pl gelijk, dan a vóór e", tekst: "Alle vier beginnen met 'pl'. Derde letters: a (planten), e (plein), o (ploeg) en u (pluim). A komt eerst, dus 'planten'." }],
          niveaus: {
            basis: "Eerste twee letters 'pl' gelijk; derde letter a < e < o < u → 'planten' eerst.",
            simpeler: "De 'pl' is gelijk. Kijk naar de derde letter: a, e, o of u?",
            nogSimpeler: "Wat komt eerst: a, e, o of u?",
          },
        },
      },
      {
        q: "Zet op alfabet: storm, station, stoel, stuur. Welk woord komt het eerst?",
        options: ["station", "stoel", "storm", "stuur"],
        answer: 0,
        wrongHints: [null, "Vergelijk de derde letters. Is de o de vroegste?", "Kijk naar de derde letter. Is er een die nog eerder komt dan de o?", "Komt de u vroeg of laat in het alfabet?"],
        uitlegPad: {
          stappen: [{ titel: "st gelijk, dan a vóór o", tekst: "Alle vier beginnen met 'st'. Derde letters: a (station), o (stoel), o (storm), u (stuur). A komt eerst, dus 'station'." }],
          niveaus: {
            basis: "Derde letter a komt vóór o en u → 'station' eerst.",
            simpeler: "De 'st' is gelijk. Welke derde letter komt eerst: a, o of u?",
            nogSimpeler: "a, o of u — welke komt eerst?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke rij woorden staat goed op alfabetische volgorde?",
        options: [
          "bel – bloem – brug – bus",
          "bloem – bel – brug – bus",
          "bel – brug – bloem – bus",
          "bel – bloem – bus – brug",
        ],
        answer: 0,
        wrongHints: [null, "Vergelijk de tweede letters van 'bloem' en 'bel'.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Alle vier beginnen met b",
              tekst: "Kijk naar de tweede letters: e (bel), l (bloem), r (brug), u (bus). In het alfabet komt eerst de e, dan de l, dan de r en dan de u.",
            },
          ],
          niveaus: {
            basis: "Tweede letters e, l, r, u → bel, bloem, brug, bus.",
            simpeler: "De b is steeds gelijk. Zet de tweede letters e, l, r en u op volgorde.",
            nogSimpeler: "Wat komt eerst: e of l?",
          },
        },
      },
      {
        q: "Welk woord komt het laatst: regen, raam, rups of roos?",
        options: ["rups", "roos", "regen", "raam"],
        answer: 0,
        wrongHints: [null, null, "Alle vier beginnen met r. Kijk dus naar de tweede letter.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "r gelijk, dan de tweede letter",
              tekst: "De tweede letters zijn e (regen), a (raam), u (rups) en o (roos). Op volgorde: a, e, o, u. De u komt het laatst, dus 'rups' staat achteraan.",
            },
          ],
          niveaus: {
            basis: "Tweede letters a, e, o, u → 'rups' komt het laatst.",
            simpeler: "De r is gelijk. Welke tweede letter komt het laatst: a, e, o of u?",
            nogSimpeler: "Wat komt later: o of u?",
          },
        },
      },
      {
        q: "Zet op alfabet: trein, trap, trui, tros. Welk woord komt het eerst?",
        options: ["trap", "trein", "trui", "tros"],
        answer: 0,
        wrongHints: [null, null, null, "Vergelijk de derde letters. Komt de o het eerst?"],
        uitlegPad: {
          stappen: [
            {
              titel: "tr gelijk, dan de derde letter",
              tekst: "Alle vier beginnen met 'tr'. De derde letters zijn e (trein), a (trap), u (trui) en o (tros). De a komt het eerst, dus 'trap'.",
            },
          ],
          niveaus: {
            basis: "Derde letters a, e, o, u → 'trap' komt eerst.",
            simpeler: "De 'tr' is gelijk. Welke derde letter komt eerst: e, a, u of o?",
            nogSimpeler: "Wat komt eerst: a, e, o of u?",
          },
        },
      },
      {
        q: "Zet op alfabet: kraal, kraan, kraag, kraam. Welk woord komt het eerst?",
        options: ["kraag", "kraal", "kraam", "kraan"],
        answer: 0,
        wrongHints: [null, "Alle vier beginnen met 'kraa'. Kijk dus naar de vijfde letter.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Steeds een letter dieper",
              tekst: "De eerste vier letters zijn bij alle woorden 'kraa'. De vijfde letters zijn l (kraal), n (kraan), g (kraag) en m (kraam). Op volgorde: g, l, m, n. Dus 'kraag' komt eerst.",
            },
          ],
          niveaus: {
            basis: "Vijfde letters g, l, m, n → 'kraag' komt eerst.",
            simpeler: "'kraa' is steeds gelijk. Welke laatste letter komt eerst: l, n, g of m?",
            nogSimpeler: "Wat komt eerst: g of l?",
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
          "de uitleg achter een woord",
        ],
        answer: 0,
        wrongHints: [null, "Staat de schrijver op elke bladzijde, op alfabet? Wat zoek je op?", "Trefwoorden staan door het hele boek, op alfabet.", "Is het trefwoord de uitleg zelf, of het woord waar de uitleg bij hoort?"],
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
        options: ["de betekenis van het woord", "een plaatje van het woord", "de vertaling in het Engels", "een woord dat erop rijmt"],
        answer: 0,
        wrongHints: [null, "Heeft elk woord een plaatje? Wat staat er bij elk trefwoord?", "Is dit een Nederlands woordenboek of een vertaalwoordenboek?", "Helpt een rijmwoord je om te snappen wat het woord is?"],
        uitlegPad: {
          stappen: [{ titel: "Betekenis", tekst: "Achter het trefwoord staat de uitleg: wat het woord betekent (en soms de uitspraak of voorbeelden)." }],
          niveaus: {
            basis: "Achter het trefwoord staat de betekenis.",
            simpeler: "Waarvoor gebruik je een woordenboek meestal?",
            nogSimpeler: "Geeft een woordenboek de betekenis van een woord?",
          },
        },
      },
      {
        q: "Waarom staan de woorden in een woordenboek op alfabet?",
        options: [
          "zodat je een woord snel kunt vinden",
          "zodat elke bladzijde even vol staat",
          "zodat de moeilijkste woorden achteraan staan",
          "zodat je de woorden makkelijk kunt leren",
        ],
        answer: 0,
        wrongHints: [null, "Heeft de volgorde iets te maken met hoeveel woorden er op een bladzijde passen?", "Zijn woorden met een z moeilijker dan woorden met een a?", "Leer je een woordenboek uit je hoofd, of doe je er iets anders mee?"],
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
        options: ["lopen", "liep", "gelopen", "loopt"],
        answer: 0,
        wrongHints: [null, "Staan alle vormen van een werkwoord apart in het woordenboek?", "Dat is ook een vorm van het werkwoord. Welke vorm staat als trefwoord in het woordenboek?", "De vorm met -t staat ook niet apart als trefwoord."],
        uitlegPad: {
          stappen: [{ titel: "Hele werkwoord = trefwoord", tekst: "Werkwoorden staan in het woordenboek onder het hele werkwoord (de vorm met -en). 'liep' zoek je dus onder 'lopen'." }],
          niveaus: {
            basis: "Werkwoorden staan onder het hele werkwoord → 'lopen'.",
            simpeler: "Onder welke vorm staat een werkwoord: de verleden tijd of het hele werkwoord?",
            nogSimpeler: "Zoek je 'liep' onder 'liep' of onder 'lopen'?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Bovenaan een woordenboekpagina staan de kopwoorden 'molen' en 'mug'. Welk woord staat NIET op deze pagina?",
        options: ["melk", "mond", "motor", "mos"],
        answer: 0,
        wrongHints: [null, "'mond' (mon…) komt ná 'molen' (mol…) en vóór 'mug'.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tussen de kopwoorden",
              tekst: "Op deze pagina staan de woorden van 'molen' tot 'mug'. 'Melk' begint met 'me', en de e komt vóór de o. Dus 'melk' staat eerder in het woordenboek, op een andere pagina.",
            },
          ],
          niveaus: {
            basis: "'melk' (me…) komt vóór 'molen' (mo…), dus het staat niet op deze pagina.",
            simpeler: "Vergelijk de tweede letter van elk woord met die van 'molen'.",
            nogSimpeler: "Komt 'me' vóór of ná 'mo'?",
          },
        },
      },
      {
        q: "Waarvoor zijn de kopwoorden bovenaan een bladzijde van het woordenboek handig?",
        options: [
          "om te zien of jouw woord op die bladzijde staat",
          "om te lezen wat het woord betekent",
          "om te zien welke woorden het moeilijkst zijn",
          "om te zien welk woord het belangrijkst is",
        ],
        answer: 0,
        wrongHints: [null, "De betekenis staat achter het trefwoord zelf.", "Zijn kopwoorden moeilijker dan de andere woorden?", "Zijn de kopwoorden belangrijker dan de rest? Waarom staan juist zij bovenaan?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerste en laatste woord",
              tekst: "Kopwoorden zijn het eerste en het laatste woord van de bladzijde. Valt jouw woord op alfabet daartussen? Dan staat het op die bladzijde.",
            },
          ],
          niveaus: {
            basis: "Met de kopwoorden zie je snel of jouw woord op die bladzijde staat.",
            simpeler: "Kopwoorden zijn het eerste en laatste woord van de bladzijde. Wat kun je daarmee snel zien?",
            nogSimpeler: "Helpen kopwoorden je om snel de goede bladzijde te vinden?",
          },
        },
      },
      {
        q: "Hoe herken je in een woordenboek het trefwoord?",
        options: [
          "het staat vet vooraan",
          "het staat onderaan de bladzijde",
          "het staat tussen haakjes",
          "het staat achter de uitleg",
        ],
        answer: 0,
        wrongHints: [null, null, null, "De uitleg komt juist ná het trefwoord."],
        uitlegPad: {
          stappen: [
            {
              titel: "Vet en vooraan",
              tekst: "Het trefwoord is het woord dat je opzoekt. Het staat vet gedrukt vooraan, en daarachter volgt de uitleg.",
            },
          ],
          niveaus: {
            basis: "Het trefwoord staat vet vooraan; daarachter staat de betekenis.",
            simpeler: "Waar begint een stukje in het woordenboek: met het trefwoord of met de uitleg?",
            nogSimpeler: "Staat het trefwoord vooraan of achteraan?",
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
