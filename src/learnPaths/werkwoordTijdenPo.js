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
        uitlegPad: {
          stappen: [{ titel: "Wat doet Tom?", tekst: "Tom danst = doe-actie. Danst = werkwoord (vervoegd: hij danst)." }],
          woorden: [{ woord: "danst", uitleg: "3e persoon van 'dansen'. Werkwoord." }],
          theorie: "Werkwoord = wat onderwerp doet. Vraag 'wat doet Tom?' → danst.",
          voorbeelden: [{ type: "ontleed", tekst: "Tom (eigennaam) danst (ww) op (vz) het (lidw) plein (zelfst nw)." }],
          basiskennis: [{ onderwerp: "Test ik+ww", uitleg: "'Ik dans' ✓ → ww. 'Ik Tom' ✗ → geen ww." }],
          niveaus: { basis: "danst. A.", simpeler: "Wat doet Tom? Hij danst. Danst = werkwoord. = A.", nogSimpeler: "Danst = A." },
        },
      },
      {
        q: "Wat is het **hele werkwoord** van *'lopend'*?",
        options: ["lopen","loopt","liep","lopend"],
        answer: 0,
        wrongHints: [null,"Dat is de hij-vorm tegenwoordige tijd.","Dat is verleden tijd.","Dat is een vorm, niet het hele werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Hele = -en-vorm", tekst: "Lopend = -end-vorm. Hele werkwoord = lopen (eindigt op -en)." }],
          woorden: [{ woord: "lopend", uitleg: "Tegenwoordig deelwoord van lopen (-end vorm)." }],
          theorie: "Hele werkwoord = infinitief op -en. Lopend (deelwoord), liep (vt), loopt (3e pers) zijn vormen.",
          voorbeelden: [{ type: "tabel", tekst: "lopend → lopen. Schreef → schrijven. At → eten." }],
          basiskennis: [{ onderwerp: "Hele = woordenboek", uitleg: "Hele werkwoord = vorm in woordenboek (lopen, niet loopt)." }],
          niveaus: { basis: "lopen. A.", simpeler: "Lopend komt van lopen. Hele werkwoord eindigt op -en = lopen. = A.", nogSimpeler: "Lopen = A." },
        },
      },
      {
        q: "Welke zin heeft **geen werkwoord**?",
        options: ["De auto rood en groot","De auto rijdt rood","Ik fiets snel","Lisa loopt"],
        answer: 0,
        wrongHints: [null,"Klopt — geen werkwoord.","Bevat 'fiets' (als ww) of 'snel'.","Bevat 'loopt' = werkwoord.","Bevat 'rijdt' = werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Welke zin is incompleet", tekst: "'De auto rood en groot' = geen werkwoord = geen echte zin." }],
          woorden: [{ woord: "geen werkwoord", uitleg: "Zin zonder werkwoord = onvolledig (geen actie of toestand-ww)." }],
          theorie: "Echte zin heeft minstens één werkwoord. 'Auto rood' mist 'is' (toestand-ww).",
          voorbeelden: [{ type: "test", tekst: "De auto rood ✗ → 'is' ontbreekt. De auto IS rood ✓." }],
          basiskennis: [{ onderwerp: "Toestands-ww", uitleg: "'Is/zijn/wordt' zijn ook werkwoorden — zonder hen is zin incompleet." }],
          niveaus: { basis: "Zin 1 = geen ww. A.", simpeler: "Zin 1 mist 'is' tussen auto en rood. De andere zinnen hebben rijdt/fiets/loopt = ww. = A.", nogSimpeler: "Zin 1 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Stam + t", tekst: "Spelen → stam = speel. Hij + stam + t = speelt." }],
          woorden: [{ woord: "stam", uitleg: "Hele werkwoord min -en. Spelen → speel." }],
          theorie: "Hij/zij/het = stam + t in tegenwoordige tijd.",
          voorbeelden: [{ type: "tabel", tekst: "Ik speel (stam). Jij/hij speelt (stam+t). Wij spelen (heel ww)." }],
          basiskennis: [{ onderwerp: "Niet -de", uitleg: "Verleden tijd zou 'speelde' zijn. Hier vragen ze TT." }],
          niveaus: { basis: "speelt. A.", simpeler: "Spelen → stam speel. Hij + stam + t = speelt. = A.", nogSimpeler: "Speelt = A." },
        },
      },
      {
        q: "Welke is **goed**: 'praten' voor 'hij'?",
        options: ["praat","praatt","praats","praaten"],
        answer: 0,
        wrongHints: [null,"Stam eindigt op t — geen tweede t erbij.","Geen 's' in tegenwoordige tijd.","Niet meervoud."],
        uitlegPad: {
          stappen: [{ titel: "Stam eindigt op t", tekst: "Praten → stam = praat. Stam eindigt al op t — niet nog een t erbij." }],
          woorden: [{ woord: "praat", uitleg: "Stam van praten. Eindigt al op t." }],
          theorie: "Regel: stam + t. Maar als stam al op t eindigt → geen extra t (geen 'praatt')." ,
          voorbeelden: [{ type: "tabel", tekst: "Praten → hij praat. Eten → hij eet. Zitten → hij zit. Stam eindigt op t = geen extra t." }],
          basiskennis: [{ onderwerp: "Verschil met d", uitleg: "Stam op d → wél extra t (vinden → vindt). Stam op t → niet (praten → praat)." }],
          niveaus: { basis: "praat. A.", simpeler: "Praten → stam praat. Eindigt al op t → geen tweede t. → praat. = A.", nogSimpeler: "Praat = A." },
        },
      },
      {
        q: "**'Vinden'** voor **'hij'**:",
        options: ["vindt","vind","vint","vinden"],
        answer: 0,
        wrongHints: [null,"Dat is de ik-vorm.","'Vinden' eindigt op d — daar moet wél een t erbij.","Dat is meervoud."],
        uitlegPad: {
          stappen: [{ titel: "Stam op d + t", tekst: "Vinden → stam = vind. Stam + t = vindt (uitspreken: vint, schrijven: vindt)." }],
          woorden: [{ woord: "vindt", uitleg: "3e persoon van vinden. Stam (vind) + t = vindt." }],
          theorie: "Stam eindigend op d: wél extra t toevoegen. Vind + t = vindt. Klinkt als 'vint' maar D blijft.",
          voorbeelden: [{ type: "tabel", tekst: "Vinden → hij vindt. Worden → hij wordt. Houden → hij houdt." }],
          basiskennis: [{ onderwerp: "Klink-truc", uitleg: "Hoor 'vint' maar SCHRIJF 'vindt' (d behouden + t erbij)." }],
          niveaus: { basis: "vindt. A.", simpeler: "Vinden → stam vind. Hij + stam + t = vindt (klinkt als vint, maar schrijven met d en t). = A.", nogSimpeler: "Vindt = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Kofschip-regel: P → -te", tekst: "Stoppen → stam stop → eindigt op P (in 'kofschip') → -te. → stopte." }],
          woorden: [{ woord: "kofschip", uitleg: "Letters t-k-f-s-ch-p. Stam eindigt op één daarvan → -te in verleden tijd." }],
          theorie: "Zwakke werkwoorden: stam in kofschip → -te. Niet in kofschip → -de.",
          voorbeelden: [{ type: "tabel", tekst: "Stop+te (P=kofschip). Werk+te (K). Vis+te (S). Hoor+de (R, niet kofschip)." }],
          basiskennis: [{ onderwerp: "Ezelsbrug", uitleg: "'t Kofschip — neem letters t, k, f, s, ch, p uit het woord 'kofschip'." }],
          niveaus: { basis: "stopte. A.", simpeler: "Stoppen → stam stop. P zit in kofschip → -te → stopte. = A.", nogSimpeler: "Stopte = A." },
        },
      },
      {
        q: "**'Wij ____ gisteren'** met 'horen' in verleden tijd:",
        options: ["hoorden","hoorten","hoorde","horen"],
        answer: 0,
        wrongHints: [null,"Niet — 'horen' eindigt op r (geen kofschip), dus -de.","Dat is enkelvoud verleden tijd.","Dat is hele werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "R + meervoud", tekst: "Horen → stam hoor → eindigt op R (geen kofschip) → -de. Wij = meervoud → -den." }],
          woorden: [{ woord: "hoorden", uitleg: "Meervoud verleden tijd van horen. Stam + den." }],
          theorie: "Meervoud (wij/jullie/zij): stam + -den (zwak) of -ten (kofschip).",
          voorbeelden: [{ type: "tabel", tekst: "Wij hoorden (R, geen kofschip). Wij stopten (P, kofschip). Wij werkten (K, kofschip)." }],
          basiskennis: [{ onderwerp: "Enkel vs meervoud", uitleg: "Ik hoorde (-de). Wij hoorden (-den)." }],
          niveaus: { basis: "hoorden. A.", simpeler: "Horen → R (geen kofschip) → -de. Meervoud (wij) = -den → hoorden. = A.", nogSimpeler: "Hoorden = A." },
        },
      },
      {
        q: "**'Lisa ____ haar fiets'** met 'fixen' in verleden tijd:",
        options: ["fixte","fixde","fixen","fixt"],
        answer: 0,
        wrongHints: [null,"Niet — 'fixen' eindigt op x (gelijk aan k+s, kofschip), dus -te.","Niet hele werkwoord.","Dat is tegenwoordige tijd."],
        uitlegPad: {
          stappen: [{ titel: "X = k+s = kofschip", tekst: "Fixen → stam fix → X (eigenlijk k+s) → kofschip → -te → fixte." }],
          woorden: [{ woord: "fixte", uitleg: "Verleden tijd van fixen (Engels-NL leenwoord)." }],
          theorie: "Letter X = K+S klank → telt als kofschip. Faxen → faxte. Mixen → mixte.",
          voorbeelden: [{ type: "leenwoorden", tekst: "Faxen→faxte. Mixen→mixte. Fixen→fixte. Allemaal -te." }],
          basiskennis: [{ onderwerp: "Engelse leen-ww", uitleg: "Engelse werkwoorden volgen NL kofschip-regel: stam-eindigt-op-x → -te." }],
          niveaus: { basis: "fixte. A.", simpeler: "Fixen → x (=ks, kofschip) → -te → fixte. = A.", nogSimpeler: "Fixte = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Sterk = klinker verandert", tekst: "Lopen is sterk: oo → ie → ik liep (geen -de/-te)." }],
          woorden: [{ woord: "sterk werkwoord", uitleg: "Werkwoord waarbij klinker verandert in verleden tijd." }],
          theorie: "Sterke werkwoorden volgen GEEN kofschip-regel. Klinker-wisseling. Uit hoofd leren.",
          voorbeelden: [{ type: "tabel", tekst: "Lopen→liep. Schrijven→schreef. Vinden→vond. Eten→at." }],
          basiskennis: [{ onderwerp: "Klink-test", uitleg: "Voelt 'loopde' raar? → meestal sterk werkwoord." }],
          niveaus: { basis: "liep. A.", simpeler: "Lopen is sterk werkwoord. Klinker oo wordt ie → liep. (Niet loopde — geen kofschip-regel). = A.", nogSimpeler: "Liep = A." },
        },
      },
      {
        q: "**'Hij ____ een mooi boek'** ('lezen' verleden tijd, hij-vorm):",
        options: ["las","leesde","lees","leesden"],
        answer: 0,
        wrongHints: [null,"Niet — 'lezen' is sterk: las.","Dat is tegenwoordige tijd.","Dat is meervoud."],
        uitlegPad: {
          stappen: [{ titel: "Lezen → las", tekst: "Lezen is sterk. Klinker e → a. Hij las." }],
          woorden: [{ woord: "las", uitleg: "Verleden tijd enkelvoud van lezen. Sterke vervoeging." }],
          theorie: "Sterke vervoeging lezen: lees-las-gelezen. Klinker-sprong e→a→e.",
          voorbeelden: [{ type: "tabel", tekst: "Lezen → ik las / wij lazen / gelezen." }],
          basiskennis: [{ onderwerp: "Bij twijfel uitspreken", uitleg: "'Hij leesde' klinkt fout → sterk → las." }],
          niveaus: { basis: "las. A.", simpeler: "Lezen sterk: e→a → las. Hij las het boek. = A.", nogSimpeler: "Las = A." },
        },
      },
      {
        q: "Verleden tijd van **'gaan'** voor 'wij':",
        options: ["gingen","gaanden","gaden","gaan"],
        answer: 0,
        wrongHints: [null,"Niet — 'gaan' is onregelmatig: gingen.","Geen ding.","Dat is hele werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Gaan → gingen", tekst: "Gaan = sterk + onregelmatig. Wij gingen." }],
          woorden: [{ woord: "gingen", uitleg: "Meervoud verleden tijd van gaan. Onregelmatig." }],
          theorie: "Onregelmatige werkwoorden: stam verandert volledig. Gaan→ging/gingen. Zijn→was/waren. Hebben→had/hadden.",
          voorbeelden: [{ type: "tabel", tekst: "Gaan: ik ging, wij gingen. Komen: kwam, kwamen. Doen: deed, deden." }],
          basiskennis: [{ onderwerp: "Top-onregelmatige", uitleg: "Zijn, hebben, gaan, komen, doen — leer uit hoofd." }],
          niveaus: { basis: "gingen. A.", simpeler: "Gaan is onregelmatig: ik ging, wij gingen. Niet gaande/gaden — geen regel werkt. = A.", nogSimpeler: "Gingen = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Stam + t", tekst: "Werken → stam werk. Hij + stam + t = werkt." }],
          woorden: [{ woord: "werkt", uitleg: "3e persoon TT van werken." }],
          theorie: "Hij/zij/het: stam + t in tegenwoordige tijd.",
          voorbeelden: [{ type: "vorm", tekst: "Ik werk. Jij werkt. Hij werkt. Wij werken." }],
          basiskennis: [{ onderwerp: "Niet -te", uitleg: "'Werkte' = verleden tijd. Hier vragen ze nu (tegenwoordig)." }],
          niveaus: { basis: "werkt. A.", simpeler: "Werken → stam werk + t = werkt (hij-vorm tegenwoordige tijd). = A.", nogSimpeler: "Werkt = A." },
        },
      },
      {
        q: "**'Wij ____ samen'** ('praten', verleden tijd):",
        options: ["praatten","praatte","praaten","pratten"],
        answer: 0,
        wrongHints: [null,"Dat is enkelvoud.","Geen kofschip — wel dubbele t bij stam op t.","Niet correct gespeld."],
        uitlegPad: {
          stappen: [{ titel: "Stam op t + ten", tekst: "Praten → stam praat (eindigt op t = kofschip) → -te. Wij = -ten. Stam praat + -ten = praatten (dubbele t!)." }],
          woorden: [{ woord: "praatten", uitleg: "Meervoud verleden tijd van praten. Dubbele t (stam praat + ten)." }],
          theorie: "Wanneer stam op t eindigt + kofschip → meervoud krijgt 2 t's: praat-ten = praatten.",
          voorbeelden: [{ type: "stap", tekst: "Praten: stam praat. T in kofschip → -te. Wij = ten → praat+ten = praatten." }],
          basiskennis: [{ onderwerp: "Geen 'pratten'", uitleg: "Stam = praat (lange aa), niet prat. Spelling: praatten." }],
          niveaus: { basis: "praatten. A.", simpeler: "Praten → stam praat → -te (kofschip) → wij = -ten → praat + ten = praatten. = A.", nogSimpeler: "Praatten = A." },
        },
      },
      {
        q: "**'Zij ____ een appel'** ('eten', verleden tijd, zij-enkelvoud):",
        options: ["at","aten","eette","eette"],
        answer: 0,
        wrongHints: [null,"Dat is meervoud.","Niet — 'eten' is sterk: at.","Niet correct gespeld."],
        uitlegPad: {
          stappen: [{ titel: "Eten → at", tekst: "Eten = sterk werkwoord. Klinker e → a. Zij at." }],
          woorden: [{ woord: "at", uitleg: "Verleden tijd enkelvoud van eten. Sterke vervoeging." }],
          theorie: "Sterke vervoeging eten: eet-at-gegeten. Klinker e→a→e.",
          voorbeelden: [{ type: "tabel", tekst: "Ik at. Wij aten. Heb gegeten." }],
          basiskennis: [{ onderwerp: "Voelt fout", uitleg: "'Eette' klinkt fout → sterk werkwoord → at." }],
          niveaus: { basis: "at. A.", simpeler: "Eten sterk: e→a → at. Zij at een appel. = A.", nogSimpeler: "At = A." },
        },
      },
      {
        q: "**'Hij ____ in zijn boek'** ('lezen', tegenwoordige tijd):",
        options: ["leest","las","leeste","lees"],
        answer: 0,
        wrongHints: [null,"Dat is verleden tijd.","Niet correct.","Dat is de ik-vorm."],
        uitlegPad: {
          stappen: [{ titel: "Stam + t", tekst: "Lezen → stam lees. Hij + stam + t = leest." }],
          woorden: [{ woord: "leest", uitleg: "3e persoon TT van lezen. Stam (lees) + t." }],
          theorie: "Hij/zij/het: stam + t. Werkt ook bij sterke ww in tegenwoordige tijd.",
          voorbeelden: [{ type: "tabel", tekst: "Ik lees. Jij/hij leest. Wij lezen. (Verleden: las, lazen)." }],
          basiskennis: [{ onderwerp: "TT vs VT", uitleg: "Tegenwoordige tijd = nu. Las = verleden tijd." }],
          niveaus: { basis: "leest. A.", simpeler: "Lezen → stam lees + t = leest (hij-vorm tegenwoordige tijd). = A.", nogSimpeler: "Leest = A." },
        },
      },
      {
        q: "**'Mark ____ snel naar school'** ('rennen', verleden tijd):",
        options: ["rende","rent","rennen","rentde"],
        answer: 0,
        wrongHints: [null,"Dat is tegenwoordige tijd.","Hele werkwoord.","Niet correct gespeld."],
        uitlegPad: {
          stappen: [{ titel: "Rennen → rende", tekst: "Rennen → stam ren. N geen kofschip → -de → rende." }],
          woorden: [{ woord: "rende", uitleg: "Verleden tijd enkelvoud van rennen. Zwak werkwoord met -de." }],
          theorie: "Zwak ww: stam (ren) niet in kofschip → -de → rende.",
          voorbeelden: [{ type: "vorm", tekst: "Ik rende. Jij/hij rende. Wij renden." }],
          basiskennis: [{ onderwerp: "Stam = ren", uitleg: "Rennen → ren-nen → stam ren (één n)." }],
          niveaus: { basis: "rende. A.", simpeler: "Rennen → stam ren → N (geen kofschip) → -de → rende. = A.", nogSimpeler: "Rende = A." },
        },
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
