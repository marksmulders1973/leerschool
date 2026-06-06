// Social-vragen-pool voor de deep-link-trechter (/v/<id>).
//
// Concept (Mark 2026-06-04): op social staat een vraag + jingle + "geef hier
// je antwoord". De kijker tikt op leerkwartier.app/v/<id> en belandt DIRECT op
// diezelfde vraag, nu interactief (A/B/C/D) mét de 3-niveau-uitleg → ervaart de
// USP op het moment van de hoogste nieuwsgierigheid, en wordt daarna naar de
// gratis oefentoets / account genudged.
//
// REGEL: eigen vragen "in stijl van" de Doorstroomtoets (Cito-vragen zijn
// auteursrechtelijk — niet kopiëren). VMBO-examenvragen mogen authentiek
// (examenblad.nl = openbaar) als `bron` ingevuld is.
//
// Format per vraag: { id, vak, vraag, options[], answer(index),
//   wrongHints[] (null voor juiste, denkprikkel voor fout), uitlegPad:{stappen,niveaus},
//   bron? (alleen bij authentieke examenvraag) }

export const SOCIAL_VRAGEN = {
  // ── Pilot 1: breuk-van-een-geheel met "rest"-valkuil ──────
  "rekenpuzzel1": {
    vak: "rekenen",
    leerpadLink: { id: "breuken-po", title: "Breuken (groep 7-8)" },
    vraag: "In een klas zitten **28 kinderen**. **¾ deel** gaat met de bus op excursie, de rest loopt. **Hoeveel kinderen lopen er?**",
    options: ["7", "21", "4", "14"],
    answer: 0,
    wrongHints: [
      null,
      "Dat is het aantal dat mét de bus gaat — er werd gevraagd wie er lóópt.",
      "Reken eerst uit hoeveel kinderen ¾ deel zijn.",
      "Dat is de helft — maar het gaat om ¼ deel dat loopt.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Eerst de bus", tekst: "¾ van 28 = 28 ÷ 4 × 3 = 7 × 3 = 21 kinderen met de bus." },
        { titel: "Dan de rest", tekst: "De rest loopt: 28 − 21 = 7 kinderen. (Of: lopen is ¼ deel → 28 ÷ 4 = 7.)" },
      ],
      niveaus: {
        basis: "¾ gaat met de bus (21 kinderen). De rest is ¼ deel: 28 ÷ 4 = 7 kinderen lopen.",
        simpeler: "Verdeel 28 in 4 gelijke stukken: 28 ÷ 4 = 7 per stuk. Drie stukken gaan met de bus, één stuk (7) loopt.",
        nogSimpeler: "28 kinderen in 4 bakjes = 7 per bakje. Drie bakjes met de bus, één bakje loopt. Hoeveel in dat ene bakje?",
      },
    },
  },

  // ── Pilot 2: procenten-korting met "korting vs prijs"-valkuil ──
  "rekenpuzzel2": {
    vak: "rekenen",
    leerpadLink: { id: "procenten-po", title: "Procenten (groep 7-8)" },
    vraag: "Een jas kost **€60**. In de uitverkoop is er **25% korting**. **Hoeveel betaal je nu?**",
    options: ["€45", "€15", "€35", "€48"],
    answer: 0,
    wrongHints: [
      null,
      "Dat is alléén de korting — maar je moet het bedrag betalen dat overblijft.",
      "Reken nog eens: 25% van €60 is de korting, die haal je van €60 af.",
      "Bijna — maar 25% van 60 is geen €12.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Korting uitrekenen", tekst: "25% is een kwart. Een kwart van €60 = 60 ÷ 4 = €15 korting." },
        { titel: "Van de prijs af", tekst: "€60 − €15 = €45. Dat betaal je." },
      ],
      niveaus: {
        basis: "25% korting = een kwart eraf. Een kwart van €60 is €15. €60 − €15 = €45.",
        simpeler: "Verdeel €60 in 4 stukken van €15. Eén stukje (€15) gaat eraf, dus je betaalt 3 stukjes: €45.",
        nogSimpeler: "Een kwart van €60 is €15 korting. Wat houd je over van €60 als er €15 af gaat?",
      },
    },
  },

  // ── Examenvraag van de dag (4 jun) — maatschappijkunde, Staten-Generaal ──
  "maatschappij1": {
    vak: "maatschappijkunde",
    vraag: "In de **Staten-Generaal** zit een groep mensen die **namens de burgers** mag meebeslissen over de wetten. **Hoe noemen we die groep?**",
    options: ["De regering", "Het kabinet", "De stemmers", "De volksvertegenwoordigers"],
    answer: 3,
    wrongHints: [
      "De regering (koning + ministers) bestúurt het land — maar wie controleert hen namens de burgers?",
      "Het kabinet zijn de ministers en staatssecretarissen die besturen — niet de gekozen mensen die de burgers vertegenwoordigen.",
      "Burgers stemmen wél, maar 'stemmers' is geen groep die ín de Staten-Generaal zit te beslissen.",
      null,
    ],
    bron: "🎓 Echt examen VMBO-GL en TL maatschappijkunde 2024, tijdvak 1",
    uitlegPad: {
      stappen: [
        { titel: "Wat is de Staten-Generaal?", tekst: "De Staten-Generaal is de officiële naam voor de Eerste Kamer + Tweede Kamer samen. Daar worden wetten besproken en goedgekeurd." },
        { titel: "Wie zitten daar namens jou?", tekst: "De leden zijn gekozen door de burgers bij verkiezingen. Daarom heten ze volksvertegenwoordigers: ze vertegenwoordigen het volk." },
        { titel: "Verschil met de regering", tekst: "De regering (koning + ministers) en het kabinet (ministers + staatssecretarissen) bestúren het land. De volksvertegenwoordigers controleren hén — dat is de scheiding tussen besturen en controleren." },
      ],
      niveaus: {
        basis: "De Staten-Generaal = Eerste + Tweede Kamer. De mensen daar zijn gekozen door de burgers en beslissen namens hen mee over de wetten. Dat noemen we volksvertegenwoordigers (antwoord D).",
        simpeler: "Bij verkiezingen kies jij wie er voor jou in de Tweede Kamer gaat zitten. Die gekozen personen 'vertegenwoordigen' jou — vandaar volksvertegenwoordigers. De regering bestuurt; zij controleren de regering.",
        nogSimpeler: "Jij mag niet zelf elke wet bespreken, dus kies je iemand die dat vóór jou doet. Die persoon spreekt namens het volk = een volksvertegenwoordiger.",
      },
    },
  },

  // ── Pool-uitbreiding 2026-06-05: meer Cito-pijlers voor dagelijkse posts
  //    (taal, begrijpend lezen, spelling, studievaardigheden, rekenen). Eigen
  //    vragen "in stijl van" de Doorstroomtoets, elk gekoppeld aan een leerpad.

  "taal1": {
    vak: "taal",
    leerpadLink: { id: "doorstroomtoets-taal-g8", title: "Taal & woordenschat (groep 8)" },
    vraag: "Welk woord betekent ongeveer hetzelfde als **'reusachtig'**?",
    options: ["enorm", "stevig", "zeldzaam", "prachtig"],
    answer: 0,
    wrongHints: [
      null,
      "Stevig gaat over hoe sterk iets is — niet over hoe groot.",
      "Zeldzaam betekent dat iets weinig voorkomt. Denk aan de afmeting.",
      "Prachtig zegt iets over mooi zijn, niet over de grootte.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Wat betekent reusachtig?", tekst: "Denk aan een reus: die is heel erg groot. Reusachtig = heel erg groot." },
        { titel: "Welk woord past?", tekst: "'Enorm' betekent ook heel erg groot. Dat ligt het dichtst bij reusachtig." },
      ],
      niveaus: {
        basis: "Reusachtig betekent heel erg groot (zoals een reus). Het synoniem daarvan is 'enorm'.",
        simpeler: "Een reus is gigantisch groot. 'Enorm' betekent ook heel groot — dat is het juiste woord.",
        nogSimpeler: "Een reus is heel... groot. Welk woord betekent ook 'heel groot'?",
      },
    },
  },

  "begrijpendlezen1": {
    vak: "begrijpend lezen",
    leerpadLink: { id: "doorstroomtoets-taal-g8", title: "Begrijpend lezen (groep 8)" },
    vraag: "Lees: _'Bij onweer zie je eerst de bliksem en hoor je pas later de donder. Dat komt doordat licht veel sneller gaat dan geluid.'_\n\n**Waarom hoor je de donder later dan je de bliksem ziet?**",
    options: ["Omdat geluid langzamer is dan licht", "Omdat de donder verder weg is", "Omdat de bliksem feller is", "Omdat geluid niet door wolken kan"],
    answer: 0,
    wrongHints: [
      null,
      "De donder en bliksem komen van dezelfde plek. Lees waaróm het ene eerder is.",
      "Hoe fel iets is, zegt niets over wannéér je het hoort of ziet.",
      "In de tekst staat een andere reden — kijk naar het woord 'sneller'.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Zoek het antwoord in de tekst", tekst: "Bij een 'waarom'-vraag staat het antwoord vaak letterlijk in de tekst." },
        { titel: "Hier staat het", tekst: "'Licht gaat veel sneller dan geluid.' Daarom zie je de bliksem eerder dan je de donder hoort." },
      ],
      niveaus: {
        basis: "In de tekst staat het: licht gaat sneller dan geluid. Daarom komt het beeld (bliksem) eerder bij je dan het geluid (donder).",
        simpeler: "Het antwoord op 'waarom' staat in de tekst zelf: 'licht gaat sneller dan geluid'.",
        nogSimpeler: "Zoek in de tekst het woord 'sneller'. Wat gaat sneller — en wat hoor je daardoor later?",
      },
    },
  },

  "spelling1": {
    vak: "spelling",
    leerpadLink: { id: "doorstroomtoets-taal-g8", title: "Spelling & taalverzorging (groep 8)" },
    vraag: "Welke zin is **goed gespeld**?",
    options: ["Hij vindt het leuk.", "Hij vind het leuk.", "Hij vindt het leukt.", "Hij vint het leuk."],
    answer: 0,
    wrongHints: [
      null,
      "Bij 'hij' of 'zij' krijgt het werkwoord er nog iets bij. Denk aan 'hij loopt'.",
      "'Leuk' is een bijvoeglijk naamwoord — daar hoort geen -t bij.",
      "'Vint' bestaat niet: de stam van 'vinden' is 'vind'.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Stam + t", tekst: "De stam van 'vinden' is 'vind'. Bij 'hij/zij' komt er -t bij: vind + t = vindt." },
        { titel: "En 'leuk'?", tekst: "'Leuk' blijft gewoon 'leuk'. Dus: 'Hij vindt het leuk.'" },
      ],
      niveaus: {
        basis: "Regel: ik vind, hij/zij vindt (stam + t). 'Leuk' krijgt geen -t. Goed is: 'Hij vindt het leuk.'",
        simpeler: "Vergelijk met 'hij loopt': bij 'hij' eindigt het werkwoord op -t. Dus 'vindt'.",
        nogSimpeler: "Bij 'hij' komt er meestal een -t achter het werkwoord. Welke zin heeft 'vindt'?",
      },
    },
  },

  "studie1": {
    vak: "studievaardigheden",
    leerpadLink: { id: "doorstroomtoets-studievaardigheden-g8", title: "Tabellen & grafieken lezen (groep 8)" },
    vraag: "In een tabel staat de temperatuur: maandag **12°C**, dinsdag **9°C**, woensdag **15°C**, donderdag **7°C**. **Op welke dag was het het kóudst?**",
    options: ["donderdag", "dinsdag", "maandag", "woensdag"],
    answer: 0,
    wrongHints: [
      null,
      "9°C is koud, maar er is een dag met een nóg lager getal.",
      "Kijk naar het láágste getal in de rij.",
      "15°C is juist het warmst — je zoekt het koudst.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Koudst = laagste getal", tekst: "Het koudst betekent het laagste getal opzoeken." },
        { titel: "Vergelijk", tekst: "De getallen zijn 12, 9, 15 en 7. Het laagste is 7 — dat hoort bij donderdag." },
      ],
      niveaus: {
        basis: "Het koudst = het laagste getal. Van 12, 9, 15 en 7 is 7 het laagst. Dat is donderdag.",
        simpeler: "Zet de temperaturen op een rij en zoek het kleinste getal: 7 bij donderdag.",
        nogSimpeler: "Welk getal is het kleinst: 12, 9, 15 of 7? Bij welke dag hoort dat?",
      },
    },
  },

  "studie2": {
    vak: "studievaardigheden",
    leerpadLink: { id: "doorstroomtoets-studievaardigheden-g8", title: "Kaart & schaal (groep 8)" },
    vraag: "Op een kaart staat de schaal **1 : 100.000**. Dat betekent: **1 cm op de kaart = ... in het echt.**",
    options: ["1 kilometer", "100 meter", "100 kilometer", "10 meter"],
    answer: 0,
    wrongHints: [
      null,
      "100.000 cm is meer dan 100 meter. Reken nog eens om naar meters.",
      "Dat is veel te veel: 100.000 cm is geen 100 km.",
      "100.000 cm is veel meer dan 10 meter.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Wat zegt de schaal?", tekst: "1 : 100.000 betekent: 1 cm op de kaart = 100.000 cm in het echt." },
        { titel: "Reken om", tekst: "100.000 cm ÷ 100 = 1.000 m. En 1.000 m = 1 km." },
      ],
      niveaus: {
        basis: "1 : 100.000 → 1 cm = 100.000 cm echt. 100.000 cm = 1.000 m = 1 km.",
        simpeler: "Deel 100.000 cm door 100 → 1.000 m. Dat is 1 km.",
        nogSimpeler: "100.000 cm. Deel door 100 voor meters, dan door 1.000 voor kilometers. Wat komt eruit?",
      },
    },
  },

  "rekenen3": {
    vak: "rekenen",
    leerpadLink: { id: "doorstroomtoets-rekenen-g8", title: "Verhoudingen & redactiesommen (groep 8)" },
    vraag: "Voor **6 pannenkoeken** heb je **300 ml melk** nodig. **Hoeveel melk** heb je nodig voor **9 pannenkoeken?**",
    options: ["450 ml", "600 ml", "400 ml", "350 ml"],
    answer: 0,
    wrongHints: [
      null,
      "600 ml is voor 12 pannenkoeken (het dubbele) — maar je wilt er 9.",
      "Reken eerst uit hoeveel melk 1 pannenkoek kost.",
      "Voor 3 pannenkoeken extra komt er meer bij dan 50 ml.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Per pannenkoek", tekst: "300 ml ÷ 6 = 50 ml melk per pannenkoek." },
        { titel: "Voor 9 stuks", tekst: "9 × 50 ml = 450 ml." },
      ],
      niveaus: {
        basis: "Eerst per stuk: 300 ÷ 6 = 50 ml. Dan 9 × 50 = 450 ml.",
        simpeler: "1 pannenkoek = 50 ml melk (300 ÷ 6). Negen stuks: 9 × 50 = 450 ml.",
        nogSimpeler: "300 ml voor 6 = 50 ml per stuk. Hoeveel is 9 × 50?",
      },
    },
  },

  "rekenen4": {
    vak: "rekenen",
    leerpadLink: { id: "doorstroomtoets-rekenen-g8", title: "Meten, oppervlakte & omtrek (groep 8)" },
    vraag: "Een rechthoekige tuin is **8 meter lang** en **5 meter breed**. **Hoe groot is de oppervlakte?**",
    options: ["40 m²", "26 m²", "13 m²", "40 m"],
    answer: 0,
    wrongHints: [
      null,
      "26 m is de ómtrek (alle zijden bij elkaar), niet de oppervlakte.",
      "13 is lengte + breedte. Voor oppervlakte moet je ze niet optellen.",
      "Het getal klopt, maar oppervlakte meet je in m² (vierkante meter), niet in m.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Oppervlakte rechthoek", tekst: "Oppervlakte = lengte × breedte = 8 × 5 = 40." },
        { titel: "Let op de eenheid", tekst: "Oppervlakte schrijf je in m² (vierkante meter). Dus 40 m²." },
      ],
      niveaus: {
        basis: "Oppervlakte van een rechthoek = lengte × breedte = 8 × 5 = 40 m².",
        simpeler: "Lengte keer breedte: 8 × 5 = 40 m². (De omtrek zou 8+5+8+5 = 26 m zijn — let op het verschil.)",
        nogSimpeler: "Reken 8 × 5 uit. Oppervlakte schrijf je in m².",
      },
    },
  },

  // ── Pool-uitbreiding 2026-06-06: extra dagvragen + Threads-brandstof ──

  "begrijpendlezen2": {
    vak: "begrijpend lezen",
    leerpadLink: { id: "doorstroomtoets-taal-g8", title: "Begrijpend lezen (groep 8)" },
    vraag: "Lees: _'Bijen zijn heel belangrijk. Ze brengen stuifmeel van bloem naar bloem, waardoor planten vrucht kunnen maken. Zonder bijen zouden veel groenten en fruit verdwijnen. Daarom maken mensen zich zorgen nu er steeds minder bijen zijn.'_\n\n**Wat is de hoofdgedachte van deze tekst?**",
    options: ["Bijen maken honing", "Bijen zijn belangrijk voor planten en ons eten", "Er komen steeds meer bloemen bij", "Mensen houden van fruit"],
    answer: 1,
    wrongHints: [
      "Honing wordt niet eens genoemd — kijk waar de tekst écht over gaat.",
      null,
      "De tekst zegt juist dat er minder bíjen zijn, niet meer bloemen.",
      "Dat is hooguit een detail, niet waar de hele tekst over gaat.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Wat is een hoofdgedachte?", tekst: "De hoofdgedachte is waar de HELE tekst over gaat — het belangrijkste, niet één detail." },
        { titel: "De rode draad", tekst: "Elke zin gaat over hoe belangrijk bijen zijn voor planten en ons eten. Dat is dus de hoofdgedachte." },
      ],
      niveaus: {
        basis: "De hoofdgedachte is de rode draad door alle zinnen. Hier draait alles om: bijen zijn belangrijk voor planten en ons eten (B).",
        simpeler: "Vraag jezelf: waar gaat het in ELKE zin over? Steeds over hoe belangrijk bijen zijn. Dat is de hoofdgedachte.",
        nogSimpeler: "Waar gaat de hele tekst over? Over bijen die belangrijk zijn. Antwoord B.",
      },
    },
  },

  "begrijpendlezen3": {
    vak: "begrijpend lezen",
    leerpadLink: { id: "doorstroomtoets-taal-g8", title: "Begrijpend lezen (groep 8)" },
    vraag: "Lees: _'De oude brug was bouwvallig. Niemand durfde er nog overheen te lopen, bang dat hij zou instorten.'_\n\n**Wat betekent het woord 'bouwvallig'?**",
    options: ["gloednieuw", "op instorten / vervallen", "heel breed", "gloeiend heet"],
    answer: 1,
    wrongHints: [
      "Lees verder: niemand durft erover omdat hij kan instorten — klinkt dat als nieuw?",
      null,
      "Over de breedte staat niets; het gaat over de staat van de brug.",
      "Temperatuur speelt hier geen rol.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Gebruik de omgeving", tekst: "Je hoeft het woord niet te kennen. De zin eromheen geeft de betekenis: 'bang dat hij zou instorten'." },
        { titel: "Dus...", tekst: "Een brug waarvan je bang bent dat hij instort, is vervallen / op instorten. Dat is 'bouwvallig'." },
      ],
      niveaus: {
        basis: "Lees de context: 'bang dat hij zou instorten'. Bouwvallig = vervallen, op instorten (B).",
        simpeler: "Je kent het woord misschien niet — kijk naar de zin ernaast. Die zegt: kan instorten. Dus bouwvallig = bijna kapot.",
        nogSimpeler: "De brug kan instorten → bouwvallig betekent: bijna kapot. Antwoord B.",
      },
    },
  },

  "rekenen5": {
    vak: "rekenen",
    leerpadLink: { id: "doorstroomtoets-rekenen-g8", title: "Rekenen met geld & kommagetallen (groep 8)" },
    vraag: "Je koopt een schrift van **€1,75** en een pen van **€0,90**. Je betaalt met **€5**. **Hoeveel krijg je terug?**",
    options: ["€2,35", "€2,65", "€3,35", "€1,35"],
    answer: 0,
    wrongHints: [
      null,
      "Je trok één bedrag te weinig af — tel eerst schrift én pen samen.",
      "Dat is €5 − €1,75; je vergat de pen erbij op te tellen.",
      "Reken nog eens: €1,75 + €0,90 is meer dan je dacht.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Eerst samen", tekst: "€1,75 + €0,90 = €2,65 (samen betaald)." },
        { titel: "Dan terug", tekst: "€5,00 − €2,65 = €2,35 terug." },
      ],
      niveaus: {
        basis: "Tel eerst op: 1,75 + 0,90 = 2,65. Dan 5,00 − 2,65 = 2,35.",
        simpeler: "Twee dingen samen kosten €2,65. Je gaf €5. Wat blijft over? 5 − 2,65 = 2,35.",
        nogSimpeler: "Samen €2,65. Van €5 af: €2,35 terug.",
      },
    },
  },

  "rekenen6": {
    vak: "rekenen",
    leerpadLink: { id: "doorstroomtoets-rekenen-g8", title: "Rekenen met tijd (groep 8)" },
    vraag: "Een film begint om **19:45** en duurt **1 uur en 30 minuten**. **Hoe laat is de film afgelopen?**",
    options: ["21:15", "20:15", "21:45", "21:00"],
    answer: 0,
    wrongHints: [
      null,
      "Je telde maar 30 minuten op — er komt ook nog een heel uur bij.",
      "Je telde 2 uur op in plaats van 1 uur en 30 minuten.",
      "Tel de 30 minuten ook mee, ná het hele uur.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Eerst het hele uur", tekst: "19:45 + 1 uur = 20:45." },
        { titel: "Dan de 30 minuten", tekst: "20:45 + 30 minuten = 21:15." },
      ],
      niveaus: {
        basis: "19:45 + 1 uur = 20:45. Dan + 30 min = 21:15.",
        simpeler: "Tel eerst het uur erbij (20:45), dan de halve (30 min) erbij: 21:15.",
        nogSimpeler: "19:45 → +1u → 20:45 → +30min → 21:15.",
      },
    },
  },

  "taal2": {
    vak: "taal",
    leerpadLink: { id: "doorstroomtoets-taal-g8", title: "Taal & uitdrukkingen (groep 8)" },
    vraag: "Wat betekent de uitdrukking **'de kat uit de boom kijken'**?",
    options: ["Eerst rustig afwachten hoe iets loopt", "Een dier uit een boom halen", "Heel snel een beslissing nemen", "Bang zijn voor katten"],
    answer: 0,
    wrongHints: [
      null,
      "Een uitdrukking betekent meestal niet letterlijk wat er staat.",
      "Het is juist het tegenovergestelde van snel.",
      "Het gaat niet echt over katten.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Niet letterlijk", tekst: "Een uitdrukking heeft een verborgen betekenis, niet de letterlijke." },
        { titel: "Betekenis", tekst: "'De kat uit de boom kijken' = eerst afwachten en kijken hoe iets gaat vóór je iets doet." },
      ],
      niveaus: {
        basis: "Een uitdrukking is niet letterlijk. 'De kat uit de boom kijken' betekent: eerst rustig afwachten (A).",
        simpeler: "Het gaat niet echt over een kat. Het betekent: je doet nog niks, je kijkt eerst de situatie aan.",
        nogSimpeler: "Het betekent: eerst afwachten. Antwoord A.",
      },
    },
  },

  "spelling2": {
    vak: "spelling",
    leerpadLink: { id: "doorstroomtoets-taal-g8", title: "Spelling & werkwoorden (groep 8)" },
    vraag: "Welke zin is **goed gespeld**?",
    options: ["Wat is er gisteren gebeurd?", "Wat is er gisteren gebeurt?", "Wat is er gisteren gebeurdt?", "Wat is er gisteren gebeird?"],
    answer: 0,
    wrongHints: [
      null,
      "'Er is gebeurd' is voltooid — net als 'gewerkt', niet 'werkt'. Welke uitgang past dan?",
      "Een voltooid deelwoord eindigt nooit op -dt.",
      "Let op de klank: het is 'eu', niet 'ei'.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Voltooid deelwoord", tekst: "'Wat is er gebeurd?' is een voltooid deelwoord, net als gewerkt en gespeeld. Die eindigen op -d of -t, nooit op -dt." },
        { titel: "d of t?", tekst: "Stam van 'gebeuren' is 'gebeur'. De 'r' zit niet in 't kofschip → voltooid deelwoord met -d: gebeurd." },
      ],
      niveaus: {
        basis: "'Gebeurd' is een voltooid deelwoord (zoals 'gewerkt'). Stam 'gebeur' + d = gebeurd. Antwoord A.",
        simpeler: "Vergelijk met 'gespeeld' en 'gewerkt': 'er is gebeurd' hoort in dat rijtje, met -d aan het eind.",
        nogSimpeler: "Het is 'gebeurd' (zoals 'gewerkt'). Antwoord A.",
      },
    },
  },

  "studie3": {
    vak: "studievaardigheden",
    leerpadLink: { id: "doorstroomtoets-studievaardigheden-g8", title: "Grafieken lezen (groep 8)" },
    vraag: "Een staafdiagram toont verkochte ijsjes: maandag **20**, dinsdag **35**, woensdag **50**, donderdag **15**. **Op welke dag werden de meeste ijsjes verkocht?**",
    options: ["woensdag", "dinsdag", "maandag", "donderdag"],
    answer: 0,
    wrongHints: [
      null,
      "35 is veel, maar er is een dag met een nóg hogere staaf.",
      "20 is niet de hoogste — zoek het grootste getal.",
      "15 is juist het minst.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Meeste = hoogste staaf", tekst: "De 'meeste' hoort bij de hoogste staaf, oftewel het grootste getal." },
        { titel: "Vergelijk", tekst: "20, 35, 50 en 15 → het grootste is 50, en dat is woensdag." },
      ],
      niveaus: {
        basis: "Meeste = grootste getal. Van 20, 35, 50, 15 is 50 het grootst: woensdag.",
        simpeler: "Zoek de hoogste staaf (= grootste getal). Dat is 50, op woensdag.",
        nogSimpeler: "Grootste getal = 50 = woensdag.",
      },
    },
  },

  "studie4": {
    vak: "studievaardigheden",
    leerpadLink: { id: "doorstroomtoets-studievaardigheden-g8", title: "Woordenboek & alfabet (groep 8)" },
    vraag: "In een woordenboek staan woorden op alfabetische volgorde. **Welk woord staat het éérst?**",
    options: ["appel", "auto", "ananas", "abrikoos"],
    answer: 3,
    wrongHints: [
      "Appel begint met 'ap' — er is een woord dat met 'ab' begint, en dat komt eerder.",
      "Auto begint met 'au' — dat is juist laat in het alfabet.",
      "Ananas begint met 'an'; 'ab' komt daar nog vóór.",
      null,
    ],
    uitlegPad: {
      stappen: [
        { titel: "Eerste letter gelijk", tekst: "Alle woorden beginnen met 'a'. Kijk dan naar de TWEEDE letter." },
        { titel: "Tweede letter", tekst: "b (abrikoos), n (ananas), p (appel), u (auto). In het alfabet komt 'b' het eerst → abrikoos." },
      ],
      niveaus: {
        basis: "Alle met 'a' → kijk naar de 2e letter: b, n, p, u. 'b' komt eerst → abrikoos (D).",
        simpeler: "De eerste letter is overal 'a'. Vergelijk de tweede letter: b komt vóór n, p en u. Dus abrikoos.",
        nogSimpeler: "Tweede letters: b, n, p, u. b is eerst → abrikoos.",
      },
    },
  },

  // ── Pool-uitbreiding 2026-06-06 (deel 2) ──

  "rekenen7": {
    vak: "rekenen",
    leerpadLink: { id: "breuken-po", title: "Breuken vergelijken (groep 7-8)" },
    vraag: "Welke breuk is het **grootst**?",
    options: ["½", "⅓", "¼", "⅕"],
    answer: 0,
    wrongHints: [
      null,
      "⅓ is kleiner dan ½ — bij breuken met een 1 bovenaan geldt: hoe groter het onderste getal, hoe kleiner de breuk.",
      "¼ betekent: in 4 stukjes. Die zijn kleiner dan in 2 stukjes.",
      "⅕ is juist het kleinst van deze rij.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Bovenste getal is overal 1", tekst: "Bij ½, ⅓, ¼ en ⅕ is het bovenste getal (de teller) steeds 1. Dan bepaalt het onderste getal de grootte." },
        { titel: "Meer stukjes = kleiner", tekst: "Een taart in 2 stukken → grote stukken. In 5 stukken → kleine stukjes. Dus ½ is het grootst." },
      ],
      niveaus: {
        basis: "Bij breuken met een 1 bovenaan: hoe kleiner het onderste getal, hoe groter de breuk. ½ heeft het kleinste onderste getal → grootst.",
        simpeler: "Denk aan een taart: in 2 delen zijn de stukken groter dan in 5 delen. Dus ½ > ⅓ > ¼ > ⅕.",
        nogSimpeler: "½ is het meeste. Antwoord A.",
      },
    },
  },

  "taal3": {
    vak: "taal",
    leerpadLink: { id: "doorstroomtoets-taal-g8", title: "Woordenschat & tegenstellingen (groep 8)" },
    vraag: "Wat is het **tegenovergestelde** van 'tijdelijk'?",
    options: ["blijvend", "kortstondig", "langzaam", "plotseling"],
    answer: 0,
    wrongHints: [
      null,
      "Kortstondig betekent juist bijna hetzelfde als tijdelijk (kort).",
      "Langzaam gaat over snelheid, niet over hoe lang iets duurt.",
      "Plotseling gaat over hoe iets begint, niet over de duur.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Wat betekent tijdelijk?", tekst: "Tijdelijk = voor een korte tijd, niet voor altijd." },
        { titel: "Het tegenovergestelde", tekst: "Niet voor even, maar voor altijd = blijvend." },
      ],
      niveaus: {
        basis: "Tijdelijk = voor even. Het tegenovergestelde is 'blijvend' (voor altijd). Antwoord A.",
        simpeler: "Tijdelijk betekent kort / niet voor altijd. Het tegenovergestelde is iets dat wél blijft: blijvend.",
        nogSimpeler: "Tijdelijk ↔ blijvend. Antwoord A.",
      },
    },
  },

  "begrijpendlezen4": {
    vak: "begrijpend lezen",
    leerpadLink: { id: "doorstroomtoets-taal-g8", title: "Begrijpend lezen — verbanden (groep 8)" },
    vraag: "Lees: _'Tim had de hele week hard getraind. Op zaterdag won hij de wedstrijd.'_\n\n**Welk verband is er tussen de twee zinnen?**",
    options: ["Doordat hij hard trainde, won hij", "Hij won, dus daarna ging hij trainen", "Er is geen verband", "Hij verloor de wedstrijd"],
    answer: 0,
    wrongHints: [
      null,
      "Kijk naar de volgorde: eerst trainen, dáárna winnen. Wat is dan de oorzaak?",
      "De twee zinnen horen wél bij elkaar — trainen en winnen.",
      "In de tekst staat dat hij wón, niet verloor.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Oorzaak en gevolg", tekst: "De ene zin is de oorzaak, de andere het gevolg. Eerst hard trainen (oorzaak), daarna winnen (gevolg)." },
        { titel: "Het verband", tekst: "Doordat Tim hard trainde, won hij. Dat is een oorzaak-gevolg-verband." },
      ],
      niveaus: {
        basis: "Eerst trainen, dan winnen: het trainen is de oorzaak van het winnen. Antwoord A.",
        simpeler: "Vraag: waaróm won hij? Omdat hij hard trainde. Trainen → winnen.",
        nogSimpeler: "Hard trainen zorgde dat hij won. Antwoord A.",
      },
    },
  },

  "studie5": {
    vak: "studievaardigheden",
    leerpadLink: { id: "doorstroomtoets-studievaardigheden-g8", title: "Kaartlezen & windrichtingen (groep 8)" },
    vraag: "Op een kaart wijst de pijl van de windroos naar **boven**. **Welke windrichting is dat meestal?**",
    options: ["Het noorden", "Het zuiden", "Het oosten", "Het westen"],
    answer: 0,
    wrongHints: [
      null,
      "Het zuiden ligt op een kaart juist onderaan.",
      "Het oosten ligt rechts op de kaart.",
      "Het westen ligt links op de kaart.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "De windroos", tekst: "Op bijna elke kaart wijst 'boven' naar het noorden. Dat is een vaste afspraak." },
        { titel: "Onthouden", tekst: "Boven = noord, onder = zuid, rechts = oost, links = west." },
      ],
      niveaus: {
        basis: "Op een kaart is 'boven' het noorden. De pijl naar boven = het noorden (A).",
        simpeler: "Vaste afspraak: de bovenkant van een kaart is het noorden.",
        nogSimpeler: "Boven op de kaart = noorden. Antwoord A.",
      },
    },
  },

  // ── Pool-uitbreiding 2026-06-06 (deel 3) ──

  "rekenen8": {
    vak: "rekenen",
    leerpadLink: { id: "doorstroomtoets-rekenen-g8", title: "Vermenigvuldigen & redactiesommen (groep 7-8)" },
    vraag: "In een doos zitten **6 rijen** met elk **8 koekjes**. **Hoeveel koekjes zijn dat in totaal?**",
    options: ["48", "14", "42", "56"],
    answer: 0,
    wrongHints: [
      null,
      "Je telde 6 + 8 op — maar bij 'rijen × per rij' moet je vermenigvuldigen.",
      "Bijna: 6 × 8 is niet 42.",
      "Dat is 7 × 8; tel de rijen nog eens.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Rijen × per rij", tekst: "6 rijen van 8 koekjes = 6 × 8." },
        { titel: "Uitrekenen", tekst: "6 × 8 = 48 koekjes." },
      ],
      niveaus: {
        basis: "6 rijen × 8 per rij = 6 × 8 = 48.",
        simpeler: "Elke rij heeft 8 koekjes. Er zijn 6 rijen. 6 keer 8 = 48.",
        nogSimpeler: "6 × 8 = 48.",
      },
    },
  },

  "rekenen9": {
    vak: "rekenen",
    leerpadLink: { id: "doorstroomtoets-rekenen-g8", title: "Kommagetallen afronden (groep 8)" },
    vraag: "Rond **3,7** af op een **heel getal**.",
    options: ["4", "3", "3,5", "37"],
    answer: 0,
    wrongHints: [
      null,
      "3,7 ligt dichter bij 4 dan bij 3 — kijk naar het cijfer achter de komma.",
      "Afronden op een heel getal betekent: geen komma meer.",
      "Je hebt de komma weggelaten in plaats van afgerond.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Kijk achter de komma", tekst: "Het cijfer achter de komma is 7. Bij 5 of meer rond je naar boven af." },
        { titel: "Naar boven", tekst: "7 is meer dan 5, dus 3,7 wordt 4." },
      ],
      niveaus: {
        basis: "Achter de komma staat 7 (= 5 of meer) → naar boven afronden: 3,7 wordt 4.",
        simpeler: "3,7 ligt bijna bij 4. Het cijfer achter de komma (7) is groot, dus afronden naar boven: 4.",
        nogSimpeler: "3,7 → dichtstbij is 4.",
      },
    },
  },

  "spelling3": {
    vak: "spelling",
    leerpadLink: { id: "doorstroomtoets-taal-g8", title: "Werkwoordspelling (groep 8)" },
    vraag: "Welke zin is **goed gespeld**?",
    options: ["Wat vind jij ervan?", "Wat vindt jij ervan?", "Wat vint jij ervan?", "Wat viend jij ervan?"],
    answer: 0,
    wrongHints: [
      null,
      "Let op: als 'jij' ACHTER het werkwoord staat, valt de -t weg!",
      "De stam is 'vind', niet 'vint'.",
      "Let op de spelling: het is gewoon 'vind'.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Jij achter het werkwoord", tekst: "Normaal: 'jij vindt'. Maar als 'jij' ACHTER het werkwoord komt (zoals in een vraag), valt de -t weg: 'vind jij'." },
        { titel: "Dus", tekst: "'Wat vind jij ervan?' is goed gespeld." },
      ],
      niveaus: {
        basis: "Bij 'jij' áchter het werkwoord valt de -t weg: 'vind jij' (niet 'vindt jij'). Antwoord A.",
        simpeler: "Vergelijk: 'jij vindt' (jij vooraan, mét t) maar 'vind jij?' (jij achteraan, zónder t).",
        nogSimpeler: "'Vind jij' — zonder t. Antwoord A.",
      },
    },
  },

  "begrijpendlezen5": {
    vak: "begrijpend lezen",
    leerpadLink: { id: "doorstroomtoets-taal-g8", title: "Feit en mening (groep 8)" },
    vraag: "Welke zin is een **mening** (en geen feit)?",
    options: ["Voetbal is de leukste sport die er is", "Een voetbalwedstrijd duurt 90 minuten", "Een voetbalteam bestaat uit 11 spelers", "Een voetbal is rond"],
    answer: 0,
    wrongHints: [
      null,
      "Dat kun je op de klok nameten — dat is een feit.",
      "Dat is een vaste regel die altijd klopt — een feit.",
      "Dat kun je zien en controleren — een feit.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Feit of mening?", tekst: "Een feit kun je controleren (waar voor iedereen). Een mening is wat iemand vindt — daar kun je het oneens mee zijn." },
        { titel: "Welke is een mening?", tekst: "'Voetbal is de leukste sport' vindt niet iedereen. Dat is dus een mening." },
      ],
      niveaus: {
        basis: "Een mening is wat iemand vindt; daar kun je het oneens mee zijn. 'Voetbal is de leukste sport' is een mening (A).",
        simpeler: "Kun je het nameten of controleren? Dan is het een feit. 'Leukste sport' kun je niet meten — dat is een mening.",
        nogSimpeler: "'Leukste' = mening. Antwoord A.",
      },
    },
  },

  "studie6": {
    vak: "studievaardigheden",
    leerpadLink: { id: "doorstroomtoets-studievaardigheden-g8", title: "Inhoudsopgave & opzoeken (groep 8)" },
    vraag: "In een inhoudsopgave staat: _Hoofdstuk 3 — Vulkanen ........ blz. 24_. **Wat betekent dit?**",
    options: ["Hoofdstuk 3 over vulkanen begint op bladzijde 24", "Er bestaan 24 vulkanen", "Hoofdstuk 24 gaat over vulkanen", "Je moet 24 bladzijden lezen"],
    answer: 0,
    wrongHints: [
      null,
      "24 is een bladzijdenummer, niet een aantal vulkanen.",
      "3 is het hoofdstuknummer, 24 de bladzijde.",
      "24 is waar het hoofdstuk begint, niet hoeveel je moet lezen.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Wat is een inhoudsopgave?", tekst: "Die laat zien WAAR je iets vindt: welk hoofdstuk en op welke bladzijde het begint." },
        { titel: "Lezen", tekst: "Hoofdstuk 3 (Vulkanen) begint op bladzijde 24." },
      ],
      niveaus: {
        basis: "Een inhoudsopgave zegt waar iets begint: hoofdstuk 3 over vulkanen start op bladzijde 24 (A).",
        simpeler: "Het getal achteraan is het bladzijdenummer waar het hoofdstuk begint. Dus: blz. 24.",
        nogSimpeler: "Hoofdstuk 3 begint op blz. 24. Antwoord A.",
      },
    },
  },

  "taal4": {
    vak: "taal",
    leerpadLink: { id: "doorstroomtoets-taal-g8", title: "Uitdrukkingen (groep 8)" },
    vraag: "Wat betekent **'ergens een hekel aan hebben'**?",
    options: ["Iets echt niet leuk vinden", "Ergens heel goed in zijn", "Iets heel graag willen", "Ergens bang voor zijn"],
    answer: 0,
    wrongHints: [
      null,
      "Dat zou betekenen dat je het juist leuk vindt — het is andersom.",
      "Een hekel is geen verlangen; het is het tegenovergestelde.",
      "Het gaat niet om angst, maar om iets niet leuk vinden.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Betekenis", tekst: "'Een hekel aan iets hebben' = iets echt niet leuk vinden, het vervelend vinden." },
      ],
      niveaus: {
        basis: "'Een hekel aan iets hebben' betekent: iets echt niet leuk vinden (A).",
        simpeler: "Als je een hekel aan iets hebt, baal je ervan / vind je het naar.",
        nogSimpeler: "Hekel = niet leuk vinden. Antwoord A.",
      },
    },
  },
};

// Pak een vraag op id; null als 'ie niet bestaat.
export function getSocialVraag(id) {
  if (!id) return null;
  return SOCIAL_VRAGEN[id] || null;
}

// Deterministische "vraag van de dag"-id: iedereen ziet op dezelfde dag dezelfde
// vraag, die per dag door de pool rouleert. Gebruikt door VraagVanDeDag (in-app)
// én de /vandaag-funnel-URL (deelbaar op social).
export function vraagVanVandaagId() {
  const ids = Object.keys(SOCIAL_VRAGEN);
  if (!ids.length) return null;
  const d = new Date();
  const dagNr = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  return ids[((dagNr % ids.length) + ids.length) % ids.length];
}
