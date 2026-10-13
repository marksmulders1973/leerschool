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
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een werkwoord?",
    explanation: "Een **werkwoord** zegt **wat iemand doet** (of wat er gebeurt).\n\n**Voorbeelden**:\n• Tom **loopt** naar school. → 'loopt' = werkwoord.\n• Het **regent** vandaag. → 'regent' = werkwoord.\n• Lisa **leest** een boek. → 'leest' = werkwoord.\n\n**Wat doet een werkwoord?**\n• Beschrijft een **handeling**: lopen, eten, schrijven, springen.\n• Beschrijft een **toestand**: zijn, hebben, blijven, zitten.\n• Beschrijft een **gebeurtenis**: regenen, sneeuwen, vallen.\n\n**Het hele werkwoord** = het werkwoord in z'n basisvorm. Eindigt vrijwel altijd op **-en**:\n• lopen, eten, schrijven, zijn, hebben, doen.\n\n**Het werkwoord verandert per persoon en tijd**:\n• Ik **loop** *(ik-vorm tegenwoordige tijd)*\n• Hij **loopt** *(hij/zij-vorm tegenwoordige tijd)*\n• Wij **liepen** *(verleden tijd)*\n\nIn dit pad leer je hoe je werkwoorden **vervoegt** in de:\n• **Tegenwoordige tijd** (nu).\n• **Verleden tijd** (eerder).\n\n**Toets-tip**: het werkwoord is meestal het **drukste** woord in een zin — het 'doet'.",
    checks: [
      {
        q: "Welk woord is een **werkwoord** in: *'Tom danst op het plein'*?",
        options: ["danst","Tom","plein","op"],
        answer: 0,
        wrongHints: [null,"Dat is een naam (zelfstandig naamwoord).","Dat is een plaats (zelfstandig naamwoord).","Dat is een voorzetsel."],
        uitlegPad: {
          stappen: [{ titel: "Wat doet Tom?", tekst: "Tom danst = doe-actie. Danst = werkwoord (vervoegd: hij danst)." }],
          woorden: [{ woord: "danst", uitleg: "3e persoon van 'dansen'. Werkwoord." }],
          theorie: "Werkwoord = wat onderwerp doet. Vraag 'wat doet Tom?' → danst.",
          voorbeelden: [{ type: "ontleed", tekst: "Tom (eigennaam) danst (ww) op (vz) het (lidw) plein (zelfst nw)." }],
          basiskennis: [{ onderwerp: "Test ik+ww", uitleg: "'Ik dans' ✓ → ww. 'Ik Tom' ✗ → geen ww." }],
          niveaus: { basis: "danst.", simpeler: "Wat doet Tom? Hij danst. Danst = werkwoord.", nogSimpeler: "Danst" },
        },
      },
      {
        q: "Wat is het **hele werkwoord** van *'lopend'*?",
        options: ["lopen","loopt","liep","gelopen"],
        answer: 0,
        wrongHints: [null,"Dat is de hij-vorm tegenwoordige tijd.","Dat is verleden tijd.","Dat is het voltooid deelwoord (ik heb gelopen). Welke vorm staat in het woordenboek?"],
        uitlegPad: {
          stappen: [{ titel: "Hele = -en-vorm", tekst: "Lopend = -end-vorm. Hele werkwoord = lopen (eindigt op -en)." }],
          woorden: [{ woord: "lopend", uitleg: "Tegenwoordig deelwoord van lopen (-end vorm)." }],
          theorie: "Hele werkwoord = infinitief op -en. Lopend (deelwoord), liep (vt), loopt (3e pers) zijn vormen.",
          voorbeelden: [{ type: "tabel", tekst: "lopend → lopen. Schreef → schrijven. At → eten." }],
          basiskennis: [{ onderwerp: "Hele = woordenboek", uitleg: "Hele werkwoord = vorm in woordenboek (lopen, niet loopt)." }],
          niveaus: { basis: "lopen.", simpeler: "Lopend komt van lopen. Hele werkwoord eindigt op -en = lopen.", nogSimpeler: "Lopen" },
        },
      },
      {
        q: "Welke zin heeft **geen werkwoord**?",
        options: ["De auto rood en groot","De rode auto rijdt","Ik fiets snel","Lisa loopt"],
        answer: 0,
        wrongHints: [null, "Wat doet de auto? Dat woord is een werkwoord.", "Wat doe ik? Ik fiets. Dan is 'fiets' hier een werkwoord.", "Wat doet Lisa? Dat woord is een werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Welke zin is incompleet", tekst: "'De auto rood en groot' = geen werkwoord = geen echte zin." }],
          woorden: [{ woord: "geen werkwoord", uitleg: "Zin zonder werkwoord = onvolledig (geen actie of toestand-ww)." }],
          theorie: "Echte zin heeft minstens één werkwoord. 'Auto rood' mist 'is' (toestand-ww).",
          voorbeelden: [{ type: "test", tekst: "De auto rood ✗ → 'is' ontbreekt. De auto IS rood ✓." }],
          basiskennis: [{ onderwerp: "Toestands-ww", uitleg: "'Is/zijn/wordt' zijn ook werkwoorden — zonder die woorden is de zin incompleet." }],
          niveaus: { basis: "Zin 1 = geen ww.", simpeler: "Zin 1 mist 'is' tussen auto en rood. De andere zinnen hebben rijdt/fiets/loopt = ww.", nogSimpeler: "Zin 1" },
        },
      },
    ],
  },

  {
    title: "Tegenwoordige tijd — ik, jij, hij/zij",
    explanation: "**Tegenwoordige tijd** = wat NU gebeurt of altijd gebeurt.\n\n**Vervoeg-regel**:\n• **ik** + **stam** *(zonder uitgang)*\n• **jij/u/hij/zij/het** + **stam + t**\n• **wij/jullie/zij (meervoud)** + **hele werkwoord**\n\n**Hoe vind je de stam?**\nNeem het hele werkwoord en haal **-en** weg.\n• lopen → loop\n• schrijven → schrijf\n• vallen → val\n• gaan → ga *(geen 'en'-uitgang)*\n\n**Voorbeeld — 'lopen'**:\n• ik **loop**\n• jij **loopt**\n• hij/zij/het **loopt**\n• wij/jullie/zij **lopen**\n\n**Voorbeeld — 'schrijven'**:\n• ik **schrijf**\n• jij **schrijft**\n• hij/zij **schrijft**\n• wij/jullie/zij **schrijven**\n\n**Belangrijke uitzonderingen**:\n• **Stam eindigt al op 't'**: niet nog een t erbij.\n  - 'praten' → stam 'praat' → hij **praat** *(geen 'praatt')*.\n• **Stam eindigt op 'd'**: wél nog een t.\n  - 'vinden' → stam 'vind' → hij **vindt**.\n\n**Toets-truc — kofschip-regel** (eigenlijk d/t-regel; zie apart pad).\n\n**Vraag-vorm**: bij *'jij'* na werkwoord vervalt de t!\n• 'Loop jij?' *(niet 'loopt jij')*\n• 'Schrijf jij?' *(niet 'schrijft jij')*",
    checks: [
      {
        q: "Vervoeg *'spelen'* voor **'hij'** in tegenwoordige tijd:",
        options: ["speelt","speel","spelen","speelde"],
        answer: 0,
        wrongHints: [null,"Dat is de ik-vorm.","Dat is meervoud of hele werkwoord.","Dat is verleden tijd."],
        uitlegPad: {
          stappen: [{ titel: "Stam + t", tekst: "Spelen → stam = speel. Hij + stam + t = speelt." }],
          woorden: [{ woord: "stam", uitleg: "Hele werkwoord min -en. Spelen → speel." }],
          theorie: "Hij/zij/het = stam + t in tegenwoordige tijd.",
          voorbeelden: [{ type: "tabel", tekst: "Ik speel (stam). Jij/hij speelt (stam+t). Wij spelen (heel ww)." }],
          basiskennis: [{ onderwerp: "Niet -de", uitleg: "Verleden tijd zou 'speelde' zijn. Hier vragen ze TT." }],
          niveaus: { basis: "speelt.", simpeler: "Spelen → stam speel. Hij + stam + t = speelt.", nogSimpeler: "Speelt" },
        },
      },
      {
        q: "Welke vorm is **goed**: 'praten' bij 'hij'?",
        options: ["praat","praatt","praats","praaten"],
        answer: 0,
        wrongHints: [null,"Stam eindigt op t — geen tweede t erbij.","Bij 'hij' komt er geen s achter de stam. Wat dan wel?","Het meervoud is 'praten' met één a. Is 'hij' meervoud?"],
        uitlegPad: {
          stappen: [{ titel: "Stam eindigt op t", tekst: "Praten → stam = praat. Stam eindigt al op t — niet nog een t erbij." }],
          woorden: [{ woord: "praat", uitleg: "Stam van praten. Eindigt al op t." }],
          theorie: "Regel: stam + t. Maar als stam al op t eindigt → geen extra t (geen 'praatt')." ,
          voorbeelden: [{ type: "tabel", tekst: "Praten → hij praat. Eten → hij eet. Zitten → hij zit. Stam eindigt op t = geen extra t." }],
          basiskennis: [{ onderwerp: "Verschil met d", uitleg: "Stam op d → wél extra t (vinden → vindt). Stam op t → niet (praten → praat)." }],
          niveaus: { basis: "praat.", simpeler: "Praten → stam praat. Eindigt al op t → geen tweede t. → praat.", nogSimpeler: "Praat" },
        },
      },
      {
        q: "Hoe schrijf je **'vinden'** bij **'hij'**?",
        options: ["vindt","vind","vint","vinden"],
        answer: 0,
        wrongHints: [null,"Dat is de ik-vorm.","Wat is de stam van 'vinden'? Laat je een letter van de stam weg?","Dat is meervoud."],
        uitlegPad: {
          stappen: [{ titel: "Stam op d + t", tekst: "Vinden → stam = vind. Stam + t = vindt (uitspreken: vint, schrijven: vindt)." }],
          woorden: [{ woord: "vindt", uitleg: "3e persoon van vinden. Stam (vind) + t = vindt." }],
          theorie: "Stam eindigend op d: wél extra t toevoegen. Vind + t = vindt. Klinkt als 'vint' maar D blijft.",
          voorbeelden: [{ type: "tabel", tekst: "Vinden → hij vindt. Worden → hij wordt. Houden → hij houdt." }],
          basiskennis: [{ onderwerp: "Klink-truc", uitleg: "Hoor 'vint' maar SCHRIJF 'vindt' (d behouden + t erbij)." }],
          niveaus: { basis: "vindt.", simpeler: "Vinden → stam vind. Hij + stam + t = vindt (klinkt als vint, maar schrijven met d en t).", nogSimpeler: "Vindt" },
        },
      },
    ],
  },

  {
    title: "Verleden tijd — zwakke werkwoorden",
    explanation: "Werkwoorden zijn **zwak** of **sterk**. **Zwakke** zijn makkelijk: ze krijgen **-de** of **-te** in de verleden tijd.\n\n**Voor 1 persoon**:\n• stam + **-de** of **-te** *(volgens de 'kofschip-regel')*.\n\n**'t Kofschip-regel**: als de stam eindigt op een letter uit **t-k-f-s-ch-p**, dan is het **-te**. Anders **-de**.\n\n**Voorbeelden — -te (kofschip)**:\n• werken → werk-te → ik **werkte** *('k' in kofschip)*\n• kloppen → klop-te → ik **klopte** *('p')*\n• vissen → vis-te → ik **viste** *('s')*\n• rusten → rust-te → ik **rustte** *(stam eindigt op t — wél tweemaal t)*\n\n**Voorbeelden — -de (NIET in kofschip)**:\n• horen → hoor-de → ik **hoorde**\n• spelen → speel-de → ik **speelde**\n• leren → leer-de → ik **leerde**\n• landen → land-de → ik **landde** *(stam eindigt op d — wel dubbel d)*\n\n**Voor meerdere personen** (wij/jullie/zij):\n• stam + **-den** of **-ten**.\n\nVoorbeelden:\n• Wij **werkten** *(meervoud van werkte)*\n• Zij **hoorden** *(meervoud van hoorde)*\n\n**toetsvraag-vorm**:\n*'Welke is correct in verleden tijd? \"Hij... gisteren hard.\" werkte / werkde'*\n• 'Werken' → stam 'werk' → eindigt op k → kofschip → **werkte**.",
    checks: [
      {
        q: "Welke zin is goed: **'Hij stopte de auto'** of **'Hij stopde de auto'**?",
        options: ["stopte","stopde","beide goed","stopt"],
        answer: 0,
        wrongHints: [null,"Op welke letter eindigt de stam? Zit die in 't kofschip?","Er is maar één goede vorm. Op welke letter eindigt de stam 'stop'?","Dat is tegenwoordige tijd."],
        uitlegPad: {
          stappen: [{ titel: "Kofschip-regel: P → -te", tekst: "Stoppen → stam stop → eindigt op P (in 'kofschip') → -te. → stopte." }],
          woorden: [{ woord: "kofschip", uitleg: "Letters t-k-f-s-ch-p. Stam eindigt op één daarvan → -te in verleden tijd." }],
          theorie: "Zwakke werkwoorden: stam in kofschip → -te. Niet in kofschip → -de.",
          voorbeelden: [{ type: "tabel", tekst: "Stop+te (P=kofschip). Werk+te (K). Vis+te (S). Hoor+de (R, niet kofschip)." }],
          basiskennis: [{ onderwerp: "Ezelsbrug", uitleg: "'t Kofschip — neem letters t, k, f, s, ch, p uit het woord 'kofschip'." }],
          niveaus: { basis: "stopte.", simpeler: "Stoppen → stam stop. P zit in kofschip → -te → stopte.", nogSimpeler: "Stopte" },
        },
      },
      {
        q: "**'Wij ____ gisteren'** met 'horen' in verleden tijd:",
        options: ["hoorden","hoorten","hoorde","horen"],
        answer: 0,
        wrongHints: [null,"Op welke letter eindigt de stam? Zit die in 't kofschip?","Dat is enkelvoud verleden tijd.","Dat is hele werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "R + meervoud", tekst: "Horen → stam hoor → eindigt op R (geen kofschip) → -de. Wij = meervoud → -den." }],
          woorden: [{ woord: "hoorden", uitleg: "Meervoud verleden tijd van horen. Stam + den." }],
          theorie: "Meervoud (wij/jullie/zij): stam + -den (zwak) of -ten (kofschip).",
          voorbeelden: [{ type: "tabel", tekst: "Wij hoorden (R, geen kofschip). Wij stopten (P, kofschip). Wij werkten (K, kofschip)." }],
          basiskennis: [{ onderwerp: "Enkel vs meervoud", uitleg: "Ik hoorde (-de). Wij hoorden (-den)." }],
          niveaus: { basis: "hoorden.", simpeler: "Horen → R (geen kofschip) → -de. Meervoud (wij) = -den → hoorden.", nogSimpeler: "Hoorden" },
        },
      },
      {
        q: "**'Lisa ____ haar fiets'** met 'fixen' in verleden tijd:",
        options: ["fixte","fixde","fixen","fixt"],
        answer: 0,
        wrongHints: [null,"Op welke klank eindigt de stam? Een x klinkt als k+s — zit die in 't kofschip?","Dat is het hele werkwoord. Lisa deed het al: welke vorm hoort daarbij?","Dat is tegenwoordige tijd."],
        uitlegPad: {
          stappen: [{ titel: "X = k+s = kofschip", tekst: "Fixen → stam fix → X (eigenlijk k+s) → kofschip → -te → fixte." }],
          woorden: [{ woord: "fixte", uitleg: "Verleden tijd van fixen (Engels-NL leenwoord)." }],
          theorie: "Letter X = K+S klank → telt als kofschip. Faxen → faxte. Mixen → mixte.",
          voorbeelden: [{ type: "leenwoorden", tekst: "Faxen→faxte. Mixen→mixte. Fixen→fixte. Allemaal -te." }],
          basiskennis: [{ onderwerp: "Engelse leen-ww", uitleg: "Engelse werkwoorden volgen NL kofschip-regel: stam-eindigt-op-x → -te." }],
          niveaus: { basis: "fixte.", simpeler: "Fixen → x (=ks, kofschip) → -te → fixte.", nogSimpeler: "Fixte" },
        },
      },
    ],
  },

  {
    title: "Verleden tijd — sterke werkwoorden",
    explanation: "**Sterke werkwoorden** veranderen van **klinker** in de verleden tijd. Geen 'kofschip', maar een heel andere vorm.\n\n**Voorbeelden**:\n• lopen → ik **liep** (niet 'loopde')\n• schrijven → ik **schreef**\n• vallen → ik **viel**\n• gaan → ik **ging**\n• zien → ik **zag**\n• zijn → ik **was** *(meervoud: waren)*\n• hebben → ik **had** *(meervoud: hadden)*\n\n**Geen regel — uit het hoofd leren**.\n\n**Lijst belangrijke sterke werkwoorden** *(Toets-niveau)*:\n• zijn → was/waren\n• hebben → had/hadden\n• gaan → ging/gingen\n• komen → kwam/kwamen\n• doen → deed/deden\n• zien → zag/zagen\n• kijken → keek/keken\n• schrijven → schreef/schreven\n• lezen → las/lazen\n• eten → at/aten\n• drinken → dronk/dronken\n• lopen → liep/liepen\n• vallen → viel/vielen\n• vinden → vond/vonden\n• zitten → zat/zaten\n• staan → stond/stonden\n• kunnen → kon/konden\n• mogen → mocht/mochten\n• willen → wilde of wou / wilden\n• moeten → moest/moesten\n\n**Toets-tip**:\n• Bij twijfel: spreek de zin uit en vraag jezelf 'klinkt dit goed?'.\n• Sterke werkwoorden voelen meestal natuurlijk — als je 'liepde' zegt klinkt het meteen mis.\n• Onregelmatige zoals 'zijn' (was) en 'hebben' (had) leer je altijd uit het hoofd.",
    checks: [
      {
        q: "Verleden tijd van **'lopen'** voor 'ik':",
        options: ["liep","loopte","loopde","lopde"],
        answer: 0,
        wrongHints: [null,"Zeg je 'ik loopte'? Bij 'lopen' werkt de -te-regel niet.","Zeg je 'ik loopde'? Luister hoe het echt klinkt.","Hier verdwijnt een o, en ook de -de klopt niet. Hoe zeg je het?"],
        uitlegPad: {
          stappen: [{ titel: "Sterk = klinker verandert", tekst: "Lopen is sterk: oo → ie → ik liep (geen -de/-te)." }],
          woorden: [{ woord: "sterk werkwoord", uitleg: "Werkwoord waarbij klinker verandert in verleden tijd." }],
          theorie: "Sterke werkwoorden volgen GEEN kofschip-regel. Klinker-wisseling. Uit hoofd leren.",
          voorbeelden: [{ type: "tabel", tekst: "Lopen→liep. Schrijven→schreef. Vinden→vond. Eten→at." }],
          basiskennis: [{ onderwerp: "Klink-test", uitleg: "Voelt 'loopde' raar? → meestal sterk werkwoord." }],
          niveaus: { basis: "liep.", simpeler: "Lopen is sterk werkwoord. Klinker oo wordt ie → liep. (Niet loopde — geen kofschip-regel).", nogSimpeler: "Liep" },
        },
      },
      {
        q: "**'Hij ____ een mooi boek'** ('lezen' verleden tijd, hij-vorm):",
        options: ["las","leesde","lees","leesden"],
        answer: 0,
        wrongHints: [null,"Niet — 'lezen' is een sterk werkwoord: de klinker verandert.","Dat is tegenwoordige tijd.","Dat is meervoud."],
        uitlegPad: {
          stappen: [{ titel: "Lezen → las", tekst: "Lezen is sterk. Klinker e → a. Hij las." }],
          woorden: [{ woord: "las", uitleg: "Verleden tijd enkelvoud van lezen. Sterke vervoeging." }],
          theorie: "Sterke vervoeging lezen: lees-las-gelezen. Klinker-sprong e→a→e.",
          voorbeelden: [{ type: "tabel", tekst: "Lezen → ik las / wij lazen / gelezen." }],
          basiskennis: [{ onderwerp: "Bij twijfel uitspreken", uitleg: "'Hij leesde' klinkt fout → sterk → las." }],
          niveaus: { basis: "las.", simpeler: "Lezen sterk: e→a → las. Hij las het boek.", nogSimpeler: "Las" },
        },
      },
      {
        q: "Verleden tijd van **'gaan'** voor 'wij':",
        options: ["gingen","gaanden","gaden","gaan"],
        answer: 0,
        wrongHints: [null,"'gaan' is onregelmatig — de klinker verandert helemaal. Hoe klinkt het in de verleden tijd?","Deze vorm bestaat niet; 'gaan' volgt geen gewone -de/-te-regel.","Dat is het hele werkwoord, geen verleden tijd."],
        uitlegPad: {
          stappen: [{ titel: "Gaan → gingen", tekst: "Gaan = sterk + onregelmatig. Wij gingen." }],
          woorden: [{ woord: "gingen", uitleg: "Meervoud verleden tijd van gaan. Onregelmatig." }],
          theorie: "Onregelmatige werkwoorden: stam verandert volledig. Gaan→ging/gingen. Zijn→was/waren. Hebben→had/hadden.",
          voorbeelden: [{ type: "tabel", tekst: "Gaan: ik ging, wij gingen. Komen: kwam, kwamen. Doen: deed, deden." }],
          basiskennis: [{ onderwerp: "Top-onregelmatige", uitleg: "Zijn, hebben, gaan, komen, doen — leer uit hoofd." }],
          niveaus: { basis: "gingen.", simpeler: "Gaan is onregelmatig: ik ging, wij gingen. Niet gaande/gaden — geen regel werkt.", nogSimpeler: "Gingen" },
        },
      },
    ],
  },

  {
    title: "Eindopdracht — werkwoordstijden mix",
    explanation: "Mix-toets: tegenwoordige tijd, verleden tijd, kofschip, sterke werkwoorden.\n\nVeel succes!",
    checks: [
      {
        q: "**'Hij ____ harder'** ('werken', tegenwoordige tijd):",
        options: ["werkt","werk","werken","werkte"],
        answer: 0,
        wrongHints: [null,"Dat is de ik-vorm.","Dat is hele werkwoord.","Dat is verleden tijd."],
        uitlegPad: {
          stappen: [{ titel: "Stam + t", tekst: "Werken → stam werk. Hij + stam + t = werkt." }],
          woorden: [{ woord: "werkt", uitleg: "3e persoon TT van werken." }],
          theorie: "Hij/zij/het: stam + t in tegenwoordige tijd.",
          voorbeelden: [{ type: "vorm", tekst: "Ik werk. Jij werkt. Hij werkt. Wij werken." }],
          basiskennis: [{ onderwerp: "Niet -te", uitleg: "'Werkte' = verleden tijd. Hier vragen ze nu (tegenwoordig)." }],
          niveaus: { basis: "werkt.", simpeler: "Werken → stam werk + t = werkt (hij-vorm tegenwoordige tijd).", nogSimpeler: "Werkt" },
        },
      },
      {
        q: "**'Wij ____ samen'** ('praten', verleden tijd):",
        options: ["praatten","praatte","praaten","pratten"],
        answer: 0,
        wrongHints: [null,"Dat is enkelvoud.","Dit lijkt op het hele werkwoord. Waar is de uitgang van de verleden tijd?","Hoeveel a's heeft de stam 'praat'? Die klank moet lang blijven."],
        uitlegPad: {
          stappen: [{ titel: "Stam op t + ten", tekst: "Praten → stam praat (eindigt op t = kofschip) → -te. Wij = -ten. Stam praat + -ten = praatten (dubbele t!)." }],
          woorden: [{ woord: "praatten", uitleg: "Meervoud verleden tijd van praten. Dubbele t (stam praat + ten)." }],
          theorie: "Wanneer stam op t eindigt + kofschip → meervoud krijgt 2 t's: praat-ten = praatten.",
          voorbeelden: [{ type: "stap", tekst: "Praten: stam praat. T in kofschip → -te. Wij = ten → praat+ten = praatten." }],
          basiskennis: [{ onderwerp: "Geen 'pratten'", uitleg: "Stam = praat (lange aa), niet prat. Spelling: praatten." }],
          niveaus: { basis: "praatten.", simpeler: "Praten → stam praat → -te (kofschip) → wij = -ten → praat + ten = praatten.", nogSimpeler: "Praatten" },
        },
      },
      {
        q: "**'Zij ____ een appel'** ('eten', verleden tijd, zij-enkelvoud):",
        options: ["at","aten","eette","ate"],
        answer: 0,
        wrongHints: [null,"Dat is meervoud.","Niet — 'eten' is een sterk werkwoord: de klank verandert.","Dat lijkt op Engels — hoe zeg je het in het Nederlands?"],
        uitlegPad: {
          stappen: [{ titel: "Eten → at", tekst: "Eten = sterk werkwoord. Klinker e → a. Zij at." }],
          woorden: [{ woord: "at", uitleg: "Verleden tijd enkelvoud van eten. Sterke vervoeging." }],
          theorie: "Sterke vervoeging eten: eet-at-gegeten. Klinker e→a→e.",
          voorbeelden: [{ type: "tabel", tekst: "Ik at. Wij aten. Heb gegeten." }],
          basiskennis: [{ onderwerp: "Voelt fout", uitleg: "'Eette' klinkt fout → sterk werkwoord → at." }],
          niveaus: { basis: "at.", simpeler: "Eten sterk: e→a → at. Zij at een appel.", nogSimpeler: "At" },
        },
      },
      {
        q: "**'Hij ____ in zijn boek'** ('lezen', tegenwoordige tijd):",
        options: ["leest","las","leeste","lees"],
        answer: 0,
        wrongHints: [null,"Dat is verleden tijd.","Bij 'hij' is het stam + t. Komt er dan nog een e achter?","Dat is de ik-vorm."],
        uitlegPad: {
          stappen: [{ titel: "Stam + t", tekst: "Lezen → stam lees. Hij + stam + t = leest." }],
          woorden: [{ woord: "leest", uitleg: "3e persoon TT van lezen. Stam (lees) + t." }],
          theorie: "Hij/zij/het: stam + t. Werkt ook bij sterke ww in tegenwoordige tijd.",
          voorbeelden: [{ type: "tabel", tekst: "Ik lees. Jij/hij leest. Wij lezen. (Verleden: las, lazen)." }],
          basiskennis: [{ onderwerp: "TT vs VT", uitleg: "Tegenwoordige tijd = nu. Las = verleden tijd." }],
          niveaus: { basis: "leest.", simpeler: "Lezen → stam lees + t = leest (hij-vorm tegenwoordige tijd).", nogSimpeler: "Leest" },
        },
      },
      {
        q: "**'Mark ____ snel naar school'** ('rennen', verleden tijd):",
        options: ["rende","rent","rennen","rentde"],
        answer: 0,
        wrongHints: [null,"Dat is tegenwoordige tijd.","Dat is het hele werkwoord.","De stam van 'rennen' is 'ren'. Hoort daar een t in?"],
        uitlegPad: {
          stappen: [{ titel: "Rennen → rende", tekst: "Rennen → stam ren. N geen kofschip → -de → rende." }],
          woorden: [{ woord: "rende", uitleg: "Verleden tijd enkelvoud van rennen. Zwak werkwoord met -de." }],
          theorie: "Zwak ww: stam (ren) niet in kofschip → -de → rende.",
          voorbeelden: [{ type: "vorm", tekst: "Ik rende. Jij/hij rende. Wij renden." }],
          basiskennis: [{ onderwerp: "Stam = ren", uitleg: "Rennen → ren-nen → stam ren (één n)." }],
          niveaus: { basis: "rende.", simpeler: "Rennen → stam ren → N (geen kofschip) → -de → rende.", nogSimpeler: "Rende" },
        },
      },
      {
        q: "**'De jongen ____ door de regen'** ('fietsen', tegenwoordige tijd):",
        options: ["fietst","fietste","fietsen","fiets"],
        answer: 0,
        wrongHints: [null, "Dat is verleden tijd.", "Dat is de wij/zij-vorm (meervoud) of het hele werkwoord.", "Dat is de ik-vorm — bij hij hoort er t bij."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: stam vinden", tekst: "Werkwoord 'fietsen' → schrap -en → **stam = fiets**." },
            { titel: "Stap 2: TT-uitgang voor hij/zij/het", tekst: "Tegenwoordige tijd 3e persoon enkelvoud = **stam + t**. Fiets + t = **fietst**." },
            { titel: "Toets-instinker: stam eindigt op -s", tekst: "Bij stammen op -s lijkt 'fietst' op een typfout maar IS correct. NIET 'fietsst' (geen dubbele s) en NIET 'fiets' (mist de t)." },
          ],
          woorden: [
            { woord: "stam", uitleg: "Werkwoord min -en. 'Fietsen' → stam 'fiets'." },
            { woord: "TT 3e persoon", uitleg: "Hij/zij/het + werkwoord NU = stam + t." },
          ],
          theorie: "TT-vervoeging:\n• Ik + stam (ik fiets)\n• Jij/hij/zij/het + stam + t (jij fietst, hij fietst)\n• Wij/jullie/zij + hele werkwoord (wij fietsen)",
          voorbeelden: [
            { type: "vorm", tekst: "Werken: ik werk, hij werkt, wij werken." },
            { type: "vorm", tekst: "Lezen: ik lees, hij leest, wij lezen." },
          ],
          basiskennis: [{ onderwerp: "Stam-op-s instinker", uitleg: "Stam eindigend op -s, -d, -x of -z: gewoon t erbij. 'Hij racet', 'hij vist', 'hij rijdt'." }],
          niveaus: { basis: "fietst.", simpeler: "'Fietsen' → stam 'fiets'. Hij-vorm = stam + t = 'fietst'.", nogSimpeler: "Fietst" },
        },
      },
      {
        q: "**'Wij ____ vroeger naar het strand'** ('gaan', verleden tijd):",
        options: ["gingen","ging","gaan","ginge"],
        answer: 0,
        wrongHints: [null, "Dat is enkelvoud (ik/hij ging).", "'Gaan' is tegenwoordige tijd. 'Vroeger' vraagt om verleden tijd.", "Die vorm bestaat niet. Hoe zeg je 'wij ... vroeger'?"],
        uitlegPad: {
          stappen: [
            { titel: "Sterk werkwoord: gaan", tekst: "**Gaan** is een sterk (onregelmatig) werkwoord. Verleden tijd verandert klinker: ga → ging. Geen -te/-de, geen 't-kofschip." },
            { titel: "Meervoud: + -en", tekst: "Wij/jullie/zij verleden tijd: voeg **-en** toe aan de stam-met-veranderde-klinker. Ging → gingen." },
            { titel: "Enkelvoud vs meervoud", tekst: "• Enkelvoud (ik/jij/hij/zij): **ging**\n• Meervoud (wij/jullie/zij): **gingen**\nVoltooid deelwoord: **gegaan**." },
          ],
          woorden: [
            { woord: "sterk werkwoord", uitleg: "Klinker verandert in verleden tijd (zingen→zong, lopen→liep)." },
            { woord: "meervoud + -en", uitleg: "Werkwoorden in meervoud krijgen -en uitgang (wij gingen, wij liepen)." },
          ],
          theorie: "Sterke werkwoorden: leer de 3 vormen uit hoofd (hele werkwoord — verleden enk. — voltooid deelwoord).\n• gaan — ging — gegaan\n• lopen — liep — gelopen\n• zien — zag — gezien\n• komen — kwam — gekomen",
          voorbeelden: [
            { type: "vorm", tekst: "Lopen verleden: ik liep, wij liepen." },
            { type: "vorm", tekst: "Zien verleden: hij zag, zij zagen." },
          ],
          basiskennis: [{ onderwerp: "Top-10 sterke WW", uitleg: "Gaan, komen, zien, doen, geven, nemen, lopen, weten, vinden, blijven — onthoud deze." }],
          niveaus: { basis: "gingen.", simpeler: "Gaan is sterk: ga→ging. Wij/zij = meervoud → -en erbij = gingen.", nogSimpeler: "Gingen" },
        },
      },
      {
        q: "Welke vorm is de **voltooid tegenwoordige tijd** van 'lezen' bij *'Lisa'*?",
        options: ["heeft gelezen","las","leest","heeft geleest"],
        answer: 0,
        wrongHints: [null, "Dat is de verleden tijd. Bij de voltooide tijd hoort een hulpwerkwoord.", "Dat is tegenwoordige tijd.", "'Lezen' is een sterk werkwoord. Eindigt het voltooid deelwoord dan op -t?"],
        uitlegPad: {
          stappen: [
            { titel: "Welke tijd is gevraagd?", tekst: "Voltooid tegenwoordige tijd (VTT) = **hebben/zijn + voltooid deelwoord**. Bij 'lezen': heeft + gelezen." },
            { titel: "Voltooid deelwoord van 'lezen'", tekst: "Lezen is een **sterk werkwoord** → voltooid deelwoord = **gelezen** (klinker verandert). NIET 'geleest' (dat zou bij zwak ww horen)." },
            { titel: "Toets-truc 3 tijden onderscheiden", tekst: "• Tegenwoordig: 'leest'\n• Verleden: 'las'\n• Voltooid: 'heeft gelezen'\nElke tijd heeft eigen vorm — lees vraag goed welke wordt gevraagd." },
          ],
          woorden: [
            { woord: "VTT", uitleg: "Voltooid tegenwoordige tijd. Hulpwerkwoord (heeft/is) + voltooid deelwoord (ge...d/t/sterk)." },
            { woord: "voltooid deelwoord", uitleg: "Werkwoordsvorm bij 'hebben/zijn'. Zwak: ge-stam-t/d. Sterk: klinker verandert vaak." },
          ],
          theorie: "Voltooid deelwoord-vorming:\n• **Zwak**: ge- + stam + -t/-d (gewerkt, gehoord)\n• **Sterk**: ge- + klinker verandert (gelezen, gezongen, gevangen)\nKijk altijd in lijst onregelmatige werkwoorden als je twijfelt.",
          voorbeelden: [
            { type: "vorm", tekst: "Werken (zwak): heeft gewerkt." },
            { type: "vorm", tekst: "Zingen (sterk): heeft gezongen." },
            { type: "vorm", tekst: "Schrijven (sterk): heeft geschreven." },
          ],
          basiskennis: [{ onderwerp: "Toets-instinker", uitleg: "'Geleest' bestaat NIET. Lezen is sterk → gelezen." }],
          niveaus: { basis: "heeft gelezen.", simpeler: "VTT = hebben + voltooid deelwoord. Lezen sterk → gelezen. 'Lisa heeft gelezen'.", nogSimpeler: "Heeft gelezen" },
        },
      },
      {
        q: "**'De hond ____ de bal'** ('vangen', tegenwoordige tijd):",
        options: ["vangt","vangd","vang","vingt"],
        answer: 0,
        wrongHints: [null, "Niet correct — TT-uitgang is t, niet d. Schrijf zoals je hoort.", "Dat is de ik-vorm (ik vang) — hij hoort er t bij.", "Niet correct — geen klinkerwissel in TT (alleen in verleden)."],
        uitlegPad: {
          stappen: [
            { titel: "Stam = vang", tekst: "Vangen → schrap -en → stam 'vang'. (Niet met een i — die klinkerwissel komt pas in de verleden tijd: 'ving'.)" },
            { titel: "TT 3e persoon: stam + t", tekst: "Hij/zij/de hond + stam + t = vang + t = **vangt**." },
            { titel: "Toets-spelregel: t of d?", tekst: "TT 3e persoon = ALTIJD t aan het eind. Bij stam op -d zoals 'rijd-en' → 'hij rijdt' (twee letters: de stam-d + extra t). Bij vangt: stam eindigt op -g, dus alleen t erbij." },
          ],
          woorden: [
            { woord: "TT-uitgang", uitleg: "3e persoon tegenwoordige tijd: altijd -t. Geen -d, geen -de." },
            { woord: "klinkerwissel", uitleg: "Sommige sterke ww veranderen klinker in verleden tijd, NIET in TT." },
          ],
          theorie: "TT geheugensteun: **'t kofschip' geldt voor VERLEDEN tijd. In TT is het simpeler: stam + t (geen kofschip-check).",
          voorbeelden: [
            { type: "vorm", tekst: "Vangen TT: ik vang, hij vangt, wij vangen." },
            { type: "vorm", tekst: "Vangen VT (verleden): ik ving, wij vingen." },
          ],
          basiskennis: [{ onderwerp: "TT vs VT", uitleg: "In TT geen klinkerwissel. Pas in VT verandert 'a' van vangen naar 'i' (ving)." }],
          niveaus: { basis: "vangt.", simpeler: "Vangen → stam 'vang'. Hij-vorm TT = stam + t = vangt.", nogSimpeler: "Vangt" },
        },
      },
      { q: "Wat is de verleden tijd van 'werken' bij 'hij'?", options: ["werkte","werkde","werk","werkten"], answer: 0, wrongHints: [null, "Op welke letter eindigt de stam? Zit die in 't kofschip?", "'Werk' is de ik-vorm in de tegenwoordige tijd.", "'Werkten' is meervoud (wij werkten). Hoe is het bij 'hij'?"] },
      { q: "Wat is de verleden tijd van 'spelen' bij 'wij'?", options: ["speelden","speelde","speelten","spelen"], answer: 0, wrongHints: [null, "'Speelde' is enkelvoud (ik speelde). Hoe is het bij 'wij'?", "Zit de l in 't kofschip? Kies dan -de of -te.", "'Spelen' is de tegenwoordige tijd (wij spelen nu)."] },
      { q: "Welke letters zijn de 't kofschip'-letters?", options: ["t-k-f-s-ch-p","t-k-h-s-d","t-k-f-s-g-p","t-k-f-z-ch-p"], answer: 0, wrongHints: [null, "Zit er in 't kofschip een h of een d? Spreek het langzaam uit.", "De g lijkt op ch, maar welke klank hoor je in 't kofschip?", "Hoor je een z in 't kofschip? Spreek het langzaam uit."] },
      { q: "Ik **bak** brood. Wat is de stam van 'bakken'?", options: ["bak","bakt","bakk","bakken"], answer: 0, wrongHints: [null, "Dat is de hij-vorm: stam + t.", "Hoor je twee k's aan het eind? De stam is de ik-vorm.", "Dat is het hele werkwoord. De stam is korter."] },
      { q: "Vul de goede vorm in (tegenwoordige tijd): 'Wij ___ blij.'", options: ["zijn","is","bent","waren"], answer: 0, wrongHints: [null, "'Is' hoort bij hij, zij of het. Welke vorm hoort bij wij?", "'Bent' hoort bij jij of u. Welke vorm hoort bij wij?", "'Waren' is verleden tijd. Hoe zeg je het nu, in de tegenwoordige tijd?"] },
      { q: "Vul in: 'Jij ___ mooi.' (zijn, tegenwoordige tijd)", options: ["bent","is","zijn","waren"], answer: 0, wrongHints: [null, "'Is' hoort bij hij, zij of het.", "'Zijn' hoort bij wij, jullie of zij.", "'Waren' is verleden tijd."] },
      { q: "Vul in: 'Ik ___ een boek.' (lezen, tegenwoordige tijd)", options: ["lees","leest","lezen","las"], answer: 0, wrongHints: [null, "'Leest' hoort bij hij of zij. Wat hoort bij ik?", "Dat is het hele werkwoord (en het meervoud: wij lezen).", "'Las' is verleden tijd."] },
      { q: "Wat is de verleden tijd van 'fietsen' bij 'ik'?", options: ["fietste","fietsde","fiets","fietsten"], answer: 0, wrongHints: [null, "Op welke letter eindigt de stam? Zit die in 't kofschip?", "'Fiets' is de tegenwoordige tijd (ik fiets nu).", "'Fietsten' is meervoud (wij fietsten)."] },
      { q: "Wat is de verleden tijd van 'lopen' bij 'ik'?", options: ["liep","loopte","loopde","loopen"], answer: 0, wrongHints: [null, "Zeg je 'ik loopte'? Luister of dat goed klinkt.", "Bij 'lopen' werkt de -te/-de-regel niet. Hoe zeg je het echt?", "Zo schrijf je het hele werkwoord niet — en het is ook geen verleden tijd."] },
      { q: "Wat is het voltooid deelwoord van 'fietsen'?", options: ["gefietst","gefietsd","fietste","fietsen"], answer: 0, wrongHints: [null, "Op welke letter eindigt de stam? Zit die in 't kofschip?", "'Fietste' is verleden tijd. Hoe zeg je 'ik heb ...'?", "Dat is het hele werkwoord. Hoe zeg je 'ik heb ...'?"] },
      { q: "Wat is het voltooid deelwoord van 'lopen'?", options: ["gelopen","gelopt","geloopt","lopen"], answer: 0, wrongHints: [null, "Hier mist een o en de uitgang klopt niet. Hoe zeg je 'ik heb ...'?", "Zeg je 'ik heb geloopt'? Bij een sterk werkwoord eindigt het niet op -t.", "Dat is het hele werkwoord. Hoe zeg je 'ik heb ...'?"] },
      { q: "Welke **hulpwerkwoorden** gebruik je in de **voltooide tijd**?", options: ["hebben of zijn","worden of blijven","kunnen of willen","gaan of komen"], answer: 0, wrongHints: [null, "'Worden' hoort bij de lijdende vorm (het huis wordt gebouwd).", "'Kunnen' en 'willen' zeggen wat iemand kan of wil, niet dat iets al klaar is.", "Zeg je 'ik ga gefietst'? Welk woord staat vóór 'gefietst'?"] },
      { q: "Vul in: 'Ik ___ gisteren naar school.' (gaan)", options: ["ging","ga","gaat","gegaan"], answer: 0, wrongHints: [null, "'Ga' is tegenwoordige tijd. 'Gisteren' vraagt om verleden tijd.", "'Gaat' hoort bij hij of zij, en is tegenwoordige tijd.", "'Gegaan' heeft een hulpwerkwoord nodig (ik ben gegaan)."] },
      { q: "Vul in: 'Hij ___ veel boeken.' (lezen, tegenwoordige tijd)", options: ["leest","lees","lezen","las"], answer: 0, wrongHints: [null, "'Lees' hoort bij ik. Wat komt erbij bij hij?", "Dat is het hele werkwoord.", "'Las' is verleden tijd."] },
      { q: "Wat is een **regelmatig** werkwoord?", options: ["Het krijgt in de verleden tijd stam + te of stam + de","De klinker verandert in de verleden tijd","Het is een werkwoord dat je heel vaak gebruikt","Het helpt een ander werkwoord, zoals 'kunnen'"], answer: 0, wrongHints: [null, "Bij 'werken → werkte' verandert de klinker niet. Is 'werken' regelmatig?", "'Regelmatig' betekent hier niet 'vaak'. Het gaat om hoe je de verleden tijd maakt.", "Een hulpwerkwoord kan regelmatig of onregelmatig zijn. Waar let je dan op?"] },
      { q: "Wat is een **onregelmatig** werkwoord?", options: ["De klinker verandert in de verleden tijd, zoals lopen → liep","Het krijgt stam + te of stam + de, zoals werken → werkte","Je gebruikt het maar af en toe, zoals 'kwaken' of 'zweven'","Het helpt een ander werkwoord, zoals 'kunnen' of 'moeten'"], answer: 0, wrongHints: [null, "Werken → werkte volgt de vaste regel. Is dat onregelmatig?", "Onregelmatig betekent hier niet 'af en toe'. Kijk naar de verleden tijd.", "Ook 'kunnen' heeft een verleden tijd (kon). Waar gaat onregelmatig over?"] },
      { q: "Van welk werkwoord komt **'wij waren'**?", options: ["zijn","worden","weten","varen"], answer: 0, wrongHints: [null, "'Worden' wordt in de verleden tijd 'werden'.", "'Weten' wordt in de verleden tijd 'wisten'.", "Varen is iets anders: met een boot."] },
      { q: "Wat is de tegenwoordige tijd van 'kopen' bij 'wij'?", options: ["kopen","koopt","koop","kocht"], answer: 0, wrongHints: [null, "'Koopt' hoort bij hij of zij.", "'Koop' hoort bij ik.", "'Kocht' is verleden tijd."] },
      { q: "Wat is de verleden tijd van 'hopen' bij 'ik'?", options: ["hoopte","hoopde","hoop","hoopten"], answer: 0, wrongHints: [null, "Op welke letter eindigt de stam? Zit die in 't kofschip?", "'Hoop' is tegenwoordige tijd (ik hoop nu).", "'Hoopten' is meervoud (wij hoopten)."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const werkwoordTijdenPo = {
  id: "werkwoord-tijden-po",
  title: "Werkwoordsvervoeging T/V — Doorstroomtoets groep 7-8",
  emoji: "📝",
  level: "groep5-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taalverzorging — werkwoordsvervoeging",
  prerequisites: [
    { id: "woordsoorten-po", title: "Woordsoorten", niveau: "po-1F" },
    { id: "spelling-overige-po", title: "Spelling — basisregels", niveau: "po-1F" },
  ],
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
