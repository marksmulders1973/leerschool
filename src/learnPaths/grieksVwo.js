// Leerpad: Grieks basis — VWO Gymnasium
// Klassieke talen-CSE: alfabet + naamvallen + cultuur + auteurs.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  grieks: "#1565c0",
  goud: "#ffd54f",
  acc: "#66bb6a",
};

const stepEmojis = ["Α", "🔠", "📖", "🏛️", "🏆"];

const chapters = [
  { letter: "A", title: "Grieks alfabet + uitspraak", emoji: "Α", from: 0, to: 0 },
  { letter: "B", title: "Naamvallen + zelfst nw", emoji: "🔠", from: 1, to: 1 },
  { letter: "C", title: "Werkwoorden + tijden", emoji: "📖", from: 2, to: 2 },
  { letter: "D", title: "Griekse cultuur + auteurs", emoji: "🏛️", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Alfabet + uitspraak ───────────────────────────────
  {
    title: "Grieks alfabet + uitspraak",
    explanation:
      "**Oud-Grieks** = taal van Plato, Aristoteles, Homerus, Sofokles, en het Nieuwe Testament (Koinè-Grieks).\n\nGymnasium-Grieks = klassiek Grieks (~5e-4e eeuw v.Chr., Athene-dialect).\n\n**Belang**:\n• Basis westerse filosofie, wetenschap, literatuur, theater.\n• 25% Engelse wetenschappelijke woorden uit Grieks (filo-sofie = liefhebber wijsheid, demo-cratie = volks-macht, biologie = leer van het leven).\n• Modern Grieks afstammeling — Atheners begrijpen klassieke teksten met inspanning.\n• Nieuwe Testament + vroege kerkvaders.\n\n**Alfabet** — 24 letters:\n```\nLetter   Naam      Klank/letter\nΑ α     Alfa      a\nΒ β     Bèta      b\nΓ γ     Gamma     g\nΔ δ     Delta     d\nΕ ε     Epsilon   e (kort)\nΖ ζ     Zèta      z\nΗ η     Èta       e (lang)\nΘ θ     Thèta     th (zoals Engels 'think')\nΙ ι     Iota      i\nΚ κ     Kappa     k\nΛ λ     Lambda    l\nΜ μ     Mu        m\nΝ ν     Nu        n\nΞ ξ     Xi        ks\nΟ ο     Omicron   o (kort)\nΠ π     Pi        p\nΡ ρ     Rho       r\nΣ σ ς   Sigma     s (σ in woord, ς aan eind)\nΤ τ     Tau       t\nΥ υ     Upsilon   u/y\nΦ φ     Phi       f\nΧ χ     Chi       ch (zoals Duits 'ach')\nΨ ψ     Psi       ps\nΩ ω     Omega     o (lang)\n```\n\n**Klemtoon + accenten**:\n• 3 accenten (in moderne edities): acuut (´), gravis (`), circumflex (~).\n• Acuut: stijgende toon (vroeger), nu klemtoon.\n• Circumflex: lange klinker met klemtoon.\n• Gravis: vervangt acuut aan eind woord (voor andere woord).\n\n**Spiritus** (op klinker aan begin woord):\n• **Spiritus asper** (῾): met h-klank — *ἥλιος* = hèlios = zon → 'hèlios'.\n• **Spiritus lenis** (᾽): zonder h — *ἀγαθός* = agathos = goed.\n• Op rho (ρ) altijd asper aan begin woord.\n\n**Uitspraak Erasmus (gymnasium-standaard)**:\n• Klassiek dialect-uitspraak ~5e eeuw v.Chr. Atheen.\n• Beta = b, gamma = g (hard), delta = d, eta = lange è, theta = th, chi = ch.\n• Diftongen: αι = ai, ει = ei, οι = oi, ου = oe.\n\n**Modern Grieks** (anders!):\n• β = v.\n• η = i.\n• υ = i.\n• Veel klinkers samen vallen tot 'i'.\n• Voor gymnasium wordt **Erasmus** geleerd.\n\n**Modern bekende Griekse woorden**:\n• **Demos** (δῆμος) = volk → democratie.\n• **Logos** (λόγος) = woord, rede → logica, theologie, biologie.\n• **Kosmos** (κόσμος) = orde, wereld → kosmos.\n• **Psyche** (ψυχή) = ziel → psychologie.\n• **Polis** (πόλις) = stad → politiek, metropolis.\n• **Anthropos** (ἄνθρωπος) = mens → antropologie.\n• **Bios** (βίος) = leven → biologie.\n• **Geo** (γῆ) = aarde → geografie, geologie.\n• **Hydro** (ὕδωρ) = water → hydrologie.\n• **Sophia** (σοφία) = wijsheid → philosofie.\n• **Phobos** (φόβος) = vrees → claustrofobie.\n\n**Schrijven**:\n• Klassiek alleen **hoofdletters** + geen spaties (scriptio continua).\n• Kleine letters + interpunctie + accenten = middeleeuwse Byzantijnse uitvinding.\n• Modern Grieks gebruikt nog steeds zelfde alfabet, maar met diakritische vereenvoudigingen (sinds 1982).",
    checks: [
      {
        q: "Hoeveel letters heeft **Grieks alfabet**?",
        options: ["24","26","30","21"],
        answer: 0,
        wrongHints: [null, "Niet — modern Engels.", "Niet — te veel.", "Niet — te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Α t/m Ω", tekst: "**Grieks alfabet: 24 letters** van **Alfa (Α)** tot **Omega (Ω)**. Engelse 'from alpha to omega' = van begin tot eind. Tussen-letters waar Engels niet heeft: theta (θ), xi (ξ), psi (ψ), phi (φ), chi (χ), omega (ω). Wetenschap leent veel: π (pi), δ (delta), Σ (sigma) etc." }],
          niveaus: { basis: "24. A.", simpeler: "Grieks = 24 letters = A.", nogSimpeler: "24 = A." },
        },
      },
      {
        q: "Welke is **omega**?",
        options: ["Ω (lange o)","Ο (korte o)","θ","ω alleen klein"],
        answer: 0,
        wrongHints: [null, "Niet — dat is omicron.", "Niet — theta.", "Wel klein ook, hoofdletter Ω."],
        uitlegPad: {
          stappen: [{ titel: "Lange vs korte o", tekst: "**Omega Ω/ω** = lange o (oh). **Omicron Ο/ο** = korte o. Grieks onderscheidt klinker-lengtes — belangrijk voor klemtoon + metrum poëzie. Vergelijkbaar: Eta (Η/η) = lange e vs Epsilon (Ε/ε) = korte e." }],
          niveaus: { basis: "Ω. A.", simpeler: "Omega = Ω lange o = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Demos** (δῆμος) betekent:",
        options: ["Volk","Wijsheid","Wet","Strijder"],
        answer: 0,
        wrongHints: [null, "Niet — sophia.", "Niet — nomos.", "Niet — strategos."],
        uitlegPad: {
          stappen: [{ titel: "Δῆμος = volk", tekst: "**Demos** (δῆμος) = volk. **Demo-cratie** = letterlijk 'macht van het volk'. Athene 5e eeuw v.Chr. = eerste democratie (alle vrije mannelijke burgers konden meebeslissen, niet vrouwen of slaven). Verwant: epidemie ('over het volk'), demografie ('schrijven over volk')." }],
          niveaus: { basis: "Volk. A.", simpeler: "Demos = volk = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Spiritus asper (῾) op klinker betekent:",
        options: ["H-klank vooraf","Geen H-klank","Lange klinker","Klemtoon"],
        answer: 0,
        wrongHints: [null, "Spiritus lenis.", "Niet — andere markering.", "Niet — accenten apart."],
        uitlegPad: {
          stappen: [{ titel: "῾ = ruwe ademing", tekst: "**Spiritus asper** (῾, 'ruwe ademing'): geeft h-klank vooraf. *ἑπτά* = hepta = zeven. *ἥλιος* = hèlios = zon. **Spiritus lenis** (᾽, 'gladde ademing'): geen h. *ἀγαθός* = agathos = goed. **Rho** (ρ) krijgt altijd asper aan begin." }],
          niveaus: { basis: "H-klank. A.", simpeler: "Asper = h = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Phi (Φ/φ)** wordt uitgesproken als:",
        options: ["F","P","B","Th"],
        answer: 0,
        wrongHints: [null, "Niet — pi.", "Niet — beta.", "Niet — theta."],
        uitlegPad: {
          stappen: [{ titel: "Aspirate p → f", tekst: "**Phi (Φ/φ)** = oorspronkelijk 'p-h' (geaspireerde p), in klassieke uitspraak meestal als **f**. Vandaar 'philosophy' = liefhebber wijsheid. **Theta (θ)** = th, **chi (χ)** = ch — beide ook geaspireerde varianten van t en k." }],
          niveaus: { basis: "F. A.", simpeler: "Φ = F = A.", nogSimpeler: "F = A." },
        },
      },
    ],
  },

  // ─── B. Naamvallen + zelfst nw ────────────────────────────
  {
    title: "Naamvallen + declinaties Grieks",
    explanation:
      "**Grieks heeft 5 naamvallen** (vs Latijn 6, Duits 4):\n\n**1. Nominatief**: onderwerp.\n**2. Genitief**: bezit, vergelijking, herkomst.\n**3. Datief**: meewerkend voorwerp, instrumentaal, locaal.\n**4. Accusatief**: lijdend voorwerp, richting.\n**5. Vocatief**: aanspreken.\n\n**Geen ablatief** — datief overneemt veel functies.\n\n**Geen 'h'-spiritus voor naamvallen** — dat is fonetisch.\n\n**3 declinaties** (zoals Latijn):\n\n**1e declinatie** (vooral vrouwelijk -a/-è):\n```\nNom: χώρα (chōra, land)\nGen: χώρας\nDat: χώρᾳ\nAcc: χώραν\nVoc: χώρα\n```\nMeervoud: χῶραι, χωρῶν, χώραις, χώρας, χῶραι.\n\n**2e declinatie** (mannelijk -ος, onzijdig -ον):\n```\nNom: λόγος (logos, woord) — δῶρον (doron, geschenk)\nGen: λόγου — δώρου\nDat: λόγῳ — δώρῳ\nAcc: λόγον — δῶρον\nVoc: λόγε — δῶρον\n```\n\n**3e declinatie** (divers, vele stamtypen).\n\n**Lidwoord** (anders dan Latijn — Grieks HEEFT lidwoorden!):\n```\nNom: ὁ (m) ἡ (v) τό (n)\nGen: τοῦ τῆς τοῦ\nDat: τῷ τῇ τῷ\nAcc: τόν τήν τό\nMv Nom: οἱ αἱ τά\n```\n\nLidwoord stemt overeen met geslacht + getal + naamval.\nVoorbeeld: ὁ λόγος (het woord, m, nom enkelvoud).\n\n**3 geslachten**: mannelijk, vrouwelijk, onzijdig.\n\n**Bijvoeglijke naamwoorden** stemmen overeen.\n\n**Drievoudige aantal-systeem** (in oud-Grieks, vergeten in modern):\n• Enkelvoud.\n• Tweevoud (paar — ogen, broers, etc.) — vooral Homerisch.\n• Meervoud.\n\nIn klassiek Atheen-Grieks (5e v.Chr.) is dualis al uitstervend.\n\n**Vrije woordvolgorde** (zoals Latijn) door naamvallen.\nGewone volgorde: subject-werkwoord-object, maar variabel voor emfase.\n\n**Voorzetsels met naamvallen**:\nIn Grieks bepalen voorzetsels welke naamval:\n• **ἐν** + datief = in (rust).\n• **εἰς** + accusatief = naar (richting).\n• **πρός** + acc = naar / bij.\n• **ὑπό** + gen = door (passief-agent: 'door iemand').\n• **διά** + gen = doorheen / via.\n• **διά** + acc = vanwege.\n• **παρά** + gen = van.\n\nElk voorzetsel kan meerdere naamvallen 'sturen' met verschillende betekenissen.",
    checks: [
      {
        q: "Hoeveel **naamvallen** heeft Grieks?",
        options: ["5","6","4","3"],
        answer: 0,
        wrongHints: [null, "Latijn.", "Duits.", "Te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Geen ablatief", tekst: "**Grieks: 5 naamvallen** — Nom/Gen/Dat/Acc/Voc. **Geen ablatief** (functies daarvan zitten in datief + genitief + voorzetsels). **Latijn** 6, **Duits** 4. Voor Grieks-leerlingen die ook Latijn doen: 'minder werk dan Latijn' (alleen 1 minder)." }],
          niveaus: { basis: "5. A.", simpeler: "Grieks = 5 nv = A.", nogSimpeler: "5 = A." },
        },
      },
      {
        q: "Heeft **Grieks lidwoorden**?",
        options: ["Ja","Nee","Alleen onbepaald","Alleen voor mannelijk"],
        answer: 0,
        wrongHints: [null, "Niet — wel.", "Niet — onbepaald LIDWOORD ontbreekt eigenlijk.", "Niet — alle geslachten."],
        uitlegPad: {
          stappen: [{ titel: "ὁ ἡ τό", tekst: "**Grieks heeft lidwoorden** (anders dan Latijn): **ὁ (m), ἡ (v), τό (n)** voor 'de/het'. Buigen verbuigen in alle naamvallen.\n\n**Geen onbepaald lidwoord** ('een') in klassiek Grieks — context bepaalt." }],
          niveaus: { basis: "Ja. A.", simpeler: "Grieks = lidwoord = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Logos** (λόγος) hoort bij welke declinatie?",
        options: ["2e (mannelijk -ος)","1e (vrouwelijk -α)","3e (divers)","Geen"],
        answer: 0,
        wrongHints: [null, "Niet — eindigt op os.", "Niet — pattern duidelijk.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "2e decl -ος", tekst: "**Logos** (λόγος) = mannelijk, eindigt op **-ος** = **2e declinatie**. Gen: λόγου, Dat: λόγῳ, Acc: λόγον, Voc: λόγε.\n\nOnzijdig 2e decl eindigt op -ον: δῶρον (doron, geschenk)." }],
          niveaus: { basis: "2e. A.", simpeler: "-ος = 2e decl = A.", nogSimpeler: "2e = A." },
        },
      },
      {
        q: "Welk Grieks voorzetsel + **accusatief** = 'naar (richting)'?",
        options: ["εἰς","ἐν","ἐκ","ἀπό"],
        answer: 0,
        wrongHints: [null, "Met datief = in.", "Met gen = uit.", "Met gen = van."],
        uitlegPad: {
          stappen: [{ titel: "Richting = εἰς + acc", tekst: "**εἰς + Acc** = 'naar' (richting beweging). *εἰς τὴν πόλιν* = naar de stad. Tegenstelling: **ἐν + Dat** = 'in' (rust). *ἐν τῇ πόλει* = in de stad.\n\nGriekse voorzetsels veranderen betekenis afhankelijk naamval." }],
          niveaus: { basis: "εἰς. A.", simpeler: "Richting = εἰς+acc = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Grieks heeft **3 geslachten**:",
        options: ["Mannelijk + vrouwelijk + onzijdig","Mannelijk + vrouwelijk","Mannelijk + niet-mannelijk","Geen"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Niet zo.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "3 genera", tekst: "**Grieks heeft 3 grammaticale geslachten** (zoals Duits + Latijn): **mannelijk (ὁ), vrouwelijk (ἡ), onzijdig (τό)**. Geslacht is grammaticaal, niet altijd biologisch (ἡ νῆσος = het eiland is vrouwelijk). Belangrijk: lidwoord + bijvoeglijk naamwoord + voornaamwoord stemmen overeen." }],
          niveaus: { basis: "3 geslachten. A.", simpeler: "3 genera = A.", nogSimpeler: "3 = A." },
        },
      },
    ],
  },

  // ─── C. Werkwoorden + tijden ──────────────────────────────
  {
    title: "Werkwoorden + tijden Grieks",
    explanation:
      "**Griekse werkwoorden** zijn **complexer dan Latijn** door extra categorieën.\n\n**Categorieën**:\n• **Persoon + getal**: 1e/2e/3e × enkelvoud/(tweevoud)/meervoud.\n• **Tijd**: 7 tijden (praesens, imperfectum, futurum, aoristus, perfectum, plusquamperfectum, futurum exactum).\n• **Wijs**: 4 (indicatief, conjunctief, optatief, imperatief).\n• **Genus**: 3 (actief, mediaal, passief).\n• **Aspect** (cruciaal in Grieks!).\n\n**Aspect** = hoofd-verschil met Latijn/Nederlands:\n\n• **Imperfectief aspect** (presens, imperfectum): handeling als doorlopend / herhalend.\n  - *ἔγραφον* (egraphon) = ik was aan het schrijven.\n  - *γράφω* (graphō) = ik schrijf (nu, doorlopend).\n\n• **Aoristisch aspect** (aoristus): handeling als eenmalig / geheel.\n  - *ἔγραψα* (egrapsa) = ik schreef (één keer, of: ik heb opgeschreven).\n  - Niet specifiek 'verleden' — eerder 'feit als geheel'.\n\n• **Perfectief aspect** (perfectum): voltooide handeling met **doorlopend resultaat**.\n  - *γέγραφα* (gegrapha) = ik heb geschreven (en het staat er nog).\n\n**Tijden enkel-praesens-stam** (imperfectief):\n• Praesens: γράφω = ik schrijf.\n• Imperfectum: ἔγραφον = ik was aan het schrijven / schreef herhaaldelijk.\n\n**Tijden aoristus-stam**:\n• Aoristus: ἔγραψα = ik schreef.\n• Aoristische conjunctief, optatief, imperatief, infinitief, participium.\n\n**Tijden perfect-stam**:\n• Perfectum: γέγραφα = ik heb geschreven (gevolgen blijven).\n• Plusquamperfectum.\n• Futurum perfectum.\n\n**Voorbeeld werkwoord 'liefhebben' (φιλέω) in praesens actief**:\n```\nφιλῶ      (filoo)   = ik heb lief\nφιλεῖς    (fileis)  = jij\nφιλεῖ     (filei)   = hij/zij\nφιλοῦμεν  (filoumen) = wij\nφιλεῖτε   (fileite) = jullie\nφιλοῦσιν  (filousin) = zij\n```\n\n**Augment**: prefix **ἐ-** vóór werkwoord-stam voor verleden tijden.\n• Praesens: λύω (luō) = ik maak los.\n• Imperfectum: ἔλυον (eluon) = ik was los aan het maken.\n• Aoristus: ἔλυσα (elusa) = ik maakte los.\n\n**Reduplicatie**: stam-begin verdubbeld in perfectum.\n• Perfectum: λέλυκα (leluka) = ik heb losgemaakt.\n• γράφω → γέγραφα (perfect-stam met re-).\n\n**Mediale + passieve vormen**:\n• **Medium** = subject doet handeling voor zichzelf. *λύομαι* = ik maak (mezelf) los.\n• **Passief** = subject ondergaat. *λύομαι* = ik word losgemaakt (zelfde vorm! context bepaalt).\n• Aoristus passief heeft eigen vormen.\n\n**Onregelmatige werkwoorden** veel:\n• **εἰμί** (eimi) = zijn: εἰμί, εἶ, ἐστί(ν), ἐσμέν, ἐστέ, εἰσί(ν).\n• **εἶμι** (let op iota, ander!) = gaan.\n• **φημί** = zeggen.\n• **οἶδα** = weten (perfect-vorm met praesens-betekenis).\n\n**Conjunctief + optatief**:\n• **Conjunctief**: wens, bevel, doel.\n• **Optatief**: nog niet uitgesproken wens, mogelijkheid.\n  - 'Mag God de Koning bewaren' soort uitdrukkingen.\n• Beide veel gebruikt in Plato, Sofokles, etc.\n\n**Tip Cito**: aspect-onderscheid is kritiek. Bij vertaling 'ἔλυον' versus 'ἔλυσα':\n• ἔλυον (imperf): herhaald / doorlopend in verleden → 'ik was los aan het maken' / 'ik maakte (steeds) los'.\n• ἔλυσα (aoristus): één keer, voltooid → 'ik maakte los'.",
    checks: [
      {
        q: "**Grieks aspect-onderscheid** is uniek t.o.v. Latijn:",
        options: ["Imperfectief vs aoristisch vs perfectief","Twee tijden","Alleen verleden","Geen verschil"],
        answer: 0,
        wrongHints: [null, "Niet — drievoudig.", "Niet — meer.", "Wel verschil."],
        uitlegPad: {
          stappen: [{ titel: "Aspect = manier van handelen", tekst: "Grieks heeft **3 aspecten**:\n• **Imperfectief** (praesens, imperfectum): doorlopend / herhalend.\n• **Aoristisch** (aoristus): eenmalig / geheel.\n• **Perfectief** (perfectum): voltooid met doorlopend resultaat.\n\nLatijn heeft hoofdzakelijk tijden-onderscheid (verleden/heden/toekomst), Grieks combineert tijd + aspect." }],
          niveaus: { basis: "Imperfectief/aoristisch/perfectief. A.", simpeler: "3 aspecten = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk werkwoord betekent **'zijn'**?",
        options: ["εἰμί","λέγω","γράφω","φιλέω"],
        answer: 0,
        wrongHints: [null, "Spreken.", "Schrijven.", "Liefhebben."],
        uitlegPad: {
          stappen: [{ titel: "Onregelmatig 'zijn'", tekst: "**εἰμί** (eimi) = ik ben. Vervoeging: εἰμί, εἶ, ἐστί(ν), ἐσμέν, ἐστέ, εἰσί(ν). Onregelmatig (zoals Latijn 'esse' + Engels 'be'). Bekendste citaat: *Πάντα ῥεῖ* (panta rhei) = 'alles stroomt', maar dat is een ander werkwoord (ῥέω, stromen)." }],
          niveaus: { basis: "εἰμί. A.", simpeler: "Zijn = εἰμί = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Augment** ἐ- voor werkwoord-stam markeert:",
        options: ["Verleden tijd","Toekomst","Conjunctief","Onzijdig"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Verleden-marker", tekst: "**Augment** (Grieks ἐ-) staat vóór stam voor **verleden tijden** (imperfectum, aoristus, plusquamperfectum).\n\n• Praesens: λύω.\n• Imperfectum: **ἔ**λυον = ik was los aan het maken.\n• Aoristus: **ἔ**λυσα = ik maakte los.\n\nLijkt op augment in Sanskriet — beide Indo-Europees." }],
          niveaus: { basis: "Verleden tijd. A.", simpeler: "ἐ- = verleden = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**ἔγραφον** (egraphon) is welke tijd?",
        options: ["Imperfectum (was aan het schrijven)","Praesens","Aoristus","Perfectum"],
        answer: 0,
        wrongHints: [null, "Geen augment.", "Anders gevormd.", "Anders gevormd."],
        uitlegPad: {
          stappen: [{ titel: "Augment + presens-stam", tekst: "**ἔγραφον** = augment (ἐ-) + presens-stam (γραφ-) + uitgang -ον. **Imperfectum**: 'ik was aan het schrijven' of 'ik schreef herhaaldelijk'. **Imperfectief aspect** in verleden.\n\nVergelijk: **ἔγραψα** = aoristus, eenmalige actie." }],
          niveaus: { basis: "Imperfectum. A.", simpeler: "ἔγραφον = imperf = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel **wijzen** heeft Grieks?",
        options: ["4 (ind/conj/opt/imp)","2","6","Geen"],
        answer: 0,
        wrongHints: [null, "Niet — meer.", "Niet — minder.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "+ Optatief", tekst: "**Grieks: 4 wijzen** — indicatief (mededelend), conjunctief (aanvoegend), **optatief** (wens/mogelijkheid), imperatief (gebiedend). Latijn heeft 3 (geen optatief — gebruikt conjunctief breder). **Optatief**: 'mocht het zijn', 'ware het zo'." }],
          niveaus: { basis: "4. A.", simpeler: "Grieks = 4 wijzen = A.", nogSimpeler: "4 = A." },
        },
      },
    ],
  },

  // ─── D. Griekse cultuur + auteurs ─────────────────────────
  {
    title: "Griekse cultuur + auteurs",
    explanation:
      "**Oud-Griekenland** ~800-146 v.Chr. (van Homerus tot Romeinse verovering).\n\n**Periodes**:\n• **Geometrische** ~900-700 v.Chr.: Homerus periode (Ilias + Odyssee).\n• **Archaïsch** ~700-480 v.Chr.: poleis-stichting, schrift, dichters Sappho + Hesiodus.\n• **Klassiek** ~480-323 v.Chr.: bloeitijd Athene. Marathon, Salamis, Perikles, Sokrates, Plato, Aristoteles, Sofokles.\n• **Hellenistisch** ~323-31 v.Chr.: na Alexander de Grote, Griekse cultuur verspreid van Egypte tot India.\n• **Romeinse periode** ~146 v.Chr.-330 n.Chr.: Griekenland onderdeel Romeinse Rijk.\n• **Byzantijnse periode** 330-1453 n.Chr.: Oost-Romeins.\n\n**Poleis** (stadstaten):\n• Geen verenigd Griekenland in klassieke tijd.\n• **Athene**: democratie, kunst, filosofie.\n• **Sparta**: militair, oligarchisch.\n• **Korinthe**, **Thebe**, **Argos**, **Milete**.\n• **Magna Graecia** (Zuid-Italië + Sicilië): Griekse kolonies.\n• **Klein-Azië-kust** (Turkije): Ionische kolonies.\n\n**Grote gebeurtenissen**:\n• **776 v.Chr.**: eerste Olympische Spelen (Olympia).\n• **490 v.Chr.**: Slag bij Marathon — Atheners verslaan Perzen.\n• **480 v.Chr.**: Slag bij Thermopylae (300 Spartanen onder Leonidas tegen Perzen) + Slag bij Salamis (zee-overwinning Atheners).\n• **461-429 v.Chr.**: **Eeuw van Perikles** — Athene's gouden tijd.\n• **431-404 v.Chr.**: Peloponnesische Oorlog (Athene vs Sparta — Sparta wint).\n• **399 v.Chr.**: Sokrates terechtgesteld (gif-beker).\n• **336-323 v.Chr.**: **Alexander de Grote** verovert van Griekenland tot India.\n• **146 v.Chr.**: Romeinen veroveren Korinthe → einde onafhankelijkheid.\n• **330 n.Chr.**: Constantijn maakt Byzantion hoofdstad Oost-Romein.\n\n**Belangrijke filosofen**:\n\n**Sokrates** (~470-399 v.Chr.):\n• 'Ik weet dat ik niets weet.'\n• Niets geschreven — kennen we via Plato + Xenophon.\n• **Sokratische methode**: vragen stellen tot tegenspraak vinden.\n• Terechtgesteld voor goden-loochening + jeugd-bederf.\n\n**Plato** (427-347 v.Chr.):\n• Sokrates' student.\n• Stichter **Academie** (Athene).\n• Dialogen: *Politeia* (Republiek), *Symposium*, *Apologie*, *Phaedo*.\n• **Ideeën-leer**: echte werkelijkheid = abstracte ideeën, materiële wereld is afgeleide.\n• **Grotgelijkenis**: mensen zien schaduwen, denken dat realiteit is.\n\n**Aristoteles** (384-322 v.Chr.):\n• Plato's student.\n• Stichter **Lyceum** (Athene).\n• Leraar Alexander de Grote.\n• Werken: *Ethica Nicomachea*, *Politica*, *Metafysica*, *Logica*, *Poetica*, *Physica*.\n• Systematische logica + classificatie wetenschap.\n\n**Andere filosofen**:\n• **Heraclitus** (~500 v.Chr.): 'Panta rhei' (alles stroomt). Veranderlijkheid centraal.\n• **Parmenides**: tegendeel — alles is één + onveranderlijk.\n• **Pythagoras**: getallen + driehoek-stelling.\n• **Demokritos**: atoom-theorie.\n• **Epicurus**: hedonisme. Ataraxia.\n• **Zeno**: Stoïcisme.\n• **Diogenes**: Cynisme. Leefde in een vat.\n\n**Literatuur**:\n\n**Homerus** (~750 v.Chr., legendarisch):\n• ***Ilias***: laatste jaar Trojaanse Oorlog. Held: Achilles.\n• ***Odyssee***: Odysseus' terugkeer (10 jaar). Cycloop, Sirenen, etc.\n• Episch dactylisch hexameter.\n• Inspiratie voor 3000 jaar westerse literatuur.\n\n**Sappho** (~600 v.Chr.):\n• Vrouwelijke dichter, Lesbos.\n• Liefdesgedichten.\n• Inspirator term 'lesbisch'.\n\n**Aischylus** (525-456 v.Chr.):\n• Eerste grote tragedie-schrijver.\n• *Oresteia*-trilogie.\n\n**Sofokles** (~497-406 v.Chr.):\n• 120+ stukken (7 bewaard).\n• ***Oidipous Tyrannos*** (Koning Oedipus).\n• ***Antigone***.\n• ***Elektra***.\n\n**Euripides** (~480-406 v.Chr.):\n• Innovatiever, psychologischer.\n• ***Medea***, ***Bakchen***, ***Trojaanse Vrouwen***.\n\n**Aristofanes** (~446-386 v.Chr.):\n• Komedies.\n• ***Wolken*** (parodieert Sokrates), ***Lysistrata*** (vrouwen stoppen oorlog door seks-staking).\n\n**Herodotus** (~484-425 v.Chr.):\n• 'Vader van geschiedenis'.\n• Persische Oorlogen + Egypte + Skythen.\n\n**Thucydides** (~460-400 v.Chr.):\n• Eerste 'wetenschappelijk' historicus.\n• *Peloponnesische Oorlog* — eerstehands.\n\n**Mythologie** (vaak op CSE):\n• **Olympische goden** (12): Zeus, Hera, Poseidon, Demeter, Athena, Apollo, Artemis, Ares, Aphrodite, Hephaestus, Hermes, Dionysos.\n• **Trojaanse Oorlog**: Helena ontvoerd door Paris → Achilles + Odysseus tegen Troje.\n• **Heracles**: 12 werken.\n• **Theseus**: Minotauros + labyrint.\n• **Perseus**: Medusa.\n• **Prometheus**: vuur aan mensen → eeuwig gestraft.\n\n**Theater**:\n• Begon als religieus festival voor Dionysos.\n• **Tragedies**: hoge personages, fataal einde.\n• **Komedies**: politiek + sociaal satirisch.\n• **Koor**: groep dansers/zangers commentator.\n• **Drie eenheden** (later Aristoteles): tijd, plaats, handeling.\n• Maskers, mannelijke acteurs (geen vrouwen).",
    checks: [
      {
        q: "Wie was leraar van **Alexander de Grote**?",
        options: ["Aristoteles","Plato","Sokrates","Pythagoras"],
        answer: 0,
        wrongHints: [null, "Niet — Plato eerder.", "Veel eerder.", "Heel anders thema."],
        uitlegPad: {
          stappen: [{ titel: "Aristoteles 343 v.Chr.", tekst: "**Aristoteles** (384-322 v.Chr.) was 3 jaar (vanaf 343 v.Chr.) leraar van **Alexander de Grote** (toen ~13-16 jaar oud) in Macedonië. Filip II (Alexander's vader) huurde Aristoteles in. Onderwijs in filosofie, ethiek, politiek, retorica, natuurwetenschap." }],
          niveaus: { basis: "Aristoteles. A.", simpeler: "Alex leraar = Aristoteles = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wanneer **eerste Olympische Spelen**?",
        options: ["776 v.Chr.","1896","490 v.Chr.","753 v.Chr."],
        answer: 0,
        wrongHints: [null, "Niet — moderne start.", "Niet — Slag Marathon.", "Niet — Rome stichting."],
        uitlegPad: {
          stappen: [{ titel: "Olympia Peloponnesos", tekst: "**776 v.Chr.**: eerste Olympische Spelen in **Olympia** (Peloponnesos), te ere van Zeus. Tot 393 n.Chr. (verboden door christelijke keizer Theodosius). **Moderne herstart 1896** door Pierre de Coubertin in Athene." }],
          niveaus: { basis: "776 v.Chr. A.", simpeler: "Olympia = 776 vC = A.", nogSimpeler: "776 = A." },
        },
      },
      {
        q: "**Grotgelijkenis** komt van:",
        options: ["Plato","Aristoteles","Sokrates","Homerus"],
        answer: 0,
        wrongHints: [null, "Niet — andere theorieën.", "Niet — zelf niets geschreven.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Politeia VII", tekst: "**Plato's grotgelijkenis** (*Politeia* VII): mensen vastgeketend in grot zien alleen schaduwen, denken dat realiteit is. Eén ontsnapt → ziet zonlicht (werkelijkheid van Ideeën) → keert terug om anderen te bevrijden (filosoof). Metafoor voor: onwetendheid vs ware kennis, fysieke wereld vs Ideeën-wereld." }],
          niveaus: { basis: "Plato. A.", simpeler: "Grot = Plato = A.", nogSimpeler: "Plato = A." },
        },
      },
      {
        q: "Wie schreef **Ilias + Odyssee**?",
        options: ["Homerus","Sofokles","Aischylus","Thucydides"],
        answer: 0,
        wrongHints: [null, "Niet — tragedie.", "Niet — tragedie.", "Niet — historicus."],
        uitlegPad: {
          stappen: [{ titel: "~750 v.Chr.", tekst: "**Homerus** (~750 v.Chr., legendarische dichter) — eigenlijk waarschijnlijk traditie van orale dichters die geconsolideerd werden onder die naam. **Ilias** = laatste jaar Trojaanse Oorlog (Achilles' woede). **Odyssee** = Odysseus' 10-jarige terugkeer. Dactylisch hexameter — fundament westerse literatuur." }],
          niveaus: { basis: "Homerus. A.", simpeler: "Ilias = Homerus = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Slag bij Marathon (490 v.Chr.)** was tussen:",
        options: ["Atheners + Perzen","Atheners + Spartanen","Romeinen + Galliërs","Egyptenaren + Hettieten"],
        answer: 0,
        wrongHints: [null, "Niet — Peloponnesische oorlog.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Atheners winnen", tekst: "**490 v.Chr.**: Atheners onder Miltiades verslaan Perzen op vlakte van **Marathon** (~25 km van Athene). Boodschapper Phidippides liep terug naar Athene om overwinning te melden, viel dood neer (volgens legende) → **modern Marathon-loop** (42,2 km) vernoemd. Onderdeel **Persische Oorlogen** 499-449 v.Chr." }],
          theorie: "10 jaar later: 480 v.Chr. Xerxes komt terug — Slag bij Salamis (Atheense zee-overwinning) + Thermopylae (300 Spartanen).",
          niveaus: { basis: "Atheners + Perzen. A.", simpeler: "Marathon = AT vs PE = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Grieks mix",
    explanation:
      "Mix van alfabet + naamvallen + werkwoorden + cultuur.\n\nVeel succes!",
    checks: [
      {
        q: "*Panta rhei* (πάντα ῥεῖ) van Heraclitus betekent:",
        options: ["Alles stroomt","Alles is één","Alles is verboden","Wijsheid is liefde"],
        answer: 0,
        wrongHints: [null, "Niet — Parmenides.", "Niet relevant.", "Wel etymologie 'filosofie' maar andere zin."],
        uitlegPad: {
          stappen: [{ titel: "Heraclitus' beweging", tekst: "**Panta rhei** (πάντα ῥεῖ) = 'alles stroomt'. **Heraclitus** (~500 v.Chr.): werkelijkheid is constant verandering, zoals rivier waar je nooit twee keer in zelfde water staat. Tegenstelling: **Parmenides** — alles is één + onveranderlijk." }],
          niveaus: { basis: "Alles stroomt. A.", simpeler: "Panta rhei = stroomt = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke filosoof zei **'Ik weet dat ik niets weet'**?",
        options: ["Sokrates","Plato","Aristoteles","Heraclitus"],
        answer: 0,
        wrongHints: [null, "Niet — Sokrates' student.", "Niet — andere ideeën.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Socratische bescheidenheid", tekst: "**Sokrates**: 'Ik weet dat ik niets weet.' (overgeleverd via Plato). Vroeg vragen tot tegenstanders zelf zagen dat ze niets wisten. Spotseer-paradox: hij wist meer dan anderen juist door zijn besef van onwetendheid. **Daadwerkelijk uitgesproken** (en in Plato's *Apologie*): 'Ik weet alleen dat ik niets weet'." }],
          niveaus: { basis: "Sokrates. A.", simpeler: "Niets weten = Sokrates = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke god is **Zeus**?",
        options: ["Oppergod","Liefde","Oorlog","Zee"],
        answer: 0,
        wrongHints: [null, "Niet — Aphrodite.", "Niet — Ares.", "Niet — Poseidon."],
        uitlegPad: {
          stappen: [{ titel: "Olympus-leider", tekst: "**Zeus** (Ζεύς) = oppergod Olympus. Romeinse equivalent: **Jupiter**. Wapen: bliksem. Vader van velen (Athena uit zijn hoofd, Heracles uit verhouding met mens, etc.). Zeer overspelig — bron veel mythen. Cultus-centrum: Olympia + Dodona." }],
          niveaus: { basis: "Oppergod. A.", simpeler: "Zeus = oppergod = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk theaterstuk schreef **Sofokles**?",
        options: ["Oidipous Tyrannos","Medea","Wolken","Ilias"],
        answer: 0,
        wrongHints: [null, "Euripides.", "Aristofanes (komedie).", "Homerus (epos)."],
        uitlegPad: {
          stappen: [{ titel: "Tragisch lot", tekst: "**Sofokles** schreef *Oidipous Tyrannos* (Koning Oedipus): koning ontdekt dat hij vader doodde + moeder huwde, ondanks pogingen lot te ontvluchten. **Freud-inspirator** (Oedipus-complex). Sofokles schreef 120+ stukken, 7 bewaard. Andere: *Antigone*, *Elektra*, *Aias*." }],
          niveaus: { basis: "Oidipous. A.", simpeler: "Sofokles = Oidipous = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Alexander de Grote** stierf in:",
        options: ["323 v.Chr.","146 v.Chr.","330 n.Chr.","490 v.Chr."],
        answer: 0,
        wrongHints: [null, "Niet — verovering Korinthe.", "Niet — Byzantion-hoofdstad.", "Niet — Marathon."],
        uitlegPad: {
          stappen: [{ titel: "Babylon, 32 jaar oud", tekst: "**Alexander de Grote** (356-323 v.Chr.) stierf op 32-jarige leeftijd in **Babylon** (Mesopotamië). Doodsoorzaak: koorts/ziekte (mogelijk malaria, tyfus of vergiftiging — onbekend). In 13 jaar (336-323) had hij van Macedonië tot India veroverd. Na zijn dood: rijk verdeeld onder zijn generaals (Diadochen). Start **Hellenistische periode**." }],
          niveaus: { basis: "323 v.Chr. A.", simpeler: "Alex dood = 323 vC = A.", nogSimpeler: "323 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const grieksVwo = {
  id: "grieks-vwo",
  title: "Grieks basis (VWO Gymnasium)",
  emoji: "Α",
  level: "vwo",
  subject: "klassieke-talen",
  referentieNiveau: "vwo-CSE-grieks",
  sloThema: "Klassieke Talen VWO — Grieks basis eindexamen",
  prerequisites: [
    { id: "latijn-vwo", title: "Latijn (parallel)", niveau: "vwo" },
  ],
  intro:
    "Grieks basis VWO-Gymnasium. Alfabet (24 letters Α-Ω) + uitspraak Erasmus + spiritus, 5 naamvallen + lidwoord (ὁ ἡ τό) + declinaties, werkwoorden + 3 aspecten (imperfectief/aoristisch/perfectief) + augment + 4 wijzen, Griekse cultuur (Athene 480-323 + filosofen Sokrates/Plato/Aristoteles + Homerus + tragedies + mythologie + Marathon 490). ~15-20 min.",
  triggerKeywords: [
    "Grieks", "klassiek Grieks",
    "Grieks alfabet",
    "alfa", "omega",
    "spiritus", "asper", "lenis",
    "Grieks naamval",
    "Grieks lidwoord", "ὁ ἡ τό",
    "Grieks werkwoord",
    "aspect Grieks", "aoristus", "imperfectum Grieks",
    "augment", "reduplicatie",
    "indicatief conjunctief optatief imperatief",
    "Sokrates", "Plato", "Aristoteles",
    "Homerus", "Ilias", "Odyssee",
    "Sofokles", "Oedipus", "Antigone",
    "Aischylus",
    "Euripides", "Medea",
    "Aristofanes",
    "Herodotus", "Thucydides",
    "Heraclitus", "panta rhei",
    "Pythagoras",
    "polis", "demos", "logos",
    "Marathon 490",
    "Thermopylae",
    "Alexander de Grote",
    "Hellenistisch",
    "Olympische Spelen", "Olympia",
    "Griekse goden", "Zeus", "Athena",
    "Trojaanse Oorlog",
  ],
  chapters,
  steps,
};

export default grieksVwo;
