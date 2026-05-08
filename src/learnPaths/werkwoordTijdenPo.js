// Leerpad: Werkwoordsvervoeging — tegenwoordige + verleden tijd (PO groep 7-8)
// 5 stappen. Anders dan werkwoordsspellingDT (d/t-regels).
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#00c853",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["📝","⏰","⏳","🔁","🏆"];

const chapters = [
  { letter: "A", title: "Wat is een werkwoord?", emoji: "📝", from: 0, to: 0 },
  { letter: "B", title: "Tegenwoordige tijd", emoji: "⏰", from: 1, to: 1 },
  { letter: "C", title: "Verleden tijd — sterke en zwakke", emoji: "⏳", from: 2, to: 3 },
  { letter: "D", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een werkwoord?",
    explanation: "Een **werkwoord** zegt **wat iemand doet** (of wat er gebeurt).\n\n**Voorbeelden**:\n• Tom **loopt** naar school. → 'loopt' = werkwoord.\n• Het **regent** vandaag. → 'regent' = werkwoord.\n• Lisa **leest** een boek. → 'leest' = werkwoord.\n\n**Wat doet een werkwoord?**\n• Beschrijft een **handeling**: lopen, eten, schrijven, springen.\n• Beschrijft een **toestand**: zijn, hebben, blijven, zitten.\n• Beschrijft een **gebeurtenis**: regenen, sneeuwen, vallen.\n\n**Het hele werkwoord** = het werkwoord in z'n basisvorm. Eindigt vrijwel altijd op **-en**:\n• lopen, eten, schrijven, zijn, hebben, doen.\n\n**Het werkwoord verandert per persoon en tijd**:\n• Ik **loop** *(ik-vorm tegenwoordige tijd)*\n• Hij **loopt** *(hij/zij-vorm tegenwoordige tijd)*\n• Wij **liepen** *(verleden tijd)*\n\nIn dit pad leer je hoe werkwoorden **vervoegen** voor:\n• **Tegenwoordige tijd** (nu).\n• **Verleden tijd** (eerder).\n\n**Cito-tip**: het werkwoord is meestal het **drukste** woord in een zin — het 'doet'.",
    checks: [
      {
        q: "Welk woord is een **werkwoord** in: *'Tom danst op het plein'*?",
        options: ["danst","Tom","plein","op"],
        answer: 0,
        wrongHints: [null,"Dat is een naam (zelfstandig naamwoord).","Dat is een plaats (zelfstandig naamwoord).","Dat is een voorzetsel."],
      },
      {
        q: "Wat is het **hele werkwoord** van *'lopend'*?",
        options: ["lopen","loopt","liep","lopend"],
        answer: 0,
        wrongHints: [null,"Dat is de hij-vorm tegenwoordige tijd.","Dat is verleden tijd.","Dat is een vorm, niet het hele werkwoord."],
      },
      {
        q: "Welke zin heeft **geen werkwoord**?",
        options: ["De auto rood en groot","De auto rijdt rood","Ik fiets snel","Lisa loopt"],
        answer: 0,
        wrongHints: [null,"Klopt — geen werkwoord.","Bevat 'rijdt' = werkwoord.","Bevat 'fiets' (als ww) of 'snel'.","Bevat 'loopt' = werkwoord."],
      },
    ],
  },

  {
    title: "Tegenwoordige tijd — ik, jij, hij/zij",
    explanation: "**Tegenwoordige tijd** = wat NU gebeurt of altijd gebeurt.\n\n**Vervoeg-regel**:\n• **ik** + **stam** *(zonder uitgang)*\n• **jij/u/hij/zij/het** + **stam + t**\n• **wij/jullie/zij (meervoud)** + **hele werkwoord**\n\n**Hoe vind je de stam?**\nNeem het hele werkwoord en haal **-en** weg.\n• lopen → loop\n• schrijven → schrijf\n• vallen → val\n• gaan → ga *(geen 'en'-uitgang)*\n\n**Voorbeeld — 'lopen'**:\n• ik **loop**\n• jij **loopt**\n• hij/zij/het **loopt**\n• wij/jullie/zij **lopen**\n\n**Voorbeeld — 'schrijven'**:\n• ik **schrijf**\n• jij **schrijft**\n• hij/zij **schrijft**\n• wij/jullie/zij **schrijven**\n\n**Belangrijke uitzonderingen**:\n• **Stam eindigt al op 't'**: niet nog een t erbij.\n  - 'praten' → stam 'praat' → hij **praat** *(geen 'praatt')*.\n• **Stam eindigt op 'd'**: wél nog een t.\n  - 'vinden' → stam 'vind' → hij **vindt**.\n\n**Cito-truc — kofschip-regel** (eigenlijk d/t-regel; zie aparte pad).\n\n**Vraag-vorm**: bij *'jij'* na werkwoord vervalt de t!\n• 'Loop jij?' *(niet 'loopt jij')*\n• 'Schrijf jij?' *(niet 'schrijft jij')*",
    checks: [
      {
        q: "Vervoeg *'spelen'* voor **'hij'** in tegenwoordige tijd:",
        options: ["speelt","speel","spelen","speelde"],
        answer: 0,
        wrongHints: [null,"Dat is de ik-vorm.","Dat is meervoud of hele werkwoord.","Dat is verleden tijd."],
      },
      {
        q: "Welke is **goed**: 'praten' voor 'hij'?",
        options: ["praat","praatt","praats","praaten"],
        answer: 0,
        wrongHints: [null,"Stam eindigt op t — geen tweede t erbij.","Geen 's' in tegenwoordige tijd.","Niet meervoud."],
      },
      {
        q: "**'Vinden'** voor **'hij'**:",
        options: ["vindt","vind","vint","vinden"],
        answer: 0,
        wrongHints: [null,"Dat is de ik-vorm.","'Vinden' eindigt op d — daar moet wél een t erbij.","Dat is meervoud."],
      },
    ],
  },

  {
    title: "Verleden tijd — zwakke werkwoorden",
    explanation: "Werkwoorden zijn **zwak** of **sterk**. **Zwakke** zijn makkelijk: ze krijgen **-de** of **-te** in de verleden tijd.\n\n**Voor 1 persoon**:\n• stam + **-de** of **-te** *(naast 'kofschip-regel')*.\n\n**'t Kofschip-regel**: als de stam eindigt op een letter uit **t-k-f-s-ch-p**, dan is het **-te**. Anders **-de**.\n\n**Voorbeelden — -te (kofschip)**:\n• werken → werk-te → ik **werkte** *('k' in kofschip)*\n• kloppen → klop-te → ik **klopte** *('p')*\n• vissen → vis-te → ik **viste** *('s')*\n• rusten → rust-te → ik **rustte** *(stam eindigt op t — wél tweemaal t)*\n\n**Voorbeelden — -de (NIET in kofschip)**:\n• horen → hoor-de → ik **hoorde**\n• spelen → speel-de → ik **speelde**\n• leren → leer-de → ik **leerde**\n• landen → land-de → ik **landde** *(d eindigt op d — wel dubbel d)*\n\n**Voor meerdere personen** (wij/jullie/zij):\n• stam + **-den** of **-ten**.\n\nVoorbeelden:\n• Wij **werkten** *(meervoud van werkte)*\n• Zij **hoorden** *(meervoud van hoorde)*\n\n**Cito-vraag-vorm**:\n*'Welke is correct in verleden tijd? \"Hij... gisteren hard.\" werkte / werkde'*\n• 'Werken' → stam 'werk' → eindigt op k → kofschip → **werkte**.",
    checks: [
      {
        q: "**'Hij stopte de auto'** of **'Hij stopde de auto'**?",
        options: ["stopte","stopde","beide goed","stopt"],
        answer: 0,
        wrongHints: [null,"Niet — 'stoppen' eindigt op p (kofschip), dus -te.","Wel een verschil — kofschip-regel.","Dat is tegenwoordige tijd."],
      },
      {
        q: "**'Wij ____ gisteren'** met 'horen' in verleden tijd:",
        options: ["hoorden","hoorten","hoorde","horen"],
        answer: 0,
        wrongHints: [null,"Niet — 'horen' eindigt op r (geen kofschip), dus -de.","Dat is enkelvoud verleden tijd.","Dat is hele werkwoord."],
      },
      {
        q: "**'Lisa ____ haar fiets'** met 'fixen' in verleden tijd:",
        options: ["fixte","fixde","fixen","fixt"],
        answer: 0,
        wrongHints: [null,"Niet — 'fixen' eindigt op x (gelijk aan k+s, kofschip), dus -te.","Niet hele werkwoord.","Dat is tegenwoordige tijd."],
      },
    ],
  },

  {
    title: "Verleden tijd — sterke werkwoorden",
    explanation: "**Sterke werkwoorden** veranderen van **klinker** in de verleden tijd. Geen 'kofschip', maar een hele andere vorm.\n\n**Voorbeelden**:\n• lopen → ik **liep** (niet 'loopde')\n• schrijven → ik **schreef**\n• vallen → ik **viel**\n• gaan → ik **ging**\n• zien → ik **zag**\n• zijn → ik **was** *(meervoud: waren)*\n• hebben → ik **had** *(meervoud: hadden)*\n\n**Geen regel — uit het hoofd leren**.\n\n**Lijst belangrijke sterke werkwoorden** *(Cito-niveau)*:\n• zijn → was/waren\n• hebben → had/hadden\n• gaan → ging/gingen\n• komen → kwam/kwamen\n• doen → deed/deden\n• zien → zag/zagen\n• kijken → keek/keken\n• schrijven → schreef/schreven\n• lezen → las/lazen\n• eten → at/aten\n• drinken → dronk/dronken\n• lopen → liep/liepen\n• vallen → viel/vielen\n• vinden → vond/vonden\n• zitten → zat/zaten\n• staan → stond/stonden\n• kunnen → kon/konden\n• mogen → mocht/mochten\n• willen → wilde of wou / wilden\n• moeten → moest/moesten\n\n**Cito-tip**:\n• Bij twijfel: spreek de zin uit en vraag jezelf 'klinkt dit goed?'.\n• Sterke werkwoorden voelen meestal natuurlijk — als je 'liepde' zegt klinkt het meteen mis.\n• Onregelmatige zoals 'zijn' (was) en 'hebben' (had) zijn altijd uit het hoofd.",
    checks: [
      {
        q: "Verleden tijd van **'lopen'** voor 'ik':",
        options: ["liep","loopte","loopde","lopde"],
        answer: 0,
        wrongHints: [null,"Niet — 'lopen' is sterk, geen kofschip-regel.","Geen kofschip — sterk werkwoord.","Geen sterke vervoeging."],
      },
      {
        q: "**'Hij ____ een mooi boek'** ('lezen' verleden tijd, hij-vorm):",
        options: ["las","leesde","lees","leesden"],
        answer: 0,
        wrongHints: [null,"Niet — 'lezen' is sterk: las.","Dat is tegenwoordige tijd.","Dat is meervoud."],
      },
      {
        q: "Verleden tijd van **'gaan'** voor 'wij':",
        options: ["gingen","gaanden","gaden","gaan"],
        answer: 0,
        wrongHints: [null,"Niet — 'gaan' is onregelmatig: gingen.","Geen ding.","Dat is hele werkwoord."],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — werkwoordstijden mix",
    explanation: "Mix-toets: tegenwoordige tijd, verleden tijd, kofschip, sterke werkwoorden.\n\nVeel succes!",
    checks: [
      {
        q: "**'Hij ____ harder'** ('werken', tegenwoordige tijd):",
        options: ["werkt","werk","werken","werkte"],
        answer: 0,
        wrongHints: [null,"Dat is de ik-vorm.","Dat is hele werkwoord.","Dat is verleden tijd."],
      },
      {
        q: "**'Wij ____ samen'** ('praten', verleden tijd):",
        options: ["praatten","praatte","praaten","pratten"],
        answer: 0,
        wrongHints: [null,"Dat is enkelvoud.","Geen kofschip — wel dubbele t bij stam op t.","Niet correct gespeld."],
      },
      {
        q: "**'Zij ____ een appel'** ('eten', verleden tijd, zij-enkelvoud):",
        options: ["at","aten","eette","eette"],
        answer: 0,
        wrongHints: [null,"Dat is meervoud.","Niet — 'eten' is sterk: at.","Niet correct gespeld."],
      },
      {
        q: "**'Hij ____ in zijn boek'** ('lezen', tegenwoordige tijd):",
        options: ["leest","las","leeste","lees"],
        answer: 0,
        wrongHints: [null,"Dat is verleden tijd.","Niet correct.","Dat is de ik-vorm."],
      },
      {
        q: "**'Mark ____ snel naar school'** ('rennen', verleden tijd):",
        options: ["rende","rent","rennen","rentde"],
        answer: 0,
        wrongHints: [null,"Dat is tegenwoordige tijd.","Hele werkwoord.","Niet correct gespeld."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const werkwoordTijdenPo = {
  id: "werkwoord-tijden-po",
  title: "Werkwoordsvervoeging T/V — Cito groep 7-8",
  emoji: "📝",
  level: "groep5-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taalverzorging — werkwoordsvervoeging",
  intro:
    "Werkwoordsvervoeging voor groep 5-8: tegenwoordige tijd, kofschip-regel, sterke werkwoorden in verleden tijd. ~12 min.",
  triggerKeywords: [
    "werkwoord","vervoegen","tegenwoordige tijd","verleden tijd",
    "kofschip","sterk werkwoord","stam","ik-vorm","wij-vorm",
  ],
  chapters,
  steps,
};

export default werkwoordTijdenPo;
