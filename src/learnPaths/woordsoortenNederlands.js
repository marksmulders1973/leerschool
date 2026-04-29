// Leerpad: Woordsoorten — Nederlands grammatica basis (onderbouw VO)
// 11 stappen in 5 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  zn: "#42a5f5", ww: "#ef5350", bn: "#66bb6a",
  lw: "#ab47bc", vnw: "#ffb300", vz: "#26a69a", vg: "#8d6e63", bw: "#5e35b1",
  good: "#00c853",
};

const stepEmojis = ["📚", "🏠", "🎨", "🔤", "🏃", "👤", "🎁", "🔗", "🤝", "⚡", "🏆"];

const chapters = [
  { letter: "A", title: "Wat zijn woordsoorten?", emoji: "📚", from: 0, to: 0 },
  { letter: "B", title: "Naamwoorden", emoji: "🏠", from: 1, to: 3 },
  { letter: "C", title: "Werkwoord & voornaamwoord", emoji: "🏃", from: 4, to: 6 },
  { letter: "D", title: "Verbinders & rest", emoji: "🔗", from: 7, to: 9 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 10, to: 10 },
];

const steps = [
  {
    title: "Woordsoorten — wat zijn dat?",
    explanation: "Elk woord in een zin heeft een **woordsoort** — een grammaticale categorie die zegt wat voor woord het is.\n\n**De 8 hoofdwoordsoorten** in het Nederlands:\n\n1. **Zelfstandig naamwoord** (zn) — een ding, persoon of plaats: *huis, Sara, Amsterdam*.\n2. **Werkwoord** (ww) — wat iemand doet of is: *loopt, eet, wordt*.\n3. **Bijvoeglijk naamwoord** (bn) — beschrijft een zn: *groot, mooi, rood*.\n4. **Lidwoord** (lw) — *de, het, een*.\n5. **Voornaamwoord** (vnw) — vervangt zn: *ik, jij, mijn, deze*.\n6. **Voorzetsel** (vz) — plaats/relatie: *in, op, naar, met*.\n7. **Voegwoord** (vg) — verbindt zinnen: *en, maar, omdat*.\n8. **Bijwoord** (bw) — beschrijft ww/bn/zin: *snel, vandaag, niet*.\n\n**Waarom belangrijk?** Bij zinsontleding, spelling, ontleden van werkwoorden — overal heb je woordsoorten nodig.\n\n**Voorbeeld in een zin**:\n*De (lw) grote (bn) hond (zn) loopt (ww) snel (bw) door (vz) het (lw) park (zn).*",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">8 woordsoorten</text>
<text x="20" y="50" fill="${COLORS.zn}" font-size="11" font-family="Arial">1. zelfstandig nw — huis</text>
<text x="20" y="68" fill="${COLORS.ww}" font-size="11" font-family="Arial">2. werkwoord — loopt</text>
<text x="20" y="86" fill="${COLORS.bn}" font-size="11" font-family="Arial">3. bijvoeglijk nw — groot</text>
<text x="20" y="104" fill="${COLORS.lw}" font-size="11" font-family="Arial">4. lidwoord — de, het, een</text>
<text x="20" y="122" fill="${COLORS.vnw}" font-size="11" font-family="Arial">5. voornaamwoord — ik, jij</text>
<text x="20" y="140" fill="${COLORS.vz}" font-size="11" font-family="Arial">6. voorzetsel — in, op, naar</text>
<text x="20" y="158" fill="${COLORS.vg}" font-size="11" font-family="Arial">7. voegwoord — en, maar</text>
<text x="20" y="176" fill="${COLORS.bw}" font-size="11" font-family="Arial">8. bijwoord — snel, vandaag</text>
</svg>`,
    checks: [
      {
        q: "Welke is een **zelfstandig naamwoord**?",
        options: ["fiets", "snel", "loopt", "de"],
        answer: 0,
        wrongHints: [null, "Snel = bijwoord (beschrijft hoe).", "Loopt = werkwoord.", "De = lidwoord."],
      },
      {
        q: "Welke is een **werkwoord**?",
        options: ["zwemt", "zwembad", "natte", "het"],
        answer: 0,
        wrongHints: [null, "Zwembad is een ding = zelfstandig nw.", "Natte beschrijft = bijvoeglijk nw.", "Het is een lidwoord."],
      },
    ],
  },

  // B
  {
    title: "Zelfstandig naamwoord (zn)",
    explanation: "Een **zelfstandig naamwoord** is een naam voor:\n• Een **ding**: tafel, boek, fiets.\n• Een **persoon**: jongen, leraar, Sara.\n• Een **dier**: hond, vogel, leeuw.\n• Een **plaats**: school, Amsterdam, park.\n• Een **gevoel/idee**: liefde, geluk, vrijheid.\n\n**Hoe herken je het?**\n• Je kunt er **de** of **het** voor zetten: *de tafel, het boek*.\n• Je kunt er een meervoud van maken: *tafels, boeken*.\n• Je kunt er een verkleinwoord van maken: *tafeltje, boekje*.\n\n**Twee soorten**:\n• **Zelfstandig nw met de**: *de tafel, de fiets, de jongen*.\n• **Zelfstandig nw met het**: *het boek, het huis, het kind*.\n\n**Eigennamen** zijn ook zn — schrijf je met hoofdletter:\n• *Sara, Amsterdam, Nederland, januari* (maand wel hoofdletter? Nee, alleen eigennamen — januari = klein).",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.zn}" font-size="14" font-family="Arial" font-weight="bold">zelfstandig naamwoord</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">ding: tafel, fiets, boek</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">persoon: jongen, Sara, leraar</text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">dier: hond, vogel</text>
<text x="20" y="109" fill="${COLORS.text}" font-size="11" font-family="Arial">plaats: school, Amsterdam</text>
<text x="20" y="127" fill="${COLORS.text}" font-size="11" font-family="Arial">gevoel: liefde, geluk</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">de/het ervoor → zelfstandig nw</text>
</svg>`,
    checks: [
      {
        q: "Welke is een **zelfstandig naamwoord**?",
        options: ["bibliotheek", "groot", "rennen", "snel"],
        answer: 0,
        wrongHints: [null, "Groot = bijvoeglijk nw.", "Rennen = werkwoord.", "Snel = bijwoord."],
      },
      {
        q: "Welke is **geen** zelfstandig naamwoord?",
        options: ["mooi", "auto", "kasteel", "vreugde"],
        answer: 0,
        wrongHints: [null, "Mooi = bijvoeglijk nw. Klopt — daarom is het GEEN zn.", "Auto is een ding, dus zn.", "Kasteel is een ding/plaats, dus zn.", "Vreugde is een gevoel, dus zn."],
      },
    ],
  },
  {
    title: "Bijvoeglijk naamwoord (bn)",
    explanation: "Een **bijvoeglijk naamwoord** beschrijft een **zelfstandig naamwoord**. Het zegt iets over hoe het is.\n\n**Voorbeelden**:\n• *de **rode** appel*\n• *een **mooie** dag*\n• *het **grote** huis*\n• *een **vriendelijk** kind*\n\n**Hoe herken je het?**\n• Het staat meestal **voor** een zelfstandig nw.\n• Je kunt vragen: \"hoe is de ___?\"\n• Het kan vaak een uitgang -e krijgen: *groot → grote, klein → kleine*.\n\n**Verbuiging van bn** (mini-regel):\n• De/het ervoor met +e: *de **grote** hond, het **kleine** kind*.\n• Een ervoor met de-woord: ook +e: *een **grote** hond*.\n• Een ervoor met het-woord: GEEN -e: *een **klein** kind, een **leuk** boek*.\n\n**Vergelijken**:\n• groot — groter — grootst.\n• mooi — mooier — mooist.\n• goed — beter — best (onregelmatig).",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.bn}" font-size="14" font-family="Arial" font-weight="bold">bijvoeglijk naamwoord</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">de <tspan fill="${COLORS.bn}" font-weight="bold">rode</tspan> appel</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">een <tspan fill="${COLORS.bn}" font-weight="bold">mooie</tspan> dag</text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">het <tspan fill="${COLORS.bn}" font-weight="bold">grote</tspan> huis</text>
<text x="20" y="109" fill="${COLORS.text}" font-size="11" font-family="Arial">een <tspan fill="${COLORS.bn}" font-weight="bold">klein</tspan> kind (geen -e bij 'een' + het-woord)</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">beschrijft een zelfst. nw</text>
</svg>`,
    checks: [
      {
        q: "Welke is een **bijvoeglijk naamwoord** in: *de snelle auto*?",
        options: ["snelle", "de", "auto", "geen"],
        answer: 0,
        wrongHints: [null, "De = lidwoord.", "Auto = zelfstandig nw.", "Snelle beschrijft auto = bn."],
      },
      {
        q: "Welke vorm is goed? — *een ___ kind* (klein)",
        options: ["klein", "kleine", "kleins", "kleinen"],
        answer: 0,
        wrongHints: [null, "Bij 'een' + het-woord (kind = het) → geen -e.", "Geen Nederlands.", "Geen vorm."],
      },
    ],
  },
  {
    title: "Lidwoord (lw)",
    explanation: "Het **lidwoord** is een klein woord dat voor een zelfstandig naamwoord staat. In het Nederlands zijn er **drie** lidwoorden:\n\n• **de** — voor de-woorden (mannelijk/vrouwelijk): *de tafel, de jongen, de stad*.\n• **het** — voor het-woorden (onzijdig): *het boek, het huis, het kind*.\n• **een** — onbepaald, voor alle: *een tafel, een boek, een kind*.\n\n**Verschil bepaald vs onbepaald**:\n• *Het kind speelt buiten.* — een specifiek kind dat we kennen.\n• *Een kind speelt buiten.* — het kan elk kind zijn.\n\n**Welk lidwoord?** Dat moet je leren bij het woord:\n• Mannelijk/vrouwelijk → **de** (de man, de vrouw, de stad).\n• Onzijdig → **het** (het boek, het huis).\n\n**Truc**: verkleinwoorden zijn ALTIJD het:\n• het tafeltje, het kindje, het mannetje.\n\n**Meervoud**: altijd **de** (geen het in meervoud).\n• *De tafels, de boeken, de kinderen.*",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.lw}" font-size="14" font-family="Arial" font-weight="bold">lidwoorden</text>
<rect x="20" y="40" width="80" height="50" rx="6" fill="${COLORS.lw}" opacity="0.20"/>
<text x="60" y="62" text-anchor="middle" fill="${COLORS.lw}" font-size="14" font-family="Arial" font-weight="bold">de</text>
<text x="60" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">de-woorden</text>
<rect x="110" y="40" width="80" height="50" rx="6" fill="${COLORS.lw}" opacity="0.20"/>
<text x="150" y="62" text-anchor="middle" fill="${COLORS.lw}" font-size="14" font-family="Arial" font-weight="bold">het</text>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">het-woorden</text>
<rect x="200" y="40" width="80" height="50" rx="6" fill="${COLORS.lw}" opacity="0.20"/>
<text x="240" y="62" text-anchor="middle" fill="${COLORS.lw}" font-size="14" font-family="Arial" font-weight="bold">een</text>
<text x="240" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">onbepaald</text>
<text x="150" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">de tafel · het boek · een huis</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">verkleinwoord = altijd 'het'</text>
</svg>`,
    checks: [
      {
        q: "Welk lidwoord hoort bij **boekje**?",
        options: ["het", "de", "een", "geen"],
        answer: 0,
        wrongHints: [null, "Verkleinwoorden zijn altijd het.", "Een kan ook ('een boekje'), maar 'het' is het bepaalde lidwoord.", "Boekje heeft wel een lidwoord."],
      },
      {
        q: "Welke woorden zijn allemaal lidwoorden?",
        options: ["de, het, een", "de, het, die", "een, twee, drie", "ik, jij, hij"],
        answer: 0,
        wrongHints: [null, "Die = aanwijzend voornaamwoord.", "Telwoorden, geen lidwoorden.", "Persoonlijke voornaamwoorden."],
      },
    ],
  },

  // C
  {
    title: "Werkwoord (ww)",
    explanation: "Een **werkwoord** zegt wat iemand of iets **doet**, **is** of **wordt**.\n\n**Voorbeelden**:\n• *Sara **fietst** naar school.* (doen)\n• *De hond **slaapt**.* (toestand)\n• *Hij **is** moe.* (zijn)\n• *Het **wordt** koud.* (worden)\n\n**Vorm**:\n• Hele werkwoord (infinitief) eindigt vaak op -**en**: lopen, eten, fietsen, koken.\n• Het wordt vervoegd bij gebruik: ik loop, jij loopt, wij lopen.\n\n**Persoonsvorm (pv)**: het werkwoord dat **vervoegd is** in de zin. Drie trucs:\n1. **Tijd veranderen** (heden→verleden): het werkwoord dat verandert is de pv.\n   *Hij werkt → Hij werkte. → werkt = pv.*\n2. **Vraag maken**: het werkwoord vooraan = pv.\n   *Sara fietst → Fietst Sara? → fietst = pv.*\n3. **Aantal veranderen**: het ww dat meeverandert is pv.\n   *De jongen rent → De jongens rennen → rent = pv.*\n\n**Diepere uitleg over ww-vervoeging**: zie het leerpad **werkwoordsvervoeging (d/t-regels)**.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.ww}" font-size="14" font-family="Arial" font-weight="bold">werkwoord</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">doen: <tspan fill="${COLORS.ww}" font-weight="bold">fietst</tspan>, <tspan fill="${COLORS.ww}" font-weight="bold">eet</tspan></text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">zijn: <tspan fill="${COLORS.ww}" font-weight="bold">is</tspan>, <tspan fill="${COLORS.ww}" font-weight="bold">ben</tspan></text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">worden: <tspan fill="${COLORS.ww}" font-weight="bold">wordt</tspan></text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">infinitief: lopen, eten</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">persoonsvorm = vervoegd ww</text>
</svg>`,
    checks: [
      {
        q: "Welk woord is het werkwoord in: *De kat drinkt melk*?",
        options: ["drinkt", "kat", "melk", "de"],
        answer: 0,
        wrongHints: [null, "Kat = zelfstandig nw.", "Melk = zelfstandig nw.", "De = lidwoord."],
      },
      {
        q: "Welk werkwoord is hier de persoonsvorm: *Hij is naar de winkel gegaan*?",
        options: ["is", "gegaan", "naar", "winkel"],
        answer: 0,
        wrongHints: [null, "Is = vervoegd. Gegaan = voltooid deelwoord, niet pv.", "Gegaan is voltooid deelwoord — geen pv.", "Naar = voorzetsel.", "Winkel = zelfstandig nw."],
      },
    ],
  },
  {
    title: "Persoonlijk voornaamwoord",
    explanation: "Een **persoonlijk voornaamwoord** vervangt een persoon of ding waar je het over hebt. Zo voorkom je dat je steeds dezelfde naam herhaalt.\n\n*Sara is hier. **Zij** woont in Amsterdam.*\n\n**De vormen**:\n\n| Persoon | Onderwerp | Lijdend voorwerp |\n|---|---|---|\n| 1e enkelvoud | ik | mij / me |\n| 2e enkelvoud | jij / u | jou / u |\n| 3e enkelvoud m | hij | hem |\n| 3e enkelvoud v | zij / ze | haar |\n| 3e enkelvoud o | het | het |\n| 1e meervoud | wij / we | ons |\n| 2e meervoud | jullie | jullie |\n| 3e meervoud | zij / ze | hen / hun |\n\n**Onderwerp** = wie iets doet:\n• ***Ik** loop. **Hij** eet. **Wij** zingen.*\n\n**Lijdend / meewerkend voorwerp** = aan wie iets gebeurt:\n• *Sara helpt **mij**.*\n• *Ik zie **hem**.*\n• *Mama gaf **ons** een cadeau.*\n\n**Hen vs hun**: hen = lijdend voorwerp én na voorzetsel; hun = meewerkend voorwerp.\n• *Ik zie **hen**.* (lijdend)\n• *Ik geef **hun** een boek.* (meewerkend)\n• *Ik praat met **hen**.* (na voorzetsel)\n\n**Truc**: in spreektaal mag je 'ze' bijna altijd zeggen.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.vnw}" font-size="13" font-family="Arial" font-weight="bold">persoonlijk vnw</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">ik / mij — jij / jou</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">hij / hem — zij / haar</text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">wij / ons — jullie</text>
<text x="20" y="109" fill="${COLORS.text}" font-size="11" font-family="Arial">zij / hen of hun</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">vervangt een naam</text>
</svg>`,
    checks: [
      {
        q: "Welk woord is een **persoonlijk vnw** in: *Hij geeft mij een boek*?",
        options: ["Hij én mij", "boek", "geeft", "een"],
        answer: 0,
        wrongHints: [null, "Boek = zn.", "Geeft = werkwoord.", "Een = lidwoord."],
      },
      {
        q: "Welke vorm is **goed**? — *Ik geef ___ een cadeau* (de jongens, meewerkend voorwerp)",
        options: ["hun", "hen", "ze", "zij"],
        answer: 0,
        wrongHints: [null, "Hen = lijdend voorwerp/na voorzetsel.", "Ze kan informeel, hun is grammaticaal correct hier.", "Zij = onderwerp."],
      },
    ],
  },
  {
    title: "Bezittelijk voornaamwoord",
    explanation: "Een **bezittelijk voornaamwoord** zegt **van wie** iets is. Het komt vóór een zelfstandig naamwoord.\n\n**De vormen**:\n• 1e enkelvoud: **mijn** — *mijn boek*\n• 2e enkelvoud: **jouw / uw** — *jouw fiets / uw auto*\n• 3e enkelvoud m: **zijn** — *zijn jas*\n• 3e enkelvoud v: **haar** — *haar tas*\n• 1e meervoud: **ons / onze** — *ons huis / onze auto*\n• 2e meervoud: **jullie** — *jullie school*\n• 3e meervoud: **hun** — *hun kinderen*\n\n**Ons of onze?**\n• **ons** voor het-woorden: *ons huis, ons kind*.\n• **onze** voor de-woorden + meervoud: *onze auto, onze kinderen*.\n\n**Verwarring met persoonlijk vnw**:\n• Hun (bezittelijk) = van hen → *hun boeken*.\n• Hun (meewerkend) = aan hen → *Ik geef hun een boek*.\n\n**Belangrijke fout**:\n❌ *Jouw bent te laat.* → ✅ *Jij bent te laat.*\n*Jouw is bezittelijk (van jou). Jij is persoonlijk (onderwerp).*",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.vnw}" font-size="13" font-family="Arial" font-weight="bold">bezittelijk vnw</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">mijn boek — jouw fiets</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">zijn jas — haar tas</text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">ons huis (het) — onze auto (de)</text>
