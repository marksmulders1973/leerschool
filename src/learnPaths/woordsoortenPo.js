// Leerpad: Woordsoorten herkennen — voor groep 5-8
// 5 stappen. zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord, lidwoord, voornaamwoord.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#7c4dff",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["📦","🏃","🌈","🅰️","🏆"];

const chapters = [
  { letter: "A", title: "Zelfstandig naamwoord", emoji: "📦", from: 0, to: 0 },
  { letter: "B", title: "Werkwoord", emoji: "🏃", from: 1, to: 1 },
  { letter: "C", title: "Bijvoeglijk naamwoord", emoji: "🌈", from: 2, to: 2 },
  { letter: "D", title: "Lidwoord & voornaamwoord", emoji: "🅰️", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Zelfstandig naamwoord — woorden voor 'iets'",
    explanation: "Een **zelfstandig naamwoord** is een woord voor een **persoon, dier, ding, plaats of gevoel**.\n\n**Voorbeelden**:\n• Persoon: jongen, meisje, juf, dokter\n• Dier: hond, kat, paard, giraf\n• Ding: tafel, fiets, computer, boek\n• Plaats: school, Amsterdam, park\n• Gevoel: blijdschap, verdriet, angst\n\n**Test om te checken — zet er 'de' of 'het' voor**:\n• **de** hond ✓ — zelfst. naamwoord\n• **het** boek ✓ — zelfst. naamwoord\n• 'de mooi' — past niet → mooi is GEEN zelfst. naamwoord (is bijvoeglijk).\n\n**Enkelvoud / meervoud**:\n• boek → boeken\n• kat → katten\n• kind → kinderen\n• vis → vissen of vissen (afhankelijk van betekenis)\n\n**Eigennamen** (specifieke namen):\n• Tom, Lisa — namen van mensen.\n• Amsterdam, Spanje — plaatsnamen.\n• Schrijven met **hoofdletter**.\n\n**Verschil eigennaam vs gewoon zelfst. naamwoord**:\n• 'jongen' = elke willekeurige jongen.\n• 'Tom' = een specifieke jongen.\n\n**Cito-tip**:\nKun je 'de' of 'het' ervoor zetten? Dan is het zelfstandig naamwoord.",
    checks: [
      {
        q: "Welk woord is een **zelfstandig naamwoord**?",
        options: ["fiets","fietsen","snel","mooi"],
        answer: 0,
        wrongHints: [null,"Werkwoord (de bezigheid).","Bijvoeglijk naamwoord — beschrijft hoe.","Bijvoeglijk naamwoord."],
        uitlegPad: {
          stappen: [{ titel: "De/het-test", tekst: "Past 'de' of 'het' ervoor? Dan zelfstandig naamwoord. 'De fiets' ✓." }],
          woorden: [{ woord: "zelfstandig naamwoord", uitleg: "Woord voor persoon, dier, ding, plaats of gevoel." }],
          theorie: "Zelfst. nw test: 'de' of 'het' ervoor + meervoud te maken.",
          voorbeelden: [{ type: "test", tekst: "De fiets ✓ (zelfst nw). De snel ✗. De mooi ✗." }],
          basiskennis: [{ onderwerp: "Fietsen 2 betek.", uitleg: "'Fietsen' kan meervoud zelfst nw zijn (de fietsen) OF werkwoord (ik wil fietsen). Hier ww-vorm." }],
          niveaus: { basis: "fiets = zelfst nw. A.", simpeler: "Fiets = ding. 'De fiets' past ✓ → zelfst. naamwoord. = A.", nogSimpeler: "Fiets = A." },
        },
      },
      {
        q: "*'De **dappere** ridder vocht **fel**.'* — welk is een zelfst. naamwoord?",
        options: ["ridder","dappere","fel","De"],
        answer: 0,
        wrongHints: [null,"Beschrijft de ridder — bijvoeglijk.","Beschrijft hoe — bijwoord.","Lidwoord."],
        uitlegPad: {
          stappen: [{ titel: "Wie/wat doet?", tekst: "Ridder = persoon (wie vocht?). Zelfst. naamwoord." }],
          woorden: [{ woord: "ridder", uitleg: "Persoon (zelfst nw). 'De ridder' = test bewijst." }],
          theorie: "Zelfst. nw = personen, dingen. In zin: het ding waar 't over gaat.",
          voorbeelden: [{ type: "ontleed", tekst: "De (lidwoord) dappere (bijv) ridder (zelfst) vocht (ww) fel (bijwoord)." }],
          basiskennis: [{ onderwerp: "Vraag wie/wat", uitleg: "Wie is dapper? De ridder. Wie vecht? De ridder. → ridder is zelfst nw." }],
          niveaus: { basis: "ridder. A.", simpeler: "Wie vocht? De ridder. Ridder = persoon = zelfst nw. = A.", nogSimpeler: "Ridder = A." },
        },
      },
      {
        q: "Welke is **GEEN** zelfst. naamwoord?",
        options: ["loopt","tafel","Amsterdam","verdriet"],
        answer: 0,
        wrongHints: [null,"Wel — de tafel.","Wel — eigennaam.","Wel — gevoel."],
        uitlegPad: {
          stappen: [{ titel: "Welke past niet", tekst: "Loopt = werkwoordsvorm (3e persoon). Tafel/Amsterdam/verdriet = zelfst nw." }],
          woorden: [{ woord: "loopt", uitleg: "Werkwoordsvorm: hij/zij/het loopt." }],
          theorie: "Werkwoorden zoals 'loopt' kun je niet voorzien van 'de/het'. Zelfst nw wel.",
          voorbeelden: [{ type: "test", tekst: "De tafel ✓. Amsterdam (eigennaam) ✓. Het verdriet ✓. De loopt ✗." }],
          basiskennis: [{ onderwerp: "FOUT-vraag", uitleg: "Vraag wat NIET hoort. Lees scherp." }],
          niveaus: { basis: "loopt = ww. A.", simpeler: "Loopt = werkwoord (geen 'de loopt'). Andere drie = zelfst nw. = A.", nogSimpeler: "Loopt = A." },
        },
      },
    ],
  },

  {
    title: "Werkwoord — woorden voor doen of zijn",
    explanation: "Een **werkwoord** is een woord dat zegt wat iets/iemand **doet** of **is**.\n\n**Voorbeelden**:\n• Doe-werkwoorden: lopen, eten, fietsen, leren, springen\n• 'Zijn'-werkwoorden: zijn, hebben, blijven, worden\n\n**Test**:\n• Zet er 'ik' voor: *'ik loop'* ✓ → werkwoord.\n• Of 'ik ben' / 'ik heb' = ook werkwoord.\n\n**Vorm verandert** afhankelijk van wie:\n• ik **loop** / hij **loopt** / wij **lopen**\n• ik **ben** / hij **is** / wij **zijn**\n\n**Tijd verandert** ook:\n• Tegenwoordig: ik loop\n• Verleden: ik liep\n• Toekomst: ik zal lopen / ik ga lopen\n\n**Hele werkwoord** (infinitief):\n• De vorm zonder veranderingen: lopen, eten, kopen, schrijven.\n• Eindigt op -en (meestal).\n\n**Hulp-werkwoord vs hoofd-werkwoord**:\n• 'Ik **heb** gelopen' — heb = hulp-ww, gelopen = hoofd-ww.\n• Twee werkwoorden samen = hulp + hoofd.\n\n**Cito-vraag-typen**:\n• Onderstreep alle werkwoorden.\n• Wat is het hele werkwoord van 'liep'? → lopen.\n• Welk woord is het werkwoord in zin X?\n\n**Cito-tip**:\nWerkwoorden kun je vervoegen *(ik / jij / hij)*. Andere woorden niet.",
    checks: [
      {
        q: "Welk woord is een **werkwoord**?",
        options: ["springen","sprong","springer","sprongen-festival"],
        answer: 0,
        wrongHints: [null,"Dit is verleden tijd — wel werkwoord-vorm! Kies hele werkwoord.","Geen werkwoord (eindigt op -er = persoon).","Bestaat niet, fantasie."],
        uitlegPad: {
          stappen: [{ titel: "Hele werkwoord", tekst: "Springen = hele werkwoord (infinitief). Eindigt op -en, geen vervoeging." }],
          woorden: [{ woord: "infinitief", uitleg: "Het 'hele werkwoord' — vorm zonder vervoeging. Meestal -en." }],
          theorie: "Werkwoord-test: 'ik' ervoor + vervoegbaar. Hele werkwoord eindigt op -en.",
          voorbeelden: [{ type: "vorm", tekst: "Springen, lopen, eten = hele werkwoorden. Springt, liep = vervoegingen." }],
          basiskennis: [{ onderwerp: "Sprong = ww-vorm", uitleg: "'Sprong' is verleden tijd (hij sprong) — wel werkwoord, maar niet 'het hele'." }],
          niveaus: { basis: "springen. A.", simpeler: "Hele werkwoord eindigt op -en (springen). Sprong = vervoeging, springer = persoon (zelfst nw). = A.", nogSimpeler: "Springen = A." },
        },
      },
      {
        q: "*'Tom **schopt** de **bal** weg.'* — welk woord is het werkwoord?",
        options: ["schopt","Tom","bal","weg"],
        answer: 0,
        wrongHints: [null,"Eigennaam.","Zelfst. naamwoord.","Bijwoord (richting)."],
        uitlegPad: {
          stappen: [{ titel: "Wat doet Tom?", tekst: "Tom DOET iets = schoppen. Schopt = werkwoord (vervoegd: hij schopt)." }],
          woorden: [{ woord: "schopt", uitleg: "3e persoon enkelvoud van 'schoppen' (hij/zij schopt)." }],
          theorie: "Werkwoord = wat iemand doet. Vervang 'Tom' door 'ik' → 'ik schop' ✓.",
          voorbeelden: [{ type: "ontleed", tekst: "Tom (eigennaam) schopt (ww) de (lidw) bal (zelfst) weg (bijwoord)." }],
          basiskennis: [{ onderwerp: "Hele ww", uitleg: "Het hele werkwoord = schoppen. Vervoegd = schopt." }],
          niveaus: { basis: "schopt = ww. A.", simpeler: "Wat doet Tom? Hij schopt. Schopt = werkwoord. Tom = eigennaam, bal = zelfst nw. = A.", nogSimpeler: "Schopt = A." },
        },
      },
      {
        q: "Wat is het **hele werkwoord** van 'liep'?",
        options: ["lopen","liepen","loop","lopend"],
        answer: 0,
        wrongHints: [null,"Verleden tijd meervoud.","Tegenwoordige tijd-vorm.","Een 'ing-vorm' — niet de hele."],
        uitlegPad: {
          stappen: [{ titel: "Hele werkwoord = -en", tekst: "Liep = verleden tijd. Hele = lopen (vorm voor woordenboek)." }],
          woorden: [{ woord: "hele werkwoord", uitleg: "Infinitief — vorm zonder vervoeging. Vrijwel altijd op -en." }],
          theorie: "Vervoegingen → hele werkwoord: liep/loopt/lopen → 'lopen'.",
          voorbeelden: [{ type: "tabel", tekst: "Liep → lopen. At → eten. Schreef → schrijven. Was → zijn." }],
          basiskennis: [{ onderwerp: "Onregelmatig", uitleg: "Sterke werkwoorden: stam verandert (lopen/liep, eten/at). Zwak: -de/-te (werkte)." }],
          niveaus: { basis: "lopen. A.", simpeler: "Liep = verleden van lopen. Hele werkwoord = lopen (eindigt op -en). = A.", nogSimpeler: "Lopen = A." },
        },
      },
      {
        q: "*'Ik **heb** mijn boek **gelezen**.'* — welk is het hulpwerkwoord?",
        options: ["heb","gelezen","mijn","boek"],
        answer: 0,
        wrongHints: [null,"Hoofdwerkwoord.","Voornaamwoord.","Zelfst. naamwoord."],
        uitlegPad: {
          stappen: [{ titel: "2 ww samen", tekst: "Heb + gelezen = perfectum. 'Heb' (vorm van hebben) = hulpwerkwoord. Gelezen = hoofd." }],
          woorden: [{ woord: "hulpwerkwoord", uitleg: "Werkwoord dat helpt bij hoofd-ww (heb, ben, zal, zou, kan)." }],
          theorie: "Voltooide tijd: hulp-ww (heb/ben) + voltooid deelwoord (gelezen, geweest).",
          voorbeelden: [{ type: "vorm", tekst: "Ik heb gegeten. Ik ben geweest. Ik zal komen. Hulp + hoofd." }],
          basiskennis: [{ onderwerp: "Hebben vs zijn", uitleg: "Meeste ww met 'heb' (gelezen, gegeten). Beweging/staat met 'ben' (geweest, gegaan)." }],
          niveaus: { basis: "heb. A.", simpeler: "Twee werkwoorden: heb (hulp) + gelezen (hoofd). 'Heb' helpt om voltooide tijd te maken. = A.", nogSimpeler: "Heb = A." },
        },
      },
    ],
  },

  {
    title: "Bijvoeglijk naamwoord — beschrijft een ding",
    explanation: "Een **bijvoeglijk naamwoord** beschrijft een **eigenschap** van een persoon of ding.\n\n**Voorbeelden**:\n• mooi, lelijk, groot, klein, snel, langzaam, blauw, leuk, eng\n\n**Test**:\n• Past het tussen 'de' en een zelfstandig naamwoord?\n• 'de **mooie** auto' ✓ — mooi is bijvoeglijk.\n• 'de **fiets** auto' — past niet → fiets is GEEN bijvoeglijk.\n\n**Plaats in zin**:\n1. **Vóór het zelfst. naamwoord**: 'de mooie auto'\n2. **Na een werkwoord** ('zijn', 'worden', 'lijken'): 'De auto is **mooi**.'\n\n**Vorm verandert**:\n• 'mooi' staat alleen of na werkwoord: *'De auto is mooi.'*\n• 'mooie' krijgt -e als het vóór een woord staat: *'de mooie auto'*.\n• Geen -e bij **het**-woord enkelvoud zonder lidwoord/onbepaald: *'een mooi huis'* (niet 'mooie').\n\n**Vergelijken**:\n• mooi — mooi**er** — het mooi**st**\n• groot — groter — grootst\n• onregelmatig: goed — beter — best\n\n**Cito-vraag-typen**:\n• Welk woord is het bijvoeglijk naamwoord?\n• Schrijf in vergelijkende trap: 'snel' → ?\n\n**Cito-tip**:\nProbeer 'is' of 'wordt' ertussen: *'De auto is **mooi**'* → mooi = bijvoeglijk.",
    checks: [
      {
        q: "Welk woord is een **bijvoeglijk naamwoord**?",
        options: ["snel","auto","rijden","de"],
        answer: 0,
        wrongHints: [null,"Zelfst. naamwoord.","Werkwoord.","Lidwoord."],
        uitlegPad: {
          stappen: [{ titel: "Beschrijft eigenschap", tekst: "Snel = eigenschap (hoe is iets?). 'De snelle auto' ✓ → bijvoeglijk." }],
          woorden: [{ woord: "bijvoeglijk naamwoord", uitleg: "Beschrijft eigenschap van zelfst nw. Mooi, snel, groot, blauw." }],
          theorie: "Test: tussen 'de' en zelfst nw → bijvoeglijk. 'De snelle auto' ✓. 'De auto auto' ✗.",
          voorbeelden: [{ type: "test", tekst: "Snel: de snelle... ✓ → bijvoeglijk. Auto = ding (zelfst nw)." }],
          basiskennis: [{ onderwerp: "Test 'de ___ X'", uitleg: "Past tussen 'de' en zelfst nw? Dan bijvoeglijk." }],
          niveaus: { basis: "snel. A.", simpeler: "Snel beschrijft hoe = eigenschap = bijvoeglijk. Auto=ding, rijden=ww, de=lidwoord. = A.", nogSimpeler: "Snel = A." },
        },
      },
      {
        q: "*'De **slimme** **leerling** maakte de **toets**.'* — welk is bijvoeglijk?",
        options: ["slimme","leerling","toets","maakte"],
        answer: 0,
        wrongHints: [null,"Zelfst. naamwoord.","Zelfst. naamwoord.","Werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Hoe is leerling?", tekst: "Slimme beschrijft de leerling = bijvoeglijk." }],
          woorden: [{ woord: "slimme", uitleg: "Bijvoeglijk naamwoord met -e (verbogen vorm voor 'de')." }],
          theorie: "Vóór een zelfst nw + krijgt -e bij 'de' → bijvoeglijk.",
          voorbeelden: [{ type: "ontleed", tekst: "De (lidw) slimme (bijv) leerling (zelfst) maakte (ww) de toets (lidw + zelfst)." }],
          basiskennis: [{ onderwerp: "Buigings-e", uitleg: "'Een slim kind' (geen e) ↔ 'het slimme kind' (met e). Bij 'de': altijd -e." }],
          niveaus: { basis: "slimme. A.", simpeler: "Slimme beschrijft hoe leerling is = eigenschap = bijvoeglijk. = A.", nogSimpeler: "Slimme = A." },
        },
      },
      {
        q: "Vergelijkende trap van **'snel'**?",
        options: ["sneller","snellere","snelste","snel-er"],
        answer: 0,
        wrongHints: [null,"Past bij zelfst. naamwoord *(de snellere auto)*.","Dat is 'overtreffende' trap.","Geen streepje."],
        uitlegPad: {
          stappen: [{ titel: "Vergelijkend = +er", tekst: "Stam (snel) + er = sneller. Vergelijkende trap." }],
          woorden: [{ woord: "vergelijkende trap", uitleg: "Trap waarmee je dingen vergelijkt: -er-vorm." }],
          theorie: "3 trappen: stellend (snel), vergelijkend (sneller), overtreffend (snelst).",
          voorbeelden: [{ type: "tabel", tekst: "Mooi-mooier-mooist. Snel-sneller-snelst. Goed-beter-best (onregelmatig)." }],
          basiskennis: [{ onderwerp: "Snellere is verbogen", uitleg: "Snellere = sneller + e (vóór de auto). Maar trap-naam = sneller." }],
          niveaus: { basis: "sneller. A.", simpeler: "Vergelijkende trap = stam + -er. Snel + er = sneller. Snelste = overtreffend. = A.", nogSimpeler: "Sneller = A." },
        },
      },
      {
        q: "*'De **lekkere** **taart** is **op**.'* — welk is GEEN bijvoeglijk?",
        options: ["op","lekkere","Geen, alle","De taart"],
        answer: 0,
        wrongHints: [null,"Wel bijvoeglijk.","'op' is bijwoord van plaats/toestand.","Eén woord moet je kiezen."],
        uitlegPad: {
          stappen: [{ titel: "Op = toestand", tekst: "'Op' = bijwoord (toestand: leeg). Niet bijvoeglijk." }],
          woorden: [{ woord: "op", uitleg: "Bijwoord — geeft toestand of plaats aan." }],
          theorie: "Bijvoeglijk staat vóór zelfst nw. 'Op' staat na werkwoord = bijwoord/predicaat.",
          voorbeelden: [{ type: "verschil", tekst: "Lekkere taart (bijv vóór nw). Taart is op (bijwoord na ww)." }],
          basiskennis: [{ onderwerp: "Test", uitleg: "Bijvoeglijk: 'de ___ X' werkt. 'De op X' ✗ → op is geen bijvoeglijk." }],
          niveaus: { basis: "op = niet bijvoeglijk. A.", simpeler: "'Lekkere' beschrijft taart (bijvoeglijk). 'Op' geeft toestand aan (bijwoord). = A.", nogSimpeler: "Op = A." },
        },
      },
    ],
  },

  {
    title: "Lidwoord & voornaamwoord",
    explanation: "**Lidwoord**: een **klein woordje** voor een zelfst. naamwoord.\n\n**Bepaalde lidwoorden** (specifiek):\n• **de** — bij 'de'-woorden: de hond, de auto, de man\n• **het** — bij 'het'-woorden: het boek, het kind, het huis\n\n**Onbepaalde lidwoord** (algemeen):\n• **een** — voor alle: een hond, een boek, een huis\n\n**Test**:\n• Past 'de', 'het' of 'een' ervoor? Dan is het volgende woord een zelfst. naamwoord.\n• Lidwoord is **altijd** klein woordje voor een zelfst. naamwoord.\n\n**Voornaamwoord**: vervangt een naam of een zelfst. naamwoord.\n\n**Persoonlijk voornaamwoord** (verwijzen naar personen):\n• ik / jij / hij / zij / wij / jullie / zij\n• mij / jou / hem / haar / ons / hen\n\n**Bezittelijk voornaamwoord** (van wie iets is):\n• mijn, jouw, zijn, haar, ons, jullie, hun\n\n**Aanwijzend voornaamwoord** (ergens naar wijzen):\n• deze, die, dit, dat\n• 'Deze auto is van mij.' / 'Die appel is groen.'\n\n**Vragend voornaamwoord** (vragen mee stellen):\n• wie, wat, welke\n• 'Wie is dat?' / 'Wat zeg je?'\n\n**Cito-tip**:\n• Lidwoord = **de/het/een** vóór een zelfst. naamwoord.\n• Voornaamwoord = vervangt een naam (ik, hij, dit, die...).",
    checks: [
      {
        q: "Welke is een **lidwoord**?",
        options: ["het","mij","mijn","wie"],
        answer: 0,
        wrongHints: [null,"Persoonlijk voornaamwoord.","Bezittelijk voornaamwoord.","Vragend voornaamwoord."],
        uitlegPad: {
          stappen: [{ titel: "3 lidwoorden", tekst: "Lidwoorden NL: de, het, een. Alleen deze 3." }],
          woorden: [{ woord: "lidwoord", uitleg: "Klein woordje vóór zelfst nw: de, het, een." }],
          theorie: "3 lidwoorden: de (de-woorden), het (het-woorden), een (onbepaald).",
          voorbeelden: [{ type: "lijst", tekst: "Het boek, de fiets, een huis — allemaal lidwoorden." }],
          basiskennis: [{ onderwerp: "Onderscheid", uitleg: "Mij/mijn/wie zijn voornaamwoorden — verwijzen naar personen." }],
          niveaus: { basis: "het. A.", simpeler: "Lidwoorden zijn alleen: de, het, een. 'Het' is er één. Mij/mijn/wie = voornaamwoord. = A.", nogSimpeler: "Het = A." },
        },
      },
      {
        q: "*'**Mijn** fiets is groen.'* — welk soort woord is 'mijn'?",
        options: ["bezittelijk voornaamwoord","persoonlijk voornaamwoord","lidwoord","bijvoeglijk naamwoord"],
        answer: 0,
        wrongHints: [null,"Niet 'ik/jij/hij'.","Geen lidwoord.","Geen eigenschap."],
        uitlegPad: {
          stappen: [{ titel: "Van wie?", tekst: "Mijn = van mij. Bezittelijk voornaamwoord (laat zien aan wie iets toehoort)." }],
          woorden: [{ woord: "bezittelijk vnw", uitleg: "Geeft bezit aan: mijn, jouw, zijn, haar, ons, jullie, hun." }],
          theorie: "Bezittelijke voornaamwoorden: mijn (van mij), jouw (van jou), zijn (van hem), haar (van haar).",
          voorbeelden: [{ type: "tabel", tekst: "Ik → mijn. Jij → jouw. Hij → zijn. Zij → haar." }],
          basiskennis: [{ onderwerp: "Persoonlijk vs bezittelijk", uitleg: "Persoonlijk: ik/jij/hij. Bezittelijk: mijn/jouw/zijn (= van wie)." }],
          niveaus: { basis: "bezittelijk vnw. A.", simpeler: "Mijn = van mij = bezittelijk voornaamwoord. Niet ik/jij (persoonlijk), niet de/het (lidwoord). = A.", nogSimpeler: "Bezittelijk = A." },
        },
      },
      {
        q: "*'**Wie** zit daar?'* — welk soort woord is 'wie'?",
        options: ["vragend voornaamwoord","persoonlijk voornaamwoord","lidwoord","werkwoord"],
        answer: 0,
        wrongHints: [null,"Niet 'ik/jij/hij'.","Geen lidwoord.","Geen werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Wie/wat/welke", tekst: "Wie = vraagwoord. Stelt vraag. Vragend voornaamwoord." }],
          woorden: [{ woord: "vragend vnw", uitleg: "Vraagwoord: wie, wat, welke." }],
          theorie: "Vragende voornaamwoorden: wie (persoon), wat (ding), welke (keuze).",
          voorbeelden: [{ type: "lijst", tekst: "Wie is dat? Wat zeg je? Welke wil je?" }],
          basiskennis: [{ onderwerp: "Naamwoord vervangen", uitleg: "'Wie' vervangt naam (Tom, Lisa, etc.) in een vraag." }],
          niveaus: { basis: "vragend vnw. A.", simpeler: "Wie = vraagwoord (vragend voornaamwoord). Stelt een vraag. = A.", nogSimpeler: "Vragend = A." },
        },
      },
      {
        q: "*'**Deze** appel is rood.'* — welk soort woord is 'deze'?",
        options: ["aanwijzend voornaamwoord","lidwoord","bijvoeglijk naamwoord","werkwoord"],
        answer: 0,
        wrongHints: [null,"Geen 'de/het/een'.","Geen eigenschap.","Geen werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Deze/die/dit/dat", tekst: "Deze wijst aan welke appel = aanwijzend voornaamwoord." }],
          woorden: [{ woord: "aanwijzend vnw", uitleg: "Wijst aan: deze, die, dit, dat." }],
          theorie: "Aanwijzende voornaamwoorden: deze/dit (dichtbij), die/dat (verder weg).",
          voorbeelden: [{ type: "lijst", tekst: "Deze appel (de-woord, dichtbij). Dit huis (het-woord, dichtbij). Die boom. Dat raam." }],
          basiskennis: [{ onderwerp: "Niet lidwoord", uitleg: "Lidwoord = de/het/een. Aanwijzend = deze/die/dit/dat." }],
          niveaus: { basis: "aanwijzend. A.", simpeler: "Deze/die/dit/dat = aanwijzende voornaamwoorden (wijzen iets aan). Niet 'de/het/een'. = A.", nogSimpeler: "Aanwijzend = A." },
        },
      },
    ],
  },

  {
    title: "Cito-eindopdracht — woordsoorten mix",
    explanation: "Mix-toets: zelfst. nw, werkwoord, bijvoeglijk, lidwoord, voornaamwoord.",
    checks: [
      {
        q: "*'De rode auto rijdt snel.'* — welk woord is een **werkwoord**?",
        options: ["rijdt","auto","rode","snel"],
        answer: 0,
        wrongHints: [null,"Zelfst. naamwoord.","Bijvoeglijk naamwoord.","Bijwoord/bijvoeglijk."],
        uitlegPad: {
          stappen: [{ titel: "Wat doet de auto?", tekst: "Auto rijdt = doe-actie. Rijdt = werkwoord (vervoegd: hij rijdt)." }],
          woorden: [{ woord: "rijdt", uitleg: "3e persoon van 'rijden'. Werkwoord." }],
          theorie: "Werkwoord = wat onderwerp doet. 'De auto rijdt' → rijdt is wat de auto doet.",
          voorbeelden: [{ type: "ontleed", tekst: "De (lidw) rode (bijv) auto (zelfst) rijdt (ww) snel (bijwoord)." }],
          basiskennis: [{ onderwerp: "Vraag wat doet?", uitleg: "Vraag 'wat doet onderwerp?' → werkwoord." }],
          niveaus: { basis: "rijdt. A.", simpeler: "Wat doet de auto? Hij rijdt. Rijdt = werkwoord. = A.", nogSimpeler: "Rijdt = A." },
        },
      },
      {
        q: "*'Mijn lieve hond Buddy is groot.'* — welk woord is een **eigennaam**?",
        options: ["Buddy","hond","Mijn","groot"],
        answer: 0,
        wrongHints: [null,"Soort dier — geen specifieke naam.","Bezittelijk voornaamwoord.","Bijvoeglijk."],
        uitlegPad: {
          stappen: [{ titel: "Hoofdletter = eigennaam", tekst: "Buddy = specifieke naam (hoofdletter). Eigennaam." }],
          woorden: [{ woord: "eigennaam", uitleg: "Specifieke naam van persoon, dier of plaats. Altijd hoofdletter." }],
          theorie: "Eigennaam vs gewoon zelfst nw: hond = elke hond. Buddy = deze specifieke hond.",
          voorbeelden: [{ type: "tabel", tekst: "Hond/Buddy. Stad/Amsterdam. Land/Nederland. Soort/specifiek." }],
          basiskennis: [{ onderwerp: "Hoofdletter-truc", uitleg: "Eigennamen krijgen ALTIJD hoofdletter." }],
          niveaus: { basis: "Buddy. A.", simpeler: "Buddy = specifieke naam van de hond (hoofdletter) = eigennaam. Hond = soort dier. = A.", nogSimpeler: "Buddy = A." },
        },
      },
      {
        q: "*'Het kind is blij.'* — welk soort woord is **'het'**?",
        options: ["lidwoord","persoonlijk voornaamwoord","bezittelijk voornaamwoord","bijvoeglijk naamwoord"],
        answer: 0,
        wrongHints: [null,"Hier niet — staat vóór 'kind'.","Geen 'mijn/jouw'.","Geen eigenschap."],
        uitlegPad: {
          stappen: [{ titel: "Het + kind = lidwoord", tekst: "Het staat vóór een zelfst nw (kind) → lidwoord." }],
          woorden: [{ woord: "het", uitleg: "Twee functies: lidwoord (het kind) of persoonlijk vnw (het regent)." }],
          theorie: "'Het' kan lidwoord zijn (het + zelfst nw) of voornaamwoord (vervangt iets).",
          voorbeelden: [{ type: "verschil", tekst: "Het (lidw) kind. Het (pers vnw) regent. Hier: het + kind → lidwoord." }],
          basiskennis: [{ onderwerp: "Functie bepaalt", uitleg: "Kijk wat na 'het' staat. Zelfst nw → lidwoord. Werkwoord → vnw." }],
          niveaus: { basis: "lidwoord. A.", simpeler: "Het staat hier voor 'kind' (zelfst nw) → lidwoord (zoals 'de'). = A.", nogSimpeler: "Lidwoord = A." },
        },
      },
      {
        q: "*'Tom rent **snel** naar huis.'* — welk soort woord is 'snel'?",
        options: ["bijwoord/bijvoeglijk","werkwoord","lidwoord","voornaamwoord"],
        answer: 0,
        wrongHints: [null,"Geen werkwoord.","Geen 'de/het/een'.","Geen verwijzer."],
        uitlegPad: {
          stappen: [{ titel: "Hoe rent hij?", tekst: "Snel beschrijft HOE hij rent → bijwoord (bij ww). Of bijvoeglijk." }],
          woorden: [{ woord: "bijwoord", uitleg: "Beschrijft een werkwoord (hoe doet iemand iets). 'Snel rennen'." }],
          theorie: "Snel kan beide: bijvoeglijk (de snelle auto) of bijwoord (snel rennen).",
          voorbeelden: [{ type: "verschil", tekst: "De snelle auto (bij zelfst nw = bijvoeglijk). Hij rent snel (bij ww = bijwoord)." }],
          basiskennis: [{ onderwerp: "Niet lidwoord/werkwoord", uitleg: "Snel is geen de/het/een, geen actie." }],
          niveaus: { basis: "bijwoord/bijvoeglijk. A.", simpeler: "Snel beschrijft hoe Tom rent (bij werkwoord) = bijwoord (of bijvoeglijk in andere zinnen). = A.", nogSimpeler: "Snel = A." },
        },
      },
      {
        q: "Welke is een **persoonlijk voornaamwoord**?",
        options: ["zij","de","mijn","welke"],
        answer: 0,
        wrongHints: [null,"Lidwoord.","Bezittelijk voornaamwoord.","Vragend voornaamwoord."],
        uitlegPad: {
          stappen: [{ titel: "Persoonlijke vnw", tekst: "Persoonlijk: ik, jij, hij, zij, wij, jullie, zij. 'Zij' is er één." }],
          woorden: [{ woord: "persoonlijk vnw", uitleg: "Verwijzen naar personen: ik/jij/hij/zij/wij/jullie/zij." }],
          theorie: "4 soorten voornaamwoorden: persoonlijk (ik), bezittelijk (mijn), aanwijzend (deze), vragend (wie).",
          voorbeelden: [{ type: "lijst", tekst: "Persoonlijk: ik, jij, hij, zij, wij, jullie, zij. Object: mij, jou, hem, haar." }],
          basiskennis: [{ onderwerp: "Onderscheid", uitleg: "Mijn=bezittelijk, welke=vragend, de=lidwoord. Zij=persoonlijk." }],
          niveaus: { basis: "zij. A.", simpeler: "Persoonlijke voornaamwoorden = ik/jij/hij/zij/wij/jullie/zij. 'Zij' is er één. = A.", nogSimpeler: "Zij = A." },
        },
      },
      {
        q: "*'Wij hebben **een** mooi huis gekocht.'* — welk woord is het lidwoord?",
        options: ["een","Wij","mooi","huis"],
        answer: 0,
        wrongHints: [null,"Persoonlijk voornaamwoord.","Bijvoeglijk.","Zelfst. naamwoord."],
        uitlegPad: {
          stappen: [{ titel: "Een = lidwoord", tekst: "Een = onbepaald lidwoord (vóór elk zelfst nw)." }],
          woorden: [{ woord: "een", uitleg: "Onbepaald lidwoord = niet specifiek. 'Een huis' = elk willekeurig huis." }],
          theorie: "3 lidwoorden: de, het, een. 'Een' staat vóór elk zelfst nw (onbepaald).",
          voorbeelden: [{ type: "ontleed", tekst: "Wij (vnw) hebben (hulp ww) een (lidw) mooi (bijv) huis (zelfst) gekocht (hoofd ww)." }],
          basiskennis: [{ onderwerp: "Bepaald vs onbepaald", uitleg: "De/het = bepaald (specifiek). Een = onbepaald (algemeen)." }],
          niveaus: { basis: "een. A.", simpeler: "Lidwoorden = de, het, een. Hier 'een' (onbepaald) vóór 'huis'. = A.", nogSimpeler: "Een = A." },
        },
      },
      { q: "*'De **snelle** auto rijdt.'* — Welk woordsoort is 'snelle'?", options: ["Bijvoeglijk naamwoord","Zelfst. naamwoord","Werkwoord","Lidwoord"], answer: 0, wrongHints: [null,"Klopt — beschrijft hoe de auto is.","Niet — geen ding.","Niet — geen actie.","Niet."] },
      { q: "*'Jij **loopt** naar school.'* — Welk woordsoort is 'loopt'?", options: ["Werkwoord","Zelfst. naamwoord","Bijvoeglijk","Voornaamwoord"], answer: 0, wrongHints: [null,"Klopt — actie/doen-woord.","Niet — geen ding.","Niet — geen eigenschap.","Niet."] },
      { q: "*'**Hij** is mijn vriend.'* — Welk woordsoort is 'hij'?", options: ["Persoonlijk voornaamwoord","Zelfst. naamwoord","Bijvoeglijk","Werkwoord"], answer: 0, wrongHints: [null,"Klopt — vervangt een persoon.","Niet — geen naam.","Niet.","Niet."] },
      { q: "*'**Mijn** boek ligt hier.'* — Welk woordsoort is 'mijn'?", options: ["Bezittelijk voornaamwoord","Lidwoord","Bijvoeglijk","Werkwoord"], answer: 0, wrongHints: [null,"Klopt — wijst bezit aan.","Niet — bezittelijk vnw.","Vergelijkbaar maar specifieker.","Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const woordsoortenPo = {
  id: "woordsoorten-po",
  title: "Woordsoorten herkennen — Cito groep 5-8",
  emoji: "🔤",
  level: "groep5-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taalverzorging — woordsoorten",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
  ],
  intro:
    "Zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord, lidwoord, voornaamwoord. Cito-stijl. ~12 min.",
  triggerKeywords: [
    "woordsoorten","zelfstandig naamwoord","werkwoord","bijvoeglijk",
    "lidwoord","voornaamwoord","persoonlijk","bezittelijk","aanwijzend",
  ],
  chapters,
  steps,
};

export default woordsoortenPo;
