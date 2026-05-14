// Leerpad: Interpunctie & hoofdletters — groep 5-7 PO.
// Cito-onderdeel taalverzorging. Referentieniveau 1F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  highlight: "#ffd54f",
  punt: "#ff5252",
  alt: "#42a5f5",
  ok: "#69f0ae",
};

const stepEmojis = ["✏️", "🔤", "❓", ",", '"', "🏆"];

const chapters = [
  { letter: "A", title: "Wat is interpunctie?", emoji: "✏️", from: 0, to: 0 },
  { letter: "B", title: "Hoofdletters", emoji: "🔤", from: 1, to: 1 },
  { letter: "C", title: "Punt, vraag, uitroep", emoji: "❓", from: 2, to: 2 },
  { letter: "D", title: "Komma's", emoji: ",", from: 3, to: 3 },
  { letter: "E", title: "Aanhalingstekens", emoji: '"', from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function leestekensSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">De belangrijkste leestekens</text>

<rect x="20" y="40" width="60" height="40" rx="6" fill="rgba(255,82,82,0.18)" stroke="${COLORS.punt}" stroke-width="1.5"/>
<text x="50" y="68" text-anchor="middle" fill="${COLORS.punt}" font-size="22" font-family="Arial" font-weight="bold">.</text>
<text x="50" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">punt</text>
<text x="50" y="110" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">einde zin</text>

<rect x="90" y="40" width="60" height="40" rx="6" fill="rgba(66,165,245,0.18)" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="120" y="70" text-anchor="middle" fill="${COLORS.alt}" font-size="22" font-family="Arial" font-weight="bold">?</text>
<text x="120" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">vraag</text>
<text x="120" y="110" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">einde vraag</text>

<rect x="160" y="40" width="60" height="40" rx="6" fill="rgba(255,213,79,0.18)" stroke="${COLORS.highlight}" stroke-width="1.5"/>
<text x="190" y="70" text-anchor="middle" fill="${COLORS.highlight}" font-size="22" font-family="Arial" font-weight="bold">!</text>
<text x="190" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">uitroep</text>
<text x="190" y="110" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">verbazing/bevel</text>

<rect x="230" y="40" width="60" height="40" rx="6" fill="rgba(105,240,174,0.18)" stroke="${COLORS.ok}" stroke-width="1.5"/>
<text x="260" y="70" text-anchor="middle" fill="${COLORS.ok}" font-size="22" font-family="Arial" font-weight="bold">,</text>
<text x="260" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">komma</text>
<text x="260" y="110" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">in een zin</text>

<text x="160" y="142" text-anchor="middle" fill="${COLORS.curve2}" font-size="11" font-family="Arial">' '   — aanhalingstekens (wat iemand zegt)</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Hoofdletters: begin zin, eigen namen, plaatsen</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is interpunctie?
  {
    title: "Wat is interpunctie?",
    explanation:
      "**Interpunctie** is alles wat geen letter is in een zin: **leestekens** en **hoofdletters**.\n\n**Waarom zijn leestekens belangrijk?**\nLeestekens helpen je **goed lezen**. Ze laten zien:\n• waar een zin begint en eindigt,\n• of het een vraag of uitroep is,\n• of er een korte pauze in een zin zit,\n• wat iemand zegt.\n\n**De 5 belangrijkste leestekens**:\n• **.** punt — einde van een gewone zin.\n• **?** vraagteken — einde van een vraag.\n• **!** uitroepteken — verbazing of bevel.\n• **,** komma — korte pauze, of opsomming.\n• ' **'** aanhalingstekens — wat iemand zegt.\n\n**Hoofdletters** gebruik je:\n• Aan **begin van een zin**.\n• Bij **namen van mensen** *(Anna, Lisa, Tom)*.\n• Bij **namen van plaatsen** *(Amsterdam, Frankrijk)*.\n• Bij **dagen, maanden, titels** worden in NL meestal géén hoofdletters gebruikt *(maandag, januari)*.\n\n**Voorbeeld zonder interpunctie**:\n*'mijn naam is tom ik woon in utrecht waar woon jij'*\n\n**Met interpunctie**:\n*'Mijn naam is Tom. Ik woon in Utrecht. Waar woon jij?'*\n\nVeel makkelijker te lezen! Daar is interpunctie voor.",
    svg: leestekensSvg(),
    checks: [
      {
        q: "Wat is **interpunctie**?",
        options: ["Leestekens en hoofdletters", "Alleen leestekens", "Alleen hoofdletters", "Alle woorden"],
        answer: 0,
        wrongHints: [null, "Te beperkt — ook hoofdletters horen erbij.", "Te beperkt — ook leestekens.", "Nee, woorden zijn iets anders."],
      },
      {
        q: "**Waarom** gebruiken we leestekens?",
        options: ["Voor goed lezen", "Voor mooi maken", "Geen reden", "Om woorden te tellen"],
        answer: 0,
        wrongHints: [null, "Mooi maken is niet hun functie.", "Wél een reden — duidelijk lezen.", "Woorden tellen doen leestekens niet."],
      },
      {
        q: "Welke leesteken hoort bij een **vraag**?",
        options: ["?", ".", "!", ","],
        answer: 0,
        wrongHints: [null, "Klopt — vraagteken.", "Punt is voor een gewone zin.", "Uitroepteken is voor verbazing.", "Komma zit midden in een zin."],
        uitlegPad: {
          stappen: [
            { titel: "Vraagteken (?) hoort bij vragen", tekst: "Een **vraag** = zin waarop je een **antwoord verwacht**. Aan het eind komt altijd een **vraagteken (?)**. Geen punt, geen uitroepteken." },
            { titel: "Hoe herken je een vraag?", tekst: "**Vraag-signalen**:\n• Begint met een **vraagwoord**: wat / wie / waar / wanneer / waarom / hoe.\n• OF begint met een **werkwoord**: Heb je...? / Ga je...? / Wil je...?\n• Je verwacht een antwoord (ja/nee of meer)." },
            { titel: "Vergelijk de 4 leestekens", tekst: "• **.** = einde gewone zin (mededeling). 'Het regent.'\n• **?** = einde vraag. 'Regent het?'\n• **!** = uitroep/verbazing/bevel. 'Het regent!'\n• **,** = pauze MIDDEN in zin (geen einde)." },
          ],
          woorden: [
            { woord: "vraagteken (?)", uitleg: "Eind van een vraag." },
            { woord: "vraagwoord", uitleg: "Wat / wie / waar / wanneer / waarom / hoe." },
          ],
          theorie: "Cito-feit eindleesteken:\n• Mededeling → **.**\n• Vraag → **?**\n• Uitroep/emotie → **!**\nKomma sluit GEEN zin af — die zit binnen een zin als pauze.",
          voorbeelden: [
            { type: "stap", tekst: "'Ben jij Anna?' = vraag (begint met 'Ben' = werkwoord, antwoord verwacht)." },
            { type: "stap", tekst: "'Waar is mijn boek?' = vraag (begint met 'Waar' = vraagwoord)." },
            { type: "stap", tekst: "'Mooi weer.' = mededeling → punt. 'Mooi weer!' = enthousiast → uitroep." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lees zin hardop. Klinkt het als vraag (toonhoogte omhoog aan eind)? Dan ?. Klinkt het als feit? Dan ." },
          ],
          niveaus: {
            basis: "? (vraagteken). = A.",
            simpeler: "Vraag eindigt met vraagteken (?). Punt = mededeling, uitroep = emotie. = A.",
            nogSimpeler: "? = A.",
          },
        },
      },
    ],
  },

  // STAP 2: Hoofdletters
  {
    title: "Hoofdletters — wanneer gebruik je ze?",
    explanation:
      "**Hoofdletters** zijn de **grote letters** *(A, B, C...)*. Je gebruikt ze op deze plekken:\n\n**1. Aan begin van een zin**:\n• 'Het is mooi weer.'\n• 'Vandaag ga ik naar school.'\n\n**2. Bij namen van mensen**:\n• Anna, Lisa, Tom, Mark, Sara, Bram.\n• Ook achternamen: De Vries, Jansen.\n\n**3. Bij namen van plaatsen**:\n• Steden: Amsterdam, Utrecht, Den Haag.\n• Landen: Nederland, België, Duitsland.\n• Werelddelen: Europa, Afrika, Azië.\n• Straten: Hoofdstraat, Schoolplein.\n\n**4. Bij eigennamen van dingen**:\n• Boektitels: 'Harry Potter', 'De Zwarte Zwaan'.\n• Bedrijven: Hema, Albert Heijn.\n• Eigen merken: Lego, Coca-Cola.\n\n**5. Bij namen van talen**:\n• Frans, Duits, Engels, Spaans, Chinees — **wél hoofdletter** (talen krijgen er één!).\n\n**Géén hoofdletter** bij:\n• Dagen: maandag, dinsdag *(in Nederlands)*.\n• Maanden: januari, februari.\n• Seizoenen: zomer, winter.\n\n**Cito-stikvraag**:\n*'in nederland eten we vaak in januari oliebollen'* → **'In Nederland eten we vaak in januari oliebollen.'**\n• Hoofdletter: In (begin zin), Nederland (land).\n• Géén hoofdletter: januari (maand), oliebollen (gewoon woord).",
    checks: [
      {
        q: "Welke zin is **goed**?",
        options: ["Vandaag ga ik naar Amsterdam.", "vandaag ga ik naar Amsterdam.", "Vandaag ga ik naar amsterdam.", "VANDAAG ga ik naar amsterdam."],
        answer: 0,
        wrongHints: [null, "Begin zin mist hoofdletter.", "Plaatsnaam mist hoofdletter.", "Begin niet in CAPS — gewoon hoofdletter is genoeg."],
      },
      {
        q: "Welke krijgt **wél een hoofdletter** in een zin?",
        options: ["Een naam (Anna, Tom)", "Een dag (maandag)", "Een maand (januari)", "Een seizoen (zomer)"],
        answer: 0,
        wrongHints: [null, "Klopt — namen krijgen altijd hoofdletter.", "Dagen niet — kleine letter.", "Maanden niet — kleine letter.", "Seizoenen niet — kleine letter."],
      },
      {
        q: "Welke schrijf je **MET hoofdletter** in een zin?",
        options: ["Frans (als taal)", "maandag", "december", "voorjaar"],
        answer: 0,
        wrongHints: [null, "Klopt — talen krijgen hoofdletter (Frans, Duits, Engels).", "Dagen niet — kleine letter.", "Maanden niet.", "Seizoenen niet."],
        uitlegPad: {
          stappen: [
            { titel: "Talen krijgen hoofdletter", tekst: "In Nederland: talen krijgen hoofdletter, dagen/maanden/seizoenen niet. Dus 'Frans' wel, 'maandag' niet." },
          ],
          woorden: [{ woord: "taal-naam", uitleg: "Naam van een taal — bv. Frans, Duits, Spaans." }],
          theorie: "Talen krijgen in Nederlands hoofdletter. Dagen/maanden/seizoenen niet.",
          voorbeelden: [{ type: "stap", tekst: "'Ik leer Frans op woensdag in januari.' (Frans WEL, woensdag NIET, januari NIET)." }],
          basiskennis: [{ onderwerp: "Tegenintuïtief", uitleg: "Dit verschilt soms van Engels — onthoud de regel goed." }],
          niveaus: {
            basis: "Frans (taal). A.",
            simpeler: "Talen krijgen hoofdletter in Nederlands. Dagen/maanden/seizoenen niet. Frans is een taal, dus wél hoofdletter. = A.",
            nogSimpeler: "Frans = A.",
          },
        },
      },
      {
        q: "Welke zin is **fout**?",
        options: ["Ik woon in nederland.", "Ik woon in Nederland.", "Mijn naam is Lisa.", "We gaan op vakantie naar Spanje."],
        answer: 0,
        wrongHints: [null, "Klopt — 'nederland' moet hoofdletter (land).", "Klopt qua schrijven.", "Klopt — Lisa is naam.", "Klopt — Spanje is land."],
      },
    ],
  },

  // STAP 3: Punt + vraagteken + uitroepteken
  {
    title: "Punt, vraagteken, uitroepteken",
    explanation:
      "Een zin eindigt op een **leesteken**. Welke teken hangt af van het soort zin.\n\n**Gewone zin → punt (.)**\nEen mededeling of beschrijving.\n• 'Het regent buiten.'\n• 'Ik ga naar school.'\n• 'Anna heeft een hond.'\n\n**Vraag → vraagteken (?)**\nEen zin waarop je een antwoord verwacht.\n• 'Waar ga je heen?'\n• 'Hoe heet jouw kat?'\n• 'Heb je gehoord wat ik zei?'\n\n**Hoe herken je een vraag?**\n• Begint vaak met een vraagwoord: wat / wie / waar / wanneer / waarom / hoe.\n• OF begint met werkwoord: 'Heb je...?' / 'Ga je...?' / 'Wil je...?'\n\n**Uitroep → uitroepteken (!)**\nVerbazing, blijdschap, schrik, bevel.\n• 'Wat een mooie hond!'\n• 'Stop! Niet doen!'\n• 'Hoera, ik heb gewonnen!'\n• 'Pas op!'\n\n**Cito-trucs**:\n• **Twijfel tussen . en !**: zit er emotie in? Dan !. Anders een rustige zin → punt.\n• **Vraag herkennen**: vervang in gedachten 'Heb' door 'Ja/Nee' — als dat past, is het een vraag.\n• **Nooit** mix: '?!' is informele schrijftaal, maar bij Cito altijd 1 leesteken kiezen.\n\n**Veel-voorkomende fout**:\nVergeten leesteken aan eind. Cito test ALTIJD of je een zin afsluit.",
    checks: [
      {
        q: "Welke zin **mist** het juiste leesteken? *'Wat een mooie auto'*",
        options: ["! (uitroepteken)", ". (punt)", "? (vraagteken)", ", (komma)"],
        answer: 0,
        wrongHints: [null, "Klopt — verbazing/enthousiasme → !.", "Punt mist de emotie. Beter !.", "Geen vraag.", "Komma sluit geen zin af."],
      },
      {
        q: "*'Heb je je tanden gepoetst'* — welk leesteken?",
        options: ["?", ".", "!", ","],
        answer: 0,
        wrongHints: [null, "Klopt — vraag.", "Punt is geen vraag.", "Niet boos genoeg voor uitroep.", "Komma sluit geen zin af."],
        uitlegPad: {
          stappen: [
            { titel: "Begint met werkwoord = vraag", tekst: "De zin begint met '**Heb**' (werkwoord). Dat is een typische **vraag-opbouw** in Nederlands: werkwoord vooraan + persoon erachter. 'Heb **je**...?'" },
            { titel: "Wacht op antwoord", tekst: "Bij deze zin verwacht je een **ja/nee-antwoord** ('Ja, ik heb gepoetst' of 'Nee, nog niet'). Dat is hét kenmerk van een vraag." },
            { titel: "Test: vervang de woord-volgorde", tekst: "Mededeling: 'Je hebt je tanden gepoetst.' (volgorde: persoon → werkwoord) → eindigt op **.**\nVraag: 'Heb je je tanden gepoetst?' (volgorde: werkwoord → persoon) → eindigt op **?**\nDe omdraai-truc helpt." },
          ],
          woorden: [
            { woord: "ja/nee-vraag", uitleg: "Vraag waarop antwoord 'ja' of 'nee' kan zijn." },
            { woord: "vraag-opbouw", uitleg: "Werkwoord eerst, dan persoon (in Nederlands)." },
          ],
          theorie: "Cito-truc vraag-herkenning: **Werkwoord vooraan** = vraag (Heb je..., Ga je..., Komt zij...). **Persoon vooraan** = mededeling (Je hebt..., Jij gaat..., Zij komt...). Hoofdregel om snel te zien.",
          voorbeelden: [
            { type: "stap", tekst: "'Ga jij mee?' = vraag (Ga + jij)." },
            { type: "stap", tekst: "'Jij gaat mee.' = mededeling (Jij + gaat)." },
            { type: "stap", tekst: "'Heeft Anna een hond?' = vraag (Heeft + Anna)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Werkwoord vooraan → vraag → ?. Werkwoord midden/achter → mededeling → ." },
          ],
          niveaus: {
            basis: "? (vraagteken). = A.",
            simpeler: "'Heb je...?' = vraag-opbouw. Vraagteken aan eind. = A.",
            nogSimpeler: "? = A.",
          },
        },
      },
      {
        q: "*'Ik ga vandaag fietsen'* — welk leesteken?",
        options: [".", "?", "!", ","],
        answer: 0,
        wrongHints: [null, "Klopt — gewone mededeling.", "Geen vraag.", "Geen sterke emotie.", "Komma sluit niet af."],
      },
      {
        q: "*'STOP'* — welk leesteken hoort hier?",
        options: ["!", ".", "?", ","],
        answer: 0,
        wrongHints: [null, "Klopt — een bevel/waarschuwing → !.", "Te rustig voor 'STOP'.", "Geen vraag.", "Komma sluit niet af."],
      },
    ],
  },

  // STAP 4: Komma's
  {
    title: "Komma's — kleine pauzes in een zin",
    explanation:
      "Een **komma (,)** is een **kleine pauze** in een zin. Maar wanneer zet je er een?\n\n**Regel 1 — opsomming**:\nBij meer dan 2 dingen achter elkaar.\n• 'Ik kocht **appels, peren, druiven en bananen**.'\n• Komma's tussen items.\n• **Vóór 'en' GEEN komma** *(bij 2 items)*.\n• Maar bij 3+ items en de laatste begint met 'en': komma's tussen tussenliggende items, geen komma vóór 'en'.\n\n**Regel 2 — bijzin/aanvulling**:\nAls je een extra zin tussenvoegt.\n• 'De jongen, **die een blauwe trui had**, rende weg.'\n• Komma's omsluiten de bijzin.\n\n**Regel 3 — vóór bepaalde woorden** (omdat / maar / als / wanneer):\n• 'Ik ben moe**,** omdat ik laat opbleef.'\n• 'Hij komt mee**,** als het droog blijft.'\n• 'Ze fietst hard**,** maar wordt toch nat.'\n\n**Regel 4 — aanhalen iemand (directe rede)**:\n• 'Anna zei**:** \"Ik kom morgen.\"'\n• **Dubbele punt** vóór de aanhalingstekens *(zie ook stap E voor de hele regel)*.\n\n**Cito-truc — lees-pauze**:\nLees de zin hardop. Pauzeer je heel even? Daar staat vaak een komma.\n\n*'Toen het regende, gingen we naar binnen.'*\n• 'Toen het regende' (pauze) 'gingen we naar binnen.'\n• Komma op de pauze.\n\n**Veel-voorkomende fouten**:\n• Komma vóór 'en' bij 2 items: ❌ 'Anna en, Tom' → ✓ 'Anna en Tom'.\n• Geen komma waar wel een lange pauze is.\n• Komma in plaats van een punt — als de 2 delen zelfstandige zinnen zijn, gebruik een punt.",
    checks: [
      {
        q: "Welke zin heeft komma's op de **juiste plek**?",
        options: ["Ik kocht appels, peren en druiven.", "Ik kocht appels peren, en druiven.", "Ik kocht appels, peren, en druiven.", "Ik, kocht appels peren en druiven."],
        answer: 0,
        wrongHints: [null, "Klopt — komma tussen opsomming, geen komma vóór 'en'.", "Geen komma's vóór elk woord — alleen tussen items.", "Geen komma vóór 'en' bij 2 items.", "Geen komma na werkwoord zonder reden."],
        uitlegPad: {
          stappen: [
            { titel: "Regel voor opsommingen", tekst: "Bij een opsomming (3 of meer items achter elkaar) zet je **komma's tussen de items**. MAAR: **vóór het laatste 'en' GEEN komma** — dat is de Nederlandse regel." },
            { titel: "Stap voor stap door de zin", tekst: "'Ik kocht **appels**, **peren** en **druiven**.'\n• Appels → komma erna (want er volgt nog meer)\n• Peren → 'en' volgt direct, dus GEEN komma vóór 'en'\n• Druiven → laatste item, daarna punt." },
            { titel: "Verschil met Engels", tekst: "In Engels gebruiken ze soms wél een komma vóór 'and' (Oxford-komma). In **Nederlands NIET**. Onthoud: NL-regel = geen komma vóór 'en'." },
          ],
          woorden: [
            { woord: "opsomming", uitleg: "Lijstje van 3 of meer items in een zin." },
            { woord: "Oxford-komma", uitleg: "Engelse komma vóór 'and' (NL gebruikt deze niet)." },
          ],
          theorie: "Cito-regel komma's bij opsomming:\n• 2 items: GEEN komma. 'Anna en Tom.'\n• 3+ items: komma's TUSSEN items, NIET vóór 'en'. 'Anna, Tom en Lisa.'\n• Eind: punt.",
          voorbeelden: [
            { type: "stap", tekst: "'Ik wil rood, blauw, geel en groen.' = correct (3+ items, geen komma vóór 'en')." },
            { type: "stap", tekst: "'Ik wil rood en blauw.' = correct (2 items, geen komma)." },
            { type: "stap", tekst: "'Ik wil rood, blauw, geel, en groen.' = FOUT (komma vóór 'en' is Engelse stijl)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Komma's TUSSEN items. 'En' = de laatste verbinder, geen komma daarvoor. NL ≠ Engels." }],
          niveaus: {
            basis: "'Ik kocht appels, peren en druiven.' = A.",
            simpeler: "Komma tussen items van opsomming. Voor laatste 'en' geen komma. = A.",
            nogSimpeler: "Eerste optie = A.",
          },
        },
      },
      {
        q: "*'Ik ga naar buiten ___ het regent'.* Welke komma + woord?",
        options: [", maar", ", omdat", "en", "—"],
        answer: 0,
        wrongHints: [null, "Klopt — 'maar' geeft tegenstelling. Komma daarvoor.", "'Omdat' geeft reden — dan ga je juist NIET naar buiten.", "'En' opsommend — geen tegenstelling.", "Streepje is voor heel andere reden."],
        uitlegPad: {
          stappen: [
            { titel: "Tegenstelling = maar", tekst: "Je gaat ondanks de regen naar buiten. 'Maar' geeft tegenstelling. Komma altijd vóór 'maar'." },
          ],
          woorden: [{ woord: "tegenstelling", uitleg: "Twee dingen die niet bij elkaar lijken te passen." }],
          theorie: "Komma vóór 'maar', 'omdat', 'als', 'wanneer' = standaard bij zin-koppelingen.",
          voorbeelden: [{ type: "stap", tekst: "'Ik ga naar buiten, maar het regent.' = ondanks regen ga ik." }],
          basiskennis: [{ onderwerp: "Welk woord?", uitleg: "Maar = tegenstelling. Omdat = reden. Als = voorwaarde." }],
          niveaus: {
            basis: ", maar. A.",
            simpeler: "Tegenstelling tussen 'naar buiten' en 'regen'. Gebruik 'maar' met komma ervoor. = A.",
            nogSimpeler: ", maar = A.",
          },
        },
      },
      {
        q: "Welke zin heeft **GEEN komma nodig**?",
        options: ["Anna en Tom gaan naar school.", "Anna gaat naar school, maar Tom blijft thuis.", "Anna, die ziek is, blijft thuis.", "Toen het regende, gingen we naar binnen."],
        answer: 0,
        wrongHints: [null, "Klopt — 'Anna en Tom' is 2 items, geen komma.", "Klopt qua komma — tegenstelling.", "Klopt qua komma's — bijzin.", "Klopt qua komma — bijzin vooraan."],
      },
      {
        q: "*'Lisa zei ___ ik kom morgen.'* Welk leesteken op de plek?",
        options: [": (dubbele punt)", ", (komma)", ". (punt)", "geen leesteken"],
        answer: 0,
        wrongHints: [null, "Klopt — bij directe aanhaling (na 'zei') gebruik je een dubbele punt.", "Komma kan ook, maar dubbele punt is standaard bij Cito.", "Punt sluit zin te vroeg af.", "Wel leesteken nodig."],
      },
    ],
  },

  // STAP 5: Aanhalingstekens
  {
    title: "Aanhalingstekens — wat iemand zegt",
    explanation:
      "**Aanhalingstekens** zijn de tekens '' of \"\" — ze geven aan **wat iemand zegt**.\n\n**Voorbeeld**:\n*'Mama zei: **\"Ga je tanden poetsen.\"**'*\n\nDe woorden tussen de aanhalingstekens zijn precies wat mama zei.\n\n**Cito-stappenplan voor directe rede**:\n1. Wie zegt iets? Bijv. 'Mama zegt'.\n2. **Dubbele punt** (:) na 'zegt' / 'zei' / 'roept'.\n3. **Aanhalingsteken openen** (\").\n4. Hoofdletter aan het begin van wat hij/zij zegt.\n5. Leesteken aan eind van het gezegde (binnen aanhalingstekens).\n6. **Aanhalingsteken sluiten** (\").\n\n**Voorbeeld goed**:\n*'Tom roept: \"Pas op!\"'*\n• Komma/dubbele punt na 'roept': → ':' (dubbele punt is standaard).\n• Hoofdletter bij 'Pas'.\n• Uitroepteken binnen aanhalingstekens.\n\n**In het echt zie je vaak deze 3 varianten**:\n• \"Hier de tekst.\" *(Engels stijl)*\n• 'Hier de tekst.' *(NL informeel)*\n• „Hier de tekst.\" *(NL formeel, in boeken)*\n\nBij Cito is de eerste meestal goed. Wat belangrijk is: **begin én eind hetzelfde type** aanhalingsteken.\n\n**Veel-voorkomende fout**:\n• Aanhalingstekens vergeten te sluiten.\n• Geen dubbele punt vóór de aanhaling.\n• Geen hoofdletter bij 1e woord van de aanhaling.\n• Leesteken (.!?) buiten de aanhalingstekens i.p.v. binnen.",
    checks: [
      {
        q: "Welke schrijfwijze is **correct**?",
        options: ["Anna zei: \"Ik kom morgen.\"", "Anna zei: ik kom morgen", "anna zei \"Ik kom morgen\"", "Anna zei \"Ik kom morgen\""],
        answer: 0,
        wrongHints: [null, "Klopt — alles op de juiste plek.", "Mist aanhalingstekens, dubbele punt, hoofdletters.", "Mist hoofdletter aan begin zin + dubbele punt.", "Mist dubbele punt na 'zei'."],
      },
      {
        q: "Waar staat het **uitroepteken** bij: *'Tom roept: \"Pas op!\"'*?",
        options: ["Binnen aanhalingstekens", "Buiten aanhalingstekens", "Vóór 'zei'", "Niet nodig"],
        answer: 0,
        wrongHints: [null, "Klopt — leesteken hoort bij wat hij ZEGT, dus binnen.", "Niet juist — leesteken bij wat gezegd wordt.", "Niet vóór.", "Wél nodig — bij uitroep altijd !."],
      },
      {
        q: "*'mama zei kom maar mee'* — hoe schrijf je dit netjes?",
        options: ["Mama zei: \"Kom maar mee.\"", "Mama zei \"Kom maar mee\".", "mama zei \"Kom maar mee\"", "Mama zei: kom maar mee."],
        answer: 0,
        wrongHints: [null, "Klopt — alles goed.", "Punt moet binnen aanhalingstekens, dubbele punt mist.", "Mist hoofdletter bij 'Mama'.", "Mist aanhalingstekens."],
        uitlegPad: {
          stappen: [
            { titel: "5 dingen", tekst: "Hoofdletter aan begin (Mama). Dubbele punt na zei (:). Aanhalingstekens openen (\"). Hoofdletter aan begin (Kom). Leesteken binnen aanhalingstekens (.\")." },
          ],
          woorden: [{ woord: "directe rede", uitleg: "Letterlijk wat iemand zegt, tussen aanhalingstekens." }],
          theorie: "Standaard volgorde: Wie zei: \"Inhoud.\"",
          voorbeelden: [{ type: "stap", tekst: "Mama zei: \"Kom maar mee.\" — netjes opgebouwd." }],
          basiskennis: [{ onderwerp: "5 onderdelen", uitleg: "Hoofdletter / dubbele punt / aanhalen / hoofdletter / leesteken." }],
          niveaus: {
            basis: "Mama zei: \"Kom maar mee.\". A.",
            simpeler: "Wat moet erin: Hoofdletter, dubbele punt, aanhalingstekens, hoofdletter, leesteken binnen aanhalingstekens. Antwoord A heeft dat allemaal. = A.",
            nogSimpeler: "A.",
          },
        },
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — interpunctie-mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: hoofdletters, leestekens, komma's, aanhalingstekens.\n\n**Tip**: bij twijfel lees de zin hardop. Pauzeer je? → komma. Verwacht je antwoord? → vraagteken. Begint zin? → hoofdletter.\n\nVeel succes!",
    checks: [
      {
        q: "Welke zin is **goed**?",
        options: ["Anna woont in Amsterdam.", "anna woont in amsterdam.", "Anna woont in amsterdam", "anna Woont in Amsterdam."],
        answer: 0,
        wrongHints: [null, "Klopt — alles goed.", "Mist hoofdletters.", "Mist hoofdletter plaats + punt.", "Werkwoord krijgt geen hoofdletter zomaar."],
      },
      {
        q: "Hoe eindigt de zin *'Wat is je naam'*?",
        options: ["?", ".", "!", ","],
        answer: 0,
        wrongHints: [null, "Klopt — vraagwoord 'wat' → vraagteken.", "Punt past niet bij vraag.", "Niet boos genoeg.", "Komma sluit niet af."],
      },
      {
        q: "*'Ik kocht ___ peren ___ druiven ___ bananen.'* Welke komma's?",
        options: [", , en", "en en en", ", en ,", ", , ,"],
        answer: 0,
        wrongHints: [null, "Klopt — komma's tussen items, 'en' vóór laatste.", "Te veel 'en'.", "Verkeerde plek.", "Geen komma vóór laatste — daar 'en'."],
      },
      {
        q: "*'pas op er rijdt een auto'* — netjes geschreven?",
        options: ["Pas op! Er rijdt een auto.", "pas op er rijdt een auto.", "Pas op er rijdt een auto.", "Pas op, er rijdt een auto?"],
        answer: 0,
        wrongHints: [null, "Klopt — uitroep voor waarschuwing, dan nieuwe zin.", "Geen hoofdletters of leestekens.", "Mist uitroepteken na 'op'.", "Geen vraag."],
      },
      {
        q: "Welke woorden krijgen een **hoofdletter** in een zin?",
        options: ["Namen + landen + begin zin", "Alle werkwoorden", "Alle zelfstandige naamwoorden", "Maanden + dagen"],
        answer: 0,
        wrongHints: [null, "Klopt — die drie krijgen hoofdletter.", "Werkwoorden niet zonder reden.", "Niet alle — alleen namen.", "Maanden/dagen krijgen GEEN hoofdletter in NL."],
      },
      {
        q: "*'tom zei: ___ ___ ___'* met inhoud 'ik kom morgen'. Wat staat tussen?",
        options: ["\"Ik kom morgen.\"", "Ik kom morgen.", "\"ik kom morgen\"", "'Ik kom morgen'"],
        answer: 0,
        wrongHints: [null, "Klopt — aanhalingstekens + hoofdletter + punt binnen.", "Mist aanhalingstekens.", "Mist hoofdletter + punt binnen aanhalingstekens.", "Enkele aanhalingstekens minder standaard."],
      },
      { q: "Welke zin heeft de **juiste komma**?", options: ["Ik kocht brood, kaas en melk.","Ik kocht brood kaas en melk.","Ik kocht, brood kaas en melk.","Ik kocht brood, kaas en, melk."], answer: 0, wrongHints: [null,"Klopt — opsomming heeft komma's tussen, niet vóór 'en'.","Komma's ontbreken.","Verkeerde positie.","Komma vóór 'en' niet bij opsomming."] },
      { q: "Welk **leesteken** sluit een vraag af?", options: ["Vraagteken (?)","Punt (.)","Komma (,)","Uitroepteken (!)"], answer: 0, wrongHints: [null,"Klopt.","Niet vraag.","Niet einde.","Uitroep."] },
      { q: "Welk **leesteken** voor een uitroep?", options: ["!","?",".",","], answer: 0, wrongHints: [null,"Klopt.","Vraag.","Mededeling.","Niet einde."] },
      { q: "Wanneer **hoofdletter** in midden van zin?", options: ["Bij namen (van personen/plaatsen)","Altijd","Nooit","Alleen na komma"], answer: 0, wrongHints: [null,"Klopt — eigennamen.","Niet altijd.","Wel soms.","Niet alleen daar."] },
      { q: "Welke zin is **fout**?", options: ["mijn naam is anna.","Mijn naam is Anna.","Wat heet jij?","Hallo!"], answer: 0, wrongHints: [null,"Klopt — hoofdletter en naam-hoofdletter ontbreken.","Goed.","Goed.","Goed."] },
      { q: "Een **dubbele punt (:)** komt voor?", options: ["Een opsomming of citaat","Vraag","Einde","Komma's"], answer: 0, wrongHints: [null,"Klopt.","Vraagteken.","Punt.","Niet."] },
      { q: "Een **puntkomma (;)** verbindt?", options: ["Twee verwante zinnen","Een opsomming","Niets","Vraag en antwoord"], answer: 0, wrongHints: [null,"Klopt.","Komma's doen dat.","Wel functie.","Niet."] },
      { q: "Welke zin heeft **goede aanhalingstekens**?", options: ["Hij zei: \"Kom!\"","Hij zei: Kom!","\"Hij zei kom!\"","Hij zei \"kom!"], answer: 0, wrongHints: [null,"Klopt — dubbele punt, aanhalingstekens.","Aanhalingstekens missen.","Aanhalingstekens fout.","Niet gesloten."] },
      { q: "Welke zin is goed?", options: ["Ik ga naar Amsterdam.","ik ga naar amsterdam.","ik ga naar Amsterdam.","Ik ga naar amsterdam."], answer: 0, wrongHints: [null,"Klopt — beginhoofdletter + plaats-hoofdletter.","Geen hoofdletters.","Begin mist.","Plaats mist."] },
      { q: "Een **lange streep (—)** kun je gebruiken voor?", options: ["Onderbreking of toelichting","Aftrekken","Niet leesteken","Vraag"], answer: 0, wrongHints: [null,"Klopt — bv. 'Het was — geloof me — fantastisch.'","Wiskundig.","Wel leesteken.","Niet."] },
      { q: "Welke zin heeft een **fout vraagteken**?", options: ["Ik ga slapen?","Ga je mee?","Hoe heet je?","Waar is mijn boek?"], answer: 0, wrongHints: [null,"Klopt — mededeling, geen vraag.","Echte vraag.","Echte vraag.","Echte vraag."] },
      { q: "Welke **hoofdletter** is fout?", options: ["Ik Eet brood","Ik eet brood","Ik eet brood.","Eet jij brood?"], answer: 0, wrongHints: [null,"Klopt — 'Eet' geen hoofdletter midden zin.","Goed.","Goed.","Goed."] },
      { q: "Wat staat tussen **haakjes ()**?", options: ["Extra info / verduidelijking","Vraag","Naam","Niet relevant"], answer: 0, wrongHints: [null,"Klopt — bv. (zie pagina 5).","Vraagteken.","Niet specifiek.","Wel."] },
      { q: "Welke zin heeft de **juiste komma's** rond bijzin?", options: ["De man, die rent, is moe.","De man die rent, is moe.","De man die rent is moe.","De man, die rent is moe."], answer: 0, wrongHints: [null,"Klopt — uitbreidende bijzin tussen komma's.","Mist openings-komma.","Geen komma's.","Mist sluitkomma."] },
      { q: "Welke afkorting krijgt **geen** hoofdletter?", options: ["bv.","NL","EU","VS"], answer: 0, wrongHints: [null,"Klopt — 'bijvoorbeeld'.","Land = hoofdletter.","Land/instituut.","Land."] },
      { q: "Welke zin heeft de **juiste interpunctie**?", options: ["Wat een mooie dag!","Wat een mooie dag.","wat een mooie dag!","Wat een mooie dag?"], answer: 0, wrongHints: [null,"Klopt — uitroep.","Niet emotie.","Begin-hoofdletter mist.","Geen vraag."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const interpunctiePo = {
  id: "interpunctie-po",
  title: "Interpunctie & hoofdletters (groep 5-7)",
  emoji: "✏️",
  level: "groep5-7",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taalverzorging — interpunctie en hoofdletters",
  prerequisites: [
    { id: "woordsoorten-po", title: "Woordsoorten", niveau: "po-1F" },
    { id: "spelling", title: "Spelling — basis", niveau: "po-1F" },
  ],
  intro:
    "Interpunctie voor groep 5-7 — hoofdletters, punt, vraagteken, uitroepteken, komma's, aanhalingstekens. Met Cito-stijl oefenvragen en duidelijke regels. ~15 min.",
  triggerKeywords: [
    "interpunctie", "leestekens", "hoofdletter",
    "punt", "komma", "vraagteken", "uitroepteken",
    "aanhalingstekens", "taalverzorging",
  ],
  chapters,
  steps,
};

export default interpunctiePo;
