// Leerpad: Lettergrepen & klemtoon — groep 7-8 PO.
// Doorstroomtoets-onderdeel taal. Woorden in lettergrepen verdelen, afbreken
// aan het eind van een regel, en de klemtoon herkennen.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Wat is een lettergreep?", emoji: "🔤", from: 0, to: 0 },
  { letter: "B", title: "Woorden verdelen", emoji: "✂️", from: 1, to: 1 },
  { letter: "C", title: "Afbreken aan het regeleinde", emoji: "↩️", from: 2, to: 2 },
  { letter: "D", title: "Klemtoon", emoji: "🔊", from: 3, to: 3 },
];

const steps = [
  // ─── A. Wat is een lettergreep ────────────────────────────
  {
    title: "Wat is een lettergreep?",
    explanation:
      "Een **lettergreep** is een stukje van een woord dat je in **één keer** uitspreekt — als één 'klap'. Klap maar mee terwijl je een woord zegt:\n\n" +
      "• ba-naan → 2 klappen → 2 lettergrepen\n" +
      "• o-li-fant → 3 klappen → 3 lettergrepen\n" +
      "• hond → 1 klap → 1 lettergreep\n\n" +
      "Elke lettergreep heeft minstens één **klinker** (a, e, i, o, u). Het aantal 'klappen' is het aantal lettergrepen.",
    checks: [
      {
        q: "Wat is een lettergreep?",
        options: [
          "een stukje van een woord dat je in één keer uitspreekt",
          "de eerste letter van een woord",
          "een woord met een hoofdletter",
          "het hele woord",
        ],
        answer: 0,
        wrongHints: [null, "Dat is maar één letter, geen lettergreep.", "Een hoofdletter heeft er niets mee te maken.", "Een woord kan meerdere lettergrepen hebben."],
        uitlegPad: {
          stappen: [{ titel: "Eén klap", tekst: "Een lettergreep spreek je in één keer uit, als één klap: ba-naan = 2 lettergrepen." }],
          niveaus: {
            basis: "Een lettergreep is een 'klap' van een woord.",
            simpeler: "Klap mee bij 'banaan': hoeveel stukjes?",
            nogSimpeler: "Is een lettergreep een stukje van een woord?",
          },
        },
      },
      {
        q: "Hoeveel lettergrepen heeft 'banaan' (ba-naan)?",
        options: ["2", "3", "1", "4"],
        answer: 0,
        wrongHints: [null, "Klap mee: ba-naan, dat zijn er minder.", "Het zijn er meer dan één.", "Zo veel klappen hoor je niet."],
        uitlegPad: {
          stappen: [{ titel: "ba-naan", tekst: "Ba (1) en naan (2): twee klappen, dus 2 lettergrepen." }],
          niveaus: {
            basis: "ba-naan = 2 lettergrepen.",
            simpeler: "Klap mee: hoeveel stukjes hoor je in 'banaan'?",
            nogSimpeler: "ba — naan: hoeveel klappen?",
          },
        },
      },
      {
        q: "Hoeveel lettergrepen heeft 'olifant' (o-li-fant)?",
        options: ["3", "2", "4", "1"],
        answer: 0,
        wrongHints: [null, "Klap mee: o-li-fant, dat is er eentje meer.", "Zo veel zijn het er niet.", "Het zijn er meer dan één."],
        uitlegPad: {
          stappen: [{ titel: "o-li-fant", tekst: "O (1), li (2), fant (3): drie klappen, dus 3 lettergrepen." }],
          niveaus: {
            basis: "o-li-fant = 3 lettergrepen.",
            simpeler: "Klap mee bij 'olifant': hoeveel stukjes?",
            nogSimpeler: "o — li — fant: hoeveel klappen?",
          },
        },
      },
      {
        q: "Welk woord heeft maar 1 lettergreep?",
        options: ["hond", "appel", "tomaat", "vakantie"],
        answer: 0,
        wrongHints: [null, "ap-pel zijn er twee.", "to-maat zijn er twee.", "va-kan-tie zijn er drie."],
        uitlegPad: {
          stappen: [{ titel: "Eén klap", tekst: "'Hond' spreek je in één keer uit: 1 lettergreep. De andere woorden hebben er meer." }],
          niveaus: {
            basis: "'hond' = 1 lettergreep.",
            simpeler: "Bij welk woord hoor je maar één klap?",
            nogSimpeler: "Welk woord is het kortst om uit te spreken?",
          },
        },
      },
      {
        q: "Hoeveel lettergrepen heeft 'chocola' (cho-co-la)?",
        options: ["3", "2", "4", "1"],
        answer: 0,
        wrongHints: [null, "Klap mee: cho-co-la, er zijn er meer.", "Zo veel zijn het er niet.", "Het zijn er meer dan één."],
        uitlegPad: {
          stappen: [{ titel: "cho-co-la", tekst: "Cho (1), co (2), la (3): drie klappen, dus 3 lettergrepen." }],
          niveaus: {
            basis: "cho-co-la = 3 lettergrepen.",
            simpeler: "Klap mee bij 'chocola': hoeveel stukjes?",
            nogSimpeler: "cho — co — la: hoeveel klappen?",
          },
        },
      },
      {
        q: "Wat heeft elke lettergreep minimaal één van?",
        options: ["een klinker (a, e, i, o, u)", "een medeklinker", "een hoofdletter", "een leesteken"],
        answer: 0,
        wrongHints: [null, "Een medeklinker is niet verplicht — 'a' is zelf al een lettergreep.", "Hoofdletters hebben er niets mee te maken.", "Leestekens horen bij zinnen, niet bij lettergrepen."],
        uitlegPad: {
          stappen: [{ titel: "Klinker = kern van een lettergreep", tekst: "Elke lettergreep heeft minstens één klinker (a, e, i, o, u). Zonder klinker kun je een stukje niet uitspreken als klap." }],
          niveaus: {
            basis: "Elke lettergreep heeft minstens één klinker.",
            simpeler: "Hoe tel je lettergrepen? Teel de klinkers in een stukje.",
            nogSimpeler: "Heeft elke lettergreep een a, e, i, o of u erin?",
          },
        },
      },
    ],
  },

  // ─── B. Verdelen ──────────────────────────────────────────
  {
    title: "Woorden in lettergrepen verdelen",
    explanation:
      "Je verdeelt een woord in lettergrepen op de plek waar je een nieuwe 'klap' hoort.\n\n" +
      "**Handige regel:** staat er **één medeklinker tussen twee klinkers**? Dan gaat die meestal mee naar de **volgende** lettergreep:\n" +
      "• ta-fel (de f gaat naar de tweede klap)\n" +
      "• be-ker, mu-ziek\n\n" +
      "Bij **twee medeklinkers** ertussen splits je er meestal tussenin:\n" +
      "• kin-de-ren, win-ter, ven-ster.\n\n" +
      "Spreek het woord rustig uit en luister waar de klappen vallen.",
    checks: [
      {
        q: "Verdeel 'tafel' in lettergrepen.",
        options: ["ta-fel", "taf-el", "t-afel", "tafe-l"],
        answer: 0,
        wrongHints: [null, "De f gaat mee naar de tweede klap, niet ervoor.", "Een lettergreep begint niet met losse t.", "Je laat geen losse l over."],
        uitlegPad: {
          stappen: [{ titel: "ta-fel", tekst: "Eén medeklinker (f) tussen twee klinkers gaat naar de volgende lettergreep: ta-fel." }],
          niveaus: {
            basis: "ta-fel: de f gaat naar de tweede klap.",
            simpeler: "Spreek 'tafel' rustig uit: ta … fel.",
            nogSimpeler: "Waar valt de tweede klap in 'tafel'?",
          },
        },
      },
      {
        q: "Verdeel 'kinderen' in lettergrepen.",
        options: ["kin-de-ren", "kind-er-en", "ki-nde-ren", "kinde-ren"],
        answer: 0,
        wrongHints: [null, "Splits niet midden in een klank-stukje.", "'nde' is geen lettergreep.", "Er zit nog een klap tussen."],
        uitlegPad: {
          stappen: [{ titel: "kin-de-ren", tekst: "Drie klappen: kin (1), de (2), ren (3). Bij twee medeklinkers (nd) splits je ertussen: kin-de-ren." }],
          niveaus: {
            basis: "kin-de-ren = 3 lettergrepen.",
            simpeler: "Klap mee: kin — de — ren.",
            nogSimpeler: "Hoeveel klappen in 'kinderen'? Verdeel zo.",
          },
        },
      },
      {
        q: "Eén medeklinker tussen twee klinkers gaat bij het verdelen meestal naar...",
        options: ["de volgende lettergreep", "de vorige lettergreep", "allebei", "geen van beide"],
        answer: 0,
        wrongHints: [null, "Niet ervoor — denk aan ta-fel (f naar achteren).", "Hij hoort bij één lettergreep, niet bij twee.", "Hij hoort er wel degelijk bij."],
        uitlegPad: {
          stappen: [{ titel: "Mee naar achteren", tekst: "Bij ta-fel, be-ker, mu-ziek gaat de losse medeklinker naar de volgende lettergreep." }],
          niveaus: {
            basis: "Eén medeklinker tussen klinkers → naar de volgende lettergreep.",
            simpeler: "ta-fel: gaat de f naar voren of naar achteren?",
            nogSimpeler: "Bij ta-fel: hoort de f bij 'ta' of bij 'fel'?",
          },
        },
      },
      {
        q: "Hoeveel lettergrepen heeft 'computer' (com-pu-ter)?",
        options: ["3", "2", "4", "1"],
        answer: 0,
        wrongHints: [null, "Klap mee: com-pu-ter, dat is er eentje meer.", "Zo veel zijn het er niet.", "Het zijn er meer dan één."],
        uitlegPad: {
          stappen: [{ titel: "com-pu-ter", tekst: "Com (1), pu (2), ter (3): drie klappen, dus 3 lettergrepen." }],
          niveaus: {
            basis: "com-pu-ter = 3 lettergrepen.",
            simpeler: "Klap mee bij 'computer'.",
            nogSimpeler: "com — pu — ter: hoeveel klappen?",
          },
        },
      },
      {
        q: "Verdeel 'winter' in lettergrepen.",
        options: ["win-ter", "wi-nter", "wint-er", "w-inter"],
        answer: 0,
        wrongHints: [null, "'nter' is geen nette lettergreep om mee te beginnen.", "Dat knipt midden in een lettergreep.", "Een losse w mag niet."],
        uitlegPad: {
          stappen: [{ titel: "win-ter", tekst: "Twee medeklinkers (nt) tussen klinkers → splits ertussen: win-ter." }],
          niveaus: {
            basis: "win-ter: twee medeklinkers ertussen → deel ertussen.",
            simpeler: "Klap mee: win — ter.",
            nogSimpeler: "Waar valt de tweede klap in 'winter'?",
          },
        },
      },
      {
        q: "Verdeel 'muziek' in lettergrepen.",
        options: ["mu-ziek", "muz-iek", "m-uziek", "muzi-ek"],
        answer: 0,
        wrongHints: [null, "Eén medeklinker (z) gaat naar de volgende lettergreep.", "Een losse m is geen lettergreep.", "Dat knipt midden in de klank 'iek'."],
        uitlegPad: {
          stappen: [{ titel: "mu-ziek", tekst: "Eén medeklinker (z) tussen twee klinkers gaat naar de volgende lettergreep: mu-ziek." }],
          niveaus: {
            basis: "mu-ziek: de z gaat mee naar de tweede klap.",
            simpeler: "Klap mee: mu — ziek.",
            nogSimpeler: "Waar valt de tweede klap in 'muziek'?",
          },
        },
      },
    ],
  },

  // ─── C. Afbreken ──────────────────────────────────────────
  {
    title: "Afbreken aan het eind van een regel",
    explanation:
      "Past een woord niet meer op een regel? Dan mag je het **afbreken** met een streepje (-), maar **alleen tussen twee lettergrepen**.\n\n" +
      "• ta-fel → je mag afbreken als 'ta-' aan het eind en 'fel' op de volgende regel.\n" +
      "• va-kan-tie → 'va-' of 'vakan-' mag.\n\n" +
      "**Niet toegestaan:**\n" +
      "• midden in een lettergreep (taf-el is fout);\n" +
      "• een woord met **maar één lettergreep** (aap, hond) breek je nooit af.",
    checks: [
      {
        q: "Tussen welke stukken mag je een woord afbreken aan het eind van een regel?",
        options: ["tussen twee lettergrepen", "midden in een lettergreep", "na elke letter", "dat mag nooit"],
        answer: 0,
        wrongHints: [null, "Midden in een lettergreep mag juist niet.", "Niet zomaar na elke letter.", "Afbreken mag wél, tussen lettergrepen."],
        uitlegPad: {
          stappen: [{ titel: "Tussen lettergrepen", tekst: "Je breekt af op de grens tussen twee lettergrepen: ta-fel." }],
          niveaus: {
            basis: "Afbreken mag alleen tussen lettergrepen.",
            simpeler: "Op welke plek knip je een woord netjes door?",
            nogSimpeler: "Breek je af tussen lettergrepen of midden erin?",
          },
        },
      },
      {
        q: "Hoe breek je 'tafel' goed af aan het eind van een regel?",
        options: ["ta-fel", "taf-el", "t-afel", "tafe-l"],
        answer: 0,
        wrongHints: [null, "Dat knipt midden in een lettergreep.", "Een losse t mag niet.", "Een losse l mag niet."],
        uitlegPad: {
          stappen: [{ titel: "Op de lettergreepgrens", tekst: "Tafel = ta-fel. Je breekt af tussen ta en fel: ta-fel." }],
          niveaus: {
            basis: "Afbreken: ta-fel (tussen de twee lettergrepen).",
            simpeler: "Waar zit de grens tussen de klappen van 'tafel'?",
            nogSimpeler: "ta … fel — breek daar af.",
          },
        },
      },
      {
        q: "Mag je het woord 'aap' afbreken aan het eind van een regel?",
        options: [
          "nee, het heeft maar één lettergreep",
          "ja, als a-ap",
          "ja, als aa-p",
          "ja, overal",
        ],
        answer: 0,
        wrongHints: [null, "Eén lettergreep splits je niet.", "Ook niet — er is geen tweede lettergreep.", "Afbreken kan alleen tussen lettergrepen."],
        uitlegPad: {
          stappen: [{ titel: "Eén lettergreep = niet afbreken", tekst: "'Aap' is één klap (1 lettergreep), dus je kunt het niet afbreken." }],
          niveaus: {
            basis: "Een woord van 1 lettergreep breek je niet af.",
            simpeler: "Hoeveel klappen heeft 'aap'? Eén — dus niet afbreken.",
            nogSimpeler: "Kun je 'aap' in twee klappen splitsen? Nee.",
          },
        },
      },
      {
        q: "Welke afbreking van 'vakantie' is goed?",
        options: ["va-kantie", "vak-antie", "vakant-ie", "v-akantie"],
        answer: 0,
        wrongHints: [null, "Dat knipt midden in de eerste lettergreep (va-).", "Dat knipt midden in een lettergreep.", "Een losse v mag niet."],
        uitlegPad: {
          stappen: [{ titel: "va-kan-tie", tekst: "Vakantie = va-kan-tie. Je mag afbreken tussen lettergrepen, dus 'va-kantie' is goed." }],
          niveaus: {
            basis: "va-kantie breekt af op een lettergreepgrens.",
            simpeler: "Spreek uit: va — kan — tie. Breek op zo'n grens af.",
            nogSimpeler: "Welke begint met de hele lettergreep 'va-'?",
          },
        },
      },
      {
        q: "Mag je het woord 'zon' afbreken aan het eind van een regel?",
        options: [
          "nee, het heeft maar één lettergreep",
          "ja, als zo-n",
          "ja, als z-on",
          "ja, overal",
        ],
        answer: 0,
        wrongHints: [null, "Eén lettergreep split je niet — er is geen tweede stukje.", "Ook hier is geen tweede lettergreep om op af te breken.", "Afbreken kan alleen tussen lettergrepen."],
        uitlegPad: {
          stappen: [{ titel: "Eén lettergreep = niet afbreken", tekst: "'Zon' is één klap (1 lettergreep). Je kunt het niet afbreken." }],
          niveaus: {
            basis: "Een woord met 1 lettergreep breek je nooit af.",
            simpeler: "Hoeveel klappen heeft 'zon'? Eén — niet afbreken.",
            nogSimpeler: "Kun je 'zon' in twee stukjes knippen? Nee.",
          },
        },
      },
      {
        q: "Welke afbreking van 'bibliotheek' (bi-blio-theek) is goed?",
        options: ["bi-bliotheek", "bib-liothek", "biblio-teek", "bibliothe-ek"],
        answer: 0,
        wrongHints: [null, "Dat knipt midden in de tweede lettergreep ('blio').", "Dat knipt de tweede lettergreep doormidden.", "Dat knipt midden in de klank 'theek'."],
        uitlegPad: {
          stappen: [{ titel: "bi-bliotheek", tekst: "Bibliotheek = bi-blio-theek. Je mag afbreken na de eerste lettergreep: bi-bliotheek." }],
          niveaus: {
            basis: "bi-blio-theek: breek af na 'bi' of na 'biblio'.",
            simpeler: "Klap mee: bi — blio — theek. Je breekt af op zo'n grens.",
            nogSimpeler: "Welke knipt af na de eerste lettergreep 'bi-'?",
          },
        },
      },
    ],
  },

  // ─── D. Klemtoon ──────────────────────────────────────────
  {
    title: "Klemtoon — waar ligt de nadruk?",
    explanation:
      "In een woord met meer lettergrepen spreek je er meestal **één sterker** uit. Die lettergreep heeft de **klemtoon** (de nadruk).\n\n" +
      "• ba-**NAAN** → klemtoon op de tweede lettergreep\n" +
      "• **TA**-fel → klemtoon op de eerste\n" +
      "• to-**MAAT** → klemtoon op de tweede\n\n" +
      "Je hóórt de klemtoon: die lettergreep klinkt **harder en langer**. Spreek het woord een paar keer uit en let op welk stukje eruit springt.",
    checks: [
      {
        q: "Wat is de klemtoon in een woord?",
        options: [
          "de lettergreep die je het sterkst uitspreekt",
          "de eerste letter",
          "de laatste lettergreep, altijd",
          "een leesteken",
        ],
        answer: 0,
        wrongHints: [null, "Het gaat om een hele lettergreep, niet één letter.", "Niet altijd de laatste — het verschilt per woord.", "De klemtoon hoor je, het is geen teken."],
        uitlegPad: {
          stappen: [{ titel: "De nadruk", tekst: "De klemtoon is de lettergreep die je harder en langer uitspreekt: ba-NAAN." }],
          niveaus: {
            basis: "De klemtoon is de lettergreep met de meeste nadruk.",
            simpeler: "Welk stukje van 'banaan' spreek je het hardst uit?",
            nogSimpeler: "Is de klemtoon de nadruk in een woord?",
          },
        },
      },
      {
        q: "Waar ligt de klemtoon in 'banaan' (ba-naan)?",
        options: ["op 'naan' (de tweede)", "op 'ba' (de eerste)", "op allebei evenveel", "er is geen klemtoon"],
        answer: 0,
        wrongHints: [null, "Spreek uit: ba-NAAN, de nadruk valt achteraan.", "Niet de eerste — luister nog eens.", "Elk meerlettergrepig woord heeft een klemtoon."],
        uitlegPad: {
          stappen: [{ titel: "ba-NAAN", tekst: "Je zegt 'baNAAN', met de nadruk op 'naan'. Daar ligt de klemtoon." }],
          niveaus: {
            basis: "De klemtoon ligt op 'naan' (de tweede lettergreep).",
            simpeler: "Welk stukje klinkt harder: ba of naan?",
            nogSimpeler: "Zeg 'banaan' — welk stukje springt eruit?",
          },
        },
      },
      {
        q: "In 'tomaat' (to-maat), waar ligt de klemtoon?",
        options: ["op 'maat'", "op 'to'", "op allebei", "nergens"],
        answer: 0,
        wrongHints: [null, "Spreek uit: to-MAAT.", "Niet 'to' — luister nog eens.", "Er is één klemtoon per woord."],
        uitlegPad: {
          stappen: [{ titel: "to-MAAT", tekst: "Je zegt 'toMAAT', met de nadruk op 'maat'." }],
          niveaus: {
            basis: "De klemtoon ligt op 'maat'.",
            simpeler: "Welk stukje klinkt harder: to of maat?",
            nogSimpeler: "Zeg 'tomaat' — welk stukje springt eruit?",
          },
        },
      },
      {
        q: "Hoe hoor je waar de klemtoon ligt?",
        options: [
          "die lettergreep klinkt harder en langer",
          "die lettergreep heeft een hoofdletter",
          "die lettergreep staat vooraan",
          "dat kun je niet horen",
        ],
        answer: 0,
        wrongHints: [null, "Schrijven verandert er niets aan; je hóórt het.", "Niet altijd vooraan — het verschilt.", "Je kunt het juist goed horen."],
        uitlegPad: {
          stappen: [{ titel: "Harder en langer", tekst: "De lettergreep met de klemtoon spreek je harder en langer uit — die springt eruit." }],
          niveaus: {
            basis: "De klemtoon-lettergreep klinkt harder en langer.",
            simpeler: "Hoe valt de nadruk op: door harder te spreken.",
            nogSimpeler: "Klinkt de klemtoon zachter of harder?",
          },
        },
      },
      {
        q: "Waar ligt de klemtoon in 'tafel' (ta-fel)?",
        options: ["op 'ta' (de eerste)", "op 'fel' (de tweede)", "op allebei evenveel", "er is geen klemtoon"],
        answer: 0,
        wrongHints: [null, "Spreek uit: TÁ-fel, de nadruk valt vooraan.", "Luister goed — de ene klap klinkt sterker.", "Elk woord met meer lettergrepen heeft een klemtoon."],
        uitlegPad: {
          stappen: [{ titel: "TÁ-fel", tekst: "Je zegt 'TÁfel', met de nadruk op 'ta'. Daar ligt de klemtoon." }],
          niveaus: {
            basis: "De klemtoon ligt op 'ta' (de eerste lettergreep).",
            simpeler: "Welk stukje klinkt harder: ta of fel?",
            nogSimpeler: "Zeg 'tafel' — welk stukje springt eruit?",
          },
        },
      },
      {
        q: "In 'computer' (com-pu-ter), waar ligt de klemtoon?",
        options: ["op 'pu' (de tweede)", "op 'com' (de eerste)", "op 'ter' (de derde)", "op allebei de laatste twee"],
        answer: 0,
        wrongHints: [null, "Spreek uit: com-PU-ter.", "Spreek uit: com-PU-ter — de nadruk valt niet vooraan.", "Er is maar één klemtoon."],
        uitlegPad: {
          stappen: [{ titel: "com-PU-ter", tekst: "Je zegt 'comPUter', met de nadruk op 'pu'. Dat is de tweede lettergreep." }],
          niveaus: {
            basis: "De klemtoon ligt op 'pu' (de tweede lettergreep).",
            simpeler: "Welk stukje klinkt harder: com, pu of ter?",
            nogSimpeler: "Zeg 'computer' — welk stukje springt eruit?",
          },
        },
      },
      {
        q: "Hoeveel lettergrepen heeft 'ziekenhuis' (zie-ken-huis)?",
        options: ["3", "2", "4", "1"],
        answer: 0,
        wrongHints: [null, "Klap mee: zie-ken-huis, er zijn er meer.", "Zo veel zijn het er niet.", "Het zijn er meer dan één."],
        uitlegPad: {
          stappen: [{ titel: "zie-ken-huis", tekst: "Zie (1), ken (2), huis (3): drie klappen, dus 3 lettergrepen." }],
          niveaus: {
            basis: "zie-ken-huis = 3 lettergrepen.",
            simpeler: "Klap mee bij 'ziekenhuis'.",
            nogSimpeler: "zie — ken — huis: hoeveel klappen?",
          },
        },
      },
      {
        q: "Waar ligt de klemtoon in 'vakantie' (va-kan-tie)?",
        options: ["op 'kan' (de tweede)", "op 'va' (de eerste)", "op 'tie' (de derde)", "op allebei de buitenste lettergrepen"],
        answer: 0,
        wrongHints: [null, "Spreek uit: va-KÁN-tie — de nadruk valt niet vooraan.", "Spreek uit: va-KÁN-tie.", "Er is maar één klemtoon."],
        uitlegPad: {
          stappen: [{ titel: "va-KÁN-tie", tekst: "Je zegt 'vaKÁNtie', met de nadruk op 'kan'. Dat is de tweede lettergreep." }],
          niveaus: {
            basis: "De klemtoon ligt op 'kan' (de tweede lettergreep).",
            simpeler: "Welk stukje klinkt harder: va, kan of tie?",
            nogSimpeler: "Zeg 'vakantie' — welk stukje springt eruit?",
          },
        },
      },
    ],
  },
];

export default {
  id: "lettergrepen-klemtoon-po",
  title: "Lettergrepen & klemtoon",
  subject: "taal",
  level: "groep7-8",
  sloThema: "taal-lettergrepen",
  chapters,
  steps,
  prerequisites: [],
};
