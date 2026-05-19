// Leerpad: Latijn basis — VWO Gymnasium
// Klassieke talen-CSE: naamvallen + vervoeging + cultuur.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  rom: "#8d6e63",
  goud: "#ffd54f",
  acc: "#42a5f5",
};

const stepEmojis = ["📜", "🔠", "📖", "🏛️", "🏆"];

const chapters = [
  { letter: "A", title: "Latijnse uitspraak + alfabet", emoji: "📜", from: 0, to: 0 },
  { letter: "B", title: "Naamvallen + zelfstandig naamwoorden", emoji: "🔠", from: 1, to: 1 },
  { letter: "C", title: "Werkwoorden + vervoeging", emoji: "📖", from: 2, to: 2 },
  { letter: "D", title: "Romeinse cultuur + auteurs", emoji: "🏛️", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Uitspraak + alfabet ───────────────────────────────
  {
    title: "Latijn — alfabet + uitspraak",
    explanation:
      "**Latijn** = taal van het Romeinse Rijk. Geen moedertaal meer, maar:\n• Basis Romaanse talen (Italiaans, Spaans, Frans, Portugees, Roemeens).\n• 60% Engelse woordenschat heeft Latijnse oorsprong (vooral abstracta).\n• Wetenschap (medisch, biologisch, juridisch) gebruikt Latijn.\n• Katholieke Kerk: liturgie + Vaticaan-officiële taal.\n• Motto's, citaten, instellingen.\n\n**Uitsterven als gesproken taal**:\n• Klassiek Latijn ~750 v.Chr.-200 n.Chr.\n• Volkslatijn → middeleeuws Latijn (lingua franca-geleerden) → uitfasering met vernacular-talen.\n• Italiaans, Spaans, Frans = directe afstammelingen.\n\n**Alfabet**:\n• 23 letters in klassiek Latijn: A B C D E F G H I K L M N O P Q R S T V X Y Z.\n• Geen J, U, W (J = I, U = V).\n• 'Iulius Caesar' geschreven, uitgesproken 'Yuli-us Kaesar'.\n• Moderne Latijn-leerboeken voegen U + J toe voor leesbaarheid.\n\n**Uitspraak klassiek Latijn** (Erasmus-traditie, voor school):\n• C = altijd K (Caesar = Kaesar, niet Cesar).\n• V = W (vita = wita, leven).\n• AE = ai (zoals 'naai').\n• OE = oi.\n• AU = au (zoals 'rauw').\n• EI = ei.\n• Klemtoon: meestal voorlaatste lettergreep.\n\n**Uitspraak kerkelijk Latijn** (Italiaans-stijl):\n• C voor e/i = ch (Caesar = Tsjaesar).\n• Vita = vita (met v).\n• Gebruikt in kerk + opera.\n\n**Schrift**:\n• Hoofdletters: 'Capitalis' — kapitale letters uit Romeinse tijd.\n• Kleine letters ontwikkeld later (middeleeuws).\n• Geen spaties tussen woorden in vroege Romeinse teksten (scriptio continua) — leesbaar pas vanaf middeleeuwen.\n\n**Romeinse cijfers**:\n• I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.\n• Optellend + aftrekkend systeem.\n• IV = 4 (1 minder dan 5), IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.\n• Voorbeeld: MMXXV = 2025.\n• Jaartal: MCMLXIV = 1964.\n\n**Latijnse afkortingen in modern gebruik**:\n• **AD** (Anno Domini) = in het Jaar des Heren.\n• **BC** (Before Christ) — modern engels — Latijn = a.Chr.\n• **etc.** (et cetera) = en zo voort.\n• **e.g.** (exempli gratia) = bijvoorbeeld.\n• **i.e.** (id est) = dat is.\n• **vs.** (versus) = tegen.\n• **PS** (post scriptum) = naschrift.\n• **NB** (nota bene) = let goed op.\n• **viz.** (videlicet) = namelijk.\n• **CV** (curriculum vitae) = levensloop.\n• **A.D./P.M.** = ante/post meridiem (voor/na middag).\n\n**Latijnse motto's** (Cito-classics):\n• *Carpe diem* = Pluk de dag.\n• *Veni vidi vici* (Caesar) = Ik kwam, ik zag, ik overwon.\n• *Cogito ergo sum* (Descartes) = Ik denk, dus ik ben.\n• *Per aspera ad astra* = Via moeilijkheden naar de sterren.\n• *In medio stat virtus* = In het midden ligt de deugd.\n• *Memento mori* = Bedenk dat je sterft.\n• *Sic transit gloria mundi* = Zo gaat 's werelds roem voorbij.\n• *Tempora mutantur* = De tijden veranderen.\n• *Mens sana in corpore sano* = Een gezonde geest in een gezond lichaam (Juvenalis).\n• *Errare humanum est* = Vergissen is menselijk.",
    checks: [
      {
        q: "Hoeveel letters had **klassiek Latijns alfabet**?",
        options: ["23","26","20","30"],
        answer: 0,
        wrongHints: [null, "Niet — modern Nederlands.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Geen J/U/W", tekst: "**Klassiek Latijn = 23 letters**: A B C D E F G H I K L M N O P Q R S T V X Y Z. **Geen J, U of W**. J = I (Iulius = Yulius), U = V (vita = wita). Moderne edities voegen J+U toe voor leesbaarheid." }],
          niveaus: { basis: "23. A.", simpeler: "23 letters = A.", nogSimpeler: "23 = A." },
        },
      },
      {
        q: "**Caesar** wordt klassiek uitgesproken als:",
        options: ["Kaesar","Tsesar","Cijzer","Caisar"],
        answer: 0,
        wrongHints: [null, "Kerkelijk Latijn.", "Engels.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "C = K", tekst: "**Klassiek Latijn** (Erasmus-uitspraak): C = altijd K. Caesar = **Kaesar** (Kai-sar). Vandaar Duitse 'Kaiser' + Russische 'Tsar' (verwerving). **Kerkelijk Latijn**: C voor e/i = ch → Tsesar. Op gymnasium wordt klassieke uitspraak geleerd." }],
          niveaus: { basis: "Kaesar. A.", simpeler: "C = K = Kaesar = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**MMXXV** in arabische cijfers:",
        options: ["2025","2055","2520","1925"],
        answer: 0,
        wrongHints: [null, "Niet correct.", "Niet relevant.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "Romeinse cijfers", tekst: "MM = 1000+1000 = **2000**. XX = 10+10 = **20**. V = **5**. Samen = **2025**." }],
          niveaus: { basis: "2025. A.", simpeler: "MM=2000, XX=20, V=5 → 2025 = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "*Cogito ergo sum* (Descartes) betekent:",
        options: ["Ik denk, dus ik ben","Pluk de dag","Ik kwam, ik zag, ik overwon","Bedenk dat je sterft"],
        answer: 0,
        wrongHints: [null, "Niet — carpe diem.", "Niet — veni vidi vici.", "Niet — memento mori."],
        uitlegPad: {
          stappen: [{ titel: "Descartes 1637", tekst: "**Cogito, ergo sum** = Ik denk, dus ik ben. Descartes' onbetwijfelbaar startpunt in *Discours de la méthode* (1637). Latijn omdat hij voor geleerde Europa schreef. Fundament moderne filosofie." }],
          niveaus: { basis: "Ik denk dus ik ben. A.", simpeler: "Cogito = denken = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat betekent **e.g.** (afkorting)?",
        options: ["Bijvoorbeeld","Dat is","Tegen","Let op"],
        answer: 0,
        wrongHints: [null, "Niet — i.e.", "Niet — vs.", "Niet — NB."],
        uitlegPad: {
          stappen: [{ titel: "Exempli gratia", tekst: "**e.g.** = *exempli gratia* (Latijn 'voor het geval van een voorbeeld') = **bijvoorbeeld**. Verschilt van **i.e.** = *id est* = 'dat is' (toelichting/herformulering). Verschil belangrijk in academisch + zakelijk schrijven." }],
          niveaus: { basis: "Bijvoorbeeld. A.", simpeler: "e.g. = bv = A.", nogSimpeler: "bv = A." },
        },
      },
    ],
  },

  // ─── B. Naamvallen + zelfstandige naamwoorden ─────────────
  {
    title: "Naamvallen — 6 vormen",
    explanation:
      "**Latijn heeft 6 naamvallen** (vs Duits 4, Nederlands 0). Naamval bepaalt **functie** van zelfstandig naamwoord in zin → eindigingen veranderen.\n\n**De 6 naamvallen**:\n\n**1. Nominatief (Nom)**:\n• Functie: **onderwerp** ('wie/wat doet?').\n• Vraag: Wie/wat?\n• Vorm voor enkelvoud + meervoud verschillend.\n• *Caesar venit* = Caesar komt. (Caesar = nominatief).\n\n**2. Genitief (Gen)**:\n• Functie: **bezit** ('van wie?').\n• Vraag: Van wie/waarvan?\n• *Liber Caesaris* = Het boek van Caesar.\n• Vergelijkbaar met Engels 's of NL 'van'.\n\n**3. Datief (Dat)**:\n• Functie: **meewerkend voorwerp** ('aan/voor wie?').\n• Vraag: Aan wie? Voor wie?\n• *Dono Caesari* = Ik geef aan Caesar.\n• Vergelijkbaar met NL voor/aan.\n\n**4. Accusatief (Acc)**:\n• Functie: **lijdend voorwerp** ('wie/wat ondergaat?').\n• Vraag: Wie/wat?\n• *Video Caesarem* = Ik zie Caesar.\n• Ook richting bij beweging: *eo Romam* = Ik ga naar Rome.\n\n**5. Ablatief (Abl)**:\n• Functie: **omstandigheid** (door/met/in/uit).\n• Vraag: Waardoor/waarmee/waarin/waaruit?\n• *Cum Caesare* = Met Caesar.\n• *Romae* = In Rome (locatie kan ook locatief zijn).\n• *Gladio* = Met het zwaard.\n• Veelzijdig — vele functies.\n\n**6. Vocatief (Voc)**:\n• Functie: **aanspreken**.\n• 'Brutus, jij ook?'\n• In meeste woorden gelijk aan nominatief, behalve bij sommige zelfst. naamwoorden -us → -e.\n• 'O Caesar!' (anders dan 'Caesar venit').\n• Beroemd: 'Et tu, Brute?' (vocatief van Brutus, met regelmatige -e-uitgang).\n\n**Latijnse declinaties** (5 hoofd-groepen zelfst. naamwoorden):\n\n**1e declinatie** (meestal vrouwelijk, eindigt op -a):\n```\nNom: puella (meisje)\nGen: puellae\nDat: puellae\nAcc: puellam\nAbl: puella (lange a)\nVoc: puella\n```\nMeervoud: puellae / puellarum / puellis / puellas / puellis.\n\n**2e declinatie** (meestal mannelijk -us / onzijdig -um):\n```\nNom: dominus (heer) — neutrum: bellum (oorlog)\nGen: domini — belli\nDat: domino — bello\nAcc: dominum — bellum\nAbl: domino — bello\nVoc: domine — bellum\n```\n\n**3e declinatie** (gemengd, divers):\n```\nNom: rex (koning) — homo (mens)\nGen: regis — hominis\nDat: regi — homini\nAcc: regem — hominem\nAbl: rege — homine\n```\n\n**4e** (zeldzamer, -us mannelijk): manus (hand).\n\n**5e** (zeldzaamst, -es): dies (dag), res (zaak).\n\n**Bijvoeglijke naamwoorden**:\n• Stemmen overeen met zelfstandig naamwoord in **geslacht, getal, naamval**.\n• Bonus magister (goede meester) — beide nominatief mannelijk enkelvoud.\n• Bonum bellum (oorlog) — beide nom onzijdig enkelvoud.\n• Boni magistri (goede meesters) — beide nom mannelijk meervoud.\n\n**Geen artikelen**:\n• Latijn heeft **geen lidwoorden** (geen 'de/het').\n• Context bepaalt.\n• Romeinse talen ontwikkelden ze later: il/la (IT), le/la (FR), el/la (SP).\n\n**Vrije woordvolgorde**:\n• Door naamvallen weet je functie → volgorde flexibel.\n• 'Caesar Brutum video' = 'Brutum Caesar video' = 'Video Caesar Brutum' allemaal hetzelfde betekenis-niveau.\n• Maar stijl + emfase wel verschillend.\n• Gewone volgorde: SVO of SOV (laatste vooral, werkwoord aan einde).",
    checks: [
      {
        q: "Hoeveel **naamvallen** in Latijn?",
        options: ["6","4","8","2"],
        answer: 0,
        wrongHints: [null, "Niet — Duits.", "Te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Nom/Gen/Dat/Acc/Abl/Voc", tekst: "**Latijn: 6 naamvallen** — Nominatief (onderwerp), Genitief (bezit), Datief (mee.vw), Accusatief (lijd.vw), Ablatief (omstandigheden), Vocatief (aanspreken). Duits heeft 4 (geen Abl + Voc). NL geen naamvallen meer in moderne taal." }],
          niveaus: { basis: "6. A.", simpeler: "Latijn = 6 nv = A.", nogSimpeler: "6 = A." },
        },
      },
      {
        q: "**Caesarem** (acc) past bij welke functie?",
        options: ["Lijdend voorwerp","Onderwerp","Bezit","Aanspreken"],
        answer: 0,
        wrongHints: [null, "Nominatief.", "Genitief.", "Vocatief."],
        uitlegPad: {
          stappen: [{ titel: "Accusatief = lijd vw", tekst: "**Accusatief** = lijdend voorwerp ('wie/wat ondergaat actie?'). *Video Caesarem* = Ik zie **Caesar** (Caesar ondergaat het zien). Bij 'Caesar venit' (Caesar komt) = Caesar is nominatief (onderwerp)." }],
          niveaus: { basis: "Lijd vw. A.", simpeler: "Acc = lijd vw = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Genitief van puella** (meisje):",
        options: ["puellae","puella","puellam","puellis"],
        answer: 0,
        wrongHints: [null, "Nominatief.", "Accusatief.", "Datief mv."],
        uitlegPad: {
          stappen: [{ titel: "1e declinatie", tekst: "**1e declinatie** (-a-stam, meestal vrouwelijk):\n```\nNom: puella\nGen: puellae\nDat: puellae\nAcc: puellam\nAbl: puella (lange a)\n```\nGenitief = 'van het meisje'. Voorbeeld: *liber puellae* = boek van het meisje." }],
          niveaus: { basis: "puellae. A.", simpeler: "Gen 1e decl = -ae = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Heeft Latijn **lidwoorden** (de/het)?",
        options: ["Nee","Ja, 2","Ja, 3","Alleen onbepaald"],
        answer: 0,
        wrongHints: [null, "Niet — geen.", "Niet — geen.", "Niet — geen."],
        uitlegPad: {
          stappen: [{ titel: "Geen artikelen", tekst: "**Latijn heeft geen lidwoorden** — geen 'de/het/een/het'. Context bepaalt. **Italiaans, Spaans, Frans** ontwikkelden lidwoorden later uit demonstratiefiva (illa/illud → la/le)." }],
          niveaus: { basis: "Nee. A.", simpeler: "Geen lidwoord = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**'Et tu, Brute?'** — welke naamval van Brutus?",
        options: ["Vocatief (aanspreken)","Nominatief","Accusatief","Genitief"],
        answer: 0,
        wrongHints: [null, "Niet — geen onderwerp.", "Niet — geen lijd vw.", "Niet — geen bezit."],
        uitlegPad: {
          stappen: [{ titel: "Aanroep", tekst: "**'Et tu, Brute?'** = 'En jij, Brutus?' (laatste woorden Caesar bij moord). **Vocatief** voor aanspreken. Bij 2e declinatie -us → -e in vocatief: Brutus → **Brute**. Caesar → Caesar (vocatief = nominatief)." }],
          theorie: "Shakespeare's beroemde regel uit *Julius Caesar* (1599) — Latijn meebehouden door auteur voor effect.",
          niveaus: { basis: "Vocatief. A.", simpeler: "Brute = vocatief = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Werkwoorden + vervoeging ──────────────────────────
  {
    title: "Werkwoorden — vervoeging + tijden",
    explanation:
      "**Latijnse werkwoorden** verbuigen voor persoon + getal + tijd + wijs + genus (actief/passief). Veel vormen.\n\n**4 hoofdvervoegings-groepen** (conjugaties):\n\n**1e conjugatie**: stam eindigt op **-a** (amare = liefhebben).\n• ama-re (infinitief).\n• Praesens-stam: ama-.\n• Voorbeeld: amō (ik heb lief), amās (jij), amat (hij/zij), amāmus (wij), amātis (jullie), amant (zij).\n\n**2e conjugatie**: -e (monēre = waarschuwen).\n• mone-ō, mone-s, mone-t, mone-mus, mone-tis, mone-nt.\n\n**3e conjugatie**: -e (kort) — divers.\n• regere = regeren. reg-o, reg-is, reg-it...\n\n**4e conjugatie**: -i (audire = horen).\n• audi-o, audi-s, audi-t...\n\n**Persoonsuitgangen** (presens actief, vrij universeel):\n```\nIk:       -o / -m\nJij:      -s\nHij/zij:  -t\nWij:      -mus\nJullie:   -tis\nZij:      -nt\n```\n\n**Belangrijkste tijden**:\n\n**Praesens** (tegenwoordig): hij doet nu.\n• Stam + persoonsuitgang.\n• *Amat* = hij heeft lief.\n\n**Imperfectum** (onvoltooid verleden): hij was doende / hij deed.\n• Stam + **-bā-** + uitgang.\n• *Amabat* = hij was aan het liefhebben / had lief.\n\n**Perfectum** (voltooid verleden): hij heeft gedaan / hij deed.\n• Eigen perfect-stam + speciale uitgangen.\n• *Amavit* = hij heeft liefgehad / heeft lief gehad.\n• 4 hoofdvormen-systeem: amare, amo, amavi, amatus.\n\n**Plusquamperfectum** (voltooid verleden in verleden):\n• Perfect-stam + -era- + uitgang.\n• *Amaverat* = hij had liefgehad.\n\n**Futurum** (toekomend): hij zal doen.\n• Stam + -bi- (1+2 conj) / -e- (3+4 conj) + uitgang.\n• *Amabit* = hij zal liefhebben.\n\n**Futurum exactum** (voltooid toekomend): hij zal hebben gedaan.\n\n**Wijzen**:\n• **Indicativus** (mededelend): gewoon stellend.\n• **Coniunctivus** (aanvoegend, **subjunctief**): wens, twijfel, mogelijkheid, na bepaalde voegwoorden.\n• **Imperativus** (gebiedend): bevel.\n  - Enkelvoud: stam (ama! = heb lief!).\n  - Meervoud: stam + -te (amate!).\n• **Infinitivus**: onbepaald (amare = liefhebben).\n\n**Actief vs Passief**:\n• **Actief**: onderwerp doet. *Caesar amat puellam* = Caesar heeft het meisje lief.\n• **Passief**: onderwerp ondergaat. *Puella amatur* = Het meisje wordt liefgehad.\n• Passief-uitgangen anders: -or, -ris, -tur, -mur, -mini, -ntur.\n\n**4 hoofdvormen** van elk werkwoord (uit hoofd leren!):\n• amare, amo, amavi, amatus (1e conj).\n• monēre, moneo, monui, monitus (2e).\n• regere, rego, rexi, rectus (3e).\n• audire, audio, audivi, auditus (4e).\n• facere, facio, feci, factus (3e -io, onregelmatig).\n• esse, sum, fui, futurus (zijn — onregelmatig).\n• ferre, fero, tuli, latus (dragen — onregelmatig).\n• ire, eo, ii/ivi, itus (gaan — onregelmatig).\n\n**Onregelmatige werkwoorden**:\n• **Esse** (zijn): sum, es, est, sumus, estis, sunt.\n• **Posse** (kunnen): possum, potes, potest...\n• **Velle** (willen): volo, vis, vult...\n• **Ferre** (dragen): fero, fers, fert...\n\n**Participia** (deelwoorden):\n• Praes act: amans (= liefhebbend).\n• Perf pass: amatus (= geliefd / lief gehad).\n• Fut act: amaturus (= zullende liefhebben).\n• Functioneren als bijvoeglijk naamwoord — verbuigen mee.\n\n**Cito-vraag-pattern**:\n• Identificeer werkwoord + analyseer (persoon, getal, tijd, wijs).\n• Vertaal zin met juiste tijd.\n• Herken stam-veranderingen (perfect-stam vs presens-stam).",
    checks: [
      {
        q: "**Amat** is welke vorm?",
        options: ["3e persoon enkelvoud praesens","2e persoon","1e meervoud","Imperatief"],
        answer: 0,
        wrongHints: [null, "Dat zou amas zijn.", "Dat is amamus.", "Dat is ama!"],
        uitlegPad: {
          stappen: [{ titel: "Amat = hij/zij heeft lief", tekst: "**Amat**: persoonsuitgang **-t** = 3e persoon enkelvoud. Praesens-stam ama- + t = 'hij/zij heeft lief'. Onderdeel paradigma: amo, amas, amat, amamus, amatis, amant." }],
          niveaus: { basis: "3 ev presens. A.", simpeler: "amat = hij heeft lief = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke tijd is **amabat**?",
        options: ["Imperfectum (onvolt verl)","Praesens","Futurum","Perfectum"],
        answer: 0,
        wrongHints: [null, "Praesens = amat.", "Futurum = amabit.", "Perf = amavit."],
        uitlegPad: {
          stappen: [{ titel: "-ba-marker", tekst: "**Imperfectum**: stam + **-bā-** + uitgang. amat → ama-ba-t = **amabat** = hij was aan het liefhebben / hij had lief (continue actie in verleden). Verschilt van perfectum (amavit = hij heeft liefgehad, voltooid).\n\n**-bi-** voor futurum: amabit = hij zal liefhebben." }],
          niveaus: { basis: "Imperfectum. A.", simpeler: "amaBAt = imperf = A.", nogSimpeler: "Imperf = A." },
        },
      },
      {
        q: "**4 hoofdvormen** van werkwoord 'liefhebben':",
        options: ["amare, amo, amavi, amatus","amare, amat, amabat, amatur","amo, amavi","amat alleen"],
        answer: 0,
        wrongHints: [null, "Niet — vorm-mix.", "Onvolledig.", "Onvolledig."],
        uitlegPad: {
          stappen: [{ titel: "Stam-leren", tekst: "Elk Latijn-werkwoord heeft **4 hoofdvormen** waaruit alle andere vormen worden gemaakt:\n• **Infinitief**: amare.\n• **1e persoon presens**: amo.\n• **1e persoon perfectum**: amavi.\n• **Perfect deelwoord (PPP)**: amatus.\n\nUit hoofd leren — basis voor alle vervoegingen." }],
          niveaus: { basis: "amare/amo/amavi/amatus. A.", simpeler: "4 hoofdvormen = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk werkwoord is **'zijn'**?",
        options: ["esse (sum, es, est)","amare","facere","ferre"],
        answer: 0,
        wrongHints: [null, "Liefhebben.", "Maken.", "Dragen."],
        uitlegPad: {
          stappen: [{ titel: "Onregelmatig", tekst: "**Esse** (zijn) — onregelmatig:\n• sum (ik ben)\n• es (jij)\n• est (hij/zij)\n• sumus (wij)\n• estis (jullie)\n• sunt (zij)\n\nVergelijkbaar met Engelse 'am/are/is/are/are/are'." }],
          niveaus: { basis: "esse. A.", simpeler: "Zijn = esse = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Imperatief** (gebiedende wijs) van *amare* enkelvoud:",
        options: ["Ama!","Amat!","Amare!","Amavi!"],
        answer: 0,
        wrongHints: [null, "3e ev presens.", "Infinitief.", "Perfectum."],
        uitlegPad: {
          stappen: [{ titel: "Stam + niets", tekst: "**Imperatief enkelvoud** = presens-stam zonder uitgang. amare → stam = ama- → **ama!** (heb lief!). Meervoud: stam + **-te**: amate! (heb lief!, jullie). Beroemd: *carpe* (diem) — imperatief van *carpere* = pluk!" }],
          niveaus: { basis: "Ama! A.", simpeler: "Imp ev = stam = ama = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Romeinse cultuur + auteurs ────────────────────────
  {
    title: "Romeinse cultuur + auteurs",
    explanation:
      "**Romeinse Rijk** ~750 v.Chr. — 476 n.Chr. (West) / 1453 (Oost/Byzantijnse).\n\n**Periodes**:\n• **Koningstijd** ~753-509 v.Chr.: 7 koningen, eindigend Tarquinius Superbus.\n• **Republiek** 509-27 v.Chr.: SPQR (Senatus Populusque Romanus). Consul-systeem.\n• **Keizerrijk** 27 v.Chr.-476 n.Chr.: Augustus tot Romulus Augustulus.\n• **Byzantijnse Rijk** 330-1453: Oost-Romeins, hoofdstad Constantinopel (Istanbul).\n\n**Belangrijke gebeurtenissen**:\n• **753 v.Chr.**: stichting Rome (legende Romulus + Remus).\n• **509 v.Chr.**: republiek na Tarquinius-verbanning.\n• **264-146 v.Chr.**: Punische Oorlogen tegen Carthago (Hannibal kruist Alpen 218!). Eindigt met vernietiging Carthago.\n• **59-49 v.Chr.**: Caesar verovert Gallië.\n• **49 v.Chr.**: Caesar oversteekt Rubicon — burgeroorlog.\n• **44 v.Chr.**: Caesar vermoord (idus van maart, 15 maart) door senatoren incl. Brutus.\n• **27 v.Chr.**: Octavianus wordt **Augustus** = eerste keizer.\n• **70 n.Chr.**: vernietiging tempel Jeruzalem.\n• **79 n.Chr.**: uitbarsting Vesuvius → Pompeii + Herculaneum begraven.\n• **313 n.Chr.**: Edict van Milaan — Constantijn legaliseert christendom.\n• **476 n.Chr.**: laatste West-Romeinse keizer afgezet → einde West-Rome.\n\n**Romeinse waarden**:\n• **Pietas** (plichtsbesef + respect goden + ouders + staat).\n• **Virtus** (manhaftigheid, deugd).\n• **Gravitas** (ernst, waardigheid).\n• **Dignitas** (waardigheid, status).\n• **Auctoritas** (gezag, autoriteit).\n• **Cursus honorum**: politieke carrière-ladder (quaestor → aediel → praetor → consul).\n\n**Romeinse goden**:\n• **Jupiter** (Zeus): oppergod.\n• **Juno** (Hera): koningin goden.\n• **Mars**: oorlog.\n• **Venus**: liefde + schoonheid.\n• **Minerva** (Athena): wijsheid.\n• **Neptunus** (Poseidon): zee.\n• **Plutonius** (Hades): onderwereld.\n• **Apollo**: zon + muziek.\n• **Diana** (Artemis): jacht.\n• **Bacchus** (Dionysos): wijn.\n• **Vesta**: haard.\n\n**Belangrijke auteurs** (Cito-canon):\n\n**Marcus Tullius Cicero** (106-43 v.Chr.):\n• Grootste redenaar Rome.\n• Filosoof + politicus (consul 63 v.Chr.).\n• Bestreed Catilina (samenzwering).\n• Vermoord door Marcus Antonius' troepen.\n• Werken: *De Re Publica*, *De Officiis*, brieven, redes (*Catilinariae*).\n• Latijnse stijl-model voor 2000 jaar.\n\n**Gaius Iulius Caesar** (100-44 v.Chr.):\n• Generaal + politicus + auteur.\n• *De Bello Gallico* (Gallische Oorlog) — verslag eigen veldtochten.\n• Beroemde opening: 'Gallia est omnis divisa in partes tres' (Heel Gallië is verdeeld in 3 delen).\n• Heldere, beknopte stijl.\n\n**Publius Vergilius Maro** (70-19 v.Chr.):\n• Belangrijkste dichter klassieke Latijn.\n• *Aeneis* — epos over Aeneas (Trojaan die Rome sticht).\n• Werd geschreven onder Augustus' patronage — propaganda + meesterwerk tegelijk.\n• Eerste regels onthouden: 'Arma virumque cano' (Ik bezing wapenen + man).\n\n**Quintus Horatius Flaccus** (65-8 v.Chr.):\n• Dichter — oden + epoden.\n• Bekend: *Carpe diem* (uit Oden 1.11).\n• Andere classics: *Aurea mediocritas* (de gulden middenweg), *Mens sana in corpore sano* (hoewel Juvenalis dat schreef).\n\n**Publius Ovidius Naso** (43 v.Chr. — 17 n.Chr.):\n• Dichter — liefdes + mythologie.\n• *Metamorphoses* — verzameling mythen waar mensen veranderen in dieren/planten/sterren.\n• Verbannen door Augustus om onbekende reden, sterft in ballingschap (Roemenië).\n\n**Titus Livius** (59 v.Chr.-17 n.Chr.):\n• Historicus.\n• *Ab Urbe Condita* — geschiedenis Rome vanaf stichting 753 v.Chr.\n\n**Publius Cornelius Tacitus** (~55-120 n.Chr.):\n• Historicus.\n• *Annales* + *Historiae* — verslag keizerrijk.\n• Bekend om psychologische scherpte + bondige stijl.\n• 'Sine ira et studio' (zonder woede + zonder voorkeur).\n\n**Gaius Plinius Maior** (Plinius de Oudere, 23-79 n.Chr.):\n• Naturalist — *Naturalis Historia* (encyclopedie).\n• Stierf in Vesuvius-uitbarsting 79 n.Chr.\n\n**Plinius Minor** (Plinius de Jongere, 61-113 n.Chr.):\n• Neef van Maior.\n• Brieven — alles van Vesuvius-rapport tot administratief werk.\n\n**Romeins recht**:\n• **Twaalftafelen** (450 v.Chr.) — eerste codificatie.\n• **Corpus Iuris Civilis** (Justinianus 534 n.Chr.) — codificatie.\n• Basis voor moderne West-Europese rechts-systemen (Code Napoléon 1804).\n• Begrippen: persoon, eigendom, contract, schade, erfrecht.\n\n**Romeinse architectuur** + bouwwerken:\n• **Forum Romanum**: politiek + commercieel centrum.\n• **Colosseum** (Flavius-amfitheater, 80 n.Chr.): gladiatoren.\n• **Pantheon** (118 n.Chr.): tempel met grootste niet-versterkte koepel tot 19e eeuw.\n• **Aquaducten**: waterleidingen (Pont du Gard FR, Segovia ES).\n• **Wegen**: 'Alle wegen leiden naar Rome' — Via Appia.\n• Cement-uitvinding (puzzolaan-aarde): zee-bestendig, eeuwen blijvend.",
    checks: [
      {
        q: "Wie schreef ***De Bello Gallico***?",
        options: ["Caesar","Cicero","Vergilius","Tacitus"],
        answer: 0,
        wrongHints: [null, "Niet — redenaar.", "Niet — dichter.", "Niet — keizertijd historicus."],
        uitlegPad: {
          stappen: [{ titel: "Caesar's eigen oorlog", tekst: "**Gaius Iulius Caesar** schreef *De Bello Gallico* — verslag eigen veldtochten in Gallië (58-50 v.Chr.). Propagandistisch + literair meesterwerk. Heldere, beknopte stijl. Beroemde opening: 'Gallia est omnis divisa in partes tres' = 'Heel Gallië is in 3 delen verdeeld'." }],
          niveaus: { basis: "Caesar. A.", simpeler: "Bello Gallico = Caesar = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wanneer **stichting Rome** volgens legende?",
        options: ["753 v.Chr.","27 v.Chr.","476 n.Chr.","1492"],
        answer: 0,
        wrongHints: [null, "Niet — Augustus-troon.", "Einde West-Rome.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Romulus + Remus", tekst: "**753 v.Chr.**: legendarische stichting Rome door Romulus (broer Remus, die hij doodde). Tweelingen werden volgens mythe gevoed door wolvin. Historisch: bewoning Tiber-heuvels al eerder, maar 753 = officiële Romeinse jaartelling (Ab Urbe Condita)." }],
          niveaus: { basis: "753 v.Chr. A.", simpeler: "753 = stichting = A.", nogSimpeler: "753 = A." },
        },
      },
      {
        q: "Wie was eerste **Romeinse keizer**?",
        options: ["Augustus (Octavianus)","Caesar","Nero","Constantijn"],
        answer: 0,
        wrongHints: [null, "Niet — werd dictator, niet keizer.", "Veel later.", "Vroeg-christelijke keizer veel later."],
        uitlegPad: {
          stappen: [{ titel: "27 v.Chr.", tekst: "**Octavianus** (Caesar's adoptief-zoon) wordt **27 v.Chr.** door Senaat 'Augustus' genoemd → eerste **keizer** ('imperator'). Caesar zelf was dictator (perpetua) maar werd vermoord vóór keizertijd. Augustus regeerde tot 14 n.Chr. — Pax Romana." }],
          niveaus: { basis: "Augustus. A.", simpeler: "Eerste keizer = Augustus = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat gebeurde in **79 n.Chr.**?",
        options: ["Vesuvius bedolf Pompeii","Caesar vermoord","Rome gesticht","Christendom legaal"],
        answer: 0,
        wrongHints: [null, "44 v.Chr.", "753 v.Chr.", "313 n.Chr."],
        uitlegPad: {
          stappen: [{ titel: "Pompeii + Herculaneum", tekst: "**24 augustus 79 n.Chr.**: vulkaan **Vesuvius** uitbarsting → **Pompeii + Herculaneum** bedekt onder as. ~16.000 doden. **Plinius de Oudere** stierf bij reddingspoging. **Plinius de Jongere** schreef ooggetuigenverslag. Archeologisch ontdekt 18e eeuw — uniek inzicht in dagelijks Romeins leven." }],
          niveaus: { basis: "Vesuvius 79. A.", simpeler: "79 = Vesuvius = A.", nogSimpeler: "79 = A." },
        },
      },
      {
        q: "Wie schreef de **Aeneis**?",
        options: ["Vergilius","Horatius","Ovidius","Cicero"],
        answer: 0,
        wrongHints: [null, "Niet — oden.", "Niet — Metamorphoses.", "Niet — redenaar."],
        uitlegPad: {
          stappen: [{ titel: "Romeinse Ilias", tekst: "**Publius Vergilius Maro** schreef *Aeneis* (Aeneis) tussen 29-19 v.Chr. Epos over Trojaanse held **Aeneas** die na val Troje naar Italië reist en stichter Rome wordt. Eerste regels: 'Arma virumque cano' (Ik bezing wapens + man). Gymnasium-canon-tekst." }],
          niveaus: { basis: "Vergilius. A.", simpeler: "Aeneis = Vergilius = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Latijn mix",
    explanation:
      "Mix van alfabet + naamvallen + werkwoorden + cultuur.\n\nVeel succes!",
    checks: [
      {
        q: "Welke betekenis heeft **'carpe diem'**?",
        options: ["Pluk de dag","Met de dag","Lange dag","Donder dag"],
        answer: 0,
        wrongHints: [null, "Niet — andere voorzetsel.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Horatius Oden 1.11", tekst: "**Carpe diem** = letterlijk 'pluk de dag' (carpe = imperatief 'pluk', diem = accusatief 'dag'). Uit **Horatius** Oden 1.11 (23 v.Chr.). Boodschap: leef in het nu, want toekomst onzeker. Veel later beroemd door Robin Williams in film *Dead Poets Society* (1989)." }],
          niveaus: { basis: "Pluk de dag. A.", simpeler: "Carpe diem = leef nu = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**SPQR** staat voor:",
        options: ["Senatus Populusque Romanus","Roma Senatus Pax Quirinus","Romeinse Politie Quartier","Stad Quirinus"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Republiek-motto", tekst: "**SPQR** = *Senatus Populusque Romanus* = 'De Senaat + het Volk van Rome'. Symboolt **Romeinse Republiek** (509-27 v.Chr.). Stond op standaarden, gebouwen. Vandaag: nog steeds in gebruik door gemeente Rome (op deksels van rioolputten, gebouwen)." }],
          niveaus: { basis: "Senatus Populusque Romanus. A.", simpeler: "SPQR = Senaat+Volk = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **Pax Romana**?",
        options: ["Periode relatieve vrede (27 v.Chr.-180 n.Chr.)","Vredesakkoord","Tempel","Sport"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "200 jaar relatieve vrede", tekst: "**Pax Romana** ('Romeinse vrede') = 207 jaar relatieve interne vrede + welvaart in Romeinse Rijk: **27 v.Chr.-180 n.Chr.** (Augustus tot Marcus Aurelius). Niet zonder oorlog (grens-conflicten Germanen, Britten, Parten), maar binnen Rijk relatief stabiel. Handel + cultuur bloeiden. Begrip vergelijkbaar met 'Pax Americana' (post-WO2 westen)." }],
          niveaus: { basis: "Vrede 27 v-180 n. A.", simpeler: "Pax Romana = vrede-tijd = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke god is **Mars**?",
        options: ["Oorlog","Liefde","Zee","Onderwereld"],
        answer: 0,
        wrongHints: [null, "Niet — Venus.", "Niet — Neptunus.", "Niet — Plutonius/Hades."],
        uitlegPad: {
          stappen: [{ titel: "Romeins oorlogs-god", tekst: "**Mars** = Romeinse oorlogsgod (Griekse Ares). Vader van Romulus + Remus volgens legende. Daarom **Mars Pater** ('Mars Vader') belangrijk. Maand **maart** vernoemd. Symbolen: speer + schild. Planeet Mars rood vanwege ijzer-oxide — geassocieerd met 'bloed' van oorlog." }],
          niveaus: { basis: "Oorlog. A.", simpeler: "Mars = oorlog = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Idus van maart** (15 maart 44 v.Chr.) is bekend om:",
        options: ["Caesar-moord","Augustus-troon","Rome-stichting","Vesuvius"],
        answer: 0,
        wrongHints: [null, "Anders datum.", "Anders datum.", "Anders datum."],
        uitlegPad: {
          stappen: [{ titel: "Idus Martiae", tekst: "**15 maart 44 v.Chr.** = **Idus van Maart**: Caesar vermoord in Senaat door samenzweerders (Cassius, Brutus, ~60 senatoren). Hadden gewaarschuwd door waarzegger 'Hoed u voor de Idus van Maart' (volgens Shakespeare). Caesar's laatste woorden: 'Et tu, Brute?' Brutus was Caesar's vroegere gunsteling." }],
          theorie: "Cito-favoriet datum onthouden. Beroemd ook door Shakespeare's *Julius Caesar* (1599).",
          niveaus: { basis: "Caesar-moord. A.", simpeler: "15-3-44 = Caesar dood = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const latijnVwo = {
  id: "latijn-vwo",
  title: "Latijn basis (VWO Gymnasium)",
  emoji: "📜",
  level: "vwo",
  subject: "klassieke-talen",
  referentieNiveau: "vwo-CSE-latijn",
  sloThema: "Klassieke Talen VWO — Latijn basis eindexamen",
  prerequisites: [],
  intro:
    "Latijn basis VWO-Gymnasium. Alfabet + uitspraak (klassiek Caesar=Kaesar) + Romeinse cijfers, 6 naamvallen (Nom/Gen/Dat/Acc/Abl/Voc), werkwoord-vervoeging (4 conjugaties + tijden + esse), Romeinse cultuur (stichting 753 → Republiek SPQR → Caesar 44 v.Chr. → keizers + Vesuvius 79 + Pompeii), auteurs (Caesar/Cicero/Vergilius/Horatius/Tacitus). ~15-20 min.",
  triggerKeywords: [
    "Latijn",
    "klassieke talen",
    "gymnasium",
    "Romeins", "Rome",
    "Caesar", "Cicero", "Vergilius", "Aeneis",
    "Horatius", "carpe diem",
    "Ovidius", "Metamorphoses",
    "Tacitus", "Livius",
    "naamval", "Latijnse naamval",
    "Nominatief", "Genitief", "Datief", "Accusatief", "Ablatief", "Vocatief",
    "declinatie",
    "Latijn vervoeging", "Latijn werkwoord",
    "conjugatie",
    "esse", "sum es est",
    "imperfectum", "perfectum",
    "Romeinse cijfers",
    "SPQR",
    "Augustus", "Octavianus",
    "Idus van Maart",
    "Pax Romana",
    "Vesuvius", "Pompeii",
    "Romeinse goden", "Jupiter", "Mars", "Venus",
    "Romeins recht",
  ],
  chapters,
  steps,
};

export default latijnVwo;
