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
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Zelfstandig naamwoord — woorden voor 'iets'",
    explanation: "Een **zelfstandig naamwoord** is een woord voor een **persoon, dier, ding, plaats of gevoel**.\n\n**Voorbeelden**:\n• Persoon: jongen, meisje, juf, dokter\n• Dier: hond, kat, paard, giraf\n• Ding: tafel, fiets, computer, boek\n• Plaats: school, Amsterdam, park\n• Gevoel: blijdschap, verdriet, angst\n\n**Test om te checken — zet er 'de' of 'het' voor**:\n• **de** hond ✓ — zelfst. naamwoord\n• **het** boek ✓ — zelfst. naamwoord\n• 'de mooi' — past niet → mooi is GEEN zelfst. naamwoord (is bijvoeglijk).\n\n**Enkelvoud / meervoud**:\n• boek → boeken\n• kat → katten\n• kind → kinderen\n• vis → vissen\n\n**Eigennamen** (specifieke namen):\n• Tom, Lisa — namen van mensen.\n• Amsterdam, Spanje — plaatsnamen.\n• Schrijven met **hoofdletter**.\n\n**Verschil eigennaam vs gewoon zelfst. naamwoord**:\n• 'jongen' = elke willekeurige jongen.\n• 'Tom' = een specifieke jongen.\n\n**Toets-tip**:\nKun je 'de' of 'het' ervoor zetten? Dan is het zelfstandig naamwoord.",
    checks: [
      {
        q: "Welk woord is een **zelfstandig naamwoord**?",
        options: ["fiets","fietst","snel","mooi"],
        answer: 0,
        wrongHints: [null,"Werkwoord (hij fietst).","Bijvoeglijk naamwoord — beschrijft hoe.","Bijvoeglijk naamwoord."],
        uitlegPad: {
          stappen: [{ titel: "De/het-test", tekst: "Past 'de' of 'het' ervoor? Dan zelfstandig naamwoord. 'De fiets' ✓." }],
          woorden: [{ woord: "zelfstandig naamwoord", uitleg: "Woord voor persoon, dier, ding, plaats of gevoel." }],
          theorie: "Zelfst. nw test: 'de' of 'het' ervoor + meervoud te maken.",
          voorbeelden: [{ type: "test", tekst: "De fiets ✓ (zelfst nw). De snel ✗. De mooi ✗." }],
          basiskennis: [{ onderwerp: "Fietst = ww", uitleg: "'Fietst' is een werkwoordsvorm (hij fietst). 'De fietst' kan niet." }],
          niveaus: { basis: "fiets = zelfst nw.", simpeler: "Fiets = ding. 'De fiets' past ✓ → zelfst. naamwoord.", nogSimpeler: "Fiets" },
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
          niveaus: { basis: "ridder.", simpeler: "Wie vocht? De ridder. Ridder = persoon = zelfst nw.", nogSimpeler: "Ridder" },
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
          niveaus: { basis: "loopt = ww.", simpeler: "Loopt = werkwoord (geen 'de loopt'). Andere drie = zelfst nw.", nogSimpeler: "Loopt" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*'Gisteren lachte Lisa heel hard.'* — welk woord is een zelfstandig naamwoord?",
        options: ["Lisa", "lachte", "hard", "Gisteren"],
        answer: 0,
        wrongHints: [null, "Wat deed iemand gisteren? Dat woord zegt wat er gebeurde.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wie?",
              tekst: "Wie lachte? Lisa. Lisa is de naam van een persoon: een eigennaam, en dat is ook een zelfstandig naamwoord.",
            },
          ],
          woorden: [
            {
              woord: "eigennaam",
              uitleg: "Naam van een bepaalde persoon of plaats. Met hoofdletter.",
            },
          ],
          theorie: "Eigennamen (Tom, Lisa, Amsterdam) zijn ook zelfstandige naamwoorden. Je schrijft ze met een hoofdletter.",
          voorbeelden: [
            {
              type: "ontleed",
              tekst: "Gisteren lachte Lisa (eigennaam) heel hard.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Hoofdletter",
              uitleg: "Lisa heeft een hoofdletter midden in de zin: dat is een naam.",
            },
          ],
          niveaus: {
            basis: "Lisa = eigennaam.",
            simpeler: "Lisa is een persoon. Namen van personen zijn zelfstandige naamwoorden.",
            nogSimpeler: "Lisa",
          },
        },
      },
      {
        q: "Welk woord is een **eigennaam**?",
        options: ["Spanje", "land", "stad", "jongen"],
        answer: 0,
        wrongHints: [null, "Bedoel je hiermee één bepaald land, of elk land?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Bepaald of willekeurig?",
              tekst: "Spanje is de naam van één bepaald land. Land, stad en jongen kunnen over elk land, elke stad of elke jongen gaan.",
            },
          ],
          woorden: [
            {
              woord: "eigennaam",
              uitleg: "Specifieke naam van een persoon of plaats. Met hoofdletter.",
            },
          ],
          theorie: "'jongen' = elke willekeurige jongen. 'Tom' = één bepaalde jongen. Zo is 'land' algemeen en 'Spanje' een eigennaam.",
          voorbeelden: [
            {
              type: "verschil",
              tekst: "land → Spanje. stad → Amsterdam. jongen → Tom.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Hoofdletter",
              uitleg: "Eigennamen schrijf je met een hoofdletter.",
            },
          ],
          niveaus: {
            basis: "Spanje = eigennaam.",
            simpeler: "Spanje is de naam van één land. Daarom een eigennaam, met hoofdletter.",
            nogSimpeler: "Spanje",
          },
        },
      },
      {
        q: "Welk woord is een zelfstandig naamwoord in het **meervoud**?",
        options: ["boeken", "boek", "lezen", "leest"],
        answer: 0,
        wrongHints: [null, "Gaat dit over één ding of over meer dingen?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Meervoud",
              tekst: "Boek → boeken. Boeken is het meervoud: meer dan één boek.",
            },
          ],
          woorden: [
            {
              woord: "meervoud",
              uitleg: "Meer dan één.",
            },
          ],
          theorie: "Van een zelfstandig naamwoord kun je meestal een meervoud maken: boek → boeken, kat → katten, kind → kinderen.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "boek → boeken, vis → vissen, kind → kinderen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Werkwoord",
              uitleg: "Lezen en leest zijn werkwoorden: je kunt er 'ik' voor zetten.",
            },
          ],
          niveaus: {
            basis: "boeken = meervoud.",
            simpeler: "Eén boek, twee boeken. Boeken is het meervoud van het zelfstandig naamwoord boek.",
            nogSimpeler: "Boeken",
          },
        },
      },
      {
        q: "*'Wij rennen snel naar het park.'* — welk woord is een zelfstandig naamwoord?",
        options: ["park", "rennen", "snel", "Wij"],
        answer: 0,
        wrongHints: [null, "Wat doen ze? Is dat een plaats of een ding?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Plaats",
              tekst: "Park is een plaats. Het park ✓ → zelfstandig naamwoord.",
            },
          ],
          woorden: [
            {
              woord: "plaats",
              uitleg: "Een plek waar je kunt zijn: school, park, Amsterdam.",
            },
          ],
          theorie: "Zelfstandige naamwoorden zijn woorden voor personen, dieren, dingen, plaatsen en gevoelens.",
          voorbeelden: [
            {
              type: "ontleed",
              tekst: "Wij rennen (werkwoord) snel naar het park (zelfst. naamwoord).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Waar naartoe?",
              uitleg: "Waar rennen ze naartoe? Naar het park. Dat is een plaats.",
            },
          ],
          niveaus: {
            basis: "park = zelfst. naamwoord.",
            simpeler: "Het park is een plaats. 'Het park' kan, dus zelfstandig naamwoord.",
            nogSimpeler: "Park",
          },
        },
      },
      {
        q: "*'De juf leest een boek voor.'* — hoeveel zelfstandige naamwoorden staan in deze zin?",
        options: ["2", "1", "3", "4"],
        answer: 0,
        wrongHints: [null, "Zoek ook de persoon in de zin.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel met de de/het-test",
              tekst: "De juf ✓ (persoon). Een boek / het boek ✓ (ding). Leest en voor zijn geen zelfstandige naamwoorden.",
            },
          ],
          woorden: [
            {
              woord: "persoon",
              uitleg: "Juf is een woord voor een persoon.",
            },
          ],
          theorie: "Zelfstandig naamwoord: past 'de' of 'het' ervoor? Juf → de juf ✓. Boek → het boek ✓.",
          voorbeelden: [
            {
              type: "tel",
              tekst: "De (lidwoord) juf (zelfst.) leest een (lidwoord) boek (zelfst.) voor.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lidwoord",
              uitleg: "De en een zijn lidwoorden: kleine woordjes vóór een zelfstandig naamwoord.",
            },
          ],
          niveaus: {
            basis: "juf + boek = 2.",
            simpeler: "Juf is een persoon, boek is een ding. Dat zijn er twee.",
            nogSimpeler: "Twee",
          },
        },
      },
    ],
  },

  {
    title: "Werkwoord — woorden voor doen of zijn",
    explanation: "Een **werkwoord** is een woord dat zegt wat iets/iemand **doet** of **is**.\n\n**Voorbeelden**:\n• Doe-werkwoorden: lopen, eten, fietsen, leren, springen\n• Toestand: zijn, hebben, blijven, worden\n\n**Test**:\n• Zet er 'ik' voor: *'ik loop'* ✓ → werkwoord.\n• Of 'ik ben' / 'ik heb' = ook werkwoord.\n\n**Vorm verandert** afhankelijk van wie:\n• ik **loop** / hij **loopt** / wij **lopen**\n• ik **ben** / hij **is** / wij **zijn**\n\n**Tijd verandert** ook:\n• Tegenwoordig: ik loop\n• Verleden: ik liep\n• Toekomst: ik zal lopen / ik ga lopen\n\n**Hele werkwoord** (infinitief):\n• De vorm zonder veranderingen: lopen, eten, kopen, schrijven.\n• Eindigt op -en (meestal).\n\n**Hulp-werkwoord vs hoofd-werkwoord**:\n• 'Ik **heb** gelopen' — heb = hulp-ww, gelopen = hoofd-ww.\n• Twee werkwoorden samen = hulp + hoofd.\n\n**toetsvraag-typen**:\n• Onderstreep alle werkwoorden.\n• Wat is het hele werkwoord van 'liep'? → lopen.\n• Welk woord is het werkwoord in zin X?\n\n**Toets-tip**:\nWerkwoorden kun je vervoegen *(ik / jij / hij)*. Andere woorden niet.",
    checks: [
      {
        q: "Welk woord is het **hele werkwoord**?",
        options: ["springen","sprong","springer","sprongetje"],
        answer: 0,
        wrongHints: [null,"Dit is verleden tijd — wel werkwoord-vorm! Kies hele werkwoord.","Geen werkwoord (eindigt op -er = persoon).","Verkleinwoord = zelfst. naamwoord."],
        uitlegPad: {
          stappen: [{ titel: "Hele werkwoord", tekst: "Springen = hele werkwoord (infinitief). Eindigt op -en, geen vervoeging." }],
          woorden: [{ woord: "infinitief", uitleg: "Het 'hele werkwoord' — vorm zonder vervoeging. Meestal -en." }],
          theorie: "Werkwoord-test: 'ik' ervoor + vervoegbaar. Hele werkwoord eindigt op -en.",
          voorbeelden: [{ type: "vorm", tekst: "Springen, lopen, eten = hele werkwoorden. Springt, liep = vervoegingen." }],
          basiskennis: [{ onderwerp: "Sprong = ww-vorm", uitleg: "'Sprong' is verleden tijd (hij sprong) — wel werkwoord, maar niet 'het hele'." }],
          niveaus: { basis: "springen.", simpeler: "Hele werkwoord eindigt op -en (springen). Sprong = vervoeging, springer = persoon (zelfst nw).", nogSimpeler: "Springen" },
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
          niveaus: { basis: "schopt = ww.", simpeler: "Wat doet Tom? Hij schopt. Schopt = werkwoord. Tom = eigennaam, bal = zelfst nw.", nogSimpeler: "Schopt" },
        },
      },
      {
        q: "Wat is het **hele werkwoord** van 'liep'?",
        options: ["lopen","liepen","loop","lopend"],
        answer: 0,
        wrongHints: [null,"Verleden tijd meervoud.","Tegenwoordige tijd-vorm.","Tegenwoordig deelwoord — niet het hele werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Hele werkwoord = -en", tekst: "Liep = verleden tijd. Hele = lopen (vorm voor woordenboek)." }],
          woorden: [{ woord: "hele werkwoord", uitleg: "Infinitief — vorm zonder vervoeging. Vrijwel altijd op -en." }],
          theorie: "Vervoegingen → hele werkwoord: liep/loopt/lopen → 'lopen'.",
          voorbeelden: [{ type: "tabel", tekst: "Liep → lopen. At → eten. Schreef → schrijven. Was → zijn." }],
          basiskennis: [{ onderwerp: "Onregelmatig", uitleg: "Sterke werkwoorden: stam verandert (lopen/liep, eten/at). Zwak: -de/-te (werkte)." }],
          niveaus: { basis: "lopen.", simpeler: "Liep = verleden van lopen. Hele werkwoord = lopen (eindigt op -en).", nogSimpeler: "Lopen" },
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
          niveaus: { basis: "heb.", simpeler: "Twee werkwoorden: heb (hulp) + gelezen (hoofd). 'Heb' helpt om voltooide tijd te maken.", nogSimpeler: "Heb" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*'Mijn broer is ziek.'* — welk woord is het werkwoord?",
        options: ["is", "broer", "ziek", "Mijn"],
        answer: 0,
        wrongHints: [null, "Zegt dit woord wat iemand doet of is?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zijn = werkwoord",
              tekst: "'Is' komt van 'zijn'. Een werkwoord zegt wat iemand doet of is.",
            },
          ],
          woorden: [
            {
              woord: "zijn",
              uitleg: "Werkwoord voor hoe iets of iemand is: ik ben, hij is, wij zijn.",
            },
          ],
          theorie: "Niet alleen doe-woorden zijn werkwoorden. Ook zijn, hebben, blijven en worden.",
          voorbeelden: [
            {
              type: "vorm",
              tekst: "ik ben ziek / hij is ziek / wij zijn ziek.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Ik-test",
              uitleg: "Zet 'ik' ervoor: 'ik ben'. Dat kan, dus werkwoord.",
            },
          ],
          niveaus: {
            basis: "is = werkwoord.",
            simpeler: "Is komt van zijn: ik ben, hij is. Dat is een werkwoord.",
            nogSimpeler: "Is",
          },
        },
      },
      {
        q: "*'Gisteren kocht ik een ijsje.'* — van welk **hele werkwoord** komt 'kocht'?",
        options: ["kopen", "kochten", "koopt", "koken"],
        answer: 0,
        wrongHints: [null, null, null, "Dat is een ander werkwoord. Wat doe je in een winkel?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Terug naar het hele werkwoord",
              tekst: "Kocht is verleden tijd. Nu: ik koop. Het hele werkwoord is kopen.",
            },
          ],
          woorden: [
            {
              woord: "hele werkwoord",
              uitleg: "De vorm zonder veranderingen. Eindigt meestal op -en.",
            },
          ],
          theorie: "Vraag jezelf: wat is de vorm die je in een woordenboek zoekt? Kocht → kopen.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "liep → lopen, at → eten, kocht → kopen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tijd verandert",
              uitleg: "ik koop (nu), ik kocht (vroeger), ik zal kopen (later).",
            },
          ],
          niveaus: {
            basis: "kocht → kopen.",
            simpeler: "Gisteren kocht ik, vandaag koop ik. Het hele werkwoord is kopen.",
            nogSimpeler: "Kopen",
          },
        },
      },
      {
        q: "*'Wij ___ elke dag naar school.'* — welke vorm van 'lopen' past?",
        options: ["lopen", "loopt", "loop", "lopend"],
        answer: 0,
        wrongHints: [null, "Welke vorm hoort bij 'hij'? En welke bij 'wij'?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Vorm hangt af van wie",
              tekst: "Ik loop, hij loopt, wij lopen. Bij 'wij' hoort 'lopen'.",
            },
          ],
          woorden: [
            {
              woord: "vervoegen",
              uitleg: "De vorm van het werkwoord aanpassen aan wie het doet.",
            },
          ],
          theorie: "De vorm van een werkwoord verandert: ik loop / hij loopt / wij lopen.",
          voorbeelden: [
            {
              type: "vorm",
              tekst: "ik loop, jij loopt, hij loopt, wij lopen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Ik-jij-hij",
              uitleg: "Werkwoorden kun je vervoegen: de vorm past zich aan.",
            },
          ],
          niveaus: {
            basis: "Wij → lopen.",
            simpeler: "Bij 'wij' hoort de vorm 'lopen': wij lopen naar school.",
            nogSimpeler: "Wij lopen",
          },
        },
      },
      {
        q: "Welk woord is een werkwoord? Tip: zet er **'ik'** voor.",
        options: ["zwemmen", "zwembad", "nat", "snel"],
        answer: 0,
        wrongHints: [null, "Kun je zeggen 'ik zwembad'?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Ik-test",
              tekst: "Ik zwem ✓. Zwemmen is iets wat je doet, dus een werkwoord.",
            },
          ],
          woorden: [
            {
              woord: "werkwoord",
              uitleg: "Woord dat zegt wat iemand doet of is.",
            },
          ],
          theorie: "Werkwoorden kun je vervoegen: ik zwem, hij zwemt, wij zwemmen.",
          voorbeelden: [
            {
              type: "test",
              tekst: "ik zwem ✓, ik zwembad ✗, ik nat ✗, ik snel ✗.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Hele werkwoord",
              uitleg: "Zwemmen eindigt op -en: dat is het hele werkwoord.",
            },
          ],
          niveaus: {
            basis: "zwemmen = werkwoord.",
            simpeler: "'Ik zwem' kan. Zwemmen is iets wat je doet. Dus een werkwoord.",
            nogSimpeler: "Zwemmen",
          },
        },
      },
      {
        q: "Welke zin staat in de **verleden tijd**?",
        options: [
          "Ik liep naar huis.",
          "Ik loop naar huis.",
          "Ik zal naar huis lopen.",
          "Ik ga naar huis lopen.",
        ],
        answer: 0,
        wrongHints: [null, "Gebeurt dit nu?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tijd",
              tekst: "Liep = verleden tijd van lopen. Het is al gebeurd.",
            },
          ],
          woorden: [
            {
              woord: "verleden tijd",
              uitleg: "Iets wat al gebeurd is.",
            },
          ],
          theorie: "Tegenwoordig: ik loop. Verleden: ik liep. Toekomst: ik zal lopen / ik ga lopen.",
          voorbeelden: [
            {
              type: "tijd",
              tekst: "loop (nu) → liep (vroeger) → zal lopen (later).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Signaalwoord",
              uitleg: "Denk er 'gisteren' bij: gisteren liep ik naar huis.",
            },
          ],
          niveaus: {
            basis: "liep = verleden tijd.",
            simpeler: "'Ik liep' is al gebeurd. 'Ik loop' is nu. 'Ik zal lopen' en 'ik ga lopen' zijn later.",
            nogSimpeler: "Liep",
          },
        },
      },
      {
        q: "*'Wij hebben hard gewerkt.'* — welk woord is het **hoofdwerkwoord**?",
        options: ["gewerkt", "hebben", "hard", "Wij"],
        answer: 0,
        wrongHints: [null, "Dit werkwoord helpt alleen. Wat hebben ze eigenlijk gedaan?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Hulp + hoofd",
              tekst: "Hebben = hulpwerkwoord. Gewerkt = hoofdwerkwoord: dat zegt wat ze deden.",
            },
          ],
          woorden: [
            {
              woord: "hoofdwerkwoord",
              uitleg: "Het werkwoord dat zegt wat er eigenlijk gebeurt.",
            },
          ],
          theorie: "Twee werkwoorden samen = hulpwerkwoord + hoofdwerkwoord. 'Ik heb gelopen': heb = hulp, gelopen = hoofd.",
          voorbeelden: [
            {
              type: "vorm",
              tekst: "Wij (voornaamwoord) hebben (hulp) hard gewerkt (hoofd).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Wat deden ze?",
              uitleg: "Ze werkten. Dus gewerkt is het hoofdwerkwoord.",
            },
          ],
          niveaus: {
            basis: "gewerkt = hoofdwerkwoord.",
            simpeler: "Hebben helpt alleen. Wat deden ze? Werken. Dus gewerkt is het hoofdwerkwoord.",
            nogSimpeler: "Gewerkt",
          },
        },
      },
    ],
  },

  {
    title: "Bijvoeglijk naamwoord — beschrijft een ding",
    explanation: "Een **bijvoeglijk naamwoord** beschrijft een **eigenschap** van een persoon of ding.\n\n**Voorbeelden**:\n• mooi, lelijk, groot, klein, snel, langzaam, blauw, leuk, eng\n\n**Test**:\n• Past het tussen 'de' en een zelfstandig naamwoord?\n• 'de **mooie** auto' ✓ — mooi is bijvoeglijk.\n• 'de **fiets** auto' — past niet → fiets is GEEN bijvoeglijk.\n\n**Plaats in zin**:\n1. **Vóór het zelfst. naamwoord**: 'de mooie auto'\n2. **Na een werkwoord** ('zijn', 'worden', 'lijken'): 'De auto is **mooi**.'\n\n**Vorm verandert**:\n• 'mooi' staat alleen of na werkwoord: *'De auto is mooi.'*\n• 'mooie' krijgt -e als het vóór een woord staat: *'de mooie auto'*.\n• Geen -e bij **het**-woord enkelvoud zonder lidwoord/onbepaald: *'een mooi huis'* (niet 'mooie').\n\n**Vergelijken**:\n• mooi — mooi**er** — het mooi**st**\n• groot — groter — grootst\n• onregelmatig: goed — beter — best\n\n**toetsvraag-typen**:\n• Welk woord is het bijvoeglijk naamwoord?\n• Schrijf in vergelijkende trap: 'snel' → ?\n\n**Toets-tip**:\nProbeer 'is' of 'wordt' ertussen: *'De auto is **mooi**'* → mooi = bijvoeglijk.",
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
          niveaus: { basis: "snel.", simpeler: "Snel beschrijft hoe = eigenschap = bijvoeglijk. Auto=ding, rijden=ww, de=lidwoord.", nogSimpeler: "Snel" },
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
          niveaus: { basis: "slimme.", simpeler: "Slimme beschrijft hoe leerling is = eigenschap = bijvoeglijk.", nogSimpeler: "Slimme" },
        },
      },
      {
        q: "Vergelijkende trap van **'snel'**?",
        options: ["sneller","snelheid","snelste","snel-er"],
        answer: 0,
        wrongHints: [null,"Dat is een zelfstandig naamwoord, geen trap van 'snel'.","Dat is 'overtreffende' trap.","Geen streepje."],
        uitlegPad: {
          stappen: [{ titel: "Vergelijkend = +er", tekst: "Stam (snel) + er = sneller. Vergelijkende trap." }],
          woorden: [{ woord: "vergelijkende trap", uitleg: "Trap waarmee je dingen vergelijkt: -er-vorm." }],
          theorie: "3 trappen: stellend (snel), vergelijkend (sneller), overtreffend (snelst).",
          voorbeelden: [{ type: "tabel", tekst: "Mooi-mooier-mooist. Snel-sneller-snelst. Goed-beter-best (onregelmatig)." }],
          basiskennis: [{ onderwerp: "Snellere is verbogen", uitleg: "Snellere = sneller + e (vóór de auto). Maar trap-naam = sneller." }],
          niveaus: { basis: "sneller.", simpeler: "Vergelijkende trap = stam + -er. Snel + er = sneller. Snelste = overtreffend.", nogSimpeler: "Sneller" },
        },
      },
      {
        q: "*'De **lekkere** taart is **op**.'* — welk vetgedrukt woord is GEEN bijvoeglijk naamwoord?",
        options: ["op","lekkere","allebei","geen van beide"],
        answer: 0,
        wrongHints: [null,"'Lekkere' beschrijft de taart — wel bijvoeglijk.","Eén van de twee is wél bijvoeglijk.","Eén van de twee is géén bijvoeglijk."],
        uitlegPad: {
          stappen: [{ titel: "Op = toestand", tekst: "'Op' = bijwoord (toestand: leeg). Niet bijvoeglijk." }],
          woorden: [{ woord: "op", uitleg: "Bijwoord — geeft toestand of plaats aan." }],
          theorie: "Een bijvoeglijk naamwoord kun je ook vóór het zelfst nw zetten: 'de lekkere taart' ✓. Met 'op' kan dat niet ('de oppe taart' ✗) → 'op' is een bijwoord.",
          voorbeelden: [{ type: "verschil", tekst: "Lekkere taart (bijv vóór nw). Taart is op (bijwoord na ww)." }],
          basiskennis: [{ onderwerp: "Test", uitleg: "Bijvoeglijk: 'de ___ X' werkt. 'De op X' ✗ → op is geen bijvoeglijk." }],
          niveaus: { basis: "op = niet bijvoeglijk.", simpeler: "'Lekkere' beschrijft taart (bijvoeglijk). 'Op' geeft toestand aan (bijwoord).", nogSimpeler: "Op" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*'Het water is koud.'* — welk woord is het bijvoeglijk naamwoord?",
        options: ["koud", "water", "is", "Het"],
        answer: 0,
        wrongHints: [null, "Welk woord vertelt hoe het water is?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Hoe is het water?",
              tekst: "Koud zegt hoe het water is: een eigenschap. Dus bijvoeglijk naamwoord.",
            },
          ],
          woorden: [
            {
              woord: "bijvoeglijk naamwoord",
              uitleg: "Woord dat een eigenschap beschrijft: mooi, groot, koud.",
            },
          ],
          theorie: "Een bijvoeglijk naamwoord kan na 'is' of 'wordt' staan: 'Het water is koud.' Of vóór het zelfst. naamwoord: 'het koude water'.",
          voorbeelden: [
            {
              type: "test",
              tekst: "Het water is koud ✓. Het koude water ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Twee plekken",
              uitleg: "Vóór het zelfstandig naamwoord of na een werkwoord als 'is'.",
            },
          ],
          niveaus: {
            basis: "koud = bijvoeglijk.",
            simpeler: "Hoe is het water? Koud. Dat is een eigenschap, dus bijvoeglijk naamwoord.",
            nogSimpeler: "Koud",
          },
        },
      },
      {
        q: "*'Van alle torens in de stad is deze het ___.'* — welke vorm van 'hoog' past?",
        options: ["hoogst", "hoger", "hoogt", "hoogs"],
        answer: 0,
        wrongHints: [null, "Vergelijk je hier twee torens, of alle torens?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Vergelijken",
              tekst: "hoog — hoger — het hoogst. Bij 'het ... van alle' hoort de vorm op -st.",
            },
          ],
          woorden: [
            {
              woord: "vergelijken",
              uitleg: "Laten zien dat iets meer of het meest heeft.",
            },
          ],
          theorie: "Vergelijken gaat zo: mooi — mooier — het mooist. Groot — groter — grootst. Hoog — hoger — hoogst.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "hoog → hoger → het hoogst.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Van alle",
              uitleg: "Bij 'van alle' gaat het om de allerhoogste: -st.",
            },
          ],
          niveaus: {
            basis: "het hoogst.",
            simpeler: "Van álle torens is deze de hoogste: het hoogst.",
            nogSimpeler: "Hoogst",
          },
        },
      },
      {
        q: "*'Ik ben goed in rekenen, maar mijn zus is nog ___.'* — welk woord past?",
        options: ["beter", "goeder", "best", "beste"],
        answer: 0,
        wrongHints: [null, "Gaat 'goed' hier volgens de gewone regel?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Onregelmatig",
              tekst: "Goed is onregelmatig: goed — beter — best. Je vergelijkt twee mensen, dus 'beter'.",
            },
          ],
          woorden: [
            {
              woord: "onregelmatig",
              uitleg: "Gaat niet volgens de gewone regel (-er, -st).",
            },
          ],
          theorie: "De meeste woorden: mooi — mooier — mooist. Maar: goed — beter — best.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "goed → beter → best.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Twee vergelijken",
              uitleg: "'Nog ...' vergelijkt twee mensen: ik en mijn zus.",
            },
          ],
          niveaus: {
            basis: "goed → beter.",
            simpeler: "Goed wordt niet 'goeder' maar beter. Mijn zus is nog beter.",
            nogSimpeler: "Beter",
          },
        },
      },
      {
        q: "Welk woord past op de lege plek: *'de ___ fiets'*?",
        options: ["rode", "rijden", "zadel", "snelheid"],
        answer: 0,
        wrongHints: [null, "Beschrijft dit woord hoe de fiets eruitziet?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Test: de ___ fiets",
              tekst: "Een bijvoeglijk naamwoord past tussen 'de' en een zelfstandig naamwoord: de rode fiets ✓.",
            },
          ],
          woorden: [
            {
              woord: "bijvoeglijk naamwoord",
              uitleg: "Beschrijft een eigenschap: rood, groot, snel.",
            },
          ],
          theorie: "Test: past het woord tussen 'de' en een zelfst. naamwoord? Dan is het bijvoeglijk.",
          voorbeelden: [
            {
              type: "test",
              tekst: "de rode fiets ✓, de rijden fiets ✗, de zadel fiets ✗.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kleur",
              uitleg: "Kleuren zijn eigenschappen: rood, blauw, geel.",
            },
          ],
          niveaus: {
            basis: "de rode fiets.",
            simpeler: "Rood is een kleur, een eigenschap van de fiets. 'De rode fiets' klinkt goed.",
            nogSimpeler: "Rode",
          },
        },
      },
    ],
  },

  {
    title: "Lidwoord & voornaamwoord",
    explanation: "**Lidwoord**: een **klein woordje** voor een zelfst. naamwoord.\n\n**Bepaalde lidwoorden** (specifiek):\n• **de** — bij 'de'-woorden: de hond, de auto, de man\n• **het** — bij 'het'-woorden: het boek, het kind, het huis\n\n**Onbepaald lidwoord** (algemeen):\n• **een** — voor alle: een hond, een boek, een huis\n\n**Test**:\n• Past 'de', 'het' of 'een' ervoor? Dan is het volgende woord een zelfst. naamwoord.\n• Lidwoord is **altijd** klein woordje voor een zelfst. naamwoord.\n\n**Voornaamwoord**: vervangt een naam of een zelfst. naamwoord.\n\n**Persoonlijk voornaamwoord** (verwijzen naar personen):\n• ik / jij / hij / zij / wij / jullie / zij\n• mij / jou / hem / haar / ons / hen\n\n**Bezittelijk voornaamwoord** (van wie iets is):\n• mijn, jouw, zijn, haar, ons, jullie, hun\n\n**Aanwijzend voornaamwoord** (ergens naar wijzen):\n• deze, die, dit, dat\n• 'Deze auto is van mij.' / 'Die appel is groen.'\n\n**Vragend voornaamwoord** (vragen mee stellen):\n• wie, wat, welke\n• 'Wie is dat?' / 'Wat zeg je?'\n\n**Toets-tip**:\n• Lidwoord = **de/het/een** vóór een zelfst. naamwoord.\n• Voornaamwoord = vervangt een naam (ik, hij, dit, die...).",
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
          voorbeelden: [{ type: "lijst", tekst: "In 'het boek, de fiets, een huis' zijn het, de en een lidwoorden." }],
          basiskennis: [{ onderwerp: "Onderscheid", uitleg: "Mij/mijn/wie zijn voornaamwoorden — verwijzen naar personen." }],
          niveaus: { basis: "het.", simpeler: "Lidwoorden zijn alleen: de, het, een. 'Het' is er één. Mij/mijn/wie = voornaamwoord.", nogSimpeler: "Het" },
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
          niveaus: { basis: "bezittelijk vnw.", simpeler: "Mijn = van mij = bezittelijk voornaamwoord. Niet ik/jij (persoonlijk), niet de/het (lidwoord).", nogSimpeler: "Bezittelijk" },
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
          niveaus: { basis: "vragend vnw.", simpeler: "Wie = vraagwoord (vragend voornaamwoord). Stelt een vraag.", nogSimpeler: "Vragend" },
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
          niveaus: { basis: "aanwijzend.", simpeler: "Deze/die/dit/dat = aanwijzende voornaamwoorden (wijzen iets aan). Niet 'de/het/een'.", nogSimpeler: "Aanwijzend" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*'Tom heeft honger. ___ eet een appel.'* — welk voornaamwoord past op de lege plek?",
        options: ["Hij", "Zij", "Wij", "Het"],
        answer: 0,
        wrongHints: [null, "Gaat het over een jongen of over een meisje?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Naam vervangen",
              tekst: "Een voornaamwoord vervangt een naam. Tom is een jongen → hij.",
            },
          ],
          woorden: [
            {
              woord: "voornaamwoord",
              uitleg: "Woord dat een naam of zelfst. naamwoord vervangt.",
            },
          ],
          theorie: "Persoonlijke voornaamwoorden: ik, jij, hij, zij, wij. Tom → hij. Lisa → zij.",
          voorbeelden: [
            {
              type: "vervangen",
              tekst: "Tom → hij. Lisa → zij. Tom en ik → wij.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eén persoon",
              uitleg: "Tom is één jongen, dus geen 'wij'.",
            },
          ],
          niveaus: {
            basis: "Tom → hij.",
            simpeler: "Tom is een jongen. In plaats van 'Tom' zeg je 'hij'.",
            nogSimpeler: "Hij",
          },
        },
      },
      {
        q: "*'**Welke** kleur vind jij mooi?'* — welk soort woord is 'welke'?",
        options: [
          "vragend voornaamwoord",
          "aanwijzend voornaamwoord",
          "persoonlijk voornaamwoord",
          "lidwoord",
        ],
        answer: 0,
        wrongHints: [null, "Wijs je hier iets aan, of stel je een vraag?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Vraag",
              tekst: "Met 'welke' stel je een vraag. Wie, wat en welke zijn vragende voornaamwoorden.",
            },
          ],
          woorden: [
            {
              woord: "vragend voornaamwoord",
              uitleg: "Woord waarmee je een vraag stelt: wie, wat, welke.",
            },
          ],
          theorie: "Vragend: wie, wat, welke. Aanwijzend: deze, die, dit, dat.",
          voorbeelden: [
            {
              type: "lijst",
              tekst: "Wie is dat? Wat zeg je? Welke wil je?",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vraagteken",
              uitleg: "De zin eindigt met een vraagteken.",
            },
          ],
          niveaus: {
            basis: "welke = vragend vnw.",
            simpeler: "Welke kleur? Je vraagt iets. Dus vragend voornaamwoord.",
            nogSimpeler: "Vragend",
          },
        },
      },
    ],
  },

  {
    title: "Eindopdracht — woordsoorten mix",
    explanation: "Mix-toets: zelfst. nw, werkwoord, bijvoeglijk, lidwoord, voornaamwoord.",
    checks: [
      {
        q: "*'De rode auto rijdt snel.'* — welk woord is een **werkwoord**?",
        options: ["rijdt","auto","rode","snel"],
        answer: 0,
        wrongHints: [null,"Zelfst. naamwoord.","Bijvoeglijk naamwoord.","Bijwoord — zegt hoe de auto rijdt."],
        uitlegPad: {
          stappen: [{ titel: "Wat doet de auto?", tekst: "Auto rijdt = doe-actie. Rijdt = werkwoord (vervoegd: hij rijdt)." }],
          woorden: [{ woord: "rijdt", uitleg: "3e persoon van 'rijden'. Werkwoord." }],
          theorie: "Werkwoord = wat onderwerp doet. 'De auto rijdt' → rijdt is wat de auto doet.",
          voorbeelden: [{ type: "ontleed", tekst: "De (lidw) rode (bijv) auto (zelfst) rijdt (ww) snel (bijwoord)." }],
          basiskennis: [{ onderwerp: "Vraag wat doet?", uitleg: "Vraag 'wat doet onderwerp?' → werkwoord." }],
          niveaus: { basis: "rijdt.", simpeler: "Wat doet de auto? Hij rijdt. Rijdt = werkwoord.", nogSimpeler: "Rijdt" },
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
          niveaus: { basis: "Buddy.", simpeler: "Buddy = specifieke naam van de hond (hoofdletter) = eigennaam. Hond = soort dier.", nogSimpeler: "Buddy" },
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
          niveaus: { basis: "lidwoord.", simpeler: "Het staat hier voor 'kind' (zelfst nw) → lidwoord (zoals 'de').", nogSimpeler: "Lidwoord" },
        },
      },
      {
        q: "*'Tom rent **snel** naar huis.'* — welk soort woord is 'snel'?",
        options: ["bijwoord","werkwoord","lidwoord","voornaamwoord"],
        answer: 0,
        wrongHints: [null,"Geen werkwoord.","Geen 'de/het/een'.","Geen verwijzer."],
        uitlegPad: {
          stappen: [{ titel: "Hoe rent hij?", tekst: "Snel beschrijft HOE hij rent → het hoort bij het werkwoord → bijwoord. Vóór een zelfstandig naamwoord ('de snelle auto') zou het bijvoeglijk zijn." }],
          woorden: [{ woord: "bijwoord", uitleg: "Beschrijft een werkwoord (hoe doet iemand iets). 'Snel rennen'." }],
          theorie: "Snel kan beide: bijvoeglijk (de snelle auto) of bijwoord (snel rennen).",
          voorbeelden: [{ type: "verschil", tekst: "De snelle auto (bij zelfst nw = bijvoeglijk). Hij rent snel (bij ww = bijwoord)." }],
          basiskennis: [{ onderwerp: "Niet lidwoord/werkwoord", uitleg: "Snel is geen de/het/een, geen actie." }],
          niveaus: { basis: "bijwoord.", simpeler: "Snel beschrijft hoe Tom rent (bij het werkwoord) = bijwoord.", nogSimpeler: "Bijwoord" },
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
          theorie: "4 soorten voornaamwoorden die je hier leert: persoonlijk (ik), bezittelijk (mijn), aanwijzend (deze), vragend (wie).",
          voorbeelden: [{ type: "lijst", tekst: "Persoonlijk: ik, jij, hij, zij, wij, jullie, zij. Object: mij, jou, hem, haar." }],
          basiskennis: [{ onderwerp: "Onderscheid", uitleg: "Mijn=bezittelijk, welke=vragend, de=lidwoord. Zij=persoonlijk." }],
          niveaus: { basis: "zij.", simpeler: "Persoonlijke voornaamwoorden = ik/jij/hij/zij/wij/jullie/zij. 'Zij' is er één.", nogSimpeler: "Zij" },
        },
      },
      {
        q: "*'Wij hebben **een** mooi huis gekocht.'* — welk woord is het lidwoord?",
        options: ["een","Wij","mooi","huis"],
        answer: 0,
        wrongHints: [null,"Persoonlijk voornaamwoord.","Bijvoeglijk.","Zelfst. naamwoord."],
        uitlegPad: {
          stappen: [{ titel: "Een = lidwoord", tekst: "Een = onbepaald lidwoord (vóór de- én het-woorden)." }],
          woorden: [{ woord: "een", uitleg: "Onbepaald lidwoord = niet specifiek. 'Een huis' = elk willekeurig huis." }],
          theorie: "3 lidwoorden: de, het, een. 'Een' staat vóór de- én het-woorden (onbepaald).",
          voorbeelden: [{ type: "ontleed", tekst: "Wij (vnw) hebben (hulp ww) een (lidw) mooi (bijv) huis (zelfst) gekocht (hoofd ww)." }],
          basiskennis: [{ onderwerp: "Bepaald vs onbepaald", uitleg: "De/het = bepaald (specifiek). Een = onbepaald (algemeen)." }],
          niveaus: { basis: "een.", simpeler: "Lidwoorden = de, het, een. Hier 'een' (onbepaald) vóór 'huis'.", nogSimpeler: "Een" },
        },
      },
      { q: "*'De **snelle** auto rijdt.'* — Welke woordsoort is 'snelle'?", options: ["Bijvoeglijk naamwoord","Zelfst. naamwoord","Werkwoord","Lidwoord"], answer: 0, wrongHints: [null, "Niet — geen ding.", "Niet — geen actie.", "Niet."] },
      { q: "*'Jij **loopt** naar school.'* — Welke woordsoort is 'loopt'?", options: ["Werkwoord","Zelfst. naamwoord","Bijvoeglijk","Voornaamwoord"], answer: 0, wrongHints: [null, "Niet — geen ding.", "Niet — geen eigenschap.", "Niet."] },
      { q: "*'**Hij** is mijn vriend.'* — Welke woordsoort is 'hij'?", options: ["Persoonlijk voornaamwoord","Zelfst. naamwoord","Bijvoeglijk","Werkwoord"], answer: 0, wrongHints: [null, "Niet — geen naam.", "Niet.", "Niet."] },
      { q: "*'**Mijn** boek ligt hier.'* — Welke woordsoort is 'mijn'?", options: ["Bezittelijk voornaamwoord","Lidwoord","Bijvoeglijk","Werkwoord"], answer: 0, wrongHints: [null, "Niet — 'mijn' is geen de/het/een.", "Niet — 'mijn' zegt van wie, niet hoe iets is.", "Niet."] },
      { q: "Welke 3 **lidwoorden** zijn er in het Nederlands?", options: ["de, het, een","de, een, hij","een, het, jij","de, dit, dat"], answer: 0, wrongHints: [null, "Hij is voornaamwoord.", "Jij is voornaamwoord.", "Dit/dat zijn aanwijzend vnw."] },
      { q: "*'**De** hond rent.'* — Welke woordsoort is 'de'?", options: ["Lidwoord","Zelfst. naamwoord","Werkwoord","Voornaamwoord"], answer: 0, wrongHints: [null, "Hond is zn.", "Rent is ww.", "Niet."] },
      { q: "*'Op de **tafel**.'* — Welke woordsoort is 'tafel'?", options: ["Zelfstandig naamwoord","Werkwoord","Bijvoeglijk","Voornaamwoord"], answer: 0, wrongHints: [null, "Geen actie.", "Geen eigenschap.", "Niet."] },
      { q: "Welk **voorzetsel** in: 'Ik zit OP de stoel'?", options: ["op","ik","zit","de"], answer: 0, wrongHints: [null, "Voornaamwoord.", "Werkwoord.", "Lidwoord."] },
      { q: "*'Hij rent **snel**.'* Wat is 'snel'?", options: ["Bijwoord","Bijvoeglijk","Werkwoord","Zelfst. nw"], answer: 0, wrongHints: [null, "Bijvoeglijk staat bij zn.", "Geen actie.", "Geen ding."] },
      { q: "Wat is een **persoonlijk voornaamwoord**?", options: ["Woord dat een persoon vervangt, zoals ik of hij","Woord dat zegt van wie iets is, zoals mijn of jouw","Woord dat een plaats aangeeft, zoals op of onder","Woord dat iets over een werkwoord zegt, zoals snel of vaak"], answer: 0, wrongHints: [null, "Dat is een bezittelijk voornaamwoord.", "Dat is een voorzetsel.", "Dat is een bijwoord."] },
      { q: "*'Wij gaan **morgen** zwemmen.'* Wat is 'morgen'?", options: ["Bijwoord van tijd","Zelfst. nw","Voornaamwoord","Lidwoord"], answer: 0, wrongHints: [null, "Geen ding.", "Geen vervanging.", "Niet."] },
      { q: "**Hoeveel** woordsoorten kent het Nederlands ongeveer?", options: ["10","2","5","15"], answer: 0, wrongHints: [null, "Te weinig.", "Te weinig.", "Te veel."] },
      { q: "**Telwoord** in: 'Ik heb 5 boeken'?", options: ["5","ik","heb","boeken"], answer: 0, wrongHints: [null, "Voornaamwoord.", "Werkwoord.", "Zelfst. nw."] },
      { q: "Welke woorden zijn **voegwoorden**?", options: ["en/of/maar","de/het/een","ik/jij/hij","op/in/onder"], answer: 0, wrongHints: [null, "Lidwoorden.", "Voornaamwoorden.", "Voorzetsels."] },
      { q: "*'**Deze** pen is leuk.'* Wat is 'deze'?", options: ["Aanwijzend voornaamwoord","Bezittelijk vnw","Lidwoord","Bijwoord"], answer: 0, wrongHints: [null, "Niet bezit.", "Niet de/het/een.", "Niet hoe."] },
      { q: "**Tussenwerpsel** in: 'Au, dat doet pijn!'?", options: ["Au","dat","doet","pijn"], answer: 0, wrongHints: [null, "Voornaamwoord.", "Werkwoord.", "Zelfst. nw."] },
      { q: "Wat is een **werkwoord**?", options: ["Woord dat zegt wat iemand doet of is","Woord dat een persoon of ding noemt","Woord dat een eigenschap beschrijft","Woord waarmee je een vraag stelt"], answer: 0, wrongHints: [null, "Dat is een zelfstandig naamwoord.", "Dat is een bijvoeglijk naamwoord.", "Dat is een vragend voornaamwoord."] },
      { q: "*'In de **grote** stad.'* Wat is 'grote'?", options: ["Bijvoeglijk naamwoord","Werkwoord","Lidwoord","Bijwoord"], answer: 0, wrongHints: [null, "Geen actie.", "Niet.", "Niet bij ww."] },
      { q: "Wat is een **zelfstandig naamwoord**?", options: ["Woord voor een persoon, dier of ding","Woord voor een eigenschap","Woord voor een actie","Woord waarmee je een vraag stelt"], answer: 0, wrongHints: [null, "Dat is een bijvoeglijk naamwoord.", "Dat is een werkwoord.", "Dat is een vragend voornaamwoord."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const woordsoortenPo = {
  id: "woordsoorten-po",
  title: "Woordsoorten herkennen — Doorstroomtoets groep 5-8",
  emoji: "🔤",
  level: "groep5-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taalverzorging — woordsoorten",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
  ],
  intro:
    "Zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord, lidwoord, voornaamwoord. Doorstroomtoets-stijl. ~12 min.",
  triggerKeywords: [
    "woordsoorten","zelfstandig naamwoord","werkwoord","bijvoeglijk",
    "lidwoord","voornaamwoord","persoonlijk","bezittelijk","aanwijzend",
  ],
  chapters,
  steps,
};

export default woordsoortenPo;
