// Leerpad: Geld, crypto & blockchain — hoe digitaal geld werkt (economie, VO).
// Mark-wens (toekomst-spoor): lessen over crypto + hoe geld werkt. Bewust
// EDUCATIEF en KRITISCH opgezet: uitleg van de werking + nadruk op risico's en
// oplichting. GEEN financieel advies, geen aanmoediging om te kopen/beleggen.
// Doelgroep: VO-onderbouw/middenbouw (klas 3). Afkortingen voluit bij 1e gebruik.

const chapters = [
  { letter: "A", title: "Wat is geld?", emoji: "💶", from: 0, to: 1 },
  { letter: "B", title: "Crypto & blockchain", emoji: "🔗", from: 2, to: 3 },
  { letter: "C", title: "Veilig & verstandig", emoji: "🛡️", from: 4, to: 5 },
];

const steps = [
  {
    title: "Wat is geld eigenlijk?",
    explanation:
      "Lang geleden ruilden mensen spullen: een kip voor wat graan. Lastig, want wat als de graanboer geen kip wil? Daarom bedachten we **geld**: één ding dat iedereen accepteert om mee te betalen.\n\n" +
      "Het gekke is: een briefje van €10 is **niet zelf** 10 euro waard. Het werkt alleen omdat we **met z'n allen afspreken en vertrouwen** dat het 10 euro waard is.\n\n" +
      "Geld bestaat in twee vormen:\n" +
      "• **Contant**: munten en briefjes die je vast kunt pakken.\n" +
      "• **Digitaal (giraal)**: cijfers op je bankrekening. Het **meeste** geld is allang digitaal — getallen op een scherm.",
    checks: [
      {
        q: "Waarom is een briefje van €10 echt iets waard?",
        options: ["Omdat we met z'n allen afspreken en vertrouwen dat het 10 euro waard is", "Omdat het papier zelf 10 euro kost", "Omdat er goud in het briefje zit", "Omdat de winkel het briefje maakt"],
        answer: 0,
        wrongHints: [null, "Een briefje maken kost maar een paar cent.", "Er zit geen goud in een bankbiljet.", "Winkels maken geen geld."],
        uitlegPad: {
          stappen: [{ titel: "Geld = afspraak + vertrouwen", tekst: "Geld werkt omdat iedereen erop vertrouwt dat het waarde heeft, niet door het materiaal." }],
          niveaus: {
            basis: "Een briefje is waardevol omdat we sámen afspreken dat het dat is.",
            simpeler: "Komt de waarde van het papier zelf, of van onze afspraak?",
            nogSimpeler: "Vertrouwen of papier — wat maakt geld waardevol?",
          },
        },
      },
    ],
  },
  {
    title: "Wie maakt geld — en wat is inflatie?",
    explanation:
      "Wie bepaalt hoeveel euro er bestaat? Dat doet de **centrale bank**: voor de euro is dat de **ECB** (Europese Centrale Bank). Banken en de ECB kunnen geld 'bijmaken'.\n\n" +
      "Maar let op: als er **veel extra geld** bijkomt terwijl er **niet meer spullen** zijn, dan gaan de prijzen omhoog. Alles wordt duurder en je geld wordt **minder waard**. Dat heet **inflatie**.\n\n" +
      "Voorbeeld: zijn er ineens twee keer zoveel euro's, maar evenveel brood? Dan kan de bakker meer vragen — het brood 'kost' meer euro's, maar is niet anders geworden.",
    checks: [
      {
        q: "Er komt heel veel extra geld bij, maar er zijn niet meer spullen te koop. Wat gebeurt er meestal?",
        options: ["De prijzen stijgen: alles wordt duurder (inflatie)", "Alles wordt goedkoper", "Er verandert helemaal niets", "Iedereen wordt er echt rijker van"],
        answer: 0,
        wrongHints: [null, "Meer geld op dezelfde spullen duwt prijzen juist omhoog.", "Er gebeurt wel degelijk iets met de prijzen.", "Als alles duurder wordt, koop je per euro juist minder."],
        uitlegPad: {
          stappen: [{ titel: "Veel geld, weinig spullen → duurder", tekst: "Meer geld dat om dezelfde spullen vecht, jaagt de prijzen op. Dat is inflatie." }],
          niveaus: {
            basis: "Veel extra geld zonder extra spullen = hogere prijzen = inflatie.",
            simpeler: "Als er meer euro's zijn maar evenveel brood, wat doet de prijs?",
            nogSimpeler: "Duurder of goedkoper bij heel veel extra geld?",
          },
        },
      },
    ],
  },
  {
    title: "Wat is cryptocurrency?",
    explanation:
      "**Cryptocurrency** (kortweg **crypto**) is digitaal geld dat **niet** door een bank of overheid wordt beheerd. In plaats daarvan houdt een **netwerk van computers** over de hele wereld samen bij wie wat heeft.\n\n" +
      "Het bekendste voorbeeld is **Bitcoin** (gestart in 2009). Er is geen baas, geen hoofdkantoor: het wordt **decentraal** geregeld — '**decentraal**' betekent: niet door één centrale baas, maar door heel veel deelnemers samen.\n\n" +
      "Daardoor kan niemand het zomaar 'uitzetten' of in z'n eentje bijdrukken — maar er is ook **geen bank die je helpt** als er iets misgaat. Dat is een groot verschil met je bankrekening.",
    checks: [
      {
        q: "Wat is een belangrijk verschil tussen crypto (zoals Bitcoin) en het geld op je bankrekening?",
        options: ["Crypto wordt niet door een bank/overheid beheerd, maar door een netwerk van computers", "Crypto is gemaakt van speciaal papier", "Crypto werkt alleen in Nederland", "Crypto is precies hetzelfde als sparen bij de bank"],
        answer: 0,
        wrongHints: [null, "Crypto is digitaal, er is geen papieren vorm.", "Een wereldwijd netwerk kent geen landsgrenzen.", "Bij de bank is er juist wél een bank die de baas is."],
        uitlegPad: {
          stappen: [{ titel: "Geen bank, maar een netwerk", tekst: "Crypto wordt decentraal beheerd door computers wereldwijd, niet door een bank of overheid." }],
          niveaus: {
            basis: "Crypto heeft geen bank-baas; een netwerk van computers regelt het samen.",
            simpeler: "Wie is bij crypto de baas: een bank, of heel veel computers samen?",
            nogSimpeler: "Bank of netwerk?",
          },
        },
      },
    ],
  },
  {
    title: "Wat is blockchain?",
    explanation:
      "Crypto werkt met een **blockchain**. Stel je een groot, **openbaar kasboek** voor waarin alle betalingen staan. Dat kasboek wordt niet door één bank bewaard, maar door **heel veel computers tegelijk** — die hebben allemaal dezelfde kopie.\n\n" +
      "Elke nieuwe groep betalingen wordt gebundeld in een **blok**, en dat blok wordt aan de vorige geplakt: zo ontstaat een **ketting** van blokken → **block-chain** (blok-ketting).\n\n" +
      "Omdat zóveel computers dezelfde kopie hebben, kun je niet stiekem vals spelen: pas je je eigen kopie aan, dan klopt 'ie niet meer met die van alle anderen, en valt het meteen op.",
    checks: [
      {
        q: "Waarom is het zo moeilijk om vals te spelen met een blockchain?",
        options: ["Heel veel computers houden dezelfde kopie bij, dus geknoei valt meteen op", "Er staat een echte bewaker naast de computer", "De overheid keurt elke betaling eerst goed", "Je hebt er een wachtwoord van de bank voor nodig"],
        answer: 0,
        wrongHints: [null, "Het is geen fysieke bewaking, maar heel veel kopieën.", "Juist de overheid is er níét de baas over.", "Er komt geen bank aan te pas."],
        uitlegPad: {
          stappen: [{ titel: "Veel kopieën = controle", tekst: "Omdat iedereen dezelfde kopie heeft, wijkt geknoei meteen af van de rest." }],
          niveaus: {
            basis: "Vals spelen valt op omdat alle computers dezelfde kopie vergelijken.",
            simpeler: "Wat gebeurt er als jouw kopie ineens anders is dan die van duizenden anderen?",
            nogSimpeler: "Eén kopie of heel veel dezelfde kopieën?",
          },
        },
      },
    ],
  },
  {
    title: "Je geheime sleutel: nooit kwijtraken, nooit delen",
    explanation:
      "Bij een bank kun je je wachtwoord vergeten en opnieuw instellen. Bij crypto **niet**. Je crypto hoort bij een **geheime sleutel** (vaak een rijtje woorden, de '**seed**' of 'private key').\n\n" +
      "• Wie die sleutel heeft, **kan bij je crypto** — dus deel 'm met **niemand**.\n" +
      "• Raak je 'm kwijt, dan ben je je crypto **voorgoed kwijt**: er is geen bank of klantenservice die het terughaalt.\n\n" +
      "Daarom de bekende waarschuwing: **'not your keys, not your coins'** — heb jij de sleutels niet zelf veilig, dan zijn de munten eigenlijk niet echt van jou.",
    checks: [
      {
        q: "Je raakt de geheime sleutel (seed) van je crypto kwijt. Wat gebeurt er?",
        options: ["Je bent je crypto voorgoed kwijt; geen bank kan het terughalen", "De bank stuurt gewoon een nieuwe sleutel op", "Je belt de politie en je krijgt alles terug", "Niets aan de hand, je logt gewoon opnieuw in met je e-mail"],
        answer: 0,
        wrongHints: [null, "Bij crypto is er juist geen bank die kan helpen.", "De politie kan een verloren sleutel niet terughalen.", "Er is geen 'wachtwoord vergeten'-knop zoals bij een website."],
        uitlegPad: {
          stappen: [{ titel: "Geen bank = geen reset", tekst: "Zonder je sleutel kan niemand bij je crypto, en niemand kan 'm voor je herstellen." }],
          niveaus: {
            basis: "Sleutel kwijt = crypto kwijt; er is geen vangnet.",
            simpeler: "Is er bij crypto een bank die je sleutel kan resetten?",
            nogSimpeler: "Wel of geen reset-knop bij crypto?",
          },
        },
      },
    ],
  },
  {
    title: "Verstandig omgaan met crypto",
    explanation:
      "Drie dingen die écht belangrijk zijn:\n\n" +
      "1. **De koers schommelt enorm.** De waarde kan op één dag flink stijgen óf dalen. Je kunt er veel geld mee verliezen.\n" +
      "2. **Er zijn veel oplichters (scams).** Mensen beloven dat je 'snel rijk' wordt, of proberen je geheime sleutel te stelen. **Lijkt iets te mooi om waar te zijn? Dan is het dat meestal ook.**\n" +
      "3. Dit leerpad legt uit **hoe** crypto werkt. Het is **geen financieel advies** en **geen aanmoediging** om crypto te kopen of erin te beleggen — het is bedoeld om het te begrijpen.",
    checks: [
      {
        q: "Iemand op internet belooft: 'Stuur mij €50 in crypto en morgen krijg je €500 terug — gegarandeerd!' Wat doe je?",
        options: ["Niet doen — dit is vrijwel zeker oplichting", "Snel doen voordat de actie voorbij is", "Je geheime sleutel sturen zodat zij het kunnen regelen", "Juist €500 sturen, voor nog meer winst"],
        answer: 0,
        wrongHints: [null, "Een gegarandeerde 10× winst in één dag bestaat niet — dat is precies het lokaas.", "Je geheime sleutel deel je NOOIT (zie de vorige stap).", "Meer sturen maakt je verlies alleen groter."],
        uitlegPad: {
          stappen: [{ titel: "Te mooi = oplichting", tekst: "Beloftes van snelle, gegarandeerde winst zijn een klassieke scam. Niet op ingaan." }],
          niveaus: {
            basis: "Snelle gegarandeerde winst bestaat niet; dit is oplichting — niet doen.",
            simpeler: "Kan iemand écht garanderen dat €50 morgen €500 wordt?",
            nogSimpeler: "Klinkt te mooi om waar te zijn — wel of niet doen?",
          },
        },
      },
    ],
  },
];

export default {
  id: "crypto-blockchain-geld-beco",
  title: "Geld, crypto & blockchain — hoe digitaal geld werkt",
  subject: "economie",
  level: "klas3",
  sloThema: "economie-geld-digitaal",
  chapters,
  steps,
  prerequisites: [],
};
