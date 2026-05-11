// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk 2 (Geld genoeg?)
// Uitgebreide versie 2026-05-09: 7 stappen voor compleet examen-blok.
// Concrete voorbeelden uit de leefwereld van een 15-16-jarige.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  geld: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  vraag: "#42a5f5",
  aanbod: "#ef5350",
  rood: "#ff5252",
  oranje: "#ffa040",
  grijs: "#90a4ae",
};

const stepEmojis = ["💰", "💳", "🏦", "📈", "🔄", "📉", "📊", "💸", "🏠"];

const chapters = [
  { letter: "A", title: "Wat is geld?", emoji: "💰", from: 0, to: 1 },
  { letter: "B", title: "Sparen of beleggen?", emoji: "🏦", from: 2, to: 3 },
  { letter: "C", title: "Geld rolt + inflatie + begroten", emoji: "🔄", from: 4, to: 6 },
  { letter: "D", title: "Lenen", emoji: "💸", from: 7, to: 8 },
];

const steps = [
  // ─── Stap 1: Functies en soorten geld ──────────────────────
  {
    title: "Wat is geld eigenlijk?",
    explanation: "Vroeger ruilden mensen direct (**ruilhandel**): jij geeft een schaap, ik geef brood. Nadelen: misschien wil de bakker geen schaap, en hoeveel brood is een schaap waard?\n\nGeld lost dit op. Het heeft **drie functies**:\n\n**1. Ruilmiddel**: je betaalt met geld, geen ingewikkelde ruil meer.\n**2. Rekenmiddel**: alles heeft een prijs in euro's, dus je kunt makkelijk vergelijken (€20 vs €15).\n**3. Spaarmiddel (oppotmiddel)**: je kunt geld bewaren voor later — een schaap zou doodgaan, geld niet.\n\n**Soorten geld**:\n• **Chartaal geld**: munten en bankbiljetten — geld dat je kunt vasthouden.\n• **Giraal geld**: tegoed op een rekening — bijna alle betalingen tegenwoordig (pinnen, overschrijven, Tikkie).\n\n**Eigenschappen van goed geld**:\n• Algemeen geaccepteerd (iedereen wil het aannemen)\n• Schaars (anders wordt het niets waard)\n• Duurzaam (gaat niet snel kapot)\n• Deelbaar (kun je in stukken verdelen — €1 is 100 cent)",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">3 FUNCTIES VAN GELD</text>
<rect x="20" y="40" width="90" height="68" rx="8" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="65" y="68" text-anchor="middle" fill="${COLORS.geld}" font-size="22" font-family="Arial">💱</text>
<text x="65" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">ruilmiddel</text>
<text x="65" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">betalen</text>
<rect x="115" y="40" width="90" height="68" rx="8" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="160" y="68" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial">🧮</text>
<text x="160" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">rekenmiddel</text>
<text x="160" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">vergelijken</text>
<rect x="210" y="40" width="90" height="68" rx="8" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="255" y="68" text-anchor="middle" fill="${COLORS.vraag}" font-size="22" font-family="Arial">🐷</text>
<text x="255" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">spaarmiddel</text>
<text x="255" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">bewaren</text>
<text x="160" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Soorten:</text>
<text x="100" y="155" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">CHARTAAL</text>
<text x="100" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">munten + biljetten</text>
<text x="220" y="155" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">GIRAAL</text>
<text x="220" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">op de rekening</text>
</svg>`,
    checks: [
      {
        q: "Je vergelijkt een nieuwe sneaker van €110 met een ander paar van €85. Welke functie van geld gebruik je hier?",
        options: ["Rekenmiddel", "Ruilmiddel", "Spaarmiddel", "Productiemiddel"],
        answer: 0,
        wrongHints: [null, "Ruilen doe je bij de kassa, niet bij vergelijken.", "Sparen = bewaren voor later.", "Productiemiddel is geen geldfunctie."],
        uitlegPad: {
          stappen: [{ titel: "Wat doet geld hier?", tekst: "Je VERGELIJKT prijzen. Je betaalt nog niet, je bewaart nog niet — je gebruikt geld om twee dingen tegen elkaar te wegen. Dat is de rekenmiddel-functie." }],
          woorden: [{ woord: "rekenmiddel", uitleg: "Functie van geld: prijzen vergelijken. Alles wordt in 1 eenheid (€) uitgedrukt → vergelijkbaar." }, { woord: "ruilmiddel", uitleg: "Functie van geld: betalen bij transactie." }, { woord: "spaarmiddel", uitleg: "Functie van geld: waarde bewaren voor later." }],
          theorie: "3 functies van geld: ruilmiddel (betalen), rekenmiddel (vergelijken), spaarmiddel (bewaren). Vraag bij elke situatie: wat doe ik NU? Vergelijken = rekenmiddel.",
          voorbeelden: [{ type: "rekenen", tekst: "Sneakers €110 vs €85 → vergelijken = rekenmiddel." }, { type: "ruilen", tekst: "Bij de kassa €85 afrekenen = ruilmiddel." }, { type: "sparen", tekst: "€25 die je niet uitgeeft op je spaarrekening = spaarmiddel." }],
          basiskennis: [{ onderwerp: "Productiemiddel ≠ geldfunctie", uitleg: "Productiemiddel (arbeid, kapitaal) is iets anders. Geen geldfunctie." }],
          niveaus: { basis: "Vergelijken = rekenmiddel. A.", simpeler: "Prijzen tegen elkaar afwegen = rekenmiddel. Pas bij kassa wordt het ruilmiddel. = A.", nogSimpeler: "Vergelijken = A." },
        },
      },
      {
        q: "Wat is **giraal geld**?",
        options: ["Geld op je bankrekening", "Munten en biljetten", "Goud", "Een lening"],
        answer: 0,
        wrongHints: [null, "Dat is chartaal.", "Goud is een waardeobject, geen modern geld.", "Een lening is een product, geen soort geld."],
        uitlegPad: {
          stappen: [{ titel: "Giraal = digitaal", tekst: "Giraal geld zit op een REKENING — je ziet alleen een getal in je bank-app. Tegenover chartaal (munten + biljetten die je vasthoudt)." }],
          woorden: [{ woord: "giraal geld", uitleg: "Tegoed op een bankrekening. Digitaal, niet vast te pakken." }, { woord: "chartaal geld", uitleg: "Munten en bankbiljetten. Tastbaar." }],
          theorie: "Tegenwoordig is ~95% van het geld in NL giraal — pinnen, Tikkie, salaris op je rekening. Chartaal wordt minder gebruikt (Sweden gaat zelfs naar cashloze samenleving).",
          voorbeelden: [{ type: "giraal", tekst: "Salaris op rekening, Tikkie, overschrijving, pinbetaling." }, { type: "chartaal", tekst: "€20-biljet in je portemonnee, €2-munt, fooi bij de kapper." }],
          basiskennis: [{ onderwerp: "Niet goud", uitleg: "Goud is een edelmetaal/waarde-object, geen modern geld." }],
          niveaus: { basis: "Giraal = bankrekening. A.", simpeler: "Giraal = digitaal op je rekening. Chartaal = munten/biljetten. = A.", nogSimpeler: "Op rekening = A." },
        },
      },
      {
        q: "Waarom is **ruilhandel** lastig?",
        options: ["Je moet iemand vinden die jouw spullen wil EN heeft wat jij wilt", "Het is verboden", "Spullen zijn duur", "Internet is nodig"],
        answer: 0,
        wrongHints: [null, "Niet verboden, alleen onhandig.", "Prijs heeft niets met ruilen te maken.", "Ruilhandel was er ver vóór internet."],
        uitlegPad: {
          stappen: [{ titel: "Dubbele match nodig", tekst: "Bij ruilen moeten BEIDE partijen tegelijk willen ruilen. Heb je een schaap en wil je brood? Dan moet de bakker ÓÓK een schaap willen. Zelden zo." }],
          woorden: [{ woord: "ruilhandel", uitleg: "Direct goederen ruilen zonder geld als tussenstap. Vereist 'dubbele wens'." }, { woord: "dubbele coïncidentie van wensen", uitleg: "Beide partijen moeten precies willen wat de ander biedt — economisch obstakel." }],
          theorie: "Geld lost dit op: jij verkoopt schaap voor geld, koopt brood voor geld. Geen dubbele match nodig. Daarom geld uitgevonden zo'n 5000 jaar geleden.",
          voorbeelden: [{ type: "ruilhandel mislukt", tekst: "Jij hebt vis, wilt brood. Bakker wil geen vis (vegetariër). Jij gaat hongerig naar huis." }, { type: "met geld", tekst: "Jij verkoopt vis op markt voor €10, koopt brood voor €3. Iedereen blij." }],
          basiskennis: [{ onderwerp: "Niet verboden", uitleg: "Ruilen mag, maar onhandig. Marktplaats-ruil is een vorm ervan." }],
          niveaus: { basis: "Dubbele wens lastig. A.", simpeler: "Ruilhandel = beide moeten precies willen wat de ander heeft. Zelden zo. = A.", nogSimpeler: "Dubbele match = A." },
        },
      },
      {
        q: "Welke eigenschap moet **goed geld** zeker hebben?",
        options: ["Algemeen geaccepteerd zijn", "Heel mooi zijn", "Goud bevatten", "Door één persoon gemaakt zijn"],
        answer: 0,
        wrongHints: [null, "Uiterlijk maakt geld niet bruikbaar als betaalmiddel.", "Vroeger wel, nu niet meer (chartaal geld is fiat).", "Tegenovergesteld — moet door iedereen geaccepteerd."],
        uitlegPad: {
          stappen: [{ titel: "Iedereen wil het", tekst: "Geld werkt alleen als IEDEREEN het accepteert. Als de bakker niet wil dat jij met euro's betaalt, is de euro waardeloos voor jou. Acceptatie is de KERN." }],
          woorden: [{ woord: "algemeen geaccepteerd", uitleg: "Iedereen in de samenleving neemt dit aan als betaling." }, { woord: "fiat-geld", uitleg: "Geld zonder eigen waarde (papier, digitaal getal) dat waarde heeft omdat overheid + maatschappij het erkennen." }],
          theorie: "Andere eigenschappen helpen: schaars (anders waardeloos), duurzaam (gaat niet kapot), deelbaar (€1 = 100 cent). Maar zonder algemene acceptatie is geld niets.",
          voorbeelden: [{ type: "accepteren", tekst: "€-biljet werkt overal in eurozone — geaccepteerd. Bitcoin werkt op weinig plekken — beperkte acceptatie." }],
          basiskennis: [{ onderwerp: "Geen goud nodig", uitleg: "Vroeger waren euro's gekoppeld aan goud. Sinds 1971 niet meer. Geld is nu fiat — gewoon papier of bits." }],
          niveaus: { basis: "Algemeen geaccepteerd. A.", simpeler: "Iedereen moet het willen aannemen. Anders kun je er niets mee. = A.", nogSimpeler: "Iedereen accepteert = A." },
        },
      },
      {
        q: "Een Tikkie is een voorbeeld van **welk type geld**?",
        options: ["Giraal", "Chartaal", "Ruilhandel", "Spaargeld"],
        answer: 0,
        wrongHints: [null, "Chartaal = munten/biljetten, Tikkie is digitaal.", "Tikkie is geen ruilhandel — gewoon een betaling.", "Spaargeld is een doel, geen vorm."],
        uitlegPad: {
          stappen: [{ titel: "Digitaal = giraal", tekst: "Tikkie is een DIGITALE overschrijving van rekening naar rekening. Geen munten, geen biljetten. Dus giraal geld." }],
          woorden: [{ woord: "Tikkie", uitleg: "ING-betaalverzoek-app, populair voor onderling afrekenen. Werkt met giraal geld." }, { woord: "spaargeld", uitleg: "Geld dat je opzij zet (doel), niet een type/vorm." }],
          theorie: "Alle moderne betalingen (Tikkie, iDEAL, pinnen, Apple Pay) zijn varianten van giraal geld — een getal in een database dat verschuift tussen rekeningen.",
          voorbeelden: [{ type: "giraal", tekst: "Tikkie €5 → €5 op andermans rekening, €5 minder op die van jou. Allemaal digitaal." }],
          basiskennis: [{ onderwerp: "Spaargeld ≠ vorm", uitleg: "Spaargeld is bedoeld voor sparen, maar de VORM ervan is giraal (op spaarrekening)." }],
          niveaus: { basis: "Tikkie = giraal. A.", simpeler: "Tikkie verplaatst getallen tussen bankrekeningen — geen contant geld. Dus giraal. = A.", nogSimpeler: "Digitaal = giraal = A." },
        },
      },
    ],
  },
  // ─── Stap 2: Betaalmiddelen anno nu ──────────────────────────
  {
    title: "Hoe betaal je in 2026? Pin, contactloos en achteraf",
    explanation: "**Pinnen**: kaart in apparaat, pincode invoeren — geld gaat direct van jouw rekening af.\n**Contactloos**: kaart of telefoon (Apple Pay, Google Pay) tegen het apparaat. Onder €50 meestal zonder pincode.\n**Creditcard**: je betaalt nu, geld wordt 1 keer per maand van je rekening gehaald. **Risico**: je kunt makkelijk meer uitgeven dan je hebt.\n**Achteraf betalen (Klarna, Afterpay, in3)**: nu kopen, later betalen. **Lijkt gratis**, maar als je te laat betaalt komen er hoge boetes en kosten bij. Veel jongeren komen zo in de schulden.\n\n**Voor- en nadelen**:\n• **Pin**: veilig, direct, geen extra kosten\n• **Contactloos**: snel, maar makkelijk per ongeluk te dubbel-tikken\n• **Creditcard**: handig in buitenland/online, maar zonder controle gevaarlijk\n• **Achteraf**: lijkt gratis maar vaak schuld-instinker\n\n**Belangrijk voor jou**: alles wat je 'achteraf' betaalt is een lening. Stel jezelf altijd de vraag: **kan ik dit nu betalen?** Zo niet → niet kopen.",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BETAALMIDDELEN</text>
<rect x="20" y="40" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="35" y="60" fill="${COLORS.geld}" font-size="16" font-family="Arial">📲</text>
<text x="60" y="58" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">CONTACTLOOS</text>
<text x="60" y="73" fill="${COLORS.text}" font-size="9" font-family="Arial">snel, &lt;€50 vrij</text>
<rect x="165" y="40" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="180" y="60" fill="${COLORS.vraag}" font-size="16" font-family="Arial">💳</text>
<text x="205" y="58" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">PIN</text>
<text x="205" y="73" fill="${COLORS.text}" font-size="9" font-family="Arial">veilig, direct</text>
<rect x="20" y="90" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="35" y="110" fill="${COLORS.oranje}" font-size="16" font-family="Arial">💰</text>
<text x="60" y="108" fill="${COLORS.oranje}" font-size="11" font-family="Arial" font-weight="bold">CREDITCARD</text>
<text x="60" y="123" fill="${COLORS.text}" font-size="9" font-family="Arial">1x/maand afgeschr.</text>
<rect x="165" y="90" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="180" y="110" fill="${COLORS.rood}" font-size="16" font-family="Arial">⚠️</text>
<text x="205" y="108" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">ACHTERAF</text>
<text x="205" y="123" fill="${COLORS.text}" font-size="9" font-family="Arial">Klarna, Afterpay</text>
<rect x="20" y="148" width="280" height="55" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.rood}" stroke-width="1.2" stroke-dasharray="4 3"/>
<text x="160" y="167" text-anchor="middle" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">⚠ ACHTERAF = LENING</text>
<text x="160" y="183" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Vraag jezelf altijd: kan ik dit NU betalen?</text>
<text x="160" y="197" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Zo niet → niet kopen.</text>
</svg>`,
    checks: [
      {
        q: "Je koopt een hoodie van €60 via **Klarna 'achteraf betalen'**. Wat gebeurt er economisch gezien?",
        options: ["Je hebt een lening van €60 die je over 14-30 dagen moet terugbetalen", "Je krijgt korting", "Je hoeft nooit meer te betalen", "Klarna betaalt het voor je als cadeau"],
        answer: 0,
        wrongHints: [null, "Korting krijg je niet — alleen uitstel.", "Niet betalen = boete, deurwaarder, BKR-registratie.", "Klarna verdient eraan, dat is geen cadeau."],
        uitlegPad: {
          stappen: [{ titel: "Achteraf = lening", tekst: "'Achteraf betalen' = Klarna betaalt nu de winkel, jij betaalt over 14-30 dagen aan Klarna. Dat is per definitie een LENING van Klarna aan jou." }],
          woorden: [{ woord: "achteraf betalen", uitleg: "Vorm van consumentenkrediet waarbij je later betaalt. Vaak gratis bij snel terugbetalen, anders boetes." }, { woord: "BKR", uitleg: "Bureau Krediet Registratie — registreert leningen + betalingsachterstanden. Verhindert toekomstige leningen." }],
          theorie: "Klarna verdient aan: (1) commissie van winkel + (2) boetes/rente bij te-late betaling. Lijkt gratis maar is een schuld-instinker als je laat bent. BKR-registratie kan jarenlang gevolgen hebben (geen hypotheek bv).",
          voorbeelden: [{ type: "op tijd", tekst: "Hoodie €60, betaald binnen 14 dagen → geen extra kosten." }, { type: "te laat", tekst: "Niet betaald → €15 herinnering + €20 incasso + €50 boete + BKR-registratie." }],
          basiskennis: [{ onderwerp: "Niet cadeau", uitleg: "Klarna is een bedrijf dat geld verdient. Geen liefdadigheid." }],
          niveaus: { basis: "Achteraf = lening. A.", simpeler: "Klarna betaalt nu voor jou, jij moet binnen 14-30 dagen terugbetalen. Dat is gewoon een lening. = A.", nogSimpeler: "Lening = A." },
        },
      },
      {
        q: "Welke betaalwijze is **direct** geld van je rekening af?",
        options: ["Pinnen", "Creditcard", "Achteraf betalen", "Geen van deze"],
        answer: 0,
        wrongHints: [null, "Creditcard wordt pas later afgeschreven.", "Achteraf is letterlijk later betalen.", "Pinnen is meteen — controleer je app."],
        uitlegPad: {
          stappen: [{ titel: "Pin = nu", tekst: "Pinbetaling = bedrag gaat DIRECT van je rekening af (zie je in je bank-app). Creditcard + achteraf gaan LATER van je rekening — vorm van uitstel." }],
          woorden: [{ woord: "pinnen", uitleg: "Directe overschrijving bij betaling — geld is binnen seconden weg." }, { woord: "creditcard", uitleg: "Bank betaalt eerst, factureert je 1× per maand. Bij te laat: hoge rente." }],
          theorie: "Pinnen = veiligst voor budget. Je ziet meteen wat je hebt uitgegeven. Creditcard + achteraf = uitgesteld → makkelijker om te VEEL uit te geven (je 'ziet' het pas later).",
          voorbeelden: [{ type: "pin", tekst: "Boodschappen €43,20 → meteen €43,20 minder op je rekening." }, { type: "creditcard", tekst: "Vakantie-online €1.200 → wordt pas eind maand afgeschreven, je bent het misschien vergeten." }],
          basiskennis: [{ onderwerp: "Direct = controle", uitleg: "Directe afschrijving = directe feedback over wat je hebt. Helpt budget bewaken." }],
          niveaus: { basis: "Pinnen. A.", simpeler: "Pinnen gaat direct van je rekening af. Anderen gaan later. = A.", nogSimpeler: "Pin = direct = A." },
        },
      },
      {
        q: "Waarom is contactloos onder €50 'gevaarlijker' dan pinnen?",
        options: ["Geen pincode nodig — bij verlies kan iemand makkelijk uitgeven", "Het werkt niet altijd", "Het is duurder", "Je bent verplicht extra fooi te geven"],
        answer: 0,
        wrongHints: [null, "Werkt juist heel betrouwbaar.", "Zelfde prijs als pinnen.", "Fooi is geen onderdeel van de betaling."],
        uitlegPad: {
          stappen: [{ titel: "Geen pincode = open deur", tekst: "Contactloos < €50 vraagt geen pincode. Als iemand jouw pas vindt/steelt kan hij meteen uitgeven tot €50 per transactie zonder enige controle." }],
          woorden: [{ woord: "contactloos betalen", uitleg: "Pas/telefoon tegen apparaat houden — werkt via NFC-chip. Onder €50 geen pin." }, { woord: "verlies-risico", uitleg: "Als pas weg is: snel blokkeren bij bank om misbruik te voorkomen." }],
          theorie: "Beschermen: pas direct blokkeren via app/bank bij verlies. ING/ABN/Rabo hebben 'verlies-direct-blokkeer'-knop in app. Vergoedingsregeling vaak tot enkele honderden euro's, maar niet gegarandeerd.",
          voorbeelden: [{ type: "verlies", tekst: "Pas verloren in nachtclub. Dief gebruikt 8× contactloos €40 → €320 weg voor bank blokkeert." }],
          basiskennis: [{ onderwerp: "Snelheid + risico", uitleg: "Het gemak van geen pin betekent ook minder veiligheid. Trade-off." }],
          niveaus: { basis: "Geen pin = risico. A.", simpeler: "Bij contactloos onder €50 hoef je geen pin in te voeren → dief kan ook gewoon afrekenen. = A.", nogSimpeler: "Geen pin = A." },
        },
      },
      {
        q: "Wanneer kun je een creditcard echt nuttig vinden?",
        options: ["Online of in het buitenland — extra zekerheid en aankoop-bescherming", "Voor dagelijkse boodschappen want het is veiliger", "Als je geen pinpas hebt", "Om gratis geld te krijgen"],
        answer: 0,
        wrongHints: [null, "Voor dagelijks gebruik is pin veiliger en goedkoper.", "Iedereen heeft wel een pinpas via je bank.", "Creditcard geeft GEEN gratis geld — je betaalt het terug."],
        uitlegPad: {
          stappen: [{ titel: "Bescherming bij online/buitenland", tekst: "Creditcard biedt EXTRA bescherming: bij niet-geleverd product (webshop fout), bedrog of verkeerde afschrijving krijg je geld terug via 'chargeback'. Niet bij pin." }],
          woorden: [{ woord: "chargeback", uitleg: "Recht om transactie terug te draaien via creditcardmaatschappij bij problemen." }, { woord: "creditcardrente", uitleg: "Hoge rente (~14%/jr) bij niet-tijdig aflossen — daarom altijd op tijd afschrijven." }],
          theorie: "Voor dagelijkse aankopen NL = pin best (veilig, geen extra kosten, direct). Voor risicovolle aankopen (online onbekende winkel, buitenland) = creditcard nuttig.",
          voorbeelden: [{ type: "nuttig", tekst: "Vliegticket via onbekende site → met creditcard. Als ticket nooit komt, krijg je geld terug via chargeback." }, { type: "niet nodig", tekst: "Boodschappen AH → pinnen is sneller, veiliger en zonder rente-risico." }],
          basiskennis: [{ onderwerp: "Niet gratis", uitleg: "Creditcard = lening. Op tijd aflossen = €0 kosten. Te laat = forse rente." }],
          niveaus: { basis: "Online + buitenland. A.", simpeler: "Creditcard helpt bij online en in buitenland — extra bescherming als iets fout gaat. = A.", nogSimpeler: "Bescherming = A." },
        },
      },
      {
        q: "Marie ziet een €200 jas en denkt: 'oh, met Klarna betaal ik pas later.' Wat is het beste financiële advies?",
        options: ["Vraag jezelf af: kan ik €200 nu missen? Zo niet, niet kopen.", "Altijd Klarna gebruiken want het is gratis", "Drie keer Klarna nemen, dan is het pas €600 over een jaar", "Het maakt niet uit, alles loopt los"],
        answer: 0,
        wrongHints: [null, "Klarna lijkt gratis maar als je te laat bent komen er kosten bij.", "Drie leningen tegelijk = drie keer schuld + drie keer risico.", "Zo komen veel jongeren in de schulden."],
        uitlegPad: {
          stappen: [{ titel: "Vuistregel financieel volwassen", tekst: "Voor élke aankoop met uitgesteld betalen (Klarna, creditcard): vraag 'KAN IK DIT NU BETALEN?'. Zo nee → leg de jas terug. Anders bouw je schuld op." }],
          woorden: [{ woord: "uitgesteld betalen", uitleg: "Verzamelnaam voor Klarna, Afterpay, creditcard — verleidt tot kopen wat je niet kunt betalen." }, { woord: "schuldopbouw", uitleg: "Wanneer leningen zich opstapelen omdat je telkens nieuwe aangaat voor consumptie." }],
          theorie: "Achter Klarna's gemak zit een commerciële strategie: ze willen dat je MEER koopt dan je kunt. Dat maakt jou kwetsbaar. Marketing-truc: 'split in 3 maandelijkse betalingen!' = 3 verkopen ipv 1.",
          voorbeelden: [{ type: "verstandig", tekst: "Marie checkt rekening: €120 saldo. €200 jas? Niet kopen, sparen eerst." }, { type: "fout", tekst: "Marie koopt jas + 2 andere dingen via Klarna → €600 schuld → boetes → BKR → toekomstige hypotheek geweigerd." }],
          basiskennis: [{ onderwerp: "Niet loopt los", uitleg: "Veel jongeren komen in echte problemen door achteraf-betalen. Niet onderschatten." }],
          niveaus: { basis: "Kan ik dit NU betalen? A.", simpeler: "Stel jezelf altijd de vraag: heb ik dit geld NU? Zo niet, niet kopen — ook niet 'met Klarna'. = A.", nogSimpeler: "Nu betalen = A." },
        },
      },
    ],
  },
  // ─── Stap 3: Banken — sparen en rente ─────────────────────────
  {
    title: "Sparen en rente — laat je geld werken",
    explanation: "**Banken** doen drie dingen:\n1. **Geld bewaren** (betaal- en spaarrekening)\n2. **Geld lenen** (hypotheek, persoonlijke lening)\n3. **Betalingen regelen** (overschrijvingen, pinnen)\n\n**Sparen**: je geeft de bank tijdelijk je geld. De bank betaalt je **rente** als beloning, omdat zij het geld weer kan uitlenen aan anderen.\n\n**Voorbeeld**: je zet €1000 op een spaarrekening met 2% rente per jaar.\n• Na 1 jaar: €1000 × 1,02 = **€1020** (€20 rente)\n• Na 2 jaar: €1020 × 1,02 = **€1040,40** (€20,40 rente)\n• Na 5 jaar: ongeveer **€1104**\n\nDe rente over rente heet **samengestelde rente** — het wordt elk jaar groter. Je 'verdient over je verdiensten'.\n\n**Reden om te sparen**:\n• **Buffer** voor onverwachte uitgaven (telefoon stuk, fiets gestolen)\n• **Doel**: rijbewijs (~€2.500), reis (~€1.500), eerste auto, uit huis\n• **Pensioen** later in je leven\n\n**Spaarrekening** vs **betaalrekening**:\n• Betaalrekening: dagelijkse uitgaven, vaak geen rente\n• Spaarrekening: opzij zetten, beetje rente",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">SAMENGESTELDE RENTE</text>
<line x1="40" y1="40" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="290" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="20" y="50" fill="${COLORS.text}" font-size="9" font-family="Arial">€</text>
<text x="270" y="175" fill="${COLORS.text}" font-size="9" font-family="Arial">jaar</text>
<text x="55" y="175" fill="${COLORS.muted}" font-size="9" font-family="Arial">0</text>
<text x="155" y="175" fill="${COLORS.muted}" font-size="9" font-family="Arial">5</text>
<text x="255" y="175" fill="${COLORS.muted}" font-size="9" font-family="Arial">10</text>
<polyline points="55,140 80,135 105,128 130,121 155,113 180,105 205,96 230,87 255,77 280,67" fill="none" stroke="${COLORS.geld}" stroke-width="3"/>
<circle cx="55" cy="140" r="4" fill="${COLORS.warm}"/>
<text x="55" y="135" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial">€1000</text>
<circle cx="155" cy="113" r="4" fill="${COLORS.warm}"/>
<text x="160" y="108" fill="${COLORS.warm}" font-size="9" font-family="Arial">€1104</text>
<circle cx="280" cy="67" r="4" fill="${COLORS.warm}"/>
<text x="265" y="62" fill="${COLORS.warm}" font-size="9" font-family="Arial">€1219</text>
<text x="160" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">€1000 sparen, 2% rente per jaar</text>
</svg>`,
    checks: [
      {
        q: "Je zet **€500** op een spaarrekening met **3% rente** per jaar. Hoeveel staat er na 1 jaar?",
        options: ["€515", "€503", "€530", "€553"],
        answer: 0,
        wrongHints: [null, "3% van €500 = €15, niet €3.", "Dat zou 6% rente zijn.", "Te veel — controleer 3% × €500."],
        uitlegPad: {
          stappen: [{ titel: "3% × €500 = €15", tekst: "Rente = % × startbedrag = 3% × €500 = €15. Op je rekening na 1 jaar: €500 + €15 = €515." }],
          woorden: [{ woord: "rente", uitleg: "Beloning die bank betaalt voor je gespaarde geld. Uitgedrukt als percentage per jaar." }, { woord: "spaarrente", uitleg: "Specifieke rente voor spaarrekeningen, vaak laag (1-3% in 2024)." }],
          theorie: "Formule: nieuw saldo = oud saldo × (1 + rente%). Hier: €500 × 1,03 = €515. Of: €500 + (€500 × 0,03) = €515.",
          voorbeelden: [{ type: "berekening", tekst: "3% × €500 = €15. €500 + €15 = €515 na 1 jaar." }, { type: "andere", tekst: "5% × €1.000 = €50. €1.050 na 1 jaar." }],
          basiskennis: [{ onderwerp: "Niet 0,03 × €500 = €3", uitleg: "Vergeet niet te vermenigvuldigen met €500, niet met 1. €15 is correct, niet €3." }],
          niveaus: { basis: "500 × 1,03 = 515. A.", simpeler: "3% van €500 is €15. Totaal: €500 + €15 = €515. = A.", nogSimpeler: "€515 = A." },
        },
      },
      {
        q: "Wat is **samengestelde rente**?",
        options: ["Rente over de eerder ontvangen rente", "Een speciaal soort lening", "Hogere rente voor zakelijke klanten", "Belasting op spaargeld"],
        answer: 0,
        wrongHints: [null, "Lening is een ander product.", "Niet specifiek aan zakelijk gebonden.", "Dat is vermogensbelasting."],
        uitlegPad: {
          stappen: [{ titel: "Rente over rente", tekst: "Samengestelde rente = je krijgt rente OOK over de rente die je eerder hebt ontvangen. Sneeuwbal-effect: elk jaar wordt het bedrag waarover rente wordt berekend groter." }],
          woorden: [{ woord: "samengestelde rente", uitleg: "Rente die ook over eerder ontvangen rente wordt berekend. Maakt sparen op lange termijn krachtig." }, { woord: "enkelvoudige rente", uitleg: "Rente ALLEEN over de oorspronkelijke inleg. Levert minder op." }],
          theorie: "Formule: eindbedrag = startbedrag × (1 + rente)^aantal jaren. Voorbeeld: €1000 × 1,02^10 = €1.219 (€219 winst dankzij rente-over-rente).",
          voorbeelden: [{ type: "Albert Einstein", tekst: "Zou hebben gezegd: 'samengestelde rente is het 8e wereldwonder'." }, { type: "vergelijking", tekst: "€1000 enkelvoudige rente 2%/jr × 10 = €200 winst. Samengesteld = €219 winst. Verschil groeit exponentieel bij lang sparen." }],
          basiskennis: [{ onderwerp: "Niet zakelijk", uitleg: "Samengestelde rente is een PRINCIPE, niet een speciaal product. Geldt voor iedereen die spaart/belegt." }],
          niveaus: { basis: "Rente over rente. A.", simpeler: "Volgend jaar krijg je rente over: je inleg + je gespaarde rente van vorig jaar. Sneeuwbal. = A.", nogSimpeler: "Sneeuwbal = A." },
        },
      },
      {
        q: "Waarom betaalt een bank jou rente op je spaargeld?",
        options: ["De bank kan jouw geld weer uitlenen aan anderen, daar verdient zij aan", "Uit dankbaarheid", "Het is verplicht door de wet", "Geld is duurder geworden"],
        answer: 0,
        wrongHints: [null, "Bank doet het uit eigenbelang.", "Hoogte van rente is geen wettelijke plicht.", "Geld 'duurder worden' is geen reden — bank verdient aan uitlenen."],
        uitlegPad: {
          stappen: [{ titel: "Bank verdient aan uitlenen", tekst: "Bank krijgt jouw spaargeld → leent het uit aan anderen (hypotheek 4%, persoonlijke lening 8%) → betaalt jou een lagere rente (2%) → verschil = winst voor de bank." }],
          woorden: [{ woord: "rentemarge", uitleg: "Verschil tussen rente die bank ONTVANGT (uitleen) en BETAALT (sparen). De winst." }, { woord: "intermediair", uitleg: "Tussenpersoon — bank bemiddelt tussen spaarders en leners." }],
          theorie: "Bank model: spaarders zetten geld in, bank leent uit aan anderen tegen hogere rente. Verschil is winst. Daarom willen banken graag dat je bij hen spaart — meer geld om uit te lenen.",
          voorbeelden: [{ type: "rekenstap", tekst: "Bank krijgt €1mln spaargeld @ 2% = kost €20k. Leent uit @ 4% = €40k inkomsten. Winst: €20k." }],
          basiskennis: [{ onderwerp: "Niet dankbaarheid/wet", uitleg: "Bank is bedrijf, niet weldoener. Rentevrij hoeft niet — bank kan ook 0% bieden als ze willen." }],
          niveaus: { basis: "Bank verdient via uitlenen. A.", simpeler: "Bank pakt jouw spaargeld, leent het uit voor hogere rente, verschil is winst. Daarom betalen ze jou rente. = A.", nogSimpeler: "Uitlenen-marge = A." },
        },
      },
      {
        q: "Anna spaart **€2.500 voor haar rijbewijs**. Welk type rekening is geschikt?",
        options: ["Een spaarrekening — ze haalt het er pas later af", "Een hypotheekrekening", "Een creditcard-rekening", "Een doorlopend krediet"],
        answer: 0,
        wrongHints: [null, "Hypotheek is voor een huis kopen.", "Creditcard is voor uitgeven, niet sparen.", "Doorlopend krediet is een lening, niet een spaarrekening."],
        uitlegPad: {
          stappen: [{ titel: "Sparen voor doel = spaarrekening", tekst: "Anna wil GELD APARTLEGGEN voor een toekomstig doel (rijbewijs). Dat is precies waar een spaarrekening voor is — apart van haar betaalrekening, geen dagelijks uitgavenrisico." }],
          woorden: [{ woord: "spaarrekening", uitleg: "Aparte rekening om geld vast te zetten + rente te krijgen. Tegoed is beschermd door DGS." }, { woord: "doelsparen", uitleg: "Sparen voor specifiek doel: vakantie, rijbewijs, eigen huis, pensioen." }],
          theorie: "Trucs om makkelijk te sparen: (1) automatische overschrijving begin maand, (2) spaarrekening die geen pinpas heeft (kan niet impulsief uitgeven), (3) duidelijk DOEL koppelen aan rekening.",
          voorbeelden: [{ type: "Anna", tekst: "€100/mnd op spaarrekening 'Rijbewijs' → na 25 mnd €2.500 + €30 rente." }],
          basiskennis: [{ onderwerp: "Niet creditcard/hypotheek", uitleg: "Creditcard + krediet zijn LENINGEN, niet sparen. Hypotheek is voor huis." }],
          niveaus: { basis: "Spaarrekening. A.", simpeler: "Geld voor later opzij = spaarrekening. Niet vermengen met dagelijkse uitgaven. = A.", nogSimpeler: "Spaarrek = A." },
        },
      },
      {
        q: "Een bank biedt een spaarrekening met **0% rente**. Waarom is sparen dan nóg steeds zinvol?",
        options: ["Je houdt geld apart voor doelen of buffers", "Het is verplicht", "Je krijgt korting in winkels", "Het levert toch geld op"],
        answer: 0,
        wrongHints: [null, "Sparen is geen plicht.", "Geen winkelvoordeel verbonden aan sparen.", "Bij 0% levert het juist niets op — maar gestructureerd sparen helpt wel."],
        uitlegPad: {
          stappen: [{ titel: "Sparen om PSYCHOLOGISCHE reden", tekst: "Zelfs bij 0% rente helpt sparen: GELD APART houden in een aparte rekening voorkomt impulsuitgaven. Discipline > rente." }],
          woorden: [{ woord: "buffer", uitleg: "Spaargeld voor onverwachte uitgaven (fiets kapot, baan verloren). Vuistregel: 3-6 maanden lasten." }, { woord: "doelsparen", uitleg: "Sparen voor specifiek doel. Geeft motivatie ook bij 0% rente." }],
          theorie: "Rente is bonus. Het ECHTE doel van sparen = (1) onverwachte tegenvallers opvangen, (2) grote dingen kunnen kopen, (3) financiële rust + zelfstandigheid.",
          voorbeelden: [{ type: "buffer", tekst: "€3.000 buffer op 0% rente = nog steeds 3 maanden bescherming bij baanverlies. Waarde > rente." }],
          basiskennis: [{ onderwerp: "Niet 0% = niets", uitleg: "Bij 0% rente verdien je geen geld, maar verlies je ook niks. Veiligheid + discipline is de echte winst." }],
          niveaus: { basis: "Voor doelen + buffer. A.", simpeler: "Apart houden in spaarpot voorkomt onnodige uitgaven, ook bij 0% rente. = A.", nogSimpeler: "Discipline = A." },
        },
      },
      {
        q: "Wat gebeurt er bij een **negatieve rente** op je spaargeld?",
        options: ["Je betaalt de bank in plaats van andersom", "Je krijgt extra geld", "De bank gaat failliet", "Niets"],
        answer: 0,
        wrongHints: [null, "Negatief = bank krijgt iets van jou.", "Betekent dat de bank failliet gaat is iets anders (DGS).", "Het heeft wel impact op je tegoed."],
        uitlegPad: {
          stappen: [{ titel: "Bank rekent JOU rente", tekst: "Negatieve rente betekent: bank zegt 'geld bewaren kost MIJ moeite, betaal mij ervoor'. Jouw saldo wordt elk jaar kleiner — je betaalt om te sparen." }],
          woorden: [{ woord: "negatieve rente", uitleg: "Bank int rente over spaargeld i.p.v. te betalen. Bestond bij grote spaarders 2020-2022 (ABN/ING)." }],
          theorie: "Komt voor wanneer ECB rente onder 0 zet (om economie te stimuleren). Banken willen dan niet meer spaargeld omdat hun winst krimpt — ze ontmoedigen het via negatieve rente.",
          voorbeelden: [{ type: "2021", tekst: "ING + ABN rekenden 0,5% negatieve rente voor spaargeld > €100k. Spaarders met €500k betaalden €2.500/jr." }],
          basiskennis: [{ onderwerp: "Niet failliet", uitleg: "Negatieve rente betekent NIET dat de bank failliet gaat. Andersom — bank wil minder spaargeld." }],
          niveaus: { basis: "Jij betaalt bank. A.", simpeler: "Bij negatieve rente neemt de bank een klein bedrag VAN je spaargeld af — andersom dan normaal. = A.", nogSimpeler: "Jij betaalt = A." },
        },
      },
    ],
  },
  // ─── Stap 4: Sparen of beleggen ───────────────────────────
  {
    title: "Sparen of beleggen — risico vs rendement",
    explanation: "Sparen geeft weinig rente maar je geld is veilig. **Beleggen** kan meer opleveren — maar je kunt ook verlies maken. Dit is de kern van Pincode H2.2.\n\n**Sparen** (stap 3 herhaling):\n• Geld op de bank, lage rente (~1-2%)\n• Veilig: gegarandeerd tot €100.000 per bank (DGS)\n• Snel beschikbaar\n• Bij hoge inflatie verlies je toch koopkracht\n\n**Beleggen** = je geld in iets stoppen dat (hopelijk) in waarde stijgt.\n\n**Belangrijkste vormen**:\n\n**1. Aandelen**\n• Stukje eigendom in een bedrijf (Shell, ASML, Apple)\n• Verdien je via: koerswinst (waarde stijgt) + dividend (winstuitkering)\n• Kan ook DALEN — soms tot €0 (bedrijf failliet)\n• Lange termijn: ~7%/jaar gemiddeld\n\n**2. Obligaties**\n• Lening AAN een bedrijf of overheid\n• Krijg je rente over (bv. 3-4%/jaar)\n• Veiliger dan aandelen, lager rendement\n\n**3. Beleggingsfondsen / ETF's**\n• Verzameling van veel aandelen tegelijk (bv. 'wereld-ETF')\n• Spreiding = minder risico (1 bedrijf failliet → fonds heeft nog 499 anderen)\n• Voor beginners: vaak beste keuze\n\n**4. Vastgoed**\n• Huis kopen om te verhuren\n• Veel kapitaal nodig, niet snel verkoopbaar\n\n**5. Crypto**\n• Bitcoin, Ethereum etc.\n• Heel risicovol, kan 50-90% in een jaar dalen of stijgen\n• Geen onderliggende waarde, geen DGS-garantie\n• Niet voor sparen of pensioen\n\n**Risico-rendement-curve**:\n• Hoog rendement = hoog risico (altijd)\n• Wie 'gegarandeerd hoog rendement' belooft → **OPLICHTING**\n\n**Vuistregels**:\n• **Spaar eerst** een buffer (3-6 mnd lasten)\n• **Beleg pas** met geld dat je 5+ jaar kunt missen\n• **Spreid** over verschillende beleggingen\n• **Lange termijn**: aandelen leveren historisch ~7%/jaar (nominaal)\n• **Korte termijn** (< 3 jaar): te risico-vol — kies sparen\n\n**Voorbeeld 'effect van rendement'**:\n• €1.000, 30 jaar, 2% rente (sparen) → €1.811\n• €1.000, 30 jaar, 7% rendement (aandelen) → €7.612\n• Verschil door samengestelde rente — wordt enorm op lange termijn\n\n**Risico's bij beleggen**:\n• **Marktrisico**: beurs daalt (corona 2020: -30%)\n• **Bedrijfsrisico**: 1 bedrijf failliet\n• **Inflatierisico**: rendement < inflatie = verlies in koopkracht\n• **Liquiditeitsrisico**: je geld zit vast, kun je niet snel weghalen\n\n**Belasting op vermogen**:\n• Box 3: spaargeld + beleggingen boven ~€57.000 (vrijstelling 2024)\n• Belasting wordt geschat op fictief rendement → regels veranderen vaak\n\n**Voor jou als 16-jarige**:\n• Beginnen kan vanaf 18 (rekening) of jonger met ouders\n• Kleine bedragen via DEGIRO, BUX, eToro\n• **Eerst leren** — niet meteen veel inleggen\n• Lange termijn = jouw voordeel (decennia tijd voor compounding)",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">SPAREN vs BELEGGEN</text>
<rect x="20" y="40" width="135" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">SPAREN</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">~1-2% rente</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">veilig (DGS €100k)</text>
<text x="87" y="98" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">snel beschikbaar</text>
<rect x="165" y="40" width="135" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">BELEGGEN</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">~7% gemiddeld</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.aanbod}" font-size="9" font-family="Arial">⚠ kan dalen</text>
<text x="232" y="98" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">lange termijn 5+ jr</text>
<text x="160" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€1.000, 30 jaar:</text>
<text x="87" y="148" text-anchor="middle" fill="${COLORS.geld}" font-size="13" font-family="Arial" font-weight="bold">€1.811</text>
<text x="87" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">2% sparen</text>
<text x="232" y="148" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">€7.612</text>
<text x="232" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">7% beleggen</text>
<text x="160" y="185" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">aandelen · obligaties · ETF · vastgoed</text>
<text x="160" y="205" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">eerst spaarbuffer, daarna beleggen</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **aandeel**?",
        options: ["Stukje eigendom in een bedrijf", "Een lening aan een bedrijf", "Een spaarrekening", "Een soort BTW"],
        answer: 0,
        wrongHints: [null, "Dat is een obligatie.", "Spaarrekening = bank.", "Geen belasting."],
        uitlegPad: {
          stappen: [{ titel: "Mede-eigenaar worden", tekst: "Aandeel = je koopt een stukje van een bedrijf. Bij Shell: 6,5 mld aandelen totaal → 1 aandeel = 1 / 6,5 mld eigenaarschap. Je deelt mee in winst (dividend) + waardeverandering (koers)." }],
          woorden: [{ woord: "aandeel", uitleg: "Mede-eigenaarschap van een bedrijf. Verhandeld op de beurs." }, { woord: "obligatie", uitleg: "Lening aan een bedrijf/overheid. Geen eigenaarschap, wel rente." }],
          theorie: "Winst aandeelhouder: (1) dividend (winstuitkering, paar % per jaar), (2) koerswinst (verkopen voor meer dan koop). Risico: koers kan dalen, dividend kan stoppen, bij faillissement bijna alles kwijt.",
          voorbeelden: [{ type: "praktijk", tekst: "1 ASML-aandeel kostte 2014 €70, 2024 €700 → +900% in 10 jaar. Wel risico — kan ook omlaag." }],
          basiskennis: [{ onderwerp: "Niet lening", uitleg: "Aandeel = EIGENAAR. Obligatie = SCHULDEISER. Verschillende rechten." }],
          niveaus: { basis: "Mede-eigenaar bedrijf. A.", simpeler: "Met een aandeel ben je voor een klein stukje EIGENAAR van een bedrijf. = A.", nogSimpeler: "Eigenaarschap = A." },
        },
      },
      {
        q: "Wat is het **verschil tussen sparen en beleggen**?",
        options: ["Sparen is veilig met lage rente; beleggen kan meer opleveren maar ook verlies", "Geen verschil", "Beleggen is altijd veiliger", "Sparen levert altijd verlies"],
        answer: 0,
        wrongHints: [null, "Wel groot verschil.", "Tegendeel.", "Sparen is veilig."],
        uitlegPad: {
          stappen: [{ titel: "Veiligheid vs potentie", tekst: "Sparen: gegarandeerd, weinig opbrengst (1-2%). Beleggen: gemiddeld hoger (~7%) maar GEEN garantie — kan ook verlies geven." }],
          woorden: [{ woord: "rendement", uitleg: "Opbrengst van belegging per jaar in %. Niet gegarandeerd." }, { woord: "risico-rendement-verhouding", uitleg: "Hoger rendement = bijna altijd hoger risico." }],
          theorie: "Vuistregel: korte termijn (<3 jaar) = sparen. Lange termijn (5+ jr) = beleggen kan zinvol zijn want koersdips middelen uit.",
          voorbeelden: [{ type: "30 jaar", tekst: "€1.000, 30 jr @ 2% sparen = €1.811. @ 7% beleggen = €7.612. Verschil enorm door compounding." }],
          basiskennis: [{ onderwerp: "Beide nuttig", uitleg: "Niet of/of: eerst buffer sparen (3-6 mnd), DAARNA pas beleggen met geld dat je kunt missen." }],
          niveaus: { basis: "Veilig+laag vs risico+hoog. A.", simpeler: "Sparen: bank houdt geld + beetje rente, veilig. Beleggen: hoger gemiddelde maar je kunt verliezen. = A.", nogSimpeler: "Veilig vs risico = A." },
        },
      },
      {
        q: "Bij **hoog rendement** hoort meestal:",
        options: ["Hoog risico", "Geen risico", "Gegarandeerd geld", "Kortere wachttijd"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Garanties bestaan zelden bij hoge rendementen.", "Niets met tijd."],
        uitlegPad: {
          stappen: [{ titel: "IJzeren wet", tekst: "Risico en rendement gaan ALTIJD samen. Hoger rendement = hoger risico op verlies. Logisch: niemand betaalt jou hoge winst zonder iets terug te willen — risico = jouw bijdrage." }],
          woorden: [{ woord: "risico-rendement-curve", uitleg: "Lijn die laat zien: meer rendement = meer risico. Geldt voor alle beleggingsproducten." }],
          theorie: "Sparen 1% = zero risico. Obligaties 3-4% = laag risico. ETF/aandelen 7% = midden risico. Crypto = hoog risico voor hoog (maar onzeker) rendement.",
          voorbeelden: [{ type: "lage rente", tekst: "Spaarrekening 1% = 0% kans op verlies." }, { type: "hoge rente", tekst: "Vriendje die geld leent voor zijn 'startup' 20%/jr = hoog risico op alles kwijtraken." }],
          basiskennis: [{ onderwerp: "Wet zonder uitzondering", uitleg: "Wie gegarandeerd hoog rendement belooft → liegt of weet niet wat hij doet." }],
          niveaus: { basis: "Hoog rendement = hoog risico. A.", simpeler: "Meer winst mogelijk? Dan ook meer risico. Geen gratis lunch. = A.", nogSimpeler: "Risico+rendement = A." },
        },
      },
      {
        q: "Iemand belooft **gegarandeerd 30% rendement per jaar**. Wat denk je?",
        options: ["Vrijwel zeker oplichting — bestaat niet", "Geweldig, meteen instappen", "Standaard rendement", "Dat hoort bij de bank"],
        answer: 0,
        wrongHints: [null, "Klassieke fraude-tactiek.", "Niet gemiddeld.", "Banken bieden veel lager."],
        uitlegPad: {
          stappen: [{ titel: "Te mooi = oplichting", tekst: "Beste belegger ooit (Warren Buffett) haalt ~20%/jr over decennia. Wie 30% GEGARANDEERD belooft is OPLICHTER. Beroemde gevallen: Madoff ($65 mrd weg), MMM-piramides." }],
          woorden: [{ woord: "piramidespel / Ponzi", uitleg: "Oplichting waarbij eerste investeerders worden betaald uit geld van nieuwe investeerders. Stort in bij stop nieuwe inleg." }, { woord: "red flags", uitleg: "Tekenen van oplichting: gegarandeerd hoog rendement, urgentie, geen heldere uitleg." }],
          theorie: "Echte beleggingen: 5-10% per jaar GEMIDDELD over decennia. Wisselend per jaar (sommige +30%, andere -20%). 'Gegarandeerd' bestaat alleen bij sparen, en daar krijg je 1-2%.",
          voorbeelden: [{ type: "Madoff", tekst: "Beroemste Ponzi: beloofde 10-12% per jaar GESTAAG. Bleek piramidespel. $65 mrd verloren bij ontdekking 2008." }],
          basiskennis: [{ onderwerp: "Red flag-test", uitleg: "Hoog + gegarandeerd + urgent = bijna zeker fraude. Lopen, niet investeren." }],
          niveaus: { basis: "Oplichting. A.", simpeler: "Niemand kan ECHT gegarandeerd 30% per jaar bieden. Dat is fraude. = A.", nogSimpeler: "Oplichting = A." },
        },
      },
      {
        q: "Wat is een **ETF** (beleggingsfonds)?",
        options: ["Verzameling van veel aandelen tegelijk → spreiding", "Een spaarrekening", "Een hypotheek", "Een belasting"],
        answer: 0,
        wrongHints: [null, "Beleggingsproduct, geen spaar.", "Niet hetzelfde.", "Geen belasting."],
        uitlegPad: {
          stappen: [{ titel: "Mandje aandelen", tekst: "ETF = Exchange Traded Fund. Je koopt 1 'fonds' dat bestaat uit honderden/duizenden aandelen. Spreiding ingebouwd — als 1 bedrijf failliet, blijven andere 499 over." }],
          woorden: [{ woord: "ETF", uitleg: "Beleggingsfonds dat 1-op-1 een index volgt (bv. wereld-index = MSCI World)." }, { woord: "spreiding", uitleg: "Risico verlagen door over veel beleggingen tegelijk te verdelen — niet alles in 1 mand." }],
          theorie: "ETF voordeel voor beginners: (1) automatisch gespreid, (2) lage kosten (~0,2%/jr), (3) makkelijk te kopen via DEGIRO/BUX. Wereld-ETF = bekendste keuze — volgt 2.000+ grote bedrijven wereldwijd.",
          voorbeelden: [{ type: "VWCE", tekst: "VWCE = Vanguard FTSE All-World ETF. 1 koop = stukje eigenaarschap in 3.000+ bedrijven uit 47 landen." }],
          basiskennis: [{ onderwerp: "Niet hetzelfde als aandeel", uitleg: "1 aandeel = 1 bedrijf. 1 ETF-eenheid = stukje van veel bedrijven tegelijk." }],
          niveaus: { basis: "Verzameling aandelen. A.", simpeler: "ETF = beleggingsmandje met veel aandelen tegelijk. Spreiding = minder risico. = A.", nogSimpeler: "Mandje = A." },
        },
      },
      {
        q: "**Vuistregel** voordat je gaat beleggen:",
        options: ["Eerst een buffer sparen (3-6 mnd lasten)", "Direct alles inleggen", "Crypto is altijd eerst", "Lenen om te beleggen"],
        answer: 0,
        wrongHints: [null, "Te risicovol zonder buffer.", "Crypto is hoog risico.", "Heel risicovol — beter niet."],
        uitlegPad: {
          stappen: [{ titel: "Buffer eerst", tekst: "Zonder buffer móét je beleggingen verkopen bij tegenslag (auto kapot, baan kwijt) — vaak op slechte momenten. Buffer geeft tijd om koersdips uit te zitten." }],
          woorden: [{ woord: "buffer", uitleg: "Spaargeld voor onverwachte uitgaven: 3-6 maanden vaste lasten." }, { woord: "noodgevallen-fonds", uitleg: "Andere naam voor buffer. Niet aanraken behalve in echte nood." }],
          theorie: "Volgorde: (1) buffer 3-6 mnd, (2) hoog-rente schulden aflossen (creditcard 14%), (3) DAARNA pas beleggen met geld dat je 5+ jr kunt missen.",
          voorbeelden: [{ type: "verkeerd", tekst: "Geen buffer + alles in aandelen. Beurs daalt 30% + baan kwijt → noodgedwongen verkopen op laag punt = verlies vastgezet." }, { type: "goed", tekst: "Met buffer kun je crisis uitzitten zonder beleggingen aan te raken." }],
          basiskennis: [{ onderwerp: "Niet lenen", uitleg: "Lenen om te beleggen verergert risico extreem — bij verlies blijf je met schuld zitten." }],
          niveaus: { basis: "Buffer eerst. A.", simpeler: "Eerst 3-6 maanden vaste lasten apart hebben. DAARNA pas beleggen. = A.", nogSimpeler: "Buffer eerst = A." },
        },
      },
      {
        q: "**Crypto** als belegging:",
        options: ["Heel hoog risico, kan 50-90% dalen, geen DGS-garantie", "Veilig en gegarandeerd", "Levert vast 10% per jaar", "Wettelijk verzekerd"],
        answer: 0,
        wrongHints: [null, "Tegendeel — heel volatiel.", "Geen garantie.", "Geen verzekering."],
        uitlegPad: {
          stappen: [{ titel: "Extreem volatiel", tekst: "Crypto (Bitcoin, Ethereum) heeft GEEN onderliggende waarde — geen bedrijf, geen winst, geen kasstromen. Prijs hangt op vertrouwen. Kan in 1 jaar 200% stijgen of 80% dalen." }],
          woorden: [{ woord: "crypto", uitleg: "Digitale valuta, niet uitgegeven door overheid. Bitcoin = bekendste." }, { woord: "volatiliteit", uitleg: "Hoe sterk een prijs schommelt. Crypto = extreem volatiel." }],
          theorie: "Geen DGS-garantie zoals bij spaargeld. Geen toezichthouder zoals AFM bij aandelen. Verlies = je verlies. Veel oplichting (rug pull, hacks). Voor sparen/pensioen → ongeschikt.",
          voorbeelden: [{ type: "BTC", tekst: "Bitcoin 2021 piek $68k → 2022 dip $16k = -76% in 1 jaar. 2024 weer omhoog." }, { type: "LUNA/Terra", tekst: "LUNA-coin: $116 → $0 in 1 week (mei 2022) — totaalverlies voor beleggers." }],
          basiskennis: [{ onderwerp: "Niet verzekerd", uitleg: "Geen wet beschermt je bij crypto-verlies. Hack van exchange? Geld weg. Crypto-bedrijf failliet? Geld weg." }],
          niveaus: { basis: "Hoog risico, geen garantie. A.", simpeler: "Crypto kan enorm stijgen óf dalen. Niemand garandeert je geld terug. = A.", nogSimpeler: "Risicovol = A." },
        },
      },
    ],
  },

  // ─── Stap 5: Geld moet rollen — circulatie en banken ──────
  {
    title: "Geld moet rollen — hoe geld door de economie stroomt",
    explanation: "**Pincode 2.4: Geld moet rollen!** Geld dat stilstaat doet niets. Pas als het rondgaat — van consument naar bedrijf naar werknemer naar consument — komt de economie in beweging.\n\n**De geldkringloop**:\nJij koopt brood (€2,50) → bakker betaalt zijn werknemer (loon) → werknemer koopt zijn boodschappen → en zo verder. **Hetzelfde geld** wisselt vele keren van eigenaar.\n\n**Welke rol spelen banken hierin?**\n\n**1. Geld bewaren** — betaal- en spaarrekening\n**2. Geld lenen aan anderen** — uit jouw spaargeld\n**3. Betalingen regelen** — Tikkie, overschrijven, pinnen\n\n**Dit is het belangrijkste stuk** — banken zijn niet alleen 'kluis voor jouw geld'. Zij **lenen jouw spaargeld uit** aan iemand anders die het wil lenen voor een hypotheek of bedrijfslening.\n\n**Voorbeeld**: jij stort €1.000 op je spaarrekening.\n• De bank houdt een klein deel achter (kasreserve, ~5% — €50)\n• De rest (€950) leent ze uit aan iemand anders\n• Die persoon betaalt ermee (bv. fiets) → fietsenwinkel stort dat geld op háár bank\n• Die bank houdt 5% achter en leent de rest weer uit\n• → Het geld 'vermenigvuldigt' zich door de economie\n\nDit heet **geldschepping door banken**. Het is veilig zolang banken niet allemaal tegelijk geld nodig hebben.\n\n**Wat als veel mensen tegelijk geld willen?**\n• Heet **bank run** — paniek\n• Bank heeft niet genoeg cash → kan failliet gaan\n• Voorbeeld: SVB-bank USA 2023, 1 dag €40 mrd opgenomen\n• Daarom: **DGS** (Depositogarantiestelsel) — €100k per spaarder gegarandeerd\n\n**Geldhoeveelheid**:\n• **M0** — alleen contant geld (chartaal)\n• **M1** — M0 + direct beschikbaar girale geld (betaalrekeningen)\n• **M2** — M1 + spaarrekeningen\n• **M3** — M2 + langer vastliggende deposito's\n\n**Voor jou belangrijk**:\n• Door uitlenen wordt elke euro 'meer waard' voor de economie\n• Centrale banken (ECB) bewaken hoe snel dit gaat — anders inflatie\n• Vertrouwen is cruciaal — daarom regelgeving DNB op banken\n\n**Geld 'rolt' ook via**:\n• **Belasting** — overheid pakt deel, geeft uit aan zorg/onderwijs/uitkeringen\n• **Sparen + beleggen** — geld helpt bedrijven groeien\n• **Internationale handel** — geld stroomt over grenzen\n\n**Snelheid van rollen** = hoe snel hetzelfde geld van eigenaar wisselt.\n• Hoge snelheid = veel activiteit, economie groeit\n• Lage snelheid = mensen sparen + geven niet uit, recessie\n\n**Quote economen**: 'Geld is als bloed in een lichaam — niet hoeveel je hebt is belangrijk, maar hoe het stroomt.'",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">GELDKRINGLOOP</text>
<circle cx="80" cy="80" r="28" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="80" y="76" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">JIJ</text>
<text x="80" y="89" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">koopt brood</text>
<circle cx="240" cy="80" r="28" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="240" y="76" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">BAKKER</text>
<text x="240" y="89" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">krijgt €2,50</text>
<line x1="110" y1="75" x2="210" y2="75" stroke="${COLORS.warm}" stroke-width="2" marker-end="url(#a)"/>
<line x1="210" y1="90" x2="110" y2="90" stroke="${COLORS.aanbod}" stroke-width="2" marker-end="url(#a)"/>
<defs><marker id="a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="${COLORS.warm}"/></marker></defs>
<text x="160" y="68" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial">€</text>
<text x="160" y="103" text-anchor="middle" fill="${COLORS.aanbod}" font-size="9" font-family="Arial">brood</text>
<circle cx="160" cy="155" r="28" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="160" y="151" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">WERKNEMER</text>
<text x="160" y="164" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">krijgt loon</text>
<line x1="225" y1="105" x2="180" y2="135" stroke="${COLORS.warm}" stroke-width="2" marker-end="url(#a)"/>
<line x1="135" y1="135" x2="100" y2="105" stroke="${COLORS.warm}" stroke-width="2" marker-end="url(#a)"/>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">geld blijft rollen — banken lenen ook uit</text>
</svg>`,
    checks: [
      {
        q: "Wat doet een bank met **jouw spaargeld**?",
        options: ["Klein deel houdt ze in kas, rest leent ze uit aan anderen", "Bewaart het in een kluis", "Geeft het terug bij vraag", "Belegt alles in aandelen"],
        answer: 0,
        wrongHints: [null, "Niet meer in kluis — modern bankieren leent uit.", "Klein deel ja, niet alles.", "Banken beleggen sommig wel, maar voornamelijk uitlenen."],
        uitlegPad: {
          stappen: [{ titel: "Bank = uitlenen-machine", tekst: "Bank houdt ~5% in kasreserve (om dagelijkse opnames te kunnen doen). De rest LEEN ze uit aan andere klanten voor hypotheek, bedrijfslening, persoonlijke lening." }],
          woorden: [{ woord: "kasreserve", uitleg: "Klein percentage (~5%) dat bank in kas houdt voor opnames. Verplicht door DNB." }, { woord: "uitlenen", uitleg: "Geld van spaarders aan leners geven tegen hogere rente — kern van bankmodel." }],
          theorie: "Modern bankieren = FRACTIONAL RESERVE. Bank houdt fractie achter, leent rest uit. Daardoor kan economie sneller groeien want geld werkt op meerdere plekken tegelijk.",
          voorbeelden: [{ type: "praktijk", tekst: "1mln klanten storten elk €10k = €10mrd. Bank houdt €500mln in kas. €9,5mrd wordt uitgeleend (hypotheken/bedrijfsleningen)." }],
          basiskennis: [{ onderwerp: "Niet kluis", uitleg: "Vroeger waren banken letterlijk kluizen voor goud. Sinds 1900 = uitleen-bedrijven met digitaal tegoed." }],
          niveaus: { basis: "Klein deel + rest uitlenen. A.", simpeler: "Bank houdt ~5% van jouw spaargeld in kas voor opnames. Rest leent zij uit aan andere mensen. = A.", nogSimpeler: "Uitlenen = A." },
        },
      },
      {
        q: "Wat is **geldschepping door banken**?",
        options: ["Door uitlenen + opnieuw storten neemt geldhoeveelheid in economie toe", "Banken drukken geld bij", "Belastingdienst maakt geld", "Niemand kan geld scheppen"],
        answer: 0,
        wrongHints: [null, "Drukt ECB, niet commerciële banken.", "Belastingdienst int.", "Centrale + commerciële banken kunnen dat wel."],
        uitlegPad: {
          stappen: [{ titel: "Vermenigvuldiging via uitlenen", tekst: "Jij stort €1.000. Bank leent €950 uit. Die persoon koopt iets, ontvanger stort op haar bank. Die bank leent weer €902 uit. Enz. → totale 'geld in omloop' GROEIT zonder dat ECB iets bijdrukt." }],
          woorden: [{ woord: "geldschepping", uitleg: "Proces waarbij commerciële banken via uitlenen + opnieuw storten de totale geldhoeveelheid in economie laten groeien." }, { woord: "fractional reserve", uitleg: "Systeem waarbij banken slechts fractie van deposito's als reserve houden." }],
          theorie: "Multiplicator-effect: bij 5% reserve kan €1.000 oorspronkelijk theoretisch tot €20.000 'geld in omloop' worden (1/0,05). Niet automatisch — afhankelijk van uitleenbereidheid + vertrouwen.",
          voorbeelden: [{ type: "ronde 1", tekst: "€1.000 stort → bank houdt €50, leent €950 uit." }, { type: "ronde 2", tekst: "€950 wordt uitgegeven, verkoper stort €950 → bank 2 leent €902 uit." }, { type: "totaal", tekst: "Na vele rondes: €1.000 oorsprong → tot €20.000 in omloop." }],
          basiskennis: [{ onderwerp: "Niet drukken", uitleg: "Drukken doet ECB. Geldschepping door commerciële banken is digitaal, via uitlenen." }],
          niveaus: { basis: "Uitlenen vergroot geldhoeveelheid. A.", simpeler: "Door geld telkens weer uit te lenen wordt de TOTALE hoeveelheid geld in de economie groter. = A.", nogSimpeler: "Uitlenen-cyclus = A." },
        },
      },
      {
        q: "Wat is een **bank run**?",
        options: ["Veel klanten halen tegelijk hun geld op — bank kan failliet gaan", "Bank organiseert een hardloopevenement", "Bank heeft promotie", "Klanten lopen weg uit boosheid"],
        answer: 0,
        wrongHints: [null, "Letterlijke betekenis is verkeerd hier.", "Geen reclame.", "Niet figuurlijk weglopen — geld weghalen."],
        uitlegPad: {
          stappen: [{ titel: "Massa-opname = paniek", tekst: "Bank houdt maar 5% in kas. Als 50% van klanten tegelijk hun geld wil → onmogelijk. Bank moet uitgeleend geld terugvragen (kost tijd) → ondertussen géén cash → bank failliet." }],
          woorden: [{ woord: "bank run", uitleg: "Massa-paniek waarbij spaarders tegelijk geld opnemen. Kan elke bank doen omvallen, ook gezonde." }],
          theorie: "Vaak kettingreactie: 1 bank in problemen → gerucht → spaarders rennen → andere banken ook → systeemcrisis. DGS-garantie (€100k) voorkomt paniek bij meeste spaarders.",
          voorbeelden: [{ type: "SVB 2023", tekst: "Silicon Valley Bank: $42 mrd opgenomen in 1 dag → failliet in 48 uur. Begin tech-banken-crisis." }, { type: "Northern Rock 2007", tekst: "UK-bank: kilometerslange rijen bij filialen, eerst sinds 1866." }],
          basiskennis: [{ onderwerp: "Letterlijk rennen", uitleg: "Vroeger renden mensen ECHT naar filiaal. Nu meestal digitaal — nog sneller." }],
          niveaus: { basis: "Massa-opname = failliet. A.", simpeler: "Veel mensen tegelijk geld weghalen → bank heeft niet genoeg cash → failliet. = A.", nogSimpeler: "Massa-paniek = A." },
        },
      },
      {
        q: "Hoeveel garandeert het **DGS** per spaarder per bank?",
        options: ["€100.000", "€10.000", "€1 miljoen", "Niets"],
        answer: 0,
        wrongHints: [null, "Te laag.", "Te veel.", "Wel garantie."],
        uitlegPad: {
          stappen: [{ titel: "€100k EU-norm", tekst: "Depositogarantiestelsel garandeert tot €100.000 per spaarder per bank. EU-regelgeving (sinds 2010). Bij faillissement bank → DGS-fonds keert uit." }],
          woorden: [{ woord: "DGS", uitleg: "Depositogarantiestelsel. Verzekert spaargeld tot €100k per persoon per bank bij bankfaillissement." }],
          theorie: "DGS-fonds wordt door alle NL-banken samen gevoed (verplichte premie). Geen overheidsgeld. Doel: voorkomen massa-paniek + bank runs. Spaargeld > €100k? Spreid over meerdere banken!",
          voorbeelden: [{ type: "DSB 2009", tekst: "DSB Bank failliet → 130k spaarders kregen geld terug via DGS." }, { type: "spreiding", tekst: "€250k spaargeld? 3 banken × ~€85k → alles gegarandeerd." }],
          basiskennis: [{ onderwerp: "Niet €10k", uitleg: "€10k was oude grens vóór 2008. EU verhoogde naar €100k na crisis." }],
          niveaus: { basis: "€100k. A.", simpeler: "Bij bankfaillissement: tot €100.000 per spaarder per bank gegarandeerd. = A.", nogSimpeler: "€100k = A." },
        },
      },
      {
        q: "Wat is **M1** geldhoeveelheid?",
        options: ["Contant geld (M0) + giraal geld op betaalrekeningen", "Alleen contant geld", "Alle spaargeld + beleggingen", "Buitenlandse munten"],
        answer: 0,
        wrongHints: [null, "Dat is M0.", "Dat is M2/M3.", "Niet relevant hier."],
        uitlegPad: {
          stappen: [{ titel: "M-niveaus", tekst: "Economen meten geldhoeveelheid op niveaus. M0 = alleen cash. M1 = M0 + giraal op betaalrekeningen. M2 = M1 + spaarrekeningen. M3 = M2 + langlopende deposito's." }],
          woorden: [{ woord: "M1", uitleg: "Direct beschikbaar geld: contant + betaalrekeningen. Wat je elk moment kunt uitgeven." }, { woord: "M-niveaus", uitleg: "Hoe breder M-nummer, hoe meer geld-vormen meegerekend." }],
          theorie: "ECB houdt M-niveaus in de gaten. Snelle groei van M1 = signaal voor potentiële inflatie. Sinds 2020 explosie M-cijfers door coronaherstel-stimulus.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Jouw €50-biljet (M0) + €2.000 betaalrekening = €2.050 in M1. Spaarrekening van €5.000 erbij = €7.050 in M2." }],
          basiskennis: [{ onderwerp: "M0 = alleen cash", uitleg: "M0 is het smalste — alleen contant. M1 voegt giraal toe." }],
          niveaus: { basis: "M0 + betaalrekening. A.", simpeler: "M1 = al het geld dat je DIRECT kunt uitgeven: contant + bankrekening. = A.", nogSimpeler: "Direct beschikbaar = A." },
        },
      },
      {
        q: "Wanneer **'rolt' geld snel** door de economie?",
        options: ["Bij hoogconjunctuur — mensen geven uit, bedrijven investeren", "Bij recessie", "Wanneer geen geld bestaat", "Altijd even snel"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Onzin.", "Verschilt per economie."],
        uitlegPad: {
          stappen: [{ titel: "Snelheid van rondgaan", tekst: "Geld 'rolt' = hoe vaak hetzelfde geld van eigenaar wisselt per jaar. Bij hoogconjunctuur: veel besteden + investeren → rolt snel. Bij recessie: mensen oppotten → trage roulatie." }],
          woorden: [{ woord: "geld-omloopsnelheid", uitleg: "Hoe snel hetzelfde geld door economie circuleert. Hoge snelheid = veel economische activiteit." }],
          theorie: "Formule: V (omloopsnelheid) = BBP / M (geldhoeveelheid). Hoge V + stabiele M = groeiende economie. Lage V = stagnatie ondanks veel geld.",
          voorbeelden: [{ type: "hoog", tekst: "Hoogconjunctuur: jij koopt brood (€2,50) → bakker betaalt werknemer → werknemer koopt jas → enz. Veel transacties." }, { type: "laag", tekst: "Recessie: mensen sparen uit angst, bedrijven investeren niet → geld blijft staan." }],
          basiskennis: [{ onderwerp: "Niet 'altijd gelijk'", uitleg: "Snelheid varieert sterk per economische fase + per land." }],
          niveaus: { basis: "Hoogconjunctuur = snel. A.", simpeler: "In goede tijden geven mensen veel uit → geld wisselt sneller van eigenaar. = A.", nogSimpeler: "Boom = snel = A." },
        },
      },
      {
        q: "Stort jij **€1.000** op de bank. Wat gebeurt er ongeveer?",
        options: ["Bank houdt ~5% (€50) als reserve, leent ~€950 uit", "Geld blijft op jouw rekening, niets gebeurt", "Bank betaalt je vraagprijs", "Bank kan jouw geld nooit aanraken"],
        answer: 0,
        wrongHints: [null, "Niet 'niets' — bank verdient eraan.", "Geen vraagprijs.", "Bank gebruikt het wel — dat is hun businessmodel."],
        uitlegPad: {
          stappen: [{ titel: "Storten = uitlenen", tekst: "Bij storten: bank houdt 5% kasreserve (€50), leent 95% (€950) uit. Op jouw rekening staat nog steeds €1.000, maar dat geld doet 'dubbel werk' — jij ziet het + bank leent het uit." }],
          woorden: [{ woord: "kasreserve", uitleg: "Verplicht percentage dat bank moet aanhouden om opnames te kunnen doen (DNB-regel)." }],
          theorie: "Bij massa-opname stort het systeem in (bank run) want bank kan nooit alle uitgeleende geld direct terugkrijgen. Daarom DGS-garantie voor vertrouwen.",
          voorbeelden: [{ type: "jouw 1000", tekst: "€1.000 op rekening blijft staan. Bank leent €950 uit aan starter voor zaakje. Die starter betaalt leverancier. Geld werkt op 2 plekken tegelijk." }],
          basiskennis: [{ onderwerp: "Niet 'niets'", uitleg: "Bank kan jouw geld WEL aanraken — dat is het hele bankmodel. Jij hebt vordering, geen kluis." }],
          niveaus: { basis: "5% kas, 95% uitlenen. A.", simpeler: "Van €1.000 dat je stort houdt bank ~€50 in kas en leent ~€950 uit aan anderen. = A.", nogSimpeler: "Uitlenen = A." },
        },
      },
    ],
  },

  // ─── Stap 6: Inflatie en koopkracht ─────────────────────────
  {
    title: "Inflatie — waarom geld minder waard wordt",
    explanation: "**Inflatie**: prijzen stijgen gemiddeld. Een brood dat in 2010 €1,50 kostte, kost nu rond de €2,80. Dezelfde euro koopt **minder** dan vroeger.\n\nHet **CBS** meet inflatie met de **Consumentenprijsindex (CPI)**:\n• 2023 = basisjaar → CPI = 100\n• 2024: CPI = 104 → 4% inflatie\n• 2025: CPI = 108 → 8% sinds basisjaar\n\n**Koopkracht**: hoeveel je kunt kopen voor je geld.\n• Loon stijgt 2%, prijzen stijgen 4% → koopkracht **daalt** met ~2%.\n• Loon stijgt 5%, prijzen stijgen 2% → koopkracht **stijgt** met ~3%.\n\n**Waarom belangrijk voor sparen?**\nAls je 1% rente krijgt, maar inflatie is 3%, dan **verlies** je effectief 2% per jaar aan koopkracht. Je geld op de bank wordt minder waard.\n\n**Hyperinflatie** (zeldzaam): prijzen verdubbelen elke maand. In Duitsland 1923 kostte een brood miljarden mark. In Venezuela 2018 hetzelfde verhaal. Geld werd onbruikbaar.\n\n**Wat veroorzaakt inflatie?**\n• Energieprijzen stijgen (gas, olie)\n• Te veel geld in omloop\n• Krapte op de markt (vraag &gt; aanbod)",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">PRIJS VAN EEN BROOD</text>
<rect x="50" y="40" width="40" height="100" fill="${COLORS.geld}" opacity="0.5"/>
<text x="70" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2010</text>
<text x="70" y="170" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">€1,50</text>
<rect x="120" y="55" width="40" height="85" fill="${COLORS.warm}" opacity="0.5"/>
<text x="140" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2018</text>
<text x="140" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">€2,00</text>
<rect x="190" y="65" width="40" height="75" fill="${COLORS.oranje}" opacity="0.5"/>
<text x="210" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2023</text>
<text x="210" y="170" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial" font-weight="bold">€2,50</text>
<rect x="260" y="55" width="40" height="85" fill="${COLORS.aanbod}" opacity="0.6"/>
<text x="280" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2026</text>
<text x="280" y="170" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">€2,80</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">+87% in 16 jaar — dat is inflatie</text>
</svg>`,
    checks: [
      {
        q: "**CPI 2025 = 108** (basis 2023 = 100). Hoeveel zijn de prijzen gestegen sinds 2023?",
        options: ["8%", "108%", "0,8%", "1,08%"],
        answer: 0,
        wrongHints: [null, "Dat zou betekenen dat een brood van €1 nu €2,08 kost — te veel.", "Te klein.", "Dat is de factor (1,08) niet het percentage."],
        uitlegPad: {
          stappen: [{ titel: "Verschil met basis", tekst: "Basis = 100. Nu 108. Verschil 8. Op basis van 100 is dat 8% gestegen." }],
          woorden: [{ woord: "CPI", uitleg: "Consumentenprijsindex. Meet gemiddelde prijsstijging consumentengoederen." }, { woord: "indexcijfer", uitleg: "Getal dat verandering t.o.v. basisjaar (100) weergeeft." }],
          theorie: "Formule: stijging% = (nieuw − basis) / basis × 100% = (108 − 100) / 100 × 100% = 8%.",
          voorbeelden: [{ type: "rekenstap", tekst: "Mandje boodschappen 2023: €100. Mandje 2025: €108. Dus 8% duurder." }],
          basiskennis: [{ onderwerp: "Niet 108%", uitleg: "108 is het INDEXCIJFER (incl basis). Stijging is 8%, niet 108%." }],
          niveaus: { basis: "108 − 100 = 8%. A.", simpeler: "108 vergeleken met basis 100 → 8 boven 100 → 8% gestegen. = A.", nogSimpeler: "8% = A." },
        },
      },
      {
        q: "Je loon stijgt **2%**, prijzen stijgen **5%**. Wat gebeurt met je koopkracht?",
        options: ["Daalt met ongeveer 3%", "Stijgt met 2%", "Stijgt met 7%", "Blijft gelijk"],
        answer: 0,
        wrongHints: [null, "Loon stijgt wel, maar prijzen sneller.", "Niet optellen.", "Alleen gelijk als beide percentages gelijk zijn."],
        uitlegPad: {
          stappen: [{ titel: "Vuistregel reëel", tekst: "Reële verandering ≈ nominale loonstijging − inflatie. +2% − 5% = −3% → koopkracht daalt ~3%." }],
          woorden: [{ woord: "koopkracht", uitleg: "Hoeveel je kunt kopen voor je inkomen — gecorrigeerd voor prijsstijging." }, { woord: "reëel", uitleg: "Gecorrigeerd voor inflatie. Wat je daadwerkelijk kan kopen." }],
          theorie: "Loon harder stijgen dan prijzen = koopkracht UP. Prijzen harder = koopkracht DOWN. Hier: 2% < 5% → -3% koopkracht.",
          voorbeelden: [{ type: "praktijk", tekst: "Vorig jaar €30k inkomen + boodschappen €100/wk = je kocht 30000/100/52 = 5,77 mandjes per week. Nu €30,6k + boodschappen €105 → 5,60 mandjes. ~3% minder." }],
          basiskennis: [{ onderwerp: "Niet optellen", uitleg: "Loonstijging + inflatie OPTELLEN is fout. Aftrekken van loon de inflatie." }],
          niveaus: { basis: "2 − 5 = -3%. A.", simpeler: "Loon +2%, prijzen +5%. Prijzen winnen → je houdt ~3% minder over. = A.", nogSimpeler: "Daalt 3% = A." },
        },
      },
      {
        q: "Je krijgt **1% rente** op spaargeld, inflatie is **3%**. Wat doet je koopkracht?",
        options: ["Daalt met ongeveer 2% per jaar", "Stijgt met 1%", "Blijft precies gelijk", "Stijgt met 4%"],
        answer: 0,
        wrongHints: [null, "Rente alleen is geen winst — vergelijk met inflatie.", "Inflatie is hoger dan rente, dus daling.", "Niet optellen — vergelijk."],
        uitlegPad: {
          stappen: [{ titel: "Reële rente = nominaal − inflatie", tekst: "1% rente − 3% inflatie = -2% reëel. Je spaargeld groeit met 1% maar prijzen met 3% → over 1 jaar kun je MINDER kopen dan vandaag." }],
          woorden: [{ woord: "nominale rente", uitleg: "Wat bank op papier biedt. Hier 1%." }, { woord: "reële rente", uitleg: "Nominale rente min inflatie. Echte verandering in koopkracht." }],
          theorie: "Sparen tegen inflatie is een verliezerspartij sinds 2010s. Daarom 'spaargeld verliest waarde' — alleen risicovrije optie maar koopkrachtverlies meegerekend.",
          voorbeelden: [{ type: "berekening", tekst: "€1.000 spaargeld + 1% = €1.010 na 1 jaar. Maar mandje boodschappen €100 → €103 (3% inflatie). Vorig jaar 10 mandjes, nu €1.010/€103 = 9,8 mandjes. -2% koopkracht." }],
          basiskennis: [{ onderwerp: "Sparen ≠ winst", uitleg: "Bij hoge inflatie kost sparen koopkracht. Argument voor beleggen voor lange termijn." }],
          niveaus: { basis: "1 − 3 = -2%. A.", simpeler: "Rente 1% < inflatie 3% → koopkracht daalt 2%. Spaargeld minder waard. = A.", nogSimpeler: "Daalt 2% = A." },
        },
      },
      {
        q: "Wat zou inflatie kunnen **veroorzaken**?",
        options: ["Energieprijzen stijgen sterk (gas, olie)", "Iedereen krijgt meer salaris", "Belastingen worden afgeschaft", "Het regent veel"],
        answer: 0,
        wrongHints: [null, "Hogere lonen kunnen inflatie wel versterken, maar zijn het gevolg eerder dan oorzaak.", "Belasting heeft directer effect via kosten.", "Weer is geen economische factor."],
        uitlegPad: {
          stappen: [{ titel: "Kosten-push inflatie", tekst: "Als input-kosten stijgen (energie, grondstoffen), berekenen bedrijven dat door in eindprijs. Iedereen wordt geraakt. Energieprijs is grootste single driver van inflatie." }],
          woorden: [{ woord: "kosten-push", uitleg: "Inflatie veroorzaakt door stijgende productiekosten (grondstoffen, energie, lonen)." }, { woord: "vraag-pull", uitleg: "Inflatie door te veel vraag bij beperkt aanbod (krapte)." }],
          theorie: "Andere oorzaken: (1) ECB drukt te veel geld bij, (2) krapte op markt, (3) lonen stijgen sneller dan productiviteit, (4) verstoringen aanbod (oorlog, pandemie).",
          voorbeelden: [{ type: "2022", tekst: "Rusland-Oekraïne oorlog → gasprijs ×5 → alle Europese prijzen stegen (10% inflatie 2022)." }, { type: "1973", tekst: "Oliecrisis: OPEC-prijsverhoging → wereldwijde inflatie + recessie ('stagflatie')." }],
          basiskennis: [{ onderwerp: "Niet weer", uitleg: "Regen heeft geen direct economisch effect op inflatie." }],
          niveaus: { basis: "Energieprijs. A.", simpeler: "Als energie veel duurder wordt, wordt ALLES duurder (transport, productie). Dat is inflatie. = A.", nogSimpeler: "Energieprijs = A." },
        },
      },
      {
        q: "Wat is **hyperinflatie**?",
        options: ["Prijzen verdubbelen extreem snel — bv. elke maand", "Prijzen dalen", "Lonen verdubbelen", "Geen inflatie"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — dat is deflatie.", "Lonen kunnen ook stijgen maar nooit zo snel als hyperinflatie-prijzen.", "Hyper = veel meer dan normaal."],
        uitlegPad: {
          stappen: [{ titel: "Geld waardeloos", tekst: "Hyperinflatie = prijzen schieten zó snel omhoog (50%+/maand) dat geld zijn waarde verliest. Mensen ruilen liever direct of gebruiken vreemde valuta." }],
          woorden: [{ woord: "hyperinflatie", uitleg: "Extreme prijsstijging, meestal >50% per maand. Geld functioneert niet meer als ruilmiddel." }],
          theorie: "Oorzaken: meestal overheid drukt te veel geld bij om schulden te betalen. Klassiek: Duitsland 1923 (brood = miljarden mark), Zimbabwe 2008 (100-biljoen-dollar-biljet), Venezuela 2018.",
          voorbeelden: [{ type: "Duitsland 1923", tekst: "Brood 1922: 160 mark → 1923: 200 miljard mark. Mensen droegen geld in kruiwagens." }, { type: "Venezuela", tekst: "Inflatie 1.000.000%/jaar in 2018. Mensen gebruikten Amerikaanse dollar uit nood." }],
          basiskennis: [{ onderwerp: "Niet deflatie", uitleg: "Hyperinflatie = extreem omhoog. Deflatie = omlaag. Hyper = veel meer dan normaal." }],
          niveaus: { basis: "Extreem snelle stijging. A.", simpeler: "Hyperinflatie = prijzen verdubbelen niet jaarlijks maar bv. maandelijks. Geld waardeloos. = A.", nogSimpeler: "Geld waardeloos = A." },
        },
      },
    ],
  },
  // ─── Stap 7: Begroten ──────────────────────────────────────────
  {
    title: "Begroten — heb ik geld over aan het einde van de maand?",
    explanation: "Een **begroting** = overzicht van wat erin komt en uit gaat per maand. Dat helpt je doelen halen (rijbewijs, vakantie) en voorkomen dat je rood staat.\n\n**Inkomsten**: alles wat binnenkomt.\n• Zakgeld\n• Bijbaan-loon (bv. vakkenvuller €60-€200/mnd)\n• Studiefinanciering (later)\n• Toeslagen\n\n**Uitgaven**: opgesplitst in **vast** en **variabel**.\n\n**Vaste uitgaven** (komen elke maand terug):\n• Telefoon abonnement (€10-€25)\n• Streamingdiensten (Spotify, Netflix)\n• Sport-abonnement\n• Verzekeringen\n\n**Variabele uitgaven** (anders elke maand):\n• Boodschappen, uit eten\n• Kleding\n• Uitgaan, bioscoop\n• Vervoer (OV-chipkaart, benzine)\n\n**Sparen** = zet apart vóórdat je uitgeeft (de '50/30/20-regel'):\n• 50% noodzaak\n• 30% leuke dingen\n• 20% sparen\n\n**Voorbeeld**: bijbaan-loon €240/mnd.\n• 50% = €120 → telefoon, OV, basis\n• 30% = €72 → uitgaan, kleding\n• 20% = €48 → sparen voor rijbewijs\n\n**Overschot/tekort**:\n• Inkomsten &gt; uitgaven → **overschot** (kan sparen)\n• Inkomsten &lt; uitgaven → **tekort** (rood staan, schulden)",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BEGROTEN — €240/mnd bijbaan</text>
<rect x="40" y="40" width="240" height="40" rx="6" fill="${COLORS.geld}" opacity="0.3" stroke="${COLORS.geld}"/>
<text x="160" y="65" text-anchor="middle" fill="${COLORS.geld}" font-size="14" font-family="Arial" font-weight="bold">INKOMSTEN €240</text>
<rect x="40" y="100" width="120" height="35" rx="6" fill="${COLORS.vraag}" opacity="0.3" stroke="${COLORS.vraag}"/>
<text x="100" y="118" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">50% NOODZAAK</text>
<text x="100" y="131" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€120</text>
<rect x="170" y="100" width="72" height="35" rx="6" fill="${COLORS.warm}" opacity="0.3" stroke="${COLORS.warm}"/>
<text x="206" y="118" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">30% LEUK</text>
<text x="206" y="131" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€72</text>
<rect x="252" y="100" width="48" height="35" rx="6" fill="${COLORS.alt}" opacity="0.3" stroke="${COLORS.alt}"/>
<text x="276" y="118" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">20% SPAAR</text>
<text x="276" y="131" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€48</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€48 × 12 mnd = €576/jaar</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">In 4 jaar: rijbewijs! 🚗</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">de 50/30/20-regel</text>
</svg>`,
    checks: [
      {
        q: "Welke uitgave is een **vaste uitgave**?",
        options: ["Spotify-abonnement (elke maand zelfde bedrag)", "Boodschappen", "Een nieuwe broek", "Bioscoop-bezoek"],
        answer: 0,
        wrongHints: [null, "Boodschappen wisselen per maand → variabel.", "Een broek is incidenteel, niet maandelijks.", "Bioscoop wisselt — niet elke maand precies hetzelfde."],
      },
      {
        q: "Inkomsten **€350**, uitgaven **€420** in een maand. Wat is je situatie?",
        options: ["Tekort van €70 — je teert in op spaargeld of staat rood", "Overschot van €70", "Het maakt niet uit", "Je krijgt €70 toeslag"],
        answer: 0,
        wrongHints: [null, "Andersom — uitgaven zijn hoger.", "Het maakt heel veel uit — kan tot schulden leiden.", "Toeslagen krijg je niet automatisch bij tekort."],
      },
      {
        q: "Volgens de **50/30/20-regel**: bij €400 inkomsten — hoeveel sparen?",
        options: ["€80", "€200", "€120", "€40"],
        answer: 0,
        wrongHints: [null, "Dat is 50% — noodzaak.", "Dat is 30% — leuke dingen.", "Dat is 10% — wel sparen, maar minder dan de regel."],
      },
      {
        q: "Waarom is **eerst sparen, dan uitgeven** beter dan andersom?",
        options: ["Anders blijft er aan het einde van de maand niets over", "Sparen kost belasting", "Spaarrente is altijd 0%", "Banken sluiten je rekening anders"],
        answer: 0,
        wrongHints: [null, "Sparen kost niet meer belasting.", "Rente kan ook hoger zijn dan 0%.", "Banken sluiten geen rekeningen omdat je niet spaart."],
      },
      {
        q: "Anna heeft **€60 zakgeld** + **€80 bijbaan**. Streaming **€10**, telefoon **€15**, OV **€20**, uitgaan **€60**. Hoeveel kan zij sparen?",
        options: ["€35", "€10", "€60", "€105"],
        answer: 0,
        wrongHints: [null, "Te weinig — tel inkomsten + trek uitgaven af.", "Dat zou alleen uitgaan zijn.", "Te veel — uitgaven niet vergeten."],
      },
      {
        q: "Wat is een **buffer** op je spaarrekening?",
        options: ["Geld voor onverwachte uitgaven (telefoon stuk, fiets gestolen)", "Verplicht door de bank", "Een soort lening", "Cashback van Klarna"],
        answer: 0,
        wrongHints: [null, "Niet verplicht maar verstandig.", "Geen lening — eigen geld.", "Geen cadeau — spaargeld is van jou."],
      },
    ],
  },
  // ─── Stap 8: Lenen — kredietvormen ─────────────────────────
  {
    title: "Lenen — wanneer wel, wanneer niet",
    explanation: "**Lenen** = geld krijgen dat je **later moet terugbetalen**, vaak met **rente**. De bank verdient aan rente.\n\n**Soorten leningen** (van laag naar hoog risico voor jou):\n\n**1. Hypotheek** — voor een huis (looptijd 20-30 jaar). Het huis is **onderpand**: kun je niet betalen, dan wordt het huis verkocht. Lage rente want de bank loopt weinig risico.\n\n**2. Studielening (DUO)** — voor studenten. Lage rente, terugbetalen pas als je verdient. Geen BKR-registratie.\n\n**3. Persoonlijke lening** — vast bedrag, vaste maandlasten over 1-5 jaar. Voor bv. auto, verbouwing.\n\n**4. Doorlopend krediet** — kredietruimte tot een limiet. Flexibel, maar **hoge rente** en risico op groeiende schuld.\n\n**5. Rood staan** — tijdelijk negatief op je betaalrekening. **Heel hoge rente** (10-15%/jaar).\n\n**6. Achteraf betalen / Klarna** — populair maar bij niet betalen: hoge boetes, deurwaarder, BKR-registratie. Je staat dan jaren bekend als 'wanbetaler' en krijgt later geen hypotheek.\n\n**Voor leningen kijkt de bank naar**:\n• **Inkomen**: kun je het terugbetalen?\n• **BKR-registratie**: heb je nu al schulden?\n• **Onderpand**: huis, auto?\n\n**Vuistregel**: je vaste maandlasten (huur + leningen) moeten **maximaal 30% van je netto-inkomen** zijn.\n\n**Wanneer is lenen OK?**\n• Voor iets dat **lang meegaat** (huis, opleiding) en/of geld oplevert.\n\n**Wanneer NIET?**\n• Voor een vakantie, kleren, telefoon → eerst sparen.",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">LENINGEN — RENTE-NIVEAU</text>
<rect x="20" y="40" width="280" height="22" rx="4" fill="${COLORS.geld}" opacity="0.3"/>
<text x="30" y="56" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">HYPOTHEEK</text>
<text x="270" y="56" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">~4%</text>
<rect x="20" y="65" width="280" height="22" rx="4" fill="${COLORS.geld}" opacity="0.3"/>
<text x="30" y="81" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">STUDIELENING</text>
<text x="270" y="81" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">~3%</text>
<rect x="20" y="90" width="280" height="22" rx="4" fill="${COLORS.warm}" opacity="0.3"/>
<text x="30" y="106" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">PERSOONLIJK</text>
<text x="270" y="106" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">~7%</text>
<rect x="20" y="115" width="280" height="22" rx="4" fill="${COLORS.oranje}" opacity="0.3"/>
<text x="30" y="131" fill="${COLORS.oranje}" font-size="11" font-family="Arial" font-weight="bold">DOORLOPEND</text>
<text x="270" y="131" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">~10%</text>
<rect x="20" y="140" width="280" height="22" rx="4" fill="${COLORS.aanbod}" opacity="0.3"/>
<text x="30" y="156" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">ROOD STAAN</text>
<text x="270" y="156" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">~12%</text>
<rect x="20" y="165" width="280" height="22" rx="4" fill="${COLORS.rood}" opacity="0.4"/>
<text x="30" y="181" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">KLARNA TE LAAT</text>
<text x="270" y="181" text-anchor="end" fill="${COLORS.text}" font-size="11" font-family="Arial">+ boetes!</text>
<text x="160" y="208" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vuistregel: max 30% netto-inkomen aan lasten</text>
</svg>`,
    checks: [
      {
        q: "Welke lening heeft een **huis als onderpand**?",
        options: ["Hypotheek", "Persoonlijke lening", "Rood staan", "Doorlopend krediet"],
        answer: 0,
        wrongHints: [null, "Geen onderpand — daarom hogere rente.", "Voor kortdurend tekort, geen onderpand.", "Geen vast onderpand."],
      },
      {
        q: "Waarom heeft **rood staan** een hoge rente?",
        options: ["Geen onderpand, kort termijn — bank loopt risico", "Banken willen klanten straffen", "Het is illegaal", "Door de overheid bepaald"],
        answer: 0,
        wrongHints: [null, "Niet om te straffen — risico-prijs.", "Rood staan is wel legaal binnen je limiet.", "Rente bepaalt de bank."],
      },
      {
        q: "Wat is een **BKR-toets**?",
        options: ["Check of je al andere schulden of betalingsproblemen hebt", "Examen voor bankmedewerkers", "Belastingaanslag", "Spaarrekening met bonus"],
        answer: 0,
        wrongHints: [null, "BKR is een register, geen opleiding.", "Niets met belasting.", "Geen spaarproduct."],
      },
      {
        q: "Bij netto inkomen **€2.000/mnd**: welk maximum aan vaste maandlasten volgt uit de 30%-regel?",
        options: ["€600", "€2.000", "€300", "€1.000"],
        answer: 0,
        wrongHints: [null, "Dat zou je hele inkomen zijn.", "Te weinig — dat is 15%.", "Net te veel — dat is 50%."],
      },
      {
        q: "Wanneer is lenen meestal **zinvol**?",
        options: ["Voor een huis of opleiding (lang meegaan, leveren waarde op)", "Voor een vakantie", "Voor een nieuwe telefoon", "Voor kleren"],
        answer: 0,
        wrongHints: [null, "Vakantie levert geen geld op — eerst sparen.", "Telefoon: spaar liever.", "Kleren: niet lenen."],
      },
      {
        q: "Wat gebeurt er als je **Klarna 'achteraf' niet op tijd betaalt**?",
        options: ["Hoge boetes, daarna deurwaarder + BKR-registratie", "Klarna scheldt het kwijt", "Je krijgt extra tijd zonder kosten", "Klarna betaalt het zelf"],
        answer: 0,
        wrongHints: [null, "Klarna scheldt niets kwijt — schuld blijft bestaan.", "Extra tijd kost geld — boetes lopen op.", "Klarna verdient eraan, betaalt niets zelf."],
      },
    ],
  },
  // ─── Stap 9: Hypotheek in detail ───────────────────────────
  {
    title: "Hypotheek — een huis kopen",
    explanation: "Een **hypotheek** is een lange lening om een huis te kopen. Je leent vaak het overgrote deel van de huisprijs van een bank. Het huis is **onderpand** — kun je niet betalen, dan verkoopt de bank het huis.\n\n**Looptijd**: meestal **30 jaar**.\n\n**Twee veelvoorkomende vormen**:\n\n**1. Annuïteitenhypotheek**\n• **Vaste maandlast** elk jaar (gemiddeld over de looptijd).\n• Eerst betaal je veel rente, weinig aflossing.\n• Aan het eind: weinig rente, veel aflossing.\n• Populair bij starters.\n\n**2. Lineaire hypotheek**\n• **Vaste aflossing** elke maand.\n• Eerst hoge maandlast (rente over hele bedrag).\n• Wordt elk jaar lager.\n• Goedkoper over de hele looptijd, maar in begin hoger.\n\n**Voorbeeld**: huis kost €350.000.\n• Eigen geld: €30.000.\n• Hypotheek: €320.000 over 30 jaar.\n• Rente 4% → maandlast ongeveer **€1.530**.\n\n**Maximale hypotheek** = afhankelijk van je inkomen (bruto). Vuistregel: ongeveer 4-5× je bruto jaarsalaris.\n\n**Bijkomende kosten** (komen bovenop de huisprijs):\n• **Overdrachtsbelasting** (2% voor starters tot 35 jaar: 0%)\n• **Notaris** (~€2.000)\n• **Taxatie** (~€500)\n• **Hypotheekadvies** (~€2.500)\n\n**Aandachtspunten**:\n• Werkloos worden = inkomen weg = hypotheek niet betalen = huis kwijt\n• Daarom **buffer** op spaarrekening (minimaal 3-6 maanden lasten)\n• Verzekering: arbeidsongeschiktheid, overlijdensrisico",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">HYPOTHEEK €320.000 / 30 jr / 4%</text>
<text x="160" y="42" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">maandlast ongeveer €1.530</text>
<rect x="20" y="60" width="135" height="80" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="87" y="78" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">ANNUÏTEIT</text>
<text x="87" y="95" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vaste maandlast</text>
<text x="87" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">veel rente eerst</text>
<text x="87" y="121" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">weinig aflossing</text>
<text x="87" y="134" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">populair bij starters</text>
<rect x="165" y="60" width="135" height="80" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="232" y="78" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">LINEAIR</text>
<text x="232" y="95" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vaste aflossing</text>
<text x="232" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">hoog begin</text>
<text x="232" y="121" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">daalt elk jaar</text>
<text x="232" y="134" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">goedkoper totaal</text>
<rect x="40" y="155" width="240" height="50" rx="6" fill="rgba(255,213,79,0.10)" stroke="${COLORS.warm}" stroke-width="1.2" stroke-dasharray="3 2"/>
<text x="160" y="173" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">+ EXTRA KOSTEN</text>
<text x="160" y="187" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">notaris €2.000 · taxatie €500</text>
<text x="160" y="199" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">advies €2.500 · overdrachtsbel.</text>
</svg>`,
    checks: [
      {
        q: "Wat is het belangrijkste verschil tussen **annuïteit** en **lineaire** hypotheek?",
        options: ["Annuïteit heeft vaste maandlast, lineair heeft vaste aflossing", "Annuïteit is voor huurders", "Lineair is alleen voor BV's", "Geen verschil"],
        answer: 0,
        wrongHints: [null, "Hypotheek is altijd voor kopers, niet huurders.", "Niet bedrijfs-specifiek.", "Echte verschillen in maandlast en totale kosten."],
      },
      {
        q: "Wat is **onderpand** bij een hypotheek?",
        options: ["Het huis — bij niet betalen verkoopt de bank het", "Een spaarrekening", "Een verzekering", "Een toeslag"],
        answer: 0,
        wrongHints: [null, "Spaarrekening is iets anders.", "Verzekering kan helpen, maar onderpand = het huis zelf.", "Toeslagen hebben hier niets mee te maken."],
      },
      {
        q: "Een huis kost **€350.000**, je hebt **€30.000** eigen geld. Hoeveel hypotheek heb je nodig?",
        options: ["€320.000", "€380.000", "€350.000", "€30.000"],
        answer: 0,
        wrongHints: [null, "Eigen geld haal je af, niet erbij.", "Je hebt eigen geld — minder lenen.", "Dat is alleen je eigen inbreng, niet de lening."],
      },
      {
        q: "Maximale hypotheek hangt vooral af van:",
        options: ["Je bruto-inkomen", "Je leeftijd alleen", "De prijs van het huis alleen", "Hoe blij je bent"],
        answer: 0,
        wrongHints: [null, "Leeftijd speelt mee, maar inkomen is hoofdfactor.", "Hoge prijs ≠ automatisch grote hypotheek mogelijk.", "Geen economische factor."],
      },
      {
        q: "Welke kosten komen **bovenop** de huisprijs bij koop?",
        options: ["Notaris, taxatie, advies en eventueel overdrachtsbelasting", "Alleen extra rente", "Niets", "Een huis-cadeau"],
        answer: 0,
        wrongHints: [null, "Rente is wel kost, maar niet bij koop — gedurende lening.", "Echt veel bijkomende kosten — denk €5.000 startersregel.", "Geen cadeau — koop is duur."],
      },
      {
        q: "Waarom is een **buffer** op de spaarrekening nuttig als je een hypotheek hebt?",
        options: ["Bij werkloosheid of ziekte kun je nog enkele maanden de hypotheek betalen", "Banken eisen het", "Spaargeld levert hypotheek-korting op", "Het is verboden om geen buffer te hebben"],
        answer: 0,
        wrongHints: [null, "Banken adviseren het wel, eisen meestal niet.", "Geen automatische korting.", "Geen verbod, wel verstandig."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeGeldSparenLenen = {
  id: "pincode-geld-sparen-lenen",
  title: "Geld, sparen en lenen",
  emoji: "💱",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk 2",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "procenten-po", title: "Procenten", niveau: "po-1F" },
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
  intro:
    "Hoofdstuk 2 van Pincode 7e ed. VMBO-GT 4 (en andere methodes): geld + betaalmiddelen, sparen of beleggen, geldcirculatie, inflatie, begroten, lenen + hypotheek. 9 stappen, concrete voorbeelden voor tieners. Volledige Pincode-paragraaf 2.1-2.4 dekking + examen-voorbereiding compleet.",
  triggerKeywords: [
    "geld",
    "ruilhandel",
    "ruilmiddel",
    "rekenmiddel",
    "spaarmiddel",
    "chartaal",
    "giraal",
    "betaalmiddel",
    "pin",
    "contactloos",
    "creditcard",
    "klarna",
    "afterpay",
    "achteraf betalen",
    "bank",
    "sparen",
    "rente",
    "samengestelde rente",
    "spaarrekening",
    "betaalrekening",
    "beleggen",
    "belegging",
    "aandeel",
    "aandelen",
    "obligatie",
    "obligaties",
    "etf",
    "beleggingsfonds",
    "rendement",
    "risico",
    "spreiden",
    "spreiding",
    "vastgoed",
    "crypto",
    "bitcoin",
    "dividend",
    "koerswinst",
    "beurs",
    "degiro",
    "sparen of beleggen",
    "geld moet rollen",
    "geldcirculatie",
    "geldkringloop",
    "geldschepping",
    "geldhoeveelheid",
    "m0", "m1", "m2", "m3",
    "kasreserve",
    "bank run",
    "dgs",
    "depositogarantiestelsel",
    "kringloop",
    "inflatie",
    "koopkracht",
    "cpi",
    "consumentenprijsindex",
    "hyperinflatie",
    "begroten",
    "begroting",
    "vaste uitgaven",
    "variabele uitgaven",
    "50/30/20",
    "buffer",
    "lenen",
    "krediet",
    "hypotheek",
    "annuiteit",
    "lineaire hypotheek",
    "persoonlijke lening",
    "doorlopend krediet",
    "rood staan",
    "bkr",
    "onderpand",
    "studielening",
    "duo",
    "pincode hoofdstuk 2",
    "pincode hoofdstuk b",
  ],
  chapters,
  steps,
};

export default pincodeGeldSparenLenen;