<text x="20" y="109" fill="${COLORS.text}" font-size="11" font-family="Arial">jullie school — hun kinderen</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">van wie? → bezittelijk vnw</text>
</svg>`,
    checks: [
      {
        q: "Welke vorm hoort hier? — *___ huis is groot* (van ons, het-woord)",
        options: ["Ons", "Onze", "Onser", "Onss"],
        answer: 0,
        wrongHints: [null, "Onze is voor de-woorden + meervoud. Huis = het-woord → ons.", "Bestaat niet.", "Bestaat niet."],
      },
      {
        q: "Welke is een **bezittelijk vnw**?",
        options: ["mijn", "ik", "mij", "ikzelf"],
        answer: 0,
        wrongHints: [null, "Ik = persoonlijk vnw, onderwerp.", "Mij = persoonlijk vnw, voorwerp.", "Wederkerend, niet bezittelijk."],
      },
    ],
  },

  // D
  {
    title: "Voorzetsel (vz)",
    explanation: "Een **voorzetsel** is een klein woord dat een **plaats**, **tijd** of **relatie** aangeeft. Het staat vaak vóór een zelfstandig naamwoord.\n\n**Plaats**:\n• *De kat ligt **op** het bed.*\n• *Hij staat **voor** de deur.*\n• *We lopen **door** het park.*\n\n**Tijd**:\n• *Ik kom **om** 8 uur.*\n• ***Voor** het eten poetsen we de tafel.*\n• ***Na** school spelen we voetbal.*\n\n**Relatie / overige**:\n• *Een cadeau **voor** mijn moeder.*\n• *Praten **over** school.*\n• *Met de fiets, met mij.*\n\n**Veelgebruikte voorzetsels**:\n*aan, achter, bij, boven, buiten, door, in, langs, met, naar, naast, om, onder, op, over, sinds, tegen, tijdens, tot, tussen, uit, van, voor, zonder*.\n\n**Truc**: een voorzetsel staat bijna altijd vóór een zn of vnw, en je kunt 'm vaak invullen tussen \"de muis ___ het hol\".",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.vz}" font-size="14" font-family="Arial" font-weight="bold">voorzetsel</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">plaats: in, op, onder, naast</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">tijd: om, voor, na, sinds, tot</text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">overig: met, voor, over, zonder</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">de muis __ het hol</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">in / op / onder / naast / voor...</text>
</svg>`,
    checks: [
      {
        q: "Welk woord is een **voorzetsel** in: *Het boek ligt op de tafel*?",
        options: ["op", "boek", "ligt", "tafel"],
        answer: 0,
        wrongHints: [null, "Boek = zn.", "Ligt = werkwoord.", "Tafel = zn."],
      },
      {
        q: "Welke is een voorzetsel?",
        options: ["zonder", "zo", "groter", "wij"],
        answer: 0,
        wrongHints: [null, "'Zo' is bijwoord.", "Groter = bijvoeglijk nw.", "Wij = persoonlijk vnw."],
      },
    ],
  },
  {
    title: "Voegwoord (vg)",
    explanation: "Een **voegwoord** verbindt **twee woorden, woordgroepen of zinnen**.\n\n**Nevenschikkend** (= verbindt gelijkwaardige delen):\n• **en** — *Pien en ik gaan zwemmen.*\n• **of** — *Wil je thee of koffie?*\n• **maar** — *Ik wil komen, maar ik kan niet.*\n• **want** — *Hij blijft thuis, want hij is ziek.*\n• **dus** — *Het regent, dus pak je jas.*\n\n**Onderschikkend** (= maakt een bijzin):\n• **omdat** — *Ik blijf thuis omdat ik ziek ben.*\n• **als** — *Als het regent, blijf ik binnen.*\n• **dat** — *Hij zegt dat hij komt.*\n• **toen** — *Toen ik klein was, woonde ik in Utrecht.*\n• **terwijl** — *Hij las terwijl ik kookte.*\n• **hoewel** — *Hoewel het regent, gaan we naar buiten.*\n\n**Truc**:\n• Nevenschikkend → woordvolgorde blijft zoals bij hoofdzin.\n• Onderschikkend → werkwoord komt achteraan in de bijzin: *omdat hij ziek **is*** (NIET: omdat hij is ziek).",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.vg}" font-size="14" font-family="Arial" font-weight="bold">voegwoord</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">neven:</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">  en, of, maar, want, dus</text>
