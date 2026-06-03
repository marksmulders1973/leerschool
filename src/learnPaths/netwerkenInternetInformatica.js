// Leerpad: Netwerken & internet — Informatica HAVO/VWO
// Netwerk-basics, IP + DNS, pakketjes + protocollen (TCP/IP), het web (HTTP).
// 4 stappen × ~3-4 checks.

const stepEmojis = ["🌐", "📫", "📦", "🔗"];

const chapters = [
  { letter: "A", title: "Wat is een netwerk?", emoji: "🌐", from: 0, to: 0 },
  { letter: "B", title: "IP-adres & DNS", emoji: "📫", from: 1, to: 1 },
  { letter: "C", title: "Pakketjes & protocollen", emoji: "📦", from: 2, to: 2 },
  { letter: "D", title: "Het web — HTTP(S)", emoji: "🔗", from: 3, to: 3 },
];

const steps = [
  // ─── A. Wat is een netwerk? ───────────────────────────────
  {
    title: "Wat is een netwerk?",
    explanation:
      "Een **netwerk** is een groep apparaten (computers, telefoons, servers) die met elkaar **verbonden** zijn en data kunnen uitwisselen.\n\n**Soorten netwerken naar grootte:**\n• **LAN** (Local Area Network) — klein, bv. je huis of een school.\n• **WAN** (Wide Area Network) — groot, over lange afstand.\n• **Het internet** = een **netwerk van netwerken**: miljoenen LANs en WANs aan elkaar geknoopt, wereldwijd.\n\n**Belangrijk verschil — internet ≠ web:**\n• Het **internet** is de **infrastructuur** (de kabels, routers, verbindingen).\n• Het **world wide web** (www) is **één van de diensten** die over het internet loopt (websites). E-mail, videobellen, games en streaming zijn andere diensten over hetzelfde internet.\n\n**Client–server:**\n• Een **client** vraagt iets (bv. je browser of telefoon).\n• Een **server** levert het (een krachtige computer die altijd 'aan' staat, bv. die een website of YouTube-video bewaart).\nVeel internetverkeer werkt zo: client vraagt → server antwoordt.",
    checks: [
      {
        q: "Wat is **het internet**?",
        options: ["Een wereldwijd netwerk van netwerken", "Eén grote computer", "Een website", "Een programmeertaal"],
        answer: 0,
        wrongHints: [null, "Het is niet één machine, maar heel veel verbonden netwerken.", "Een website is iets dát op internet staat, niet het internet zelf.", "Een taal is iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Netwerk van netwerken", tekst: "Het **internet** is een wereldwijd **netwerk van netwerken**: miljoenen kleine (LAN) en grote (WAN) netwerken aan elkaar verbonden via kabels en routers. Het is de infrastructuur waarover diensten zoals het web, e-mail en streaming lopen." }],
          niveaus: { basis: "Netwerk van netwerken. A.", simpeler: "Internet = netwerken aan elkaar = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is het verschil tussen het **internet** en het **web** (www)?",
        options: ["Internet = de infrastructuur; web = één dienst erop (websites)", "Ze zijn precies hetzelfde", "Het web is groter dan het internet", "Het web bestaat uit kabels, internet uit sites"],
        answer: 0,
        wrongHints: [null, "Er is wel degelijk verschil.", "Andersom: het web is een deel van wat over internet loopt.", "Verwisseld: de kabels zijn het internet."],
        uitlegPad: {
          stappen: [{ titel: "Web = één dienst", tekst: "Het **internet** is de **infrastructuur** (kabels, routers). Het **web** (websites) is **één van de diensten** die daarover loopt — net als e-mail, videobellen en streaming. Dus: het web zit óp het internet, niet andersom." }],
          niveaus: { basis: "Internet = kabels, web = sites. A.", simpeler: "Web is een dienst óp internet = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "In het **client–server**-model: wat doet de **server**?",
        options: ["Levert wat de client vraagt", "Vraagt iets aan jou", "Is altijd een telefoon", "Verbindt geen apparaten"],
        answer: 0,
        wrongHints: [null, "Dat is juist de rol van de client.", "Een server is meestal een krachtige, altijd-aan computer.", "Een server is juist het hart van veel verbindingen."],
        uitlegPad: {
          stappen: [{ titel: "Vragen en leveren", tekst: "Een **client** (jouw browser/telefoon) **vraagt** iets; een **server** (krachtige, altijd-aan computer) **levert** het — bv. een webpagina of een video. Veel internetverkeer is: client vraagt → server antwoordt." }],
          niveaus: { basis: "Server levert. A.", simpeler: "Server = levert wat client vraagt = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. IP-adres & DNS ────────────────────────────────────
  {
    title: "IP-adres & DNS",
    explanation:
      "Om data naar het juiste apparaat te sturen, heeft elk apparaat op een netwerk een **IP-adres** (Internet Protocol-adres) — als een huisadres.\n\n**IPv4:** vier getallen 0-255, bv. `145.7.220.13`. Probleem: er zijn er 'maar' ~4,3 miljard — te weinig voor alle apparaten.\n**IPv6:** veel langer (hexadecimaal), praktisch onuitputtelijk — de nieuwe standaard.\n\n**DNS — het 'telefoonboek' van internet:**\nMensen onthouden liever `leerkwartier.app` dan `145.7.220.13`. **DNS** (Domain Name System) vertaalt een **domeinnaam** naar het bijbehorende **IP-adres**.\n\nWat er gebeurt als je een site opent:\n1. Je typt `leerkwartier.app`.\n2. Je computer vraagt aan een **DNS-server**: 'welk IP hoort hierbij?'.\n3. DNS antwoordt met het IP-adres.\n4. Pas dán kan je computer verbinding maken met de juiste server.\n\nDus: **domeinnaam → (via DNS) → IP-adres → de server**. Zonder DNS zou je overal getallen moeten intypen.",
    checks: [
      {
        q: "Wat is een **IP-adres**?",
        options: ["Een uniek adres van een apparaat op een netwerk", "De naam van een website", "Een wachtwoord", "Een soort virus"],
        answer: 0,
        wrongHints: [null, "Dat is de domeinnaam — die hoort wél bij een IP, maar is iets anders.", "Een IP-adres is geen wachtwoord.", "Het heeft niets met malware te maken."],
        uitlegPad: {
          stappen: [{ titel: "Het huisadres van een apparaat", tekst: "Een **IP-adres** (bv. `145.7.220.13`) identificeert een apparaat op een netwerk — als een huisadres, zodat data op de juiste plek aankomt. IPv4 = vier getallen 0-255; IPv6 is veel langer omdat IPv4-adressen bijna op zijn." }],
          niveaus: { basis: "Adres van een apparaat. A.", simpeler: "IP = apparaat-adres = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat doet **DNS** (Domain Name System)?",
        options: ["Vertaalt een domeinnaam naar een IP-adres", "Beveiligt je wachtwoord", "Maakt websites sneller laden", "Slaat je bestanden op"],
        answer: 0,
        wrongHints: [null, "Beveiliging is een andere taak (bv. HTTPS).", "Dat is iets anders (caching/CDN).", "Opslag is niet de taak van DNS."],
        uitlegPad: {
          stappen: [{ titel: "Het telefoonboek van internet", tekst: "**DNS** vertaalt een leesbare **domeinnaam** (`leerkwartier.app`) naar het bijbehorende **IP-adres**, zodat je computer weet met welke server hij moet verbinden. Daarom hoef je geen getallen te onthouden — DNS doet de vertaling." }],
          niveaus: { basis: "Naam → IP. A.", simpeler: "DNS = naam naar IP = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarom is er **IPv6** gekomen naast IPv4?",
        options: ["IPv4-adressen raken op (te weinig)", "IPv6 is mooier om te lezen", "IPv4 is verboden", "Voor betere kleuren"],
        answer: 0,
        wrongHints: [null, "Leesbaarheid was niet de reden — IPv6 is juist langer/complexer.", "IPv4 wordt nog volop gebruikt.", "Kleuren hebben hier niets mee te maken."],
        uitlegPad: {
          stappen: [{ titel: "~4,3 miljard is te weinig", tekst: "IPv4 heeft maar ~4,3 miljard adressen — te weinig voor alle telefoons, laptops en slimme apparaten. **IPv6** gebruikt veel langere (hexadecimale) adressen → praktisch onuitputtelijk. Daarom schakelt het internet geleidelijk over." }],
          niveaus: { basis: "IPv4 raakt op. A.", simpeler: "Te weinig IPv4 → IPv6 = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Pakketjes & protocollen ───────────────────────────
  {
    title: "Pakketjes & protocollen",
    explanation:
      "Data gaat niet in één keer als één geheel over internet, maar wordt opgeknipt in kleine **pakketjes** (packets).\n\n**Hoe het werkt:**\n• Een bestand/bericht wordt in **pakketjes** verdeeld.\n• Elk pakketje krijgt een 'label': afzender-IP, ontvanger-IP en een **volgnummer**.\n• De pakketjes reizen via **routers** — apparaten die op elk kruispunt de snelste/beste weg kiezen. Verschillende pakketjes kunnen **verschillende routes** nemen.\n• Bij de ontvanger worden ze met de volgnummers **weer in de juiste volgorde** gezet.\n• Raakt een pakketje kwijt? Dan wordt het **opnieuw gestuurd**.\n\n**Protocollen = afspraken:**\nApparaten van verschillende makers moeten elkaar begrijpen. Een **protocol** is een afspraak/'taal' voor de communicatie.\n• **TCP/IP** is de basis-afsprakenset van internet:\n  - **IP** zorgt voor de **adressering** + routering (waar moet het heen).\n  - **TCP** zorgt dat alle pakketjes **compleet en in de juiste volgorde** aankomen (en hersturen bij verlies).\n\nDankzij dit pakketjes-systeem is internet robuust: valt één route uit, dan gaan de pakketjes via een andere weg.",
    checks: [
      {
        q: "Hoe gaat data over internet?",
        options: ["Opgeknipt in kleine pakketjes", "Altijd als één groot geheel", "Alleen als tekst", "Nooit via routers"],
        answer: 0,
        wrongHints: [null, "Juist niet als geheel — het wordt opgeknipt.", "Ook beeld en geluid gaan zo (als bits in pakketjes).", "Routers zijn juist essentieel."],
        uitlegPad: {
          stappen: [{ titel: "Opknippen en weer samenvoegen", tekst: "Data wordt in kleine **pakketjes** geknipt. Elk pakketje heeft afzender, ontvanger en een **volgnummer**, reist via **routers** (mogelijk verschillende routes), en wordt bij de ontvanger met de volgnummers weer in de juiste volgorde gezet. Kwijt? Opnieuw sturen." }],
          niveaus: { basis: "In pakketjes. A.", simpeler: "Data = pakketjes = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **protocol** in een netwerk?",
        options: ["Een afspraak/'taal' voor communicatie tussen apparaten", "Een soort kabel", "Een wachtwoord", "Een website"],
        answer: 0,
        wrongHints: [null, "Een protocol is een afspraak, geen fysieke kabel.", "Het is geen wachtwoord.", "Een website is iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Dezelfde regels", tekst: "Een **protocol** is een **afspraak** (set regels) zodat apparaten van verschillende makers elkaar begrijpen. **TCP/IP** is de basis van internet: IP regelt de adressering + route, TCP zorgt dat alle pakketjes compleet en in volgorde aankomen." }],
          niveaus: { basis: "Afspraak voor communicatie. A.", simpeler: "Protocol = afspraak = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk deel van **TCP/IP** zorgt dat pakketjes **compleet en in de juiste volgorde** aankomen?",
        options: ["TCP", "IP", "DNS", "HTTP"],
        answer: 0,
        wrongHints: [null, "IP regelt de adressering/route, niet de volgorde-controle.", "DNS vertaalt namen naar IP's — andere taak.", "HTTP is voor het web, niet voor de volgorde van pakketjes."],
        uitlegPad: {
          stappen: [{ titel: "IP adresseert, TCP controleert", tekst: "**IP** zorgt voor het **adres + de route** (waar moet het heen). **TCP** zorgt voor de **betrouwbaarheid**: het zet pakketjes in de juiste volgorde, controleert of alles binnen is en laat ontbrekende pakketjes opnieuw sturen." }],
          niveaus: { basis: "TCP. A.", simpeler: "Volgorde/compleet = TCP = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Het web — HTTP(S) ─────────────────────────────────
  {
    title: "Het web — HTTP(S)",
    explanation:
      "Het **world wide web** is de wereld van **websites**, en die werken met het protocol **HTTP** (HyperText Transfer Protocol).\n\n**Wat gebeurt er als je een site bezoekt:**\n1. Je typt een **URL** in, bv. `https://leerkwartier.app/cito`.\n   - `https` = het protocol\n   - `leerkwartier.app` = het domein (→ via DNS naar een IP)\n   - `/cito` = het pad naar een specifieke pagina\n2. Je **browser (client)** stuurt een **HTTP-request** naar de **server**.\n3. De server stuurt een **HTTP-response** terug: de HTML, plaatjes, enz.\n4. Je browser zet die code om in de pagina die je ziet.\n\n**HTTP vs HTTPS:**\n• **HTTP** = onversleuteld — anderen op het netwerk zouden kunnen meelezen.\n• **HTTPS** = HTTP **met versleuteling** (TLS). Het slotje 🔒 in de adresbalk betekent dat je verbinding **beveiligd** is — belangrijk bij wachtwoorden en betalingen.\n\n**Korte samenvatting van een bezoek:** URL → DNS zoekt het IP → browser stuurt HTTP-request → server stuurt de pagina terug → browser toont 'm. Bij **HTTPS** is dat verkeer onderweg versleuteld.",
    checks: [
      {
        q: "Welk protocol gebruikt het **web** (websites)?",
        options: ["HTTP(S)", "DNS", "MP3", "USB"],
        answer: 0,
        wrongHints: [null, "DNS vertaalt namen naar IP's — geen webprotocol op zich.", "MP3 is een geluidsformaat.", "USB is een fysieke aansluiting."],
        uitlegPad: {
          stappen: [{ titel: "HyperText Transfer Protocol", tekst: "Websites werken met **HTTP** (HyperText Transfer Protocol): je browser stuurt een **request**, de server stuurt een **response** (de HTML + plaatjes) terug. **HTTPS** is dezelfde afspraak, maar dan **versleuteld**." }],
          niveaus: { basis: "HTTP(S). A.", simpeler: "Web = HTTP = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat betekent het **slotje 🔒 / HTTPS** in de adresbalk?",
        options: ["Je verbinding met de site is versleuteld (beveiligd)", "De site is gratis", "De site is populair", "De site is van de overheid"],
        answer: 0,
        wrongHints: [null, "Het zegt niets over de prijs.", "Het zegt niets over populariteit.", "Iedere site kan HTTPS hebben, niet alleen de overheid."],
        uitlegPad: {
          stappen: [{ titel: "Versleuteld verkeer", tekst: "**HTTPS** = HTTP **met versleuteling** (TLS). Het slotje 🔒 betekent dat het verkeer tussen jou en de server **versleuteld** is, zodat anderen op het netwerk niet kunnen meelezen. Belangrijk bij wachtwoorden en betalingen. Let op: het garandeert niet dat de site zelf eerlijk is." }],
          niveaus: { basis: "Versleuteld/beveiligd. A.", simpeler: "🔒 = beveiligde verbinding = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "In de URL `https://leerkwartier.app/cito` is **`leerkwartier.app`** het…",
        options: ["Domein (wordt via DNS een IP)", "Protocol", "Pad naar een pagina", "Wachtwoord"],
        answer: 0,
        wrongHints: [null, "Het protocol is het `https`-deel.", "Het pad is `/cito`.", "Er staat geen wachtwoord in een gewone URL."],
        uitlegPad: {
          stappen: [{ titel: "Een URL ontleden", tekst: "In `https://leerkwartier.app/cito`: `https` = **protocol**, `leerkwartier.app` = **domein** (DNS vertaalt dit naar een IP-adres), `/cito` = **pad** naar een specifieke pagina. De browser gebruikt het domein om de juiste server te vinden." }],
          niveaus: { basis: "Het domein. A.", simpeler: "leerkwartier.app = domein = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const netwerkenInternetInformatica = {
  id: "netwerken-internet-informatica",
  title: "Netwerken & internet (Informatica)",
  emoji: "🌐",
  level: "havo4-5-vwo",
  subject: "informatica",
  referentieNiveau: "havo-vwo-informatica-domein-netwerken",
  sloThema: "Informatica HAVO/VWO — hoe het internet werkt: netwerken, IP/DNS, pakketjes/protocollen en het web",
  prerequisites: [
    { id: "binair-datarepresentatie-informatica", title: "Binair & datarepresentatie", niveau: "havo4-5-vwo" },
  ],
  intro:
    "Hoe werkt internet écht? Je leert wat een netwerk is (LAN/WAN, internet vs web, client–server), IP-adressen + DNS (het 'telefoonboek'), hoe data in pakketjes via routers reist met TCP/IP, en hoe het web werkt (HTTP, een URL ontleden, en wat het slotje 🔒/HTTPS betekent). ~15 min.",
  triggerKeywords: [
    "netwerk", "internet", "LAN", "WAN",
    "client server", "client-server",
    "IP-adres", "IP adres", "IPv4", "IPv6",
    "DNS", "domeinnaam", "domein",
    "pakketjes", "packets", "router", "routeren",
    "protocol", "TCP", "TCP/IP",
    "HTTP", "HTTPS", "TLS", "versleuteling slotje",
    "URL", "webserver", "browser request",
    "world wide web", "www",
  ],
  chapters,
  steps,
};

export default netwerkenInternetInformatica;
