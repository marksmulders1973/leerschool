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
        uitlegPad: {
          stappen: [
            { titel: "Wat is ChatGPT?", tekst: "**ChatGPT** is een **AI-chatbot** (Artificial Intelligence = kunstmatige intelligentie). Je typt een vraag, ChatGPT geeft antwoord in mensentaal — alsof je met iemand chat." },
            { titel: "Wie heeft het gemaakt?", tekst: "**OpenAI** (Amerikaans bedrijf) bracht ChatGPT uit in **november 2022**. Binnen 2 maanden had het al **100 miljoen gebruikers** — sneller dan welke app ooit. Er zijn nu ook andere AI-chatbots: **Claude** (Anthropic), **Gemini** (Google), **Copilot** (Microsoft)." },
            { titel: "Wat kan + niet kan ChatGPT", tekst: "**WEL**: tekst schrijven, vragen beantwoorden, vertalen, samenvatten, programmeren helpen.\n**NIET**: altijd kloppen (kan 'hallucinatie' = verzint feiten), nieuwste info weten (training stopt op een datum), denken zoals een mens. Altijd controleren!" },
          ],
          woorden: [
            { woord: "AI", uitleg: "Artificial Intelligence (kunstmatige intelligentie). Computers die slim lijken." },
            { woord: "ChatGPT", uitleg: "AI-chatbot van OpenAI, sinds 2022." },
            { woord: "hallucinatie", uitleg: "Als AI iets verzint dat niet echt is, maar wel zeker klinkt." },
          ],
          theorie: "Cito-feit AI: niet 1 ding, maar verschillende modellen. ChatGPT = bekendste. Gebruikt door honderden miljoenen mensen voor school, werk, plezier. Pas op met huiswerk-opdrachten: scholen detecteren AI-tekst steeds beter.",
          voorbeelden: [
            { type: "stap", tekst: "Vraag: 'Schrijf een gedicht over mijn kat.' → AI maakt direct een gedicht." },
            { type: "stap", tekst: "Vraag: 'Wie heeft de eerste mens op de maan?' → AI antwoordt 'Neil Armstrong, 20 juli 1969'. Klopt." },
            { type: "stap", tekst: "Vraag: 'Wie heeft NL gisteren als premier?' → AI weet het niet, training is van vorig jaar. Verzint mogelijk antwoord = HALLUCINATIE." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "ChatGPT = AI = computer-chatter. Niet menselijk. Niet perfect. Altijd controleren met andere bron voor feiten." }],
          niveaus: {
            basis: "AI-chatbot die tekst maakt en vragen beantwoordt. = A.",
            simpeler: "Computer-programma waarmee je kan 'chatten' alsof met mens. = A.",
            nogSimpeler: "Slimme AI-chatter = A.",
          },
        },
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
        uitlegPad: {
          stappen: [
            { titel: "Wat maakt een wachtwoord sterk?", tekst: "Een sterk wachtwoord is:\n• **Lang** (min. 12 tekens, liefst meer)\n• **Mix** van hoofdletters, kleine letters, cijfers, leestekens\n• **Niet je naam, geboortedatum** of huisdier\n• **Anders per site**." },
            { titel: "De wachtwoord-zin truc", tekst: "Maak een **hele zin** met streepjes ertussen: bv. **'Mijn-kat-eet-graag-vis-2024!'** Dit is:\n✓ Lang (28 tekens)\n✓ Mix (hoofdletter + cijfers + leesteken)\n✓ Makkelijk te onthouden (een verhaal)\n✓ Moeilijk te raden voor anderen." },
            { titel: "Waarom slechte wachtwoorden gevaarlijk zijn", tekst: "Hackers proberen 'top-100-lijsten' van bekende wachtwoorden: **123456, password, qwerty, naam**. Die kraakt een computer in **minder dan 1 seconde**. Je rekening = leeg, accounts overgenomen. Daarom: STERK wachtwoord = essentieel." },
          ],
          woorden: [
            { woord: "wachtwoord-manager", uitleg: "App die wachtwoorden onthoudt voor je (LastPass, 1Password, Bitwarden)." },
            { woord: "2FA", uitleg: "Twee-staps-verificatie = extra check via sms of app bij inlog." },
          ],
          theorie: "Cito-feit: '123456' is al jaren **#1 meest-gebruikt wachtwoord ter wereld** (volgens NordPass-rapport). Hackers kraken het direct. Gebruik liever een lange zin + 2FA waar mogelijk.",
          voorbeelden: [
            { type: "stap", tekst: "Goed: 'Appels-vallen-niet-omhoog-2025!' (lang, mix, makkelijk te onthouden)." },
            { type: "stap", tekst: "Slecht: 'Anna1995' (naam + geboortejaar, raadbaar)." },
            { type: "stap", tekst: "Heel slecht: 'wachtwoord' (top-10 ranking, kraakbaar in 0,1 seconde)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lange zin > Kort wachtwoord. 12+ tekens. Mix. Anders per site. Plus 2FA voor belangrijke accounts (e-mail, bank)." }],
          niveaus: {
            basis: "Lange zin met mix = sterk. = A.",
            simpeler: "Hoe LANGER en GEMENGDER, hoe sterker. 'Mijn-kat-eet-graag-vis-2024!' = top. = A.",
            nogSimpeler: "Lang + mix = A.",
          },
        },
      },
      {
        q: "Wat is **phishing**?",
        options: ["Nep-email om gegevens te stelen", "Spel", "Vis vangen", "Soort virus"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Letterlijk niet.", "Bij sommige varianten."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is phishing?", tekst: "**Phishing** = 'hengelen' (visserij in Engels) naar persoonlijke gegevens. Een **nep-email**, **nep-sms** of **nep-website** doet alsof het van je bank, postNL of school is — maar is van een **oplichter**." },
            { titel: "Hoe herken je het?", tekst: "Let op:\n• **Urgentie** ('Klik NU! Je rekening wordt geblokkeerd!')\n• **Vreemde afzender** (bv. @ing-bank-online.com ipv echt @ing.nl)\n• **Slechte spelling** of vreemde NL-zinnen\n• **Vraag om wachtwoord** of pincode (echte bank vraagt dat NOOIT)\n• **Link met rare URL** (hover je muis erover om de echte URL te zien)." },
            { titel: "Wat doe je?", tekst: "1) **Niet klikken** op links in verdachte emails.\n2) **Niet antwoorden**.\n3) **Verwijderen**.\n4) Wil je echt iets checken? **Typ zelf** het webadres in browser (bv. ing.nl).\n5) Bij twijfel: **bel** het echte bedrijf via hun normale nummer." },
          ],
          woorden: [
            { woord: "phishing", uitleg: "Nep-bericht om wachtwoord/gegevens te stelen." },
            { woord: "spoofing", uitleg: "Doen alsof je een bekende afzender bent." },
          ],
          theorie: "Cito-feit: phishing is **#1 manier** waarop accounts worden gehackt. NL heeft veel phishing via WhatsApp ('mam, ik heb een nieuw nummer en geld nodig'). Altijd via bekende kanaal controleren bij twijfel.",
          voorbeelden: [
            { type: "stap", tekst: "Email: 'Beste klant, uw ING-rekening wordt geblokkeerd. Klik hier om te verifiëren.' Afzender: @ing-security.nl → NEP. Verwijderen." },
            { type: "stap", tekst: "WhatsApp van onbekend nr: 'Mam, mijn telefoon is kapot, kun je geld sturen?' → ALTIJD eerst BELLEN naar oude nummer voor check." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij paniek-bericht: STOP. Adem. Controleer afzender + URL. Bel het echte bedrijf bij twijfel. Echte instanties vragen NOOIT om wachtwoord per email." }],
          niveaus: {
            basis: "Nep-email/sms om gegevens te stelen. = A.",
            simpeler: "Oplichters sturen een vals bericht dat lijkt op je bank — om je wachtwoord/pincode te stelen. = A.",
            nogSimpeler: "Nep-email = A.",
          },
        },
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
      {
        q: "Wat is een **phishing-mail**?",
        options: ["Nep-mail die wachtwoord/bankgegevens probeert te stelen", "Reclamemail van winkel", "Mail van leraar", "Spam met grappen"],
        answer: 0,
        wrongHints: [null, "Klopt — doet zich voor als bank/Postnl/Belastingdienst maar is nep.", "Reclamemail = vervelend maar geen oplichting.", "Echte mail = geen phishing.", "Spam is irritant maar niet altijd oplichting."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is phishing?", tekst: "**Phishing** komt van **'fishing'** (vissen) — oplichters proberen jouw gegevens 'te vissen'. Ze sturen een **nep-mail** of **nep-SMS** die er echt uitziet (lijkt op je bank, Postnl, school). Klik je op de link en vul je gegevens in → die gaan naar criminelen." },
            { titel: "Hoe herken je phishing?", tekst: "**Rode vlaggen**:\n• Vreemd e-mailadres (bv. 'support@p0stnl-tracking.com' met nul ipv letter o)\n• **Druk uitoefenen**: 'Klik binnen 24 uur of je rekening wordt geblokkeerd!'\n• Spelfouten of slecht Nederlands\n• Link naar onbekende website (hover muis om echte link te zien zonder te klikken)\n• Vraag om wachtwoord of pincode (echte banken vragen dit NOOIT per mail)" },
            { titel: "Cito-tip: wat doe je?", tekst: "Bij phishing-mail:\n1. **NIET klikken** op links\n2. **NIET antwoorden** met gegevens\n3. Mail **verwijderen** of als spam markeren\n4. Bij twijfel: bel zelf de echte organisatie (gebruik nummer van OFFICIELE website)\n5. Vertel ouder/leerkracht — ook als je per ongeluk klikte" },
          ],
          woorden: [
            { woord: "phishing", uitleg: "Engelse term voor digitale oplichting via nep-mail. Uitspraak: 'fis-jing'." },
            { woord: "spoofing", uitleg: "Nep e-mailadres dat lijkt op echt adres (van 'spoof' = nep-doen)." },
            { woord: "datadiefstal", uitleg: "Stelen van persoonlijke info (wachtwoord, geboortedatum, bankgegevens)." },
          ],
          theorie: "Veelvoorkomende phishing-soorten in NL:\n• **Postnl-pakket**: 'pakket niet bezorgd, betaal kosten'\n• **Belastingdienst-teruggave**: 'je krijgt geld terug, vul gegevens in'\n• **Bank**: 'verdachte activiteit, log in om te controleren'\n• **Marktplaats**: 'koper wil tikkie' (verkoper-fraude)\n• **Whatsapp**: 'mam ik heb mijn telefoon kapot, kan jij geld overmaken?'\n\nIn 2024+ ook **AI-stem-fraude**: oplichter belt met AI-stem van familie.",
          voorbeelden: [
            { type: "feit", tekst: "In Nederland verliezen mensen samen **~€100 miljoen per jaar** aan online oplichting. Ouderen + kinderen kwetsbaarder." },
            { type: "feit", tekst: "Politie + Fraudehelpdesk (0800-2112) helpen je als je toch ingetrapt bent." },
          ],
          basiskennis: [{ onderwerp: "Banken bellen niet", uitleg: "Echte bank, Belastingdienst, of Postnl vraagt NOOIT per mail/sms om je wachtwoord. ALTIJD nep als het wel gevraagd wordt." }],
          niveaus: { basis: "Nep-mail = A.", simpeler: "Phishing = nep-mail die doet alsof het van bank/Postnl is. Wil wachtwoord/bankgegevens stelen. Niet klikken. = A.", nogSimpeler: "Oplichting-mail = A." },
        },
      },
      {
        q: "Wat is een **cookie** op internet?",
        options: ["Klein bestandje dat website op je computer zet om je te herkennen", "Snoepje", "Virus", "Wachtwoord"],
        answer: 0,
        wrongHints: [null, "Klopt — bestandje dat info onthoudt (taal, login-status, voorkeuren).", "Niet — wel toevallig zelfde naam als koekje.", "Niet altijd — kan tracking-cookie zijn maar niet altijd virus.", "Niet — wachtwoord = jouw geheim, cookie = van website."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een cookie?", tekst: "Een **cookie** is een **klein tekstbestandje** dat een website op jouw apparaat opslaat. Doel: jou **herkennen** bij volgend bezoek. Bevat dingen als:\n• Taal-voorkeur (NL/EN)\n• Login-status (ingelogd of niet)\n• Items in winkelmandje\n• Wat je laatst bekeek (voor advertenties)" },
            { titel: "Soorten cookies", tekst: "**Twee hoofdsoorten**:\n• **Functionele cookies** — nodig voor de website (login, taal). Geen toestemming nodig.\n• **Tracking-cookies** — volgen wat je doet, ook over websites heen. Gebruikt voor advertenties. **TOESTEMMING VERPLICHT** in EU (AVG/GDPR).\n\nDaarom zie je op elke website 'Accepteer cookies?'-vraag." },
            { titel: "Cito-feit: privacy + AVG", tekst: "**Sinds 2018** is in EU de **AVG-wet** (Algemene Verordening Gegevensbescherming): websites MOETEN vragen voor tracking-cookies. Je MAG altijd weigeren. Pers­oonlijke gegevens worden beschermd. Bij overtreding: boetes tot **20 miljoen euro**." },
          ],
          woorden: [
            { woord: "cookie", uitleg: "Klein bestandje van website op jouw apparaat. Onthoudt info over je bezoek." },
            { woord: "tracking", uitleg: "Volgen wat je doet — vaak voor reclame. Vereist toestemming in EU." },
            { woord: "AVG / GDPR", uitleg: "Nederlandse + Europese privacy-wet sinds 2018. Beschermt persoonsgegevens." },
          ],
          theorie: "Cookies + privacy-tips:\n• **Lees** de cookie-banner — alleen functionele toestaan is OK\n• **Verwijder** cookies regelmatig in browser (Settings → Privacy → Clear data)\n• **Incognito-mode** = geen cookies bewaard na sessie\n• **Tracking-blockers** (Brave-browser, uBlock Origin) blokkeren tracking-cookies automatisch\n\nKinderen onder 16: ouders mogen extra strikt zijn over cookies (KIDS-AVG).",
          voorbeelden: [
            { type: "feit", tekst: "Bekendste tracking-cookies: Google Analytics, Facebook Pixel — gebruiken duizenden websites." },
            { type: "feit", tekst: "Apple Safari blokkeert sinds 2020 tracking-cookies automatisch — andere browsers volgen." },
          ],
          basiskennis: [{ onderwerp: "Niet eng", uitleg: "Cookies op zich zijn niet eng. Tracking-cookies WEL bewust beslissen. Lees banner, klik 'alleen noodzakelijke' als je twijfelt." }],
          niveaus: { basis: "Bestandje van website. = A.", simpeler: "Cookie = bestandje dat website op je computer zet om je te herkennen. Bv. om in te loggen, taal te onthouden, of jou advertenties te tonen. = A.", nogSimpeler: "Bestandje = A." },
        },
      },
      {
        q: "Wat is een **algoritme**?",
        options: ["Stappenplan dat computer volgt om iets te beslissen", "Computer-virus", "Wachtwoord", "Internet-kabel"],
        answer: 0,
        wrongHints: [null, "Klopt — bv. TikTok-algoritme beslist welke video's je ziet.", "Niet — virus is schadelijk programma.", "Wachtwoord is jouw geheim.", "Kabel is hardware."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een algoritme?", tekst: "Een **algoritme** is een **stappenplan** dat een computer (of mens) volgt om iets te beslissen of berekenen. Letterlijk: 'recept' voor het oplossen van een probleem.\n\nGenoemd naar de Perzische wiskundige **Al-Khwarizmi** (~825 jaar geleden) — uitvinder van algebra." },
            { titel: "Voorbeelden van algoritmen", tekst: "• **Recept**: pannenkoek bakken = algoritme van stappen\n• **TikTok**: kiest welke video's je ziet op basis van wat je leuk vond\n• **YouTube**: 'Aanbevolen voor jou' = algoritme\n• **Google Maps**: berekent snelste route\n• **Bank**: bepaalt of je een lening krijgt\n• **AI/ChatGPT**: heel complex algoritme dat tekst voorspelt" },
            { titel: "Cito-feit: algoritmes + macht", tekst: "Algoritmen zijn **niet neutraal** — ze maken beslissingen die ons leven raken:\n• Wat zie je op social media? (algoritme kiest)\n• Krijg je een lening? (algoritme adviseert)\n• Word je aangenomen voor een baan? (CV-algoritme filtert)\n\nDaarom debat in Nederland over **AI-wet** + **algoritme-transparantie**: mensen moeten weten WAT algoritmes met hun data doen." },
          ],
          woorden: [
            { woord: "algoritme", uitleg: "Stappenplan voor een computer om iets te beslissen of berekenen." },
            { woord: "kunstmatige intelligentie (AI)", uitleg: "Computers die zelf leren en beslissingen maken — gebaseerd op algoritmes + grote hoeveelheden data." },
            { woord: "data", uitleg: "Informatie — gebruikt door algoritmes om beslissingen te trainen." },
          ],
          theorie: "Bekende algoritme-toepassingen 2024+:\n• **ChatGPT / Claude / Gemini** — taal-AI\n• **TikTok-feed** — content-aanbeveling\n• **Spotify Discover Weekly** — muziek-aanbeveling\n• **Netflix-aanbevelingen**\n• **Belastingdienst-fraudedetectie** (de 'toeslagenaffaire' was algoritme-fout!)\n• **Politie-criminaliteit-voorspelling**\n• **DigiD-inloggen** — checkt of jij echt jij bent",
          voorbeelden: [
            { type: "feit", tekst: "TikTok-algoritme is zo goed dat veel mensen er uren in blijven hangen. Critici: dit is bewust verslavend gemaakt." },
            { type: "feit", tekst: "Toeslagenaffaire (2013-2021): NL-Belastingdienst-algoritme bestempelde duizenden ouders onterecht als fraudeur. Mensen verloren huis, kinderen uit huis geplaatst. Algoritme-fout met mensen-gevolgen." },
          ],
          basiskennis: [{ onderwerp: "Niet eng", uitleg: "Algoritmen zijn overal en meestal nuttig. Wel goed om te WETEN dat ze er zijn + dat ze niet altijd kloppen." }],
          niveaus: { basis: "Stappenplan computer. = A.", simpeler: "Algoritme = stappenplan dat computer volgt om iets te beslissen of berekenen. Bv. welke TikTok-video je ziet of welke route Google Maps kiest. = A.", nogSimpeler: "Stappenplan = A." },
        },
      },
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