<text x="20" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">onder:</text>
<text x="20" y="118" fill="${COLORS.text}" font-size="11" font-family="Arial">  omdat, als, dat, toen, terwijl</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">verbindt zinnen</text>
</svg>`,
    checks: [
      {
        q: "Welk woord is een voegwoord?",
        options: ["omdat", "groter", "tafel", "snel"],
        answer: 0,
        wrongHints: [null, "Bijvoeglijk nw.", "Zelfstandig nw.", "Bijwoord."],
      },
      {
        q: "Welke is een **onderschikkend** voegwoord?",
        options: ["als", "en", "of", "maar"],
        answer: 0,
        wrongHints: [null, "En = nevenschikkend.", "Of = nevenschikkend.", "Maar = nevenschikkend."],
      },
    ],
  },
  {
    title: "Bijwoord (bw)",
    explanation: "Een **bijwoord** zegt iets over een **werkwoord**, een **bijvoeglijk naamwoord**, of een hele zin. Het zegt **hoe**, **wanneer**, **waar** of **hoezeer**.\n\n**Hoe?** — *snel, langzaam, mooi, slecht*:\n• *Hij rent **snel**.* (zegt iets over rent)\n\n**Wanneer?** — *vandaag, gisteren, nu, soms, altijd*:\n• *Ik werk **vandaag** thuis.*\n\n**Waar?** — *hier, daar, ergens, overal*:\n• *Sta jij **daar**?*\n\n**Hoezeer?** — *heel, erg, zeer, beetje*:\n• *Het is **heel** koud.* (zegt iets over koud)\n\n**Verschil bn vs bw**:\n• Bn beschrijft een **zelfstandig naamwoord**: *een snelle auto*.\n• Bw beschrijft een **werkwoord** of bn: *de auto rijdt snel*.\n\nBijwoord blijft hetzelfde — geen verbuiging zoals bij bn.\n\n**Een bijzonder bijwoord**: **niet** — ontkennen.\n• *Ik kom **niet**.*",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.bw}" font-size="14" font-family="Arial" font-weight="bold">bijwoord</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">hoe? <tspan fill="${COLORS.bw}" font-weight="bold">snel, mooi, hard</tspan></text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">wanneer? <tspan fill="${COLORS.bw}" font-weight="bold">nu, vandaag</tspan></text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">waar? <tspan fill="${COLORS.bw}" font-weight="bold">hier, daar</tspan></text>
<text x="20" y="109" fill="${COLORS.text}" font-size="11" font-family="Arial">hoezeer? <tspan fill="${COLORS.bw}" font-weight="bold">heel, erg</tspan></text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">zegt iets over ww/bn/zin</text>
</svg>`,
    checks: [
      {
        q: "Welke is een **bijwoord**?",
        options: ["snel (rent snel)", "snelle auto", "snelheid", "snelste"],
        answer: 0,
        wrongHints: [null, "Snelle auto: snelle = bn (beschrijft auto).", "Snelheid = zn.", "Snelste = bn (overtreffende trap)."],
      },
      {
        q: "Welk woord is een bijwoord in: *Hij komt vandaag thuis*?",
        options: ["vandaag", "Hij", "komt", "thuis"],
        answer: 0,
        wrongHints: [null, "Hij = persoonlijk vnw.", "Komt = werkwoord.", "Thuis is ook bijwoord/zn afhankelijk van context — beide kunnen — vandaag is duidelijk een tijdsbijwoord."],
      },
    ],
  },

  // E
  {
    title: "Eindopdracht — woordsoort vinden",
    explanation: "Tijd om alles toe te passen. Bij elk woord: welk soort?\n\n**Snelle herkenningstabel**:\n\n| Woordsoort | Vraag | Voorbeeld |\n|---|---|---|\n| zn | wat / wie? | tafel, Sara |\n| ww | doen / zijn? | loopt, is |\n| bn | hoe is de ___? | grote, mooi |\n| lw | de/het/een? | de, het, een |\n| pers. vnw | wie/aan wie? | ik, hem, ons |\n| bez. vnw | van wie? | mijn, jouw |\n| vz | plaats/tijd voor zn? | in, op, na |\n| vg | verbindt zinnen? | en, omdat |\n| bw | hoe/wanneer/waar? | snel, vandaag |\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">eindtoets</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Wat doet het woord?</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Voor welk ander woord staat het?</text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Vraag jezelf de soort-vraag</text>
<text x="20" y="109" fill="${COLORS.text}" font-size="11" font-family="Arial">4. Match met de tabel</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "Welke woordsoort is **mooie** in: *een mooie dag*?",
        options: ["bijvoeglijk naamwoord", "zelfstandig nw", "bijwoord", "voornaamwoord"],
        answer: 0,
        wrongHints: [null, "Mooie beschrijft 'dag' (zn) → bn.", "Mooie is geen ding/persoon.", "Bijwoord beschrijft ww/bn, niet zn.", "Vnw vervangt — mooie vervangt niets."],
      },
      {
        q: "Welke woordsoort is **omdat**?",
        options: ["voegwoord", "voorzetsel", "voornaamwoord", "bijwoord"],
        answer: 0,
        wrongHints: [null, "Verbindt zinnen → voegwoord.", "Voorzetsel staat voor zn — 'omdat' verbindt zinnen.", "Vnw vervangt zn.", "Bijwoord beschrijft niet."],
      },
      {
        q: "Welke woordsoort is **hen** in: *Ik zie hen*?",
        options: ["persoonlijk voornaamwoord", "bezittelijk voornaamwoord", "voorzetsel", "voegwoord"],
        answer: 0,
        wrongHints: [null, "Hen = persoonlijk vnw, lijdend voorwerp.", "Bezittelijk vnw is hun, niet hen.", "Geen voorzetsel.", "Geen voegwoord."],
      },
      {
        q: "Welke woordsoort is **vandaag** in: *Ik werk vandaag*?",
        options: ["bijwoord (tijd)", "zelfstandig nw", "bijvoeglijk nw", "lidwoord"],
        answer: 0,
        wrongHints: [null, "Vandaag zegt wanneer → bijwoord.", "Vandaag is geen ding.", "Vandaag beschrijft geen zn.", "Lidwoord = de/het/een."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const woordsoortenNederlands = {
  id: "woordsoorten-nederlands",
  title: "Woordsoorten",
  emoji: "📚",
  level: "klas1-2",
  subject: "taal",
  intro:
    "De 8 woordsoorten van het Nederlands: zelfstandig nw, werkwoord, bijvoeglijk nw, lidwoord, voornaamwoord (persoonlijk + bezittelijk), voorzetsel, voegwoord, bijwoord. Per soort herkenningstrucs en oefeningen.",
  triggerKeywords: [
    "woordsoort", "woordsoorten",
    "zelfstandig naamwoord", "zn",
    "werkwoord", "ww", "persoonsvorm",
    "bijvoeglijk naamwoord", "bn",
    "lidwoord", "de het een",
    "voornaamwoord", "persoonlijk", "bezittelijk",
    "voorzetsel", "vz",
    "voegwoord", "vg", "omdat als toen",
    "bijwoord", "bw",
    "grammatica nederlands",
    "hen hun", "ons onze",
  ],
  chapters,
  steps,
};

export default woordsoortenNederlands;
