// Leerpad: Digitale geletterdheid - groep 6-8.
// Sluit op media-wijsheid. Cito-burgerschap. 1F. 4 stappen.

const stepEmojis = ["💻", "🔍", "🔐", "🏆"];

const chapters = [
  { letter: "A", title: "Computer + internet basis", emoji: "💻", from: 0, to: 0 },
  { letter: "B", title: "Slim zoeken + bronnen", emoji: "🔍", from: 1, to: 1 },
  { letter: "C", title: "Veiligheid + wachtwoord", emoji: "🔐", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Computer + internet basis",
    explanation:
      "**Computer** = apparaat dat **data verwerkt + opslaat** + iets uitvoert.\n\n**Onderdelen** van computer:\n\n**Hardware** *(de fysieke kant)*:\n• **Processor (CPU)**: brein — rekent en regelt alles.\n• **Geheugen (RAM)**: tijdelijk werkgeheugen.\n• **Opslag (SSD/HDD)**: blijvende opslag *(zoals foto's, programs)*.\n• **Moederbord**: verbindt alles.\n• **Grafische kaart (GPU)**: voor beeld + games.\n• **Beeldscherm + toetsenbord + muis**.\n\n**Software** *(de programs)*:\n• **Besturingssysteem**: Windows, macOS, Linux, Android, iOS.\n• **Apps + programma's**: Word, browser, games.\n\n**Soorten apparaten**:\n• **Laptop**: draagbaar.\n• **Desktop**: vast op bureau.\n• **Smartphone**: telefoon-computer.\n• **Tablet**: tussen smartphone + laptop.\n• **Smartwatch**: computer in horloge.\n• **Game-console**: PlayStation, Xbox, Switch.\n\n**Internet**:\n\nWat is internet? **Wereldwijd netwerk** van miljoenen computers verbonden via kabels + draadloos *(WiFi, mobiel internet)* + satellieten.\n\n**Geschiedenis**:\n• Bedacht door **VS-leger** *(ARPANET, 1969)* — wilde netwerk dat blijft werken na bom.\n• **World Wide Web** *(www)* — door **Tim Berners-Lee** *(1989, CERN)* — maakte internet bruikbaar voor iedereen.\n• Eerste website: 1991.\n• Nu: ~5 miljard mensen online wereldwijd.\n\n**Onderdelen van het web**:\n• **Browser**: programma om sites te zien *(Chrome, Firefox, Safari, Edge)*.\n• **URL / webadres**: bv https://leerkwartier.app.\n• **HTTPS**: 'beveiligd' *(slot-icoontje)*.\n• **Server**: computer waar website op staat.\n• **Wifi**: draadloos internet thuis.\n• **4G/5G**: mobiel internet.\n• **Modem**: thuis-apparaat dat internet binnen brengt.\n\n**Wat kun je met internet?**\n• **Zoeken** *(Google, Bing, etc.)*.\n• **Sociale media** *(WhatsApp, Instagram, TikTok, Snapchat)*.\n• **Streamen** *(Netflix, Spotify, YouTube)*.\n• **Bankieren**.\n• **Online winkelen** *(bol, Amazon)*.\n• **Werken/leren** *(Microsoft Teams, Google Classroom)*.\n• **Spelen** *(online games)*.\n\n**Bestandsformaten**:\n• **.docx**: Word-tekst.\n• **.pdf**: vaste opmaak.\n• **.jpg/.png**: foto.\n• **.mp4**: video.\n• **.mp3**: muziek.\n• **.zip**: gecomprimeerde map.\n\n**Cito-feitje**:\nIn 2024 is **AI (kunstmatige intelligentie)** explosief: **ChatGPT** *(2022 release)* kan tekst schrijven, vragen beantwoorden, code maken. Maar — **AI maakt fouten** + verzint dingen. Altijd controleren!",
    checks: [
      {
        q: "Wat is **CPU**?",
        options: ["Processor (brein van computer)", "Geheugen", "Scherm", "Internet"],
        answer: 0,
        wrongHints: [null, "Klopt.", "RAM.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent CPU?", tekst: "**CPU** is de afkorting van **Central Processing Unit** (Centrale Verwerkings-Eenheid). Het is het 'brein' van de computer — de chip die alle berekeningen doet." },
            { titel: "Niet verwarren met geheugen", tekst: "CPU = doet rekenwerk (het brein). RAM = werkgeheugen (het werktafel). SSD/HDD = opslag (het archief). 3 verschillende onderdelen!" },
            { titel: "Bekende CPU-merken", tekst: "**Intel**, **AMD** (PC's), **Apple Silicon** (M1/M2/M3 voor Macs), **Qualcomm Snapdragon** (telefoons). Snelheid in **GHz** (gigahertz)." },
          ],
          woorden: [
            { woord: "CPU", uitleg: "Central Processing Unit — brein/processor." },
            { woord: "RAM", uitleg: "Werkgeheugen (snel maar tijdelijk)." },
            { woord: "GHz", uitleg: "Gigahertz — miljarden berekeningen per seconde." },
          ],
          theorie: "Cito-tip computer-onderdelen: CPU = brein. RAM = werktafel. SSD = archief. GPU = grafische chip (voor games + AI). Verschillende functies, allemaal nodig.",
          voorbeelden: [
            { type: "stap", tekst: "Snelle CPU = computer reageert snel. Trage CPU = haperend." },
            { type: "stap", tekst: "Telefoon heeft ook CPU, kleiner en zuiniger dan in PC." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "CPU = de 'denker'. RAM = de 'aandacht/werktafel'. SSD = de 'kast met dossiers'." }],
          niveaus: {
            basis: "CPU = brein/processor van computer.",
            simpeler: "CPU rekent + denkt. RAM is werkgeheugen.",
            nogSimpeler: "CPU = brein.",
          },
        },
      },
      {
        q: "Wie bedacht het **World Wide Web** (1989)?",
        options: ["Tim Berners-Lee (CERN)", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Microsoft.", "Apple.", "Facebook."],
      },
      {
        q: "Wat is **HTTPS**?",
        options: ["Beveiligde versie van HTTP (slot-icoontje)", "Browser", "Server", "Bestand"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet primair.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "HTTPS = HTTP + Secure", tekst: "**HTTPS** is de BEVEILIGDE versie van **HTTP** (HyperText Transfer Protocol). De 'S' staat voor **Secure** (= veilig). Wordt overal op moderne websites gebruikt." },
            { titel: "Wat is het verschil?", tekst: "Bij HTTPS wordt het verkeer tussen browser en server **versleuteld** — dieven onderweg kunnen jouw wachtwoorden of bankgegevens niet onderscheppen. Bij gewone HTTP wel." },
            { titel: "Slotje in browser", tekst: "Bovenin de browser-balk staat bij HTTPS een klein **slotje** 🔒. Geen slotje? → wees voorzichtig met inloggen of betalen. Echte banksites altijd HTTPS." },
          ],
          woorden: [
            { woord: "HTTPS", uitleg: "HyperText Transfer Protocol Secure — beveiligde versie." },
            { woord: "versleuteling", uitleg: "Data onleesbaar maken voor anderen onderweg." },
          ],
          theorie: "Cito-tip veiligheid: ALTIJD checken of er HTTPS + slotje staat voordat je: wachtwoord intypt, gegevens deelt, of betaalt online. Geen HTTPS = niet veilig.",
          voorbeelden: [
            { type: "stap", tekst: "https://www.ing.nl = veilig (echte bank). http://ing-login.com = waarschijnlijk nep!" },
            { type: "stap", tekst: "Sinds 2018 markeren browsers HTTP-sites als 'Niet veilig'. 95% van internet is nu HTTPS." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "HTTPS = met slotje 🔒 = veilig. HTTP = geen slotje = niet veilig." }],
          niveaus: {
            basis: "HTTPS = beveiligde versie HTTP (slotje in browser).",
            simpeler: "HTTPS versleutelt verkeer. HTTP niet.",
            nogSimpeler: "HTTPS = veilig.",
          },
        },
      },
      {
        q: "Wat is **ChatGPT**?",
        options: ["AI die tekst maakt + vragen beantwoordt", "Spel", "Browser", "Wifi"],
        answer: 0,
        wrongHints: [null, "Klopt — sinds 2022.", "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Slim zoeken + betrouwbare bronnen",
    explanation:
      "Internet = **veel informatie** — maar **niet alles juist**.\n\n**Slim zoeken** *(Google + andere zoekmachines)*:\n\n**1. Goede zoekwoorden** 🔍:\n• Niet hele vraag, maar kern-woorden.\n• Slecht: *'wat is de hoofdstad van Frankrijk?'* — werkt wel maar langer.\n• Beter: *'hoofdstad Frankrijk'*.\n• Beste: *'Parijs'* *(als je naam weet)*.\n\n**2. Trucs**:\n• `\"exact zin\"` — zoek alleen exacte zin *(met aanhalingstekens)*.\n• `-woord` — sluit woord uit.\n• `site:wikipedia.org` — alleen op specifieke site.\n• `filetype:pdf` — alleen PDF-bestanden.\n• `define:woord` — definitie opzoeken.\n\n**3. Beoordeel resultaten**:\n• Eerst **3-4 resultaten** zijn vaak **advertenties** *(klein 'Sponsored' vermeld)*.\n• Daarna komen **organische** *(echte)* resultaten.\n• Wikipedia komt vaak hoog *(meestal redelijk betrouwbaar voor algemene info)*.\n\n**Betrouwbare bronnen**:\n\n**Hoog betrouwbaar**:\n• **Officiële overheid** *(.nl, .gov, rijksoverheid.nl)*.\n• **Wetenschap** *(universiteiten, peer-reviewed studies)*.\n• **Encyclopedie** *(Wikipedia, Britannica)*.\n• **Bekende nieuwsbronnen** *(NOS, AD, NRC, Volkskrant, BBC)*.\n• **Onderwijssites** *(.edu, schooltv)*.\n\n**Minder betrouwbaar**:\n• **Sociale media** *(iedereen kan plaatsen)*.\n• **Forums + Reddit** *(meningen)*.\n• **Blogs van onbekenden**.\n• **YouTube** *(varieert sterk)*.\n• **Reclame-sites**.\n\n**Niet vertrouwen**:\n• **Click-bait titels** *(\"Je gelooft NIET wat er gebeurt!\")*.\n• Sites zonder auteur of bronnen.\n• AI-generated zonder controle.\n• Sites met veel **typfouten** of slecht ontwerp.\n• Pagina's die **één kant** sterk steunen.\n\n**Hoe controleer je een feit?**\n\n**1. Kruis-controleren** ✅:\n• Zoek **2-3 onafhankelijke bronnen**.\n• Komen ze overeen?\n• Verschillen ze sterk → wantrouwen.\n\n**2. Wie heeft het geschreven?**\n• Auteur expert?\n• Heeft hij/zij belang om iets te verkopen?\n\n**3. Wanneer geschreven?**\n• Recente info = vaak beter.\n• Maar oud kan ook waar zijn.\n\n**4. Bronnen genoemd?**\n• Goede artikelen geven **referenties**.\n• Geen bron = wees wantrouwig.\n\n**5. Andere kant**:\n• Tegenargumenten genoemd?\n• Eerlijk artikel toont beide kanten.\n\n**Wikipedia**:\n• Iedereen mag bewerken!\n• Daarom kunnen fouten erin staan.\n• Maar — wordt actief **gecontroleerd** door vrijwilligers.\n• Voor **bekende onderwerpen** vaak betrouwbaar.\n• Voor **politieke** of **recente** onderwerpen: voorzichtig.\n• **Voetnoten** controleren = beste check.\n\n**AI-tools** *(ChatGPT, Claude, Gemini)*:\n• Kunnen veel **goed** schrijven.\n• Maar — **verzinnen** soms feiten *('hallucinatie')*.\n• Geven oude info terug *(getraind op 2023-data bijv.)*.\n• **Altijd controleren** bij andere bron!\n• Niet voor school-werkstukken (plagiaat-risico).\n\n**Hoe word je goed in zoeken?**\n• Oefenen!\n• Probeer verschillende woorden.\n• Klik door naar 2e of 3e pagina soms.\n• Niet alles geloven — kritisch nadenken.\n\n**Cito-feitje**:\n**85% van Nederlanders** gebruikt **Google** als zoekmachine *(2024)*. Andere: Bing (10%), DuckDuckGo (1%, privacy-vriendelijk). Verschil: Google verzamelt veel data, DuckDuckGo niet.",
    checks: [
      {
        q: "Hoe **exacte zin** zoeken in Google?",
        options: ["Met aanhalingstekens 'zin'", "Hoofdletters", "Veel spaties", "Niet mogelijk"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Maakt niets uit.", "Niet.", "Wel mogelijk."],
      },
      {
        q: "Welke bron is meestal **betrouwbaar**?",
        options: ["Rijksoverheid + wetenschapsuniversiteit", "TikTok-influencer", "AI zonder check", "Onbekende blog"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet primair.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Niet alle bronnen even goed", tekst: "Op internet kan IEDEREEN iets publiceren. Daarom moet je leren WIE iets heeft geschreven en of die persoon kennis van zaken heeft." },
            { titel: "Hoog betrouwbaar", tekst: "Overheids-websites (.gov, rijksoverheid.nl), universiteiten (.edu of universiteits-naam), bekende kranten (NOS, NRC, Volkskrant, BBC). Deze worden gecontroleerd door professionals." },
            { titel: "Voorzichtig", tekst: "Sociale media, TikTok, YouTube, blogs van onbekenden, AI-generatie. Niet altijd fout — maar altijd CHECKEN met betere bron. Influencers krijgen vaak geld om iets te zeggen." },
          ],
          woorden: [
            { woord: "betrouwbare bron", uitleg: "Bron met expertise + controle + bronvermelding." },
            { woord: "kruis-controleren", uitleg: "Hetzelfde feit op 2-3 onafhankelijke bronnen checken." },
          ],
          theorie: "Cito-tip betrouwbaarheid: vraag JE 4 dingen: 1) Wie schreef het? 2) Wanneer? 3) Welke bronnen geven ze? 4) Klopt het met andere bronnen? Antwoord op alle 4 → vertrouwen.",
          voorbeelden: [
            { type: "stap", tekst: "Werkstuk over klimaat: betrouwbaar = KNMI, IPCC-rapport, universiteitssite. NIET betrouwbaar = TikTok-video van influencer." },
            { type: "stap", tekst: "Wikipedia is OK voor algemene info — maar volg de voetnoten naar de echte bronnen voor zekerheid." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Officieel + expert + bronvermelding = betrouwbaar. Sociale media zonder check = wantrouwen." }],
          niveaus: {
            basis: "Overheid + universiteit + grote krant = meestal betrouwbaar.",
            simpeler: "Officiële bronnen vertrouwen; sociale media checken.",
            nogSimpeler: "Officieel = beter.",
          },
        },
      },
      {
        q: "Wat is **kruis-controleren**?",
        options: ["2-3 onafhankelijke bronnen vergelijken", "Eén keer kijken", "Niet vragen", "Gokken"],
        answer: 0,
        wrongHints: [null, "Klopt — feit-check.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wat is **AI-hallucinatie**?",
        options: ["AI verzint feiten die niet kloppen", "AI is moe", "Beeld", "Geluid"],
        answer: 0,
        wrongHints: [null, "Klopt — daarom controleren.", "Niet menselijk.", "Niet primair.", "Niet."],
      },
    ],
  },
  {
    title: "Online veiligheid + wachtwoord + privacy",
    explanation:
      "Internet = **handig** maar ook **risico's**. Slim omgaan = belangrijk.\n\n**Wachtwoorden** 🔐:\n\n**Goed wachtwoord**:\n• **Lang** *(minimaal 12 letters)*.\n• Mix: **hoofdletters + kleine letters + cijfers + tekens** *(!@#$)*.\n• **Niet** je naam, geboortedatum, huisdier *(makkelijk te raden)*.\n• **Anders per site** *(verschillende sites)*.\n• Niet opschrijven op gezicht-zichtbare plek.\n\n**Slecht wachtwoord**:\n• `123456`.\n• `password`.\n• `wachtwoord`.\n• Je naam + 1.\n• `qwerty`.\n\n**Tips**:\n• **Wachtwoord-zin** maken: 'Mijn-kat-eet-graag-vis-2024!' = lang + makkelijk te onthouden.\n• **Wachtwoordmanager** *(LastPass, 1Password, Bitwarden)*: app die wachtwoorden bewaart. **Veiliger** dan opschrijven.\n• **Twee-staps-verificatie (2FA)**: bij inlog ook code via sms of app *(Google Authenticator)*. = extra slot.\n\n**Phishing** 🎣:\n• 'Vissen' naar gegevens via nep-emails of -berichten.\n• Bv. 'Je rekening wordt geblokkeerd! Klik hier!'\n• Lijkt vaak op echte bank/Postnl-email.\n• **Niet klikken** op verdachte links.\n• Controleer **afzender-email** *(echte bank gebruikt @ing.nl, niet @ing-bank-online.com)*.\n• Bij twijfel: ga **zelf** naar de site *(typ adres in browser)*.\n\n**Andere oplichting**:\n\n**WhatsApp-fraude**:\n• Bericht van 'zoon/dochter' met nieuw nummer: 'Mam, geld nodig'.\n• **Altijd bellen** naar oude nummer voor check.\n\n**Vriendjes-fraude**:\n• Onbekende online vriend die geld vraagt.\n• Soms 'romantiek-fraude' *(doet alsof verliefd, vraagt steeds geld)*.\n\n**Fake-koop-sites**:\n• Te-goed-om-waar prijzen.\n• Adres ontbreekt of in buitenland.\n• Geen review.\n\n**Identiteitsdiefstal**:\n• Iemand gebruikt jouw naam + gegevens voor fraude.\n• Houd persoonlijke info beschermd.\n\n**Privacy** 🔒:\n\n**Wat is privacy?**\nRecht om controle te hebben over jouw persoonlijke data.\n\n**Wet AVG** *(Algemene Verordening Gegevensbescherming, sinds 2018)*:\n• EU-wet die jouw data beschermt.\n• Bedrijven moeten **toestemming** vragen voor cookies + data-verwerking.\n• Je hebt **recht** te vragen welke data ze hebben + ze te wissen.\n\n**Wat NIET online delen**:\n• Volledig adres + telefoonnummer.\n• Schoolnaam + dagindeling.\n• Bankgegevens of pincodes.\n• Foto's vrienden zonder hun toestemming.\n• Foto's van paspoort, rijbewijs.\n• Foto's huiselijke locaties *(slaapkamer)*.\n• Persoonlijke geheimen of stemming.\n\n**Wat WEL OK**:\n• Algemene foto's *(natuur, vrienden in groep)*.\n• Hobby + interesses.\n• School-projecten.\n\n**Cyberpesten** 😢:\n• Pesten via internet *(WhatsApp, sociale media, online games)*.\n• 24/7 — geen rust.\n• Anoniem mogelijk.\n• Toch **strafbaar**!\n\n**Wat te doen bij cyberpesten?**\n• **Screenshot** maken als bewijs.\n• **Blokkeer** de pestkop.\n• **Praat** met ouder, mentor, schoolarts.\n• **Aangifte** bij politie kan.\n• Niet zelf terug-pesten = maakt erger.\n\n**Screen-tijd** ⏰:\n• Adviespunten in NL:\n  - 0-2 jaar: helemaal niet.\n  - 2-5 jaar: max 1 uur per dag.\n  - 6-12 jaar: max 2 uur per dag voor entertainment *(school telt niet)*.\n  - Tieners: zelf-controle, maar minder = beter.\n• Probleem: **te veel scherm** → minder slaap, beweging, sociale contacten.\n\n**Cyber-veiligheids-tips**:\n• **Updates** installeren *(systeem + apps)*.\n• **Antivirus** *(Windows Defender = OK)*.\n• Geen onbekende **bestanden** openen *(.exe-bestand van email)*.\n• **Back-up** maken van belangrijke bestanden *(externe schijf of cloud)*.\n• Bij twijfel: hulp vragen.\n\n**Cito-feitje**:\n**Wachtwoord '123456'** = nog steeds meest-gebruikt wachtwoord ter wereld in 2024 *(volgens beveiligingsrapport NordPass)*. Hacker breekt dit in < 1 seconde. Verander DIRECT als je dit hebt!",
    checks: [
      {
        q: "Welk **wachtwoord** is sterk?",
        options: ["Mijn-kat-eet-graag-vis-2024!", "123456", "password", "Je naam"],
        answer: 0,
        wrongHints: [null, "Klopt — lang + mix.", "Heel slecht.", "Top-slecht.", "Niet."],
      },
      {
        q: "Wat is **phishing**?",
        options: ["Nep-email om gegevens te stelen", "Spel", "Vis vangen", "Soort virus"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Letterlijk niet.", "Bij sommige varianten."],
      },
      {
        q: "Wat is **2FA / twee-staps-verificatie**?",
        options: ["Tweede check (sms-code) bij inlog", "2 wachtwoorden", "Niets", "Adres-check"],
        answer: 0,
        wrongHints: [null, "Klopt — extra slot.", "Niet primair.", "Wel iets.", "Niet."],
      },
      {
        q: "**Screen-tijd advies** kind 6-12 jaar?",
        options: ["~2 uur entertainment per dag", "Geen", "8+ uur", "Onbeperkt"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — digitaal mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**HTTPS** = ?", options: ["Beveiligd internet (slot-icoontje)", "Browser", "Server", "Bestand"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet primair.", "Niet."] },
      { q: "Wie bedacht **WWW**?", options: ["Tim Berners-Lee", "Gates", "Jobs", "Zuckerberg"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."] },
      { q: "Welk **wachtwoord** is goed?", options: ["Mijn-kat-eet-vis-2024!", "12345", "naam", "Wachtwoord"], answer: 0, wrongHints: [null, "Klopt.", "Slecht.", "Slecht.", "Slecht."] },
      { q: "Wat is **AI-hallucinatie**?", options: ["AI verzint feiten", "AI slaapt", "Beeld", "Goed nieuws"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet primair.", "Niet."] },
      { q: "Wat is **AVG**?", options: ["EU-privacy-wet sinds 2018", "Belasting", "Bank", "School"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."] },
      { q: "Wat doe je bij **cyberpesten**?", options: ["Screenshot + blokkeren + volwassene", "Negeren", "Terug-pesten", "Niet vertellen"], answer: 0, wrongHints: [null, "Klopt.", "Niet altijd genoeg.", "Maakt erger.", "Wel praten."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const digitaleGeletterdheidPo = {
  id: "digitale-geletterdheid-po",
  title: "Digitale geletterdheid (Cito groep 6-8)",
  emoji: "💻",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / digitaal",
  prerequisites: [
    { id: "media-wijsheid-maatschappijleer", title: "Media-wijsheid", niveau: "1F" },
  ],
  intro:
    "Digitale geletterdheid voor Cito groep 6-8 — computer + internet basis (CPU/HTTPS/WWW/Tim Berners-Lee) + slim zoeken (Google-trucs + bronnen-controle + AI-hallucinatie) + veiligheid (wachtwoord + 2FA + phishing + cyberpesten + AVG-privacy). Sluit op mediawijsheid. ~15 min.",
  triggerKeywords: [
    "digitaal", "computer", "internet",
    "CPU", "HTTPS", "browser",
    "WWW", "Tim Berners-Lee",
    "Google", "zoeken", "bron",
    "AI", "ChatGPT", "hallucinatie",
    "wachtwoord", "phishing", "2FA",
    "cyberpesten", "AVG", "privacy",
  ],
  chapters,
  steps,
};

export default digitaleGeletterdheidPo;
