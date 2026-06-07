// Leerpad: Cybersecurity & encryptie — Informatica HAVO/VWO
// Bedreigingen (malware/phishing), wachtwoorden + 2FA + hashing,
// encryptie (symmetrisch/asymmetrisch + HTTPS), veilig gedrag + AVG. 4 stappen.

const stepEmojis = ["⚠️", "🔑", "🔐", "🛡️"];

const chapters = [
  { letter: "A", title: "Bedreigingen", emoji: "⚠️", from: 0, to: 0 },
  { letter: "B", title: "Wachtwoorden & inloggen", emoji: "🔑", from: 1, to: 1 },
  { letter: "C", title: "Encryptie (versleuteling)", emoji: "🔐", from: 2, to: 2 },
  { letter: "D", title: "Veilig gedrag & privacy", emoji: "🛡️", from: 3, to: 3 },
];

const steps = [
  // ─── A. Bedreigingen ──────────────────────────────────────
  {
    title: "Bedreigingen — malware & phishing",
    explanation:
      "**Cybersecurity** gaat over het beschermen van computers, netwerken en gegevens tegen aanvallen. Eerst de bedreigingen.\n\n**Malware** (kwaadaardige software):\n• **Virus** — verstopt zich in een bestand/programma en verspreidt zich als je het uitvoert.\n• **Worm** — verspreidt zichzelf over netwerken, zonder dat je iets hoeft te doen.\n• **Trojaans paard (trojan)** — doet zich voor als iets nuttigs, maar doet stiekem iets kwaads.\n• **Ransomware** — versleutelt je bestanden en eist losgeld (ransom) om ze terug te geven.\n• **Spyware** — bespioneert je stiekem (bv. toetsaanslagen).\n\n**Phishing** (de grootste praktijkdreiging):\nEen nep-bericht (mail/sms/appje) dat zich voordoet als je bank, school of een bekende, om je **wachtwoord, pincode of geld** te ontfutselen. Vaak met haast ('je account wordt geblokkeerd!') en een nep-link.\n\n**Social engineering:** de mens manipuleren in plaats van de computer hacken — bv. iemand bellen en doen alsof je de helpdesk bent. **De mens is vaak de zwakste schakel.**\n\n**Herken phishing:** rare afzender/URL, taalfouten, onverwachte vraag om gegevens, en druk/haast. Bij twijfel: niet klikken, zelf naar de officiële site gaan.",
    checks: [
      {
        q: "Wat is **ransomware**?",
        options: ["Malware die je bestanden gijzelt en losgeld eist", "Een gratis antivirusprogramma", "Een sterk wachtwoord", "Een soort firewall"],
        answer: 0,
        wrongHints: [null, "Het is juist kwaadaardig, geen bescherming.", "Het heeft niets met wachtwoorden te maken.", "Een firewall beschermt juist."],
        uitlegPad: {
          stappen: [{ titel: "Gijzelsoftware", tekst: "**Ransomware** is malware die je bestanden **versleutelt** en **losgeld** (ransom) eist om ze terug te geven. Beste bescherming: **back-ups** (dan kun je herstellen zonder te betalen) + niet op verdachte links/bijlagen klikken." }],
          niveaus: { basis: "Gijzelt bestanden voor losgeld. A.", simpeler: "Ransomware = losgeld-malware", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **phishing**?",
        options: ["Een nep-bericht om je gegevens/geld te ontfutselen", "Een snelle internetverbinding", "Een back-upmethode", "Een programmeertaal"],
        answer: 0,
        wrongHints: [null, "Het heeft niets met snelheid te maken.", "Het is geen back-up — het is oplichting.", "Geen taal — een vorm van oplichting."],
        uitlegPad: {
          stappen: [{ titel: "Nep-bericht met haast", tekst: "**Phishing** is een **nep-bericht** (mail/sms/app) dat doet alsof het van je bank/school/bekende komt, om je **wachtwoord, pincode of geld** te ontfutselen — vaak met haast en een nep-link. Herken het aan: rare afzender/URL, taalfouten, onverwachte vraag, druk. Bij twijfel zelf naar de officiële site gaan." }],
          niveaus: { basis: "Nep-bericht voor je gegevens. A.", simpeler: "Phishing = nep-bericht", nogSimpeler: "A." },
        },
      },
      {
        q: "Bij **social engineering** valt de aanvaller vooral aan op…",
        options: ["De mens (manipulatie)", "De stroomvoorziening", "De printer", "De kleur van het scherm"],
        answer: 0,
        wrongHints: [null, "Het gaat om mensen misleiden, niet om stroom.", "Niet de hardware, maar de gebruiker.", "Beeldscherm heeft er niets mee te maken."],
        uitlegPad: {
          stappen: [{ titel: "De zwakste schakel", tekst: "**Social engineering** manipuleert **de mens** in plaats van de computer te hacken — bv. bellen en doen alsof je de helpdesk bent. Omdat mensen te vertrouwen/behulpzaam zijn, is de mens vaak de **zwakste schakel** in de beveiliging." }],
          niveaus: { basis: "De mens. A.", simpeler: "Social engineering = mens misleiden", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Wachtwoorden & inloggen ───────────────────────────
  {
    title: "Wachtwoorden, 2FA & hashing",
    explanation:
      "Je eerste verdediging is goed **inloggen**.\n\n**Sterke wachtwoorden:**\n• **Lang** is belangrijker dan ingewikkeld — een lange zin ('paardvliegtgroenover!') is sterker én makkelijker te onthouden dan 'P@ss1'.\n• **Uniek per site** — hergebruik je één wachtwoord overal en lekt één site, dan liggen ze allemaal open.\n• Een **wachtwoordmanager** onthoudt sterke, unieke wachtwoorden voor je.\n\n**Tweestapsverificatie (2FA / MFA):**\nNaast je wachtwoord een **tweede bewijs**: een code via een app/sms, of je vingerafdruk. Zelfs als iemand je wachtwoord heeft, komt hij er niet in zonder die tweede stap. **De belangrijkste extra beveiliging die je kunt aanzetten.**\n\n**Hashing — hoe sites wachtwoorden bewaren:**\nEen goede site bewaart je wachtwoord **nooit als gewone tekst**. Hij slaat een **hash** op: een onomkeerbare versleuteling. \n• Dezelfde invoer → altijd dezelfde hash.\n• Uit de hash kun je het wachtwoord **niet terugrekenen**.\n• Bij inloggen wordt je invoer opnieuw gehasht en vergeleken.\nLekt de database, dan zien hackers alleen hashes, niet je echte wachtwoord. (Daarom kan een goede site je wachtwoord ook niet 'opsturen', alleen resetten.)",
    checks: [
      {
        q: "Wat maakt een wachtwoord het sterkst?",
        options: ["Lengte (een lange zin) + uniek per site", "Eén kort woord met een hoofdletter", "Je naam met een cijfer", "Hetzelfde wachtwoord overal"],
        answer: 0,
        wrongHints: [null, "Kort is juist zwak, ook met hoofdletter.", "Je naam is makkelijk te raden.", "Overal hetzelfde is het gevaarlijkst."],
        uitlegPad: {
          stappen: [{ titel: "Lang + uniek", tekst: "**Lengte** maakt een wachtwoord sterk (een lange zin is moeilijk te kraken én te onthouden), en het moet **uniek per site** zijn — lekt er één, dan liggen niet meteen al je accounts open. Een **wachtwoordmanager** helpt hierbij." }],
          niveaus: { basis: "Lang + uniek. A.", simpeler: "Sterk = lang + uniek", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **tweestapsverificatie (2FA)**?",
        options: ["Een tweede bewijs naast je wachtwoord (bv. code of vinger)", "Twee keer hetzelfde wachtwoord", "Een dubbel zo lang wachtwoord", "Twee gebruikersnamen"],
        answer: 0,
        wrongHints: [null, "Niet hetzelfde twee keer — een ánder soort bewijs.", "Het is een tweede stap, geen langer wachtwoord.", "Het gaat om bewijs, niet om twee namen."],
        uitlegPad: {
          stappen: [{ titel: "Iets weten + iets hebben", tekst: "**2FA** voegt een **tweede bewijs** toe naast je wachtwoord: een code via een app/sms of je vingerafdruk. Zelfs met je wachtwoord komt een aanvaller er niet in zonder die tweede stap. Het is de belangrijkste extra beveiliging die je kunt aanzetten." }],
          niveaus: { basis: "Tweede bewijs. A.", simpeler: "2FA = extra code", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoe hoort een goede website je wachtwoord op te slaan?",
        options: ["Als hash (onomkeerbaar versleuteld), niet als gewone tekst", "Gewoon als leesbare tekst", "Als een foto", "Helemaal niet — onthouden uit het hoofd"],
        answer: 0,
        wrongHints: [null, "Leesbaar bewaren is juist onveilig (lekt het, dan ligt alles open).", "Een foto van je wachtwoord is geen opslagmethode.", "De site moet 'm wel kunnen controleren — dus opslaan, maar als hash."],
        uitlegPad: {
          stappen: [{ titel: "Hashing", tekst: "Een goede site bewaart een **hash**: een **onomkeerbare** versleuteling. Dezelfde invoer → dezelfde hash, maar je kunt het wachtwoord er niet uit terugrekenen. Lekt de database, dan zien hackers alleen hashes. Daarom kan een goede site je wachtwoord ook niet 'opsturen', alleen laten resetten." }],
          niveaus: { basis: "Als hash. A.", simpeler: "Wachtwoord = als hash bewaren", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Encryptie ─────────────────────────────────────────
  {
    title: "Encryptie — versleuteling",
    explanation:
      "**Encryptie** (versleuteling) maakt data onleesbaar voor iedereen zonder de juiste **sleutel**. Zo blijft informatie geheim, ook als iemand het onderschept.\n\n• **Klare tekst** (plaintext) → met een **sleutel** → **cijfertekst** (onleesbaar) → met de sleutel weer terug → klare tekst.\n\n**Twee soorten:**\n• **Symmetrische encryptie**: **één** sleutel voor zowel versleutelen als ontsleutelen. Snel, maar: hoe geef je die sleutel veilig aan de ander?\n• **Asymmetrische encryptie** (publieke-sleutel): een **paar** sleutels — een **publieke sleutel** (mag iedereen hebben) om te versleutelen, en een geheime **privésleutel** om te ontsleutelen. Hiermee kun je veilig communiceren met iemand die je nog nooit een sleutel hebt gegeven.\n\n**Waar kom je dit tegen?**\n• **HTTPS** (het slotje 🔒): je browser en de server zetten met asymmetrische encryptie veilig een gedeelde sleutel op, en versleutelen daarna het verkeer. Niemand onderweg kan meelezen.\n• Versleutelde chat (WhatsApp), versleutelde harde schijven, wachtwoord-hashes.\n\n**Kernidee:** zonder de juiste sleutel is versleutelde data praktisch onleesbaar — ook voor een krachtige computer.",
    checks: [
      {
        q: "Wat doet **encryptie**?",
        options: ["Data onleesbaar maken zonder de juiste sleutel", "Bestanden kleiner maken", "Het internet sneller maken", "Virussen verwijderen"],
        answer: 0,
        wrongHints: [null, "Verkleinen is compressie — iets anders.", "Snelheid is niet het doel.", "Dat doet antivirus, niet encryptie."],
        uitlegPad: {
          stappen: [{ titel: "Geheim met een sleutel", tekst: "**Encryptie** zet klare tekst om in onleesbare **cijfertekst** met een **sleutel**. Alleen wie de juiste sleutel heeft, kan het terug omzetten. Zo blijft informatie geheim, ook als iemand het onderschept." }],
          niveaus: { basis: "Onleesbaar zonder sleutel. A.", simpeler: "Encryptie = versleutelen", nogSimpeler: "A." },
        },
      },
      {
        q: "Bij **asymmetrische encryptie** zijn er…",
        options: ["Twee sleutels: een publieke en een privé", "Eén sleutel voor alles", "Helemaal geen sleutels", "Een sleutel per letter"],
        answer: 0,
        wrongHints: [null, "Eén sleutel = symmetrisch, niet asymmetrisch.", "Zonder sleutel is er geen encryptie.", "Niet per letter — per persoon een sleutelpaar."],
        uitlegPad: {
          stappen: [{ titel: "Publiek + privé", tekst: "**Asymmetrische encryptie** gebruikt een **sleutelpaar**: een **publieke sleutel** (mag iedereen hebben) om te versleutelen, en een geheime **privésleutel** om te ontsleutelen. Zo kun je veilig communiceren met iemand zonder vooraf een geheime sleutel te delen. **Symmetrisch** gebruikt juist één gedeelde sleutel." }],
          niveaus: { basis: "Publieke + privé. A.", simpeler: "Asymmetrisch = 2 sleutels", nogSimpeler: "A." },
        },
      },
      {
        q: "Het slotje **🔒 (HTTPS)** gebruikt encryptie om…",
        options: ["Het verkeer tussen jou en de server af te schermen", "De site gratis te maken", "Reclame te blokkeren", "De site sneller te laden"],
        answer: 0,
        wrongHints: [null, "Het zegt niets over de prijs.", "Reclame blokkeren doet iets anders.", "Snelheid is niet het doel van HTTPS."],
        uitlegPad: {
          stappen: [{ titel: "Versleuteld webverkeer", tekst: "Bij **HTTPS** zetten je browser en de server (met asymmetrische encryptie) veilig een gedeelde sleutel op en **versleutelen daarna al het verkeer**. Niemand onderweg kan meelezen — belangrijk bij wachtwoorden en betalingen." }],
          niveaus: { basis: "Verkeer afschermen. A.", simpeler: "🔒 = verkeer versleuteld", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Veilig gedrag & privacy ───────────────────────────
  {
    title: "Veilig gedrag & privacy (AVG)",
    explanation:
      "Techniek alleen is niet genoeg — **gedrag** maakt het verschil.\n\n**Basisregels (digitale hygiëne):**\n• **Updates** installeren — ze dichten beveiligingsgaten. Verouderde software is een open deur.\n• **Back-ups** maken (liefst ook offline/in de cloud) — je redding bij ransomware, diefstal of een crash.\n• **Niet zomaar klikken** op links/bijlagen in onverwachte berichten.\n• **2FA aanzetten** waar het kan.\n• Op **openbare wifi** geen gevoelige zaken doen zonder beveiliging.\n• Een **firewall** filtert netwerkverkeer; **antivirus** spoort malware op.\n\n**Privacy & de AVG:**\nDe **AVG** (Algemene Verordening Gegevensbescherming, Europese privacywet) bepaalt hoe organisaties met **persoonsgegevens** mogen omgaan:\n• **Dataminimalisatie** — alleen verzamelen wat echt nodig is.\n• **Doelbinding** — gegevens alleen gebruiken waarvoor je ze kreeg.\n• **Toestemming** + recht op **inzage, correctie en verwijdering**.\n• Gegevens **veilig** bewaren (bv. versleuteld) en niet langer dan nodig.\n\n**Kernhouding:** wees voorzichtig met wat je deelt, want online deel je sneller (en blijvender) dan je denkt. Beveiliging is techniek **én** gedrag samen.",
    checks: [
      {
        q: "Wat is de beste bescherming tegen het kwijtraken van data (bv. door ransomware)?",
        options: ["Regelmatig back-ups maken", "Een mooier bureaublad", "Meer reclame toelaten", "Je wachtwoord opschrijven op je scherm"],
        answer: 0,
        wrongHints: [null, "Uiterlijk helpt niet tegen dataverlies.", "Reclame beschermt niets.", "Een wachtwoord op je scherm is juist onveilig."],
        uitlegPad: {
          stappen: [{ titel: "Back-ups = je vangnet", tekst: "Met een recente **back-up** (liefst ook offline/in de cloud) kun je je gegevens herstellen na ransomware, diefstal of een crash — zonder losgeld te betalen. Samen met updates, 2FA en niet-zomaar-klikken is dit digitale basishygiëne." }],
          niveaus: { basis: "Back-ups. A.", simpeler: "Dataverlies voorkomen = back-up", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarom zijn **software-updates** belangrijk voor veiligheid?",
        options: ["Ze dichten beveiligingsgaten", "Ze maken de batterij voller", "Ze verwijderen je bestanden", "Ze zijn alleen voor nieuwe kleuren"],
        answer: 0,
        wrongHints: [null, "Updates laden je batterij niet op.", "Updates wissen je bestanden niet (back-up blijft slim).", "Het gaat om veiligheid, niet alleen uiterlijk."],
        uitlegPad: {
          stappen: [{ titel: "Gaten dichten", tekst: "Software bevat soms **beveiligingsgaten** (kwetsbaarheden). **Updates** dichten die. Verouderde software is een open deur voor aanvallers — daarom: updates niet uitstellen." }],
          niveaus: { basis: "Dichten gaten. A.", simpeler: "Updates = gaten dichten", nogSimpeler: "A." },
        },
      },
      {
        q: "De **AVG** gaat over…",
        options: ["Hoe organisaties met persoonsgegevens moeten omgaan", "Hoe je sneller internet krijgt", "Welke kleuren een website mag hebben", "Hoe je een virus maakt"],
        answer: 0,
        wrongHints: [null, "De AVG gaat over privacy, niet over snelheid.", "Het bepaalt geen kleuren.", "Het is een privacywet, niets met malware maken."],
        uitlegPad: {
          stappen: [{ titel: "Europese privacywet", tekst: "De **AVG** (Algemene Verordening Gegevensbescherming) regelt hoe organisaties met **persoonsgegevens** mogen omgaan: dataminimalisatie (alleen wat nodig is), doelbinding, toestemming, en je recht op **inzage, correctie en verwijdering** — plus veilig bewaren." }],
          niveaus: { basis: "Omgaan met persoonsgegevens. A.", simpeler: "AVG = privacywet", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const cybersecurityEncryptieInformatica = {
  id: "cybersecurity-encryptie-informatica",
  title: "Cybersecurity & encryptie (Informatica)",
  emoji: "🛡️",
  level: "havo4-5-vwo",
  subject: "informatica",
  referentieNiveau: "havo-vwo-informatica-domein-security",
  sloThema: "Informatica HAVO/VWO — digitale veiligheid: bedreigingen, authenticatie, encryptie en privacy/AVG",
  prerequisites: [
    { id: "netwerken-internet-informatica", title: "Netwerken & internet", niveau: "havo4-5-vwo" },
  ],
  intro:
    "Hoe blijf je veilig online? Je leert de bedreigingen (malware: virus/ransomware, phishing, social engineering), hoe je je accounts beschermt (sterke wachtwoorden, 2FA, hashing), wat encryptie is (symmetrisch/asymmetrisch + het slotje HTTPS), en veilig gedrag + privacy onder de AVG. ~15 min.",
  triggerKeywords: [
    "cybersecurity", "beveiliging", "security", "hacken",
    "malware", "virus", "worm", "trojan", "trojaans paard", "ransomware", "spyware",
    "phishing", "social engineering",
    "wachtwoord", "sterk wachtwoord", "wachtwoordmanager",
    "2FA", "tweestapsverificatie", "MFA", "authenticatie",
    "hash", "hashing",
    "encryptie", "versleuteling", "symmetrisch", "asymmetrisch", "publieke sleutel", "privésleutel",
    "HTTPS slotje", "firewall", "antivirus",
    "AVG", "privacy", "persoonsgegevens", "back-up", "updates",
  ],
  chapters,
  steps,
};

export default cybersecurityEncryptieInformatica;
