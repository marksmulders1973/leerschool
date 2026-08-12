// Leerpad: Verkeer — veilig op straat en op de fiets (groep 4).
// Mark 12 aug 2026: "alles met 'hieraan bouwen we' oppakken" — verkeer had
// alleen voorrang-basis-po (groep 5-8). Dit pad is de start: oversteken,
// stoep/fietspad, verkeerslichten, fietsregels en de eerste borden.
// Feiten-check (memory verkeersles-feitcheck): alle regels volgen de echte
// verkeersregels — kijk links-rechts-links, fietslicht wit/geel voor + rood
// achter, borden kloppen met het RVV (fietspad = rond blauw, zebra-bord =
// blauw vierkant, waarschuwing = driehoek met rode rand, stopbord = rood
// achtkant). Veilig en neutraal: geen enge voorbeelden.

const stepEmojis = ["🚸", "🚶", "🚦", "🚲", "🪧"];

const chapters = [
  { letter: "A", title: "Oversteken", emoji: "🚸", from: 0, to: 0 },
  { letter: "B", title: "Stoep, fietspad en de weg", emoji: "🚶", from: 1, to: 1 },
  { letter: "C", title: "Verkeerslichten", emoji: "🚦", from: 2, to: 2 },
  { letter: "D", title: "Op de fiets", emoji: "🚲", from: 3, to: 3 },
  { letter: "E", title: "Borden herkennen", emoji: "🪧", from: 4, to: 4 },
];

