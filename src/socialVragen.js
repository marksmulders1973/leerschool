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
};

// Pak een vraag op id; null als 'ie niet bestaat.
export function getSocialVraag(id) {
  if (!id) return null;
  return SOCIAL_VRAGEN[id] || null;
}
