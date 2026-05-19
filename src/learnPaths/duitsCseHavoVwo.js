// Leerpad: Duits CSE leesvaardigheid — HAVO/VWO
// Examen-format, vraagsoorten, naamvallen, cultuur. Eindexamen-CSE-stof.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  hl: "#ef6c00",
  acc: "#42a5f5",
  goed: "#66bb6a",
  fout: "#ef5350",
};

const stepEmojis = ["🇩🇪", "🔍", "📖", "🎯", "🏆"];

const chapters = [
  { letter: "A", title: "Examen-format Duits", emoji: "🇩🇪", from: 0, to: 0 },
  { letter: "B", title: "Vraagsoorten + naamvallen", emoji: "🔍", from: 1, to: 1 },
  { letter: "C", title: "Lange teksten + Konjunktiv", emoji: "📖", from: 2, to: 2 },
  { letter: "D", title: "DACH-cultuur + actualiteit", emoji: "🎯", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Examen-format Duits ───────────────────────────────
  {
    title: "Examen-format Duits CSE",
    explanation:
      "**CSE Duits** HAVO/VWO test **leesvaardigheid** (zoals Frans, Engels). Andere vaardigheden in schoolexamens.\n\n**Tijdsduur**:\n• HAVO: 2,5 uur.\n• VWO: 3 uur.\n\n**Aantal teksten**:\n• ~9-12 teksten.\n• Totaal ~3000-4500 woorden Duits.\n• ~40-45 vragen.\n\n**Tekstsoorten**:\n• Nieuwsartikelen uit Süddeutsche Zeitung, Die Zeit, Der Spiegel, FAZ.\n• Reportages.\n• Wetenschapsteksten (vaak Spektrum der Wissenschaft).\n• Cultuur (theater, film, boekrecensies).\n• Maatschappij-debat.\n• Interviews.\n• Soms literair fragment op VWO.\n\n**Tekst-niveau**:\n• HAVO: B1 (zelfstandig taalgebruiker).\n• VWO: B2 (vaardig taalgebruiker).\n\n**Vraagtypes** (meestal in Nederlands):\n• Multiple choice (4 opties).\n• Open vraag (kort NL of korte Duitse zin).\n• Citaat met regelnummer.\n• Hoofdgedachte / alinea-functie.\n• Wat bedoelt de auteur met...\n• Welke uitspraak past bij persoon X.\n\n**Hulpmiddelen toegestaan**:\n• **Eentalig Duits woordenboek** (Duden, Wahrig).\n• **Tweetalig Duits-Nederlands woordenboek** (Van Dale).\n• Geen digitaal.\n\n**Strategie**:\n• 2,5 uur HAVO ÷ 10 teksten = 15 min/tekst.\n• Eerst snel doorlezen, dan vragen.\n• Duits is voor NL'ers relatief toegankelijk (germaanse verwantschap) — gok daarom niet te makkelijk; cito-vragen testen vaak subtiele nuances.\n\n**Score + cijfer**:\n• Eindcijfer = (CSE + SE) / 2.\n• Slagen: gemiddeld 5,5+, maximaal 1× onvoldoende in kernvakken (Duits zelden kernvak).\n\n**Duits als examen-vak**:\n• HAVO E&M-profiel: keuzevak, vaak gekozen.\n• HAVO C&M-profiel: vaak verplicht of zwaarwegend.\n• VWO Gymnasium: keuze tussen klassieke/moderne talen.\n• Duits goed voor Duitsland-studies (HBO/WO), grenswerk Limburg/Twente.",
    checks: [
      {
        q: "Tijdsduur CSE Duits **HAVO**?",
        options: ["2,5 uur","2 uur","3 uur","4 uur"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Niet — VWO.", "Te lang."],
        uitlegPad: {
          stappen: [{ titel: "Standaard", tekst: "**HAVO Duits CSE: 2,5 uur**. VWO: 3 uur. Bij dyslexie 30 min extra." }],
          niveaus: { basis: "2,5u. A.", simpeler: "HAVO=2,5u = A.", nogSimpeler: "2,5 = A." },
        },
      },
      {
        q: "Hoeveel teksten ongeveer op CSE Duits?",
        options: ["~10","~3","~25","~50"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Veel te veel.", "Absurd."],
        uitlegPad: {
          stappen: [{ titel: "9-12 stuks", tekst: "Op CSE Duits HAVO: **9-12 teksten**, totaal ~3500-4500 woorden. VWO iets meer + complexer. Sommige kort (1 alinea), sommige lang (~1000 woorden)." }],
          niveaus: { basis: "~10. A.", simpeler: "~10 teksten = A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "Welk **leesniveau** verwacht HAVO?",
        options: ["B1","A1","B2","C1"],
        answer: 0,
        wrongHints: [null, "Te laag.", "Niet — VWO.", "Te hoog."],
        uitlegPad: {
          stappen: [{ titel: "B1 voor HAVO", tekst: "**HAVO Duits CSE: B1** (zelfstandig taalgebruiker, hoofdpunten begrijpen). VWO: B2 (complexe argumentatie + abstract). C1+ alleen nodig voor studie/werk." }],
          niveaus: { basis: "B1. A.", simpeler: "HAVO=B1 = A.", nogSimpeler: "B1 = A." },
        },
      },
      {
        q: "Welk Duits **eentalig** woordenboek?",
        options: ["Duden","Van Dale NL-DE","Larousse","Cambridge"],
        answer: 0,
        wrongHints: [null, "Niet — dat is tweetalig.", "Niet — Frans.", "Niet — Engels."],
        uitlegPad: {
          stappen: [{ titel: "Duden = standaard", tekst: "**Duden** = standaard eentalig Duits woordenboek (Duitse equivalent van Van Dale). Wahrig is alternatief. Op CSE beide toegestaan." }],
          niveaus: { basis: "Duden. A.", simpeler: "Eentalig = Duden = A.", nogSimpeler: "Duden = A." },
        },
      },
      {
        q: "Welk profiel heeft Duits **vaak als kernvak**?",
        options: ["HAVO C&M (Cultuur + Maatschappij)","HAVO N&T","VMBO BB","Geen"],
        answer: 0,
        wrongHints: [null, "Niet — vaker natuur.", "Niet — keuze.", "Wel keuze."],
        uitlegPad: {
          stappen: [{ titel: "C&M-profiel", tekst: "**HAVO C&M (Cultuur + Maatschappij)**: vaak Duits + Frans verplicht of zwaarwegend. E&M (Economie+Maatschappij): keuze. N&T (Natuur+Techniek): meestal niet. Talen-profielen kiezen vaak DU + FR." }],
          niveaus: { basis: "C&M. A.", simpeler: "C&M = talen = A.", nogSimpeler: "C&M = A." },
        },
      },
    ],
  },

  // ─── B. Vraagsoorten + naamvallen ─────────────────────────
  {
    title: "Vraagsoorten + naamvallen-snelcheck",
    explanation:
      "**Strategie zoals bij Frans**: globaal → vragen scannen → controleren.\n\n**Specifiek Duits**: vier **naamvallen** veranderen lidwoorden + bijvoeglijke naamwoorden + voornaamwoorden:\n\n**Naamvallen-snelcheck**:\n• **Nominativ (1)** = onderwerp ('wie/wat doet?').\n  - der Mann, die Frau, das Kind, die Männer.\n• **Akkusativ (4)** = lijdend voorwerp ('wie/wat wordt geraakt?').\n  - den Mann, die Frau, das Kind, die Männer. *(alleen mannelijk verandert)*\n• **Dativ (3)** = meewerkend voorwerp ('aan/voor wie/wat?').\n  - dem Mann, der Frau, dem Kind, den Männern (**+n** mv!).\n• **Genitiv (2)** = bezit ('van wie?').\n  - des Mannes, der Frau, des Kindes, der Männer.\n\n**Voorzetsels-met-vaste-naamval** (uit hoofd!):\n• **Akkusativ**: durch, für, gegen, ohne, um, bis.\n  - Memo: **DUFGOUB** of *für mich ohne Geld*.\n• **Dativ**: aus, bei, mit, nach, seit, von, zu, gegenüber.\n  - Memo: **ABMNSVZ-gegenüber** of liedje 'aus bei mit nach seit von zu'.\n• **Wechsel** (akkusativ bij beweging-richting, dativ bij plaats): an, auf, hinter, in, neben, über, unter, vor, zwischen.\n  - Klassiek: *Ich gehe in **die** Schule* (akk) vs *Ich bin in **der** Schule* (dat).\n\n**Lidwoord-tabel** (basis):\n```\n        m       f       n      mv\nNom    der     die     das     die\nAkk    den     die     das     die\nDat    dem     der     dem     den (+n)\nGen    des     der     des     der\n```\n\n**Cito-pattern**: lidwoord-veranderingen verraden naamval → context van zin.\n\n**Verwijswoorden** (vergelijkbaar met Frans):\n• **er** = hij (m).\n• **sie** = zij (v of mv).\n• **es** = het (n).\n• **ihn** = hem (m akk).\n• **ihm** = hem (m dat).\n• **ihr** = haar (v dat).\n• Onthoud welk geslacht woord heeft (uit context vinden).\n\n**Voorbeeld verwijswoord-vraag**:\nTekst: *Der Wissenschaftler präsentierte seine Theorie. **Er** wurde gefeiert.*\n→ Wie wordt gevierd? Er = hij = der Wissenschaftler (m).\n\n**Faux amis Duits-Nederlands** (woorden lijken op NL maar anders):\n• **bekommen** = krijgen (NIET worden — dat is *werden*).\n• **das Gymnasium** = middelbare school (NIET sport-zaal — *die Turnhalle*).\n• **die Mappe** = aktentas / map (KAN map zijn, vaak tas).\n• **das Kabinett** = ministersraad / klein meubel (NIET kabinet als kast).\n• **lustig** = grappig (NIET lusteloos — dat is *lustlos*).\n• **brav** = braaf (klopt vrijwel — soms 'ferm' bedoeld).\n• **eventuell** = mogelijk (NIET vast — meer twijfel).\n• **sympathisch** = aardig (zoals in NL eigenlijk, maar engelse 'sympathy' = mededogen).\n• **bald** = snel/spoedig (NIET kaal — dat is *kahl*).\n\n**Werkwoord-positie** (TaT-regel):\n• In hoofdzin: werkwoord op **plaats 2**.\n  *Ich gehe heute in die Schule.*\n• In bijzin (met *dass, weil, wenn, ob, als, obwohl, falls*): werkwoord helemaal **achteraan**.\n  *..., weil ich heute in die Schule **gehe**.*\n• Bij scheidbaar werkwoord: prefix scheidt af in hoofdzin → einde.\n  *Ich rufe meinen Freund **an**.* (anrufen = bellen)\n\n**Werkwoordstijden** in teksten:\n• **Präsens**: heden.\n• **Präteritum (Imperfekt)**: verleden, vooral in geschreven taal/literatuur. *Ich ging* = ik ging.\n• **Perfekt**: heden-voltooid, vooral spreektaal. *Ich bin gegangen* = ik ben gegaan.\n• **Plusquamperfekt**: verleden-voltooid. *Ich war gegangen* = ik was gegaan.\n• **Futur I**: zal. *Ich werde gehen*.\n• **Konjunktiv I**: indirecte rede (vooral journalistiek). *Er sagt, er sei krank* = Hij zegt dat hij ziek **zou zijn**.\n• **Konjunktiv II**: wens, hypothese, hoffelijkheid. *Wenn ich Zeit **hätte***. *Ich **würde** kommen*.",
    checks: [
      {
        q: "*Ich gehe in **die** Schule* — welke naamval?",
        options: ["Akkusativ (beweging-richting)","Dativ (plaats)","Nominativ","Genitiv"],
        answer: 0,
        wrongHints: [null, "Niet — bij plaats: *in der Schule*.", "Niet — onderwerp.", "Niet — geen bezit."],
        uitlegPad: {
          stappen: [{ titel: "Wechselpräposition + Akk = beweging", tekst: "**In** is een Wechselpräposition. Bij **beweging richting plek** → Akkusativ (*die* voor v). Bij **statisch in/op plek** → Dativ (*der*).\n\n*Ich gehe in **die** Schule* (akk — ik ga ergens **naar toe**).\n*Ich bin in **der** Schule* (dat — ik ben er **al**)." }],
          theorie: "Memo: Akk = beweging IN, Dat = al binnen. Cito-favoriet om naamval te testen.",
          niveaus: { basis: "Akkusativ. A.", simpeler: "Beweging = Akk = A.", nogSimpeler: "Akk = A." },
        },
      },
      {
        q: "*Bekommen* betekent in Duits:",
        options: ["Krijgen","Worden","Begrijpen","Vergeten"],
        answer: 0,
        wrongHints: [null, "Faux ami! Dat is *werden*.", "Niet — dat is verstehen.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [{ titel: "Faux ami klassiek", tekst: "**Bekommen** = krijgen, ontvangen. NIET 'worden' (dat is *werden*). NL'ers verwarren dit vaak. Voorbeeld: *Ich bekomme ein Geschenk* = Ik **krijg** een cadeau (NIET 'ik word een cadeau')." }],
          theorie: "Andere faux amis: das Gymnasium (school, niet zaal), die Mappe (tas, kan map), eventuell (mogelijk).",
          niveaus: { basis: "Krijgen. A.", simpeler: "Bekommen = krijgen = A.", nogSimpeler: "Krijgen = A." },
        },
      },
      {
        q: "In bijzin met *weil* gaat werkwoord:",
        options: ["Helemaal naar einde","Op plaats 2","Naar voren","Wisselt per zin"],
        answer: 0,
        wrongHints: [null, "Dat is hoofdzin.", "Niet — bijzin draait om.", "Niet — vast regel."],
        uitlegPad: {
          stappen: [{ titel: "Bijzin = werkwoord-eind", tekst: "Bij bijzinnen met *weil, dass, wenn, ob, obwohl, als, falls* gaat het werkwoord **helemaal naar het einde**.\n\n*Ich gehe in die Schule, **weil** ich Mathe **mag**.*\n(En niet *...weil ich mag Mathe.*)" }],
          theorie: "Cito-pattern: lange zin met bijzin → werkwoord vinden aan einde voor context.",
          niveaus: { basis: "Einde. A.", simpeler: "Weil = werkwoord eind = A.", nogSimpeler: "Eind = A." },
        },
      },
      {
        q: "*Er sagt, er **sei** krank*. Welke modus + functie?",
        options: ["Konjunktiv I — indirecte rede","Imperatief","Futur","Konjunktiv II"],
        answer: 0,
        wrongHints: [null, "Niet — geen bevel.", "Niet — geen toekomst.", "Niet — anders gebruikt."],
        uitlegPad: {
          stappen: [{ titel: "Konjunktiv I = citeren", tekst: "**Konjunktiv I** wordt gebruikt voor **indirecte rede** (vooral journalistiek). Auteur citeert bewering zonder zelf in te staan voor waarheid. *Er sei krank* = 'Hij zou ziek zijn (zo zegt hij althans)'.\n\nKonjunktiv II is voor wens/hypothese: *Wenn ich Zeit **hätte***." }],
          theorie: "Cito-pattern: bij krantenartikel-citaten kijk naar Konjunktiv I voor 'wat anderen claimden'.",
          niveaus: { basis: "K I, indirecte rede. A.", simpeler: "sei = K I = A.", nogSimpeler: "K I = A." },
        },
      },
      {
        q: "Voorzetsel **für** vraagt:",
        options: ["Akkusativ","Dativ","Genitiv","Geen naamval"],
        answer: 0,
        wrongHints: [null, "Niet — vaste Akk.", "Niet — vaste Akk.", "Wel naamval."],
        uitlegPad: {
          stappen: [{ titel: "FUDGOB-Akkusativ-set", tekst: "**Für, durch, gegen, ohne, um, bis** vragen altijd Akkusativ. Memo: *für **mich***, *ohne **dich***, *gegen **ihn***. Geen wisseling met beweging/plaats." }],
          niveaus: { basis: "Akkusativ. A.", simpeler: "für = Akk = A.", nogSimpeler: "Akk = A." },
        },
      },
    ],
  },

  // ─── C. Lange teksten + Konjunktiv ────────────────────────
  {
    title: "Lange teksten + Konjunktiv-detectie",
    explanation:
      "Op CSE Duits 1-2 lange teksten (~600-1000 woorden). Diepere structuur-analyse.\n\n**Argumentatieve teksten**:\n• Thesis voorop.\n• Argumenten + voorbeelden.\n• Tegenargument (Einwand) — vaak gevolgd door weerlegging.\n• Conclusie / oproep.\n\n**Signaal-woorden voor argumentatie**:\n• **Einerseits... andererseits** = enerzijds, anderzijds.\n• **Dagegen / im Gegensatz dazu** = daarentegen.\n• **Trotzdem / dennoch** = toch.\n• **Allerdings** = echter.\n• **Schließlich** = uiteindelijk.\n• **Folglich / daher / deshalb** = daarom.\n• **Zumal** = vooral omdat.\n• **Indem** = doordat.\n• **Sodass / so dass** = zodat.\n• **Während** = terwijl (kan tijd én tegenstelling betekenen).\n\n**Konjunktiv-detectie in teksten**:\n\n**Konjunktiv I** (indirecte rede in journalistiek):\n• Vormen: *er sei, er habe, er werde, er gehe, er müsse*.\n• Vertel: 'zo zegt iemand anders' — auteur reserveert oordeel.\n• Voorbeeld: *Der Minister behauptet, die Lage **sei** kontrolliert.* = De minister beweert dat de situatie onder controle **zou zijn** (volgens hem).\n\n**Konjunktiv II** (irreëel/wens/hoffelijk):\n• Vormen: *wäre, hätte, würde + infinitief, käme, ginge, müsste*.\n• Functie:\n  - **Wens / hypothese**: *Wenn ich reich **wäre**, **würde** ich reisen*.\n  - **Hoffelijkheid**: *Ich **hätte** gern einen Kaffee*. *Könnten Sie...?*\n  - **Irreëel verleden**: *Wenn er gekommen **wäre**, **hätte** ich es gewusst.*\n\n**Cito-typische vraag**:\n'Wat is de functie van *sei* in regel 12?' → Konjunktiv I, indirecte rede, auteur citeert bron.\n\n**Lange zinnen ontleden** (Duits houdt van lange zinnen!):\n• Vind het hoofdwerkwoord (plek 2 in hoofdzin).\n• Vind onderwerp (nominatief).\n• Bijzinnen tussen komma's afhandelen.\n• Werkwoorden achteraan bijzinnen pakken.\n\n**Tussen-zinnen + scheidbaar werkwoord**:\n• Bij scheidbaar werkwoord wijkt prefix vaak ver van werkwoord af in hoofdzin:\n  *Sie **kommt** heute Abend um 8 Uhr von der Arbeit **zurück**.* (zurückkommen = terugkomen).\n• In bijzin blijft hij samen: *..., wenn sie **zurückkommt***.\n\n**Stijl + register**:\n• **Hochdeutsch** = standaardtaal — wat in CSE staat.\n• **Dialekt** = Beiers, Saksisch, Plattduits (Noord-DE). Komt zelden in CSE.\n• **Jugendsprache** (jongerentaal): *cool, krass, geil* (super), *Bock haben auf* (zin in iets hebben).\n\n**Stijlfiguren**:\n• Metapher (metafoor).\n• Hyperbel (overdrijving).\n• Ironie (vaak duidelijk te markeren in Duits met aanhalingstekens of expliciete bijwoord).\n• Litotes (litote, onderschatting).\n\n**Tip diepe lees**:\nBij lange teksten elke alinea een **mini-samenvatting** maken in je hoofd (of in marge). Dat geeft hou-vast bij vragen over structuur.\n\n**Voorbeeld lange-tekst-vraag-types**:\n• Structuur: 'In welke alinea wordt het tegenargument geïntroduceerd?'\n• Toon: 'Hoe staat de auteur tegenover X?' (positief / kritisch / neutraal / ironisch).\n• Functie alinea: 'Wat is de rol van alinea 4?' (inleiding / argument / voorbeeld / tegenargument / conclusie).\n• Inferentie: 'Wat suggereert de auteur over Y?' (vaak niet letterlijk).\n• Doel: 'Met welk doel schreef de auteur deze tekst?' (informeren / overtuigen / vermaken / oproep).",
    checks: [
      {
        q: "*Trotzdem* betekent:",
        options: ["Toch","Daarom","Bovendien","Misschien"],
        answer: 0,
        wrongHints: [null, "Niet — dat is *deshalb*.", "Niet — *außerdem*.", "Niet — *vielleicht*."],
        uitlegPad: {
          stappen: [{ titel: "Tegenstelling-marker", tekst: "**Trotzdem / dennoch** = toch, niettemin. Signaleert dat ondanks vorige bewering iets anders volgt. Synoniem: *allerdings, jedoch*." }],
          niveaus: { basis: "Toch. A.", simpeler: "Trotzdem = toch = A.", nogSimpeler: "Toch = A." },
        },
      },
      {
        q: "*Sie hätte gern einen Kaffee* — welke modus + functie?",
        options: ["Konjunktiv II — hoffelijkheid","Konjunktiv I","Imperatief","Indikativ"],
        answer: 0,
        wrongHints: [null, "Niet — geen indirecte rede.", "Niet — geen bevel.", "Niet — irreëel."],
        uitlegPad: {
          stappen: [{ titel: "Hoffelijk-Konjunktiv", tekst: "*Sie **hätte** gern...* = **Konjunktiv II** voor **hoffelijkheid**. Letterlijk 'zij zou graag hebben' = beleefde manier om te vragen. Vergelijk *Ich möchte...* (ik zou willen) en *Könnten Sie...* (zou u kunnen)." }],
          theorie: "Indikativ: *Ich will einen Kaffee* (te direct). Konjunktiv II: *Ich hätte gern...* (beleefd). Verschil komt vaak terug op CSE.",
          niveaus: { basis: "K II hoffelijk. A.", simpeler: "hätte gern = beleefd = A.", nogSimpeler: "K II = A." },
        },
      },
      {
        q: "Bij **scheidbaar werkwoord** *anrufen* in hoofdzin: prefix staat:",
        options: ["Aan het einde","Direct na werkwoord","Voor onderwerp","Wisselt per zin"],
        answer: 0,
        wrongHints: [null, "Niet — uit elkaar.", "Niet — niet zinpositie.", "Wel regel."],
        uitlegPad: {
          stappen: [{ titel: "Scheidbare prefix = einde", tekst: "Bij scheidbaar werkwoord in **hoofdzin** scheidt prefix af + gaat naar einde.\n\n*Ich **rufe** meinen Freund **an**.*\n\nIn bijzin blijft hij samen: *..., dass ich meinen Freund **anrufe**.*" }],
          theorie: "Memo: hoofdzin = uit elkaar, bijzin = samen. Cito-classic.",
          niveaus: { basis: "Einde. A.", simpeler: "Scheidbaar hoofdzin = einde = A.", nogSimpeler: "Eind = A." },
        },
      },
      {
        q: "Welk register is **Jugendsprache**?",
        options: ["Informeel jongerentaal","Formele bestuurstaal","Wetenschappelijk","Standaard"],
        answer: 0,
        wrongHints: [null, "Niet — heel informeel.", "Niet relevant.", "Niet — afwijkend."],
        uitlegPad: {
          stappen: [{ titel: "Slang", tekst: "**Jugendsprache** = jongerentaal Duits. Voorbeelden: *krass* (heftig/cool), *geil* (super), *cringe* (gênant), *abhängen* (chillen), *Bock haben* (zin hebben). Komt op CSE alleen in zeer informele context (sociale media, jongeren-interviews)." }],
          niveaus: { basis: "Jongerentaal. A.", simpeler: "Jugendsprache = jong slang = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "*Während* kan in tekst betekenen:",
        options: ["Tijd 'terwijl' óf tegenstelling 'daarentegen'","Alleen tijd","Alleen tegenstelling","Daarom"],
        answer: 0,
        wrongHints: [null, "Niet — twee betekenissen.", "Niet — twee betekenissen.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Dubbele betekenis", tekst: "**Während** heeft 2 betekenissen:\n• **Tijd**: *Während ich aß, klingelte das Telefon* = Terwijl ik at, ging de telefoon.\n• **Tegenstelling**: *Während die Eltern arbeiten, spielen die Kinder* = De ouders werken, **terwijl/daarentegen** de kinderen spelen.\n\nContext beslist. Cito-favoriet om beide betekenissen te testen." }],
          niveaus: { basis: "Beide. A.", simpeler: "Während = tijd of contrast = A.", nogSimpeler: "Beide = A." },
        },
      },
    ],
  },

  // ─── D. DACH-cultuur + actualiteit ────────────────────────
  {
    title: "DACH-cultuur + actualiteit",
    explanation:
      "**DACH** = Duitsland, Österreich, Schweiz (CH = Confoederatio Helvetica). Drie Duitstalige landen. Soms ook **Liechtenstein** en delen van **België** (Eupen-regio) Duitstalig.\n\n**Duitsland (Deutschland)** in kort:\n• ~84 mln inwoners (grootste EU-bevolking).\n• Hoofdstad Berlin (sinds 1990; voor hereniging West-Bonn).\n• 16 deelstaten (Bundesländer) — federaal stelsel.\n• Bondskanselier (Bundeskanzler): aktueel **Friedrich Merz** (CDU, sinds mei 2025, na Olaf Scholz-coalitie).\n• Bundespräsident (ceremonieel): Frank-Walter Steinmeier.\n• EU + euro + Schengen + NAVO.\n• Niet permanent VN-Veiligheidsraad.\n• Sterkste economie EU.\n\n**Belangrijke Duitse media**:\n• **Süddeutsche Zeitung** (centrum-links, München).\n• **Frankfurter Allgemeine Zeitung (FAZ)** (centrum-rechts).\n• **Die Zeit** (wekelijks, kwaliteit-links).\n• **Der Spiegel** (wekelijks magazine, onderzoek).\n• **Bild** (tabloid, populair).\n• **Tagesschau** (TV-nieuws ARD).\n\n**Duitse politieke partijen**:\n• **CDU/CSU** (Union, christen-democratisch centrum-rechts).\n• **SPD** (sociaal-democratisch).\n• **Grüne** (groenen).\n• **FDP** (liberaal, lijdt aan dalende steun).\n• **Die Linke** (links).\n• **AfD** (Alternative für Deutschland, populistisch-rechts).\n• **BSW** (Bündnis Sahra Wagenknecht, recent links-populistisch).\n\n**Recente Duitse/Europese onderwerpen 2024-25**:\n• Energiewende: van gas/kern naar hernieuwbaar. Kernuitstap 2023 voltooid.\n• Russisch gas → grote impact 2022-23, omschakeling LNG.\n• Klimaatbeleid (groene koalitie's afgelopen jaren).\n• AfD-opmars + verbods-debatten.\n• Migratie-debat (Sahel, Syrië, Afghanistan).\n• Auto-industrie crisis (VW, BMW, Mercedes) — overgang naar elektrisch.\n• AI + chip-tekorten (Intel-fabriek Magdeburg).\n• 75 jaar Duitse Grondwet (2024).\n• Olympische Spelen Paris 2024 (DE+CH+AT deelnemers).\n• Voetbal EK 2024 Duitsland gehost.\n\n**Duits-specifieke begrippen**:\n• **Bundestag** = federale parlement.\n• **Bundesrat** = vertegenwoordiging deelstaten in centrale wetgeving.\n• **Bundesländer** = 16 deelstaten (Berlin, Bayern, NRW, etc.).\n• **Grundgesetz** = Grondwet (sinds 1949).\n• **Stasi** = geheime dienst voormalig DDR.\n• **DDR** = Duitse Democratische Republiek (Oost-DE, 1949-1990).\n• **BRD** = Bondsrepubliek (West-DE).\n• **Wende** = hereniging-tijd (1989-90).\n• **Mauerfall** = val Berlijnse Muur (9 nov 1989).\n• **Wiedervereinigung** = hereniging Duitsland 3 okt 1990.\n• **Holocaust / Shoah** = nazistische Jodenvervolging WO2.\n• **Vergangenheitsbewältiging** = omgaan met verleden (oorlogs-erfenis).\n\n**Cultuur-iconen**:\n• Schrijvers: Goethe, Schiller, Brecht, Kafka (Praags-Duits), Thomas Mann, Günter Grass, Herta Müller (Nobel 2009).\n• Filosofen: Kant, Hegel, Marx, Nietzsche, Heidegger, Habermas.\n• Wetenschappers: Einstein, Heisenberg, Röntgen, Planck.\n• Componisten: Bach, Beethoven, Mozart (AT), Brahms, Wagner.\n• Film: Werner Herzog, Wim Wenders, Fatih Akın.\n• Recente cultuur: Tatort (TV-detective), Babylon Berlin (serie), Helene Fischer (zang).\n• Sport: Bundesliga (voetbal), Bayern München.\n\n**Österreich (Oostenrijk)**:\n• ~9 mln inwoners.\n• Hoofdstad: Wien.\n• Federale republiek + 9 deelstaten.\n• EU sinds 1995, geen NAVO (neutraal sinds 1955).\n• Bekend: Mozart, Wenen-cultuur, Alpen, ski.\n• Specifiek: ÖVP, SPÖ, FPÖ (rechts-populistisch) partijen.\n• Recent: regering-coalities frequent, FPÖ-opmars 2024.\n\n**Schweiz (Zwitserland)**:\n• ~8,8 mln inwoners.\n• 26 kantons.\n• Vier officiële talen: Duits (~63%), Frans (~23%), Italiaans (~8%), Reto-Romaans (~0,5%).\n• Hoofdstad: Bern.\n• Niet in EU, niet euro (Zwitserse frank), wel in Schengen.\n• Direct democratie: vele referenda.\n• Bekend: banken, horloges, chocolate, neutraliteit (geen oorlog 200 jaar).\n• Liechtenstein: piepklein Duitstalig vorstendom tussen CH + AT.\n\n**Belangrijk verschil Duits in DACH**:\n• Duitsland: Hochdeutsch (standaard) + diverse dialecten.\n• Oostenrijk: vergelijkbaar, eigen accent + woordkeus (*Jänner* ipv *Januar*, *Marille* ipv *Aprikose*).\n• Zwitserland: Schwyzerdütsch dialect verschilt van Hochdeutsch (in spreektaal) maar geschreven taal vrijwel zelfde.",
    checks: [
      {
        q: "Wat staat **DACH** voor?",
        options: ["Duitsland + Österreich + Schweiz","Daken in zuid-DE","Een Duits dorp","Munt"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — afkorting.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Acroniem 3 landen", tekst: "**DACH** = **D**eutschland + **A**ustria (Österreich) + **CH** (Schweiz, Confoederatio Helvetica). Drie Duitstalige landen samen genoemd. Soms ook FL (Liechtenstein) toegevoegd → DACHL." }],
          niveaus: { basis: "DE+AT+CH. A.", simpeler: "DACH = drie landen = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **Bundestag**?",
        options: ["Federale parlement Duitsland","Munt","Krant","Dier"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Politiek Duits", tekst: "**Bundestag** = federale parlement Duitsland in Berlin (Reichstag-gebouw). Verkozen leden + Bondskanselier daar gekozen. Daarnaast **Bundesrat** = vertegenwoordiging van 16 deelstaten." }],
          niveaus: { basis: "Federale parlement. A.", simpeler: "Bundestag = parlement = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel **officiële talen** heeft Zwitserland?",
        options: ["4","2","6","1"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Niet alleen Duits."],
        uitlegPad: {
          stappen: [{ titel: "Vier-talig", tekst: "Zwitserland heeft **4 officiële talen**: Duits (63%), Frans (23%), Italiaans (8%), Reto-Romaans (0,5%). Dit weerspiegelt regionale verschillen — kantons hebben eigen voertaal. Op munten + identiteitsbewijs alle 4 vertaald." }],
          theorie: "Cito-favoriet: 'welk land in DACH heeft 4 talen?' → Zwitserland.",
          niveaus: { basis: "4. A.", simpeler: "CH = 4 talen = A.", nogSimpeler: "4 = A." },
        },
      },
      {
        q: "Wanneer was de **Mauerfall** (val Berlijnse Muur)?",
        options: ["9 november 1989","9 mei 1945","3 oktober 1990","1961"],
        answer: 0,
        wrongHints: [null, "Niet — einde WO2.", "Hereniging.", "Bouw van muur."],
        uitlegPad: {
          stappen: [{ titel: "9 nov 1989", tekst: "**Mauerfall** = val Berlijnse Muur op **9 november 1989** (29 jaar na bouw 1961). Symbolisch einde Koude Oorlog. **3 oktober 1990**: formele hereniging Duitsland (Wiedervereinigung) — feestdag van Duitse Eenheid." }],
          theorie: "Cito-favoriet: dates onthouden. 8/9 mei 1945 = einde WO2 in Europa. 17 juni 1953 = opstand DDR (vroegere herdenkingsdag).",
          niveaus: { basis: "9 nov 1989. A.", simpeler: "Muur 1989 = A.", nogSimpeler: "1989 = A." },
        },
      },
      {
        q: "**Energiewende** verwijst naar:",
        options: ["Overgang van fossiel/kern naar hernieuwbare energie","Stoom-revolutie 19e eeuw","Oost-uitbreiding EU","Vrouwen-emancipatie"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Energie-omslag", tekst: "**Energiewende** = Duitse beleid sinds 2000: overstap van fossiel + kernenergie naar **hernieuwbaar** (zon, wind, biomassa). Versneld na Fukushima 2011. **Kernuitstap 2023** voltooid: laatste 3 kerncentrales gesloten. Hot topic: kost veel, leverde nog niet alles op." }],
          theorie: "Vergelijking: FR zet juist op kern (~70%), DE op hernieuwbaar. Politiek omstreden in DACH.",
          niveaus: { basis: "Energie-omslag. A.", simpeler: "Energiewende = groen-overstap = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Duits CSE mix",
    explanation:
      "Mix van examen-format + naamvallen + register + DACH-cultuur.\n\nVeel succes!",
    checks: [
      {
        q: "*Eventuell* in Duits betekent:",
        options: ["Mogelijk","Beslist","Vroeger","Hier"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Twijfel uitdrukken", tekst: "**Eventuell** = mogelijk, misschien (~50% kans). NL'ers verwarren soms met 'eventueel' (= 'als het zo uitkomt') — andere nuance. Voor 'definitief' gebruik *bestimmt, sicher, definitiv*." }],
          niveaus: { basis: "Mogelijk. A.", simpeler: "Eventuell = mogelijk = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk **lidwoord** bij Akkusativ mannelijk?",
        options: ["den","der","dem","des"],
        answer: 0,
        wrongHints: [null, "Niet — Nominativ.", "Niet — Dativ.", "Niet — Genitiv."],
        uitlegPad: {
          stappen: [{ titel: "Akk m = den", tekst: "Akkusativ mannelijk: **den**. Tabel: *ich sehe **den** Mann*. Nom: der, Akk: den, Dat: dem, Gen: des. Bij feminin/onzijdig/mv: Akk = Nom (geen verandering)." }],
          niveaus: { basis: "den. A.", simpeler: "Akk m = den = A.", nogSimpeler: "den = A." },
        },
      },
      {
        q: "Welk verbinding-woord betekent **doordat**?",
        options: ["Indem","Weil","Trotzdem","Dass"],
        answer: 0,
        wrongHints: [null, "Niet — dat is omdat.", "Niet — toch.", "Niet — dat."],
        uitlegPad: {
          stappen: [{ titel: "Middel/wijze", tekst: "**Indem** = doordat, terwijl (in zin van middel). *Er lernt, **indem** er Filme schaut* = Hij leert **door** films te kijken. Verschil met **weil** (omdat = oorzaak) en **dass** (dat = inhoud)." }],
          niveaus: { basis: "Indem. A.", simpeler: "Doordat = indem = A.", nogSimpeler: "Indem = A." },
        },
      },
      {
        q: "Wie is huidige **Bundeskanzler** (2025)?",
        options: ["Friedrich Merz","Olaf Scholz","Angela Merkel","Helmut Kohl"],
        answer: 0,
        wrongHints: [null, "Was tot mei 2025.", "Tot 2021.", "Jaren 1990s."],
        uitlegPad: {
          stappen: [{ titel: "Sinds mei 2025", tekst: "**Friedrich Merz** (CDU) is Bondskanselier sinds **mei 2025**, na regering-Scholz (SPD-Grüne-FDP-coalitie 2021-2025) viel. Coalitie: CDU/CSU + SPD ('Große Koalition')." }],
          theorie: "Merkel was kanselier 2005-2021 (16 jaar, langste na Kohl 16 jaar). Scholz 2021-2025.",
          niveaus: { basis: "Merz. A.", simpeler: "Sinds 2025 = Merz = A.", nogSimpeler: "Merz = A." },
        },
      },
      {
        q: "Bij **Wechselpräposition** (an/auf/in/etc) bij beweging naar plek: welke naamval?",
        options: ["Akkusativ","Dativ","Nominativ","Genitiv"],
        answer: 0,
        wrongHints: [null, "Niet — Dat bij plaats.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Beweging = Akk", tekst: "Bij Wechselpräpositionen: **Akkusativ** bij beweging-richting (waar naartoe), **Dativ** bij plaats (waar). *Ich gehe **in die** Stadt* (Akk, naar toe). *Ich bin **in der** Stadt* (Dat, ben er)." }],
          niveaus: { basis: "Akkusativ. A.", simpeler: "Beweging = Akk = A.", nogSimpeler: "Akk = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const duitsCseHavoVwo = {
  id: "duits-cse-havo-vwo",
  title: "Duits CSE leesvaardigheid (HAVO/VWO)",
  emoji: "🇩🇪",
  level: "havo4-5-vwo",
  subject: "duits",
  referentieNiveau: "havo-B1-vwo-B2",
  sloThema: "Duits HAVO/VWO — CSE leesvaardigheid eindexamen",
  prerequisites: [
    { id: "naamvallen-duits", title: "Naamvallen Duits", niveau: "klas2-3" },
    { id: "werkwoordsvervoeging-duits", title: "Werkwoordsvervoeging Duits", niveau: "klas2-3" },
  ],
  intro:
    "Duits HAVO/VWO CSE leesvaardigheid-strategie. Examen-format (2,5/3u, ~10 teksten, B1/B2), vraagsoorten + scanning + faux amis (bekommen/eventuell) + naamvallen-snelcheck (Wechselpräp), lange teksten + Konjunktiv I/II + scheidbaar werkwoord, DACH-cultuur (Bundestag/Mauerfall/Energiewende/Merz). ~15-20 min.",
  triggerKeywords: [
    "Duits CSE", "centraal examen Duits",
    "leesvaardigheid Duits",
    "naamval", "Akkusativ", "Dativ", "Nominativ", "Genitiv",
    "Wechselpräposition",
    "Konjunktiv I", "Konjunktiv II",
    "bekommen", "eventuell",
    "scheidbaar werkwoord", "Trennbar",
    "weil", "dass", "trotzdem",
    "während",
    "DACH", "Deutschland", "Österreich", "Schweiz",
    "Bundestag", "Bundesrat",
    "Bundeskanzler", "Merz", "Scholz", "Merkel",
    "CDU", "SPD", "Grüne", "AfD",
    "Mauerfall", "Wiedervereinigung",
    "DDR", "BRD",
    "Energiewende",
    "Süddeutsche", "FAZ", "Spiegel", "Zeit",
    "Goethe", "Schiller", "Brecht",
    "Bayern München",
  ],
  chapters,
  steps,
};

export default duitsCseHavoVwo;