const steps = [
  // ─── A. Oversteken ────────────────────────────────────────
  {
    title: "Oversteken — stop, kijk, luister",
    explanation:
      "Zo steek je veilig over:\n\n1. **Stop** bij de rand van de stoep.\n2. **Kijk** naar links, dan naar rechts, en dan nóg een keer naar links.\n3. **Luister** ook — soms hoor je een auto eerder dan je hem ziet.\n4. Is er niets? **Loop rustig** recht naar de overkant. Niet rennen!\n\nWaarom eerst naar links? Auto's op jouw helft van de weg komen **van links**. Die zijn het dichtst bij.\n\nHet allerveiligst oversteken doe je op een **zebrapad** of bij een **stoplicht**.",
    checks: [
      {
        q: "Je wilt oversteken. Wat doe je **eerst**?",
        options: ["stoppen bij de rand van de stoep", "hard naar de overkant rennen", "meteen de weg op lopen", "je ogen dichtdoen"],
        answer: 0,
        wrongHints: [null, "Rennen is juist gevaarlijk — wat doe je vóór het lopen?", "Eerst iets anders doen — wat?", "Je moet juist goed kunnen zien."],
        uitlegPad: {
          stappen: [{ titel: "Stap 1", tekst: "Eerst **stoppen** bij de stoeprand. Dan pas kijken en oversteken. Stop — kijk — luister — loop." }],
          niveaus: { basis: "Eerst stoppen bij de stoeprand.", simpeler: "Stop… kijk… luister… loop!", nogSimpeler: "stoppen" },
        },
      },
      {
        q: "Hoe kijk je goed voordat je oversteekt?",
        options: ["links, rechts, en nog een keer links", "alleen naar rechts", "alleen omhoog", "alleen achter je"],
        answer: 0,
        wrongHints: [null, "Van welke kant komt de auto die het dichtst bij je is?", "Auto's rijden op de weg, niet in de lucht.", "Het verkeer komt van opzij."],
        uitlegPad: {
          stappen: [{ titel: "Links-rechts-links", tekst: "Kijk **links** (daar komen de dichtstbijzijnde auto's vandaan), dan **rechts**, dan nóg een keer **links**. Dan weet je het zeker." }],
          niveaus: { basis: "Links, rechts, en nog eens links kijken.", simpeler: "Kijk naar twee kanten — links het vaakst.", nogSimpeler: "links-rechts-links" },
        },
      },
      {
        q: "Waar kun je het **veiligst** oversteken?",
        options: ["op een zebrapad", "tussen geparkeerde auto's door", "in een bocht", "waar de auto's hard rijden"],
        answer: 0,
        wrongHints: [null, "Kunnen automobilisten jou daar goed zien?", "Kun je daar de weg goed overzien?", "Klinkt dat veilig?"],
        uitlegPad: {
          stappen: [{ titel: "Zebrapad", tekst: "Op een **zebrapad** (de witte strepen) verwachten automobilisten dat er mensen oversteken. Ze moeten daar voor jou wachten. Maar: kijk altijd zelf of ze écht stoppen!" }],
          theorie: "Regel: auto's moeten wachten voor mensen die op het zebrapad lopen of net gaan oversteken. Toch altijd eerst kijken — niet iedereen let goed op.",
          niveaus: { basis: "Het zebrapad is de veiligste plek.", simpeler: "Zoek de witte strepen op de weg.", nogSimpeler: "zebrapad" },
        },
      },
      {
        q: "Je staat bij het zebrapad. Er komt een auto aan. Wat doe je?",
        options: ["wachten en kijken of de auto echt stopt", "snel rennen, hij stopt heus wel", "met je rug naar de auto gaan staan", "midden op de weg blijven staan"],
        answer: 0,
        wrongHints: [null, "Weet je zeker dat de bestuurder jou heeft gezien?", "Je wilt de auto juist goed zien.", "Op de weg blijven staan is nooit het plan."],
        uitlegPad: {
          stappen: [{ titel: "Oogcontact", tekst: "Wacht even en **kijk of de auto echt stopt**. Zie je dat de bestuurder jou ziet en afremt? Dan pas rustig oversteken." }],
          niveaus: { basis: "Eerst kijken of de auto echt stopt.", simpeler: "Pas lopen als de auto stilstaat.", nogSimpeler: "wachten en kijken" },
        },
      },
    ],
  },

  // ─── B. Stoep, fietspad, weg ──────────────────────────────
  {
    title: "Stoep, fietspad en de weg — wie loopt en rijdt waar?",
    explanation:
      "De straat is verdeeld. Iedereen heeft een eigen plek:\n\n• **Stoep** → hier **loop** je. Lekker veilig, auto's mogen hier niet komen.\n• **Fietspad** → hier **fiets** je. Vaak rood of met een fiets-bord.\n• **Weg** → hier rijden **auto's**. Is er geen fietspad? Dan fiets je **rechts** op de weg.\n\n**Onthoud**: lopen op de stoep, fietsen op het fietspad, en altijd **rechts houden** op de fiets.",
    checks: [
      {
        q: "Waar **loop** je als er een stoep is?",
        options: ["op de stoep", "op het fietspad", "midden op de weg", "waar je maar wilt"],
        answer: 0,
        wrongHints: [null, "Dat is voor de fietsers.", "Daar rijden de auto's.", "Er is één plek speciaal voor lopers."],
        uitlegPad: {
          stappen: [{ titel: "De stoep is voor jou", tekst: "De **stoep** is de veilige strook voor mensen die lopen. Auto's en fietsers horen daar niet." }],
          niveaus: { basis: "Lopen doe je op de stoep.", simpeler: "De stoep is voor voeten.", nogSimpeler: "op de stoep" },
        },
      },
      {
        q: "Aan welke kant van het fietspad fiets je?",
        options: ["rechts", "links", "in het midden", "dat maakt niet uit"],
        answer: 0,
        wrongHints: [null, "Daar komen de fietsers van de andere kant!", "Dan kan niemand je voorbij.", "Er is wél een regel voor."],
        uitlegPad: {
          stappen: [{ titel: "Rechts houden", tekst: "In Nederland rijdt iedereen **rechts** — auto's én fietsers. Zo botst je niet tegen fietsers die je tegemoetkomen." }],
          niveaus: { basis: "Je fietst rechts.", simpeler: "Zelfde kant als de auto's: rechts.", nogSimpeler: "rechts" },
        },
      },
      {
        q: "Er is **geen fietspad**. Waar fiets je dan?",
        options: ["rechts op de weg", "op de stoep", "links op de weg", "dan mag je niet fietsen"],
        answer: 0,
        wrongHints: [null, "De stoep is voor mensen die lopen.", "Daar komt het verkeer je tegemoet.", "Fietsen mag daar wél — maar waar precies?"],
        uitlegPad: {
          stappen: [{ titel: "Geen fietspad?", tekst: "Dan fiets je op de **weg**, netjes **rechts**. De stoep blijft voor de lopers." }],
          niveaus: { basis: "Zonder fietspad: rechts op de weg.", simpeler: "Op de weg, aan de rechterkant.", nogSimpeler: "rechts op de weg" },
        },
      },
      {
        q: "Waarom is de stoep het veiligst om te lopen?",
        options: ["auto's mogen daar niet rijden", "je mag er rennen", "hij is mooi grijs", "hij is altijd schoon"],
        answer: 0,
        wrongHints: [null, "Dat mag, maar dáárom is hij niet veilig.", "Gaat het om de kleur?", "Gaat het om schoon zijn?"],
        uitlegPad: {
          stappen: [{ titel: "Eigen plek", tekst: "Op de stoep komen **geen auto's**. Daarom kun je daar veilig lopen, ook als het druk is op de weg." }],
          niveaus: { basis: "Op de stoep rijden geen auto's.", simpeler: "Stoep = geen auto's = veilig.", nogSimpeler: "geen auto's" },
        },
      },
    ],
  },

  // ─── C. Verkeerslichten ───────────────────────────────────
  {
    title: "Verkeerslichten — rood, geel, groen",
    explanation:
      "Een **verkeerslicht** (stoplicht) regelt wie er mag gaan.\n\nVoor auto's en fietsers:\n• **Rood** = stoppen. Altijd.\n• **Geel (oranje)** = stop, als dat nog veilig kan.\n• **Groen** = je mag gaan. Maar kijk eerst nog even goed!\n\nVoor lopers is er een eigen licht met een **poppetje**:\n• **Rood poppetje** = wachten op de stoep.\n• **Groen poppetje** = je mag oversteken. Blijf wel opletten.\n\n**Belangrijk**: groen betekent 'je mag' — niet 'je hoeft niet meer te kijken'.",
    checks: [
      {
        q: "Het verkeerslicht is **rood**. Wat doe je?",
        options: ["stoppen en wachten", "snel nog even doorgaan", "een stukje verder oversteken", "hard bellen"],
        answer: 0,
        wrongHints: [null, "Rood is een duidelijke opdracht.", "Dan sla je het licht over — mag dat?", "Helpt bellen tegen een rood licht?"],
        uitlegPad: {
          stappen: [{ titel: "Rood = stop", tekst: "**Rood betekent altijd stoppen.** Ook als je haast hebt. Ook als er niemand aankomt. Altijd." }],
          niveaus: { basis: "Bij rood stop je, altijd.", simpeler: "Rood? Dan sta je stil.", nogSimpeler: "stoppen" },
        },
      },
      {
        q: "Het licht springt op **groen**. Wat is slim?",
        options: ["eerst nog even kijken, dan gaan", "meteen rennen zonder te kijken", "wachten tot het weer rood is", "je ogen dichtdoen en lopen"],
        answer: 0,
        wrongHints: [null, "Groen betekent niet dat kijken klaar is.", "Bij groen mag je juist gaan.", "Zien is juist belangrijk!"],
        uitlegPad: {
          stappen: [{ titel: "Groen = mag, kijken = moet", tekst: "Bij groen **mag** je gaan. Kijk toch nog even: stopt iedereen echt? Dan pas rustig oversteken." }],
          theorie: "Soms rijdt iemand per ongeluk door rood. Daarom kijk je ook bij groen altijd zelf.",
          niveaus: { basis: "Bij groen mag je — na even kijken.", simpeler: "Groen: kijken, dan gaan.", nogSimpeler: "kijken, dan gaan" },
        },
      },
      {
        q: "Wat betekent het **rode poppetje** bij het zebrapad?",
        options: ["wachten op de stoep", "je mag oversteken", "het licht is kapot", "alleen volwassenen mogen gaan"],
        answer: 0,
        wrongHints: [null, "Dat is bij het gróéne poppetje.", "Het licht doet het gewoon.", "De regel is voor iedereen hetzelfde."],
        uitlegPad: {
          stappen: [{ titel: "Poppetjes-licht", tekst: "Het poppetjes-licht is speciaal voor lopers. **Rood poppetje = wachten**. Groen poppetje = oversteken mag." }],
          niveaus: { basis: "Rood poppetje: wachten op de stoep.", simpeler: "Rood poppetje = nog niet lopen.", nogSimpeler: "wachten" },
        },
      },
      {
        q: "Het licht staat op **geel (oranje)**. Wat betekent dat?",
        options: ["stop, als dat nog veilig kan", "gas geven en snel doorgaan", "het wordt zo groen", "je mag kiezen wat je doet"],
        answer: 0,
        wrongHints: [null, "Geel is een waarschuwing, geen aanmoediging.", "Welk licht komt er ná geel?", "Er is wél een regel."],
        uitlegPad: {
          stappen: [{ titel: "Geel = bijna rood", tekst: "Na geel komt **rood**. Geel betekent dus: **stop, als het nog veilig kan**. Sta je er bijna? Dan mag je nog doorgaan." }],
          niveaus: { basis: "Geel: stoppen als het nog kan.", simpeler: "Geel zegt: zo wordt het rood!", nogSimpeler: "stoppen als het kan" },
        },
      },
    ],
  },

  // ─── D. Op de fiets ───────────────────────────────────────
  {
    title: "Op de fiets — laat zien wat je gaat doen",
    explanation:
      "Op de fiets gelden een paar gouden regels:\n\n• **Hand uitsteken** als je afslaat. Ga je naar links? Linkerhand uit. Naar rechts? Rechterhand uit. Zo weet iedereen wat jij gaat doen.\n• **Achter elkaar fietsen** waar het smal of druk is.\n• **Licht aan** als het donker of schemerig is: **wit of geel licht voor**, **rood licht achter**.\n• Twee handen aan het stuur (behalve als je even richting aangeeft).\n\nZo zien de anderen jou — en jij hen. Dat is het hele geheim van veilig fietsen.",
    checks: [
      {
        q: "Je wil op de fiets naar **links** afslaan. Wat doe je eerst?",
        options: ["goed achterom kijken en je linkerhand uitsteken", "meteen scherp naar links sturen", "harder gaan fietsen", "je rechterhand uitsteken"],
        answer: 0,
        wrongHints: [null, "Weet het verkeer achter je dan wat jij gaat doen?", "Helpt sneller fietsen om af te slaan?", "Welke kant ga je op — en welke hand hoort daarbij?"],
        uitlegPad: {
          stappen: [{ titel: "Kijken + hand uit", tekst: "Eerst **achterom kijken** (komt er iemand?), dan je **linkerhand** uitsteken, dan pas afslaan. De hand wijst de kant op die jij op gaat." }],
          niveaus: { basis: "Kijken, linkerhand uit, dan afslaan.", simpeler: "Naar links? Linkerhand uit.", nogSimpeler: "linkerhand uit" },
        },
      },
      {
        q: "Welke lichten horen op je fiets als het donker is?",
        options: ["wit of geel voor, rood achter", "rood voor, wit achter", "blauw voor en achter", "lichten zijn niet nodig"],
        answer: 0,
        wrongHints: [null, "Andersom — denk aan een auto: welke kleur zie je aan de achterkant?", "Blauw is voor hulpdiensten, niet voor fietsen.", "In het donker moet je gezien worden!"],
        uitlegPad: {
          stappen: [{ titel: "Wit voor, rood achter", tekst: "Voorop: **wit of geel** licht. Achterop: **rood** licht. Net als bij een auto. Zo ziet iedereen welke kant jij op rijdt." }],
          niveaus: { basis: "Wit/geel voor, rood achter.", simpeler: "Voor = wit, achter = rood.", nogSimpeler: "wit voor, rood achter" },
        },
      },
      {
        q: "Het fietspad is smal en er komt een fietser aan. Hoe fietsen jij en je vriendin?",
        options: ["achter elkaar", "naast elkaar", "zo hard mogelijk", "midden op het pad"],
        answer: 0,
        wrongHints: [null, "Is er dan genoeg plek voor de fietser die eraan komt?", "Helpt hard fietsen op een smal pad?", "Dan kan er niemand meer langs."],
        uitlegPad: {
          stappen: [{ titel: "Smal? Achter elkaar!", tekst: "Op een smal of druk pad ga je **achter elkaar** fietsen. Dan is er plek voor iedereen." }],
          niveaus: { basis: "Smal pad: achter elkaar fietsen.", simpeler: "Eentje voorop, eentje erachter.", nogSimpeler: "achter elkaar" },
        },
      },
      {
        q: "Waarom steek je je hand uit als je gaat afslaan?",
        options: ["zo weet iedereen wat jij gaat doen", "dat staat stoer", "om te zwaaien naar vrienden", "om je hand te laten wapperen"],
        answer: 0,
        wrongHints: [null, "Het gaat niet om stoer — waar helpt het bij?", "Leuk, maar daar is de regel niet voor.", "Het heeft een echt doel — welk?"],
        uitlegPad: {
          stappen: [{ titel: "Laat het zien", tekst: "Je hand vertelt de anderen: **ik ga deze kant op**. Dan houden auto's en fietsers rekening met jou. Veilig voor iedereen." }],
          niveaus: { basis: "Je hand laat zien waar je heen gaat.", simpeler: "Hand uit = 'ik ga die kant op!'", nogSimpeler: "zo weet iedereen het" },
        },
      },
    ],
  },

  // ─── E. Borden ────────────────────────────────────────────
  {
    title: "Borden herkennen — wat zegt de vorm en de kleur?",
    explanation:
      "Verkeersborden vertellen je met **vorm en kleur** wat er mag of moet:\n\n• **Rond en blauw** met een witte fiets → hier is het **fietspad**.\n• **Blauw, vierkant** met een lopend poppetje op strepen → hier is een **zebrapad**.\n• **Driehoek met rode rand** (punt omhoog) → **pas op!** Er komt iets waar je op moet letten.\n• **Rood, achthoekig bord met STOP** → hier moet iedereen **helemaal stoppen**.\n\n**Trucje**: blauw zegt meestal wat **mag of moet**, een rode rand zegt **pas op** of **dat mag niet**.",
    checks: [
      {
        q: "Je ziet een **rond blauw bord met een witte fiets**. Wat betekent dat?",
        options: ["hier is het fietspad", "fietsen verboden", "hier moet je afstappen", "pas op, gladde weg"],
        answer: 0,
        wrongHints: [null, "Blauw zegt juist wat mag of moet.", "Waarom zou er dan een fiets op staan?", "Waarschuwingen staan in een driehoek."],
        uitlegPad: {
          stappen: [{ titel: "Blauw = hier hoor je", tekst: "Rond blauw bord met een fiets = **fietspad**. Daar hoor jij met je fiets te rijden." }],
          niveaus: { basis: "Blauw bord met fiets = fietspad.", simpeler: "Fiets op blauw = fietsen hier!", nogSimpeler: "fietspad" },
        },
      },
      {
        q: "Op welk bord staat een **lopend poppetje op witte strepen**?",
        options: ["het zebrapad-bord", "het stopbord", "het fietspad-bord", "het parkeerbord"],
        answer: 0,
        wrongHints: [null, "Daar staat het woord STOP op.", "Daar staat een fiets op.", "Daar staat een P op."],
        uitlegPad: {
          stappen: [{ titel: "Zebrapad-bord", tekst: "Het blauwe bord met een **poppetje op strepen** zegt: hier is een **zebrapad**. Handig om te weten waar je veilig kunt oversteken." }],
          niveaus: { basis: "Poppetje op strepen = zebrapad.", simpeler: "Strepen = zebra = oversteken.", nogSimpeler: "zebrapad-bord" },
        },
      },
      {
        q: "Wat betekent een **driehoekig bord met een rode rand**?",
        options: ["pas op — er komt iets waar je op moet letten", "hier mag alles", "hier is een winkel", "je bent er bijna"],
        answer: 0,
        wrongHints: [null, "Een rode rand is nooit 'alles mag'.", "Verkeersborden gaan over de weg.", "Verkeersborden gaan over de weg."],
        uitlegPad: {
          stappen: [{ titel: "Driehoek = waarschuwing", tekst: "Een **driehoek met rode rand** waarschuwt: pas op! Bijvoorbeeld voor een overstekende kinderen-plek, een bocht of werk aan de weg. Het plaatje in de driehoek zegt waarvoor." }],
          niveaus: { basis: "Driehoek met rode rand = pas op.", simpeler: "Driehoek zegt: let op!", nogSimpeler: "pas op" },
        },
      },
      {
        q: "Je ziet het rode bord met **STOP**. Wat moet iedereen daar doen?",
        options: ["helemaal stoppen, kijken, en dan pas verder", "iets langzamer rijden", "hard toeteren", "omkeren"],
        answer: 0,
        wrongHints: [null, "Langzamer is niet genoeg bij dit bord.", "Maakt geluid je veilig?", "Verder mag wél — maar wat doe je eerst?"],
        uitlegPad: {
          stappen: [{ titel: "STOP = echt stilstaan", tekst: "Bij het **stopbord** moet iedereen écht even **stilstaan** — ook auto's. Eerst kijken of alles vrij is, dan pas verder." }],
          niveaus: { basis: "Bij STOP sta je echt even stil.", simpeler: "STOP betekent: stilstaan.", nogSimpeler: "stoppen" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const verkeerVeiligOpStraatG4 = {
  id: "verkeer-veilig-op-straat-g4",
  title: "Verkeer — veilig op straat en op de fiets (groep 4)",
  emoji: "🚸",
  level: "groep4-5",
  subject: "verkeer",
  referentieNiveau: "po-1F",
  sloThema: "Verkeer — oversteken, stoep/fietspad, verkeerslichten, fietsregels, borden (groep 4)",
  prerequisites: [],
  intro:
    "Veilig op straat: oversteken met stop-kijk-luister, waar je loopt en fietst, wat de lichten en de eerste borden betekenen. Voor groep 4. ~15 min.",
  triggerKeywords: [
    "verkeer", "oversteken", "zebrapad", "stoplicht", "verkeerslicht",
    "fietsen", "hand uitsteken", "verkeersborden", "stoep", "fietspad",
    "groep 4", "veilig op straat",
  ],
  chapters,
  steps,
};

export default verkeerVeiligOpStraatG4;
